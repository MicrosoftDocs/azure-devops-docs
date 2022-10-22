---
title: LocalVersions Command
titleSuffix: Azure Repos
description: LocalVersions Command
ms.assetid: 5531edc7-0333-43eb-bea0-59db9bc35c33
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

 
# LocalVersions command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

Displays the version of one or more items in a workspace.

## Prerequisites

To use the **localversions** command, you must have the **Use** permission to the workspace. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).
For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf localversions ItemSpec
[/recursive] [/format:brief|detailed]
[/workspace:WorkspaceName[;WorkspaceOwner]] [/collection:TeamProjectCollectionUrl]
```

## Parameters

### Argument

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
   *Itemspec*
   :::column-end:::
   :::column span="3":::
   Specify either a file or a folder that contains the files for which you want to display version numbers.

   You can specify only a local file or folder. For example, c:\project1\binder.cs is valid, but $/project1/binder.cs is not.

   > [!Note]  
   > You can specify more than one *Itemspec* argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *WorkSpaceName*
   :::column-end:::
   :::column span="3":::
   Use this argument with the **/workspace** option to specify a workspace other than the one that is mapped to the current directory.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *WorkSpaceOwner*
   :::column-end:::
   :::column span="3":::
   Use this argument with the *WorkSpaceName* argument if you want to specify a public workspace.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains one or more items for which you want to display the version (for example, http://myserver:8080/tfs/DefaultCollection).
   :::column-end:::
:::row-end:::


### Option

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
   **/format**
   :::column-end:::
   :::column span="3":::
   Specify one of the following options to control how the data returned by this command appears:
   
   - **Brief**  
     (Default.) Each directory appears only once, followed by the files that it contains.

   - **Detailed**  
     Each file appears after its full path.
   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="3":::
   Specify this option if you want the operation to include items in subfolders.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/workspace**
   :::column-end:::
   :::column span="3":::
   Specify this option to display data about the versions of items that are in a workspace other than the one that is mapped to the current directory.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/collection**
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::

## Remarks

When you get or check out a file, you usually download the most current version. However, you may have older versions of some files in your workspace.

For example, you might have checked out some files and not checked in your work for several weeks. Other people on your team may have checked in changes to the same files during that time. In this case, the versions of these files in your workspace would be older than the current versions on your server for Team Foundation version control. You can use the **localversions** command to get information about which versions of these files are in your workspace.

For information about other Team Foundation commands that provide additional information about items in your server for Team Foundation version control and the workspaces that map to it, see .

For more information on how to find the **tf** command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples
The following example displays the version of the `ControllerBase.cs` file in the workspace that is mapped to the `c:\\workspaces\\FeatureA\\catalog\\controller` folder.

```
c:\workspaces\FeatureA\catalog\controller>tf localversions ControllerBase.cs
```

The following example displays the versions of all files (including those in subfolders) in the workspace that is mapped to the `c:\\workspaces\\FeatureA\\catalog\\` folder. Because the **/format:detailed** option is specified, each file appears with its full path.

```
c:\workspaces\FeatureA\catalog\>tf localversions . /recursive /format:detailed
```
