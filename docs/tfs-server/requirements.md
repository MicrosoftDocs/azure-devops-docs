---
title: Requirements and compatibility | Team Foundation Server Setup, Upgrade and Administration
description: Describes many kinds of requirements and compatibility for VSTS and TFS -- hardware, operating systems, SQL Server, client versions, server versions, browsers
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 12652666-b74e-4fd8-aab1-d87cbba6b820
toc: show
ms.manager: douge
ms.author: elbatk
ms.date: 10/02/2017
---

# Requirements and compatibility

**VSTS** | **TFS 2018** | **TFS 2017** | **TFS 2015** | **TFS 2013**

<a name="operating-systems"></a>
## Operating systems

TFS can be installed on a Windows server or client operating system.
TFS 2017 and TFS 2018 only support 64-bit operating systems.
For earlier versions of TFS, you can use either the 32-bit or 64-bit operating systems when a 32-bit version is available. 
We recommend using a server OS unless your TFS instance is for evaluation or personal use.

### Server operating systems
  
TFS Version | Supported server operating systems
------------|--------------------------------
TFS 2018    | Windows Server 2016<br/>Windows Server 2012 R2 (Essentials, Standard, Datacenter)<br/>Windows Server 2012 (Essentials, Standard, Datacenter)
TFS 2017    | Windows Server 2016<br/>Windows Server 2012 R2 (Essentials, Standard, Datacenter)<br/>Windows Server 2012 (Essentials, Standard, Datacenter)<br/>Windows Server 2008 R2 (minimum SP1) (Standard, Enterprise, Datacenter)
TFS 2015    | Windows Server 2016<br/>Windows Server 2012 R2 (Essentials, Standard, Datacenter)<br/>Windows Server 2012 (Essentials, Standard, Datacenter)<br/>Windows Server 2008 R2 (minimum SP1) (Standard, Enterprise, Datacenter)
TFS 2013    | Windows Server 2012 R2 (Essentials, Standard, Datacenter)<br/>Windows Server 2012 (Essentials, Standard, Datacenter)<br/>Windows Server 2008 R2 (minimum SP1) (Standard, Enterprise, Datacenter)
TFS 2012    | Windows Server 2012 R2 (Essentials, Standard, Datacenter)<br/>Windows Server 2012 (Essentials, Standard, Datacenter)<br/>Windows Server 2008 R2 (Standard, Enterprise, Datacenter)<br/>Windows Server 2008 (minimum SP2)<br/>Windows Small Business Server 2011 (Standard, Essentials, Premium Add-On)<br/>Windows Home Server 2011
TFS 2010    | Windows Server 2008 R2 (Standard, Enterprise, Datacenter)<br/>Windows Server 2008 (minimum SP2)<br/>Windows Server 2003 R2<br/>Windows Server 2003 (minimum SP2)

The [server core](https://msdn.microsoft.com/library/dd184075.aspx) installation option is supported for TFS 2017 and TFS 2018, but not for earlier versions.
[Windows Server, version 1709](https://docs.microsoft.com/windows-server/get-started/get-started-with-1709) is not supported. Eventually we do plan to support
Windows Server releases from the Semi-Annual Channel. 

### Client operating systems

TFS Version | Supported client operating systems
------------|--------------------------------
TFS 2018    | Windows 10 (Professional, Enterprise) Version 1607 or greater
TFS 2017    | Windows 10 (Home, Professional, Enterprise)<br/>Windows 8.1 (Basic, Professional, Enterprise)<br/>Windows 7 (minimum SP1) (Home Premium, Professional, Enterprise, Ultimate)
TFS 2015    | Windows 10 (Home, Professional, Enterprise)<br/>Windows 8.1 (Basic, Professional, Enterprise)<br/>Windows 7 (minimum SP1) (Home Premium, Professional, Enterprise, Ultimate)
TFS 2013    | Windows 8.1 (Basic, Professional, Enterprise)<br/>Windows 7 (minimum SP1) (Home Premium, Professional, Enterprise, Ultimate)
TFS 2012    | Windows 8.1 (Basic, Professional, Enterprise)<br/>Windows 7 (Home Premium, Professional, Enterprise, Ultimate)
TFS 2010    | Windows 7 (Home Premium, Professional, Enterprise, Ultimate)<br/>Windows Vista SP2

While TFS supports installation on client OSes, we don't recommend this except for evaluation purposes or personal use.
TFS installations on client OSes don't support integration with SharePoint products or reporting.
The TFS proxy can't be installed on client OSes. If you need to use any of these features, install TFS on a server OS. 


<a name="proxy-server"></a>
## System requirements for Team Foundation Server Proxy

The proxy feature is available only if you installed Team Foundation Server on a server operating system.

Review these hardware recommendations to determine the optimal hardware to use for Team Foundation Server Proxy. Unlike operating system requirements, hardware recommendations for proxy are different than those for setting up the application tier of Team Foundation Server. The application tier of TFS requires more robust hardware than the proxy feature does.

These recommendations are guidelines for Team Foundation Server Proxy. Recommended hardware is based on the size of the team that will use the proxy server. Usually this is the team in your remote office. The larger the team, the more robust your hardware must be.

| **Remote team size** | **Hardware recommendations (CPU/RAM) for Team Foundation Server Proxy** |
|---|---|
| 450 or fewer users | 1 processor, 2.2 GHz CPU, 2 GB RAM |
| Between 450 and 2,200 users | 2 processors, 2.0 GHz CPU, 2 GB RAM |
| Between 2,200 and 3,600 users | 4 processors, 2.0 GHz CPU, 2 GB RAM |


## Virtualization

Microsoft supports the virtualization of Team Foundation Server in supported virtualization environments.
For more information, see the following pages on the Microsoft website:

* [Microsoft server software and supported virtualization environments](http://go.microsoft.com/fwlink/?LinkId=196061)
* [Support policy for Microsoft software running in non-Microsoft hardware virtualization software](http://go.microsoft.com/fwlink/?LinkId=196062)
* [Support partners for non-Microsoft hardware virtualization software](http://go.microsoft.com/fwlink/?LinkId=196063)
* [Server Virtualization](http://go.microsoft.com/fwlink/?LinkId=196072) (officially supported products)

<a name="sql-server"></a>
## SQL Server

Use one of the following versions of SQL Server for TFS:

TFS version        | Support SQL Server version
-------------------|------------------------------------
TFS 2018           | SQL Server 2017<br/>SQL Server 2016 (minimum SP1)
TFS 2017 Update 1  | SQL Server 2016 (minimum SP1)<br/>SQL Server 2014<br/>
TFS 2017           | SQL Server 2016<br/>SQL Server 2014<br/>
TFS 2015 Update 3  | SQL Server 2016<br/>SQL Server 2014<br/>SQL Server 2012 (minimum SP1)
TFS 2015           | SQL Server 2014<br/>SQL Server 2012 (minimum SP1)
TFS 2013 Update 2  | SQL Server 2014<br/>SQL Server 2012 (minimum SP1)
TFS 2013           | SQL Server 2012 (minimum SP1)
TFS 2012           | SQL Server 2012<br/>SQL Server 2008 R2
TFS 2010           | SQL Server 2008 R2<br/>SQL Server 2008

SQL Server on Linux is not supported.

If you're using SQL Server 2016, we require a Visual C++ runtime [update](http://support.microsoft.com/kb/3138367) to be installed. 

SQL Server 2014 has increased hardware requirements compared with previous versions.
Certain configurations might hurt TFS performance.
For more information, read [TFS 2013 Update 2: performance considerations using SQL Server 2014](http://support.microsoft.com/kb/2953452).

If you're using SQL Server 2012 with SP1,
we recommend you also apply [cumulative update 2](http://support.microsoft.com/kb/2790947)
on top of SP1 to address a critical SQL Server bug around resource consumption.
This isn't a requirement because the bug only affects a small number of instances,
but we wanted you to be aware of it.
If you don't apply CU2, you should apply a SQL Server hotfix ([KB2793634](http://support.microsoft.com/kb/2793634))
to addresses another (different) issue where SQL Server 2012 with SP1 might request an excessive amount of restarts.

### TFS 2013 additional information

| Category | Requirements |
| --- | --- |
| Required for TFS | Database Engine Services </br></br> Full-Text and Semantic Extractions for Search |
Required for reporting | Reporting Services – Native </br> Analysis Services |
| Collation settings | Must be accent sensitive </br> Must not be case sensitive </br> Must not be Binary </br> Must not be Binary - code point </br> For more information, see [SQL Server Collation Requirements for Team Foundation Server](../tfs-server/install/sql-server/collation-requirements.md) |
| Authentication | Windows authentication |
| Service account | You can use a domain account or a built-in account. |


**Your limits on database read operations**  
Microsoft does not support any read operations against the TFS databases that originate from queries, scripts, .dll files, and so on, not provided by Microsoft or its support teams. If Microsoft Support determines that those read operations prevent them from solving your problem, the entire database will be unsupported. To return the database to a supported state, all unsupported read operations must stop.

**SQL Server High Availability features Supported by Team Foundation Server**
SQL Server 2012 offers a new high availability (HA) feature that requires a Team Foundation Server-specific configuration. For more information, see: [Use SQL Server 2012 Always On Availability Groups with Team Foundation Server](../tfs-server/install/sql-server/use-always-on-groups.md)

|SQL Server HA feature|TFS support|Requires TFS Configuration|
|---|---|---|
|Always On Failover Cluster Instances|Yes|No|
|Always On Availability Groups|Yes|Yes|
|SQL Mirroring|Yes|No|
|SQL Replication|No|No|
|SQL Log Shipping|No|No|


### SQL Server editions

TFS supports Express, Standard, and Enterprise [editions of SQL server](http://www.microsoft.com/en-us/server-cloud/products/sql-server-editions/).
The Express edition is only recommended for evaluation purposes, personal use, or for very small teams.
We recommend Standard or Enterprise for all other scenarios.

<a name="sharepoint"></a>
## SharePoint

> [!IMPORTANT]  
> TFS 2018 discontinues support for the TFS Extension for SharePoint. 
> For more information, see **[Discontinue SharePoint integration: TFS 2017 and earlier versions](https://go.microsoft.com/fwlink/?linkid=852977).**

SharePoint is a collaboration product is not a TFS requirement, but some teams find SharePoint integration useful. If you want to use SharePoint Products, you must use a supported version that has the TFS extension for SharePoint installed.

TFS version | Supported SharePoint versions
------------|------------------------------
TFS 2018    | No longer supported
TFS 2017    | SharePoint 2013 (Foundation, Standard, Enterprise)<br/>SharePoint 2010 (Foundation, Standard, Enterprise)
TFS 2015    | SharePoint 2013 (Foundation, Standard, Enterprise)<br/>SharePoint 2010 (Foundation, Standard, Enterprise)
TFS 2013    | SharePoint 2013 (Foundation, Standard, Enterprise)<br/>SharePoint 2010 (Foundation, Standard, Enterprise)
TFS 2012    | SharePoint 2013 (Foundation, Standard, Enterprise)<br/>SharePoint 2010 (Foundation, Standard, Enterprise)<br/>Office SharePoint Server 2007 (Standard, Enterprise)<br/>Windows SharePoint Services 3.0
TFS 2010    | Office SharePoint Server 2007 (Standard, Enterprise)<br/>Windows SharePoint Services 3.0

**Authentication**: NTLM is the recommended authentication provider.  Team Foundation Server Extensions for SharePoint Products does not support Basic authentication or anonymous authentication.  In SharePoint Server 2013, Microsoft deprecated Windows classic-authentication in favor of claims-based authentication. TFS supports both, but for claims-based authentication, the authentication provider must be NTLM. TFS will only support NTLM-based claims.

You can configure the TFS extension for SharePoint Products on your SharePoint server from the [TFS administration console](../tfs-server/command-line/open-admin-console.md).

>**Tip:**
If you plan to install SharePoint, make sure that the version of SharePoint you want to use is compatible with the server operating system you’re using. Support for server operating systems in TFS is more amenable than in SharePoint.

Here are your main options:

-   You can use Team Foundation Server standard or advanced configuration wizards to install SharePoint Foundation 2013 on the same server as Team Foundation Server. The Team Foundation Server extensions for SharePoint Products are installed automatically during Team Foundation Server installation.

-   You can use Team Foundation Server extensions for SharePoint Products configuration wizard to install SharePoint Foundation 2013 on a different server from the one running Team Foundation Server.

-   You can use SharePoint Server. If you use the enterprise version of SharePoint Server, you must configure it for dashboard compatibility.

-   You can use a different version of SharePoint Foundation than the one that ships with TFS.


**Dashboard requirements**: Team Foundation Server contains dashboards that use SharePoint Products features to display team data. The dashboards that are available to you depend on the version of SharePoint Products that you use.

-   If you use any supported enterprise edition of SharePoint Server, you get five dashboards that are based on Microsoft Excel.

-   If you use any other SharePoint Product (including the standard editions of SharePoint Server), you get two dashboards that are based on SQL Server Reporting Services.


## Active Directory

You can install Team Foundation Server on more than one server if they are all joined to an Active Directory domain that is based on a functional level that TFS supports. You can install TFS on a single server that is joined to an Active Directory domain or that is a member of a workgroup.

You cannot install TFS on servers that are joined to domains whose domain controllers are running Windows NT Server 4.0. The following table shows which functional levels for Active Directory domains TFS does not support:

| Functional levels for Active Directory domains | Supported |
| --- | --- |
| **Windows 2000 mixed mode**: Domain controllers that are running Windows NT Server 4.0, Windows 2000, Windows Server 2003, and Windows Server 2003 R2. | No |
|**Windows Server 2003 interim mode**: Domain controllers that are running Windows NT Server 4.0, Windows Server 2003, and Windows Server 2003 R2. | No |

<a name="accounts"></a>
## Accounts

You must use service accounts to install Team Foundation Server, Team
Foundation Build, and Team Foundation Server Proxy. If you use
reporting, you also need a report reader account when you install Team
Foundation Server. This topic describes the requirements for service
accounts and the report reader account for installation.  For more
information, see [Service Accounts and Dependencies in Team Foundation Server](../tfs-server/admin/service-accounts-dependencies-tfs.md).

Team Foundation Server requires multiple identities for installation,
but you can use a single account for all the identities, as long as that
account meets the requirements for all the identities for which you use
it.

> **Tip:**
> Confused about accounts? New for this release is a tutorial available 
> for Team Foundation Server installation that covers how to create 
> accounts and groups for a single server installation. For more 
> information, see [Set up groups for use in TFS deployments.](../tfs-server/admin/setup-ad-groups.md) 

**Best practices for accounts:**

-   If you use domain accounts for your service accounts, you should use
    a different identity for the report reader account.

-   If you are installing a component in a workgroup, you must use local
    accounts for user accounts.

### Report reader account

The report reader account is the identity that is used to gather
information for reports. If you use reporting, you must specify a report
reader account when you install Team Foundation Server.

If you install Team Foundation Server with the default options, the
report reader account is also used as the identity of the service
account for SharePoint Foundation.

| Feature | Sample user logon name (1) | Requirements |
| --- | --- | --- |
| Reporting | **TFSREPORTS** | You must specify a user account that has the Allow log on locally permission. </br> Default: You are prompted for this account. You cannot use a built-in account for the report reader account. |


### Service accounts

Team Foundation Server, Team Foundation Build and Team Foundation Server
Proxy all require a service account. These service accounts become the
identity for the installed component. By default, every component uses a
built-in account (such as Network Service) as its service account. You
can change this account to a user account when you install the
component, but you must ensure that any user accounts that you use have
the **Log on as a service** permission.

> **Tip:**
> Built-in accounts do not use passwords and already have the
> **Log on as a service** permission, making them easier 
> to manage, especially in a domain environment. 

#### Service accounts for Team Foundation Server

The service accounts in the following table are the identities for Team
Foundation Server and its components.

The service account for Team Foundation Server is also used in
Internet Information Services (IIS) as the identity of the application
pool for Team Foundation Server.

| Component | Sample user logon name (1) | Requirements |
| --- | --- | --- |
| Team Foundation Server | **TFSSERVICE** | You can specify a built-in account or a user account. If you specify a user account, it must have the **Log on as a service** permission. </br> You must not use the account that you use to install Team Foundation Server as the account for TFSSERVICE. For example, if you are logged in as domain\user1 when you install Team Foundation Server, do not use domain\user1 as the account for TFSSERVICE. </br> If your SharePoint site was not installed at the same time as Team Foundation Server, you must add TFSSERVICE to the Farm Administrators group for the SharePoint Central Administration site. For more information, see [Add the service account for Team Foundation Server to the Farm Administrators group](../tfs-server/install/sharepoint/setup-remote-sharepoint.md#tfs-svc-acct-to-farm-admin-group). </br> Default: Network Service |
| Team Foundation Build | **TFSBUILD** | You can specify a built-in account or a user account. If you use a user account, it must have the **Log on as a service** permission. |
| Team Foundation Server Proxy | **TFSPROXY** | You can specify a built-in account or a user account. If you use a user account, it must have the **Log on as a service** permission. |


#### Service accounts for Release Management for Visual Studio 2013

The service accounts in the following table are the identities for
Release Management Server and the Microsoft Deployment agent.

| Component | Sample user logon name (1) | Requirements |
| --- | --- | --- |
| Release Management Server | **RMSERVER** | This is the identity used in Internet Information Service (IIS) for the application pool and the **Release Management Monitor** Windows service. </br> Default: Network Service |
| Microsoft Deployment Agent | **DEPLOY** | This identity is used to configure the machines in your environment for release. Make sure the identity you use here has enough permission to do whatever tasks are required. For example, if you need to install your application on this machine as part of your release, add this identity to the local Windows Administrators security group. If this identity will need to access builds on the network, make sure it has access to the network drop location. For step-by-step procedure, see [Install deployment agent and set up machines for an environment](../build-release/archive/release/previous-version/install-release-management/install-deployment-agent.md). </br> Default: you are prompted for an account. |


#### Connect Release Management to TFS account

If you connect Release Management to TFS, you need an account in TFS to
act as an intermediary account. For a step-by-step procedure, go here:
[Connect Release Management to TFS](../build-release/archive/release/previous-version/install-release-management/connect-to-tfs.md)


| Component | Sample user logon name (1) | Requirements |
| --- | --- | --- |
| Release Management Server (connected to TFS) | **RMTFS** | A TFS user that is a member of the **Project Collection Administrators** ([minimal permissions that this account must have](http://blogs.msdn.com/b/visualstudioalm/archive/2013/12/19/how-to-configure-team-foundation-server-with-release-management.aspx)) group and has the **Make requests on behalf of others** permission set to allow in TFS. |


#### Service accounts for additional software

The following table lists the service accounts that are the identities

that are used to run Windows services for SharePoint Products and SQL
Server.

The service account for SharePoint Products is also the identity of the
application pool for the SharePoint Central Administration site.

| Component | Sample user logon name (1) | Requirements |
| --- | --- | --- |
| SharePoint Products | **WSSSERVICE** | You must specify a user account. </br> Default: If you install Team Foundation Server with the default options, the account that you specified as the report reader account is also used for this account. |
| SQL Server | **SQLSERVICE** | You can use a built-in system account or set up an account before you install SQL Server. Team Foundation Server has no requirements for this account. |


(1) To make it easier to discuss the different accounts that Team
Foundation Server requires, this guide uses the placeholder names that
are specified in the preceding tables. You do not have to use these
placeholder names for any accounts that you might create.



<a name="project-server"></a>
## Project Server 

**TFS 2017 discontinues support for Project Server.**

Team Foundation Server doesn't require Project Server, but if you use Project Server, you must use a supported version.  TFS-Project Server integration [enables data to flow from work items in Team Foundation Server to tasks in enterprise project plans in Project Server](../work/tfs-ps-sync/synchronize-tfs-project-server.md). 

TFS version | Supported Project Server versions | Supported Project versions
------------|---------------------------------- | ---------------------------
TFS 2018    | Not supported. See [Synchronize TFS with Project Server](../work/tfs-ps-sync/sync-ps-tfs.md) for details. | Not supported. 
TFS 2017    | Not supported. See [Synchronize TFS with Project Server](../work/tfs-ps-sync/sync-ps-tfs.md) for details. | Not supported. 
TFS 2015    | Project Server 2010 with SP1<br/>Project Server 2013 | Project Professional 2007 with SP2 and [update](http://go.microsoft.com/fwlink/?LinkId=211633)<br/>Project Professional 2007 with SP3<br/>Project Professional 2010<br/>Project Professional 2013
TFS 2013    | Project Server 2010 with SP1<br/>Project Server 2013 | Project Professional 2007 with SP2 and [update](http://go.microsoft.com/fwlink/?LinkId=211633)<br/>Project Professional 2007 with SP3<br/>Project Professional 2010<br/>Project Professional 2013
TFS 2012    | Project Server 2007 with SP2<br/>Project Server 2007 with SP3<br/>Project Server 2010 with SP1<br/>Project Server 2013 | Project Professional 2007 with SP2 and [update](http://go.microsoft.com/fwlink/?LinkId=211633)<br/>Project Professional 2007 with SP3<br/>Project Professional 2010<br/>Project Professional 2013
TFS 2010    | Office Project Server 2007 with SP2<br/>Office Project Server 2010 with [required updates](https://msdn.microsoft.com/library/gg412650%28v=vs.100%29.aspx) | Project Professional 2007 with SP2<br/>Project Professional 2010 with [required updates](https://msdn.microsoft.com/library/gg412650%28v=vs.100%29.aspx) 

### Additional Project Server installation requirements notes

To use Project Server with TFS, you must install Team Foundation Server Extensions for Project Server on your Project Server, and then configure the integration.  If you run multiple servers with Project Server in a web farm, you must install these extensions on every application-tier and web-tier server in that farm.

NTLM is the recommended authentication. In SharePoint Server 2013, Microsoft deprecated Windows classic-authentication in favor of claims-based authentication. TFS 2012 supports both, but for claims-based authentication, the authentication provider must be NTLM. TFS 2012 supports only NTLM-based claims.

If you upgrade to Project Server 2013 from a Project Server 2010 installation that has been added to TFS, you have to perform a few extra steps to maintain the connection between TFS and Project Server. For more information, see this topic: [Upgrade Microsoft Project Server 2010 to Microsoft Project Server 2013](../work/tfs-ps-sync/upgrade-ps-2010-to-ps-2013.md).

### Should you add Project Server to your current team project portal site?

Project Server is an extension of SharePoint Products. You can easily run Project Server on the same SharePoint Products farm you use for Team Foundation Server. If you run Project Server this way, you need to install both the Team Foundation Server extensions for SharePoint Products and the extensions for Project Server on the same server. Team Foundation Server recommends you use a web application running on port 80 for integration with SharePoint Products and you can use this same web application to host the Project Server projects. For example, the URL for team portal sites and Microsoft Project Web App (PWA) sites both hosted on a web application on port 80 might look something like these:

-   http://*MOSS2013Server*/sites/DefaultCollection/*TFSProject*

-   http://*MOSS2013Server*/pwa/*EnterpriseProject*

You can also run Project Server on its own SharePoint farm, separate from any farm where you might host team project portal sites. This would give you two SharePoint Products farm integrations in a single Team Foundation Server deployment.

> [!TIP]    
> Team Foundation Server has no topology requirements for Project Server. For performance reasons, we recommend you run Project Server on a server other than Team Foundation Server. If you want to set up a sandbox integration of Project Server and Team Foundation Server, you could install all the products on a single server for demonstrations or test purposes.


## Major releases and service packs

We don't always immediately support major new versions of our dependencies (like SQL Server) 
because we sometimes have to do updates to add support for those versions. 
However, once we support a major version, we always support the latest service pack immediately when it releases. 
We work with those teams to test the service pack before release.

<a name="hardware-recommendations"></a>
## Hardware recommendations

Team Foundation Server can scale from an Express installation on a laptop 
used by a single person all the way up to a highly available deployment used 
by thousands of people and comprising multiple application tiers behind a 
load balancer, multiple SQL instances using SQL Always On, etc. The 
following recommendations should apply to most TFS deployments, but your 
requirements may vary depending on the usage of your team. For example, if 
you have particularly large Git repositories or Team Foundation Version 
Control branches, you may need higher spec machines that what are listed 
below. Note that all of the machines discussed below could be either 
physical or virtual.

### Single Server deployment

A single machine, with one dual-core processor, 4 GB of RAM, and a fast hard 
disk drive. This configuration should support up to 250 users of core source 
control (TF VC or Git) and work item tracking functionality. Extensive use of 
automated build, test, or release would likely cause performance issues. Use 
of search or reporting features would not be recommended with this configuration.

Scaling a single server up can enable it to handle a larger number of users; 
increased use of automated build, test, or release; and/or use of search or 
reporting features. For example, increasing RAM to 8 GB should enable
a single server deployment to scale up to 500 users.

For evaluation or personal use, you can use a a basic configuration with as
little as 1 GB of RAM, but clearly this would not be recommended for a 
production server used by more than one person.

### Multi Server deployments

Scaling beyond 500 users; enabling extensive use of automated build, test, or release; 
enabling use of Code Search; enabling use of reporting features; or enabling SharePoint 
integration typically requires expanding to a multiple server deployment.
 
For a team of more than 500 users, consider:

- An application tier with one dual-core processor, 8 GB of memory, and a 
fast hard disk drive.
- A data tier with one quad-core processor, 8 GB of memory, and high
performance storage such as an SSD.

For a team of more than 2,000 users, consider:

- An application tier with one quad-core processor, 16 GB or more of memory, 
and a fast hard disk drive.
- A data tier with two or more quad-core processors, 16 GB or more of memory, 
and very high performance storage (SSD, high performance SAN, etc.).

If you plan to extensively use build, test, or release automation, we 
recommend using higher spec application and data tiers to avoid performance 
issues. For example, a team of 250 might use a multiple server deployment 
that is more in line with the recommendations for a team of 500-2,000 users. We also 
recommend that you keep an eye on your automated processes to ensure that 
they are efficient – for example, retrieve data from source control 
incrementally during builds whenever possible, rather than fully refreshing 
on each build. NOTE: except for very small teams with extremely limited usage 
of these features we do not recommend installing build, test, or release 
agents on your TFS application tiers.

If you plan to use Code Search, we typically recommend setting up a separate server for it. 
For more details, see 
[hardware requirements for Code Search](../search/code/administration.md#hardware-recommendations).

If you plan to use reporting features, we recommend setting up a separate 
server for your warehouse database and Analysis Services cube or using a 
higher spec data tier.

If you plan to use SharePoint integration, we recommend setting up a separate 
server for your SharePoint instance or using a higher spec application tier. 

If you want to guarantee high availability, you should consider multiple 
application tiers behind a load balancer and multiple SQL instances with your 
TFS DBs in an Always On availability group.

### Build service hardware requirements

The XAML build service has the same operating system requirements as TFS.
It normally makes sense to run the build service on a machine separate from the TFS application tier.
Hardware requirements for the build service are the same as the operating system on which it is running.
However, you can optimize build service performance by tailoring the hardware specs
of your build machine to the types of builds your team will use.

<!-- For more information, see System requirements for Team Foundation Build Service  -->

### SharePoint hardware requirements

If you install SharePoint Products,
you will need more robust hardware than what is listed in the previous table.
For example, SharePoint Foundation 2013 requires a 64-bit 4 core CPU and a base minimum of 8 GB of system memory.
If you install SharePoint 2013 on a server that is also running SQL Server,
SharePoint recommends that you have 24 GB of system memory.

Go here for complete SharePoint hardware requirements:

* [Hardware and software requirements for SharePoint 2013 (SharePoint Foundation 2013/SharePoint Server 2013)](https://technet.microsoft.com/library/cc262485.aspx)
* [Hardware and software requirements (SharePoint Foundation 2010)](http://go.microsoft.com/fwlink/?LinkId=231850)
* <a href="https://technet.microsoft.com/library/cc262485(v=office.14).aspx">Hardware and software requirements (SharePoint Server 2010)</a>

<!-- For a complete list of supported versions of SharePoint, go here: SharePoint Products Requirements for Team Foundation Server -->


<a name="languages"></a>
## Natural Languages

You can install TFS in various languages on supported operating systems in various languages. However, you cannot use every combination of localized operating system with TFS and you can't install multiple languages on a single TFS server. The language of the installation of SharePoint Products can also complicate your deployment. However, you can add an appropriate language pack to the server that is running SharePoint Products to meet requirements for Team Foundation Server.

The following table outlines the various language combinations that are supported:

| Operating system | Team Foundation Server | Sharepoint Products |
| --- | --- | --- |
| English | English | English |
| English | Language other than English | Language (or language pack) must match Team Foundation Server |
| Language other than English | English | English (or English language pack added) |
| Language other than English | Language must match the operating system | Language (or language pack added) to match Team Foundation Server |

The following rules clarify the language requirements for installations of Team Foundation Server.

-   If you are running an English language operating system, you can install any language version of Team Foundation Server. If you are not running an English language operating system, you must install the English version of Team Foundation Server or the version of Team Foundation Server that has been localized for the same language as the operating system.

-   If you want to use SharePoint Products, it must match the language of the installation of Team Foundation Server, or you must install the language pack that matches the language of your installation of Team Foundation Server.

For example, you can install a Japanese version of Team Foundation Server on an English or Japanese operating system but not on a German operating system. If you install a Japanese version of Team Foundation Server, you must also have either a Japanese version of SharePoint Products or the Japanese language pack for SharePoint Products on the server that is running SharePoint Products.

The following components do not have additional language requirements that are specific to working with Team Foundation Server:

-   Team Foundation Build Service

-   Team Foundation Server Proxy

-   Team Explorer

-   Visual Studio Lab Management

Test controllers and agents have their own language requirements. For more information, see the following page on the Microsoft website: [Test Controller and Test Agent Requirements](https://msdn.microsoft.com/library/ff937706.aspx)


<a name="client-compatibility"></a>
## Client compatibility

### Visual Studio

We define three levels of client support for different versions of Visual Studio and Team Explorer.
Only the latest version has "full" compatibility with the latest Team Foundation Server,
because this will be the only client that contains components that can interface with new features for that release,
and will also be the only client from which you can perform certain administrative tasks such as creating new team projects.
Previous versions will have varying levels of support below that, depending on how old they are.

Next, we describe the level of support that we guarantee with each client version.
Keep in mind that additional functionality other than what is listed below might continue to work using older clients. In fact,
it often does, but is outside the scope of what we test and support officially.

Visual Studio/ Team Explorer version | TFS 2018, TFS 2017, and VSTS support notes                                | TFS 2015 support notes                                                    | TFS 2013 support notes                                                          | TFS 2012 support notes                                                 | TFS 2010 support notes
-------------------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------
Visual Studio 2017                   | Full Support                                                              | High level of support                                                     | High level of support                                                           | High level of support                                                  | High level of support
Visual Studio 2015                   | High level of support                                                     | Full support                                                              | High level of support                                                           | High level of support                                                  | High level of support
Visual Studio/Team Explorer 2013     | General support                                                           | High level of support                                                     | Full support                                                                    | High level of support                                                  | High level of support
Visual Studio/Team Explorer 2012     | General support. Supports Git with Visual Studio Tools for Git extension. | General support. Supports Git with Visual Studio Tools for Git extension. | High level of support. Supports Git with Visual Studio Tools for Git extension. | Full support. Supports Git with Visual Studio Tools for Git extension. | High level of support
Visual Studio/Team Explorer 2010     | General support (SP1 and Compat GDR)                                      | General support (SP1 and Compat GDR)                                      | General support (SP1 and Compat GDR)                                            | High level of support (SP1 and Compat GDR)                             | Full support (SP1 and Compat GDR)
Visual Studio/Team Explorer 2008     | Version Control available using MSSCCI provider                           | Version Control available using MSSCCI provider                           | Version Control available using MSSCCI provider                                 | Version Control available using MSSCCI provider                        | Version Control available using MSSCCI provider
Visual Studio 2005                   | Version Control available using MSSCCI provider                           | Version Control available using MSSCCI provider                           | Version Control available using MSSCCI provider                                 | Version Control available using MSSCCI provider                        | Version Control available using MSSCCI provider

#### Full-featured support

Any TFS-facing functionality exposed in the UI of Visual Studio and Team Explorer should work.
We guarantee full feature support between client and server of the same version.

Note: If you are using the latest version of Visual Studio,
but will continue to use the most recent previous version of Team Foundation Server (either temporarily or permanently),
you can expect a high level of compatibility here as well.
All non-administrative scenarios will be supported. 

#### High level of support

If you are running the most recent previous version of Visual Studio or Team Explorer
(for example: Visual Studio 2013, if you are on TFS 2015),
then you can expect most features to be supported from Visual Studio.
You might need to install the latest update,
but after doing so, mainline scenarios for all non-admin personas will be supported.
This includes features needed for developers and testers to continue their daily work,
such as queuing builds, running queries, viewing documents, and getting, editing, and checking in files.
Program Managers should also be able to continue using most features relevant to them,
but might need to rely on web access for some scenarios, such as managing areas and iterations, and writing new queries.

If you are using newer versions of Visual Studio against older versions of Team Foundation Server,
you can similarly expect most features to be supported. 

Older process templates that were in use with the previous version of Team Foundation Server should continue to be compatible with the new server.

#### General support

If a client is two versions older than your server, you can expect general support (after installing a compatibility GDR).
This will look similar to the high level of support you see when Visual Studio is one release older than TFS;
however, the experience for some non-mainline scenarios may be degraded but not entirely blocked.
Non-admins should still be able to continue unimpeded in their daily work,
and older process templates should remain compatible with the new server.

#### MSSCCI support

Visual Studio/Team Explorer 2008 and Visual Studio 2005 are no longer officially supported.
To connect to the server, these clients must interface through the MSSCCI provider instead.
MSSCCI support only includes support for source control integration and MSSCCI commands.
The goal is simply to allow developers to continue working with legacy applications in an upgraded server.

### Team Explorer Everywhere

New versions of Team Explorer Everywhere are released through [GitHub](https://github.com/Microsoft/team-explorer-everywhere)
and the [Eclipse Marketplace](https://marketplace.eclipse.org/content/team-explorer-everywhere).
To maximize compatibility with the latest version of Team Foundation Server, you should use the latest version of Team Explorer Everywhere.
If you need support for an older version of Eclipse, Java, or an operating system,
you may choose to use an older version of Team Explorer Everywhere that encompasses the range you need.
Multiple versions of Team Explorer Everywhere can also be installed side-by-side if you are running multiple versions of Eclipse.

Team Explorer Everywhere           | Eclipse version | VSTS, TFS 2012 - TFS 2018   | TFS 2010                    | TFS 2008                    | TFS 2005
-----------------------------------|-----------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------
Team Explorer Everywhere 14.114.0+ | Eclipse 4.2-4.7 | ![Check](../_img/check.png) | ![x](../_img/x.png)         | ![x](../_img/x.png)         | ![x](../_img/x.png)
Team Explorer Everywhere 2015      | Eclipse 3.5-4.3 | ![Check](../_img/check.png) | ![Check](../_img/check.png) | ![x](../_img/x.png)         | ![x](../_img/x.png)
Team Explorer Everywhere 2013      | Eclipse 3.5-4.3 | ![Check](../_img/check.png) | ![Check](../_img/check.png) | ![x](../_img/x.png)         | ![x](../_img/x.png)
Team Explorer Everywhere 2012      | Eclipse 3.4-4.3 | ![Check](../_img/check.png) | ![Check](../_img/check.png) | ![Check](../_img/check.png) | ![Check](../_img/check.png)
Team Explorer Everywhere 2010 SP1  | Eclipse 3.2-3.6 | ![Check](../_img/check.png) | ![Check](../_img/check.png) | ![Check](../_img/check.png) | ![Check](../_img/check.png)
Team Explorer Everywhere 2010      | Eclipse 3.0-3.5 | ![Check](../_img/check.png) | ![Check](../_img/check.png) | ![Check](../_img/check.png) | ![Check](../_img/check.png)

<a name="supported-browsers"></a>
### Browsers

You can use these browsers with VSTS 
and to access TFS with the web client.

Version                   | Edge        | Internet Explorer | Safari (Mac)   | Firefox     | Chrome
--------------------------|-------------|-------------------|----------------|-------------|-------------
VSTS, TFS 2018, TFS 2017  | most recent | 11 and later      | 9.1 and later  | most recent | most recent
TFS 2015                  | most recent | 9 and later       | 5 and later    | most recent | most recent
TFS 2013                  |             | 9 and later       | 5 and later    | most recent | most recent

Edge, Firefox, and Chrome automatically update themselves, 
so VSTS and TFS support the most recent version.

### Office

Office integration supports the following clients: [Excel](../work/backlogs/office/bulk-add-modify-work-items-excel.md), [Project](../work/backlogs/office/create-your-backlog-tasks-using-project.md), and [PowerPoint with Storyboarding](../work/backlogs/office/storyboard-your-ideas-using-powerpoint.md). 

TFS version | Supported Office versions
------------|--------------------------
TFS 2018    | Office 2016<br/>Office 2013<br/>Office 2010
TFS 2017    | Office 2016<br/>Office 2013<br/>Office 2010
TFS 2015    | Office 2013<br/>Office 2010<br/>Office 2007
TFS 2013    | Office 2013<br/>Office 2010<br/>Office 2007
TFS 2012    | Office 2010<br/>Office 2007
TFS 2010    | Office 2010<br/>Office 2007

* If you are using SharePoint with TFS, you will need to add SP2 to Office 2007 and SP1 to Office 2010 for integration between Office and SharePoint. 
* SharePoint 2010 does not support Office 2013.

## TFS Build Compatibility

**TFS 2018 discontinues support for the Xaml build system.**

We've built a brand new [scriptable build system](../build-release/overview.md) that's web based and cross-platform.

You may want to use an older version of Build if you plan to continue using the Xaml build system, 
if you are using Build servers against multiple versions of TFS, or if you need to leverage servers 
with older operating systems in your TFS deployment. TFS 2010 Xaml Controllers support operating 
systems as far back as Windows XP and Windows Server 2003.

TFS Version | Supported Build versions
------------|--------------------------
TFS 2018    | TFS 2018 Build Agent<br/>TFS 2017 Build Agent
TFS 2017    | TFS 2017 Build Agent<br/>TFS 2015 Build Agent<br/>TFS 2015 Xaml Controller<br/>TFS 2013 Xaml Controller<br/>TFS 2010 Xaml Controller
TFS 2015    | TFS 2015 Build Agent<br/>TFS 2015 Xaml Controller<br/>TFS 2013 Xaml Controller<br/>TFS 2010 Xaml Controller
TFS 2013    | TFS 2013 Xaml Controller<br/>TFS 2012 Xaml Controller<br/>TFS 2010 Xaml Controller
TFS 2012    | TFS 2012 Xaml Controller<br/>TFS 2010 Xaml Controller
TFS 2010    | TFS 2010 Xaml Controller

## More information about TFS requirements for companion products:

SQL Server, SharePoint Products, and Project Server

* [SQL Server requirements for Team Foundation Server](#sql-server)
 
	Team Foundation Server requires SQL Server, but you have many options,
	including an option to let Team Foundation Server install SQL Server Express for you.

* [SharePoint Products requirements for Team Foundation Server](requirements.md#sharepoint)  

	Team Foundation Server doesn't require SharePoint Products.

