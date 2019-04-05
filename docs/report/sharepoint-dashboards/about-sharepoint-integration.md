---
title: About SharePoint Integration 
titleSuffix: TFS
description: TFS/SharePoint integration - About SharePoint Integration 
ms.prod: devops
ms.technology: devops-analytics
ms.manager: jillfra
ms.reviewer: greggboe
ms.author: kaelli
ms.date: 09/28/2017
ms.topic: overview
monikerRange: '>= tfs-2013'
---

# About SharePoint integration  

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

SharePoint products are a valuable resource to users of Azure DevOps and Team Foundation Server (TFS). With a SharePoint site, teams can easily store and share Office documents. SharePoint sites can be configured to show all kinds of information. We expect and encourage Azure DevOps and TFS teams to use SharePoint and will continue to look for ways to make the integration of Azure DevOps and SharePoint Server and SharePoint online, be better together.

## TFS 2017 and earlier versions

Since its inception in 2005, TFS has integrated with SharePoint. That integration included SharePoint site templates and automatic site provisioning as well as support for browsing document libraries from inside Visual Studio Team Explorer. This integration works for SharePoint Server 2010 and 2013. It does not integrate with SharePoint Online nor support integration with Azure DevOps Services. 

With TFS 2013, TFS-SharePoint integration required you to install the TFS Extension for SharePoint on the SharePoint server and configure both servers to recognize each other. This integration provided the following features:
* Automatically create a SharePoint site when creating a team project
* Provision dashboard pages on that SharePoint site
* Install SharePoint web parts that display TFS information such as work item query results and latest build results.
* Support for browsing your SharePoint document libraries directly from Visual Studio Team Explorer.

However, you should consider the following before moving forward with this integration:
* You can create your SharePoint site using SharePoint itself. Microsoft Teams also creates a team SharePoint site for sharing information
* TFS 2017 Update 2 and later versions support [Dashboards](../../report/dashboards.md).  Dashboards provide a very practical replacement for the TFS-SharePoint dashboards.  
* TFS dashboards offer an extensive [catalog of widgets](../../report/widget-catalog.md) which replace all of the SharePoint web parts offered by this integration. Additionally, you can find widgets developed by our partners from the [VSTS Marketplace](https://marketplace.visualstudio.com/search?term=widgets&target=VSTS&category=All%20categories&sortBy=Relevance).
* Starting with TFS 2018, we are deprecating the tightly-coupled TFS-SharePoint integration in favor of integration using public APIs and extensibility frameworks.

You may want to ask yourself whether the integration benefits outweigh the costs of configuration. 

If you are running TFS 2017 or earlier and want to configure your integration with SharePoint 2010 or 2013, read [Configure SharePoint Integration - TFS 2017 and Earlier](./configure-sharepoint-tfs-2017-earlier.md)

**If you are running TFS 2017, configured to integrate with SharePoint 2013, and want to upgrade to SharePoint 2016**, you will need to disable SharePoint integration during the SharePoint upgrade, or your upgrade will fail. For more information, read [Upgrade from SharePoint 2013 with TFS integration to SharePoint 2016](./deprecation/upgrade-from-sharepoint2013-to-sharepoint-2106.md).


<a id="compat" />
## TFS-SharePoint version compatibility  

> [!IMPORTANT]  
> TFS 2018 and Azure DevOps Server 2019 RC1 don't support the TFS Extension for SharePoint. For more information, see [Discontinue SharePoint integration: TFS 2017 and earlier versions](./deprecation/discontinue-pre-tfs-2017-sharepoint-integration.md).

SharePoint is a collaboration product. Although SharePoint integration isn't a requirement for using SharePoint with Azure DevOps Server or TFS, some teams find SharePoint integration useful. If you want to use SharePoint Products, you must use a supported version that has the TFS extension for SharePoint installed.

TFS version | Supported SharePoint versions
------------|------------------------------
TFS 2018 | No longer supported
TFS 2017 | SharePoint 2013 (Foundation, Standard, Enterprise)<br/>SharePoint 2010 (Foundation, Standard, Enterprise)
TFS 2015 | SharePoint 2013 (Foundation, Standard, Enterprise)<br/>SharePoint 2010 (Foundation, Standard, Enterprise)
TFS 2013 | SharePoint 2013 (Foundation, Standard, Enterprise)<br/>SharePoint 2010 (Foundation, Standard, Enterprise)
TFS 2012 | SharePoint 2013 (Foundation, Standard, Enterprise)<br/>SharePoint 2010 (Foundation, Standard, Enterprise)<br/>Office SharePoint Server 2007 (Standard, Enterprise)<br/>Windows SharePoint Services 3.0
TFS 2010 | Office SharePoint Server 2007 (Standard, Enterprise)<br/>Windows SharePoint Services 3.0

### Authentication

NTLM is the recommended authentication provider. Team Foundation Server Extensions for SharePoint Products doesn't support Basic authentication or anonymous authentication.  In SharePoint Server 2013, Microsoft deprecated Windows classic authentication to move to claims-based authentication. TFS supports both, but for claims-based authentication, the authentication provider must be NTLM. TFS supports only NTLM-based claims.

You can configure the TFS extension for SharePoint Products on your SharePoint server in the [TFS administration console](/azure/devops/server/ref/command-line/open-admin-console).

> [!TIP]
> If you plan to install SharePoint, make sure that the SharePoint version you want to install is compatible with the server operating system you're using. Support for server operating systems in TFS is more amenable than in SharePoint.
>
> Here are your main options:
> 
> -	You can use TFS standard or advanced configuration wizards to install SharePoint Foundation 2013 on the same server as Team Foundation Server. The Team Foundation Server extensions for SharePoint Products are installed automatically during Team Foundation Server installation.
> - You can use the Team Foundation Server extensions for SharePoint Products configuration wizard to install SharePoint Foundation 2013 on a different server from the one running Team Foundation Server.
> - You can use SharePoint Server. If you use the Enterprise edition of SharePoint Server, you must configure it for dashboard compatibility.
> - You can use a different version of SharePoint Foundation than the one that ships with TFS.

### Dashboard requirements

TFS contains dashboards that use SharePoint Products features to display team data. The dashboards that are available to you depend on the version of SharePoint Products you use:

- If you use any supported Enterprise edition of SharePoint Server, you get five dashboards that are based on Microsoft Excel.
- If you use any other SharePoint Products (including the Standard editions of SharePoint Server), you get two dashboards that are based on SQL Server Reporting Services.

### SharePoint hardware requirements

If you install SharePoint Products, you must have more robust hardware than what is listed in the preceding table. For example, SharePoint Foundation 2013 requires a 64-bit, four-core CPU and a base minimum of 8 GB of system memory. If you install SharePoint 2013 on a server that's also running SQL Server, SharePoint recommends that you have 24 GB of system memory.

For complete SharePoint hardware requirements, see the following articles:

* [Hardware and software requirements for SharePoint 2013 (SharePoint Foundation 2013/SharePoint Server 2013)](https://technet.microsoft.com/library/cc262485.aspx)
* [Hardware and software requirements (SharePoint Foundation 2010)](http://go.microsoft.com/fwlink/?LinkId=231850)
* [Hardware and software requirements (SharePoint Server 2010)](https://technet.microsoft.com/library/cc262485(v=office.14).aspx)



## TFS 2018, Azure DevOps Server 2019, and later versions
Starting with TFS 2018, we no longer offer the TFS Extension for SharePoint. Additionally, we won't support TFS 2017 integration with SharePoint 2016 (the TFS Extension for SharePoint only supports Sharepoint 2013 and earlier versions). TFS 2017 and earlier versions will continue to work with their supported versions of SharePoint. For more information, read [Discontinue TFS 2017 (and earlier versions) SharePoint integration](./deprecation/discontinue-pre-tfs-2017-sharepoint-integration.md).

**If you are upgrading to TFS 2018 from a previous version configured to integrate with SharePoint 2010 or 2013**, you will need to disable the SharePoint integration after upgrade, or your TFS SharePoint sites will fail to load. For more information, read [Disable SharePoint integration after TFS 2018 upgrade](./deprecation/disable-tfs-sharepoint-integration-after-tfs-2018-upgrade.md).

<!-- ## Future plans for Azure DevOps SharePoint integration

Currently, our [dashboards](../dashboards/dashboards.md) will meet most of your reporting requirements, replacing the previous dependency on TFS-SharePoint dashboards.  

In the future, we plan to provide a way to embed a dashboard on a SharePoint site. From SharePoint, you will simply select a dashboard to display, and it will be embedded on the SharePoint site.
This will occur without laborious configurations. It will just work. It will also support both Azure DevOps Services, TFS , SharePoint Server, SharePoint online.

If you need more than the built-in dashboards can offer, Power BI reports and Excel charts can be embedded on a SharePoint site. This functionality is available today.

We will update this article as we provide additional SharePoint integrations.  -->

## Referenced topics

- [Add and manage dashboards](../../report/dashboards.md) 
- [Widget catalog](../../report/widget-catalog.md) 
- [Configure SharePoint Integration: TFS 2017 and earlier versions](./configure-sharepoint-tfs-2017-earlier.md)
- [Discontinue SharePoint integration: TFS 2017 and earlier versions](./deprecation/discontinue-pre-tfs-2017-sharepoint-integration.md)
- [Upgrade from SharePoint 2013 with TFS integration to SharePoint 2016](./deprecation/upgrade-from-sharepoint2013-to-sharepoint-2106.md)
- [VSTS Marketplace](https://marketplace.visualstudio.com/search?term=widgets&target=VSTS&category=All%20categories&sortBy=Relevance)
