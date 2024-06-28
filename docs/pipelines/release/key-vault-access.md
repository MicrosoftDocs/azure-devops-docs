---
title: Access private key vaults from your pipeline
description: Learn how to access a private key vault from your pipeline.
ms.author: rabououn
author: ramiMSFT
ms.date: 05/02/2024
monikerRange: '>= azure-devops-2019'
---

# Access a private key vault from your pipeline

Azure Key Vault offers a secure solution for managing credentials such as keys, secrets, and certificates with seamless security. Using Azure Pipelines, you can streamline the process of accessing and using key vaults, making it effortless to store and retrieve credentials.

In certain scenarios, organizations prioritize security by restricting access to key vaults exclusively to designated Azure virtual networks to ensure the highest level of security for critical applications.

This article will walk you through configuring your inbound access points to access and use a private key vault in your pipeline.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure subscription. [Create a free Azure account](https://azure.microsoft.com/free) if you don't have one already.

- An Azure Key Vault. [Create a new Azure Key Vault](/azure/key-vault/general/quick-create-portal) if you haven't already.

## Access a private key vault

Azure Pipelines enables developers to link an Azure Key Vault to a variable group and map selective vault secrets to it. A key vault that is used as a variable group can be accessed:

I. From Azure DevOps, during the variable group configuration time.

II. From a Self-hosted agent, during the pipeline job runtime.

:::image type="content" source="media/access-private-key-vault.png" alt-text="A diagram showing the two different paths to access a private key vault."::: 

## Create a service principal

Let's start by creating a new service principal, this will enable us to access Azure resources. Next, we will create a new ARM service connection in Azure DevOps using this service principal to enable us to query our Azure Key Vault from Azure Pipelines.

1. Navigate to [Azure portal](https://ms.portal.azure.com/).

1. Open the **Cloud Shell**, and then select **Bash**.

1. Run the following command to create a new service principal:

    ```Azure CLI
    az ad sp create-for-rbac --name YOUR_SERVICE_PRINCIPAL_NAME
    ```

1. Make sure to copy the output, as we'll use it to create the service connection in the next step.

## Create a service connection

::: moniker range=">= azure-devops-2020"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Project settings** > **Service connections** > **New service connection**.

1. Select **Azure Resource Manager**, > **Next**, and then select **Service principal (manual)** > **Next**.

1. Select **Azure Cloud** for **Environment** and **Subscription** for the **Scope Level**, then enter your **Subscription Id** and your **Subscription Name**.

1. Enter your service principal information, and then select **Verify**.

1. After successful verification, name your service connection, add a description, and then check the **Grant access permission to all pipelines** checkbox. Select **Verify and save** when you're done.

::: moniker-end

::: moniker range="azure-devops-2019"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Project settings** > **Service connections** > **New service connection**.

1. Select **Azure Resource Manager**, name your service connection, and then select **Azure Cloud** for **Environment** and **Subscription** for the **Scope Level**.

1. Enter your **Subscription Id** and your **Subscription Name**.

1. Enter your service principal information, and then select **Verify connection**.

1. Check the **Allow all pipelines to use this connection** checkbox, and then select **Ok** when you're done.

::: moniker-end

> [!TIP]
> If you're unable to verify your service principal connection, grant the service principal **Reader** access to your subscription.  

### [Access from Azure DevOps](#tab/devops/)

In this section, we'll explore two methods for accessing a private key vault from Azure DevOps. First, we'll use Variable Groups to link and map secrets from our key vault, followed by setting up inbound access by allowing static IP ranges. We establish inbound access because Azure Pipelines uses the posted Azure DevOps Public IP when querying the Azure Key Vault from a Variable Group. Therefore, by adding inbound connections to the Azure Key Vault firewall, we can successfully connect to our Azure Key Vault.

For our second approach, we'll demonstrate dynamically adding the Microsoft-hosted agent IP address to our key vault's firewall allowlist, querying the key vault, and subsequently removing the IP after completion. This second approach is for demonstration purposes and is not the recommended approach by Azure Pipelines.

## 1 - Map key vault secrets with a variable group

1. Sign in to your Azure DevOps organization, and the navigate to your project.

1. Select **Pipelines** > **Library**, and then select **+ Variable group**.

1. Name your variable group, and then select the toggle button to enable the **Link secrets from an Azure Key Vault as variable** button.

1. Select your Azure service connection you created earlier from the dropdown menu, and then select your key vault.

    :::image type="content" source="media/new-variable-group-get-list-error.png" alt-text="A screenshot showing how to link a variable group to an Azure Key Vault with an error indicating missing get and list permissions."::: 

1. If you encounter the error message: *Specified Azure service connection needs to have "Get, List" secret management permissions on the selected key vault.* as shown above. Navigate to your key vault in Azure portal, select **Access control (IAM)** > **Add role assignment** > **key vault secrets user** > **Next**, then add your service principal, then select **Review + assign** when you're done.

    :::image type="content" source="media/add-role-assignment-secret-user-service-principal.png" alt-text="A screenshot showing how to add a service principal as a secret user for an Azure Key Vault."::: 

1. Add your secrets and then select **Save** when you're done.

## 2 - Configure inbound access from Azure DevOps

To enable access to your key vault from Azure DevOps, you must grant access from specific static IP ranges. These ranges are determined by the geographical location of your Azure DevOps organization.

1. Sign in to your Azure DevOps organization.

1. Select **Organization settings**.

1. Navigate to **Overview**, where you'll find the geographical location listed towards the bottom of the page.

    :::image type="content" source="media/organization-geographical-location.png" alt-text="A screenshot showing how to find the geographical location of your Azure DevOps organization.":::   

1. [Find your geography IP V4 ranges](../../organizations/security/allow-list-ip-url.md#inbound-connections).

1. [Configure your key vault](/azure/key-vault/general/network-security#key-vault-firewall-enabled-ipv4-addresses-and-ranges---static-ips) to allow access from static IP ranges.

## 3 - Query a private key vault with a variable group

In this example, we use the variable group, set up earlier and authorized with a service principal, to query and copy our secret from our private Azure Key Vault simply by using the linked variable group. Azure Pipelines uses the posted public IP when querying the Azure Key Vault from a Variable Group, so make sure you have [configured inbound access](#2---configure-inbound-access-from-azure-devops) for this to work properly:

```yml
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

## Alternative method - Dynamically allow Microsoft-hosted agent IP

In this second approach, we'll start by querying the IP of the Microsoft-hosted agent at the beginning of our pipeline. Then, we'll add it to the key vault allowlist, proceed with the remaining tasks, and finally, remove the IP from the key vault's firewall allowlist.

> [!NOTE]
> This approach is for demonstration purposes only and is not the recommended approach by Azure Pipelines.

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
> Ensure that the service principal you're using to access your key vault from your pipeline holds the **Key vault contributor** role within your key vault's Access control (IAM).

### [Access from a self-hosted agent](#tab/selfhostedagent/)

To have the ability to access a private key vault from an Azure Pipelines agent, you'll need to use either a Self-hosted agent ([Windows](../agents/windows-agent.md), [Linux](../agents/linux-agent.md), [Mac](../agents/osx-agent.md)) or [Scale Set agents](../agents/scale-set-agents.md). This is because Microsoft Hosted agents, like other generic compute services, are not included in the key vault's list of [trusted services](/azure/key-vault/general/overview-vnet-service-endpoints#trusted-services).

To establish connectivity with your private key vault, you must provide a [line of sight](../agents/agents.md#communication-to-deploy-to-target-servers) connectivity by configuring a private endpoint for your key vault. This endpoint must be routable and have its private DNS name resolvable from the Self-hosted Pipeline agent.

## 1 - Configure inbound access from a self-hosted Agent

1. Follow the provided instruction to [Create a virtual network](/azure/virtual-network/quick-create-portal).

1. In [Azure portal](https://portal.azure.com/), use the search bar at the top of the page to find your Azure Key Vault.

1. Once you've located your key vault in the search results, select it, and then navigate to **Settings** > **Networking**.

1. Select **Private endpoint connections**, and then select **Create** to create a new private endpoint.

    :::image type="content" source="media/key-vault-private-endpoint.png" alt-text="A screenshot showing how to create a new private endpoint connection for an Azure Key Vault.":::   

1. Select the **Resource Group** that hosts the virtual network that you created earlier. Provide a **Name** and a **Network Interface Name** for your instance, and make sure that you select the same **Region** as the virtual network you created earlier. Select **Next** when you're done.

    :::image type="content" source="media/key-vault-new-private-endpoint.png" alt-text="A screenshot showing how to configure the basics tab when creating a new private endpoint instance for your Azure Key Vault.":::   

1. Select **Connect to an Azure resource in my directory** for the **Connection method**, and then choose **Microsoft.KeyVault/vaults** from the dropdown menu for the **Resource type**. Select your **Resource** from the dropdown menu. The **Target sub-resource** will be auto-populated with the value: *vault*. Select **Next** when you're done. 

    :::image type="content" source="media/key-vault-private-endpoint-resource.png" alt-text="A screenshot showing how to configure the resource tab when creating a new private endpoint instance for your Azure Key Vault.":::  

1. Under the **Virtual Network** tab, select the **Virtual network** and **Subnet** that you created earlier and leave the rest of the fields as default. Select **Next** when you're done.

1. Continue through the **DNS** and **Tags** tabs, accepting the default settings. Under the **Review + Create** tab, select **Create** when you're done.

1. Once your resource is deployed, navigate to your key vault > **Settings** > **Networking** > **Private endpoint connections**, your private endpoint should be listed with a **Connection state** *approved*. If you're linking to an Azure resource in a different directory, you'll need to wait for the resource owner to approve your connection request.

    :::image type="content" source="media/key-vault-approved-private-endpoint-connection.png" alt-text="A screenshot showing an approved private endpoint connection":::  

## 2 - Allow your virtual network

1. Navigate to [Azure portal](https://portal.azure.com/), and then find your Azure Key Vault.
 
1. Select **Settings** > **Networking**, and make sure you're under the **Firewalls and virtual networks** tab.

1. Select **Add a virtual network** > **Add existing virtual networks**.

1. Select your **Subscription** from the dropdown menu, and then select the virtual network you created earlier, and then select your **Subnets**.

1. Select **Add** when you're done, and then scroll to the bottom of the page and select **Apply** to save your changes.

    :::image type="content" source="media/add-new-virtual-network-key-vault-firewall.png" alt-text="A screenshot showing how to add an existing virtual network to Azure Key Vault firewall.":::  

## 3 - Query a private key vault from a self-hosted Agent

The following example uses an agent set up on the virtual network's VM to query the private key vault through the variable group:

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

If you prefer not to grant Azure DevOps inbound access to your private key vault, you can use the [AzureKeyVault](/azure/devops/pipelines/tasks/reference/azure-key-vault-v2) task to query your key vault. However, you must ensure that you allow the virtual network hosting your agent in your key vault firewall settings.

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

* * *

## Troubleshoot

If you're experiencing the following errors, follow the steps in this section to troubleshoot and resolve the issue:

- ```Public network access is disabled and request is not from a trusted service nor via an approved private link.```

This indicates that public access has been disabled, and neither a private endpoint connection nor firewall exceptions have been set up. Follow the steps under [#configure-inbound-access-from-a-self--hosted-agent] and [Configure inbound access from Azure DevOps](#2---configure-inbound-access-from-azure-devops) to set up access to your private key vault.

- ```Request was not allowed by NSP rules and the client address is not authorized and caller was ignored because bypass is set to None Client address: <x.x.x.x>```

This error message indicates that the key vault's public access has been disabled and the **Allow trusted Microsoft services to bypass this firewall** option is unchecked, but the client IP address hasn't been added to the key vault firewall. Navigate to your key vault in the Azure portal, then **Settings** > **Networking** and add your client IP to the firewall's allowlist.

- ```Error: Client address is not authorized and caller is not a trusted service.```

Make sure you add your geography's IPV4 ranges to your key vault allowlist. See [Configure inbound access from Azure DevOps](#2---configure-inbound-access-from-azure-devops) for details. 
Alternatively, you can jump to [Dynamically allow Microsoft-hosted agent IP](#alternative-method---dynamically-allow-microsoft-hosted-agent-ip) to learn how to add your client IP to the key vault's firewall during runtime.

## Related articles

- [Manage service connections](../library/service-endpoints.md)
- [Library & shared resources](../library/index.md)
- [Manage agents and agent pools](../agents/agents.md)

