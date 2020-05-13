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

The main reason to customize your process is to support monitoring or reporting additional metrics. Most of the customizations outlined in this article are optional. 

In this article you'll learn about select process customizations you can make and why you might want to make them to support your SAFe practices.  

>[!div class="checklist"]      
> * Add custom work item types  
> * Add portfolio backlogs 
> * Customize the workflow 
> * Add custom rules
> * Add custom fields 

Prior to customizing your project, we recommend you read the [Configure and customize Azure Boards](../configure-customize.md). It provides detailed information on administrating a project for several teams and supporting various business objectives.  

[!INCLUDE [temp](../includes/note-safe-articles.md)]

## Customize work item types 

You can add 

## Add custom work item types


<a id="custom-backlog" />


## Custom portfolio backlogs 


## Customize the workflow

You may want to customize the workflow for User Stories, Features, and Epics so that it matches your workflow process. By doing this early, you minimize the Kanban board configuration teams must do. 

> [!div class="mx-imgBorder"]  
> ![Kanban board columns to visualize flow and limit WIP](../boards/media/alm_kb_board2.png)  


## Customize fields  

Customize pick lists - Value Area 
Custom field - Milestone // Releases 

Customer Centric - fields to capture customer requests 


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


## Custom rules

Typically you add rules to work item types for the following reasons: 

- You want to make a field required 



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
