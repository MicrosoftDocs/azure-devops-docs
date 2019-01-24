---
title: VSS/SDK/Services/ExtensionData ExtensionDataService API | Extensions for Azure DevOps Services
description: Provides a wrapper around the REST client for getting and saving extension setting values
ms.assetid: 40a987e0-ade7-1b69-b246-fe2a259e59bc
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: article
monikerRange: '>= tfs-2017'
ms.date: 08/04/2016
---


# ExtensionDataService

Provides a wrapper around the REST client for getting and saving extension setting values

## Example
[!INCLUDE [x](../../../../../samples/client-services/ExtensionDataService.md)]

## Methods

* [getServiceInstance()](#method_getServiceInstance)
* [getValue&lt;T&gt;()](#method_getValue)
* [setValue&lt;T&gt;()](#method_setValue)
* [getDocument()](#method_getDocument)
* [getDocuments()](#method_getDocuments)
* [createDocument()](#method_createDocument)
* [setDocument()](#method_setDocument)
* [updateDocument()](#method_updateDocument)
* [deleteDocument()](#method_deleteDocument)
* [queryCollectionNames()](#method_queryCollectionNames)
* [queryCollections()](#method_queryCollections)

<a name="method_getServiceInstance"></a>
### getServiceInstance()

Factory method for creating/getting an instance of the extension settings service.

#### Syntax
<pre class='syntax'>
 ExtensionDataService <b>getServiceInstance</b>(publisherName, extensionName, registrationId, webContext)
</pre>

#### Parameters

* `publisherName`: string. 
* `extensionName`: string. 
* `registrationId`: string. 
* `webContext`: [Contracts_Platform.WebContext](../../../../VSS/Common/Contracts/Platform/WebContext.md). Optional. 

#### Returns

* [ExtensionDataService](../../../../VSS/SDK/Services/ExtensionData/ExtensionDataService.md)

<a name="method_getValue"></a>
### getValue<T>()

Returns a promise for retrieving a setting at the provided key and scope

#### Syntax
<pre class='syntax'>
 IPromise&lt;T&gt; <b>getValue</b>(key, documentOptions)
</pre>

#### Parameters

* `key`: string. 
* `documentOptions`: [IDocumentOptions](../../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md). Optional. 

#### Returns

* [IPromise](../../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;T&gt;

<a name="method_setValue"></a>
### setValue<T>()

Returns a promise for saving a setting at the provided key and scope

#### Syntax
<pre class='syntax'>
 IPromise&lt;T&gt; <b>setValue</b>(key, value, documentOptions)
</pre>

#### Parameters

* `key`: string. 
* `value`: T. 
* `documentOptions`: [IDocumentOptions](../../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md). Optional. 

#### Returns

* [IPromise](../../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;T&gt;

<a name="method_getDocument"></a>
### getDocument()

Returns a promise for getting a document with the provided ID in the provided collection

#### Syntax
<pre class='syntax'>
 IPromise&lt;any&gt; <b>getDocument</b>(collectionName, id, documentOptions)
</pre>

#### Parameters

* `collectionName`: string. The name of the collection where the document lives
* `id`: string. The ID of the document in the collection
* `documentOptions`: [IDocumentOptions](../../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md). Optional. The scope in which the value is stored - default value is organization-wide

#### Returns

* [IPromise](../../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;any&gt;

<a name="method_getDocuments"></a>
### getDocuments()

Returns a promise for getting all of the documents in the provided collection

#### Syntax
<pre class='syntax'>
 IPromise&lt;any[]&gt; <b>getDocuments</b>(collectionName, documentOptions)
</pre>

#### Parameters

* `collectionName`: string. The name of the collection where the document lives
* `documentOptions`: [IDocumentOptions](../../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md). Optional. The scope in which the value is stored - default value is organization-wide

#### Returns

* [IPromise](../../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;any[]&gt;

<a name="method_createDocument"></a>
### createDocument()

Returns a promise for creating a document in the provided collection

#### Syntax
<pre class='syntax'>
 IPromise&lt;any&gt; <b>createDocument</b>(collectionName, doc, documentOptions)
</pre>

#### Parameters

* `collectionName`: string. The name of the collection where the document lives
* `doc`: any. The document to store
* `documentOptions`: [IDocumentOptions](../../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md). Optional. The scope in which the value is stored - default value is organization-wide

#### Returns

* [IPromise](../../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;any&gt;

<a name="method_setDocument"></a>
### setDocument()

Returns a promise for setting a document in the provided collection
Creates the document if it does not exist, otherwise updates the existing document with the ID provided

#### Syntax
<pre class='syntax'>
 IPromise&lt;any&gt; <b>setDocument</b>(collectionName, doc, documentOptions)
</pre>

#### Parameters

* `collectionName`: string. The name of the collection where the document lives
* `doc`: any. The document to store
* `documentOptions`: [IDocumentOptions](../../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md). Optional. The scope in which the value is stored - default value is organization-wide

#### Returns

* [IPromise](../../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;any&gt;

<a name="method_updateDocument"></a>
### updateDocument()

Returns a promise for updating a document in the provided collection
A document with the ID provided must exist

#### Syntax
<pre class='syntax'>
 IPromise&lt;any&gt; <b>updateDocument</b>(collectionName, doc, documentOptions)
</pre>

#### Parameters

* `collectionName`: string. The name of the collection where the document lives
* `doc`: any. The document to store
* `documentOptions`: [IDocumentOptions](../../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md). Optional. The scope in which the value is stored - default value is organization-wide

#### Returns

* [IPromise](../../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;any&gt;

<a name="method_deleteDocument"></a>
### deleteDocument()

Returns a promise for deleting the document at the provided scope, collection and id

#### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteDocument</b>(collectionName, id, documentOptions)
</pre>

#### Parameters

* `collectionName`: string. The name of the collection where the document lives
* `id`: string. The ID of the document in the collection
* `documentOptions`: [IDocumentOptions](../../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md). Optional. The scope in which the value is stored - default value is organization-wide

#### Returns

* [IPromise](../../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_queryCollectionNames"></a>
### queryCollectionNames()

Returns a promise for querying a set of collections

#### Syntax
<pre class='syntax'>
 IPromise&lt;ExtensionManagement_Contracts.ExtensionDataCollection[]&gt; <b>queryCollectionNames</b>(collectionNames)
</pre>

#### Parameters

* `collectionNames`: string[]. 

#### Returns

* [IPromise](../../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ExtensionManagement_Contracts.ExtensionDataCollection[]&gt;

<a name="method_queryCollections"></a>
### queryCollections()

Returns a promise for querying a set of collections

#### Syntax
<pre class='syntax'>
 IPromise&lt;ExtensionManagement_Contracts.ExtensionDataCollection[]&gt; <b>queryCollections</b>(collections)
</pre>

#### Parameters

* `collections`: ExtensionManagement_Contracts.ExtensionDataCollection[]. The list of collections to query. Each collection will contain its collectionName, scopeType, and scopeValue

#### Returns

* [IPromise](../../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ExtensionManagement_Contracts.ExtensionDataCollection[]&gt;

