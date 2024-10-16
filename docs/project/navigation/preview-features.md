---
title: Manage preview features
titleSuffix: Azure DevOps
description: Learn how to enable preview features in Azure DevOps and get early access to new functionalities and improvements. Preview features are easy to turn on or off.
ms.custom: navigation, cross-project, cross-service, engagement-fy23
ms.subservice: azure-devops-projects
ms.assetid: FB4E044D-B916-4901-A322-C87C3581A90A
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 10/08/2024
---

# Manage preview features 

[!INCLUDE [version-gt-eq-2020](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="azure-devops"

As some new features get introduced, you can turn them on or off. You can try them out, provide feedback, and work with the ones that meet your requirements. Some preview features provide access to new functionality, while others reflect a change to the user interface, but little or no change in functionality. 

> [!NOTE]   
> It might take up to three weeks after a release to Azure DevOps for the preview feature to appear in your organization. The [latest release notes](/azure/devops/release-notes/features-timeline) usually provide information on new preview features. You can turn on or off select features for Azure DevOps. Preview features become available first on Azure DevOps Services and then become standard features with an update to Azure DevOps Server. At some point, the preview feature moves out of preview status and becomes a regular feature of the web portal.  

::: moniker-end

::: moniker range="< azure-devops"

As some new features get introduced, you can turn them on or off. You can try them out, provide feedback, and work with the ones that meet your requirements. Some preview features provide access to new functionality, while others reflect a change to the user interface, but little or no change in functionality. 

::: moniker-end

## Turn on or off preview features

::: moniker range="azure-devops"

Select either your organization or personal settings from the dropdown menu and slide the toggle to **on** or **off** to change the feature status.

:::image type="content" source="media/preview-features/manage-preview-features.png" alt-text="Screenshot of Preview features options and dropdown menu for either personal or organizational settings.":::

Enabling a feature at the organization level activates it for all users. They can still turn it off individually. Disabling a feature at the organization level doesn’t affect user settings. Users can change feature status on their own. For more information, see [Set user preferences](../../organizations/settings/set-your-preferences.md).

> [!TIP]  
> If you don't see the **for this account** menu option, then you aren't a member of the Project Collection Administrators group. To get added as one, see [Change project collection-level permissions](../../organizations/security/change-organization-collection-level-permissions.md).  

::: moniker-end

::: moniker range="< azure-devops"

1. Open your profile menu by choosing your image icon and select **Manage features**.  

   :::image type="content" source="media/manage-features/open-profile-2020.png" alt-text="Screenshot of Open profile menu, Azure DevOps Server 2020.":::

2. Select the level from the menu provided. 

	> [!TIP]  
	> If you don't see the **for this project** or **for this collection** menu options, then you aren't an administrator. To get added as one, see [Change project collection-level permissions](../../organizations/security/change-organization-collection-level-permissions.md).  

3. To turn on or off a feature, choose the slider. 

	**User-level**  
	:::image type="content" source="media/manage-features/manage-features-user-2020.png" alt-text="Screenshot of Manage features for the user.":::

	**Project-level**  
	:::image type="content" source="media/manage-features/manage-features-project-2020.png" alt-text="Screenshot of Manage features for the project.":::

	**Collection-level**  
	:::image type="content" source="media/manage-features/manage-features-collection-2020.png" alt-text="Screenshot of Manage features for the collection.":::

When you turn on a feature at the project or collection-level, you turn it on for all users. If you turn off a feature at the project or collection-level, user settings aren't changed. Users can change feature status on their own. 

::: moniker-end

## Preview features

::: moniker range="azure-devops"

The following table shows the preview features you can turn on or off based on your role: user or team member, or for the organization. Only Project Collection Administrators can manage organization-level features. 

|**Preview features**|**Per user**|**Per organization**|
|--------------------|--------------|-----------------|
|[Pull Request Summary - Load of large files](#pull-request-summary---load-of-large-files)  | ✔️ |   |   
|[Experimental themes](#experimental-themes) | ✔️ | ✔️ | 
|[Limit user visibility and collaboration to specific projects](../../user-guide/manage-organization-collection.md#project-scoped-user-group)|   | ✔️ |    
|New Artifacts (Feeds) Experience (accessibility updates) | ✔️ | ✔️ |   
|[New Boards Hubs](../../boards/work-items/quick-ref.md) | ✔️ | ✔️ |
|[New service connections experience](../../pipelines/library/service-endpoints.md)| ✔️ | ✔️ |
| New Settings Search in the organization settings panel| ✔️ |✔️   |    
|[New workflow identity authentication option](../../pipelines/library/connect-to-azure.md)| ✔️ | ✔️ |    
|[New Teams page](../../organizations/settings/add-teams.md)| ✔️ | ✔️ |    
|New Wiki experience| ✔️ | ✔️ |     
|[Organization Permissions Settings Page v2](../../organizations/security/change-organization-collection-level-permissions.md)| ✔️ | ✔️ |     
|[Project Permissions Settings page](../../organizations/security/change-project-level-permissions.md)| ✔️ | ✔️ |     
|[Task Insights for Failed Pipeline Runs](../../pipelines/troubleshooting/troubleshooting.md#task-insights-for-failed-pipeline-runs)| ✔️ | ✔️ | 
|[Workload Identity federation for Azure Resource Manager service connections](../../pipelines/library/connect-to-azure.md)|    | ✔️  |     
|[YAML templates editor](../../pipelines/get-started/yaml-pipeline-editor.md#view-and-edit-templates)| ✔️ | ✔️ |   

::: moniker-end

::: moniker range="azure-devops-2020"

The following table shows the features you can turn on or off based on your role: user, project administrator, or project collection administrator. 

|**Feature**|**User**|**Project** | **Collection**|
|--------------------|--------------|-----------------||-----------------|
|[New service connections experience](../../pipelines/library/service-endpoints.md)| ✔️ |   |  ✔️ |     
|[Selective artifacts download feature for collection/project](../../pipelines/process/phases.md#artifact-download)|   | ✔️ |  ✔️ |   

::: moniker-end

::: moniker range="azure-devops-2022"

You can turn on or off the [Pull Request Summary - Load of large files](#pull-request-summary---load-of-large-files) feature on a per-user basis.

::: moniker-end

::: moniker range="azure-devops-2019"

You can turn on or off the [Selective artifacts download feature for collection/project](../../pipelines/process/phases.md#artifact-download) feature on a per project or collection basis.

::: moniker-end

::: moniker range=">= azure-devops-2022"

## Pull request summary - Load of large files

Turns on a file content load experience for large files in the Pull request summary.

::: moniker-end

::: moniker range="azure-devops"

## Experimental themes  

When you select **Theme** from the Profile menu, you can select between **Dark** and **Light** themes for the display of Azure DevOps web portal. 

:::image type="content" source="media/preview-features/menu-theme.png" alt-text="Screenshot of Profile menu, Theme selected.":::

With **Experimental themes** on, you can select from many other themes. 

:::image type="content" source="media/preview-features/choose-your-theme.png" alt-text="Screenshot of Choose your theme dialog.":::

## GA features for Azure DevOps

The following features are generally available for Azure DevOps.

### General

- [New user hub](../../organizations/accounts/add-organization-users.md)  
- [New PAT experience](/azure/devops/release-notes/2018/sprint-140-update#manage-your-personal-access-tokens-with-filtering-and-paging)  
- [New Navigation](https://devblogs.microsoft.com/devops/new-navigation/)
- [Wiki](../wiki/add-edit-wiki.md)  
- [Combine email recipients](../../organizations/notifications/manage-team-group-global-organization-notifications.md)
- [New experience in Code, Work Item, & Wiki search](/previous-versions/azure/devops/2017/oct-06-vsts#code)  
- [Out of the box notifications](../../organizations/notifications/manage-your-personal-notifications.md)   
- [Team expansion for notifications](../../organizations/notifications/manage-team-group-global-organization-notifications.md)
- [Streamlined User Management](../../organizations/accounts/add-organization-users.md)   

### Azure Artifacts 

- [NuGet.org upstream sources](../../artifacts/nuget/upstream-sources.md) 
- [Updated package experience](../../artifacts/index.yml) 

### Azure Boards, Dashboards, and Analytics 
- [Copy Dashboard Experience](../../report/dashboards/copy-dashboard.md)  
- [New Delivery Plans Experience](../../boards/plans/review-team-plans.md)  
- [Enable group by tags for work item chart widget on dashboard](../../boards/queries/add-tags-to-work-items.md#group-by-tags)  
- [New Queries Experience](../../boards/queries/view-run-query.md)   
- [New Work Items](../../boards/work-items/view-add-work-items.md)   
- [New Dashboards Experience](../../report/dashboards/dashboards.md)  
- [New boards reports](../../report/dashboards/overview.md#in-context-reports-work-tracking)
- [Analytics views](../../report/powerbi/what-are-analytics-views.md)

### Azure Repos

- New TFVC pages
- [Git Forks](../../repos/git/forks.md) 
- [New Repos pull request experience](https://devblogs.microsoft.com/devops/introducing-the-new-pull-request-experience-for-azure-repos)  
- [New Repos settings experience](/azure/devops/release-notes/2020/sprint-168-update#new-web-platform-conversion--repository-settings)  
- [New Repos landing pages](/azure/devops/release-notes/2019/sprint-159-update#new-web-ui-for-azure-repos-landing-pages-preview)  
- [Pull Request Status Policy](../../repos/git/pr-status-policy.md) 

### Azure Pipelines
 
- [Historical graph for agent pools](../../pipelines/agents/pool-consumption-report.md) 
- [Pipeline decorators](../../extend/develop/add-pipeline-decorator.md)  
- [Multi-stage pipelines](../../report/powerbi/../../pipelines/process/stages.md)  
- [Test tab in new web platform](../../pipelines/test/review-continuous-test-results-after-build.md)
- [Test analytics in new web platform](../../pipelines/test/test-analytics.md)  
- [New builds hub](/azure/devops/release-notes/2018/sep-10-azure-devops-launch#manage-build-pipelines-using-the-new-builds-page)
- [Build with multiple queues](https://github.com/Microsoft/vsts-agent/blob/master/docs/preview/yamlgettingstarted.md)  
- [New Releases Hub](/azure/devops/release-notes/2018/jun-19-vsts#organize-your-release-definitions-in-folders)<br/>
- [Approval gates in releases](../../pipelines/release/approvals/index.md) - [New Release Definition Editor](../../pipelines/release/define-multistage-release-process.md)  
- [Symbol server](../../pipelines/artifacts/symbols.md)  
- [Task tool installers](../../pipelines/process/tasks.md#tool-installers)  

### Azure Test Plans

- [New Test Plans Page](../../test/navigate-test-plans.md)  
- [New Test Plan Experience](/azure/devops/release-notes/2018/jun-19-vsts#test-1)  

::: moniker-end

## Transition of Preview Features to General Availability

While there's no fixed timeline for when a preview feature will move to general availability (GA), there are several indicators and resources you can use to stay informed about the status of preview features:

- **Azure DevOps roadmap and release notes:** The Azure DevOps roadmap provides insights into upcoming features and enhancements. It includes information about features currently in preview and their expected release timelines. Azure DevOps release notes provide detailed information about new features, improvements, and bug fixes. For more information, see the Relevant Links section at [Azure DevOps Blog](https://devblogs.microsoft.com/devops/). 
- **Azure DevOps blog:** The Azure DevOps blog often features posts about new releases, including when preview features transition to GA. Subscribing to the blog or regularly checking it can help you stay updated. For more information, see [Azure DevOps Blog](https://devblogs.microsoft.com/devops/).

## Related articles

- [Set user preferences](../../organizations/settings/set-your-preferences.md)
