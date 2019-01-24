---
title: TF30323-The New Team Project Wizard...titleSuffix: Azure DevOps & TFS
description: Display an error when the New Team Project Wizard could not retrieve the wizard page from the plug-in.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 7dd4174c-171a-4e3f-8470-e1a8089b93af
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---

# TF30323: The New Team Project Wizard could not retrieve the wizard page from the plug-in {0}.

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when the New Team Project Wizard attempts to use the process template you selected and encounters a problem with either the XML in the process template file or the plug-in {*name*}. The plug-in code indicates there is a wizard page, but the call to the designated wizard page returns either an error or a null value.  
  
 If you're receiving this error and you haven't customized the process template file, or it doesn't reference any third-party plug-ins, report your issue in the [Team Foundation Server - Process Templates forum](http://social.msdn.microsoft.com/Forums/home?forum=tfsprocess).  
  
### To correct this error  
  
-   Contact the third-party developer or vendor that provided the process template and plug-in.