---
title: Changes to required for TFS 2018
titleSuffix: TFS 2018
description: Describes changes to requirements between TFS 2017 and TFS 2018 RC1 that impact Setup, Upgrade, and Administration
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 67751d35-7c53-454c-8b6d-12e95ffd853d
toc: show
ms.manager: douge
ms.author: aaronha
ms.date: 07/11/2017
---

# Changes to requirements for TFS 2018

**TFS 2018**

There are a number of changes coming to Team Foundation Server
requirements in TFS 2018. Details on requirements across versions 
of TFS can be found in 
[requirements and compatibility](requirements.md). This document
is intended to help current users of TFS 2017 who are upgrading
to TFS 2018.

## Operating systems

TFS 2018 will not support Windows Server 2008 R2, Windows 7, Windows 8.1, or 
Windows 10 Home edition. We have never recommended installing TFS on client 
OSes except for evaluation purposes or personal use. Even for these use cases,
we now recommend creating a free VSTS account. We will
continue to support Windows 10 Professional and Enterprise editions.

## SQL Server

TFS 2018 will no longer support SQL 2014, but will continue to support SQL 2016
and will add support for SQL 2017. We typically strive to support at least one 
"overlapping" version of SQL between major releases of TFS in order to make it 
easier to upgrade TFS deployments incrementally. 

## SharePoint

TFS 2018 discontinues support for the TFS Extension for SharePoint. 
For more information, go here: 
[https://go.microsoft.com/fwlink/?linkid=852977](https://go.microsoft.com/fwlink/?linkid=852977).

## Build compatibility

TFS 2018 will no longer support the XAML build system. 
For more information, go here:
[https://blogs.msdn.microsoft.com/bharry/2017/05/30/evolving-tfsteam-services-build-automation-capabilities/](https://blogs.msdn.microsoft.com/bharry/2017/05/30/evolving-tfsteam-services-build-automation-capabilities/).