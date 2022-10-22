---
title: Use Team Foundation version control commands
titleSuffix: Azure Repos
description: Use Team Foundation version control commands
ms.assetid: efeff6e0-c4ab-4686-bc63-20a6136be39a
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Use Team Foundation version control commands

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

You can use version control commands to do nearly all tasks you can do in Visual Studio, and also several tasks that can't be done in Visual Studio. You can use the **tf.exe** tool to run version control commands from a command prompt or within a script.

## Run a command

To launch the Visual Studio command prompt, from Windows **Start**, choose the **Developer Command Prompt for VS2019** or earlier version shortcut.

> [!NOTE]   
> For Visual Studio 2017 and later versions, the **tf.exe** binary is no longer in a fixed location in the Visual Studio install path as in previous releases. (for example, `C:\Program Files (x86)\Microsoft Visual Studio 14.0\Common7\IDE`). Scripts using **tf.exe** should not hard-code a path to the file based on the Visual Studio install path.

In most cases, you run the version control command in the context of a directory that is mapped in the workspace. For example, `$/SiteApp/Main/` is mapped to `c:\\code\\SiteApp\\Main\\`. To get the latest version of all items in the workspace:

```
c:\code\SiteApp\Main\SolutionA>tf get
```

### Set up your dev machine and manage workspaces

Your workspace is a local copy of your team's codebase. Because it is a local copy on your dev machine, you can develop and test your code in isolation until you are ready to check in your work. Here are some commands to manage your workspace:

- [Proxy Command](proxy-command.md) 
- [Workfold Command](workfold-command.md) 
- [Workspace Command](workspace-command.md)  
- [Workspaces Command](workspaces-command.md) 

See also: [Set up Team Foundation Version Control on your dev machine](set-up-team-foundation-version-control-your-dev-machine.md), [Create and work with workspaces](create-work-workspaces.md)

### Develop your app

Use these commands to develop your app under version control with your team:

- [Add command](add-command.md): Adds files and folders to version control.
- [Checkout (or Edit) command](checkout-or-edit-command.md): Checks out a file and changes its pending change status to "edit".
- [Delete Command (Team Foundation Version Control)](delete-command-team-foundation-version-control.md)  
- [Get command](get-command.md): Gets (downloads) the latest or a specified version of one or more files or folders from Team Foundation Server to the workspace.
- [Rename Command (Team Foundation Version Control)](rename-command-team-foundation-version-control.md)  
- [Status command](status-command.md): Displays information about pending changes to files and folders items in one or more workspaces, or in a shelveset.
- [Undo command](undo-command.md): Discards one or more pending changes to files or folders.
- [Undelete Command](undelete-command.md) 

See also: [Develop your app in Team Foundation version control](develop-your-app-team-foundation-version-control.md)

### Suspend your work

For a variety of reasons, sometimes you need to set aside some or all of your work in progress. To suspend and resume your work, and to manage your shelvesets, use these commands:

- [Shelve Command](shelve-command.md)  
- [Shelvesets Command](shelvesets-command.md) 
- [Unshelve Command](unshelve-command.md) 

See also: [Suspend your work and manage your shelvesets](suspend-your-work-manage-your-shelvesets.md).

### Contribute your work

Use the checkin command to check in your code to the team's code base:

- [Checkin command](checkin-command.md): Checks in pending changes to files or folders to the server.

See also: [Check in your work to the team's codebase](check-your-work-team-codebase.md)

### Manage files and solve problems

**View and Manage Version Control Files and Folders**  

- [Properties (or Info) Command](properties-or-info-command.md) 
- [Dir Command](dir-command.md)   
- [Destroy Command (Team Foundation Version Control)](destroy-command-team-foundation-version-control.md)   
- [LocalVersions Command](localversions-command.md) 

See also: [Use Source Control Explorer to manage files under version control](use-source-control-explorer-manage-files-under-version-control.md)

**View and Manage Past Versions**  

- [Changeset Command](changeset-command.md)  
- [History command](history-command.md): Displays the revision history of one or more files or folders.
- [Label Command (Team Foundation Version Control)](label-command-team-foundation-version-control.md) 
- [Labels Command](labels-command.md) 
- [Rollback Command (Team Foundation Version Control)](rollback-command-team-foundation-version-control.md) 
- [Unlabel Command](unlabel-command.md)   
- [View Command](view-command.md) 

See also: [View and manage past versions](view-manage-past-versions.md)

**Compare Folders and Files**  

- [Difference Command](difference-command.md)  
- [Folderdiff Command](folderdiff-command.md) 

See also: [View and manage past versions](view-manage-past-versions.md)

**Resolve File Conflicts**  

- [Resolve Command](resolve-command.md) 

See also: [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md).

**Work with Version Control Locks**  

- [Lock Command](lock-command.md) 

See also: [Work with version control locks](work-version-control-locks.md).

### Isolate risk

Use the following commands to isolate risk using branches:

- [Branch Command](branch-command.md) 
- [Branches Command](branches-command.md) 
- [Merge Command](merge-command.md) 
- [Merges Command](merges-command.md) 

See also: [Use branches to isolate risk in Team Foundation Version Control](./branching-strategies-with-tfvc.md).

### Administer Version Control

Use the following commands to manage your version control system:

- [Configure command](configure-command.md)  
- [Permission command](permission-command.md)  

See also: [Configure check-out settings](configure-check-out-settings.md).

### Get Help on Version Control Commands

Use the following commands to get more information about version control commands:

- [Help Command (Team Foundation Version Control)](help-command-team-foundation-version-control.md)  
- [Msdn Command](msdn-command.md)  

## Understand command syntax

The syntax of each command appears at the top of each reference topic.

### Required and optional arguments

Non-bracketed arguments are required. **[Brackets]** indicate optional arguments that are not required to complete a command. However, some optional arguments have defaults that are applied to the command even if you do not specify the option.

### Exclusive arguments

When options are separated by a pipe (**|**), you can specify one of the options.

### Verbatim and replaceable arguments

Bold items are options that you include verbatim. *Italicized* items are arguments that you must replace with actual characters to perform a command.

### Command Shortcuts and Aliases

Some commands support shortcuts. For example, you can call the [Delete command](delete-command-team-foundation-version-control.md) with either **tf delete** or **tf del**.

### Example

For example, the [Checkout command](checkout-or-edit-command.md):

```
tf checkout [/lock:( none|checkin|checkout)] [/recursive] itemspec [/login: username,[ password]]
```

Let's review the arguments from this example:

- *itemspec*: You must replace this argument with an [itemspec](use-team-foundation-version-control-commands.md#itemspec) that specifies the items you are checking out.

- **/lock:(none|checkin|checkout)**: You are not required to specify the **/lock** option. If you do not specify it, then the system by default specifies **/lock:none**. Otherwise, you can specify one of the lock options.

- The following arguments are optional and if you do not supply them, none of their effects apply to the command:

  - **/recursive**: If you want to recursively check out multiple items in a folder, you must specify this option verbatim.

  - **/login**:*username,password*: If you want to run the command as another user, you must specify the **/login** option verbatim, replace *username* with the name of the user, and if necessary, you can supply the password.

## Specify the items affected by a command

You can use itemspecs and versionspecs to specify which items are affected by a command.

<a name="itemspec"></a>

#### Use an itemspec argument to specify affected items

You use an *itemspec* (item specification) to specify the items affected by a command. You can specify items either on a client machine or on your Team Foundation Server. You can use wildcard characters such as **\\*** and **?**.

#### Client itemspec arguments

A client itemspec argument specifies a path to items on a client machine such as a folder (for example, **c:\\code\\SiteApp\\Main\\SolutionA\\**) a file (for example, **c:\\code\\SiteApp\\Main\\SolutionA\\Project1\\program.cs** or multiple files (for example, **c:\\code\\SiteApp\\Main\\SolutionA\\\*.cs**. You can also specify UNC paths such as **\\\\myshare\\code\\SiteApp\\Main**.

#### Server itemspec arguments

A server itemspec argument specifies a path to items on your Team Foundation Server such as a folder (for example, **$/SiteApp/Main/SolutionA**) a file (for example, **$/SiteApp/Main/SolutionA/Project1/program.cs** or multiple files (for example, **$/SiteApp/Main/SolutionA/\*.cs**.

You typically use server itemspec arguments when you need run a command on items not on the client machine. For example, you are working on a dev machine and need to get some revision history data about some items that are in a project collection you don't work in:

```
c:\>tf history /collection:http://fabrikam-3:8080/tfs/DefaultCollection
$/SiteApp/Main/SolutionA/Project1/* /recursive  
/noprompt 
```

#### Multiple itemspec arguments

For some commands, you can specify multiple *itemspec* arguments. For example:

```
c:\code\SiteApp\Main\SolutionA\Project1\>tf checkout program1.cs program2.c
```

Checks out program.cs and program2.c.

### Use a versionspec argument to specify affected versions of items

You use a *versionspec* (version specification) to specify the version of items affected by a command. To provide a *versionspec* you can:

-   Use the **/version** option. For example: **/version:C44**.

-   Append the versionspec to an itemspec with a semicolon. For example: **program1.cs;C44**.

When you use the [History command](history-command.md) or the [Difference Command](difference-command.md), you can specify a range of versions by separating the versions with a tilde (~). For example:

```
c:\code\SiteApp\Main\SolutionA>tf history /noprompt * /recursive /v:D4/12/2012~D4/24/2012
```

Use the following syntax to specify a *versionspec*.

:::row:::
   :::column span="1":::
   **Type**
   :::column-end:::
   :::column span="1":::
   **Syntax**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
   Changeset
   :::column-end:::
   :::column span="1":::
   [**C**]*n*
   :::column-end:::
   :::column span="3":::
   Specifies items based on a changeset number. If an item that is in scope was not modified in the specified changeset, the system takes the latest version of the item that occurred before the specified changeset.
   > [!Tip]  
   > You can omit the *C* if you specify only a number.
   **Examples**
   ```
   c:\code\SiteApp\Main&gt;tf get readme.txt /v:C8
   ```
   -- or --
   <a id="CodeSnippetContainerCode_3ec2c94a-8633-431c-b2d0-29836c305073"></a>
   ```
   c:\code\SiteApp\Main&gt;tf get readme.txt /v:8
   ```
   -- or --

   <a id="CodeSnippetContainerCode_69203803-1efd-4882-8d47-b4c20c45426a"></a>
   ```
   c:\code\SiteApp\Main&gt;tf get readme.txt;8
   ```

   If readme.txt was modified in changeset 8, gets that version of the file. Otherwise, gets the most recent version of readme.txt before version 8.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Label

   :::column-end:::
   :::column span="1":::
   **L***label*

   :::column-end:::
   :::column span="3":::
   Specifies items to which *label* was applied.

   **Examples**


   <a id="CodeSnippetContainerCode_08cf74c6-4a77-4c72-b034-1b2f0360d827"></a>
   ```
   c:\code\SiteApp\Main&gt;tf get readme.txt;LJulyHotFix
   ```

   Gets the version of readme.txt that was labeled **JulyHotFix**.


   <a id="CodeSnippetContainerCode_3517ab06-4897-4514-bf12-fb70aa3848f4"></a>
   ```
   c:\code\SiteApp\Main&gt;tf get /version:LLastKnownGood
   ```
   
   Retrieves the version of all labeled items (and deletes those items not labeled) in the workspace as they existed when the changeset labeled as **LastKnownGood** was created, for example, perhaps as part of an <a href="../../pipelines/build/triggers.md">automated build process<a/>.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Date and time

   :::column-end:::
   :::column span="1":::
   **D***yyyy-mm-ddTxx:xx*

   -or-

   **D***mm/dd/yyyy*

   -or-

   Any .NET Framework-supported format.

   -or-

   Any of the date formats supported on the local machine.

   :::column-end:::
   :::column span="3":::
   Specifies a changeset created on a specified date and time.

   **Examples**


   <a id="CodeSnippetContainerCode_3e2c85b3-6c9b-4323-92f7-f43b953c7f15"></a>
   ```
   c:\code\SiteApp\Main&gt;tf get /version:D2004-03-22
   ```

   Updates the workspace to match the codebase as it existed on 3/22/2004 at 00:00 (midnight).


   <a id="CodeSnippetContainerCode_1f0ebab8-23be-4987-bf44-3424224903c9"></a>
   ```
   c:\code\SiteApp\Main&gt;tf get /version:D2004-03-22T09:00
   ```

   Updates the workspace to match the codebase as it existed on 3/22/2004 at 09:00 (9 AM).

   For more information about .NET Framework-supported date and time formats see [DateTime](/dotnet/api/system.datetime) and [Standard Date and Time Format Strings](/dotnet/standard/base-types/standard-date-and-time-format-strings).

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Workspace (current)

   :::column-end:::
   :::column span="1":::
   **W**

   :::column-end:::
   :::column span="3":::
   Specifies the version in your workspace.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Workspace (specified)

   :::column-end:::
   :::column span="1":::
   **W***workspacename*; *workspaceowner*

   :::column-end:::
   :::column span="3":::
   Specifies the version in a specified workspace.

   For example: **WResolveRIConflicts;PeterW**

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Tip

   :::column-end:::
   :::column span="1":::
   **T**

   :::column-end:::
   :::column span="3":::
   Specifies the most recent version.

   :::column-end:::
:::row-end:::

<a id="use-options" /> 

## Use options to modify how a command functions

You can use some common options to modify how a command functions.

### Use the /noprompt option to suppress requests for data input and redirect output data to the command prompt window

Use the **/noprompt** option to suppress requests for data input and redirect output data to the command prompt window. This option can be useful when you need to use version control commands in a script because the command proceeds without intervention by a user, and the data is available for the script to perform operations such as parsing or capturing.

When you use this option, the system:

-   Suppresses all requests for input:

    -   Questions are not asked in the command prompt window. For example, when you use the [Undo command](undo-command.md) with this option, the system does not prompt you to confirm if you want to proceed with undoing the changes.

    -   Windows and dialog boxes are not presented. For example, you use this option with the [Checkin command](checkin-command.md). Instead of displaying the **Check In** dialog box for you to confirm your options (which items you want to check in or which work items to associate), the system proceeds with the check in without confirmation.

-   Redirects output data to the command prompt. For example, you use this option with the [History command](history-command.md). The data is displayed in the command prompt window instead of the [History window](get-history-item.md).

### Use /login option to specify credentials when running a command

Use the **/login** option to specify the Team Foundation Server user account to run a command. This option can be useful when you are working at the machine of another team member.

For example, Julia is working with Peter at his dev machine. She uses the [Lock command](lock-command.md) to unlock a file that she locked earlier:

```
c:\code\SiteApp\Main> tf lock /lock:none program.cs /login:JuliaI,JuliaPassword
```

If she wants to avoid having her password appear in the command prompt, she can enter the command without the password:

```
c:\code\SiteApp\Main> tf lock /lock:none program.cs /login:JuliaI
```

After she enters this command, the system then prompts her to type her password in a dialog box that masks her input.

### Use the /lock option to apply or remove a lock

> [!Important]  
> As a best practice, use the **/lock** option with discretion and notify your teammates why you are locking an item, and when you plan to remove the lock.

Use the **/lock** option to apply or remove a lock at the same time you run another command such as [Add](add-command.md) or [Edit](checkout-or-edit-command.md).

```
/lock:(none|checkin|checkout)
```

-   **None**: No lock is placed on an item. If a lock is already in place, it is removed.

-   **Checkin** or **Checkout**: Applies a lock. See [Understand lock types](understand-lock-types.md).

> [!NOTE]
> In a few cases, the lock operation can fail:
>
> - If any other users have locked any of the specified items, the lock operation will fail.
> - The system ignores this switch if there is already a pending change to the item. In this case, you must use the [Lock Command](lock-command.md) to change a lock on an item.

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
   **/comment**
   :::column-end:::
   :::column span="1":::
   **-C**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/computer**
   :::column-end:::
   :::column span="1":::
   **-M**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/delete**
   :::column-end:::
   :::column span="1":::
   **-D**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/force**
   :::column-end:::
   :::column span="1":::
   **-P**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/format**
   :::column-end:::
   :::column span="1":::
   **-F**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/help**
   :::column-end:::
   :::column span="1":::
   **-?, -H**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/lock**
   :::column-end:::
   :::column span="1":::
   **-K**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="1":::
   **-Y**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/newname**
   :::column-end:::
   :::column span="1":::
   **-N**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/noprompt**
   :::column-end:::
   :::column span="1":::
   **-I**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/owner**
   :::column-end:::
   :::column span="1":::
   **-O**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="1":::
   **-R**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/server**
   :::column-end:::
   :::column span="1":::
   **-S**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/slotmode**
   :::column-end:::
   :::column span="1":::
   **-X**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/template**
   :::column-end:::
   :::column span="1":::
   **-T**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/user**
   :::column-end:::
   :::column span="1":::
   **-U**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/version**
   :::column-end:::
   :::column span="1":::
   **-V**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/workspace**
   :::column-end:::
   :::column span="1":::
   **-W**
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
   Partial success; this means at least something, or possibly everything, failed to succeed.
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


For example:

```
c:\code\SiteApp\Main\SolutionA\Project1\>tf checkout program1.cs program2.c
```

If one of the files you are trying to check out does not exist on the server, the command returns **1** to indicate partial success.