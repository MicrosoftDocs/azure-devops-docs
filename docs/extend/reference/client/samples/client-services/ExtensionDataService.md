---
ms.prod: devops
ms.technology: devops-ecosystem
title: VSTS Extension Data Service Example
description: A sample that shows how to use a extension data service with a VSTS extension
ms.assetid: 4e66185f-a91d-4e2b-82b8-fd43f3db9fb6
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.topic: article
ms.manager: douge
monikerRange: '>= tfs-2017'
ms.date: 08/25/2016
---

# VSTS Extension Data Service Example

VSTS extension data service sample -- getting the data service

```js
	// Get the data service
	VSS.getService(VSS.ServiceIds.ExtensionData).then(function(dataService) {
		// Set a user-scoped preference
		dataService.setValue("pref1", 12345, {scopeType: "User"}).then(function(value) {
		    console.log("User preference value is " + value);
		});		
		// Get an account-scoped document in a collection
		dataService.getDocument("MyCollection", "SomeDocumentId").then(function(doc) {
		    console.log("Document is " + JSON.stringify(doc, null, 2));
		});
	});
```

See [store and manage data](../../../../develop/data-storage.md) to learn more about storing user preferences and collections of documents.
