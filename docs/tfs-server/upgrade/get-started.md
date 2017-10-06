---
title: Upgrade your TFS deployment 
description: Upgrade your instance of Team Foundation Server to the latest version
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 575486d5-af44-41a1-b14c-b82e1e362132
toc: show
ms.manager: douge
ms.author: elbatk
ms.date: 09/26/2016
---

# Upgrade your deployment to the latest version of TFS

**TFS 2018 | TFS 2017 | TFS 2015**

The general process for upgrading an existing deployment of Team Foundation Server is to:

1.	**Prepare your environment**. New [system requirements](../requirements.md) may require you to upgrade hardware or software. 
And regardless, an upgrade is a good time to consider whether your current environment is meeting your needs, 
or whether it makes sense to make changes. 

2.	**Expect the best, prepare for the worst**. While we put a lot of effort into ensuring that TFS upgrades are highly reliable, it always makes sense to 
prepare for the case where something goes wrong. The single most important step you can take here is to ensure 
you have a complete and consistent set of [database backups](../admin/backup/config-backup-sched-plan.md).

	> If you're upgrading in place (not moving to new hardware),
	> consider doing a [dry run](pre-production.md) of your upgrade in a pre-production environment.

3.	**Do the upgrade**! Once the preparation is done, you'll need to install the new version of TFS to get new binaries, and then run 
through the upgrade wizard to upgrade your databases.

	> Direct upgrade to TFS 2015 is supported only from TFS 2010 and newer.
	> If your TFS deployment is on an older version than that,
	> you will need to upgrade to TFS 2015 in multiple hops.
	> For example, if you are on TFS 2008 you could upgrade to TFS 2012 first and then to TFS 2015. 

4. **Configure new features**. Depending on what version you upgraded from, you may need to [configure each team project](../../work/customize/configure-features-after-upgrade.md) to gain access to some of the new features made available. You don't have to do this immediately, but those features aren't available in that team project until they're configured. Depending on the team project, you'll use some combination of the Configure Features wizard that appears on the Work page and some manual configuration.


## Before you upgrade to TFS 2018

As of TFS 2017.2, the [old work item form <Layout> tag has been deprecated](https://blogs.msdn.microsoft.com/devops/2017/05/22/announcing-the-deprecation-of-the-old-work-item-form-in-tfs/) and is no longer supported in TFS 2018. 
If you are upgrading your server and have a collection where the new work item form has not been enabled you will encounter the following severe warning during readiness checks:

```
[VS403364]: This release introduces major updates to the work item form layout and functionality and deprecates legacy custom controls. Consequently, the upgrade process will update all work item type definitions to use the new work 
item form WebLayout element and remove all custom controls. For additional information and recommended upgrade steps, see the Deployment Guide.
```

We recommend that you review [handling a TFS 2018 upgrade from old form to new form](https://blogs.msdn.microsoft.com/devops/2017/08/31/handling-a-tfs-2018-upgrade-from-old-form-to-new-form/) for further guidance.

## Before you upgrade to TFS 2017   

If you use TFS-Project Server integration to synchronize data between TFS and Project Server, then you'll want to review the following two topics:  

- [Synchronize TFS with Project Server](../../work/tfs-ps-sync/sync-ps-tfs.md) - which describes how native integration with Project Server is no longer supported, and instead a solution is provided by our partner, Tivitie. 
- [Remove integration of TFS with Project Server](../../work/tfs-ps-sync/remove-tfs-ps-integration.md) - which provides step-by-step procedures for removing the integration. You need to perform the first procedure provided prior to your upgrade.  

Also, we recommend that you review the options you have when [you upgrade from TFS 2008 or TFS 2010](../../work/customize/upgrade-tfs-2008-or-2010.md). Depending on the amount of customization you've made to your work tracking process, you'll want to choose between the options described.  

## Complexity

Upgrading a TFS deployment can be quite straightforward or quite complicated, depending on the specifics of your 
existing deployment. Factors that will influence the complexity and duration of your upgrade include:

- How many servers are involved in your deployment.
- Whether your deployment is configured with SharePoint integration or reporting.
- How large your databases are.
- How old a version you are upgrading from.

In all cases, however, the general process is logically the same. Get your environment ready; Expect the best, 
prepare for the worst; and finally, do the upgrade.

## Downtime

Your TFS deployment will be offline for the duration of the upgrade. Upgrade times can be measured in minutes for 
very small deployments or in days for very large deployments. You can keep 
your upgrades comparably speedy by [cleaning up unnecessary data](../../tfs-server/upgrade/clean-up-data.md). If you're keeping up 
with the latest versions of TFS, that helps a lot, too. 

If you're upgrading a very large database to TFS 2015, consider using the [TfsPreUpgrade tool](pre-upgrade.md). 
It performs the most expensive parts of the upgrade from TFS 2013 QU4/QU5 in the background, allowing you to 
continue using TFS. This tool can cut offline times for upgrade significantly for large databases - one internal 
Microsoft database went from over a week of offline time down to under a day. 

## Details

[Walk through a TFS Express upgrade](express.md) - this is as simple as it gets.

[Walk through a standard upgrade scenario](walkthrough.md) - upgrading a two server deployment 
from TFS 2012 to TFS 2015.

[Walk through an upgrade from TFS 2005 to TFS 2015](tfs-2005-to-2015.md).

We will be covering more advanced scenarios - things like upgrading deployments which have multiple application
tiers in a load balancer, deployments which have their databases in SQL Always On availability groups, etc. - in
future updates. In the meantime, the documentation for TFS 2013 and earlier is still relevant and can provide
some guidance for these more advanced scenarios.