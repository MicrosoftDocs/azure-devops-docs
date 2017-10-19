---
title: Walkthrough an upgrade scenario for Team Foundation Server (TFS)
description: Walkthrough of a standard upgrade of a two server deployment from TFS 2012 to TFS 2015.
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: aa4c0088-6a0e-4bdd-801c-a7a4eaa15bf2
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Upgrade scenario walkthrough for Team Foundation Server

**TFS 2017** | **TFS 2015** | **TFS 2013**

This quickstart covers a typical Team Foundation Server (TFS) upgrade scenario to get a sense of what the high level steps discussed in the [overview](../../accounts/account-management.md) might look like in a real world example.

## Prepare your environment

Our starting point for this upgrade is a TFS 2012 Update 4 environment with two machines - one serving as the application tier and a second serving as the data tier for both the config/collection databases, and the reporting and analysis services databases. Both machines are currently running Windows Server 2008 SP2, and the data tier is currently running SQL Server 2008 R2. 

Our first step is to check the [system requirements](../requirements.md) for TFS 2015. Unfortunately, neither the OS nor the SQL version we are using are still supported, so we will need to make some changes. We decide to take the opportunity to acquire two more powerful machines, and we install Windows Server 2012 R2 on
both of them. We install SQL Server 2014 on the data tier, making sure to include Reporting Services and Analysis Services, since we are using those features in our deployment. Our environment is prepared.

## Expect the best, prepare for the worst

We have been using [scheduled backups](../admin/backup/config-backup-sched-plan.md) to ensure that we always have backups in place in case something goes wrong. 

Because we are moving to new hardware anyways, we will not bother setting up a separate pre-production environmentto do our [dry run](pre-production.md). Instead, we will use that new hardware to do a dry run first, and thenwe will wipe everything clean and use it again for the production upgrade.

For our dry run, the steps for our upgrade will be:

1. Copy recent database backups to our new SQL instance.
2. Install TFS 2015 on our new application tier.
3. Use scheduled backups to restore the database backups.
4. Run through the upgrade wizard, 
being sure to use a service account which does not have any permissions in our production environment. 
See *Protecting production* in the [dry run in pre-production](pre-production.md) document for more information. 
5. Optionally [configure new features](../../work/customize/upgrade-tfs-2008-or-2010.md) which require changes to our existing team projects.

## Do the upgrade

Assuming that all goes smoothly, the production upgrade steps will be quite similar. There the steps will be:

1. Take the production server offline using [TFSServiceControl's quiesce command](../command-line/tfsservicecontrol-cmd.md). The goal here is to ensure that the backups we use to move to our new hardware are complete and we don't lose any user data. 
2. Take new backups of each database. 
3. Copy the backups to our new SQL instance.
4. Install TFS 2015 on our new application tier.
5. Use the scheduled backups wizard to restore the database backups.
6. Run through the upgrade wizard, using our desired production service account.
7. Optionally [configure new features](../../work/customize/configure-features-after-upgrade.md) which require changes to our existing team projects.

And we're done! 

