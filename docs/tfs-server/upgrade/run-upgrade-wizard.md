---
title: Run the TFS Upgrade Wizard
description: Run the TFS Upgrade Wizard
ms.assetid: 5569d0ac-6c7a-4f02-9546-c27d538f2dea
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Run the TFS Upgrade Wizard

**TFS 2015** | **TFS 2013**

First, install TFS, then run the upgrade configuration wizard. If you move the TFS application tier to new hardware, you must update the URL for the application tier after you finish running the TFS upgrade wizard.

> [!TIP]
> After you install TFS, its configuration tool appears automatically. If for some reason you don’t see it, you can access it from the TFS administration console. Launch TFS administration console from the **Start** menu. In the admin console, choose **Application Tier**, and then choose **Configure Installed Features**.

**Required Permissions**

You must be a member of the Windows Administrators security group. If you’re upgrading a basic TFS installation, these are the only permissions you need. If you plan to configure reporting, you must also be a member of the Windows Administrators security group on the server that is running SQL Server Reporting Services. If you plan to configure SharePoint Products, you must be a member of the Farm Administrators group on the SharePoint Products administration site. If you did not install the Database Engine that will host the configuration database or a database administrator manages the instance of SQL Server that you are using, you must be a member of sysadmin Server role in SQL Server.

### To run the Team Foundation Server installer

1.  Insert the Team Foundation Server DVD in the drive and launch the tfs\_server.exe file to begin the installation.

2.  On the license terms dialog box, accept the license terms and then choose **Install Now**.

    If you want to install Team Foundation Server to a specific location in the file system, choose the browse button (…) next to the default install location.

### To run the Team Foundation Server upgrade wizard

1.  In the **Team Foundation Server Configuration** tool, choose **Upgrade**, and then choose **Start Wizard**. If you have TFS 2012 or TFS 2013 installed, the wizard opens automatically and you can skip this step.

2.  Read the Welcome screen and choose **Next**.

3.  Type the name of the SQL Server instance that hosts the data from an earlier version of Team Foundation Server, and choose **List Available Databases**. If your configuration database is part of an AlwaysOn Availability Group, you will be prompted to confirm that you want to upgrade in full recovery mode.

    The wizard lists deployments of Team Foundation Server that you can upgrade. If multiple deployments are listed, choose the one that you want to upgrade.

4.  Select the **By checking this box, I confirm that I have a current backup** check box, and then choose **Next**.

    If you need to do a backup, you can choose **Click here to launch the Database Backup Tool**, follow the steps below, then continue with the TFS upgrade wizard.

    The TFS Database Backup Tool displays the databases it finds on the SQL Server instance specified in **SQL Server Instance**.

    1.  In Select databases to back up, choose the databases to back up.

        Need help? [List of TFS 2010 databases on MSDN](http://go.microsoft.com/fwlink/?LinkId=258325); [List of TFS 2012 databases on MSDN](../architecture/sql-server-databases.md)

    2.  In **Backup Databases to**, accept the default location or enter another location.

        > [!NOTE]
        > If you want to overwrite backups stored in this network location, you can choose **Overwrite existing database backups at this location**.

    3.  Choose **Backup Now**.

        The Backup tool reports progress on each database being backed up.

    4.  Choose **Close**.

5.  Choose **Use a system account** to use a built-in account, or choose **Use a user account** to use a domain or local account. If you are using a user account, you must type its password. To test the user account and password combination, choose **Test**.

    **Network Service** is the default value for this service account.

6.  Under **Authentication Method**, choose **NTLM** or **Negotiate (Kerberos)**, and then choose **Next**.

    -   If you choose **NTLM**, NTLM authentication is used. This option is the default setting.

    -   If you choose **Negotiate (Kerberos)**, Kerberos authentication is attempted first. If that authentication fails, NTLM authentication is used.

7.  Set up your file cache location. Make sure you have at least 50 Gb of free space. If you use a drive other than your Windows drive, TFS will perform better.

    On client operating systems, you must skip to step 10. You cannot configure SharePoint Products or the reporting feature of Team Foundation Server (steps 8 and 9) on a client operating system.

8.  Select the **Configure Reporting for use with Team Foundation Server** check box to use reporting, or clear the check box to skip reporting, and then choose **Next**.

    > [!TIP]
    > If you skip reporting and add it later during an upgrade, you may need to use different database names for the reporting warehouse databases (TFS_Warehouse and TFS_Analysis). As an alternative, you can delete the old reporting databases and new databases will be created using the default names.

    1.  Enter the name of the server that is running SQL Server Reporting Services in **Reporting Services Instance** and choose **Populate URLs**.** **

        The URLs for the report server and its management site appear in the drop-down lists for **Report Server URL** and **Report Manager URL**.

    2.  Choose the URLs that you want to use for Team Foundation Server and then choose **Next**.

    3.  Type the name of the server that is running the Database Engine and Full-Text Search to host the warehouse database, and then choose **List Available Databases**.

        The wizard lists available warehouse databases that you can upgrade. Choose the database that you want to upgrade, and then choose **Next**.

        You can choose **Test** to test the connection to SQL Server. 

    4.  Enter the name of the server that is running SQL Server Analysis Services in **SQL Analysis Services Instance** and choose **Next**.

        To test the connection to SQL Server, choose **Test**.

    5.  Enter the name and the password of the report reader account and choose **Next**. If you specified a user account for the service account of Team Foundation Server in step 5 and you want to use a different account in this step, you must select the **Use a different account than the Team Foundation Server service account for the Reporting Services report reader account** check box.

        Choose **Test** to test the user account and password combination.

9.  Select the **Configure SharePoint for use with Team Foundation Server** check box to configure SharePoint Products or clear the check box to skip the step, and choose **Next**.

    If you selected SharePoint Products configuration perform one of the following steps:

    -   Choose **Use current SharePoint settings** to retain your settings for SharePoint Products, and then choose **Next**.

        You typically use this option to continue to use the existing portal, which must have the new Team Foundation Server Extensions for Windows SharePoint Services installed and configured. If your portal is on the server you are upgrading, the new extensions are configured automatically.

    -   Choose **Change current settings to point to a different SharePoint farm**, enter the URL for the SharePoint web application and the SharePoint Administration site, and then choose **Next**. To test the connection to each of these URLs, you can choose **Test**.

        You typically use this option to migrate to a new portal, which must contain your migrated data for SharePoint Products.

10. On the **Review** page, review your settings, and choose** Next**.

    The wizard validates your configuration.

11. Choose **Configure**.

    The wizard applies configuration settings.

    > [!TIP]
    > Did you get error TF255356 when you tried to upgrade from TFS 2012 (or TF400744 with TFS 2010)? These are misleading error messages. Read this blog post to recover: [TF255356: Known Issue with Configuring TFS 2013 RTM Express and Basic](http://blogs.msdn.com/b/visualstudioalm/archive/2013/12/04/known-issue-with-configuring-tfs-2013-rtm-express-and-basic.aspx)

12. Choose **Next**.

    Your data is upgraded, and progress reports appear and detail the steps that are being performed.

13. Choose **Next**.

14. Read the final summary screen, and then choose **Close** twice—once in the wizard and then again in the configuration tool.

> [!TIP]
> If you have Project Server added to TFS, this is when you should upgrade the TFS Extensions for Project Server. See the heading “Less-common upgrade tasks” for more information in [TFS upgrade requirements](upgrade-2013/upgrade-2013-requirements.md)

## Update the URL for TFS

If you did an in-place upgrade, you can ignore both these procedures.

If you migrated the TFS application tier to new hardware, you have to update the URL for TFS on the application tier and in the TFS SharePoint Extensions.

### Update the URL for TFS on the application tier

1.  On the TFS application-tier, open the administration console for Team Foundation Server.

2.  In the navigation bar, choose **Application Tier**, and then click **Change URLs**.

    The **Change URLs** window opens.

3.  In **Notification URL**, type the URL for the new application-tier server, and then choose **OK**.

### Update the URL for the TFS application tier in the TFS Extensions for SharePoint

1.  On server running SharePoint, open the administration console for Team Foundation Server.

2.  In the navigation bar, choose **Extensions for SharePoint Products**, select the **SharePoint Web Application** and then choose **Modify access**.

    The **Access for Team Foundation Server** window opens.

3.  In **URL for Team Foundation Server**, type the URL for the new application-tier server, and then choose **OK**.

## See Also

 [TFS upgrade requirements](upgrade-2013/upgrade-2013-requirements.md) 

 [How to: Set up remote SharePoint Products for Team Foundation Server](../install/sharepoint/setup-remote-sharepoint.md) 
