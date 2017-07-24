## Create a deployment group

Deployment groups enable you to specify which servers are the target of changes you make to your app.

1. In VSTS, on the **Build & Release** hub, click **Deployment groups**. 

1. Click **Add Deployment group** (or **New** if there are already deployment groups in place.

1. Enter a name for the group, such as *myIIS*, and then click **Create**.

1. In the **Register machine** section, make sure that **Windows** is selected, and that **Use a personal access token in the script for authentication** is also selected. Click **Copy script to clipboard**.

 ![Screenshot showing update to code](./_img/windows-deployment-group-setup.png)

The script that you've copied to your clipboard will download and configures an agent on the VM so that it can receipve new web deployment packages andd apply them to IIS.

1. On your VM, in an **Administrator PowerShell** console, paste and run the script. 

1. When you're prompted to configure tags for the agent, enter **Y**, and then enter **web**. 

1. When you're prompted for the user account, press Enter to accept the defaults.

1. When the script is done, it displays the message *Service vstsagent.account.computername started successfully*.

1. On the **Deployment groups** page of the **Build & Release** menu, open the *myIIS* deployment group. On the **Machines** tab, verify that your VM is listed.

 ![Screenshot showing update to code](./_img/windows-deployment-group.png)