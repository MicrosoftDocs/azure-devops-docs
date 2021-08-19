---
title: Stakeholder access quick reference
titleSuffix: Azure DevOps 
description: Stakeholder access to common user tasks for Azure DevOps 
ms.technology: devops-security
toc: show
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 08/18/2021
---

# Stakeholder access quick reference

**Stakeholder** access level provides partial support to Azure Boards and Azure Pipelines. **Stakeholder** access is available to support free access to a limited set of features by an unlimited set of stakeholders.  

With Stakeholder access, users can create and modify work items and create and save queries. They also can view and approve release pipelines and perform administrative tasks when granted administrative permissions or added to an administrative group. If they need to contribute to the code base, then you must assign them **Basic** or higher-level access.  

If you've been assigned **Stakeholder** access and want to start using Azure Boards to track work, see [Get started as a Stakeholder](get-started-stakeholder.md). If you've been tasked to support administrative tasks, see [Manage your project](../../user-guide/project-admin-tutorial.md).
 

## Assign Stakeholder access users to a security group 

In general, use the following guidance when assigning **Stakeholder** access users to a security group: 

- Add to the **Contributors** security group managers or users who don't actively contribute to the code base but want to check project status and provide direction, feedback, feature ideas, and business alignment to a team. 
- Add to the **Project Administrators** security group users tasked with managing project resources. 
- Add to the **Project Collection Administrators** security group users tasked with managing organization or collection resources. 




<a id="stakeholder-access">  </a>
<a id="feature-access">  </a>


::: moniker range="azure-devops"

<a id="public-versus-private-feature-access"/>

## Public versus private feature access

Users granted **Stakeholder** access are granted different access to features depending on whether it is a private or a public project. For private projects, Stakeholders have limited access to select work tracking functions, whereas for public projects, Stakeholders enjoy full access to work tracking features. To learn more about public projects, see [What is a public project?](../public/about-public-projects.md).  


> [!div class="mx-tdBreakAll"]  
> | Service, application, or setting | Private project | Public project|
> |------------|-----------------|---------------|
> |**Azure Boards** | Partial access | Full access | 
> |**Azure Repos** | No access | Full access | 
> |**Azure Pipelines**  | Full access | Full access | 
> |**Azure Test Plans**  | No access | No access | 
> |**Azure Artifacts**  | Full access | Full access | 
> |**Notifications**  | Full access | Full access | 
> |**Semantic search** | Full access | Full access | 
> |**Project settings**  | Partial access | Partial access | 
> |**Organization settings**  | Partial access | Partial access | 
> |**Dashboards** | Partial access | Full access | 
> |**Wiki (Project wiki)** | Partial access | Full access | 
> |**Wiki (Code wiki)**  | No access | Full access | 
::: moniker-end
 

## Azure Boards access

The following table summarizes the features Stakeholder access users have access to from Azure Boards. Stakeholders access users can view and edit all work items for which they have Area Path permissions, which by default is set to Allow for all user security groups. To learn more, see [Set permissions and access for work tracking](set-permissions-access-work-tracking.md#create-child-nodes-modify-work-items-under-an-area-path).

::: moniker range="azure-devops" 
> [!NOTE]   
> Public project **Stakeholder** access users have full access to all features. 
::: moniker-end

:::row:::
   :::column span="1":::
      **Page** 
   :::column-end:::
   :::column span="2":::
      **Features can use**
   :::column-end:::
   :::column span="2":::
      **Features can't use**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Work Items** 
   :::column-end:::
   :::column span="2":::
      - View work items   
      - Edit work items  
      - Assign existing tags to work items 
      - Change work item type (Project-level permission)
      - Email work items
      - Apply a work item template
   :::column-end:::
   :::column span="2":::
      - Add new work item tags
      - Delete work items
      - Move work items to another project
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Boards** 
   :::column-end:::
   ::: moniker range="azure-devops" 
   :::column span="2":::
      - View boards, open and edit work items
      - Add work items to a board; update status through drag-and-drop
      - Add child items to a checklist
      - Assign to a sprint (from card field)
      - Configure team boards (requires assignment as a team administrator or member of the Project Administrators Group)
   :::column-end:::
   :::column span="2":::
      - Change the priority of an item within a board
      - Change fields on cards on a board, except for State field
   :::column-end:::
   ::: moniker-end
   ::: moniker range="azure-devops-2020" 
   :::column span="2":::
      - View boards, open and edit work items
      - Update status through drag-and-drop
      - Add child items to a checklist
      - Assign to a sprint (from card field)
      - Configure team boards (requires assignment as a team administrator or member of the Project Administrators Group)
   :::column-end:::
   :::column span="2":::
      - Add work items to a board
      - Change the priority of an item within a board
      - Change fields on cards on a board, except for State field
   :::column-end:::
   ::: moniker-end
   ::: moniker range="< azure-devops-2020" 
   :::column span="2":::
      - View boards, open and edit work items
      - 
      - Add child items to a checklist
      - Assign to a sprint (from card field)
      - Configure team boards (requires assignment as a team administrator or member of the Project Administrators Group)
   :::column-end:::
   :::column span="2":::
      - Add work items to a board
      - Update status through drag-and-drop
      - Change the priority of an item within a board
      - Change fields on cards on a board, except for State field
   :::column-end:::
   ::: moniker-end
:::row-end:::
:::row:::
   :::column span="1":::
      **Backlogs** 
   :::column-end:::
   :::column span="2":::
      - View backlogs and open work items
      - Add work items (to the bottom of a backlog) 
      - Use bulk edit features
   :::column-end:::
   :::column span="2":::
      - Change the priority of an item within a backlog
      - Drag-and-drop work items to the Mapping pane (parent a work item) 
      - Drag-and-drop work items to the Planning pane (assign to a sprint)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Sprints** 
   :::column-end:::
   :::column span="2":::
      - View sprint backlogs, taskboards, and open work items
      - View work details  
      - Add work items to the bottom of a sprint backlog  
      - Use bulk edit features
      - Configure team sprint taskboards (requires assignment as a team administrator or member of the Project Administrators Group)
   :::column-end:::
   :::column span="2":::
      - Change the priority of an item within a backlog
      - Change fields on cards on a Taskboard, except for State field
      - View or set team capacity 
      - Add tasks a sprint backlog 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Queries** 
   :::column-end:::
   :::column span="2":::
      - View and run My queries or Shared queries
      - Create and save My queries
   :::column-end:::
   :::column span="2":::
      - Create or edit shared queries
      - View query charts 
      - Create query charts
   :::column-end:::
:::row-end:::
::: moniker range="azure-devops" 
:::row:::
   :::column span="1":::
      **Delivery Plans** 
   :::column-end:::
   :::column span="2":::
      - View delivery plans  
   :::column-end:::
   :::column span="2":::
      - Add or edit a delivery plan
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range=">= tfs-2017 < azure-devops" 
:::row:::
   :::column span="1":::
      **Delivery Plans** (Extension)
   :::column-end:::
   :::column span="2":::
      - Not supported 
   :::column-end:::
   :::column span="2":::
      - View delivery plans
      - Add or edit a delivery plan
   :::column-end:::
:::row-end:::
::: moniker-end


## Azure Pipelines access

The following table summarizes the features available to Stakeholder access users for Private and Public projects. When the **Free access to Pipelines for Stakeholders** preview feature is enabled for the organization, Stakeholders get access to all **Build** and **Release** features. Without this feature enabled, stakeholders can only view and approve releases. To learn more, see [Provide Stakeholders access to edit build and release pipelines](provide-stakeholder-pipeline-access.md).

:::row:::
   :::column span="2":::
      **Private project**
   :::column-end:::
   :::column span="2":::
      **Public project** 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      - View and approve releases
      - View build pipelines
   :::column-end:::
   :::column span="2":::
      - View release pipelines  
      - Define builds with continuous integration  
      - Define releases and manage deployments  
      - Approve releases  
      - Azure Artifacts (5 users free)  
      - Queue builds, edit build quality  
      - Manage build queues and build qualities  
      - Manage build retention policies, delete and destroy builds  
      - Administer build permissions   
      - Manage release permissions  
      - Create and edit task groups   
      - Manage task group permissions  
      - Can view library items such as variable groups   
      - Use and manage library items such as variable groups   
   :::column-end:::
:::row-end:::


## Azure Test Plans access

:::row:::
   :::column span="1":::
      **Services** 
   :::column-end:::
   :::column span="3":::
      **Supported features**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Azure Test Plans** 
   :::column-end:::
   :::column span="3":::
      - Provide feedback using the Test & Feedback extension
      - Apply a work item template to a test case
      - Delete delete test plans, test cases, and other test related work items (able to restore from the Recycle bin) 
   :::column-end:::
:::row-end:::

## Dashboards, ReadMEs, and Wikis 

View team and project dashboards (including work item query charts added to dashboards) 


::: moniker range="azure-devops" 
> [!NOTE]   
> Public project **Stakeholder** access users have full access to all features. 
::: moniker-end

:::row:::
   :::column span="1":::
      **Services** 
   :::column-end:::
   :::column span="3":::
      **Supported features**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Dashboards, Private projects** 
   :::column-end:::
   :::column span="3":::
      - View team and project dashboards 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Dashboards, Public project** 
   :::column-end:::
   :::column span="3":::
      - View team and project dashboards
      - Add and configure team or project dashboards 
   :::column-end:::
:::row-end:::

