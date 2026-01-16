---
title: Set secret variables
description: Learn how to set secret variables.
ms.topic: concept-article
ms.date: 01/12/2026
monikerRange: "<=azure-devops"
---

# Set secret variables

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Secret variables are encrypted variables that you can use in pipelines without exposing their value. Use secret variables for private information like passwords, IDs, and other identifying data that you don't want exposed in a pipeline. Secret variables are encrypted at rest with a 2048-bit RSA key and are available on the agent for tasks and scripts to use.

**Why secret variables matter:** Protecting sensitive credentials in your CI/CD pipelines is critical. By storing secrets securely, you prevent unauthorized access to sensitive resources, reduce the risk of credential exposure in build logs, and maintain compliance with security best practices. Secret variables ensure that only authorized pipelines and tasks can access sensitive data, protecting your organization's security posture.

The recommended ways to [set secret variables are in the UI](#secret-variable-in-the-ui), [in a variable group](#set-a-secret-variable-in-a-variable-group), and [in a variable group from Azure Key Vault](#link-secrets-from-an-azure-key-vault). You can also [set secret variables in a script with a logging command](#set-secret-variable-in-a-script-by-using-logging-commands) but this method isn't recommended since anyone who can access your pipeline can also see the secret.

Secret variables that you set in the pipeline settings UI for a pipeline are scoped to the pipeline where you set them. Use variable groups to share secret variables across pipelines.

## Secret variable in the UI

Set secret variables in the pipeline editor when you edit an individual pipeline. Encrypt and make a pipeline variable secret by selecting the lock icon. 

Set secret variables the same way for YAML and Classic. 

[!INCLUDE [set secret variable in UI](includes/set-secrets.md)]

## Use a secret variable in the UI

#### [YAML](#tab/yaml/)

To reference secret variables in YAML pipelines, map them as environment variables. In this example, the UI defines two secret variables, `SecretOne` and `SecretTwo`. The value of `SecretOne` is `foo`, and the value of `SecretTwo` is `bar`. 

```yml
steps:
- powershell: |
      Write-Host "My first secret variable is $env:FOO_ONE"
      $env:FOO_ONE -eq "foo"
  env:
    FOO_ONE: $(SecretOne)
- bash: |
    echo "My second secret variable: $FOO_TWO"
    if [ "$FOO_TWO" = "bar" ]; then
        echo "Strings are equal."
    else
        echo "Strings are not equal."
    fi
  env:
    FOO_TWO: $(SecretTwo) 
```

The pipeline outputs:

```
My first secret variable is ***
True
My second secret variable: ***
Strings are equal.
```

[!INCLUDE [secrets masked](./includes/masked-secrets.md)]

For a more detailed example, see [Define variables](variables.md#secret-variables).

#### [Classic](#tab/classic/)

Unlike a normal variable, the system doesn't automatically decrypt secret variables into environment variables for scripts. You need to explicitly map secret variables.

In this example, set the variable `mySecret` on the Variables tab. The value of `mySecret` is `foo`.

:::image type="content" source="media/variables/set-secret-var-classic.png" alt-text="Screenshot of the Variables tab in Classic pipeline editor with a secret variable named mySecret being configured with the lock icon.":::

Each task that uses the secret as an environment variable needs to remap the variable. If you want to use the secret variable `mySecret` in a script, use the **Environment Variables** section of the task. Set the environment variable name to `FOO_ONE`, and set the value to `$(mySecret)`. 

:::image type="content" source="media/variables/secret-passed-variable-classic.png" alt-text="Screenshot of the Environment Variables section in a Classic task showing FOO_ONE mapped to the mySecret variable.":::

The script outputs `True`.

---

## Set a secret variable in a variable group

You can add secrets to a variable group or link secrets from an existing [Azure Key Vault](/azure/key-vault/general/basic-concepts). 

### Create new variable groups 

1. Select **Pipelines** > **Library** > **+ Variable group**.

   :::image type="content" source="../library/media/add-variable-group.png" alt-text="Screenshot of the Library page with the Add Variable Group button highlighted.":::

1. Enter a name and description for the group.

1. Optional: Move the toggle to link secrets from an Azure Key Vault as variables. For more information, see [Use Azure Key Vault secrets](../release/azure-key-vault.md).

1. Enter the name and value for each [variable](../release/variables.md#custom-variables) to include in the group, choosing **+ Add** for each one. 

1. To make your variable secure, choose the lock icon at the end of the row.

1. When you're finished adding variables, select **Save**.

   :::image type="content" source="../library/media/save-variable-group.png" alt-text="Screenshot of the Save button on the variable group creation page showing the completed variable group ready to be saved.":::

Variable groups follow the [library security model](../library/index.md#library-security).

### Link secrets from an Azure Key Vault
 
You can create variable groups and link them to an existing Key Vault, so you can map to secrets stored in the key vault. Only the secret names are mapped to the variable group, not the secret values. The pipeline runs that link to the variable group and fetches the latest secret values from the vault. For more information, see [Link a variable group to secrets in Azure Key Vault](../library/link-variable-groups-to-key-vaults.md).

## Use the Azure Key Vault task

Use the Azure Key Vault task to include secrets in your pipeline. By using this task, your pipeline can connect to your Key Vault and retrieve secrets to use as pipeline variables.

1. In the pipeline editor, select **Show assistant** to expand the assistant panel. 

1. Search for `vault` and select the [Key Vault task](/azure/devops/pipelines/tasks/reference/azure-key-vault-v2). 

    :::image type="content" source="../release/media/azure-key-vault/configure-azure-key-vault-task.png" alt-text="Screenshot of the task assistant panel with vault search results showing the Azure Key Vault task option.":::
 
For more information about the Key Vault task, see [Use Azure Key Vault secrets in Azure Pipelines](../release/azure-key-vault.md). 
 

## Set secret variable in a script by using logging commands

Use the `task.setvariable` logging command to set variables in PowerShell and Bash scripts. This method is the least secure way to work with secret variables but can be useful for debugging. The recommended ways to set secret variables are in the UI, in a variable group, and in a variable group from Key Vault.

> [!WARNING]
> **Security Risk**: Setting secret variables in scripts by using logging commands is inherently less secure. Anyone with access to your pipeline definition, build logs, or source code can see the logging command and potentially expose the secret. Use this method only for debugging purposes in secure, trusted environments. Always prefer UI-based configuration, variable groups, or Azure Key Vault integration for production scenarios.

To set a variable as a script by using a logging command, pass the `issecret` flag. 

[!INCLUDE [set secret variable in UI](includes/secret-variables-logging.md)]

For more information, see [setting and using variables in scripts](set-variables-scripts.md). 

## Related articles

- [Define variables](variables.md)
- [Use variables in a variable group](../scripts/cli/pipeline-variable-group-secret-nonsecret-variables.md)
- [Use predefined variables](../build/variables.md)
- [Set variables in scripts](set-variables-scripts.md)
