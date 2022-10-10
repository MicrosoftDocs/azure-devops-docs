---
title: What is Azure DevOps?
titleSuffix: Azure DevOps 
ms.custom: seodec18, contperf-fy21q3, engagement-fy23
ms.topic: overview
description: Get an integrated set of features to help you plan, code, collaborate, and ship your applications faster.
ms.subservice: azure-devops-new-user
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/10/2022
---

# What is Azure DevOps?

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure DevOps supports a collaborative culture and set of processes that bring together developers, project managers, and contributors to develop software. It allows organizations to create and improve products at a faster pace than they can with traditional software development approaches.

You can work in the cloud using [Azure DevOps Services](services.md) or on-premises using Azure DevOps Server. For more information, see [Differences between Azure DevOps Services and Azure DevOps Server](about-azure-devops-services-tfs.md).

Azure DevOps provides integrated features that you can access through your web browser or IDE client. You can use all the services included with Azure DevOps, or choose just what you need to complement your existing workflows.

|Standalone service   |Description  |
|---------------------|-------------|
|[Azure Boards](https://azure.microsoft.com/services/devops/boards/)| Delivers a suite of Agile tools to support planning and tracking work, code defects, and issues using Kanban and Scrum methods. For more information about Azure Boards, see [What is Azure Boards?](../boards/get-started/what-is-azure-boards.md).      |
|[Azure Repos](https://azure.microsoft.com/services/devops/repos/)| Provides Git repositories or Team Foundation Version Control (TFVC) for source control of your code. For more information about Azure Repos, see [What is Azure Repos?](../repos/get-started/what-is-repos.md).          |
|[Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/)| Provides build and release services to support continuous integration and delivery of your applications. For more information about Azure Pipelines, see [What is Azure Pipelines?](../pipelines/get-started/what-is-azure-pipelines.md).        |
|[Azure Test Plans](https://azure.microsoft.com/products/devops/test-plans/)   | Provides several tools to test your apps, including manual/exploratory testing and continuous testing. For more information about Azure Test Plans, see [Overview of Azure Test Plans](../test/overview.md).       |
|[Azure Artifacts](https://azure.microsoft.com/products/devops/artifacts/)  | Allows teams to share packages such as Maven, npm, NuGet, and more from public and private sources and integrate package sharing into your pipelines. For more information about Azure Artifacts, see [Overview of Azure Artifacts](../pipelines/artifacts/artifacts-overview.md).        |

Azure DevOps supports adding extensions and integrating with other popular services, such as: Campfire, Slack, Trello, UserVoice, and more, and developing your own custom extensions.  

## Choose Azure DevOps Services

Azure DevOps *Services* supports integration with GitHub.com and GitHub Enterprise Server repositories. Choose Azure DevOps Services when you want the following outcomes:

- Quick set-up
- Maintenance-free operations
- Easy collaboration across domains
- Elastic scale
- Rock-solid security

Azure DevOps Services also gives you access to cloud build and deployment servers, and application insights.
[Start for free](sign-up-invite-teammates.md) and create an organization. Then, either upload your code to share or source control. Begin tracking your work using Scrum, Kanban, or a combination of methods.

For more information, see the [Azure DevOps and GitHub integration overview](../cross-service/github-integration.md).

## Choose Azure DevOps Server

Azure DevOps *Server* supports integration with GitHub Enterprise Server repositories. Choose on-premises Azure DevOps Server when:

- You need your data to stay within your network.
- Your work tracking customization requirements are met better with the on-premises XML process model over the inheritance process model. The on-premises model supports modification of XML definition files.

When you deploy Azure DevOps Server, you can also configure the following servers or integration points:

- **Build server** supports on-premises and cloud-hosted builds.
- **SQL Server and SQL Analysis Server** support SQL Server Reports and the ability to create Excel pivot charts based on the cube.

Start for free by downloading [Azure DevOps Server Express](https://go.microsoft.com/fwlink/?LinkId=2041269&clcid=0x409). Then, either upload your code to share or source control. Or, begin tracking your work using Scrum, Kanban, or a combination of methods.

For more information about managing Azure DevOps Server, see the [Administrative tasks quick reference](/azure/devops/server/admin/admin-quick-ref).

## Next steps  

> [!div class="nextstepaction"]
> [Sign up for Azure DevOps Services](sign-up-invite-teammates.md) or [Install Azure DevOps Server](/azure/devops/server/install/single-server)

## Related articles

- [A tour of services](services.md)
- [Data protection overview](../organizations/security/data-protection.md)
- [Client-server tools](tools.md)
- [Software development roles](roles.md)
- [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Azure DevOps and GitHub integration overview](../cross-service/github-integration.md)
