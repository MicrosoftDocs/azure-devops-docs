---
title: Change the service account or password for SQL Server Reporting Services for TFS
description: Change the service account or password for SQL Server Reporting Services  for Team Foundation Server
ms.assetid: 658da0e5-0390-4016-bacf-4ad9003777a6
ms.manager: douge
ms.author: elbatk
ms.date: 08/18/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.topic: get-started-article
---

# Change the service account or password for SQL Server Reporting Services for Team Foundation Server

**TFS 2017** | **TFS 2015** | **TFS 2013**

You can help improve the security of Team Foundation Server (TFS) by
changing the service account that it uses for the data sources for SQL
Server Reporting Services or by changing the password that is used for
that account. TFS acts in the security context of a service account
when it retrieves project data from the data sources in SQL
Server Reporting Services. TFS documentation refers to this service
account by the placeholder *TFSReports</span>.
The actual account name depends on your installation. You might need to
change the password of that account, or designate a different account.
For example, if the password of the underlying account expires, and you
assign a new password, you must change the password of the 
*TFSReports</span> account in TFS to match.

The **TFSConfig** utility does not create a new account to use as the
data sources account, nor does the utility change the account password.
Instead, the utility updates TFS to use a different set of credentials.

You change the password or account used as the *FSReports* account by using the **TFSConfig** command-line utility with the **Accounts** option.

> [!IMPORTANT]
> The **TFSConfig** utility changes only those services that run under the old account.

You can use the same utility to assign a different account to be the
*TFSReports</span> account, but you might need to
perform one or more of the following additional actions:

-   Before you assign an account to use as the 
    *TFSReports* account, you must verify that it
    is a member of a workgroup or domain that is trusted by every
    computer in the deployment of Team Foundation.

-   You must manually grant the account that you will use as the 
    *TFSReports* account the 
    **Allow log on locally** permission. The TFSConfig
    utility does not grant this permission when it assigns the account.

-   Optionally, after you use TFSConfig to specify an account to use as
    the *TFSReports* account, you can
    revoke its **Log on as a service**
    permission, which TFSConfig automatically grants to the 
    *TFSReports* account. 
    *TFSReports* does not need this permission,
    but the *TFSService* account does.
    Therefore, you should not remove this permission if you use the same
    domain or workgroup account for both service accounts.

    For more information about the **Log on as a
    service** permission, see this page on the Microsoft website:
    [Add the Log on as a service right to an account](http://go.microsoft.com/fwlink/?LinkId=62101). For more
    information about the **Allow log on locally** permission, see this page on the Microsoft website:
    [Allow log on locally](http://go.microsoft.com/fwlink/?LinkId=103673).

For more information about required service accounts, see the topic
[Service accounts and dependencies in Team Foundation Server](service-accounts-dependencies-tfs.md) and
also the topic [Accounts required for installation of Team Foundation Server](service-accounts-dependencies-tfs.md) in
the installation guide for Team Foundation.

**Requirements**

To perform these procedures, you must be a member of the 
**Administrators** group on the server where TFSConfig
is installed. You must also be a member of the 
**sysadmin** group on the server that hosts the
configuration database. For more information about permissions, see
[Permission reference for Team Foundation
Server](../../security/permissions.md).

In addition to these permissions, you might need to address the
following requirements:

-   To follow a command-line procedure, you might need to open an
    elevated Command Prompt.

-   To access Report Manager, reports, or websites for SQL
    Server Reporting Services, you might need to add these sites to the
    list of trusted sites in Internet Explorer or start Internet
    Explorer as an administrator.


## Change the Reporting Services account name or password

To change the password of the *TFSReports*
account or to assign a different account, you must log on to a server
that hosts the application services for Team Foundation and use the
**TfsConfig Accounts** utility.

> [!NOTE]
> Depending on your deployment configuration, you might need to restart
> Internet Information Services (IIS) after you complete this procedure
> for the changes to take effect.

To change the password using the TFSConfig utility:

1.  Open a Command Prompt window and change to the directory that
    contains the **TFSConfig** utility.

    By default, the utility is located in 
    *Drive*:\\Program Files\\TFS 12.0\\Tools.

2.  At the command line, type **TFSConfig Accounts /UpdatePassword
    /accountType:ReportingDatasource /account:**
    *AccountName* **/password:** *newPassword*, and then press ENTER.

    Replace *AccountName* with the name of the current *TFSReports* account.
    Replace *newPassword* with the new password of the account.

To use the administration console to change the password:

1.  Open the administration console for Team Foundation on the server
    that hosts the application tier.

    For more information, see [Configure and manage TFS resources](config-tfs-resources.md).

2.  In the console, expand the server name and choose 
    **Application Tier**.

3.  In the Application Tier pane, navigate to 
    **Reporting Services Summary** choose 
    **Update Account Password**.

    The **Update Account Password** window opens.

    > If you used a system account as the service account, you will see an
    > error message when you choose **Update Account
    > Password**. You do not need to change the password of that account.
    > System accounts do not have user-managed passwords.

4.  Type the new password in **Password**, and
    then choose **OK**.

    The **Change Report Reader Account**
    window opens.

5.  Wait for all the status messages to complete in 
    **Status**, and then choose 
    **Close**.

    > [!NOTE]
    > This process might take a few minutes.

To assign a new reporting services service account to all Team Foundation Server services using the TFSConfig utility:

1.  Open a Command Prompt window and change to the directory that
    contains the **TFSConfig** utility.

    By default, the utility is located in 
    *Drive*:\\Program Files\\Microsoft Team
    Foundation Server 12.0\\Tools.

2.  At the command line, type **TFSConfig Accounts /change
    /accountType:ReportingDatasource /account:**
    *NewAccountName* **/password:**
    *newPassword*, and then press ENTER.

    Replace *NewAccountName* with the name
    of the new TFSReports account. Replace 
    *newPassword* with the password of
    the account.

To use the administration console to change the account:

1.  Open the administration console for Team Foundation on the server
    that hosts the application tier.

2.  In the console, expand the server name and choose 
    **Application Tier**.

3.  In the Application Tier pane, navigate to 
    **Reporting Services Summary**, and then choose
    **Change Account**.

    The **Change Report Reader Account**
    window opens.

4.  Choose one of the following steps:

    1.  If you want to use a system account, choose 
        **Use a system account**, and then choose a
        system account from the drop-down list.

        > [!NOTE]
        > System accounts do not have user-managed passwords. If you choose to use
        > a system account as TFSReports, you should not type a password in the
        > password field.

    2.  If you want to use a domain or workgroup account, choose 
        **Use a user account**, type the name of the
        account in **Account Name**, and then
        type the password for that account in 
        **Password**.

5.  Choose **OK**.

    The **Change Report Reader Account**
    window opens.

6.  Wait for all the status messages to complete in 
    **Status**, and then choose 
    **Close**.

    > [!NOTE]
    > This process might take a few minutes.
