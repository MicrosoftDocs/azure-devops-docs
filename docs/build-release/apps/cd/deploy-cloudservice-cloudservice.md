---
ms.assetid: 2FFE372F-0F5A-4B8C-9AEE-5D8E4F61F6F5
title: Deploy your ASP.NET app to an Azure cloud service
description: Example of deploying an Azure cloud services package from Release Management in VSTS or Microsoft Team Foundation Server
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Deploy your ASP.NET app to an Azure cloud service

[!INCLUDE [temp](../../_shared/version-rm-dev14.md)]

Continuous deployment means starting an automated deployment process whenever a new successful build is available.
Here we'll show you how to set up continuous deployment of your ASP.NET app to an Azure cloud service using Release Management.

You can also use these steps to deploy your app to an Azure Government Cloud
by creating a suitable service endpoint for your Azure Government Cloud subscription.
For more details, see the [Azure Government Cloud deployments](../../concepts/library/government-cloud.md).

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

1. Select the **Azure Cloud Service Deployment** template and click **Next**.

1. In the **Artifacts** section, make sure your CI build definition that creates the cloud services artifacts is selected.

1. Select the **Continuous deployment** check box, and then choose **Create**.

1. Select the **Azure Cloud Service Deployment** task and configure it as follows:
   
   ![icon](../../tasks/deploy/_img/azure-cloud-service-deployment-icon.png) [Deploy: Azure Cloud Service Deployment](../../tasks/deploy/azure-cloud-service-deployment.md) - Deploy the app to an Azure cloud service.
   
   - **Azure Subscription (Classic)**: Select an Azure Classic service endpoint. If you have not created one already, create one now by choosing **Add**. Then return to your release definition, refresh the **Azure Subscription** list, and select the connection you just created.
   
   - **Storage account**: Select the storage account you created earlier.
   
   - **Service name**: Select the name of an existing cloud service, or enter the name of a new cloud service.<p />

   > If your Azure subscription is defined in an Azure Government Cloud, ensure your deployment process meets the relevant compliance requirements. For more details, see [Azure Government Cloud deployments](../../concepts/library/government-cloud.md).
   
1. Edit the name of the release definition, click **Save**, and click **OK**. Note that the default environment is named Environment1, which you can edit by clicking directly on the name.

You're now ready to create a release, which means to start the process of running the release definition with the artifacts produced by a specific build. This will result in deploying the build to Azure:

1. Choose **+ Release** and select **Create Release**.

1. Select the build you just completed in the highlighted drop-down list and choose **Create**.

1. Choose the release link in the popup message. For example: "Release **Release-1** has been created".

1. Open the **Logs** tab to watch the release console output.

1. After the release is complete, navigate to your site running in Azure cloud services and verify its contents.

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
