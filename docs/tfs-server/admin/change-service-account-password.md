---
title: Change the service account or password for Team Foundation Server
description: Change the service account or password for Team Foundation Server
ms.assetid: 644edcbc-983e-4f86-a832-4461e635bec6
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.topic: get-started-article
---

# Change the service account or password for Team Foundation Server

**TFS 2015** | **TFS 2013**

You can help improve the security of Team Foundation Server (TFS) by changing its service account or the password used for that account. TFS runs services such as its Web services and the Team Foundation Background Job Agent in the context of a service account. 

For simplicity, the TFS documentation refers to this account as TFSService, although that is not the actual name of the account unless you specifically create an account with that name. TFS stores a record of the name of the actual account that is used as its service account. By changing the record, you can assign a different account to act as the service account. You can also change the password for that account. Whether you change the account, the password, or both, you stay synchronized with other components in your deployment. For example, if an Active Directory domain policy requires that all passwords expire periodically, you can update the password information for the service account in TFS when that password changes.

>**Note:**  
>TFS and its utilities cannot create a new local or domain account to use as *TFSService*, and they cannot update the password for that account in the workgroup or the domain. Instead, the utilities update the records to match the new credentials. If you your deployment includes more than one application-tier server, you must manually update each server with any changes to the service account or its password.

For more information about service accounts in TFS, see [Service accounts and dependencies in Team Foundation Server](service-accounts-dependencies-tfs.md). For more information about the accounts required for installation, including the service account for TFS, see [Accounts required for installation of Team Foundation Server](../requirements.md#accounts).

**Required Permissions**:

 * To perform these procedures, you must be a member of the **Administrators** group on the Team Foundation application-tier server and a member of the **sysadmin** group on the server and instance of SQL Server that hosts the configuration database for Team Foundation. For more information, see [Team Foundation Server architecture](../architecture/architecture.md) and [Permission reference for Team Foundation Server](../../security/permissions.md).

To follow a command-line procedure, you might need to open an elevated Command Prompt window. To perform this task, open the context menu for **Command Prompt**, and choose **Run as Administrator**. For more information, see this page on the Microsoft Web site: [User Account Control](http://go.microsoft.com/fwlink/?LinkId=111235).

## Changing the Password of the Service Account

To change the password of *TFSService*, you must log on to the application-tier server for Team Foundation and either use the administration console for Team Foundation, or open a Command Prompt window and use the TFSConfig command-line utility. If your deployment includes more than one application-tier server, you must perform this task on each server, or the account information will be out of synchronization.

> [!NOTE]
> Depending on your deployment configuration, you might need to restart Internet Information Services (IIS) after you complete the procedure before the changes will take effect.

### To use the administration console to change the password

1.  Open the administration console for Team Foundation on the server that hosts the application tier.

    For more information, see [Open the Team Foundation Administration Console](../command-line/open-admin-console.md).

2.  In the console, expand the server name and choose **Application Tier**.

3.  In the Application Tier pane, choose **Update Account Password**.

    The **Update Account Password** window opens.

    > [!NOTE]
    > If you used a system account as the service account, you will see an error message when you choose **Update Account Password**. You do not need to change the password of that account. System accounts do not have user-managed passwords.

4.  Type the new password in **Password**, and then choose **OK**.

    The **Change Service Account** window opens.

5.  Wait for all the status messages to complete in **Status**, and then choose **Close**.

    > [!NOTE]
    > This process might take a few minutes.

**To use the TFSConfig utility to change the password**:

1.  On the application-tier server, open a Command Prompt window and change directories to the directory that contains the **TFSConfig** utility.

    By default, this utility is located in *Drive*:\\Program Files\\TFS 12.0\\Tools.

2.  At the command line, type **TFSConfig Accounts /UpdatePassword /accountType:ApplicationTier /account:***AccountName* **/password:***NewPassword*, and then choose ENTER.

3.  You must specify both the name of the account you want to use as *TFSService* (*AccountName*) and the password of the account (*NewPassword*).

## Assigning a Different Account as the Service Account

To configure TFS to use a different account as the service account for Team Foundation, you can use either the administration console or the TFSConfig command-line utility. If your deployment includes more than one application-tier server, you must perform this task on each server, or the account information will be out of synchronization. Before you use either utility to make the change, consider the following issues:  
-   You must choose a new account that is either a system account or a member of a workgroup or domain that is trusted by every computer in this deployment of TFS.  
-   The configuration utilities grant the **Log on as a service** permission to the new service account, but the utilities do not revoke this permission from the account previously used as the service account if another service still uses that account. If the old account no longer needs that permission for the service for which it is still in use, you might want to manually remove that permission from the old account.

    For more information, see this page on the Microsoft Web site: [Add the Log on as a service right to an account](http://go.microsoft.com/fwlink/?LinkId=62101).  
-   You might need to restart IIS after you complete the procedure before the changes will take effect.  
-   The TFSConfig utility changes only those services that run under the old account.

**To use the administration console to change the service account**:

1.  Open the administration console for Team Foundation on the server that hosts the application tier.

2.  In the console, expand the server name and choose **Application Tier**.

3.  In the Application Tier pane, choose **Change Account**.

    The **Update Service Account** window opens.

4.  Perform one of the following steps:

    1.  If you want to use a system account, choose **Use a system account**, and then choose a system account from the drop-down list.

        If your server is a member of an Active Directory domain, the default choice for the system account to use is Network Service. If your server is a member of a workgroup, the default choice is Local Service. Depending on the details of your deployment, the default choice might be the only available choice.

        >**Note:**  
        >System accounts do not have user-managed passwords. If you choose to use a system account as TFSService, you should not type a password in the password field.
        
    2.  If you want to use a domain or workgroup account, choose **Use a user account**, type the name of the account in **Account Name**, and then type the password for that account in **Password**.

5.  Choose **OK**.

    The **Change Service Account** window opens.

6.  Wait for all the status messages to complete in **Status**, and then choose **Close**.

    > [!NOTE]
    > This process might take a few minutes.

**To use the TFSConfig utility to change the service account**:

1.  On the application-tier server, open a Command Prompt window and change directories to the directory that contains the **TFSConfig** utility.

    By default, this utility is located in *Drive*:\\Program Files\\TFS 12.0\\Tools.

2.  At the command line, type **TFSConfig Accounts /change /accountType:ApplicationTier /account:***AccountName* **/password:***NewPassword*, and then choose ENTER.

    For more information, see [Accounts Command](../command-line/tfsconfig-cmd.md#accounts).

## See Also

 [Change the service account or password for SQL Server Reporting Services](change-service-account-or-password-sql-reporting.md)  

 [Accounts Command](../command-line/tfsconfig-cmd.md#accounts)  

 [Service accounts and dependencies in Team Foundation Server](service-accounts-dependencies-tfs.md)  

 [Managing server configuration with TFSConfig](../command-line/tfsconfig-cmd.md)  

 [How to: Change the Password for Visual Studio Team Foundation Build Service](https://msdn.microsoft.com/library/bb778405)
 