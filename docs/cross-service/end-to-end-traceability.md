---
title: End-to-end traceability
titleSuffix: Azure DevOps
description: Overview of the tools and features that support traceability from requirements to deployment.    
ms.subservice: azure-devops-cross-service
ms.custom: cross-service, cross-project
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 10/11/2023
---
 

# End-to-end traceability 

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Azure DevOps supports end-to-end traceability by allowing you to link different objects that are involved in your development process. These objects include work items, branches, commits, pull requests, builds, and releases. You can use built-in reports and Analytics to monitor the traceability of your objects in real time. 

This article gives you an overview of how Azure DevOps enables and supports traceability, without going into the details of how to set up and use it. You can find links to more information throughout.

## Traceability and linking 

You can track the code changes, builds, and releases that are [linked to a work item](../boards/backlogs/add-link.md) throughout the development lifecycle. This way, your team can see the audit trail of how the work was done or how a bug was fixed by looking at the changes in the code base.

The link types used for Git repositories&mdash;as illustrated in the following image&mdash;are *Build*, *Found in build*, *Integrated in build*, *Branch*, *Commit*, *Pull Request*, and *Integrated in release stage*.

![Conceptual image of code, build, and release links to work items.](media/traceability/concept-build-release-links.png) 

## Create a branch from a requirement  

You can accomplish many tasks with a single select from the product board. Shown in the following image, you can create a branch from a requirement by opening the work item card menu. When you create a branch from the default main branch, you can give it a name and a label. The branch is automatically linked to the work item with the *Branch* link type.

![Screenshot of board card, menu, choose New branch option.](media/traceability/board-card-menu-new-branch.png)      

Or, select **create a branch** in the work item form.  

![Screenshot of Work item form, Create a branch link.](media/traceability/work-item-form-branch.png)  

## Create a pull request from a requirement

Once the code changes are done in the new branch, developers can create a pull request from the work item. 

![Screenshot of Work item form, Create a pull request.](media/traceability/work-item-form-pull-request.png)   

Using the board and the work item to drive software development also has another benefit. It encourages developers to add comments as they work, which helps to document the changes they make and the reasons behind them. This way, the work item becomes a rich source of information and history for the code changes. 
 
## Add and run tests from requirements 

Link a test to a set of requirements and validate that the application works as expected. From the board, you can add tests to the work item. Then, you can run your new tests from the board and set the test status. 

![Screenshot of board card, menu, choose Add test option.](media/traceability/board-card-menu-add-test.png)

Test integration with the board makes it easy for teams to get started with manual testing and then take advantage of the full testing capabilities provided by Azure Test Plans. The board shows the test added to support the requirement when test cases are created from the board or when requirement-based test suites are created under Test Plans. 

### Manual and automated testing

You can [run automated tests](../boards/boards/add-run-update-tests.md) in a pipeline or on demand. You can also [link them to test cases](../test/associate-automated-test-with-test-case.md) in a test plan and run them from Test Plans. This way, you can track the quality of your requirements with automated tests, which is called *planned testing*.

## Deploy changes into production
 
After you define a pipeline to build and release the code changes, you can track the deployment of the requirement to each release stage. From the work item form, you can quickly open the links to builds and releases from the **Deployment** and **Development** control sections. 

#### Deployment and Development controls 

When you open the work item form, you can see the stages the requirement has been deployed to, and drill down for greater details by choosing the links. Under the **Development** section, you can open the branch, commit, or pull requests that have been linked to the requirement.

![Work item form, Deployment control, Release Settings Stages.](/azure/devops/boards/work-items/media/deployments-control/deployments-control-1.png)
 
The  **Deployment** control shows release information for those work items that have been associated to a Git commit, which is part of a build being released. 

#### Release view

The following image illustrates the multiple environments that the release is targeting which the selected work item is associated with. 

> [!div class="mx-imgBorder"]  
> ![Example showing multiple environments that the release is targeting.](/azure/devops/boards/work-items/media/deployments-control/releases-stages-1.png)

#### Release settings 

Manage your display options from the release settings. The work item deployment control shows you how the releases that are linked to your work items are progressing. You can see the release status for work items that have commits in the build and for release pipelines that you have set up to send deployment information to Azure Boards.  

![Screenshot of Release pipeline Options>Integrations settings.](media/traceability/release-pipeline-options.png) 

## Requirements Traceability Matrix

Requirements traceability provides teams insights into indicators such as quality of requirements or readiness to ship requirements. A fundamental aspect of requirements traceability is association of the requirements to test cases, bugs and code changes.

The Requirements Traceability Matrix (RTM) ensures that all requirements defined for a system are tested in the test protocols.

### Requirements traceability reports

Requirements traceability reports are a way of showing how different phases of a development process are related and documented. They help teams to measure the quality and completeness of their requirements, and to assess their readiness for delivery. They also help to track the code changes, tests, bugs, and deployments that are linked to the requirements.

![Screenshot of the Requirements quality widget.](/azure/devops/pipelines/test/media/requirements-traceability/requirements-quality-widget.png) 

### Bug traceability

You can see the bug and the test result together in the **Tests** tab, in the same context. The **Work Items** tab also shows any requirements that are linked to the test result.

For information about bug and source traceability, see [Requirements traceability](../pipelines/test/requirements-traceability.md).

### Source traceability 

Based on the build or release pipeline, you can choose the timeline or pipeline view to see what code changes were committed. You can analyze the code changes to identify the potential root cause of the test failure.

![Screenshot of source traceability.](/azure/devops/pipelines/test/media/requirements-traceability/view-code-commits.png)

## Test Analytics

For information about Test Analytics for builds and releases, tracking the quality of requirements, and test failures, see [Test Analytics](../pipelines/test/test-analytics.md).

## Related articles 

- [Configure pipelines to support work tracking](../pipelines/integrations/configure-pipelines-work-tracking.md?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json)
- [Link work items to other objects](../boards/backlogs/add-link.md)
- [Associate automated tests with test cases](../test/associate-automated-test-with-test-case.md)  
- [Requirements traceability](../pipelines/test/requirements-traceability.md)
- [Requirements tracking sample report](../report/powerbi/sample-stories-overview.md) 
