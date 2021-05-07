---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/19/2020
---

On the **Create release pipeline** dialog box, click **Yes**.

In the **Select a Template** panel, click the **Azure App Service Deployment** template, and then click **Apply**.

![apply azure app service deployment template](../media/apply-azure-app-service-deployment-template.png)

Click **Tasks**, and then the **Deploy Azure App Service** task.

Configure the inputs for the **Deploy Azure App Service** task in the release pipeline. First, select the name of the **Azure subscription** to which you would like to deploy the application. If there is an **Authorize** button next to the input, click on it to authorize Azure Pipelines to connect to your Azure subscription.

![authorize azure subscription in new release pipeline](../../../apps/media/authorize-azure-subscription-in-new-release-definition.png)

> [!NOTE]
> If you don't see the Azure subscription in the menu, make sure you are a co-administrator of the Azure subscription you want to use. You can [create your own Azure subscription for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).

Next, select the name of the Azure Web App you created for the **App service name**.
