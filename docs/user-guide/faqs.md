---
title: Questions and answers to support getting started
titleSuffix:  Azure DevOps
ms.custom: seodec18
description: FAQs to support getting started using the hosted cloud offering of Azure DevOps Services or on-premises Team Foundation Server (TFS)  
ms.technology: devops-new-user 
ms.prod: devops
ms.assetid: 50CA182B-D305-41A9-8C8F-9EA80A89ED3C
ms.manager: douge
ms.author: kaelli
ms.date: 12/06/2018
monikerRange: '>= tfs-2013'
---


# What are frequently asked questions about Azure DevOps?

[!INCLUDE [version-vsts-tfs-all-versions](../_shared/version-vsts-tfs-all-versions.md)]
 
## How do I get started?

### To get started in the cloud or on-premises 
- To get started with Azure DevOps Services, begin by [creating a user](https://visualstudio.microsoft.com/team-services/). See step-by-step instructions in [Sign up for Azure DevOps Services](../organizations/accounts/create-organization.md).  
- To get started with an on-premises Team Foundation Server (TFS), download and install the [latest version of TFS](https://visualstudio.microsoft.com/downloads/). See [Install and configure TFS](/tfs/server/install/get-started) for details.  
- If you need to create a project, create one in [Azure DevOps Services](../organizations/accounts/set-up-vs.md), or set one up in an [on-premises TFS](../organizations/projects/create-project.md).   
- If you don't have access to the project, [get invited to the team](../organizations/security/add-users-team-project.md).  
- If it's your first time connecting to a project, see [Connect to a project](../organizations/projects/connect-to-projects.md).  

### To get started with a client tool 
Go to one of these pages to download a version of Visual Studio or client tool plug-in that supports connecting to a project: 
- [Visual Studio](https://visualstudio.microsoft.com/downloads/) 
- [Eclipse/Team Explorer Everywhere](/../java/download-eclipse-plug-in.md)  
- [Android Studio with the Azure DevOps Services Plugin for Android Studio](/../java/download-android-studio-plug-in.md)
- [IntelliJ with the Azure DevOps Services Plugin for IntelliJ](/../java/download-intellij-plug-in.md) 
- [Visual Studio Code](/../java/vscode-extension.md)

### To get started with sharing code, work item tracking, builds, or other tasks 
See [Software development roles](roles.md).  

## What compatibility issues exist between client and server versions?

See [Requirements and compatibility](/tfs/server/requirements).  


## Can stakeholders who don't use Visual Studio participate on our team?

Yes. You can provide access to stakeholders who have no client access license for the following activities:  

-   **Stakeholder access**: This view allows anyone on your team to check project status and provide feedback. Stakeholders can [track project priorities and provide direction, feature ideas, and business alignment to a team](../organizations/security/get-started-stakeholder.md).  
  
     To grant stakeholders access, add them to the [Stakeholder access group](../organizations/security/change-access-levels.md).  
  
-   **Provide feedback**: To allow your stakeholders to provide feedback, you must [grant them specific permissions](../project/feedback/give-permissions-feedback.md).  
  

## Are there other clients that connect to Azure DevOps Services or TFS? Are there other tools I can use?

Yes. You can connect to a project from one of these clients:  
- [Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md) (requires Team Foundation add-in)  
- [Project](../boards/backlogs/office/create-your-backlog-tasks-using-project.md)  (requires Team Foundation add-in)  
- [Project Professional](../reference/tfs-ps-sync/synchronize-tfs-project-server.md)   
- [PowerPoint Storyboarding](../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md) (requires Team Foundation add-in)  
- [Microsoft Test Manager](https://msdn.microsoft.com/library/jj635157.aspx)  
- [Test & Feedback extension (previously called the Exploratory Testing extension)](../test/provide-stakeholder-feedback.md)
- [Microsoft Feedback Client](../project/feedback/give-feedback.md)  

>[!NOTE]  
>Native support for integrating TFS with Project Server is deprecated for TFS 2017. However, synchronization support is provided by a third party. See [Synchronize TFS with Project Server](../reference/tfs-ps-sync/sync-ps-tfs.md) for details.  
>Test Manager is deprecated for TFS 2017.   

Also, you can find several open-source clients that have been added to [Marketplace extensions](https://marketplace.visualstudio.com). For example, you can install extensions to Visual Studio that support additional features:  
- For TFS 2017 and later versions, you can [install the TFS Process Template editor from the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=KarthikBalasubramanianMSFT.TFSProcessTemplateEditor). You can use this version of the Process Editor to modify the old-style work item forms. You can't use it to edit forms associated with the [new web forms](../reference/process/new-work-item-experience.md). 
- For TFS 2015 and earlier versions, you can install [TFS Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power). This provides enhancements, tools, and command-line utilities that support increased productivity.

> [!NOTE]  
> Team Foundation Server Power Tools is deprecated for TFS 2017 and later versions. 


## Related articles

- [Key concepts](concepts.md)
- [Essential services](services.md)
- [Client-server tools](tools.md)
- [Software development roles](roles.md)


Have more questions? Search for an answer or pose a question in one of the community forums listed in [Provide product and content feedback, Platforms and version support](provide-feedback.md).
