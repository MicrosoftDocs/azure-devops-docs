---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/19/2020
---

Select the artifact trigger and make sure the **Continuous deployment trigger** is enabled.

![build artifact trigger in release pipeline](../media/build-artifact-trigger-in-release-definition.png)

Click **Save**. In the Save dialog box, click **OK**.

To test the release pipeline, click **Release** and then **Create Release**.

![create release](../../../apps/cd/azure/media/create-release.png)

On the Create new release dialog box, click **Queue**.

You will notice a new release being created. Select the link to navigate to the release.

![new release created message](../../../apps/cd/azure/media/new-release-created-message.png)

You can watch the live logs for the deployment as it happens. Wait for the release to be deployed to the Azure Web App.
