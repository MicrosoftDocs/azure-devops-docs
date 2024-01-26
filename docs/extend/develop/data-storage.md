---
ms.subservice: azure-devops-ecosystem
title: Data and Setting Storage | Extensions for Azure DevOps
description: DevOps extensions can store user preferences and complex data structures just like other project data. Use REST APIs or a Microsoft client service to do so.
ms.assetid: 4662d1cf-ddb6-4079-8eb4-6f553861c1b4
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 11/28/2023
---

# Data storage

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure DevOps extensions can store user preferences and complex data structures directly on Microsoft-provided infrastructure, which ensures your user's data is secure and backed up just like other organization and project data. It also means for simple data storage needs, you, as the extension provider, aren't required to set up, manage, or pay for third-party data storage services.

There are two methods to engage with the data storage service: through REST APIs or via a client service provided by Microsoft, which is part of the VSS SDK. We advise extension developers to utilize the provided client service APIs, as they offer a user-friendly encapsulation of the REST APIs.

[!INCLUDE [rest-api-docs-rollout](../../includes/rest-api-docs-rollout.md)]

### What you can store

The service is designed to let you store and manage two different types of data:

- **Settings**: simple key-value settings (like user preferences)
- **Documents**: collections of similar complex objects (documents)

A collection is as an indexed container for documents. A document is a JSON blob that belongs to a collection. Other than a few reserved property names, you control and manage the schema of these documents.

### How you can scope data

Settings and document collections can be scoped to either the:

- **Project Collection**: shared by all users of the project collection to which the extension is installed
- **User**: a single user of a project collection to which the extension is installed

## Settings storage

The two main methods for managing settings are `getValue()` and `setValue()`:

* `getValue()` accepts a string key (along with other options like scope) and returns an IPromise. The resolved value of this promise is the value associated with the provided key.
* `setValue()` accepts a string key, a value, and other options such as scope, and returns an IPromise. The resolved value of this promise is the updated value of the setting.

Here's an example of how to set a value:

```js
        private async initializeState(): Promise<void> {
        await SDK.ready();
        const accessToken = await SDK.getAccessToken();
        const extDataService = await SDK.getService<IExtensionDataService>(CommonServiceIds.ExtensionDataService);
        this._dataManager = await extDataService.getExtensionDataManager(SDK.getExtensionContext().id, accessToken);

        this._dataManager.getValue<string>("test-id").then((data) => {
            this.setState({
                dataText: data,
                persistedText: data,
                ready: true
            });
        }, () => {
            this.setState({
                dataText: "",
                ready: true
            });
        });
    }
```

Here's an example of how to retrieve a setting value:

```js
    // Get data service
    SDK.getService(SDK.getContributionId()).then(function(dataService) {
        // Get value in user scope
        dataService.getValue("userScopedKey", {scopeType: "User"}).then(function(value) {
            console.log("User scoped key value is " + value);
        });
    });
```

If `scopeType` isn't specified, the settings are stored at the project collection level and they're accessible to all users in that project collection using the extension.
Here's an example of how to set a setting value at the project collection level:

```js
    // Get data service
    SDK.getService(SDK.getContributionId()).then(function(dataService) {
        // Set value (default is project collection scope)
        dataService.setValue("someKey", "abcd-efgh").then(function(value) {
            console.log("Key value is " + value);
        });
    });
```

## Data (collections of documents) storage

To handle more complex data beyond key-value pairs, you can utilize the concept of documents to execute CRUD operations on your extension's data. A document is a JSON blob, enhanced with two special properties: ID and `__etag`. If they're crucial to an extension's data model, IDs can be user-defined, or if left unspecified, the system generates them. These IDs must be unique within a specific collection. Since a collection refers to a particular scope and instance of an extension, it implies that the same document ID can be reused across different collections.

The following document operations are available:

* Get a document
* Create a document
* Set a document (create or update)
* Update a document
* Delete a document

There's also a single operation that can be performed on a collection: Get all documents

### Get a document by ID

Obtaining a document from a collection using its identifier is straightforward, like the following example:

```js
    // Acquire data service
    SDK.getService(SDK.getContributionId()).then(function(dataService) {
        // Retrieve document by id
        dataService.getDocument("MyCollection", "MyDocumentId").then(function(doc) {
            // Assuming document has a property named foo
            console.log("Doc foo: " + doc.foo);
        });
    });
```

This operation tries to fetch a document with the ID "MyDocumentId" from the "MyCollection" collection. In the absence of a provided scope, the service defaults to using the collection scoped to the entire instance of this extension. If either this collection or a document with the specified ID doesn't exist, a 404 error is returned, which the extension should handle. The returned document is a JSON object that includes all its properties, along with the special ID and `__etag` properties utilized by the data storage service.

```js
    // Get data service
    SDK.getService(SDK.getContributionId()).then(function(dataService) {
        // Get document by id
        dataService.getDocument("MyCollection", "MyDocumentId").then(function(doc) {
            // Assuming document has a property named foo
            console.log("Doc foo: " + doc.foo);
        });
    });
```

This call attempts to retrieve a document with the ID "MyDocumentId," from the collection "MyCollection." Since no scope is provided, the collection that the service uses gets scoped to the default of the entire instance of this extension. If this collection doesn't exist or a document with that ID doesn't exist, then a 404 gets returned, which the extension should handle. The document that is returned is a JSON object containing all of its own properties, in addition to the special ID and `__etag` properties used by the data storage service.

### Create a document

To create a new document, perform a call like the following example:

```js
    // Get data service
    SDK.getService(SDK.getContributionId()).then(function(dataService) {
        // Prepare document first
        var newDoc = {
            fullScreen: false,
            screenWidth: 500
        };

        dataService.createDocument("MyCollection", newDoc).then(function(doc) {
            // Even if no ID was passed to createDocument, one gets generated
            console.log("Doc id: " + doc.id);
        });
    });
```


If the collection with the name and scope provided, doesn't yet exist, it gets created dynamically before the document itself is created.

If the document provided contains an `id` property, that value gets used as the unique ID for the document. Please note that the provided `id` should be limited to 50 characters. If that field doesn't exist, a GUID gets generated by the service and included on the document that is returned when the promise is resolved.

If another document in the collection already exists with the same ID as the one provided on the document, the operation fails. If the desired behavior is create a new document if the ID doesn't exist, but modify the existing document if it does, then the `setDocument()` method should be used.

### Set a document (update or create)

The `setDocument()` function carries out an "upsert" operation - it modifies an existing document if its ID is present and matches a document in the collection. If the ID is absent or doesn't correspond to any document in the collection, then a new document is added to the collection.

```js
    // Get data service
    SDK.getService(SDK.getContributionId()).then(function(dataService) {
        // Prepare document first
        var myDoc = {
            id: 1,
            fullScreen: false,
            screenWidth: 500
        };

        dataService.setDocument("MyCollection", myDoc).then(function(doc) {
            console.log("Doc id: " + doc.id);
        });
    });

```

### Update a document

The `updateDocument` function requires that the document being altered already resides in the collection. An exception is thrown if no ID is supplied or if the provided ID doesn't correspond to any document in the collection.

Here's an example of how update is used:

```js
    // Get data service
    SDK.getService(SDK.getContributionId()).then(function(dataService) {
        var collection = "MyCollection";
        var docId = "1234-4567-8910";
        // Get document first
        dataService.getDocument(collection, docId, { scopeType: "User" }).then(function(doc) {
            // Update the document
            doc.name = "John Doe";
            dataService.updateDocument(collection, doc, { scopeType: "User" }).then(function(d) {
                // Check the new version
                console.log("Doc version: " + d.__etag);
            });
        });
    });
```

### Delete a document

This function deletes the document with the provided ID from the provided collection. If the collection doesn't exist or the document doesn't exist, a 404 gets returned.

Here's an example usage:
```js
    // Get data service
    SDK.getService(SDK.getContributionId()).then(function(dataService) {
        var docId = "1234-4567-8910";
        // Delete document
        dataService.deleteDocument("MyCollection", docId).then(function() {
            console.log("Doc deleted");
        });
    });
```

### Get all documents in a collection

The following example retrieves all documents from the "MyCollection" collection using the data service, and then logs the number of documents to the console:

```js
    // Get data service
    SDK.getService(SDK.getContributionId()).then(function(dataService) {
        // Get all document under the collection
        dataService.getDocuments("MyCollection").then(function(docs) {
            console.log("There are " + docs.length + " in the collection.");
        });
    });

```

This call retrieves all documents in a scoped collection, with a limit of 100,000 documents. If the collection is nonexistent, it returns a 404 error.

### Advanced

#### How settings get stored

This call encapsulates the `setDocument` client method, supplying it with multiple pieces of data. As stated before, settings are internally saved as documents. Therefore, a basic document is dynamically generated, where the document's ID is the key given in the `setValue()` method. The document has two more properties. The `value` property holds the value passed to the method, and the `revision` property is set to `-1`. While the `revision` property is elaborated more in the "Working with Documents" section, in the context of settings, setting `revision` to `-1` in the document signifies that we're not concerned with the versioning of this settings document.

Because settings are stored as documents, we need to provide a collection name, indicating where to store the document. To keep things simple, when working with the `setValue()`/`getValue()` methods, the collection name is always the special name `$settings`. The previous call issues a PUT Request at the following endpoint:

```httprequest
GET _apis/ExtensionManagement/InstalledExtensions/{publisherName}/{extensionName}/Data/Scopes/User/Me/Collections/%24settings/Documents
```

The request payload is like the following example:

```json
{
                "id": "myKey",
                "__etag": -1,
                "value": "myValue"
}
```
#### REST APIs

Assuming this snippet is executed after the value is set, you should see an alert message containing the text "The value is myValue." The getValue method is again a wrapper around the REST APIs, issuing a GET request to the following endpoint:

```httprequest
GET _apis/ExtensionManagement/InstalledExtensions/{publisherName}/{extensionName}/Data/Scopes/User/Me/Collections/%24settings/Documents/myKey
```

#### etags

The `__etag` field is used by the Data Storage Service for document concurrency management. Before an update is saved, the service verifies that the `__etag` of the currently stored document matches the `__etag` of the updated document. If they match, the `__etag` is incremented and the updated document is returned to the caller. If they don't match, it indicates that the document to be updated is outdated, and an exception is thrown. The extension writer is responsible for handling this exception gracefully, either by retrieving the latest `__etag` of the document, merging the changes, and retrying the update, or by notifying the user.

For some types of documents, the level of concurrency provided might not be necessary, and a last-in-wins model might be more suitable. In such cases, while editing the document, input -1 as the `__etag` value to signify this functionality. The previously mentioned settings service employs this model for storing settings and preferences.
