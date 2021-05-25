---
title: Manage extension permissions - Azure DevOps
description: Grant users or groups permission for managing extensions for Azure DevOps
ms.topic: conceptual
ms.technology: devops-marketplace
ms.assetid: 5b0786ec-9f5e-419f-acef-c15d15985285
ms.author: chcomley
author: chcomley
ms.date: 07/23/2020
monikerRange: '>= tfs-2015'
---

# Manage extension permissions

[!INCLUDE [version-ts-tfs-2015-2016](../../includes/version-ts-tfs-2015-2016.md)]

::: moniker range="azure-devops"

Learn how to grant permissions to users or groups for managing extensions. Extension management tasks include installing, disabling, enabling, reviewing, and approving extensions.

::: moniker-end

::: moniker range=">=tfs-2015 < azure-devops"

Learn how to grant permissions for publishing or updating extensions for users or groups.

::: moniker-end

::: moniker range="azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../../media/settings/open-admin-settings-vert.png)

3. Select **Extensions**.

    ![Extension settings hub](../media/manage-permissions/extensions-settings.png)

4. Select **Security** in the upper right of the Extension Security page:

    ![Extension security page](../media/manage-permissions/extensions-security-button.png)

5. Add users or update permission settings:

    ![Extension security permission setting](../media/manage-permissions/extensions-security.png)

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Admin settings**.

    ![Open Admin settings](../../media/settings/open-admin-settings-server.png)

3. Select **Extensions**, and then select **Security**.

    ![Select Extensions, and then select Security.](../media/select-extensions-and-security.png)

4. Add users or update permission settings:

    ![Extension security](../media/manage-permissions/extensions-security.png)

::: moniker-end

::: moniker range=">=tfs-2015 <= tfs-2018"

To grant permissions for publishing or updating to users or groups, use [TFSSecurity](/azure/devops/server/command-line/tfssecurity-cmd#permissions) command-line tool.

1. At the server level, create a group, for example, "TFS Extension Publishers":

   ```
   tfssecurity /gcg "TFS Extension Publishers" "publishers who can manage extensions for the server" /server:ServerURL
   ```

2. Grant access to the "TFS Extension Publishers" group to manage extensions:

   ```
   tfssecurity /a+ Publisher "//" CreatePublisher n:"[TEAM FOUNDATION]\TFS Extension Publishers" allow /server:ServerURL
   tfssecurity /a+ Publisher "//" PublishExtension n:"[TEAM FOUNDATION]\TFS Extension Publishers" allow /server:ServerURL
   tfssecurity /a+ Publisher "//" UpdateExtension n:"[TEAM FOUNDATION]\TFS Extension Publishers" allow /server:ServerURL
   tfssecurity /a+ Publisher "//" DeleteExtension n:"[TEAM FOUNDATION]\TFS Extension Publishers" allow /server:ServerURL
   ```

   For Team Foundation Server "15" RC2 or earlier, use this syntax:

   ```
   tfssecurity /a+ Publisher "//" Create n:"[TEAM FOUNDATION]\TFS Extension Publishers" allow /server:ServerURL
   tfssecurity /a+ Publisher "//" Publish n:"[TEAM FOUNDATION]\TFS Extension Publishers" allow /server:ServerURL
   tfssecurity /a+ Publisher "//" Write n:"[TEAM FOUNDATION]\TFS Extension Publishers" allow /server:ServerURL
   ```

3. Add existing users and groups to the "TFS Extension Publishers" group.

    ```
    tfssecurity /g+ "[TEAM FOUNDATION]\TFS Extension Publishers" n:User /server:ServerURL
    ```

You can add users later to "TFS Extension Publishers". This permission is a server-level permission, 
so updating and deleting an extension affects all the project collections that use the extension.

::: moniker-end

## Related articles

- [Install extensions](../install-extension.md)
- [Request extensions](../request-extensions.md)
- [About permissions](../../organizations/security/about-permissions.md)
