---
title: Define a multi-stage CD release process | VSTS Tutorial
description: Define a multi-stage continuous deployment (CD) process for your ASP.NET Core app using Visual Studio Team Services
services: vsts
documentationcenter: ''
author: ahomer
manager: douge
editor: ''

ms.assetid: 12F57ADB-49B9-4E21-A346-5EDB1D1EC2F7
ms.service: vsts
ms.devlang: dotnetcore
ms.topic: get-started-article
ms.tgt_pltfrm: ''
ms.workload: ''
ms.date: 07/31/2017
ms.custom: mvc
---

# Define your multi-stage continuous deployment (CD) process

Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) provide a highly
configurable and manageable pipeline for releases to multiple environments
such as development, staging, QA, and production environments; including
requiring approvals at specific stages.

In this tutorial, you learn about:

> [!div class="checklist"]
> * Extending a release definition by adding environments
> * Configuring the environments as a multi-stage release pipeline
> * Configuring triggers within the release pipeline
> * Adding approvals to your release pipeline
> * Creating a release and monitoring the deployment to each environment

[What's the difference between a release definition and a release?](../concepts/releases/index.md)

## Prerequisites

[!INCLUDE [include](_shared/build-prerequisites.md)]

You'll need a CI build that publishes your Web Deploy package. To set up CI for your specific type of app, see:

* [Build your ASP.NET 4 app](../apps/aspnet/build-aspnet-4.md)

* [Build your ASP.NET Core app](../apps/aspnet/build-aspnet-core.md)

* [Build your Node app with Gulp](../apps/nodejs/build-gulp.md)

In addition, you need two Azure web app instances where you will deploy the app.
You will have to choose names that are unique, but it's a good idea to include
"QA" in the name of one, and "Production" in the name of the other, so that you
can easily identify them. If you need help, follow the steps in
[this example](../../deploy-azure/aspnet-core-to-azure-webapp.md#create-webapp-portal).

## Import a release definition

To simplify the setup for this tutorial, you will import an existing release definition.

1. Download the sample release definition from the following URL and save it on your disk:

   ```URL
   insert GitHub URL for release definition
   ```

1. In the **Build &amp; Release** hub, open the **Releases** tab. Open the **+** drop-down list and choose **Import release definition**.

   ![Importing a release definition](_img/define-multistage-release-process/import-release-def.png)
   
1. Select the release definition you downloaded and choose **Import**.
   
1. Choose the artifact item in the **Artifacts** section of the release definition. If your
   existing build artifact is not shown, use the settings in the **Artifacts** panel to select it.

   ![Selecting an artifact to deploy](_img/define-multistage-release-process/check-build-artifacts.png)
   
1. Open the **Tasks** tab and select the **Run on agent** item. In the properties panel, set the **Agent queue** to **Hosted VS2017**.

   ![Selecting the agent queue](_img/define-multistage-release-process/select-queue.png)

1. Select the **Deploy Azure App Service** item. In the properteis panel, select your Azure subscription
   and app service (the web app you created for the Production website). 

   ![Configuring the Deploy Azure App Service task](_img/define-multistage-release-process/configure-appservice-task.png)

1. Save the release definition.

   ![Save the release definition](../../deploy-azure/_shared/_img/customize-cd-process/save-definition.png)

1. Open the **+ Release** drop-down list and choose **Create release**.

   ![Creating a new release](../../deploy-azure/_shared/_img/customize-cd-process/create-release.png)

1. Enter a description for the release, and check that the correct artifact is selected. Then choose **Queue**.

   ![Queuing the new release](../../deploy-azure/_shared/_img/customize-cd-process/queue-release.png)

1. After a few moments, a banner appears indicating that the new release was created.
   Choose the link (the name of the release).

   ![The link to the newly created release](../../deploy-azure/_shared/_img/customize-cd-process/release-link.png)

1. Check that the release was successfully deployed to the Production web app.

   ![The release summary](_img/define-multistage-release-process/release-summary.png)

[!INCLUDE [customize-process-sections](../../deploy-azure/_shared/customize-process-sections.md)]


