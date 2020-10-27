```js
	// Get the data service
	VSS.getService(VSS.ServiceIds.ExtensionData).then(function(dataService) {
		// Set a user-scoped preference
		dataService.setValue("pref1", 12345, {scopeType: "User"}).then(function(value) {
		    console.log("User preference value is " + value);
		});		
		// Get an organization-scoped document in a collection
		dataService.getDocument("MyCollection", "SomeDocumentId").then(function(doc) {
		    console.log("Document is " + JSON.stringify(doc, null, 2));
		});
	});
```

See [store and manage data](../../../../../extend/develop/data-storage.md) to learn more about storing user preferences and collections of documents.