---
title: DeCreate a multi-stage release pipeline
description: Learn how to create a multi-stage Classic release pipeline for your ASP.NET Core app using Azure Pipelines.
ms.assetid: 12F57ADB-49B9-4E21-A346-5EDB1D1EC2F7
ms.topic: tutorial
ms.date: 12/10/2024
monikerRange: '<= azure-devops'
---

# Create a multi-stage release pipeline (Classic)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines enables developers to deploy their applications across multiple environments using both YAML and Classic pipelines. This article walks you through creating a multi-stage Classic release pipeline to deploy your ASP.NET Core web app to multiple stages.

In this tutorial, you'll learn how to:

> [!div class="checklist"]
> * Set up continuous deployment triggers
> * Add stages
> * Add pre-deployment approvals
> * Create releases and monitor deployments

## Prerequisites

- A Classic release pipeline that contains at least one stage. If you don't already have one, [Create a Classic release](releases.md).

- [Azure subscription](https://azure.microsoft.com/free/).

- [Azure App Service](azure/app-service/getting-started?pivots=stack-net).

## Set up continuous deployment triggers

Enabling the continuous deployment trigger will configure the pipeline to automatically create a new release whenever a new pipeline artifact becomes available.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Azure Pipelines** > **Releases**, select your release pipeline, and then select **Edit**.

1. In the **Artifacts** section, select the **Continuous deployment trigger** icon to open the trigger panel, then toggle it to enable.

1. Under the first stage, select the **Pre-deployment conditions** icon and ensure the deployment trigger is set to **After release**. This triggers deployments to this stage automatically when a new release is created. 

## Add stages

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Azure Pipelines** > **Releases**, select your release pipeline, and then select **Edit**.

1. Select **+ Add** > **New stage** to create a new stage.

1. In your newly added stage, select the **Pre-deployment conditions** icon. Set the trigger to **After stage**, and then select your original stage from the drop-down menu.
 
    :::image type="content" source="media/define-multistage-release-process/change-trigger-prod.png" alt-text="A screenshot displaying how to set up pre-deployment conditions in a Classic release pipeline.":::
    
1. Select the **Tasks** drop-down menu and select your desired stage. Depending on the tasks that you're using, change the settings so that this stage deploys to your desired target. In this example, we're using **Deploy Azure App Service** task to deploy to an Azure App Service as shown below. 

    :::image type="content" source="media/define-multistage-release-process/change-target-environment.png" alt-text="A screenshot displaying how to set up stage tasks in a Classic release pipeline.":::

## Add Pre-deployment approvals

Adding approvals ensures that all criteria are met before deploying to the next stage. 

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Azure Pipelines** > **Releases**, select your release pipeline, and then select **Edit**.

1. From **Stages**, select the **Pre-deployment conditions** icon in the desired stage, and then select the **Pre-deployment approvals** toggle button to enable it.

1. In the **Approvers** text box, enter the user(s) responsible for approving the deployment. It's also recommended to uncheck the **The user requesting a release or deployment should not approve it** checkbox.

1. Select **Save** when you're done.

    :::image type="content" source="media/define-multistage-release-process/select-approvers.png" alt-text="A screenshot displaying how to add pre-deployment approvers in a Classic release pipeline.":::

## Create a release

Now that the release pipeline setup is complete, it's time to start the deployment. To do this, we'll manually create a new release. Usually a release is created automatically when a new build artifact is available. However, in this scenario we'll create it manually.

1. Select the **Release** drop-down list and choose **Create release**.

   ![create a new release](media/define-multistage-release-process/create-release.png)

1. Enter a description for your release, check that the correct artifacts are selected, and then select **Create**.

   ![create a new release panel](media/define-multistage-release-process/queue-release.png)

1. A banner will appear indicating that a new release has been created. Select the release link to see more details.

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

1. If you need additional information to debug your deployment, you can [run the release in debug mode](../../pipelines/release/variables.md#run-a-release-in-debug-mode).

## Next step

> [!div class="nextstepaction"]
> [Use approvals and gates to control your deployment](deploy-using-approvals.md)
