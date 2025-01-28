---
title: Manage extension permissions - Azure DevOps
description: Grant users or groups permission for managing extensions for Azure DevOps.
ms.topic: how-to
ms.custom: engagement-fy23
ms.subservice: azure-devops-marketplace
ms.assetid: 5b0786ec-9f5e-419f-acef-c15d15985285
ms.author: chcomley
author: chcomley
ms.date: 10/12/2022
monikerRange: '<= azure-devops'
---

# Manage extension permissions

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Learn how to manage permissions for users or groups, so they can manage extensions.

## Prerequisites
::: moniker range="azure-devops"
- **Permissions:** Member of the Project Collection Administrators group. Organization owners are automatically members of this group.
- **Extension sharing:** Private extensions [shared with your organization](../extend/publish/overview.md#share-your-extension).
::: moniker-end

::: moniker range="< azure-devops"
- **Permissions:** Member of the Project Collection Administrators group or **Edit collection-level information** permissions. Organization owners are automatically members of this group.
- **Extension sharing:** Private extensions [shared with your organization](../extend/publish/overview.md#share-your-extension).
::: moniker-end

## Manage permissions

::: moniker range="azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../media/settings/open-admin-settings-vert.png)

3. Select **Extensions**.

    ![Extension settings hub](media/manage-permissions/extensions-settings.png)

4. Select **Security**.

    ![Extension security page](media/manage-permissions/extensions-security-button.png)

5. Add users or update permission settings.

    ![Extension security permission setting](media/manage-permissions/extensions-security.png)

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../media/icons/gear-icon.png) **Admin settings**.

    ![Open Admin settings](../media/settings/open-admin-settings-server.png)

3. Select **Extensions**, and then select **Security**.

    ![Select Extensions, and then select Security.](media/select-extensions-and-security.png)

4. Add users or update permission settings.

    ![Extension security](media/manage-permissions/extensions-security.png)

::: moniker-end



## Related articles

- [Install extensions](install-extension.md)
- [Request extensions](request-extensions.md)
- [Uninstall or disable extensions](install-extension.md#uninstall-an-extension)
- [About permissions](../organizations/security/about-permissions.md)
