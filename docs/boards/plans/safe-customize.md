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

The main reason to customize your process is to support monitoring or reporting additional metrics. Azure Boards supports a graphical user interface for customizing an Inherited process.

In this article you'll learn about select process customizations you can make and why you might want to make them to support your SAFe practices. Most of these customizations are optional. 

>[!div class="checklist"]      
> * Add custom work item types  
> * Add portfolio backlogs 
> * Customize the workflow 
> * Add custom rules
> * Add custom fields 

- [Add a custom work item type](#custom-wit) to capture and track different information then existing work item types, such as a Solution or Customer Request work item type  
- [Add a custom portfolio backlog](#custom-backlog) to support a Solution Backlog


Prior to customizing your project, we recommend you read the [Configure and customize Azure Boards](../configure-customize.md). It provides detailed information on administrating a project for several teams and supporting various business objectives.  

[!INCLUDE [temp](../includes/note-safe-articles.md)]

## Customize work item types 

Each work item type defines the fields that capture and store information. You can customize existing work item types in the following ways to support specific SAFe tracking requirements.  

- [Add a custom field](#add-custom-field) to support tracking budget costs, value streams, or customer-centric information  
- [Customize existing fields](#customize-fields), such as modifying the picklist or changing a field label  
- [Change the workflow](#custom-workflow) to reflect your Kanban workflow process 
- [Add custom rules](#custom-rules) to make select fields required or specify actions to take under select conditions  
- [Add a custom control or extension](#custom-control) to support custom functions such as a calculated field 



<a id="add-custom-field" /> 

## Add a custom field 



<a id="customize-fields" /> 

## Customize existing fields  

Customize pick lists - Value Area 
Custom field - Milestone // Releases 

Customer Centric - fields to capture customer requests 



<a id="custom-workflow" /> 

## Customize the workflow

You may want to customize the workflow for User Stories, Features, and Epics so that it matches your workflow process. By doing this early, you minimize the Kanban board configuration teams must do. 

> [!div class="mx-imgBorder"]  
> ![Kanban board columns to visualize flow and limit WIP](../boards/media/alm_kb_board2.png)  



<a id="custom-rules" /> 

## Custom rules

Typically you add rules to work item types for the following reasons: 

- You want to make a field required 




<a id="custom-control" /> 


## Custom controls 



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



<a id="custom-wit" />

## Add custom work item types 

You add custom work item types to distinguish work you want to track and to customize the fields and the workflow used to track that work. For example, you might want to track Capabilities, Enablers, and Solutions with their own work item types. One or more custom work item types may be required to track customer-centric 

To keep things simple, however, it's always best to minimize the amount of customizations you make. So, if you can get by with existing work item types, you might consider adding custom field(s) as needed to track specific information. For example, consider these options: 

- Add a custom field to your Feature or Epic work item types that specifies it as an Enabler, Capability, Feature, or Solution.
- Add a page to the work item form to capture details specific to Capabilities, Enablers, and Solutions. 


<a id="custom-backlog" />

## Customize portfolio backlogs 


## Restrict or grant access to select features 

Tags? 




::: moniker range="tfs-2013"

## Required customization

If you're working with TFS 2013, see the [Upgrade/Publish TFS 2013 Process Templates with PowerShell: blog post by Gordon Beeming](http://31og.com/post/upgradepublish-tfs-2013-process-templates-with-powershell). This post provides a PowerShell script which you can use to apply the customizations documented in the TFS 2013 version of this article.   

::: moniker-end 



<a id="project-scale" />

## When to add another project 
 
- [About projects and scaling your organization](../../organizations/projects/about-projects.md)

- [Plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md)


## Try this next

> [!div class="nextstepaction"]
> [Plan and track SAFe® programs and portfolios](safe-plan-track-boards.md) 



## Related articles

<!--- To be provided --> 
