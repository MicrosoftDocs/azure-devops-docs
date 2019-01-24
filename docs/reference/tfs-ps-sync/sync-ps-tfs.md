---
title: Synchronize TFS-PS integration, third-party support 
titleSuffix: TFS    
description: Synchronize work items in TFS with tasks in Project Server using a third-party solution 
ms.technology: devops-agile   
ms.prod: devops 
ms.assetid: 0CDB65B6-FA2D-41D1-8E1E-41E38F235762  
toc: show
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: overview
ms.date: 09/19/2017  
---

# Synchronize TFS with Project Server, third-party support  

<b>TFS 2017 | [TFS 2015 | TFS 2013](synchronize-tfs-project-server.md)</b>

> [!IMPORTANT]  
> TFS 2017 and later versions no longer support native integration with Office Project Server. If you're working with an on-premises TFS 2015 or TFS 2013, see [Synchronize TFS with Project Server](synchronize-tfs-project-server.md).

If you are on a prior version of Team Foundation Server with the native integration installed and configured, the native integration will no longer work
once you upgrade to TFS 2017 or later version.

For more information on why we no longer support this integration, please read this blog post, [Microsoft discontinuing Project Server/TFS Integration. Partner to provide solution](http://go.microsoft.com/fwlink/?LinkID=823693).

## Synchronization support for TFS 2017 and Project Server

If you are on TFS 2017 and want to integrate with Microsoft Project Server, you can do so by working with one of the following partners and their solutions.

<br/>
<a id="Project-Connect-from-Tivitie" />

![Tivitie](_img/tivitie-Blue2.png)

## [Project Connect from Tivitie](http://www.tivitie.com/projectconnect)

Keep your agile teams working in Azure DevOps Services and TFS, the tool they are accustomed to, while providing portfolio and program leaders a broad view of the project portfolio with Project Connect. A unified PPM solution bridges gaps that are impacting productivity and the bottom line. Connecting Project Online with Azure DevOps Services drives enhanced visibility & alignment - making sure the projects that the teams are working so hard on - are the right projects and deliver value to the organization.

[Project Connect](http://www.tivitie.com/projectconnect) for Azure DevOps Services offers a seamless approach to exchange critical information between development teams and project teams using Project Online and Azure DevOps Services. 

**Marketplace extension**: [Project Connect](https://marketplace.visualstudio.com/items?itemName=TVT.TVT-PjO). 

<br/>
<a id="ConnectALL-from-Go2Group" />

![Go2Group](_img/tfs-ps-sync-go2group-logo.png)

## [ConnectALL from Go2Group](https://www.go2group.com/connectall/)

ConnectALL is an application integration solution that connects multiple tools and applications, enabling a company's development and management teams to collaborate efficiently and flawlessly across multiple development platforms. Easy to buy, easy to install, and easy to use, ConnectALL meets strict enterprise governance requirements. It leverages Enterprise Service Bus (ESB) technology to achieve an enterprise-grade infrastructure with clustering, multi-tenancy architecture, multiple server support both in the cloud and on-premises, traceability, and audit trails. This type of deployment yields the highest operational efficiency and lowest ongoing maintenance efforts through a single server instance. The architecture encourages collaboration-at-scale between departments while ensuring secure communication.

The [ConnectALL integration platform](https://www.go2group.com/connectall/) offers a simple licensing model and affordable pricing for small to large installations. It is priced per application server instance, with unlimited users and unlimited projects accessing that application service.
 
ConnectALL is from Go2Group, a global provider of IT delivery solutions that help enterprises achieve businesses agility. Founded in 2002, the company provides products and services for ALM (Application Lifecycle Management), DevOps, cloud, and agile practices. It specializes in complex integration projects involving multiple platforms and multiple teams.

**Marketplace extension**: [ConnectALL](https://marketplace.visualstudio.com/items?itemName=go2group.ConnectALL). 

<br/>
<a id="Tasktop" />

![Tasktop](_img/tfs-ps-sync-tas-logo.png)

## [Tasktop](http://www.tasktop.com/product-overview)
 
Tasktop provides enterprise-grade integration between Microsoft Project Server and Azure DevOps Services and TFS, as well as to most other popular Agile, DevOps and Systems Development Lifecycle (SDLC) tools. This integration automates the flow of artifacts (such as work items and tasks) across these tools, eliminating wasted time and bottlenecks while increasing velocity, collaboration and even employee satisfaction! In addition, Tasktop can automatically collect the activity data into a central database, enabling the creation of consolidated dashboards and reports, allowing for greater project visibility and artifact traceability. 
 
[Tasktop's unique model-based integration approach](https://www.tasktop.com/product-overview) dramatically reduces the time and effort it takes to integrate tools; this is particularly important for larger organizations with many tools (and tool instances), hundreds of projects within those tools, thousands of users, and millions of work items and tasks.

**Marketplace extension**: [Tasktop Integration Hub](https://marketplace.visualstudio.com/items?itemName=tasktop.tasktop-integration-hub). 


## Remove TFS-Project Server integration for a TFS instance upgraded to TFS 2017  

When you upgrade TFS 2015 or earlier version which has the native TFS-Project Server integration configured, remnants of the integration remain. You may choose to ignore them, or you can remove them to avoid receiving error messages. See [Remove integration of TFS with Project Server](remove-tfs-ps-integration.md). 
  
 
