---

title: Compare Azure DevOps Services with Azure DevOps Server
titleSuffix: Azure DevOps
ms.custom: engagement-fy23
description: Understand the differences between Azure DevOps Services and Azure DevOps Server.
ms.subservice: azure-devops-new-user
ms.assetid: 458FAFD1-98B0-4B74-B8E7-F2C73D4EED6B
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 09/17/2024
---

# Compare Azure DevOps Services with Azure DevOps Server

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

The **cloud offering**, Azure DevOps Services, provides a scalable, reliable, and globally available hosted service. Our 24/7 operations team monitors the cloud offering, which is backed by a 99.9% service level agreement (SLA) and available in local data centers around the world.

The **on-premises offering**, Azure DevOps Server, is built on a SQL Server back end. Customers usually choose the on-premises version when they need their data to stay within their network. Or, when they want access to SQL Server reporting services that integrate with Azure DevOps Server data and tools.  

Both offerings provide the same [essential features and services](services.md), but Azure DevOps Services offers more benefits:

- Simplifies server management
- Provides immediate access to the latest features
- Enhances connectivity with remote sites
- Transitions from capital expenditures (servers and hardware) to operational expenditures (subscriptions)

To decide whether the cloud or on-premises offering best meets your needs, consider the following key differences.

## Key differences between Azure DevOps Services and Azure DevOps Server

Azure DevOps Services and Azure DevOps Server offer similar core functionalities, but the following list shows key differences in specific feature areas:

- **Deployment:**
  Azure DevOps Services: Cloud-based, hosted, and managed by Microsoft.
  Azure DevOps Server: On-premises solution, managed by your organization.
- **[Scalability:](#scalability)**
  Azure DevOps Services: Highly scalable, accessible from anywhere with an internet connection.
  Azure DevOps Server: Scalability is limited to your organizational infrastructure and server capacity.
- **[Authentication:](#authentication)**
  Azure DevOps Services: Uses Microsoft accounts or Microsoft Entra ID.
  Azure DevOps Server: Uses Windows Authentication and Active Directory (AD) domain credentials.
- **[Data control](#data-control):**
  Azure DevOps Services: Data is stored in secure Azure data centers.
  Azure DevOps Server: Organizations have complete control over their data and infrastructure.
- **[User management:](#user-management)**
  Azure DevOps Services: Supports adding Microsoft Entra groups to Azure DevOps Services groups.
  Azure DevOps Server: Access is granted through adding AD groups to various Azure DevOps groups2.
- **[Process customization:](#process-customization)**
  Azure DevOps Services: Inheritance process model with web UI and REST endpoint customization options.
  Azure DevOps Server: Offers both Inheritance and On-premises XML process models for customization.
- **[Analytics and reporting](#analytics-and-reporting):**
   Azure DevOps Services: Provides dashboards, Analytics service, Power BI integration, and OData support.
  Azure DevOps Server: Offers dashboards, SSRS reports, and configurable lightweight charts.
- **Integration with SQL Server:**
  Azure DevOps Services: Doesn't support integration with SQL Server Analysis Services for reporting.
  Azure DevOps Server: Supports integration with SQL Server Analysis Services.

These differences can help you decide which platform best suits your organization’s needs. If you're using Azure DevOps Server and considering a move to Azure DevOps Services, see the [Migration overview](../migrate/migration-overview.md).

## Scalability

As your business grows, you might need to scale up your Azure DevOps instance. This scaling can involve adding more users, increasing storage capacity, or enhancing performance to handle larger workloads. You might also need to integrate other tools and services to support more complex workflows and ensure seamless collaboration across larger teams. Azure DevOps provides various options and configurations to help you scale efficiently, whether you're using Azure DevOps Services in the cloud or Azure DevOps Server on-premises.

### Azure DevOps Services

Azure DevOps Services offers two options for scoping and scaling data: organizations and projects. Organizations in Azure DevOps Services get their own URLs (for example, ```https://dev.azure.com/fabrikamfiber```), and they always have exactly one project collection. Organizations can have many projects within a collection.

Create organizations in Azure DevOps Services wherever you would create collections in Azure DevOps Server. Consider the following scenarios:

- **Purchase users per organization:** Paid users can access only the organization where the payment is made. For users needing access to multiple organizations, Visual Studio subscriptions are an attractive option. Visual Studio subscribers can be added to any number of organizations at no charge. We're also exploring other ways to provide access to multiple organizations grouped into a single entity.
- **Administer organizations individually:** Currently, you must administer organizations one at a time, which can be cumbersome if you have many organizations.

<!---We're working to support enterprise-wide policies.-->
For more information, see [Plan your organizational structure in Azure DevOps](plan-your-azure-devops-org-structure.md).

### Azure DevOps Server

Azure DevOps Server provides three options for scoping and scaling data: deployments, project collections, and projects.

- **Deployments:** In the simplest case, deployments are servers. However, they can be more complex, such as:
  - Two-server deployments where SQL is on a separate machine
  - High-availability farms with multiple servers

- **Project collections:** Serve as containers for security, administration, and physical database boundaries. They're also used to group related projects.

- **Projects:** Encapsulate the assets of individual software projects, including source code, work items, and more.

For more information, see [Plan your organizational structure in Azure DevOps](plan-your-azure-devops-org-structure.md).

## Authentication

When you compare Azure DevOps Services and Azure DevOps Server, it's important to understand the differences in how authentication is handled for each platform.

### Azure DevOps Services

With Azure DevOps Services, you connect over the public internet (for example, ```https://contoso.visualstudio.com```). You can authenticate using either [Microsoft account](https://www.microsoft.com/account) credentials or [Microsoft Entra ID](/azure/active-directory/active-directory-whatis) 
credentials, depending on your organization setup. Microsoft Entra ID also allows you to enable features such as multi-factor-authentication, IP address restrictions, and more.

We recommend configuring your organizations to use Microsoft Entra rather than Microsoft accounts. This approach provides a better experience in many scenarios and offers more options for enhanced security.

For more information, see [About accessing Azure DevOps Services with Microsoft Entra ID](../organizations/accounts/access-with-azure-ad.md).

### Azure DevOps Server

With Azure DevOps Server, you connect to an intranet server (for example, ```https://tfs.corp.contoso.com:8080/tfs```). Authenticate using Windows Authentication and your Active Directory (AD) domain credentials. This process is seamless, and you never encounter sign-in experience.

## Data control

Many entities seek information about data protection when considering a move to the cloud. We're committed to keeping Azure DevOps Services projects safe and secure. We have technical features and business processes in place to uphold this commitment. You can also take steps to secure your data. For more information, see the [Data protection overview](../organizations/security/data-protection.md).

## User Management

When you manage users and groups in Azure DevOps Services and Azure DevOps Server, there are distinct methods and tools available for each platform to ensure proper access and organization.

### Azure DevOps Services

In Azure DevOps Services, you can [provide access to groups of users](../organizations/accounts/manage-azure-active-directory-groups.md) by adding Microsoft Entra groups to Azure DevOps Services groups. If you use Microsoft Accounts instead of Microsoft Entra ID, you must [add users](../organizations/accounts/add-organization-users.md) individually.

You must also [assign an access level](../organizations/accounts/add-organization-users.md) to each user in your organization. Azure DevOps Services validates Visual Studio subscribers as they sign in. You can assign Basic access for free to five users without Visual Studio subscriptions.

To give Basic access or higher to more users, [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md) and [pay for more users](../organizations/billing/buy-basic-access-add-users.md). Otherwise, all other users receive Stakeholder access.

Microsoft Entra groups provide access to groups of users, with access levels automatically assigned at first sign-in. For organizations using Microsoft accounts for signing in, you must explicitly assign access levels to each user.

### Azure DevOps Server

In Azure DevOps Server, you grant users access to deployments by adding Active Directory (AD) groups to various Azure DevOps groups, such as the Contributors group for an individual project. AD group memberships stay in sync, so as users get added or removed in AD, they automatically gain or lose access to Azure DevOps Server.

All use is on the honor system. To set access levels for users based on their licenses, specify their [access levels](../organizations/security/change-access-levels.md) on the administration page. For example, assign unlicensed users Stakeholder access only.

Users with an Azure DevOps Server Client Access License (CAL) can have Basic access. Visual Studio subscribers can have either Basic or Advanced access, depending on their subscriptions. Azure DevOps Server doesn't verify these licenses or enforce compliance.

In both Azure DevOps Services and Azure DevOps Server, you manage access to features by assigning users to an [access level](../organizations/security/access-levels.md). All users must be assigned to a single access level. In both the cloud and on-premises offerings, you can give free access to work item features to an unlimited number of Stakeholders. Also, an unlimited number of Visual Studio subscribers can have access to all Basic features at no extra charge. You pay only for other users who need access.

## Process customization

You can customize the work-tracking experience in different ways, depending on the supported process model:

### Azure DevOps Services

Azure DevOps Services uses the **Inheritance** process model, which supports WYSIWYG (What You See Is What You Get) customization. This model allows you to easily customize work item types, states, and fields directly through the user interface without needing to edit XML files. You can create and modify processes to fit your team's workflow, ensuring that the tools align with your specific project requirements. This flexibility makes it easier to manage and adapt to changes in your development process.

### Azure DevOps Server

With Azure DevOps Server, you can choose between the **Inheritance** process model and the **On-premises XML** process model.

- **Inheritance process model:** This model supports WYSIWYG (What You See Is What You Get) customization, allowing you to easily customize work item types, states, and fields directly through the user interface. This approach simplifies the customization process and ensures that changes are immediately reflected in your projects.

- **On-premises XML process model:** This model supports customization through the import or export of XML definition files for work-tracking objects. It provides a powerful and flexible way to define and manage your processes. However, it can cause various issues, such as:
  - Processes for existing projects aren't automatically updated, requiring manual intervention to apply changes.
  - The complexity of managing XML files can lead to errors and inconsistencies.
  - It might be challenging to maintain and troubleshoot customizations, especially in large or complex environments.

To help you avoid issues, custom process templates and the **witadmin.exe** tool are always disabled. This approach ensures that all projects are automatically updated with each Azure DevOps Services upgrade. The product team is working to make process customization easier and more sustainable. More improvements are expected in the future.

With the process customization capability, you can make changes directly within the web user interface (UI). If you prefer to customize your processes programmatically, you can use REST endpoints. Customizing projects this way ensures they're automatically updated when new versions of their base processes are released with Azure DevOps Services upgrades.

For more information, see [Customize your work-tracking experience](../reference/customize-work.md).

<a name="reporting"></a>

## Analytics and reporting

Azure DevOps Services and Azure DevOps Server offer various tools to provide insight into the progress and quality of your software projects. These tools include:

- **Dashboards and lightweight charts:** Available on both cloud and on-premises platforms, these tools are easy to set up and use. Dashboards provide a customizable overview of your project's status, while charts offer visual representations of key metrics and trends.

- **[The Analytics service](../report/powerbi/what-is-analytics.md) and [Analytics widgets](../report/dashboards/analytics-widgets.md):** Optimized for fast read-access and server-based aggregations, the Analytics service helps you gain deeper insights into your project's data. Analytics widgets can be added to your dashboards to display real-time data and trends.

- **[Microsoft Power BI integration](../report/powerbi/overview.md):** This integration allows you to bring Analytics data into Power BI reports, combining simplicity and power. With Power BI, you can create interactive and visually appealing reports that provide a comprehensive view of your project's performance.

- **[OData support](../report/extend-analytics/quick-ref.md):** OData support enables you to directly query the Analytics service from a supported browser and use the returned JSON data as needed. You can generate queries that span multiple projects or your entire organization, providing flexibility in how you analyze and utilize your data. For more information about the Analytics service, see our [Reporting roadmap](../report/powerbi/reporting-roadmap.md).

These tools offer robust capabilities for monitoring, analyzing, and reporting on the progress and quality of your software projects, helping you make informed decisions and drive continuous improvement.

## Related articles

- Explore [essential services](services.md)
- Discover [client-server tools](tools.md)
- Understand [software development roles](roles.md)
- Check [pricing for Azure DevOps Services](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- Check [pricing for Azure DevOps Server](https://azure.microsoft.com/pricing/details/devops/server/)
