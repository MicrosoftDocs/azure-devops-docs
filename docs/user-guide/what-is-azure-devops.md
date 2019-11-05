---
title: Plan, code, collaborate, ship applications using cloud hosted or on-prem services
titleSuffix: Azure DevOps 
ms.custom: seodec18
description: Get an integrated set of features to help you plan, code, collaborate, and ship your applications faster.
ms.prod: devops
ms.technology: devops-new-user
ms.assetid:  
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
ms.date: 11/08/2019
ms.topic: overview
monikerRange: '>= tfs-2013'
---

# What is Azure DevOps?

[!INCLUDE [version-vsts-tfs-all-versions](../boards/_shared/version-vsts-tfs-all-versions.md)]

Azure DevOps provides developer services to support teams to plan work, collaborate on code development, and build and deploy applications. Developers can work in the cloud using Azure DevOps Services or on-premises using Azure DevOps Server. Azure DevOps Server was formerly named Visual Studio Team Foundation Server (TFS).

Azure DevOps provides an integrated set of features. You can access the features through your web browser or IDE client. You can acquire one or more of the following services based on your business needs:

- **Azure Repos** provides Git repositories or Team Foundation Version Control (TFVC) for source control of your code
- **Azure Pipelines** provides build and release services to support continuous integration and delivery of your apps
- **Azure Boards** delivers a suite of Agile tools to support planning and tracking work, code defects, and issues using Kanban and Scrum methods
- **Azure Test Plans** provides several tools to test your apps, including manual/exploratory testing and continuous testing
- **Azure Artifacts** allows teams to share Maven, npm, and NuGet packages from public and private sources and integrate package sharing into your CI/CD pipelines

You can also acquire collaboration tools that include the following:

- Customizable team dashboards with configurable widgets to share information, progress, and trends
- Built-in wikis for sharing information
- Configurable notifications

Azure DevOps supports adding extensions and integrating with other popular services, such as: Campfire, Slack, Trello, UserVoice, and more, and developing your own custom extensions.  

For information on the differences between the cloud versus on-premises platforms, see [Azure DevOps Services vs. Azure DevOps Server](about-azure-devops-services-tfs.md).

## Choose Azure DevOps Services

Choose Azure DevOps Services when you want the following results:

- Quick set-up
- Maintenance-free operations
- Easy collaboration across domains
- Elastic scale
- Rock-solid security

To learn more about data protection, see [Data protection overview](../organizations/security/data-protection.md).

You also have access to cloud build and deployment servers, and application insights.

We've made it easy for you to start for free and try out our services.

Sign up for free by creating an organization. Then, either upload your code to share or source control. Begin tracking your work using Scrum, Kanban, or a combination of methods.

You can use all the services included with Azure DevOps, or choose just what you need to complement your existing workflows.

- **[Azure Boards](https://azure.microsoft.com/services/devops/boards/)**. Plan, track, and discuss work across your teams.
- **[Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/)**. Continuously build, test, and deploy to any platform and cloud.
- **[Azure Repos](https://azure.microsoft.com/services/devops/repos/)**. Get unlimited, cloud-hosted private Git repositories for your project.

## Choose Azure DevOps Server

Choose on-premises Azure DevOps Server when your business needs require:

- Your data to stay within your network.
- Your work tracking customization requirements are met better with the On-premises XML process model over the Inheritance process model. The On-premises model supports modification of XML definition files.

When you deploy Azure DevOps Server, you can also configure the following servers or integration points:

- **Build server** supports on-premises and cloud-hosted builds.
- **SQL Server and SQL Analysis Server** support SQL Server Reports and the ability to create Excel pivot charts based on the cube.

Start for free by downloading [Azure DevOps Server Express](https://go.microsoft.com/fwlink/?LinkId=2041269&clcid=0x409). Then, either upload your code to share or source control. Or, begin tracking your work using Scrum, Kanban, or a combination of methods.

To learn more about managing Azure DevOps Server, see the [Administrative tasks quick reference](/azure/devops/server/admin/admin-quick-ref).

## Name changes

On September 10, 2018, Microsoft renamed Visual Studio Team Services (VSTS) to Azure DevOps Services. For more information about this change, see [Introducing Azure DevOps](https://aka.ms/azurevsts).

On November 19, 2018, Team Foundation Server had a Release Candidate as **Azure DevOps Server 2019 RC 1**. Team Foundation Server is the on-premises server software for developer collaboration and DevOps services.

<a id="vsts" />

### Visual Studio Team Services is now Azure DevOps Services

Many of the featured services in VSTS are now offered as standalone services in both Azure DevOps Services and Azure DevOps Server RC 1:

> | VSTS feature name    | Azure DevOps service name | Description |
> |----------------------|----------------------|-------------|
> | Build & release      | Azure Pipelines      | Continuous integration and continuous delivery (CI/CD) that works with any language, platform, and cloud. |
> | Code                 | Azure Repos          | Unlimited cloud-hosted private Git and Team Foundation Version Control (TFVC) repositories for your project. |
> | Work                 | Azure Boards         | Work tracking with Kanban boards, backlogs, team dashboards, and custom reporting. |
> | Test                 | Azure Test Plans     | All-in-one planned and exploratory testing solution. |
> | Packages (extension) | Azure Artifacts      | Maven, npm, and NuGet package feeds from public and private sources. |

Both Azure DevOps Services and Azure DevOps Server 2019 use the new navigation user interface, with a vertical sidebar to navigate to the main service areas: **Boards**, **Repos**, **Pipelines**, and more. To learn more, see [Web portal navigation in Azure DevOps](../project/navigation/index.md).

You can acquire each service separately or all together as Azure DevOps Services. If you're already a VSTS subscriber, you have access to all of the services now.  

> [!NOTE]
> You can disable select services from the user interface. For more information, see [Turn a service on or off](../organizations/settings/set-services.md).

## Choose your content version

We support a platform/version selector. Toggle the Content version selector dropdown, located above the table of contents, to access the content that is specific to your version. The table of contents and content page refresh to show only that content specific to the selected version.

![Documentation version selector](../_shared/_img/version-selector.png)

## Try these tasks next  

> [!div class="nextstepaction"]
> [Sign up for Azure DevOps Services](sign-up-invite-teammates.md) or [Install Azure DevOps Server](/azure/devops/server/install/single-server)

## Related articles

- [A tour of services](services.md)
- [Client-server tools](tools.md)
- [Software development roles](roles.md)
- [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Azure DevOps release notes](/azure/devops/release-notes/index)
- [Azure DevOps blog](https://blogs.msdn.microsoft.com/devops/)

### Can I still use visualstudio.com to access Azure DevOps Services?

Yes. We've moved to the new `dev.azure.com` domain name as the primary URL for new organizations. That URL is `https://dev.azure.com/{your organization}/{your project}`. If you want to change your URL to be based on `dev.azure.com` as the primary, an organization administrator can do so from the organization settings page.

<!---
[Small teams can start for free!](https://visualstudio.microsoft.com/products/visual-studio-team-services-vs.aspx)  
[DevOps overview for Azure DevOps Services and TFS](index.md)


[![Sign up for Azure DevOps Services](_img/what-is-vsts-sign-up-step-1.png)](sign-up-invite-teammates.md)[![Add code to repository](_img/what-is-vsts-add-code-ide-step-2.png)](code-with-git.md)

*(c) 2016 Microsoft Corporation. All rights reserved. This document is
provided "as-is." Information and views expressed in this document,
including URL and other Internet Web site references, may change without
notice. You bear the risk of using it.*

*This document does not provide you with any legal rights to any
intellectual property in any Microsoft product. You may copy and use
this document for your internal, reference purposes.*
--> 
