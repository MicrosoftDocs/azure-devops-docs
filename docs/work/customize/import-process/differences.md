---
title: Differences between cloud and on-premises process customizations | VSTS 
description: Summary of what you can and can't customize in a process template to support customized work tracking in Visual Studio Team Services (VSTS).
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: 2B500AEA-165C-428D-B580-C9C0A8D01635
ms.manager: douge
ms.author: kaelli
ms.date: 05/23/2017
---

# Differences between VSTS and TFS process template customizations  

<b>VSTS (Hosted XML)</b>   
 
>[!IMPORTANT]  
>**Feature availability:**&#160;&#160;Import process supports the Hosted XML process model which allows you to manage customizations through updating select XML definition files of a process template. This feature is only available for accounts that have been migrated to VSTS using the [TFS Data Import Service](https://aka.ms/TFSDataImport). [Contact us](mailto:vsocustpt@microsoft.com) if you have any questions about VSTS process customization. 
>
>If you use the Inheritance process model, you can customize your work tracking through the user interface by [creating an Inheritance process](../process/manage-process.md). If you use the On-premises XML process model, you can customize a process template, see [Upload or download a process template](../../work-items/guidance/manage-process-templates.md) and [Customize a process template](../reference/process-templates/customize-process.md).
>
>To learn more about process models, see [Customize work tracking](../customize-work.md).  

VSTS uses a different model than Team Foundation Server (TFS) for relating projects and process.  
* In TFS, process templates are used as starting points for projects and once a project is created, the project is the scope you customize.
* In VSTS, process is shared across multiple projects and is the scope you customize.  
 
The structure and overall syntax used in defining process templates remains the same, with only a few minor differences existing between templates you customize for import into VSTSand those you upload to support an on-premises TFS.  

## Unsupported customizations and unreferenced plug-in files


Any reference to the following objects in any of the XML definition files will result in a validation error upon import.  
*   Custom controls on work item forms  <!--- TBD --> 
*   Custom link types  
*   Global workflow  <!--- TBD -->  
*   Team field support

The following plug-ins and their associated files aren't used in defining a process, nor used to update existing team projects. 
However, they are used to create objects or artifacts when you create a new team project.  
*   Classification      
*   Work item queries (defined using the WIQL syntax)  
*   Test Management
*   Work items  <!--- TBD --> 

>[!NOTE]  
>The WIQL length must not exceed 32K characters. The system won't allow you to create or run queries that exceed that length.   

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
                                                                                                                            

## Tools with limited support 
When you connect to VSTS, you can use the following tools subject to limitations:   

- [Visual Studio Process Template Manager](../../work-items/guidance/manage-process-templates.md): You can download a process template, but all other functions are disabled.   
- Process Editor: You can use select functions to view or export a WIT definition or global list, or use the Work Item Field Explorer. Access is denied to save modified WIT and global list definitions.  
- **witadmin** command line tool: Select commands, such as export and list commands, work when connected to VSTS. Review [witAdmin: Customize and manage objects for tracking work](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md) for which commands are supported.

[!INCLUDE [temp](../../_shared/process-editor.md)]  


## Related notes

- [Work tracking object limits](../object-limits.md)   
- [Customize work tracking](../customize-work.md) 
