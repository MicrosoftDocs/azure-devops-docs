---
title: Undo changes in another user's workspace
titleSuffix: Azure Repos
description: Undo Changes in Another User's Workspace
ms.assetid: 038a4364-0a70-436e-95cc-24735d0ad9e7
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/29/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Undo changes in another user's workspace

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)] 
 

If a team member is blocked from checking in a file that's locked by someone else, you have a few options:

- To delete Team Foundation version control pending changes in another user's workspace, use the `tf undo` command.
- To remove an exclusive lock on a file but not the pending changes, use the `tf lock` command. For more information, see [Lock command](lock-command.md).
- To delete another user's workspace, use the `tf workspace` command. For more information, see [Remove a Workspace](/previous-versions/ms245474(v=vs.110)).

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

 