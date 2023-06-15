---
title: Configure check-out settings
titleSuffix: Azure Repos
description: Learn how to configure check-out settings for a TFVC repository in Visual Studio.
ms.assetid: 9f4eb366-7e99-49f9-899d-cf3209c0ff72
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 10/12/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Configure check-out settings

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Team Foundation Version Control (TFVC) administrators can configure source control check-out settings. TFVC check-out settings enable files to be edited by more than one person at the same time.

## Prerequisites

To configure check-out settings, you must have the **Edit project-level information** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

### Configure checkout settings

1. In Visual Studio **Team Explorer**, connect to the project for which you want to configure check-out settings.

1. Under **Project**, select **Settings**. 

1. On the **Settings** page, in the **Team Project** section, select **Source Control**.

1. In the **Source Control Settings** dialog box, on the **Check-out Settings** tab, select or clear the **Enable multiple check-out** checkbox.

1. Select or clear the **Enable get latest on check-out** checkbox.

1. Select **OK**.

## Related articles

- [Add check-in policies](add-check-policies.md)
- [Configure check-in notes](configure-check-notes.md)