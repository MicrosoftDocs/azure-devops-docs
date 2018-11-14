---
title: Understand the differences between Azure DevOps Services and TFS  
description: Understand the fundamental differences between Azure DevOps Services and Team Foundation Server (TFS)
ms.prod: devops  
ms.technology: devops-new-user
ms.assetid: 458FAFD1-98B0-4B74-B8E7-F2C73D4EED6B
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 11/12/2018
---

# Understand the differences between Azure DevOps Services and TFS

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Azure DevOps Services and Microsoft Team Foundation Server (TFS) both provide an integrated, collaborative environment that supports Git, continuous integration, and Agile tools for planning and tracking work.  

Azure DevOps Services is the cloud offering that provides a scalable, reliable, and globally available hosted service. It's backed by a 99.9% SLA, monitored by our 24/7 operations team, and available in local data centers around the world.

TFS is the on-premises offering that's built on a SQL Server back end. Enterprises usually choose on-premises TFS when they need their data to stay within their network or when they want access to SharePoint sites and SQL Server reporting services that integrate with TFS data and tools.  

Although both offerings provide the same [essential services](services.md), compared with TFS, Azure DevOps Services offers the following added benefits:

- Simplified server management.
- Immediate access to the latest and greatest features.
- Improved connectivity with remote sites.
- A transition from capital expenditures (servers and the like) to operational expenditures (subscriptions).

To determine which offering&mdash;cloud or on-premises&mdash;meets your needs, consider the fundamental differences, as well as the differences in specific feature areas between Azure DevOps Services and TFS.

**Fundamental differences between Azure DevOps Services and TFS**  
Consider the differences in these areas when contemplating a move from TFS to Azure DevOps Services:

- [Scope and scale data](#scope-scale-data)
- [Authentication](#authentication)
- [Users and groups](#users-groups)
- [Manage user access](#manage-user-access)
- [Security and data protection](#security-data)

**Differences in specific feature areas between Azure DevOps Services and TFS**  
Although Azure DevOps Services is a hosted version of TFS, there are some differences between the features that are available in the two products. Some TFS features aren't supported in Azure DevOps Services at all. For example, Azure DevOps Services doesn't support integration with SharePoint or Project Server (which are now deprecated features for TFS 2018 and later versions).  

Two additional areas differ in their support:

- [Process customization](#process-customization)
- [Reporting](#reporting)

<!--- For each area, we discuss both the current state of the world and the expected impacts from short- and medium-term plans. Check back here for updates, because this information can change frequently.  -->

If you're on TFS and considering moving to Azure DevOps Services, read [Migrate data from TFS to Azure DevOps Services](../articles/migrate-to-vsts-from-tfs.md) to understand your options.

<!---
## Fundamental differences between TFS and Azure DevOps Services

When you plan a move, a few fundamental differences between TFS and Azure DevOps Services are important for you to understand.
-->

<a name="scope-scale-data"></a>

## Scope and scale data

### TFS scales by using deployments, project collections, and projects

TFS offers the following three options for scoping and scaling data: deployments,
project collections, and projects. In the simplest case, deployments are just servers.

Deployments can also be more complicated, however, including everything from a two-server deployment,
where SQL is split out on a separate machine, to high-availability farms comprising lots of servers.

Project collections serve as containers for security and administration, in addition to serving as
physical database boundaries. They're also used to group related projects.

Finally, projects are used to encapsulate the assets of individual software projects, including source code, work items, and so on.

Learn more: [Manage project collections](/tfs/server/admin/manage-team-project-collections).

### Azure DevOps Services scales by using organizations and projects

Azure DevOps Services is slightly different from TFS. It currently has only two options for scoping and scaling
data: organizations and projects. Organizations in Azure DevOps Services get their own URLs (for example, ```https://dev.azure.com/fabrikamfiber```), and they always contain exactly one project collection. Organizations can contain multiple projects, such as TFS project collections.

<!--- Commenting out forward looking content for now 
We are planning a third option for scoping and scaling data in Azure DevOps Services: a new entity called an Enterprise. Rather than adding support for multiple project collections within an organization, multiple
organizations could be grouped within an organization. 

Additionally, we merge organizations and their single 
project collections into a single entity. The organization is similar to the TFS deployment and the TFS collection.

See also https://github.com/MicrosoftDocs/vsts-docs/issues/1611
-->

To prepare to use the organization entity, we recommend that you create organizations in Azure DevOps Services wherever you would have created collections in TFS. In the short term, having your work split across multiple organizations can cause some problems, but we plan to address these problems when the organization entity is introduced. In particular, the following scenarios:

- You purchase Azure DevOps Services users per organization, meaning that paid users can access only the organization in which the payment is made. If you have users who need access to multiple organizations, Visual Studio subscriptions can be an attractive option because subscribers can be added to any number of organizations at no charge. We're also considering other ways to make access available to multiple organizations that are grouped into a single organization.

- You currently have to administer organizations one at a time. This process can be cumbersome when you have many organizations.

<!---We're working to support enterprise-wide policies.-->

Learn more: [Plan your Azure DevOps organizational structure](plan-your-azure-devops-org-structure.md).

<a name="authentication"></a>

## Authentication

With TFS, you connect to an intranet server (for example, ```https://tfs.corp.contoso.com:8080/tfs```). You authenticate with Windows Authentication and your Active Directory (AD) domain credentials. This process is usually transparent and you never see any kind of sign-in experience.

With Azure DevOps Services, you connect over the public internet (for example, ```https://contoso.visualstudio.com```). You either authenticate with [Microsoft account](http://www.microsoft.com/account) credentials or with
[Azure AD](/azure/active-directory/active-directory-whatis)  
credentials, depending on your organization setup. You can also set up Azure AD to require features such as multi-factor-authentication, IP address restrictions, and so on.

We recommend that you configure your organizations to use Azure AD rather than
Microsoft accounts. This method provides a better experience in many scenarios and more options for enhanced security.

Learn more: [Access Azure DevOps Services with Azure Active Directory](../organizations/accounts/access-with-azure-ad.md).

<a name="users-groups"></a>

## Manage users and groups

In TFS, you provide users access to deployments by adding Active Directory (AD) groups to various TFS groups
(for example, the Project Contributors group for an individual  project). The AD group memberships are kept in sync.
As users are added and removed in AD, they also gain and lose access to TFS.

In Azure DevOps Services, you can use a similar mechanism to
[provide access to groups of users](../organizations/accounts/manage-azure-active-directory-groups.md) by adding Azure AD groups to Azure DevOps Services groups. If you use Microsoft Accounts instead of Azure AD, you have to
[add users](../organizations/accounts/add-organization-users.md) one at a time.

<a name="manage-user-access"></a>

## Manage user access

In both Azure DevOps Services and TFS, you manage access to features by assigning users to an [access level](../organizations/security/access-levels.md). All users must be assigned to a single access level. In both the cloud and on-premises offerings, you can give free access to work item features to an unlimited number of stakeholders. Also, an unlimited number of Visual Studio subscribers can have access to all Basic features at no additional charge. You pay only for other users who need access.

In TFS, all use is on the honor system. To set access levels for users based on their licenses, specify their
[access levels](../organizations/security/change-access-levels.md) on the administration page. For example, assign unlicensed users Stakeholder access only.

Users with a TFS Client Access License (CAL) can have Basic access. Visual Studio subscribers can have either Basic or Advanced access, depending on their subscriptions. TFS doesn't attempt to verify these licenses or enforce compliance.

In Azure DevOps Services, you must [assign an access level](../organizations/accounts/add-organization-users.md)
to each user in your organization. Azure DevOps Services validates Visual Studio subscribers as they sign in. You can assign Basic access for free to five users without Visual Studio subscriptions.

To give Basic access to more users, you need to [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md) for your organization and [pay for more users](../organizations/billing/buy-basic-access-add-users.md).
Otherwise, all other users get Stakeholder access.

If you use Azure AD groups to provide access to groups of users, Azure DevOps Services assigns the appropriate
access levels automatically when they sign in for the first time. For organizations that are configured to use Microsoft accounts for sign-in, you have to assign access levels to each user explicitly.

<a name="security-data"></a>

## Security and data protection

Many entities want to know more about data protection when they consider moving to the cloud. Microsoft is committed to ensuring that Azure DevOps Services projects stay safe and secure. We have technical features and business processes in place to deliver on this commitment. You can also take steps to secure your data. Learn more in our [Data Protection Overview white paper](../articles/team-services-security-whitepaper.md).

<!---
## Key feature differences between Azure DevOps Services and TFS

-->

<a name="process-customization"></a>

## Process customization

You customize the work-tracking experience in two different ways, depending on the supported process model:

- For Azure DevOps Services, you use the **Inheritance** process model, which supports WYSIWYG customization.
- For TFS, you use the **On-premises XML** process model, which supports customization through import or export of XML definition files for work-tracking objects.

Although the **On-premises XML** process model option is powerful, it can cause various issues. The chief issue is that processes for existing projects don't update automatically when TFS is upgraded.

For example, TFS 2013 introduced several new features that depended on new work-item types and other process template
changes. When you upgrade from TFS 2012 to TFS 2013, each project collection gets new versions of each of the
"in the box" process templates that include these changes. However, these changes aren't automatically incorporated into existing projects. Instead, after you finish upgrading, you have to include the changes in each project by using the [Configure features](../reference/configure-features-after-upgrade.md)
wizard or a more manual process.

To help you avoid these issues in Azure DevOps Services, custom process templates and the **witadmin.exe** tool have always been disabled. This approach has enabled us to automatically update all projects with each Azure DevOps Services upgrade. Meanwhile, the product team is working hard to make customizing processes possible in ways that we can support easily and continuously. We recently introduced the first of these changes and more changes are on the way.

With these new Azure DevOps Services process-customization capabilities, you can make customizations directly within the Azure DevOps Services web user interface (UI). If you want to customize your processes programmatically, you can do so through REST endpoints. When you customize projects in this way, those projects continue to be updated automatically when we release new versions of their base processes with Azure DevOps Services upgrades.

To learn more, see [Customize your work-tracking experience](../reference/customize-work.md).

<!---
Over time we will support more and more types of process customizations with this new approach. If you need
process customization features that are not yet available and you cannot wait for them, a second option for process
customization in Azure DevOps Services is available. This option is referred to as the **Hosted XML** process model, and it is in private preview and available by request only. 

With this option, you 
[import customized process templates](../organizations/settings/work/import-process/import-process.md).
The option is similar to using custom process templates in TFS, except that:

* [Restrictions](../organizations/settings/work/import-process/import-process.md) exist in the customizations that can be imported into Azure DevOps Services. 

* Process templates are associated with all projects that are created from them, and changes made to the process are reflected 
in each project.

Projects in organizations that participate in this process-customization private preview are not updated automatically with Azure DevOps Services upgrades. 

-->

<a name="reporting"></a>

## Reporting

Both TFS and Azure DevOps Services offer a variety of tools to give you insight into the progress and quality of your software projects. The tools include:

- [Dashboards](../report/dashboards/dashboards.md) and lightweight [charts](../report/dashboards/charts.md) that are available in both TFS and Azure DevOps Services. These tools are easy to set up and use.

In addition, Azure DevOps Services gives you access to the following services:

- [The Analytics service](../report/analytics/what-is-analytics.md) and [Analytics widgets](../report/analytics/analytics-widgets.md). The Analytics service is optimized for fast read-access and server-based aggregations.  
- [Microsoft Power BI integration](../report/powerbi/overview.md), which supports getting Analytics data into Power BI reports and provides a combination of simplicity and power.
- [OData support](../report/extend-analytics/index.md), which allows you to directly query the Analytics service from a supported browser and then use the returned JSON data as you want. You can generate queries that span multiple projects or your entire organization.

We plan to make these services available in TFS in a future release. See our [Reporting roadmap](../report/analytics/reporting-roadmap.md).

The following reports and dashboards are available only in TFS:

- [Excel reports](../report/excel/excel-reports.md)
- [SQL Server Reporting Services (SSRS) reports](../report/sql-reports/reporting-services-reports.md)  
- [SharePoint dashboards](../report/sharepoint-dashboards/project-portal-dashboards.md)

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
