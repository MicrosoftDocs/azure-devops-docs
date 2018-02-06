---
title: Restore data to the same location
description: Restore data to the same location
ms.assetid: 57881758-8f6e-4d36-afa7-75d6b50e3e48
ms.manager: douge
ms.author: elbatk
ms.date: 08/31/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Restore data to the same location

**TFS 2015** | **TFS 2013**

You can restore data from a backup to the same server and instance of SQL Server for Team Foundation from which that data was backed up. For example, you might want to restore a corrupted set of databases to the last known good state.

> [!NOTE]
> Check out the [Back up and Restore concepts page](./back-up-restore-tfs.md#same-server) for an introduction to restoring data on the same server for TFS. 
>
> SharePoint integration with TFS is deprecated after TFS 2017.



<a name="req-permissions"></a>
## Prerequisites

To perform this procedure, you must be a member of the following groups or have the following permissions:

-   A member of the **Administrators** security group on the server or servers that are running the administration console for Team Foundation.

-   Either a member of the **SQL Server System Administrator** security group or your **SQL Server Perform Back Up and Create Maintenance Plan** permission must be set to **Allow** on the instance of SQL Server that hosts the databases.

-   A member of the **sysadmin** security group for the database instance for Team Foundation and for the Analysis Services instance of the warehouse database.

-   An authorized user of the TFS\_Warehouse database.

-   A member of the TFSEXECROLE database role.

-   If the deployment uses SharePoint Products, a member of the **Farm Administrators** group for the farm to which the SharePoint Products databases are being restored.

For more information, see the following page on the Microsoft website: [User Account Control](http://go.microsoft.com/fwlink/?LinkId=111235).

<a name="stop-svcs-tfs-uses"></a>
## Step 1: Stop services that TFS uses

Stopping the services helps protect against data loss or corruption during the restoration process, particularly if you rename databases.

1.  On the server that is running the application-tier services for Team Foundation, open a Command Prompt window, and change directories to Drive:\\%programfiles%\\TFS 12.0\\Tools.

2.  Type the following command:

        TFSServiceControl quiesce

    For more information, see [TFSServiceControl Command](../../command-line/tfsservicecontrol-cmd.md).

<a name="rename-dbs-to-restore"></a>
## Step 2: Rename Databases that You Want to Restore

Before you can use the Restore wizard to restore a database that Team Foundation Server, you must first take it offline, and then rename it.

### To stop databases that Team Foundation Server uses

1.  Open **SQL Server Management Studio**.

    > **Note:**  
    > For more information about how to restore databases, see the following page on the Microsoft website: [Implementing Restore Scenarios for SQL Server Databases](http://go.microsoft.com/fwlink/?LinkId=115277).

    The **Connect to Server** dialog box opens.

2.  In **Server type**, choose **Database Engine**.

3.  In **Server name**, choose or type the name of the data-tier server and database instance, and then choose **Connect**.

    > **Note:**  
    > If SQL Server is installed on a cluster, the server name is the name of the cluster and not the computer name.

    SQL Server Management Studio opens.

4.  Expand the **Databases** node to show the list of databases that make up the data tier for Team Foundation.

5.  Rename and then stop each database you want to restore, following [the guidance for your version of SQL Server](https://technet.microsoft.com/library/ms345378.aspx). Give the database a name that indicates it is the old version of the database you will replace with the restored version. For example, you might rename TFS\_DefaultCollection to TFS\_DefaultCollection\_Old.

<a name="restore-tfs-dbs"></a>
## Step 3: Restore Team Foundation Databases

You can restore data for Team Foundation Server by using the Restore wizard in the administration console in TFS. The Restore wizard also restores the encryption key used for reporting.

### To restore databases

1.  Open the administration console for TFS and navigate to **Scheduled Backups** to start the Restore wizard.

    ![Start the Restore wizard](../_img/ic654273.png)

2.  Specify the path to the backup set and choose the set you want to use for restoration.

    ![Choose the network path, then the restore set](../_img/ic664997.png)

3.  Complete the wizard and restore the databases.

    ![The databases are restored to the new server](../_img/ic664998.png)

<a name="update-all-svc-accts"></a>
## Step 4: Update All Service Accounts

You must update the service account for Team Foundation Server (TFSService) and the data sources account (TFSReports). Even if these accounts have not changed, you must update the information to ensure that the identity and the format of the accounts are appropriate.

### To update service accounts

1.  On the server that is running SQL Server Reporting Services, open Computer Management, and start the following components if they are not already started:

    -   ReportServer or ReportServer$*InstanceName* (application pool)

    -   SQL Server Reporting Services (*TFSINSTANCE*)

2.  On the application-tier server, open a Command Prompt window, and change directories to *Drive*:\\%programfiles%\\ TFS 12.0\\Tools.

3.  At the command prompt, enter the following command to add the service account for Team Foundation, where *DatabaseName* is the name of the configuration database (by default, TFS\_Configuration):

    **TfsConfig Accounts /add /AccountType:ApplicationTier /account:** *AccountName*

    For more information about how to use this command, see [Accounts Command](../../command-line/tfsconfig-cmd.md#accounts).

4.  Use the **Accounts** command to add the data sources account for the report server and the proxy account for Team Foundation Server Proxy, if your deployment uses these resources.

<a name="rebuild-the-warehouse"></a>
## Step 5: Rebuild the Warehouse

You can rebuild the data warehouse instead of restoring the **TFS\_Warehouse** and **TFS\_Analysis** databases. You will require a significant amount of time to rebuild the warehouse if your deployment contains a lot of data. However, that strategy helps ensure that all data is properly synchronized. When you rebuild the warehouse, Team Foundation Server creates an instance of it, which you must then process to populate it by using data from the operational stores.

> **Note:**  
> If you restored the TFS_Warehouse and TFS_Analysis databases in the previous section, you do not have to perform the following procedure.

### To rebuild the warehouse

1.  On the server that is running the application-tier services for Team Foundation, open a Command Prompt window, and change directories to *Drive*:\\%programfiles%\\TFS 12.0\\Tools.

2.  Enter the following command:

     **TFSConfig rebuildwarehouse /all /ReportingDataSourcePassword:**  *Password*

    where *Password* is the password for the data sources account for Reporting Services (TFSReports).

3.  Wait until the command is successfully completed.

4.  On the report server, open Internet Explorer and enter the following string in the Address bar:

    **http://localhost:8080/** *VirtualDirectory* **/TeamFoundation/Administration/v3.0/WarehouseControlService.asmx**

    For *VirtualDirectory*, enter the virtual directory for Internet Information Services (IIS) that was specified when Team Foundation Server was installed. By default, this directory is named **tfs**.

    The **WarehouseControlWebService** page opens.

    > **Note:**  
    > The Microsoft Team Foundation Server Application Pool must be running for the Warehouse Control Web service to be available.

5.  Choose **GetProcessingStatus**, and then choose **Invoke**.

    > **Important:**  
    > The service should return a value of **Idle** for all jobs, which indicates that the cube is not being processed. If a different value is returned, repeat this step until **Idle** is returned for all jobs.

6.  On the **WarehouseControlWebService** page, choose **ProcessAnalysisDatabase**, and then choose **Invoke**.

    A browser window opens. The service returns **True** when it successfully starts to process the cube and **False** if it is not successful or if the cube is currently being processed.

7.  To determine when the cube has been processed, return to the **WarehouseControlWebService** page, choose ** GetProcessingStatus**, and then choose **Invoke**.

    Processing has completed when the **GetProcessingStatus** service returns a value of **Idle** for all jobs.

8.  On the application-tier server for Team Foundation, open **Computer Management**, and start the Visual Studio Team Foundation Background Job Service.

<a name="clear-data-cache-on-servers"></a>
## Step 6: Clear the Data Cache on Servers

Each application-tier server in your deployment of Team Foundation uses a file cache so that users can quickly download files from the data-tier server. When you restore a deployment, you should clear this cache on each application-tier server. Otherwise, mismatched file IDs might cause problems when users download files from version control. If your deployment uses Team Foundation Server Proxy, you must also clear the data cache on each server that is configured as a proxy.

> **Note:**  
> By clearing the data caches, you can help prevent the download of incorrect versions of files in version control. You should routinely do this unless you are replacing all hardware in your deployment as part of your restoration. If you are replacing all hardware, you can skip this procedure.

### To clear the data cache

1.  On a server that is running the application-tier services for Team Foundation or that is configured with Team Foundation Server Proxy, open a Command Prompt window and change directories to *Drive*:\\%programfiles%\\TFS 12.0\\Application Tier\\Web Services\\\_tfs\_data.

2.  Delete everything in the \_tfs\_data directory.

3.  Repeat these steps for each application-tier server and each server that is running Team Foundation Server Proxy in your deployment.

<a name="restart-svcs-tfs"></a>
## Step 7: Restart Services that Team Foundation Server Uses

After you restore the data, you must restart the services to return the server to an operational state.

### To restart services that Team Foundation Server uses

1.  On the server that is running the application-tier services for Team Foundation, open a Command Prompt window, and change directories to *Drive*:\\%programfiles%\\TFS 12.0\\Tools.

2.  Enter the following command:

     **TFSServiceControl unquiesce** 

    For more information, see [TFSServiceControl Command](../../command-line/tfsservicecontrol-cmd.md).

<a name="refresh-caches-clients"></a>
## Step 8: Refresh the Caches on Client Computers

### To refresh the cache for tracking work items on client computers

1.  On the new server, open Internet Explorer.

2.  In the Address bar, enter the following address to connect to the **ClientService** web service:

    **http://** *PublicURL/VirtualDirectory* **:8080/WorkItemTracking/v3.0/ClientService.asmx**

    > **Note:**  
    > Even if you are logged on with administrative credentials, you might need to start Internet Explorer as an administrator, and you might be prompted for your credentials.

3.  Choose **StampWorkitemCache**, and then choose **Invoke**.

    > **Note:**  
    > The StampWorkitemCache method returns no data.

### To refresh the version control cache on client computers

1.  On the client computer, open a Command Prompt window with administrative permissions, and change directories to *Drive*:\\Program Files (x86)\\Microsoft Visual Studio 12.0\\Common7\\IDE.

2.  At the command prompt, enter the following command, including the URL of the collection, which includes the server name and the port number of the new server:

    **tf workspaces /collection:http://** *ServerName:Port/VirtualDirectoryName/CollectionName*

    In the example deployment, a developer needs to refresh the version control cache for a project that is a member of the DefaultCollection collection, which is hosted in the FabrikamPrime deployment of Team Foundation Server. He types the following string:

    **tf workspaces /collection:http://FabrikamPrime:8080/tfs/DefaultCollection**

    For more information, see [Workspaces Command](../../../tfvc/workspaces-command.md).

## See Also

 [Permission reference for Team Foundation Server](../../../security/permissions.md) 

 [Team Foundation Server architecture](../../architecture/architecture.md) 

 [Restore the databases](tut-single-svr-restore-dbs.md) 

 [Restore Lab Management components](restore-lab-management-components.md) 

 [Team Foundation Server services and service accounts](../config-tfs-resources.md) 

 [Restore a deployment to new hardware](tut-single-svr-home.md) 
