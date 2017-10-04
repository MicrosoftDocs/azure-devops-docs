---
title: TFS application tier will use the same hardware
description: TFS application tier will use the same hardware
ms.assetid: 2d394c69-c25e-44be-8bf2-3b9e17559f6e
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# TFS application tier will use the same hardware

**TFS 2013**

Illustration of an In-place Upgrade

![](../_img/ic666060.png)

## To do an in-place upgrade of Team Foundation Server 

![](../../install/_img/ic756627.png) **Double check**. Verify that the operating system and hardware meet the requirements for the new version of Team Foundation Server.

Determine the service account you will use for Team Foundation Server. By default, TFS uses Network Service, but you can also use a domain account. In most cases, you should use the same account you used for the previous installation or consider using Network Service.

For more information, see: [System requirements for Team Foundation Server](../../requirements.md), or [Accounts required for installation of Team Foundation Server](../../requirements.md#accounts).

![](../../install/_img/ic646325.png) **Uninstall TFS 2010**. Use Control Panel to completely uninstall Team Foundation Server 2010. If you’re upgrading TFS 2012, you don’t have to uninstall the old version of TFS. You can skip this step and we’ll preserve some of your application tier settings.

> [!TIP]
> If SharePoint is running on a computer other than Team Foundation Server, you have to [uninstall the TFS extensions for SharePoint from the SharePoint server](use-same-sharepoint-site.md), too. If SharePoint Products is on the TFS application-tier, don’t worry. We uninstall the TFS extensions for SharePoint at the same time as we remove the old version of TFS.

![](../_img/ic552209.png)

![](../../install/_img/ic646326.png) **Upgrade TFS**. Run the Team Foundation Server install from the product DVD and then use the Upgrade Configuration wizard to upgrade your installation. <span class="parameter">But wait</span>—if SharePoint Products is running on a computer other than Team Foundation Server, [you’ll first want to install the new TFS Extensions for SharePoint on the SharePoint server](use-same-sharepoint-site.md). Similar to the previous step, if SharePoint Products is on the TFS application-tier, we’ll install the Extensions for SharePoint at the same time that we set up the new version of TFS.

For more information, see: [Run the TFS Upgrade Wizard](../run-upgrade-wizard.md).

![](../../install/_img/ic612456.png)

> [!TIP]
> If you have Project Server added to TFS, this is when you should upgrade the TFS Extensions for Project Server. See the heading “Less-common upgrade tasks” for more information in [TFS upgrade requirements](upgrade-2013-requirements.md).

## Next Step: Set up a new build machine

After you upgrade the application tier, you might want to install the new build service.

For more information, see [Set up Team Foundation Build Service](https://msdn.microsoft.com/en-us/library/ee259687(v=vs.120).aspx).

![](../../install/_img/ic612464.png)