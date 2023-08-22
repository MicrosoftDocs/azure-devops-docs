---
title: Manage preview features
titleSuffix: Azure DevOps Services
description: Enable/disable or activate/deactivate features in preview at the user or organization level  
ms.custom: navigation, cross-project, cross-service, engagement-fy23
ms.subservice: azure-devops-projects
ms.assetid: FB4E044D-B916-4901-A322-C87C3581A90A
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '>= azure-devops-2020'
ms.date: 06/22/2023
---

# Manage or enable features 

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

::: moniker range="azure-devops"

As new features are introduced, you can turn them on or off. That way, you can try them out, provide feedback, and work with the ones that meet your requirements.  

Some preview features provide access to entire new functionality. Others, such as the New Wiki experience, reflect a change to the user interface, but little or no change in functionality. 

> [!NOTE]   
> It may take up to three weeks after a release to Azure DevOps Services for the preview feature to appear in your organization. The [latest release notes](/azure/devops/release-notes/features-timeline) usually provide information on new preview features. You can turn on or off select features for Azure DevOps Services. Preview features become available first on Azure DevOps Services and then become standard features with an update to Azure DevOps Server. At some point, the preview feature moves out of preview status and becomes a regular feature of the web portal.  

::: moniker-end

::: moniker range="azure-devops-2020"

There are a few features you or an administrator can enable or disable. Some  features provide access to entire new functionality, while others provide a change to the user interface.  
::: moniker-end

::: moniker range="azure-devops"

The following table indicates which preview features can be enabled per user or team member, and which can be enabled for the organization.  You must be a member of the Project Collection Administrators group to change a preview feature at the organization-level. 


|**Preview features**|**Per user**|**Per organization**|
|--------------------|--------------|-----------------|
|[Pull Request Summary - Load of large files](#pull-request-summary)  | ✔️ |   |   
|[Analytics views](../../report/powerbi/what-are-analytics-views.md)| ✔️ | ✔️ |  
|Dependency Tracker Preview Features (ignore this setting) | ✔️ | ✔️ |   
|[Experimental themes](#experimental-themes) | ✔️ | ✔️ |     
|[Limit user visibility and collaboration to specific projects](../../user-guide/manage-organization-collection.md#project-scoped-user-group) |   | ✔️ |   
|New Artifacts (Feeds) Experience (accessibility updates) | ✔️ | ✔️ |   
|[New Boards Hubs](/azure/devops/release-notes/2022/sprint-202-update#new-boards-hubs-now-available-in-public-preview) | ✔️ | ✔️ |     
|[New release progress views](/azure/devops/release-notes/2018/may-30-vsts#visualize-release-progress)| ✔️ | ✔️ |    
|[New service connections experience](../../pipelines/library/service-endpoints.md)| ✔️ | ✔️ |    
|[New Settings Search in the organization settings panel](../../organizations/settings/search-settings.md)| ✔️ | ✔️ |    
|[New Teams page](../../organizations/settings/add-teams.md)| ✔️ | ✔️ |    
|New Wiki experience| ✔️ | ✔️ |     
|[Organization Permissions Settings Page v2](../../organizations/security/change-organization-collection-level-permissions.md)| ✔️ | ✔️ |     
|[Project Permissions Settings page](../../organizations/security/change-project-level-permissions.md)| ✔️ | ✔️ |     
|[Task Insights for Failed Pipeline Runs](../../pipelines/troubleshooting/troubleshooting.md#task-insights-for-failed-pipeline-runs)| ✔️ | ✔️ |      
|[YAML templates editor](../../pipelines/get-started/yaml-pipeline-editor.md#view-and-edit-templates)| ✔️ | ✔️ |   

::: moniker-end


::: moniker range="azure-devops-2020"
The following table indicates those features that you can enable as a user, project administrator, or project collection administrator. These preview features are only available to manage for Azure DevOps Server 2020 RTW. 

|**Feature**|**User**|**Project** | **Collection**|
|--------------------|--------------|-----------------||-----------------|
|[New service connections experience](../../pipelines/library/service-endpoints.md)| ✔️ |   |  ✔️ |     
|[Selective artifacts download feature for collection/project](../../pipelines/process/phases.md#artifact-download)|   | ✔️ |  ✔️ |   

::: moniker-end
 
::: moniker range="azure-devops"

<a id="user-level">  </a>

## Enable features for your use  

From time to time, a new feature is introduced in Preview mode, which allows you to turn it on or off.

To enable or disable a feature, slide the toggle to the **on** or **off** position. 

:::image type="content" source="media/preview-features/preview-features-user.png" alt-text="Screenshot of Preview features options for yourself.":::

For more information, see [Set user preferences](../../organizations/settings/set-your-preferences.md).

<a id="account-level">  </a>

## Enable features at the organization level 

When you enable a feature at the organization level, you essentially turn it on for all users of your account. Each user can then disable the feature if they so choose. If you disable a feature at the organization level, user settings aren't changed. Users can enable or disable the feature on their own. 

> [!TIP]  
> If you don't see the **for this account** menu option, then you aren't a member of the Project Collection Administrators group. To get added as one, see [Change project collection-level permissions](../../organizations/security/change-organization-collection-level-permissions.md).  

:::image type="content" source="media/preview-features/organization-preview-features.png" alt-text="Screenshot of preview features at organization level.":::

::: moniker-end

::: moniker range="azure-devops-2020"

## Enable or disable a feature   

1. Open your profile menu by choosing your image icon and select **Manage features**.  

   :::image type="content" source="media/manage-features/open-profile-2020.png" alt-text="Screenshot of Open profile menu, Azure DevOps Server 2020.":::

1. Select the level from the menu provided. 

	> [!TIP]  
	> If you don't see the **for this project** or **for this collection** menu options, then you aren't an administrator. To get added as one, see [Change project collection-level permissions](../../organizations/security/change-organization-collection-level-permissions.md).  

1. To enable or disable a feature, choose the slider. 

	**User-level**  
	:::image type="content" source="media/manage-features/manage-features-user-2020.png" alt-text="Screenshot of Manage features for the user.":::

	**Project-level**  
	:::image type="content" source="media/manage-features/manage-features-project-2020.png" alt-text="Screenshot of Manage features for the project.":::

	**Collection-level**  
	:::image type="content" source="media/manage-features/manage-features-collection-2020.png" alt-text="Screenshot of Manage features for the collection.":::

When you enable a feature at the project or collection-level, you essentially turn it on for all users. If you disable a feature at the project or collection-level, user settings aren't changed. Users can enable or disable the feature on their own. 

::: moniker-end

::: moniker range="azure-devops"

<a id="pull-request-summary">  </a>

## Pull Request Summary - Load of large files

Enables a file content load experience for large files in the Pull request summary.

<a id="experimental-themes">  </a>

## Experimental themes  

When you select Theme from the Profile menu, you can select between **Dark** and **Light** themes for the display of Azure DevOps web portal. 

:::image type="content" source="media/preview-features/menu-theme.png" alt-text="Screenshot of Profile menu, Theme selected.":::

With **Experimental themes** enabled, you can select from many other themes. 

:::image type="content" source="media/preview-features/choose-your-theme.png" alt-text="Screenshot of Choose your theme dialog.":::

## Features now enabled for all Azure DevOps Services 

The following features are now enabled for all Azure DevOps Services.

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

## Related articles

- [Set user preferences](../../organizations/settings/set-your-preferences.md)
- [Azure DevOps Feature Timeline](/azure/devops/release-notes/features-timeline)
