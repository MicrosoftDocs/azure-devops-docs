---
ms.topic: include
---

## Create a deployment group

Deployment groups in Azure Pipelines make it easier to organize the servers that you want to use to host your app. A deployment group is a collection of machines with an Azure Pipelines agent on each of them. Each machine interacts with Azure Pipelines to coordinate deployment of your app.

1. Open the Azure Pipelines web portal and choose **Deployment groups**.

1. Click **Add Deployment group** (or **New** if there are already deployment groups in place).

1. Enter a name for the group, such as *myIIS*, and then click **Create**.

1. In the **Register machine** section, make sure that **Windows** is selected, and that **Use a personal access token in the script for authentication** is also selected. Click **Copy script to clipboard**.

   The script that you've copied to your clipboard will download and configure an agent on the VM so that it can receive new web deployment packages and apply them to IIS.

1. On your VM, in an **Administrator PowerShell** console, paste and run the script.

1. When you're prompted to configure tags for the agent, press Enter (you don't need any tags).

1. When you're prompted for the user account, press Enter to accept the defaults.

   > The account under which the agent runs needs **Manage** permissions for the C:\Windows\system32\inetsrv\ directory.
   Adding non-admin users to this directory is not recommended. In addition, if you have a custom user identity for the application pools,
   the identity needs permission to read the crypto-keys. Local service accounts and user accounts must be given read access for this.
   For more details, see [Keyset does not exist error message](https://support.microsoft.com/help/977754/-keyset-does-not-exist-error-message-when-you-try-to-change-the-identi).

1. When the script is done, it displays the message *Service vstsagent.account.computername started successfully*.

1. On the **Deployment groups** page in Azure Pipelines, open the *myIIS* deployment group. On the **Targets** tab, verify that your VM is listed.
