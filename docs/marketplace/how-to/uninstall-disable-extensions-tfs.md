---
title: Uninstall or disable extensions in Visual Studio Team Foundation Server (TFS)
description: Uninstall or disable extensions for Team Foundation Server
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: ef7ce82f-ca09-4804-8698-2820ddaec1b8
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 06/19/2019
ms.topic: conceptual
monikerRange: '>= tfs-2015 <= tfs-2018'
---

# Uninstall or disable extensions in Team Foundation Server

[!INCLUDE [version-tfs-2018-earlier](../../_shared/version-tfs-2018-earlier.md)]

When you don't need an extension anymore, you can uninstall or disable it.

> [!NOTE]
> Charges continue for a paid extension until you [reduce all users to zero (0) for this extension](./change-paid-extension-users.md). 

## Who can uninstall or disable extensions?

[Project collection administrators](../../organizations/security/set-project-collection-level-permissions.md) 
with [**Edit collection-level information** permissions](../../organizations/security/permissions.md#collection) 
can uninstall or disable extensions. 

1. From your TFS home page (```https://{server}:8080/tfs/```), go to the project collection where you want to uninstall or disable the extension.

2. Select **Manage extensions**.

   **TFS 2015 Update 3**

   <img alt="Manage extensions" src="../_shared/_img/manage-extensions.png" style="border: 1px solid #CCCCCC" />
	
   **TFS 2017**

   <img alt="Manage extensions" src="../_shared/_img/manage-extensions2-new.png" style="border: 1px solid #CCCCCC" />

3. On the extensions tab, select the extension, and then uninstall or disable it.

	<img alt="Uninstall or disable an extension" src="../_shared/_img/uninstall-disable.png" style="border: 1px solid #CCCCCC" />

   [[Need help?](../faq-extensions.md#q-how-do-i-get-support-for-the-visual-studio-marketplace)]