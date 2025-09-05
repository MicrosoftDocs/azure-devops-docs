---
title: Manage VM resources in environments
description: Learn how to create and use virtual machine (VM) resources in Azure Pipelines environments.
ms.topic: how-to
ms.custom: pipelinesresourcesrefresh
ms.assetid: b318851c-4240-4dc2-8688-e70aba1cec55
ms.manager: mijacobs
ms.date: 09/04/2025
monikerRange: '>= azure-devops-2020'
---

# Manage VM resources in environments

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

You can define Azure Pipelines [environments](environments.md) such as Development, Test, or Production to target with deployments. You can install agents on physical or virtual machine (VM) resources to add them to these environments.

This article describes how to define and use environments to manage deployments across VM or physical server resources. The environment's deployment history provides traceability from each machine to your pipeline.

>[!NOTE]
> Azure DevOps environments are available only for YAML pipelines. For Classic pipelines, [deployment groups](../release/deployment-groups/index.md) provide similar functionality.

## Prerequisites

To carry out the procedures in this article, you need the following prerequisites:

### [Linux](#tab/linux)

- Access to a source repository where you can create pipelines. For more information, see [Supported source repositories}](../repos/index.md)
- [Administrator role](../agents/pools-queues.md#security) for the *deployment pool*, the set of target servers available to your Azure DevOps organization. For more information, see [Set deployment group security in Azure Pipelines](../policies/permissions.md#deployment-group-permissions).
- Project Administrator or Build Administrator [permissions](../policies/permissions.md) in the Azure DevOps project that contains the environment. For more information, see [Resource security](../security/resources.md).
- Access and permission to download and run executable scripts on VMs you want to connect to the environment.

### [Windows](#tab/windows)

- Access to a source repository where you can create pipelines. For more information, see [Supported source repositories}](../repos/index.md)
- [Administrator role](../agents/pools-queues.md#security) for the *deployment pool* or set of target servers available to your Azure DevOps organization. For more information, see [Set deployment group security in Azure Pipelines](../policies/permissions.md#deployment-group-permissions).
- Project Administrator or Build Administrator [permissions](../policies/permissions.md) in the Azure DevOps project that contains the environment. For more information, see [Resource security](../security/resources.md).
- Access and PowerShell administrator permissions on VMs you want to connect to the environment.

---

## Create and add resources to an environment

Use the following procedure to add a VM or physical machine to an environment.

### Add a VM resource

1. In your Azure DevOps project, go to **Pipelines** > **Environments** and then select **Create environment** or **New environment**.
1. On the **New environment** screen, enter a **Name** and optional **Description**.
1. Under **Resource**, select **Virtual machines**, and then select **Next**.

   :::image type="content" source="media/create-environment.png" alt-text="Screenshot that shows adding an environment.":::

### Copy the registration script

The agent scripts for VM resources are like the scripts for self-hosted agents, and use the same commands. The scripts include an Azure DevOps Personal Access Token (PAT) for the signed-in user, which expires three hours after the script is generated. You need the PAT only to install the agent.

> [!NOTE]
> To configure a deployment group agent, or if you see an error when registering the VM environment resource, set your personal access token (PAT) scope to **Full access** in your Azure DevOps account settings.

### [Linux](#tab/linux)

1. On the **Virtual machine resource** screen, choose Linux under **Operating system**.
1. Select the icon to copy the Linux registration script.

   :::image type="content" source="media/vm-creation-linux.png" alt-text="Screenshot that shows adding a virtual machine.":::

The script is the same for all the Linux VMs added to the environment. For more information about installing the agent script, see [Self-hosted Linux agents](../agents/linux-agent.md).

### [Windows](#tab/windows)

1. On the **Virtual machine resource** screen, choose Windows under **Operating system**.
1. Select the icon to copy the [PowerShell](/powershell/scripting/overview) registration script.

   :::image type="content" source="media/vm-creation.png" alt-text="Add a virtual machine.":::    

The script is the same for all the Windows VMs added to the environment. For more information about installing the agent script, see [Self-hosted Windows agents](../agents/windows-agent.md).

---

### Run the copied script on the VM

1. Select **Close**. The new environment is created. To copy the script again, for example if your PAT expires before you can install the agent, select **Add resource** again on the environment's page.

   :::image type="content" source="media/environment-new.png" alt-text="Screenshot of the new environment created message.":::

1. Run the copied script on each target VM that you want to register with the environment.

   > [!NOTE]
   > If the VM already has another agent running on it, provide a unique name for the `agent` to register with the environment.

Once the VM is registered, it appears as a resource under the **Resources** tab of the Azure Pipelines environment.

:::image type="content" source="media/vm-resourceview.png" alt-text="Screenshot of the Resources tab.":::

## Use environment VMs in YAML pipelines

In your YAML deployment job, you can target VMs by referencing their environment. The following pipeline runs on any VM in the `VMEnv` environment.

```yaml
trigger: 
- main

pool: 
   vmImage: ubuntu-latest

jobs:
- deployment: VMDeploy
  displayName: Deploy to VM
  environment: VMenv
  strategy:
     runOnce:
        deploy:   
          steps:
            - script: echo "Hello world"
```

To target a specific VM in the environment, you can follow the environment name with the resource name. The following example deploys only to the VM resource named `RESOURCE-PC` in the `VMenv` environment.

```yaml
trigger: 
- main

pool: 
   vmImage: ubuntu-latest

jobs:
- deployment: VMDeploy
  displayName: Deploy to VM
  environment: VMenv.RESOURCE-PC  # only deploy to the VM resource named RESOURCE-PC
  strategy:
     runOnce:
        deploy:   
          steps:
            - script: echo "Hello world"
```
To configure environment properties in addition to the name, you can use the full syntax of the [jobs-deployment-environment](/azure/devops/pipelines/yaml-schema/jobs-deployment-environment) keyword. You can deploy to specific VMs in the environment by specifying them in `resourceName`.

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
    resourceName: RESOURCE-PC # only deploy to the VM resource named RESOURCE-PC
  strategy:
    runOnce:
      deploy:   
          steps:
          - script: echo "Hello world"
```

You can apply a deployment `strategy` to define how to roll out your application. VMs support both the `runOnce` and the `rolling` strategies. For more information about deployment strategies and lifecycle hooks, see [Deployment strategies](./deployment-jobs.md#deployment-strategies).

For more information about YAML pipeline deployment jobs, see the [jobs.deployment](/azure/devops/pipelines/yaml-schema/jobs-deployment) definition in the [YAML pipelines schema reference](/azure/devops/pipelines/yaml-schema).
>[!NOTE]
>- The `resourceType` values like `virtualMachine` are case sensitive. Incorrect casing results in no matching resources found.
>- If you retry a stage, the deployment reruns on all specified VMs, not just failed targets.

## Add and manage tags

Tags are a way to target a specific set of environment VMs for deployment. The pipeline deploys only to VMs that have the tags applied.

You can apply or remove tags on the VM's Azure portal page, or interactively when you register the agent script on the VM.

:::image type="content" source="media/vm-tags.png" alt-text="Screenshot that shows setting VM tags.":::

There's no limit to the number of tags that you can apply. Tag names are limited to 256 characters each.

>[!TIP]
>You can also apply tags when installing the registration script unattended by specifying `addvirtualmachineresourcetags` and listing a comma-separated list of tags in `virtualmachineresourcetags <tags>`. For more information, see [Unattended configuration](../agents/windows-agent.md#environments-only).

If you specify multiple tags, the pipeline uses only VMs that include all the tags. The following example targets only VMs that have both the `windows` and `prod` tags. The pipeline doesn't deploy to VMs that have only one or none of the tags.

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
