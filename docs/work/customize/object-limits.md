---
title: Work tracking object limits | Team Services 
description: Limits placed on the number of objects that can be specified for the Inheritance and Hosted XML process models for Visual Studio Team Services (VSTS)
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: E5FABB7C-ECA8-4FA5-9488-4AD78C60869A  
ms.manager: douge
ms.author: kaelli
ms.date: 06/02/2017
---

# Work tracking object limits 

<b>Team Services</b> 

When customizing the work item types (WITs) defined in the Inheritance or Hosted XML process models, be aware of the limits placed on objects defined in this topic. To learn about process models, see [Customize your work tracking experience](customize-work.md).

## Inheritance and Hosted XML process models

|Object | Maximum allowed|
|-------|----------------:|
| Work item types defined for a process | 64  |
| Fields defined for a work item type | 256  |
| Fields defined for a process | 512  |
| Custom fields defined for a process | 512  |
| Workflow states defined for a work item type | 16  |
| Portfolio backlog levels defined for a process| 5  |

## Inheritance process model

|Object | Maximum allowed|
|-------|----------------:|
| Custom fields defined for a work item type | 64 | 
| Pick list items defined for a list | 128  |
| Pick list item character length | 256  |
| Pick lists defined for an account or collection | 512  |


## Hosted XML process model

For additional restrictions and conformance requirements, see [Customize a process when using Hosted XML](../import-process/customize-process.md).

|Object | Maximum allowed|
|-------|----------------:|
| Rules defined for a work item type | 1024  |
| Values defined within a single rule values list | 128  |
| Categories defined for a process | 32 | 
| Global lists defined for a process | 64  |
| List items defined within a global list | 512 | 
| Custom link types defined for a process | 8  |
| Identity or person-name fields (`/syncnamechanges:true`) per work item type | 64 |

>[!NOTE]  
>For the Hosted XML process model, you can define an approximate total of 10K items for all global lists specified across all WITs. 
 
## Tags
- You can't assign more than 100 tags to a work item.

## Related notes

- [Customize a process when using Hosted XML](../import-process/customize-process.md)
- [Create an Inheritance process](../process/manage-process.md)
- [Customize your work tracking experience](customize-work.md)