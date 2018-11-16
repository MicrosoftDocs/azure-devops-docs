---
ms.topic: include
---

## Create a release pipeline

1. In **Azure Pipelines**, open the build summary for your build and choose **Release** to start a new release pipeline.

   If you have previously created a release pipeline that uses these build artifacts, you will
   be prompted to create a new release instead. In that case, go to the **Releases** tab page and
   start a new release pipeline from there by choosing the **+** icon.

1. Select the **Azure App Service Deployment** template and choose **Apply**.

1. Open the **Tasks** tab and select the **Stage 1** item.
   In the settings panel next to **Parameters**, choose **Unlink all**. 

1. Select the **Deploy Azure App Service** task and configure the settings as follows: 

   - **Version**: Select **4.\* (preview)**.  

   - **Azure Subscription**: Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions connection to your Azure subscription.
     If you are using Azure Pipelines and if you see an **Authorize** button next to the input, click on it to authorize Azure Pipelines to connect to your Azure subscription. If you are using TFS or if you do not see
     the desired Azure subscription in the list of subscriptions, see [Azure Resource Manager service connection](../../library/connect-to-azure.md) to manually set up the connection.

   - **App Service type**: Select **Web App for Containers**.  

   - **App Service name**: Select the web app you created earlier from your subscription. App services based on selected app type will only be listed.

   When you select the Docker-enabled app type, the task recognizes that it is a
   containerized app, and changes the property settings to show the following:

   - **Registry or Namespace**: Enter the path to your Azure Container Registry which is a globally unique top-level domain name for your specific registry or namespace. Typically this is _your-registry-name_**.azurecr.io**
   
   - **Image**: Name of the repository where the container images are stored. 

   - **Tag**: Tags are optional, it is the mechanism that registries use to give Docker images a version. A fully qualified image name will be of the format: '/:'. For example, 'myregistry.azurecr.io/nginx:latest'.

   - **Startup command**: Start up command for the container.

   <!--

   1. Open the **Tasks** tab and select the **Stage 1** item.
   Configure the linked settings as follows:

   - **Azure Subscription**: Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions connection to your Azure subscription.
     If you are using Azure Pipelines and if you see an **Authorize** button next to the input, click on it to authorize Azure Pipelines to connect to your Azure subscription. If you are using TFS or if you do not see
     the desired Azure subscription in the list of subscriptions, see [Azure Resource Manager service connection](../../library/connect-to-azure.md) to manually set up the connection.

   - **App Service type**: Select **Web App for Containers**.  

   - **App Service name**: Select the web app you created earlier from your subscription. App services based on selected app type will only be listed.

   When you select the Docker-enabled app type, the task recognizes that it is a
   containerized app, and changes the property settings to show the following:

   - **Registry or Namespace**: Enter the path to your Azure Container Registry which is a globally unique top-level domain name for your specific registry or namespace. Typically this is _your-registry-name_**.azurecr.io**
   
   - **Image**: Name of the repository where the container images are stored. 

   - **Tag**: Tags are optional, it is the mechanism that registries use to give Docker images a version. A fully qualified image name will be of the format: '/:'. For example, 'myregistry.azurecr.io/nginx:latest'.

   - **Startup command**: Start up command for the container.
   -->
   
1. Save the release pipeline.

## Create a release to deploy your app

You're now ready to create a release, which means to run the release pipeline with the artifacts produced by a specific build. This will result in deploying the build:

1. Choose **+ Release** and select **Create a release**.

1. In the **Create a new release** panel, check that the artifact version you want to use is selected and choose **Create**.

1. Choose the release link in the information bar message. For example: "Release **Release-1** has been created".

1. In the pipeline view, choose the status link in the stages of the pipeline to see the logs and agent output.

1. After the release is complete, navigate to your site running in Azure using the Web App URL `http://{web_app_name}.azurewebsites.net`, and verify its contents.
