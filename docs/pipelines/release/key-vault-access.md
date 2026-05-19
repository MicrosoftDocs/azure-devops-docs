---
title:  Access a private key vault from your pipeline
description: Learn how to access a private key vault from your pipeline.
ms.author: rabououn
author: ramiMSFT
ms.date: 05/17/2026
ms.service: azure-devops-pipelines
ms.topic: tutorial
monikerRange: "<=azure-devops"
zone_pivot_groups: key-vault-access-path
ms.custom: sfi-image-nochange
---

# Access a private key vault from your pipeline

Azure Key Vault provides a secure way to manage credentials, including keys, secrets, and certificates. With Azure Pipelines, you can streamline the process of accessing and using key vaults to store and retrieve credentials.

In certain scenarios, organizations prioritize security by restricting access to key vaults exclusively to designated Azure virtual networks to ensure the highest level of security for critical applications. In this tutorial, you learn how to set up authentication and configure inbound access so your pipeline can query and retrieve data from a private Azure Key Vault.

## Prerequisites

| Product | Requirements   |
|-------------|--------------------|
| Azure DevOps | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br>   - Permissions:<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To grant access to all pipelines in the project: You must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md).<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections: You must have the Administrator or Creator role for [service connections](../library/add-resource-protection.md). |
| Azure | - An [Azure subscription](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn).<br>- An [Azure key vault](/azure/key-vault/general/quick-create-portal). |

## Access a private key vault

Developers can use Azure Pipelines to link an Azure key vault to a variable group and map selective vault secrets to it. A key vault that's used as a variable group can be accessed:

- From Azure DevOps during variable group configuration.
- From a self-hosted agent during pipeline job runtime.

:::image type="content" source="media/access-private-key-vault.png" alt-text="Diagram that shows the two different paths to access a private key vault.":::


To set up access to your private key vault, complete the following steps in order:

1. Create a service principal to authenticate with Azure resources.
1. Create an Azure Resource Manager service connection in Azure DevOps using the service principal.
1. Create a federated credential for your service principal in Azure.

## Create a service principal

Create a service principal to authenticate with Azure resources:

1. Go to the [Azure portal](https://ms.portal.azure.com/).

1. On the top menu, open **Azure Cloud Shell**, and then select **Bash**.

1. Run the following command to create a new service principal:

    ```Azure CLI
    az ad sp create-for-rbac --name YOUR_SERVICE_PRINCIPAL_NAME
    ```

1. Copy the command output. You need these values in the next step when you create the service connection.

::: moniker range="azure-devops"

## Create a service connection

With your service principal created, use its output values to create an Azure Resource Manager service connection in Azure DevOps.

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Project settings** > **Service connections** > **New service connection**.

1. Select **Azure Resource Manager**, and then select **Next**.

1. For **Identity type**, select **App registration (automatic)** from the dropdown menu.

1. For **Credential**, leave the default recommended value as **Workload identity federation**.

1. For **Scope level**, select **Subscription**, and then select your subscription from the dropdown menu.

1. Select a resource group if you want to limit access to the specified resource group only.

1. Enter a name for your service connection, and then select the **Grant access permission to all pipelines** checkbox to allow all pipelines to use this service connection.

1. Select **Save**.

    :::image type="content" source="media/automatic-service-connection-service-principal.png" alt-text="Screenshot that shows how to configure an Azure Resource Manager service connection for a service principal.":::

## Create a federated credential

Now that your service connection is saved, configure a federated credential in Azure to establish trust between your service principal and Azure DevOps.

1. Go to the [Azure portal](https://portal.azure.com/), enter your service principal's client ID in the search bar, and then select your application.

1. Under **Manage**, select **Certificates & secrets** > **Federated credentials**.

1. Select **Add credential**, and then for **Federated credential scenario**, select **Other issuer**.

1. For **Issuer**, paste the following URL to replace the placeholder with your organization GUID. You can find your organization ID by going to **Organization settings** > **Microsoft Entra**. Download the list of Azure DevOps organizations that are connected to your directory.

    ```
    https://login.microsoftonline.com/<TENANT_ID>/v2.0
    ```

1. For **Subject identifier**, paste the following URL. Replace the placeholders with your organization name, project name, and service connection name.

    ```
    ENTRA_PREFIX/sc/ORGANIZATION_NAME/PROJECT_NAME/SERVICE_CONNECTION_NAME
    ```

1. Enter a name for your federated credential, and then select **Add**.

::: moniker-end

::: moniker range="=azure-devops-2022"

## Create a service connection

With your service principal created, use its output values to create an Azure Resource Manager service connection in Azure DevOps.

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Project settings** > **Service connections** > **New service connection**.

1. Select **Azure Resource Manager** > **Next**, and then select **Service principal (manual)** > **Next**.

1. For **Environment**, select **Azure Cloud**, and for **Scope level**, select **Subscription**. Then enter your subscription ID and your subscription name.

1. Enter your service principal information, and then select **Verify**.

1. After successful verification, name your service connection, add a description, and then select the **Grant access permission to all pipelines** checkbox. Select **Verify and save**.

> [!TIP]
> If you can't verify your service principal connection, grant the service principal **Reader** access to your subscription.

::: moniker-end

::: zone pivot="access-from-azure-devops"

## Access a private key vault from Azure DevOps

This section covers two methods for accessing a private key vault from Azure DevOps.

The first method uses variable groups to link and map secrets from your key vault, followed by setting up inbound access by allowing static IP ranges. Azure Pipelines uses the Azure DevOps public IP when querying a key vault from a variable group, so you need to allow those IP ranges in the key vault firewall.

The second method dynamically adds the Microsoft-hosted agent IP address to the key vault firewall allow list at the start of the pipeline, queries the key vault, and then finally removes the IP. This method is for demonstration purposes only and is not recommended for production use.

## Step 1: Map key vault secrets with a variable group

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Pipelines** > **Library**, and then select **+ Variable group**.

1. Name your variable group, and then turn on **Link secrets from an Azure Key Vault as variable**.

1. Select the service connection that you created earlier, select your key vault, and then select **Authorize**.

1. Under **Variables**, select **Add** to add your secret, and then select **Save**.

> [!NOTE]
> Make sure that your service connection has the **Get** and **List** permissions, and that your service principal is assigned the Key Vault Secrets User role in your private key vault.

#### Step 1.1: Set up the service connection permissions

1. Go to your Azure key vault, and then select **Access policies**.

1. Select **Create**, and under **Secret permissions**, add the **Get** and **List** permissions, and then select **Next**.

1. Add your service connection in the search bar, select it, and then select **Next**.

1. Select **Next** once more, review your settings, and then select **Review + create**.

#### Step 1.2: Set up the service principal permissions

1. Go to your Azure key vault, and then select **Access control (IAM)**.

1. Select **Add** > **Add role assignment**, and then select the **Role** tab.

1. Select the **Key Vault Secrets User** role, and then select **Next**.

1. Choose **Select members**, add your service principal, and choose **Select**.

1. Select **Review + assign**.

::: moniker-end

::: moniker range="< azure-devops"

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Pipelines** > **Library**, and then select **+ Variable group**.

1. Name your variable group, and then turn on **Link secrets from an Azure Key Vault as variable**.

1. Select the Azure service connection that you created earlier from the dropdown menu, and then select your key vault.

    :::image type="content" source="media/new-variable-group-get-list-error.png" alt-text="Screenshot that shows how to link a variable group to an Azure key vault with an error that indicates missing Get and List permissions."::: 

1. You might encounter the error message "Specified Azure service connection needs to have "Get, List" secret management permissions on the selected key vault." Go to your key vault in the Azure portal and select **Access control (IAM)** > **Add role assignment** > **key vault secrets user** > **Next**. Add your service principal, and then select **Review + assign**.

    :::image type="content" source="media/add-role-assignment-secret-user-service-principal.png" alt-text="Screenshot that shows how to add a service principal as a secret user for an Azure key vault.":::

1. Add your secrets, and then select **Save**.

::: moniker-end

## Step 2: Configure inbound access from Azure DevOps

With your variable group configured, allow inbound access from Azure DevOps to your key vault by adding the static IP ranges for your organization's geographical region.

1. Sign in to your Azure DevOps organization.

1. Select **Organization settings**.

1. Go to **Overview** to find the geographical location.

    :::image type="content" source="media/organization-geographical-location.png" alt-text="Screenshot that shows how to find the geographical location of your Azure DevOps organization.":::

1. [Find your geography IP V4 ranges](../../organizations/security/allow-list-ip-url.md#inbound-connections).

    > [!IMPORTANT]
    > For United States inbound connections, make sure to add the IP ranges for all US regions.

1. [Configure your key vault](/azure/key-vault/general/network-security#key-vault-firewall-enabled-ipv4-addresses-and-ranges---static-ips) to allow access from static IP ranges.

## Step 3: Query a private key vault with a variable group

With your variable group linked and inbound access configured, use the following pipeline to query your private key vault and copy the retrieved secret. Azure Pipelines uses its public IP to query the key vault from a variable group, so make sure you [configured inbound access](#step-2-configure-inbound-access-from-azure-devops) before running the pipeline.

```yml
variables:
-  group: mySecret-VG

steps:
- task: CmdLine@2
  inputs:
    script: 'echo $(mySecret) > secret.txt'
    
- task: CopyFiles@2
  inputs:
    Contents: secret.txt
    targetFolder: '$(Build.ArtifactStagingDirectory)'

- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'drop'
    publishLocation: 'Container'
```

## Alternative method: Dynamically allow Microsoft-hosted agent IP

In this approach, the pipeline queries the Microsoft-hosted agent IP at startup, adds it to the key vault firewall allow list, runs the key vault tasks, and then removes the IP before the pipeline finishes.

> [!NOTE]
> This approach is for demonstration purposes only. We don't recommend this approach for Azure Pipelines.

```yml
- task: AzurePowerShell@5
  displayName: 'Allow agent IP'
  inputs:
    azureSubscription: 'YOUR_SERVICE_CONNECTION_NAME'
    azurePowerShellVersion: LatestVersion
    ScriptType: InlineScript
    Inline: |
     $ip = (Invoke-WebRequest -uri "http://ifconfig.me/ip").Content
     Add-AzKeyVaultNetworkRule -VaultName "YOUR_KEY_VAULT_NAME" -ResourceGroupName "YOUR_RESOURCE_GROUP_NAME" -IpAddressRange $ip
     echo "##vso[task.setvariable variable=agentIP]ip"
    
- task: AzureKeyVault@2
  inputs:
    azureSubscription: 'YOUR_SERVICE_CONNECTION_NAME'
    KeyVaultName: 'YOUR_KEY_VAULT_NAME'
    SecretsFilter: '*'
    RunAsPreJob: false

- task: AzurePowerShell@5
  displayName: 'Remove agent IP'
  inputs:
    azureSubscription: 'YOUR_SERVICE_CONNECTION_NAME'
    azurePowerShellVersion: LatestVersion
    ScriptType: InlineScript
    Inline: |
     $ipRange = $env:agentIP + "/32"
     Remove-AzKeyVaultNetworkRule -VaultName "YOUR_KEY_VAULT_NAME" -IpAddressRange $ipRange
  condition: succeededOrFailed()
```

> [!IMPORTANT]
> Ensure that the service principal that you use to access your key vault from your pipeline holds the Key Vault Contributor role within your key vault's access control (IAM).

::: zone-end

::: zone pivot="access-from-self-hosted-agent"

## Access a private key vault from a self-hosted agent

To access a private key vault from an Azure Pipelines agent, use either a self-hosted agent ([Windows](../agents/windows-agent.md), [Linux](../agents/linux-agent.md), or [Mac](../agents/osx-agent.md)) or [Virtual Machine Scale Sets agents](../agents/scale-set-agents.md). Microsoft-hosted agents, like other generic compute services, aren't included in the key vault list of [trusted services](/azure/key-vault/general/overview-vnet-service-endpoints#trusted-services).

To establish connectivity to your private key vault, configure a private endpoint for [line-of-sight](../agents/agents.md#communication-to-deploy-to-target-servers) access. This endpoint must be routable, and its private DNS name must be resolvable from the self-hosted pipeline agent.

## Step 1: Configure inbound access from a self-hosted agent

1. Follow the instructions to [create a virtual network](/azure/virtual-network/quick-create-portal).

1. In the [Azure portal](https://portal.azure.com/), use the search bar at the top of the page to find your Azure key vault.

1. Select your key vault, and then go to **Settings** > **Networking**.

1. Select **Private endpoint connections**, and then select **Create** to create a new private endpoint.

    :::image type="content" source="media/key-vault-private-endpoint.png" alt-text="Screenshot that shows how to create a new private endpoint connection for an Azure key vault.":::

1. Select the resource group that hosts the virtual network that you created earlier. Enter a name and a network interface name for your instance, and make sure that you select the same region as the virtual network that you created earlier. Select **Next**.

    :::image type="content" source="media/key-vault-new-private-endpoint.png" alt-text="Screenshot that shows how to configure the Basics tab when you create a new private endpoint instance for your Azure key vault.":::

1. For **Connection method**, select **Connect to an Azure resource in my directory**. For **Resource type**, choose **Microsoft.KeyVault/vaults** from the dropdown menu. Select your resource from the dropdown menu. **Target sub-resource** is autopopulated with the value **vault**. Select **Next**.

    :::image type="content" source="media/key-vault-private-endpoint-resource.png" alt-text="Screenshot that shows how to configure the Resource tab when you create a new private endpoint instance for your Azure key vault.":::

1. On the **Virtual Network** tab, select the virtual network and subnet that you created earlier, and leave the rest of the fields as default. Select **Next**.

1. Accept the default settings on the **DNS** and **Tags** tabs. On the **Review + Create** tab, select **Create**.

1. After your resource is deployed, go to your key vault and select **Settings** > **Networking** > **Private endpoint connections**. Your private endpoint should be listed with **Connection state** as **Approved**. If you link to an Azure resource in a different directory, you need to wait for the resource owner to approve your connection request.

    :::image type="content" source="media/key-vault-approved-private-endpoint-connection.png" alt-text="Screenshot that shows an approved private endpoint connection":::  

## Step 2: Allow your virtual network

With the private endpoint configured, allow the virtual network that hosts your self-hosted agent in the key vault firewall settings.

1. Go to the [Azure portal](https://portal.azure.com/), and then find your Azure key vault.

1. Select **Settings** > **Networking**, and make sure that you're on the **Firewalls and virtual networks** tab.

1. Select **Add a virtual network** > **Add existing virtual networks**.

1. Select your subscription from the dropdown menu, select the virtual network that you created earlier, and then select your subnets.

1. Select **Add**, and then scroll to the bottom of the page and select **Apply** to save your changes.

    :::image type="content" source="media/add-new-virtual-network-key-vault-firewall.png" alt-text="Screenshot that shows how to add an existing virtual network to the key vault firewall.":::

## Step 3: Query a private key vault from a self-hosted agent

With the virtual network allowed, use the following pipeline to query the private key vault through the linked variable group from a self-hosted agent:

```yml
pool: Self-hosted-pool

variables:
  group: mySecret-VG

steps:
- task: CmdLine@2
  inputs:
    script: 'echo $(mySecret) > secret.txt'
    
- task: CopyFiles@2
  inputs:
    Contents: secret.txt
    targetFolder: '$(Build.ArtifactStagingDirectory)'

- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'drop'
    publishLocation: 'Container'
```

If you don't want to grant Azure DevOps inbound access to your private key vault, use the [AzureKeyVault](/azure/devops/pipelines/tasks/reference/azure-key-vault-v2) task to query the key vault directly. In this case, make sure the virtual network that hosts your self-hosted agent is allowed in the key vault firewall settings.

```yml
pool: Self-hosted-pool

steps:
- task: AzureKeyVault@2
  inputs:
    azureSubscription: '$(SERVICE_CONNECTION_NAME)'
    keyVaultName: $(KEY_VAULT_NAME)
    SecretsFilter: '*'

- task: CmdLine@2
  inputs:
    script: 'echo $(mySecret) > secret.txt'
    
- task: CopyFiles@2
  inputs:
    Contents: secret.txt
    targetFolder: '$(Build.ArtifactStagingDirectory)'

- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'drop'
    publishLocation: 'Container'
```

::: zone-end

## Troubleshoot

If you experience the following errors, follow the steps in this section to troubleshoot and resolve the issue:

- ```Public network access is disabled and request is not from a trusted service nor via an approved private link.```

  This error indicates that public access was disabled, and a private endpoint connection and firewall exceptions weren't set up. Follow the steps under [Configure inbound access from a self-hosted agent](#step-1-configure-inbound-access-from-a-self-hosted-agent) and [Configure inbound access from Azure DevOps](#step-2-configure-inbound-access-from-azure-devops) to set up access to your private key vault.

- ```Request was not allowed by NSP rules and the client address is not authorized and caller was ignored because bypass is set to None Client address: <x.x.x.x>```

  This error message indicates that the key vault's public access was disabled and the **Allow trusted Microsoft services to bypass this firewall** option is left blank, but the client IP address wasn't added to the key vault firewall. Go to your key vault in the Azure portal, select **Settings** > **Networking**, and then add your client IP to the firewall's allow list.

- ```Error: Client address is not authorized and caller is not a trusted service.```

  Make sure that you add your geography's IPV4 ranges to your key vault allow list. For more information, see [Configure inbound access from Azure DevOps](#step-2-configure-inbound-access-from-azure-devops).

  Alternatively, you can jump to [Dynamically allow Microsoft-hosted agent IP](#alternative-method-dynamically-allow-microsoft-hosted-agent-ip) to learn how to add your client IP to the key vault's firewall during runtime.

## Related content

- [Manage service connections](../library/service-endpoints.md)
- [Asset library and shared resources](../library/index.md)
- [Manage agents and agent pools](../agents/agents.md)
