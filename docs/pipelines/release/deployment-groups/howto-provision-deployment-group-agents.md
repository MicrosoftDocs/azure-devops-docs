---
title: Provision Agents for Deployment Groups
ms.custom: devx-track-arm-template
description: Learn how to install and provision deployment agents on machines in an Azure Pipelines deployment group.
ms.assetid: DF79C2A3-DE70-4184-B7A3-F01A8E86C87C
ms.topic: how-to
ms.author: ronai
author: RoopeshNair
ms.date: 08/18/2024
monikerRange: '<= azure-devops'
---

# Provision agents for deployment groups

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

A [deployment group](index.md) is a logical group of deployment target machines for classic release pipelines in Azure Pipelines. Every target server in a deployment group requires the installation of a deployment agent. This article explains how to install and provision the deployment agent on each physical machine or virtual machine (VM) in a deployment group.

You can install the agent on a target machine in any one of the following ways:

- Run the script that's generated when you create the deployment group.
- Install the Azure Pipelines Agent extension on the VM.
- Use the Azure Resource Group Deployment task in your release pipeline to create a deployment group and provision agents dynamically.

The following sections provide steps to implement each method.

## Prerequisites

- An Azure DevOps organization and project. To create one, see [Create a new organization](../../../organizations/accounts/create-organization.md) or [Create a project in Azure DevOps](../../../organizations/projects/create-project.md).
- Access to at least one Windows or Linux deployment target machine with the [appropriate permissions](../../agents/windows-agent.md#permissions).
- For the Azure Pipelines Agent installation method, an Azure account and subscription with permissions to create and manage Azure VMs. If you don't have an Azure account, [sign up for a free account](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn).

## Run the installation script on the target servers

When you create a deployment group, a script is generated. You can run the script on each target machine to register the server and install the agent.

To install the agent by using the generated registration script:

1. From your Azure DevOps project, select **Pipelines** > **Deployment groups**.

1. On the **Deployment groups** pane, select **New**, or select **Add a deployment group** if this deployment group is the first one in the project.

1. For **Deployment group name**, enter a name. For **Description**, enter an optional description. Then select **Create**.

1. On the pane that appears, select **Windows** or **Linux** for **Type of target to register**. This action generates a registration script.

1. Select **Use a personal access token in the script for authentication**. For more information, see [Use personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

1. Select **Copy script to the clipboard**.

1. On each target machine, sign in by using an account that has administrative permissions.

1. Run the copied script to register the machine and install the agent. For Windows machines, use an elevated PowerShell command prompt.

1. As the script runs:

   - To assign tags that let you limit deployments to certain servers in a [deployment group job](../../process/deployment-group-phases.md), enter **Y** when you're prompted to enter tags. Then enter a tag or tags for this VM.

     Tags are limited to 256 characters each and are case insensitive. There's no limit to the number of tags that you can use.

   - When you're prompted for a user account, accept the defaults.

   > [!NOTE]
   > When you're running the script, if you get an error that says a secure channel couldn't be created, run the following command at the elevated PowerShell prompt:
   >
   > `[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12`

After you set up each target server, the script should return the message `Service vstsagent.{organization-name}.{computer-name} started successfully`.

On the **Targets** tab of the Azure Pipelines **Deployment groups** pane, you can verify that the agent is running. Refresh the page if necessary.

## Install the Azure Pipelines Agent extension

If you use Azure VMs as your deployment machines, you can install the Azure Pipelines Agent extension on each VM. The extension automatically registers the agent with the specified deployment group in your Azure DevOps project.

To install the agent by using the extension, first create the deployment group:

1. From your Azure DevOps project, select **Pipelines** > **Deployment groups**.

1. On the **Deployment groups** pane, select **New**, or select **Add a deployment group** if this deployment group is the first one in the project.

1. For **Deployment group name**, enter a name. For **Description**, enter an optional description. Then select **Create**.

In the [Azure portal](https://portal.azure.com), install the Azure Pipelines Agent extension on each target VM:

1. On the VM page, select **Settings** > **Extensions + Applications**.

1. On the **Extension** tab, select **Add**.

1. On the **Install an Extension** pane, search for and select **Azure Pipelines Agent**. Then select **Next**.

   :::image type="content" source="media/howto-provision-azure-vm-agents/azure-vm-create.png" alt-text="Screenshot that shows selecting the Azure Pipelines Agent extension.":::

1. On the **Configure Azure Pipelines Agent Extension** pane, specify the following information:

   - **Azure DevOps Organization Url**: Enter the URL of your Azure DevOps organization, such as `https://dev.azure.com/contoso`.
   - **Team Project**: Enter your project name, such as **myProject**.
   - **Deployment Group**: Enter the name of the deployment group that you created.
   - **Agent Name**: Optionally, enter a name for the agent. If you don't enter anything, the name of the agent is the VM name appended with `-DG`.
   - **Personal Access Token**: Enter the [personal access token (PAT)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) to use for authenticating to Azure Pipelines.
   - **Tags**: Optionally, specify a comma-separated list of tags to configure on the agent. Tags are limited to 256 characters each and are case insensitive. There's no limit to the number of tags that you can use.

1. Select **Review + create**. When validation passes, select **Create**.

## Use the Azure Resource Group Deployment task

You can use the [Azure Resource Group Deployment task](https://aka.ms/argtaskreadme) to deploy an Azure Resource Manager template (ARM template). The template can install the Azure Pipelines Agent extension while creating an Azure VM, or it can update the resource group to apply the extension after a VM is created.

Alternatively, you can use the advanced deployment options of the Azure Resource Group Deployment task to deploy the agent.

### Create a deployment group

First, create the deployment group:

1. From your Azure DevOps project, select **Pipelines** > **Deployment groups**.

1. On the **Deployment groups** screen, select **New**, or select **Add a deployment group** if this deployment group is the first one in the project.

1. For **Deployment group name**, enter a name. For **Description**, enter an optional description. Then select **Create**.

### Use an ARM template to install the agent

An ARM template is a JSON file that declaratively defines a set of Azure resources. Azure automatically reads the template and provisions the resources. You can deploy multiple services and their dependencies in a single template.

To register and install the deployment agent by using an ARM template, add a `resources` element under the `Microsoft.Compute/virtualMachine` resource, as shown in the following code.

:::moniker range=">= azure-devops-2022"

```json
"resources": [
  {
    "name": "[concat(parameters('vmNamePrefix'),copyIndex(),'/TeamServicesAgent')]",
    "type": "Microsoft.Compute/virtualMachines/extensions",
    "location": "[parameters('location')]",
    "apiVersion": "2015-06-15",
    "dependsOn": [
        "[resourceId('Microsoft.Compute/virtualMachines/',
                      concat(parameters('vmNamePrefix'),copyindex()))]"
    ],
    "properties": {
      "publisher": "Microsoft.VisualStudio.Services",
      "type": "TeamServicesAgent",
      "typeHandlerVersion": "1.0",
      "autoUpgradeMinorVersion": true,
      "settings": {
        "VSTSAccountName": "[parameters('VSTSAccountName')]",
        "TeamProject": "[parameters('TeamProject')]",
        "DeploymentGroup": "[parameters('DeploymentGroup')]",
        "AgentName": "[parameters('AgentName')]",
        "AgentMajorVersion": "auto|2|3",
        "Tags": "[parameters('Tags')]"
      },
      "protectedSettings": {
      "PATToken": "[parameters('PATToken')]"
     }
   }
  }
]
```

> [!NOTE]
> For a Linux VM, the `type` parameter under `properties` in the code should be `TeamServicesAgentLinux`.

:::moniker-end

:::moniker range="= azure-devops-2022"

> [!NOTE]
> In Azure DevOps Server 2022.1 and later, the allowable values for `AgentMajorVersion` are `auto`, `2`, and `3`. In Azure DevOps Server 2022.0 and earlier, the allowable values for `AgentMajorVersion` are `auto` and `N`.

:::moniker-end

In the preceding code:

- `VSTSAccountName` is the required Azure Pipelines organization to use. For example, if your Azure DevOps URL is `https://dev.azure.com/contoso`, just specify `contoso`.
- `TeamProject` is the required project that has the deployment group defined in it.
- `DeploymentGroup` is the required deployment group to register the agent to.
- `AgentName` is an optional agent name. If it's not specified, the agent name is the VM name with `-DG` appended.
- `Tags` is an optional, comma-separated list of tags to be set on the agent. Tags are limited to 256 characters each and are case insensitive. There's no limit to the number of tags that you can use.
- `PATToken` is the required PAT to authenticate to Azure Pipelines for downloading and configuring the agent.

For more information about ARM templates, see [Define resources in Azure Resource Manager templates](/azure/templates/).

### Use the template in a release pipeline

Create a release pipeline:

1. Select **Pipelines** > **Releases**, and then select **New** > **New release pipeline**.

1. On the **Releases** tab, create a release pipeline with a stage that contains the **ARM template deployment** task.

1. This template uses version 2 of the task, so on the **Azure resource group deployment** settings pane, change **Task version** from **3.\*** to **2.\***.

1. Provide the parameters required for the task. For example, provide the Azure subscription, resource group name, location, template information, and action to take.

1. Save the release pipeline, and create a release from the pipeline to install the agents.

### Install agents by using the advanced deployment options

Alternatively, you can install the agent by using advanced deployment options:

1. Follow the preceding steps, but on the **Azure resource group deployment** settings pane, expand the **Advanced deployment options for virtual machines** section.

1. Under **Enable prerequisites**, select **Configure with Deployment Group agent**.

1. Provide the following required parameters and settings:

   - **Azure Pipelines service connection**: Select an existing service connection that points to your target.

     If you don't have an existing service connection, select **New** and create one. For more information, see [Create a service connection](../../library/service-endpoints.md#create-a-service-connection). Configure the service connection to use a [PAT](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with the scope restricted to **Deployment Group**.

   - **Team project**: Select the project that contains the deployment group.

   - **Deployment Group**: Select the deployment group to register the agents to.

   - **Copy Azure VM tags to agents**: Select this option to copy any tags already configured on the Azure VM to the corresponding deployment group agent.

     By default, all [Azure tags](/azure/azure-resource-manager/resource-group-using-tags) are copied by using the `Key: Value` format. An example is `Role: Web`.

1. Save the pipeline, and create a release to install the agents.

## Troubleshoot the extension

There are some known issues with the Azure Pipelines Agent extension.

### Status file is too large

On Windows VMs, the status file contains a JSON object that describes the current status of the extension. The object is a placeholder to list the operations performed so far.

Azure reads this status file and passes the status object as a response to API requests. The file has a maximum allowed size. If the size exceeds the maximum, Azure can't read it completely and gives an error for the status.

Even though the extension might be installed initially, every time the machine restarts, the extension performs some operations that append to the status file. If the machine restarts many times, the size of the status file can exceed the threshold. This situation causes the error `Handler Microsoft.VisualStudio.Services.TeamServicesAgent:1.27.0.2 status file 0.status size xxxxxx bytes is too big. Max Limit allowed: 131072 bytes`. Although extension installation might succeed, this error hides the actual state of the extension.

This machine restart issue is fixed starting with version `1.27.0.2` for the Windows extension and `1.21.0.1` for the Linux extension. A restart now adds nothing to the status file. However, if you had this issue with an earlier version of the extension and your extension was automatically updated to the fixed version, the issue can persist. Newer versions of the extension can still work with an earlier status file.

You could face this issue if one of these conditions exists:

- You're using an earlier version of the extension with the flag to turn off automatic updates for minor versions.
- A large status file moved from an earlier version to a fixed version.

If so, you can solve the issue by uninstalling and reinstalling the extension. Uninstalling the extension cleans up the entire extension directory and creates a new status file for a fresh installation of the latest version.

### Custom data causes problems when you switch OS versions

Python 2 is deprecated, and the Azure Pipelines Agent extension works with Python 3. If you still use OS versions that don't have Python 3 installed by default, you should take one of the following actions before you run the extension:

- Install Python 3 on the VM.
- Switch to an OS version that has Python 3 installed by default.

Otherwise, the [custom data](/azure/virtual-machines/custom-data#linux) location on the VM might cause confusion when you switch OS versions.

On Linux VMs, custom data copies to `/var/lib/waagent/ovf-env.xml` for earlier agent versions, and to `/var/lib/waagent/CustomData` for newer versions. If you hard-code only one of these two paths, switching OS versions might cause problems because one of the paths doesn't exist on the new OS version, although the other path is present. To avoid breaking the VM provisioning, consider using both paths in the template so that if one fails, the other should succeed.

[!INCLUDE [rm-help-support-shared](../../includes/rm-help-support-shared.md)]

## Related content

- [Deployment group jobs](../../process/deployment-group-phases.md)
- [Self-hosted Windows agents](../../agents/windows-agent.md)
- [Self-hosted macOS agents](../../agents/osx-agent.md)
- [Self-hosted Linux agents](../../agents/linux-agent.md)
- [Configure and pay for parallel jobs](../../licensing/concurrent-jobs.md)
- [Pricing for Azure DevOps](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
