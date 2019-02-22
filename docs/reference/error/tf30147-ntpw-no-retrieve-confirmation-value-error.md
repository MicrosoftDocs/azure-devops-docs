---
title: TF30147-The New Team Project Wizard ... 
description: Occurs when the New Team Project Wizard is building the  wizard page that summarizes all the selections you made and text you typed up to that point.
titleSuffix: Azure DevOps & TFS
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 6347fdd8-cac5-4614-91b4-ef4d5f4dc06d
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: Troubleshooting
ms.date: 10/23/2017
---


# TF30147: The New Team Project Wizard could not retrieve the confirmation values because of the error: {0}

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when the New Team Project Wizard is building the **Confirm Team Project Settings** wizard page that summarizes all the selections you made and text you typed up to that point. Each wizard page contributes text to the confirmation page, and if the contributing wizard page encounters an unexpected error while passing the text, this error is displayed. The procedures below will help you correct this error.  
  
### To correct this error  
  
1.  Close the New Team Project Wizard and try running the wizard again.  
  
2.  If you get this error message again, review the project creation error log to identify the name of the plug-in.  
  
    1.  Open Notepad.  
  
    2.  On the **File** menu, click **Open**.  
  
    3.  Navigate to $:\Documents and Settings\\*user name*\Local Settings\Temp\Team Services_TeamProjectCreation_yyyy_mm_dd_hh_mm_ss.log.  
  
    4.  Click **Open**.  
  
    5.  On the **Edit** menu, click **Find**.  
  
    6.  In the **Find what** dialog box, type **Exception**, and then click **Find Next**.  
  
    7.  Review the log entry and note the name of the plug-in and the vendor.  
  
3.  Contact the vendor who created or supplied the plug-in.  
  
## Related articles  
- [Create a project](../../organizations/projects/create-project.md)