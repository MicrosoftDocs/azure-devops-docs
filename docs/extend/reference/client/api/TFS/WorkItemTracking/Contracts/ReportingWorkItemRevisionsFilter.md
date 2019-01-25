---
title: TFS/WorkItemTracking/Contracts ReportingWorkItemRevisionsFilter API | Extensions for Azure DevOps Services
ms.assetid: a1bdcaaa-1d82-74c4-a27e-a44c821aafa9
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# ReportingWorkItemRevisionsFilter

Module path: `TFS/WorkItemTracking/Contracts`


### Members

* `fields`: string[]. A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.

* `includeIdentityRef`: boolean. Return an identity reference instead of a string value for identity fields.

* `types`: string[]. A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.

