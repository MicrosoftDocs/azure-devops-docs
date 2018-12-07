---
title: Variable groups for Azure Pipelines and TFS
ms.custom: seodec18
description: Understand variable groups in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: A8AA9882-D3FD-4A8A-B22A-3A137CEDB3D7
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 10/30/2018
monikerRange: '>= tfs-2017'
---

# Variable groups for builds and releases

**Azure Pipelines | TFS 2018 | TFS 2017**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

Use a variable group to store values that you want to make available across
multiple build and release pipelines. Variable groups are defined and managed in the **Library** tab of the
**Pipelines** hub.

::: moniker range="< tfs-2018"
> [!NOTE]
> Variable groups can be used in a build pipeline in only Azure DevOps and TFS 2018. They cannot be used in a build pipeline in earlier versions of TFS. 
::: moniker-end

## Create a variable group

1. Open the **Library** tab to see a list of existing variable groups for your project.
Choose **+ Variable group**.

1. Enter a name and description for the group. Then enter the name and value for each
   [variable](../release/variables.md#custom-variables)
   you want to include in the group, choosing **+ Add** for each one.
   If you want to encrypt and securely store the value, choose the "lock" icon 
   at the end of the row. When you're finished adding variables, choose **Save**.

   ![Saving a variable group](_img/save-variable-group.png) 

> Variable groups follow the [library security model](index.md#security).

## Link secrets from an Azure key vault as variables

Link an existing Azure key vault to a variable group and map selective vault secrets to the variable group.

1. In the **Variable groups** page, enable **Link secrets from an Azure key vault as variables**.
   You'll need an existing key vault containing your secrets. You can create a 
   key vault using the [Azure portal](https://portal.azure.com).

   ![Variable group with Azure key vault integration](_img/link-azure-key-vault-variable-group.png)

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
  is fetched from the vault and used in the pipeline linked to the variable group during the build or release.

* Any changes made to *existing* secrets in the key vault, such as a change in the value of a secret, will be made available
  automatically to all the definitions in which the variable group is used.

* When new secrets are added to the vault, or a secret is deleted from the vault, the associated variable groups are not updated
  automatically. The secrets included in the variable group must be explicitly updated in order for the definitions using the
  variable group to execute correctly.

* Azure Key Vault supports storing and managing cryptographic keys and secrets in Azure.
  Currently, Azure Pipelines variable group integration supports mapping only secrets from the Azure key vault. Cryptographic keys and certificates are not yet supported.

## Use a variable group

# [Schema](#tab/yaml)

::: moniker range="> tfs-2018"

To use a variable group, reference it in your variables mapping:

```yaml
variables:
- group: my-variable-group
```

::: moniker-end

::: moniker range="<= tfs-2018"

YAML builds are not yet available on TFS.

::: moniker-end

# [Example](#tab/designer)

To use a variable group, open your build or release pipeline, select the **Variables**
tab, select **Variable groups**, and then choose **Link variable group**.
In a build pipeline, you see a list of available groups. In a release pipeline (as shown below), you
also see a drop-down list of stages in the pipeline - you can link the variable group to one or more of these stages.

![Linking a variable group](_img/link-variable-group.png)

* In a **build pipeline**, the variable group is linked to the pipeline and all the variables in the group are available for use within this pipeline.
* In a **release pipeline**, you can link a variable group to the pipeline itself, or to a specific stage of the release pipeline.
  - If you link to a release pipeline, all the variables in the group are available for use in the pipeline and in all stages of that pipeline.
  - If you link to one or more stages in a release pipeline, the variables from the variable group are scoped to these stages and are not accessible in the other stages of the same release.

> [!NOTE]
> Linking a variable group to a specific stage is available only on Azure Pipelines and on TFS 2018 Update 2 and later.

---

You access the value of the variables in a linked variable group in exactly
the same way as [variables you define within the pipeline itself](../release/variables.md#custom-variables).
For example, to access the value of a variable named **customer** in a variable group linked to the pipeline,
use `$(customer)` in a task parameter or a script. However, secret variables (encrypted variables and key vault variables) 
cannot be accessed directly in scripts - instead they must be passed as arguments to a task.

[!INCLUDE [variable-collision](../_shared/variable-collision.md)]

Any changes made centrally to a variable group, such as a change in the value of a variable or the addition of new variables,
will automatically be made available to all the definitions or stages to which the variable group is linked.

### Variable groups in a build or release

The recommended use of linking a variable group to a pipeline is when you
want to centrally control values for variables that are used
across multiple instances or releases of the pipeline.

* When a new instance of a build or release is created from a pipeline definition, the values of the variables from the linked variable group are copied to the build or release.
* To override the values of variables in the variable group you must create a variable with the same name within the build or release pipeline. A variable in the pipeline overrides a variable with the same name in the variable group.
* To override the values of variables in the variable group for only a specific release, you can edit the release and add new variables for just that release by using the same variable name as defined in the variable group.

::: moniker range="> tfs-2018"

* To override the values between releases from the pipeline, use variables with same name at queue time:
  - When you create the release, you can choose the variables you would like to set.
  - The value you set for a variable when the release is created is used only for that release.
  - This helps to avoid the multiple steps of create in draft, update the variables in draft, and trigger the release with the variable.

::: moniker-end

[!INCLUDE [rm-help-support-shared](../_shared/rm-help-support-shared.md)]
