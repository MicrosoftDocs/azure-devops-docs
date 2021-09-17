---
title: Define a Classic release pipeline
ms.custom: seodec18
description: DevOps CI CD - Define a multi-stage continuous deployment (CD) pipeline for your ASP.NET Core app using Azure Pipelines
ms.assetid: 12F57ADB-49B9-4E21-A346-5EDB1D1EC2F7
ms.topic: tutorial
ms.author: ronai
author: RoopeshNair
ms.date: 09/02/2021
monikerRange: '>= tfs-2015'
---

# Define your Classic pipeline

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../includes/concept-rename-note.md)]

::: moniker-end

Azure Pipelines provide a highly configurable and manageable pipeline for releases to multiple stages such as development, staging, QA, and production. it also offers the opportunity to implement gates and approvals at each specific stage.

In this tutorial, you will learn about:

> [!div class="checklist"]
> * Continuous deployment triggers
> * Adding stages
> * Adding pre-deployment approvals
> * Creating releases and monitoring deployments

## Prerequisites

You'll need:

* A release pipeline that contains at least one stage. If you don't already have one, you can create it by working through any of the following quickstarts and tutorials:

  - [Deploy to an Azure Web App](../apps/cd/deploy-webdeploy-webapps.md)
  - [Azure DevOps Project](../get-started-azure-devops-project.md)
  - [Deploy to IIS web server on Windows](../apps/cd/deploy-webdeploy-iis-deploygroups.md)

* Two separate targets where you will deploy the app. These could be virtual machines, web servers, on-premises physical deployment groups, or other types of deployment target.
  In this example, we are using Azure App Service website instances. If you decide to do the same, you will have to choose names that are unique, but it's a good idea to include
  "QA" in the name of one, and "Production" in the name of the other so that you can easily identify them. Use the Azure portal to create a new web app.

## Continuous deployment (CD) triggers

Enabling continuous deployment trigger will instruct the pipeline to automatically create a new release every time a new build is available.

1. In **Azure Pipelines**, open the **Releases** tab. Select your release pipeline select **Edit**.

   ![edit the release pipelin](media/define-multistage-release-process/open-for-edit.png)

1. Select the **Continuous deployment trigger** icon in the **Artifacts** section to open the trigger panel. Make sure this is enabled so that a new release is created after every new successful build is completed.

   ![continuous deployment trigger](media/define-multistage-release-process/ci-trigger.png)

1. Select the **Pre-deployment conditions** icon in the **Stages** section to open the conditions panel.
   Make sure that the trigger for deployment to this stage is set to **After release**. This means that a deployment will be initiated automatically when a new release is created from this release pipeline.   

   ![pre-deployment conditions](media/define-multistage-release-process/environment-trigger.png)

   You can also set up [Release triggers](triggers.md), [Stage triggers](triggers.md#stage-triggers) or [schedule deployments](triggers.md#scheduled-release-triggers).

## Add stages

In this section, we will add two new stages to our release pipeline: QA and production (Two Azure App Services websites in this example). This is a typical scenario where you would deploy initially to a test or staging server, and then to a live or production server. Each [stage](../process/stages.md) represents one deployment target.

1. Select the **Pipeline** tab in your release pipeline and select the existing stage. Change the name of your stage to **Production**.

   ![Choosing an existing stage from the Pipelines tab and changing the name to Production in the Stage panel](media/define-multistage-release-process/rename-environment-prod.png)

1. Select the **+ Add** drop-down list and choose **Clone stage** (the clone option is available only when an existing stage is selected).

   ![selecting Clone stage](media/define-multistage-release-process/clone-environment.png)

   Typically, you want to use the same deployment methods with a test and a production stage so that you can be sure your deployed apps will behave the same way. Cloning an existing stage is a good way to ensure you have the same settings for both. You then just need to change the deployment targets.

1. Your cloned stage will have the name **Copy of Production**. Select it and change the name to **QA**.
 
   ![changing stage name to QA](media/define-multistage-release-process/rename-copy-environment.png)

1. To reorganize the stages in the pipeline, select the **Pre-deployment conditions** icon in your **QA** stage and set the trigger to **After release**. The pipeline diagram will then show the two stages in parallel.

   ![reorganizing stages](media/define-multistage-release-process/change-trigger-qa.png)

1. Select the **Pre-deployment conditions** icon in your **Production** stage and set the trigger to **After stage**, then select **QA** in the **Stages** drop-down list.
   The pipeline diagram will now indicate that the two stages will execute in the correct order.
 
   ![Selecting QA triggers and stages](media/define-multistage-release-process/change-trigger-prod.png)

   > [!NOTE]   
   > You can set up your deployment to start when a deployment to the previous stage is _partially_ successful. This means that the deployment will continue even if a specific non-critical task have failed. This is usually used in a fork and join deployments that deploy to different stages in parallel.
    
1. Select the **Tasks** drop-down list and select the **QA** stage.

   ![Tasks drop down and selecting QA stage](media/define-multistage-release-process/open-qa-tasks.png)

1. Depending on the tasks that you are using, change the settings so that this stage deploys to your "QA" target. In our example, we will be using **Deploy Azure App Service** task as shown below. 

   ![Using the deploy azure app service task](media/define-multistage-release-process/change-target-environment.png)

<a name="add-approvals"></a>

## Add Pre-deployment approvals

The release pipeline we previously modified deploys to QA and production. If the deployment to QA fails, then deployment to production won't trigger.
It is recommended to always verify if your app is working properly in QA or test stage before deploying to production. Adding approvals will ensure all the criteria are met before deploying to the next stage. To add approvals to your pipeline follow the steps below:

1. Select the **Pipeline** tab,  **Pre-deployment conditions** icon then **Pre-deployment approvers**.

   ![pre-deployment approvers panel](media/define-multistage-release-process/open-approvers.png)

1. In the **Approvers** text box, enter the user(s) that will be responsible for approving the deployment. It is also recommended to uncheck the **The user requesting a release or deployment should not approve it** check box.

   ![Adding pre-deployment approvers](media/define-multistage-release-process/select-approvers.png)

   You can add as many approvers as you need, both individual users and organization groups. It's also possible to set up post-deployment approvals by selecting the "user" icon at the right side of the stage in the pipeline diagram. For more information, see [Releases gates and approvals](approvals/index.md).

1. Select **Save**.

   ![Saving the release pipeline](media/define-multistage-release-process/save-definition.png)

<a name="create-release"></a>

## Create a release

Now that the release pipeline setup is complete, it's time to start the deployment. To do this, we will manually create a new release. Usually a release is created automatically when a new build artifact is available. However, in this scenario we will create it manually.

1. Select the **Release** drop-down list and choose **Create release**.

   ![create a new release](media/define-multistage-release-process/create-release.png)

1. Enter a description for your release, check that the correct artifacts are selected, and then select **Create**.

   ![create a new release panel](media/define-multistage-release-process/queue-release.png)

1. A banner will appear indicating that a new release has been create. Select the release link to see more details.

   ![release created successfully](media/define-multistage-release-process/release-link.png)

1. The release summary page will show the status of the deployment to each stage.

   ![deployment status](media/define-multistage-release-process/approval-waiting.png)

   Other views, such as the list of releases, also display an icon that indicates approval is pending. The icon shows a pop-up containing the stage name and more details when you point to it. This makes it easy for an administrator to see which releases are awaiting approval, as well as the overall progress of all releases.    

   ![releases list view](media/define-multistage-release-process/list-approval-waiting.png)

1. Select the _pending_approval_ icon to open the approval window panel. Enter a brief comment, and select **Approve**.

   ![approving deployment](media/define-multistage-release-process/approve-dialog.png)

> [!NOTE]   
> You can schedule deployment at a later date, for example during non-peak hours. You can also reassign approval to a different user. Release administrators can access and override all approval decisions.

<a name="monitor-track"></a>

## Monitor and track deployments

Deployment logs help you monitor and debug the release of your application. To check the logs of our deployment follow the steps below:

1. In the release summary, hover over a stage and select **Logs**.

   ![deployment logs](media/define-multistage-release-process/open-logs-page.png)

   During deployment, you can still access the logs page to see the live logs of every task.
   
1. Select any task to see the logs for that specific task. This makes it easier to trace and debug deployment issues. You can also download individual task logs, or a zip of all the log files.

   ![downloading logs](media/define-multistage-release-process/download-logs.png)

1. If you need additional information to debug your deployment, you can [run the release in debug mode](../../pipelines/release/variables.md#debug-mode).

## Next step

> [!div class="nextstepaction"]
> [Use approvals and gates to control your deployment](deploy-using-approvals.md)
