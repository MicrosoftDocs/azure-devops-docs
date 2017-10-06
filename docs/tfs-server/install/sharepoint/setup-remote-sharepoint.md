---
title: How to set up remote SharePoint Products for Team Foundation Server
description: How to set up remote SharePoint Products for Team Foundation Server
ms.assetid: daf507f9-ca46-439f-a3c9-c9ef3f917085
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.manager: douge
ms.author: elbatk
ms.date: 09/09/2017
---

# Set up remote SharePoint Products for Team Foundation Server

[!INCLUDE [temp](../../_shared/about-sharepoint-deprecation.md)]

If you have SQL Server and TFS running on the same server, your best alternative might be to install SharePoint on a different server to minimize competition for resources. The remote SharePoint scenario addresses such an installation.

Install Team Foundation Server Extensions for SharePoint Products on a remote server
![install extensions on remote portal](../_img/ic548953.png)  

If you want to run SharePoint Products on a server other than Team Foundation Server, you must install Team Foundation Server on the SharePoint server and then configure the TFS Extensions for SharePoint. This installs *all* of TFS on the SharePoint server, including the TFS SharePoint Extensions. The application tier, the build server, and the proxy server appear in the TFS administration console, but you do not have to configure any of these additional features.

You can install and configure SharePoint Foundation 2013 during the extensions configuration. If you install SharePoint by using the TFS Extensions configuration, it automatically provisions a new SharePoint web application for you during the SharePoint installation.

## To install Team Foundation Server Extensions for SharePoint Products

![Step 1](../_img/ic646324.png) Verify that the operating system and hardware or the existing SharePoint Products installation meets the requirements for Team Foundation Server Extensions for SharePoint Products. If you don't want to use SharePoint Foundation 2013, you can install any supported version of SharePoint Products. If you install the Enterprise version of SharePoint Server, you must configure it for dashboards. For more information: [SharePoint Products requirements for Team Foundation Server](../../requirements.md#sharepoint), [Verify SharePoint products for Team Foundation Server](verify-sharepoint.md), [Manually Install SharePoint products for Team Foundation Server](install-sharepoint.md).



![Step 2](../_img/ic646325.png)   Run the Team Foundation Server install from the product DVD and then use the Team Foundation Server Extensions for SharePoint Products configuration wizard to configure your installation. This wizard installs and configures the extensions and, if you want, SharePoint Foundation 2013. After you configure the TFS Extensions, add the service account that you will use for Team Foundation Server to the Farm Administrators group. For more information: [Run Team Foundation Server installation](../install-2013/install-tfs.md#installer), [Configure Team Foundation Server Extensions for SharePoint Products](#config-exts), Add the service account for Team Foundation Server to the Farm Administrators group (below).

> [!TIP]
> If you don't want to install all of Team Foundation Server on the server that is running SharePoint Products, launch the tfs_sharePointExtensions.exe file from the SharePoint Extensions folder to install only the Team Foundation Server Extensions for SharePoint Products.

<a name="tfs-svc-acct-to-farm-admin-group"></a>
**Add the service account for Team Foundation Server to the Farm Administrators group**

You must add the service account for Team Foundation Server to the Farm Administrators group on the SharePoint administration site. If you are using Network Service for the TFS service account and SharePoint is not running on the same server as TFS, you must add the machine name of the server that is running TFS instead of Network Service. The machine name is the server name followed by the $ symbol. For example, *Domain\ServerName$*.

For more information about service accounts, see [Accounts required for installation of Team Foundation Server](../../requirements.md#accounts).

Required permissions: To follow this procedure, you must be a member of the Windows **Administrators** security group on the server that is running SharePoint. 

To add the service account for Team Foundation Server to the Farm Administrators group 

  1. In a web browser, open the SharePoint Central Administration site. 

  2. Under Security, choose **Manage the farm administrators group**.

  3. Choose **New**.

  4. In the **Users/Groups** box, enter the name of the service account for TFS and choose Share. 

  > [!TIP]
  > If you have to manually add a server name followed by the $ symbol, the search utility might not find it, but you will still be able to choose **Share**.



![Step 3](../_img/ic646326.png) If you installed Enterprise version of SharePoint Server, you must make some final configurations in the extensions, but you must do this step *after* you install Team Foundation Server. For more information: [Configure the enterprise application definition for Team Foundation Server](config-enterprise-app-def.md).


<a name="config-exts"></a>
## Configure Team Foundation Server Extensions for SharePoint Products

If SharePoint Products is not installed on the server that is running Team Foundation Server, you have a remote portal. If you have a remote portal, you must install and configure the Team Foundation Server Extensions for SharePoint Products on the remote portal.

If you have multiple servers in a web farm, you must install and configure the extensions on every application-tier and web-tier server in the farm.  After you install the extensions, you must perform this configuration procedure on each server. An error message might appear during configuration asking you to verify that the extensions have been installed on every server in the farm. You can safely ignore this error. After the extensions have been installed and configured on every server, this error stops.

**Required permissions**

To follow this procedure, you must be a member of the **Farm** **administrators** group on the SharePoint administration site.

### To configure Team Foundation Server Extensions for SharePoint Products

From Windows **Start**, run **Team Foundation Server Administration Console**.

1.  In the left pane choose **Extensions for SharePoint Products**, and then in the right pane choose **Configure Installed Features**.

2.  In the **Team Foundation Server Configuration Center** window, choose **Configure Extensions for SharePoint Products** in the left pane. In the right pane, choose **Start Wizard**.

3.  In the **SharePoint Extensions Configuration** window, read the Welcome screen, choose if you want to help improve Team Foundation Server, and then choose **Next**.

4.  If SharePoint Products is installed, skip to the next step. If SharePoint is not installed, take these steps:

5.  Choose the big **Install SharePoint Foundation 2013** button. When the install finishes, choose **Next**.

	1.  Type the name of the SQL Server or named instance that will host the configuration databases for SharePoint Foundation 2013.

	2. Type a user account and password for the service account for SharePoint.

	3. For more information, see [Accounts required for installation of Team Foundation Server](../../requirements.md#accounts)

		On the **Review** page, review the settings and choose ** Next** to let the wizard validate your configuration.

6.  Choose **Configure**.

7.  The wizard applies configuration settings. This process might take several minutes.

8.  Choose **Next**, **Close**, **Close**.

The Team Foundation Server Administration Console appears.



## See Also

[TFS upgrade requirements](../../requirements.md)
