---

title: Compare Azure DevOps Services with Azure DevOps Server  
titleSuffix: Azure DevOps
ms.custom: seodec18, engagement-fy23   
description: Understand the differences between Azure DevOps Services and Azure DevOps Server.
ms.subservice: azure-devops-new-user
ms.assetid: 458FAFD1-98B0-4B74-B8E7-F2C73D4EED6B
ms.author: chcomley
author: chcomley
ms.topic: conceptual 
monikerRange: '<= azure-devops' 
ms.date: 10/07/2022 
---

# Compare Azure DevOps Services with Azure DevOps Server

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

The **cloud offering**, Azure DevOps Services, provides a scalable, reliable, and globally available hosted service. It's backed by a 99.9% SLA, monitored by our 24/7 operations team, and available in local data centers around the world.

The **on-premises offering**, Azure DevOps Server, is built on a SQL Server back end. Customers usually choose the on-premises version when they need their data to stay within their network. Or, when they want access to SQL Server reporting services that integrate with Azure DevOps Server data and tools.  

Both offerings provide the same [essential features and services](services.md), but Azure DevOps Services offers the following added benefits:

- Simplified server management
- Immediate access to the latest and greatest features
- Improved connectivity with remote sites
- A transition from capital expenditures (servers and the like) to operational expenditures (subscriptions)

To determine which offering&mdash;cloud or on-premises&mdash;meets your needs, consider the following key differences.

## Key differences between Azure DevOps Services and Azure DevOps Server

When you're choosing which platform you want, or if you're considering a move from on-premises to the cloud, consider the following areas:

- [Data scope and scalability](#scope-and-scale-data)
- [Authentication](#authentication)
- [Users and groups](#manage-users-and-groups)
- [User access management](#manage-user-access)
- [Security and data protection](#security-and-data-protection)

**Differences in specific feature areas**

Although Azure DevOps Services is a hosted version of Azure DevOps Server, there are some differences between features. Some Azure DevOps Server features aren't supported in Azure DevOps Services. For example, Azure DevOps Services doesn't support integration with SQL Server Analysis Services to support reporting.

**Differences in support**
- [Process customization](#process-customization)
- [Reporting](#reporting)

<!--- For each area, we discuss both the current state of the world and the expected impacts from short- and medium-term plans. Check back here for updates, because this information can change frequently.  -->
If you're using Azure DevOps Server and considering a move to Azure DevOps Services, understand your  [migration options](../migrate/migrate-from-tfs.md).

## Scope and scale data 

As your business grows, you may need to scale up your Azure DevOps instance. 

**Azure DevOps Services**

Azure DevOps Services offer two options for scoping and scaling data: organizations and projects. Organizations in Azure DevOps Services get their own URLs (for example, ```https://dev.azure.com/fabrikamfiber```), and they always have exactly one project collection. Organizations can have many projects within a collection.

<!--- Commenting out forward looking content for now 
We are planning a third option for scoping and scaling data in Azure DevOps Services: a new entity called an Enterprise. Rather than adding support for multiple project collections within an organization, multiple
organizations could be grouped within an organization. 
Additionally, we merge organizations and their single 
project collections into a single entity. The organization is similar to the  Azure DevOps Server deployment and the project collection.
See also https://github.com/MicrosoftDocs/vsts-docs/issues/1611
-->
We recommend that you create organizations in Azure DevOps Services wherever you would create collections in Azure DevOps Server. The following scenarios apply:

- You can purchase Azure DevOps Services users per organization - Paid users can access only the organization in which the payment is made. If you have users who need access to many organizations, Visual Studio subscriptions can be an attractive option. Visual Studio subscribers can be added to any number of organizations at no charge. We're also considering other ways to make access available to many organizations that are grouped into a single organization.
- You currently have to administer organizations one at a time. This process can be cumbersome when you have many organizations.

<!---We're working to support enterprise-wide policies.-->
For more information, see [Plan your organizational structure in Azure DevOps](plan-your-azure-devops-org-structure.md).

**Azure DevOps Server**

Azure DevOps Server offers the following three options for scoping and scaling data: deployments,
project collections, and projects. In the simplest case, deployments are just servers.

Deployments can be more complicated, however, which could include:
* Two-server deployment where SQL is split out on a separate machine
* High-availability farms with lots of servers

Project collections serve as containers for security and administration, and physical database boundaries. They're also used to group related projects.

Finally, projects are used to encapsulate the assets of individual software projects, including source code, work items, and so on. For more information, see [Plan your organizational structure in Azure DevOps](plan-your-azure-devops-org-structure.md).

## Authentication

**Azure DevOps Services**

With Azure DevOps Services, you connect over the public internet (for example, ```https://contoso.visualstudio.com```). You either authenticate with [Microsoft account](https://www.microsoft.com/account) credentials or with
[Azure AD](/azure/active-directory/active-directory-whatis) 
credentials, depending on your organization setup. You can also set up Azure AD to require features such as multi-factor-authentication, IP address restrictions, and so on.

We recommend that you configure your organizations to use Azure AD rather than
Microsoft accounts. This method provides a better experience in many scenarios and more options for enhanced security.

For more information, see [About accessing Azure DevOps Services with Azure AD](../organizations/accounts/access-with-azure-ad.md).

**Azure DevOps Server**

With Azure DevOps Server, you connect to an intranet server (for example, ```https://tfs.corp.contoso.com:8080/tfs```). You authenticate with Windows Authentication and your Active Directory (AD) domain credentials. This process is transparent and you never see any kind of sign-in experience.

## Manage users and groups

**Azure DevOps Services**

In Azure DevOps Services, you can use a similar mechanism to
[provide access to groups of users](../organizations/accounts/manage-azure-active-directory-groups.md). You can add Azure AD groups to Azure DevOps Services groups. If you use Microsoft Accounts instead of Azure AD, you have to
[add users](../organizations/accounts/add-organization-users.md) one at a time.

**Azure DevOps Server**

In Azure DevOps Server, you provide users access to deployments by adding Active Directory (AD) groups to various Azure DevOps groups
(for example, the Contributors group for an individual  project). The AD group memberships are kept in sync.
As users are added and removed in AD, they also gain and lose access to Azure DevOps Server.
## Manage user access

In both Azure DevOps Services and Azure DevOps Server, you manage access to features by assigning users to an [access level](../organizations/security/access-levels.md). All users must be assigned to a single access level. In both the cloud and on-premises offerings, you can give free access to work item features to an unlimited number of Stakeholders. Also, an unlimited number of Visual Studio subscribers can have access to all Basic features at no extra charge. You pay only for other users who need access.

**Azure DevOps Services**

In Azure DevOps Services, you must [assign an access level](../organizations/accounts/add-organization-users.md)
to each user in your organization. Azure DevOps Services validates Visual Studio subscribers as they sign in. You can assign Basic access for free to five users without Visual Studio subscriptions.

To give Basic access or higher to more users, [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md) for your organization and [pay for more users](../organizations/billing/buy-basic-access-add-users.md).
Otherwise, all other users get Stakeholder access.

Azure AD groups give access to groups of users. Access levels are automatically assigned at first sign-in. For organizations that are configured to use Microsoft accounts for signing in, you must assign access levels to each user explicitly.

**Azure DevOps Server**

In Azure DevOps Server, all use is on the honor system. To set access levels for users based on their licenses, specify their
[access levels](../organizations/security/change-access-levels.md) on the administration page. For example, assign unlicensed users Stakeholder access only.

Users with an Azure DevOps Server Client Access License (CAL) can have Basic access. Visual Studio subscribers can have either Basic or Advanced access, depending on their subscriptions. Azure DevOps Server doesn't attempt to verify these licenses or enforce compliance.

## Security and data protection

Many entities want to know more about data protection when they consider moving to the cloud. We're committed to ensuring that Azure DevOps Services projects stay safe and secure. We have technical features and business processes in place to deliver on this commitment. You can also take steps to secure your data. Learn more in our [Data Protection overview](../organizations/security/data-protection.md).

<a name="process-customization"></a>

## Process customization

You can customize the work-tracking experience in different ways, depending on the supported process model:

**Azure DevOps Services**

Azure DevOps Services uses the **Inheritance** process model, which supports WYSIWYG customization.

**Azure DevOps Server**

With Azure DevOps Server, you can choose the **Inheritance** process model or the **On-premises XML** process model, which supports customization through import or export of XML definition files for work-tracking objects.
Azure DevOps Server 2018 and earlier versions only has access to the **On-premises XML** process model.
Although the **On-premises XML** process model option is powerful, it can cause various issues. The main issue is that processes for existing projects aren't automatically updated.
<!--
commenting out, since we no longer address versions before 2018
Azure DevOps Server 2013, for example, introduced several new features that depended on new work-item types and other process template
changes. When you upgrade from 2012 to 2013, each project collection gets new versions of each of the
"in the box" process templates that include these changes. However, these changes aren't automatically incorporated into existing projects. Instead, after you finish upgrading, you have to include the changes in each project by using the [Configure features](/previous-versions/azure/devops/reference/upgrade/configure-features-after-upgrade)
wizard or a more manual process.-->

To help you avoid these issues in Azure DevOps Services, custom process templates and the **witadmin.exe** tool have always been disabled. This approach has enabled us to automatically update all projects with each Azure DevOps Services upgrade. Meanwhile, the product team is working hard to make customizing processes possible in ways that we can support easily and continuously. We recently introduced the first of these changes and more changes are on the way.

With the new process-customization capability, you can make changes directly within the web user interface (UI). If you want to customize your processes programmatically, you can do so through REST endpoints. When you customize projects this way, they're automatically updated when we release new versions of their base processes with Azure DevOps Services upgrades.

For more information, see [Customize your work-tracking experience](../reference/customize-work.md).

<a name="reporting"></a>

## Analytics and reporting

Azure DevOps Services and Azure DevOps Server offer the following tools that give you insight into the progress and quality of your software projects:

**Azure DevOps Server 2019 to Azure DevOps Services**

- [Dashboards](../report/dashboards/dashboards.md) and lightweight [charts](../report/dashboards/charts.md) that are available in both the cloud and on-premises platforms. These tools are easy to set up and use.
- [The Analytics service](../report/powerbi/what-is-analytics.md) and [Analytics widgets](../report/dashboards/analytics-widgets.md). The Analytics service is optimized for fast read-access and server-based aggregations.  
- [Microsoft Power BI integration](../report/powerbi/overview.md), which supports getting Analytics data into Power BI reports and provides a combination of simplicity and power.
- [OData support](../report/extend-analytics/quick-ref.md), which allows you to directly query the Analytics service from a supported browser, and then use the returned JSON data as you want. You can generate queries that span many projects or your entire organization. To learn more about the Analytics service, see our [Reporting roadmap](../report/powerbi/reporting-roadmap.md).

**Azure DevOps Server 2018**

- [Dashboards](../report/dashboards/dashboards.md) and lightweight [charts](../report/dashboards/charts.md) that are available in both the cloud and on-premises platforms. These tools are easy to set up and use.
- [SQL Server Reporting Services (SSRS) reports](/previous-versions/azure/devops/report/sql-reports/reporting-services-reports) are available when Azure DevOps Server is configured with SQL Server Analysis Services.   

<a id="vsts" />

## Visual Studio Team Services is now Azure DevOps Services

Many of the featured services in VSTS are now offered as standalone services in both Azure DevOps Services and Azure DevOps Server 2019 and up. You can get services separately or all together as Azure DevOps Services. If you're an Azure DevOps subscriber, you have access to all of the services already.

| VSTS feature name    | Azure DevOps service name | Description |
|----------------------|----------------------|-------------|
| Build & release      | Azure Pipelines      | Continuous integration and continuous delivery (CI/CD) that works with any language, platform, and cloud. |
| Code                 | Azure Repos          | Unlimited cloud-hosted private Git and Team Foundation Version Control (TFVC) repositories for your project. |
| Work                 | Azure Boards         | Work tracking with Kanban boards, backlogs, team dashboards, and custom reporting. |
| Test                 | Azure Test Plans     | All-in-one planned and exploratory testing solution. |
| Packages (extension) | Azure Artifacts      | Maven, npm, Python, Universal Package, and NuGet package feeds from public and private sources. |

Azure DevOps Services and Azure DevOps Server 2019 and up use the new navigation user interface, with a vertical sidebar to go to the main service areas: **Boards**, **Repos**, **Pipelines**, **Artifacts**, **Test Plans**, and more. For more information, see [Web portal navigation in Azure DevOps](../project/navigation/index.md).

> [!NOTE]
> You can disable select services from the user interface. For more information, see [Turn a service on or off](../organizations/settings/set-services.md).

You can still use `visualstudio.com` to access Azure DevOps Services. We've moved to the new `dev.azure.com` domain name as the primary URL for new organizations. That URL is `https://dev.azure.com/{your organization}/{your project}`. If you want to change your URL to be based on `dev.azure.com` as the primary, an organization administrator can do so from the organization settings page.

## Related articles

- [Essential services](services.md)
- [Client-server tools](tools.md)
- [Software development roles](roles.md)
- [Pricing for Azure DevOps Services](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Pricing for Azure DevOps Server](https://azure.microsoft.com/pricing/details/devops/server/)
 