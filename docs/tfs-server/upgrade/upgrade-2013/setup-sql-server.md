---
title: Set up SQL Server for TFS
description: Set up SQL Server for TFS
ms.assetid: 28a1ad64-07b6-44d2-aa24-acbb0d2d8004
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Set up SQL Server for TFS

**TFS 2013**

![Set up SQL Server for TFS](../_img/setup-sql-server.png)

Install SQL Server 2012 SP1 for Team Foundation Server with reporting.

If you're using SQL Server 2012 with SP1, we recommend you also apply [cumulative update 2 on top of SP1](http://support.microsoft.com/kb/2790947) to address a critical SQL Server bug around resource consumption. This isn't a requirement because the bug only affects a small number of instances, but we wanted you to be aware of it.

**Upgrade tips for SQL Server**  
-   Make sure the default collation settings in SQL Server match the existing settings from the SQL Server instance that you're migrating from. For more information, see: [SQL Server Collation Requirements for Team Foundation Server](../../install/sql-server/collation-requirements.md)  
-   Make sure your data compression settings in the new SQL Server instance are the same as they were in the previous instance, especially if you're changing from Enterprise edition to a different SQL Server edition.

**Required Permissions**  
You must be a member of the **Administrators** security group on Windows Server.

1.  Insert the installation DVD for a supported version of SQL Server and launch setup.exe.

2.  On the **SQL Server Installation Center** page, choose **Installation**, and then choose **New installation or add features to an existing installation**.

    ![New installation of SQL Server](../../install/sql-server/_img/ic665094.png)

3.  On the **Setup Support Rules** page, choose **OK**.

4.  On the **Product Key** page, type your product key or specify a free edition.

5.  On the **License Terms** page, accept the license agreement.

6.  On the **Setup** **Support Rules** page, choose **Next**.

    ![Windows Firewall warning](../../install/sql-server/_img/ic688130.png)

    > [!TIP]
    > A Windows Firewall warning might appear, but you can safely ignore this warning. TFS automatically adds an exception for Windows Firewall during upgrade in this topology.

7.  On the **Setup Role** page, choose **SQL Server Feature Installation**.

    ![Setup role](../../install/sql-server/_img/ic665096.png)

8.  On the **Feature Selection** page, select the following check boxes:

    -   Database Engine Services (required)  
    -   Full-Text and Semantic Extractions for Search (required)  
    -   Analysis Services (required for reporting)  
    -   Reporting Services � Native (required for reporting)  
    -   Management Tools - Basic (not pictured)

    ![Feature Selection](../../install/sql-server/_img/ic665097.png)

9.  On the **Installation Rules** page, choose **Next**.

10. On the **Instance Configuration** page, choose **Default instance**. If you choose **Named instance**, type the name of the instance..

    ![Instance configuration](../../install/sql-server/_img/ic665098.png)

11. On the **Disk Space Requirements **page, choose **Next**.

12. On the **Server Configuration** page, accept the defaults.

    ![Server Configuration](../../install/sql-server/_img/ic665099.png)

13. In the Startup Type column, verify that **Automatic** appears for all services that you can edit, and then choose **Next**.

    ![Server Configuration (details)](../../install/sql-server/_img/ic665100.png)

    > [!NOTE]
    > Are you using a non-English version of SQL Server? The default collation settings for U.S. English meet the requirements for Team Foundation Server. If you're not using English, you can set collation settings for the Database Engine on this page. For more information, see [SQL Server Collation Requirements for Team Foundation Server](../../install/sql-server/collation-requirements.md).

14. On the **Database Engine Configuration** page, choose **Windows authentication mode**, choose **Add Current User**.

    ![Database Engine Configuration](../../install/sql-server/_img/ic665101.png)

15. On the **Analysis Services Configuration** page, choose **Add Current User**.

    ![Analysis Services Configuration](../../install/sql-server/_img/ic665102.png)

16. On the **Reporting Services Configuration** page, choose **Install and configure**.

    ![Reporting Services Configuration](../../install/sql-server/_img/ic665103.png)

17. (Optional) On the **Error and Usage Reporting** page, specify whether to send information about errors.

18. On the **Installation Rules** page, choose **Next**.

19. On the **Ready to Install** page, review the list of components to be installed, and then choose **Install**.

    ![Complete](../../install/sql-server/_img/ic662712.png)

## Next Step: Set up SharePoint

If you don't skip the portal setup, you have two options for how to deal with SharePoint (if you don't want to deal with SharePoint, you can move on to step 4, [Back up and restore data for TFS](backup-and-restore-data.md)):

**Use the same SharePoint site for TFS that you have right now**

If your old SharePoint server is still up and running, you can continue to use it. Go to the SharePoint server and uninstall old extensions, and then install the new extensions before you upgrade TFS. If SharePoint and the previous version of TFS were on the same computer, you have to uninstall the entire TFS 2010 application tier. In the new upgraded configuration, the only TFS component on the SharePoint server will be the TFS extensions for SharePoint.

For more information, see: [Use the same SharePoint site for TFS that you have right now](use-same-sharepoint-site.md)

![install new TFS extensions](../_img/ic612457.png)

**Move SharePoint to New Hardware for TFS**

You can install SharePoint Foundation using the TFS extensions for SharePoint wizard. The TFS wizard will install a fresh copy of SharePoint using the installation of SQL Server you just set up, and then configure the TFS extensions for the new installation of TFS. After you install SharePoint, you�ll detach its content database to prepare for the migration of the data from your previous SharePoint installation in step 4, Back up and Restore Data.

For more information: [Move SharePoint to new hardware for TFS](../../install/sharepoint/move-sharepoint-new-hardware.md)

![install new SharePoint 2010](../_img/ic666063.png)
