---
title: Manage TFS server configuration with TFSConfig
description: Use TFSConfig to manage the configuration of your TFS server from the command-line.
ms.assetid: 94424190-3b6b-4f33-a6b6-5807f4225b62
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Manage TFS server configuration with TFSConfig

**TFS 2018** | **TFS 2017** | **TFS 2015** | **TFS 2013** | **TFS 2012** | **TFS 2010**

> For versions earlier than TFS 2010, a few of these commands are available in the TFSAdminUtils command-line tool.

The **TFSConfig** command-line tool can be used to perform a variety of administrative actions for
your on-premises deployment of Team Foundation Server (TFS). 

**TFSConfig** can be run from any machine on which TFS has been installed. It is installed in the 
Tools directory - by default, this will be 
- TFS 2018: `%programfiles%\Microsoft Team Foundation Server 2018\Tools`
- TFS 2017: `%programfiles%\Microsoft Team Foundation Server 15.0\Tools`
- TFS 2015: `%programfiles%\Microsoft Team Foundation Server 14.0\Tools`
- TFS 2013: `%programfiles%\Microsoft Team Foundation Server 12.0\Tools`
- TFS 2012: `%programfiles%\Microsoft Team Foundation Server 11.0\Tools`
- TFS 2010: `%programfiles%\Microsoft Team Foundation Server 2010\Tools`

For many commands to operate correctly, **TFSConfig** will need to be able to connect to the various servers
and services which are part of your TFS deployment, and the user running **TFSConfig** will need to have administrative
permissions for these same servers and services. Requirements for specific commands will be called out below.

Many **TFSConfig** command must be run from an elevated Command Prompt, even if the running user has administrative 
credentials. To open an elevated Command Prompt, click Start, right-click Command Prompt, and then click Run as 
Administrator. For more information, see: [User Account Control](http://go.microsoft.com/fwlink/?LinkId=111235).

You can also perform administrative actions interactively using the administration console for TFS. 
See [Configure and manage TFS resources](https://msdn.microsoft.com/library/d553c7b0-e794-41dc-a7ef-91d7a5e1e46b).


### Listing commands and getting help
To display a full list of **TFSConfig** commands, use the **help** command:

	TFSConfig help

To get help for an individual command, use the **help** command and specify the name of the command with which you want help. For example, to get help for the **accounts** command:

	TFSConfig help accounts

## Accounts
[!INCLUDE [ACCOUNTS](_shared/accounts.md)]
<hr/>

## AddProjectReports
[!INCLUDE [ADDPROJECTREPORTS](_shared/addProjectReports.md)]
<hr/>

## Authentication
[!INCLUDE [AUTHENTICATION](_shared/authentication.md)]
<hr/>

## Certificates
[!INCLUDE [CERTIFICATES](_shared/certificates.md)]
<hr/>

## ChangeServerID
[!INCLUDE [CHANGESERVERID](_shared/changeserverid.md)]
<hr/>

## CodeIndex
[!INCLUDE [CODEINDEX](_shared/codeindex.md)]
<hr/>

## Collection
[!INCLUDE [COLLECTION](_shared/collection.md)]
<hr/>

## ColumnStoreIndex
[!INCLUDE [COLUMNSTOREINDEX](_shared/columnstoreindex.md)]
<hr/>

<a name="configure-email"></a>
## ConfigureMail
[!INCLUDE [CONFIGUREMAIL](_shared/configuremail.md)]
<hr/>

## DBCompression
[!INCLUDE [DBCOMPRESSION](_shared/dbcompression.md)]
<hr/>

## DeleteTestResults
[!INCLUDE [DELETETESTRESULTS](_shared/deletetestresults.md)]
<hr/>

## Identities
[!INCLUDE [IDENTITIES](_shared/identities.md)]
<hr/>

## Jobs
[!INCLUDE [JOBS](_shared/jobs.md)]
<hr/>

## Lab /delete
[!INCLUDE [LAB](_shared/lab-delete.md)]
<hr/>

## Lab /dns
[!INCLUDE [LAB](_shared/lab-dns.md)]
<hr/>

## Lab /hostgroup
[!INCLUDE [LAB](_shared/lab-hostgroup.md)]
<hr/>

## Lab /libraryshare
[!INCLUDE [LAB](_shared/lab-libraryshare.md)]
<hr/>

## Lab /settings
[!INCLUDE [LAB](_shared/lab-settings.md)]
<hr/>

## OfflineDetach
[!INCLUDE [OFFLINEDETACH](_shared/offlinedetach.md)]
<hr/>

## PrepareClone
[!INCLUDE [PREPARECLONE](_shared/prepareclone.md)]
<hr/>

## Proxy
[!INCLUDE [PROXY](_shared/proxy.md)]
<hr/>

## RebuildWarehouse
[!INCLUDE [REBUILDWAREHOUSE](_shared/rebuildwarehouse.md)]
<hr/>

## RegisterDB
[!INCLUDE [REGISTERDB](_shared/registerdb.md)]
<hr/>

## RemapDBs
[!INCLUDE [REMAPDBS](_shared/remapdbs.md)]
<hr/>

## RepairJobQueue
[!INCLUDE [REPAIRJOBQUEUE](_shared/repairjobqueue.md)]
<hr/>

## Settings
[!INCLUDE [SETTINGS](_shared/settings.md)]
<hr/>

## Setup
[!INCLUDE [SETUP](_shared/setup.md)]
<hr/>

## Unattend
[!INCLUDE [UNATTEND](_shared/unattend.md)]
<hr/>

## Deprecated commands
[!INCLUDE [DEPRECATED](_shared/deprecated.md)]
