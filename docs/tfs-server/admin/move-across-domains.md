---
title: Move Team Foundation Server from one environment to another
description: Move Team Foundation Server from one environment to another
ms.assetid: ff582394-a3d6-4a1d-86d2-ff4a0c9f7e30
ms.manager: douge
ms.author: elbatk
ms.date: 08/31/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Move Team Foundation Server from one environment to another

**TFS 2015** | **TFS 2013**

The most common environment-based move scenario is changing the domain of the TFS deployment, whether it's a domain name change or going from a workgroup to a domain.

> [!IMPORTANT]
> In some situations you might want to change the domain of a TFS deployment as well as its hardware. Changing the hardware is a restoration-based move, and you should never combine the two move types. First complete the [hardware move](move-clone-hardware.md), and then change the environment.
> 
> Additionally, changing identities in TFS as part of an environmental move is the aspect that most often causes conflicts or problems. The [Identities Command](../command-line/tfsconfig-cmd.md#identities) is a powerful tool, but it has certain limitations. Read up about it as part of planning your move. To help ensure a successful move, make sure that you understand the following requirements:
> * Once a user account is present in TFS, it cannot be removed or have another account mapped to it. For example, if you are moving DomainA/UserA to DomainB/UserB, the Identities command would only work to migrate the user if DomainB/UserB is not already present in TFS.
> * Because the members of the local Administrators group are automatically added to TFS, make sure to remove any accounts that you want migrated from that group before you change the domain or environment.
>
> For further background information, [go here](http://blogs.msdn.com/b/vasu_sankaran/archive/2010/06/07/identity-change-in-tfs-2010.aspx) for a detailed description of how identity changes in TFS work, including limitations of the tool.


We'll walk through the steps to change the environment of your TFS deployment in the following sections:

1.  [Check permissions and accounts](#check-permissions-accts)  
2.  [Stop TFS services](#stop-tfs-svcs)  
3.  [Back Up Data](#backup-dbs)  
4.  [Join TFS to its new domain](#join-tfs-to-domain)  
5.  [Configure SharePoint Products for the new environment](#config-sharept-products)  
6.  [Move TFS user and service accounts](#move-tfs-user-svc-accts)  
7.  [Configure Reporting and Analysis Services](#config-reporting-analysis-svcs)  
8.  [Restart TFS services](#restart-tfs-svcs)

<a name="check-permissions-accts"></a>
## Check permissions and accounts

In order to successfully change the environment for TFS, you'll need to be an administrator on the local computer as well as for TFS and all of the software on which your deployment depends: SQL Server, reporting, SharePoint Products (if your deployment uses reporting or SharePoint), and any other software with which your deployment interoperates, such as Project Server. However, all members of the local Administrators group are automatically included in TFS, which can cause problems when trying to migrate accounts. Therefore, you should use an account that you do not intend to migrate as part of the environmental move. You might consider adding a special administrative account just for the move, and using that account to perform the migration.

### To verify administrator-level permissions

-   Make sure the account you're using is a member of the following groups:  
    -   Servers: Administrators (local Administrators group or equivalent)  
    -   TFS: Team Foundation Administrators and Admin Console Users  
    -   SQL Server: sysadmin  
    -   SharePoint Products: Farm Administrators (if your TFS deployment integrates with SharePoint Products)

If you aren't a member of one or more of these groups, [get permissions now](../add-administrator-tfs.md).

Now that you're sure you're using an account that has all the permissions needed, it's time to start checking accounts to see if there might be any conflicts with names or groups in the environment to which you'll be moving. We already know that accounts that are members of the local Administrators group can't be migrated, so let's remove those first.

### Remove accounts to be migrated from local Administrators group

-   Open the local Administrators group and remove any accounts that you wish to migrate to the new environment. Repeat this step for any other groups that might be affected.

Now check the list of identities in the current TFS environment and look for any potential problems with groups or individual user accounts that might exist in the new environment.

> [!TIP]
> Consider creating a table or migration map of identities to be moved as part of the environmental move, including details of which accounts might not be able to be migrated automatically.

### Check identities

1.  On the application-tier server for Team Foundation, open a Command Prompt window with administrative permissions, navigate to *%ProgramFiles%***\\Microsoft Visual Studio 12.0 Team Foundation Server\\Tools**, and run the following command to view the identities currently in the system:

        TFSConfig Identities

2.  A list of identities will display. Check these users and groups to ensure that there are no potential duplicates or problems with identities in the environment to which you'll move TFS, and take steps to mitigate any potential conflicts.

<a name="stop-tfs-svcs"></a>
## Stop TFS services

Stopping the services helps ensure that users cannot make changes to work items or check in source code to the original deployment during or after the move process.

1.  On the TFS application-tier computer, open a Command Prompt window, and change directories to *Drive*:\\%programfiles%\\TFS 12.0\\Tools.

2.  Type the following [TFSServiceControl](../command-line/tfsservicecontrol-cmd.md) command:

     **TFSServiceControl quiesce** 

<a name="backup-dbs"></a>
## Back up the databases and the SQL Server Reporting Services encryption key

1.  Open the administration console for TFS and on the **Scheduled Backups** page, take a full backup. The backup will back up everything you configured for backup in your backup plan, but it will do so immediately, not according to the time scheduled in the plan. If your deployment uses reporting, you can back up the encryption key as part of this backup set.

    ![You can close the window while the job completes](_img/ic688711.png)

    (If you don't have backups configured, you'll have to [create a plan](backup/config-backup-sched-plan.md) before you can take a full backup.)

2.  Once the backup completes, verify that the backup is available on the storage device or network share, and that you can access this backup from the new hardware.

<a name="join-tfs-to-domain"></a>
## Join TFS to its new domain

1.  On each server, open the properties for the computer.

2.  Change the settings for the computer to the domain or workgroup to which you want to join the server.

    If you are prompted to provide the user name and password of an account that has permissions to join this computer to the domain, provide the appropriate credentials.

3.  Restart the computer for the domain change to take effect.

    > [!NOTE]
	> After you restart the computer, a warning might appear that services or drivers could not be started. Continue with the next procedure.

<a name="config-sharept-products"></a>
## Configure SharePoint Products for the new environment

If you are changing the environment to one where there is no trust with your previous environment, you might need to configure SharePoint Products before it will operate correctly. Information about users imported from directory services is available on SharePoint sites from the People Picker Web control. Site administrators and other users use the People Picker to select people and groups when assigning permissions. When information about users is located on multiple forests or on a forest without a trust relationship for all users, additional steps might be necessary to ensure that all people and groups are available from this Web control.

Skip this procedure if you are not using SharePoint Products in your deployment, if you're new environment has a two-way trust to the old environment, or if no errors for your SharePoint Web application appear in the administration console for Team Foundation.

1.  On every server that is part of the SharePoint farm that supports your deployment of Team Foundation Server, open a Command Prompt window with administrative permissions, and change directories to %programfiles%\\Common Files\\Microsoft Shared\\Web Server Extensions\\15\\BIN.

2.  Type the following command, where *Key* is the encryption key you want to use in your deployment of SharePoint Products:

    **stsadm.exe -o setapppassword -password** *Key*

    > [!NOTE]
    > This key is an encryption string that is used to encrypt the password for the account that is used to access the forest or domain. The encryption string must be the same for every server in the farm, but a unique string should be used for each farm.

3.  Type the following command, where *domain:DNSName* is the target forest or domain and its DNS name, *user,password* is the username and password for an account that has access to the target forest or domain, and *WebApp* is the name of the Web application that supports your deployment of Team Foundation Server:

    **stsadm.exe -o setproperty -pn peoplepicker-searchadforests -pv** *domain:DnsName***,***user***,***password* **-url http://***WebApp*

4.  Type the following command, where *URL* is the URL for a site collection that supports a team project collection, *Port* is the port number that is assigned to that site collection, and *UserName* is the user name of the account that will act as the owner for that site collection:

    **stsadm.exe -o siteowner -url http://** *URL* **:** *Port* **-ownerlogin** *UserName*

5.  Repeat the previous step for each site collection that your deployment of Team Foundation Server uses.

<a name="move-tfs-user-svc-accts"></a>
## Move TFS user and service accounts

As mentioned at the beginning of this topic, moving accounts is when you're most likely to encounter difficulties, particularly if you haven't carefully planned for user migration. The TFSConfig Identities command cannot migrate any account to an account that already exists in TFS.

If account names are the same in both domains, and the only difference is the domain name, then you can use the batch mode of TFSConfig Identities to change all the identities at once. Otherwise you must change identities individually and specify a different target account name, as detailed below.

1.  On the application-tier server for Team Foundation, open a Command Prompt window with administrative permissions, navigate to *%ProgramFiles%***\\Microsoft Visual Studio 12.0 Team Foundation Server\\Tools**, and run the following command to change the service IDs (SIDs) for the service account to the new domain:

        TFSConfig identities /change /fromdomain:OldComputerorDomainName /todomain:NewDomainName /account:OldTFSServiceAccount /toaccount:NewTFSServiceAccount

    > [!WARNING]
    > If your service account was a system account such as Network Service, you cannot directly migrate the service account, because a system account with the same name exists in the new environment. You'll have to perform a two-stage process change. See the example in [Identities Command](../command-line/tfsconfig-cmd.md#identities).

2.  To migrate all accounts that have the same name in the new environment, type the following command:

        TFSConfig Identities /change /fromdomain:OldDomainName /todomain:NewDomainName

    This will batch process the accounts.

3.  if you're new domain contains one or more identities where the name changes between environments, you'll need to manually update the SIDs for each of those identities. For example, if Christie Church's user account was Fabrikam\\CChurch in the previous environment, but is NewFabrikam\\ChristieC in the new environment, you would have to manually update her SID. For every account that has this requirement, type the following command:

        TFSConfig Identities /change /fromdomain:OldDomainName /todomain:NewDomainName /account:OldAccountName /toaccount:NewAccountName

4.  Now run the following command to update the service account:

        TFSConfig Accounts /change /AccountType:ApplicationTier /account:AccountName /password:Password

5.  If your deployment uses reporting, run the following command to update the data source account used for reporting:

        TFSConfig Accounts /change /AccountType:ReportingDataSource /account:AccountName /password:Password

6.  If your deployment uses Team Foundation Server Proxy, run the following command to update the service account used for the proxy:

        TFSConfig Accounts /change /AccountType:Proxy /account:AccountName /password:Password

    > [!NOTE]
    > If you are moving to a non-trusted domain, you might also need to manually add users and groups to teams, projects, collections, and Team Foundation Server itself. For more information, see [Add users to team projects](../../security/add-users-team-project.md), [Set administrator permissions for team project collections](../add-administrator-tfs.md), and [Set administrator permissions for Team Foundation Server](../add-administrator-tfs.md).

7.  If your deployment is integrated with Project Server, you might need to perform additional steps to configure the service accounts with the permissions required for operation. For more information, see [Assign permissions to support TFS-Project Server integration](https://msdn.microsoft.com/library/gg412653) and [ConfigureTFS-Project Server integration](https://msdn.microsoft.com/library/gg412647).

<a name="config-reporting-analysis-svcs"></a>
## Configure Reporting and Analysis Services

You can skip this procedure if you are not using reporting as part of your deployment.

If you renamed a report server as part of this type of move, you must redirect Team Foundation Server to the report server at its new location. You must also restart the warehouse and manually rebuild the database for Analysis Services.

1.  Open the administration console for Team Foundation, go to the Reporting node, and edit the settings.

    ![Reports still point to the old server](_img/ic682727.png)

2.  Change the values on all three tabs so that they include the new name of the server. Make sure that you provide the correct information for the data sources account in the new environment.

    ![Make sure the information is correct on all 3 tabs](_img/ic688492.png)

3.  Choose **Start Jobs** to restart reporting.

4.  Choose **Start Rebuild** to rebuild the warehouse.

## Configure backups

If the network share name or storage device changed with the domain name change, you'll need to update the scheduled backup plan to point to those renamed resources.

-   In the administration console, go to the Scheduled Backups node and reconfigure the scheduled backups to back up the TFS databases on the new server. For more information, see [Create a backup schedule and plan](backup/config-backup-sched-plan.md).

<a name="restart-tfs-svcs"></a>
## Restart TFS services

Now that you've updated TFS with all the information for the new environment, restart the services.

1.  On the TFS application-tier computer, open a Command Prompt window with administrative permissions and change directories to *Drive*:\\%programfiles%\\TFS 12.0\\Tools.

2.  Type the following [TFSServiceControl](../command-line/tfsservicecontrol-cmd.md) command:

     **TFSServiceControl unquiesce** 

## Q & A

**Q: I want to change the physical server or servers for my deployment, not domains. Can I do that?**

**A:** Yes. That's called a hardware-based move, and the steps can be found [here](move-clone-hardware.md). You should not try to combine an environment-based move with a hardware-based move. First complete the hardware move, and then change the environment.


