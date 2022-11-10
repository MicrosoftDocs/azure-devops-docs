---
title: Workspaces command
titleSuffix: Azure Repos
description: Use the Team Foundation Version Control workspaces command to see information about workspaces and to update cached usernames and computer name changes.
ms.assetid: 4b6f05fb-0520-44f8-8a31-7108ff956a72
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/10/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Workspaces command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019.md](../../includes/version-vs-gt-eq-2019.md)]

The Team Foundation Version Control (TFVC) `workspaces` command displays information about workspaces in the system and updates cached information about a username or computer name change on an Azure DevOps server.

## Prerequisites

To use the `workspaces` command, you must have the **Read** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf workspaces [/owner:<owner-name>] [/computer:<computer-name>] 
[/collection:<team-project-collection-url>] [/format:(brief|detailed|xml)] 
[/updateUserName:<old-user-name>] [/updateComputerName:<old-computer-name>] 
[<workspace-name>][/login:<username>,[<password>]]
```

```
tf workspaces /remove:(*|workspace1[,workspace2,...]) 
/collection:(*|<team-project-collection-url>)
```

## Parameters

The following sections describe arguments and options of the `workspaces` command.

### Arguments

:::row:::
   :::column span="1":::
   **Argument**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   `<owner-name>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/owner` option. Use an empty string (&quot;&quot;) to match workspaces created by any user.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<computer-name>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/computer` option. Use an empty string (&quot;&quot;) to match workspaces on any computer.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<workspace-name>`
   :::column-end:::
   :::column span="3":::
   Specifies the name of a workspace to display information about. If a value isn't specified, information is displayed about all the workspaces in a server. You can also use an asterisk (\*) wildcard character to display information about all workspaces for a server.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<old-user-name>`
   :::column-end:::
   :::column span="3":::
   Provides the old username for the `/updateUserName` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<old-computer-name>`
   :::column-end:::
   :::column span="3":::
   Provides the old computer name for the `/updateComputerName` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<team-project-collection-url>`
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains the workspaces about which you want to display information, for example, `https://myserver:8080/tfs/DefaultCollection`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify this value as either `DOMAIN\<username>` or `<username>`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<password>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option.
   :::column-end:::
:::row-end:::

### Options

:::row:::
   :::column span="1":::
   **Option**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   `/owner`
   :::column-end:::
   :::column span="3":::
   Specifies the name of the user who created the workspace. If no owner is specified, TFVC returns information about workspaces owned by the current user only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/computer`
   :::column-end:::
   :::column span="3":::
   Specifies the name of a client computer by which to filter the list of workspaces for the server. If no computer is specified, TFVC returns information about workspaces on the current computer only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/format`
   :::column-end:::
   :::column span="3":::
   Specifies the format of the workspace information. `Brief` returns workspace information without mappings. `Detailed` returns workspace information and also the mappings. `Xml` returns workspace information, a mapping, the latest access date, and also the owner aliases. The detailed format can only be used when the `/collection` option is specified. `Brief` is the default value.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/updateUserName`
   :::column-end:::
   :::column span="3":::
   Updates security identification information on the Azure DevOps server for a user whose network username has been changed. If you specify this option, you must also specify a project collection by using the `/collection` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/updateComputerName`
   :::column-end:::
   :::column span="3":::
   Instructs TFVC to update its tables to reflect a change in the name of a client computer. If you specify this option, you must also specify a project collection by using the `/collection` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/remove`
   :::column-end:::
   :::column span="3":::
   Removes the specified workspace entries for the specified project collection from the client cache.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/collection`
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="3":::
   Specifies the username and password to authenticate the user with Azure DevOps Server.
   :::column-end:::
:::row-end:::


## Remarks

The `workspaces` command of the `tf` command-line utility displays information about [workspaces](create-work-workspaces.md) on the current computer, owned by a specified user, or for all workspaces associated with a specific Azure DevOps server. For each workspace, TFVC displays the name, owner, comment, and computer name. With detailed output, it also shows the workspace mappings. Unless you provide a filter such as the owner, computer, or workspace name, TFVC only displays information about the workspaces that you've created.

For more information about how to edit workspace properties, see [Workspace command](workspace-command.md).

For more information about how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example displays a list of all workspaces for the current user on the current computer:

```
c:\projects>tf workspaces
```

The following example displays a list of all workspaces for all users on all computers that have been created in the following project collection at the address `https://myserver:8080/tfs/DefaultCollection`:

```
c:\projects>tf workspaces /owner:* /computer:* /collection:https://myserver:8080/tfs/DefaultCollection
```

The following example displays detailed information about all workspaces that the current user has created in the project collection at the address `https://myserver:8080/tfs/DefaultCollection`:

```
c:\projects>tf workspaces /computer:* /format:detailed /collection:https://myserver:8080/tfs/DefaultCollection
```

The following example displays detailed information about the workspace **WS1**, which is owned by the current user and is located on the current computer. The displayed information includes a list of workspace mappings.

```
c:\projects>tf workspaces /format:detailed /collection:https://myserver:8080/tfs/DefaultCollection WS1
```

The following example removes all cached workspaces from the cache in the project collection at the address `https://myserver:8080/tfs/DefaultCollection`:

```
c:\projects>tf workspaces /remove:* /collection:https://myserver:8080/tfs/DefaultCollection
```

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)  
- [Workspace command](workspace-command.md)  
- [Workfold command](workfold-command.md)  
- [Create and work with workspaces](create-work-workspaces.md)  
- [Set up Team Foundation Version Control on your dev machine](set-up-team-foundation-version-control-your-dev-machine.md)