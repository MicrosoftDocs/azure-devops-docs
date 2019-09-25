---
ms.topic: include
---

## Create a deployment group

Deployment groups in Azure Pipelines make it easier to organize the servers that you want to use to host your app. A deployment group is a collection of machines with an Azure Pipelines agent on each of them. Each machine interacts with Azure Pipelines to coordinate deployment of your app.

1. Open the Azure Pipelines web portal, navigate to **Azure Pipelines**, and then click **Deployment groups**.

2. Click **Add Deployment group** (or **New** if there are already deployment groups in place.

3. Enter a name for the group, such as *myIIS*, and then click **Create**.

4. In the **Register machine** section, make sure that **Windows** is selected, and that **Use a personal access token in the script for authentication** is also selected. Click **Copy script to clipboard**.

   ![Screenshot showing update to code](../../../apps/_shared/_img/windows-deployment-group-setup.png)

   The script that you've copied to your clipboard will download and configure an agent on the VM so that it can receive new web deployment packages and apply them to IIS.

5. On your VM, in an **Administrator PowerShell** console, paste and run the script.

6. When you're prompted to configure tags for the agent, press Enter (you don't need any tags).

7. When you're prompted for the user account, press Enter to accept the defaults.

8. When the script is done, it displays the message *Service vstsagent.account.computername started successfully*.

9. On the **Deployment groups** page of Azure Pipelines, open the *myIIS* deployment group. On the **Machines** tab, verify that your VM is listed.

   ![Screenshot showing update to code](../../../apps/_shared/_img/windows-deployment-group.png)
