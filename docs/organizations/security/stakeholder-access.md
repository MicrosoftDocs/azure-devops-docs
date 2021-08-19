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


[!INCLUDE [version-all](../../includes/version-all.md)]

**Stakeholder** access is available to support free access to a limited set of features by an unlimited set of stakeholders.  In general, **Stakeholder** access users gain limited access to Azure Boards, Azure Pipelines, and collaboration tools. They have no access to code repositories. 

**Stakeholder** access users  can create and modify work items and create and save queries. They can also view and approve release pipelines and perform administrative tasks when granted administrative permissions or added to an administrative group. If they need to contribute to the code base, then you must assign them **Basic** or higher-level access.  

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
 
::: moniker range=">= azure-devops-2019" 
## Azure Boards 
::: moniker-end

::: moniker range="< azure-devops-2019" 
## Work tracking 
::: moniker-end

The following table summarizes the features Stakeholder access users have access to from Azure Boards. Stakeholders access users can view and edit all work items for which they have Area Path permissions, which by default is set to Allow for all user security groups. To learn more, see [Set permissions and access for work tracking](set-permissions-access-work-tracking.md#create-child-nodes-modify-work-items-under-an-area-path).

For an overview of work tracking features, see [What is Azure Boards?](../../boards/get-started/what-is-azure-boards.md) 

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
::: moniker range=">= azure-devops-2019" 
   :::column span="1":::
      **Work Items** 
   :::column-end:::
   :::column span="2":::
      - View, add, and edit work items   
      - Assign existing tags to work items 
      - Use the [Work Items hub](../../boards/work-items/view-add-work-items.md)
      - Change work item type<sup>1</sup>   
      - Email work items
      - Apply a work item template
   :::column-end:::
   :::column span="2":::
      - Add new work item tags
      - Delete work items
      - Move work items to another project
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range="< azure-devops-2019" 
:::row:::
   :::column span="1":::
      **Work Items** 
   :::column-end:::
   :::column span="2":::
      - View, add, and edit work items   
      - Assign existing tags to work items  
      - Email work items 
      - Apply a work item template
   :::column-end:::
   :::column span="2":::
      - Add new work item tags
      - Delete work items
      - Move work items to another project
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range="azure-devops" 
:::row:::
   :::column span="1":::
      **Boards** 
   :::column-end:::
   :::column span="2":::
      - View boards, open and edit work items
      - Add work items to a board
      - Update status through drag-and-drop
      - Add child items to a checklist
      - Assign to a sprint (from card field)
      - Configure team boards<sup>2</sup> 
   :::column-end:::
   :::column span="2":::
      - Change the priority of an item within a board
      - Change fields on cards on a board, except for State field
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range="azure-devops-2020" 
:::row:::
   :::column span="1":::
      **Boards** 
   :::column-end:::
   :::column span="2":::
      - View boards, open and edit work items
      - Update status through drag-and-drop
      - Add child items to a checklist
      - Assign to a sprint (from card field)
      - Configure team boards<sup>2</sup> 
   :::column-end:::
   :::column span="2":::
      - Add work items to a board
      - Change the priority of an item within a board
      - Change fields on cards on a board, except for State field
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range="< azure-devops-2020" 
:::row:::
   :::column span="1":::
      **Boards** 
   :::column-end:::
   :::column span="2":::
      - View boards, open and edit work items
      - Add work items to a board; update status through drag-and-drop
      - Add child items to a checklist
      - Assign to a sprint (from card field)
      - Configure team boards<sup>2</sup> 
   :::column-end:::
   :::column span="2":::
      - Add work items to a board
      - Update status through drag-and-drop
      - Change the priority of an item within a board
      - Change fields on cards on a board, except for State field
   :::column-end:::
:::row-end:::
::: moniker-end
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
      - Configure team sprint taskboards<sup>2</sup> 
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
      - None
   :::column-end:::
   :::column span="2":::
      - View delivery plans
      - Add or edit a delivery plan
   :::column-end:::
:::row-end:::
::: moniker-end

**Notes:**
1. Controllable through project-level permission.
2. Requires assignment as a team administrator or member of the Project Administrators Group.


::: moniker range=">= azure-devops-2019" 
## Azure Pipelines 
::: moniker-end

::: moniker range="azure-devops" 
The following table summarizes the features available to **Stakeholder** access users for Private and Public projects. When the **Free access to Pipelines for Stakeholders** preview feature is enabled for the organization, Stakeholders get access to all features listed under **Public project**.  Without this feature enabled, **Stakeholder** access users can only view and approve releases. To learn more, see [Provide Stakeholders access to edit build and release pipelines](provide-stakeholder-pipeline-access.md).

For an overview of pipelines features and functions, see [Continuous integration on any platform](../../pipelines/get-started/what-is-azure-pipelines.md).

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

::: moniker-end


::: moniker range=">= azure-devops-2019 < azure-devops" 

Users granted **Stakeholder** access can perform the following build and release tasks. For an overview of pipelines features and functions, see [Continuous integration on any platform](../../pipelines/get-started/what-is-azure-pipelines.md).
- View and approve releases
- View build pipelines
::: moniker-end


::: moniker range=">= azure-devops-2019" 
## Azure Test Plans 
::: moniker-end

::: moniker range="< azure-devops-2019" 
## Test 
::: moniker-end

Users granted **Stakeholder** access can perform the following tasks related to testing. For an overview of manual test features and functions, see [Testing overview](../../test/index.yml).  

- Provide feedback using the Test & Feedback extension
- Apply a work item template to a test case  
 
::: moniker range=">= tfs-2018" 

## Dashboards, notifications, READMEs, and wikis 

The following table summarizes the features **Stakeholder** access users have to these areas: [Dashboards](../../report/dashboards/overview.md), [Notifications](../../notifications/about-notifications.md), [Project pages](../../project/navigation/work-across-projects.md), [READMEs](../../project/wiki/about-readme-wiki.md#readmes), and [Wikis](../../project/wiki/provisioned-vs-published-wiki.md).

::: moniker-end
::: moniker range="azure-devops" 
> [!NOTE]   
> Public project **Stakeholder** access users have full access to all dashboard and Wiki features. 
::: moniker-end

::: moniker range=">= tfs-2018" 
:::row:::
   :::column span="1":::
      **Feature area** 
   :::column-end:::
   :::column span="2":::
      **Features can use**
   :::column-end:::
   :::column span="2":::
      **Features can't use**
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range="azure-devops" 
:::row:::
   :::column span="1":::
      Dashboards
   :::column-end:::
   :::column span="2":::
      - View dashboards   
   :::column-end:::
   :::column span="2":::
      - Add and configure team dashboards  	 
      - Add and configure project dashboards 
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range=">=tfs-2018 < azure-devops" 
:::row:::
   :::column span="1":::
      Dashboards
   :::column-end:::
   :::column span="2":::
      - View dashboards   
   :::column-end:::
   :::column span="2":::
      - Add and configure team dashboards  	 
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range=">= tfs-2018" 
:::row:::
   :::column span="1":::
      Notifications
   :::column-end:::
   :::column span="2":::
      - Set personal notifications or alerts
      - Set team notifications or alerts<sup>1</sup>
      - Set project-level notifications or alerts<sup>1</sup>
   :::column-end:::
   :::column span="2":::
         
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Project pages
   :::column-end:::
   :::column span="2":::
      - View the project page
      - Navigate using the Project pages
      - Set personal favorites
   :::column-end:::
   :::column span="2":::
      - View repository READMEs 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Search
   :::column-end:::
   :::column span="2":::
      - Perform work tracking and project wiki search
   :::column-end:::
   :::column span="2":::
      - Perform code search
      - Perform code wiki search
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      READMEs
   :::column-end:::
   :::column span="2":::
      - Can view project README 
   :::column-end:::
   :::column span="2":::
      - View repository READMEs 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Wikis
   :::column-end:::
   :::column span="2":::
      - View project wikis
   :::column-end:::
   :::column span="2":::
      - View code wikis
      - Edit project or code wikis
   :::column-end:::
:::row-end:::
::: moniker-end
 
**Notes:**
1. Requires team administrator role or addition to Project Administrators group.