---
title: About access levels
titleSuffix: Azure DevOps
description: Learn how access levels are used to grant or restrict access to web portal features through stakeholder, basic, basic+Test Plans, or VS Enterprise access levels 
ms.technology: devops-security
ms.assetid: E2C63C7B-6273-41D7-BD14-BFB340DF8D65
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 08/18/2021
---


# About access levels

[!INCLUDE [version-all](../../includes/version-all.md)]

Access levels grant or restrict access to select web portal features. This is in addition to permissions granted through security groups, which provide or restrict specific tasks. Access levels enable administrators to provide their user base access to the features they need and only pay for those features. 

[!INCLUDE [temp](../../includes/version-selector-minimize.md)] 

When you add a user or group to a team or project, they're automatically granted access to those features supported by the default access level and those supported by the security group to which they are added. Most users can access most features by being assigned to the **Basic** access level and **Contributors** security group. For a simplified overview of the permissions assigned to the most common groups **Readers**, **Contributors**, and **Project Administrators**, see [Default permissions](permissions-access.md).  

::: moniker range="azure-devops"  
To add user accounts or groups to specific access levels, see [Manage users and access](../accounts/add-organization-users.md). Make sure to set each user's access level based on what you've purchased for that user.
::: moniker-end  

::: moniker range="< azure-devops"  
To add user accounts or groups to specific access levels, see [Change access levels](change-access-levels.md). Make sure to set each user's access level based on what you've purchased for that user. 
::: moniker-end  

## Supported access levels

Assign users or groups of users to one of the following access levels:

::: moniker range="azure-devops"

- **Stakeholder**: Provides partial access, can be assigned to unlimited users for free. Assign to users with no license or subscriptions who need access to a limited set of features.
- **Basic**: Provides access to most features. Assign to users with a Visual Studio Professional subscription, an Azure DevOps Server CAL, and to users for whom you're paying for Basic access in an organization.
- **Basic + Test Plans**: Provides access to all features included in Basic, as well as Azure Test Plans. Assign to users with a Visual Studio Test Professional or MSDN Platforms subscription, and to users for whom you're paying for Basic + Test Plans access in an organization.
- **Visual Studio subscription**: Assign to users who already have a Visual Studio subscription. The system automatically recognizes the user's subscription&mdash;Visual Studio Enterprise, Visual Studio Professional, Visual Studio Test Professional, or MSDN Platform&mdash;and enables any other features that are included in their subscription level. If you assign Basic or Stakeholder, they also receive their Visual Studio subscription benefits upon sign-in.

> [!TIP]
> As a best practice when adding new users, we recommend assigning the Visual Studio subscriber level when appropriate (as opposed to Basic) to prevent being charged the Basic rate before the user signs in for the first time.

::: moniker-end  

::: moniker range="azure-devops-2019 || azure-devops-2020"

- **Stakeholder**: Provides partial access, can be assigned to unlimited users for free. Assign to users with no license or subscriptions who need access to a limited set of features.
- **Basic**: Provides access to most features. Assign  to users with an Azure DevOps Server CAL, with a Visual Studio Professional subscription, and to users for whom you're paying for Basic access in an organization.
- **Basic + Test Plans**: Provides access for users who have a monthly Test Manager subscription, Visual Studio Test Professional, or MSDN Platforms subscription. 
- **VS Enterprise**: Provides access to premium features. Assign to users with a subscription to Visual Studio Enterprise.

::: moniker-end  

 

::: moniker range="tfs-2018"

- **Stakeholder**: Provides partial access, can be assigned to unlimited users for free. Assign to users with no license or subscriptions who need access to a limited set of features.
- **Basic**: Provides access to most features. Assign to users with a CAL or with a Visual Studio Professional subscription. 
- **Advanced** (legacy access level, deprecated in Azure DevOps Server 2019): Provides access to premium features. Only assign to users with a subscription to MSDN Platforms or Visual Studio Test Professional.
- **VS Enterprise**: Provides access to premium features. Assign to users with a subscription to Visual Studio Enterprise.


::: moniker-end    

::: moniker range="tfs-2017"

- **Stakeholder**: Provides partial access, can be assigned to unlimited users for free. Assign to users with no license or subscriptions who need access to a limited set of features.
- **Basic**: Provides access to most features. Assign to users with a CAL or with a Visual Studio subscription. 
- **Advanced** (TFS 2017): Provides access to premium features. Only assign to users with a subscription to MSDN Platforms or Visual Studio Test Professional.
- **VS Enterprise** (TFS 2017.1 and later versions): Provides access to premium features. Assign to users with a subscription to Visual Studio Enterprise.


::: moniker-end



The following table indicates those features available for each supported access level. Visual Studio Test Professional and MSDN Platform subscriptions grant access to the same features as Visual Studio Enterprise. 

<a id="access-level-settings" />


---
::: moniker range="azure-devops"
:::row:::
   :::column span="3":::
      **Feature**
   :::column-end:::
   :::column span="1":::
      **Stakeholder**
   :::column-end:::
   :::column span="1":::
      **Basic** &<br/>**Visual Studio Professional**
   :::column-end:::
   :::column span="1":::
      **Basic + Test Plans &**<br/>**Visual Studio Enterprise**
   :::column-end:::
:::row-end:::
---
::: moniker-end  
::: moniker range="azure-devops-2019 || azure-devops-2020"
:::row:::
   :::column span="3":::
      **Feature**
   :::column-end:::
   :::column span="1":::
      **Stakeholder**
   :::column-end:::
   :::column span="1":::
      **Basic** &<br/>**Visual Studio Professional**
   :::column-end:::
   :::column span="1":::
      **Basic + Test Plans** &<br/>**Visual Studio Enterprise**
   :::column-end:::
:::row-end:::
---
::: moniker-end  
::: moniker range="tfs-2017 || tfs-2018"
:::row:::
   :::column span="3":::
      **Feature**
   :::column-end:::
   :::column span="1":::
      **Stakeholder**
   :::column-end:::
   :::column span="1":::
      **Basic** &<br/>**Visual Studio Professional**
   :::column-end:::
   :::column span="1":::
      **Advanced** & <br/>**Visual Studio Enterprise**
   :::column-end:::
:::row-end:::
---
::: moniker-end  
::: moniker range="<= tfs-2015"
:::row:::
   :::column span="3":::
      **Feature**
   :::column-end:::
   :::column span="1":::
      **Stakeholder**<br/>**(Limited)**
   :::column-end:::
   :::column span="1":::
      **Basic**<br/>**(Standard)**
   :::column-end:::
   :::column span="1":::
      **Advanced**<br/>**(Full)**
   :::column-end:::
:::row-end:::
---
::: moniker-end  
:::row:::
   :::column span="3":::
      [**Administer organization**](../settings/about-settings.md)  
      Can configure resources when also added to a security group or role: team administrator, Project Administrator, or Project Collection Administrator.
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      **Advanced backlog and sprint planning tools**  
      Includes full access to all [backlog](../../boards/backlogs/backlogs-overview.md) and [sprint planning](../../boards/sprints/scrum-overview.md) tools.
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      **Advanced home page**  
      Includes [access to projects, work items, and pull requests defined across projects you work in](../../project/navigation/work-across-projects.md).
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      **Advanced portfolio management**  
      Includes full access to define features and epics from a [portfolio backlog](../../boards/backlogs/define-features-epics.md) or [Kanban board](../../boards/boards/kanban-epics-features-stories.md).  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="3":::
      **Agile boards**  
      Stakeholders have limited access to [Kanban boards](../../boards/boards/kanban-quickstart.md) and [Taskboards](../../boards/sprints/task-board.md). Stakeholders can add work items and update status through drag-and-drop, but can't update fields displayed on cards (except for the work item State) and can't [view or set capacity](../../boards/sprints/set-capacity.md).
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker-end  
::: moniker range="< azure-devops-2020"
:::row:::
   :::column span="3":::
      **Agile boards**  
      Stakeholders have limited access to [Kanban boards](../../boards/boards/kanban-quickstart.md) and [Taskboards](../../boards/sprints/task-board.md). Stakeholders can't add work items, drag-and-drop cards to update status, update fields displayed on cards, nor [view or set capacity](../../boards/sprints/set-capacity.md).
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker-end 
::: moniker range=">= tfs-2017"
:::row:::
   :::column span="3":::
      **Agile Portfolio Management**  
      Includes limited access to [portfolio backlogs](../../boards/backlogs/define-features-epics.md) and [Kanban boards](../../boards/boards/kanban-epics-features-stories.md). Stakeholders can't change the backlog priority order, can't assign items to an iteration, use the mapping pane, or exercise forecasting.  
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
::: moniker-end 
::: moniker range="<= tfs-2015"
:::row:::
   :::column span="3":::
      **Agile Portfolio Management**  
      Includes limited access to [portfolio backlogs](../../boards/backlogs/define-features-epics.md) and [Kanban boards](../../boards/boards/kanban-epics-features-stories.md). Stakeholders can't change the backlog priority order, can't assign items to an iteration, use the mapping pane, or exercise forecasting.  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
::: moniker-end 
::: moniker range="> tfs-2018"
:::row:::
   :::column span="3":::
      [**Artifacts**](../../artifacts/overview.md)  
      Includes full access to all Azure Artifacts features, up to 2 GiB free storage.
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker-end 
::: moniker range="tfs-2017 || tfs-2018"
:::row:::
   :::column span="3":::
      [**Artifacts**](../../artifacts/overview.md)  
      Includes full access to all Azure Artifacts features, up to 2 GiB free storage.
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker-end 
:::row:::
   :::column span="3":::
      **Author Release Pipelines and Manage Releases**  
      Includes defining [release pipelines](../../pipelines/release/index.md), [multi-stage continuous deployment (CD) pipelines](../../pipelines/release/define-multistage-release-process.md), and [using approvals and gates to control deployments](../../pipelines/release/deploy-using-approvals.md); when the [**Free access to Pipelines Preview** feature is enabled](provide-stakeholder-pipeline-access.md), Stakeholders gain access to all Azure Pipelines features.
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
      **Basic backlog and sprint planning tools**  
      Includes limited access to add and modify items on [backlogs](../../boards/backlogs/backlogs-overview.md) and [sprint backlogs and taskboards](../../boards/sprints/scrum-overview.md). Stakeholders can't assign items to an iteration, use the mapping pane, or forecasting.
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
      **Build**  
      Includes full access to all features to [manage continuous integration and continuous delivery of software](../../pipelines/get-started/what-is-azure-pipelines.md).
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
      **Chart Authoring**  
      Can create work tracking [query charts](../../report/dashboards/charts.md).
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      **Chart Viewing**  
      Can only view work tracking query charts. Stakeholders can't view query charts from the Queries page, however can view them when added to a dashboard.  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      **Code**  
      Includes full access to all features to manage code using [Git repositories](../../repos/git/index.yml) or using [Team Foundation Version Control (TFVC)](../../repos/tfvc/index.yml) Team Foundation Version Control (TFVC). 
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker range=">= tfs-2017"
:::row:::
   :::column span="3":::
      [**Delivery Plans**](../../boards/plans/review-team-plans.md)  
      Includes full access to add and view Delivery plans. 
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="3":::
      [**Request and Manage Feedback**](../../project/feedback/get-feedback.md)
      Includes full access to request and manage feedback on working software.  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      **Standard Features**  
      Includes [working across projects](../../project/navigation/work-across-projects.md), [View dashboards](../../report/dashboards/dashboards.md), [View wikis](../../project/wiki/filter-print-wiki.md), and [Manage personal notifications](../../notifications/manage-your-personal-notifications.md). Stakeholders can't view markdown README files defined for repositories and can only read wiki pages.  
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker range="<= tfs-2017"
:::row:::
   :::column span="3":::
      [**Team rooms**](/previous-versions/azure/devops/notifications/collaborate-in-a-team-room)   
      Requires TFS 2017 or earlier versions. Deprecated for TFS 2018 and later versions.  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="3":::
      **Test services in build and release**  
      Includes [running unit tests with your builds](../../pipelines/ecosystems/dotnet-core.md#run-your-tests), [reviewing](../../pipelines/test/review-continuous-test-results-after-build.md), and [analyzing](../../pipelines/test/test-analytics.md) test results.  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      **Test Case Management**  
      Includes [adding test plans and test suites](../../test/create-a-test-plan.md), [creating manual test cases](../../test/create-test-cases.md), [deleting test artifacts](../../boards/backlogs/delete-test-artifacts.md), and [testing different configurations](../../test/test-different-configurations.md).  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      **Test Execution and Test Analysis**  
      Includes running [manual](../../test/run-manual-tests.md), [tracking test status](../../test/track-test-status.md), and [automated tests](../../test/run-automated-tests-from-test-hub.md).
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker range=">= tfs-2017"
:::row:::
   :::column span="3":::
      **Test summary access to Stakeholder license**  
      Includes [requesting Stakeholder feedback using the Test & Feedback extension](../../test/request-stakeholder-feedback.md). 
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="3":::
      **View My Work Items**  
      Access to [add and modify work items](../../boards/work-items/about-work-items.md), [follow work items](../../boards/work-items/follow-work-items.md), [view and create queries](../../boards/queries/view-run-query.md), and [submit, view, and change feedback responses](../../project/feedback/give-feedback.md). Stakeholders can only assign existing tags to work items (can't add new tags) and can only save queries under My Queries (can't save under Shared Queries). 
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker range=">= tfs-2017"
:::row:::
   :::column span="3":::
      **View Releases and Manage Approvals**  
      Includes [viewing releases](../../pipelines/release/approvals/index.md) and [approving releases](../../pipelines/release/approvals/index.md); when the [**Free access to Pipelines Preview** feature is enabled](provide-stakeholder-pipeline-access.md) feature is enabled, Stakeholders gain access to all Azure Pipelines features. 
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker-end


<a id="basic" />

::: moniker range="azure-devops"

## Visual Studio subscription access

Visual Studio subscribers are entitled to **Visual Studio subscription** features as a subscriber benefit. When you add those users, be sure to assign them the **Visual Studio subscription** access level. 

The system automatically recognizes their subscription and enables any other features that are included, based on their subscription level.

::: moniker-end  

::: moniker range=">= tfs-2017 < azure-devops"

## VS Enterprise access

Visual Studio Enterprise subscribers are entitled to **VS Enterprise** access as a subscriber benefit. When you add those users, be sure to assign them the **VS Enterprise** access level. 

With VS Enterprise access, users have access to any fee-based, Marketplace extension published by Microsoft Marketplace extension published by Microsoft that is included for active Visual Studio Enterprise subscribers. 

::: moniker-end

::: moniker range="tfs-2017"  

For TFS 2017.2 and later versions, assign **VS Enterprise** to those users for whom you've purchased Visual Studio Enterprise. These include a TFS CAL plus the rights to access VS Enterprise features. (For users with MSDN Platforms subscriptions or Test Professional, assign the Basic access level and the Test Manager extension for Azure Test Plans.) To learn more, see [Assign paid extension access to users](../../marketplace/install-extension.md). For example, for users with Visual Studio Test Professional or Visual Studio Enterprise, assign them [access to the Test Manager extension for Azure Test Plans](../../marketplace/install-extension.md).

::: moniker-end

::: moniker range="< azure-devops-2019"

## Advanced access

Users assigned Advanced access can manage test cases when you have [purchased the Test Manager extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) for Azure Test Plans and assigned to the user accounts to gain full access to [Web-based test case management tools](../../test/create-a-test-plan.md).

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops"

Users assigned Advanced access have all the Basic features, plus [web-based test case management tools](../../test/create-a-test-plan.md). You can [buy monthly access](../billing/buy-access-tfs-test-hub.md#buy-monthly-access-to-azure-test-plans) or add users who already have a Visual Studio Test Professional with MSDN or MSDN Platforms subscription. 
 
::: moniker-end



::: moniker range="tfs-2017"

For TFS 2017 and earlier versions, you should assign the **Advanced** level to those users for whom you've purchased the full Test feature set. Here are the purchasing options:  
- Higher-level Visual Studio subscriptions: Visual Studio Test Professional, Visual Studio Enterprise, or MSDN Platforms subscriptions.
These include a TFS CAL plus the rights to access the full set of Test features.  
- A paid Azure DevOps user (which includes a TFS CAL) plus the [Test Manager extension](../billing/buy-basic-access-add-users.md). 

For TFS 2017.2, Assign **Advanced** access to those users for whom you've purchased MSDN Platforms or Visual Studio Test Professional subscriptions. These include a TFS CAL plus the rights to access Test Manager. To learn more, see [Get extensions for TFS, Assign paid extension access to users](../../marketplace/install-extension.md).
	

> [!NOTE]   
> With TFS 2017.1, the Advanced access level was temporarily disabled. Updating to TFS 2017.2 re-enables it. If you are on TFS 2017.1 and have users with Visual Studio Test Professional or MSDN Platforms subscriptions, you should assign them Basic access. In addition, you need to open **Users** for the project collections in which they are a member and [assign them the Test Manager extension for Azure Test Plans](../../marketplace/install-extension.md). To learn more, see [Buy access to TFS or TFS Test](../billing/buy-access-tfs-test-hub.md). 

::: moniker-end

<!--- This section will change based on RC2 or RTW 

Removed sections per Harish Kumar Agarwal, "adds no value" 06/05/2019 chcomley

<a id="test-manager"  >  </a>

::: moniker range=">= azure-devops-2019"

## Test Plans, load testing, and Marketplace extensions

Full access to **Test Plans** and load testing features requires **VS Enterprise** or **Basic + Test Plans** access. Visual Studio Test Professional, plus the test features in the web portal, are managed through Azure DevOps, Azure billing services, and purchase of Test Manager extension for Azure Test Plans from the Marketplace.  

To learn more, see [Try Azure Test Plans](../billing/try-additional-features-vs.md). 

::: moniker-end

::: moniker range=">=tfs-2015 <= tfs-2018"

## Test features and Marketplace extensions

Full access to **Test** features requires **Advanced** (TFS 2017 or earlier versions) or **VS Enterprise** (TFS 2017.1 or later version) access. Visual Studio Test Professional plus the test features in the web portal are managed through Azure DevOps, Azure billing services, and purchase of the Test Manager extension for Azure Test Plans.  

To learn how to grant access to an extension, see [Get extensions for TFS](../../marketplace/get-tfs-extensions.md).  

::: moniker-end

-->

<a id="mapping" /> 

::: moniker range=">= tfs-2018" 

## Programmatic mapping of access levels

::: moniker-end


::: moniker range="azure-devops"

You can manage access levels programmatically using the [`az devops user add` (Azure DevOps Services only)](../accounts/add-organization-users.md) or the [User Entitlement - Add REST API](/rest/api/azure/devops/memberentitlementmanagement/user%20entitlements/add). The following table provides a mapping of the access level selected through the user interface and the `AccountLicenseType` and `msdnLicenseType` parameters.

| Access level (user interface)| AccountLicenseType | msdnLicenseType| 
| --------------------------|-----------------------------|-----------|
| Stakeholder | stakeholder | none | 
| Basic              | express  | none | 
| Basic + Test Plans | advanced | none | 
| Visual Studio subscriber | none | eligible | 
| Visual Studio Enterprise | none | enterprise | 


 > [!NOTE]   
 > The `earlyAdopter` AccountLicenseType is an internal value used solely by Microsoft.  

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020" 

You can manage access levels programmatically using the [User Entitlement - Add REST API](/rest/api/azure/devops/memberentitlementmanagement/user%20entitlements/add). The following table provides a mapping of the access level selected through the user interface and the `AccountLicenseType` and `msdnLicenseType` parameters.

| Access level (user interface)| AccountLicenseType | msdnLicenseType| 
| --------------------------|-----------------------------|
| Stakeholder | stakeholder | none | 
| Basic              | express  | none | 
| Basic + Test Plans | advanced | none | 
| Visual Studio subscriber | none | eligible | 
| Visual Studio Enterprise | none | enterprise | 

::: moniker-end

::: moniker range="tfs-2018" 

You can manage access levels programmatically using the [User Entitlement - Add REST API](/rest/api/azure/devops/memberentitlementmanagement/user%20entitlements/add). The following table provides a mapping of the access level selected through the user interface and the `AccountLicenseType` and `msdnLicenseType` parameters.

| Access level (user interface)| AccountLicenseType | msdnLicenseType| 
| --------------------------|-----------------------------|
| Stakeholder | stakeholder | none | 
| Basic       | express  | none | 
| Advanced | advanced | none | 
| MSDN Platforms | none | platforms | 
| VS Enterprise | none | enterprise | 

::: moniker-end


::: moniker range="< azure-devops"

## What features are available to users who are added to two different access levels?

If a user belongs to a group that has **Basic** access and another group that has **VS Enterprise** access, the user has access to all features available through **VS Enterprise**, which is a superset of **Basic**.

## Service account access

Azure DevOps Server [service accounts](/azure/devops/server/admin/service-accounts-dependencies) are added to the default access level. If you make Stakeholder the default access level, you must add the service accounts to Basic or Advanced/VS Enterprise access.  

Service accounts don't require a CAL or other purchase.  

::: moniker-end

## Related articles  

::: moniker range="azure-devops"

- [Stakeholder access quick reference](stakeholder-access.md)
- [Free access to Pipelines Preview](provide-stakeholder-pipeline-access.md)
- [Manage users and access](../accounts/add-organization-users.md)
- [Get started as a Stakeholder](get-started-stakeholder.md)
- [Export a list of users and their access levels](export-users-audit-log.md)
- [Default permissions and access](permissions-access.md)


::: moniker-end


::: moniker range="< azure-devops"
- [Stakeholder access quick reference](stakeholder-access.md)
- [Change access levels](change-access-levels.md)
- [Get started as a Stakeholder](get-started-stakeholder.md)
- [Export a list of users and their access levels](export-users-audit-log.md)
- [Default permissions and access](permissions-access.md)
- [Compare features between plans](https://azure.microsoft.com/services/devops/compare-features/)

::: moniker-end