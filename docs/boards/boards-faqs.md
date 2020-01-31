---
title: Azure Boards FAQs 
titleSuffix: Azure Boards
description: Answers to frequently asked questions about Azure Boards 
ms.technology: devops-agile
ms.prod: devops
ms.assetid:  
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 01/30/2020
---

# Azure Boards FAQs 

[!INCLUDE [temp](includes/version-vsts-tfs-all-versions.md)]
 

Find answers to frequently asked questions when using Azure Boards. For FAQs specific to Microsoft Excel integration to add or modify work items defined in Azure DevOps, see [FAQs: Work in Excel connected to Azure Boards](backlogs/office/faqs.md). 

You can view a list of features that are on our roadmap for Azure Boards from the [Features Timeline](/azure/devops/release-notes/features-timeline). 

To request a feature or up-vote a feature, go to our [Developer Community page](https://developercommunity.visualstudio.com/spaces/21/visual-studio-team-services.html?type=idea).
 

## Work items and work item templates

### Q: Can a work item be assigned to several users or a user group? 

**A:** No. Work items can only be assigned to a single user. 

**Q:** Is this feature on the roadmap? No, this isn't on the roadmap. 

### Q: Can I copy a work item including its subtasks? 

**A:** No. Cloning doesn't copy work item subtasks.  

**Q:** Is this feature on the roadmap? Yes. See [Roadmap Item 1666194: Clone work item including subtasks](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_backlogs/backlog/Boards/Roadmap%20Items/?workitem=1666194)

### Q: Can I create a work item template that creates links to other work items? 

**Example request**: *When creating a template I would like the Parent User Story to be defaulted. There is not a pre-determined field in the template. Would/could this be under a user defined selection?*

**A:** No, there is no native support for creating hierarchy templates.  In particular, you can't specify a default parent work item. However, you may find a solution To creating child work items by installing one of the following Marketplace extensions:  
- [Work item form one click actions](https://marketplace.visualstudio.com/items?itemName=mohitbagra.witoneclickactions)  
- [1-Click Child-Links](https://marketplace.visualstudio.com/items?itemName=ruifig.vsts-work-item-one-click-child-links)  
- [1-Click Tasks](https://marketplace.visualstudio.com/items?itemName=ruifig.vsts-work-item-one-click-tasks)  


## GitHub integration

### Is it possible to specify the status when linking a work item to a GitHub commit or PR?

**A:** No. This feature is not supported at this time. 

## Customizations 

### Q: Is it possible to change the Azure DevOps brand? 

**A:** No. This is not customizable.

### Q: Can sub hubs within the Azure Boards hub be disabled? 

**A:** No. Individual pages cannot be disabled. 

### Q: Can I upload my own custom work item type icons?  

**Example request**: *When I create a new work item type I get an option to choose an icon, this icon set is limited and does not support the icons that we would prefer for our use case. Is there a way to associate custom icon to new work item type?* 

**A:** No. This is not a supported feature at this time.   



## Related articles

- [Azure Boards extensions](extensions/index.md)
- [About teams and Agile tools](../organizations/settings/about-teams-and-settings.md)


<!--- Report FAQs
Can we set permissions to hide a dashboard? 
Granular level authorization seems to be not possible for example we can make dashboards read only for Reader Only user but can’t hide it completely. Would you recommend doing this in PowerBI?
Custom work process and custom dashboard versioning support for operations is not available off the shelf. Is this feature on the roadmap? 

Extensions:
Some of the extensions are not downloadable, we could have installations where the VM that hosts the DevOps server may not have internet connection. Is there a way to deploy extensions on such VMs?

-->