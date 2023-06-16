---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 06/16/2023
---

## Create the service connection

1. From your project dashboard, select **Project settings**. If you don't have a project, [create a project](../../../organizations/projects/create-project.md) now.

2. On the settings page, select **Pipelines** > **Service connections**, select **New service connection**, and then select **Azure Resource Manager**.

3. Select **Service principal (automatic)** and **Next**.

4. The **Add an Azure Resource Manager service connection** dialog box appears. 
   * **Scope** Select **Subscription**.
   * **Subscription** Select your Azure portal subscription.
   * **Resource Group** Select the resource group you created earlier.
   * **Service connection name** Type a name and then copy and paste it into a text file so you can use it later. 
   * Select **Grant access permission to all pipelines**. To select this option, you'll need the [service connection **Administrator** role](../../library/add-resource-protection.md#3---add-protection-to-a-service-connection). 

   ![New service connection dialog box](../media/add-service-connection-dialog-box.png)

> [!Tip]
> If you need to create a connection to an Azure subscription that's owned by someone else, see [Create an Azure Resource Manager service connection with an existing service principal](../../library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-with-an-existing-service-principal).
