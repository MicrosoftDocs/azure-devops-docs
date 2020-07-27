---
title: Azure virtual machine scale set agents
description: Use Azure virtual machine scale sets to create agents
ms.topic: reference
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 04/23/2020
monikerRange: azure-devops
---

# Azure virtual machine scale set agents

[!INCLUDE [include](../includes/version-team-services.md)]

>[!NOTE]
>This feature is currently in preview.

Azure virtual machine scale set agents, hereafter referred to as scale set agents, are a form of self-hosted agents that can be auto-scaled to meet your demands. This elasticity reduces your need to run dedicated agents all the time. Unlike Microsoft-hosted agents, you have flexibility over the size and the image of machines on which agents run. 

If you like Microsoft-hosted agents but are limited by what they offer, you should consider scale set agents. Here are some examples:

- You need more memory, more processor, more storage, or more IO than what we offer in native Microsoft-hosted agents.
- You need NCv2 VM with particular instruction sets for machine learning.
- You need to deploy to a private Azure App Service in a private VNET with no inbound connectivity.
- You need to open corporate firewall to specific IP addresses so that Microsoft-hosted agents can communicate with your servers.
- You need to restrict network connectivity of agent machines and allow them to reach only approved sites.
- You can't get enough agents from Microsoft to meet your needs.
- Your jobs exceed the Microsoft-hosted agent timeout.
- You can't partition Microsoft-hosted parallel jobs to individual projects or teams in your organization.
- You want to run several consecutive jobs on an agent to take advantage of incremental source and machine-level package caches.
- You want to run additional configuration or cache warmup before an agent begins accepting jobs.

If you like self-hosted agents but wish that you could simplify managing them, you should consider scale set agents. Here are some examples:

- You don't want to run dedicated agents around the clock. You want to de-provision agent machines that are not being used to run jobs.
- You run untrusted code in your pipeline and want to re-image agent machines after each job.
- You want to simplify periodically updating the base image for your agents.

> [!NOTE]
> You cannot run Mac agents using scale sets. You can only run Windows or Linux agents this way.


## Create a virtual machine scale set agent pool

### Create the scale set

In preparation for creating scale set agents, you must first create a virtual machine scale set in the Azure portal. You must create the virtual machine scale set in a certain way so that Azure Pipelines can manage it. In particular, you must disable Azure's auto-scaling so that Azure Pipelines can determine how to perform scaling based on number of incoming pipeline jobs. We recommend that you use the following steps to create the scale set.

In the following example, a new resource group and virtual machine scale set are created with Azure Cloud Shell using the UbuntuLTS VM image.

1. Browse to [Azure Cloud Shell](https://shell.azure.com/) at `https://shell.azure.com/`.

2. Run the following command to verify your default Azure subscription.

    ```azurecli
    az account list -o table
    ```

    If your desired subscription isn't listed as the default, select your desired subscription. 

    ```azurecli
    az account set -s <your subscription ID>
    ```

3. Create a resource group for your virtual machine scale set.

    ```azurecli
    az group create \
    --location westus \
    --name vmssagents
    ```

4. Create a virtual machine scale set in your resource group. In this example the UbuntuLTS VM image is specified. 

    ```azurecli
    az vmss create \
    --name vmssagentspool \
    --resource-group vmssagents \
    --image UbuntuLTS \
    --vm-sku Standard_D2_v3 \
    --storage-sku StandardSSD_LRS \
    --authentication-type SSH \
    --instance-count 2 \
    --disable-overprovision \
    --upgrade-policy-mode manual \
    --single-placement-group false \
    --platform-fault-domain-count 1 \
    --load-balancer "" \
    --ephemeral-os-disk true \
    --os-disk-caching readonly \
    ```

    Because Azure Pipelines manages the scale set, the following settings are required:

    * `--disable-overprovision`
    * `--upgrade-policy-mode manual`
    * `--load-balancer ""`
    * `--instance-count 2` - this setting is not required, but it will give you an opportunity to verify that the scale set is fully functional before you create an agent pool. Creation of the two VMs can take several minutes. Later, when you create the agent pool, Azure Pipelines will delete these two VMs and create new ones.

    > [!IMPORTANT]
    >  If you run this script using Azure CLI on Windows, you must enclose the `""` in `--load-balancer ""` with single quotes like this: `--load-balancer '""'`

    The following parameters to enable (Ephemeral OS disks)[https://docs.microsoft.com/en-us/azure/virtual-machines/ephemeral-os-disks] are optional but recommended to improve virtual machine reimage times.

    * `--ephemeral-os-disk true`
    * `--os-disk-caching readonly`

    Select any Linux or Windows image - either from Azure marketplace or your own custom image - to create the scale set. Do not pre-install Azure Pipelines agent in the image. Azure Pipelines automatically installs the agent as it provisions new virtual machines. In the above example, we used a plain `UbuntuLTS` image. For instructions on creating and using a custom image, see [FAQ](#faq).
    
    Select any VM SKU and storage SKU.

    > [!NOTE]
    > Licensing considerations limit us from distributing Microsoft-hosted images. We are unable to provide these images for you to use in your scale set agents. But, the [scripts](https://github.com/actions/virtual-environments/tree/master/images) that we use to generate these images are open source. You are free to use these scripts and create your own custom images.

5. After creating your scale set, navigate to your scale set in the Azure portal and verify the following settings:

    * **Upgrade policy - Manual**

        :::image type="content" source="media/scale-set-agents/upgrade-policy.png" alt-text="Verify upgrade policy." :::

        You can also verify this setting by running the following Azure CLI command.

        ```azurecli
        az vmss show --resource-group vmssagents --name vmssagentspool --output table

        Name            ResourceGroup    Location    Zones    Capacity    Overprovision    UpgradePolicy
        --------------  ---------------  ----------  -------  ----------  ---------------  ---------------
        vmssagentspool  vmssagents       westus               0           False            Manual
        ```

    * **Scaling - Manual scale**

        :::image type="content" source="media/scale-set-agents/manual-scale.png" alt-text="Verify upgrade policy." :::

### Create the agent pool

1. Navigate to your Azure DevOps **Project settings**, select **Agent pools** under **Pipelines**, and select **Add pool** to create a new agent pool.

    :::image type="content" source="media/scale-set-agents/create-agent-pool.png" alt-text="Create agent pool." :::

    > [!IMPORTANT]
    > You must create your scale set pool in **Project settings** and not **Organization settings**. Conversely, when you want to delete a scale set pool, you must delete it from **Organization settings**, and not **Project settings**.

2. Select **Azure virtual machine scale set** for the pool type. Select the **Azure subscription** that contains the scale set, choose **Authorize**, and choose the desired virtual machine scale set from that subscription. If you have an existing [service connection](../library/service-endpoints.md) you can choose that from the list instead of the subscription.

    > [!IMPORTANT]
    > To configure a scale set agent pool, you must have either [Owner](/azure/role-based-access-control/built-in-roles#owner) or [User Access Administrator](/azure/active-directory/users-groups-roles/directory-assign-admin-roles#user-administrator-permissions) permissions on the selected subscription. If you have one of these permissions but get an error when you choose **Authorize**, see [troubleshooting](../release/azure-rm-endpoint.md#insufficient-privileges-to-complete-the-operation).

3. Choose the desired virtual machine scale set from that subscription.

4. Specify a name for your agent pool.

5. Configure the following options:

    - **Maximum number of virtual machines in the scale set** - Azure Pipelines will automatically scale-up the number of agents, but won't exceed this limit.
    - **Number of agents to keep on standby** - Azure Pipelines will automatically scale-down the number of agents, but will ensure that there are always this many agents available to run new jobs. If you set this to **0**, for example to conserve cost for a low volume of jobs, Azure Pipelines will start a VM only when it has a job.
    - **Automatically tear down virtual machines after every use** - A new VM instance is used for every job.  After running a job, the VM will go offline and be reimaged before it picks up another job.
    - **Delay in minutes before deleting excess idle agents** - To account for the variability in build load throughout the day, Azure Pipelines will wait this long before deleting an excess idle agent.
    - **Configure VMs to run interactive tests** (Windows Server OS Only) - Windows agents can either be configured to run unelevated with autologon and with interactive UI, or they can be configured to run with elevated permissions.  Check this box to run unelevated with interactive UI.

    :::image type="content" source="media/scale-set-agents/agent-pool-settings.png" alt-text="Create agent pool." :::

    > [!IMPORTANT]
    > During the preview, scale set agents have the following limitations:
    > - You may not select **Preserve machines with failed runs for diagnostics**.

6. When your settings are configured, choose **Create** to create the agent pool.

## Use scale set agent pool

Using a scale set agent pool is similar to any other agent pool. You can use it in classic build, release, or YAML pipelines. User permissions, pipeline permissions, approvals, and other checks work the same way as in any other agent pool. For more information, see [Agent pools](pools-queues.md).

> [!IMPORTANT]
> Caution must be exercised when making changes directly to the scale set in the Azure portal.
> - You may not change many of the the scale set configuration settings in the Azure portal. Azure Pipelines updates the configuration of the scale set. Any manual changes you make to the scale set may interfere with the operation of Azure Pipelines. 
> - You may not rename or delete a scale set without first deleting the scale set pool in Azure Pipelines.

## How Azure Pipelines manages the scale set

Once the scale set agent pool is created, Azure Pipelines automatically scales the agent machines.

Azure Pipelines samples the state of the agents in the pool and virtual machines in the scale set every 5 minutes.  The decision to scale up or down is based on the number of idle agents at that time. An agent is considered idle if it is online and is not running a pipeline job. Azure Pipelines performs a scale up operation if either of the following conditions is satisfied:

- The number of idle agents falls below the number of standby agents you specify
- There are no idle agents to service pipeline jobs waiting in the queue

If one of these conditions is met, Azure Pipelines grows the number of VMs. Scaling up is done in increments of a certain percentage of the maximum pool size. Allow 20 minutes for machines to be created for each step.

Azure Pipelines scales down the agents when the number of idle agents exceeds the standby count for more than 30 minutes (configurable).

To put all of this into an example, consider a scale set agent pool that is configured with 2 standby agents and 4 maximum agents. Let us say that you want to tear down the VM after each use. Also, let us assume that there are no VMs to start with in the scale set.

- Since the number of idle agents is 0, and since the number of idle agents is below the standby count of 2, Azure Pipelines scales up and adds two VMs to the scale set. Once these agents come online, there will be 2 idle agents.

- Let us say that 1 pipeline job arrives and is allocated to one of the agents.

- At this time, the number of idle agents is 1, and that is less than the standby count of 2. So, Azure Pipelines scales up and adds 2 more VMs (the increment size used in this example). At this time, the pool has 3 idle agents and 1 busy agent.

- Let us say that the job on the first agent completes. Azure Pipeline takes that agent offline to re-image that machine. After a few minutes, it comes back with a fresh image. At this time, we'll have 4 idle agents.

- If no other jobs arrive for 30 minutes (configurable), Azure Pipelines determines that there are more idle agents than are necessary. So, it scales down the pool to two agents.

Throughout this operation, the goal for Azure Pipelines is to reach the desired number of idle agents on standby. Pools scale up and down slowly. Over the course of a day, the pool will scale up as requests are queued in the morning and scale down as the load subsides in the evening. You may observe more idle agents than you desire at various times. This is expected as Azure Pipelines converges gradually to the constraints that you specify.

> [!NOTE]
>  It can take an hour or more for Azure Pipelines to scale up or scale down the virtual machines. Azure Pipelines will scale up in steps, monitor the operations for errors, and react by deleting unusable machines and by creating new ones in the course of time. This corrective operation can take over an hour.

To achieve maximum stability, scale set operations are done sequentially.  For example if the pool needs to scale up and there are also unhealthy machines to delete, Azure Pipelines will first scale up the pool. Once the pool has scaled up to reach the desired number of idle agents on standby, the unhealthy machines will be deleted.

Due to the sampling size of 5 minutes, it is possible that all agents can be running pipelines for a short period of time and no scaling up will occur.

## Customizing Pipeline Agent Configuration
You can customize the configuration of the Azure DevOps Pipeline Agent by defining environment variables in your operating system custom image for your scale set.  For example if you want to change the working directory of the pipeline agent, create an environment variable named VSTS_AGENT_INPUT_WORK with the desired working directory.  More information can be found in the (Pipelines Agent Unattended Configuration)[https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-windows?view=azure-devops#unattended-config] documentation. Some examples include:

    - VSTS_AGENT_INPUT_WORK
    - VSTS_AGENT_INPUT_PROXYURL
    - VSTS_AGENT_INPUT_PROXYUSERNAME
    - VSTS_AGENT_INPUT_PROXYPASSWORD

> [!IMPORTANT]
> Caution must be exercised when customizing the Pipelines agent.  Some settings will conflict with other required settings and cause the agent to fail to register with your agent pool.
> Some examples of settings that should not be set or altered include:
> - VSTS_AGENT_INPUT_URL
> - VSTS_AGENT_INPUT_AUTH
> - VSTS_AGENT_INPUT_TOKEN
> - VSTS_AGENT_INPUT_USERNAME
> - VSTS_AGENT_INPUT_PASSWORD
> - VSTS_AGENT_INPUT_POOL
> - VSTS_AGENT_INPUT_AGENT
> - VSTS_AGENT_INPUT_RUNASSERVICE
> ... and anything related to Deployment Groups.

## Customizing Virtual Machine Startup via the Custom Script Extension

Users may want to execute startup scripts on their scaleset agent machines before those machines start running pipeline jobs. Some common use cases for start up scripts include installing software, warming caches, or fetching repos. You can execute startup scripts by installing the (Custom Script Extension for Windows)[https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-windows] or (Custom Script Extension for Linux)[https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-linux]. This extension will be executed on every virtual machine in the scaleset immediately after it is created or reimaged.  The custom script extension will be executed before the Azure Pipelines agent extension is executed. 

Here is an example to create a custom script extension for Linux:

    ```azurecli
    az vmss extension set \
        --vmss-name <scaleset name> \
        --resource-group <resource group> \
        --name CustomScript
        --version 2.0
        --publisher Microsoft.Azure.Extensions
        --settings '{ \"FileUris\":[\"https://<myGitHubRepoUrl>/myScript.sh\"], \"commandToExecute\": \"bash /myScript.sh /myArgs \" }'
     ```

Here is an example to create a custom script extension for Windows:

    ```azurecli
    az vmss extension set \
        --vmss-name <scaleset name> \
        --resource-group <resource group> \
        --name CustomScriptExtension \
        --version 1.9 \
        --publisher Microsoft.Compute \
        --settings '{ \"FileUris\":[\"https://<myGitHubRepoUrl>/myscript.ps1\"], \"commandToExecute\": \"Powershell.exe -ExecutionPolicy Unrestricted -File myscript.ps1 \" }'
     ```

> [!IMPORTANT]
> The scripts executed in the Custom Script Extension must return with exit code 0 in order for the VM to finish the VM creation process.
> If the custom script extension throws an exception or returns a non-zero exit code, the Azure DevOps Pipeline extension will not be executed and the VM will not register with Azure DevOps agent pool.

## Lifecyle of a Scale Set Agent
Here is the flow of operations for an Azure DevOps Pipelines Virtual Machine Scale Set Agent

1. The Azure DevOps Scale Set Agent Pool sizing job determines the pool has too few idle agents and needs to scale up. Azure DevOps Pipelines makes a call to Azure Scale Sets to increase the scale set capacity.

2. The Azure Scale Set begins creating the new virtual machines. Once the virtual machines are running, Azure Scale Sets sequentially executes any installed VM extensions.

3. If the Custom Script Extension is installed, it is executed before the Azure Pipelines Agent extension.  If the Custom Script Extension returns a non-zero exit code the VM creation process is aborted and will be deleted.

4. The Azure Pipelines Agent extension is executed. This extension downloads the latest version of the Azure Pipelines Agent along with a configuration script which can be found here. (Note: This URL may change.)
      (https://vstsagenttools.blob.core.windows.net/tools/ElasticPools/Linux/6/enableagent.sh)[https://vstsagenttools.blob.core.windows.net/tools/ElasticPools/Linux/6/enableagent.sh]
      (https://vstsagenttools.blob.core.windows.net/tools/ElasticPools/Windows/5/enableagent.ps1)[https://vstsagenttools.blob.core.windows.net/tools/ElasticPools/Windows/5/enableagent.ps1]

5. The configuration script creates a local user for the pipelines agent.  The script then unzips, installs, and configures the Azure Pipelines Agent. As part of configuration, the agent registers with the Azure DevOps agent pool and appears in the agent pool list in the Offline state. 

6a. For most scenarios, the configuration script then immediately starts the agent.  The agent goes Online and is ready to run pipeline jobs.
6b. If the pool is configured for interactive UI, the virtual machine reboots after the agent is configured. After reboot the local user created for the pipelines agent will auto-login and immediately start the pipelines agent. The agent then goes Online and is ready to run pipeline jobs.

<a name="q-a"></a>
## FAQ

* [Are there any limitations during the preview?](#are-there-any-limitations-during-the-preview)
* [How do I create a scale set with custom software and custom disk size?](#how-do-i-create-a-scale-set-with-custom-software-and-custom-disk-size)
* [Where can I find the images used for Microsoft-hosted agents?](#where-can-i-find-the-images-used-for-microsoft-hosted-agents)
* [How do I configure scale set agents to run UI tests?](#how-do-i-configure-scale-set-agents-to-run-ui-tests)

### Are there any limitations during the preview?

During the preview, scale set agent pools have some limitations that you need to be aware of. We are actively working on removing these limitations.

- Azure Pipelines cannot preserve a machine for debugging if you have a job that fails.
- You should not enable or disable agents in the scale set agent pool using Azure Pipelines project settings. This can lead to unexpected behavior.

### How do I create a scale set with custom software and custom disk size?

These are steps to create a scale set with a custom OS disk size and custom software.

If you just want to create a scale set with the default 128GiB OS disk using a publicly available Azure image, then skip straight to step 6 and use the public image name (UbuntuLTS, Win2019DataCenter, etc.) to create the scale set.  Otherwise follow these steps to customize your VM image.

1.  Create a VM with your desired OS image and optionally expand the OS disk size from 128GiB to <myDiskSizeGb>.

    - If starting with an available Azure Image, for example <myBaseImage> = (Win2019DataCenter, UbuntuLTS):
    
        ```azurecli  
        az vm create --resource-group <myResourceGroup> --name <MyVM> --image <myBaseImage> --os-disk-size-gb <myDiskSize>  --admin-username myUserName --admin-password myPassword
        ```

    - If starting with a generalized VHD, first create the VM with an unmanaged disk of the desired size and then convert to a managed disk:

        ```azurecli
        az vm create --resource-group <myResourceGroup> --name <MyVM> --image <myVhdUrl> --os-type windows --os-disk-size-gb <myDiskSizeGb> --use-unmanaged-disk --admin-username <myUserName> --admin-password <myPassword> --storage-account <myVhdStorageAccount>
        ```

        Shutdown the VM
        ```azurecli
        az vm shutdown --resource-group <myResourceGroup> --name <MyVM>
        ```

        Deallocate the VM
        ```azurecli
        az vm deallocate --resource-group <myResourceGroup> --name <MyVM>
        ```
    
        Convert to a managed disk
        ```azurecli
        az vm convert --resource-group <myResourceGroup> --name <MyVM>
        ```

        Restart the VM
        ```azurecli
        az vm start --resource-group <myResourceGroup> --name <MyVM>
        ```
    
2. Remote Desktop (or SSH) to the VM's public IP address to customize the image.
   You may need to open ports in the firewall to unblock the RDP (3389) or SSH (22) ports.

   - [Windows] If <MyDiskSizeGb> is greater than 128Gb, extend the OS disk size to fill the disk size you declared above.
   
        Open DiskPart tool as administrator and run these DiskPart commands:
        - `list volume`  (to see the volumes)
        - `select volume 2` (depends on which volume is the OS drive)
        - `extend size 72000` (to extend the drive by 72 GiB, from 128GiB to 200GiB)
          
   - Install any additional software on the VM

   - Reboot the VM when finished with customizations
   
   - Generalize the VM.  
       
        - [Windows] From an admin console window: `C:\Windows\System32\sysprep\sysprep.exe /generalize /oobe /shutdown`
        - [Linux] `sudo waagent -deprovision+user -force`

        > [!IMPORTANT]
        > Wait for the VM to finish generalization and shutdown the VM! Do not proceed until the VM has stopped. Allow 60 minutes.
   
3. Deallocate the VM

    ```azurecli
    az vm deallocate --resource-group <myResourceGroup> --name <MyVM>
    ```
     
4. Mark the VM as Generalized

    ```azurecli
    az vm generalize --resource-group <myResourceGroup> --name <MyVM>
    ```

5. Create a VM Image based on the generalized image

    ```azurecli
    az image create  --resource-group <myResourceGroup> --name <MyImage> --source <MyVM>
    ```

6. Create the scale set based on the custom VM image

    ```azurecli
    az vmss create --resource-group <myResourceGroup> --name <myScaleSet> --image <MyImage> --admin-username <myUsername> --admin-password <myPassword> --instance-count 2 --disable-overprovision --upgrade-policy-mode manual --load-balancer '""'
    ```
     
7. Verify that both VMs created in the scale set come online, have different names, and reach the Succeeded state

You are now ready to create an agent pool using this scale set.

### Where can I find the images used for Microsoft-hosted agents?

Licensing considerations limit us from distributing Microsoft-hosted images. We are unable to provide these images for you to use in your scale set agents. But, the [scripts](https://github.com/actions/virtual-environments/tree/master/images) that we use to generate these images are open source. You are free to use these scripts and create your own custom images.

### How do I configure scale set agents to run UI tests?

Create a Scale Set with a Windows Server OS and when creating the Agent Pool select the "Configure VMs to run interactive tests" option.