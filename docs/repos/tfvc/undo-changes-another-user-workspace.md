---
title: Undo Changes in Another User's Workspace
titleSuffix: Azure Repos
description: Undo Changes in Another User's Workspace
ms.assetid: 038a4364-0a70-436e-95cc-24735d0ad9e7
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 09/11/2018
monikerRange: '>= tfs-2015'
---


# Undo Changes in Another User's Workspace

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Updated: October 2011

If a team member is blocked from checking in a file that is locked by someone else, you can use the **tf undo** command to delete Team Foundation version control pending changes in another user's workspace.

If you must also remove an exclusive lock on a file, but not the pending changes, you can use the **tf lock** command. For more information, see [Lock Command](lock-command.md).

If you must also delete another user's workspace, you can use the **tf workspace** command. For more information, see [Remove a Workspace](https://msdn.microsoft.com/library/ms245474).

**Required Permissions**

To undo pending changes in another user's workspace, you must have the **Administer workspaces** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

### To Undo the Changes in Another User's Workspace

1.  Click **Start**, click **All Programs**, click **Microsoft Visual Studio 2010**, point to **Visual Studio Tools**, and then click **Visual Studio 10.0 Command Prompt**.

2.  Type the following command at the command prompt and replace the arguments with the appropriate parameter information for your needs:

    `tf undo /workspace:OtherUserWorkspace;OtherUser $/TeamProject/MyFile.cs /collection:http://YourTFSServer:8080/tfs/YourCollection`

For more information, see [Undo Command](undo-command.md).

## See Also

#### Concepts

[Create a Workspace to Work with your Project](create-work-workspaces.md)

[Using the Check In and Pending Changes Windows](develop-code-manage-pending-changes.md)

#### Other Resources

[Working with Version Control Locks](work-version-control-locks.md)
## Change History<table>
<thead>
<tr>
<th><p>Date</p></th>
<th><p>History</p></th>
<th><p>Reason</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p></p>
<p>October 2011</p></td>
<td><p>Corrected step to launch the command prompt.</p></td>
<td><p></p>
<p>Customer feedback.</p></td>
</tr>
</tbody>
</table>
