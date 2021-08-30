---
title: Cross-service integration overview
titleSuffix: Azure DevOps
description: Learn about how Azure DevOps supports collaboration across all its services.
ms.technology: devops-agile 
ms.custom: cross-service
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2017'
ms.date: 08/30/2021
---
 

# Cross-service integration and collaboration overview 

[!INCLUDE [temp](../includes/version-tfs-2017-through-vsts.md)]

One of the major strengths of Azure DevOps is the integration it supports across its core services. Azure DevOps supports multiple integration points across each of the major services&mdash;Azure Boards, Azure Repos, Azure Pipelines, and Azure Test Plans. 

Review this article to understand the various integration points across Azure DevOps Services.  

## Azure Boards - Azure Repos 

The following table summarizes the integration points between Azure Boards and Azure Repos. Through various link types, you can track code changes&mdash;commits and pull requests for Git, and changesets and versioned items for Team Foundation Version Control (TFVC)&mdash;that support development of user stories and features. The link types used to construct these links include *Branch , Commit, Pull Request*, and *Tag* for Git repositories, and *Changeset*, and *Versioned Item* for TFVC repositories. To learn more, see [Link to work items from other objects, View list of linked objects](../notifications/add-links-to-work-items.md#view-list-links).

:::image type="content" source="media/integration-overview/concept-link-types-repos.png" alt-text="Conceptual image of link types that link work items to Azure Repos objects."::: 


:::row:::
   :::column span="1":::
      **Feature**
   :::column-end::: 
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Drive Git development from work item(s) 
   :::column-end::: 
   :::column span="2":::
      You can initiate a Git branch or link to Git commits or pull requests and drive your Git development cycle for a work item from within the work item form.  
      :::image type="content" source="media/integration-overview/development-control-git.png" alt-text="Screenshot of Development control for Git repositories.":::  
      For details, see [Drive Git development from a work item](../boards/backlogs/connect-work-items-to-git-dev-ops.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Automatically link and transition work items with Git commits  
   :::column-end::: 
   :::column span="2":::
      You can enable or disable the following options for a single Git repository:  
      - Automatically create links for work items mentioned in a commit comment 
      - Allow mentions in commit comments to close work items 
      - Remember user preferences for completing work items with pull requests.  
      <br/>For details, see [Configure branch policies to support integration](configure-repos-integration.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Check for linked work items in a Git branch
   :::column-end::: 
   :::column span="2":::
      Encourage traceability by checking for linked work items on pull requests. For details, see [Configure branch policies to support integration](configure-repos-integration.md).
   :::column-end:::
:::row-end:::
---
::: moniker range=">= tfs-2018"
:::row:::
   :::column span="1":::
      Auto complete work items with pull requests
   :::column-end::: 
   :::column span="2":::
      When you link a work item to a pull request (PR), you have the option to automatically complete those work items when you successfully complete the PR. The system defaults to your selection for future PRs. For details, see [Auto complete of work items with pull requests](../boards/work-items/auto-complete-work-items-pull-requests.md).
   :::column-end:::
:::row-end:::
--- 
::: moniker-end
:::row:::
   :::column span="1":::
      View list of code objects a single work item is linked to 
   :::column-end::: 
   :::column span="2":::
      You can link work items to code changes, builds, and releases&mdash;providing an audit trail of how a feature has been developed 
   :::column-end:::
:::row-end:::
--- 




## Azure Boards - Azure Pipelines

The following table summarizes the integration points between Azure Boards and Azure Pipelines. Several features provide support for end-to-end traceability as user stories and features move through the development cycle. As with Azure Repos, you can link work items to pipeline objects with the following link types: *Build, Integrated in build*, and *Integrated in release*.  

:::image type="content" source="media/integration-overview/concept-link-types-pipelines.png" alt-text="Conceptual image of link types that link work items to Azure Pipelines objects.":::

:::row:::
   :::column span="1":::
      **Feature**
   :::column-end::: 
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Manually link work items to builds.
   :::column-end::: 
   :::column span="2":::
      ::: moniker range=">= azure-devops-2020"
      Link work items to builds in the same or other project within the organization or collection.
      ::: moniker-end
      ::: moniker range="< azure-devops-2020"
      Link work items to builds in the same project within the organization or collection.
      ::: moniker-end
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Set integration option to automatically create *Integrated in build* links to work items linked to a branch, commit, or pull request associated with a pipeline.
   :::column-end::: 
   :::column span="2":::
      Required to populate the **Development** control with Integrated in build links. The work items or commits that are part of a release are computed from the versions of artifacts. For example, each build in Azure Pipelines is associated with a set of work items and commits. For details, see [Configure pipelines to support integration](configure-pipelines-integration.md).
      :::image type="content" source="media/integration-overview/development-control.png" alt-text="Screenshot of Development control showing several links.":::  
   :::column-end:::
:::row-end:::
--- 
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      Set option and branch to automatically create *Integrated in build* and *Integrated in release stage* links to work items linked to a branch, commit, or pull request associated with a Classic or YAML pipeline. For details, see [Configure pipelines to support integration](configure-pipelines-integration.md). 
   :::column-end::: 
   :::column span="2":::
      Required to populate the work item form **Development** control with *Integrated in build* links and the **Deployment** control with *Integrated in release stage* links when running a Classic or YAML pipeline. For details, see [Configure pipelines to support integration](configure-pipelines-integration.md). 
   :::column-end:::
:::row-end:::
--- 
::: moniker-end
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="1":::
      Set integration option to automatically create *Integrated in release stage* links to work items linked to a branch, commit, or pull request associated with a release.
   :::column-end::: 
   :::column span="2":::
      Required to populate **Deployment** control in work item form with **Integrated in release stage** links. For details, see [Configure pipelines to support integration](configure-pipelines-integration.md#auto-link-work-items). 
   :::column-end:::
:::row-end:::
--- 
::: moniker-end
::: moniker range="azure-devops-2020"
:::row:::
   :::column span="1":::
      View list of work items linked to a Classic release pipeline
   :::column-end::: 
   :::column span="2":::
      Lists all work items linked to a build or release. 
   :::column-end:::
:::row-end:::
--- 
::: moniker-end
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      View and open list of work items linked to a Classic or YAML pipeline. 
   :::column-end::: 
   :::column span="2":::
      Lists all work items linked to a release since the previous selected release. Can sort the list by each column.  
   :::column-end:::
:::row-end:::
--- 
::: moniker-end
:::row:::
   :::column span="1":::
      View list of build or release objects a single work item is linked to 
   :::column-end::: 
   :::column span="2":::
      You can link work items to builds and releases&mdash;providing an audit trail of how a feature has been built and deployed. To learn more, see [Link to work items from other objects, View list of linked objects](../notifications/add-links-to-work-items.md#view-list-links). 
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      Query for external links.
   :::column-end::: 
   :::column span="2":::
      You can query for work items that contain external links. For details, see [Query by link or attachment count](../boards/queries/linking-attachments.md)
   :::column-end:::
:::row-end:::
--- 
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="1":::
      View and quickly navigate to release stages a work item is linked to.
   :::column-end::: 
   :::column span="2":::
      The work item form **Deployment** control lists set of stages work item is associated with. You can expand a stage to view status of select runs and quickly open each stage or run. For details, see [Link and view work items to builds and deployments](../boards/work-items/work-item-deployments-control.md).  
      :::image type="content" source="../boards/work-items/media/deployments-control/deployment-control-intro.png " alt-text="Screenshot of Deployment control showing several expandable deployment stages.":::  
   :::column-end:::
:::row-end:::
---  
::: moniker-end
::: moniker range="azure-devops-2020"
:::row:::
   :::column span="1":::
      Create a work item on failure, optionally set values for a work item field (Classic)
   :::column-end::: 
   :::column span="2":::
      Automatically create a work item and set fields when a build fails. For details, see [Build options](../pipelines/build/options.md).  
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      Create a work item on failure (Classic or YAML), optionally set values for a work item field (Classic)
   :::column-end::: 
   :::column span="2":::
      Automatically create a work item and set fields when a build fails. For details, see [Build options](../pipelines/build/options.md) for Classic pipelines, and [Customize pipelines, Create work item on failure](../pipelines/customize-pipeline.md#create-work-item-on-failure).  
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="1":::
      Query Work Items task. Ensure the number of matching work items returned from a query is within a threshold.
   :::column-end::: 
   :::column span="2":::
       Use this task to ensure the number of matching items returned by a work item query is within the configured thresholds. For details, see [Query Work Items task, Control deployments with gates and approvals](../pipelines/tasks/utility/work-item-query.md).  
   :::column-end:::
:::row-end:::
--- 
::: moniker-end


::: moniker range=">= tfs-2018"

## Azure Repos - Azure Pipelines 

Azure Pipelines provides support for building code stored in Azure Repos, either a Git or Team Foundation Version Control (TFVC) repository. Other repositories that Azure Pipelines supports are listed in [Supported source repositories](../pipelines/repos/index.md).  

The following table summarizes the integration features between Azure Repos and Azure Pipelines. 
::: moniker-end

::: moniker range=">= tfs-2018"
:::row:::
   :::column span="1":::
      **Feature**
   :::column-end::: 
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= tfs-2018"
:::row:::
   :::column span="1":::
      Report deployment status
   :::column-end::: 
   :::column span="2":::
       Indicates the status of a deployment on the **Files**, **Commits**, and **Branches** pages for Git repositories. This feature improves the traceability from code commit to deployment. You can configure the release environments to report deployment status. For details, see [Configure pipelines to support integration](configure-pipelines-integration.md#report-release-status).
   :::column-end:::
:::row-end:::
--- 
::: moniker-end
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      Release status badge  
   :::column-end::: 
   :::column span="2":::
      Post the status of your most recent pipeline build in your repository. To learn how, see [Create your first pipeline, Add a status badge to your repository](../pipelines/create-first-pipeline.md#add-a-status-badge-to-your-repository). 
   :::column-end:::
:::row-end:::
--- 


::: moniker-end


<!---

## Azure Test Plans - Azure Pipelines 

TO BE COMPLETED. 

:::row:::
   :::column span="1":::
      **Feature**
   :::column-end::: 
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Requirements traceability
   :::column-end::: 
   :::column span="2":::
       See [Requirements traceability](../pipelines/test/requirements-traceability.md).
   :::column-end:::
:::row-end:::
--- 

-->


<a id="analytics" /> 



::: moniker range=">= azure-devops-2019" 
## Dashboards, reporting, and Analytics  
::: moniker-end  

::: moniker range="< azure-devops-2019" 
## Dashboards and reporting
::: moniker-end  

::: moniker range=">= azure-devops-2019" 

Dashboards provide an easy way to monitor progress and status. Using widgets, teams can add configurable widgets to support their goals. The Analytics service is the reporting platform for Azure DevOps, replacing the previous platform based on SQL Server Reporting Services. Built for reporting, Analytics is optimized for fast read-access and server-based aggregations. The Analytics service provides: 

- Analytics widgets that you can add to your dashboards
- In-context Analytics reports available from select Azure DevOps pages
- Rollup bars and counts for Azure Boards backlogs
- Custom reports you can create using Power BI
- Custom reports you can create using OData queries
- Support to develop and add your custom Analytics widgets you can add to dashboards

To learn more, see [What is the Analytics service](../report/powerbi/what-is-analytics.md). 

::: moniker-end  

::: moniker range=">= azure-devops-2019 <= azure-devops-2020" 

For on-premises deployments, SQL Server reports provides additional monitoring capabilities. To learn more, see [Reporting Services reports](../report/sql-reports/reporting-services-reports.md).

::: moniker-end 


::: moniker range="< azure-devops-2019" 

Dashboards provide an easy way to monitor progress and status. Using widgets, teams can add configurable widgets to support their goals. SQL Server reports provide additional monitoring capabilities. To learn more, see [Reporting Services reports](../report/sql-reports/reporting-services-reports.md). 
::: moniker-end 

Built-in widgets you can add to your dashboard are listed below. You may find additional widgets from the [Azure DevOps Marketplace](https://marketplace.visualstudio.com/azuredevops).
 
::: moniker range=">= azure-devops-2019"
---
:::row:::
   :::column span="1":::
      **Azure Boards**
      - [Assigned to me](../report/dashboards/widget-catalog.md#assigned-to-me-widget)  
      - [Burndown chart (Analytics)](../report/dashboards/widget-catalog.md#burndown-analytics-widget)  
      - [Burnup chart (Analytics)](../report/dashboards/widget-catalog.md#burnup-analytics-widget)  
      - [Chart for work items](../report/dashboards/widget-catalog.md#chart-wit-widget)  
      - [Cumulative flow diagram](../report/dashboards/widget-catalog.md#cfd-widget)  
      - [Cycle time (Analytics)](../report/dashboards/widget-catalog.md#cycle-time-widget)  
      - [Lead time (Analytics)](../report/dashboards/widget-catalog.md#lead-time-widget)  
      - [New Work item](../report/dashboards/widget-catalog.md#new-work-item-widget)  
      - [Query results](../report/dashboards/widget-catalog.md#query-results-widget)  
      - [Query tile](../report/dashboards/widget-catalog.md#query-tile-widget)  
      - [Sprint burndown (Analytics)](../report/dashboards/widget-catalog.md#sprint-burndown-analytics-widget)  
      - [Sprint burndown (Legacy)](../report/dashboards/widget-catalog.md#sprint-burndown-widget)  
      - [Sprint capacity](../report/dashboards/widget-catalog.md#sprint-capacity-widget)  
      - [Sprint overview](../report/dashboards/widget-catalog.md#sprint-overview-widget)  
      - [Velocity (Analytics)](../report/dashboards/widget-catalog.md#velocity-widget)  
      - [Work links](../report/dashboards/widget-catalog.md#work-links-widget)  
      ---
      **Azure Repos**
      - [Code tile](../report/dashboards/widget-catalog.md#code-tile-widget)  
      - [Pull request](../report/dashboards/widget-catalog.md#pull-request-widget)  
   :::column-end::: 
   :::column span="1":::
      **Azure Pipelines**  
      - [Chart for build history](../report/dashboards/widget-catalog.md#build-history-widget)  
      - [Deployment status](../report/dashboards/widget-catalog.md#deployment-status-widget)  
      - [Release pipeline overview](../report/dashboards/widget-catalog.md#release-definition-widget)"  
      - [Test results trend, Advanced (Analytics)](../report/dashboards/widget-catalog.md#test-trend-results-advanced)  
      - [Requirements quality](../report/dashboards/widget-catalog.md#requirements-quality-widget)  
      ---
      **Azure Test Plans** 
      - [Chart for test plans](../report/dashboards/widget-catalog.md#chart-test-plan-widget) 
      - [Test results trend](../report/dashboards/widget-catalog.md#test-results-widget)  
      - [Test results trend, Advanced(Analytics)](../report/dashboards/widget-catalog.md#test-trend-results-advanced)   
      ---
      **Other**
      - [Embedded web page](../report/dashboards/widget-catalog.md#embedded-webpage-widget)  
      - [Markdown](../report/dashboards/widget-catalog.md#markdown-widget)  
      - [Other links](../report/dashboards/widget-catalog.md#other-links-widget)  
      - [Team members](../report/dashboards/widget-catalog.md#team-members-widget)  
      - [Visual Studio Shortcuts](../report/dashboards/widget-catalog.md#visual-studio-widget)  
      - [Welcome](../report/dashboards/widget-catalog.md#how-to-widget)  
   :::column-end:::
:::row-end:::
--- 
::: moniker-end


::: moniker range="< azure-devops-2019"

:::row:::
   :::column span="1":::
      **Work**
      - [Assigned to me](../report/dashboards/widget-catalog.md#assigned-to-me-widget)  
      - [Chart for work items<](../report/dashboards/widget-catalog.md#chart-wit-widget)  
      - [New Work item](../report/dashboards/widget-catalog.md#new-work-item-widget)  
      - [Query results](../report/dashboards/widget-catalog.md#query-results-widget)  
      - [Query tile](../report/dashboards/widget-catalog.md#query-tile-widget)  
      - [Sprint burndown](../report/dashboards/widget-catalog.md#sprint-burndown-widget)  
      - [Sprint capacity](../report/dashboards/widget-catalog.md#sprint-capacity-widget)  
      - [Sprint overview](../report/dashboards/widget-catalog.md#sprint-overview-widget)  
      - [Work links](../report/dashboards/widget-catalog.md#work-links-widget)</br>  
      ---
     **Code**
      - [Code tile](../report/dashboards/widget-catalog.md#code-tile-widget)
      - [Pull request](../report/dashboards/widget-catalog.md#pull-request-widget)</br>    
      ---
      **Test** 
      - [Chart for test plans](../report/dashboards/widget-catalog.md#chart-test-plan-widget)  
   :::column-end::: 
   :::column span="1":::
      **Build and Release**  
      - [Chart for build history](../report/dashboards/widget-catalog.md#build-history-widget)  
      - [Deployment status](../report/dashboards/widget-catalog.md#deployment-status-widget)  
      - [Release pipeline overview](../report/dashboards/widget-catalog.md#release-definition-widget)
      - [Test results trend (Advanced, Analytics)](../report/dashboards/widget-catalog.md#test-results-widget)  
      - [Test results trend (Advanced, Analytics)](../report/dashboards/widget-catalog.md#test-trend-results-advanced)  
      - [Requirements quality](../report/dashboards/widget-catalog.md#requirements-quality-widget)</br>  
      ---
      **Other**
      - [Embedded web page](../report/dashboards/widget-catalog.md#embedded-webpage-widget)  
      - [Markdown](../report/dashboards/widget-catalog.md#markdown-widget)  
      - [Other links](../report/dashboards/widget-catalog.md#other-links-widget)  
      - [Team members](../report/dashboards/widget-catalog.md#team-members-widget)  
      - [Visual Studio Shortcuts](../report/dashboards/widget-catalog.md#visual-studio-widget)  
      - [Welcome](../report/dashboards/widget-catalog.md#how-to-widget)  
   :::column-end:::
:::row-end:::
--- 
::: moniker-end


## Collaboration across Azure Devops 

Collaborating within and across teams is supported with many of the features summarized in the following table. 

 
:::row:::
   :::column span="1":::
      **Feature**
   :::column-end::: 
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      `@mentions` (add to discussions and comments)
   :::column-end::: 
   :::column span="3":::
      You can @mention a team member or an entire team within a work item form discussion or the comment section of a commit, pull request, or changeset. For details, see [Use @mentions in work items and pull requests](../notifications/at-mentions.md).  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      `#ID` (link to a work item) 
   :::column-end::: 
   :::column span="3":::
      To support end-to-end traceability, you can link to work items from commits, pull requests, and changesets. For details, see [Link to work items from other objects](../notifications/add-links-to-work-items.md).  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Teams
   :::column-end::: 
   :::column span="3":::
      Each team gets access to a suite of Agile tools and team assets. These tools let teams work autonomously and collaborate with other teams across the enterprise. Each team can configure and customize each tool to support how they work. For quick navigation, they can favorite repositories, pipelines, and test plans. To learn more, see:  
      - [About teams and Agile tools](..//organizations/settings/about-teams-and-settings.md)
      - [Set personal or team favorites](..//project/navigation/set-favorites.md)
      - [Unsubscribe from default notification](../notifications/unsubscribe-default-notification.md)
      - [Manage team, group, and Global notifications](../notifications/manage-team-group-global-organization-notifications.md).  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Set up alerts
   :::column-end::: 
   :::column span="3":::
      Configure or opt out of personal, team, project, or organization-level alerts. Subscribe to email alerts when changes occur to work items, code reviews, pull requests, source control files, builds and more. To learn more, see:  
      - [About notifications](../notifications/about-notifications.md)
      - [Manage personal notifications](../notifications/manage-your-personal-notifications.md)
      - [Unsubscribe from default notification](../notifications/unsubscribe-default-notification.md)
      - [Manage team, group, and Global notifications](../notifications/manage-team-group-global-organization-notifications.md).  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Share summaries by email
   :::column-end::: 
   :::column span="3":::
       - [Email a list of work items](../boards/backlogs/bulk-modify-work-items.md)
       - [Email query items](../boards/queries/view-run-query.md)
       - [Send release summaries by email](../pipelines/release/index.md#how-do-i-send-release-summaries-by-email)
   :::column-end:::
:::row-end:::
---  
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="1":::
      Wiki
   :::column-end::: 
   :::column span="3":::
      [Embed Azure Boards query results in Wiki](../project/wiki/wiki-markdown-guidance.md#embed-azure-boards-query-results-in-wiki). 
   :::column-end:::
:::row-end:::
---  
::: moniker-end
