---
title: Understand differences between Azure DevOps Services and TFS  
description: Understand the fundamental differences between Azure DevOps Services & Team Foundation Server 
ms.prod: devops  
ms.technology: devops-new-user
ms.assetid: 458FAFD1-98B0-4B74-B8E7-F2C73D4EED6B
ms.manager: douge
ms.author: kaelli
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 08/02/2018
---

# Understand differences between Azure DevOps Services and TFS

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Azure DevOps Services and Team Foundation Server (TFS) both provide an integrated, collaborative environment that supports Git, continuous integration, and Agile tools for planning and tracking work.  

Azure DevOps Services is the cloud offering that provides a scalable, reliable, and globally available hosted service. It is backed by a 99.9% SLA, monitored by our 24-7 operations team, and available in local data centers around the world. 

Team Foundation Server is the on-premises offering built on a SQL Server back end. Enterprises typically choose on-premises TFS when they need their data to stay within your network, or they want access to SharePoint sites and SQL Server reporting services that integrate with TFS data and tools.  

While both offerings provide the same [essential services](services.md), compared with TFS, Azure DevOps Services provides organizations the following added benefits:   

- Simplified server management
- Immediate access to the latest and greatest features
- Improved connectivity with remote sites
- A transition from capital expenditures (servers and the like) to operational expenditures (subscriptions).

Use this topic to determine which offering&mdash;cloud or on-premises&mdash;meets your organizational needs by considering these important areas:

- Fundamental differences between TFS and Azure DevOps Services  
- Differences in specific feature areas between TFS and Azure DevOps Services 

For each area, we'll discuss both the current state of the world and the expected impacts from short and medium-term plans. Check back here for updates, because this information may change frequently.

If you're on TFS and considering moving to VSTS, read [Migrate data from TFS to Azure DevOps Services](../articles/migrate-to-vsts-from-tfs.md) to understand your options.

## Fundamental differences between TFS and Azure DevOps Services

When you plan a move, there are a few fundamental differences between TFS and Azure DevOps Services that are important 
for you to understand.

<a name="scope-scale-data"></a>

### Scope and scale data

TFS has three options for scoping and scaling data&mdash;deployments, 
team project collections, and team projects. In the simplest case, deployments are just servers. 
Deployments can also be more complicated, however, including everything from a two-server deployment 
where SQL is split out on a separate machine to high availability farms comprising lots of servers. 
Team project collections serve as containers for security and administration in addition to serving as 
physical database boundaries. They are also used to group related team projects. Finally, team projects 
are used to encapsulate the assets of individual software projects, including source code, work items, 
and so on. Learn more about these concepts at 
[Manage team project collections](/tfs/server/admin/manage-team-project-collections). 

Azure DevOps Services is slightly different. It currently only has two options for scoping and scaling 
data&mdash;organizations and team projects. Organizations in Azure DevOps Services get their own URLs (for example, ```https://contoso.visualstudio.com```) 
and always contain exactly one team project collection. Organizations can contain multiple team projects, like 
TFS team project collections.

We are planning a third option for scoping and scaling data in Azure DevOps Services&mdash;a new entity called an Enterprise. Rather than adding support for multiple team project collections within an organization, multiple
organizations could be grouped within an organization. Additionally, we will merge organizations and their single
team project collections into a single entity. The organization will be similar to the TFS deployment,
and the organization will be similar to the TFS collection.

To be ready to use the organization entity, we recommend that you create organizations in Azure DevOps Services whenever you would
have created collections in TFS. In the short term, having your work split across multiple organizations can cause some 
problems, but we plan to address these when the organization entity is introduced. In particular:

* You purchase Azure DevOps Services users per organization, meaning that paid users only have access to the Azure DevOps Services organization in which the payment is made. If you have users who need access to multiple organizations, Visual Studio subscriptions can be an attractive option, since subscribers can be added to any number of Azure DevOps Services organizations at no charge. We arealso considering other ways we might make access to multiple organizations grouped into an organization available.

* You currently have to administer organizations one at a time, which can be cumbersome when you have many organizations. We're working to support enterprise-wide policies.

### Authentication

With TFS, you typically connect to an intranet server (for example, ```https://tfs.corp.contoso.com:8080/tfs```). 
You authenticate with Windows Authentication and your Active Directory (AD) domain credentials. Usually this 
process is transparent, and you'll never see any kind of sign-in experience.

With Azure DevOps Services, you connect over the public internet (for example, ```https://contoso.visualstudio.com```). You'll either 
authenticate with  [Microsoft Organization](http://www.microsoft.com/account) credentials or with
[Azure Active Directory (Azure AD)](https://docs.microsoft.com/azure/active-directory/active-directory-whatis)  
credentials, depending on your Azure DevOps Services organization setup. You can also set up Azure AD 
to require features like multi-factor-authentication, IP address restrictions, and so on.

We recommend that organizations configure their Azure DevOps Services organizations to use Azure AD rather than 
Microsoft Accounts. This provides a better experience in many scenarios and more options for enhanced 
security.

### Users and groups

In TFS, you provide users access to deployments by adding Active Directory (AD) groups to various TFS groups 
(for example the Project Contributors group for an individual team project). The AD group memberships are kept in sync. 
As users are added and removed in AD they also gain and lose access to TFS. 

In Azure DevOps Services, you can use a similar mechanism to 
[provide access to groups of users](../organizations/accounts/manage-azure-active-directory-groups-vsts.md) 
by adding Azure AD groups to Azure DevOps Services groups. If you use Microsoft Accounts instead of Azure AD, you will have to
[add users](../organizations/accounts/add-organization-users-from-user-hub.md) one at a time. 

### Manage user access

In TFS and Azure DevOps Services, you can give free access to work item features to an unlimited number of 
Stakeholders. Also, unlimited Visual Studio subscribers can have access to all Basic features at
no additional charge. You only need to pay for other users who need access.

In TFS, all use is on the honor system. To set access levels for users based on their licenses, use specify their
[access levels](../organizations/security/change-access-levels.md)
administration page. For example, assign unlicensed users Stakeholder access only.
Users with a TFS Client Access License (CAL) can have Basic access. 
Visual Studio subscribers can have either Basic or Advanced access, based on their subscriptions.
Note that TFS does not attempt to verify these licenses or enforce compliance. 

In Azure DevOps Services, you must 
[assign an access level](../organizations/accounts/add-organization-users-from-user-hub.md)
to each user in your organization's Users hub. Azure DevOps Services validates Visual Studio subscribers as 
they sign in. You can assign Basic access for free to five users without Visual Studio subscriptions. 
To give Basic access to more users, you'll need to set up billing for your organization and
[pay for more users](../organizations/billing/buy-basic-access-add-users.md). 
Otherwise, all other users get Stakeholder access.

If you use Azure AD groups to provide access to groups of users, Azure DevOps Services will assign appropriate 
access levels to them automatically when they sign in for the first time. For Azure DevOps Services organizations configured 
to use Microsoft Accounts for sign-in, you will have to assign access levels to each user explicitly.

### Security and data protection

Many organizations want to know more about data protection when they consider moving to the cloud. Microsoft is committed to ensuring 
that Azure DevOps Services projects stay safe and secure. We have technical features and business processes in place 
to deliver on that commitment. You can also take steps to secure your data. Learn more in our
[Data Protection Overview white paper](../articles/team-services-security-whitepaper.md).

## Key feature differences between Azure DevOps Services and TFS

Even though Azure DevOps Services is a hosted version of TFS, there are some differences between the features available 
in the two products. Some TFS features are not supported in Azure DevOps Services at all&mdash;for example, Azure DevOps Services does not support integration with 
SharePoint or Project Server.  

### Process customization

You customize the work tracking experience in two different ways depending on the supported process model: 

- For Azure DevOps Services, you use the **Inheritance** process model which supports WYSIWYG customization    
- For TFS, you use the **On-premises XML** process model which supports customization through import/export of XML definition files for work tracking objects   

While the **On-premises XML** process model option is quite powerful, it also 
can cause a number of problems. Chief among these is that processes for existing team projects do not update automatically
when TFS is upgraded. 
 
For example, TFS 2013 introduced several new features which depended on new work item types and other process template
changes. When you upgrade from TFS 2012 to TFS 2013, each team project collection gets new versions of each of the
"in the box" process templates which include these changes. However, these changes are not automatically incorporated
in existing team projects. Instead, after you finish upgrading you have to include them in each team project by using
the [Configure Features](../reference/configure-features-after-upgrade.md)
wizard or a more manual process.

To avoid these issues in Azure DevOps Services, custom process templates and **witadmin.exe** have always been disabled (only export functions are enabled). This has 
enabled us to automatically update all team projects with each Azure DevOps Services upgrade. Meanwhile, the product team has been 
working hard to make customizing processes possible in ways that we can support easily and continuously. These first 
of these changes was recently introduced, and more changes are on the way.

With these new Azure DevOps Services process customization capabilities, you can make customizations directly within the 
Azure DevOps Services Web UI. If you want to customize your processes programmatically, you can also make customizations
through REST endpoints. When you customize team projects in this way, those projects will continue to update
automatically when we release new versions of their base processes with Azure DevOps Services updgrades. 

To learn more, see [Customize your work tracking experience](../reference/customize-work.md).

Over time we will support more and more types of process customizations with this new approach. If you need
process customization features which are not yet available and cannot wait for them, a second option for process
customization in Azure DevOps Services is available, referred to as **Hosted XML** process model, and in private preview and by request only. 

With this option, you 
[import customized process templates](../organizations/settings/work/import-process/import-process.md).
This option is quite similar to using custom process templates in TFS, except that:

* [Restrictions](../organizations/settings/work/import-process/import-process.md) exist in the customizations 
that can be imported into Azure DevOps Services. 

* Process templates are associated with all team projects created from them, and changes made to the process are reflected 
in each team project.

Team projects in organizations which participate in this process customization private preview will not update automatically with 
Azure DevOps Services upgrades. 

### Reporting

Both TFS and Azure DevOps Services have a variety of tools to give you insight into the progress as well as the quality of
your software projects. These include:

* [Dashboards](../report/dashboards/dashboards.md) and lightweight 
[charts](../report/dashboards/charts.md), available in both TFS and Azure DevOps Services. These are 
very easy to set up and use.

In addition, with Azure DevOps Services you have access to the following services:
* [Analytics service](../report/analytics/what-is-analytics.md) and [Analytics widgets](../report/analytics/analytics-widgets-vsts.md). The Analytics service is optimized for fast read-access and server-based aggregations.  
* [PowerBI integration](../report/powerbi/overview.md) which supports getting Analytics data into Power Bi reports, providing a nice combination of simplicity and power. 
* [OData support](../report/extend-analytics/index.md) which allows you to directly query the Analytics Service from a supported browser and then use the returned JSON data as you desire. Enterprise organizations can generate queries that span multiple team projects or their entire Azure DevOps Services organization.

We plan to make these services available in TFS in a future release.

The following reports and dashboards are only available in TFS: 
- [Excel reports](../report/excel/excel-reports.md) 
- [SQL Server Reporting Services (SSRS) reports](../report/sql-reports/reporting-services-reports.md)  
- [SharePoint dashboards](../report/sharepoint-dashboards/project-portal-dashboards.md) 

And, available today only in Azure DevOps Services:
* A [PowerBI connector](../report/powerbi/overview.md) which provides a nice combination of simplicity and power. We plan to make it available in TFS in a future release.
* [Analytics](https://docs.microsoft.com/en-us/vsts/report/analytics/) which is the reporting platform for Azure DevOps Services, which answer quantitative questions about the past or present state of your projects. This service provides a concise data model over the Azure DevOps Services suite. Built for reporting, the Analytics Service is optimized for fast read-access and server-based aggregations. We plan to make it available in TFS in a future release.

## Related articles
 
- [Key concepts](concepts.md)  
- [Essential services](services.md)
- [Client-server tools](tools.md)
- [Software development roles](roles.md)
- [Pricing - Azure DevOps Services](https://visualstudio.microsoft.com/team-services/pricing/)
- [Pricing - TFS](https://visualstudio.microsoft.com/team-services/tfs-pricing/)

<!---
*(c) 2016 Microsoft Corporation. All rights reserved. This document is
provided "as-is." Information and views expressed in this document,
including URL and other Internet Web site references, may change without
notice. You bear the risk of using it.*

*This document does not provide you with any legal rights to any
intellectual property in any Microsoft product. You may copy and use
this document for your internal, reference purposes.*
--> 
