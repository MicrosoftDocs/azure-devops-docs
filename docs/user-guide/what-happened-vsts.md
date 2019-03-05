---
title: Visual Studio Team Services is now Azure DevOps Services
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Visual Studio Team Services has been rebranded and is now Azure DevOps Services
ms.prod: devops
ms.topic: article
ms.technology: devops-whitepapers
ms.manager: jillfra
ms.date: 02/25/2019
ms.author: chcomley
author: chcomley
monikerRange: '>= tfs-2013'
---

# Visual Studio Team Services is now Azure DevOps Services

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

On September 10, 2018, Microsoft renamed Visual Studio Team Services (VSTS) to Azure DevOps Services. For more information about this change, see [Introducing Azure DevOps](https://aka.ms/azurevsts).

VSTS features are now separate services:

> [!div class="mx-tdBreakAll"]
>| VSTS feature name    | Azure DevOps service name | Description |
> |----------------------|----------------------|-------------|
> | Build & release      | Azure Pipelines      | Continuous integration and continuous delivery (CI/CD) that works with any language, platform, and cloud. |
> | Code                 | Azure Repos          | Unlimited cloud-hosted private Git and Team Foundation Version Control (TFVC) repos for your project. |
> | Work                 | Azure Boards         | Work tracking with Kanban boards, backlogs, team dashboards, and custom reporting. |
> | Test                 | Azure Test Plans     | All-in-one planned and exploratory testing solution. |
> | Packages (extension) | Azure Artifacts      | Maven, npm, and NuGet package feeds from public and private sources. |


Currently, you can acquire only Azure Pipelines as a separate service. In the future, you'll be able to acquire each service separately or all together as Azure DevOps Services. If you are already a VSTS subscriber, you have access to all of the services now.  

> [!NOTE]   
> You can [disable select services from the user interface](../organizations/settings/set-services.md).

Follow the [Azure DevOps release notes](/azure/devops/release-notes/index) to get news on the latest updates.

## Can I still use visualstudio.com?

Yes. We've moved to the new `dev.azure.com` domain name as the primary URL for new organizations. (Specifically, it's `https://dev.azure.com/{your organization}/{your project}`.) If you want to change your URL to be based on `dev.azure.com` as the primary, an organization administrator can change this from the organization settings page.

We continue to post news about this transition on the [Microsoft DevOps blog](https://blogs.msdn.microsoft.com/devops/) and in the [Azure DevOps release notes](/azure/devops/release-notes/index).

## Team Foundation Server (TFS) is now called Azure DevOps Server

On November 19, 2018, Microsoft released the first release candidate (RC) of Azure DevOps Server 2019. Azure DevOps Server is the new name for the on-premises DevOps server product previously called Team Foundation Server. For more information about this change, see [Introducing Azure DevOps Server](/azure/devops/server/tfs-is-now-azure-devops-server).

Azure DevOps Server 2019 uses the new navigation user interface, with a vertical sidebar to navigate to the main service areas: **Boards**, **Repos**, **Pipelines**, and more. To learn more, see [Web portal navigation](../project/navigation/index.md).
