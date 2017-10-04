---
title: Requirements Changes for TFS 2017, Team Foundation Server Setup, Upgrade, and Administration
description: Describes changes to requirements between TFS 2015 and TFS 2017.
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 54e497b6-ac9b-42ae-bc35-8b270f8f88ad
toc: show
ms.manager: douge
ms.author: douge
ms.date: 09/26/2016
---

# Changes to requirements for TFS 2017

**TFS 2017**

There are a number of changes coming to Team Foundation Server
requirements in TFS 2017. Details on requirements across versions 
of TFS can be found in 
[requirements and compatibility](requirements.md). This document
is intended to help current users of TFS 2015 who are upgrading
to TFS 2017.

## Operating systems

TFS 2017 will not support 32-bit OSes. There has not been a
32-bit server OS since Windows Server 2008, and we do not recommend installing
TFS on client OSes except for evaluation purposes or personal use. Despite this, 
a relatively large percentage of TFS installations were on 32-bit OSes as recently
as TFS 2013. In TFS 2015, this percentage dropped low enough that we felt the 
time was right to drop support for installing TFS on 32-bit OSes with TFS 2017.

## SQL Server

TFS 2017 will no longer support SQL 2012, but will continue to support SQL 2014.
We typically strive to support at least one "overlapping" version of SQL between
major releases of TFS in order to make it easier to upgrade TFS deployments
incrementally. 


## Project Server

TFS 2017 and later versions will no longer support native integration with Microsoft Project Server.  Instead, if you are on TFS 2017 and want to integrate with Microsoft Project Server, you can do so using the [solution that our partner Tivitie provides](../work/tfs-ps-sync/sync-ps-tfs.md). 

For more information on why we no longer support this integration, please check out [this blog post](http://go.microsoft.com/fwlink/?LinkID=823693). 

When you upgrade TFS 2015 or earlier version which has the native TFS-Project Server integration configured, remnants of the integration remain. You may choose to ignore them, or you can remove them to avoid receiving error messages. See [Remove integration of TFS with Project Server](../work/tfs-ps-sync/remove-tfs-ps-integration.md). 



## Hardware requirements

There are no major changes in hardware requirements for TFS 2017 if your usage
remains consistent. There are some new features in TFS 2017, however, which
may impact performance and requirements if you choose to use them. Code
Search, for example, can introduce significant new memory and CPU consumption
to your TFS deployment, and if your deployment is sensitive to additional load
you may wish to use a dedicated computer for Code Search. For more details, see
[hardware requirements for Code Search](../search/code/administration.md#hardware-recommendations).


## Browsers

TFS 2017 will no longer support Internet Explorer 9 or 10. We recommend upgrading to 
Internet Explorer 11, or using the most recent version of Edge, Chrome, or Firefox.