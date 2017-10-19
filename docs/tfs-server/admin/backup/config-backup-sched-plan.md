---
title: Configure a backup schedule and plan for Team Foundation Server
description: Configure a backup schedule and plan for Team Foundation Server
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: a92e7f03-61d0-458d-9155-eefa40e228cc
toc: show
ms.manager: douge
ms.author: elbatk
ms.date: 10/19/2017
ms.topic: get-started-article
---

# Configure a backup schedule and plan for Team Foundation Server

**TFS 2018 ** | **TFS 2017** | **TFS 2015**

If you administer systems, you're probably already familiar with all the
reasons why a good backup set is crucial. No one wants to be the
administrator of a server that goes down without a complete set of
backups in place. Fortunately, you can back up data for TFS by using the
Scheduled Backups tool in the administration console. If you regularly
back up those databases, you reduce the risk of losing productivity or
data because of equipment failure or other unexpected events. Unlike
previous methods, this tool also backs up the SharePoint databases that
TFS uses, if TFS is configured to use SharePoint.

> [!Important]
> If you are using the Enterprise or Datacenter edition of SQL Server and
> you want to restore the collection and configuration databases to a
> Standard edition of SQL Server, then before you make the backup, you
> must turn off SQL Server compression by following the steps in the
> [Microsoft Knowledge Base article](http://go.microsoft.com/fwlink/?LinkId=253758).


## Create a backup

1.  If you're not an administrator for TFS, a member of the SQL Server
    System Administrators group, and (if your deployment uses
    SharePoint Products) a member of the Farm Administrators group, [get
    those permissions
    now](../../add-administrator-tfs.md).

    In addition, the service account for TFS (TFSService) must have SQL
    Server Perform Back Up and Create Maintenance Plan permissions set
    to Allow on each instance of SQL Server that hosts the databases
    that you want to back up, and Full Control on the network share,
    folder, or storage device where the backups will be kept.

2.  Open the administration console for TFS and on the **Scheduled Backups** page, launch the wizard for
    creating a backup schedule.

    ![The Schedule Backups node in the console](../_img/console-sched-backup.png)

3.  Backups must be stored on a network-accessible location, and both
    the account that configures the scheduled backup and the service
    account for TFS must have Full Control for that location. You can
    also choose how long a backup set will be kept and the file
    extensions used for backup types.

    ![Specify the network path for the backups](../_img/sched-backup-wiz-network-paths.png)

4.  If your server is configured with SMTP support, you can select email
    alerts for specific events. If not, all selections will be dimmed.

    ![Alerts are only available if SMTP is configured](../_img/sched-backup-wiz-alerts.png)

5.  Choose between two default schedules, or create your own
    custom schedule.

    ![Choose a preconfigured or custom schedule](../_img/sched-backup-wiz-preconfig.png)

6.  Complete the wizard. If your deployment uses reporting, you will be
    prompted for a password in order to back up the encryption key
    for reporting.

    ![The wizard confirms success](../_img/sched-backup-wiz-confirm.png)

7.  Once you've configured the scheduled backups, you can allow them
    to run as scheduled. You can also choose to take an immediate
    backup, which will back up your data right away while leaving your
    plan in place. This is particularly recommended if your scheduled
    backups will not occur for a significant amount of time, or if you
    do not already have a recent backup available.

> [!Note]
> If another administrator chooses to take an immediate backup, that 
> administrator must also have Full Control on the location where the
> backups are saved.                                                 

**Q: Where can I learn more about backups in TFS?**

**A:** You can learn more about the kinds of
backups available in [Understand backing up Team Foundation Server](backup-db-architecture.md)

**Q: I don't want to use the Scheduled Backups tool. Are there other methods for backing up the system?**

**A:** Yes. You can [manually create backup plans](manually-backup-tfs.md).

**Q: How do I restore TFS from backups?**

**A:** You use the Restore tool, but the steps
vary depending on whether you need to [restore data to a new server](tut-single-svr-home.md), or whether
you want to [restore data to the same server](restore-data-same-location.md).

**Q: Can I move TFS?**

**A:** Yes, you can [move TFS to new hardware](../move-clone-hardware.md). You can
also [change its environment](../move-across-domains.md), such as
its domain.
