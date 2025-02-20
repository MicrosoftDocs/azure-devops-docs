---
ms.topic: include
ms.service: azure-devops-repos
ms.author: chcomley
author: chcomley
ms.date: 02/20/2025
---


| Category | Requirements |
|--------------|-------------|
|**Permissions**|-|


- To add a command: [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

- To add a command: The TFVC workspace set up on the dev machine. See [Workspace command](workspace-command.md) or [Set up Team Foundation Version Control on your dev machine](set-up-team-foundation-version-control-your-dev-machine.md).
- To add files to a server: Before you can add files to version control in Visual Studio, [set up the workspace on your dev machine](set-up-team-foundation-version-control-your-dev-machine.md).
- To associate a file type tool: Member of the **Administrators** or **Users** security group on the computer where Visual Studio is installed. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).


- To convert a folder to a branch, your **Manage branch** permission must be set to **Allow**.  
- To branch a branch, your **Manage branch** permission must be set to **Allow** for the paths to the source and target branches. Your **Merge** permission for the path of target branch must set to **Allow**.  
- To branch a folder or file, your **Check out** permission and your **Merge** permission for the target path must be set to **Allow**. 
To use the `branch` command, have the **Read** permission for the source item, and the **Check out** and **Merge** permissions for the target folder set to **Allow**. For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

To use the `branches` command, your **Read** permission must be set to **Allow** for the item and any branches to view their history.  For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

To use the `changeset` command, have the **Read** permission set to **Allow** for any files or folders in the changeset for which you wish to display full information. The only users who can modify the notes and comments that are associated with a changeset are the users who created the changeset or a user who has the **Revise other user's changes** global permission. 

