---
title: Restore an application-tier server
description: Restore an application-tier server
ms.assetid: d5886fe9-c92a-49b7-87db-bbe47c808929
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Restore an application-tier server

**TFS 2015** | **TFS 2013**

The databases for Team Foundation store all data for your deployment of Team Foundation Server. Even if you back up the application-tier server, you will not back up any data for Team Foundation Server. However, if the hardware of an application-tier server fails, you can install another application-tier server and configure it to use the databases for your deployment. That server will then replace the offline server as the application-tier server for the deployment. If your application-tier server hosted SharePoint Products, you must also restore that software on the new hardware. For more information, see [Backup (SharePoint Foundation)](http://go.microsoft.com/fwlink/?LinkId=237641), [Backup and Recovery (SharePoint Server)](http://go.microsoft.com/fwlink/?LinkId=203842), or [Protecting and restoring a farm (Office SharePoint Server 2007)](http://go.microsoft.com/fwlink/?LinkId=203843).

>**Note:**
>  After you restore an application tier to new hardware, make sure that all users, groups, and service accounts for your deployment are configured with the permissions that they require to perform necessary tasks. For example, administrators for Team Foundation must be members of the local **Administrators** group on the application-tier server so that they can open the administration console. For more information, see [Add users to team projects](../../../security/add-users-team-project.md), [Set administrator permissions for team project collections](../../add-administrator-tfs.md), [Set administrator permissions for Team Foundation Server](../../add-administrator-tfs.md), and [Service accounts and dependencies in Team Foundation Server](../service-accounts-dependencies-tfs.md).

You can also add more than one application-tier server to a deployment of Team Foundation Server, but you must configure clients to connect to that server as a separate application tier. You cannot configure automatic load balancing between application-tier servers. For actual load balancing and transparency to clients, you must first install and configure a hardware or software device for network load balancing (NLB).

### To install and configure a server as the application-tier server

1.  Stop the application pools and services that Team Foundation Server uses.

    For more information, see [TFSServiceControl Command](../../command-line/tfsservicecontrol-cmd.md).

2.  If you are using Network Service as the service account for Team Foundation (TFSService), on the application-tier server, open a Command Prompt window, and change directories to *Drive:%Program Files%*\\ TFS 12.0\\Tools. At the command prompt, enter the following command:

    **TfsConfig Accounts /add /account:"NT Authority\\Network Service" /accountType:ApplicationTier /SQLInstance:** *ServerName* **/DatabaseName:** *DatabaseName*

    >**Note:**
    >  For more information, see [Accounts Command](../../command-line/tfsconfig-cmd.md#accounts).

3.  Install Team Foundation Server on the new server, and start the Application-Tier Only wizard.

4.  If you are using Visual Studio Lab Management, install the System Center Virtual Machine Manager (SCVMM) Administrator Console on the application tier, and configure it to connect to the server that is running SCVMM.

    For more information, see [Configuring Lab Management for SCVMM Environments](../config-lab-scvmm-envs.md).

5.  If the computer name has changed, open the administration console for Team Foundation.

6.  In the navigation bar, choose **Application Tier**, and then choose **Change URLs**.

    The **Change URLs** window opens.

7.  In **Notification URL**, specify the URL for the new application-tier server, and then choose **OK**.

    >**Note:**
    >  The name of the old application-tier server will still appear in the list of application-tier servers in the administration console for Team Foundation. If you select the **Filter out machines that have not connected in more than 3 days** check box, the old server will disappear from the list within three days.

## See Also

 [Restore Lab Management components](restore-lab-management-components.md) 

 [Team Foundation Server architecture](../../architecture/architecture.md) 

 [Restore a deployment to new hardware](tut-single-svr-home.md) 

 [Open the Team Foundation Administration Console](../../command-line/open-admin-console.md) 
