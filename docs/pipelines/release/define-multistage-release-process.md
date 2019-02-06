---
title: Define a multi-stage CD release pipeline
ms.custom: seodec18
description: DevOps CI CD - Define a multi-stage continuous deployment (CD) pipeline for your ASP.NET Core app using Azure Pipelines
ms.assetid: 12F57ADB-49B9-4E21-A346-5EDB1D1EC2F7
ms.prod: devops
ms.technology: devops-cicd
ms.topic: tutorial
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 08/24/2018
monikerRange: '>= tfs-2015'
---

# Define your multi-stage continuous deployment (CD) pipeline

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

Azure Pipelines and Team Foundation Server (TFS) provide a highly
configurable and manageable pipeline for releases to multiple stages
such as development, staging, QA, and production stages; including
requiring approvals at specific stages.

In this tutorial, you learn about:

> [!div class="checklist"]
> * Configuring triggers within the release pipeline
> * Extending a release pipeline by adding stages
> * Configuring the stages as a multi-stage release pipeline
> * Adding approvals to your release pipeline
> * Creating a release and monitoring the deployment to each stage

## Prerequisites

You'll need:

* A release pipeline that contains at least one stage. If you don't already have one,
  you can create it by working through any of the following quickstarts and tutorials:

  - [Deploy to an Azure Web App](../apps/cd/deploy-webdeploy-webapps.md)
  - [Azure DevOps Project](../get-started-azure-devops-project.md)
  - [Deploy to IIS web server on Windows](../apps/cd/deploy-webdeploy-iis-deploygroups.md)

* Two separate targets where you will deploy the app. These could be virtual machines,
  web servers, on-premises physical deployment groups, or other types of deployment target.
  In this example, we are using Azure App Services website instances.
  If you decide to do the same, you will have to choose names that are unique, but it's a good idea to include
  "QA" in the name of one, and "Production" in the name of the other so that you
  can easily identify them. Use the Azure portal to create a new web app.

## Configure the triggers in your release pipeline

In this section, you will check that the triggers you need for continuous deployment are configured in your release pipeline.

1. In **Azure Pipelines**, open the **Releases** tab. Select your release pipeline and, in
   the right pane, choose **Edit**.

   ![Opening the release pipeline for editing](_img/define-multistage-release-process/open-for-edit.png)

1. Choose the **Continuous deployment trigger** icon in the **Artifacts** section to open the trigger panel.
   Make sure this is enabled so that a new release is created after every new successful build is completed.

   ![Viewing the continuous integration trigger setting](_img/define-multistage-release-process/ci-trigger.png)

   For more information, see [Release triggers](triggers.md).

1. Choose the **Pre-deployment conditions** icon in the **Stages** section to open the conditions panel.
   Make sure that the trigger for deployment to this stage is set to **After release**.
   This means that a deployment will be initiated automatically when a new release is created from this release pipeline.   

   ![Viewing the stage trigger setting](_img/define-multistage-release-process/environment-trigger.png)

   Notice that you can also define artifact filters that determine a condition for the release to proceed,
   and set up a schedule for deployments. You can use features to, for example, specify a branch from
   which the build artifacts must have been created, or a specific time of day when you know the app will not be heavily used.
   For more information, see [Stage triggers](triggers.md).

## Extend a release pipeline by adding stages

In this section, you will add a new stage to the release pipeline. The two stages will deploy your app to the
"QA" and the "Production" targets (in our example, two Azure App Services websites). This is a typical scenario where you deploy initially to a test or staging server, and then to a
live or production server. Each [stage](environments.md)
represents one deployment target, though that target could be a physical or virtual server,
a groups of servers, or any other legitimate physical or virtual deployment target.

1. In the **Pipeline** tab of your release pipeline, select the existing stage and rename it to **Production**.

   ![Renaming the existing stage](_img/define-multistage-release-process/rename-environment-prod.png)

1. Open the **+ Add** drop-down list and choose **Clone stage** (the clone option is available only
   when an existing stage is selected).

   ![Cloning the existing stage](_img/define-multistage-release-process/clone-environment.png)

   Typically, you want to use the same deployment methods with a test and a production stage
   so that you can be sure the deployed apps will behave in exactly the same way. Therefore, cloning an existing
   stage is a good way to ensure you have the same settings for both. Then you just need to change the deployment
   targets (the websites where each copy of the app will be deployed).

1. The clone of the stage appears after the existing stage in the pipeline, and has the name **Copy of Production**.
   Select this stage and, in the **Stages** panel, change the name to **QA**.

   ![Renaming the clone stage](_img/define-multistage-release-process/rename-copy-environment.png)

1. To reorganize the stages in the pipeline, choose the **Pre-deployment conditions** icon for the **QA** stage and
   set the trigger to **After release**. The pipeline diagram changes to show that the deployment to the two stages will
   now execute in parallel.

   ![Changing the QA stage trigger](_img/define-multistage-release-process/change-trigger-qa.png)

1. Choose the **Pre-deployment conditions** icon for the **Production** stage and
   set the trigger to **After stage**, then select **QA** in the **Stages** drop-down list.
   The pipeline diagram changes to show that the deployment to the two stages will
   now execute in the required order.

   ![Changing the Production stage trigger](_img/define-multistage-release-process/change-trigger-prod.png)

   Notice that you can specify deployment to start when a deployment to the previous stage is _partially_ successful.
   Usually, this means the deployment tasks were set to continue the deployment even if a specific non-critical task failed
   (the default is that all tasks must succeed). You're most likely to set this option if you create a pipeline containing
   [fork and join deployments](triggers.md) that deploy to different stages in parallel.  

1. Open the **Tasks** drop-down list and choose the **QA** stage.
   Recall that this stage is a clone of the original **Production** stage in the release pipeline.
   Therefore, currently, it will deploy the app to the same target as the **Production** stage.

   ![Open the tasks pane for the QA stage](_img/define-multistage-release-process/open-qa-tasks.png)

1. Depending on the tasks that you are using, change the settings so that this stage deploys to your "QA" target. In our example,
   using Azure App Services websites, we just need to select the **Deploy Azure App Service** task and select the "QA"
   website instead of the "Production" website.

   ![Change the deployment target the QA stage](_img/define-multistage-release-process/change-target-environment.png)

   If you are using a different type of task to deploy your app, the way you change the target for the deployment
   may differ. For example, if you are using deployment groups, you may be able to select a different deployment group,
   or a different set of tags within the same deployment group.

[!INCLUDE [edit-template-vars-in-environment](../apps/_shared/edit-template-vars-in-environment.md)]

<a name="add-approvals"></a>

## Add approvals within a release pipeline

The release pipeline you have modified deploys to test and then to production. If the deployment to test fails, the trigger
on the production stage does not fire, and so it is not deployed to production. However, it is typically the case that
you want the deployment to pause after _successful_ deployment to the test website so that you can verify the app is working correctly before
you deploy to production. In this section, you will add an approval step to the release pipeline to achieve this.

1. Back in the **Pipeline** tab of the release pipeline, choose the **Pre-deployment conditions** icon in the **Stages** section
   to open the conditions panel. Scroll down to the **Pre-deployment approvers** section and enable pre-deployment approvers.

   ![Viewing the pre-deployment approvers settings](_img/define-multistage-release-process/open-approvers.png)

1. In the **Approvers** section, choose your user(s) from the list. You
   can type part of a name to search for matches. Also make sure you clear (untick) the checkbox 
   **User requesting a release...** so that you can approve your own releases.

   ![Selecting the pre-deployment approvers](_img/define-multistage-release-process/select-approvers.png)

   You can add as many approvers as you need, both individual users and organization groups.
   It's also possible to set up post-deployment approvals by choosing the icon at the right side of the stage item in the pipeline diagram.
   For more information, see [Approvals and gates overview](approvals/index.md).

1. Save the modified release pipeline.

   ![Save the release pipeline](_img/define-multistage-release-process/save-definition.png)

<a name="create-release"></a>

## Create a release

Now that you have completed the modifications to the release pipeline, it's time to start the deployment. To do this, you
create a release from the release pipeline. A release may be created automatically; for example, the continuous deployment
trigger is set in the release pipeline. This means that modifying
the source code will start a new build and, from that, a new release. However, in this section you will create a new release manually.

1. Open the **Release** drop-down list and choose **Create release**.

   ![Creating a new release](_img/define-multistage-release-process/create-release.png)

1. Enter a description for the release, check that the correct artifacts are selected, and then choose **Create**.

   ![Creating the new release](_img/define-multistage-release-process/queue-release.png)

1. After a few moments, a banner appears indicating that the new release was created.
   Choose the link (the name of the release).

   ![The link to the newly created release](_img/define-multistage-release-process/release-link.png)

1. The release summary page opens showing details of the release. In the **Stages** section,
   you will see the deployment status for the "QA" stage change to "Succeeded" and, at that point,
   an icon appears indicating that the release is now waiting for approval.

   ![Release summary showing link for approval](_img/define-multistage-release-process/approval-waiting.png)

   Other views, such as the list of releases, also display an icon that indicates approval is pending.
   The icon shows a pop-up containing the stage name and more details when you point to it.
   This makes it easy for an administrator to see which releases are awaiting approval, as well as the overall progress of all releases.    

   ![Release list showing link for approval](_img/define-multistage-release-process/list-approval-waiting.png)

1. Choose the icon or link to open the approval dialog. Enter a brief note about the
   approval, and choose **Approve**.

   ![Approving the release](_img/define-multistage-release-process/approve-dialog.png)

   Notice that you can defer a deployment to a specific day and time; for example, a time when you expect the app to be only lightly loaded.
   You can also reassign the approval to another user. Release administrators can open _any_ approval
   and over-ride it to accept or reject that deployment.

<a name="monitor-track"></a>

## Monitor and track deployments

In this section, you will see how you can monitor and track deployments - in this example to two Azure App Services websites -
from the release you created in the previous section.

1. In the release summary, hover over a stage and choose the **Logs** link that appears.

   ![Viewing the live deployment log](_img/define-multistage-release-process/open-logs-page.png)

   While the deployment is taking place, the logs page shows the live log from the agent.
   After the deployment is complete, links to the logs for each task step are displayed in the right pane.
   
1. Select any of the pipeline steps to show just the log file contents for that step.
   This makes it easier to trace and debug individual parts of the overall deployment. Alternatively, download
   the individual log files, or a zip of all the log files, from the icons and links in the page.

   ![Viewing and downloading individual log files](_img/define-multistage-release-process/download-logs.png)

1. If you are having problems with a deployment, you can get more information from the log files by
   [running the release in debug mode](../../pipelines/release/variables.md#debug-mode).

## Next step

> [!div class="nextstepaction"]
> [Use approvals and gates to control your deployment](deploy-using-approvals.md)
