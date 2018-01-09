---
title: Restore data to a different server than the current one for TFS
description: Restore data to a different server than the current one for TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 7d5d9c39-ea7b-44bc-ae69-a2ce10a0c27e
ms.manager: douge
ms.author: elbatk
ms.date: 12/15/2016
---

# Restore data to a different server than the current one for TFS

**TFS 2017** | **TFS 2015** | **TFS 2013**

> [!NOTE]
> Check out the [Back up and Restore concepts page](./back-up-restore-tfs.md#diff-server) for an introduction to restoring data to a different server for TFS. 
>
> SharePoint integration with TFS is deprecated after TFS 2017.


<a name="RequiredPermissions"></a>

## Prerequisites

To perform this procedure, you must be a member of the following groups
or have the following permissions:

-   A member of the **Administrators** security
    group on the server or servers that are running the administration
    console for Team Foundation.

-   Either a member of the **SQL Server System
    Administrator** security group or your **SQL
    Server Perform Back Up and Create Maintenance Plan** permission
    must be set to **Allow** on the instance of
    SQL Server that will host the databases.

-   A member of the **sysadmin** security group
    for the databases for Team Foundation and for the Analysis
    Services database.

-   An authorized user of the TFS\_Warehouse database.

-   If the deployment uses SharePoint Products, a member of the Farm
    Administrators group for the farm to which you are restoring the
    databases for SharePoint Products.

In addition to these permissions, you might have to address the
following requirements on a computer that is running Windows Server
2008, Windows Server 2008 R2, Windows Vista, or Windows 7:

-   To follow a command-line procedure, you might have to open an
    elevated command prompt by clicking
    **Start**, right-clicking **Command Prompt**, and then clicking
    **Run as Administrator**.

-   To follow a procedure that requires Internet Explorer, you might
    have to start it as an administrator by clicking
    **Start**, clicking **All
    Programs**, right-clicking **Internet
    Explorer**, and then clicking **Run as
    administrator**.

-   To access Report Manager, reports, or websites for Reporting
    Services, you might have to add these sites to the list of trusted
    sites in Internet Explorer or start Internet Explorer as
    an administrator.

For more information, see the technet article: [User Account Control](http://go.microsoft.com/fwlink/?LinkId=111235).

<a name="BackupData"></a>
## Step 1: Back up data

To restore data from the original deployment of Team Foundation Server,
you must have a complete set of data backups for the SQL
Server databases. If the data was encrypted, you must also have the
encryption key and its password.

See [Back Up Team Foundation Server](manually-backup-tfs.md)
and [Back Up the Reporting Services Encryption Key](manually-backup-tfs.md#reporting-encyption-key).

> **Important:** 
>
> You must back up the TFS\_Warehouse and TFS\_Analysis databases if your
> deployment is configured to use SQL Server Reporting Services and you
> want to restore those databases to a different server. You cannot just
> rebuild the warehouse, as you can when you restore to the same server
> or instance. You must also back up the databases for SharePoint Products
> if you want to move them to the server or instance to which you are
> restoring the databases for Team Foundation. These databases include the
> administrative database for SharePoint Products
> (SharePoint\_AdminContent\_*ID*) and the
> content and configuration databases.

<a name="InstallAndConfigure"></a>
## Step 2: Install and Configure SQL Server on the New Hardware

To restore data for Team Foundation, you must install SQL Server on the
computer to which you want to move the databases for Team Foundation
Server. The version of SQL Server that you install must exactly match
the version on the original server that hosted the databases. This
requirement includes the service-pack level, the collation settings, and
the language edition. If the match is not exact, you might not be able
to restore the data, or Team Foundation Server might not operate
correctly even if you can restore the data.

Install SQL Server in the new environment, prepare SQL Server for restoration of data for Team Foundation, and make sure that it
is operational. As an alternative, create an instance of SQL Server
on a server that already has a matching version installed.

For more information, see [Installing Team Foundation Components](../../install/get-started.md).

<a name="StopServices"></a>
## Step 3: Stop Services that Team Foundation Server Uses

Before you can restore data, you must stop all services that Team
Foundation Server uses on every server. If you have optional components
installed, such as SharePoint Products or Reporting Services, you must
stop those services on the servers where these components are installed.

To stop services that Team Foundation Server uses:

1.  On the server that is running the application-tier services for Team
    Foundation, open a Command Prompt window, and change directories to
    *Drive*:\\%programfiles%\\TFS 2010\\Tools.

2.  Type the following command: ```TFSServiceControl quiesce```

    For more information, see [TFSServiceControl Command](../../command-line/tfsservicecontrol-cmd.md).

<a name="RestoreDB"></a>

## Step 4: Restore the Databases

After you stop the services, you can restore data for Team
Foundation by using tools that SQL Server provides.

> **Warning**: 
> You must restore all databases to the same point in time, or the
> databases will be out of synchronization. The following procedures
> assume that you are using marked transactions to help ensure
> synchronization of the databases that Team Foundation Server uses. For
> more information, see [Back Up Team Foundation Server](manually-backup-tfs.md). If
> your deployment uses SharePoint Products, you should follow the guidance
> for the version of that product in your deployment. For more
> information, see [Backup and Recovery (SharePoint Server 2010)](http://go.microsoft.com/fwlink/?LinkId=203842), 
> [Protecting and restoring a farm (Office SharePoint Server 2007)](http://go.microsoft.com/fwlink/?LinkId=203843), 
> or [Protecting and restoring a farm (Windows SharePoint Services 3.0)](http://go.microsoft.com/fwlink/?LinkId=203844).

To open the Restore Database dialog box:

1.  Log on to the server to which you want to restore databases.

2.  Click **Start**, point to **All Programs**, point to **Microsoft SQL Server 2008**, and then click
    **SQL Server Management Studio**.

    > **Note:** 
    > For more information about how to restore databases, see the following
    > page on the Microsoft website: [Implementing Restore Scenarios for SQL
    > Server Databases](http://go.microsoft.com/fwlink/?LinkId=115277).

    The **Connect to Server** dialog box opens.

3.  In the **Server type** list, click **Database Engine**.

4.  In **Server name**, click or type the name of
    the data-tier server and database instance, and then click **Connect**.

    > **Note:** 
    > If SQL Server is installed on a cluster, the server name is the name of
    > the cluster and not the computer name.

    SQL Server Management Studio opens.

5.  Expand the **Databases** node to show the
    list of databases that make up the data tier for Team Foundation.

Complete the next procedure to restore a database (steps listed below databases) for the following
databases on each server where you have installed and configured SQL
Server:

-   TFS\_Configuration -- This database name might include additional characters between
    **TFS\_** and **Configuration**.

-   TFS\_*CollectionName* -- Each team project collection has its own database. For example, if you
    have five team project collections, you will have five databases, each
    distinguished by the name of the team project collection. These
    databases might be on the same instance of SQL Server, on separate
    instances, or on separate physical servers. You must back up each
    database and then restore each database.

-   TFS\_Warehouse -- This database name might include additional characters between
    **TFS\_** and **Warehouse**

On the server that is running Reporting Services, if
you have one configured for your deployment and must restore the
databases to a different server:

-   ReportServer -- If you used a named instance, this database will be named
    ReportServer\$*InstanceName*.

-   ReportServerTempDB -- If you used a named instance, this database will be named
    ReportServerTempDB\$*InstanceName*.

On the server or servers that are running SharePoint
Products, if you have configured your deployment with one or more
SharePoint web applications and must restore the databases to a
different server:

-   The content database for SharePoint Products (WSS\_Content) -- The names of the databases that contain data for SharePoint
    Products will vary based on the version of SharePoint Products that is installed
    and whether the person who installed it customized the name.
    Additionally, these databases might not reside on the data-tier
    server if SharePoint Products is installed on a separate server from
    Team Foundation Server. If the databases reside on different servers,
    you must back up, restore, and configure them separately from Team
    Foundation Server. However, you should synchronize the maintenance of
    the databases to avoid synchronization errors.

    To restore the databases that SharePoint Products uses, you should
    follow the guidance for the version of the software that your
    deployment uses. For more information, see [Backup and Recovery
    (SharePoint
    Server 2010)](http://go.microsoft.com/fwlink/?LinkId=203842),
    [Protecting and restoring a farm (Office SharePoint
    Server 2007)](http://go.microsoft.com/fwlink/?LinkId=203843), or
    [Protecting and restoring a farm (Windows SharePoint
    Services 3.0)](http://go.microsoft.com/fwlink/?LinkId=203844).

On the server or servers that are running Microsoft
Project Server, if you have integrated your deployment with Project
Server and must restore the databases to a different server:

-   The databases on which your deployment of Project Server depends.
    For more information, see [Restore databases (Project
    Server 2007)](http://go.microsoft.com/fwlink/?LinkId=211794) or
    [Restore databases (Project
    Server 2010)](http://go.microsoft.com/fwlink/?LinkId=211795).

On the server that is running SQL Server Analysis
Services, if you have one configured for your deployment and must
restore the databases to a different server:

-   TFS\_Analysis

For more information about these databases, see [Understanding Backing Up Team Foundation Server](backup-db-architecture.md).

**To restore a database**

1.  Right-click the database that you want to restore, point to
    **Tasks**, point to **Restore**, and then click **Database**.

    The **Restore Database** dialog box opens.

2.  Under **Source for restore**, click **From Device**, and then click the ellipsis button (**...**).

3.  In the **Specify Backup** dialog box, specify
    the location of the backup file, and then click
    **OK**.

    You must restore the full backup first, followed by the differential
    backup, and then the transaction log backups, in the order in which
    they were created.

4.  Under **Select the backup sets to restore**,
    specify the backup sets to restore.

    Make sure that you restore the full, differential, and transaction
    log databases if you created backup sets with marked transactions.
    For more information about marked transactions, see [Back Up Team Foundation Server](manually-backup-tfs.md).

5.  In the **Select a page** pane, click  **Options**, and then select the **Overwrite the existing database** check box.

6.  In the **Restore the database files as**
    list, verify that the paths match your current database paths.

7.  Under **Recovery state**, perform one of the
    following steps:

    -   If you are using marked transactions, click
        **Leave the database non-operational, and do not
        roll back uncommitted transactions. Additional transaction logs
        can be restored. (RESTORE WITH RECOVERY)**.

    -   If you are not using marked transactions and you are not
        applying additional transaction logs, click
        **Leave the database ready to use**.

    -   If you are not using marked transactions but you are applying
        additional transaction logs, click **Leave the
        database non-operational**.

8.  Click **OK**.

    A progress icon appears.

9.  When the **SQL Server Management Studio**
    dialog box appears and confirms successful restoration, click
    **OK** to return to **Object Explorer**.

10. If you are using marked transactions, right-click the database that
    you just restored, point to **Tasks**, point
    to **Restore**, and then click
    **Transaction Log**.

    The **Restore Transaction Log** window opens.

11. On the **General** page, make sure that the
    appropriate database is highlighted in the
    **Database** list.

12. Under **Select the transaction log to
    restore**, select the check box that is next to the log that
    you want to restore.

13. Under **Restore to**, click
    **Marked transaction**.

    The **Select Marked Transaction**
    window opens.

14. In the **Select the marked transaction to stop the
    restore at** list, select the check box that is next to the
    transaction mark that you want to use for the restoration, and then
    click **OK**.

    > **Important:** 
    > You must use the same transaction mark that has the same date and time
    > for all databases to successfully restore the data.

15. In the **Restore Transaction Log** window,
    click **OK**.

    A progress icon appears.

16. When the **SQL Server Management Studio**
    dialog box appears and confirms successful restoration, click
    **OK**.

    For more information, see the following page on the Microsoft
    website: [Applying Transaction Log Backups](http://go.microsoft.com/fwlink/?LinkId=115460).

> **Note:**
> If you restored the databases for Reporting Services, you must also
> restore their encryption key. For more information, see the following
> topic on the Microsoft website: [Restoring the Encryption Key (Reporting
> Services Configuration)](http://go.microsoft.com/fwlink/?LinkId=158327).

<a name="RedirectSPT"></a>
## Step 5: Redirect SharePoint Products to the New Location of the Content Database

You can skip this procedure if SharePoint Products is not configured
for use with your deployment of Team Foundation Server or if you are not
restoring the databases for SharePoint Products.

After you have restored the content database for SharePoint Products
(WSS\_Content), you must redirect the server that is running SharePoint
Products to the new location of that database. This database must be
operational before you can reconfigure Team Foundation Server with the
new locations of its databases.

To redirect project sites to use the content database on the new data-tier server:

-   Log on to the server that hosts SharePoint Products, and redirect
    it to use the content databases on the new server.

    For more information, see
    [Redirect SharePoint Products to Use a New Content Database](https://msdn.microsoft.com/en-us/library/cc668750).

<a name="ChangeSQLRS"></a>
## Step 6: Change the Database in Reporting Services Configuration Manager

You can skip this procedure if you do not have a report server that is
configured for use with your deployment of Team Foundation Server or you
are not restoring the databases for the report server.

After you redirect SharePoint Products to the new content databases, you
must redirect Reporting Services to the new location of its databases
(ReportServer and ReportServer\_TempDB). Unless you perform this
procedure, no reports will be available for any team project. These
databases must be operational before you can reconfigure Team Foundation
Server with the new locations of its databases.

To redirect Reporting Services to connect to the new server:

-   Log on to the server that hosts Reporting Services, and redirect it
    to connect to the databases on the new server.

    For more information, see [Redirect Reporting Services to Connect to a Different Server](https://msdn.microsoft.com/en-us/library/cc668756).

<a name="ConfigNewSQL"></a>
## Step 7: Prepare SQL Server for Team Foundation Server

Before the restored databases will work correctly, you must use the
**TFSConfig PrepSQL** command to prepare SQL Server to host databases
for Team Foundation Server. This command creates the TFSEXECROLE and
TFSADMINROLE groups on the new server or instance and also adds the
system messages that are required for operation.

> **Note:**
> If you do not have access to the command-line tools for Team Foundation
> Server, you can install them by installing Team Foundation Server.
> Install it on the computer that will be the application-tier server, but
> cancel the configuration wizard that appears after the software is
> installed.

To prepare SQL Server to host databases for Team Foundation Server: 

1.  Log on to the server that hosts the application tier for Team
    Foundation, open a Command Prompt window, and change directories to
    *Drive*:\\%programfiles%\\TFS 2010\\Tools.

2.  Type the following command, where *ServerName* is the name of the instance of
    SQL Server that hosts a database for Team Foundation Server, in
    either *ServerName* or *ServerName\InstanceName format:

    **TFSConfig PrepSQL /SQLInstance:** *ServerName*

3.  Repeat this step for every new server or instance to which you
    restored a database for Team Foundation Server.

<a name="ChangeOwnership"></a>
## Step 8: Change the Ownership of the Restored Databases

You must use the **TFSConfig Accounts ResetOwner** command to change the
database owner login for the restored databases to the current user.
Before you perform the next sequence of steps, make sure that you are
logged on with an appropriate user account. For example, you can use the
account with which Team Foundation Server was installed, which the
installation guide refers to as TFSSETUP. At a minimum, the account must
be a member of the **Team Foundation
Administrators** group in Team Foundation Server and a member of
the **sysadmin** group in SQL Server.

To change the ownership of the restored databases to the current user: 

1.  Log on to the application-tier server for Team Foundation, open a
    Command Prompt window, and change directories to *Drive*:\\%programfiles%\\TFS 2010\\Tools.

2.  Type the following command, where *ServerName* (in either
    *ServerName* or *ServerName*\*InstanceName* format) is the name of the
    instance of SQL Server that hosts a database for Team Foundation
    Server and *DatabaseName* is the name
    of the configuration database (by default, TFS\_Configuration):

    **TFSConfig Accounts /ResetOwner /SQLInstance:**
    *ServerName* **/DatabaseName:**
    *DatabaseName*

    This command line will change the ownership for all databases that
    Team Foundation Server uses.

<a name="RedirectSQLRTPC"></a>
## Step 9: Redirect Team Foundation Server to Remote Collection Databases

You can skip this procedure if all databases for collections, Analysis
Services, and reporting are on the same server and instance as the
configuration database.

You must redirect Team Foundation Server to any collection databases
that are hosted on a separate server or servers from the configuration
database. In addition, you must run the RemapDBs command if you are
using a named instance or if either the TFS\_Analysis or the
TFS\_Warehouse database is hosted on a different server from
TFS\_Configuration.

To redirect Team Foundation Server to remote databases:

1.  Log on to the application-tier server for Team Foundation, open a
    Command Prompt window, and change directories to
    *Drive*:\\%programfiles%\\TFS 2010\\Tools.

2.  Type the following command, where
    *ServerName* is the name of the instance of
    SQL Server that hosts the configuration database for Team
    Foundation Server,
    *TFS\_Configuration* is the name of the
    restored configuration database for Team Foundation Server, and
    *ServerName2* is the name of the server
    that hosts the remote collection. You can have as many ServerName
    parameters as you have servers that are configured in
    your deployment. You can specify *ServerName* in either *ServerName* or
    *ServerName*\*InstanceName* format. You must specify the
    instance name if you are not using the default instance:

    **TFSConfig RemapDBs /DatabaseName:** *ServerName***;** *TFS\_Configuration* **/SQLInstances:**
    *ServerName,ServerName2* **/AnalysisInstance:** *ServerName2* **/AnalysisDatabaseName:**
    *DatabaseName*

    > **Note:**
    > In **/SQLInstances**, you must specify all instances, separated by
    > commas, of SQL Server that host databases for Team Foundation Server.
    > For more information, see [RemapDBs Command](../../command-line/tfsconfig-cmd.md#remapdbs).

<a name="UpdateNetworkService"></a>
## Step 10: Update All Service Accounts

You must update the service account for Team Foundation Server
(TFSService) and the data sources account (TFSReports). Even if these
accounts have not changed, you must update the information in order
to make sure that the identity and the format of the accounts are
appropriate for the new server.

> **Note:**
> If you have more than one application-tier server in your deployment,
> you must update the service accounts on each of those servers.

To update service accounts:

1.  On the report server, open Computer Management, and start the
    following components if they are not already started:

    -   ReportServer or ReportServer\$<span
        *InstanceName* (application pool)

    -   SQL Server Reporting Services (*TFSINSTANCE*)

2.  On the application-tier server, open a Command Prompt window, and
    change directories to
    *Drive*:\\%programfiles%\\ TFS 2010\\Tools.

3.  At the command prompt, type the following command to add the service
    account for Team Foundation, where
    *DatabaseName* is the name of the
    configuration database (by default, TFS\_Configuration):

    **TfsConfig Accounts /add /AccountType:ApplicationTier
    /account:** *AccountName* **/SQLInstance:** *ServerName* **/DatabaseName:** *DatabaseName*

    For more information about how to use this command, see
    [Accounts Command](../../command-line/tfsconfig-cmd.md#accounts).

4.  Use the **Accounts** command to add the data sources account for the
    report server and the proxy account for Team Foundation Server
    Proxy, if your deployment uses these resources.

<a name="RegisterDB"></a>

## Step 11: Register the Location of the Restored Databases if You Are Not Restoring the Application Tier

You can skip this procedure if you are also restoring the application
tier to a different server.

After you update the service account information, you must redirect the
application tier to the new location of the restored databases.

> **Note:**
> If you have more than one application-tier server in your deployment,
> you must register the location of the databases on each of those
> servers.

To register the location of the databases:

1.  On the application-tier server, open a Command Prompt window, and
    change directories to
    *Drive*:\\%programfiles%\\ TFS 2010\\Tools.

2.  At the command prompt, type the following command, where
    *DatabaseName* is the name of the configuration database (by default, TFS\_Configuration):

    **TfsConfig registerDB /SQLInstance:** *ServerName* **/DatabaseName:** *DatabaseName*

    For more information about how to use this command, see
    [RegisterDB Command](../../command-line/tfsconfig-cmd.md#registerdb).

<a name="RestoreWarehouse"></a>
## Step 12: Configure Reporting and Analysis Services

You can skip this procedure if you are not using a report server as part
of your deployment. If your deployment uses a report server, you must
redirect Team Foundation Server to its location, restart the warehouse,
and manually rebuild the database for Analysis Services.

> **Note:**
> You must complete this procedure even if you restored the TFS\_Warehouse
> and TFS\_Analysis databases, as described in the previous section.

To reconfigure reporting and Analysis Services:

1.  Open the administration console for Team Foundation.

2.  In the navigation bar, click **Reporting**.

3.  In **Reporting**, click
    **Edit**.

4.  In the **Take Offline** confirmation message,
    click **OK**.

    The **Reporting Services** dialog box opens.

5.  Select the **Use Report Server** check box.

6.  Click the **Warehouse** tab, and, in
    **Server**, type or click the name of the
    report server.

7.  In **Database**, type the name of the
    warehouse database for Team Foundation Server.

    By default, this database is named TFS\_Warehouse.

8.  (Optional) Click **Test Connection** to make
    sure that the database that you specified is valid.

9.  Click the **Analysis Services** tab.

10. In **Server**, type or click the name of the
    server that is running SQL Server Analysis Services.

11. In **Database**, type the name of the
    Analysis Services database for Team Foundation Server.

    By default, the name of this database is TFS\_Analysis.

12. If you are not using the default instance for the database, select
    the **Specify non-default instance** check
    box, and then type or click the name of the instance.

13. (Optional) Click **Test Connection** to make
    sure that the database that you specified is valid.

14. In **Username** and
    **Password**, type the account name and password
    (if any) for the data sources account (TFSReports).

15. On the **Reports** tab, in
    **Server**, type or click the name of the report
    server, and then click **Populate URLs**.

16. In **Username** and
    **Password**, type the account name and password
    (if any) for the data sources account (TFSReports).

17. In **Default Path**, type the relative path
    in which reports are stored, and then click
    **OK**.

18. In the administration console, click **Start
    Jobs** to restart reporting.

19. Open a Command Prompt window, and change directories to
    %ProgramFiles%\\TFS 2010\\Tools.

20. Type the following command to rebuild the database for Analysis
    Services:

    ```TFSConfig RebuildWarehouse /AnalysisServices /ReportingDataSourcePassword: Password```

    *Password* is the password for the data sources account for Reporting Services (TFSReports).

21. Wait until the command has successfully completed.

22. On the report server, open Internet Explorer, type the following
    string in the Address bar, and then press ENTER:

    ```http://localhost:8080/<VirtualDirectory>/TeamFoundation/Administration/v3.0/WarehouseControlService.asmx```

    For *VirtualDirectory*, type the virtual directory for Internet Information Services (IIS) that was
    specified when Team Foundation Server was installed. By default, this directory is named ```tfs```.

    The **WarehouseControlWebService**  page opens.

    > **Note:**
    > The TFS Application Pool must be running
    > for the Warehouse Control Web service to be available.

23. Click **GetProcessingStatus**, and then click **Invoke**.

    > **Important:**
    > The service should return a value of **Idle** for
    > all jobs, which indicates that the cube is not being processed. If a
    > different value is returned, repeat this step until
    > **Idle** is returned for all jobs.

24. On the **WarehouseControlWebService** page,
    click **ProcessAnalysisDatabase**, and then
    click **Invoke**.

    A browser window opens. The service returns
    **True** when it successfully starts the processing
    of the cube and **False** if it is not
    successful or if the cube is currently being processed.

25. To determine when the cube has been processed, return to the
    **WarehouseControlWebService** page, click
    **GetProcessingStatus**, and then click
    **Invoke**.

    Processing has completed when the
    **GetProcessingStatus** service returns a value of
    **Idle** for all jobs.

    For more information, see [Manually Process the Data Warehouse and Analysis Services Cube](../../../report/admin/manually-process-data-warehouse-and-cube.md) for Team Foundation Server.

26. On the application-tier server, open Computer Management, and start
    the Visual Studio Team Foundation Background Job Agent.

<a name="ClearData"></a>
## Step 13: Clear the Data Cache on Servers

Each application-tier server in your deployment of Team Foundation
utilizes a file cache so that users can more quickly download files from
the data-tier server. When you restore a deployment, you should clear
this cache on each application-tier server. Otherwise, mismatched file
IDs might cause problems when users download files from version control.
If your deployment uses Team Foundation Server Proxy, you must also
clear the data cache on each server that is configured as a proxy.

> **Note:**
> By performing this step, you can help prevent the download of incorrect
> versions of files in version control. You should perform this step
> unless you are replacing all hardware in your deployment as part of your
> restoration. If you are replacing all hardware, you can skip this
> procedure.

To clear the data cache:

1.  On a server that is running the application-tier services for Team
    Foundation or that is configured with Team Foundation Server Proxy,
    open a Command Prompt window, and then change directories to
    *Drive*:\\%programfiles%\\Microsoft Team  Foundation Server 2010\\Application Tier\\Web Services\\\_tfs\_data.

2.  Delete everything in the \_tfs\_data directory.

3.  Repeat these steps for each application-tier server and each server
    that is running Team Foundation Server Proxy in your deployment.


<a name="RestartServices"></a>
## Step 14: Restart Services that Team Foundation Server Uses

After you restore the data, you must restart the services before your
deployment will operate and be available to users.

To restart services that Team Foundation Server uses:

1.  On the server that is running the application-tier services for Team
    Foundation, open a Command Prompt window, and change directories to
    *Drive*:\\%programfiles%\\TFS 2010\\Tools.

2.  Type the following command:

    ```TFSServiceControl unquiesce```

    For more information, see [TFSServiceControl Command](../../command-line/tfsservicecontrol-cmd.md).


<a name="RefreshDataCache"></a>
## Step 15: Refresh the Data Cache on Client Computers

To refresh the data cache on client computers:

-   Log on to the application-tier server, and use the
    **ClientService** web service to force clients to
    update the cache for tracking work items.

    For more information, see [Refresh the Data Caches on Client Computers](refresh-data-caches.md).
