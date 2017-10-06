---
title: Install Team Foundation Server
description: Install Team Foundation Server
ms.assetid: 5bd14bb5-c5dd-4afb-b983-53df2b33caff
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Install Team Foundation Server

**TFS 2013**

![Install on more than one server](../_img/2013-install.png)

If you intend to have SQL Server and TFS on the same server, then you might be able to use the TFS standard installation wizard, which is designed to streamline the number of decisions you have to make during TFS installation. To use the standard wizard, you have to have SQL Server set up on the default instance (as we did in the SQL Server installation topic) and the reporting features must be installed. We recommend that you have 24 GB of RAM to run SharePoint on the same server as SQL Server. If you’re okay with all these requirements and with the default TFS options¹ (SharePoint Foundation is installed), then use the standard wizard.

If you want more control over installation options, use the advanced configuration.

> [!TIP]
> If you want to see the default options for TFS, use the advanced wizard and don’t change any of the default settings. You’ll get the same TFS installation as if you had used the standard wizard.

## What will I need?

Whether you use standard or advanced TFS install wizards, you’ll need at least one domain account for the report reader account. TFS uses this account to generate reports. If you let us install SharePoint, we use this same account for the Farm Admin account in SharePoint.

> [!TIP]
> The report reader account only needs the **Allow log on locally** permission, which all domain accounts have by default.

## Why use the advanced wizard?

If you want to change the default installation options for Team Foundation Server, use the advanced wizard, which lets you configure Team Foundation Server on multiple servers and change many other options.

Why use advanced? The standard installation might not fit your needs. You might want to customize a single server installation or install Team Foundation Server and its configuration database on different servers. Perhaps you already have SQL Server or SharePoint Products running in your organization and you’d like to use one of these installations to host team projects or the data for Team Foundation Server. If you use the optional features that require prerequisite server software, these installations can also be hosted on different servers. If you use multiple servers, you can distribute the load between Team Foundation Server and the configuration database, or you can ensure that prerequisite server software for features such as reporting or the portal site is running on capable hardware.

Don’t confuse the multiple server installation with the robust scale-out features that Team Foundation Server offers. These scale-out features include the ability to create a Team Foundation Server farm and add a team project collection to an instance of SQL Server that was not part of the original deployment of Team Foundation Server. However, these scale-out features are not part of this scenario. This scenario offers you guidance for an initial deployment of Team Foundation Server that takes advantage of configurable installation options, such as installing TFS on more than one server. For more information about how to add an application-tier server to your deployment of Team Foundation Server, see [How to: Create a Team Foundation server farm (high availability)](../create-tfs-farm.md).

> [!TIP]
> A multiple-server installation requires an Active Directory domain and domain accounts or the Network Service account. You cannot use local accounts for service accounts.

## To install Team Foundation Server

![Step 1](../_img/ic646324.png) Verify that the operating system and hardware meet the requirements for Team Foundation Server and all its prerequisites. You must use a 64-bit server if you install TFS on a server operating system. Determine the report reader account you will use for Team Foundation Server.

For more information, see [System requirements for Team Foundation Server](../../requirements.md), [Accounts required for installation of Team Foundation Server](../../requirements.md#accounts).

![Step 2](../_img/ic646325.png) Install a supported version of SQL Server. You must install these SQL Server features: Database Engine, Full-Text and Semantic Extractions for Search. To get HTML reports from your TFS team projects, add these features: Analysis Services, and Reporting Services – Native

![SQL R2 installation](../_img/ic665430.png)
For more information, see: [SQL Server requirements for Team Foundation Server](../../requirements.md#sql-server), [Manually install SQL Server for Team Foundation Server](../sql-server/install-sql-server.md)

![Step 3](../_img/ic646326.png) You have a lot of options for SharePoint. If you have SQL Server and TFS on running on the same server, your best alternative might be to install SharePoint on a different server to minimize competition for resources. If you know you want SharePoint Server, you should install and configure it before you install TFS. Remember that you can always skip SharePoint integration altogether by using the TFS advanced wizard. TFS doesn’t require SharePoint.

![Configure SharePoint Server](../_img/ic665433.png)
For more information, see [SharePoint Products requirements for Team Foundation Server](../../requirements.md#sharepoint), [Manually Install SharePoint products for Team Foundation Server](../sharepoint/install-sharepoint.md)

> [!TIP]
> You can also [verify](../sharepoint/verify-sharepoint.md) and use an existing SharePoint deployment that meets the [TFS requirements for SharePoint](../../requirements.md#sharepoint). If you’re existing SharePoint is not on the same server as where you’ll install TFS, you’ll want to first install the TFS SharePoint extensions on the SharePoint site. See [How to: Install Remote SharePoint Products for Team Foundation Server](../sharepoint/setup-remote-sharepoint.md).

![Step 4](../_img/ic646327.png) Run the Team Foundation Server install from the product DVD and then use one of the configuration wizards to configure your installation. Use the standard wizard if you have SQL Server on the default instance, and TFS will install SharePoint Foundation 2013 for you. For everything else, use the advanced wizard. See, “Why use the advanced wizard?” earlier.

![Select TFS standard configuration](../_img/ic665325.png)

For remote SharePoint Products deployments, you can use a special version of the installation program that installs only the Team Foundation Server extensions on the SharePoint Products server. This keeps the server running SharePoint Products tidy. You don’t need to run this special installer on the server running Team Foundation Server, where the extensions are installed by default with most installations of Team Foundation Server.

> [!TIP]
> If you have a remote portal for your SharePoint Products, you must install Team Foundation Server Extensions for SharePoint Products on the remote portal. If multiple servers are running SharePoint Products in a web farm, you must install and configure these extensions on every server in that farm.


To perform this procedure, you must be a member of the **Administrators** security group.

<a name="installer"></a>
To run the Team Foundation Server installer:

1.  Insert the Team Foundation Server DVD in the drive and launch the tfs\_server.exe file to begin the installation.

	> [!TIP]
	> If you don’t want to install all of Team Foundation Server on the server that is running SharePoint Products, launch the tfs_sharePointExtensions.exe file from the SharePoint Extensions folder to install only the Team Foundation Server Extensions for SharePoint Products.

2.  On the license terms dialog box, accept the license terms and then choose **Install Now**. If you want to install Team Foundation Server to a specific location in the file system, choose the browse button **(…)** next to the default install location.

For more information, see [Configure Team Foundation Server using the advanced configuration](config-tfs-advanced.md) and [Configure Team Foundation Server using the standard configuration](config-tfs-standard.md).

## See Also

[Set up Team Foundation Build Service](https://msdn.microsoft.com/en-us/library/ee259687(v=vs.120).aspx) 
