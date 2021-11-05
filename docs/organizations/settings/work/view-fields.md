---
title: View fields defined for an organization or collection
titleSuffix: Azure DevOps 
description: View all fields defined for an organization or collection.  
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.topic: how-to
ms.date: 11/04/2021 
---


# View all fields defined for an organization or collection 

[!INCLUDE [all-versions](../../../boards/includes/version-all.md)]

::: moniker range="azure-devops"

Fields are defined for an organization and shared across all projects defined for that organization. You can use one of two tools to review the fields defined for the organization. 

- [Process>Fields web page](review-fields): Available for both Inherited and Hosted XML process models 
- [Work Item Field Explorer](wi-explorer): Available for all process models 
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"
Fields are defined for a collection and shared across all projects defined for that collection. You can use one of two tools to review the fields defined for the Collection. 

- [Process>Fields web page](review-fields): Available for  Inherited process model 
- [Work Item Field Explorer](wi-explorer): Available for all process models  
::: moniker-end

::: moniker range="< azure-devops-2019"
Fields are defined for a collection and shared across all projects defined for that collection. To view all fields defined for a collection, you can use the [Work Item Field Explorer](wi-explorer) tool, a plug-in to Visual Studio.   
::: moniker-end

## Prerequisites 

- To view the fields defined for an organization or collection, you must be a member of the **Project Collection Valid Users** application group or have the **View instance-level information** permission set to **Allow** for the organization or collection.

 
[!INCLUDE [temp](../includes/open-process-admin-context-ts.md)]

<a id="review-fields"></a>

## Process>Fields web page 

To review the list of fields defined for all processes and the WITs that reference them, choose **Process** and then **Fields**.  

Fields listed correspond to all fields defined for the organization. This includes all custom fields and those defined for system processes. 

For descriptions and usage of each field, as well as the Reference name for each field, you can look it up from the [Work item field index](../../../boards/work-items/guidance/work-item-field.md). You can also get the Reference name of fields from the [Work Item Types Field - List REST API](/rest/api/azure/devops/wit/work-item-types-field/list).

> [!div class="mx-imgBorder"]  
> ![Make a copy of a selected inherited process](media/process/list-fields.png) 


<a id="wi-explorer">  </a>

## Work Item Field Explorer 

You can look up the assignments of field attributes using the Work Item Field Explorer tool.  

![Work item field explorer](media/fields/work-item-field-explorer.png)


To access the Work Item Field Explorer, you must install the Process Editor Tool. Based on the version of Visual Studio you have installed, get the Process Editor Tool from one of the following extensions. 

[!INCLUDE [temp](../../../includes/process-editor-tool.md)]


## Related articles  

- [Add or modify a custom work item type](customize-process-work-item-type.md)
- [Customize the web layout](customize-process-form.md)
- [Customize a project using an inherited process](customize-process.md)    
- [Customize cards on boards](../../../boards/boards/customize-cards.md)  
- [Show bugs on backlogs and boards](../show-bugs-on-backlog.md)  
- [Work tracking, process, and project limits](object-limits.md)

