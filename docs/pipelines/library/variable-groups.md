---
title: Manage variable groups
ms.custom: devx-track-azurecli, pipelinesresourcesrefresh
description: Share common variables across pipelines using variable groups.
ms.assetid: A8AA9882-D3FD-4A8A-B22A-3A137CEDB3D7
ms.topic: tutorial
ms.author: ronai
author: RoopeshNair
ms.date: 08/15/2024
monikerRange: '<= azure-devops'
---

# Manage variable groups

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article explains how to create and use variable groups in Azure Pipelines. Variable groups store values and secrets that you can pass into a YAML pipeline or make available across multiple pipelines in a project.

Secret variables in variable groups are [protected resources](../security/resources.md). You can add combinations of approvals, checks, and pipeline permissions to limit access to secret variables in a variable group. Access to nonsecret variables isn't limited by approvals, checks, or pipeline permissions.

Variable groups follow the [library security model](index.md#library-security) for roles and permissions.

## Prerequisites

* An Azure DevOps Services organization or an Azure DevOps Server collection and project where you have permissions to create pipelines and variables.
* A project in your Azure DevOps organization or Azure DevOps Server collection. [Create a project](../../organizations/projects/create-project.md) if you don't have one.
* If you're using the Azure DevOps CLI, you need Azure CLI version 2.30.0 or higher with the Azure DevOps CLI extension. For more information, see [Get started with Azure DevOps CLI](../../cli/index.md).

## Create a variable group

You can create variable groups for the pipeline runs in your project.

>[!NOTE]
>To create a secret variable group to link secrets from an Azure key vault as variables, follow the instructions at [Link a variable group to secrets in Azure Key Vault](./link-variable-groups-to-key-vaults.md).


# [Azure Pipelines UI](#tab/azure-pipelines-ui)

<a id="create-variable-group"></a>  

### Create the variable group

1. In your Azure DevOps project, select **Pipelines** > **Library** from the left menu.
1. On the **Library** page, select **+ Variable group**.

   :::image type="content" source="media/add-variable-group.png" alt-text="Screenshot of the Library screen and Add variable group button.":::

1. On the new variable group page, under **Properties**, enter a name and optional description for the variable group.
1. Under **Variables**, select **+ Add**, and then enter a variable name and value to include in the group. If you want to encrypt and securely store the value, select the lock icon next to the variable.
1. Select **+ Add** to add each new variable. When you finish adding variables, select **Save**.

   :::image type="content" source="media/save-variable-group.png" alt-text="Screenshot of configuring and saving a variable group.":::

You can now use this variable group in project pipelines.

# [Azure DevOps CLI](#tab/azure-devops-cli)

In Azure DevOps Services, you can create variable groups by using the Azure DevOps CLI.
[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

::: moniker range="azure-devops"

1. Log in to your Azure DevOps organization by using the [az login](/cli/azure/authenticate-azure-cli) command.

    ```azurecli
    az login
    ```

1. Select your subscription from the list displayed in your terminal window.

1. Ensure you're running the latest version of the Azure CLI and the Azure DevOps extension by using the following commands.

    ```azurecli
    az upgrade
    az extension add --name azure-devops --upgrade
    ```
  
1. In Azure DevOps CLI commands, you can set the default organization and project by using:

    ```azurecli
    az devops configure --defaults organization=<YourOrganizationURL> project=<Project Name or ID>`
    ```

    Or you can use the `detect=true` parameter in the commands to detect the organization and project context from the directory you're in. If you don't detect the organization or configure a default organization or project, you must specify the `org` and `project` parameters in the commands.

### Create the variable group

To create a variable group, use the [az pipelines variable-group create](/cli/azure/pipelines/variable-group#ext-azure-devops-az-pipelines-variable-group-create) command.

For example, the following command creates a variable group named `home-office-config`, adds the variables `app-location=home-office` and `app-name=contoso`, and outputs results in YAML format.

```azurecli
az pipelines variable-group create --name home-office-config
                                   --variables app-location=home-office app-name=contoso
                                   --output yaml
```

Output:

```yaml
authorized: false
description: null
id: 5
name: home-office-config
providerData: null
type: Vsts
variables:
  app-location:
    isSecret: null
    value: home-office
  app-name:
    isSecret: null
    value: contoso
```

::: moniker-end

---


## Update variable groups

# [Azure Pipelines UI](#tab/azure-pipelines-ui)

You can update variable groups by using the Azure Pipelines user interface.

1. In your Azure DevOps project, select **Pipelines** > **Library** from the left menu.
1. On the **Library** page, select the variable group you want to update. You can also hover over the variable group listing, select the **More options** icon, and select **Edit** from the menu.
1. On the variable group page, change any of the properties, and then select **Save**.

# [Azure DevOps CLI](#tab/azure-devops-cli)

In Azure DevOps Services, you can update variable groups by using the Azure DevOps CLI.
[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

::: moniker range="azure-devops"
### List variable groups

To update a variable group or the variables within it by using the Azure DevOps CLI, you use the variable group `group-id`.

You can get the value of the variable group ID from the output of the variable group creation command, or use the [az pipelines variable-group list](/cli/azure/pipelines/variable-group#ext-azure-devops-az-pipelines-variable-group-list) command.

For example, the following command lists the first three project variable groups in ascending order and returns the results, including variable group ID, in table format.

```azurecli
az pipelines variable-group list --top 3 --query-order Asc --output table
```

Output:

```output
ID    Name               Type    Number of Variables
----  -----------------  ------  ---------------------
1     myvariables        Vsts    2
2     newvariables       Vsts    4
3     new-app-variables  Vsts    3
```

<a id="update-variable-group"></a>  
### Update a variable group

To update a variable group, use the [az pipelines variable-group update](/cli/azure/pipelines/variable-group#ext-azure-devops-az-pipelines-variable-group-update) command. You can't update a variable group of type `AzureKeyVault` using the Azure DevOps CLI.

For example, the following command updates the variable group with ID `4` to change the `name` and `description`, and outputs results in table format.

```azurecli
az pipelines variable-group update --group-id 4
                                   --name my-new-variables
                                   --description "New home office variables"
                                   --output table
```

Output:

```output

ID    Name              Description               Is Authorized  Number of Variables
----  ----------------  ------------------------- -------------  -------------------
4     my-new-variables  New home office variables false          2
```

<a id="show-variable-group"></a>  
### Show details for a variable group

You can use the [az pipelines variable-group show](/cli/azure/pipelines/variable-group#ext-azure-devops-az-pipelines-variable-group-show) command to show details for a variable group. For example, the following command shows details for the variable group with ID `4` and returns the results in YAML format.

```azurecli
az pipelines variable-group show --group-id 4 --output yaml
```

Output:

```yaml
authorized: false
description: Variables for my new app
id: 4
name: my-new-variables
providerData: null
type: Vsts
variables:
  app-location:
    isSecret: null
    value: home-office
  app-name:
    isSecret: null
    value: contoso
```

::: moniker-end

---

<a id="delete-variable-group"></a>  
## Delete a variable group

# [Azure Pipelines UI](#tab/azure-pipelines-ui)

You can delete variable groups in the Azure Pipelines user interface.

1. In your Azure DevOps project, select **Pipelines** > **Library** from the left menu.
1. On the **Library** page, hover over the variable group you want to delete and select the **More options** icon.
1. Select **Delete** from the menu, and then select **Delete** on the confirmation screen.

#### [Azure DevOps CLI](#tab/azure-devops-cli)

In Azure DevOps Services, you can delete variable groups by using the Azure DevOps CLI.
[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

::: moniker range="azure-devops"
To delete a variable group, use the [az pipelines variable-group delete](/cli/azure/pipelines/variable-group#ext-azure-devops-az-pipelines-variable-group-delete) command. For example, the following command deletes the variable group with ID `1` and doesn't prompt for confirmation.

```azurecli
az pipelines variable-group delete --group-id 1 --yes
```

::: moniker-end

---

## Manage variables in variable groups

# [Azure Pipelines UI](#tab/azure-pipelines-ui)

You can change, add, or delete variables in variable groups by using the Azure Pipelines user interface.

1. In your Azure DevOps project, select **Pipelines** > **Library** from the left menu.
1. On the **Library** page, select the variable group you want to update. You can also hover over the variable group listing, select the **More options** icon, and select **Edit** from the menu.
1. On the variable group page, you can:
   - Change any of the variable names or values.
   - Delete any of the variables by selecting the garbage can icon next to the variable name.
   - Change variables to secret or nonsecret by selecting the lock icon next to the variable value.
   - Add new variables by selecting **+ Add**.
1. After making changes, select **Save**.

# [Azure DevOps CLI](#tab/azure-devops-cli)

In Azure DevOps Services, you can manage variables in variable groups by using the Azure DevOps CLI.
[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

::: moniker range="azure-devops"

<a id="list-variables-group"></a>  
### List variables in a variable group

To list the variables in a variable group, use the [az pipelines variable-group variable list](/cli/azure/pipelines/variable-group/variable#ext-azure-devops-az-pipelines-variable-group-variable-list) command. For example, the following command lists all the variables in the variable group with ID `4` and shows the result in table format.

```azurecli
az pipelines variable-group variable list --group-id 4 --output table
```

Output:

```output
Name            Is Secret    Value
--------------  -----------  -----------
app-location    False        home-office
app-name        False        contoso
```

### Add variables to a variable group

To add a variable to a variable group, use the [az pipelines variable-group variable create](/cli/azure/pipelines/variable-group/variable#ext-azure-devops-az-pipelines-variable-group-variable-create) command.

For example, the following command creates a new variable named `requires-login` with a default value of `true` in the variable group with ID `4`. The result is shown in table format.

```azurecli
az pipelines variable-group variable create --group-id 4
                                            --name requires-login
                                            --value true
                                            --output table
```

Output:
```output
Name            Is Secret    Value
--------------  -----------  -------
requires-login  False        true
```

<a id="update-variables-group"></a>  
### Update variables in a variable group

To update variables in a variable group, use the [az pipelines variable-group variable update](/cli/azure/pipelines/variable-group/variable#ext-azure-devops-az-pipelines-variable-group-variable-update) command.

For example, the following command updates the `requires-login` variable with the new value `false` in the variable group with ID `4`, and shows the result in YAML format. The command specifies that the variable is a `secret`.

```azurecli
az pipelines variable-group variable update --group-id 4
                                            --name requires-login
                                            --value false
                                            --secret true
                                            --output yaml
```

The output shows the value as `null` instead of `false` because it's a secret hidden value.

```yaml
requires-login:
  isSecret: true
  value: null
```

### Manage secret variables

To manage secret variables, use the [az pipelines variable-group variable update](/cli/azure/pipelines/variable-group/variable#ext-azure-devops-az-pipelines-variable-group-variable-update) command with the following parameters:

- `secret`: Set to `true` to indicate that the variable's value is kept secret.
- `prompt-value`: Set to `true` to update the value of a secret variable by using an environment variable or prompt via standard input.
- `value`: For secret variables, use the `prompt-value` parameter to be prompted to enter the value via standard input. For noninteractive consoles, you can pick up the environment variable prefixed with `AZURE_DEVOPS_EXT_PIPELINE_VAR_`. For example, you can input a variable named `MySecret` by using the environment variable `AZURE_DEVOPS_EXT_PIPELINE_VAR_MySecret`.

<a id="delete-variables-group"></a>  
### Delete variables from a variable group

To delete a variable from a variable group, use the [az pipelines variable-group variable delete](/cli/azure/pipelines/variable-group/variable#ext-azure-devops-az-pipelines-variable-group-variable-delete) command. For example, the following command deletes the `requires-login` variable from the variable group with ID `4`.

```azurecli
az pipelines variable-group variable delete --group-id 4 --name requires-login
```

The command prompts for confirmation because that is the default. Use the `--yes` parameter to skip the confirmation prompt.

```output
Are you sure you want to delete this variable? (y/n): y
Deleted variable 'requires-login' successfully.
```

::: moniker-end

---

<a name="use-a-variable-group"></a>

## Use variable groups in pipelines

You can use variable groups in YAML or Classic pipelines. Changes that you make to a variable group are automatically available to all the definitions or stages the variable group is linked to.

# [YAML](#tab/yaml)

### Use variable groups in YAML pipelines

If you only name the variable group in YAML pipelines, anyone who can push code to your repository could extract the contents of secrets in the variable group. Therefore, to use a variable group with YAML pipelines, you must authorize the pipeline to use the group. You can authorize a pipeline to use a variable group in the Azure Pipelines user interface or by using the Azure DevOps CLI.

#### Authorization via the Pipelines UI

You can authorize pipelines to use your variable groups by using the Azure Pipelines user interface.

1. In your Azure DevOps project, select **Pipelines** > **Library** from the left menu.
1. On the **Library** page, select the variable group you want to authorize.
1. On the variable group page, select the **Pipeline permissions** tab.
1. On the **Pipeline permissions** screen, select **+** and then select a pipeline to authorize. Or, select the **More actions** icon, select **Open access**, and select **Open access** again to confirm.

Selecting a pipeline authorizes that pipeline to use the variable group. To authorize another pipeline, select the **+** icon again. Selecting **Open access** authorizes all project pipelines to use the variable group. Open access might be a good option if you don't have any secrets in the group.

Another way to authorize a variable group is to select the pipeline, select **Edit**, and then queue a build manually. You see a resource authorization error and can then explicitly add the pipeline as an authorized user of the variable group.

#### Authorization via the Azure DevOps CLI

In Azure DevOps Services, you can authorize variable groups by using the Azure DevOps CLI.
[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

::: moniker range="azure-devops"

To authorize all project pipelines to use the variable group, set the `authorize` parameter in the [az pipelines variable-group create](/cli/azure/pipelines/variable-group#az-pipelines-variable-group-create) command to `true`. This open access might be a good option if you don't have any secrets in the group.

::: moniker-end

#### Use the variable group in the YAML pipeline

Once you authorize a YAML pipeline to use a variable group, you can use the variable group or variables within the group in the pipeline.

To use a variable from a variable group, add a reference to the group name in your YAML pipeline file. You can then use variables from the variable group in your file.

```yaml
variables:
- group: my-variable-group
```

You can reference multiple variable groups in the same pipeline. If multiple variable groups include the same variable, the last variable group that uses the variable in the file sets the variable's value. For more information about precedence of variables, see [Expansion of variables](../process/variables.md#expansion-of-variables).

You can also reference a variable group in a template. The following *variables.yml* template file references the variable group `my-variable-group`. The variable group includes a variable named `myhello`.

```yaml
variables:
- group: my-variable-group
```

The YAML pipeline references the *variables.yml* template, and uses the variable `$(myhello)` from the variable group `my-variable-group`.

```yaml
stages:
- stage: MyStage
  variables:
  - template: variables.yml
  jobs:
  - job: Test
    steps:
    - script: echo $(myhello)
```

#### Use variable group variables in YAML pipelines

You access the variable values in a linked variable group the same way as you access variables you define within the pipeline. For example, to access the value of a variable named `customer` in a variable group linked to the pipeline, you can use `$(customer)` in a task parameter or a script.

If you use both standalone variables and variable groups in your pipeline file, use the `name`-`value` syntax for the standalone variables.

```yaml
variables:
- group: my-variable-group
- name: my-standalone-variable
  value: 'my-standalone-variable-value'
```

To reference a variable in a variable group, you can use macro syntax or a runtime expression. In the following examples, the group `my-variable-group` has a variable named `myhello`.

To use a runtime expression:

```yaml
variables:
- group: my-variable-group
- name: my-passed-variable
  value: $[variables.myhello]
- script: echo $(my-passed-variable)
```

To use macro syntax:

```yaml
variables:
- group: my-variable-group

steps:
- script: echo $(myhello)
```

You can't access secret variables, including encrypted variables and key vault variables, directly in scripts. You must pass these variables as arguments to a task. For more information, see [Secret variables](../process/variables.md#secret-variables).

# [Classic](#tab/classic)

### Use variable groups in Classic pipelines

Classic pipelines can use variable groups without separate authorization. To use a variable group:

1. Open your Classic pipeline.
1. Select **Variables** > **Variable groups**, and then select **Link variable group**.

    * In a build pipeline, you see a list of available groups. Select a variable group and select **Link**. All the variables in the group are available for use within the pipeline.

    * In a release pipeline, you also see a dropdown list of stages in the pipeline. Link the variable group to the pipeline itself, or to one or more specific stages of the release pipeline. If you link to one or more stages, the variables from the variable group are scoped to these stages and aren't accessible in the other stages of the release.

    :::image type="content" source="media/link-variable-group.png" alt-text="Screenshot that shows linking a variable group.":::

When you set a variable with the same name in multiple scopes, the following precedence is used, highest first:

1. Variable set at queue time
1. Variable set in the pipeline
1. Variable set in the variable group

For more information about precedence of variables, see [Expansion of variables](../process/variables.md#expansion-of-variables).

[!INCLUDE [variable-collision](../includes/variable-collision.md)]

---

## Related articles

* [Define variables](../process/variables.md)
* [Define custom variables](../release/variables.md#custom-variables)
* [Use secret and nonsecret variables in variable groups](../scripts/cli/pipeline-variable-group-secret-nonsecret-variables.md)
* [Use Azure Key Vault secrets in Azure Pipelines](../release/azure-key-vault.md)
* [Add approvals and checks](../process/approvals.md)
