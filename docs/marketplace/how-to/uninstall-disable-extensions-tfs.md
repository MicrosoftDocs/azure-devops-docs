---
title: Uninstall or disable extensions in Visual Studio Team Foundation Server (TFS)
description: Uninstall or disable extensions for Team Foundation Server (TFS)
ms.technology: devops-marketplace
ms.assetid: ef7ce82f-ca09-4804-8698-2820ddaec1b8
ms.author: chcomley
author: chcomley
ms.date: 07/11/2019
ms.topic: conceptual
monikerRange: '>= tfs-2015 <= tfs-2018'
---

# Uninstall or disable extensions in Team Foundation Server

[!INCLUDE [version-tfs-2018-earlier](../../includes/version-tfs-2018-earlier.md)]

When you no longer need an extension, you can uninstall or disable it. This article shows you how.

> [!NOTE]
> Charges continue for a paid extension until you [reduce all users to zero (0) for this extension](../install-extension.md). 

## Prerequisites

[Project Collection Administrators](../../organizations/security/set-project-collection-level-permissions.md) 
with [**Edit collection-level information** permissions](../../organizations/security/permissions.md#collection) 
can uninstall or disable extensions.

## Uninstall or disable extension

1. From your TFS home page (```https://{server}:8080/tfs/```), go to the project collection where you want to uninstall or disable the extension.

2. Select **Manage extensions**.

   **TFS 2015 Update 3**

   <img alt="Manage extensions in TFS 2015 Update 3." src="../media/manage-extensions.png" />

   **TFS 2017**

   <img alt="Manage extensions" src="../media/manage-extensions2-new.png" />

3. On the extensions tab, select the extension, and then uninstall or disable it.

   <img alt="Uninstall or disable an extension" src="../media/uninstall-disable.png" />

   [[Need help?](../faq-extensions.yml)]