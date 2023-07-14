---
title: Configure check-in notes
titleSuffix: Azure Repos
description: See how to require and configure check-in notes for TFVC in Visual Studio.
ms.assetid: c7829273-4d53-412c-99d6-4944780ebc74
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 10/12/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Configure check-in notes

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Team Foundation Version Control administrators can add, configure, and remove check-in notes by using the **Settings** for **Source Control** in Visual Studio **Team Explorer**. For more information about check-ins, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md).

## Prerequisites  

You must have the **Edit project-level information** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

### To add check-in notes

1. In Visual Studio **Team Explorer**, under **Project**, select **Settings**.
1. On the **Settings** page, in the **Team Project** section, select **Source Control**.
1. In the **Source Control Settings** dialog box, select the **Check-in Notes** tab, and then select **Add**.
1. In the **Add Check-in Note** dialog box, enter a note **Title**, such as *Documentation reviewer*, or select an existing title from the dropdown list.
1. If you want the note to be required for check-ins, select the **Required on check-ins** checkbox.
1. Select **Add**. You return to the **Check-in Notes** tab with the new check-in note title added.

### To configure check-in note requirements

1. In Visual Studio **Team Explorer**, under **Project**, select **Settings**.
1. On the **Settings** page, in the **Team Project** section, select **Source Control**.
1. In the **Source Control Settings** dialog box, select the **Check-in Notes** tab.
1. In the **Required** column, select the check-in notes that you want to be mandatory for the check-in process, and deselect the notes that you don't want to be mandatory.
1. Select **OK**.

### To rename a check-in note

1. In Visual Studio **Team Explorer**, under **Project**, select **Settings**.
1. On the **Settings** page, in the **Team Project** section, select **Source Control**.
1. In the **Source Control Settings** dialog box, select the **Check-in Notes** tab.
1. Select the check-in note that you want to rename, and type a new name for it.
1. Select **OK**.

### To change the order of the check-in notes

1. In Visual Studio **Team Explorer**, under **Project**, select **Settings**.
1. On the **Settings** page, in the **Team Project** section, select **Source Control**.
1. In the **Source Control Settings** dialog box, select the **Check-in Notes** tab.
1. Select the check-in note for which you want to change the order.
1. Use the up and down arrow buttons at lower right to move the note to the desired order.
1. Select more check-in notes and move them up and down until the check-in notes are in the order you desire.
1. Select **OK**.

The check-in note ordering is reflected during the check-in process. For more information, see [Using the Check In and Pending Changes Windows](develop-code-manage-pending-changes.md) and [Develop and share your code in TFVC using Visual Studio](share-your-code-in-tfvc-vs.md).

### To remove check-in notes

1. In Visual Studio **Team Explorer**, under **Project**, select **Settings**.
1. On the **Settings** page, in the **Team Project** section, select **Source Control**.
1. In the **Source Control Settings** dialog box, select the **Check-in Notes** tab.
1. Select the check-in note you want to remove, and select **Remove**.
1. Select **OK**.

## Related articles

- [Add check-in policies](add-check-policies.md)  
- [Develop and share your code in TFVC using Visual Studio](share-your-code-in-tfvc-vs.md)
- [Configure check-out settings](configure-check-out-settings.md)