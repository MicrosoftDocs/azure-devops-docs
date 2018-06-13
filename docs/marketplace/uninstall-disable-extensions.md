---
title: Uninstall or disable extensions in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)
description: Uninstall or disable extensions for Visual Studio Team Services or Team Foundation Server
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: fa4924f0-6013-4911-b0d5-04717ecfde0f
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 12/04/2017
monikerRange: '>= tfs-2013'
---

 

# Uninstall or disable extensions

**VSTS** | **TFS** 

When you don't need an extension anymore, you can uninstall or disable this extension.

> **Charges will continue for a paid extension until you [reduce all users to zero (0) for this extension](./how-to/change-paid-extension-users.md)**. 

Only [Project collection administrators](../organizations/security/set-project-collection-level-permissions.md) with [**Edit collection-level information** permissions](../organizations/security/permissions.md#collection) can uninstall or disable extensions. 


0. Go to your VSTS or TFS home page, then go to your team project:
    * VSTS: ```https://{account-name}.visualstudio.com/{team-project}```
    * TFS: ```https://{server}:8080/tfs/{team-project-collection}/{team-project}```

0. Manage your extensions:

    ![Manage extensions](_img/manage-extensions-vsts.png)

0. You can right click or click on the ellipses (...) on the extension and choose uninstall or disable.

    ![Uninstall or disable extensions](_img/disable-uninstall-extension.png)
