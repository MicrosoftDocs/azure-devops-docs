---
title: Install and configure TFS on a single server
description: Install and set up Team Foundation Server (or TFS Express) on a single server using the basic configuration wizard
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 36d82fcb-e849-41e1-a33f-68974c15fbd4
toc: show
ms.manager: douge
ms.author: elbatk
ms.date: 11/28/2017
ms.topic: get-started-article
---

# Install TFS on a single server

**TFS 2018** | **TFS 2017** | **TFS 2015**

There are three different options for installing Team Foundation Server (TFS):

* Single server install (covered in this guide)
* Dual server install
* Multiple server install

The simplest way to set up TFS is to put everything on a single server. Make sure to review our [hardware recommendations](../requirements.md#hardware-recommendations) to confirm that this configuration seems appropriate for your team. If not, 
consider a [dual server](dual-server.md) or [multiple server](multiple-server.md) configuration instead.

> If you're upgrading to TFS 2018 from another version, you may want to look at the [requirement changes](../requirement-changes-tfs16.md) and [release notes](../whats-new.md#tfs-2018-rc1).

## Preparation

0. Prepare a single computer that satisfies the [system requirements](../requirements.md) for TFS. 

0. If you do not plan to use SQL Express, set up an [appropriate version of SQL Server](../requirements.md#sql-server). When you set SQL Server up for TFS, install at least the database engine and full text search services.

	![SQL_SERVER_FEATURES](_shared/_img/sql-features.png)

	While the configuration wizard will install SQL Server Express for you, we don't recommend using SQL Server Express for anything but
	personal or evaluation deployments of TFS. Paid copies of TFS come with a license to SQL Server Standard for use with TFS. The [Team Foundation Server pricing page](https://www.visualstudio.com/team-services/tfs-pricing) explains the details. If you use the license that's included with TFS, you can only use if for the TFS databases.

0. Ensure that the account you plan to use to configure TFS is a member of the [SysAdmin server role in SQL Server](https://msdn.microsoft.com/en-us/library/ms188659.aspx). 

> [!NOTE]
> Installing TFS involves a complex set of operations that require a high degree of privilege - these include creating databases, 
> provisioning logins for service accounts, and more. Technically, all that is required is membership in the ServerAdmin role; 
> ALTER ANY LOGIN, CREATE ANY DATABASE, and VIEW ANY DEFINITION server scoped permissions; and CONTROL permission on the master 
> database. Membership in the SysAdmin server role will confer all of these memberships and permissions, and is therefore the easiest
> way to ensure that TFS configuration will succeed. If necessary, these memberships and permissions can be revoked after TFS is 
> installed.  

## Installation

0. You can download TFS from:
	* [www.visualstudio.com/tfs/](https://www.visualstudio.com/tfs/) (the simplest method), 
	* [MSDN Subscriber Downloads](https://msdn.microsoft.com/en-us/library/hh442898.aspx), 
	* the [Volume Licensing Service Center](https://www.microsoft.com/Licensing/servicecenter/default.aspx), 
	* or purchase a DVD through retail channels

0. Kick off the installation.

![TFS_INSTALLER](_shared/_img/installer.png)

The installation process itself simply gets TFS bits onto your machine. At the end of this process, the installer will launch the TFS 
Configuration Center. 

## Configuration

Configure TFS using your selected scenario. The easiest way to set up Team Foundation Server on a single server is to use the Server 
Configuration Wizard with the New Deployment - Basic scenario. 

![TFS_SERVER_CONFIGURATION_NEW_DEPLOYMENT_BASIC](_shared/_img/new-deployment-basic.png)

> In previous versions of TFS, you would use the Basic Configuration Wizard.

This scenario is optimized for simplicity, using default options for most inputs. If you want full control over all inputs, use the New 
Deployment - Advanced scenario instead. 

With the *New Deployment - Basic* scenario, you will need to choose:

- **Language**: Which language you would like to configure TFS for.
- **SQL Server Instance**: Whether to install SQL Express or use an existing SQL Server instance.
- **Application Tier**: Which website settings to use, including whether to use HTTP or HTTPS bindings. See [website settings](../../security/websitesettings.md) for more information.
- **Search**: Whether to install and configure Code Search features. See [configuring search](../../search/code/administration.md#config-tfs) 
for more information.

If you select the *New Deployment - Advanced* scenario, you will additionally need to choose:

- The service account your various TFS deployment processes will run as. The default value used in the Basic scenario is `NT AUTHORITY\NETWORK SERVICE` in domain joined scenarios, and `LOCAL SERVICE` in workgroup scenarios.
- Whether to enable SSH, along with the port it should listen on. The default value used in the Basic scenario is to configure SSH on port 22.
- The location of the file cache used for frequently accessed TFS resources. The default value used in the Basic scenario is the path
`TfsData\ApplicationTier\_fileCache` on the local drive which has the most free space.
- Whether to configure Reporting features and SharePoint integration. The default behavior used in the Basic scenario is to not configure
these features. Note that these options are not available on client operating systems.
- Whether to create a team project collection in which to store your projects, along with the name of that collection. The default behavior in the Basic scenario is to create a project collection named DefaultCollection.

In both cases, the wizard will run readiness checks to validate your environment and your setting selections. If all goes well, the wizard will then let you configure your deployment. If there are errors, you will need to fix each of them and re-run the readiness checks before you can continue.

## Next Steps

* [Create a team project](../../accounts/create-team-project.md?toc=/vsts/tfs-server/toc.json&bc=/vsts/tfs-server/breadcrumb/toc.json)
* [Upgrade TFS](../upgrade/get-started.md)