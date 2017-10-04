---
title: Upgrading TFS Express On-premises
description: Walkthrough of an Express upgrade
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 25542ee9-2c35-4e95-be1e-6c1243119513
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Upgrading TFS Express

**TFS 2017** | **TFS 2015** | **TFS 2013**

Upgrading a TFS Express install is about as simple as a TFS upgrade can get, since 
express installations are limited in size, cannot be configured to use multiple machines,
do not support SharePoint or reporting, etc. 

## Prepare your environment

As with any upgrade, you will need to check [system requirements](../requirements.md) to
ensure that your current configuration is supported. For an Express deployment this will mean 
checking the OS. The TFS 2015 Express upgrade process will attempt to upgrade SQL Express to
SQL 2014 SP1 Express, which typically requires the latest service pack of whatever version
is currently installed. If in doubt, the upgrade process itself will tell you if you need to do 
something. 

## Expect the best, prepare for the worst

For TFS Express deployments it is not typically worth it to attempt any sort of pre-production upgrade,
since these deployments are simple ones that are typically used by one person or a small handful of
people. It is always worth having a complete set of backups, however, so you should ensure that 
you take backups prior to starting the upgrade. The upgrade wizard provides access to a
database backup tool which can do this for you if you don't already have a process in place for
taking backups.

## Do the upgrade

The upgrade process itself for TFS Express is quite simple -
just install [TFS Express 2015](https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs)
where you have the older version of TFS installed.
You will only need to make a couple of basic decisions, and when upgrading
from TFS 2012 or TFS 2013 the settings from your previous deployment will be remembered for you.

By default, the TFS 2015 Express upgrade will install and configure a build agent for the 
[new TFS 2015 build system](../../build-release/overview.md), and will set it up to start automatically
so that you can start using it right away after your upgrade. If you do not want to use the 
new build system, you can uncheck the box to turn the agent off.

And that's it. As with all TFS configuration wizards, readiness checks will run to validate that your
system is ready to configure, and when you click Configure your databases will be upgraded.

