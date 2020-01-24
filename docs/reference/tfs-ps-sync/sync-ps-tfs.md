---
title: Synchronize TFS-PS integration, third-party support 
titleSuffix: TFS    
description: Synchronize work items in TFS with tasks in Project Server using a third-party solution 
ms.technology: devops-agile   
ms.prod: devops 
ms.assetid: 0CDB65B6-FA2D-41D1-8E1E-41E38F235762  
toc: show
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: overview
ms.date: 12/10/2019  
---

# Synchronize TFS with Project Server, third-party support  

<b>TFS 2017 | [TFS 2015 | TFS 2013](synchronize-tfs-project-server.md)</b>

> [!IMPORTANT]  
> TFS 2017 and later versions no longer support native integration with Office Project Server. If you work with on-premises TFS 2015 or TFS 2013, see [Synchronize TFS with Project Server](synchronize-tfs-project-server.md).

If you're using an earlier version of Team Foundation Server and native integration is installed and configured, native integration won't work after you upgrade to TFS 2017 or a later version.

For more information about why we no longer support this integration, read the blog post [Microsoft discontinuing Project Server/TFS Integration. Partner to provide solution](https://devblogs.microsoft.com/devops/microsoft-discontinuing-project-server-tfs-integration/).

## Synchronization support for TFS 2017 and Project Server

If you use TFS 2017 and want to integrate with Microsoft Project Server, you can do so by working with one of the following partners and their solutions.

<br/>
<a id="Project-Connect-from-Tivitie" />

![Tivitie](media/tivitie-Blue2.png)

## [Project Connect from Tivitie](http://www.tivitie.com/projectconnect)

Keep your agile teams working in Azure DevOps Services and TFS, the tool they are accustomed to, while providing portfolio and program leaders a broad view of the project portfolio with Project Connect. A unified PPM solution bridges gaps that are impacting productivity and the bottom line. Connecting Project Online with Azure DevOps Services drives enhanced visibility & alignment - making sure the projects that the teams are working so hard on - are the right projects and deliver value to the organization.

[Project Connect](http://www.tivitie.com/projectconnect) for Azure DevOps Services offers a seamless approach to exchange critical information between development teams and project teams using Project Online and Azure DevOps Services. 

**Marketplace extension**: [Project Connect](https://marketplace.visualstudio.com/items?itemName=TVT.TVT-PjO). 

<br/>
<a id="ConnectALL" />

![ConnectAll](media/connectall.png)

## [ConnectALL](https://www.connectall.com/)

ConnectALL, an Orasi software company, is dedicated to helping companies achieve higher levels of agility and velocity. [ConnectALL integration platform](https://www.connectall.com) is the company's enterprise-level application integration platform. ConnectAll helps organizations achieve effective Value Stream Management by connecting the applications used to collaborate, drive decisions, and manage artifacts that are used during the software delivery process, like ALM, Agile, and DevOps. With the ConnectALL Integration Platform, IT companies can accelerate software development and enhance collaboration. 

Teams from software development and delivery, IT, and business units across large and small enterprises worldwide use ConnectALL’s integration platform to unify people, processes, and applications from multiple ALM and DevOps providers, such as Tricentis, Cherwell, Atlassian, Micro Focus, Microsoft, IBM, Salesforce, BMC, ServiceNow, and more. ConnectALL helps companies rapidly create business value by bringing software innovation to market faster and increasing productivity through cross-team collaboration.

**Marketplace extension**: [ConnectALL](https://marketplace.visualstudio.com/items?itemName=go2group.ConnectALL). 

<br/>
<a id="Tasktop" />

![Tasktop](media/tfs-ps-sync-tas-logo.png)

## [Tasktop](https://www.tasktop.com/product-overview)
 
Tasktop provides enterprise-grade integration between Microsoft Project Server and Azure DevOps Services and TFS, as well as to most other popular Agile, DevOps and Systems Development Lifecycle (SDLC) tools. This integration automates the flow of artifacts (such as work items and tasks) across these tools, eliminating wasted time and bottlenecks while increasing velocity, collaboration and even employee satisfaction! In addition, Tasktop can automatically collect the activity data into a central database, enabling the creation of consolidated dashboards and reports, allowing for greater project visibility and artifact traceability. 
 
[Tasktop's unique model-based integration approach](https://www.tasktop.com/product-overview) dramatically reduces the time and effort it takes to integrate tools. This approach is especially important for larger organizations with many tools (and tool instances), hundreds of projects within those tools, thousands of users, and millions of work items and tasks.

**Marketplace extension**: [Tasktop Integration Hub](https://marketplace.visualstudio.com/items?itemName=tasktop.tasktop-integration-hub). 


## Remove TFS-Project Server integration for a TFS instance upgraded to TFS 2017  

When you upgrade TFS 2015 or earlier version, which has the native TFS-Project Server integration configured, remnants of the integration remain. You may choose to ignore them, or you can remove them to avoid receiving error messages. See [Remove integration of TFS with Project Server](remove-tfs-ps-integration.md). 
  
 
