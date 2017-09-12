---
title: Configure Lab Management with TFSLabConfig for Team Foundation Server
description: Use TFSLabConfig to manage and configure the lab service provide by Visual Studio Lab Management.
ms.assetid: 329cd673-d30b-4697-b1a9-ff160a5bff56
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Configure Lab Management with TFSLabConfig

**TFS 2017** | **TFS 2015** | **TFS 2013** | **TFS 2012** | **TFS 2010**

Team Foundation Server includes a command-line tool to help you configure and manage the lab service provide by Visual Studio Lab Management.

The **TFSLabConfig** command-line tool is located in Drive:\Program Files\TFS <version>\Tools on Team Foundation Server application tier -- by default, this will be:
- TFS 2015: `%programfiles%\TFS 14.0\Tools`
- TFS 2013: `%programfiles%\TFS 12.0\Tools`
- TFS 2012: `%programfiles%\TFS 11.0\Tools`
- TFS 2010: `%programfiles%\TFS 2010\Tools`

It is also located in Drive:\Program Files\Microsoft Visual Studio &lt;version&gt;\Common7\IDE on the client machine where Microsoft Test Manager is installed.

**Required Permissions:**

To use TFSLabConfig, you must have the appropriate permissions for the operation that you want to perform. The required permissions are described for each command in the command reference topic.


## CreateTeamProjectHostGroup
[!INCLUDE [CreateTeamProjectHostGroup](_shared/CreateTeamProjectHostGroup.md)]
<hr/>

## CreateTeamProjectLibraryShare
[!INCLUDE [CreateTeamProjectLibraryShare](_shared/CreateTeamProjectLibraryShare.md)]
<hr/>

## DeleteTeamProjectHostGroup
[!INCLUDE [DeleteTeamProjectHostGroup](_shared/DeleteTeamProjectHostGroup.md)]

## DeleteTeamProjectLibraryShare
[!INCLUDE [DeleteTeamProjectLibraryShare](_shared/DeleteTeamProjectLibraryShare.md)]

## ListTeamProjectCollectionHostGroups
[!INCLUDE [ListTeamProjectCollectionHostGroups](_shared/ListTeamProjectCollectionHostGroups.md)]

## ListTeamProjectCollectionLibraryShares
[!INCLUDE [ListTeamProjectCollectionHostGroups](_shared/listteamprojectcollectionlibraryshares.md)]

## ListTeamProjectHostGroups
[!INCLUDE [ListTeamProjectHostGroups](_shared/listteamprojecthostgroups.md)]

## ListTeamProjectLibraryShares 
[!INCLUDE [ListTeamProjectLibraryShares](_shared/listteamprojectlibraryshares.md)]

## Permissions
[!INCLUDE [Permissions](_shared/permissions.md)]
<hr/>

## TCPHostGroup
[!INCLUDE [TCPHostGroup](_shared/tpchostgroup.md)]
<hr/>

## TPCLibraryShare
[!INCLUDE [TPCLibraryShare](_shared/tpclibraryshare.md)]
<hr/>

## TPHostGroup
[!INCLUDE [TPHostGroup](_shared/tphostgroup.md)]
<hr/>

## TPLibraryShare
[!INCLUDE [TPLibraryShare](_shared/tplibraryshare.md)]
<hr/>
