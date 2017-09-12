---
title: Ports required for installation of Team Foundation Server
description: Ports required for installation of Team Foundation Server
ms.assetid: d91e25a9-94d0-4767-a972-3755dea790a6
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Ports required for installation of Team Foundation Server

**TFS 2017** | **TFS 2015** | **TFS 2013**

Your firewall controls network ports, but Team Foundation Server requires port access. You must ensure that your firewall does not block Team Foundation Server from the ports it requires. The tables in this topic show the default settings for TCP ports that Team Foundation Server, SQL Server, and SharePoint Products require.

## Firewalls

If you are using Windows Firewall and it is configured to allow exceptions, the installation wizard for Team Foundation Server opens the ports that TFS requires. If Windows Firewall is configured not to allow exceptions, you should configure it to allow exceptions during the installation of Team Foundation Server. Otherwise, you will have to manually open the ports that TFS requires. For more information, see this page on the Microsoft website: [How to Configure Windows Firewall on a Single Computer](https://technet.microsoft.com/en-us/library/cc875811.aspx).

If you are using some other firewall product, you should check its documentation to determine how to open the ports that TFS requires.

## Required Ports for SQL Server

The following table specifies the TCP ports that SQL Server requires.

|**Server or Application Context**|**TCP Port**|
|---|---|
|SQL Service (Database Engine)|1433¹|
|SQL Browser Service (Database Engine)|1434|
|SQL Server Analysis Services Redirector |2382|
|SQL Server Analysis Services|2383|
|SQL Server Reporting Services|80|

¹ SQL Server uses port 1433 for the default instance. For named instances, SQL Server uses a dynamic port that the operating system assigns. Use SQL Server Configuration Manger to determine the SQL Server port number for any named instances. For more information, see this page on the Microsoft website: [Configuring the Windows Firewall to Allow SQL Server Access](https://msdn.microsoft.com/en-us/library/cc646023.aspx).

**Report Server Port Requirements**

You must ensure that the report server contains an exception in Windows Firewall for Windows Management Instrumentation (WMI) if the report server is not on the server that is running Team Foundation Server. The instructions for completing this task differ based on the operating system that you are using. If you are using Windows Server 2003 or Windows Server 2003 R2, see the following page on the Microsoft website: [Connecting Through Windows Firewall](https://msdn.microsoft.com/en-us/library/aa389286(VS.85).aspx). If you are using Windows Server 2008, Windows Server 2008 R2, Windows Vista or Windows 7, see the following page on the Microsoft website: [Connecting to WMI Remotely Starting with Windows Vista](https://msdn.microsoft.com/en-us/library/aa822854(VS.85).aspx).

## Required Ports for SharePoint Products

The table in this section specifies the TCP ports that SharePoint Foundation uses if it is installed by the installation wizard for TFS. 

These port numbers might be different for existing deployments of SharePoint Products. You can determine which port numbers SharePoint Products uses by opening Internet Information Services (IIS) Manager and looking at the properties of the websites. For more information, see [Verify SharePoint products for Team Foundation Server](../install/sharepoint/verify-sharepoint.md).

|**Server or Application Context**|**TCP Port**|
|---|---|
|Default website|80|
|SharePoint Central Administration|17012|

## Required Ports for Team Foundation Server

By default, Team Foundation Server uses the following TCP ports:

|**Server or Application Context**|**TCP Port**|
|---|---|
|Team Foundation Server|8080|
|Team Foundation Server Proxy|8081|

## Required Ports for Release Management for Visual Studio 2013

By default, Release Management Server uses the following TCP port:

|**Server or Application Context**|**TCP Port**|
|---|---|
|Release Management Server|1000|


## See Also

[Install Team Foundation Server](../install/install-2013/install-tfs.md) 

[How to: Create a Team Foundation server farm (high availability)](../install/create-tfs-farm.md) 

[TFS upgrade requirements](../upgrade/upgrade-2013/upgrade-2013-requirements.md) 

[How to: Install Team Foundation Proxy and set up a remote site](../install/install-proxy-setup-remote.md) 

[Install Release Management for Visual Studio 2013](https://msdn.microsoft.com/en-us/library/dn593700%28v=vs.120%29.aspx) 
