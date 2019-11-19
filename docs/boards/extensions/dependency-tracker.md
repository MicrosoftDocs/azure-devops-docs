---
title: Plan and track dependencies across teams and organizations using the Dependency Tracker extension
titleSuffix: Azure DevOps
description: Learn how to track dependencies your team has on other teams with the dependency tracker  
ms.custom: extensions
ms.technology: devops-new-user 
ms.technology: devops-agile
ms.prod: devops
ms.topic: conceptual
ms.manager: mijacobs
ms.reviewer: chesing
ms.author: kaelli
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 11/07/2019
---

# Plan and track dependencies using the Dependency Tracker extension

[!INCLUDE [temp](../_shared/version-vsts-only.md)]


<!--- Suggest link to tutorial be changed from https://osgwiki.com/wiki/Dependency 

https://microsoft.visualstudio.com/OS/_apps/hub/wdgeswm.dependencytracker.dependencytracker-hub#b4cd1b1c9c7ce3dfbaa3fabc9532a040

--> 


The [Dependency Tracker extension](https://marketplace.visualstudio.com/items?itemName=ms-eswm.dependencytracker&ssr=false#overview) provides you with the ability to plan and manage dependencies across teams, projects, and organizations. It provides filterable views to show all dependencies a team is consuming and producing. These views allow you  to track the state of the dependencies as well as their timing to help support you in assessing the risk of dependencies to deliverables. 

> [!NOTE]   
> The Dependency Tracker extension is only available on Azure DevOps Services at this time. 

You use the Dependency Tracker to plan dependencies at the beginning of an iteration or release, as well as to track the status during development. For any given dependency, there are two parties involved: 
- **Consumer**: Feature team who has a need and initiates a request for work
- **Producer**: Feature team who makes a commitment to deliver work 

Each work request and work deliverable is defined as a work item. The work items are linked by the Successor-Predecessor link type or other directional link type. For details about link types, see [Link type reference](../queries/link-type-reference.md) 
Producing for/Consuming from link.

> [!TIP]   
> While any work item type can participate in dependency tracking, you may want to decide if you want to limit dependencies to specific types, such as Features, Epics, User Stories, or Bugs. 

## Recommended use and sequence

You can use Dependency Tracker to visualize and track the following work items: 
- Dependencies on deliverables for work that your team is delivering  
- Dependencies you have on other teams for work that your team is delivering 
- Dependencies that other teams have on work your team is delivering 

All teams across organizations can participate in tracking dependencies. 


> [!NOTE] 
> Dependency Tracker doesn't replace the in person interactions required to agree to doing the work. It provides easier planning and tracking capabilities. Dependencies should be agreed upon by all parties before they are entered in to the Dependency Tracker.


## Prerequisites

- Install the [Dependency Tracker extension](https://marketplace.visualstudio.com/items?itemName=ms-eswm.dependencytracker&ssr=false#overview) for the organization(s) for which you want to track dependencies.
- To view dependencies, you must be a member of the Project Valid Users group for the project.  
- To create a dependency, you must be a member of the Contributors group for both projects that participate in the dependency linking.
- To support cross-organization participation, all organizations must authenticate users through the same [Azure Active Directory](../../organizations/accounts/connect-organization-to-azure-ad.md). 
- Azure Boards must be enabled as a service. If it is disabled, then you'll need to have it reenabled. For details, see [Turn a service on or off](../../organizations/settings/set-services.md). 

> [!IMPORTANT]  
> The default configuration for Dependency Tracker supports the Agile process. If your project(s) are based on a different process or you have customized your process, you may need to modify the configuration. See [Configure the Dependency Tracker](#configuration) later in this article. 


## Open the Dependency Tracker

1. Open the web portal for the project where your team is defined.  

2. Choose **Dependency Tracker** from under the Boards group. 

	> [!div class="mx-imgBorder"]  
	> ![Select Dependency Tracker from Azure Boards](_img/tracker/select-dependency-tracker.png)

1. To focus on your area of ownership, choose the **Area** that corresponds to the team you want to view dependencies for.   

	> [!div class="mx-imgBorder"]  
	> ![Select Area](_img/tracker/choose-area-path.png)

	You can only filter on those Area paths defined for the project. 


## Create a dependency 

A dependency represents work where one team is dependent on another team. Both teams should track their own work in their own area path. By linking the work that is dependent on the other teams work, the dependencies can be visualized and tracked.  

1. Choose **New Dependency**.  

	> [!div class="mx-imgBorder"]  
	> ![Choose New Dependency](_img/tracker/choose-new-dependency.png)

	If the partner team is in a different organization, then first choose the **Partner Account**.   

	> [!div class="mx-imgBorder"]  
	> ![Choose partner account](_img/tracker/choose-partner-organization.png)

1.  You can search for work items by ID or by entering a keyword contained within the work item title. Here, we link a user story and a bug. 

	> [!div class="mx-imgBorder"]  
	> ![Create a dependency, choose two existing work items to link](_img/tracker/create-dependency.png)

	- The Producer is the team that commits to delivering the work.
	- The Consumer is the team that needs or is dependent on the work.
	- The fastest way to create a dependency link is to type the Producer and Consumer work item ids in the search boxes and then choose **Save**.

	Optionally, you can choose **Create New** to add work items that you then link as dependent upon each other. Here we create two new features and link them. 

	> [!div class="mx-imgBorder"]  
	> ![Create a dependency, create new work items to link](_img/tracker/create-new-work-items-link-dependency.png)

	If no work items exist for one half of the dependency it is possible to create a new work item also.

1.  Choose **Save**. The **Save** button becomes available only after you've chosen two work items to link.  	

1. From the success confirmation dialog, choose **View dependency**. 

	> [!div class="mx-imgBorder"]  
	> ![Success confirmation](_img/tracker/success-confirmation.png)

1.  The work items that you just linked are highlighted.	
	
	As shown in this example, the Fabrikam Fiber/Service Delivery/Voice team is dependent on the MyFirstProject team to deliver their `User Story 706: Cancel order form` to complete `Bug 390: Cancel order form`. 

	> [!div class="mx-imgBorder"]  
	> ![Linked dependent work items](_img/tracker/linked-dependent-work-items.png)

## Create links manually 

You can also link work items using the **Links** tab to create Successor/Predecessor links. A Predecessor is the producer of the work item, or the item that must come first. A Successor is the consumer of the work item, or the item that is dependent on the first item.

> [!div class="mx-imgBorder"]  
> ![Create links manually](_img/tracker/create-links-manually.png)

> [!NOTE]   
> The Successor/Predecessor (consumes/produces) link types are the default link types used by the Dependency Tracker. If you're projects are customized using a Hosted XML process model, it's possible to specify different link types in the Dependency Tracker configuration. See [Configure the Dependency Tracker](#configuration) later in this article.

To learn more, see [Link user stories, issues, bugs, and other work items](../backlogs/add-link.md). 

## Remove dependency links

You can remove a dependency by choosing the ![ ](../../_img/icons/actions-icon.png) actions icon from the linked work item and choose **Remove Dependency Link** option from the menu. 

> [!div class="mx-imgBorder"]  
> ![Create links manually](_img/tracker/remove-dependency-link.png)

Optionally, you can remove the link from the work item's **Links** tab. 


## Create a query of dependencies 

To open a set of dependent work items, select them in the same way you would via a bulk edit, choose the ![ ](../../_img/icons/actions-icon.png) actions icon from one of the selected linked work items and choose **Open in Query** option from the menu. 

> [!div class="mx-imgBorder"]  
> ![Create links manually](_img/tracker/open-as-query.png)

A new tab opens to the Query Results page. 


## Supported views, filters, and drill downs 

From the Dependency Tracker, you can choose different views and filters, as well as drill down to obtain specific details. 

### Supported filters
- Area
- Story (toggle between Area or Story)
- Release (multiselect)
- Iteration (multiselect)
- Product Family (multiselect)
- Product (multiselect)
- Ability to drop dependencies within the selected area (usually used for excluding dependencies inside my team)

## Filter using keywords, tags, or select field values

You can filter by select field values. To start filtering, choose the ![](../_img/icons/filter-icon.png) filter icon.

> [!div class="mx-imgBorder"]  
> ![Enable field-based filtering](_img/tracker/filter.png)

Choose one or more values from the multi-select drop-down menu for each field. The values for these fields are populated as follows:

- **Search title or tag**: Enter a keyword used within a work item title or tag. 
- **State**: Check one or more check boxes for the  work item states you want to view. 
- **Work item type**: Check one or more check boxes for the Work item types you want to view. 
- **Iteration**: Check one or more check boxes for the Iteration Paths you want to view.   All Iteration Paths [selected for the current team](../sprints/define-sprints.md) and for which there are work items assigned to that iteration 
- **Priority**: Check one or more check boxes for the Priorities you want to view. 
- **Partner**: Check one or more check boxes for the leaf node of the Area Paths participating in the dependencies.  

> [!NOTE]   
> Filter options are dependent on the [configuration](#configuration) defined for the Dependency Tracker. Also, only those options that correspond to work items which XXXX to work items that meet the filter criteria. For example, if you don't have any work items assigned to Sprint 4, then the Sprint 4 option won't appear in the filter options for the Iteration Path. 

### Supported drill-downs 

Several views provide interative visualization through drilldowns. 


> [!div class="mx-imgBorder"]  
> ![Consuming dependencies, drill-down into completed work in an area](_img/tracker/drill-down-completed-consuming.png) 

### Multi-select options 


## View dependencies for a team 

The **Consuming Dependencies** view shows work that my team is dependent upon other teams/area paths. It is useful for answering the following questions: 

- *Which dependencies am I consuming as the owner of the selected Area?* 
- *How many dependencies per Producer team (by area level 3)?*
- *What are the State of my consumer dependencies?*

The **Producing Dependencies** view addresses these questions: 

- *Which dependencies am I reponsible for producing as the owner of the selected Area?* 
- How many dependencies exist per Consumer team (by area level 3)?
- What are the State of my producer dependencies?

### View deliverable work for a team  

The **Producing Dependencies** view shows work that other teams/area paths are dependent on per the selected area. It is useful for answering the following questions: 

- *Which dependencies am I reponsible for delivering as the owner of the selected Area?* 
- *How many dependencies exist per Consumer team (by area level 3)?*
- *What are the states of my producer dependencies?*


Consuming Dependencies - work the selected area path is dependent on other area paths to complete
Producing Dependencies - work the selected area path is doing that other area paths are dependent on

You can view and filter specific dependency views. 

> [!div class="mx-imgBorder"]  
> ![Consuming-View](_img/tracker/consuming-dependencies-view.png)


## View calendar view of dependencies 

- What are all the deliverable dependencies against selected timeline for a given team?

The Dependency Timeline feature is in Beta. From the Timeline view (currently in Beta), you can view the sequencing of dependencies across months.

> [!div class="mx-imgBorder"]  
> ![Timeline view, correct flow](_img/tracker/timeline-oc-word-2019-correct-flow.png)

> [!div class="mx-imgBorder"]  
> ![Timeline view, incorrect flow](_img/tracker/timeline-oc-word-2019-incorrect-flow.png)


- Red arrows highlight when the sequencing is out of order and a predecessor is scheduled to be complete after a successor
- The left-hand colored bar designates the state of each item
- Hover over an item to see a detailed card or double click to open an individual work item
- Right clicking of an item to reassign it to a new iteration

![Timeline](_img/tracker/Timeline.png)

In order for the timeline to function correctly Iterations must have dates assigned



<a id="configuration" /> 

## Configure the Dependency Tracker

You can customize the configuration used in the Dependency Tracker as follows: 

- The link type to use to create dependency links. Default is Successor/Predecessor. Only customize if you use the [Hosted XML process model](../../organizations/settings/work/hosted-xml-process-model.md) to customize work tracking.  
- Work items 
	- Work item category states and colors 
	- Work item display states and colors
	- Work item types to participate in dependency tracking 
- Default filter selections:
	- Default selected dependency work item types
	- Default selected Iteration Paths
- Enabled options:
	- Timeline
	- New Dependency link 
	- Cross account (organization) dependencies 
	- Cross account dependency toggle default state 
- Risk graph configuration:
	- Work item state(s) associated with at risk (Red color)
	- Work item state(s) associated with neutral (Gray color)
	- Work item state(s) associates with on track (Green color)

To change the configuration, choose the ![ ](../../_img/icons/blue-gear.png) gear icon  and modify the syntax listed. Choose **Save** when done. 


### Enable or disable the New Dependency option

To enable or disable the **New Dependency** option, set the following syntax in the JSON configuration to `true` or `false`:

> [!div class="tabbedCodeSnippets"]
```
{
    "newDependencyButtonEnabled": true
}
```


### Enable or disable cross-organization linking

To enable cross-organization dependency linking from the New dependency dialog, set the following syntax in the JSON configuration to `true` or `false`:

> [!div class="tabbedCodeSnippets"]
```
{
    "crossAccountConfigs": {
        "crossAccountDependencyEnabled": true,
        "crossAccountDependencyToggleDefaultState": true, //default state for cross account toggle
        "crossAccountDependencyToggleOnText": "Cross-account dependencies on",
        "crossAccountDependencyToggleOffText": "Cross-account dependencies off"
      }
}
```

Cross account linking requires the use of a special link type and should only be used in coordination with the **New Dependency** option.



### Default configuration syntax

> [!div class="tabbedCodeSnippets"]
```
{
    "consumesLinkName": "System.LinkTypes.Dependency-Reverse",
    "producesLinkName": "System.LinkTypes.Dependency-Forward",
    "queryFields": {},
    "dependencyWorkItemTypes": [
        "Epic",
        "Feature",
        "User Story",
        "Bug"
    ],
    "selectedDependencyWorkItemTypes": "Any",
    "selectedReleases": "",
    "workItemCategoriesAndColors": {
        "Proposed": {
            "displayName": "Proposed",
            "color": "#a6a6a6"
        },
        "InProgress": {
            "displayName": "In Progress",
            "color": "#00bcf2"
        },
        "Completed": {
            "displayName": "Completed",
            "color": "#9ac70b"
        },
        "Removed": {
            "displayName": "Removed",
            "color": "#d9242c"
        },
        "Resolved": {
            "displayName": "Resolved",
            "color": "#ff9d00"
        }
    },
    "workItemDislayStatesAndDisplayColors": {
        "New": {
            "textColor": "rgb(112, 112, 112)",
            "chartColor": "rgb(112, 112, 112)",
            "states": [
                "New"
            ]
        },
        "Active": {
            "textColor": "rgb(0, 122, 204)",
            "chartColor": "rgb(0, 122, 204)",
            "states": [
                "Active",
                "Resolved"
            ]
        },
        "Closed": {
            "textColor": "rgb(16, 124, 16)",
            "chartColor": "rgb(16, 124, 16)",
            "states": [
                "Closed"
            ]
        },
        "Removed": {
            "textColor": "rgb(204, 41, 61)",
            "chartColor": "rgb(204, 41, 61)",
            "states": [
                "Removed"
            ]
        },
        "Other": {
            "textColor": "rgb(178, 178, 178)",
            "chartColor": "rgb(178, 178, 178)",
            "states": []
        }
    },
    "riskAssessmentValues": [],
    "releases": [],
    "partnerAccounts": [],
    "rankValues": [],
    "timelineEnabled": true,
    "newDependencyButtonEnabled": true,
    "crossAccountConfigs": {
        "crossAccountDependencyEnabled": true,
        "crossAccountDependencyToggleDefaultState": false
    },
    "priorityValues": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "(blank)"
    ],
    "defaultColumns": [
        "Id",
        "Area Path",
        "Dependency Title",
        "State",
        "Consumers",
        "Producers"
    ],
    "riskGraphConfig": {
        "atRisk": [
            "Removed"
        ],
        "neutral": [
            "New"
        ],
        "onTrack": [
            "Active",
            "Resolved",
            "Closed",
            "Other"
        ]
    },
    "iterationDepth": 8
}
```

## Related articles

- [Review team delivery plans](../plans/review-team-plans.md)

## Related Marketplace extensions

- [Work Item Visualization](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) 



<!--- TO BE COMPLETED

- cross linking
- Ask Cheryl how her link type is Producing for/Consuming from link



## Dependency Bot

Dependency Bot 
The dependency bot works in the background to help dependency management less painful. Have a suggestion on what other skills the bot can have? Please use the Feedback Hub to let us know. Starting skills: 
Notify the producer (copy the consumer) when a dependency is created
Notify the consumer (copy the producer) when the producer has changed the State of the deliverable to Cut
Notify the consumer (copy the producer) when the producer has moved out the iteration path of a committed dependency.

--> 

