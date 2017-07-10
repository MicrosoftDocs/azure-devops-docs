---
title: Clean Up Files When Users Leave
description: Clean Up Files When Users Leave
ms.assetid: 7e8249cc-2933-4caa-8bee-ea93a3aff01a
ms.prod: vs-devops-alm
ms.technology: vs-devops-tfvc
ms.manager: douge
ms.author: routlaw
ms.date: 08/10/2016
---

# Clean Up Files When Users Leave

**Team Services | TFS 2015 | Visual Studio 2015 | Visual Studio 2013**

When a member leaves a team, version control administrators must correctly dispose of that member's files.

**Required Permissions**

To perform these procedures, you must be a member of the **Team Foundation Administrators** security group. For more information, see [Team Foundation Server Permissions](../setup-admin/permissions.md).

### To clean up version-controlled files after a team member leaves

1.  Check in any files that are checked out to the team member who has left.

    >**Note:**  If the member's checked-out files do not need to be saved, omit this step.

2.  Delete the workspaces of the member who has left.

    This operation can be performed only from the command line. For more information, see [Workspace Command](workspace-command.md).

## See Also

#### Tasks

[Remove a User From a Team Project or Team Project Collection](https://msdn.microsoft.com/library/ms253182)
