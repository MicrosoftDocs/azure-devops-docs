---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Tracking Overview | REST API Reference for Team Foundation Server
description: Work with work item tracking programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 4b6ac3ad-7de0-4137-8b80-8a4b44f4107f
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item tracking

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]


## Work item tracking resources

Get, create, and update bugs, tasks, and other [work items](./work-items.md) for your team.
[Queries](./queries.md) allow you to use the full power of the work item query language to search for and filter work items.
You can use the [work item query language](./wiql.md) to get to each work item that satisfies the query.
Work items retain a full history, and you can get each full [revision](./revisions.md) of the work item, or just the [updates](./updates.md) that were made in each revision.
Work items can also be [tagged](./tags.md).

* [Attachments](./attachments.md)
* [Batch](./batch.md)
* [Comments](./comments.md)
* [Queries](./queries.md)
* [Recycle Bin](./recycle-bin.md)
* [Reporting Work Item Links](./reporting-work-item-links.md)
* [Reporting Work Item Revisions](./reporting-work-item-revisions.md)
* [Revisions](./revisions.md)
* [Tags](./tags.md)
* [Updates](./updates.md)
* [WIQL](./wiql.md)
* [Work items](./work-items.md)

## Work item metadata resources

Work items are governed by metadata.
Some of the metadata is scoped to a specific project, and other metadata is scoped to a project collection (like your VSTS organization's default collection).

### Project-scoped metadata

Your project has a set of [work item types](./work-item-types.md). Each work item type may belong to a [category](./categories.md) such as "requirement" or 
"bug" to define its role in the project.
[Classification nodes](./classification-nodes.md) define the set of values that can be used in the area and iteration fields for the work items in the project.

* [Categories](./categories.md)
* [Classification nodes](./classification-nodes.md) (areas and iterations)
* [Work Item Types](./work-item-types.md)

### Collection-scoped metadata

Work item types share [fields](./fields.md) and [relation types (links and attachments)](./relation-types.md) with other types of work items.

* [Fields](./fields.md)
* [Relation types](./relation-types.md)

## Common tasks

### Get work items using a query
1. Look up the [query](./queries.md) that you want to use.
2. Get the [results](./wiql.md) for that query.
3. Get each of the [work items by ID](./work-items.md#byids).

### Update a work item's fields
1. Get the ID of the [work item](./work-items.md) that you want to update.
2. [Update the fields](./work-items.md#updateafield) of the work item.

### Update multiple work items' fields
1. Get the IDs of the [work items](work-items.md) that you want to update.
2. Update the fields using a [batch call](batch.md#editmultipleworkitems) of the work items.

### Link two work items
1. Get the ID of the [work items](./work-items.md) that you want to link.
2. [Add a link](./work-items.md#addalink) between the work items.

### Create two work items and link them
Use the [create a work item](work-items.md#create-work-item) and [add a link](work-items.md#addalink) APIs in a [batch](batch.md#createtwoworkitemsandlinkthemtogether) call.

### Attach a file to a work item
1. Get the ID of the [work item](./work-items.md) that you want to update.
2. [Upload the attachment](./attachments.md#uploadanattachment) to the attachment store.
3. [Add the attachment](./work-items.md#addanattachment) to the work item.

### Create a work item
[Create a work item](./work-items.md#create-work-item).
Make sure you provide at least a title. Some types of work items will require values for other fields.

### Get a work item's discussion history
1. Get the ID of the [work item](./work-items.md).
2. Get the work item's [discussion history](./history.md#getalistofalldiscussionhistory).

### Get a work item's full history
1. Get the ID of the [work item](./work-items.md).
2. Get a list of [updates](./updates.md) made to a work item.
3. Get the whole work item as it appeared in any [revision](./revisions.md).

### Delete a work item
1. Get the ID of the [work item](./work-items.md).
2. [Delete the work item](./work-items.md#deleteaworkitem).

### Restore a work item
1. Get the list of items in the [recycle bin](./recycle-bin.md#getalistofdeleteditemsintherecyclebin).
2. [Restore a work item](./recycle-bin.md#restoreaworkitem).

### Tag a work item
1. Get the ID of the [work item](./work-items.md) that you want to update.
2. Get the ID of the [tag](./tags.md#byname) that you want to add. If it doesn't exist, [create](./tags.md#createatag) it.
3. Add the tag to the work item by [updating the tags field](./work-items.md#addatag).

### Get the fields used in a project
1. Get the [types of work items](./work-item-types.md#getalistofworkitemtypes) used in a project.
2. Get each [work item type](./work-item-types.md#getaworkitemtype) to see the fields that it uses. (Skip past the xmlForm to fieldInstances.)

### Get categories of work items
Use [categories of work items](./categories.md#getalistofworkitemtypecategories) to get the types of work items used in a project for different functions.
For example, to see the work items that appear on the backlog, get the requirements [category](./categories.md#getaworkitemtypecategory).

### Get areas and iterations
Get the [area hierarchy](classification-nodes.md#gettheareatreewith2levelsofchildren) or [iteration hierarchy](./classification-nodes.md#gettheiterationtreewith2levelsofchildren) for your project.

### Get types of work item relations
Get the available [types of work item links](./relation-types.md#getalistofrelationtypes) that are available in your project collection.
