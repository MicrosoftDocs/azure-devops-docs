---
ms.topic: include
---

Select the artifact trigger and make sure the **Continuous deployment trigger** is enabled.

![build artifact trigger in release pipeline](_img/build-artifact-trigger-in-release-definition.png)

Click **Save**. In the Save dialog box, click **OK**.

To test the release pipeline, click **Release** and then **Create Release**.

![create release](../../../apps/cd/azure/_shared/_img/create-release.png)

On the Create new release dialog box, click **Queue**.

You will notice a new release being created. Select the link to navigate to the release.

![new release created message](../../../apps/cd/azure/_shared/_img/new-release-created-message.png)

You can watch the live logs for the deployment as it happens. Wait for the release to be deployed to the Azure Web App.
