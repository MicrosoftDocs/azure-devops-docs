---

title: Understand differences between Azure DevOps Services and Azure DevOps Server   
titleSuffix: Azure DevOps
ms.custom: seodec18   
description: Understand the fundamental differences between Azure DevOps Services and Azure DevOps Server, formerly named Visual Studio Team Services (VSTS), and Team Foundation Server (TFS)
ms.prod: devops  
ms.technology: devops-new-user
ms.assetid: 458FAFD1-98B0-4B74-B8E7-F2C73D4EED6B
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.topic: conceptual 
monikerRange: '>= tfs-2013' 
ms.date: 03/07/2019 
---

# Azure DevOps Services vs. Azure DevOps Server

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Azure DevOps Services and Azure DevOps Server were formerly named Visual Studio Team Services (VSTS) and Visual Studio Team Foundation Server (TFS). Both offerings provide an integrated, collaborative environment that supports Git, continuous integration, and Agile tools for planning and tracking work.  

Azure DevOps Services is the **cloud offering** that provides a scalable, reliable, and globally available hosted service. It's backed by a 99.9% SLA, monitored by our 24/7 operations team, and available in local data centers around the world.

Azure DevOps Server is the **on-premises offering** that's built on a SQL Server back end. Companies usually choose on-premises when they need their data to stay within their network or when they want access to SQL Server reporting services that integrate with Azure DevOps data and tools.  

Although both offerings provide the same [essential services](services.md), compared with Azure DevOps Server, Azure DevOps Services offers the following added benefits:

- Simplified server management.
- Immediate access to the latest and greatest features
- Improved connectivity with remote sites.
- A transition from capital expenditures (servers and the like) to operational expenditures (subscriptions).

To determine which offering&mdash;cloud or on-premises&mdash;meets your needs, consider the following key differences.

## Fundamental differences between Azure DevOps Services and Azure DevOps Server

Consider the differences in the following areas when contemplating a move from  Azure DevOps Server to Azure DevOps Services:

- [Scope and scale data](#scope-scale-data)
- [Authentication](#authentication)
- [Users and groups](#users-groups)
- [Manage user access](#manage-user-access)
- [Security and data protection](#security-data)

**Differences in specific feature areas**  
Although Azure DevOps Services is a hosted version of Azure DevOps Server, there are some differences between the features that are available in the two products. Some Azure DevOps Server features aren't supported in Azure DevOps Services. For example, Azure DevOps Services doesn't support integration with SQL Server Analysis Services to support reporting.

Two of the following additional areas differ in their support:

- [Process customization](#process-customization)
- [Reporting](#reporting)

<!--- For each area, we discuss both the current state of the world and the expected impacts from short- and medium-term plans. Check back here for updates, because this information can change frequently.  -->

Are you on Azure DevOps Server and considering moving? Read [Migration options](../migrate/migrate-from-tfs.md) to understand your options.

<!---
## Fundamental differences between TFS and Azure DevOps Services

When you plan a move, a few fundamental differences between TFS and Azure DevOps Services are important for you to understand.
-->

<a name="scope-scale-data"></a>

## Scope and scale data

### Azure DevOps Server scales by using deployments, project collections, and projects

Azure DevOps Server offers the following three options for scoping and scaling data: deployments,
project collections, and projects. In the simplest case, deployments are just servers.

Deployments can be more complicated, however, which could include the following:
* Two-server deployment where SQL is split out on a separate machine
* High-availability farms comprising lots of servers

Project collections serve as containers for security and administration, as well as physical database boundaries. They're also used to group related projects.

Finally, projects are used to encapsulate the assets of individual software projects, including source code, work items, and so on.

Learn more: [Manage project collections](/azure/devops/server/admin/manage-team-project-collections).

### Azure DevOps Services scales by using organizations and projects

Azure DevOps Services differs slightly from Azure DevOps Server. There are currently only two options for scoping and scaling
data: organizations and projects. Organizations in Azure DevOps Services get their own URLs (for example, ```https://dev.azure.com/fabrikamfiber```), and they always have exactly one project collection. Organizations can have many projects, such as project collections.

<!--- Commenting out forward looking content for now 
We are planning a third option for scoping and scaling data in Azure DevOps Services: a new entity called an Enterprise. Rather than adding support for multiple project collections within an organization, multiple
organizations could be grouped within an organization. 

Additionally, we merge organizations and their single 
project collections into a single entity. The organization is similar to the  Azure DevOps Server deployment and the project collection.

See also https://github.com/MicrosoftDocs/vsts-docs/issues/1611
-->

We recommend that you create organizations in Azure DevOps Services wherever you would have created collections in Azure DevOps Server. The following scenarios apply:

- You can purchase Azure DevOps Services users per organization - Paid users can access only the organization in which the payment is made. If you have users who need access to many organizations, Visual Studio subscriptions can be an attractive option. Visual Studio subscribers can be added to any amount of organizations at no charge. We're also considering other ways to make access available to many organizations that are grouped into a single organization.
- You currently have to administer organizations one at a time. This process can be cumbersome when you have many organizations.

<!---We're working to support enterprise-wide policies.-->

Learn more: [Plan your organizational structure in Azure DevOps](plan-your-azure-devops-org-structure.md).

<a name="authentication"></a>

## Authentication

With Azure DevOps Server, you connect to an intranet server (for example, ```https://tfs.corp.contoso.com:8080/tfs```). You authenticate with Windows Authentication and your Active Directory (AD) domain credentials. This process is transparent and you never see any kind of sign in experience.

With Azure DevOps Services, you connect over the public internet (for example, ```https://contoso.visualstudio.com```). You either authenticate with [Microsoft account](http://www.microsoft.com/account) credentials or with
[Azure AD](/azure/active-directory/active-directory-whatis)  
credentials, depending on your organization setup. You can also set up Azure AD to require features such as multi-factor-authentication, IP address restrictions, and so on.

We recommend that you configure your organizations to use Azure AD rather than
Microsoft accounts. This method provides a better experience in many scenarios and more options for enhanced security.

Learn more: [Access Azure DevOps Services with Azure Active Directory](../organizations/accounts/access-with-azure-ad.md).

<a name="users-groups"></a>

## Manage users and groups

In Azure DevOps Server, you provide users access to deployments by adding Active Directory (AD) groups to various Azure DevOps groups
(for example, the Contributors group for an individual  project). The AD group memberships are kept in sync.
As users are added and removed in AD, they also gain and lose access to Azure DevOps Server.

In Azure DevOps Services, you can use a similar mechanism to
[provide access to groups of users](../organizations/accounts/manage-azure-active-directory-groups.md). You can add Azure AD groups to Azure DevOps Services groups. If you use Microsoft Accounts instead of Azure AD, you have to
[add users](../organizations/accounts/add-organization-users.md) one at a time.

<a name="manage-user-access"></a>

## Manage user access

In both Azure DevOps Services and Azure DevOps Server, you manage access to features by assigning users to an [access level](../organizations/security/access-levels.md). All users must be assigned to a single access level. In both the cloud and on-premises offerings, you can give free access to work item features to an unlimited number of stakeholders. Also, an unlimited number of Visual Studio subscribers can have access to all Basic features at no additional charge. You pay only for other users who need access.

In Azure DevOps Server, all use is on the honor system. To set access levels for users based on their licenses, specify their
[access levels](../organizations/security/change-access-levels.md) on the administration page. For example, assign unlicensed users Stakeholder access only.

Users with an Azure DevOps Server/TFS Client Access License (CAL) can have Basic access. Visual Studio subscribers can have either Basic or Advanced access, depending on their subscriptions. Azure DevOps Server doesn't attempt to verify these licenses or enforce compliance.

In Azure DevOps Services, you must [assign an access level](../organizations/accounts/add-organization-users.md)
to each user in your organization. Azure DevOps Services validates Visual Studio subscribers as they sign in. You can assign Basic access for free to five users without Visual Studio subscriptions.

To give Basic access to more users, [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md) for your organization and [pay for more users](../organizations/billing/buy-basic-access-add-users.md).
Otherwise, all other users get Stakeholder access.

If you use Azure AD groups to give access to groups of users, Azure DevOps Services assigns the appropriate
access levels automatically at first sign-in. For organizations that are configured to use Microsoft accounts for signing in, you must assign access levels to each user explicitly.

<a name="security-data"></a>

## Security and data protection

Many entities want to know more about data protection when they consider moving to the cloud. We are committed to ensuring that Azure DevOps Services projects stay safe and secure. We have technical features and business processes in place to deliver on this commitment. You can also take steps to secure your data. Learn more in our [Data Protection Overview white paper](../organizations/security/data-protection.md).

<a name="process-customization"></a>

## Process customization

You customize the work-tracking experience in two different ways, depending on the supported process model:

- For Azure DevOps Services, you use the **Inheritance** process model, which supports WYSIWYG customization.
- For Azure DevOps Server, you can choose the **Inheritance** process model or the **On-premises XML** process model, which supports customization through import or export of XML definition files for work-tracking objects.
- For TFS 2018 and earlier versions, you only have access to the **On-premises XML** process model.

Although the **On-premises XML** process model option is powerful, it can cause various issues. The main issue is that processes for existing projects aren't automatically updated.

For example, TFS 2013 introduced several new features that depended on new work-item types and other process template
changes. When you upgrade from TFS 2012 to TFS 2013, each project collection gets new versions of each of the
"in the box" process templates that include these changes. However, these changes aren't automatically incorporated into existing projects. Instead, after you finish upgrading, you have to include the changes in each project by using the [Configure features](../reference/configure-features-after-upgrade.md)
wizard or a more manual process.

To help you avoid these issues in Azure DevOps Services, custom process templates and the **witadmin.exe** tool have always been disabled. This approach has enabled us to automatically update all projects with each Azure DevOps Services upgrade. Meanwhile, the product team is working hard to make customizing processes possible in ways that we can support easily and continuously. We recently introduced the first of these changes and more changes are on the way.

With the new process-customization capability, you can make changes directly within the web user interface (UI). If you want to customize your processes programmatically, you can do so through REST endpoints. When you customize projects this way, they're automatically updated when we release new versions of their base processes with Azure DevOps Services upgrades.

To learn more, see [Customize your work-tracking experience](../reference/customize-work.md).

<!---
Over time we will support more and more types of process customizations with this new approach. If you need
process customization features that are not yet available and you cannot wait for them, a second option for process
customization in Azure DevOps Services is available. This option is referred to as the **Hosted XML** process model, and it is in private preview and available by request only. 

With this option, you 
[import customized process templates](../organizations/settings/work/import-process/import-process.md).
The option is similar to using custom process templates, except that:

* [Restrictions](../organizations/settings/work/import-process/import-process.md) exist in the customizations that can be imported into Azure DevOps Services. 

* Process templates are associated with all projects that are created from them, and changes made to the process are reflected 
in each project.

Projects in organizations that participate in this process-customization private preview are not updated automatically with Azure DevOps Services upgrades. 

-->

<a name="reporting"></a>

## Reporting

Azure DevOps Services and Azure DevOps Server offer a many tools that give you insight into the progress and quality of your software projects. Included are the following tools:

- [Dashboards](../report/dashboards/dashboards.md) and lightweight [charts](../report/dashboards/charts.md) that are available in both the cloud and on-premises platforms. These tools are easy to set up and use.

Azure DevOps Services and Azure DevOps Server 2019 also provide access to the following services:

- [The Analytics service](../report/powerbi/what-is-analytics.md) and [Analytics widgets](../report/dashboards/analytics-widgets.md). The Analytics service is optimized for fast read-access and server-based aggregations.  
- [Microsoft Power BI integration](../report/powerbi/overview.md), which supports getting Analytics data into Power BI reports and provides a combination of simplicity and power.
- [OData support](../report/extend-analytics/index.md), which allows you to directly query the Analytics service from a supported browser, and then use the returned JSON data as you want. You can generate queries that span many projects or your entire organization.

To learn more about the Analytics service and future releases, see our [Reporting roadmap](../report/powerbi/reporting-roadmap.md).

[SQL Server Reporting Services (SSRS) reports](../report/sql-reports/reporting-services-reports.md) are available from Azure DevOps Server or TFS when configured with SQL Server Analysis Services.  

## Related articles

- [Essential services](services.md)
- [Client-server tools](tools.md)
- [Software development roles](roles.md)
- [Azure DevOps Services - pricing](https://visualstudio.microsoft.com/team-services/pricing/)
- [Azure DevOps Server - pricing](https://visualstudio.microsoft.com/team-services/tfs-pricing/)

<!---
*(c) 2016 Microsoft Corporation. All rights reserved. This document is
provided "as-is." Information and views expressed in this document,
including URL and other Internet Web site references, may change without
notice. You bear the risk of using it.*

*This document does not provide you with any legal rights to any
intellectual property in any Microsoft product. You may copy and use
this document for your internal, reference purposes.*
-->
