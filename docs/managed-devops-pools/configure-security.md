---
title: Configure security
description: Learn how to configure security settings for Managed DevOps Pools.
ms.date: 04/23/2025
---

# Configure Managed DevOps Pools security settings

You can configure security setting for Managed DevOps Pools during pool creation by using the **Security** tab, and after pool creation by using the **Security** settings pane.

## Configure organization access

Be default, Managed DevOps Pools are configured for a single organization, with access to the pool granted to all projects in the organization. You can optionally limit access to specific projects in the organization, and you can grant access to additional organizations if desired.

* [Use pool with a single organization](#use-pool-with-a-single-organization)
* [Use pool in multiple organizations](#use-pool-in-multiple-organizations)

### Use pool with a single organization

#### [Azure portal](#tab/azure-portal/)

By default, Managed DevOps Pools is configured for use with a single Azure DevOps organization that you specify when you create the pool. When your pool is configured for a single organization, the organization name is displayed and configured in Pool settings

By default, **Add pool to all projects** is set to **Yes**, and access to the Managed DevOps Pool is granted to all projects in the organization. Choose **No** to specify a list of projects to limit which projects in your organization can use the pool.

:::image type="content" source="./media/configure-security/single-organization-projects.png" alt-text="Screenshot of configuring projects for a single organization.":::

#### [ARM template](#tab/arm/)

Organizations are configured in the `organizationProfile` property of the Managed DevOps Pools resource.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2025-01-21",
            "location": "eastus",
            "properties": {
            ...
            "organizationProfile": {
                "organizations": [
                    {
                        "url": "https://dev.azure.com/fabrikam-tailspin",
                        "projects": [],
                        "parallelism": 4
                    }
                ],
                "permissionProfile": {
                    "kind": "CreatorOnly"
                },
                "kind": "AzureDevOps"
            }
        }
    ]
}
```

The `organizationProfile` section has the following properties.

| Property | Description |
|------|-------------|
| `organizations` | A list of the organizations that can use your pool. `url` specifies the URL of the organization, `projects` is a list of project names that can use the pool (an empty list supports all projects in the organization), and `parallelism` specifies the number of agents that can be used by this organization. The sum of the parallelism for the organizations must match the maximum agents setting for the pool. |
| `permissionProfile` | Specify the permission granted to the Azure DevOps pool when it is created. This value can be set during pool creation only. Allowed values are `Inherit`, `CreatorOnly`, and `SpecificAccounts`. If `specificAccounts` is specified, provide a single email address or a list of email addresses for the `users` property; otherwise omit `users`. For more information, see [Pool administration permissions](./configure-security.md#pool-administration-permissions). |
| `kind` | This value specifies the type of organization for the pool, and must be set to `Azure DevOps`. |

#### [Azure CLI](#tab/azure-cli/)

Organizations are configured in the `organization-profile` parameter when [creating](/cli/azure/mdp/pool#az-mdp-pool-create) or [updating](/cli/azure/mdp/pool#az-mdp-pool-update) a pool.

```azurecli
az mdp pool create \
   --organization-profile organization-profile.json
   # other parameters omitted for space
```

The following example shows an `organization-profile` object that is configured for all projects in the `fabrikam-tailspin` organization with `parallelism` set to `1`.

```json
{
  "AzureDevOps":
  {
      "organizations": [
      {
          "url": "https://dev.azure.com/fabrikam-tailspin",
          "projects": [],
          "parallelism": 1
      }
    ]
  }
}
```

The `organizationProfile` section has the following properties.

| Property | Description |
|------|-------------|
| `AzureDevOps` | This value is the name of the object defined in `organization-profile` and must be set to `Azure DevOps`. |
| `organizations` | A list of the organizations that can use your pool. `openAccess` specifies whether Managed DevOps Pools configures [Open access](../pipelines/policies/permissions.md#set-pipeline-permissions-for-an-individual-agent-pool) for the pool during pool creation, `url` specifies the URL of the organization, `projects` is a list of project names that can use the pool (an empty list supports all projects in the organization), and `parallelism` specifies the number of agents that can be used by this organization. The sum of the parallelism for the organizations must match the maximum agents setting for the pool. |
| `permissionProfile` | Specify the permission granted to the Azure DevOps pool when it is created. This value can be set during pool creation only. Allowed values are `Inherit`, `CreatorOnly`, and `SpecificAccounts`. If `specificAccounts` is specified, provide a single email address or a list of email addresses for the `users` property; otherwise omit `users`. For more information, see [Pool administration permissions](./configure-security.md#pool-administration-permissions). |

* * *

### Use pool in multiple organizations

#### [Azure portal](#tab/azure-portal/)

Enable **Use pool in multiple organizations** to use your pool with multiple Azure DevOps organizations. For each organization, specify the projects that are permitted to use the pool, or leave blank to allow all projects. Configure the **Parallelism** for each organization by specifying what portions of the concurrency, as specified by **Maximum agents** for the pool, to allocate to each organization. The sum of the parallelism for all organizations must equal the maximum concurrency of the pool. For example, if **Maximum agents** is set to five, the sum of the parallelism for the specified organizations must be five. If **Maximum agents** is set to one, you can only use the pool with one organization.

In the following example, the pool is configured to be available for the **FabrikamResearch** and **FabrikamTest** projects in the **fabrikam-tailspin** organization, and to all projects in the **fabrikam-blue** organization.

:::image type="content" source="./media/configure-security/use-pool-multiple-organizations.png" alt-text="Screenshot of configuring multiple organizations.":::

If you receive an error like `The sum of parallelism for all organizations must equal the max concurrency.`, ensure that the [Maximum agents](./configure-pool-settings.md#maximum-agents) count for the pool matches the sum of the **Parallelism** column.

#### [ARM template](#tab/arm/)

Add additional organizations to the organizations list to configure your pool for use with multiple organizations. The following example has two organizations configured. The first organization is configured to use Managed DevOps Pools for all projects, and the second organizations is limited to two projects. In this example, the maximum agents setting for the pool is four, and each organization can use two of these four agents.

```json
"organizationProfile": {
    "organizations": [
        {
            "url": "https://dev.azure.com/fabrikam-tailspin",
            "projects": [],
            "parallelism": 2
        },
        {
            "url": "https://dev.azure.com/fabrikam-prime",
            "projects": [ "fabrikam-dev", "fabrikam-test" ],
            "parallelism": 2
        }
    ],
    "permissionProfile": {
        "kind": "CreatorOnly"
    },
    "kind": "AzureDevOps"
}
```

#### [Azure CLI](#tab/azure-cli/)

Organizations are configured in the `organization-profile` parameter when [creating](/cli/azure/mdp/pool#az-mdp-pool-create) or [updating](/cli/azure/mdp/pool#az-mdp-pool-update) a pool.

```azurecli
az mdp pool create \
   --organization-profile organization-profile.json
   # other parameters omitted for space
```

Add additional organizations to the organizations list to configure your pool for use with multiple organizations. The following example has two organizations configured. The first organization is configured to use Managed DevOps Pools for all projects, and the second organizations is limited to two projects. In this example, the maximum agents setting for the pool is four, and each organization can use two of these four agents.

```json
{
  "AzureDevOps":
  {
      "organizations": [
        {
            "url": "https://dev.azure.com/fabrikam-tailspin",
            "projects": [],
            "parallelism": 2
        },
        {
            "url": "https://dev.azure.com/fabrikam-prime",
            "projects": [ "fabrikam-dev", "fabrikam-test" ],
            "parallelism": 2
        }
    ]
  }
}
```

* * *

## Allow all pipelines to run on the pool without an approval (open access)

By default, each pipeline definition must be explictly authorized to run in a self-hosted agent pool (like a Managed DevOps Pool) before it is run for the first time in that pool. 

Azure DevOps provides a [Pipeline permissions](../pipelines/policies/permissions.md#set-pipeline-permissions-for-an-individual-agent-pool) project level agent pool setting to authorize specific pipelines from that project to run in that pool, or to configure the pool for **Open access** to be available for all pipelines in that project.

Managed DevOps Pools can configure the **Open access** setting on your behalf when creating the Managed DevOps Pool if you enable **Allow all pipelines to run on the pool without an approval (open access)** during pool creation.

> [!NOTE]
> The **Allow all pipelines to run on the pool without an approval (open access)** setting can be configured by Managed DevOps Pools only when the pool is created. After the Managed DevOps Pool is created, you can view and configure [Open access](../pipelines/policies/permissions.md#set-pipeline-permissions-for-an-individual-agent-pool) on the corresponding [agent pool](../pipelines/agents/pools-queues.md) in Azure DevOps for each project that uses the pool.

#### [Azure portal](#tab/azure-portal/)

> [!NOTE]
> The [Open access](/azure/templates/microsoft.devopsinfrastructure/pools#organizationprofile-objects-1) setting is present in `api-version 2025-01-21` and higher.

Enable **Allow all pipelines to run on the pool without an approval (open access)** to configure access to the Managed DevOps Pool from all pipelines in the designated projects.

:::image type="content" source="./media/configure-security/open-access.png" alt-text="Screenshot of configuring open access.":::

* If **Add pool to all projects** is set to **Yes**, Managed DevOps Pools configures Open access for all pipelines in all projects.
* If **Add pool to all projects** is set to **No**, Managed DevOps Pools configures Open access for all pipelines only in the listed projects.

If you enable **Use pool in multiple organizations**, you can specify **Open access** individually for each organization.

:::image type="content" source="./media/configure-security/open-access-multiple-organizations.png" alt-text="Screenshot of configuring open access for multiple organizations.":::

#### [ARM template](#tab/arm/)

Organizations are configured in the `organizationProfile` property of the Managed DevOps Pools resource. The following example has two organizations configured.

* The `fabrikam-tailspin` organization is configured with **Open access** on all projects.
* The `fabrikam-prime` organization is configured for availibility with two projects, with **Open access** enabled, only on these two projects.

```json
"organizationProfile": {
    "organizations": [
        {
            "url": "https://dev.azure.com/fabrikam-tailspin",
            "projects": [],
            "openAccess": true,
            "parallelism": 2
        },
        {
            "url": "https://dev.azure.com/fabrikam-prime",
            "projects": [ "fabrikam-dev", "fabrikam-test" ],
            "openAccess": true,
            "parallelism": 2
        }
    ],
    "permissionProfile": {
        "kind": "CreatorOnly"
    },
    "kind": "AzureDevOps"
}
```

> [!IMPORTANT]
> **Open access** is configured only during Managed DevOps Pool creation. To change the Open access setting after pool creation (including adding or removing projects from your Managed DevOps Pool configuration), you must manually configure [Open access](../pipelines/policies/permissions.md#set-pipeline-permissions-for-an-individual-agent-pool) on the corresponding [agent pool](../pipelines/agents/pools-queues.md) in Azure DevOps for each project that uses the pool.

#### [Azure CLI](#tab/azure-cli/)

TODO

* * *

If you try to run a pipeline that is not authorized to access your agent pool, you'll receive an error similar to `This pipeline needs permission to access a resource before this run can continue`. There are two ways to explictly authorize a pipeline to run in a pool (in addition to confguring **Open access**).

* You can go to the **Security** settings for the agent pool in your Azure DevOps organization and add the pipeline in [Pipeline permissions](../pipelines/agents/pools-queues.md#pipeline-permissions).
* If you don't add the pipeline, you will be [prompted in Azure DevOps the first time you run the pipeline](../pipelines/troubleshooting/troubleshooting.md#this-pipeline-needs-permission-to-access-a-resource-before-this-run-can-continue). When you authorize the pipeline, it will be added to the **Pipeline permissions** list.

## Configure interactive mode

If your tests need an interactive login for UI testing, enable interactive login by enabling the **EnableInteractiveMode** setting.

#### [Azure portal](#tab/azure-portal/)

:::image type="content" source="./media/configure-security/interactive-mode.png" alt-text="Screenshot of configuring interactive mode.":::

#### [ARM template](#tab/arm/)

Interactive mode is configured in the `osProfile` section of the `fabricProfile` property. Set `logonType` to `Interactive` to enable interactive mode, or `Service` to disable interactive mode.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2025-01-21",
            "location": "eastus",
            "properties": {
            ...
            "fabricProfile": {
                "sku": {...},
                "images": [...],
                "osProfile": {
                    "secretsManagementSettings": {...},
                    "logonType": "Interactive"
                },
                "storageProfile": {...},
                "kind": "Vmss"
            }
        }
    ]
}
```

#### [Azure CLI](#tab/azure-cli/)

Interactive mode is configured using the `logonType` property in the `osProfile` section in the `fabric-profile` parameter when [creating](/cli/azure/mdp/pool#az-mdp-pool-create) or [updating](/cli/azure/mdp/pool#az-mdp-pool-update) a pool.

```azurecli
az mdp pool create \
   --fabric-profile fabric-profile.json
   # other parameters omitted for space
```

The following example shows the `osProfile` section of the **fabric-profile.json** file with `Interactive` mode enabled.

```json
{
  "vmss": {
    "sku": {...},
    "images": [...],
    "osProfile": {
      "secretsManagementSettings": {...},
      "logonType": "Interactive"
    },
    "storageProfile": {...}
  }
}
```

* * *

## Pool administration permissions

As part of the Managed DevOps Pool creation process, an organization level agent pool is created in Azure DevOps. The **Pool administration permissions** setting specifies which users are granted the administrator role of the newly created Azure DevOps pool. To view and manage the Azure DevOps agent pool permissions after the Managed DevOps Pool is created, see [Create and manage agent pools - Security of agent pools](/azure/devops/pipelines/agents/pools-queues#security).

#### [Azure portal](#tab/azure-portal/)

:::image type="content" source="./media/configure-security/pool-admin-permissions.png" alt-text="Screenshot of configuring pool administration permissions.":::

* **Creator only** - The user that created the Managed DevOps Pool is added as an administrator of the Azure DevOps agent pool, and **Inheritance** is set to **Off** in the agent pool security settings. **Creator only** is the default setting.
* **Inherit permissions from project** - The user that created the Managed DevOps Pool is added as an administrator of the Azure DevOps agent pool, and **Inheritance** is set to **On** in the agent pool security settings.
* **Specific accounts** - Specify the accounts to be added as administrators of the created agent pool in Azure DevOps. By default the Managed DevOps Pool creator is added to the list.

> [!NOTE]
> The **Pool administration permissions** setting is configured on the **Security** tab when the pool is created, and is not displayed in the **Security** settings after the pool is created. To view and manage the Azure DevOps agent pool permissions after the Managed DevOps Pool is created, see [Create and manage agent pools - Security of agent pools](/azure/devops/pipelines/agents/pools-queues#security).

#### [ARM template](#tab/arm/)

Pool administration permissions are configured in the `permissionsProfile` property of the `organizationProfile` section of the Managed DevOps Pools resource.

```json
{
"organizationProfile": {
    "organizations": [...],
    "permissionProfile": {
        "kind": "CreatorOnly"
    },
    "kind": "AzureDevOps"
}
```

The `permissionProfile` property can be set during pool creation only. Allowed values are `Inherit`, `CreatorOnly`, and `SpecificAccounts`. 

* `CreatorOnly` - The user that created the Managed DevOps Pool is added as an administrator of the Azure DevOps agent pool, and **Inheritance** is set to **Off** in the agent pool security settings. **Creator only** is the default setting.
* `Inherit` - The user that created the Managed DevOps Pool is added as an administrator of the Azure DevOps agent pool, and **Inheritance** is set to **On** in the agent pool security settings.
* `SpecificAccounts` - Specify the accounts to be added as administrators of the created agent pool in Azure DevOps. By default the Managed DevOps Pool creator is added to the list. Provide a single email address or a list of email addresses for the `users` property; otherwise omit `users`. 

   ```json
   {
   "organizationProfile": {
       "organizations": [...],
       "permissionProfile": {
           "kind": "SpecificAccounts",
           "users" : ["User1@fabrikam.com", "User2@fabrikam.com" ]
       },
       "kind": "AzureDevOps"
    }
   ```

#### [Azure CLI](#tab/azure-cli/)

Pool administration permissions are configured in the `organization-profile` parameter when [creating](/cli/azure/mdp/pool#az-mdp-pool-create)a pool.

```azurecli
az mdp pool create \
   --organization-profile organization-profile.json
   # other parameters omitted for space
```

```json
{
  "AzureDevOps":
  {
    "organizations":  [...],
    "permissionProfile": {
        "kind": "CreatorOnly"
    }
  }
}
```

The `permissionProfile` property can be set during pool creation only. Allowed values are `Inherit`, `CreatorOnly`, and `SpecificAccounts`. 

* `CreatorOnly` - The user that created the Managed DevOps Pool is added as an administrator of the Azure DevOps agent pool, and **Inheritance** is set to **Off** in the agent pool security settings. **Creator only** is the default setting.
* `Inherit` - The user that created the Managed DevOps Pool is added as an administrator of the Azure DevOps agent pool, and **Inheritance** is set to **On** in the agent pool security settings.
* `SpecificAccounts` - Specify the accounts to be added as administrators of the created agent pool in Azure DevOps. By default the Managed DevOps Pool creator is added to the list. Provide a single email address or a list of email addresses for the `users` property; otherwise omit `users`. 

   ```json
    {
        "AzureDevOps" : {
            "organizationProfile": {
            "organizations": [...],
            "permissionProfile": {
            "kind": "SpecificAccounts",
            "users" : ["User1@fabrikam.com", "User2@fabrikam.com" ]
            }
        }
    }
   ```

* * *

## Key Vault configuration

Managed DevOps Pools offers the ability to fetch certificates from an Azure Key Vault during provisioning, which means the certificates will already exist on the machine by the time it runs your Azure DevOps pipelines. To use this feature, you must configure an [identity on your pool](configure-identity.md), and this identity must have **Key Vault Secrets User** permissions to fetch the secret from your Key Vault. To assign your identity to the **Key Vault Secrets User** role, see [Provide access to Key Vault keys, certificates, and secrets with an Azure role-based access control](/azure/key-vault/general/rbac-guide).

> [!NOTE]
> As of `api-version 2025-01-21`, if you use this feature you can only use a single identity on the pool. Support for multiple identities will be added soon.
> 
> Only one identity can be used to fetch secrets from the Key Vault.

#### [Azure portal](#tab/azure-portal/)

Key Vault integration is configured in **Settings > Security**.

:::image type="content" source="./media/configure-security/configure-keyvault.png" alt-text="Screenshot of configuring Key Vault certificates.":::

> [!NOTE]
> Key Vault integration settings can be configured only after the pool is created. Key Vault integration settings can't be configured during pool creation and are not displayed in the **Security** tab during pool creation.

#### [ARM template](#tab/arm/)

Azure Key Vault is configured in the `osProfile` section of the `fabricProfile` property. Set the `secretManagementSettings` to be able to access the desired certificate.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2025-01-21",
            "location": "eastus",
            "properties": {
            ...
            "fabricProfile": {
                "sku": {...},
                "images": [...],
                "osProfile": {
                    "secretsManagementSettings": {
                        "certificateStoreLocation": "LocalMachine",
                        "observedCertificates": [
                            "https://<keyvault-uri>/secrets/<certificate-name>"
                        ],
                        "keyExportable": false
                    }
                },
                "storageProfile": {...},
                "kind": "Vmss"
            }
        }
    ]
}
```

#### [Azure CLI](#tab/azure-cli/)

Azure Key Vault is configured in the `osProfile` section of the `fabricProfile` property when [creating](/cli/azure/mdp/pool#az-mdp-pool-create) or [updating](/cli/azure/mdp/pool#az-mdp-pool-update) a pool. Set the `secretManagementSettings` to be able to access the desired certificate.

```azurecli
az mdp pool create \
   --fabric-profile fabric-profile.json
   # other parameters omitted for space
```

The following example shows the `osProfile` section of the **fabric-profile.json** file with `secretsManagementSettings`configured.

```json
{
  "vmss": {
    "sku": {...},
    "images": [...],
    "osProfile": {
      "secretsManagementSettings": {
          "certificateStoreLocation": "LocalMachine",
          "observedCertificates": [
              "https://<keyvault-uri>/secrets/<certificate-name>"
          ],
          "keyExportable": false
      },
      "logonType": "Interactive"
    },
    "storageProfile": {...}
  }
}
```

* * *

### Configuring SecretManagementSettings

Certificates retrieved using the `SecretManagementSettings` on your pool will automatically sync with the most recent versions published within the Key Vault. These secrets will be on the machine by the time it runs any Azure DevOps pipeline, meaning you can save time and remove tasks for fetching certificates.

> [!IMPORTANT]
> Provisioning of your agent virtual machines will fail if the secret cannot be fetched from the Key Vault due to a permissions or network issue.

#### [Windows](#tab/windows/)

For Windows, the Certificate Store Location is allowed to either be set to `LocalMachine` or `CurrentUser`. This setting will ensure that the secret is installed at that location on the machine. For specific behavior of how secret retrieval works, see [the documentation for the Azure VMSS Key Vault extension for Windows](/azure/virtual-machines/extensions/key-vault-windows).

#### [Linux](#tab/linux/)

For Linux, the Certificate Store Location can be any directory on the machine, and the certificates will be downloaded and synced to that location. For specifics on default settings and secret behavior, see [the documentation for the Azure VMSS Key Vault extension for Linux](/azure/virtual-machines/extensions/key-vault-linux).

* * *


## See also

* [Configure pool settings](./configure-pool-settings.md)
