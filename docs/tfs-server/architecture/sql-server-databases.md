---
title: Team Foundation Server Databases
description: Team Foundation Server Databases
ms.assetid: 44d3053c-044e-420d-8d18-3137605e4d8a
ms.manager: douge
ms.author: elbatk
ms.date: 01/13/2017
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Team Foundation Server Databases

**TFS 2017** | **TFS 2015** | **TFS 2013**

You can manage Visual Studio Team Foundation Server more easily if you understand SQL Server, SQL Server Reporting Services, and how they both interact with Team Foundation Server.

## Interactions between Team Foundation Server and SQL Server

The following table describes the databases that might be present in your deployment of Team Foundation Server:

| Database | Used If | Description |
|---|---|---|
| Tfs_Configuration | Always | Stores data that describes your deployment of Team Foundation Server, including the name and location of the other databases. |
| Tfs_*Collection* | Always | One database for each team project collection. Each database stores the data for the team projects (version control, builds, and work items) in that collection. |
| Tfs_Warehouse | Reporting is configured | Data from all project collections is collected and stored in tables that are optimized for reporting. |
| Tfs_Analysis | Reporting is configured | Analysis Services database that organizes the data from the warehouse database into a cube structure.. |
| ReportServer | Reporting is configured | Stores reports and report configuration data for Reporting Services. |
| ReportServer_TempDB | Reporting is configured | Stores temporary reporting data for Reporting Services. |
| WSS_Config | Integration with SharePoint Products is configured | Stores configuration data about SharePoint Products. |
| WSS_Content | Integration with SharePoint Products is configured | Stores the content for the SharePoint Products sites. |
| WSS_AdminContent | Integration with SharePoint Products is configured | Stores the administration information for SharePoint Products. |


The following diagram illustrates the logical architecture of a deployment of Team Foundation Server that is integrated with both SQL Server Reporting Services and SharePoint Products:

![Database relationships with SharePoint Products](../_img/ic347963.png)  
One advantage of storing all your data in a database is that it simplifies data management because you don’t have to back up individual client computers. If you are familiar with backing up SQL Server databases, you will find backing up and restoring Team Foundation Server databases equally familiar. 

> [!TIP]
> Team Foundation Server requires that collation settings are case insensitive, are accent sensitive, and are not binary. If you want to use an existing installation of SQL Server with Team Foundation Server, you must verify that the collation settings meet these requirements. If they do not, installation of Team Foundation Server will fail. For more information, see [SQL Server Collation Requirements for Team Foundation Server](../install/sql-server/collation-requirements.md)

SQL Server must be installed on a server (or servers) that has the appropriate trust levels configured between it and the server (or servers) that hosts the logical Team Foundation application-tier.

## Interactions between Team Foundation Server and SQL Server Reporting Services

SQL Server Reporting Services is considered part of the logical application tier for Team Foundation Server. However, Reporting Services does not have to be installed on the same physical server as other logical aspects of that application tier, such as SharePoint Products.

When you configure user and group permissions and group membership in Team Foundation Server, you must also manually configure role membership and permissions appropriately for those users and groups in Reporting Services. For more information, see [SQL Server Reporting Services Roles](../install/sql-server/reporting-services-roles.md).

In addition to configuring role membership and permissions in Reporting Services, you must also manage the report reader account that Team Foundation Server uses to communicate with the report server. This account is frequently referred to as the data sources account for Reporting Services, or *TFSREPORTS*. Like the service account for Team Foundation Server, the report reader account must be a member of a workgroup or domain that is trusted by every computer that will connect to Team Foundation Server. For more information, see [Accounts required for installation of Team Foundation Server](../requirements.md#accounts).

> [!TIP]
> Even if you are logged on with administrative credentials, you might have trouble accessing Report Manager or the http://*localhost*/Reports sites unless you add these sites as Trusted Sites in Internet Explorer or start Internet Explorer as an administrator. To start Internet Explorer as an administrator, choose **Start**, **All Programs**, open the shortcut menu **Internet Explorer**, and then choose **Run as administrator**. For more information, see the [Microsoft Web site](http://go.microsoft.com/fwlink/?LinkId=111235).

## See also

-  [SQL Server Reporting Services Roles](../install/sql-server/reporting-services-roles.md)
-  [Grant permissions to view or create reports in TFS](../../report/admin/grant-permissions-to-reports.md)