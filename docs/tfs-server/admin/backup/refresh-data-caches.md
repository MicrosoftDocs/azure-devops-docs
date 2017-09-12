---
title: Refresh the data caches on client computers
description: Refresh the data caches on client computers
ms.assetid: b3b31e5e-d431-475a-b6ca-a1ccb63795d3
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Refresh the data caches on client computers

**TFS 2015** | **TFS 2013**

To prevent workspace errors from occurring during version control or build operations in Team Foundation, the data cache on client computers must be updated after certain maintenance operations. After you move, restore, rename, or fail over a data-tier or application-tier server or after you recover from a failure such as a hardware malfunction, you must refresh the cache for tracking work items and users must refresh the version control cache on client computers.

**Required permissions**

To invoke the **StampWorkitemCache** Web method, you must be a member of the **Administrators** security group on the application-tier server for Team Foundation. For more information, see [Permission reference for Team Foundation Server](../../../security/permissions.md).

To use the **tf workspaces** command on the client computer, your **Read** permission must be set to **Allow**.

## Refresh the Work Item Cache

>**Note:**  
>This procedure is optional. You should perform it only if errors occur with work item tracking.


To update the cache for tracking work items, you invoke the **StampWorkitemCache** Web method. This method forces client computers to update the cache the next time that they connect to the application-tier server. This method also synchronizes the workspaces that are defined on the client computers.

>**Note:**  
>When you invoke the **StampWorkitemCache** Web method, the performance of Visual Studio Team Foundation Server might temporarily degrade. The performance impact depends on how many Team Foundation users are connected when you invoke the method.

To refresh the cache for tracking work items on client computers:

1.  On the new server, open Internet Explorer.

2.  In the Address bar, enter the following address to connect to the **ClientService** web service:

    **http://** *PublicURL/VirtualDirectory* **:8080/WorkItemTracking/v3.0/ClientService.asmx**

	>**Note:**  
	>Even if you are logged on with administrative credentials, you might need to start Internet Explorer as an administrator, and you might be prompted for your credentials.

3.  Choose **StampWorkitemCache**, and then choose **Invoke**.

	>**Note:**  
	>The StampWorkitemCache method returns no data.

## Refresh the Version Control Cache

To refresh the version control cache, each user runs the **tf workspaces** command on any computer that must be updated. They must update any computer that uses version control and that connects to a team project collection whose databases were relocated.

To refresh the version control cache on client computers:

1.  On the client computer, open a Command Prompt window with administrative permissions, and change directories to *Drive*:\\Program Files (x86)\\Microsoft Visual Studio 12.0\\Common7\\IDE.

2.  At the command prompt, enter the following command, including the URL of the collection, which includes the server name and the port number of the new server:

    **tf workspaces /collection:http://** *ServerName:Port/VirtualDirectoryName/CollectionName*

    In the example deployment, a developer needs to refresh the version control cache for a project that is a member of the DefaultCollection collection, which is hosted in the FabrikamPrime deployment of Team Foundation Server. He types the following string:

    **tf workspaces /collection:http://FabrikamPrime:8080/tfs/DefaultCollection**

    For more information, see [Workspaces Command](../../../tfvc/workspaces-command.md).


## See Also

 [Open the Team Foundation Administration Console](../../command-line/open-admin-console.md) 

 [Workspaces Command](../../../tfvc/workspaces-command.md) 

 [Managing Data](https://msdn.microsoft.com/library/ms253169) 
