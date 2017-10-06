---
title: Move SharePoint to new hardware for TFS
description: Move SharePoint to new hardware for TFS
ms.assetid: b5cdc973-6538-4a54-812f-e58bb001a398
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.manager: douge
ms.author: elbatk
ms.date: 09/09/2017
---

# Move SharePoint to new hardware for TFS

[!INCLUDE [temp](../../_shared/about-sharepoint-deprecation.md)]

## Set up a new SharePoint site 

You can install SharePoint Foundation using the TFS extensions for SharePoint wizard. The TFS wizard will install a fresh copy of SharePoint using the installation of SQL Server you just set up, and then configure the TFS extensions for the new installation of TFS. After you install SharePoint, you’ll detach its content database to prepare for the migration of the data from your previous SharePoint installation in step 4, Back up and Restore Data.

**Required Permissions**

You must be a member of the administrators security group on Windows Server.

## Install SharePoint and the TFS extensions
 

Run the TFS installation program from the product DVD and then use the **Configure Extensions for SharePoint Products** wizard.

### To run the Team Foundation Server installer

1.  Insert the Team Foundation Server DVD in the drive and launch the tfs\_server.exe file to begin the installation.

2.  On the license terms dialog box, accept the license terms and then choose **Install Now**.

    If you want to install Team Foundation Server to a specific location in the file system, choose the browse button (…) next to the default install location.

### To install SharePoint

1.  In the Team Foundation Server Configuration tool, choose **Configure Extensions for SharePoint Products** and then choose **Start Wizard**.

	![](../../upgrade/_img/ic666063.png)

    The Team Foundation Server SharePoint Extensions Configuration wizard appears.

2.  Read the** Welcome** screen, and choose **Next**.

3.  Take these steps to install SharePoint:

    1.  Choose the big **Install SharePoint Foundation 2013** button. Once the install completes, choose **Next**.

    2.  Type the name of the SQL Server or named instance that will host the configuration databases for SharePoint and choose **Next**.

    3.  Type a user account and password for the service account for SharePoint and then choose **Next**.

        For more information, see [Accounts required for installation of Team Foundation Server](../../requirements.md#accounts)

4.  On the **Review** page, review the settings and choose ** Next**.

    The wizard validates your configuration.

5.  Choose **Configure**.

    The wizard applies configuration settings. This process might take several minutes.

6.  Choose **Next**, **Close**, **Close**.

    The Team Foundation Server Administration Console appears.

### Add the TFS service account to the Farm Administrator group


If you're using the same SharePoint site from your previous deployment, you may already have the TFS service account in the Farm Administrators group. If so, you can skip this step. Otherwise, you should follow the steps below to ensure the service account that you will use for TFS is added to the Farm Administrators group on SharePoint.

How do you know if this step is necessary? Here are two potential scenarios that would require you to perform this step.

-   If you're planning to change the account you're using for the TFS service account during TFS upgrade, you should add the new account to the Farm Administrators group.

-   If you are using Network Service and you're planning to migrate the TFS application tier to new hardware, you should add the name of the new hardware followed by a $ symbol (Domain\\ServerName$) to the Farm Administrators group.

### To add the service account to the Farm Administrators group

1.  In a web browser, open the SharePoint 2013 Central Administration site.

2.  Under **Security**, choose **Manage the farm administrators group**.

3.  Choose **New**.

4.  In the Users/Groups box, enter the name of the service account for Team Foundation Server.

    If you're using Network Service, add the server name followed by a $ symbol. For example, domain\\servername$. SharePoint might not find the name but will allow you to enter it into the list.

5.  Choose **Share**.

### Detach the SharePoint content database

When you installed SharePoint, a brand new content database was created for SharePoint. You need to detach this database to prepare for the migration of data from your previous SharePoint installation in step 4, Back up and Restore Data.

### To detach the content database

1.  In a web browser, open the SharePoint 2013 Central Administration site.

2.  Under **Application Management**, choose **Manage Content Databases**.

3.  Choose **WSS\_Content**.

	> [!NOTE]
	> WSS_Content is the default name. Your installation might use a custom name for this database.

    The **Manage Content Database Settings** page opens.

4.  Select the **Remove content database** check box, and then choose **OK**.

	> [!NOTE]
	> This step detaches the database but does not delete any content.

5.  In the warning dialog box that appears, choose **OK**.

6.  In **Manage Content Database Settings**, choose **OK** to confirm your changes.

## Next Step: Back up and restore data

You can use TFS custom backup and restore tools to manage your data. First you’re going to back up your data, including the encryption key on the report server. Next, you’re going to restore your data to the SQL Server instance you set up in step 2. With the restore complete, you’ll use the SQL Server Reporting tool to restart the database, restore the encryption key, and then verify access to the report server. If you installed SharePoint, you’ll use a SharePoint command line tool to attach and upgrade your content database

For more information, see [Back up and restore data for TFS](../../upgrade/upgrade-2013/backup-and-restore-data.md)

![](../_img/ic612476.png)
