---
title: Configure Command
titleSuffix: Azure Repos
description: Configure Command
ms.assetid: c61c2a48-20d4-4452-b6e1-6c1aa3b521ee
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 06/30/2022
monikerRange: '<= azure-devops'
---


# Configure Command


[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

Enables an administrator to view and change the following configuration settings for a project in the **Source Control Settings** dialog box:

- Check-out settings  
- Check-in policies  
- Check-in notes  

 
## Prerequisites

To use the **configure** command, you must have the **Edit server-level information** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf configure [PathOfTeamProject] [/collection:TeamProjectCollectionUrl][/login:username,[password]]
```

## Parameters

### Argument

|**Argument**|**Description**|
|---|---|
|*PathOfTeamProject*|Path of the project whose configuration settings an administrator can view, change, or both.|
|*TeamProjectCollectionUrl*|The URL of the project collection that contains the project that you specified (for example, http://myserver:8080/tfs/DefaultCollection).|
|*username*|Provides a value to the **/login** option. You can specify a username value as either *DOMAIN\UserName* or *UserName.*|


### Option

|**Option**|**Description**|
|---|---|
|**/collection**|Specifies the project collection.|
|**/login**|Specifies the user name and password to authenticate the user with Team Foundation Server.|

## Remarks

You can manage the following project settings using the **configure** command:

-   **Check-out settings** can be used to determine whether multiple users can edit files at the same time. Also, they can be used to configure the get latest on check-out behavior.

-   **Check-in policies** provide controls that are invoked at check-in time, to make sure that defined criteria are met before a user checks in pending changes.

-   **Check-in notes** define custom fields into which users provide information during the check-in process. Check-in notes can be either required or optional.

The settings are configured in the **Source Control Settings** dialog box which appears after you run the **configure** command. When you complete your changes, click **OK** to save them to the server.

For more information about these settings, see [Walkthrough: Customizing Checkin Policies and Notes](/previous-versions/ms181281(v=vs.100)).



For more information on how to find the **tf** command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example displays the **Source** **Control** **Settings** dialog box in which you can examine and modify the project settings of the workspace for the c:\\projects folder.

```
c:\projects>tf configure
```

The following example displays the myproj project settings in the project collection at `http://myserver:8080/tfs/DefaultCollection`.

```
c:\projects>tf configure $/myproj / http://myserver:8080/tfs/DefaultCollection 
```

## Related articles

- [Configure Check-Out Settings](configure-check-out-settings.md)
- [Managing File Types](/azure/devops/server/admin/manage-file-types)
