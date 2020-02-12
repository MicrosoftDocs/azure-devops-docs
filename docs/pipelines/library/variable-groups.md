---
title: Variable groups for Azure Pipelines and TFS
ms.custom: seodec18
description: Share common variables across pipelines using variable groups
ms.assetid: A8AA9882-D3FD-4A8A-B22A-3A137CEDB3D7
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: mijacobs
ms.author: ronai
author: RoopeshNair
ms.date: 02/05/2019
monikerRange: '>= tfs-2017'
---

# Add & use variable groups

[!INCLUDE [temp](../includes/concept-rename-note.md)]

Use a variable group to store values that you want to control and make available across
multiple pipelines. You can also use variable groups to store secrets and other values
that might need to be [passed into a YAML pipeline](variable-groups.md?tabs=yaml&view=azure-devops#use-a-variable-group). Variable groups are defined and managed in the **Library** page under
**Pipelines**.

::: moniker range="< tfs-2018"
> [!NOTE]
> Variable groups can be used in a build pipeline in only Azure DevOps and TFS 2018. They cannot be used in a build pipeline in earlier versions of TFS.
::: moniker-end

## Create a variable group

#### [YAML](#tab/yaml/)
Variable groups can’t be created in YAML, but they can be used as described in [Use a variable group](#use-a-variable-group).

#### [Classic](#tab/classic/)
1. Open the **Library** tab to see a list of existing variable groups for your project.
Choose **+ Variable group**.

1. Enter a name and description for the group.

1. Decide if you want the variable group to be accessible for any pipeline
   by setting the **Allow access to all pipelines** option. This option allows
   pipelines defined in YAML, which are not automatically authorized for variable groups,
   to use this variable group. See [Use a variable group](variable-groups.md?tabs=yaml&view=azure-devops#use-a-variable-group)

1. If you want to link secrets from an Azure key vault as variables, see [Link secrets from an Azure key vault](variable-groups.md#link-secrets-from-an-azure-key-vault).

1. Enter the name and value for each [variable](../release/variables.md#custom-variables)
   you want to include in the group, choosing **+ Add** for each one.
   If you want to encrypt and securely store the value, choose the "lock" icon 
   at the end of the row.

1. When you're finished adding variables, choose **Save**.

   ![Saving a variable group](media/save-variable-group.png) 

> Variable groups follow the [library security model](index.md#security).

#### [Azure DevOps CLI](#tab/azure-devops-cli)

You can create a variable group with the [az pipelines variable-group create](/cli/azure/ext/azure-devops/pipelines/variable-group#ext-azure-devops-az-pipelines-variable-group-create) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).

```azurecli
az pipelines variable-group create --name
                                   --variables
                                   [--authorize {false, true}]
                                   [--description]
                                   [--org]
                                   [--project]
```

#### Parameters

- **name**: Required. Name of the variable group.
- **variables**: Required. Variables in format `key=value` space-separated pairs. Secret variables should be managed using [az pipelines variable-group variable](#manage-variables-in-a-variable-group) commands.
- **authorize**: Optional. Specify whether the variable group should be accessible by all pipelines. Accepted values are *false* and *true*.
- **description**: Optional. Description of the variable group.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.

#### Example

The following command blahblahblah.  

```azurecli
az pipelines variable-group create --name new-app-variables --variables app-location=Head_Office app-name=Fabrikam --output yaml

authorized: false
description: null
id: 5
name: new-app-variables
providerData: null
type: Vsts
variables:
  app-location:
    isSecret: null
    value: Head_Office
  app-name:
    isSecret: null
    value: Fabrikam
```

::: moniker-end

[!INCLUDE [temp](../../_shared/note-cli-not-supported.md)]

* * *



## Use a variable group

#### [YAML](#tab/yaml/)
::: moniker range="> tfs-2018"

To use a variable from a variable group, you need to add a reference to the group in your YAML file:

```yaml
variables:
- group: my-variable-group
```

Thereafter variables from the variable group can be used in your YAML file.

If you use both variables and variable groups, you'll have to use `name`/`value` syntax for the individual (non-grouped) variables:

```yaml
variables:
- group: my-variable-group
- name: my-bare-variable
  value: 'value of my-bare-variable'
```

Next you must authorize the variable group (this is a security feature: if you only had to name the variable group in YAML, then anyone who can push code
to your repository could extract the contents of secrets in the variable group).
To do this, or if you encounter a resource authorization error in your build,
use one of the following techniques:

* If you want to authorize any pipeline to use the variable group,
  which may be a suitable option if you do not have any secrets in the group,
  go to Azure Pipelines, open the **Library** page, choose **Variable groups**, select the variable group in question,
  and enable the setting **Allow access to all pipelines**.

* If you want to authorize a variable group for a specific pipeline, open the pipeline
  by selecting **Edit** and queue a build manually. You will see a resource authorization error
  and a "Authorize resources" action on the error. Choose this action to explicitly add the pipeline as an
  authorized user of the variable group.

> [!Note]
> If you added a variable group to a pipeline and did not get a resource authorization error in your build when you expected one, turn off the **Allow access to all pipelines** setting described above.

::: moniker-end

::: moniker range="<= tfs-2018"

YAML builds are not yet available on TFS.

::: moniker-end

#### [Classic](#tab/classic/)
To use a variable group, open your pipeline, select the **Variables**
tab, select **Variable groups**, and then choose **Link variable group**.
In a build pipeline, you see a list of available groups. In a release pipeline (as shown below), you
also see a drop-down list of stages in the pipeline - you can link the variable group to one or more of these stages.

![Linking a variable group](media/link-variable-group.png)

* In a **build pipeline**, the variable group is linked to the pipeline and all the variables in the group are available for use within this pipeline.
* In a **release pipeline**, you can link a variable group to the pipeline itself, or to a specific stage of the release pipeline.
  - If you link to a release pipeline, all the variables in the group are available for use in the pipeline and in all stages of that pipeline.
  - If you link to one or more stages in a release pipeline, the variables from the variable group are scoped to these stages and are not accessible in the other stages of the same release.

> [!NOTE]
> Linking a variable group to a specific stage is available only on Azure Pipelines and on TFS 2018 Update 2 and later.

#### [Azure DevOps CLI](#tab/azure-devops-cli) 

::: moniker range="azure-devops"

There is no [**az pipelines**](/cli/azure/ext/azure-devops/pipelines) command that applies to using a variable group. The Azure DevOps CLI commands are only valid for Azure DevOps Services (cloud service). 

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

* * *
You access the value of the variables in a linked variable group in exactly
the same way as [variables you define within the pipeline itself](../process/variables.md).
For example, to access the value of a variable named **customer** in a variable group linked to the pipeline,
use `$(customer)` in a task parameter or a script. However, secret variables (encrypted variables and key vault variables) 
cannot be accessed directly in scripts - instead they must be passed as arguments to a task. For more information, see [secrets](../process/variables.md#secret-variables)

Any changes made centrally to a variable group, such as a change in the value of a variable or the addition of new variables,
will automatically be made available to all the definitions or stages to which the variable group is linked.

## Manage a variable group

YOU CAN BLAH BLAH BLAH






## Manage variables in a variable group

YOU CAN BLAH BLAH BLAH






## Link secrets from an Azure key vault

Link an existing Azure key vault to a variable group and map selective vault secrets to the variable group.

1. In the **Variable groups** page, enable **Link secrets from an Azure key vault as variables**.
   You'll need an existing key vault containing your secrets. You can create a 
   key vault using the [Azure portal](https://portal.azure.com).

   ![Variable group with Azure key vault integration](media/link-azure-key-vault-variable-group.png)

1. Specify your Azure subscription end point and the name of the vault containing your secrets.

   Ensure the Azure service connection has at least **Get** and **List** management permissions on the vault for secrets.
   You can enable Azure Pipelines to set these permissions by choosing **Authorize** next to the vault name.
   Alternatively, you can set the permissions manually in the [Azure portal](https://portal.azure.com):

   - Open the **Settings** blade for the vault, choose **Access policies**, then **Add new**.
   - In the **Add access policy** blade, choose **Select principal** and select the service principal for your client account.
   - In the **Add access policy** blade, choose **Secret permissions** and ensure that **Get** and **List** are checked (ticked).
   - Choose **OK** to save the changes.<p />

1. In the **Variable groups** page, choose **+ Add** to select specific secrets from your vault that will be mapped to this variable group.

### Secrets management notes

* Only the secret *names* are mapped to the variable group, not the secret values. The latest version of the value of each secret
  is fetched from the vault and used in the pipeline linked to the variable group during the run.

* Any changes made to *existing* secrets in the key vault, such as a change in the value of a secret, will be made available
  automatically to all the pipelines in which the variable group is used.

* When new secrets are added to the vault, or a secret is deleted from the vault, the associated variable groups are not updated
  automatically. The secrets included in the variable group must be explicitly updated in order for the pipelines using the
  variable group to execute correctly.

* Azure Key Vault supports storing and managing cryptographic keys and secrets in Azure.
  Currently, Azure Pipelines variable group integration supports mapping only secrets from the Azure key vault. Cryptographic keys and certificates are not supported.

## Expansion of variables in a group

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

When you set a variable in a group and use it in a YAML file, it has the same precedence as any other variable defined within the YAML file. 
For more information about precedence of variables, see the topic on [variables](../process/variables.md#expansion-of-variables).

::: moniker-end
::: moniker range="< azure-devops-2019"
YAML is not supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)
When you set a variable with the same name in multiple scopes, the following precedence is used (highest precedence first).

1. Variable set at queue time
1. Variable set in the pipeline
1. Variable set in the variable group

[!INCLUDE [variable-collision](../includes/variable-collision.md)]

* * *
