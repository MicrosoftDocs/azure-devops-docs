---
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 04/04/2022
---


<a id="customize" />

### Customize work-tracking processes

You and your team can start using all work-tracking tools immediately after you create a project. But often, one or more users want to customize the experience to meet one or more business needs. You can customize the process easily through the user interface. As such, you'll want to establish a methodology for who will manage the updates and evaluate requests. 

> [!NOTE]   
> By default, organization owners and users added to the **Project Collection Administrators** security group are granted permission to create, edit, and manage processes used to customize the work-tracking experience. If you want to lock down who is able to perform these tasks, you can set permissions at the organization-level to **Deny**.  

To learn more, see these articles: 

::: moniker range=">= azure-devops-2019"

- [About process customization and inherited processes](../../organizations/settings/work/inheritance-process-model.md)  
- [Customize a project](../../organizations/settings/work/customize-process.md)  
- [Add and manage processes](../../organizations/settings/work/manage-process.md)  

::: moniker-end

::: moniker range="tfs-2018"

- [On-premises XML process customization](../../reference/on-premises-xml-process-model.md)  
- [Add or modify a field to track work](../../reference/add-modify-field.md)  
- [Add or modify a work item type](../../reference/add-modify-wit.md)  

::: moniker-end
 