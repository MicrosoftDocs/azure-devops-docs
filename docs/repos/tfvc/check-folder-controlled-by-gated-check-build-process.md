---
title: Check in to a folder that is controlled by a gated check-in build process
titleSuffix: Azure Repos
description: Check in to a folder that is controlled by a gated check-in build process
ms.assetid: 28fabf92-d3e0-43bb-96b5-7e5c10baa336
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Check in to a folder that is controlled by a gated check-in build process

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

When you check in files to a version control folder that is controlled by a [gated check-in build process](../../pipelines/build/triggers.md), there are some additional steps that you must take to complete the check-in.

![Build process](_img/check-folder-controlled-by-gated-check-build-process/IC572351.png)
**Required permissions**

You must be one of the **Contributors** for your project. See [Team Foundation Server default groups, permissions, and roles](https://msdn.microsoft.com/library/ms253077).

<a name="begin_checkin"></a>

## Begin checking in changes to a folder that is controlled by a gated check-in build

If the **Gated Check-in** dialog box appears during your check-in, then your changes must first be built by Team Foundation Build before they can be checked in.

### To check in changes to a folder that is controlled by a gated check-in build

1.  In the **Gated Check-in** dialog box:

    -   If a build pipeline is displayed, proceed to the next step.

    -   If the **Build pipeline** menu is displayed instead of the name of a build pipeline, on the **Build pipeline** menu, choose the build pipeline that your build engineer suggests that you use.

2.  Decide how you want to proceed:

    -   **Cancel the check-in operation and continue working**: If you do not want to try building your changes yet, choose **Cancel**, and then when the system asks you if you want to delete the shelveset, choose **Yes**.

    -   **Cancel the check-in operation and start a private build of your changes**: If you want to build the code yourself in a private build, choose **Cancel**. You can now build the shelveset manually. For more information, see [Get started with CI/CD](../../pipelines/get-started-designer.md).

    -   **Proceed with the check-in operation while keeping your changes in your workspace**: To proceed with the check-in operation and continue working with your changes, see [Proceed with the Gated Check-in after Keeping the Changes in Your Workspace](check-folder-controlled-by-gated-check-build-process.md#proceed_and_keep_changes).

    -   **Proceed with the check-in operation while deleting changes in your workspace**: If you do not need to continue working with your changes, see [Proceed with the Gated Check-in after Deleting the Changes in Your Workspace](check-folder-controlled-by-gated-check-build-process.md#proceed_and_delete_changes).

    -   **Bypass the gated check-in requirement**: If you have the **Override check-in validation by build permission** set to **Allow**, you can bypass the gated check-in requirement. Choose **Show options**, and then choose **Bypass validation build and check in my changes directly (requires permissions)**.

<a name="proceed_and_keep_changes"></a>

## Proceed with the gated check-in after keeping the changes in your workspace

The gated check-in process provides a way to proceed with the check-in and continue working with your changes. The drawback of proceeding in this way is that if the build completes successfully you must reconcile the changes in your workspace with the changes that are checked into version control.

### To proceed with the gated check-in after keeping your changes in your workspace

1.  Follow the steps in [Begin Checking in Changes to a Folder that is Subject to Gated Check-in](check-folder-controlled-by-gated-check-build-process.md#begin_checkin).

2.  In the **Gated Check-in** dialog box, choose **Build Changes**.

    In **Team Explorer**, when the information message appears in the **Pending Changes** page, monitor the build by choosing the **here** link to display the build results window. You can also choose ![Build process](_img/check-folder-controlled-by-gated-check-build-process/IC547418.png) **Home**, and then choose ![Build process](_img/check-folder-controlled-by-gated-check-build-process/IC588244.png) **Builds** to monitor the build on the **Builds** page.

3.  After the build is completed:

    -   **Check-in committed**: We recommend that you reconcile your workspace before you continue developing your code. If you are using the Build Notifications application, the **Gated Check-in** dialog box appears. Choose **Reconcile**. Otherwise, in **Team Explorer**, on the **Builds** page, under **My Builds**, open the shortcut menu for the completed build, and then choose **Reconcile Workspace**. When the **Reconcile Workspace** dialog box appears, use this dialog box to resolve version control conflicts.

    -   **Check-in rejected**: Correct the problems that caused the check-in to be rejected. In **Team Explorer**, on the **Builds** page, under **My Builds**, double-click the build (or open the shortcut menu for the build, and then choose **Open**). The build results window appears and contains information that can help you resolve the problem that caused the build to fail. For some types of problems, you may be able to choose the error or issue to view the file that requires corrections.

<a name="proceed_and_delete_changes"></a>

## Proceed with the gated check-in after deleting the changes in your workspace

If you want to proceed with the gated check-in operation and you do not plan to continue working with your changes, you can delete the changes in your workspace. Your changes are preserved in a shelveset and built by the system. If the build completes, then your changes are checked in. If the build fails, then you can unshelve the shelveset to get the changes back into your workspace.

### To proceed with the gated check-in after deleting changes in your workspace

1.  Follow the steps in [Begin Checking in Changes to a Folder that is Subject to Gated Check-in](check-folder-controlled-by-gated-check-build-process.md#begin_checkin).

2.  In the **Gated Check-in** dialog box:

    -   Choose **Show Options** and then clear **Preserve my pending changes locally**.

    -   Choose **Build Changes**.

3.  In **Team Explorer**, when the information message appears in the **Pending Changes** page, monitor the build by choosing the **here** link to display the build results window. You can also choose ![Build process](_img/check-folder-controlled-by-gated-check-build-process/IC547418.png) **Home**, and then choose ![Build process](_img/check-folder-controlled-by-gated-check-build-process/IC588244.png) **Builds** to monitor the build on the **Builds** page.

4.  After the build is completed:

    -   **Check-in committed**: Now that your changes are checked in, you may want to get the latest version of the files so that your workspace contains these changes. For more information, see [Download (get) files from the Server](download-get-files-from-server.md).

    -   **Check-in rejected**: Correct the problems that caused the check-in to be rejected.

        1.  In **Team Explorer**, on the **Builds** page, under **My Builds**, double-click the build (or open the shortcut menu for the build and then choose **Open**). The build results window appears.

        2.  In the build results window, look for information that can help you resolve the problem that caused the build to fail. For some types of problems, you may be able to choose the error or issue to view the file that requires corrections.

        3.  Retrieve your changes from the shelveset. For more information, see [Suspend your work and manage your shelvesets](suspend-your-work-manage-your-shelvesets.md).

        4.  In your files, correct the problems that caused the build to fail.

## See Also

#### Other Resources

 [Use a gated check-in build process to validate changes](../../pipelines/build/triggers.md) 

 [Check In Pending Changes](https://msdn.microsoft.com/library/ms181411) 

 [Suspend your work and manage your shelvesets](suspend-your-work-manage-your-shelvesets.md) 
