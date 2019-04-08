---
title: Questions and answers to support getting started
titleSuffix:  Azure DevOps
ms.custom: seodec18
description: FAQs to support getting started using the hosted cloud offering and on-premises offering of Azure DevOps
ms.technology: devops-new-user 
ms.prod: devops
ms.assetid: 50CA182B-D305-41A9-8C8F-9EA80A89ED3C
ms.manager: jillfra
ms.author: kaelli
ms.date: 04/05/2019
monikerRange: '>= tfs-2013'
---

# FAQs about signing up and getting started

[!INCLUDE [version-vsts-tfs-all-versions](../_shared/version-vsts-tfs-all-versions.md)]

Signing up for Azure DevOps is now easier than ever - it's a two-minute process. See the following FAQs, which contain links for getting started.

::: moniker range="azure-devops"

## How do I sign up for the cloud?

- [Sign up and get started in Azure DevOps Services - a two-minute process](../organizations/accounts/create-organization.md).
- You can also sign up and get started with only a single service in Azure DevOps:
  - [Azure Pipelines](../pipelines/get-started/pipelines-sign-up.md)
  - [Azure Repos](../repos/get-started/sign-up-invite-teammates.md)
  - [Azure Boards](../boards/get-started/sign-up-invite-teammates.md)
  - [Azure Artifacts](../artifacts/index.md)
  - [Azure Test Plans](../test/index-tp.md)

::: moniker-end

::: moniker range="<= azure-devops-2019"

## How do I get started on-premises?

- Download and install [Azure DevOps Server](https://azure.microsoft.com/en-us/services/devops/server/)

::: moniker-end

::: moniker range="<= tfs-2018"

## How do I get started on-premises?

- To get started with an on-premises instance, download and install the [latest version of TFS](https://visualstudio.microsoft.com/downloads/). 
- [Configure the installation](/azure/devops/server/install/get-started), which creates a default  collection.
- If you need to create a project, [create one on-premises](../organizations/projects/create-project.md).
- If you don't have access to the project, [get invited to the team](../organizations/security/add-users-team-project.md).  
- If it's your first time connecting to a project, see [Connect to a project](../organizations/projects/connect-to-projects.md).  

## How do I connect with a client tool?

Go to one of the following pages to download a version of Visual Studio or client tool plug-in that supports connecting to a project:

- [Visual Studio](https://visualstudio.microsoft.com/downloads/) 
- [Eclipse/Team Explorer Everywhere](/../java/download-eclipse-plug-in.md)  
- [Android Studio with the Azure DevOps Services Plugin for Android Studio](/../java/download-android-studio-plug-in.md)
- [IntelliJ with the Azure DevOps Services Plugin for IntelliJ](/../java/download-intellij-plug-in.md)
- [Visual Studio Code](/../java/vscode-extension.md)

::: moniker-end

## How much does Azure DevOps cost?

See the following links for pricing:

- [Azure DevOps Services pricing](https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/)
- [Azure DevOps on-premises pricing](https://azure.microsoft.com/en-us/pricing/details/devops/on-premises/)
- [Azure Pipelines only pricing](https://azure.microsoft.com/en-us/pricing/details/devops/azure-pipelines/)

## How do I share code?

See about [sharing code](roles.md#software-developers).

## How do I track work?

See [Plan and track work](plan-track-work.md).

## What do I do as an admin?

See [Administrator roles](roles.md#administrator-roles).

## What client-server compatibility issue are there?

See [Requirements and compatibility](/azure/devops/server/requirements).  

## Can stakeholders who don't use Visual Studio participate on our team?

Yes. You can provide access to stakeholders who have no client access license for the following activities:  

- **Stakeholder access**: This view allows anyone on your team to check project status and provide feedback. Stakeholders can [track project priorities and provide direction, feature ideas, and business alignment to a team](../organizations/security/get-started-stakeholder.md).  
  
     To grant stakeholders access, add them to the [Stakeholder access group](../organizations/security/change-access-levels.md).  
  
- **Provide feedback**: To allow your stakeholders to provide feedback, you must [grant them specific permissions](../project/feedback/give-permissions-feedback.md).  

::: moniker range="<= tfs-2018"

## Are there other clients that connect to Azure DevOps? Are there other tools I can use?

Yes. You can connect to a project from one of the following clients:

- [Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md) (requires Team Foundation add-in)  
- [Project](../boards/backlogs/office/create-your-backlog-tasks-using-project.md)  (requires Team Foundation add-in)  
- [Project Professional](../reference/tfs-ps-sync/synchronize-tfs-project-server.md)
- [PowerPoint Storyboarding](../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md) (requires Team Foundation add-in)  
- [Microsoft Test Manager](https://msdn.microsoft.com/library/jj635157.aspx)  
- [Test & Feedback extension (previously called the Exploratory Testing extension)](../test/provide-stakeholder-feedback.md)
- [Microsoft Feedback Client](../project/feedback/give-feedback.md)  

::: end-moniker

::: moniker range="= tfs-2017"

>[!NOTE]  
>Native support for integrating TFS with Project Server is deprecated for TFS 2017. However, synchronization support is provided by a third party. See [Synchronize TFS with Project Server](../reference/tfs-ps-sync/sync-ps-tfs.md) for details.  
>Test Manager is deprecated for TFS 2017.

You can also find several open-source clients that have been added to [Marketplace extensions](https://marketplace.visualstudio.com). For example, you can install extensions to Visual Studio that support additional features:

::: moniker-end

::: moniker range=">= tfs-2017"

- For TFS 2017 and later versions, you can [install the TFS Process Template editor from the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=KarthikBalasubramanianMSFT.TFSProcessTemplateEditor). You can use this version of the Process Editor to modify the old-style work item forms. You can't use it to edit forms associated with the [new web forms](../reference/process/new-work-item-experience.md).

::: moniker-end

::: moniker range="<= tfs-2015"

- For TFS 2015 and earlier versions, you can install [TFS Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power). TFS Power Tools provides enhancements, tools, and command-line utilities that support increased productivity.

::: moniker-end

::: moniker range=">= tfs-2017"

> [!NOTE]  
> Team Foundation Server Power Tools is deprecated for TFS 2017 and later versions.

::: moniker-end

## Why can't I connect to a project?

See [Troubleshoot connection](troubleshoot-connection.md).

## Related articles

- [Essential services](services.md)
- [Client-server tools](tools.md)
- [Software development roles](roles.md)
- [Azure DevOps Support](https://azure.microsoft.com/support/devops/)
- [Live chat](https://visualstudio.microsoft.com/vs/support/#talktous) (English only)


