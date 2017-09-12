---
title: Restore Lab Management components
description: Restore Lab Management components
ms.assetid: c99b3b8c-d025-4e2f-b6ef-533c5c2f3f92
ms.manager: douge
ms.author: elbatk
ms.date: 08/31/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Restore Lab Management components for TFS

**TFS 2015** | **TFS 2013**

By following the procedures in this topic, you can restore one or more components of Visual Studio Lab Management that have failed. You can decide which procedures to complete based on which components failed, but you should complete the procedures in the following order:

1.  [Restore the library server for System Center Virtual Machine Manager (SCVMM)](#restore-lib-svr-scvmm)

2.  [Restore the server that is running SCVMM](#restore-svr-running-scvmm)

3.  [Restore Team Foundation Server](#restore-tfs)

4.  [Restore the Hyper-V hosts](#restore-hyper-v-hosts)

If you follow the recommended order, Team Foundation Server will recognize all virtual machines, templates, hosts and other objects in SCVMM. However, Team Foundation Server will not recognize any objects that were deleted from SCVMM after it was backed up but before Team Foundation Server was backed up. You can remove any such objects from Microsoft Test Manager, as described later in this topic.

Before you can complete these procedures, the following conditions must be true:

-   The network names of the new machines must match the names of the machines that were replaced.

-   All security accounts must have been restored.

-   All software must have been recovered to the same state.

**Required Permissions**

To perform this procedure, you must be a member of the following groups:

-   The **Administrators** security group on the server that is running the administration console for Team Foundation.

-   The **SQL Server System Administrator** security group or your **SQL Server Perform Back Up and Create Maintenance Plan** permissions must be set to **Allow** on each instance of SQL Server that hosts the databases that you want to back up.

-   The ** Administrator** user role in SCVMM.

<a name="restore-lib-svr-scvmm"></a>
## Restore the Library Server for SCVMM

When you restore the library server, make sure that you use the same names for the host and the library shares. For more information, see the following page on the Microsoft website: [Backing Up and Restoring the SCVMM Database](http://go.microsoft.com/fwlink/?linkid=150302)

<a name="restore-svr-running-scvmm"></a>
## Restore the Server That Is Running SCVMM

### To restore the server that is running SCVMM

1.  Restore the server that is running SCVMM, and give it the same machine name as the old server.

    For more information, see the following page on the Microsoft website: [Backing Up and Restoring the SCVMM Database](http://go.microsoft.com/fwlink/?linkid=150302).

2.  Make sure that the $machinename of the application-tier server for Team Foundation is a member of the Administrators group on the server that is running SCVMM.

3.  Add or remove any host groups or library shares that were added or removed after the most recent backup. For more information, see the following page on the Microsoft website: [Backing Up and Restoring the SCVMM Database](http://go.microsoft.com/fwlink/?linkid=150302)

<a name="restore-tfs"></a>
## Restore Team Foundation Server

If Team Foundation Server has failed, you must restore both the application-tier and the data-tier servers that compose the deployment. These components might be hosted on the same server or on multiple servers.

### To restore Team Foundation Server

1.  Restore the server or servers that are running Team Foundation Server.

    For more information, see [Restore an application-tier server](restore-application-tier-server.md), [Restore data to the same location](restore-data-same-location.md), [Restore Data to a Different Server or Instance](restore-data-different-instance.md), or [Restore a Single-Server Deployment to New Hardware](tut-single-svr-home.md).

    The machine name, accounts, and software must all be returned to the same state. The machine must be joined and connected to the domain.

    If you restore Team Foundation Server to a new machine, you must update the notification URL for Lab Management to match the URL of the new machine. For information about how to set the **Lab URL** in the Team Foundation Administration Console, see [Configuring Lab Management for SCVMM Environments](../config-lab-scvmm-envs.md).

2.  Make sure that Team Foundation Server is running under a user account that is a member of the Administrators group on the server that is running SCVMM. If Team Foundation Server is running as Network Service, the TFS\_MACHINE$ account should be a member of the Administrators group on the server that is running SCVMM.

3.  Perform the following steps to make sure that Team Foundation Server is running under a user account that is a member of the Administrators group on all Hyper-V hosts.

    1.  Open the Team Foundation Administration Console. 

    2.  On the **Lab Management** tab, click **Configure Host Groups**, and then click **Verify**.

    3.  When you are prompted for a user name and password, type the user name and password of a member of the Administrators group on all the Hyper-V hosts. The service account for Team Foundation Server is automatically configured for you.

    4.  Repeat steps b and c for each team project collection.

4.  In SCVMM, manually delete any virtual machines that were created after the point to which you restored Team Foundation Server.

    These machines will not appear in either Microsoft Test Manager or Microsoft Environment Viewer. You can find them in SCVMM by looking for the team project name in the description field of the virtual machine.

5.  In Microsoft Test Manager, manually delete any virtual machines that were deleted after the point to which you restored Team Foundation Server.

    These machines are no longer in SCVMM. In both Microsoft Test Manager and Microsoft Environment Viewer, the environment will have a status of **Failed**, and the virtual machines will have a status as **Deleted**. If a host was added to a SCVMM host group that was already associated with a team project collection, that host will be available for placement the next time that you deploy an environment.

6.  In Microsoft Test Manager, manually delete any hosts that were removed from SCVMM after the point to which you restored Team Foundation Server.

    Because these hosts can no longer run virtual machines and environments, all environments on these hosts will appear as **Failed** in Microsoft Test Manager and Microsoft Environment Viewer.

7.  Manually reassociate any a host groups that were associated with a team project collection and team project after the point to which you restored Team Foundation Server.

    The virtual machines on this host group will not be associated with the team project.

8.  At the levels of both team project collections and team projects, manually unassociate any host groups that were unassociated after the point to which you restored Team Foundation Server.

    For more information, see [How to: Change the Host Groups for Your Team Project Collections](https://msdn.microsoft.com/en-us/library/dd386364(v=vs.120).aspx).

9.  Reassociate any host groups that were associated with a team project after the point to which you restored Team Foundation Server.

10. Reassociate any library shares that were associated with a team project after the point to which you restored Team Foundation Server, and reimport all virtual machines and templates that were imported into the team project.

<a name="restore-hyper-v-hosts"></a>
## Restore the Hyper-V Hosts

If a host that had virtual environments crashed, they will be in a **Failed** state.

### To restore a physical host that was running virtual machines

1.  Restore the host from your backup, and connect it to SCVMM.

    For more information, see the following page on the Microsoft website: [Backing Up and Restoring the SCVMM Database](http://go.microsoft.com/fwlink/?linkid=150302).

    If the virtual machines are running again on the host, no additional action is required. Lab Management will update the new status of all running virtual machines to the correct state. If you cannot restore the virtual machines and this host is new, the environments will appear as **Failed** and the virtual machines as **Deleted** in Microsoft Test Manager or in Microsoft Environment Viewer.

2.  Refresh Microsoft Test Manager, manually delete the environments that ran on this host, and then re-create them.

    If you must determine the environments that ran on this host, SCVMM provides a list of which virtual machines ran on which host.

## See Also

 [Manually back up Team Foundation Server](manually-backup-tfs.md) 

 [Back up and restore TFS](back-up-restore-tfs.md) 

 [Move a team project collection](../move-project-collection.md) 
