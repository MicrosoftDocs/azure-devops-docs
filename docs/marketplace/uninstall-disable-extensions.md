---
title: Uninstall disable extensions in Azure DevOps
titleSuffix: Azure DevOps
description: Uninstall, disable, or remove extensions for Azure DevOps
ms.topic: conceptual
ms.technology: devops-marketplace
ms.assetid: fa4924f0-6013-4911-b0d5-04717ecfde0f
ms.author: chcomley
author: chcomley
ms.date: 07/23/2020
monikerRange: '>= tfs-2015'
---
 
# Uninstall or disable extensions

[!INCLUDE [version-ts-tfs-2015-2016](../includes/version-ts-tfs-2015-2016.md)]

Learn how to uninstall or disable an extension that you don't need.

## Prerequisites

You must be a [Project Collection Administrator](../organizations/security/set-project-collection-level-permissions.md) with [**Edit collection-level information** permissions](../organizations/security/permissions.md#collection) to uninstall or disable extensions.

::: moniker range="azure-devops"

## Uninstall or disable extensions in Azure DevOps Services

#### [Browser](#tab/browser)

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](../media/settings/open-admin-settings-vert.png)

3. Select **Extensions**, and then select the extension that you want to uninstall or disable.

   ![Select uninstall or disable for extension](media/org-settings-select-extension.png)

4. Select **Uninstall** or select the ellipses (**...**), and then select **Disable**.

   ![Disable or uninstall extension](media/disable-or-uninstall-extension.png)

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

[Uninstall extension](#uninstall-extension) | [Disable extension](#disable-extension) 

<a id="uninstall-extension" />

### Uninstall an extension

You can uninstall an extension with the [az devops extension uninstall](/cli/azure/devops/extension#ext-azure-devops-az-devops-extension-uninstall) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli 
az devops extension uninstall --extension-name
                              --publisher-name
                              [--org]
                              [--yes]
``` 

#### Parameters - uninstall extension

- **extension-name**: The name of the extension to uninstall.
- **publisher-name**: The name of the extension publisher.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **yes**: Optional. Don't prompt for confirmation.

#### Example - uninstall extension

The following command uninstalls the **Timetracker** extension without prompting for confirmation.  

```azurecli
az devops extension uninstall --extension-name Timetracker --publisher-name 7pace --yes
```
<a id="disable-extension" /> 

### Disable an extension

You can disable an extension with the [az devops extension disable](/cli/azure/devops/extension#ext-azure-devops-az-devops-extension-disable) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli 
az devops extension disable --extension-name
                            --publisher-name
                            [--org]
``` 

#### Parameters - disable extension

- **extension-name**: The name of the extension to disable.
- **publisher-name**: The name of the extension publisher.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.

#### Example - disable extension

The following command disables the **Timetracker** extension and shows the result in table format.  

```azurecli
az devops extension disable --extension-name Timetracker --publisher-name 7pace --output table

Publisher Id    Extension Id    Name         Version      Last Updated     States
--------------  --------------  -----------  -----------  ---------------  --------
7pace           Timetracker     Timetracker  5.0.1.34507  2019-11-13       disabled
```

[!INCLUDE [temp](../includes/note-cli-not-supported.md)] 

* * *

::: moniker-end

::: moniker range=">= tfs-2015 < azure-devops"

## Uninstall extensions from the local gallery in TFS or Azure DevOps Server

1. Go to the local gallery management portal (```http://{server}/_gallery/manage```).

2. For the wanted extension, select the ellipses (**...**), and then select **Remove**.

   ![Remove extension](media/remove-extension-TFS.png)

::: moniker-end

::: moniker range=">= tfs-2015 < azure-devops"

## Uninstall extensions in a collection

1. Go to the local gallery management portal (```http://{server}:8080/tfs/_gallery/manage```).

2. For the wanted extension, select the ellipses (**...**), and then select **Remove**.

   ![Remove extension](media/remove-extension-TFS.png)

::: moniker-end

::: moniker range="azure-devops"

## Enable an extension

You can enable an extension with the [az devops extension enable](/cli/azure/devops/extension#ext-azure-devops-az-devops-extension-enable) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli 
az devops extension enable --extension-name
                           --publisher-name
                           [--org]
``` 

### Parameters - enable extension

- **extension-name**: The name of the extension to enable.
- **publisher-name**: The name of the extension publisher.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.

### Example - enable extension

The following command enables the **Timetracker** extension and shows the result in table format.  

```azurecli 
az devops extension enable --extension-name Timetracker --publisher-name 7pace --output table

Publisher Id    Extension Id    Name         Version      Last Updated     States
--------------  --------------  -----------  -----------  ---------------  --------
7pace           Timetracker     Timetracker  5.0.1.34507  2019-11-13       none
```

## List extensions

You can list the extensions that are installed in your organization with the [az devops extension list](/cli/azure/devops/extension#ext-azure-devops-az-devops-extension-list) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli
az devops extension list [--include-built-in {false, true}]
                         [--include-disabled {false, true}]
                         [--org]
``` 

### Optional parameters - list extensions

- **include-built-in**: Include the built-in extensions. Accepted values are *true* (default) and *false*.
- **include-disabled**: Include the disabled extensions. Accepted values are *true* (default) and *false*.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.

### Example - list extensions

The following command lists extensions in your organization. It excludes the **disabled** and **built-in** extensions, and shows the results in table format.

```azurecli 
az devops extension list --include-built-in false --include-disabled false -output table

Publisher Id    Extension Id             Name                     Version              Last Updated     States         		 Flags
--------------  -----------------------  -----------------------  -------------------  ---------------  -----------------------  -------
ms              vss-analytics            Analytics                18.160.0.2130149925  2019-11-22       multiVersion, truste...  trusted
ms              vss-code-search          Code Search              18.160.0.1640944814  2019-11-22       multiVersion, truste...  trusted
ms              vss-plans                Delivery Plans           18.160.0.1266795967  2019-11-25       multiVersion, truste...  trusted
ms-eswm         dependencytracker        Dependency Tracker       2.1910.12801         2019-10-28       none
ms-devlabs      workitem-feature-tim...  Feature timeline and...  0.0.357              2019-10-14       none
AgileParts      gantt                    GANTT chart              1.0.79               2019-10-25       none
gordon-bee...   github                   GitHub Widget            0.10.0               2016-03-16       none
ms-devlabs      vsts-extensions-mult...  Multivalue control       2.2.26               2019-11-15       none
agile-exte...   product-vision           Product Vision           2.0.6                2019-06-04       none
mohitbagra      related-workitems        Related Work items       2.0.4                2017-11-12       none
YodLabs         TagsManager2             Tags Manager             0.9.31               2019-02-04       none
ms-devlabs      team-calendar            Team Calendar            2.0.15               2019-11-01       none
ms              vss-testmanager-web      Test Manager for TFS...  18.160.0.2130893445  2019-11-25       multiVersion, truste...  trusted
mmanela         vsts-workitem-recent...  Who recently viewed ...  1.0.4                2019-03-22       none
ottostreif...   wiql-editor              Wiql Editor              2.0.90               2019-06-21       none
mohitbagra      workitem-checklist       Work item checklist      3.2.4                2019-06-24       none
mohitbagra      witoneclickactions       Work item form one c...  2.3.2                2018-04-03       none
ms-devlabs      WorkItemVisualizatio...  Work Item Visualizat...  1.4.64               2018-04-03       none
``` 

## List extension information

You can list the details about an extension with the [az devops extension show](/cli/azure/devops/extension#ext-azure-devops-az-devops-extension-show) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli 
az devops extension show --extension-name
                         --publisher-name
                         [--org]
```

### Parameters - list extension information

- **extension-name**: The name of the extension.
- **publisher-name**: The name of the extension publisher.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.

### Example - list extension information

The following command shows information about the **Timetracker** extension in table format.  

```azurecli 
az devops extension show --extension-name Timetracker --publisher-name 7pace --output table

Publisher Id    Extension Id    Name         Version      Last Updated     States
--------------  --------------  -----------  -----------  ---------------  --------
7pace           Timetracker     Timetracker  5.0.1.34507  2019-11-13       disabled
```

::: moniker-end

## Related articles

- [Install extensions](install-extension.md)
- [Request extensions](request-extensions.md)
- [Manage extension permissions](how-to/grant-permissions.md)
