---
title: Set secret variables
description: Learn how to set secret variables.
ms.topic: conceptual
ms.date: 04/29/2022
monikerRange: '<= azure-devops'
---

# Set secret variables

Secret variables are encrypted variables that you can use in pipelines without exposing their value. Secret variables can be used for private information like passwords, IDs, and other identifying data that you wouldn't want to have exposed in a pipeline. Secret variables are encrypted at rest with a 2048-bit RSA key and are available on the agent for tasks and scripts to use. 

The recommended ways to set secret variables are in the UI, in a variable group, and in a variable group from Azure Key Vault. You can also set secret variables in script tasks but this is not recommended.

Secret variables set in the pipeline settings UI for a pipeline are scoped to the pipeline where they are set. Use variable groups to share secret variables across pipelines. 

## Secret variable in the UI

### Set secret variables in the UI

[!INCLUDE [set secret variable in UI](includes/set-secrets.md)]

## Set a secret variable in a variable group

You can add secrets to a variable group or link secrets from an existing [Azure Key Vault](/azure/key-vault/general/basic-concepts). 

### Create new variable groups 

1. Select **Pipelines** > **Library** > **+ Variable group**.

   :::image type="content" source="../library/media/add-variable-group.png" alt-text="Screenshot of Add variable group button highlighted with red box.":::

1. Enter a name and description for the group.

1. Optional: Move the toggle to link secrets from an Azure key vault as variables. For more information, see [Use Azure Key Vault secrets](../release/azure-key-vault.md).

1. Enter the name and value for each [variable](../release/variables.md#custom-variables) to include in the group, choosing **+ Add** for each one. 

1. To make your variable secure, choose the "lock" icon at the end of the row.

1. When you're finished adding variables, select **Save**.

   ![Screenshot of saving a variable group.](../library/media/save-variable-group.png)

Variable groups follow the [library security model](../library/index.md#library-security).

### Link secrets from an Azure key vault

[!INCLUDE [set secret variable in UI](includes/variable-groups-link-secrets.md)]


## Use the Azure Key Vault task

You can use the Azure Key Vault task to include secrets in your pipeline. This task allows the pipeline to connect to your Azure Key Vault and retrieve secrets to use as pipeline variables.

1. In the pipeline editor, select **Show assistant** to expand the assistant panel. 

1. Search for `vault` and select the [Azure Key Vault task](../tasks/deploy/azure-key-vault.md). 

    :::image type="content" source="../release/media/azure-key-vault/configure-azure-key-vault-task.png" alt-text="Add the Azure Key Vault task.":::
 
The **Make secrets available to whole job** option is not currently supported in Azure DevOps Server 2019 and 2020.

To learn more about the Azure Key Vault task, see [Use Azure Key Vault secrets in Azure Pipelines](../release/azure-key-vault.md). 
 
## Secret variable in a script

BASH/PWSH

### set

### use

### Troubleshoot variable issues

