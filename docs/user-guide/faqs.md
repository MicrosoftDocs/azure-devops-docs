---
title: Questions and answers to support getting started VSTS & TFS
description: Questions and answers to support getting started using the hosted cloud offering of Visual Studio Team Services (VSTS) or on-premises Team Foundation Server (TFS)  
ms.technology: vs-devops-overview 
ms.prod: vs-devops-alm
ms.assetid: 50CA182B-D305-41A9-8C8F-9EA80A89ED3C
ms.manager: douge
ms.author: kaelli
ms.date: 03/02/2016
---

#FAQs

**VSTS | TFS 2018 | TFS 2017 | TFS 2015 | TFS 2013**
 
### Q: How do I get started?  
**A: To get started in the cloud or on-premises:** 
- To get started with Visual Studio Team Services (VSTS) begin by [creating a user account](https://www.visualstudio.com/team-services/). Step-by-step instructions are provided in [Sign up for VSTS](../accounts/create-account-msa-or-work-student.md).  
- To get started with an on-premises TFS, download and install the [latest version of TFS](https://www.visualstudio.com/downloads/). See [Install and configure TFS](../tfs-server/install/get-started.md) for details.  
- If you need to create a team project, create one in [VSTSs](../accounts/set-up-vs.md) or set one up in an [on-premises TFS](../accounts/create-team-project.md).   
- If you don't have access to the team project, [get invited to the team](../security/add-users-team-project.md).  
- If it's your first time connecting to a team project, see [Connect to a team project](connect-team-projects.md).  

**A: To get started with a client tool:** 
Go to one of these pages to download a version of Visual Studio or client tool plug-in that will support connecting to a team project: 
- [Visual Studio](https://www.visualstudio.com/downloads/) 
- [Eclipse/Team Explorer Everywhere](http://java.visualstudio.com/Docs/tools/eclipse)  
- [Android Studio with the VSTS Plugin for Android Studio](http://java.visualstudio.com/Docs/tools/androidstudio)
- [IntelliJ with the VSTS Plugin for IntelliJ](http://java.visualstudio.com/Docs/tools/intellij) 
- [Visual Studio Code](http://java.visualstudio.com/Docs/tools/vscode)

**A: To get started with sharing code, work item tracking, builds, or other tasks:** 
See [Software development roles](roles.md).  

### Q: What compatibility issues exist between client and server versions?  
 **A:** See [Requirements and compatibility](../accounts/requirements.md).  
 
### Q: Can stakeholders who don't use Visual Studio participate on our team?  
 **A**: Yes. You can provide access to stakeholders who have no CAL for the following activities:  
  
-   **Stakeholder access**: This view allows anyone on your team to check project status and provide feedback. Stakeholders can [track project priorities and provide direction, feature ideas, and business alignment to a team](../security/get-started-stakeholder.md).  
  
     To grant stakeholders access, add them to the [Stakeholder access group](../security/change-access-levels.md).  
  
-   **Provide feedback**: To allow your stakeholders to provide feedback, you must [grant them specific permissions](../feedback/give-permissions-feedback.md).  
  

### Q: Are there other clients that connect to VSTS or TFS? Are there other tools I can use?  
**A:** Yes. You can connect to a team project from one of these clients:  
- [Excel](../work/backlogs/office/bulk-add-modify-work-items-excel.md) (Requires the Team Foundation add-in is installed)  
- [Project](../work/backlogs/office/create-your-backlog-tasks-using-project.md)  (Requires the Team Foundation add-in is installed)  
- [Project Professional](../work/tfs-ps-sync/synchronize-tfs-project-server.md)   
- [PowerPoint Storyboarding](../work/backlogs/office/storyboard-your-ideas-using-powerpoint.md) (Requires the Team Foundation add-in is installed)  
- [Microsoft Test Manager](https://msdn.microsoft.com/library/jj635157.aspx)  
- [Test & Feedback extension (previously called the Exploratory Testing extension)](../manual-test/stakeholder/provide-stakeholder-feedback.md)
- [Microsoft Feedback Client](../feedback/give-feedback.md)  

>[!NOTE]  
>Native support for integrating TFS with Project Server is deprecated for TFS 2017. However, synchronization support is provided by a third part. See [Synchronize TFS with Project Server](../work/tfs-ps-sync/sync-ps-tfs.md) for details.  
>Test Manager is deprecated for TFS 2017.   

Also, you can find several open-source clients that have been added to [Marketplace extensions](https://marketplace.visualstudio.com). For example, you can install extensions to Visual Studio that support additional features:  
- For TFS 2017 and later versions, you can [install the TFS Process Template editor from the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=KarthikBalasubramanianMSFT.TFSProcessTemplateEditor). You can use this version of the Process Editor to modify the old-style work item forms. You can't use it to edit forms associated with the [new web forms](../work/customize/process/new-work-item-experience.md). 
- For TFS 2015 and earlier versions, you can install [TFS Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power) which provides enhancements, tools, and command-line utilities that support increased productivity.

> [!NOTE]  
> Team Foundation Server Power Tools is deprecated for TFS 2017 and later versions. 

  
## Related notes 
- [Key concepts](concepts.md)
- [Essential services](services.md)
- [Client-server tools](tools.md)
- [Software development roles](roles.md)


Have more questions? Search for an answer or pose a question in one of the community forums listed in [Provide product and content feedback, Platforms and version support](provide-feedback.md).
