---
title: Differences between process customizations
titleSuffix: Azure DevOps Services  
description: Summary of what you can and can't customize in a process template to support customized work tracking in Azure DevOps Services.
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 2B500AEA-165C-428D-B580-C9C0A8D01635
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 03/20/2018
---

# Process template customizations differences between Azure DevOps Services and TFS  

**Azure DevOps Services (Hosted XML)**
 
> [!IMPORTANT]  
> Import process supports the Hosted XML process model which allows you to manage customizations through updating select XML definition files of a process template. This feature is only available for organizations that have been migrated to Azure DevOps Services using the [TFS Data Import Service](https://aka.ms/TFSDataImport). [Contact us](mailto:dahellem@microsoft.com) if you have any questions about Azure DevOps Services process customization. 
>
> If you use the Inheritance process model, you can customize your work tracking through the user interface by [creating an Inheritance process](../manage-process.md). If you use the On-premises XML process model, you can customize a process template, see [Upload or download a process template](../../../../boards/work-items/guidance/manage-process-templates.md) and [Customize a process template](../../../../reference/process-templates/customize-process.md).
>
>To learn more about process models, see [Customize work tracking](../../../../reference/customize-work.md).  

Azure DevOps Services uses a different model than Team Foundation Server (TFS) for relating projects and process.  
* In TFS, process templates are used as starting points for projects and once a project is created, the project is the scope you customize.
* In Azure DevOps Services, process is shared across multiple projects and is the scope you customize.  
 
The structure and overall syntax used in defining process templates remains the same, with only a few minor differences existing between templates you customize for import into Azure DevOps Services and those you upload to support an on-premises TFS.  

## Unsupported customizations and unreferenced plug-in files

Any reference to the following objects in any of the XML definition files result in a validation error upon import.  
*   Custom controls on work item forms  
*   Custom link types  
*   Global workflow 
*   Team field support
*   for and not rules support

The following plug-ins and their associated files aren't used in defining a process, nor used to update existing projects. 
However, they are used to create objects or artifacts when you create a new project.  
*   Classification      
*   Work item queries (defined using the WIQL syntax)  
*   Test Management
*   Work items  <!--- TBD --> 

> [!NOTE]    
> The WIQL length must not exceed 32K characters. The system won't allow you to create or run queries that exceed that length.   

The following plug-ins and their associated files are replaced by system defaults.  
*   Build    
*   Groups and Permissions
*   Lab  
*   Version Control   

The following plug-ins and their associated files are ignored.  
*   Microsoft Project Mappings
*   Reports  
*   Windows SharePoint Services  

Custom plug-ins aren't supported. 

## Object limits 
When customizing a process template for import, limit the number of the objects you define as specified in [Work tracking object limits](../object-limits.md).  

<!---
## Tools with limited support 
When you connect to Azure DevOps Services, you can use the following tools subject to limitations:   

- [Visual Studio Process Template Manager](../../../../boards/work-items/guidance/manage-process-templates.md): You can download a process template, but all other functions are disabled.   
- Process Editor: You can use select functions to view or export a WIT definition or global list, or use the Work Item Field Explorer. Access is denied to save modified WIT and global list definitions.  
- **witadmin** command line tool: Select commands, such as export and list commands, work when connected to Azure DevOps Services. Review [witAdmin: Customize and manage objects for tracking work](../../../../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md) for which commands are supported.

-->

## Related articles

- [Work tracking object limits](../object-limits.md)   
- [Customize work tracking](../../../../reference/customize-work.md) 
