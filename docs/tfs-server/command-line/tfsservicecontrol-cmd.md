---
title: Use TFSServiceControl command to stop or start TFS services or application pools
description: Start or stop TFS services from the command line using TFSServiceControl
ms.assetid: 7a385e9d-b1b7-4a4a-8f7d-1ece14144432
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# TFSServiceControl Command

**TFS 2017** | **TFS 2015** | **TFS 2013**

You can use the **TFSServiceControl** command to stop or start all of the services and application pools Team Foundation Server (TFS) uses. For example, you use this command when backing up or restoring databases, or when you are moving your deployment from one machine to another.

> [!NOTE]
> You must use the **TFSServiceControl** command to ensure that all necessary operations, services, and application pools are stopped for maintenance tasks such as backup and restore. You cannot manually perform all of the tasks carried out by the **TFSServiceControl** command.

**Requirements**

-   You must be a member of the Team Foundation Administrators security group, a member of the Administrators group on the application-tier server, and a member of the sysadmin security group for any SQL Server databases that TFS uses. See [Set administrator permissions for Team Foundation Server](https://msdn.microsoft.com/library/ed578715-f4d2-4042-b797-5f97abde9973).

-   Even if you log on with administrative credentials, you must open an elevated Command Prompt window to perform this function.

&nbsp;

	TFSServiceControl [quiesce|unquiesce]

## Parameters

|Option|Description|
|---|---|
|**quiesce**|Stops or pauses all of the services, application pools, and operations in your deployment of TFS. This is required for certain maintenance tasks, such as restoring databases.|
|**unquiesce**|Starts or restarts all of the services, application pools, and operations in your deployment of TFS. This is required to return your server to operation after you run the command with the **quiesce** option.|

## Remarks

You use the **TFSServiceControl** command as part of specific maintenance tasks. After you specify the **quiesce** option, the server will not operate until you specify the **unquiesce** option. By default, the **TFSServiceControl** command is located in the %programfiles%\\TFS 12.0\\Tools directory.

## Example

The following example shows how to stop a deployment of Team Foundation Server.

    TFSServiceControl quiesce

The following example shows how to start a deployment of Team Foundation Server.

    TFSServiceControl unquiesce

## See Also

### Tasks

[Restore data to the same location](https://msdn.microsoft.com/library/57881758-8f6e-4d36-afa7-75d6b50e3e48)

### Concepts

[Back up and restore TFS](https://msdn.microsoft.com/library/cf9b5ab7-f4da-4519-991c-cc1722cb5d3c)

[Configure and manage TFS resources](https://msdn.microsoft.com/library/d553c7b0-e794-41dc-a7ef-91d7a5e1e46b)

## Other Resources

[Restore a deployment to new hardware](https://msdn.microsoft.com/library/4601dd68-3b9e-4d29-aa71-432566d4e4bd)
