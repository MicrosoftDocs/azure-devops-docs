---
title: Restore the databases
description: Restore the databases
ms.assetid: c00bb8f7-bdb9-49c2-a291-79aab20d2701
ms.manager: douge
ms.author: elbatk
ms.date: 08/31/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.topic: get-started-article
---

# Restore the databases

**TFS 2015** | **TFS 2013**

This topic, the second part of the Restore a Single-Server tutorial, teaches you how to use the backups you made of the original server to restore the databases for Team Foundation Server (TFS) and the SharePoint farm on the new server.

You can use the backups you made of the original deployment to restore the data from that deployment to the new server. When restoring the data, be sure to restore all databases and the SharePoint Farm to the same point in time. If you followed the guidance in [Create a backup schedule and plan](config-backup-sched-plan.md), you used the **Scheduled Backups** feature to create your backups. You will use these backups to restore your data.

If you manually configured your backups, you cannot use the Restore wizard in Scheduled Backups to restore those databases. You must manually restore them using the software you used to back them up.

Use this topic to:

> [!div class="checklist"]   
> * Restore Team Foundation Server databases
> * Restore the SharePoint farm

**Required permissions**  
To perform these procedures, you must be a member of the following groups or have the following permissions:  
-   A member of the **Administrators** security group on the server.  
-   Either a member of the **SQL Server System Administrator** security group, or your **SQL Server Perform Back Up and Create Maintenance Plan** permission must be set to **Allow**.  
-   A member of the **sysadmin** security group for the databases for Team Foundation.  
-   A member of the **Farm Administrators** group.

<a name="restore-tfs-dbs"></a>
## Restore Team Foundation Server databases

Installing and configuring software isn't sufficient to recover a deployment. You must restore the data before your users will be able to get back to work. There’s a wizard to help you do this..

### To restore databases

1.  To start the Restore wizard, open the administration console for TFS and navigate to **Scheduled Backups**.

    ![Start the Restore wizard](../_img/ic654273.png)

2.  Specify the path to the backup set and choose the set you want to use for restoration.

    ![Choose the network path, then the restore set](../_img/ic664997.png)

3.  Complete the wizard and restore the databases.

    ![The databases are restored to the new server](../_img/ic664998.png)

In the example deployment, use the Restore wizard to restore the following databases:

-   TFS\_Warehouse  
-   TFS\_DefaultCollection

    This is the default name of the collection database. If you customized the name, make sure to use that name.
-   TFS\_Configuration  
-   ReportServer  
-   ReportServerTempDB  
-   WSS\_Config  
-   WSS\_AdminContent  
-   WSS\_Content

The Restore wizard also restores the encryption key for SQL Server Reporting Services as part of its operation. You can choose to restore that key manually, but it should not be necessary.

<a name="restore-sharept-farm"></a>
## Restore the SharePoint farm

Although the Restore wizard restored the SharePoint databases used by your deployment, it cannot restore the farm. You must use Windows PowerShell with the Restore-SPFarm command to restore the backup you made of the SharePoint Farm. In some cases, you can choose to use the Central Administration website to restore the farm instead of Restore-SPFarm, but the PowerShell command is the preferred method for restoring a farm.

To restore a farm, either you must be logged in with an account that is a member of the Farm Administrators group, or you must provide the credentials for an account that is a member of that group when prompted to do so.

### To restore the farm for SharePoint Foundation using Restore-SPFarm

1.  Open Windows PowerShell or SharePoint Management Shell.

2.  At the Windows PowerShell command prompt, enter the following command, where *UNCPath* is the fully-qualified UNC path of the directory where the farm backup is located:

    `Restore-SPFarm –Directory UNCPath –RestoreMethod Overwrite`

    This command will restore the farm using the most recent backup available. If you want to use a different backup, you must specify which backup to restore by using the –BackupID parameter with the GUID of the specific backup you want to use.

3.  At the Windows PowerShell command prompt, enter the following command, where *ServiceApplicationID* is the GUID of the restored farm:

    `Start-SPServiceInstance –Identity ServiceApplicationID`

    >**Tip:**  
    >If you do not know the GUID, you can use the **Get-SPServiceInstance** command to list the service instance GUIDs for all SharePoint applications on the server.

4.  For more information about restoring a farm, see [Restore a farm (SharePoint Foundation)](http://go.microsoft.com/fwlink/?LinkId=236093) and [Restore-SPFarm](http://go.microsoft.com/fwlink/?LinkId=236095).

### To restore the farm using SharePoint Central Administration

1.  Open SharePoint Central Administration, and on the **Home** page, in the Backup and Restore section, choose **Restore from a backup**.

    The Restore Wizard opens.

2.  On the **Restore from Backup – Step 1 of 3** page, choose the farm backup job that you want to restore, and then choose **Next**.

3.  On the **Restore from Backup – Step 2 of 3** page, select the check box next to the farm option, and then choose **Next**.

4.  On the **Restore from Backup – Step 3 of 3** page, in the **Restore Component** section, make sure that **Farm** appears in the **Restore the following component** list. In the **Restore Only Configuration Settings** section, choose **Restore content and configuration settings**. In the **Restore Options** section, under **Type of Restore**, choose **Same configuration**. When a dialog box appears asking you to confirm your choices, choose **OK**, and then choose **Start Restore**.

5.  Monitor the general status of the recovery as it appears in the **Readiness** section of the **Backup and Restore Job Status** page. The status automatically updates every 30 seconds. You can also choose to manually update the status by choosing **Refresh**.

6.  When restoration is complete, return to the **Home** page in Central Administration. In **Application Management**, choose **Manage services on server**.

7.  On the **Services on Server** page, find the service applications for the restored farm, and in the **Actions** column, choose **Start** for each of those service applications.

8.  For more information about restoring a farm, see [Restore a farm (SharePoint Foundation)](http://go.microsoft.com/fwlink/?LinkId=236093).

## Try this next

> [!div class="nextstepaction"]
> * [Install and configure Team Foundation Server](tut-single-svr-install-config-tfs.md) 
