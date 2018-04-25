---
title: Grant permissions for managing extensions in Visual Studio Team Foundation Server (TFS)
description: Grant users or groups permission to manage extensions for Team Foundation Server
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-marketplace
ms.assetid: 5b0786ec-9f5e-419f-acef-c15d15985285
ms.manager: douge
ms.author: elbatk
ms.date: 9/27/2017
monikerRange: '>= tfs-2013'
---

 

# Grant permissions to manage extensions

**VSTS** | **TFS** 

::: moniker range="vsts"

## Grant management permissions 

To grant permissions to manage extensions (install, disable/enable, review and approve extension requests) for an on-prem collection or Visual Studio Team Services (VSTS) account, go to the collection/account level Extension settings hub:

![Extension settings hub](../_img/manage-permissions/extensions-settings.png)

Click **Security** in the upper right of the Extension Security page:

![Extension security button](../_img/manage-permissions/extensions-security-button.png)

Add users or update permission settings:

![Extension security](../_img/manage-permissions/extensions-security.png)

::: moniker-end

::: moniker range=">=tfs-2013 < vsts"

## Grant publish and update permissions on TFS

To grant permissions for publishing or updating to users or groups, use [TFSSecurity](../../tfs-server/command-line/tfssecurity-cmd.md#permissions) command-line tool.

0.	At the server level, create a group, for example, "TFS Extension Publishers":

    ```
    tfssecurity /gcg "TFS Extension Publishers" "publishers who can manage extensions for the server" /server:ServerURL
    ```

0. 	Grant access to the "TFS Extension Publishers" group to manage extensions:

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

0. Add existing users and groups to the "TFS Extension Publishers" group.

    ```
    tfssecurity /g+ "[TEAM FOUNDATION]\TFS Extension Publishers" n:User /server:ServerURL
    ```

You can add users later to "TFS Extension Publishers". This is a server-level permission, 
so updating and deleting an extension will affect all the team project collections that use the extension.

::: moniker-end
