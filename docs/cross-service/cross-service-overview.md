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
ms.date: 08/31/2021
---
 

# Cross-service integration and collaboration overview 

[!INCLUDE [temp](../includes/version-tfs-2017-through-vsts.md)]

One of the major strengths of Azure DevOps is the integration it supports across its core services. Azure DevOps supports multiple integration points across each of the major services&mdash;Azure Boards, Azure Repos, Azure Pipelines, and Azure Test Plans. 

Review this article to understand how to use various features to support collaboration and traceability for all your devops tasks. 



## Collaboration across Azure DevOps 

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
      - [About teams and Agile tools](../organizations/settings/about-teams-and-settings.md)
      - [Set personal or team favorites](../project/navigation/set-favorites.md)
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


## Azure Boards - Azure Repos 

The following table summarizes the integration points between Azure Boards and Azure Repos. Through various link types, you can track code changes&mdash;commits and pull requests for Git, and changesets and versioned items for Team Foundation Version Control (TFVC)&mdash;that support development of user stories and features. The link types used to construct these links include *Branch , Commit, Pull Request*, and *Tag* for Git repositories, and *Changeset*, and *Versioned Item* for TFVC repositories. To learn more, see [Link to work items from other objects, View list of linked objects](../notifications/add-links-to-work-items.md#view-list-links).

:::image type="content" source="media/overview/concept-link-types-repos.png" alt-text="Conceptual image of link types that link work items to Azure Repos objects."::: 


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
      :::image type="content" source="media/overview/development-control-git.png" alt-text="Screenshot of Development control for Git repositories.":::  
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
      <br/>For details, see [Configure branch policies to support integration](../repos/git/configure-repos-work-tracking.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Check for linked work items in a Git branch
   :::column-end::: 
   :::column span="2":::
      Encourage traceability by checking for linked work items on pull requests. For details, see [Configure branch policies to support integration](../repos/git/configure-repos-work-tracking.md).
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

:::image type="content" source="media/overview/concept-link-types-pipelines.png" alt-text="Conceptual image of link types that link work items to Azure Pipelines objects.":::

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
      Required to populate the **Development** control with Integrated in build links. The work items or commits that are part of a release are computed from the versions of artifacts. For example, each build in Azure Pipelines is associated with a set of work items and commits. For details, see [Configure pipelines to support integration](../pipelines/integrations/configure-pipelines-work-tracking.md).
      :::image type="content" source="media/overview/development-control.png" alt-text="Screenshot of Development control showing several links.":::  
   :::column-end:::
:::row-end:::
--- 
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      Set option and branch to automatically create *Integrated in build* and *Integrated in release stage* links to work items linked to a branch, commit, or pull request associated with a Classic or YAML pipeline. 
   :::column-end::: 
   :::column span="2":::
      Required to populate the work item form **Development** control with *Integrated in build* links and the **Deployment** control with *Integrated in release stage* links when running a Classic or YAML pipeline. For details, see [Configure pipelines to support integration](../pipelines/integrations/configure-pipelines-work-tracking.md). 
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
      Required to populate **Deployment** control in work item form with **Integrated in release stage** links. For details, see [Release pipelines, How do I integrate and report release status?](../pipelines/release/index.md#reportstatus). 
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
      :::image type="content" source="media/overview/deployment-control.png" alt-text="Screenshot of Deployment control showing several links.":::  
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
       Indicates the status of a deployment on the **Files**, **Commits**, and **Branches** pages for Git repositories. This feature improves the traceability from code commit to deployment. You can configure the release environments to report deployment status. For details, see [Release pipelines, How do I integrate and report release status?](../pipelines/release/index.md#reportstatus)..
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
:::row:::
   :::column span="1":::
      Code coverage
   :::column-end::: 
   :::column span="2":::
      Publish and review code coverage results that indicate the proportion of your project's code that is actually being tested. To learn more, see [Publish Code Coverage Results task](../pipelines/tasks/test/publish-code-coverage-results.md) and [Review code coverage results](../pipelines/test/review-code-coverage-results.md). 
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      View test results in builds and releases
   :::column-end::: 
   :::column span="2":::
      Measure pipeline quality, review traceability, and troubleshoot failures by surfacing test reulst in pipeline builds and releases. To learn more, see [Review test results](../pipelines/test/review-continuous-test-results-after-build.md). 
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      Run automated tests in build pipelines
   :::column-end::: 
   :::column span="2":::
      Associate test plans with a build pipeline so that they run with each build. To learn more, see [Run automated tests from test plans](..//test/run-automated-tests-from-test-hub.md). 
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      Run automated tests in build pipelines
   :::column-end::: 
   :::column span="2":::
      Associate test plans with a build pipeline so that they run with each build. To learn more, see [Run automated tests from test plans](..//test/run-automated-tests-from-test-hub.md). 
   :::column-end:::
:::row-end:::
--- 

 

<a id="test"></a>

## Azure Boards - Azure Repos - Azure Test Plans 

Several collaboration scenarios are supported through Azure Boards work item types. As with other work item types, you can use [managed queries](../boards/queries/about-managed-queries.md) and the [Azure DevOps search function](../project/search/get-started-search.md) to find and list work items. 

> [!NOTE]  
> Several of these work item types&mdash;such as Feedback Request, Code Review Request, Shared Steps, and Shared Parameters&mdash; are designed to be created through a specific tool or form. They aren't meant to be created manually. Therefore, they are added to the Hidden Types category. Work item types that are added to the Hidden Types category don't appear in the menus used to add work items. 
> 
> Also, for the Inherited process model, you can only customize the following work item types: Test Plan, Test Suite, Test Case.  

:::row:::
   :::column span="1":::
      **Scenario**
   :::column-end::: 
   :::column span="1":::
      **Work item type**
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Request code review
   :::column-end::: 
   :::column span="1":::
      **Code Review Request**
   :::column-end:::
   :::column span="3":::
      Tracks information entered into the TFVC New Code Review form. To learn more, see [Get your code reviewed with Visual Studio](../repos/tfvc/get-code-reviewed-vs.md). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Provide code review
   :::column-end::: 
   :::column span="1":::
      **Code Review Response**
   :::column-end:::
   :::column span="3":::
      Tracks review comments provided by code reviewers in response to a code review request. To learn more, see [Respond to the code review request](../repos/tfvc/get-code-reviewed-vs.md#respond-to-the-code-review-request). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Request feedback
   :::column-end::: 
   :::column span="1":::
      **Feedback Request**
   :::column-end:::
   :::column span="3":::
      Tracks information entered into a request feedback form. There are two forms that you can use to initiate a feedback request. 
      -  [Request stakeholder feedback](../test/request-stakeholder-feedback.md)
      -  [Get feedback](../project/feedback/get-feedback.md). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Provide feedback
   :::column-end::: 
   :::column span="1":::
      **Feedback Review**
   :::column-end:::
   :::column span="3":::
      Enables stakeholders to provide feedback based on request for feedback or by volunteering feeback using the and using the [Microsoft Test & Feedback](https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web) marketplace extension. To learn more, see the following articles: 
      - [Provide feedback ](../test/provide-stakeholder-feedback.md)  
      - [Voluntarily provide stakeholder feedback](../test/voluntary-stakeholder-feedback.md)  
      - [Give feedback](../project/feedback/give-feedback.md).  
   :::column-end::: 
:::row-end:::
---
:::row:::
   :::column span="1":::
      Manual testing
   :::column-end::: 
   :::column span="1":::
      **Test Plan**
   :::column-end:::
   :::column span="3":::
      Groups one or more test suites and individual test cases together. Test plans include static test suites, requirement-based suites, and query-based suites. To get started, see [Create test plans and test suites](../test/create-a-test-plan.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Manual testing
   :::column-end::: 
   :::column span="1":::
      **Test Suite**
   :::column-end:::
   :::column span="3":::
      Groups one or more test cases into separate testing scenarios within a single test plan. Grouping test cases makes it easier to see which scenarios are complete. To learn more, see [Create test plans and test suites](../test/create-a-test-plan.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Manual testing
   :::column-end::: 
   :::column span="1":::
      **Test Case**
   :::column-end:::
   :::column span="3":::
      Defines steps used to validate individual parts of your code to ensure your code works correctly, has no errors, and meets business and customer requirements. You can add individual test cases to a test plan without creating a test suite. More than one test suite or test plan can refer to a test case. You can effectively reuse test cases without having to copy or clone them for each suite or plan. To learn more, see [Create manual test cases](../test/create-test-cases.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Manual testing
   :::column-end::: 
   :::column span="1":::
      **Shared Steps**
   :::column-end:::
   :::column span="3":::
      Enables sharing steps across several test cases. For details, see [Share steps between test cases](/previous-versions/azure/devops/test/mtm/share-steps-between-test-cases).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Manual testing
   :::column-end::: 
   :::column span="1":::
      **Shared Parameters**
   :::column-end:::
   :::column span="3":::
      Enables repeating the same test cases with different data. For more information, see [Repeat a test with different data](../test/repeat-test-with-different-data.md).
   :::column-end:::
:::row-end:::
---

### Test work item types

Work item types that support the test experience are linked together using the link types shown in the following image. These include *Tested By/Tests*, *Test Cases/Shared Steps*, and *Reference By/References*. 

![Test management work item types](../boards/work-items/guidance/media/ALM_PT_WITS_TestExperience.png)

From the web portal, you can view which test cases are defined for a test suite, and which test suites are defined for a test plan. However, these objects aren't connected to each other through specific link types. 
  

### Bug tracking 

When tracking bugs using the Bug work item type, note the following supported integrations. 


:::row:::
   :::column span="1":::
      **Scenario**
   :::column-end::: 
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Create a bug from a testing tool
   :::column-end::: 
   :::column span="3":::
      You can add a bug from Test Runner or the Test & Feedback extension. To learn more, see [Define, capture, triage, and manage bugs](../boards/backlogs/manage-bugs.md#create-a-bug-from-a-testing-tool).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Create inline tests linked to bugs or user stories
   :::column-end::: 
   :::column span="3":::
      When your team tracks bugs as requirements, you can use the Kanban board to add tests to verify bug fixes or user stories. To learn more, see [Add, run, and update inline tests](../boards/boards/add-run-update-tests.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Track build information with bugs
   :::column-end::: 
   :::column span="3":::
      The Bug work item form contains System Info, Found in Build, and Integrated in Build that support tracking code defects found and resolved within pipeline builds.  To learn more, see [Query based on build and test integration fields](../boards/queries/build-test-integration.md).
   :::column-end:::
:::row-end:::
---

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

Built-in widgets you can add to your dashboard are listed below. They are organized under the service they support. You may find additional widgets from the [Azure DevOps Marketplace](https://marketplace.visualstudio.com/azuredevops).

Widgets are annotated as follows: 

::: moniker range=">= azure-devops-2019"
- **Analytics**: Widget derives data from [Analytics data](../report/powerbi/what-is-analytics.md)  
- **Build**: Widget derives data for a selected build pipeline  
- **Project**: indicates you can select the project and team when configuring the widget
- **Release**: Widget derives data for a selected release pipeline  
- **Team**: Widget is scoped to a single team  
- **Teams**: Widget is scoped to one or more teams
- **User**: Widget is scoped to the logged in user account
::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
- **Build**: Widget derives data for a selected build pipeline  
- **Release**: Widget derives data for a selected release pipeline  
- **Team**: Widget is scoped to a single team  
- **User**: Widget is scoped to the logged in user account
::: moniker-end


---
:::row:::
   :::column span="1":::
      ::: moniker range=">= azure-devops-2020"
      **Boards**
      - [Assigned to me](../report/dashboards/widget-catalog.md#assigned-to-me-widget) (User)
      - [Burndown chart](../report/dashboards/widget-catalog.md#burndown-analytics-widget) (Analytics, Project, Teams)    
      - [Burnup chart](../report/dashboards/widget-catalog.md#burnup-analytics-widget) (Analytics, Project, Teams)     
      - [Chart for work items](../report/dashboards/widget-catalog.md#chart-wit-widget)  
      - [Cumulative flow diagram](../report/dashboards/widget-catalog.md#cfd-widget) (Team)   
      - [Cycle time (Analytics)](../report/dashboards/widget-catalog.md#cycle-time-widget) (Analytics, Team)  
      - [Lead time (Analytics)](../report/dashboards/widget-catalog.md#lead-time-widget) (Analytics, Team) 
      - [New Work item](../report/dashboards/widget-catalog.md#new-work-item-widget)  
      - [Query results](../report/dashboards/widget-catalog.md#query-results-widget)  
      - [Query tile](../report/dashboards/widget-catalog.md#query-tile-widget)  
      - [Sprint burndown](../report/dashboards/widget-catalog.md#sprint-burndown-analytics-widget) (Analytics, Team)  
      - [Sprint burndown - Legacy](../report/dashboards/widget-catalog.md#sprint-burndown-widget) (Team)   
      - [Sprint capacity](../report/dashboards/widget-catalog.md#sprint-capacity-widget) (Team) 
      - [Sprint overview](../report/dashboards/widget-catalog.md#sprint-overview-widget) (Team)   
      - [Velocity](../report/dashboards/widget-catalog.md#velocity-widget) (Analytics, Team)  
      - [Work links](../report/dashboards/widget-catalog.md#work-links-widget)  
      ::: moniker-end
      ::: moniker range="azure-devops-2019"
      **Boards**
      - [Assigned to me](../report/dashboards/widget-catalog.md#assigned-to-me-widget) (User)
      - [Burndown chart](../report/dashboards/widget-catalog.md#burndown-analytics-widget) (Analytics)    
      - [Burnup chart](../report/dashboards/widget-catalog.md#burnup-analytics-widget) (Analytics)    
      - [Chart for work items](../report/dashboards/widget-catalog.md#chart-wit-widget)  
      - [Cumulative flow diagram](../report/dashboards/widget-catalog.md#cfd-widget)  
      - [Cycle time (Analytics)](../report/dashboards/widget-catalog.md#cycle-time-widget) (Analytics)    
      - [Lead time (Analytics)](../report/dashboards/widget-catalog.md#lead-time-widget) (Analytics)   
      - [New Work item](../report/dashboards/widget-catalog.md#new-work-item-widget)  
      - [Query results](../report/dashboards/widget-catalog.md#query-results-widget)  
      - [Query tile](../report/dashboards/widget-catalog.md#query-tile-widget)  
      - [Sprint burndown](../report/dashboards/widget-catalog.md#sprint-burndown-widget)  
      - [Sprint capacity](../report/dashboards/widget-catalog.md#sprint-capacity-widget)  
      - [Sprint overview](../report/dashboards/widget-catalog.md#sprint-overview-widget)  
      - [Velocity](../report/dashboards/widget-catalog.md#velocity-widget) (Analytics)  
      - [Work links](../report/dashboards/widget-catalog.md#work-links-widget)  
      ::: moniker-end
      ::: moniker range=">= tfs-2017 <= tfs-2018"
      **Work**
      - [Assigned to me](../report/dashboards/widget-catalog.md#assigned-to-me-widget) (User)
      - [Chart for work items](../report/dashboards/widget-catalog.md#chart-wit-widget)  
      - [New Work item](../report/dashboards/widget-catalog.md#new-work-item-widget)  
      - [Query results](../report/dashboards/widget-catalog.md#query-results-widget)  
      - [Query tile](../report/dashboards/widget-catalog.md#query-tile-widget)  
      - [Sprint burndown](../report/dashboards/widget-catalog.md#sprint-burndown-widget)  
      - [Sprint capacity](../report/dashboards/widget-catalog.md#sprint-capacity-widget)  
      - [Sprint overview](../report/dashboards/widget-catalog.md#sprint-overview-widget)  
      - [Work links](../report/dashboards/widget-catalog.md#work-links-widget)  
      ::: moniker-end
      ---
      ::: moniker range="<= tfs-2018"
      **Repos** 
      - [Code tile](../report/dashboards/widget-catalog.md#code-tile-widget) (Repository, Branch, Folder)
      - [Pull request](../report/dashboards/widget-catalog.md#pull-request-widget) (Team, User)
      ::: moniker-end
      ::: moniker range=">= azure-devops-2019"
      **Code** 
      - [Code tile](../report/dashboards/widget-catalog.md#code-tile-widget) (Repository, Branch, Folder)
      - [Pull request](../report/dashboards/widget-catalog.md#pull-request-widget) (Team)
      ::: moniker-end
   :::column-end:::
   :::column span="1":::
      ::: moniker range=">= azure-devops-2019"
      **Pipelines**
      - [Build history](../report/dashboards/widget-catalog.md#build-history-widget) (Build pipeline)
      - [Deployment status](../report/dashboards/widget-catalog.md#deployment-status-widget) (Build pipeline)
      - [Release pipeline overview](../report/dashboards/widget-catalog.md#release-definition-widget) (Release pipeline)
      - [Requirements quality](../report/dashboards/widget-catalog.md#requirements-quality-widget) (Query, Build or Release pipeline)
      ---
      **Test Plans**
      - [Chart for test plans](../report/dashboards/widget-catalog.md#chart-test-plan-widget)
      - [Test results trend (Advanced)](../report/dashboards/widget-catalog.md#test-trend-results-advanced) (Analytics, Build or Release pipeline) 
      - [Test results trend](../report/dashboards/widget-catalog.md#test-trend-results) (Build or Release pipeline)  
      ---
      **Information and links**
      - [Embedded web page](../report/dashboards/widget-catalog.md#embedded-webpage-widget)  
      - [Markdown](../report/dashboards/widget-catalog.md#markdown-widget)  
      - [Other links](../report/dashboards/widget-catalog.md#other-links-widget)  
      - [Team members](../report/dashboards/widget-catalog.md#team-members-widget) (Team) 
      - [Visual Studio Shortcuts](../report/dashboards/widget-catalog.md#visual-studio-widget) 
      - [Welcome](../report/dashboards/widget-catalog.md#how-to-widget) 
      ::: moniker-end
      ::: moniker range=">= tfs-2017 <= tfs-2018"
      **Build & Release**
      - [Build history](../report/dashboards/widget-catalog.md#build-history-widget) (Build pipeline)
      - [Deployment status](../report/dashboards/widget-catalog.md#deployment-status-widget) (Build pipeline)
      - [Release pipeline overview](../report/dashboards/widget-catalog.md#release-definition-widget) (Release pipeline)
      - [Requirements quality](../report/dashboards/widget-catalog.md#requirements-quality-widget) (Query, Build or Release pipeline)
      ---
      **Test**
      - [Chart for test plans](../report/dashboards/widget-catalog.md#chart-test-plan-widget)
      - [Test results trend](../report/dashboards/widget-catalog.md#test-trend-results) (Build or Release pipeline)  
      ::: moniker-end
      ---
      ::: moniker range="tfs-2018"
      **Information and links**
      - [Embedded web page](../report/dashboards/widget-catalog.md#embedded-webpage-widget)  
      - [Markdown](../report/dashboards/widget-catalog.md#markdown-widget)  
      - [Other links](../report/dashboards/widget-catalog.md#other-links-widget-2018)  
      - [Team members](../report/dashboards/widget-catalog.md#team-members-widget) (Team) 
      - [Visual Studio Shortcuts](../report/dashboards/widget-catalog.md#visual-studio-widget) 
      - [Welcome](../report/dashboards/widget-catalog.md#how-to-widget) 
      ::: moniker-end
      ::: moniker range="tfs-2017"
      **Information and links**
      - [Embedded web page](../report/dashboards/widget-catalog.md#embedded-webpage-widget)  
      - [Markdown](../report/dashboards/widget-catalog.md#markdown-widget)  
      - [Other links](../report/dashboards/widget-catalog.md#other-links-widget-2018)  
      - [Team members](../report/dashboards/widget-catalog.md#team-members-widget) (Team) 
      - [Team room](../report/dashboards/widget-catalog.md#team-room-widget) (Team) 
      - [Visual Studio Shortcuts](../report/dashboards/widget-catalog.md#visual-studio-widget) 
      - [Welcome](../report/dashboards/widget-catalog.md#how-to-widget) 
      ::: moniker-end
   :::column-end:::
:::row-end:::
---


::: moniker range=">= azure-devops-2019" 

## Data available from Analytics
 
Analytics provides the reporting platform for Azure DevOps. Analytics is generally available for Azure DevOps Service and Azure DevOps Server 2020. It is in preview for Azure DevOps Server 2019. 

 You can access the following data from Analytics.  

---
:::row:::
   :::column span="1":::
                
      **Service**
   :::column-end:::
   :::column span="1":::
                
      **Data availability**
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services**  
      **Azure DevOps Server 2020**  
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server 2019**  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
       **Boards** 
   :::column-end:::
   :::column span="1":::
      [Widgets](../report/dashboards/analytics-widgets.md)  
      [In-context reports](../report/dashboards/overview.md#in-context-reports-work-tracking)  
      [OData](../report/extend-analytics/quick-ref.md)
      [Power BI](../report/overview.md)
   :::column-end:::
   :::column span="1":::
      ✔️   
      ✔️   
      ✔️   
      ✔️   
   :::column-end:::
   :::column span="1":::
      ✔️   
        
      ✔️   
      ✔️   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Repos** 
   :::column-end:::
   :::column span="1":::
      None
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Pipelines**
   :::column-end:::
   :::column span="2":::
      [Test Analytics](../pipelines/test/test-analytics.md)  
      [Pipeline Analytics](../pipelines/reports/pipelinereport.md)  
      [OData Preview](../report/extend-analytics/quick-ref.md) 
   :::column-end:::
   :::column span="1":::
      ✔️   
      ✔️   
      ✔️    
   :::column-end:::
   :::column span="1":::
      ✔️   
          
          
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Test Plans**
   :::column-end:::
   :::column span="1":::
      [Progress Report](../test/track-test-status.md)
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Artifacts** 
   :::column-end:::
   :::column span="2":::
      None
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
:::row-end:::
---


::: moniker-end 


 
## Related articles

- [End-to-end traceability](end-to-end-traceability.md)
- [Data model for Analytics](../report/extend-analytics/data-model-analytics-service.md)
