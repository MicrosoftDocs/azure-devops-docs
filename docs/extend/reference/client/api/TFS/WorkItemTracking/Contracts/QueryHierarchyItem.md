---
title: TFS/WorkItemTracking/Contracts QueryHierarchyItem API | Extensions for Azure DevOps Services
ms.assetid: e69d2c6c-0939-59fc-ff0e-9f646801dbd2
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# QueryHierarchyItem

Module path: `TFS/WorkItemTracking/Contracts`

Extends: [WorkItemTrackingResource](../../../TFS/WorkItemTracking/Contracts/WorkItemTrackingResource.md)

### Members

* `children`: [QueryHierarchyItem](../../../TFS/WorkItemTracking/Contracts/QueryHierarchyItem.md)[]. 

* `clauses`: [WorkItemQueryClause](../../../TFS/WorkItemTracking/Contracts/WorkItemQueryClause.md). 

* `columns`: [WorkItemFieldReference](../../../TFS/WorkItemTracking/Contracts/WorkItemFieldReference.md)[]. 

* `filterOptions`: [LinkQueryMode](../../../TFS/WorkItemTracking/Contracts/LinkQueryMode.md). 

* `hasChildren`: boolean. 

* `id`: string. 

* `isDeleted`: boolean. 

* `isFolder`: boolean. 

* `isInvalidSyntax`: boolean. 

* `isPublic`: boolean. 

* `linkClauses`: [WorkItemQueryClause](../../../TFS/WorkItemTracking/Contracts/WorkItemQueryClause.md). 

* `name`: string. 

* `path`: string. 

* `queryType`: [QueryType](../../../TFS/WorkItemTracking/Contracts/QueryType.md). 

* `sortColumns`: [WorkItemQuerySortColumn](../../../TFS/WorkItemTracking/Contracts/WorkItemQuerySortColumn.md)[]. 

* `sourceClauses`: [WorkItemQueryClause](../../../TFS/WorkItemTracking/Contracts/WorkItemQueryClause.md). 

* `targetClauses`: [WorkItemQueryClause](../../../TFS/WorkItemTracking/Contracts/WorkItemQueryClause.md). 

* `wiql`: string. 

