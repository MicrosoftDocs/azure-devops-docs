---
title: Configure retention policies in VSTS
description: Set up policies to automatically delete packages hosted in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-artifacts
ms.assetid: 10f5e81f-2518-41b9-92b6-e00c905b59b3
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 03/22/2018
monikerRange: '>= tfs-2017'
---

# Automatically delete old package versions using retention policies in VSTS or TFS

**VSTS** | **TFS 2018** | **TFS 2017**

Over time, the number of versions for each package being hosted in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS) can get grow quickly. You can configure retention policies to automatically delete old packages in VSTS or TFS to improve client performance and release storage space. 

Retention policies allow the user to set a number of versions to retain per package, once that number is hit the oldest version of the package will be deleted. 

If you'd like to retain a package version indefinitely, you can promote it to a view. Versions that are promoted to views will not be deleted and do not count toward the version limit.

## Configure retention policy

To configure retention policies:

1. Edit your feed from the **Packages** hub in the **Build and Release** hub group: ```https://<account_name>.visualstudio.com/<project_name>/_packaging?feed=<feed_name>&_a=settings```

    ![Edit a VSTS feed in Package](../_shared/_img/edit-feed-full.png)

2. From the **Retention** tab, select the maximum number of versions per package to retain:

    ![Edit retention policy settings for old packages in VSTS or TFS](../_img/retention-policy-settings.png)

