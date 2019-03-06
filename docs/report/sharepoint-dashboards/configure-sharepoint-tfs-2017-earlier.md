---
title: Configure SharePoint integration 
titleSuffix: TFS
description: Configure TFS/SharePoint Integration for TFS 2017 and earlier versions
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual 
ms.manager: jillfra
ms.reviewer: greggboe
ms.author: kaelli
author: KathrynEE
ms.date: 11/16/2017
---

# Configure TFS-SharePoint integration

[!INCLUDE [temp](./_shared/about-sharepoint-deprecation.md)]

By adding one or more servers running SharePoint Products to your Team Foundation Server (TFS) deployment, you can add Web publishing and project collaboration features to Team Foundation. These features can improve communication and increase sharing ideas among users who are assigned tasks in team projects. 

> [!NOTE] 
> By upgrading to TFS 2018 or later versions, you may find that the built-in dashboards and wiki will provide many of the features that SharePoint provides.  

The project portal for your team project provides a central location for storing documents, posting announcements, listing build information, and reporting on your team project status. To utilize the integration between Visual Studio Team Foundation Server and SharePoint Products, you must add users to one or more groups and roles in SharePoint Products, depending on the functionality required to do their jobs.

In addition, you can customize SharePoint Web applications in a number of ways to better meet the needs of your organization, including organizing Web sites in a predictable hierarchy or sharing process guidance across your organization.

## Prerequisites

- Verify that the operating system and hardware or the existing SharePoint Products installation meet the requirements for Team Foundation Server Extensions for SharePoint Products. For details, see [Requirements and compatibility, SharePoint](/azure/devops/server/requirements?toc=/azure/devops/report/sharepoint-dashboards/toc.json&bc=/azure/devops/report/sharepoint-dashboards/breadcrumb/toc.json)
- Make sure you are a member of the following administrative security groups: 
	- **Windows Administrators** group on the computer where you install SharePoint Products and where you host its databases.
	- **Farm Administrators** group for the farm to which you are configuring a Web application and changing settings for SharePoint Products
	- **Administrators** group on the server or servers that are running the administration console for Team Foundation Server.


## Install and configure SharePoint  

0. Install all Windows updates before installing SharePoint.

0. **For SharePoint 2013**, install or verify your SharePoint environment. See [Manually Install SharePoint products](/azure/devops/server/install/sharepoint/install-sharepoint?toc=/azure/devops/report/sharepoint-dashboards/toc.json&bc=/azure/devops/report/sharepoint-dashboards/breadcrumb/toc.json).	 
	- Run the SharePoint preparation tool
	- Install and configure SharePoint
	- Run the SharePoint Configuration wizard
	- Configure Excel Services (SharePoint Server & SharePoint Server Enterprise Edition)
	- Configure Secure Store Service (SharePoint Server & SharePoint Server Enterprise Edition).

0. **For SharePoint 2010**, see [Install and Configure SharePoint Integration on a Stand-alone Server](https://technet.microsoft.com/library/bb677368(v=sql.105).aspx).  

0.	**For integration with an existing SharePoint server**, verify that your SharePoint Products installation meets the following guidelines. For details, see [Verify SharePoint products for Team Foundation Server](/azure/devops/server/install/sharepoint/verify-sharepoint).  
	- The administration site and default website are running, and other computers on the network can access them
	- SharePoint uses NTLM, the recommended authentication (Basic authentication is not supported by Team Foundation Server extensions for SharePoint Products)
	- If you are using a supported Enterprise edition of SharePoint Server, you must configure settings for dashboard compatibility.

0. **For multiple SharePoint servers**, add the service account for TFS to the Farm Administrators group on the SharePoint administration site. See [Set up remote SharePoint Products for Team Foundation Server](/azure/devops/server/install/sharepoint/setup-remote-sharepoint?toc=/azure/devops/report/sharepoint-dashboards/toc.json&bc=/azure/devops/report/sharepoint-dashboards/breadcrumb/toc.json).

0. Configure your SharePoint server to integrate with TFS. 

	From the TFS Administration Console on your SharePoint Server, configure your TFS server to grant access to the SharePoint server by installing Team Foundation Server Extensions for SharePoint Products. For details, see [Install Team Foundation Server](/azure/devops/server/install/install-2013/install-tfs?toc=/azure/devops/report/sharepoint-dashboards/toc.json&bc=/azure/devops/report/sharepoint-dashboards/breadcrumb/toc.json).

	If you have multiple servers in a web farm, you must install and configure the extensions on every application-tier and web-tier server in the farm. This includes all servers hosting web applications and the Central Administration web site. After you install the extensions, you must perform the configuration procedure on each server. 

	Also, the Team Foundation Server Extensions for SharePoint must be at the same version level as your TFS version. 

0. If you're using a supported **Enterprise edition of SharePoint Server**, [configure the enterprise application definition for TFS](/azure/devops/server/install/sharepoint/config-enterprise-app-def?toc=/azure/devops/report/sharepoint-dashboards/toc.json&bc=/azure/devops/report/sharepoint-dashboards/breadcrumb/toc.json).

	**For the Enterprise Editions of SharePoint Server 2010**: From the TFS Management Console on SharePoint, [configure your SharePoint server to grant access to your TFS Server](/azure/devops/server/admin/config-ent-sharepoint0710-dashboards?toc=/azure/devops/report/sharepoint-dashboards/toc.json&bc=/azure/devops/report/sharepoint-dashboards/breadcrumb/toc.json).

0. If you plan to take advantage of Excel Charts on your SharePoint sites:
  * On **SharePoint 2013**, you need to [Manually Install SharePoint products for Team Foundation Server, Configure Excel Services](/azure/devops/server/install/sharepoint/install-sharepoint#configure-excel-services-sharepoint-server-only).
  * On **SharePoint 2010**, [Configure Settings for Dashboard Compatibility, Configure Office SharePoint Server](https://msdn.microsoft.com/library/ee462863%28v=vs.100%29.aspx).


## Add users and administrators to a SharePoint site

- Grant users permissions to access the SharePoint site. For details, see [Set permissions to access a SharePoint project portal](../../organizations/security/set-sharepoint-permissions.md?toc=/azure/devops/report/sharepoint-dashboards/toc.json&bc=/azure/devops/report/sharepoint-dashboards/breadcrumb/toc.json).



<!---

I RECOMMEND WE REMOVE THIS SECTION AS IT POINTS TO 2010 CONTENT. 

This link - http://go.microsoft.com/fwlink/?LinkId=185224 - goes to a post that contains links to content that are 7 years old. Not sure how useful that is. 


The following topics should be sufficient to help you through the general process of integrating SharePoint Products with TFS, but other resources might help you understand the specific steps that your deployment might require. For the most recent information, see the following forum post on the Microsoft Web site: [SharePoint Integration with Team Foundation Server - Important Information](http://go.microsoft.com/fwlink/?LinkId=185224).



## Archived content


- [Connecting to a Server That Is Running SharePoint Products](https://msdn.microsoft.com/library/ms253085.aspx): Describes the various sites configured by Team Foundation Server on SharePoint Products as well as the default sites within SharePoint Products.
- [Roles in SharePoint Products](https://msdn.microsoft.com/library/ms252445.aspx): Describes the various default roles available in SharePoint Products.
- [Managing SharePoint Sites](https://msdn.microsoft.com/library/ms252503.aspx): Describes various administrative tasks for SharePoint Products, including how to create a SharePoint Web application and site collection for use with Team Foundation Server.
- [Extensions for SharePoint Products](https://msdn.microsoft.com/library/bb552177.aspx): Describes the templates that must be installed for SharePoint Products if it is not installed on the same server that is running the application-tier services for Team Foundation.
- [Add Integration with SharePoint Products to a Deployment of Team Foundation Server](https://msdn.microsoft.com/library/ee462861.aspx): Describes how to add SharePoint Products to a deployment of Team Foundation Server in an environment with full trust and little to no restrictions on permissions granted between the two programs.
- [Interactions Between SharePoint Products and Team Foundation Server](https://msdn.microsoft.com/library/ms253177.aspx): Describes how Team Foundation Server and SharePoint Products interact at a technical and conceptual level, and provides links to more information.
- [Configure Settings for Dashboard Compatibility](https://msdn.microsoft.com/library/ee462863.aspx): Describes how to configure a deployment of Microsoft Office SharePoint Server 2007 to support reports and dashboards in Team Foundation Server.
- [Integrate Team Foundation Server with SharePoint Products Without Administrative Permissions](https://msdn.microsoft.com/library/ee462864.aspx): Describes how to add SharePoint Products to a deployment of Team Foundation Server in an environment that has restricted access or other security requirements and restrictions on what permissions can be granted between the two programs.
- [Upgrading SharePoint Products for Team Foundation Server](https://msdn.microsoft.com/library/bb909691.aspx)Describes the options for upgrading the version of SharePoint Products that supports your deployment of Team Foundation Server.

-->



## SharePoint resources

- [Install and configure SharePoint 2013](https://technet.microsoft.com/library/cc262957.aspx)
- [SharePoint Foundation 2010](https://technet.microsoft.com/library/cc288070(v=office.14))
- [SharePoint Server 2010](https://technet.microsoft.com/library/cc303422(v=office.14))
- [Install and manage apps for SharePoint Server](https://technet.microsoft.com/library/fp161232(v=office.16).aspx)


## Related notes

- [Add SharePoint products to your Team Foundation Service deployment](/azure/devops/server/admin/modify-remove-access-shareport-tfs)  
- [Modify or Remove Access Between a SharePoint Web Application and Team Foundation Server](/azure/devops/server/admin/modify-remove-access-shareport-tfs) 
