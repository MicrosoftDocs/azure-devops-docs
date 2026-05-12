---
title: Access Private Key Vaults from Your Pipeline
description: Learn how to access a private key vault from your pipeline.
ms.author: rabououn
author: ramiMSFT
ms.date: 05/02/2024
ms.service: azure-devops-pipelines
ms.topic: tutorial
monikerRange: "<=azure-devops"
zone_pivot_groups: key-vault-access-path
ms.custom: sfi-image-nochange
---

# Access a private key vault from your pipeline

Azure Key Vault offers a secure solution for managing credentials such as keys, secrets, and certificates with seamless security. With Azure Pipelines, you can streamline the process of accessing and using key vaults to store and retrieve credentials.

In certain scenarios, organizations prioritize security by restricting access to key vaults exclusively to designated Azure virtual networks to ensure the highest level of security for critical applications.

In this tutorial, you learn how to:

> [!div class="checklist"]
>
> - Create a service principal.
> - Create a service connection.
> - Configure your inbound access points.
> - Query a private Azure key vault from your pipeline.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.
- An Azure subscription. [Create a free Azure account](https://azure.microsoft.com/free) if you don't have one already.
- An Azure key vault. [Create a new Azure key vault](/azure/key-vault/general/quick-create-portal) if you don't have one already.

## Access a private key vault

Developers can use Azure Pipelines to link an Azure key vault to a variable group and map selective vault secrets to it. A key vault that's used as a variable group can be accessed:

- From Azure DevOps, during the variable group configuration time.
- From a self-hosted agent, during the pipeline job runtime.

:::image type="content" source="media/access-private-key-vault.png" alt-text="Diagram that shows the two different paths to access a private key vault.":::

## Create a service principal

Start by creating a new service principal so that you can access Azure resources. Next, you need to create a new Azure Resource Manager service connection in Azure DevOps. Then you set up a federated credential for your service principal in Azure before you verify and save your service connection in Azure DevOps.

1. Go to the [Azure portal](https://ms.portal.azure.com/).

1. On the service menu, open **Azure Cloud Shell**, and then select **Bash**.

1. Run the following command to create a new service principal:

    ```Azure CLI
    az ad sp create-for-rbac --name YOUR_SERVICE_PRINCIPAL_NAME
    ```

1. Make sure to copy the output because you use it to create the service connection in the next step.

::: moniker range="azure-devops"

## Create a service connection

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

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Project settings** > **Service connections** > **New service connection**.

1. Select **Azure Resource Manager** > **Next**, and then select **Service principal (manual)** > **Next**.

1. For **Environment**, select **Azure Cloud**, and for **Scope level**, select **Subscription**. Then enter your subscription ID and your subscription name.

1. Enter your service principal information, and then select **Verify**.

1. After successful verification, name your service connection, add a description, and then select the **Grant access permission to all pipelines** checkbox. Select **Verify and save**.

> [!TIP]
> If you can't verify your service principal connection, grant the service principal Reader access to your subscription.

::: moniker-end

::: zone pivot="access-from-azure-devops"

## Access a private key vault from Azure DevOps

In this section, we explore two methods for accessing a private key vault from Azure DevOps. First, we use variable groups to link and map secrets from your key vault, followed by setting up inbound access by allowing static IP ranges. We establish inbound access because Azure Pipelines uses the posted Azure DevOps public IP when querying the Azure key vault from a variable group. By adding inbound connections to the key vault firewall, you can successfully connect to your Azure key vault.

For the second approach, we demonstrate dynamically adding the Microsoft-hosted agent IP address to your key vault's firewall allow list, querying the key vault, and later removing the IP after completion. This second approach is for demonstration purposes only. We don't recommend this approach for Azure Pipelines.

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

To enable access to your key vault from Azure DevOps, you must grant access from specific static IP ranges. The geographical location of your Azure DevOps organization determines these ranges.

1. Sign in to your Azure DevOps organization.

1. Select **Organization settings**.

1. Go to **Overview** to find the geographical location.

    :::image type="content" source="media/organization-geographical-location.png" alt-text="Screenshot that shows how to find the geographical location of your Azure DevOps organization.":::

1. [Find your geography IP V4 ranges](../../organizations/security/allow-list-ip-url.md#inbound-connections).

    > [!IMPORTANT]
    > For United States inbound connections, make sure to add the IP ranges for all US regions.

1. [Configure your key vault](/azure/key-vault/general/network-security#key-vault-firewall-enabled-ipv4-addresses-and-ranges---static-ips) to allow access from static IP ranges.

## Step 3: Query a private key vault with a variable group

In this example, you use the variable group that was set up earlier and authorized with a service principal to query and copy your secret from your private Azure key vault by using the linked variable group. Azure Pipelines uses the posted public IP when it queries the Azure key vault from a variable group, so make sure that you [configured inbound access](#step-2-configure-inbound-access-from-azure-devops) for this action to work properly.

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

In this second approach, you query the IP of the Microsoft-hosted agent at the beginning of your pipeline. Then, you add it to the key vault allow list. Proceed with the remaining tasks, and then remove the IP from the key vault's firewall allow list.

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

To access a private key vault from an Azure Pipelines agent, you need to use either a self-hosted agent ([Windows](../agents/windows-agent.md), [Linux](../agents/linux-agent.md), or [Mac](../agents/osx-agent.md)) or [Virtual Machine Scale Sets agents](../agents/scale-set-agents.md). This requirement is because Microsoft hosted agents, like other generic compute services, aren't included in the key vault's list of [trusted services](/azure/key-vault/general/overview-vnet-service-endpoints#trusted-services).

To establish connectivity with your private key vault, you must configure a private endpoint for your key vault to provide [line-of-sight](../agents/agents.md#communication-to-deploy-to-target-servers) connectivity. This endpoint must be routable and have its private Domain Name System name resolvable from the self-hosted pipeline agent.

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

1. Go to the [Azure portal](https://portal.azure.com/), and then find your Azure key vault.

1. Select **Settings** > **Networking**, and make sure that you're on the **Firewalls and virtual networks** tab.

1. Select **Add a virtual network** > **Add existing virtual networks**.

1. Select your subscription from the dropdown menu, select the virtual network that you created earlier, and then select your subnets.

1. Select **Add**, and then scroll to the bottom of the page and select **Apply** to save your changes.

    :::image type="content" source="media/add-new-virtual-network-key-vault-firewall.png" alt-text="Screenshot that shows how to add an existing virtual network to the key vault firewall.":::

## Step 3: Query a private key vault from a self-hosted agent

The following example uses an agent set up on the virtual network's virtual machine to query the private key vault through the variable group:

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

If you don't want to grant Azure DevOps inbound access to your private key vault, you can use the [AzureKeyVault](/azure/devops/pipelines/tasks/reference/azure-key-vault-v2) task to query your key vault. You must ensure that you allow the virtual network that hosts your agent in your key vault firewall settings.

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
