---
title: Service accounts and dependencies in Team Foundation Server
description: Service accounts and dependencies in Team Foundation Server
ms.assetid: cf314289-96ef-4f70-9c2b-a130d7287442
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Service accounts and dependencies in Team Foundation Server

**TFS 2018** | **TFS 2017** | **TFS 2015** | **TFS 2013**

You can better manage Visual Studio Team Foundation Server (TFS) if you understand the services and several service accounts that every deployment of TFS includes and on which every deployment depends. Depending on how you have installed and configured TFS, these services and service accounts might all run on one computer, or they might run on many computers. This changes certain aspects of managing your deployment. For example, if the server-side components of your deployment run on more than one computer, you must ensure that the service accounts your deployment uses have the access and permissions they require to function correctly.

Team Foundation Server has services and service accounts that run on the following computers in a deployment:

-   any server that hosts one or more databases for Team Foundation Server

-   any server that hosts components of the application tier for Team Foundation

-   any computer that is running Team Foundation Server Proxy

-   any build computer

-   any test machine

-   any computer that is running one or more components of Visual Studio Lab Management

You can install and deploy different features of TFS in various ways. The distribution of features in your deployment determines what services and service accounts run on which physical computers. In addition, you might need to manage the service accounts for software programs that are configured to work with TFS, such as the service accounts for SharePoint Products and SQL Server.

## Service Accounts for Team Foundation Server

Although TFS uses several service accounts, you can use the same domain or workgroup account for most or all of them. For example, you can use the same domain account "Contoso\\Example" as both the service account for Team Foundation Server (*TFSService*) and the data sources account for SQL Server Reporting Services (*TFSReports*). However, different service accounts can require different permission levels. For example, *TFSService* must have the **Log on as a service** permission, and *TFSReports* must have the **Allow log on locally** permission. If you use the same account "Contoso\\Example" for both, you must grant both of these permissions to it. In addition, *TFSService* requires significantly more permissions to operate correctly than those that *TFSReports* requires, as the table later in this topic shows. For security purposes, you should consider using separate accounts for these two service accounts.

> [!IMPORTANT]
> You must not use the account that was used to install Team Foundation Server as the account for either of these service accounts.

If you have deployed Team Foundation Server in an Active Directory domain, you should set the **Account is sensitive and cannot be delegated** option for service accounts. For example, in the following table, you should set that option for *TFSService*. For more information about required service accounts and placeholder names used in documentation for Team Foundation Server, see the topic "[Accounts required for installation of Team Foundation Server](../requirements.md#accounts)" in the installation guide for Team Foundation. For more information about how to restrict account delegation in Active Directory, see the following page on the Microsoft Web site: [Enabling Delegated Authentication](http://go.microsoft.com/fwlink/?LinkId=61995).

Because you must manage several service accounts, each service account is referred to by a placeholder name that identifies its function, as listed in the table later in this topic. The placeholder name is not the actual name of the account that you use for each service account. The actual name of the account varies depending on your deployment. In the previous example, the account used for both *TFSService* and *TFSReports* was "Contoso\\Example." In your own deployment, you might create domain accounts with the specific names of "TFSService" and "TFSReports," or you might use the system account Network Service as the service account for Team Foundation Server.

> [!IMPORTANT]
> Unless specifically stated otherwise, no groups or accounts in the following table should be members of the Administrators group on any of the servers in your deployment of Team Foundation Server.

The following table shows all the service accounts that you might use in a deployment of TFS:


| Service Account | Placeholder name and usable account type | Required Permission and Group Membership | Notes |
| --- | --- | --- | --- |
| Service account for Team Foundation Server | *TFSService*, which can be a local account, a domain account, Local Service in a workgroup, or Network Service in a domain | **Log on as a service** on the application-tier server </br> **Farm Administrators** group for any SharePoint Web applications that Team Foundation Server uses1 </br> **TFSExecRole**, or if this role does not exist for the database, a combination of the following roles for any databases that Team Foundation Server uses: </br> * db_owner </br> * db_create | This service account is used for all of the Web services for Team Foundation Server. If you use a domain account for this account, it must be a member of a domain that all computers throughout the deployment fully trust. |
| Data sources account for SQL Server Reporting Services | *TFSReports*, which can be a local account, a domain account, or Local Service in a workgroup | **Allow log on locally** on the application-tier server and on the server that is running SQL Server Reporting Services </br> **TFSWareHouseDataReader** on the report server | This service account retrieves data for reports from Reporting Services. |
| Service account for Team Foundation Build | *TFSBuild*, which can be a local account, a domain account, or Local Service in a workgroup | **Log on as a service** | This service account is used when builds are configured and when build status information is communicated between the build controller and the build agents. |
| Service account for Lab Management | *TFSLab*, which can be a local account, a domain account, Local Service in a workgroup, or Network Service in a domain | **Log on as a service** | This service account is used when information about Lab Management is communicated between Team Foundation Server and the lab agent that is running on a virtual machine. |
| Service account for Team Foundation Server Proxy | *TFSProxy*, which can be a local account, a domain account, Local Service in a workgroup, or Network Service in a domain | **Log on as a service** | This service account is used for all of the proxy services. If you use a domain account for this account, it must be a member of a domain that all computers throughout the deployment fully trust. |
| Service account for Test Agent and Test Agent Controller | *TFSTest*, which can be a local account, a domain account, or Network Service in a domain. | **Log on as a service** | This service account is used when information about tests is communicated between the test agent controller and the test agent. | 
| Service accounts for SharePoint Web applications | *WebAppService* | **Allow log on locally** | You must add at least one service account for each SharePoint Web application that you configure for use with Team Foundation Server. This service account is used to create team project portals and to enable dashboard functionality. |
| Service account for VSTS | Account Service (*CollectionName*) | None. This account is only used if you are using a hosted deployment of TFS. It is automatically created for you, and can be viewed through the administration page of Team Web Access. | This service account is created automatically when you create a collection in VSTS, and is used when clients communicate with the hosted service. |

1 You can integrate your deployment with SharePoint Products without this permission, but you must perform additional steps if the service account is not a member of the Farm Administrators group. For more information, see [Integrate Team Foundation Server with SharePoint Products Without Administrative Permissions](https://msdn.microsoft.com/library/ee462864).

## Services That Run Under Service Accounts

The following services run under service accounts in a deployment of Team Foundation Server:

|**Service name**|**Service account**|**Logical Tier**|
|---|---|---|
|Code Coverage Service|*TFSService*|application tier|
|Team Foundation Server Web Services|*TFSService*|application tier|
|SQL Server Reporting Services **(MSSQLSERVER** or *InstanceName* if using a named instance)|Local System or a domain account|application tier|
|Report Web Service|Local System, Network Service, or a domain account|application tier|
|SharePoint Administration (if SharePoint Products is installed and configured for use with Team Foundation Server)|Local System, Network Service, or a domain account|application tier|
|SharePoint Timer (if SharePoint Products is installed and configured for use with Team Foundation Server)|Domain account|application tier|
|Visual Studio Team Foundation Build Service Host (if Team Foundation Build is installed)|*TFSBuild*|build computer|
|Visual Studio Team Foundation Background Job Agent|*TFSService*|application tier|
|Visual Studio Test Controller|*TFSTest*|any computer|
|Visual Studio Test Agent|*TFSTest*|test computer|
|Analysis Server **(MSSQLSERVER** or *InstanceName* if you are using a named instance)|Local System or a domain account|data tier|
|SQL Server Browser|Local Service or a domain account|data tier|
|SQL Server (**MSSQLSERVER** or *InstanceName* if using a named instance)|Local System, Network Service, or a domain account|data tier|
|SQL Server Agent (**MSSQLSERVER** or *InstanceName* if using a named instance)|Local System, Network Service, or a domain account|data tier|
|Account Service (*CollectionName*)|Automatic|web tier (VSTS only)|

For more information about service accounts for SQL Server, see the following page on the Microsoft Web site: [SQL Server Books Online](http://go.microsoft.com/fwlink/?LinkID=62398). For the most recent information about service accounts in Team Foundation, see [Team Foundation Server install guide](../install/get-started.md).

> [!NOTE]
> If you change the service account for Team Foundation Build, you must make sure that the new service account is a member of the Build Services group. You must also make sure that the account has read/write permissions to the temporary folders and the ASP.NET temporary folder. Similarly, if you change the service account for the Team Foundation Server Proxy service, you must make sure that the account is a member of the appropriate groups. For more information, see [Configure Your Build System](https://msdn.microsoft.com/library/ms181711).


## Q & A 

### Q: Are service accounts assigned to an access level group?

**A:** By default service accounts are added to the default access level. If you make Stakeholder the default access level, you must add the TFS service account to the Basic or Advanced group.

### Q: Do service accounts require a license?

**A:** No. Service accounts don’t require a separate license.

### Q: How do I change the password or account for a service account?

**A:** See the following topics:

* [Change the service account or password for SQL Server Reporting Services](change-service-account-or-password-sql-reporting.md) 

* [Change the service account or password for Team Foundation Server](change-service-account-password.md)