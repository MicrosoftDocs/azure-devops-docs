---
title: Configure command
titleSuffix: Azure Repos
description: See how to use the Configure command in TFVC.
ms.assetid: c61c2a48-20d4-4452-b6e1-6c1aa3b521ee
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 10/22/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Configure command


[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Enables an administrator to view and change the following configuration settings for a project in the Visual Studio **Source Control Settings** dialog box:

- **Check-out Settings**  
- **Check-in Policies**  
- **Check-in Notes**  

## Prerequisites

To use the `configure` command, you must have the **Edit server-level information** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf configure [PathOfTeamProject] [/collection:TeamProjectCollectionUrl][/login:username,[password]]
```

## Parameters

### Argument

|**Argument**|**Description**|
|---|---|
|`<PathOfTeamProject>`|Path of the project whose configuration settings an administrator can view or change.|
|`<TeamProjectCollectionUrl>`|The URL of the project collection that contains the project that you specified, for example `http://myserver:8080/tfs/DefaultCollection)`.
|`<username>`|Provides a value to the `/login` option. You can specify a username value as either `DOMAIN\username` or `username`.|


### Options

|**Option**|**Description**|
|---|---|
|`/collection`|Specifies the project collection.|
|`/login`|Specifies the user name and password to authenticate the user with Azure DevOps Server.|

## Remarks

You can manage the following project settings by using the `configure` command:

-   **Check-out Settings** determine whether multiple users can edit files at the same time. You can also use them to configure the get latest on check-out behavior.

-   **Check-in Policies** provide controls that are invoked at check-in time, to make sure that defined criteria are met before a user checks in pending changes.

-   **Check-in Notes** define custom fields where users provide information during the check-in process. Check-in notes can be either required or optional.

For more information about these settings, see [Walkthrough: Customizing Checkin Policies and Notes](/previous-versions/ms181281(v=vs.100)).

You configure the settings in the Visual Studio **Source Control Settings** dialog box, which appears after you run the `tf configure` command. When you complete your changes, select **OK** to save them.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

> [!NOTE]
> Administrators can also access the **Source Control Settings** dialog box from the Visual Studio **Team Explorer** window. Select **Settings**, and then select **Source Control** under **Team Project**.

## Examples

The following example displays the **Source Control Settings** dialog box, where you can examine and modify the project settings of the workspace for the *c:\\projects* folder.

```
c:\projects>tf configure
```

The following example displays the `myproj` project settings in the project collection at `http://myserver:8080/tfs/DefaultCollection`.

```
c:\projects>tf configure $/myproj / http://myserver:8080/tfs/DefaultCollection 
```

## Related articles

- [Configure Check-Out Settings](configure-check-out-settings.md)
- [Managing File Types](/azure/devops/server/admin/manage-file-types)
