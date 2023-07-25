---
title: TFVC workspace command
titleSuffix: Azure Repos
description: Use the Team Foundation Version Control workspace command to create, delete, view, or modify properties and mappings that are associated with a workspace.
ms.assetid: a7b374f5-02c2-4318-9130-31533bf0732c
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/10/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Workspace command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019.md](../../includes/version-vs-gt-eq-2019.md)]


The Team Foundation Version Control (TFVC) `workspace` command provides a way for you to create, delete, view, or modify properties and mappings that are associated with a workspace.

## Prerequisites

- To modify or delete an existing workspace, you must be the owner or have the global **Administer workspaces** permission set to **Allow**.
- To create a workspace, you must have the global **Create a workspace** permission set to **Allow**.
- To create workspaces for other users, you must have the **Administer workspaces** permission set to **Allow**.

For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf workspace /new [/noprompt] [/template:<workspace-name>[;<workspace-owner>]]
[/computer:<computer-name>] [/comment:("<comment>"|@<comment-file>)]
[<workspace-name>[;<workspace-owner>]] [/login:<username>,[<password>]]
[/collection:<team-project-collection-url>] [/permission:(Private|PublicLimited|Public)]
[/location:(local|server)]
```

```
tf workspace /delete [/collection:<team-project-collection-url>] <workspace-name>[;<workspace-owner>] [/login:<username>,[<password>]]
```

```
tf workspace [/collection:<team-project-collection-url>] [/comment: ("<comment>"|@<comment-file>)] [/newname:<workspace-name>]
[<workspace-name>[;<workspace-owner>]] [/newowner:<owner-name>] [/computer:<computer-name>] [/permission:(Private|PublicLimited|Public)] [/login:<username>,[<password>]]
[/location:(local|server)]
```

## Parameters

The following sections describe arguments and options of the `workspace` command.

### Arguments

| Argument | Description |
|---|---|
| `<workspace-name>` | Specifies a name for the workspace that you want to create, edit, delete, or display information about. |
| `<workspace-owner>` | Specifies a username for the workspace. This parameter is required when the workspace owner isn't the person who's performing the command. |
| `<computer-name>` | Provides a value to the `/computer` option. |
| `<comment>` | Provides a value to the `/comment` option. |
| `@<comment-file>` | Specifies the path of a file where the comment should be read. |
| `<username>` | Provides a value to the `/login` option. You can specify this value as either `DOMAIN\<username>` or `<username>`. |
| `<password>` | Provides a value to the `/login` option. |
| `<team-project-collection-url>` | The URL of the project collection that contains the workspace that you want to create, edit, delete, or display information about, for example, `https://myserver:8080/tfs/DefaultCollection`. |
| `<owner-name>` | Provides a value to the `/newowner` option. |

### Options

| Option | Description |
|---|---|
|`/new`|Creates a new workspace.|
|`/template`|Specifies an existing workspace to use as a template for creating a new workspace. The new workspace uses the mappings of the existing workspace.|
|`/delete`|Deletes the specified workspace.|
|`/computer`|Specifies the name of the computer on which to create a workspace. This option is an advanced option.|
|`/comment`|Provides a comment that describes the workspace.|
|`/newname`|Renames an existing workspace.|
|`/noprompt`|Performs the specified workspace command without displaying a dialog box.|
|`/collection`|Specifies the project collection.|
|`/permission`|Specifies the options for workspace permissions:</p><ul><li><p>`Private`: Only the owners can use, check in files to, or administer the workspace.</p></li><li><p>`Public Limited`: Any valid user can use the workspace. But only the owners can check in files to or administer the workspace.</p></li><li><p>`Public`: Any valid user can use, check in files to, or administer the workspace.</p></li></ul>|
|`/location`|Specifies where the workspace is created:</p><ul><li><p>`local`: On the client machine. This value is the default.</p></li><li><p>`server`: On the Azure DevOps server.</p></li></ul>|
|`/login`|Specifies the username and password to authenticate the user with Azure DevOps.|
|`/newowner`|Specifies the username for the new owner of the workspace.|

## Remarks

A [workspace](create-work-workspaces.md) is a local copy of the files and folders on the server, plus any changes that you have made locally. When you add, edit, delete, move, rename, or otherwise change any version-controlled item, your changes are isolated in your workspace, where you can make and test your changes. When you [check in your work to the team's codebase](check-your-work-team-codebase.md), you commit your changes to the server. They become available to other users who are outside your workspace.

For more information about how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

### Create a workspace

Before you can add files to the version control server or check out items on the server, you must create a workspace or associate an existing one with the current directory. For more information, see [Set up Team Foundation Version Control on your dev machine](set-up-team-foundation-version-control-your-dev-machine.md).

To make the current directory a working folder for an existing workspace on your computer, follow these steps:

1. Enter `tf workspace <workspace-name>`, where `<workspace-name>` is the name of the existing workspace. The **Edit Workspace** dialog box appears.
1. Select **click here to enter a new working folder**.
1. In the **Source Control Folder** box, enter the server path that you want to map the current directory to.
1. In the **Local Folder** box, enter the current directory.
1. Select **OK**.

When you create a new workspace, you can specify a *template workspace* as part of the `/new` option. When you specify a template workspace, TFVC creates a new workspace on the current computer. TFVC also sets the owner to the current owner and replicates the following workspace properties into the new workspace from the template workspace: `mappings` and `comment`. If no name is specified, the system uses a name that's based on the current computer name. When you create a workspace by using a template, TFVC doesn't retrieve the files that it maps to from the server. Use the `get` command to synchronize the new workspace with the latest version on the server. For more information, see [Get command](get-command.md).

### Single folder mapping

You can choose to map only the immediate children of a version control folder to a local workspace. To do this, add an asterisk (\*) wildcard character in the **Source Control Folder** box in the **Add Workspace** dialog box, for example, `$/folder/*`. Otherwise, by default, all the children of the version control folder are recursively mapped to the local workspace.

Single folder mapping within a version control hierarchy is useful because it limits the number of items that are downloaded to the client computer. Another way to limit downloaded files is to cloak files that you don't need to have in your workspace. For more information, see [Optimize your workspace](optimize-your-workspace.md). This approach provides faster download times and saves disk space on the client computer.

### Delete a workspace

If you delete a workspace that contains pending changes, TFVC cancels the pending changes as part of the delete process. Deleting a workspace doesn't delete the files and folders on the client computer that were in that workspace.

> [!NOTE]
> Commands that run manually require the `/noprompt` option to bypass user acknowledgement. Be careful if you use the PowerShell `Start()` method to run commands. The `/noprompt` option can be automatically set in PowerShell.


When deleting a workspace you need to provide the `<workspace-owner>` and `<workspace-name>`

You can use the `<workspace` command to retrieve those values. For more information, see [workspaces command](https://learn.microsoft.com/en-us/azure/devops/repos/tfvc/workspaces-command?view=azure-devops)
To find `<workspace-owner>` value, run the following command:

```
c:\projects>tf workspaces /computer:* /owner:* /collection:`<team-project-collection-url>` /format:xml
```

To find the `<workspace-name>` value, use the  `<OwnerId>` value from the previous command's output as the `<workspace-owner>` value. That value has the format of an Azure Active Directory (Azure AD) object ID followed by a backslash and a user principal name. Use the entire value. Then run the following command:

```
c:\projects>tf workspaces /owner:<workspace-owner> /computer:* /collection:`<team-project-collection-url>`
```

To delete the workspace, run the following command:

```
c:\projects>tf workspace /delete <workspace-name>;<workspace-owner> /collection:<team-project-collection-url>`
```


### Edit a workspace

You can change the following workspace attributes:

-   Workspace name  
-   Comment  
-   Working folder mappings  

If no workspace specification is provided, the workspace for the current folder is used.

## Examples

The following example opens the **Add Workspace** dialog box and creates a new workspace. You can use the **Add Workspace** dialog box to edit the source control folder, owner, computer, comment, and local folders.

```
c:\projects>tf workspace /new /collection:https://myserver:8080/tfs/DefaultCollection
```

The following example creates a new workspace called **Beta1** and assigns **jenh** as the workspace owner. You must have the **AdminWorkspaces** permission to assign ownership of a new workspace to another user. For more information about security permissions, See [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

```
c:\projects>tf workspace /new Beta1;jenh
```

The following example creates a new workspace by using the **Beta1** workspace that's owned by **jenh** as a template:

```
c:\projects>tf workspace /new /template:Beta1;jenh /collection:https://myserver:8080/tfs/DefaultCollection
```

The following example removes the **Beta1** workspace from the server:

```
c:\projects>tf workspace /delete Beta1
```

The following example edits properties for the current workspace:

```
c:\projects>tf workspace
```

The following example opens the **Beta1** workspace that's owned by **jenh** so that you can see its properties and mappings. If you have the **AdminWorkspaces** permission, you can change the workspace properties and mappings.

```
c:\projects> tf workspaces Beta1;jenh
```

## Related articles

- [Optimize your workspace](optimize-your-workspace.md)  
- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)  
- [Workspaces command](workspaces-command.md)  
- [Create and work with workspaces](create-work-workspaces.md)  
- [Set up Team Foundation Version Control on your dev machine](set-up-team-foundation-version-control-your-dev-machine.md)
