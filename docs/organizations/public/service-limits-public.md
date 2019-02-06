---
title: Rate and service limits 
titleSuffix: Azure DevOps Services Public Project
description: Terms of service  
ms.technology: devops-public-projects
ms.prod: devops
ms.assetid:
ms.reviewer: 
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.topic: quickstart
ms.date: 07/02/2018
monikerRange: 'azure-devops'
---

# Service limits 

[!INCLUDE [temp](_shared/version-public-projects.md)]  

Public projects are subject to the limits documented in this article. 

<!---
## Pipelines

TBD

-->

## Work items
- A long text field can contain 1M characters.
- You can't assign more than 100 tags to a work item.
- You can't add more than 1,000 links to a work item.
- You can't add more than 100 attachments to a work item.
- You can't add an attachment size larger than 60 MB to a work item.


## Custom work tracking 

You can customize work tracking objects subject to the limits summarized in the following table. You define these objects through an inheritance process. To learn more, see [Customize a project using an inherited process](../settings/work/customize-process.md).


> [!div class="mx-tdCol2BreakAll"]
> |Object | Inheritance | 
> |-------|------------:|
> | Work item types defined for a process | 64  |
> | Fields defined for an account | 4096  | 
> | Fields defined for a process | 512  | 
> | Fields defined for a work item type | 512  |
> | Pick lists defined for an account or collection | 512  | 
> | Pick list items defined for a list | 512  | 
> | Pick list item character length | 256  | 
> | Workflow states defined for a work item type | 32  |
> | Rules defined for a work item type | 1024  |
> | Portfolio backlog levels defined for a process| 5  |

 
## Wiki

Wikis defined for a project are limited to 1 GB per git repository. 

> [!TIP]    
> To derive the size of a wiki/git repository, download the repo to your local computer, unzip the file, and then open the **Properties** for the corresponding folder.  


## Related articles 
- [Work tracking object limits](../settings/work/object-limits.md) 