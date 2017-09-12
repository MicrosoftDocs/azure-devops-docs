---
title: Manually back up Team Foundation Server
description: Manually back up Team Foundation Server
ms.assetid: a4d79122-7170-49ff-ad1b-d3e4f983bfd5
ms.manager: douge
ms.author: elbatk
ms.date: 08/31/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Manually back up Team Foundation Server

**TFS 2015** | **TFS 2013**

You can manually back up data for Visual Studio Team Foundation Server by using the tools that SQL Server provides. However, you might need to configure backups manually if your deployment has security restrictions that prevent use of that tool. To manually back up Team Foundation Server, you must not only back up all databases that the deployment uses, you must also synchronize the backups to the same point in time. You can manage this synchronization most effectively if you use marked transactions. If you routinely mark related transactions in every database that Team Foundation uses, you establish a series of common recovery points in those databases. If you regularly back up those databases, you reduce the risk of losing productivity or data because of equipment failure or other unexpected events.

>**Caution:**  
>You should not manually modify any of the TFS databases unless you’re instructed to do so by Microsoft Support or you’re following the procedures described in this document. Any other modifications can invalidate your service agreement.

The procedures in this topic explain how to create maintenance plans that perform either a full or an incremental backup of the databases and how to create tables and stored procedures for marked transactions. For maximum data protection, you should schedule full backups to run daily or weekly and incremental backups to run hourly. You can also back up of the transaction logs. For more information, see the following page on the Microsoft website: [Creating Transaction Log Backups](http://go.microsoft.com/fwlink/?LinkId=115465).

>**Note:**  
>Many procedures in this topic specify the use of SQL Server Management Studio. If you installed SQL Server Express Edition, you cannot use that tool unless you download SQL Server Management Studio Express. To download this tool, see the following page on the Microsoft website: [Microsoft SQL Server 2008 Management Studio Express](http://go.microsoft.com/?linkid=9647069).


**In this topic:**

-   Required Permissions

-   [Backup Reporting Services Encryption Key](#reporting-encyption-key)

-   [Identify Databases](#identify-dbs)

-   [Create Tables in Databases](#create-tables)

-   [Create a Stored Procedure for Marking Tables](#create-stored-proc-for-marking)

-   [Create a Stored Procedure for Marking All Tables At Once](#create-stored-proc-mark-all-tables)

-   [Create a Stored Procedure to Automatically Mark Tables](#create-stored-proc-auto-mark)

-   [Create a Scheduled Job to Run the Table-Marking Procedure](#create-sched-job-to-run-proc)

-   [Create a Maintenance Plan For Full Backups](#create-maintenance-plan-full-backups)

-   [Create a Maintenance Plan For Differential Backups](#create-maintenance-plan-diff-backups)

-   [Create a Maintenance Plan For Transaction Backups](#create-maintenance-plan-transaction-log-backup)

-   [Back Up the Reporting Services Encryption Key](#backup-encryption-key-for-reporting)

-   [Create a Back Up Plan for SharePoint Foundation](#create-backup-plan-sharepoint)

-   [Back Up Additional Lab Management Components](#backup-additional-lab-mgt)

**Required permissions**

To perform this procedure, you must be a member of all the following groups:

-   The **Administrators** security group on the server that is running the administration console for Team Foundation.

-   The **SQL Server System Administrator** security group. Alternatively, your **SQL Server Perform Back Up and Create Maintenance Plan** permissions must be set to **Allow** on each instance of SQL Server that hosts the databases that you want to back up. 

-   The **Farm Administrators** group in SharePoint Foundation, or an account with the permissions required to back up the farm.


<a name="reporting-encyption-key"></a>
## Backup reporting services encryption key

If your deployment uses SQL Server Reporting Services, you must back up not only the databases but also the encryption key.

For a single-server deployment of Team Foundation Server,
you can back up the encryption key for SQL Server Reporting Services
in either of two ways. You can use either the Reporting Services
Configuration tool, or you can use the **RSKEYMGMT** command-line
tool, which SQL Server provides. For a multiple-server or clustered
deployment, you must use **RSKEYMGMT**. For more information about
**RSKEYMGMT**, see the following page on the Microsoft Web site:
[RSKEYMGMT Utility](http://go.microsoft.com/fwlink/?LinkId=160686).

For more information about how to back up the encryption key, see the
following page on the Microsoft Web site: [Administration (Reporting
Services)](http://go.microsoft.com/fwlink/?LinkId=115438). For more
information about how to restore the encryption key, see the following
page on the Microsoft Web site: [Restore Encryption Key (Reporting
Services Configuration)](http://go.microsoft.com/fwlink/?LinkId=158327).

Required Permissions: To perform this procedure, you must be a member of the **Local Administrator** group, which has the role of a
**Content Manager** in Reporting Services, or
your **Manage report server security** permission
must be set to **Allow**.

Back up the encryption key by using the Reporting Services Configuration tool:

1.  On the server that is running Reporting Services, click **Start**, point to **All
    Programs**, point to **Microsoft SQL
    Server**, point to **Configuration
    Tools**, and then click **Reporting Services
    Configuration Manager**.

    The **Report Server Installation Instance
    Selection** dialog box opens.

2.  Type the name of the data-tier server and the database instance, and
    then click **Connect**.

3.  In the navigation bar on the left side, click **Encryption Keys**, and then click **Backup**.

    The **Encryption Key Information** dialog
    box opens.

4.  In **File Location**, specify the location
    where you want to store a copy of this key.

    You should consider storing this key on a separate computer from the
    one that is running Reporting Services.

5.  In **Password**, type a password for
    the file.

6.  In **Confirm Password**, retype the password
    for the file.

7.  Click **OK**.



<a name="identify-dbs"></a>
## Identify databases

Before you begin, you should take the time to identify all the databases you will need to back up if you would ever have to fully restore your deployment. This includes databases for SharePoint Foundation and SQL Server Reporting Services. These might be on the same server, or you might have databases distributed across multiple servers. For a complete table and description of TFS databases, including the default names for the databases, see [Understand TFS databases, deployment topologies, and backup](backup-db-architecture.md).

### To identify databases

1.  Open **SQL Server Management Studio**, and connect to the database engine.

2.  In **SQL Server Management Studio**, in Object Explorer, expand the name of the server and then expand **Databases**.

3.  Review the list of databases and identify those used by your deployment.

    For example, Fabrikam, Inc.'s TFS deployment is a single-server configuration, and it uses the following databases:

    -   the configuration database (Tfs\_Configuration)

    -   the collection database (Tfs\_DefaultCollection)

    -   the database for the data warehouse (Tfs\_Warehouse)

    -   the reporting databases (ReportServer and ReportServerTempDB)

    -   the databases used by SharePoint Foundation (WSS\_AdminContent, WSS\_Config, WSS\_Content, and WSS\_Logging)

        >**Important:**  
        >Unlike the other databases in the deployment, the databases used by SharePoint Foundation should not be manually backed up using the tools in SQL Server. Follow the separate procedure &quot;[Create a Back Up Plan for SharePoint Foundation](#create-backup-plan-sharepoint)&quot; later in this topic for backing up these databases.

<a name="create-tables"></a>
## Create tables in databases

To make sure that all databases are restored to the same point, you can create a table in each database to mark transactions. You can use the Query function in SQL Server Management Studio to create an appropriate table in each database.

>**Important:**  
>Do not create tables in any databases that SharePoint Products uses.

### To create tables to mark related transactions in databases that Team Foundation uses

1.  Open **SQL Server Management Studio**, and connect to the database engine.

2.  In **SQL Server Management Studio**, highlight the name of the server, open the submenu, and then choose **New Query**.

    The Database Engine Query Editor window opens.

3.  On the **Query** menu, choose **SQLCMD Mode**.

    The Query Editor executes sqlcmd statements in the context of the Query Editor. If the Query menu does not appear, select anywhere in the new query in the **Database Engine Query Editor** window.

4.  On the **SQL Editor** toolbar, open the **Available Databases** list, and then choose **TFS\_Configuration**.

	>**Note:**  
	>TFS_Configuration is the default name of the configuration database. This name is customizable and might vary.

5.  In the query window, enter the following script to create a table in the configuration database:

            Use Tfs_Configuration
        Create Table Tbl_TransactionLogMark
        (
        logmark int
        )
        GO
        Insert into Tbl_TransactionLogMark (logmark) Values (1)
        GO

6.  Choose the **F5** key to run the script.

    If the script is well-formed, the message "(1 row(s) affected.)" appears in the Query Editor.

7.  (Optional) Save the script.

8.  Repeat steps 4−7 for every database in your deployment of TFS, except for those used by SharePoint Products. In the fictitious Fabrikam, Inc. deployment, you would repeat this process for all of the following databases:

    -   Tfs\_Warehouse

    -   Tfs\_DefaultCollection

    -   ReportServer

    -   ReportServerTempDB

<a name="create-stored-proc-for-marking"></a>
## Create a stored procedure for marking tables

After the tables have been created in each database that you want to back up, you must create a procedure for marking the tables.

### To create a stored procedure to mark transactions in each database that Team Foundation Server uses

1.  In **SQL Server Management Studio**, open a query window, and make sure that **SQLCMD Mode** is turned on.

2.  On the **SQL Editor** toolbar, open the **Available Databases** list, and then choose **TFS\_Configuration**.

3.  In the query window, enter the following script to create a stored procedure to mark transactions in the configuration database:

            Create PROCEDURE sp_SetTransactionLogMark
        @name nvarchar (128)
        AS
        BEGIN TRANSACTION @name WITH MARK
        UPDATE Tfs_Configuration.dbo.Tbl_TransactionLogMark SET logmark = 1
        COMMIT TRANSACTION
        GO

4.  Choose the **F5** key to run the procedure.

    If the procedure is well-formed, the message "Command(s) completed successfully." appears in the Query Editor.

5.  (Optional) Save the procedure.

6.  Repeat steps 2−5 for every TFS database.  In the Fabrikam, Inc. deployment, you would repeat this process for all of the following databases:

    -   Tfs\_Warehouse

    -   Tfs\_DefaultCollection

    -   ReportServer

    -   ReportServerTempDB

	>**Tip:**  
	>Make sure that you select the name of the database you want to create the stored procedure for from the **Available Database** list in Object Explorer before you create the procedure. Otherwise when you run the script the command will display an error that the stored procedure was already exists.

<a name="create-stored-proc-mark-all-tables"></a>
## Create a stored procedure for marking all tables at once

To make sure that all databases are marked, you can create a procedure that will run all the procedures that you just created for marking the tables. Unlike the previous procedures, this procedure runs only in the configuration database.

### To create a stored procedure that will run all stored procedures for marking tables

1.  In **SQL Server Management Studio**, open a query window, and make sure that **SQLCMD Mode** is turned on.

2.  On the **SQL Editor** toolbar, open the **Available Databases** list, and then choose **TFS\_Configuration**.

3.  In the query window, create a stored procedure that executes the stored procedures that you created in each database that TFS uses. Replace *ServerName* with the name of the server that is running SQL Server, and replace *Tfs\_CollectionName* with the name of the database for each team project collection.

    In the example deployment, the name of the server is FABRIKAMPRIME, and there is only one team project collection in the deployment, the default one created when she installed Team Foundation Server (DefaultCollection). With that in mind, you would create the following script:

            CREATE PROCEDURE sp_SetTransactionLogMarkAll
        @name nvarchar (128)
        AS
        BEGIN TRANSACTION
        EXEC [FABRIKAMPRIME].Tfs_Configuration.dbo.sp_SetTransactionLogMark @name
        EXEC [FABRIKAMPRIME].ReportServer.dbo.sp_SetTransactionLogMark @name
        EXEC [FABRIKAMPRIME].ReportServerTempDB.dbo.sp_SetTransactionLogMark @name
        EXEC [FABRIKAMPRIME].Tfs_DefaultCollection.dbo.sp_SetTransactionLogMark @name
        EXEC [FABRIKAMPRIME].Tfs_Warehouse.dbo.sp_SetTransactionLogMark @name
        COMMIT TRANSACTION
        GO

4.  Choose the **F5** key to run the procedure.

	>**Note:**  
	>If you have not restarted SQL Server Management Studio since you created the stored procedures for marking transactions, one or more red wavy lines might underscore the name of the server and the names of the databases. However, the procedure should still run.

    If the procedure is well-formed, the message "Command(s) completed successfully." appears in the Query Editor.

5.  (Optional) Save the procedure.

<a name="create-stored-proc-auto-mark"></a>
## Create a stored procedure to automatically mark tables

When you have a procedure that will run all stored procedures for table marking, you must create a procedure that will mark all tables with the same transaction marker. You will use this marker to restore all databases to the same point.

### To create a stored procedure to mark the tables in each database that Team Foundation Server uses

1.  In **SQL Server Management Studio**, open a query window, and make sure that **SQLCMD Mode** is turned on.

2.  On the **SQL Editor** toolbar, open the **Available Databases** list, and then choose **TFS\_Configuration**.

3.  In the query window, enter the following script to mark the tables with 'TFSMark':

        EXEC sp_SetTransactionLogMarkAll 'TFSMark'
        GO

    >**Note:**  
    >TFSMark is an example of a mark. You can use any sequence of supported letters and numbers in your mark. If you have more than one marked table in the databases, record which mark you will use to restore the databases. For more information, see the following page on the Microsoft website: [Using Marked Transactions](http://go.microsoft.com/fwlink/?LinkId=186142).

4.  Choose the **F5** key to run the procedure.

    If the procedure is well-formed, the message "(1 row(s) affected)" appears in the Query Editor. The WITH MARK option applies only to the first "BEGIN TRAN WITH MARK" statement for each table that has been marked.

5.  Save the procedure.

<a name="create-sched-job-to-run-proc"></a>
## Create a scheduled job to run the table-marking procedure

Now that you have created and stored all the procedures that you need, you must schedule the table-marking procedure to run just before the scheduled backups of the databases. You should schedule this job to run approximately one minute before the maintenance plan for the databases runs.

### To create a scheduled job for table marking in SQL Server Management Studio

1.  In Object Explorer, expand **SQL Server Agent**, open the **Jobs** menu, and then choose **New Job**.

    The **New Job** window opens.

2.  In **Name**, specify a name for the job. For example, you might choose "MarkTableJob" for your job name.

3.  (Optional) In **Description**, specify a description of the job.

4.  In **Select a page**, choose **Steps** and then choose **New**.

5.  The **New Job Step** window opens.

6.  In **Step Name**, specify a name for the step.

7.  In **Database**, choose the name of the configuration database. For example, if your deployment uses the default name for that database, TFS\_Configuration, you would choose that database from the drop-down list.

8.  Choose **Open**, browse to the procedure that you created for marking the tables, choose **Open** two times, and then choose **OK**.

	>**Note:**  
	>The procedure that you created for marking the tables runs the following step:

    	EXEC sp_SetTransactionLogMarkAll 'TFSMark'

9.  In **Select a page**, choose **Schedules**, and then choose **New**.

    The **New Job Schedule** window opens.

10. In **Name**, specify a name for the schedule.

11. In **Frequency**, change the frequency to match the plan that you will create for backing up the databases. For example, you might want to run incremental backups daily at 2 A.M., and full backups on Sunday at 4 A.M. For marking the databases for the incremental backups, you would change the value of **Occurs** to **Daily**. When you create another job to mark the databases for the weekly full backup, you would keep the value of **Occurs** at **Daily**, and select the **Sunday** check box.

12. In **Daily Frequency**, change the occurrence so that the job is scheduled to run one minute before the backup for the databases, and then choose **OK**. In the example deployment, in the job for the incremental backups, you would specify 1:59 A.M.. In the job for the full backup, you would specify 3:59 A.M..

13. In **New Job**, choose **OK** to finish creating the scheduled job.

<a name="create-maintenance-plan-full-backups"></a>
## Create a maintenance plan for full backups

After you create a scheduled job for marking the databases, you can use the Maintenance Plan Wizard to schedule full backups of all of the databases that your deployment of TFS uses.

>**Important:**  
>If your deployment is using the Enterprise or Datacenter editions of SQL Server, but you think you might want to restore databases to a server running Standard edition, you must use a backup set that was made with SQL Server compression disabled. Unless you disable data compression, you will not be able to successfully restore Enterprise or Datacenter edition databases to a server running Standard edition. You should turn off compression before creating your maintenance plans. To turn off compression, follow the steps in the [Microsoft Knowledge Base article](http://go.microsoft.com/fwlink/?LinkId=253758).

### To create a maintenance plan for full backups

1.  In **SQL Server Management Studio**, expand the **Management** node, open the **Maintenance Plans** sub-menu, and then choose **Maintenance Plan Wizard**.

2.  On the welcome page for the **SQL Server Maintenance Plan Wizard**, choose **Next**.

    The **Select Plan Properties** page appears.

3.  In the **Name** box, specify a name for the maintenance plan.

    For example, you might create a plan for full backups named **TfsFullDataBackup**.

4.  Choose **Single schedule for the entire plan or no schedule**, and then choose **Change**.

5.  Under **Frequency** and **Daily Frequency**, specify options for your plan. For example, you might specify a weekly backup to occur on Sunday in **Frequency**, and specify 4 A.M. in **Daily Frequency**.

    Under **Duration**, leave the default value, **No end date**. Choose **OK**, and then choose **Next**.

6.  On the **Select Maintenance Tasks** page, select the **Backup Database (Full)**, **Execute SQL Server Agent Job**, and **Back up Database (Transaction Log)** check boxes, and then choose **Next**.

7.  On the **Select Maintenance Task Order** page, change the order so that the full backup runs first, then the Agent job, and then the transaction log backup, and then choose **Next**.

    For more information about this dialog box, choose the **F1** key. Also, search for **Maintenance Plan Wizard** on the following page of the Microsoft website: [SQL Server Books Online](http://go.microsoft.com/fwlink/?LinkId=160990).

8.  On the **Define Back Up Database (Full) Task** page, choose the down arrow, choose **All Databases**, and then choose **OK**.

9.  Specify the backup options for saving the files to disk or tape, as appropriate for your deployment and resources, and then choose **Next**.

10. On the **Define Execute SQL Server Agent Job Task** page, select the check box for the scheduled job that you created for table marking, and then choose **Next**.

11. On the **Define Back Up Database (Transaction Log) Task** page, choose the down arrow, choose **All Databases**, and then choose **OK**.

12. Specify the backup options for saving the files to disk or tape as appropriate for your deployment and resources, and then choose **Next**.

13. On the **Select Report Options** page, specify report distribution options, and then choose **Next** two times.

14. On the **Complete the Wizard** page, choose **Finish**.

    SQL Server creates the maintenance plan and backs up the databases that you specified based on the frequency that you specified.

<a name="create-maintenance-plan-diff-backups"></a>
## Create a maintenance plan for differential backups

You can use the Maintenance Plan Wizard to schedule differential backups for all databases that your deployment of TFS uses.

>**Important:**  
>SQL Server Express does not include the Maintenance Plan Wizard. You must manually script the schedule for your differential backups. For more information, see the following topic on the Microsoft website: [How to: Create a Differential Database Backup (Transact-SQL)](http://go.microsoft.com/fwlink/?LinkId=186155).

### To create a maintenance plan for differential backups

1.  Log on to the server that is running the instance of SQL Server that contains the databases that you want to back up.

2.  Open **SQL Server Management Studio**.

    1.  In the **Server type** list, choose **Database Engine**.

    2.  In the **Server name** and **Authentication** lists, choose the appropriate server and authentication scheme.

    3.  If your instance of SQL Server requires it, in **User name** and **Password**, specify the credentials of an appropriate account.

    4.  Choose **Connect**.

3.  In **SQL Server Management Studio**, expand the **Management** node, open the sub-menu, choose **Maintenance Plans**, and then choose **Maintenance Plan Wizard**.

4.  On the welcome page for the **SQL Server Maintenance Plan Wizard**, choose **Next**.

5.  On the **Select Plan Properties** page, in the **Name** box, specify a name for the maintenance plan.

    For example, you could name a plan for differential backups **TfsDifferentialBackup**.

6.  Choose **Single schedule for the entire plan or no schedule**, and then choose **Change**.

7.  Under **Frequency** and **Daily Frequency**, specify options for your backup plan.

    Under **Duration**, leave the default value, **No end date**. Choose **OK**, and then choose **Next**.

8.  On the **Select Maintenance Tasks** page, select the **Back up Database (Differential)** check box, and then choose **Next**.

9.  On the **Define Back Up Database (Differential) Task** page, choose the down arrow, choose **All Databases**, and then choose **OK**.

10. Specify the backup options for saving the files to disk or tape as appropriate for your deployment and resources, and then choose **Next**.

11. On the **Select Report Options** page, specify report distribution options, and then choose **Next** two times.

12. On the **Complete the Wizard** page, choose **Finish**.

    SQL Server creates the maintenance plan and backs up the databases that you specified based on the frequency that you specified.

<a name="create-maintenance-plan-transaction-log-backup"></a>
## Create a maintenance plan for transaction logs

You can use the Maintenance Plan Wizard to schedule transaction log backups for all databases that your deployment of TFS uses.

>**Important:**  
>SQL Server Express does not include the Maintenance Plan Wizard. You must manually script the schedule for transaction-log backups. For more information, see the following topic on the Microsoft website: [How to: Create a Transaction Log Backup (Transact-SQL)](http://go.microsoft.com/fwlink/?LinkId=186158).

### To create a maintenance plan for transaction log backups

1.  Log on to the server that is running the instance of SQL Server that contains the databases that you want to back up.

2.  Open **SQL Server Management Studio**.

3.  In the **Server type** list, choose **Database Engine**.

    1.  In the **Server name** and **Authentication** lists, choose the appropriate server and authentication scheme.

    2.  If your instance of SQL Server requires it, in **User name** and **Password**, specify the credentials of an appropriate account.

    3.  Choose **Connect**.

4.  In **SQL Server Management Studio**, expand the **Management** node, open the submenu, choose **Maintenance Plans**, and then choose **Maintenance Plan Wizard**.

5.  On the welcome page for the **SQL Server Maintenance Plan Wizard**, choose **Next**.

    The **Select Plan Properties** page appears.

6.  In the **Name** box, specify a name for the maintenance plan.

    For example, you could name a plan to back up transaction logs **TfsTransactionLogBackup**.

7.  Choose **Single schedule for the entire plan or no schedule**, and then choose **Change**.

8.  Under **Frequency** and **Daily Frequency**, specify options for your plan.

    Under **Duration**, leave the default value, **No end date**.

9.  Choose **OK**, and then choose **Next**.

10. On the **Select Maintenance Tasks** page, select the **Execute SQL Server Agent Job** and **Back up Database (Transaction Log)** check boxes, and then choose **Next**.

11. On the **Select Maintenance Task Order** page, change the order so that the Agent job runs before the transaction-log backup, and then choose **Next**.

    For more information about this dialog box, choose the **F1** key. Also, search for **Maintenance Plan Wizard** on the following page of the Microsoft website: [SQL Server Books Online](http://go.microsoft.com/fwlink/?LinkId=160990).

12. On the **Define Execute SQL Server Agent Job Task** page, select the check box for the scheduled job that you created for table marking, and then choose **Next**.

13. On the **Define Back Up Database (Transaction Log) Task** page, choose the down arrow, choose **All Databases**, and then choose **OK**.

14. Specify the backup options for saving the files to disk or tape as appropriate for your deployment and resources, and then choose **Next**.

15. On the **Select Report Options** page, specify report distribution options, and then choose **Next** two times.

16. On the **Complete the Wizard** page, choose **Finish**.

    SQL Server creates the maintenance plan and backs up the transaction logs for the databases that you specified based on the frequency that you specified.

<a name="backup-encryption-key-for-reporting"></a>
## Back up the encryption key for reporting services

You must back up the encryption key for Reporting Services as part of backing up your system. Without this encryption key, you will not be able to restore the reporting data. For a single-server deployment of TFS, you can back up the encryption key for SQL Server Reporting Services by using the Reporting Services Configuration tool. You could also choose to use the **RSKEYMGMT** command-line tool, but the configuration tool is simpler. For more information about **RSKEYMGMT**, see the following page on the Microsoft website: [RSKEYMGMT Utility](http://go.microsoft.com/fwlink/?LinkId=160686).

### To back up the encryption key by using the Reporting Services Configuration tool

1.  On the server that is running Reporting Services, open **Reporting Services Configuration Manager**.

    The **Report Server Installation Instance Selection** dialog box opens.

2.  Specify the name of the data-tier server and the database instance, and then choose **Connect**.

3.  In the navigation bar on the left side, choose **Encryption Keys**, and then choose **Backup**.

    The **Encryption Key Information** dialog box opens.

4.  In **File Location**, specify the location where you want to store a copy of this key.

    You should consider storing this key on a separate computer from the one that is running Reporting Services.

5.  In **Password**, specify a password for the file.

6.  In **Confirm Password**, specify the password for the file again, and then choose **OK**.

<a name="create-backup-plan-sharepoint"></a>
## Create a backup plan for SharePoint Foundation

Unlike Team Foundation Server, which uses the scheduling tools in SQL Server Management Studio, there is no built-in scheduling system for backups in SharePoint Foundation, and SharePoint specifically recommends against any scripting that marks or alters its databases. To schedule backups so that they occur at the same time as the backups for TFS, SharePoint Foundation guidance recommends that you create a backup script by using Windows PowerShell, and then use Windows Task Scheduler to run the backup script at the same time as your scheduled backups of TFS databases. This will help you keep your database backups in sync.

>**Important:**  
>Before proceeding with the procedures below, you should review the latest guidance for SharePoint Foundation. The procedures below are based on that guidance, but might have become out of date. Always follow the latest recommendations and guidance for the version of SharePoint Products you use when managing that aspect of your deployment. For more information, see the links included with each of the procedures in this section.

### To create scripts to perform full and differential backups of the farm in SharePoint Foundation

1.  Open a text editor, such as Notepad.

2.  In the text editor, type the following, where *BackupFolder* is the UNC path to a network share where you will back up your data:

            Backup-SPFarm -Directory BackupFolder -BackupMethod Full

	>**Tip:**  
	>There are a number of other parameters you could use when backing up the farm. For more information, see [Back up a farm](http://go.microsoft.com/fwlink/?LinkId=235811) and [Backup-SPFarm](http://go.microsoft.com/fwlink/?LinkId=235810).

3.  Save the script as a .PS1 file. Consider giving the file an obvious name, such as "SharePointFarmFullBackupScript.PS1" or some meaningful equivalent.

4.  Open a new file, and create a second backup file, only this time specifying a differential backup:

            Backup-SPFarm -Directory BackupFolder -BackupMethod Differential

5.  Save the script as a .PS1 file. Consider giving the file an obvious name, such as "SharePointFarmDiffBackupScript.PS1".

    >**Important:**  
    >By default, PowerShell scripts will not execute on your system unless you have changed PowerShell's execution policy to allow scripts to run. For more information, see [Running Windows PowerShell Scripts](http://go.microsoft.com/fwlink/?LinkId=235813).

After you have created your scripts, you must schedule them to execute following the same schedule and frequency as the schedule you created for backing up Team Foundation Server databases. For example, if you scheduled differential backups to execute daily at 2 A.M., and full backups to occur on Sundays at 4 A.M., you will want to follow the exact same schedule for your farm backups.

To schedule your backups, you must use Windows Task Scheduler. In addition, you must configure the tasks to run using an account with sufficient permissions to read and write to the backup location, as well as permissions to execute backups in SharePoint Foundation. Generally speaking, the simplest way to do this is to use a farm administrator account, but you can use any account as long as all of the following criteria are met:

-   The account specified in Windows Task Scheduler is an administrative account.

-   The account specified for the Central Administration application pool and the account you specify for running the task have read/write access to the backup location.

-   The backup location is accessible from the server running SharePoint Foundation, SQL Server, and Team Foundation Server.

### To schedule backups for the farm

1.  Choose **Start**, choose **Administrative Tools**, and then choose **Task Scheduler**.

2.  In the **Actions** pane, choose **Create Task**.

3.  On the **General** tab, in **Name**, specify a name for this task, such as "Full Farm Backup." In **Security options**, specify the user account under which to run the task if it is not the account you are using. Then choose **Run whether user is logged on or not**, and select the **Run with highest privileges** check box.

4.  On the **Actions** tab, choose **New**.

    In the **New Action** window, in **Action**, choose **Start a program**. In **Program/script**, specify the full path and file name of the full farm backup .PS1 script you created, and then choose **OK**.

5.  On the **Triggers** tab, choose **New**.

    In the **New Trigger** window, in **Settings**, specify the schedule for performing the full backup of the farm. Make sure that this schedule exactly matches the schedule for full backups of the Team Foundation Server databases, including the recurrence schedule, and then choose **OK**.

6.  Review all the information in the tabs, and then choose **OK** to create the task for the full backup for the farm.

7.  In the **Actions** pane, choose **Create Task**.

8.  On the **General** tab, in **Name**, specify a name for this task, such as "Differential Farm Backup." In **Security options**, specify the user account under which to run the task if it is not the account you are using, choose **Run whether user is logged on or not**, and select the **Run with highest privileges** check box.

9.  On the **Actions** tab, choose **New**.

    In the **New Action** window, in **Action**, choose **Start a program**. In **Program/script**, specify the full path and file name of the differential farm backup .PS1 script you created, and then choose **OK**.

10. On the **Triggers** tab, choose **New**.

    In the **New Trigger** window, in **Settings**, specify the schedule for performing the full backup of the farm. Make sure that this schedule exactly matches the schedule for full backups of the Team Foundation Server databases, including the recurrence schedule, and then choose **OK**.

11. Review all the information in the tabs, and then choose **OK** to create the task for the differential backup for the farm.

12. In **Active Tasks**, refresh the list and make sure that your new tasks are scheduled appropriately, and then close Task Scheduler. For more information about creating and scheduling tasks in Task Scheduler, see [Task Scheduler How To](http://go.microsoft.com/fwlink/?LinkId=235812).

<a name="backup-additional-lab-mgt"></a>
## Back up additional lab management components

If you use Visual Studio Lab Management in your deployment of Team Foundation Server, you must also back up each machine and component that Lab Management uses. The hosts for the virtual machines and the SCVMM library servers are separate physical computers that are not backed up by default. You must specifically include them when you plan your backup and restoration strategies. The following table summarizes what you should back up whenever you back up Team Foundation Server.

| Machine | Component |
| --- | --- |
| Server that is running System Center Virtual Machine Manager 2008 (SCVMM) R2 | SQL Server database (user accounts, configuration data) |
| Physical host for the virtual machines | Virtual machines (VMs) </br> Templates </br> Host configuration data (virtual networks) |
| SCVMM library server | Virtual machines </br> Templates </br> Virtual hard disks (VHDs) </br> ISO images |

The following table contains tasks and links to procedural or conceptual information about how to back up the additional machines for an installation of Lab Management. You must perform the tasks in the order shown, without skipping any tasks.

To back up the machines that are running any SCVMM components, you must be a member of the Backup Operators group on each machine.

| Common Tasks | Detailed instructions |
| --- | --- |
| Back up the server that is running System Center Virtual Machine Manager 2008 R2. </br> Back up the library servers for SCVMM. </br> Back up each physical host for the virtual machines. | [Backing Up and Restoring the SCVMM Database](http://go.microsoft.com/fwlink/?linkid=150302)
