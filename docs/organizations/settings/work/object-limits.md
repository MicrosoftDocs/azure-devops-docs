---
title: Work tracking object limits
titleSuffix: Azure DevOps Services
description: Limits placed on the number of objects that can be specified for the Inheritance and Hosted XML process models for Azure DevOps Services
ms-custom: inherited-process
ms.technology: devops-agile
ms.prod: devops
ms.assetid: E5FABB7C-ECA8-4FA5-9488-4AD78C60869A
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: ">= tfs-2013"
ms.date: 12/18/2019
---

# Work tracking object limits

[!INCLUDE [temp](../../../boards/_shared/version-vsts-only.md)]

This article details the limits placed on the number of projects and work tracking objects you can define or import. When customizing the work item types (WITs), be aware of the limits placed on objects. To learn about process models, see [Customize your work tracking experience](../../../reference/customize-work.md).

## Operations: Work items

::: moniker range="<= azure-devops"

| Object | Limit |
|--------|-------|
| Long text field | 1 M characters | 
| Work item tags assigned to a work item | 100 | 
| Work item links assigned to a work item | 1,000 | 
| Attachments added to a work item | 100 | 
| Attachment size | 60 MB | 
| Work item links assigned to a work item | 1,000 | 

#### Notes
- If you need a limit increased, [file a support ticket](https://support.microsoft.com/supportforbusiness/productselection?sapId=4d7c8158-200d-893b-5161-06d00803fd9c). 


## Operations: Backlogs and boards

Default and maximum limits. 

| User interface |  Limit | 
|--------|-------|
| Backlog | 999 work items | 
| Board | ??? | 
| Taskboard | 800 work items | 

On-premises can update the backlog and taskboard limits through ProcessConfiguration.
  
Each backlog can display up to 999 work items. If your backlog exceeds this limit, then you may want to consider adding a team and moving some of the work items to the other team's backlog.

::: moniker-end


::: moniker range="<= azure-devops-2019" 

| Object | Limit |
|--------|-------|
| Long text field | 1 M characters | 
| Work item tags assigned to a work item | 100 | 
| Work item links assigned to a work item | 1,000 | 
| Attachments added to a work item | 100 | 
| Attachment size | 4 MB to 2 GB, see Note 1  | 


#### Notes
1. The default maximum size is 4 MB. You can [change the maximum size up to 2 GB](../../../reference/xml/change-maximum-attachment-size-work-items.md).

::: moniker-end

## Process customization

::: moniker range="azure-devops" 

The following table lists the maximum number of objects that you can define for the Inheritance and Hosted XML process models. While these represent hard limits, practical limits may 

| Object                                              | Inheritance | Hosted XML |
| --------------------------------------------------- | ----------: | ---------: |
| Number of processes you can have in an organization |          64 |         64 |
| Work item types defined for a process               |          64 |         64 |
| Fields defined for an organization                  |        8192 |       8192 |
| Fields defined for a process                        |        1024 |       1024 |
| Fields defined for a work item type                 |        1024 |       1024 |
| Picklists defined for an organization or collection |        1024 |          - |
| Picklist items defined for a list                   |        2048 |       2048 |
| Picklist item character length                      |         256 |          - |
| Workflow states defined for a work item type        |          32 |         16 |
| Rules defined for a work item type                  |        1024 |       1024 |
| Portfolio backlog levels defined for a process      |           5 |          5 |
| Categories defined for a process                    |           - |         32 |
| Global lists defined for a process                  |           - |        256 |
| List items defined within a global list             |           - |       1024 |
| Work item attachment size                           |       60 MB |      60 MB |

For additional restrictions and conformance requirements of the Hosted XML process model, see [Customize a process when using Hosted XML](../../../organizations/settings/work/import-process/customize-process.md).

> [!NOTE]  
> For the Hosted XML process model, you can define an approximate total of 10K items for all global lists specified across all WITs.

::: moniker-end

::: moniker range="azure-devops-2019" 

The following table lists the maximum number of objects that you can define for the Inheritance and On-premises XML process models. While these represent hard limits, practical limits may also apply. 

| Object                                              | Inheritance | On-premises XML |
| --------------------------------------------------- | ----------: | ---------: |
| Number of processes you can have in an organization |          64 |         64 |
| Work item types defined for a process               |          64 |         64 |
| Fields defined for a collection                     |        8192 |       1024 |
| Fields defined for a process                        |        1024 |       1024 |
| Fields defined for a work item type                 |        1024 |       1024 |
| Picklists defined for a collection                  |        1024 |          - |
| Picklist items defined for a list                   |        2048 |       2048 |
| Picklist item character length                      |         256 |          - |
| Workflow states defined for a work item type        |          32 |         16 |
| Rules defined for a work item type                  |        1024 |       1024 |
| Portfolio backlog levels defined for a process      |           5 |          5 |
| Categories defined for a process                    |           - |         32 |
| Global lists defined for a process                  |           - |        256 |
| List items defined within a global list             |           - |       1024 |


> [!NOTE]  
> For the On-premises XML process model, you can define an approximate total of 10K items for all global lists specified across all WITs.

::: moniker-end


::: moniker range="<= tfs-2018" 

The following table lists the maximum number of objects that you can define for the ON-premises XML process model. While these represent hard limits, practical limits may apply. 

| Object                                              | On-premises XML |  
| --------------------------------------------------- |  ---------: |  
| Number of processes you can have in an organization |          64 |  
| Work item types defined for a process               |          64 |  
| Fields defined for a collection                     |        1024 |  
| Fields defined for a process                        |        1024 |  
| Fields defined for a work item type                 |        1024 |  
| Picklists defined for a collection                  |           - |  
| Picklist items defined for a list                   |        2048 |  
| Picklist item character length                      |           - |   
| Workflow states defined for a work item type        |          16 |   
| Rules defined for a work item type                  |        1024 |   
| Portfolio backlog levels defined for a process      |           5 |    
| Categories defined for a process                    |          32 |
| Global lists defined for a process                  |         256 |
| List items defined within a global list             |        1024 |


> [!NOTE]  
> For the On-premises XML process model, you can define an approximate total of 10K items for all global lists specified across all WITs.

::: moniker-end

## Practical limits 

Number of projects, 300 
Number of WIT rules
Number of WITs
Reportable fields

Nesting of work items 

## Related articles

- [Customize your work tracking experience](../../../reference/customize-work.md)
- [Customize a process when using Hosted XML](import-process/customize-process.md)
- [Create an Inheritance process](manage-process.md)


<!---

TBD

- Naming restrictions 


--> 
