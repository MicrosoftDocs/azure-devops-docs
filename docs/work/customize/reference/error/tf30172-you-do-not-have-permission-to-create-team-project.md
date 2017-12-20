---
title: TF30172-You do not have permission to create a new team project. | VSTS & TFS
description: Display the error when you run the New Team Project Wizard.
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit
ms.assetid: 86cab4b8-7988-4cb7-b553-2cbb3ac70b29
ms.manager: douge
ms.author: kaelli
ms.date: 01/20/2017
---
# TF30172: You do not have permission to create a new team project

[!INCLUDE [temp](../../../_shared/dev15-version-header.md)]

You receive this error when your run the New Team Project Wizard under the following conditions:  
  
-   Your **Create team project** permission isn't set to Allow.  
  
     Correct this error by contacting your administrator and ask that the permission **Create new projects** be added to your user account.  
  
     If your on-premises TFS supports SharePoint Products or SQL Server Reporting Services, you might need to have permissions set for those products as well. See [Add accounts to administer project collections](../../../../security/set-project-collection-level-permissions.md).  
  
-   You're client version isn't compatible with the TFS version where you're trying to create a team project.  
  
     To create a team project or manage process templates on an on-premises TFS, you must connect using the same version level of Visual Studio or Team Explorer. That is, to create a team project for an on-premises TFS 2015, you must connect from Team Explorer 2015. You can [download and install released versions of Visual Studio Community](http://www.visualstudio.com/downloads/download-visual-studio-vs) in a side by side configuration for free.  
  
## Related notes  
- [Create a team project](../../../../accounts/create-team-project.md)   
- [Add administrators, set permissions at the project-level or project collection-level](../../../../security/set-project-collection-level-permissions.md)