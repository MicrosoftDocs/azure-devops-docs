---
title: Manage VM resources in environments
description: Learn how to create and use virtual machine (VM) resources in Azure Pipelines environments.
ms.topic: how-to
ms.custom: pipelinesresourcesrefresh
ms.assetid: b318851c-4240-4dc2-8688-e70aba1cec55
ms.manager: mijacobs
ms.date: 07/08/2024
monikerRange: '>= azure-devops-2020'
---

# Manage VM resources in environments

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

This article describes how to use virtual machine (VM) resources in environments to manage Azure Pipelines deployments across multiple machines. You can also install agents on your own servers for rolling deployments.

VM resources can exist in [environments](environments.md), such as Development, Test, or Production. After you define an environment, you can add VMs to target with deployments. The environment's deployment history provides traceability from each VM to your pipeline.

## Prerequisites

To add VMs to an environment, you must have the following roles or permissions:

### [Linux](#tab/linux)

- Access to a source repository that's connected to your pipeline.
- Access and permission to download and run executable scripts on the VMs you want to connect to the environment.
- Project Administrator or Build Administrator [permissions](../policies/permissions.md) in the Azure DevOps project that contains the environment. For more information, see [Pipeline security resources](../security/resources.md).
- [Administrator role](../agents/pools-queues.md#security) for the *deployment pool*, or set of target servers available to the organization. For more information, see [deployment pool and environment permissions](../policies/permissions.md#deployment-group-permissions).

### [Windows](#tab/windows)

- Access to a source repository that's connected to your pipeline.
- Access and PowerShell administrator permissions on VMs you want to connect to the environment.
- Project Administrator or Build Administrator [permissions](../policies/permissions.md) in the Azure DevOps project that contains the environment. For more information, see [Pipeline security resources](../security/resources.md).
- [Administrator role](../agents/pools-queues.md#security) for the *deployment pool*, or set of target servers available to the organization. For more information, see [deployment pool and environment permissions](../policies/permissions.md#deployment-group-permissions).

---

> [!NOTE]
> To configure a deployment group agent, or if you see an error when registering a VM environment resource, make sure you set your personal access token (PAT) scope to **All accessible organizations**.

## Create a VM resource

Use the following procedure to add a VM resource to an environment. You can use the same process to set up physical machines.

### Create the environment

1. In your Azure DevOps project, go to **Pipelines** > **Environments** and then select **Create environment** or **New environment**.
1. On the **New environment** screen, add a **Name** and an optional **Description**.
1. Under **Resource**, select **Virtual machines**, and then select **Next**.

   :::image type="content" source="media/create-environment.png" alt-text="Screenshot that shows adding an environment.":::

### Copy the registration script

The agent scripts for VM resources are like the scripts for self-hosted agents, and use the same commands. The scripts include an Azure DevOps Personal Access Token (PAT) for the signed-in user, which expires on the day the script is generated.

### [Linux](#tab/linux)

1. On the next screen, choose Linux under **Operating system**.
1. Copy the Linux registration script.

   :::image type="content" source="media/vm-creation-linux.png" alt-text="Screenshot that shows adding a virtual machine.":::    

The script is the same for all the Linux VMs added to the environment. For more information about installing the agent script, see [Self-hosted Linux agents](../agents/linux-agent.md).

### [Windows](#tab/windows)

1. On the next screen, choose Windows under **Operating system**.  
1. Copy the [PowerShell](/powershell/scripting/overview) registration script.

   :::image type="content" source="media/vm-creation.png" alt-text="Add a virtual machine.":::    

The script is the same for all the Windows VMs added to the environment. For more information about installing the agent script, see [Self-hosted Windows agents](../agents/windows-agent.md).

---

### Run the copied script

1. Select **Close**, and note that the new environment is created. You can select **Add resource** to copy the script again.

   :::image type="content" source="media/environment-new.png" alt-text="Screenshot of the new environment created message.":::

1. Run the copied script on each target VM that you want to register with this environment.

   > [!NOTE]
   > If the VM already has another agent running on it, provide a unique name for **agent** to register with the environment.

Once the VM is registered, it appears as a resource under the **Resources** tab of the environment.

:::image type="content" source="media/vm-resourceview.png" alt-text="Screenshot of the Resources tab.":::

## Use VMs in pipelines

In your YAML pipeline, you can target VMs by referencing their environment. By default, the job targets all the VMs registered for that environment's `resourceName`.

>[!NOTE]
>When you retry a stage, the deployment reruns on all VMs and not just on failed targets.

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
   resourceName: VMenv
   resourceType: virtualMachine
  strategy:
     runOnce:
        deploy:   
          steps:
            - script: echo "Hello world"
```

> [!NOTE]
> The `resourceType` values are case sensitive. Incorrect casing results in no matching resources found.

You can select specific VMs from the environment to receive the deployment by specifying them in `resourceName`. The following example deploys only to the VM resource named `USHAN-PC` in the `VMenv` environment.

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

To learn more about YAML pipeline deployment jobs, see the [YAML pipelines schema](/azure/devops/pipelines/yaml-schema/jobs-deployment).

## Add and manage tags

Tags are a way to target a specific set of VMs in an environment for deployment. Tags are limited to 256 characters each. There's no limit to the number of tags that you can use.

You can add tags to the VM in the interactive registration script or through the UI.

Add or remove tags from the resource view in the UI by selecting **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: for a VM resource.

:::image type="content" source="media/vm-tags.png" alt-text="Screenshot that shows setting VM tags.":::

If you select multiple tags, the pipeline uses only VMs that include all the tags. The following example targets only VMs that have both the `windows` and `prod` tags. VMs that have only one or none of the tags aren't targeted.

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
    tags: windows,prod # only deploy to VMs with both windows and prod tags
  strategy:
    runOnce:
      deploy:   
          steps:
          - script: echo "Hello world"
```

## Apply deployment strategy

You can apply a deployment `strategy` to define how your application gets rolled out. The `runOnce` strategy and the `rolling` strategy are both supported for VMs. For more information about deployment strategies and lifecycle hooks, see [Deployment strategies](./deployment-jobs.md#deployment-strategies).

## View deployment history

Select the **Deployments** tab for complete traceability of commits and work items, and a cross-pipeline deployment history per environment and resource.

:::image type="content" source="media/vm-deployments.png" alt-text="Screenshot that shows VM Deployments view.":::

## Remove a VM from an environment

### [Linux](#tab/linux)

To remove a VM from a Linux environment, run the following command on each machine.

```
./config.sh remove
```

### [Windows](#tab/windows)

To remove VMs from a Windows environment, run the following command. Make sure you run the command:

- On each machine.
- From an administrator PowerShell command prompt.
- In the same folder path as the environment registration command.

```
./config.cmd remove
```

---

## Related content

- [Create and target environments](environments.md)
- [Deployment jobs](deployment-jobs.md)
- [YAML pipelines schema reference](/azure/devops/pipelines/yaml-schema)
