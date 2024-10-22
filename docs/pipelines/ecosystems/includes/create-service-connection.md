---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 10/16/2024
ms.custom: arm2024
---

## Create the service connection

1. From your project dashboard, select **Project settings**. If you don't have a project, [create a project](../../../organizations/projects/create-project.md) now.

2. On the settings page, select **Pipelines** > **Service connections**, select **New service connection**, and then select **Azure Resource Manager**.

3. Select **App registration (automatic)** with the credential option **Workload identity federation**.

4. Set the service connection options:
   * **Scope** Select **Subscription**.
   * **Subscription** Select your Azure portal subscription.
   * **Resource Group** Select the resource group you created earlier.
   * **Service connection name** Type a name and then copy and paste it into a text file so you can use it later. 
   * If desired, select **Grant access permission to all pipelines**. To select this option, you'll need the [service connection **Administrator** role](../../library/add-resource-protection.md). 

   ![New service connection dialog box](../media/add-service-connection-dialog-box.png)

> [!Tip]
> If you need to create a connection to an Azure subscription that's owned by someone else, see [Create an Azure Resource Manager service connection with an existing service principal](../../library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-with-an-existing-service-principal).

3. Select **Save** to create your new service connection.
