---
title: Disable SharePoint integration after TFS 2018 upgrade
description: TFS SharePoint integration - Disable SharePoint integration after TFS 2018 upgrade
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-integrate
ms.manager: abjork
ms.author: greggboe
ms.date: 09/19/17
ms.topic: 
---

# Disable SharePoint integration after TFS 2018 upgrade

[!INCLUDE [temp](../_shared/about-sharepoint-deprecation.md)]

With TFS 2018, we  no longer offer the TFS Extension for SharePoint. For more information, read [Discontinuing the pre-TFS 2018 SharePoint integration](./discontinue-pre-tfs-2017-sharepoint-integration.md).

> [!IMPORTANT]  
> **If you are upgrading from a previous version configured to integrate with SharePoint, you will need to disable the SharePoint integration after upgrade, or your TFS SharePoint sites will fail to load.**

This topic provides instructions on how to disable integration on a **SharePoint 2013** server after upgrading to TFS 2018. 

If you are currently running **SharePoint 2010** and want to upgrade to TFS 2018, please reach out to us at [sptfsintfeedback@microsoft.com](mailto:sptfsintfeedback@microsoft.com). 

If you wish to upgrade to **SharePoint 2016**, please see [Upgrade from SharePoint 2013 with TFS integration to SharePoint 2016](./upgrade-from-sharepoint2013-to-sharepoint-2106.md)



## Installation and configuration
During installation, if SharePoint and TFS are on the same server, the installer will display the following warning message:

> TFS 2018 and later versions no longer support integration with SharePoint. If you have configured TFS integration with SharePoint, then you will need to disconnect to the TFS Integration on each SharePoint server, or your TFS SharePoint sites will not work. For more information, carefully review the information provided in [Discontinue SharePoint integration: TFS 2017 and earlier versions](discontinue-pre-tfs-2017-sharepoint-integration.md) before continuing.

The installer only displays this message if it detects SharePoint is installed on the same machine as TFS. It checks for SharePoint 2010 and 2013. If an earlier version exists, the installer will not display the above warning. 

During configuration, if TFS-SharePoint integration was configured, the same message will be displayed as a critical warning. You are required to confirm you have read the warning before you can continue with the upgrade.

## Uninstall TFS from the SharePoint Server
After upgrading the TFS server, you must uninstall the prior version of the TFS from the SharePoint server.

> [!NOTE]   
> If your TFS server and SharePoint server were on the same machine, then the prior version of TFS was uninstalled as a part of the TFS 2018 installation.
>  
> If you have a SharePoint farm, you must uninstall TFS from each front-end machine. 

After uninstalling the TFS, the TFS SharePoint sites will fail to load. This is because they reference TFS artifacts that no longer exist. 

![TFS 2018 Upgrade - Disable SharePoint Integration - Uninstall TFS errors](./_img/tfs-2018-upgrade-uninstall-tfs-errors.png)

The solution is to install the **TFS Disconnector for SharePoint** on the SharePoint 2013 server. 

![TFS 2018 Upgrade - Disable SharePoint Integration - Install TFS Disconnector for SharePoint](./_img/tfs-2018-upgrade-install-tfs-disconnector.png)

The **TFS Disconnector for SharePoint** installs all the required references for TFS sites to display properly, while disabling TFS-SharePoint integration. 

To install the TFS Disconnector for SharePoint, follow these steps:

1. Download the [TFS Disconnector for SharePoint](https://go.microsoft.com/fwlink/?linkid=854633) to the SharePoint 2013 server. Unzip the files. You will be running **uninstall.ps1** and **script.ps1** later. **Currently, the TFS Disconnector for SharePoint supports only English. It will be updated shortly with support for other languages.** 

1. Run "SharePoint 2013 Management Shell" as an administrator. 
1. From the shell, run **uninstall.ps1** and complete all sections of the script. 
1. From the shell, run **script.ps1** and complete all sections of the script.
1. Open **Central Administration>Monitoring>Check Job Status>Running** section and verify that the uninstall jobs finished prior to proceeding

After the upgrade, your TFS SharePoint sites will display, but all integration functionality is disabled. The following image shows what the site will look like after you upgrade and disable SharePoint integration.

![TFS 2018 Upgrade - Disable SharePoint Integration - Install TFS Disconnector for SharePoint](./_img/tfs-2018-upgrade-after-upgrade-site-example.png)
