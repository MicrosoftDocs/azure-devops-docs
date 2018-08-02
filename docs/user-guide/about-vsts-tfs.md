---
title: Understand differences between VSTS and TFS  
description: Understand the fundamental differences between Visual Studio Team Services & Team Foundation Server 
ms.prod: devops  
ms.technology: devops-new-user
ms.assetid: 458FAFD1-98B0-4B74-B8E7-F2C73D4EED6B
ms.manager: douge
ms.author: kaelli
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 06/22/2017
---

# Understand differences between VSTS and TFS

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

VSTS and Team Foundation Server (TFS) both provide an integrated, collaborative environment that supports Git, continuous integration, and Agile tools for planning and tracking work.  

VSTS is the cloud offering that provides a scalable, reliable, and globally available hosted service. It is backed by a 99.9% SLA, monitored by our 24-7 operations team, and available in local data centers around the world. 

Team Foundation Server is the on-premises offering built on a SQL Server backend. Organizations typically choose on-premises TFS when they need their data to stay within your network, or they want access to SharePoint sites and SQL Server reporting services that integrate with TFS data and tools.  

While both offerings provide the same [essential services](services.md), compared with TFS, VSTS provides organizations these added benefits:   

- Simplified server management
- Immediate access to the latest and greatest features
- Improved connectivity with remote sites
- A transition from capital expenditures (servers and the like) to operational expenditures (subscriptions).

Use this topic to determine which offering&mdash;cloud or on-premises&mdash;meets your organizational needs by considering these important areas:

- Fundamental differences between TFS and VSTS  
- Differences in specific feature areas between TFS and VSTS 

For each area, we'll discuss both the current state of the world and the expected impacts from short and medium-term plans. Check back here for updates, because this information may change frequently.

If you're on TFS and considering moving to VSTS, read [Migrate data from TFS to VSTS](../articles/migrate-to-vsts-from-tfs.md) to understand your options.

## Fundamental differences between TFS and VSTS

When you plan a move, there are a few fundamental differences between TFS and VSTS that are important
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

VSTS is slightly different. It currently only has two options for scoping and scaling 
data&mdash;accounts and team projects. Accounts in VSTS get their own URLs (for example, ```https://contoso.visualstudio.com```) 
and always contain exactly one team project collection. Accounts can contain multiple team projects, like 
TFS team project collections.

We are planning a third option for scoping and scaling data in VSTS&mdash;a new entity called an 
Organization. Rather than adding support for multiple team project collections within an account, multiple
accounts could be grouped within an organization. Additionally, we will merge accounts and their single
team project collections into a single entity. The organization will be similar to the TFS deployment,
and the account will be similar to the TFS collection.

To be ready to use the organization entity, we recommend that you create accounts in VSTS whenever you would
have created collections in TFS. In the short term, having your work split across multiple accounts can cause some 
problems, but we plan to address these when the organization entity is introduced. In particular:

* You purchase VSTS users per account, meaning that paid users only have access to the VSTS account 
in which the payment is made. If you have users who need access to multiple accounts, Visual Studio subscriptions can
be an attractive option, since subscribers can be added to any number of VSTS accounts at no charge. We are
also considering other ways we might make access to multiple accounts grouped into an organization available.

* You currently have to administer accounts one at a time, which can be cumbersome when you have many accounts. We're
working to support organization-wide policies.

### Authentication

With TFS, you typically connect to an intranet server (for example, ```https://tfs.corp.contoso.com:8080/tfs```). 
You authenticate with Windows Authentication and your Active Directory (AD) domain credentials. Usually this 
process is transparent, and you'll never see any kind of sign-in experience.

With VSTS, you connect over the public internet (for example, ```https://contoso.visualstudio.com```). You'll either 
authenticate with  [Microsoft Account](http://www.microsoft.com/account) credentials or with
[Azure Active Directory (Azure AD)](https://docs.microsoft.com/azure/active-directory/active-directory-whatis) account 
credentials, depending on your VSTS organization setup. You can also set up Azure AD 
to require features like multi-factor-authentication, IP address restrictions, and so on.

We recommend that organizations configure their VSTS organizations to use Azure AD rather than 
Microsoft Accounts. This provides a better experience in many scenarios and more options for enhanced 
security.

### Users and groups

In TFS, you provide users access to deployments by adding Active Directory (AD) groups to various TFS groups 
(for example the Project Contributors group for an individual team project). The AD group memberships are kept in sync. 
As users are added and removed in AD they also gain and lose access to TFS. 

In VSTS, you can use a similar mechanism to 
[provide access to groups of users](../organizations/accounts/manage-azure-active-directory-groups-vsts.md) 
by adding Azure AD groups to TFS groups. If you use Microsoft Accounts instead of Azure AD, you will have to
[add users](../organizations/accounts/add-organization-users-from-user-hub.md) one at a time. 

### Manage user access

In TFS and VSTS, you can give free access to work item features to an unlimited number of 
Stakeholders. Also, unlimited Visual Studio subscribers can have access to all Basic features at
no additional charge. You only need to pay for other users who need access.

In TFS, all use is on the honor system. To set access levels for users based on their licenses, use specify their
[access levels](../organizations/security/change-access-levels.md)
administration page. For example, assign unlicensed users Stakeholder access only.
Users with a TFS Client Access License (CAL) can have Basic access. 
Visual Studio subscribers can have either Basic or Advanced access, based on their subscriptions.
Note that TFS does not attempt to verify these licenses or enforce compliance. 

In VSTS, you must 
[assign an access level](../organizations/accounts/add-organization-users-from-user-hub.md)
to each user in your organization's Users hub. VSTS validates Visual Studio subscribers as 
they sign in. You can assign Basic access for free to five users without Visual Studio subscriptions. 
To give Basic access to more users, you'll need to set up billing for your organization and
[pay for more users](../organizations/billing/buy-basic-access-add-users.md). 
Otherwise, all other users get Stakeholder access.

If you use Azure AD groups to provide access to groups of users, VSTS will assign appropriate 
access levels to them automatically when they sign in for the first time. For VSTS organizations configured 
to use Microsoft Accounts for sign-in, you will have to assign access levels to each user explicitly.

### Security and data protection

Many organizations want to know more about data protection when they consider moving to the cloud. Microsoft is committed to ensuring 
that VSTS projects stay safe and secure. We have technical features and business processes in place 
to deliver on that commitment. You can also take steps to secure your data. Learn more in our
[Data Protection Overview whitepaper](../articles/team-services-security-whitepaper.md).

## Key feature differences between VSTS and TFS

Even though VSTS is a hosted version of TFS, there are some differences between the features available 
in the two products. Some TFS features are not supported in VSTS at all&mdash;for example, VSTS does not support integration with 
SharePoint or Project Server.  

### Process customization

You customize the work tracking experience in two different ways depending on the supported process model: 

>- For VSTS, you use the **Inheritance** process model which supports WYSIWYG customization    
>- For TFS, you use the **On-premises XML** process model which supports customization through import/export of XML definition files for work tracking objects   

While the **On-premises XML** process model option is quite powerful, it also 
can cause a number of problems. Chief among these is that processes for existing team projects do not update automatically
when TFS is upgraded. 
 
For example, TFS 2013 introduced several new features which depended on new work item types and other process template
changes. When you upgrade from TFS 2012 to TFS 2013, each team project collection gets new versions of each of the
"in the box" process templates which include these changes. However, these changes are not automatically incorporated
in existing team projects. Instead, after you finish upgrading you have to include them in each team project by using
the [Configure Features](../work/customize/configure-features-after-upgrade.md)
wizard or a more manual process.

To avoid these issues in VSTS, custom process templates and **witadmin.exe** have always been disabled (only export functions are enabled). This has 
enabled us to automatically update all team projects with each VSTS upgrade. Meanwhile, the product team has been 
working hard to make customizing processes possible in ways that we can support easily and continuously. These first 
of these changes was recently introduced, and more changes are on the way.

With these new VSTS process customization capabilities, you can make customizations directly within the 
VSTS Web UI. If you want to customize your processes programmatically, you can also make customizations
through REST endpoints. When you customize team projects in this way, those projects will continue to update
automatically when we release new versions of their base processes with VSTS upgrades. 

To learn more, see [Customize your work tracking experience](../work/customize/customize-work.md).

Over time we will support more and more types of process customizations with this new approach. If you need
process customization features which are not yet available and cannot wait for them, a second option for process
customization in VSTS is available, referred to as **Hosted XML** process model, and in private preview and by request only. 

With this option, you 
[import customized process templates](../work/customize/import-process/import-process.md).
This option is quite similar to using custom process templates in TFS, except that:

* [Restrictions](../work/customize/import-process/import-process.md) exist in the customizations 
that can be imported into VSTS. 

* Process templates are associated with all team projects created from them, and changes made to the process are reflected 
in each team project.

Team projects in organizations which participate in this process customization private preview will not update automatically with 
VSTS upgrades. 

### Reporting

Both TFS and VSTS have a variety of tools to give you insight into the progress as well as the quality of
your software projects. These include:

* [Dashboards](../report/dashboards/dashboards.md) and lightweight 
[charts](../report/dashboards/charts.md), available in both TFS and VSTS. These are 
very easy to set up and use.

In addition, with VSTS you have access to the following services:
* [Analytics service](../report/analytics/what-is-analytics.md) and [Analytics widgets](../report/analytics/analytics-widgets-vsts.md). The Analytics service is optimized for fast read-access and server-based aggregations.  
* [PowerBI integration](../report/powerbi/overview.md) which supports getting Analytics data into Power Bi reports, providing a nice combination of simplicity and power. 
* [OData support](../report/extend-analytics/index.md) which allows you to directly query the Analytics Service from a supported browser and then use the returned JSON data as you desire. Enterprise organizations can generate queries that span multiple team projects or their entire VSTS organization.

We plan to make these services available in TFS in a future release.

The following reports and dashboards are only available in TFS: 
- [Excel reports](../report/excel/excel-reports.md) 
- [SQL Server Reporting Services (SSRS) reports](../report/sql-reports/reporting-services-reports.md)  
- [SharePoint dashboards](../report/sharepoint-dashboards/project-portal-dashboards.md) 

And, available today only in VSTS:
* A [PowerBI connector](../report/powerbi/overview.md) which provides a nice combination of simplicity and power. We plan to make it available in TFS in a future release.
* [Analytics](https://docs.microsoft.com/en-us/vsts/report/analytics/) which is the reporting platform for Visual Studio Team Services (VSTS), which answer quantitative questions about the past or present state of your projects. This service provides a concise data model over the VSTS suite. Built for reporting, the Analytics Service is optimized for fast read-access and server-based aggregations. We plan to make it available in TFS in a future release.

## Related articles
 
- [Key concepts](concepts.md)  
- [Essential services](services.md)
- [Client-server tools](tools.md)
- [Software development roles](roles.md)
- [Pricing - VSTS](https://visualstudio.microsoft.com/team-services/pricing/)
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
