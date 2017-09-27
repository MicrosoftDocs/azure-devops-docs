---
title: Configure SharePoint Integration - TFS 2017 and Earlier 
description: TFS/SharePoint Integration - Configure SharePoint Integration - TFS 2017 and Earlier 
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-reporting
ms.assetid:  
ms.manager: abjork
ms.author: greggboe
ms.date: 09/07/07
ms.topic: 
---

# Configure TFS-SharePoint integration

[!INCLUDE [temp](./_shared/about-sharepoint-deprecation.md)]

By adding one or more servers running SharePoint Products to your Team Foundation Server (TFS) deployment, you can add Web publishing and project collaboration features to Team Foundation. These features can improve communication and increase sharing ideas among users who are assigned tasks in team projects. 

The project portal for your team project provides a central location for storing documents, posting announcements, listing build information, and reporting on your team project status. To utilize the integration between Visual Studio Team Foundation Server and SharePoint Products, you must add users to one or more groups and roles in SharePoint Products, depending on the functionality required to do their jobs.

In addition, you can customize SharePoint Web applications in a number of ways to better meet the needs of your organization, including organizing Web sites in a predictable hierarchy or sharing process guidance across your organization.

To get started...

The TFS/SharePoint integration for TFS 2017 and earlier versions requires you to do the following:
* [Install the TFS Extension for SharePoint on the SharePoint server](/vsts/tfs-server/install/sharepoint/install-sharepoint?toc=/vsts/report/sharepoint-dashboards/toc.json&bc=/vsts/report/sharepoint-dashboards/breadcrumb/toc.json).
* From the TFS Management Console on TFS, [configure your TFS server to grant access to the SharePoint server](../../tfs-server/install/sharepoint/config-enterprise-app-def.md?toc=/vsts/report/sharepoint-dashboards/toc.json&bc=/vsts/report/sharepoint-dashboards/breadcrumb/toc.json).
* From the TFS Management Console on SharePoint, [configure your SharePoint server to grant access to your TFS Server](/vsts/tfs-server/admin/config-ent-sharepoint0710-dashboards?toc=/vsts/report/sharepoint-dashboards/toc.json&bc=/vsts/report/sharepoint-dashboards/breadcrumb/toc.json).
* If you plan to take advantage of Excel Charts on your SharePoint sites:
  * On SharePoint 2010, you need to [configure Office SharePoint Server](https://msdn.microsoft.com/library/ee462863%28v=vs.100%29.aspx).
  * On SharePoint 2013, you need to [configure Excel Services](../../tfs-server/install/sharepoint/install-sharepoint.md).


The following topics should be sufficient to help you through the general process of integrating SharePoint Products with TFS, but other resources might help you understand the specific steps that your deployment might require. For the most recent information, see the following forum post on the Microsoft Web site: [SharePoint Integration with Team Foundation Server - Important Information](http://go.microsoft.com/fwlink/?LinkId=185224).

- [Interactions Between SharePoint Products and Team Foundation Server](https://msdn.microsoft.com/library/ms253177.aspx): Describes how Team Foundation Server and SharePoint Products interact at a technical and conceptual level, and provides links to more information.
- [Connecting to a Server That Is Running SharePoint Products](https://msdn.microsoft.com/library/ms253085.aspx): Describes the various sites configured by Team Foundation Server on SharePoint Products as well as the default sites within SharePoint Products.
- [Roles in SharePoint Products](https://msdn.microsoft.com/library/ms252445.aspx): Describes the various default roles available in SharePoint Products.
- [Managing SharePoint Sites](https://msdn.microsoft.com/library/ms252503.aspx): Describes various administrative tasks for SharePoint Products, including how to create a SharePoint Web application and site collection for use with Team Foundation Server.
- [Extensions for SharePoint Products](https://msdn.microsoft.com/library/bb552177.aspx): Describes the templates that must be installed for SharePoint Products if it is not installed on the same server that is running the application-tier services for Team Foundation.
- [Upgrading SharePoint Products for Team Foundation Server](https://msdn.microsoft.com/library/bb909691.aspx)Describes the options for upgrading the version of SharePoint Products that supports your deployment of Team Foundation Server.
- [Add Integration with SharePoint Products to a Deployment of Team Foundation Server](https://msdn.microsoft.com/library/ee462861.aspx): Describes how to add SharePoint Products to a deployment of Team Foundation Server in an environment with full trust and little to no restrictions on permissions granted between the two programs.
- [Integrate Team Foundation Server with SharePoint Products Without Administrative Permissions](https://msdn.microsoft.com/library/ee462864.aspx): Describes how to add SharePoint Products to a deployment of Team Foundation Server in an environment that has restricted access or other security requirements and restrictions on what permissions can be granted between the two programs.
- [Configure Settings for Dashboard Compatibility](https://msdn.microsoft.com/library/ee462863.aspx): Describes how to configure a deployment of Microsoft Office SharePoint Server 2007 to support reports and dashboards in Team Foundation Server.



