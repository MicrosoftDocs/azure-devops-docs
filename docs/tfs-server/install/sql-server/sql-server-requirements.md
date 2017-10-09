---
title: SQL Server requirements for Team Foundation Server
description: SQL Server requirements for Team Foundation Server
ms.assetid: 22d562f4-8da1-4d6f-ab34-3403a3b9d471
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# SQL Server requirements for Team Foundation Server

**TFS 2013**

The most recent requirements information, which also covers TFS 2015, is [Requirements and Compatibility](../../requirements.md).

Team Foundation Server 2013 requires SQL Server 2012 with Service Pack 1 or SQL Server 2014.

You have multiple options:  
-   You can use the basic configuration of Team Foundation Server, which comes with the required version of SQL Server Express.  

    [Limitations of SQL Server Express](http://stackoverflow.com/questions/1169634/limitations-of-sql-server-express) (stackoverflow post)

-   You can [install one of the supported editions](install-sql-server.md).  
-   You can [verify and use an existing installation](#verify). 

Regardless of which option you choose, your instance of SQL Server must meet the following requirements:

| Category | Requirements |
| --- | --- |
| Supported editions | SQL Server 2014¹ (Express,² Standard,² and Enterprise editions) </br> SQL Server 2012 with SP1³ or newer service pack (Express,² Standard,² and Enterprise Editions) **Tip**: TFS Express only supports SQL Server Express instances that use the default instance name (SQLExpress). |
| Required for Team Foundation Server | Database Engine Services </br></br> Full-Text and Semantic Extractions for Search |
Required for reporting | Reporting Services – Native </br> Analysis Services |
| Collation settings | Must be accent sensitive </br> Must not be case sensitive </br> Must not be Binary </br> Must not be Binary - code point </br> For more information, see [SQL Server Collation Requirements for Team Foundation Server](collation-requirements.md) |
| Authentication | Windows authentication |
| Service account | You can use a domain account or a built-in account. |


> [!TIP]
> For TFS installations that require running SQL Server on dedicated hardware, hardware recommendations are available. For more information, see [System requirements for Team Foundation Server](../../requirements.md)

**Your limits on database read operations**  
Microsoft does not support any read operations against the TFS databases that originate from queries, scripts, .dll files, and so on, not provided by Microsoft or its support teams. If Microsoft Support determines that those read operations prevent them from solving your problem, the entire database will be unsupported. To return the database to a supported state, all unsupported read operations must stop.

¹ SQL Server 2014 has increased hardware requirements compared with previous versions. Certain configurations might hurt TFS performance. For more information, read [TFS 2013 Update 2: performance considerations using SQL Server 2014](http://support.microsoft.com/kb/2953452).

² Limited or no SQL Server High Availability support.

³ If you’re using SQL Server 2012 with SP1, we recommend you also apply [cumulative update 2 on top of SP1](http://support.microsoft.com/kb/2790947) to address a critical SQL Server bug around resource consumption. This isn’t a requirement because the bug only affects a small number of instances, but we wanted you to be aware of it. If you don’t apply CU2, you should apply a SQL Server hotfix ([KB2793634](http://support.microsoft.com/kb/2793634)) to addresses another (different) issue where SQL Server 2012 with SP1 might request an excessive amount of restarts.

## SQL Server High Availability features Supported by Team Foundation Server

SQL Server 2012 offers a new high availability (HA) feature that requires a Team Foundation Server-specific configuration. For more information, see: [Use SQL Server 2012 Always On Availability Groups with Team Foundation Server](use-always-on-groups.md)

|SQL Server HA feature|TFS support|Requires TFS Configuration|
|---|---|---|
|Always On Failover Cluster Instances|Yes|No|
|Always On Availability Groups|Yes|Yes|
|SQL Mirroring|Yes|No|
|SQL Replication|No|No|
|SQL Log Shipping|No|No|

## How to install SQL Server for Team Foundation Server

[Manually install SQL Server for Team Foundation Server](install-sql-server.md)     
Provides steps for how to install SQL Server for Team Foundation Server. Use these steps whether you are installing on a single server, across multiple servers, or for any combination of the two.

   [Add the service account for Team Foundation Server to the report server](https://msdn.microsoft.com/library/dd631908)     
Describes how to assign permission to the service account for Team Foundation Server to use the report server.

   [Verify SQL Server for Team Foundation Server](#verify)     
Provides steps to verify that a SQL Server instance is ready to work with Team Foundation Server.


### Provisioning SQL Server Databases for Team Foundation Server

You might want to create empty databases for Team Foundation Server, because doing so can be useful for managing the databases of multiple instances of Team Foundation Server on a single instance of SQL Server or hosting Team Foundation Server databases on a managed instance of SQL Server. Whatever the reason, this topic provides guidance for how to provision empty SQL Server databases for use with Team Foundation Server.

Conceptually, this procedure contains two steps:

1.  You create the databases and name them based on established guidelines.

2.  You identify these databases when you install Team Foundation Server.

Team Foundation Server has two databases that you can configure to use empty databases during installation.

-   Tfs\_*DatabaseLabel*Warehouse

-   Tfs\_*DatabaseLabel*Application

These databases must use the naming structure as shown, but you can either omit the string *DatabaseLabel* or use any custom string that uniquely describes both databases.

When you install Team Foundation Server, you must select the **Use pre-existing empty database(s)** check box. If you added a label, you must also type it in **Server Databases Label**. The installation wizard will then use the empty databases that you created to set up the configuration database.

> [!NOTE]
> Each project collection requires its own database, but you cannot configure Team Foundation Server to use an empty project collection database during installation. You must add an empty project collection database after installation, using Team Foundation Server Administration Console.




### Work with SQL Server Named Instances

You can choose to install Team Foundation Server using the default instance of SQL Server or a named instance of SQL Server. Depending on your business infrastructure and deployment needs, you might prefer to use a named instance. If you want to use a named instance in your deployment of Team Foundation Server, you must create that named instance in SQL Server before you install Team Foundation Server or create a team project collection that uses that instance. You cannot create a named instance during installation of Team Foundation Server.

To use a named instance of SQL Server in a deployment of Team Foundation Server, you must do one of the following:

* install SQL Server by using a named instance

* move or restore Team Foundation Server data to a named instance

* create a team project collection on a named instance



<a name="verify"></a>
### Verify SQL Server for Team Foundation Server

To ensure that your installation of SQL Server will work with Team Foundation Server, you should verify that the required SQL Server features are available, the underlying Windows services that are associated with SQL Server are running, the connection settings are configured, and the network ports are open.

If SQL Server Reporting Services is not on the server that is running Team Foundation Server and you are using reporting, you must install Client Tools Connectivity on Team Foundation Server.

If the Database Engine, Analysis Services, and Reporting Services are running on different instances of SQL Server, you must log on to each server to verify each instance. 

**Required Permissions**

To run SQL Server Configuration Manager, you must be a member of the **Users** security group on the server that hosts SQL Server. To use SQL Server Configuration Manager to modify services, you must be a member of the **Administrators** security group.

To run SQL Server Reporting Services Configuration Manager or SQL Server Management Studio, you must be a member of the **Administrators** security group on the operating system of the server that is running the instance of SQL Server that you want to verify. For SQL Server Management Studio, you must also be a member of the **Public** server role on the instance of SQL Server that you want to verify.

#### Verify Reporting Services

If you are not using Team Foundation Server reporting, you do not need to verify SQL Server Reporting Services or Analysis Services.

To verify that the Windows service is running using SQL Server Configuration Manager:

1.  On the server that is running SQL ServerSQL Server Reporting Services, launch **SQL Server Configuration Manager**.

2.  Choose **SQL Server Services**, and verify that **Running** appears in the **State** column for SQL Server **Reporting Services**.

To verify the report server URLs are running using SQL Server Reporting Services Configuration Manger:

1.  On the server that is running SQL Server Reporting Services, launch **Reporting Services Configuration Manager**.

    > [!NOTE]
    > On Windows Server, you must open the context menu for **Reporting Services Configuration Manager** and choose **Run as administrator**.

    The **Reporting Services Configuration Connection** dialog box appears.

2.  In **Server Name**, type the name of the report server. If you are using an instance name, type the name of the instance in **Report Server Instance**. Choose **Connect**.

3.  Choose **Report Manager URL**, and choose the link to the report manager website.

    The report manager website for the report server opens in an Internet browser window.

4.  Choose **Web Service URL**, and choose the link to the report server website.

    The report server website opens in an Internet browser window.



#### Verify the Database Engine and Analysis Services

On the instance of SQL Server that is running the Database Engine, you must ensure that you have the Full-Text Search feature installed. To verify this functionality, you open the **SQL Server Installation Center**, and then click the **New SQL Server stand-alone installation or add features to an existing installation**. If Full-Text Search is not available on the instance of SQL Server that is running the Database Engine, you must install Full-Text Search. For more information about how to work with **SQL Server Installation Center**, see [Manually install SQL Server for Team Foundation Server](install-sql-server.md).

To verify that Windows services are running by using SQL Server Configuration Manager:

1.  On the instance of SQL Server on which the Database Engine, SQL Server Analysis Services, or both are running, launch **SQL Server Configuration Manager**.

2.  Choose **SQL Server Services**, and verify that **Running** appears in the **State** column and the Start Mode is set to automatic for all services.

    -   To change the start mode of a service to start automatically, you must open the context menu for the service, choose **Properties**, choose the **Service** tab, click the drop-down list to the right of **Start Mode,** and then choose **Automatic**.

    -   To change a stopped service state to running, you must open the context menu for the stopped service and choose **Start**.

3.  Choose **SQL Server Network Configuration**, double-click **Protocols for MyInstanceName**, and verify that **Enabled** appears in the **Status** column for **TCP/IP**.

    If you specified the default instance during installation, *MyInstanceName* will be **MSSQLSERVER**.

To perform the following procedure, you must have SQL Server Management Studio installed. However, it does not have to be installed on the server that is running the instance of SQL Server that you are verifying. If you must install SQL Server Management Studio, see [Manually install SQL Server for Team Foundation Server](install-sql-server.md).

To verify a connection to an instance of SQL Server by using SQL Server Management Studio:

1.  Launch **SQL Server Management Studio**.

    The **Connect to Server** dialog box opens.

2.  In the **Server type** list, choose **Database Engine** or **Analysis Services**, depending on the type of installation that you are verifying.

3.  Type the name of the server to which you want to connect, and then choose **Connect**.

    If SQL Server is installed on a cluster, you must specify the server name, not the computer name. If you are using a named instance of SQL Server, you must specify the name of the server and the name of the instance. If you cannot connect to the server, verify the firewall settings, and then try to connect again.

4.  In **Object Explorer**, verify that a green arrow appears next to the server name.


### Conceptual Information about SQL Server and Team Foundation Server

   [Understanding SQL Server and SQL Server Reporting Services](../../architecture/sql-server-databases.md)     
Pulling it all together: Interactions between Team Foundation Server and SQL Server.

   [Team Foundation Server Databases](../../architecture/sql-server-databases.md)     
A comprehensive list of the databases used to store Team Foundation Server data.

   [SQL Server Reporting Services Roles](reporting-services-roles.md)     
A brief explanation of how roles work in SQL Server Reporting Services.

   [SQL Server Collation Requirements for Team Foundation Server](collation-requirements.md)     
Explains the Team Foundation Server requirements for SQL Server collation settings.

## See Also

[Install Team Foundation Server](../install-2013/install-tfs.md)  

[TFS upgrade requirements](../../upgrade/upgrade-2013/upgrade-2013-requirements.md)
