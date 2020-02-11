---
title: Sprint calendar view of features and epics
titleSuffix: Azure DevOps
description: Learn how to work with a calendar view of features and epics 
ms.custom: extensions
ms.technology: devops-agile
ms.prod: devops
ms.topic: conceptual
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2017'
ms.date: 02/14/2020
---

# View progress with the Feature Timeline 

[!INCLUDE [temp](../includes/version-vsts-tfs-2017-on.md)]


View the progress of features grouped by their epic parents using the Feature Timeline extension. This view provides you with calendar views of feature progress with the ability to drill down to see details at the requirements level.  

> [!NOTE]   
> The Feature Timeline and Epic Roadmap  extension is available on TFS 2017 Update 2 and later versions. You can download it from the [Marketplace for Azure DevOps, Feature Timeline and Epic Roadmap](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension).
 
> [!div class="mx-imgBorder"]  
> [![](media/feature-timeline/intro.png "Feature Timeline")](media/feature-timeline/intro-expanded.png#lightbox)


## Customize your view

You can customize your view of the Feature Timeline with the controls shown in the following image: 

> [!div class="mx-imgBorder"]  
> ![Feature Timeline controls](media/feature-timeline/controls.png)


- **View Sprints**: Enter the number of iterations to show  
- **Plan Features**: Opens a side panel of additional features participating in a Portfolio Plan. 
- **Show Details**: Displays progress bars of Feature child items
- **Track Progress Using**: Progress bars indicate completion based on child requirements or overall total effort. 
- **Closed Features**: Filters the Features based on those closed within the selected time frame. 



## Prerequisites

- Install the [Feature Timeline and Epic Roadmap](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension) extension for the organization(s) or collection(s) for which you want to track progress at the epic and feature level. In order to install an extension, you must be a member of the Project Collection Administrator Group. To learn more, see [Install extensions](../../marketplace/install-extension.md). 

## Open the Feature Timeline

1. Open the web portal for the project where your team is defined.  

1. Open **Boards** or **Backlogs** for your team. 

2. Choose **Feature Timeline**. 

	> [!div class="mx-imgBorder"]  
	> ![Choose Feature Timeline from Azure Boards](media/feature-timeline/choose-feature-timeline.png)
 


<a id="filter" /> 

## Filter options 
 


<a id="drill-down" /> 

## Drill-down options 
 

## Create a dependency 
 
 

<a id="configuration" /> 

## Configure  
 
 

## Related articles

- [Work item field index](..//work-items/guidance/work-item-field.md)
- [Review team delivery plans](../plans/review-team-plans.md)
- [Inheritance process model](../../organizations/settings/work/inheritance-process-model.md)
- [Hosted XML process model](../../organizations/settings/work/hosted-xml-process-model.md)
- [How workflow states and state categories are used in Backlogs and Boards](../work-items/workflow-and-state-categories.md)


## Related Marketplace extensions

- [Work Item Visualization](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) 
 