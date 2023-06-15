---
title: Undo changes in another user's workspace
titleSuffix: Azure Repos
description: Use Team Foundation Version Control commands to remove a lock that another user has placed on a file or to delete the workspace of another user.
ms.assetid: 038a4364-0a70-436e-95cc-24735d0ad9e7
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 12/06/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Undo changes in another user's workspace

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)] 
 
Occasionally a team member is blocked from checking in a file that someone else has locked. You can use Team Foundation Version Control (TFVC) commands in this situation:

- To delete pending changes in another user's workspace, use the `tf undo` command.
- To remove an exclusive lock on a file but not the pending changes, use the `tf lock` command. For more information, see [Lock command](lock-command.md).
- To delete another user's workspace, use the `tf workspace` command. For more information, see [Remove a workspace](/previous-versions/ms245474(v=vs.110)).

## Prerequisites

To undo pending changes in another user's workspace, you must have the **Administer workspaces** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Undo the changes in another user's workspace

1. Open **Developer Command Prompt** for your version of Visual Studio.

1. Enter the following command at the command prompt. Replace the arguments with values that are appropriate for your needs.

   `tf undo /workspace:<other-user-workspace>;<other-user> $/<project-path>/<file-name> /collection:<team-project-collection-url>`

   For example, you might enter the following command:

   `tf undo /workspace:OtherUserWorkspace;OtherUser $/TeamProject/MyFile.cs /collection:https://YourTFSServer:8080/tfs/YourCollection`

For more information, see [Undo command](undo-command.md).

## Related articles

- [Create and work with workspaces](create-work-workspaces.md)
- [Use the Check In and Pending Changes windows](develop-code-manage-pending-changes.md)
- [Work with version control locks](work-version-control-locks.md)

 