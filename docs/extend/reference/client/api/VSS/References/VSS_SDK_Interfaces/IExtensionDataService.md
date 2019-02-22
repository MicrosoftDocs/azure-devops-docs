---
title: VSS/References/VSS.SDK.Interfaces IExtensionDataService API | Extensions for Azure DevOps Services
description: Service which allows for getting and setting of extension data
ms.assetid: 8692bca2-8ce7-a91f-d508-1f2f1535c4c7
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

# IExtensionDataService

Defined in vss.d.ts


Service which allows for getting and setting of extension data 

### Members

* `getValue`: (key: string, documentOptions: [IDocumentOptions](../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md)): IPromise&lt;T&gt;. Returns a promise for retrieving a setting at the provided key and scope

* `setValue`: (key: string, value: T, documentOptions: [IDocumentOptions](../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md)): IPromise&lt;T&gt;. Returns a promise for saving a setting at the provided key and scope

* `getDocument`: (collectionName: string, id: string, documentOptions: [IDocumentOptions](../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md)): IPromise&lt;any&gt;. Returns a promise for getting a document with the provided ID in the provided collection

* `getDocuments`: (collectionName: string, documentOptions: [IDocumentOptions](../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md)): IPromise&lt;any[]&gt;. Returns a promise for getting all of the documents in the provided collection

* `createDocument`: (collectionName: string, doc: any, documentOptions: [IDocumentOptions](../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md)): IPromise&lt;any&gt;. Returns a promise for creating a document in the provided collection

* `setDocument`: (collectionName: string, doc: any, documentOptions: [IDocumentOptions](../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md)): IPromise&lt;any&gt;. Returns a promise for setting a document in the provided collection
Creates the document if it does not exist, otherwise updates the existing document with the ID provided

* `updateDocument`: (collectionName: string, doc: any, documentOptions: [IDocumentOptions](../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md)): IPromise&lt;any&gt;. Returns a promise for updating a document in the provided collection
A document with the ID provided must exist

* `deleteDocument`: (collectionName: string, id: string, documentOptions: [IDocumentOptions](../../../VSS/References/VSS_SDK_Interfaces/IDocumentOptions.md)): IPromise&lt;void&gt;. Returns a promise for deleting the document at the provided scope, collection and id

