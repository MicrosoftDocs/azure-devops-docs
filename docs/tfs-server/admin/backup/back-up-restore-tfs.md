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

**TFS 2015** | **TFS 2013**

If you don't regularly back up Team Foundation Server (TFS) databases, you increase the risk of losing productivity or data because of equipment failure or other unexpected events. Fortunately, the Scheduled Backups Wizard makes it easy to back up your TFS databases, which are part of the TFS data-tier and stored in SQL Server. All of the information required for restoring a TFS deployment is stored in those databases. Consequently, you do not have to worry about backing up Team Foundation client computers or application-tier servers.

![Choose a preconfigured or custom schedule](../_img/ic665036.png)  

For an overview of TFS databases, see [Understand backing up Team Foundation Server](backup-db-architecture.md). The following topics provide detail procedures for backing up and restoring TFS databases.

| | broad steps |
| --- | --- |
| ![Back up and restore your TFS deployment](../_img/ic677919.png) | **Back up your data** </br>[Create a backup schedule and plan](config-backup-sched-plan.md) </br> [Manually back up Team Foundation Server](manually-backup-tfs.md) |
| ![Learn how to restore TFS](../_img/ic689362.png) | **Restore databases from backup** </br> [Restore a deployment to new hardware](tut-single-svr-home.md) </br> | [Restore data to the same location](restore-data-same-location.md) |
| ![Manage user access to your deployment](../_img/ic687421.png) | **Recover from a hardware failure on the application tier** </br> [Restore an application-tier server](restore-application-tier-server.md) </br> [Refresh the data caches on client computers](refresh-data-caches.md) | 
| ![Configure and manage Lab Management](../_img/ic677921.png) | **Back up and restore Lab Management** </br> [Restore Lab Management components](restore-lab-management-components.md) |

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
