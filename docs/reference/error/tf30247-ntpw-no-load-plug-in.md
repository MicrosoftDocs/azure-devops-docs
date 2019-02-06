---
title: TF30247-The New Team Project Wizard ... 
titleSuffix: Azure DevOps & TFS
description: Occurs an error when a required plug-in is missing from the process template being used by the New Team Project Wizard to create a project.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 900b529d-989b-455e-960a-2553829b953f
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---

# TF30247: The New Team Project Wizard could not load the plug-in &quot;{0}&quot; for process template &quot;{1}&quot;. Select another process template or see the log file for more details

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]  

This error occurs when a required plug-in is missing from the process template being used by the New Team Project Wizard to [create a project](../../organizations/projects/create-project.md). Two conditions can cause this error:  
  
-   The name of the plug-in is missing or misspelled in the XML process template file.  
  
-   The plug-in is not installed on the local computer.  
  
 The following procedures will help you correct the error.  
  
### To correct this error if it is caused by an incorrect reference in the process template file  
  
1.  Perform one of the following steps:    
    -   If you are using a TFS default process template, ask your administrator to repair the installation of TFS.    
    -   If the process template is provided by another company, [download the process template](../../boards/work-items/guidance/manage-process-templates.md).     
2.  Open the process template, and examine the names of the plug-ins. If possible, find the plug-in that is named in the error message. Confirm that it is intact, or correct any errors that you find.    
3.  Upload the corrected process template to Team Foundation Server.   
4.  Run the New Team Project Wizard again.  
  
### To correct this error if it is caused by a missing plug-in  
  
-   Contact your Team Foundation Server administrator to have the plug-in installed on your computer, or select a different process template and try again.  
  
