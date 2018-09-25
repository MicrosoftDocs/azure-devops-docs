---
title: WIT Batch | REST API Reference for Team Foundation Server
description: Edit or change multiple work items programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 0f4a6185-6518-4bda-a5b6-2eddf0319afe
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item batch operations
[!INCLUDE [API_version](../_data/version.md)]

This api is designed to be used when multiple calls to create or modify work items should be made in one "batch" call.  For example, if a large number of work items are all being updated at once, or if two work items are being created and linked together. 

This API wraps multiple PATCH calls in one POST call. The body of this POST call contains all the information that would be necessary for each individual PATCH call: method, url, header, and body. 

When making multiple calls in the body of a batch call, you must specify temporary work item IDs so that the resulting work items can be referenced by other calls.  Negative numbers are used for this as seen in [the second example](#createtwoworkitemsandlinkthemtogether).

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Create and edit multiple work items in a single call 

Multiple calls using the [work item apis](work-items.md) can be made simultaneously by wrapping them in a batch call.

```no-highlight
POST https://{instance}/defaultcollection/_apis/wit/$batch 
```

| Parameter | Type		| Notes	
|:----------|:----------|:------------------------------
| URL
| instance  | string	| TFS server name ({server:port}).
| project   | string	| Name or ID of a project.
| Body
| method	| string	| API Verb: PATCH (Currently only create/update requests are supported)
| uri		| string	| The url you would use for the call if it were being made independently. 
| headers	| JSON dictionary | The header you would include in the call if it were being made independently. At a minimum, this must include `"Content-Type": "application/json-patch+json"`.
| body		| JSON		| The JSON body you would include in the call if it were being made independently. 

```http
Content-Type: application/json
```
```json
[
	{
		"method": { string },
		"uri": { string },
		"headers": { "Content-Type": "application/json-patch+json" },
		"body":[{ JSON }]
	},
	{
		"method": { string },
		"uri": { string },
		"headers": { "Content-Type": "application/json-patch+json" },
		"body":[{ JSON }]
	}
]
```

### Create two work items and link them together
<a name="createtwoworkitemsandlinkthemtogether" />

Using the work item apis for [creating a work item](work-items.md#create-work-item) and [a work item link](work-items.md#withaworkitemlink) we can create two new work items and make one the child of the other.

[!code-REST [POST__wit__batch_json](./_data/batch/POST__wit__batch.json)]

### Edit multiple work items
<a name="editmultipleworkitems" />

Using the Work Item api for [updating a field](work-items.md#updateafield), we can update two work items to change their status to "Removed".

[!code-REST [POST__wit__batch2_json](./_data/batch/POST__wit__batch2.json)]

### Moving multiple work items

> **API Availability**: Team Services only (not TFS)
 
Using the Work Item api for [moving a work item](work-items.md#moveworkitem), we can move two work items to project "Fabrikam-Scrum".

[!code-REST [POST__wit__batch2_json](./_data/witChangeProjectAndType/POST__wit__batch.json)]


### Change work item type for multiple work items

> **API Availability**: Team Services only (not TFS)

Using the Work Item api for [changing a work item type](work-items.md#changeworkitemtype), we can update two work items to change their work item type to "Task".

[!code-REST [POST__wit__batch2_json](./_data/witChangeProjectAndType/POST__wit__batch2.json)]




