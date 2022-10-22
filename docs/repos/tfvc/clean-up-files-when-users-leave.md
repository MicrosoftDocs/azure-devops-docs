---
title: Clean up files when users leave
titleSuffix: Azure Repos
description: Learn how to clean up TFVC files when users leave.
ms.assetid: 7e8249cc-2933-4caa-8bee-ea93a3aff01a
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 06/30/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Clean up files when users leave

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When a member leaves a team, version control administrators must correctly dispose of that member's files.

## Prerequisites

To perform these procedures, you must be a member of the **Azure DevOps Administrators** or **Team Foundation Administrators** security group. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Clean up version-controlled files after a team member leaves

1.  Check in any files that are checked out to the team member who has left.

    > [!NOTE]
    > If the member's checked-out files do not need to be saved, omit this step.

2.  Delete the workspaces of the member who has left.

    This operation can be performed only from the command line. For more information, see [Workspace Command](workspace-command.md).

## Related articles

- [Remove user accounts](../../organizations/security/remove-users-prohibit-access.md)