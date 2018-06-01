---
title: Deploy ASP.NET app to an Azure cloud service
description: Example of deploying an Azure cloud services package from Release Management in VSTS or Microsoft Team Foundation Server
ms.assetid: 2FFE372F-0F5A-4B8C-9AEE-5D8E4F61F6F5
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2015'
---

# Deploy your ASP.NET app to an Azure cloud service

[!INCLUDE [temp](../../_shared/version-rm-dev14.md)]

Here we'll show you how to set up continuous deployment of your ASP.NET app to an Azure cloud service using Release Management.
Continuous deployment means starting an automated deployment process whenever a new successful build is available.

You can also use these steps to deploy your app to an [Azure Government Cloud](../../library/government-cloud.md)
or to (Azure Stack)[../../concepts/library/azure-stack.md].

## Get set up

### Begin with a CI build

Before you begin, you'll need a CI build that publishes your Cloud Service package. To set up CI, see:

* [Build your Azure cloud service](../aspnet/build-aspnet-cloudservice.md)

### Azure storage

An Azure blob storage container is required for deploying to Azure cloud services.
Carry out the following steps in the Azure portal to create one.

1. Sign into the Azure management portal and choose the
   **+New** icon in the left panel, then choose
   **Data + Storage**. Select **Storage Account** from the list.

1. At the bottom of the **Storage Account** blade, in the
   **Select a deployment model** list, choose
   **Classic** and then choose **Create**.

1. In the **Create Storage Account** blade:
   - Enter a name for the new storage account.
   - Select an existing Resource Group, or create a new one.
   - Select a location for the new storage account.
   - Leave all the other settings at their default values, and choose **Create**.<p />

1. After the storage account has been created, open its
   blade and choose the **Blobs** tile. In the
   **Blob service** blade, choose the **Containers** tile and,
   in the **Container** blade, choose the **+Container** icon at the top to create a new container.

1. In the **New Container** blade, type a name for the container.
   Select **Container** in the **Access type** list, and choose **Create**.   

<h2 id="cd">Define and test your CD release process</h2>

Continuous deployment (CD) means starting an automated release process whenever a new successful build is available. Your CD release process picks up the artifacts published by your CI build and then deploys them to your Azure cloud service.

1. Do one of the following:

   * If you've just completed a CI build (see above) then, in the build's
     **Summary** tab under **Deployments**, choose **Create release** followed by **Yes**.
     This starts a new release definition that's automatically linked to the build definition.

   * Open the **Releases** tab of the **Build &amp; Release** hub, open the **+** drop-down
     in the list of release definitions, and choose **Create release definition**.

1. Select the **Azure Cloud Service Deployment** template and choose **Apply**.

1. If you created your new release definition from a build summary, check that the build definition
   and artifact is shown in the **Artifacts** section on the **Pipeline** tab. If you created a new
   release definition from the **Releases** tab, choose the **+ Add** link and select your build artifact.

   ![Selecting the build artifact](../_shared/_img/confirm-or-add-artifact.png)

1. Choose the **Continuous deployment** icon in the **Artifacts** section, check that the continuous deployment trigger is enabled,
   and add a filter to include the **master** branch.

   ![Checking or setting the Continuous deployment trigger](../_shared/_img/confirm-or-set-cd-trigger.png)

1. Open the **Tasks** tab and select the **Environment 1** item. Configure the task variables as follows:
   
   * **Azure Subscription (Classic)**: Select an Azure Classic service endpoint. If you have not created one already, create one now by choosing **Add**. Then return to your release definition, refresh the **Azure Subscription** list, and select the connection you just created.
   
   * **Storage account**: Select the storage account you created earlier.
   
   * **Service name**: Select the name of an existing cloud service, or enter the name of a new cloud service.<p />

   > If your Azure subscription is defined in an Azure Government Cloud, ensure your deployment process meets the relevant compliance requirements. For more details, see [Azure Government Cloud deployments](../../library/government-cloud.md).

   [!INCLUDE [edit-template-vars-in-environment](../_shared/edit-template-vars-in-environment.md)]
   
1. Edit the name of the release definition, click **Save**, and click **OK**. Note that the default environment is named Environment1, which you can edit by clicking directly on the name.

You're now ready to create a release, which means to start the process of running the release definition with the artifacts produced by a specific build. This will result in deploying the build to Azure:

[!INCLUDE [simple-create-release](../_shared/simple-create-release.md)]

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
