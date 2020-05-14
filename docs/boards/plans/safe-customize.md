---
title: Customize Azure Boards to support SAFe®
titleSuffix: Azure Boards
description: Customize Azure Boards to support specific SAFe® practices
ms.technology: devops-agile
ms.prod: devops
ms.assetid:  
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 05/01/2020
---


# Customize Azure Boards to support SAFe&reg;  

[!INCLUDE [temp](../includes/version-vsts-only.md)]

The main reason to customize your process is to support tracking and monitoring progress, reporting on key metrics, or supporting specific business requirements. In this article you'll learn about select process customizations you can make and why you might want to make them to support your SAFe® practices. Most of these customizations are optional. 

Specifically, you'll learn how Azure Boards supports SAFe® practices by enabling you to perform the following customizations. 

>[!div class="checklist"]      
> - Customize work item types or add custom work item types 
> - Add a custom field or customizing existing fields  
> - Customize the workflow  
> - Add custom rules to a work item type   
> - Add custom controls or custom extensions  
> - Customize your backlogs or add a custom portfolio backlog   


[!INCLUDE [temp](../includes/note-safe-articles.md)]

## About customization and the inherited process

<!--- Azure Boards supports a graphical user interface for customizing an Inherited process.  --> 

## Customize work item types 

Each work item type defines the fields that capture and store information. You can customize existing work item types in the following ways to support specific SAFe® tracking requirements.  

- [Add a custom field](#add-custom-field) to support tracking budget costs, value streams, or customer-centric information  
- [Customize existing fields](#customize-fields), such as modifying the picklist or changing a field label  
- [Change the workflow](#custom-workflow) to reflect your team's Kanban workflow process 
- [Add custom rules](#custom-rules) to make select fields required or specify actions to take under select conditions  
- [Add a custom control or extension](#custom-control) to support custom functions such as a calculated field. 

For details on customizing a work item type, see [Add and manage fields for an inherited process](../../organizations/settings/work/customize-process-field.md). 

<a id="add-custom-field" /> 

## Add a custom field 

You add a custom field to support tracking data requirements that aren't met with the existing set of fields. Some fields to consider adding to one or more work item types include those listed in the following table. 


:::row:::
   :::column span="":::
      **Field name**
   :::column-end:::
   :::column span="":::
      **Work Item Types**
   :::column-end:::
   :::column span="2":::
      **Notes**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Budget cost
   :::column-end:::
   :::column span="":::
      Feature, Epic
   :::column-end:::
   :::column span="2":::
      Use to capture estimated costs. Can use rollup to capture the total estimated cost of an Epic's Features.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Category or Group
   :::column-end:::
   :::column span="":::
      Feature, Epic, User Story
   :::column-end:::
   :::column span="2":::
      Use to specify a picklist to indicate the work item is cataloged as one of the following SAFe® categories: *Feature*, *Capability*, *Enabler*, or *Solution*.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Milestone
   :::column-end:::
   :::column span="":::
      Feature, Epic, User Story
   :::column-end:::
   :::column span="2":::
      Use to specify a picklist of Milestone of Events which a story, feature, or epic should meet.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Value Stream
   :::column-end:::
   :::column span="":::
      Feature, Epic, User Story
   :::column-end:::
   :::column span="2":::
      Use to specify a picklist to support a taxonomy of value streams you want to associate with work. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      WSFJ 
   :::column-end:::
   :::column span="":::
      Feature, Epic 
   :::column-end:::
   :::column span="2":::
      Use to add the [Weighted Shortest Job First](#wsjf) field calculated from the Effort, Business Value, Time Criticality. 
   :::column-end:::
:::row-end:::
 

For details on adding a customize a field, see [Add a custom field to a work item type](../../organizations/settings/work/add-custom-field.md). 

### Tags versus a field 

You can capture a value stream using tags or a field. Tags represent a more informal and adhoc method for categorizing work. A specific field, particularly one with preset items, is more formal. When determining how you want to use tags and fields, consider the following: 

- Anyone can add new tags as long as they have the correct permissions. 
- You can't require tags be added to a work item, however you can make a field required through custom rules. 
- Tags can quickly  
- 


<a id="wsjf" />

### WSJF (Weighted Shortest Job First)

We recommend using the [WSJF extension by Microsoft DevLabs](https://marketplace.visualstudio.com/items?itemName=MS-Agile-SAFe.WSJF-extension) to compute and store WSJF for your SAFe® deliverables. 
 
SAFe® defines WSJF (Weighted Shortest Job First) as a calculation of cost of delay versus job size. This value can help teams prioritize their portfolio backlogs with the items contributing the highest ROI.

![WSJF = (Business Value + Time Criticality - Risk Reduction | Opportunity Enablement Value)/Job Size](media/safe/wsjf.png) 

Four values are used to calculate WSJF:

- Business Value
- Time Criticality
- Risk Reduction | Opportunity Enablement Value
- Job Size


![Work item form automatically updates with changes to field values](media/safe/AutoCalcWSJF.gif)  

For details on adding and managing the extension, see the [WSJF extension overview](https://marketplace.visualstudio.com/items?itemName=MS-Agile-SAFe.WSJF-extension). 



<!--- pros/cons of using picklists versus tags  --> 

<a id="customize-fields" /> 

## Customize existing fields  

Customize pick lists - Value Area 
Custom field - Milestone // Releases 

Customer Centric - fields to capture customer requests 

For an index of existing fields, see [Work item field index](../work-items/guidance/work-item-field.md). For details on customizing a field, see [Add and manage work item types](../../organizations/settings/work/customize-process-wit.md). 
 

<a id="custom-workflow" /> 

## Customize the workflow

You may want to customize the workflow for User Stories, Features, and Epics so that it matches your workflow process. By doing this early, you minimize the Kanban board configuration teams must do. 

The default workflow for the Agile process include *New*, *Active*, *Resolved*, and *Closed* states. While each team can add workflow columns to their Kanban board, you might want to customize the workflow to track these additional columns instead. That way the Kanban boards for all teams are set up to use the same workflow states. 

For example, you can add and rename workflow States to match the Kanban columns shown in the following image&mdash;*Backlog*, *Analyze*, *Develop*, *Test*, and *Done*.  

> [!div class="mx-imgBorder"]  
> ![Kanban board columns to visualize flow and limit WIP](../boards/media/alm_kb_board2.png)  

Review with your team's what workflow states will most support their Agile practices. For additional details, review the following articles:  
- [Customize the workflow (Inheritance process)](../../organizations/settings/work/customize-process-workflow.md)  
- [Add columns to your Kanban board](../boards/add-columns.md)  
- [Definition of Done](../boards/definition-of-done.md)  


<a id="custom-rules" /> 

## Custom rules

Typically you add rules to work item types for the following reasons: 

- You want to make a field required 
Restrict or grant access to select features



<a id="custom-control" /> 


## Custom controls 




- [WorkBoard OKRs](https://marketplace.visualstudio.com/items?itemName=wobo-okrs.workboard-ado-extension) Integrates WorkBoard helps organizations align, localize and measure Objectives and Key Results (OKRs) across the business. With this integration, teams can view and update their OKRs from within Azure DevOps. 



<a id="custom-wit" />

## Add custom work item types 

The User Story, Feature, and Epic work item types are meant to support product planning and tracking. However, other work item types might be useful to support your SAFe® organization's customer-centric focus. Specifically, you might want to add work items to capture customer feedback, customer requests, and more. 

When defining a new work item type, think through the following: 
- Information you want to capture, track, and report on 
- How work will be captured 
- The workflow to support tracking the work

To keep things simple, however, it's always best to minimize the amount of customizations you make. So, if you can get by with existing work item types, you might consider adding custom field(s) as needed to track specific information.  


<a id="custom-backlog" />

## Customize your backlogs  

Each team's backlog and board is designed to support specific work item types, as follows:   
- **Agile Release Teams**: User Stories and, optionally, Bugs
- **Program Teams**: Features
- **Portfolio Teams**: Epics

As needed, however, you can add other work item types, existing or custom, to these backlogs. Each team can subscribe to the set of backlogs that they need to track. 

<a id="add-custom-backlog" />

## Add a custom portfolio backlogs  

to support a Solution Backlog

## Restrict or grant access to select features 



<a id="project-scale" />

## When to add another project 
 
- [About projects and scaling your organization](../../organizations/projects/about-projects.md)

- [Plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md)


## Try this next

> [!div class="nextstepaction"]
> [Plan and track SAFe® programs and portfolios](safe-plan-track-boards.md) 



## Related articles

<!--- To be provided --> 


Prior to customizing your project, we recommend you read the [Configure and customize Azure Boards](../configure-customize.md). It provides detailed information on administrating a project for several teams and supporting various business objectives.  


<!--- 

## Required customization

If you're working with TFS 2013, see the [Upgrade/Publish TFS 2013 Process Templates with PowerShell: blog post by Gordon Beeming](http://31og.com/post/upgradepublish-tfs-2013-process-templates-with-powershell). This post provides a PowerShell script which you can use to apply the customizations documented in the TFS 2013 version of this article.   

--> 
