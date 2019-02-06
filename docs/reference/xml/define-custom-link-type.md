---
title: Define a custom link type 
titleSuffix: TFS
description: Add a custom link type to meet your project tracking requirements in Team Foundation Server  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 0d0d51f7-b8d0-4e5d-82b9-766ee12690ba
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.topic: reference
monikerRange: '>= tfs-2013 <= azure-devops-2019'
ms.date: 02/10/2017
---

# Define a custom link type

[!INCLUDE [temp](../../_shared/version-header-tfs-only.md)]

> [!IMPORTANT]  
>This topic applies to project customization for On-premises XML process models. Custom link types are not supported for Hosted XML or Inheritance process models. For an overview of process models, see [Customize your work tracking experience](../customize-work.md). 

You can customize an existing link type or create a link type to meet your project tracking requirements. You use a link type to define the link labels, topology type, and restrictions that are used when creating relationships between work items.  You can customize an existing link type or create a link type to meet your project tracking requirements.  

Before you start to add or modify a link type, you should assess the link types available and how they are used in your project. See [Manage dependencies, link work items](../../boards/queries/link-work-items-support-traceability.md).  
  
> [!NOTE]  
>  You cannot customize the system-defined link types that correspond to the Related, Parent-Child, and Successor-Predecessor links.  
  
You may want to modify or create a link type for one of the following reasons:  
  
-   Change the link labels that are used to match your team's naming conventions.  
-   Add a link type to track a particular relationship that is unique to your team's process.  
  

The link type is specified in a type definition XML file that you import to a project collection. See [LinkTypes](link-type-element-reference.md).  
  
With the `witadmin` command-line utility, you can deactivate, delete, export, import, list, and reactivate link types. See [Manage link types](../witadmin/manage-link-types.md).  
  
Links are added through the work item form, which contains the links control. See [Link controls, restrictions, and fields](../../boards/queries/linking-attachments.md).  
  
In addition to defining link types, you can customize the work item type definition to accept or prohibit specific links based on link type. You use the `LinksControlOptions` element to define the options that control what links can be added to a work item and to which work item types. Also, you can specify the default columns that you want to appear for the list of links in a work item. For more information, see [Define link controls to restrict link relationships](define-link-controls.md).  
  
## Related articles  
- [Link work items to track dependencies](../../boards/queries/link-work-items-support-traceability.md)
- [Customize your work tracking experience](../customize-work.md) 