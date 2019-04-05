---
title: Turn preview features on or off 
titleSuffix: Azure DevOps Services
description: Enable/disable or activate/deactivate features in preview at the user, team project, or account level  
ms.custom: Navigation
ms.technology: devops-collab
ms.prod: devops
ms.assetid: FB4E044D-B916-4901-A322-C87C3581A90A
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.date: 04/05/2019
---


# Enable preview features 

[!INCLUDE [temp](../../_shared/version-vsts-only.md)] 

As new features are introduced, you can turn them on or off. That way, you can try them out, provide feedback, and work with those features that meet your requirements.  

Some features provide a new user interface and functionality, which can be managed per user or team member. Others support a default experience for the account and are managed by an account administrator. 
 
> [!NOTE]   
> You can turn on or off select features for Azure DevOps Services. Preview features become available first on Azure DevOps Services and then become standard features with an update to Azure DevOps Server. At some point, the preview feature moves out of preview status and becomes a regular feature of the web portal.  

> [!div class="mx-tdBreakAll"]  
> |[Preview features per user](#user-level)| [Preview features per organization](#account-level)|  
> |-------------|----------|  
> |- [Analytics Views](../../report/powerbi/what-are-analytics-views.md)<br/>- Experimental themes<br/>- Git commit menu extension points<br/>- [New build result page](https://devblogs.microsoft.com/devops/whats-new-in-vsts-sprint-136-update/)<br/>- New log reader for Pipelines<br/>- [New PAT experience](/azure/devops/release-notes/2018/sprint-140-update#manage-your-personal-access-tokens-with-filtering-and-paging)<br/>- [New release progress views](../../pipelines/preview/new-release-summary.md)<br/>- [New YAML pipeline creation experience](/azure/devops/release-notes/2018/sep-10-azure-devops-launch#create-yaml-build-pipelines-using-the-new-wizard)<br/>- [Test analytics in new web platform](../../pipelines/test/test-analytics.md)<br/>- [Test tab in new web platform](../../pipelines/test/review-continuous-test-results-after-build.md)  |- [Analytics Views](../../report/powerbi/what-are-analytics-views.md)<br/>- Experimental themes<br/>- [Full Access to Azure Pipelines for Stakeholders](../../organizations/security/provide-stakeholder-pipeline-access.md)<br/>- [Git Forks](../../repos/git/forks.md)<br/>- [New build result page](https://devblogs.microsoft.com/devops/whats-new-in-vsts-sprint-136-update/)<br/>- New log reader for Pipelines<br/>- [New PAT experience](/azure/devops/release-notes/2018/sprint-140-update#manage-your-personal-access-tokens-with-filtering-and-paging)<br/>- [New release progress views](../../pipelines/preview/new-release-summary.md)<br/>- [New Releases Hub](/azure/devops/release-notes/2018/jun-19-vsts#organize-your-release-definitions-in-folders)<br/>- [New YAML pipeline creation experience](/azure/devops/release-notes/2018/sep-10-azure-devops-launch#create-yaml-build-pipelines-using-the-new-wizard)<br/>- [Test analytics in new web platform](../../pipelines/test/test-analytics.md)<br/>- [Test tab in new web platform](../../pipelines/test/review-continuous-test-results-after-build.md)   |

<a id="user-level">  </a>
## Enable features for your use  

From time to time, a new feature is introduced in Preview mode, which allows you to turn it on or off. 

1. To access the Preview features options, open your profile menu, and select **Preview features**. 

	> [!div class="mx-imgBorder"]  
	> ![Open Preview Features](_img/manage-features/choose-preview-features-vert.png)

0. To enable or disable a feature, choose the slider. 

	> [!div class="mx-imgBorder"]  
	> ![Preview features options for yourself](_img/manage-features/preview-features-user-level-s147.png) 

<!---

0. To access the Preview features options, open your profile menu, and select **Preview features**. 

	> [!div class="mx-imgBorder"]  
	> ![Open Preview Features](_img/manage-features/choose-preview-features-horz.png)  

0. To enable or disable a feature, choose the slider. 

	> [!div class="mx-imgBorder"]  
	> ![Preview features options for yourself](_img/manage-features/preview-features-user-level-s142.png) 

--->

<a id="account-level">  </a>
## Enable features at the organization level (for all users)  

When you enable a feature at the organization level, you essentially turn it on for all users of your account. Each user can then disable the feature if they so choose.

> [!TIP]  
> If you don't see the **for this account** menu option, then you aren't an account administrator. To get added as one, see [Add administrators, set permissions at the team project or collection level](../../organizations/security/set-project-collection-level-permissions.md).  

> [!div class="mx-imgBorder"]  
> ![Preview features options for the account](_img/manage-features/preview-features-org-level-s147.png)


## Features now enabled for all Azure DevOps Services 

### General

- [New Navigation](https://devblogs.microsoft.com/devops/new-navigation/)

### Azure Pipelines
- [New builds hub](/azure/devops/release-notes/2018/sep-10-azure-devops-launch#manage-build-pipelines-using-the-new-builds-page)
- [Build with multiple queues](https://github.com/Microsoft/vsts-agent/blob/master/docs/preview/yamlgettingstarted.md)  
- [New Releases Hub](/azure/devops/release-notes/2018/jun-19-vsts#organize-your-release-definitions-in-folders)<br/>
- [Approval gates in releases](../../pipelines/release/approvals/index.md) - [New Release Definition Editor](../../pipelines/release/define-multistage-release-process.md)  
- [Symbol server](../../pipelines/artifacts/symbols.md)  
- [Task tool installers](../../pipelines/process/tasks.md#tool-installers)  

### Azure Boards 
- [New Rich Text Editor](../../boards/queries/share-plans.md#rich-text)- [New Queries Experience](../../boards/queries/view-run-query.md)   
- [New Work Items](../../boards/work-items/view-add-work-items.md)   

### Azure Repos
- [Pull Request Status Policy](../../repos/git/pr-status-policy.md) 

### Azure Artifacts 
- [NuGet.org upstream sources](../../artifacts/nuget/upstream-sources.md) 
- [Updated package experience](../../artifacts/index.md) 

### Azure Test Plans
- [New Test Plan Experience](/azure/devops/release-notes/2018/jun-19-vsts#test-1)  

### Dashboards and Analytics 
- [New Dashboards Experience](../../report/dashboards/dashboards.md)  

### Social tools 
- [Wiki](../wiki/add-edit-wiki.md)  
- [Combine email recipients](../../notifications/howto-manage-team-notifications.md) 
- [New experience in Code, Work Item, & Wiki search](/azure/devops/release-notes/2017/oct-06-vsts#code)  
- [Out of the box notifications](../../notifications/howto-manage-personal-notifications.md)   
- [Team expansion for notifications](../../notifications/howto-manage-team-notifications.md)

### Organization, project, and billing management
- [Streamlined User Management](../../accounts/add-account-users-assign-access-levels.md)   






