---
title: Access private key vaults from your pipeline
description: How to access a key vault with disabled public access from your pipeline.
ms.author: rabououn
author: ramiMSFT
ms.date: 05/02/2024
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Access private key vaults from your pipeline

Azure Key Vaults offer a robust solution for managing credentials such as keys, secrets, and certificates with seamless security. Using Azure pipelines, you can streamline the process of accessing and using key vaults, making it effortless to store and retrieve credentials.

In certain scenarios, organizations prioritize security by restricting access to key vaults exclusively to designated Azure virtual networks to ensure the highest level of security for critical applications.

This article will walk you through configuring your inbound access points to access and use a private key vault in your pipeline.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure subscription. [Create a free Azure account](https://azure.microsoft.com/free) if you don't have one already.

- An Azure key vault. [Create a new Azure key vault](azure/key-vault/general/quick-create-portal).

## Create a service principal

Let's start by creating a new service principal, this will enable us to access Azure resources. Next, we will create a new ARM service connection in Azure DevOps using this service principal to enable us to query our Azure Key Vault from Azure Pipelines.

1. Navigate to [Azure portal](https://ms.portal.azure/).

1. Open the **Cloud Shell**, and then select **Bash**.

1. Run the following command to create a new service principal:

    ```Azure CLI
    az ad sp create-for-rbac --name YOUR_SERVICE_PRINCIPAL_NAME
    ```

1. Make sure to copy the output, as we will use it to create the service connection in the next step.

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

> [!IMPORTANT]
> If you're enable to verify your service principal connection, grant the service principal **Reader** access to your subscription.

## Link key vault to a variable group

Azure Pipelines enables developers to link an Azure key vault to a variable group and map selective vault secrets to it. A key vault that is used as a variable group can be accessed:

1. From Azure DevOps, during the variable group configuration time. (This approach is only supported in Azure DevOps Services).
1. From a Self-hosted agent, during the pipeline job runtime.

Follow the steps outlined in [Add & use variable groups](../library/variable-groups.md#link-secrets-from-an-azure-key-vault) to link your secrets to a variable group. See also [Manage key vault secrets](../library/variable-groups.md#link-secrets-from-an-azure-key-vault) for additional guidance on effectively managing your secrets.

:::image type="content" source="media/access-private-key-vault.png" alt-text="A diagram showing the two different paths to access a private key vault.":::   

::: moniker range="azure-devops"

## 1. Configure inbound access from Azure DevOps

To enable access to your key vault from Azure DevOps, you must grant access from specific static IP ranges. These ranges are determined by the geographical location of your Azure DevOps organization.

1. Sign in to your Azure DevOps organization.

1. Select **Organization settings**.

1. Navigate to **Overview**, where you'll find the geographical location listed towards the bottom of the page.

    :::image type="content" source="media/organization-geographical-location.png" alt-text="A screenshot showing how to find the geographical location of your Azure DevOps organization.":::   

1. [Find your geography IP V4 ranges](../../organizations/security/allow-list-ip-url.md#inbound-connections).

1. [Configure your key vault](/azure/key-vault/general/network-security#key-vault-firewall-enabled-ipv4-addresses-and-ranges---static-ips) to allow access from static IP ranges.

::: moniker-end

## 2. Configure inbound access from Self-hosted Agents

To have the ability to access a private key vault from an Azure Pipelines agent, you'll need to use either a Self-hosted agent ([Windows](../agents/windows-agent.md), [Linux](../agents/linux-agent.md), [Mac](../agents/osx-agent.md)) or [Scale Set agents](../agents/scale-set-agents.md). This is because Microsoft Hosted agents, like other generic compute services, are not included in the key vault's list of [trusted services](/azure/key-vault/general/overview-vnet-service-endpoints#trusted-services).

To establish connectivity with your private key vault, you must provide a [line of sight](../agents/agents.md#communication-to-deploy-to-target-servers) connectivity by configuring a private endpoint for your key vault. This endpoint must be routable and have its private DNS name resolvable from the Self-hosted Pipeline agent.

1. Follow the provided instruction to [Create a virtual network](azure/virtual-network/quick-create-portal).

1. In [Azure portal](https://portal.azure.com/), use the search bar at the top of the page to find your Azure key vault.

1. Once you've located your key vault in the search results, select it, and then navigate to **Settings** > **Networking**.

1. Select **Private endpoint connections**, and then select **Create** to create a new private endpoint.

    :::image type="content" source="media/key-vault-private-endpoint.png" alt-text="A screenshot showing how to create a new private endpoint connection for an Azure key vault.":::   

1. Select the **Resource Group** that hosts the virtual network that you created earlier. Provide a **Name** and a **Network Interface Name** for your instance, and make sure that you select the same **Region** as the virtual network you created earlier. Select **Next** when you're done.

    :::image type="content" source="media/key-vault-new-private-endpoint.png" alt-text="A screenshot showing how to configure the basics tab when creating a new private endpoint instance for your Azure key vault.":::   

1. Select **Connect to an Azure resource in my directory** for the **Connection method**, and then choose **Microsoft.KeyVault/vaults** from the dropdown menu for the **Resource type**. Select your **Resource** from the dropdown menu. The **Target sub-resource** will be auto-populated with the value: *vault*. Select **Next** when you're done. 

    :::image type="content" source="media/key-vault-private-endpoint-resource.png" alt-text="A screenshot showing how to configure the resource tab when creating a new private endpoint instance for your Azure key vault.":::  

1. Under the **Virtual Network** tab, select the **Virtual network** and **Subnet** that you created earlier and leave the rest of the fields as default. Select **Next** when you're done.

1. Continue through the **DNS** and **Tags** tabs, accepting the default settings. Under the On the **Review + Create** tab, select **Create** when you're done.

1. Once your resource is deployed, navigate to your key vault > **Settings** > **Networking** > **Private endpoint connections**, you private endpoint should be listed with a **Connection state** *approved*. If you're linking to an Azure resource in a different directory, you'll need to wait for the resource owner to approve your connection request.

    :::image type="content" source="media/key-vault-approved-private-endpoint-connection.png" alt-text="A screenshot showing an approved private endpoint connection":::  

## Access key vault from pipeline

If you want to access your key vault from your pipeline, set the **runAsPreJob** argument to true. This ensures that the [AzureKeyVault](/azure/devops/pipelines/tasks/reference/azure-key-vault-v2) task is executed before other tasks in your pipeline. 
This approach serves as a workaround if you prefer not to grant Azure DevOps inbound access to your private key vault, as omitting this access would disrupt Variable Group integration. However, by enabling the *runAsPreJob* argument, Azure Pipelines injects the KeyVault task before your tasks run, mirroring the same workflow when Variable Group integration is used.

```yml
  - task: AzureKeyVault@2
    displayName: 'Access Azure Key Vault pre-job'
    inputs:
      azureSubscription: '$(SERVICE_CONNECTION_NAME)'
      keyVaultName: $(KEY_VAULT_NAME)
      secretsFilter: '*'
      runAsPreJob: true
```

