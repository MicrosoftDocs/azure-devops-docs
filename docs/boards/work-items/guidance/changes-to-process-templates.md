---
title: Understand the process for changing process templates
titleSuffix: Azure Boards  
description: Learn how changes are made to the core system processes with updates made to Azure DevOps Services and on-premises Azure DevOps Server.  
ms.service: azure-devops-boards
ms.custom: engagement-fy23
ms.assetid: 1541C32C-FD7A-4415-A282-06DF14D1F688 
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 01/17/2023
---

# Changes made to process templates  

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

To support the addition of new features, changes are introduced periodically to the core system processes or process template&mdash;[Agile](agile-process.md), [Scrum](scrum-process.md), or [CMMI](cmmi-process.md). A process&mdash;used by the Inheritance process model&mdash;determines the building blocks used to track work. A process template&mdash;used by the Hosted XML and On-premises XML process models&mdash;specifies an interdependent-related set of XML definition files that provide the building blocks and initial configuration for tracking work and other functional areas. For an overview of process models and customization options, see [Customize your work tracking experience](../../../reference/customize-work.md).

> [!NOTE]    
> This article describes changes made to the core system processes with updates made to Azure DevOps Services and on-premises Azure DevOps Server, formerly named Team Foundation Server (TFS). These processes are available for both cloud and on-premises versions of Azure Boards. Projects hosted on Azure Boards [update automatically with each service upgrade](/azure/devops/release-notes/features-timeline). Whereas, updates to projects defined on-premises may require running the Configure Feature Wizard after upgrading to a later version. 
>  
> The Configure Features Wizard has been deprecated for Azure DevOps Server 2019. You can only run the wizard on TFS 2018 and earlier versions.        
If you've customized your project and haven't upgraded your on-premises deployment for a while, you may need to manually apply some changes to gain access to new features. Review the following table to determine which changes may apply to your situation. See [New features added when you upgrade](/previous-versions/azure/devops/reference/upgrade/new-features-added) for a description of each feature added with the updates. 

## Azure DevOps Server 2020.1

The following changes were introduced as indicated. 
 
- Removed system rule **Assign work item to the person who created it when the bug is moved to the Resolved state** from the Bug work item type in the Agile process.  
  - Azure DevOps Services (October 2020)
  - [Azure DevOps Server 2020.1](/azure/devops/server/release-notes/azuredevops2020u1#removing-assigned-to-rule-on-bug-work-item-type)

  For those customers who want to continue using this rule, you can add the following [custom workflow rules](../../../organizations/settings/work/apply-rules-to-workflow-states.md) rule to the Bug in your process:
      
  **When** `A work item state changes to` *Resolved* **Then** `Copy the value from ` *Specify field*.
        
- The logic managing the **Activated By**, **Activated Date**, **Resolved By**, and **Resolved Date** fields has changed. The values assigned to these fields are now governed based on the state categories of *Proposed* and *Resolved*. To learn more, see [Query by assignment or workflow changes](../../queries/query-by-workflow-changes.md#activated-resolved-fields).
  - Azure DevOps Services (August 2020) 
  - [Azure DevOps Server 2020.1](/azure/devops/server/release-notes/azuredevops2020u1#improved-rules-for-activated-and-resolved-fields)   
  

## Azure DevOps Server 2019

The following changes were introduced with Azure DevOps Server 2019.

- Predefined Shared Queries are no longer created upon project creation. The definitions for Shared Queries have been removed from the process template. Shared Queries defined in custom process templates are created. You can also add Shared Queries to a process template as described in [Add work item queries to a process template](/previous-versions/azure/devops/reference/process-templates/add-work-item-queries-process-template).  

## TFS 2017 and earlier versions

For changes made to process templates for TFS 2017 and earlier versions, see [Changes made to process templates (archived)](/previous-versions/azure/devops/boards/work-items/guidance/changes-to-process-templates).
  