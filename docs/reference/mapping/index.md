---
title: Microsoft Project Mapping File documentation
titleSuffix: TFS   
description: Index to topics for customizing the mapping of fields between Microsoft Project and Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: F6973385-2CEF-403A-B3AA-45DB7C436AF1
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '<= tfs-2018'
ms.date: 05/06/2019
---

# Microsoft Project Mapping File

[!INCLUDE [temp](../../_shared/version-tfs-2018-earlier.md)] 

You can customize how data is published and refreshed by modifying the Microsoft Project mapping file. When publishing or refreshing tasks in Project, the mapping file determines how Project task fields map to Team Foundation Server (TFS) work item fields. Also, the mapping file controls the publishing behavior. You can control if fields are only published, or both published and refreshed.   

[!INCLUDE [temp](../xml/_shared/project-integration-deprecated.md)]

::: moniker range="<= tfs-2015"

> [!IMPORTANT]  
>  If you are using Project Professional to synchronize tasks with work item data, then you must [Customize the field mapping between work items and Project Server](../tfs-ps-sync/customize-field-mapping-tfs-project-server.md). 

::: moniker-end 

## How-to Guides

- [Customize the Project field mapping file](../xml/customize-project-field-mapping-file.md)  
- [Upload or download the Microsoft Project Mapping file](../xml/upload-or-download-the-microsoft-project-mapping-file.md)  
 
## Reference  

- [Map Project fields](../xml/map-microsoft-project-fields-to-tf-fields.md)  
- [Project field mappings](../xml/field-mappings-in-microsoft-project.md)  

## Related articles 

-  [Address inaccuracies published for summary values](../../report/sql-reports/address-inaccuracies-published-for-summary-values.md)   
-  [Work in Excel and Project](../../boards/backlogs/office/track-work.md)   
-  [Create your backlog and tasks using Project](../../boards/backlogs/office/create-your-backlog-tasks-using-project.md)