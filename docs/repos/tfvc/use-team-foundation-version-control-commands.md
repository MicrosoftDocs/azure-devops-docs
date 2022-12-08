---
title: Use Team Foundation version control commands
titleSuffix: Azure Repos
description: Run Team Foundation Version Control commands from a command prompt or within a script. Use options and shortcuts, and understand exit codes.
ms.assetid: efeff6e0-c4ab-4686-bc63-20a6136be39a
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/29/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Use Team Foundation version control commands

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

You can use version control commands to do nearly all Team Foundation Version Control (TFVC) tasks that you can do in Visual Studio. You can also use version control commands to do several tasks that can't be done in Visual Studio. To run version control commands from a command prompt or within a script, you use the `tf.exe` tool.

## Run a command

To launch the Visual Studio command prompt, from Windows **Start**, select the **Developer Command Prompt for VS2022** or earlier version shortcut.

> [!NOTE]   
> For Visual Studio 2019 and later versions, the `tf.exe` binary is no longer in a fixed location in the Visual Studio install path as in some previous releases, for example, `C:\Program Files (x86)\Microsoft Visual Studio 14.0\Common7\IDE`. If your script uses `tf.exe`, don't hard-code a path to the file based on the Visual Studio install path.

In most cases, you run the version control command in the context of a directory that's mapped in the workspace. For example, `$/SiteApp/Main/` is mapped to `c:\\code\\SiteApp\\Main\\`. To get the latest version of all items in the workspace, use the following command:

```
c:\code\SiteApp\Main\SolutionA>tf get
```

### Set up your development machine and manage workspaces

Your workspace is a local copy of your team's codebase. Because it's a local copy on your development machine, you can develop and test your code in isolation until you're ready to check in your work. Here are some commands to manage your workspace:

- [Proxy command](proxy-command.md) 
- [Workfold command](workfold-command.md) 
- [Workspace command](workspace-command.md)  
- [Workspaces command](workspaces-command.md) 

For more information, see the following resources:

- [Set up Team Foundation Version Control on your dev machine](set-up-team-foundation-version-control-your-dev-machine.md)
- [Create and work with workspaces](create-work-workspaces.md)

### Develop your app

Use these commands to develop your app under version control with your team:

- [Add command](add-command.md): Adds files and folders to version control.
- [Checkout (or Edit) command](checkout-or-edit-command.md): Checks out a file and changes its pending change status to **edit**.
- [Delete command (Team Foundation Version Control)](delete-command-team-foundation-version-control.md): Removes files and folders from the Azure DevOps server and deletes them from the disk.
- [Get command](get-command.md): Gets (downloads) the latest version or a specified version of one or more files or folders from Azure DevOps Server to the workspace.
- [Rename command (Team Foundation Version Control)](rename-command-team-foundation-version-control.md): Changes the name or path of a file or folder.
- [Status command](status-command.md): Displays information about pending changes to files and folders in workspaces or in a shelveset.
- [Undo command](undo-command.md): Discards specified pending changes to files or folders.
- [Undelete command](undelete-command.md): Restores items that were previously deleted.

For more information, see [Develop your app in Team Foundation version control](develop-your-app-team-foundation-version-control.md).

### Suspend your work

For various reasons, sometimes you need to set aside some or all of your in-progress work. To suspend and resume your work, and to manage your shelvesets, use these commands:

- [Shelve command](shelve-command.md)  
- [Shelvesets command](shelvesets-command.md) 
- [Unshelve command](unshelve-command.md) 

For more information, see [Suspend your work and manage your shelvesets](suspend-your-work-manage-your-shelvesets.md).

### Contribute your work

Use the `checkin` command to check in your code to the team's code base:

- [Checkin command](checkin-command.md): Checks in pending changes to files or folders to the server.

For more information, see [Check in your work to the team's codebase](check-your-work-team-codebase.md).

### Manage files and solve problems

Use the resources in the following sections to manage files.

#### View and manage version control files and folders

- [Properties (or Info) command](properties-or-info-command.md): Displays information about items in version control.
- [Dir command](dir-command.md): Displays the contents of the version control server.  
- [Destroy command (Team Foundation Version Control)](destroy-command-team-foundation-version-control.md): Permanently deletes version-controlled files.
- [LocalVersions command](localversions-command.md): Displays the versions of workspace items.

For more information, see [Use Source Control Explorer to manage files under version control](use-source-control-explorer-manage-files-under-version-control.md).

#### View and manage past versions

- [Changeset command](changeset-command.md): Changes or displays changeset attributes.
- [History command](history-command.md): Displays the revision history of files or folders.
- [Label command (Team Foundation Version Control)](label-command-team-foundation-version-control.md): Attaches or removes labels from files or folders.
- [Labels command](labels-command.md): Displays information about labels that are in use in the server.
- [Rollback command (Team Foundation Version Control)](rollback-command-team-foundation-version-control.md): Rolls back the effects of changesets.
- [Unlabel command](unlabel-command.md): Removes an item from an existing label in the server.
- [View command](view-command.md): Retrieves a specified version of a file and displays it.

For more information, see [View and manage past versions](view-manage-past-versions.md).

#### Compare folders and files

- [Difference command](difference-command.md): Compares differences between files and shelvesets.
- [Folderdiff command](folderdiff-command.md): Compares differences between files in two folders.

For more information, see [View and manage past versions](view-manage-past-versions.md).

#### Resolve file conflicts

- [Resolve command](resolve-command.md): Resolves conflicts between items in your workspace and on the server.

For more information, see [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md).

#### Work with version control locks

- [Lock command](lock-command.md): Locks or unlocks files and folders.

For more information, see [Work with version control locks](work-version-control-locks.md).

### Isolate risk

Use the following commands to isolate risk by using branches:

- [Branch command](branch-command.md) 
- [Branches command](branches-command.md) 
- [Merge command](merge-command.md) 
- [Merges command](merges-command.md) 

For more information, see [Use branches to isolate risk in Team Foundation Version Control](./branching-strategies-with-tfvc.md).

### Administer version control

Use the following commands to manage your version control system:

- [Configure command](configure-command.md)  
- [Permission command](permission-command.md)  

For more information, see [Configure check-out settings](configure-check-out-settings.md).

### Get help on version control commands

Use the following commands to get detailed information about version control commands:

- [Help command (Team Foundation Version Control)](help-command-team-foundation-version-control.md)  
- [Msdn command](msdn-command.md)  

## Understand command syntax

The syntax of each command appears at the top of each reference article.

### Required and optional arguments

Non-bracketed arguments are required. **[Brackets]** indicate optional arguments that aren't required to complete a command. However, some optional arguments have defaults that are applied to the command even if you don't specify the option.

### Exclusive arguments

When options are separated by a pipe (**|**), you can specify one of the options.

### Verbatim and replaceable arguments

Items that aren't enclosed in brackets are options that you include verbatim. Items enclosed in angle brackets (**<** and **>**) are arguments that you must replace with actual characters to perform a command.

### Command shortcuts and aliases

Some commands support shortcuts. For example, you can call the [Delete command](delete-command-team-foundation-version-control.md) with either `tf delete` or `tf del`.

### Example

For example, consider the [Checkout command](checkout-or-edit-command.md):

```
tf checkout [/lock:( none|checkin|checkout)] [/recursive] <item-spec> [/login: <username>, [<password>]]
```

This example includes the following arguments:

- `<item-spec>`: You must replace this argument with an [item specification](use-team-foundation-version-control-commands.md#use-an-item-specification-argument-to-specify-affected-items) that identifies the items that you're checking out.
- The following arguments are optional. If you don't supply them, none of their effects apply to the command:
  - `/lock:(none|checkin|checkout)`: If you don't specify the `/lock` option, the system uses `/lock:none` by default. Otherwise, you can specify one of the other lock options.
  - `/recursive`: If you want to recursively check out multiple items in a folder, you must specify this option verbatim.
  - `/login:<username>, <password>`: If you want to run the command as another user, you must specify the `/login` option verbatim and replace `<username>` with the name of the user. If necessary, replace `<password>` with the user's password.

## Specify the items affected by a command

You can use item specifications and version specifications to specify which items are affected by a command.

#### Use an item specification argument to specify affected items

You use an item specification to specify the items affected by a command. You can specify items either on a client machine or on your Azure DevOps server. You can use wildcard characters such as **\*** and **?**.

#### Client item specification arguments

A client item specification argument specifies a path to items on a client machine such as:

- A folder, for example, *c:\\code\\SiteApp\\Main\\SolutionA\\*.
- A file, for example, *c:\\code\\SiteApp\\Main\\SolutionA\\Project1\\program.cs*.
- Multiple files, for example, *c:\\code\\SiteApp\\Main\\SolutionA\\\*.cs*.
- A universal naming convention (UNC) path, such as *\\\\myshare\\code\\SiteApp\\Main*.

#### Server item specification arguments

A server item specification argument specifies a path to items on your Azure DevOps server such as:

- A folder, for example, *$/SiteApp/Main/SolutionA*.
- A file, for example, *$/SiteApp/Main/SolutionA/Project1/program.cs*.
- Multiple files, for example, *$/SiteApp/Main/SolutionA/\*.cs*.

You typically use server item specification arguments when you need to run a command on items that aren't on the client machine. For example, say you're working on a development machine. If you need to get some revision history data about some items that are in a project collection that you don't work in, you can use the following command:

```
c:\>tf history /collection:https://fabrikam-3:8080/tfs/DefaultCollection
$/SiteApp/Main/SolutionA/Project1/* /recursive  
/noprompt 
```

#### Multiple item specification arguments

For some commands, you can specify multiple item specification arguments, for example:

```
c:\code\SiteApp\Main\SolutionA\Project1\>tf checkout program1.cs program2.c
```

This command checks out *program.cs* and *program2.c*.

### Use a version specification argument to specify affected versions of items

You use a version specification to specify the version of items affected by a command. To provide a version specification, you can:

- Use the `/version` option, for example, `/version:C44`.

- Append the version specification to an item specification with a semicolon, for example, `program1.cs;C44`.

When you use the [History command](history-command.md) or the [Difference command](difference-command.md), you can specify a range of versions by separating the versions with a tilde, for example:

```
c:\code\SiteApp\Main\SolutionA>tf history /noprompt * /recursive /v:D4/12/2022~D4/24/2022
```

Use the following syntax to specify a version specification:

| Type | Syntax | Description | Examples | Result |
| --- | --- | --- | --- | --- |
| Changeset | `[C]<version-number>` | Specifies items based on a changeset number. If an item that's in scope wasn't modified in the specified changeset, the system takes the latest version of the item that occurred before the specified changeset. You can omit `C` if you specify only a number.| `tf get readme.txt /v:C8`<br><br>`tf get readme.txt /v:8`<br><br>`tf get readme.txt;8` | If *readme.txt* was modified in changeset 8, the example code gets that version of the file. Otherwise, it gets the most recent version of *readme.txt* before version 8. |
| Label | `L<label>` | Specifies items that a label is applied to. | `tf get readme.txt;LJulyHotFix`<br><br>`tf get /version:LLastKnownGood` | The first example gets the version of *readme.txt* that was labeled **JulyHotFix**. The second retrieves the version of all labeled items (and deletes those items not labeled) in the workspace as they existed when the changeset labeled **LastKnownGood** was created. You might use the code in the second example as part of an [automated build process](../../pipelines/build/triggers.md). |
| Date and time | `D<yyyy-mm-ddTxx:xx>`<br><br>or<br><br>`D<mm/dd/yyyy>`<br><br>or<br><br>Any .NET Framework-supported format.<br><br>or<br><br>Any of the date formats supported on the local machine. | Specifies a changeset that was created on a specified date at a specific time. | `tf get /version:D2022-03-22`<br><br>`tf get /version:D2022-03-22T09:00` | The first example updates the workspace to match the codebase as it existed on March 22, 2022 at midnight. The second updates the workspace to match the codebase as it existed on March 22, 2022 at 9:00 AM. For more information about .NET Framework-supported date and time formats, see [DateTime](/dotnet/api/system.datetime) and [Standard date and time format strings](/dotnet/standard/base-types/standard-date-and-time-format-strings). |
| Current workspace | `W` | Specifies the version in your workspace. | - | - |
| Specified workspace | `W<workspace-name>; <workspace-owner>` | Specifies the version in a specified workspace. | `tf get /version:WResolveRIConflicts;PatW` | The example specifies the version in the `ResolveRIConflicts` workspace that `PatW` owns. |
| Tip | `T` | Specifies the most recent version. | - | - |

## Use options to modify how a command functions

You can use some common options to modify how a command functions.

### Use the `/noprompt` option to suppress data input requests and redirect output data

Use the `/noprompt` option to suppress requests for data input and redirect output data to the command prompt window. This option can be useful when you need to use version control commands in a script where:

- The command proceeds without intervention by a user.
- The data is available for the script to perform operations on, such as parsing or capturing.

When you use this option, the system:

- Suppresses all requests for input:
  - Questions aren't asked in the command prompt window. For example, when you use the [Undo command](undo-command.md) with this option, the system doesn't prompt you to confirm whether you want to undo the changes.
  - Windows and dialog boxes aren't displayed. For example, you can use this option with the [Checkin command](checkin-command.md). The system doesn't display the **Check In** dialog box for you to confirm items and associated work items. Instead, the system checks in the items without confirmation.

- Redirects output data to the command prompt. For example, you can use this option with the [History command](history-command.md). The data is displayed in the command prompt window instead of the [History window](get-history-item.md).

### Use the `/login` option to specify credentials

Use the `/login` option to specify the Azure DevOps server user account to run a command in. This option can be useful when you work at the machine of another team member.

For example, say you're working at your team member's development machine. You use the [Lock command](lock-command.md) to unlock a file that you locked earlier:

```
c:\code\SiteApp\Main> tf lock /lock:none program.cs /login:<username>,<password>
```

If you want to avoid having your password appear in the command prompt, you can enter the command without the password:

```
c:\code\SiteApp\Main> tf lock /lock:none program.cs /login:<username>
```

After you enter this command, the system prompts you to enter your password in a dialog box that masks your input.

### Use the `/lock` option to apply or remove a lock

> [!Important]  
> As a best practice, use the `/lock` option with discretion. Inform your teammates why you're locking an item and when you plan to remove the lock.

Use the `/lock` option to apply or remove a lock at the same time that you run another command such as [Add](add-command.md) or [Edit](checkout-or-edit-command.md).

```
/lock:(none|checkin|checkout)
```

The `/lock` command uses the following options:

- `None`: No lock is placed on an item. If a lock is already in place, it gets removed.

- `Checkin` or `Checkout`: A lock is applied. For more information, see [Understand lock types](understand-lock-types.md).

> [!NOTE]
> In a few cases, the lock operation can fail:
>
> - If any other users have locked any of the specified items, the lock operation fails.
> - If there's already a pending change to the specified item, the system ignores this switch. In this case, you must use the [Lock command](lock-command.md) to change a lock on an item.

### Use option shortcuts

You can abbreviate the following options.

:::row:::
   :::column span="1":::
   **Option**
   :::column-end:::
   :::column span="1":::
   **Option Alias**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   `/comment`
   :::column-end:::
   :::column span="1":::
   `-C`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/computer`
   :::column-end:::
   :::column span="1":::
   `-M`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/delete`
   :::column-end:::
   :::column span="1":::
   `-D`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/force`
   :::column-end:::
   :::column span="1":::
   `-P`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/format`
   :::column-end:::
   :::column span="1":::
   `-F`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/help`
   :::column-end:::
   :::column span="1":::
   `-?, -H`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/lock`
   :::column-end:::
   :::column span="1":::
   `-K`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="1":::
   `-Y`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/newname`
   :::column-end:::
   :::column span="1":::
   `-N`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noprompt`
   :::column-end:::
   :::column span="1":::
   `-I`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/owner`
   :::column-end:::
   :::column span="1":::
   `-O`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="1":::
   `-R`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/server`
   :::column-end:::
   :::column span="1":::
   `-S`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/slotmode`
   :::column-end:::
   :::column span="1":::
   `-X`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/template`
   :::column-end:::
   :::column span="1":::
   `-T`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/user`
   :::column-end:::
   :::column span="1":::
   `-U`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/version`
   :::column-end:::
   :::column span="1":::
   `-V`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/workspace`
   :::column-end:::
   :::column span="1":::
   `-W`
   :::column-end:::
:::row-end:::


## Understand exit codes

Version control commands return the following exit codes:

:::row:::
   :::column span="1":::
   **Exit Code**
   :::column-end:::
   :::column span="3":::
   **Definition**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **0**
   :::column-end:::
   :::column span="3":::
   Success.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **1**
   :::column-end:::
   :::column span="3":::
   Partial success. At least something, or possibly everything, failed to succeed.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **2**
   :::column-end:::
   :::column span="3":::
   Unrecognized command.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **100**
   :::column-end:::
   :::column span="3":::
   Nothing succeeded.
   :::column-end:::
:::row-end:::


For example, say you run the following command:

```
c:\code\SiteApp\Main\SolutionA\Project1\>tf checkout program1.cs program2.c
```

If one of the files you're trying to check out doesn't exist on the server, the command returns **1** to indicate partial success.
