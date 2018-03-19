---
title: Restore deleted packages in Visual Studio Team Services | Microsoft Docs
description: Use the Recycle Bin to restore deleted NuGet, npm, and Maven packages in VSTS
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.assetid: bdc2bd6e-0869-48fd-9ae8-1ce7847fa007
ms.author: elbatk
ms.date: 02/12/2018
---
[//]: # (monikerRange: '>= tfs-2017')

# Recover a deleted package from the Recycle Bin in VSTS

**VSTS** | **TFS 2018** | **TFS 2017**

If you've deleted a package from Visual Studio Team Services (VSTS), builds that depend on that package will start to fail.  You won't be able to repush that package to the feed because of [immutability](../feeds/immutability.md).  In order to recover the package and have builds start working again, you can recover it from the Recycle Bin.

## Recover a deleted package

1. Find the Recycle Bin in the **Packages** page underneath the **Build and Release** hub in VSTS: 

    ![Visual Studio Team Services Recycle Bin](../_img/recycle-bin/find-recycle-bin.png)

    > Once in the Recycle Bin, you will see any packages that have been deleted from the current feed in the **past 30 days**.

2. Click a package to get more details such as: *Version*, *Deleted date/time*, and *Scheduled permanent deletion:*

    ![Visual Studio Team Services Recycle Bin package view](../_img/recycle-bin/recycle-bin-view.png)

3. Select a version to *Restore to feed:*

    ![Restore a VSTS package with Recycle Bin](../_img/recycle-bin/recycle-bin-restore.png)






