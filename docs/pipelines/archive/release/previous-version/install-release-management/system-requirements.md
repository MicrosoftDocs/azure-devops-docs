---
title: System requirements for Microsoft Release Management
ms.custom: seodec18
description: Learn about the system requirements for Release Management server and client for VS 2015 and Team Foundation Server (TFS) 2015
ms.assetid: 5B39B13E-166B-48DF-B8CB-45725355F644
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 07/16/2018
monikerRange: '>= tfs-2013'
---

# System requirements for Release Management server/client for VS 2015 and TFS 2015

[!INCLUDE [previous-version-header](../../_shared/previous-version-header.md)]

Before you install Release Management Server, its client, or the Microsoft 
Deployment Agent, make sure your system meets the operating system and 
hardware requirements described in this topic.

## Release Management server

These are the software requirements for the Release Management server.

**Operating systems:**

* Windows Server 2012 R2
* Windows Server 2012
* Windows Server 2008 R2, Service Pack 1 

> [!TIP]
> _You must install Release Management server on server-class 
> operating system._
 
**Team Foundation Server (TFS)** 

Release Management is typically used with TFS to deploy builds produced by 
TFS and to synchronize users managed in TFS. Release Management can be used 
with the following versions of TFS:

* Team Foundation Server 2017
* Team Foundation Server 2015
* Team Foundation Server 2013
* Team Foundation Server 2012
* Team Foundation Server 2010

> [!NOTE]
> _TFS is not a mandatory requirement. Release Management can be 
> used in a standalone mode to deploy applications._

**SQL Server:** 

You can use the same SQL Server instance you used for TFS, 
**[install a new instance](/azure/devops/server/install/sql-server/install-sql-server)**, 
or use an instance that matches the following requirements: 

* SQL Server 2016 
* SQL Server 2014 
* SQL Server 2012
* SQL Server 2008 R2
* SQL Server 2008

These are the hardware requirements for the Release Management server.

| **Requirement** | **Minimum** | **Recommended** |
| --------------- | ----------- | --------------- |
| CPU | 1 GHz Pentium processor or equivalent | 2 GHz Pentium processor or equivalent |
| RAM | 1 GB | 2 GB |
| Hard disk | 2.2 GB (due to the .NET Framework dependency) | 3.2 GB for the first year. Your database could grow up to 1 GB per year or it could be as low as 10 MB. It depends on usage. |
| Display | 1024 x 768 high color, 16-bit colors | 1280 x 1024 high color, 32-bit | 

## Release Management client
 
These are the software requirements for the Release Management client.

**Operating systems:** 

* Windows 10
* Windows 8.1
* Windows 8
* Windows 7, Service Pack 1 
* Windows Server 2012 R2
* Windows Server 2012
* Windows Server 2008 R2, Service Pack 1 

**Team Foundation Server (TFS)** 

Release Management client can connect to the following versions of TFS:

* Team Foundation Server 2017
* Team Foundation Server 2015
* Team Foundation Server 2013
* Team Foundation Server 2012
* Team Foundation Server 2010

> [!NOTE]
> _TFS is not a mandatory requirement. Release Management Client 
> can connect to Azure Pipelines to deploy applications._

These are the hardware requirements for the Release Management client.

| **Requirement** | **Minimum** | **Recommended** |
| --------------- | ----------- | --------------- |
| CPU | 1 GHz Pentium processor or equivalent | 2 GHz Pentium processor or equivalent |
| RAM | 512 MB | 1 GB |
| Hard disk | 2.2 GB (due to the .NET Framework dependency) | Same as minimum |
| Display | 1024 x 768 high color, 16-bit colors | 1280 x 1024 high color, 32-bit | 

## Microsoft deployment agent
  
These are the software requirements for all the agents in your environment.

**Operating systems:** 

* Windows 10
* Windows 8.1
* Windows 8
* Windows 7, Service Pack 1
* Vista, Service Pack 2 and [PowerShell 2.0](https://www.microsoft.com/download/details.aspx?id=9864) 
* Windows Server 2016
* Windows Server 2012 R2
* Windows Server 2012
* Windows Server 2008 R2, Service Pack 1 
* Windows Server 2008, Service Pack 2 and [PowerShell 2.0](http://support.microsoft.com/kb/968930)

**The .NET Framework:**

* The .NET 3.5 Framework. If this is not present, we automatically install 
  the latest appropriate version such as 4.6 or higher.

These are the hardware requirements for all the agents in your environment.

| **Requirement** | **Minimum** | **Recommended** |
| --------------- | ----------- | --------------- |
| CPU | 400 MHz Pentium processor or equivalent | 1 GHz Pentium processor or equivalent |
| RAM | 256 MB | 512 MB |
| Hard disk | 2.2 GB (due to the .NET Framework dependency) | In addition to the minimum disk space required for the deployment agent, you'll also require enough disk space to deploy your application. |
| Display | 1024 x 768 high color, 16-bit colors | 1280 x 1024 high color, 32-bit | 

## Related topics

* [Overview of Release Management](../release-management-overview.md)
* [Install Release Management](../install-release-management.md)
* [Install Release Management server and client](install-server-and-client.md)
* [Install deployment agents](install-deployment-agent.md)
* [Connect Release Management to TFS](connect-to-tfs.md)
* [Manage users, groups, and permissions](../add-users-and-groups.md)
* [Manage your release](../manage-your-release.md) 
 
[!INCLUDE [wpfver-back-to-index-shared](../../_shared/wpfver-back-to-index-shared.md)]
 
[!INCLUDE [wpfver-support-shared](../../_shared/wpfver-support-shared.md)]
