---
title: Environment - Virtual machine resource
description: Virtual machine resource support within Environment
ms.topic: conceptual
ms.custom: pipelinesresourcesrefresh
ms.assetid: b318851c-4240-4dc2-8688-e70aba1cec55
ms.manager: mijacobs
ms.date: 01/12/2023
monikerRange: '>= azure-devops-2020'
---

# Environment - virtual machine resource

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Use virtual machine (VM) resources to manage deployments across multiple machines with YAML pipelines. VM resources let you install agents on your own servers for rolling deployments.

VM resources connect to [environments](environments.md). After you define an environment, you can add VMs to target with deployments. The deployment history view in an environment provides traceability from your VM to your pipeline.

## Prerequisites

You must have at least a Basic license and access to the following areas:

- the repository connected to your pipeline
- the VM you want to connect to the environment

For more information about security for Azure Pipelines, see [Pipeline security resources](../security/resources.md).

To add a VM to an environment, you must have the [Administrator role](../agents/pools-queues.md#security) for the corresponding deployment pool. A deployment pool is a set of target servers available to the organization. Learn more about [deployment pool and environment permissions](../policies/permissions.md#set-deployment-pool-permissions). 

> [!NOTE]
> If you are configuring a deployment group agent, or if you see an error when registering a VM environment resource, you must set the PAT scope to **All accessible organizations**.

## Create a VM resource

> [!NOTE]
> You can use this same process to set up physical machines with a registration script.

The first step in adding a VM resource is to define an environment.

### Define an environment

1. Select **Create environment** or **New environment**, depending on whether it's your first environment.
1. Add a **Name** (required) for the environment and a **Description**.
1. Save the new environment.

### Add a resource

1. Select your environment and choose **Add resource**.
1. Select **Virtual machines** for your  **Resource** type. Then select **Next**.

   :::image type="content" source="media/create-environment.png" alt-text="Add an environment.":::

1. Choose Windows or Linux for the **Operating System**.  
1. Copy the registration script. Your script will be a [PowerShell script](/powershell/scripting/overview) if you've selected Windows and a Linux script if you've selected Linux.

   :::image type="content" source="media/vm-creation.png" alt-text="Add a virtual machine.":::    

1. Run the copied script on each of the target virtual machines that you want to register with this environment. 
   - If you're installing on Windows, you'll need to run the script an PowerShell administrator.
   - If you're installing on Linux, you'll need to have permission to download and run executable scripts. 

   > [!NOTE]
   >
   > - The Personal Access Token (PAT) for the signed-in user gets included in the script. The PAT expires on the day you generate the script.
   > - If your VM already has any other agent running on it, provide a unique name for **agent** to register with the environment.
   > - To learn more about installing the agent script, see [Self-hosted Linux agents](../agents/v2-linux.md) and [Self-hosted Windows agents](../agents/windows-agent.md). The agent scripts for VM resources are like the scripts for self-hosted agents and you can use the same commands.

1. Once your VM is registered, it appears as an environment resource under the **Resources** tab of the environment.
1. To add more VMs, copy the script again. Select **Add resource** > **Virtual machines**. The Windows and Linux scripts are the same for all the VMs added to the environment.
1. When the VM script is successfully installed, your VM appears in the list of resources for the environment.

   :::image type="content" source="media/vm-resourceview.png" alt-text="View resources.":::

## Use VM in pipelines

Target VMs in your pipeline by referencing the environment. By default, the pipeline job runs for all of the VMs defined for an environment with a `resourceName`.

```yaml
trigger: 
- main

pool: 
   vmImage: ubuntu-latest

jobs:
- deployment: VMDeploy
  displayName: Deploy to VM
  environment: 
   name: VMenv
   resourcesNAme: VMenv
   resourceType: virtualMachine
  strategy:
     runOnce:
        deploy:   
          steps:
            - script: echo "Hello world"
```

> [!NOTE]
> The `resourceType` values are case sensitive. Specifying the incorrect casing will result in no matching resources found in the environment. See the [YAML schema](/azure/devops/pipelines/yaml-schema/jobs-deployment-environment) for more information.

You can select a specific virtual machine from the environment to only receive the deployment by specifying it by its `resourceName`. For example, to target deploying only to the Virtual Machine resource named `USHAN-PC` in the `VMenv` environment, add the `resourceName` parameter and give it the value of `USHAN-PC`.

```yaml
trigger: 
- main

pool: 
   vmImage: ubuntu-latest

jobs:
- deployment: VMDeploy
  displayName: Deploy to VM
  environment: 
    name: VMenv
    resourceType: virtualMachine
    resourceName: USHAN-PC # only deploy to the VM resource named USHAN-PC
  strategy:
    runOnce:
      deploy:   
          steps:
          - script: echo "Hello world"
```

To learn more about deployment jobs, see the [YAML schema](/azure/devops/pipelines/yaml-schema/jobs-deployment).

## Add and manage tags

Tags give you a way to target a set of specific VMs in an environment for deployment. You can add tags to the VM as part of the interactive registration script or through the UI. Tags are each limited to 256 characters. There's no limit to the number of tags that you can use.

Add or remove tags in the UI from the resource view by selecting **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: for a VM resource.

:::image type="content" source="media/vm-tags.png" alt-text="Set VM tags.":::

When you select multiple tags, VMs that include all the tags get used in your pipeline.  For example, this pipeline targets VMs with both the `windows` and `prod` tags. If a VM only has one of these tags, it's not targeted.

```yaml
trigger: 
- main

pool: 
   vmImage: ubuntu-latest

jobs:
- deployment: VMDeploy
  displayName: Deploy to VM
  environment: 
    name: VMenv
    resourceType: virtualMachine
    tags: windows,prod # only deploy to virtual machines with both windows and prod tags
  strategy:
    runOnce:
      deploy:   
          steps:
          - script: echo "Hello world"
```

## Apply deployment strategy

Apply a deployment strategy to define how your application gets rolled out. The `runOnce` strategy and the `rolling` strategy for VMs are both supported.
For more information about deployment strategies and life-cycle hooks, see [Deployment jobs/Deployment strategies](./deployment-jobs.md#deployment-strategies).

## View deployment history

Select the **Deployments** tab for complete traceability of commits and work items, and a cross-pipeline deployment history per environment and resource.
> [!div class="mx-imgBorder"]
> ![VMDeployments_view](media/vm-deployments.png)
  
## Remove a VM from an environment

### Windows environment

To remove VMs from a Windows environment, run the following command.
Ensure you do the following tasks:

- Run the command from an administrator PowerShell command prompt
- Run the command on each machine
- Run the command in the same folder path as the environment registration command was run

```
./config.cmd remove
```

### Linux environment

To remove a VM from a Linux environment, run the following command on each machine.

```
./config.sh remove
```

## Known limitations

When you retry a stage, it reruns the deployment on all VMs and not just failed targets.

## Related articles

- [About environments](environments.md)
- [Learn about deployment jobs](deployment-jobs.md)
- [YAML schema reference](/azure/devops/pipelines/yaml-schema)
