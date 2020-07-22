---
ms.technology: devops-agile
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 02/17/2020
---


<a id="faq-copy-clone" /> 

### Q: How do I copy or clone a work item with all linked items? 

::: moniker range="azure-devops"

**A:** With Azure Boards (cloud service), you can choose to copy child work items when copying a work item. For details, see [Copy or clone work items](/azure/devops/boards/backlogs/copy-clone-work-items#copy-clone).  

::: moniker-end

::: moniker range="< azure-devops"

**A:** This feature isn't supported at this time for on-premises deployments. Copying a work item doesn't copy any parent-child linked work items. However, is is now available on Azure Boards (cloud service).  

The easiest way to accomplish the task of copying many work items with child items, is to create parent-child links to new work items using Excel. To learn how, see [Bulk add or modify work items with Excel, Add a hierarchy of linked work items](/azure/devops/boards/backlogs/office/bulk-add-modify-work-items-excel#add-a-hierarchy-of-linked-work-items).

Other solutions include employing one of the following Marketplace extensions:  
- [Work item form one click actions](https://marketplace.visualstudio.com/items?itemName=mohitbagra.witoneclickactions)  
- [1-Click Child-Links](https://marketplace.visualstudio.com/items?itemName=ruifig.vsts-work-item-one-click-child-links)  
- [1-Click Tasks](https://marketplace.visualstudio.com/items?itemName=ruifig.vsts-work-item-one-click-tasks)  

::: moniker-end

 
