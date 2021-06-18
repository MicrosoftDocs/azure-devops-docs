---
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 06/18/2021
---


## Manage permissions for a shared view

All members of the Contributors group for your project can use **Shared** views in Power BI. For shared views that you create, you can manage the permissions of users and groups to create, delete, or view a specific shared view.

1. To change the permissions for a shared view, open **Analytics views**, and choose **All**. For details, see [Create an Analytics view](/azure/devops/report/powerbi/analytics-views-create). 

1. Choose the :::image type="icon" source="/azure/devops/report/media/icons/actions-icon.png" border="false"::: **More Actions** icon and then choose **Security**.

2. Change the permissions so that the team member or group can't edit or delete the view.

3. Add a user or group who you want to grant permissions to or restrict access.

	::: moniker range="azure-devops"
	:::image type="content" source="/azure/devops/report/powerbi/media/permissions/set-analytics-view-shared-permissions.png" alt-text="Shred Analytics view security dialog, change permissions for a user.":::

	Close the dialog when done. Your changes are automatically saved.
	::: moniker-end
	::: moniker range="< azure-devops"
   > [!div class="mx-imgBorder"]
   > ![Manage permissions](/azure/devops/report/powerbi/media/editable-views/view-permissions.png)

	Choose **Save changes ** when done. 
	::: moniker-end
 