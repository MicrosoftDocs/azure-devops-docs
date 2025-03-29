---
title: Cross-service overview
titleSuffix: Azure DevOps
description: Discover how Azure DevOps facilitates collaboration and integration across its core services, enhancing your workflow and productivity.
ms.subservice: azure-devops-cross-service
ms.custom: cross-service
ai-usage: ai-assisted
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 03/05/2025
---
 

# Azure DevOps integration of services overview

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

With Azure DevOps, you can connect to and collaborate across its core services. You can use various features to link and track your devops tasks across Azure Boards, Azure Repos, Azure Pipelines, and Azure Test Plans. This article shows you options for how to use the cross-service integration of Azure DevOps to improve your workflow and productivity.

Links to more information:
- [Power Automate, Azure DevOps](https://powerautomate.microsoft.com/connectors/details/shared_visualstudioteamservices/azure-devops/)
- [Power Automate templates for Azure DevOps](https://powerautomate.microsoft.com/connectors/details/shared_visualstudioteamservices/azure-devops/)

## Collaboration across Azure DevOps 

The following table summarizes some of the features that help you work with your team and other teams.
 
| **Feature** | **Description** |
|-------------|-----------------|
| `@mentions` (add to discussions and comments) | You can [@mention a team member or an entire team](../organizations/notifications/at-mentions.md) within a work item form discussion or the comment section of a commit, pull request, or changeset. |
| `#ID` (link to a work item) | To support end-to-end traceability, you can [link to work items from commits, pull requests, and changesets](../organizations/notifications/add-links-to-work-items.md). |
| Teams | [Each team gets access to a suite of Agile tools](../organizations/settings/about-teams-and-settings.md) and team assets. These tools let teams work autonomously and collaborate with other teams across the enterprise. Each team can configure and customize each tool to support how they work. For quick navigation, they can favorite repositories, pipelines, and test plans. |
| Alerts | Configure or opt out of personal, team, project, or organization-level alerts. [Subscribe to email alerts](../organizations/notifications/about-notifications.md) when changes occur to work items, code reviews, pull requests, source control files, builds, and more. |
| Summaries by email | - [Email a list of work items](../boards/backlogs/bulk-modify-work-items.md) <br> - [Email query items](../boards/queries/view-run-query.md) <br> - [Send release summaries by email](../pipelines/release/index.md) |
| Wiki | [Embed Azure Boards query results in Wiki](../project/wiki/markdown-guidance.md#embed-azure-boards-query-results-in-wiki). |

## Azure Boards and Azure Repos integration

You can link code changes to user stories and features with different link types. For Git, use *Branch*, *Commit*, *Pull Request*, or *Tag*. For TFVC, use *Changeset* or *Versioned Item*.

:::image type="content" source="media/overview/concept-link-types-repos.png" alt-text="Conceptual image of link types that link work items to Azure Repos objects."::: 

The following table summarizes the integration points between Azure Boards and Azure Repos.

| **Feature** | **Description** |
|-------------|-----------------|
| Drive Git development from work items | You can initiate a Git branch or link to Git commits or pull requests and [drive your Git development cycle for a work item](../boards/backlogs/connect-work-items-to-git-dev-ops.md) from within the work item form. |
| Automatically link and transition work items with Git commits | For a Git repository, you can turn on or off the following options: <br> - Close work items with mentions in commit comments. <br> - Remember user choices for completing work items with pull requests. <br> - Link work items from commit comments. You can also automate linking from commits or pull requests in repo settings. <br> - Commit mention linking: Turn on to link commits to work items with #*WorkItemID* in commit messages. Turn off when you push a repo from a different account or service. Azure DevOps automatically turns off this feature when you import a repo. <br> - Commit mention work item resolution: Turn on to close work items with Fixes #*WorkItemID* in commits. <br> - Work item transition preferences: On by default, it remembers each user’s option to complete linked work items with pull requests. You can turn this feature off to discourage users from completing work items with pull requests. When it's off, users have to choose to complete work items for each pull request. |
| Check for linked work items in a Git branch | Encourage traceability by checking for linked work items on pull requests. |
| Auto complete work items with pull requests | When you link a work item to a pull request (PR), you can [automatically complete](../boards/work-items/auto-complete-work-items-pull-requests.md) those work items when you successfully complete the PR. The system defaults to your selection for future PRs. |
| View list of code objects a single work item is linked to | You can link work items to code changes, builds, and releases—providing an audit trail of the feature development. |
| Query for external links | You can [query for work items that contain links](../boards/queries/linking-attachments.md) to branches, commits, pull requests, or tags. |
| Configure branch policies to support work tracking | To ensure that changes to a branch have links to work items, you configure the branch policy for a Git repository in repo settings. Turn on the **Check for linked work items** option. Choose **Required** to mandate all pull requests have at least one linked work item in order to be completed. Choose **Optional** to allow pull requests without linked work items, but warn about it. |

## Azure Boards and Azure Pipelines integration

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
      
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Set integration option to automatically create *Integrated in build* links to work items linked to a branch, commit, or pull request associated with a pipeline.
   :::column-end::: 
   :::column span="2":::
      Required to populate the **Development** control with *Integrated in build* links. The work items or commits that are part of a release are computed from the versions of artifacts. For example, each build in Azure Pipelines is associated with a set of work items and commits. For more information, see [Configure pipelines to support integration](../pipelines/integrations/configure-pipelines-work-tracking.md).  
   :::column-end:::
:::row-end:::
--- 
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      To link work items to builds and releases, choose an option and a branch for a Classic or YAML pipeline. This action creates *Integrated in build* and *Integrated in release stage* links for work items that are linked to a branch, commit, or pull request. 
   :::column-end::: 
   :::column span="2":::
      Required to populate the work item form **Development** control with *Integrated in build* links and the **Deployment** control with *Integrated in release stage* links when running a Classic or YAML pipeline. For more information, see [Configure pipelines to support integration](../pipelines/integrations/configure-pipelines-work-tracking.md). 
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
      Required to populate **Deployment** control in work item form with **Integrated in release stage** links. For more information, see [Release pipelines, How do I integrate and report release status?](../pipelines/release/index.md). 
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
      You can [link work items to builds and releases](../organizations/notifications/add-links-to-work-items.md#view-list-links)&mdash;providing an audit trail of the feature development and deployment.
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      Query for external links.
   :::column-end::: 
   :::column span="2":::
      You can [query for work items that contain external links](../boards/queries/linking-attachments.md).
   :::column-end:::
:::row-end:::
--- 
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="1":::
      View and quickly navigate to release stages a work item is linked to.
   :::column-end::: 
   :::column span="2":::
      The **Deployment** control on the work item form shows the stages that the work item is linked to. You can see the status of some runs and open each stage or run by expanding a stage. For more information, see [Link and view work items to deployments](../boards/backlogs/add-link.md#link-work-items-to-deployments).  
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
      [Automatically create a work item and set fields when a build fails](../pipelines/build/options.md).
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
      Automatically create a work item and set fields when a build fails. For more information, see [Build options](../pipelines/build/options.md) for Classic pipelines, and [Customize pipelines, Create work item on failure](../pipelines/customize-pipeline.md#create-work-item-on-failure).  
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
       Use this task to ensure the number of matching items returned by a work item query is within the configured thresholds. For more information, see [Query Work Items task, Control deployments with gates and approvals](/azure/devops/pipelines/tasks/reference/query-work-items-v0).  
   :::column-end:::
:::row-end:::
--- 
::: moniker-end

## Azure Repos and Azure Pipelines integration

Azure Pipelines provides support for building code stored in Azure Repos, either a Git or Team Foundation Version Control (TFVC) repository. Other repositories that Azure Pipelines supports are listed in [Supported source repositories](../pipelines/repos/index.md).  

The following table summarizes the integration features between Azure Repos and Azure Pipelines. 

::: moniker range="azure-devops"

| **Feature** | **Description** |
|-------------|-----------------|
| Report deployment status | Indicates the status of a deployment on the **Files**, **Commits**, and **Branches** pages for Git repositories. This feature improves the traceability from code commit to deployment. You can [configure the release environments to report deployment status](../pipelines/release/index.md). |
| Release status badge | [Post the status of your most recent pipeline build in your repository](../pipelines/create-first-pipeline.md#add-a-status-badge-to-your-repository). |
| Code coverage | [Publish](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v1) and [review](../pipelines/test/review-code-coverage-results.md) code coverage results that indicate the proportion of your project's code that is actually being tested. |

::: moniker-end

::: moniker range="< azure-devops"

| **Feature** | **Description** |
|-------------|-----------------|
| Report deployment status | Indicates the status of a deployment on the **Files**, **Commits**, and **Branches** pages for Git repositories. This feature improves the traceability from code commit to deployment. You can [configure the release environments to report deployment status](../pipelines/release/index.md). |
| Code coverage | [Publish](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v1) and [review](../pipelines/test/review-code-coverage-results.md) code coverage results that indicate the proportion of your project's code that is actually being tested. |

::: moniker-end

<a id="test"></a>

## Azure Boards, Azure Repos, and Azure Test Plans integration

Several collaboration scenarios are supported through Azure Boards work item types. You can use [managed queries](../boards/queries/about-managed-queries.md) and the [Azure DevOps search function](../project/search/get-started-search.md) to find and list work items.

> [!NOTE]
> You should create some work item types—such as Feedback Request, Code Review Request, Shared Steps, and Shared Parameters—through specific tools or forms. These types get added to the Hidden Types category and don't appear in the menus used to add work items.
>
> For the Inherited process model, you can only customize the following work item types: Test Plan, Test Suite, and Test Case.

| **Scenario** | **Work item type** | **Description** |
|--------------|--------------------|-----------------|
| Request code review | **Code Review Request** | Tracks information entered into the TFVC New Code Review form. For more information, see [Get your code reviewed with Visual Studio](../repos/tfvc/get-code-reviewed-vs.md). |
| Provide code review | **Code Review Response** | Tracks review comments provided by code reviewers in [response to a code review request](../repos/tfvc/get-code-reviewed-vs.md#respond-to-the-code-review-request). |
| Request feedback | **Feedback Request** | Tracks information entered into a request feedback form. Use the following forms to initiate a feedback request. <br> - [Request stakeholder feedback](../test/request-stakeholder-feedback.md) <br> - [Get feedback](/previous-versions/azure/devops/project/feedback/get-feedback). |
| Provide feedback | **Feedback Review** | Lets stakeholders [provide feedback](../test/provide-stakeholder-feedback.md) based on requests for feedback or by [volunteering feedback](../test/voluntary-stakeholder-feedback.md) using the [Microsoft Test & Feedback](https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web) Marketplace extension. |
| Manual testing | **Test Plan** | Groups one or more test suites and individual test cases together. Test plans include static test suites, requirement-based suites, and query-based suites. To get started, see [Create test plans and test suites](../test/create-a-test-plan.md). |
| Manual testing | **Test Suite** | Groups one or more test cases into separate testing scenarios within a single test plan. Grouping test cases makes it easier to see which scenarios are complete. |
| Manual testing | **Test Case** | Defines steps used to validate individual parts of your code to ensure your code works correctly, has no errors, and meets business and customer requirements. You can [add individual test cases](../test/create-test-cases.md) to a test plan without creating a test suite. More than one test suite or test plan can refer to a test case. You can effectively reuse test cases without having to copy or clone them for each suite or plan. |
| Manual testing | **Shared Steps** | Enables [sharing steps across several test cases](/previous-versions/azure/devops/test/mtm/share-steps-between-test-cases). |
| Manual testing | **Shared Parameters** | Enables [repeating the same test cases with different data](../test/repeat-test-with-different-data.md). |

### Test work item types

Work item types that support the test experience are linked together using the link types shown in the following image. These types include *Tested By/Tests*, *Test Cases/Shared Steps*, and *Reference By/References*. 

![Screenshot of the Test management work item types.](../boards/work-items/guidance/media/ALM_PT_WITS_TestExperience.png)

You can use the web portal to see the test cases that are defined for a test suite, and the test suites that are defined for a test plan. But, there's no specific link type that connects these objects to each other.

### Track bugs

The Bug work item type supports the following integrations that you should be aware of when you're tracking bugs.

| **Scenario** | **Description** |
|--------------|-----------------|
| Create a bug from a testing tool | You can add a bug from Test Runner or the Test & Feedback extension. For more information, see [Define, capture, triage, and manage bugs](../boards/backlogs/manage-bugs.md#create-a-bug-from-a-testing-tool). |
| Create inline tests linked to bugs or user stories | When your team tracks bugs as requirements, you can use the board to [add tests](../boards/boards/add-run-update-tests.md) to verify bug fixes or user stories. |
| Track build information with bugs | The Bug work item form contains System Info, Found in Build, and Integrated in Build, which support tracking code defects found and resolved within pipeline builds. For more information, see [Query based on build and test integration fields](../boards/queries/build-test-integration.md). |

## Azure Pipelines and Azure Test Plans integration

Azure Test Plans is fully integrated with Azure Pipelines to support testing within continuous integration/continuous deployment (CI/CD). You can associate test plans and test cases with build or release pipelines. Add pipeline tasks to pipeline definitions to capture and publish test results. Review test results via built-in progress reports and pipeline test reports. The following table summarizes the integration points between Azure Pipelines and Azure Test Plans.  

| **Feature** | **Description** |
|-------------|-----------------|
| Test plans setting | With test plan settings, you can [configure the Test Run settings](../test/run-automated-tests-from-test-hub.md) to associate build or release pipelines and Test Outcome settings. |
| Pipeline test-enable tasks | Specify test-enable tasks within a pipeline definition. Azure Pipelines provides several tasks, including the following tasks, that support a comprehensive test reporting and analytics experience. <br> - [Publish Test Results task](/azure/devops/pipelines/tasks/reference/publish-test-results-v2): Use to publish test results to Azure Pipelines. <br> - [Visual Studio Test task](/azure/devops/pipelines/tasks/reference/vstest-v2): Use to run unit and functional tests (Selenium, Appium, Coded UI test, and more) using the Visual Studio Test Runner. <br> - [.NET Core CLI task](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2): Use to build, test, package, or publish a dotnet application. <br> For other tasks, see [Publish Test Results task](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) |
| Run automated tests in build pipelines | [Associate test plans with a build pipeline](../test/run-automated-tests-from-test-hub.md) so that they run with each build. |
| Associate automated tests with test cases | [Associate automated tests with test cases](../test/associate-automated-test-with-test-case.md). |
| Set retention policy for automated test results associated with builds | You can [set the test retention policy](../test/how-long-to-keep-test-results.md) for automated builds from the **Pipelines** > **Retention** page. |
| Requirements traceability | The Requirements quality widget supports tracking quality continuously from a build or release pipeline. The widget shows the mapping between a requirement and latest test results executed against that requirement. It provides insights into [requirements traceability](../pipelines/test/requirements-traceability.md). |
| Test results trend | The Test results trend configurable widget displays the trend of test results for the selected build or release pipeline. The widget helps you visualize the test trends over a period of time, surfacing patterns about test failures, test duration, and so on. For more information, see [Configure the Test Results Trend (Advanced) widget](../report/dashboards/configure-test-results-trend.md) |
| Deployment status | The Deployment status configurable widget shows a combined view of the deployment status and test pass rate across multiple environments for a recent set of builds. You configure the widget by specifying a build pipeline, branch, and linked release pipelines. To view the test summary across multiple environments in a release, the widget provides a matrix view of each environment and corresponding test pass rate. See [Associate automated tests with test cases](../test/how-long-to-keep-test-results.md) |
| View test results in builds and releases | Both build and release summaries provide details of test execution. [Review these summaries](../pipelines/test/review-continuous-test-results-after-build.md#tests-tab) to assess pipeline quality, review traceability, and troubleshoot failures. Choose **Test summary** to view the details in the **Tests** tab. |
| Test analytics for builds | Each build summary includes an **Analytics** tab that hosts the [Test analytics](../pipelines/test/test-analytics.md) report. |

## Dashboards, reporting, and Analytics  

[Dashboards](../report/dashboards/overview.md) provide an easy way to monitor progress and status. Teams can add configurable widgets to support their goals. The [Analytics service](../report/powerbi/what-is-analytics.md) is the reporting platform for Azure DevOps, and replaces the previous platform based on SQL Server Reporting Services. Analytics is optimized for fast read-access and server-based aggregations and provides the following benefits: 

- Analytics widgets that you can add to your dashboards
- In-context Analytics reports available from select Azure DevOps pages
- Rollup bars and counts for Azure Boards backlogs
- Custom reports you can create using Power BI
- Custom reports you can create using OData queries
- Support to develop and add your custom Analytics widgets you can add to dashboards

You can add the following built-in widgets to your dashboard. They're organized under the service they support. You might find more widgets from the [Azure DevOps Marketplace](https://marketplace.visualstudio.com/azuredevops).

## Data available from Analytics
 
Analytics provides the reporting platform for Azure DevOps. For information, see [Data available from Analytics](../report/powerbi/data-available-in-analytics.md).

## Automation and connectors

Microsoft products support automation or integration with several other applications and services. For more information, see the following articles. 

- [Power Automate, Azure DevOps](https://powerautomate.microsoft.com/connectors/details/shared_visualstudioteamservices/azure-devops/)
- [Power Automate templates for Azure DevOps](https://powerautomate.microsoft.com/connectors/details/shared_visualstudioteamservices/azure-devops/)
 
## Related articles

- [End-to-end traceability](end-to-end-traceability.md)
- [Data model for Analytics](../report/extend-analytics/data-model-analytics-service.md)
- [GitHub integration](github-integration.md)
