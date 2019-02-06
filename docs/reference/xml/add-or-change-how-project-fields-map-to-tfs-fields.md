---
title: Change how Project fields map to fields
titleSuffix: Azure DevOps Server & TFS
description: Customize how data is published and refreshed by modifying the Microsoft Project mapping file for Azure DevOps Server or Team Foundation Server (TFS)  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 0d7ae7ad-a329-4356-a0b2-57d31a96f16f
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.topic: reference
monikerRange: '< azure-devops'
ms.date: 01/28/2019
---

# Add or change how Project fields map to TFS fields

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]  

You can customize how data is published and refreshed by modifying the Microsoft Project mapping file. When publishing or refreshing tasks in Project, the mapping file determines how Project task fields map to  Azure DevOps Server or Team Foundation Server (TFS) work item fields. Also, the mapping file controls the publishing behavior.  
  
> [!IMPORTANT]  
>  If you are using Project Professional to synchronize tasks with work item data, then you must [Customize the field mapping between work items and Project Server](../tfs-ps-sync/customize-field-mapping-tfs-project-server.md). You can't make these customizations for Azure DevOps Services (cloud service). 
  
 You can customize the behavior when tasks are published or refreshed. You can change which fields in Team Foundation are mapped to Microsoft Project fields. You can control if fields are only published, or both published and refreshed.  
  
-   [Customize the Microsoft Project field mapping file](customize-project-field-mapping-file.md)  
  
     **Change the way Project fields map and are published or refreshed in Team Foundation.** You can customize the way in which fields are defined for work items that are stored in Team Foundation and that are mapped to fields that are defined for Microsoft Project. You can change the way specific fields are published and designate the default link type to use when you create hierarchical or tree links and dependency links.  
  
-   [Field mappings in Microsoft Project](field-mappings-in-microsoft-project.md)  
  
     **Review the types of Office Project fields that can be mapped to Team Foundation**. You can find specific support information about how to map Team Foundation fields and Microsoft Project fields.  
  
-   [Create your backlog and tasks using Project](../../boards/backlogs/office/create-your-backlog-tasks-using-project.md)  
  
     **Understand how fields map between Project and work tracking**. You can understand how data in your office project plan maps to work items in Team Foundation by viewing the Microsoft Project column mappings. The mappings identify which Microsoft Project column maps to a field in Team Foundation.  
  
-   [TFSFieldMapping](upload-or-download-the-microsoft-project-mapping-file.md)  
  
     **Use the TFSFieldMapping command**. To modify the Microsoft Project field mapping file for a project, you must first download the file.  
  
## Related articles 
-  [Address inaccuracies published for summary values](../../report/sql-reports/address-inaccuracies-published-for-summary-values.md)   
-  [Work in Excel and Project](../../boards/backlogs/office/track-work.md)   
-  [Create your backlog and tasks using Project](../../boards/backlogs/office/create-your-backlog-tasks-using-project.md)