---
title: TFS upgrade requirements
description: TFS upgrade requirements
ms.assetid: b91d72fb-26ac-463e-ae8e-364922cd477f
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# TFS upgrade requirements

**TFS 2013**

Review the requirements listed here and then choose a server upgrade path. You can upgrade from any of the following earlier releases:

-   Team Foundation Server 2013 RTM ¹

-   Team Foundation Server 2012 with Update 4 (TFS 2012.4), TFS 2012.3, TFS 2012.2, TFS 2012.1, or TFS 2012 releases

-   Team Foundation Server 2010 with or without Service Pack 1

¹ Unlike Visual Studio 2013, there was no Update 1 for TFS 2013. The first update for TFS 2013 is Update 2.

> [!TIP]
> Do you need to upgrade from TFS 2008? You must upgrade to TFS 2012 first: [There is an ISO of TFS 2012 available](http://go.microsoft.com/fwlink?linkid=255990) for you to prepare your TFS 2008 installation for an upgrade to TFS 2013.

## New prerequisite requirements

**SQL Server**: Before you start your upgrade, you might have to upgrade SQL Server to meet new Team Foundation Server requirements. SQL Server 2008 R2 is no longer supported. SQL Server 2012 with SP1 is supported. For more information, see [SQL Server requirements for Team Foundation Server](../../requirements.md#sql-server).

> [!TIP]
> If you’re using SQL Server 2012 with SP1, we recommend you also apply [cumulative update 2 on top of SP1](http://support.microsoft.com/kb/2790947) to address a critical SQL Server bug around resource consumption. This isn’t a hard requirement because the bug only affects a small number of instances, but we wanted you to be aware of it. If you don’t apply CU2, you should apply a SQL Server hotfix ([KB2793634](http://support.microsoft.com/kb/2793634)) to addresses another (different) issue where SQL Server 2012 with SP1 might request an excessive amount of restarts.

**SharePoint Products**: If you have a portal server, you might have to upgrade it to continue using SharePoint integration. We no longer support Windows SharePoint Services 3.0 or Microsoft Office SharePoint Server 2007. See [SharePoint Products requirements for Team Foundation Server](../../requirements.md#sharepoint).

> [!TIP]
> Do you need to upgrade SharePoint to a supported version? See [Upgrade from Office SharePoint Server 2007 or Windows SharePoint Services 3.0 to SharePoint Server 2013 or SharePoint Foundation 2013](https://technet.microsoft.com/library/ee947141.aspx)

### What about skipping reporting or SharePoint during upgrade?

If you don’t install reporting or SharePoint, your deployment is simpler, but we don’t recommend it. Keep these two features during upgrade because the upgrade configuration will automatically link upgraded projects to the portal and reporting features. If you add a portal or reporting after you upgrade, you cannot easily create these links between all your upgraded projects and the portal.

> [!TIP]
> Team Foundation Server doesn’t support changing languages during an upgrade. You should maintain the locale of your operating system and Team Foundation Server during the upgrade. For more information, see: [Language requirements for Team Foundation Server](../../requirements.md#languages)

## Next step: choose a server upgrade path

The steps are different based on whether you’re using a basic installation, or if you’re planning to use the same hardware (standard upgrade) or moving to a new machine (advanced upgrade). Select from one of the paths below:

-    [Upgrade TFS Basic or Express](../express.md)  (basic upgrade)

-    [TFS application tier will use the same hardware it’s using right now](same-app-tier-hardware.md)  (standard upgrade)

-    [TFS Application Tier will use different hardware than it’s using right now](new-app-tier-hardware.md)  (advanced upgrade)

![TFS server upgrade choices](../../install/_img/ic612461.png)

## Less common upgrade tasks

You can probably skip this section, if you are not using the trial edition of Team Foundation Server, a Team Foundation Server farm, or no one on your team uses Project Server.

### Upgrade from the trial edition of Team Foundation Server

If you are using the trial edition of Team Foundation Server and your evaluation period expires or you are ready to upgrade to the full edition, you need to change the product key information to upgrade from the trial to the full edition. For more information, see this topic: [Locate or Change the Product Key for Team Foundation Server](../change-product-key.md).

### Upgrade from trial edition of Release Management for Visual Studio 2013

Release Management for Visual Studio 2013 has three components (server, client and deployment agent) and you should use the same version of all components throughout your deployment. If you have the trial version of Release Management Server for Team Foundation Server 2013 installed and you upgrade to the full version, you should upgrade all three components before you start to manage any releases. You have to uninstall the trial version of Release Management to install the full version.

For more information, see this topic: [Install Release Management for Visual Studio 2013](https://msdn.microsoft.com/en-us/library/dn593700%28v=vs.120%29.aspx)

### Upgrading a Team Foundation Server application-tier farm

If you have a scaled-out deployment of TFS application tiers that you want to upgrade, you should do one of the following processes, based on the version of the product you’re upgrading from.

-   **Your TFS farm is TFS 2010**: Uninstall Team Foundation Server 2010 from each application tier. After all previous versions have been uninstalled, install TFS 2012 on one of the application tiers and run the upgrade as you would for a standalone deployment. Select any application tier in the farm that you like; it doesn’t matter. After the upgrade completes, use the Add an Application Tier wizard to install Team Foundation Server 2012 on the remaining application tiers. This reassembles the farm and completes the farm upgrade.

-   **Your TFS farm is TFS 2012 or TFS 2013**: [Quiesce](../../command-line/tfsservicecontrol-cmd.md) every application tier in the farm. After all previous versions have been quiesced, install TFS 2013 on one of the application tiers (without uninstalling the previous version of TFS) and run the upgrade as you would for a standalone deployment. Select any application tier in the farm that you like; it doesn’t matter. After the upgrade completes, use the Add an Application Tier wizard to install Team Foundation Server 2013 (without uninstalling the previous version of TFS) on the remaining application tiers. This reassembles the farm and completes the farm upgrade.

For more information, see this topic: [How to: Create a Team Foundation server farm (high availability)](../../install/create-tfs-farm.md)

### Upgrading the TFS Extensions for Project Server

If you have integrated Project Server with your TFS deployment and you upgrade TFS, your team projects should continue to work as before, but you won’t have access to any new features until you install the new TFS Extensions for Project Server. You should uninstall the old extensions from Project Server and then install the latest version of the extensions on all the servers where it was previously installed. The version of the extensions you use for Project Server should always match the version of Team Foundation Server you’re running. For more information, see this topic: [How to: Add Project Server to Team Foundation Server](https://msdn.microsoft.com/en-us/library/hh548139(v=vs.120).aspx )
