---
title: TF30170-The plug-in {0} failed 
titleSuffix: Azure DevOps & TFS
description: Occurs an error when a third-party plug-in does not operate in the manner the New Team Project Wizard expected it to operate.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 47085404-d5ec-4811-9fbd-84da3be422e6
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---

# TF30170: The plug-in {0} failed during task {1} from group {2}

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when a third-party plug-in does not operate in the manner the New Team Project Wizard expected it to operate, and the plug-in does not return a meaningful error message about the problem.  
  
 The error message displayed by the New Team Project Wizard provides the name of the plug-in, the name of the Task in the process template XML file the wizard was attempting to perform, and the name of the Group in the process template XML file where you can find the Task.  
  
### To correct this error  
  
1.  Contact the developer or vendor that provided the plug-in.  
  
2.  If the problem persists, reinstall the third-party plug-in.  
    
## Related articles 
- [Create a project](../../organizations/projects/create-project.md)