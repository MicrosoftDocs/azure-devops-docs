---
title: Undo Changes in Another User's Workspace
titleSuffix: Azure Repos
description: Undo Changes in Another User's Workspace
ms.assetid: 038a4364-0a70-436e-95cc-24735d0ad9e7
ms.technology: devops-code-tfvc
ms.topic: conceptual
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
---


# Undo changes in another user's workspace

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)] 
 

If a team member is blocked from checking in a file that is locked by someone else, you can use the **tf undo** command to delete Team Foundation version control pending changes in another user's workspace.

If you must also remove an exclusive lock on a file, but not the pending changes, you can use the **tf lock** command. For more information, see [Lock Command](lock-command.md).

If you must also delete another user's workspace, you can use the **tf workspace** command. For more information, see [Remove a Workspace](/previous-versions/ms245474(v=vs.110)).

## Prerequisites

To undo pending changes in another user's workspace, you must have the **Administer workspaces** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Undo the changes in another user's workspace

1.  Open the **Developer Command Prompt** for your version.

2.  Type the following command at the command prompt and replace the arguments with the appropriate parameter information for your needs:

    `tf undo /workspace:OtherUserWorkspace;OtherUser $/TeamProject/MyFile.cs /collection:http://YourTFSServer:8080/tfs/YourCollection`

For more information, see [Undo command](undo-command.md).

## Related articles

- [Create and work with workspaces](create-work-workspaces.md)
- [Using the Check In and Pending Changes Windows](develop-code-manage-pending-changes.md)
- [Work with version control locks](work-version-control-locks.md)

 