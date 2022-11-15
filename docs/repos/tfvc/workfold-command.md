---
title: TFVC workfold command
titleSuffix: Azure Repos
description: Use the Team Foundation Version Control workfold command to create, modify, or display information about the mappings between workspace and server folders.
ms.assetid: f4d18139-bd2e-4621-be4e-a761ca537280
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/10/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Workfold command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019.md](../../includes/version-vs-gt-eq-2019.md)]


The Team Foundation Version Control (TFVC) `workfold` command creates, modifies, or displays information about the mappings between your workspace folders and the folders that are on the Azure DevOps server for TFVC.

## Prerequisites

To use the `workfold` command, you must be the owner of the specified or implied workspace or have the global **Administer workspaces** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).
 

## Syntax

```
tf workfold <local-folder> [/login:<username>,[<password>]]
```

```
tf workfold [/workspace:<workspace-name>] [/login:<username>,[<password>]]
```

```
tf workfold [/collection:<team-project-collection-url>] [/workspace:<workspace-name>] [/login:<username>,[<password>]]
<server-folder>
```

```
tf workfold [/map <server-folder> <local-folder>] [/collection:<team-project-collection-url>] 
[/workspace:<workspace-name>][/login:<username>,[<password>]
```

```
tf workfold /unmap [/collection:<team-project-collection-url>] [/workspace:<workspace-name>] 
[/recursive] (<server-folder>|<local-folder>) [/login:<username>,[<password>]]
```

```
tf workfold /cloak 
<server-folder> [/workspace:<workspace-name>] [/collection:<team-project-collection-url>] [/login:<username>,[<password>]]
```

```
tf workfold /decloak <server-folder>
[/workspace:<workspace-name>] [/collection:<team-project-collection-url>][/login:<username>,[<password>]]
```

## Parameters

The following sections describe arguments and options of the `workfold` command.

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
   `<workspace-name>`
   :::column-end:::
   :::column span="3":::
   Specifies the name of the workspace that the command operates on with the `/workspace` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<server-folder>`
   :::column-end:::
   :::column span="3":::
   Specifies the name of an Azure DevOps server folder.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<local-folder>`
   :::column-end:::
   :::column span="3":::
   Specifies the name of a local folder.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<team-project-collection-url>`
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains the folders that you want to compare with server folders, for example, `https://myserver:8080/tfs/DefaultCollection/`.
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
   `/workspace`
   :::column-end:::
   :::column span="3":::
   Specifies the name of the workspace to work in.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/map`
   :::column-end:::
   :::column span="3":::
   Specifies an association between a local folder and the Azure DevOps server folder. By default, the `workfold` command uses this option, even if unspecified, unless `/unmap`, `/cloak`, or `/decloak` is specified.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/unmap`
   :::column-end:::
   :::column span="3":::
   Specifies which folder mapping to remove from the workspace.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/cloak`
   :::column-end:::
   :::column span="3":::
   Specifies that the folder should be excluded from any version control actions that are made in the workspace.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/decloak`
   :::column-end:::
   :::column span="3":::
   Decloaks a folder so that the folder can be retrieved into the workspace.
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
   Specifies the username and password to authenticate the user with Azure DevOps.
   :::column-end:::
:::row-end:::


## Remarks

You can use the `workfold` command of the `tf` command-line utility to create and edit *workspace mappings*. A workspace mapping creates a client-side folder into which all files and subfolders in the Azure DevOps server folder are retrieved when you run a `tf` `get` operation. The `get` operation doesn't work if the client-side folder is cloaked.

You can also use an asterisk (\*) wildcard character to map an Azure DevOps Server folder and its immediate items to your local workspace. This mapping is often referred to as a *single folder mapping*.

For more information about how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

### Options for workspace mapping

A workspace mapping is a list of active and cloaked items. You can add Azure DevOps server items to the mapped list in the workspace by using the `/map` option. You can also exclude an item from the workspace explicitly by using the `/cloak` option. You can only cloak items that have a mapped parent. Cloaking is an effective way to improve the speed of batch `get` operations and to conserve space on disk.

Use cloaking with discretion. To avoid compilation and integration problems, you should only cloak those items that you know to be outside the scope of your current and future projects, such as images and external documentation files.

You can use the `/unmap` and `/decloak` options to selectively delete mapped and cloaked entries from the workspace mapping.

### How workspace mappings are applied

By default, workspace mappings are applied recursively. When you map a local folder to an Azure DevOps server folder, the system implicitly creates a mapping between all its current and future subfolders.

For example, suppose you map *\$/projects* to *C:\\projects*. Next, you add a project called **$/projects/project\_one**, and then you run the `get` command on the workspace. In this scenario, TFVC automatically creates a local working folder named *project\_one* in the *C:\\projects* directory.

The following example uses an asterisk (\*) wildcard character to map a server folder and its immediate items to your local workspace:

```
tf workfold $/projects/MyTeamProject/* C:\MyLocalWorkfold\MyTeamProject
```

The following example uses the `workfold` command to override the mapping that's automatically created between *\$/projects/project\_one* and *C:\\projects\\project\_one*:

```
tf workfold $/projects/project_one C:\DifferentWorkfold
```

### Mappings under cloaks

Mappings of uncloaked folders that are located beneath a cloaked folder in the version control hierarchy can be mapped to your local workspace.

## Examples

The following example displays the mappings for the workspace that *c:\\projects* resides in:

```
c:\projects>tf workfold
```

The following example cloaks the *c:\\projects\\lib* folder:

```
c:\projects>tf workfold /cloak c:\projects\lib
```

The following example displays the mapping for the local file *word.cs*:

```
c:\projects>tf workfold word.cs
```

The following example maps the folder *C:\\DifferentWorkfold* to the Azure DevOps server folder *\$/projects/project\_one* and replaces the previous workspace mapping for the *\$/projects/project\_one* Azure DevOps server folder:

```
c:\projects>tf workfold $/projects/project_one C:\DifferentWorkfold
```

## Related articles

- [Optimize your workspace](optimize-your-workspace.md)
- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Workspace command](workspace-command.md)
- [Create and work with workspaces](create-work-workspaces.md)
- [Set up Team Foundation Version Control on your dev machine](set-up-team-foundation-version-control-your-dev-machine.md)