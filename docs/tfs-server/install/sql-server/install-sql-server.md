---
title: Manually install SQL Server for Team Foundation Server
description: Manually install SQL Server for Team Foundation Server
ms.assetid: a69f52ef-8313-46f5-afd4-f7e6a0241d2b
ms.manager: douge
ms.author: elbatk
ms.date: 08/31/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Manually install SQL Server for Team Foundation Server

**TFS 2015** | **TFS 2013**

The steps in this topic are for installing SQL Server 2012 enterprise edition, but you can use the same steps for installing the standard edition. The steps for SQL 2014 are also very similar to these. We’ll install all the SQL Server 2012 features that TFS requires on the same server as TFS, but this isn’t a requirement. TFS is very flexible with regard to SQL Server topologies. See [One Server or Two?](#one-svr-or-two)

> [!TIP]
> You can also use an existing installation of SQL Server for TFS, but to do this you’ll need the SQL Server administrator to grant you a lot of administrative credentials. You must be a member of the sysadmin Server role in SQL Server to install and configure TFS. [Why does TFS need so much privilege on the SQL Server?](http://blogs.msdn.com/b/bharry/archive/2010/08/20/database-permissions-required-to-configure-tfs.aspx) (blog post)

<a name="one-svr-or-two"></a>
## One server or two?

If you’re going to use only one server for TFS, you can safely ignore this section.

If you plan to have more than 500 users accessing your TFS server, the recommendation is to put SQL Server on a second server. This splits the load between TFS and its configuration database. You could install all the SQL Server features that TFS requires on the second server, or you could split the features up. Some teams like to put the report server on the TFS server, and the Database engine, Full text search, and Analysis services on the second server, splitting HTTP traffic from SQL Server traffic.

There are many different topology choices you could make. In general, TFS allows you to install SQL Server instance features (Database engine, Reporting Services, Analysis Services) on different servers. Here are some caveats for various SQL Server topologies to keep in mind:

-   TFS requires the Database Engine and Full text search features on the same instance.  
-   TFS reporting is optional, but if you want reporting you must install Reporting Services and Analysis Services (each can go on its own server, if you want that topology). If you skip reporting, you don’t have to set up Reporting Services or Analysis Services.  
-   If you don’t install any SQL Server instances on the TFS server, you must at least install the SQL Server feature Client Tools Connectivity on TFS. If you have a SQL Server instance on the TFS server (either the Database Engine, Reporting Services or Analysis Services) you don’t have to install Client Tools Connectivity.

If you want to install SQL Server features on different servers, run the SQL Server installation on each server where you want to install a feature. Use the same instructions below for each installation, but at step 9, only install the features that you require.

> [!TIP]
> A multiple-server installation of TFS requires an Active Directory domain and domain accounts or the Network Service account. You cannot use local accounts for service accounts.

## To install SQL Server

**Required Permissions**  
You must be a member of the **Windows Administrators** security group on the server on which you are installing SQL Server. To manually configure a report server, you must also be a member of the **Windows Administrators** security group on the SQL Server that hosts the report server database, if this instance of SQL Server is not on your report server.

> [!TIP]
> If you are installing SQL Server 2014 on Windows Server 2012 or Windows Server 2012 R2, you must have the .NET Framework 3.5 installed. You can install the .NET Framework 3.5 by using the Add Features Wizard from Server Manager. For more information, see the following page on the Microsoft website: [Adding Server Roles and Features (Windows 2012/Windows 2012 R2)](https://technet.microsoft.com/library/hh831809.aspx), [Adding Server Roles and Features (Windows Server 2008 R2)](https://technet.microsoft.com/library/cc732263.aspx)


1.  Insert the installation DVD for a supported version of SQL Server and launch setup.exe.


2.  On the **SQL Server Installation Center** page, choose **Installation**, and then choose **New installation or add features to an existing installation**.

    ![New installation of SQL Server](_img/ic665094.png)

3.  On the **Setup Support Rules** page, choose **OK**.

4.  On the **Product Key** page, type your product key or specify a free edition.

5.  On the **License Terms** page, accept the license agreement.

6.  On the **Setup** **Support Rules** page, choose **Next**.

    ![Windows Firewall warning](_img/ic688130.png)

    > [!TIP]
    > A Windows Firewall warning might appear, but you can safely ignore this warning if you’re planning to also install TFS on this server. TFS automatically adds an exception to Windows Firewall for SQL Server, if both servers (TFS and SQL Server) are installed on the same machine. If you’re installing TFS on some other server, you’ll want to [open a port for SQL Server in Windows Firewall on this server](http://elhajj.wordpress.com/2013/02/25/workaround-error-tf255049-punching-a-hole-through-windows-firewall/) (blog post).
	>
	>For more information about SQL Server ports required for Team Foundation Server, see [Ports required for installation of Team Foundation Server](../../architecture/required-ports.md).

7.  On the **Setup Role** page, choose **SQL Server Feature Installation**.

    ![Setup role](_img/ic665096.png)

8.  On the **Feature Selection** page, select the check boxes for one or more of the following components, depending on the topology you intend to use:

    -   Database Engine Services (required)

    -   Full-Text and Semantic Extractions for Search (required)

    -   Analysis Services (required for reporting)

    -   Reporting Services – Native (required for reporting)

    -   Client Tools Connectivity (required only if no other SQL Server components are installed on the server that is running Team Foundation Server - not pictured)

    -   Management Tools - Basic ¹ (not pictured)

    ![Feature Selection](_img/ic665097.png)

9.  On the **Installation Rules** page, choose **Next**.

10. On the **Instance Configuration** page, choose **Default instance**. If you choose **Named instance**, type the name of the instance..

    ![Instance configuration](_img/ic665098.png)

11. On the **Disk Space Requirements **page, choose **Next**.

12. On the **Server Configuration** page, accept the defaults or enter the name of a domain account or **NT AUTHORITY\\NETWORK SERVICE** in **Account Name** for every service. If you specify a domain account, type its password in **Password**. If you use **NT AUTHORITY\\NETWORK SERVICE**, leave **Password** blank.

    ![Server Configuration](_img/ic665099.png)

13. In the Startup Type column, verify that **Automatic** appears for all services that you can edit, and then click **Next**.

    ![Server Configuration (details)](_img/ic665100.png)

    > [!NOTE]
    > Are you using a non-English version of SQL Server? The default collation settings for U.S. English meet the requirements for Team Foundation Server. If you’re not using English, you can set collation settings for the Database Engine on this page. For more information, see [SQL Server Collation Requirements for Team Foundation Server](collation-requirements.md).

14. If you selected the **Database Engine Services** check box in step 8, on the **Database Engine Configuration** page, choose **Windows authentication mode**, choose **Add Current User**. Otherwise skip to the next step.

    ![Database Engine Configuration](_img/ic665101.png)

15. If you selected the Analysis Services check box in step 8, on the **Analysis Services Configuration** page, choose **Add Current User**. Otherwise skip to the next step.

    ![Analysis Services Configuration](_img/ic665102.png)

16. If you selected the Reporting Services check box in step 8, on the **Reporting Services Configuration** page, choose **Install and configure**. If that option is unavailable, choose **Install only**.

    ![Reporting Services Configuration](_img/ic665103.png)

    If you had to choose **Install only**, you might be planning to have the report server and Team Foundation Server on different servers. This is a supported topology, but you will have to manually configure the report server after you finish installing SQL Server. Use these instructions: [Configure Report Server Manually](#config-report-svr-manually)

    > [!NOTE]
    > You should not choose **Reporting Service SharePoint Integrated Mode**. TFS does not support this configuration mode.

17. (Optional) On the **Error and Usage Reporting** page, specify whether to send information about errors.

18. On the **Installation Rules** page, choose **Next**.

19. On the **Ready to Install** page, review the list of components to be installed, and then choose **Install**.

    ![Complete](_img/ic662712.png)

¹ To install Team Foundation Server, you do not need to install **Management Tools** (Basic or Complete) on the same computer as SQL Server. However, you must use the SQL Server Management Studio management tool to verify your installation of SQL Server.

<a name="config-report-svr-manually"></a>
## Configure Report Server Manually

No automatic configuration of Reporting Services

![SQL Server 2008 R2 no SSRS auto configure](_img/ic662962.png)  

If you don’t install the Database Engine on the same server as Reporting Services, you must manually configure your report server using the steps below after you finish SQL Server installation. 

In the unlikely case that Reporting Services is on the same server as Team Foundation Server and you have not configured the report server, you are prompted during Team Foundation Server installation to complete the report server configuration, starting on step 3.

### To manually configure a report server

1.  Launch **Reporting Services Configuration Manager**.

    The **Reporting Services Configuration Connection** dialog box appears.

2.  In **Server Name**, enter the name of the report server. If you are using an instance name, enter the name of the instance in **Report Server Instance**. Choose **Connect**.

3.  On the **Reporting Services Configuration Manager** page, choose **Start** if the Report Service status reads **Stopped**.

4.  In the navigation bar, choose **Web Service URL**.

5.  On the **Web Service URL** page, choose **Apply** to accept the default values in the **Virtual Directory**, **IP Address**, and **TCP Port** boxes.

6.  In the navigation bar, choose **Database**.

7.  On the **Report Server Database** page, choose **Change Database**.

    The **Report Server Database Configuration Wizard** appears.

8.  On the **Action** page of the wizard, choose **Create a new report server database**.

9.  On the **Database Server** page of the wizard, enter the name of a local or remote instance of SQL Server to host the database for the report server in **Server Name**.

10. On the **Database** page of the wizard, accept the default values in the **Database Name**, **Language**, and **Native Mode** boxes.

11. In **Credentials**, accept the default values in the **Authentication Type**, **User name**, and **Password** boxes.

12. On the **Summary** page of the wizard, verify your information.

13. On the **Progress and Finish** page of the wizard, choose **Finish**.

14. In the navigation bar for **Reporting Services Configuration Manager**, choose **Report Manager URL**.

15. On the **Report Manager URL** page, choose **Apply** to accept the default value in the **Virtual Directory** box.



## Provisioning SQL Server Databases for Team Foundation Server

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



## Work with SQL Server Named Instances

You can choose to install Team Foundation Server using the default instance of SQL Server or a named instance of SQL Server. Depending on your business infrastructure and deployment needs, you might prefer to use a named instance. If you want to use a named instance in your deployment of Team Foundation Server, you must create that named instance in SQL Server before you install Team Foundation Server or create a team project collection that uses that instance. You cannot create a named instance during installation of Team Foundation Server.

To use a named instance of SQL Server in a deployment of Team Foundation Server, you must do one of the following:

* install SQL Server by using a named instance

* move or restore Team Foundation Server data to a named instance

* create a team project collection on a named instance



<a name="verify"></a>
## Verify SQL Server for Team Foundation Server

To ensure that your installation of SQL Server will work with Team Foundation Server, you should verify that the required SQL Server features are available, the underlying Windows services that are associated with SQL Server are running, the connection settings are configured, and the network ports are open.

If SQL Server Reporting Services is not on the server that is running Team Foundation Server and you are using reporting, you must install Client Tools Connectivity on Team Foundation Server.

If the Database Engine, Analysis Services, and Reporting Services are running on different instances of SQL Server, you must log on to each server to verify each instance. 

**Required Permissions**

To run SQL Server Configuration Manager, you must be a member of the **Users** security group on the server that hosts SQL Server. To use SQL Server Configuration Manager to modify services, you must be a member of the **Administrators** security group.

To run SQL Server Reporting Services Configuration Manager or SQL Server Management Studio, you must be a member of the **Administrators** security group on the operating system of the server that is running the instance of SQL Server that you want to verify. For SQL Server Management Studio, you must also be a member of the **Public** server role on the instance of SQL Server that you want to verify.

### Verify Reporting Services

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



### Verify the Database Engine and Analysis Services

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





## See Also

[Install Team Foundation Server](../install-2013/install-tfs.md)  

[TFS upgrade requirements](../../upgrade/upgrade-2013/upgrade-2013-requirements.md)  

[SQL Server Collation Requirements for Team Foundation Server](collation-requirements.md)
