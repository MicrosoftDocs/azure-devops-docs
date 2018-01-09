---
title: Back up and restore TFS
description: Back up and restore TFS
ms.assetid: cf9b5ab7-f4da-4519-991c-cc1722cb5d3c
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Back up and restore TFS

**TFS 2018** | **TFS 2017** | **TFS 2015** | **TFS 2013**

If you don't regularly back up Team Foundation Server (TFS) databases, you increase the risk of losing productivity or data because of equipment failure or other unexpected events. Fortunately, the Scheduled Backups Wizard makes it easy to back up your TFS databases, which are part of the TFS data-tier and stored in SQL Server. All of the information required for restoring a TFS deployment is stored in those databases. Consequently, you do not have to worry about backing up Team Foundation client computers or application-tier servers.

![Choose a preconfigured or custom schedule](../_img/ic665036.png)  

For an overview of TFS databases, see [Understand backing up Team Foundation Server](backup-db-architecture.md). The following topics provide detail procedures for backing up and restoring TFS databases.

| | broad steps |
| --- | --- |
| ![Back up and restore your TFS deployment](../_img/ic677919.png) | **Back up your data** </br>[Create a backup schedule and plan](config-backup-sched-plan.md) </br> [Manually back up Team Foundation Server](manually-backup-tfs.md) |
| ![Learn how to restore TFS](../_img/ic689362.png) | **Restore databases from backup** </br> [Restore a deployment to new hardware](tut-single-svr-home.md) </br> | [Restore data to the same location](restore-data-same-location.md) |
| ![Manage user access to your deployment](../_img/ic687421.png) | **Recover from a hardware failure on the application tier** </br> [Restore an application-tier server](restore-application-tier-server.md) </br> [Refresh the data caches on client computers](refresh-data-caches.md) | 
| ![Configure and manage Lab Management](../_img/ic677921.png) | **Back up and restore Lab Management** </br> [Restore Lab Management components](restore-lab-management-components.md) |

<a name="same-server" />

## Restore data same server
You can restore data from a backup to the same server and instance of SQL Server for Team Foundation from which that data was backed up. For example, you might want to restore a corrupted set of databases to the last known good state.

> **TFS 2013 Tip:**  
> If your original deployment used the Enterprise or Datacenter editions of SQL Server, and you want to restore databases to a server running Standard edition, you must use a backup set that was made with SQL Server compression disabled. Unless you disable data compression, you will not be able to successfully restore Enterprise or Datacenter edition databases to a server running Standard edition. To turn off compression, follow the steps in the [Microsoft Knowledge Base article](http://go.microsoft.com/fwlink/?LinkId=253758).

If you want to restore data to another server or another instance of SQL Server, see [Restore a deployment to new hardware](tut-single-svr-home.md). 

> **Note:**  
> If you use SharePoint Products in your deployment, when you restore data, you do not have to restore the websites that are automatically generated based on the data for each team project. The data for the team project portals is contained in the databases that you restore.

The steps to restore data to the same server or servers vary based on how Team Foundation Server is installed and configured. For simplicity, the procedures in this topic are structured for a moderately complex deployment of Team Foundation Server, as the following illustration shows:

![Example moderate topology with databases](../_img/ic372331.png)

If your topology does not exactly match this example, you might have to adjust the steps in this procedure to follow it successfully. For example, if you have a deployment where all components are installed on a single physical server, you would perform all procedures on that server. If databases for team project collections are deployed on more than one server, you must perform the steps to restore each collection database on the appropriate server. For more information about which components might be deployed on each server, see the following topics:

-    [Understand TFS databases, deployment topologies, and backup](backup-db-architecture.md) 

-    [Team Foundation Server architecture](../../architecture/architecture.md) 

-    [Examples of Simple Topology](../../architecture/examples-simple-topo.md) 

-    [Examples of Moderate Topology](../../architecture/examples-moderate-topo.md) 

-    [Examples of Complex Topology](../../architecture/examples-complex-topo.md) 

<a name="diff-server" />

## Restore data different server than current one

You can restore the data for your deployment of Visual Studio Team
Foundation Server to a different server or instance from where it was
originally stored. You might have to make such a change if, for
example, you want to upgrade your data-tier server, or hardware on the
original server failed. To help ensure successful recovery of data in
this scenario, you should configure marked transactions as part of your
backup strategy. For more information, see [Back Up Team Foundation Server](manually-backup-tfs.md).

To restore data to a different server, you must perform different
steps from those that you perform to restore data to the same server.
For more information about how to restore data to the same server or
servers, see [Restore Data to the Same Location](restore-data-same-location.md)</span>. For
information about how to restore a single-server deployment after
hardware fails, see [Restore a single server deployment to new hardware](tut-single-svr-home.md). If your deployment uses
SharePoint Products, you must perform additional steps to back up and
restore its databases, as detailed in the procedures in this topic.

> **Note:** 
> 
> You can automate some procedures in this topic by using wizards in the
> September 2010 release of power tools for Team Foundation Server. These
> wizards help simplify the process for backing up and restoring your
> deployment. However, they do not help back up or restore Visual Studio
> Lab Management, and you should not use them to back up or restore the
> databases for SharePoint Products or Microsoft Project Server. For more
> information, see the following page on the Microsoft website: [Team Foundation Server Power Tools September 2010](http://go.microsoft.com/fwlink/?LinkId=202027).                  

The steps that you must perform to restore data to different servers or
instances vary, based on how Team Foundation Server is installed and
configured. For simplicity, the procedures in this topic are structured
as they would apply to restoring only the databases for Team Foundation
Server in a moderately complex deployment, as the following illustration
shows:

![Example moderate topology with databases](../_img/example-moderately-complex-dbs.png)

Your topology does not have to match this example for you to
successfully follow the procedures in this topic, but you might have to
adjust the steps. For example, if you have a deployment where all
components are installed on a single physical server, you would perform
all procedures on the server that is running Team Foundation Server. If
databases for team project collections were originally deployed on more
than one server, you must perform the steps to restore each database on
the server or servers that you specify. You do not have to restore the
databases in the same configuration as before, but you must restore each
database. You must also restore the databases for SharePoint Products,
Microsoft Project Server, and SQL Server Reporting Services in some
cases, such as if they were all hosted on a server that failed. For more
information about which components might be deployed on each server, see
the following topics:

-   [Understanding Backing Up Team Foundation Server](backup-db-architecture.md)

-   [Team Foundation Server Architecture](../../architecture/architecture.md)

-   [Examples of Simple Topology](../../architecture/examples-simple-topo.md)

-   [Examples of Moderate Topology](../../architecture/examples-moderate-topo.md)

-   [Examples of Complex Topology](../../architecture/examples-complex-topo.md)

## Q & A

**Q: Where can I learn more about backups in TFS?**

**A:** You can learn more about the kinds of backups available in [Understand TFS databases, deployment topologies, and backup](backup-db-architecture.md).

**Q: Are there situations where I wouldn't want to use the Scheduled Backups tool?**

**A:** The Scheduled Backups tool is designed to meet the needs of most deployments. You might need to configure backups manually if your deployment has security restrictions that prevent the use of the tool or has other requirements for backing up databases (for example, for auditing purposes). You can learn how to back up TFS manually [here](manually-backup-tfs.md).

**Q: I deployed TFS across multiple servers. How do I restore it?**

**A:** The steps for restoring TFS in a multiple-server deployment are essentially the same as described in the tutorial for [restoring data to a single server](tut-single-svr-home.md). The process is also the same as the process described in a [restoration-based move](../move-clone-hardware.md).

**Q: Can I move TFS?**

**A:** Yes, you can [move TFS to new hardware](../move-clone-hardware.md). You can also [change its environment](../move-across-domains.md), such as its domain.

**Q: Data-tier? Application-tier? What are those? Where can I learn more about TFS architecture?**

**A:** Learn more about how TFS works in [Team Foundation Server architecture](../../architecture/architecture.md).

**Q: Can't I just tweak the databases manually?**

**A:** No. Unless you are following the procedure for [manually backing up the databases](manually-backup-tfs.md), modifying any TFS database can invalidate your support agreement. It can cause data loss, make it impossible to upgrade or patch TFS, or cause other severe problems.

**Q: Can't I just tweak the databases manually?**

**A:** No. Unless you are following the procedure for [manually backing up the databases](manually-backup-tfs.md), modifying any TFS database can invalidate your support agreement. It can cause data loss, make it impossible to upgrade or patch TFS, or cause other severe problems.
