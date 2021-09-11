---
title: Changes made to process templates
titleSuffix: Azure Boards  
description: Summary of changes made to Agile, Scrum, and CMMI process templates to support updating existing projects after a TFS upgrade  
ms.technology: devops-agile
ms.assetid: 1541C32C-FD7A-4415-A282-06DF14D1F688 
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 04/08/2021
---

# Changes made to process templates  

[!INCLUDE [temp](../../includes/version-all.md)]

To support the addition of new features, changes are introduced periodically to the core system processes or process template&mdash;[Agile](agile-process.md), [Scrum](scrum-process.md), or [CMMI](cmmi-process.md). A process&mdash;used by the Inheritance process model&mdash;determines the building blocks used to track work. A process template&mdash;used by the Hosted XML and On-premises XML process models&mdash;specifies an interdependent-related set of XML definition files that provide the building blocks and initial configuration for tracking work and other functional areas. For an overview of process models and customization options, see [Customize your work tracking experience](../../../reference/customize-work.md).

> [!NOTE]    
> This article describes changes made to the core system processes with updates made to Azure DevOps Services and on-premises Azure DevOps Server, formerly named Team Foundation Server (TFS). These processes are available for both cloud and on-premises versions of Azure Boards. Projects hosted on Azure Boards [update automatically with each service upgrade](/azure/devops/release-notes/index). Whereas, updates to projects defined on-premises may require running the Configure Feature Wizard after upgrading to a later version. 
>  
> The Configure Features Wizard has been deprecated for Azure DevOps Server 2019. You can only run the wizard on TFS 2018 and earlier versions.        
If you've customized your project and haven't upgraded your on-premises deployment for a while, you may need to manually apply some changes to gain access to new features. Review the following table to determine which changes may apply to your situation. See [New features added when you upgrade](/previous-versions/azure/devops/reference/upgrade/new-features-added) for a description of each feature added with the updates. 



:::row:::
   :::column span="1":::
      **Version**
   :::column-end:::
   :::column span="3":::
      **Changes introduced**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ## [Azure DevOps Server 2020.1](/azure/devops/server/release-notes/azuredevops2020u1#removing-assigned-to-rule-on-bug-work-item-type)   
      Azure DevOps Services (October 2020)  
   :::column-end:::
   :::column span="3":::
      Removed system rule **Assign work item to the person who created it when the bug is moved to the Resolved state** from the Bug work item type in the Agile process.  
      For those customers who want to continue using this rule, you can add the following [custom workflow rules](../../../organizations/settings/work/apply-rules-to-workflow-states.md) rule to the Bug in your process:
      
      **When** `A work item state changes to` *Resolved* **Then** `Copy the value from ` *Specify field*.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      [Azure DevOps Server 2020.1](/azure/devops/server/release-notes/azuredevops2020u1#improved-rules-for-activated-and-resolved-fields)   
      Azure DevOps Services (August 2020)  
   :::column-end:::
   :::column span="3":::
      The logic managing the **Activated By**, **Activated Date**, **Resolved By**, and **Resolved Date** fields has changed. The values assigned to these fields are now governed based on the state categories of *Proposed* and *Resolved*. To learn more, see [Query by assignment or workflow changes](../../queries/query-by-workflow-changes.md#activated-resolved-fields).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ## Azure DevOps Server 2019  
   :::column-end:::
   :::column span="3":::
      Predefined Shared Queries are no longer created upon project creation. The definitions for Shared Queries have been removed from the process template. Shared Queries defined in custom process templates are created. You can also add Shared Queries to a process template as described in [Add work item queries to a process template](../../../reference/process-templates/add-work-item-queries-process-template.md).  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ## TFS 2017 
   :::column-end:::
   :::column span="3":::
      Added the **WebLayout** section within the **FORM** section of all work item type (WIT) definitions. This section supports the new work item tracking experience in the web portal. It includes the **SystemControls** section and the new **LinksControlOptions** for managing link relationships.  To learn more, see [New work item experience](../../../reference/process/new-work-item-experience.md), [WebLayout and Control elements](../../../reference/xml/weblayout-xml-elements.md), and [LinksControlOptions XML elements (Web form)](../../../reference/xml/linkscontroloptions-xml-elements.md).  
      > [!NOTE]
      > When you upgrade an on-premises Azure DevOps to TFS 2017, the new web form is automatically available when you add projects to a collection. For existing projects, an administrator is required to [enable the new form](../../../reference/manage-new-form-rollout.md). The reason the new form isn't automatically enabled for existing projects is to prevent overwriting customizations made to existing WIT definitions.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ## TFS 2015  
   :::column-end:::
   :::column span="3":::
      Added the Bugs Behavior feature, and enhancements to the Planning Tools and Portfolio Backlogs features. Several enhancements were made to support the [Scaled Agile Framework (SAFe)](../../plans/scaled-agile-framework.md).  
      #### The changes introduced support the following feature additions or enhancements:  
      - Process template names have been changed to Agile, CMMI, and Scrum and have been repurposed as locked, system templates. You can export these templates for customization, but you can no longer overwrite these templates with your changes. 
      - Second-level portfolio backlog, Epic, plus configurable option for teams to activate portfolio backlogs.  
      - Team configurable option to choose which backlogs and portfolio backlogs are active. 
      - Tracking **Time Criticality** of portfolio backlog items. The **Time Criticality** field captures how the business value decreases over time for a Feature or Epic. Higher values indicate that the item is inherently more time critical than those items with lower values.  
      - Tracking the **Value Area** for portfolio backlog and backlog items. The **Value Area** field differentiates items based on work performed to support *Architectural* requirements or *Business* needs.  
      - Support [any-to-any workflow transitions](choose-process.md#workflow-states) on Agile boards.  
      - Team configurable option to choose to track bugs on backlogs and boards either as requirements or as tasks. This necessitated adding fields to the bug WIT definition as well as adding a process configuration behavior.   
      #### The following changes were made to the default process templates:   
      **WITs added**: Epic<br/>  
      **Miscellaneous WIT changes:**
             - Feature: Added **Effort**, **Time Criticality**, and **Value Area** fields; added workflow transition from *Active* to *Removed*  
             - Bug: Added fields and workflow states to support the show bugs on backlog and boards team-configurable option 
             - Minor layout changes to  WIT forms to reflect additions of new fields; added **ID** field to all forms 
             - Added WIT `refname` attribute to all WIT definitions.<br/>  
      **Categories:** Added Epic Category.<br/>   
      **Process configuration changes:**<br/> 
             - Added Epic portfolio backlog 
             - Feature: Added **Effort** and **Value Area** fields to the default columns of the backlog 
             - Requirement Category backlog: Added **Value Area** to the default columns of the backlog  
             - Increased the default work item count limits on all boards to 1000  
             - Added new properties to specify the default behavior for new teams.<br/>  
      **ProcessTemplate changes:** Process template names no longer specify the version or year; Agile, CMMI, Scrum.<br/>    
      #### Changes made to Agile WIT definitions:  
      **User Story:**
             - Added **Acceptance Criteria**, **Priority**, and **Value Area** fields 
             - Added transitions from *Active* to *Removed* and *Resolved* to *Removed*   
             - Removed rules that populated **Activated By** and **Activated Date** fields when State=*Resolved*<br/>    
      **Bug:**
             - Added **Activity**, **Story Points**, **Original Work**, **Completed Work**, **Remaining Work**, **Severity**, and **Value Area** fields 
             - Added *New* state and corresponding workflow transitions 
             - Added several field rules to copy or set defaults during state transitions 
             - Added *Fixed and verified* as a **Resolved Reason**.<br/> 
      **Task:** Added rule to empty **Remaining Work** field  to support zeroing out the field when the State is set to *Closed*. 

      #### Changes made to CMMI WIT definitions: 
      **Requirement:** 
             - Added **Acceptance Criteria**, **Priority**, and **Value Area** fields  
             - Added transitions from *Active* to *Removed* and *Resolved* to *Removed* 
             - Removed rules that populated **Activated By** and **Activated Date** fields when state=*Resolved*.<br/>     
      **Bug**: Added **Size**, **Discipline**, **Original Work**, **Completed Work**, and **Value Area** fields.   
 
      #### Changes made to Scrum WIT definitions: 
      - **Product backlog item:** Added **Priority** and **Value Area** fields; added workflow transition from *Committed* to *Removed* workflow states  
      - **Bug:** Added **Activity**, **Remaining Work**, **Priority**, and **Value Area** fields; added rule to zero out **Remaining Work** when **State=Done**. 
      - **Task:** Added rule to require **Remaining Work** when **State=In Progress**; removed **Backlog Priority** field from work item form. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ## TFS 2013.4 
   :::column-end:::
   :::column span="3":::
      #### The following changes were made to the WIT definitions:  
      **Scrum:** Bug and Product backlog item: Removed the **Backlog Priority** field from the form
      **Agile:**
          - Bug: Added the **Story Points** field; 
          - User Story: Removed the **Stack Rank** field from the form 
      **CMMI:** 
          - Added the **Size** field to the Bug definition. 
          - Removed the **Stack Rank** field from the Requirement form. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ## TFS 2013.3  
   :::column-end:::
   :::column span="3":::
      Added support for the Test Plan and Test Suite feature to support customization and tracking of these items similar to other work item types.  
      #### The following changes were made to the default process templates:  
      - WITs added: Test Plan and Test Suite  
      - Categories added: Test Plan Category and Test Suite Category  
      - Category updates: Added  Test Plan and Test Suite to the Hidden Types Category.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ## TFS 2013.2  
   :::column-end:::
   :::column span="3":::
      Added support for the Shared Parameters feature which allows you to [run tests with different data](../../../test/repeat-test-with-different-data.md).   
      #### The following changes were made to the default process templates:   
      - WITs added: Shared Parameter 
      - Categories added: Shared Parameter Category  
      - Category updates: Added  Shared Parameter to the Hidden Types Category.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ## TFS 2013 RTM  
   :::column-end:::
   :::column span="3":::
      Added the Portfolio Backlog feature and changes to simplify process configuration management.  
      #### The following changes were made to the default process templates:   
      - WITs added: Feature 
      - Categories added: Feature Category  
      - Process configuration changes: Replaced `AgileConfiguration` and `CommonConfiguration` with a single file, [ProcessConfiguration](../../../reference/xml/process-configuration-xml-element.md), which supports these additional features: portfolio backlogs, color assignment to WITs, tags added to the default columns on all backlog pages.  
      - Build changes: Removed the build templates from the build plug-in. You now access build templates through the user interface [Use the Default Template for your build process](/previous-versions/visualstudio/visual-studio-2013/dd647547(v=vs.120). 
      - Reporting Services updates: To update your project with the latest reports, see [Upload reports to a project](../../../Report/admin/upload-reports.md).  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ## TFS 2012.1 
   :::column-end:::
   :::column span="3":::
      Added the Portfolio Backlog feature and introduced changes to support Planning Tools.  
      #### Changes to WIT definitions to support status updates via Kanban and taskboards  
      Each of the default process templates that TFS provides was updated to support additional regressive transitions. These transitions, shown in red in the following illustration, support moving items back to the backlog when they were incorrectly set to done or resolved. Now when you inadvertently drag a work item on the Kanban board or the taskboard to a resolved or closed state, you can drag it back to an earlier workflow state.  
      The following work item types now support any-to-any workflow transitions:  

      - Visual Studio Scrum 2.1: Bug, Product Backlog Item, Task 
      - MSF Agile 6.1: Bug, Task, User Story 
      - MSF Scrum 6.1: Bug, Task, Requirement 

      ![State diagram for Product Backlog Item.](media/tfs-vso-state-diagram-product-backlog-item.png)  
      To apply the changes to your existing projects, you need to replace the **WORKFLOW** sections defined for each of the updated work item types with the new definitions. You can do this by modifying the work item type definition. See [Design the Workflow](../../../reference/xml/change-workflow-wit.md)and [Import, export, and manage Work Item Types](../../../reference/witadmin/witadmin-import-export-manage-wits.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ## TFS 2012 RTM  
   :::column-end:::
   :::column span="3":::
      Added the Code Review, My Work, Feedback, Storyboarding, and Planning Tools features.  
      #### The following changes were added to all default process templates:   
      **WITs added:** Code Review Request, Code Review Response, Feedback Request, and Feedback Response 
      **WIT form changes:** 
             - Many work item forms have been updated to display the larger font for the **Title** field and a two column layout of tab groups  
             - Maintained mnemonic support only for the following fields: **Area Path**, **Assigned To**, **History**, **Iteration Path**, **State**, and **Title**. Mnemonics have been removed from all other fields within the type definitions. 
      - Categories added: Code Review Request Category, Code Review Response Category, Feedback Request Category, Feedback Response Category, and Hidden Types Category 
      **Process configuration:** Added `CommonConfiguration` and `AgileConfiguration` definition files to support Agile planning tools, code review, feedback, and My Work. 
      **Build plug-in:** Added a new build process template. When you upgrade from earlier versions of Team Foundation Server, you can continue to use [legacy build processes](/previous-versions/dd647548(v=vs.140). 
      **Process template plug-in:** Added `version` element to support updating projects when configuring new features.
      Updated support files that contain forward links to process guidance content to point to the latest content.

      #### The following changes were made to the Scrum process:  
      - Removed the **Sprint** type definition and **All Sprints** query, whose functionality has been replaced with the Agile planning tools.
      - Removed the **Backlog Priority** field from the work item form for the Product Backlog type definition. This field is used in the background to track the relative priority of items displayed on the backlog pages.  
      - The *Removed* state was added to the workflow state for the Bug, Product Backlog Item, and Task type definitions, which supports removing cut items from the backlog.
      - Added the **Storyboards** tab to the Product Backlog Item type definition.  
      - Added the [Backlog Overview report](../../../report/sql-reports/backlog-overview-scrum.md) to the set of SQL Server Reporting Services reports, similar to the Agile[Stories Overview report](../../../index.yml?viewFallbackFrom=vsts). 

      #### The following changes were made to the Agile process:  
      - The *New* state was added as the initial state for User Stories and Tasks. This change was introduced to support transitioning User Stories and Tasks from a *New* state to an *Active* state. Without the *New* state, User Stories assigned to an iteration remain on the product backlog until they are resolved, which is not a desired or expected behavior. To learn more, see [Update the Workflow for Agile Team Projects](/previous-versions/visualstudio/visual-studio-2012/hh500412(v=vs.110).
      - To support removing cut work items from the backlog, the *Removed* state was added to the workflow state for the following work item types: User Story and Task.  
      - Added the **Storyboards** tab to the User Story work item type.  
      - The Product Planning and Iteration Backlog Excel workbooks have been removed. The Agile planning tools replace this functionality. 

      #### The following changes were made to the CMMI process: 
      - Requirement: Added the **Size** field used in calculating team velocity and forecast; added the **Storyboards** tab  
      - Shared queries: Added **Corrective Action** and **Mitigation Action**.  
   :::column-end:::
:::row-end:::



## Related upgrade notes

To update your existing projects hosted on an on-premises Azure DevOps to access new features, [run the Configure Features wizard](/previous-versions/azure/devops/reference/upgrade/configure-features-after-upgrade). In the event that you're upgrading from a much earlier version of TFS or you've customized your project, you'll need to make some manual updates.  

See the following resources as they relate to updating your project:  

- [Update a customized process template to access new features](/previous-versions/azure/devops/reference/upgrade/update-customized-process-template)
- [Add features using a manual update process](/previous-versions/azure/devops/reference/upgrade/add-features-manually)
- [Before you upgrade TFS](/previous-versions/azure/devops/reference/upgrade/upgrade-tfs-2008-or-2010)
- [Additional configuration options](/previous-versions/azure/devops/reference/upgrade/additional-configuration-options)
- [Upload reports to a project](../../../Report/admin/upload-reports.md)
