---
title: Manage extension permissions - Azure DevOps
description: Grant users or groups permission for managing extensions for Azure DevOps.
ms.topic: how-to
ms.custom: engagement-fy23
ms.subservice: azure-devops-marketplace
ms.assetid: 5b0786ec-9f5e-419f-acef-c15d15985285
ms.author: chcomley
author: chcomley
ms.date: 03/03/2025
monikerRange: '<= azure-devops'
---

# Manage extension permissions

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

This article helps you understand how to grant and manage permissions for users or groups, enabling them to manage extensions effectively. By setting the appropriate permissions, you can maintain control over the extensions used within your organization and ensure compliance with your security policies.

## Prerequisites

::: moniker range="azure-devops"

| Category | Requirements |
|--------------|-------------|
|**Permissions**| Member of the Project Collection Administrators group. Organization owners are automatically members of this group. If you don't have permissions, you can [request extensions](./request-extensions.md) instead or [look up a project collection administrator](../organizations/security/look-up-project-collection-administrators.md).|
|**Extension sharing** | Private extensions [shared with your organization](../extend/publish/overview.md#share-your-extension).|

::: moniker-end

::: moniker range="< azure-devops"

| Category | Requirements |
|--------------|-------------|
|**Permissions**| Member of the Project Collection Administrators group or **Edit collection-level information** permissions. Organization owners are automatically members of this group.|
|**Extension sharing**| Private extensions [shared with your organization](../extend/publish/overview.md#share-your-extension).|

::: moniker-end

## Manage permissions

::: moniker range="azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).
2. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**.

    ![Screenshot showing highlighted Organization settings button.](../media/settings/open-admin-settings-vert.png)

3. Select **Extensions**.

    ![Screenshot showing Extension settings hub.](media/manage-permissions/extensions-settings.png)

4. Select **Security**.

    ![Extension security page](media/manage-permissions/extensions-security-button.png)

5. Add users or update permission settings.

    ![Extension security permission setting](media/manage-permissions/extensions-security.png)

::: moniker-end

::: moniker range="=azure-devops-2020"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../media/icons/gear-icon.png) **Admin settings**.

    ![Open Admin settings](../media/settings/open-admin-settings-server.png)

3. Select **Extensions**, and then select **Security**.

    ![Select Extensions, and then select Security.](media/select-extensions-and-security.png)

4. Add users or update permission settings.

    ![Extension security](media/manage-permissions/extensions-security.png)

::: moniker-end

By following these steps, you can effectively manage extension permissions within your Azure DevOps organization. This ensures that only authorized users can install, update, or remove extensions, maintaining the security and integrity of your development environment.

## Related articles

- [Install extensions](install-extension.md)
- [Request extensions](request-extensions.md)
- [Uninstall or disable extensions](install-extension.md#uninstall-an-extension)
- [About permissions](../organizations/security/about-permissions.md)
