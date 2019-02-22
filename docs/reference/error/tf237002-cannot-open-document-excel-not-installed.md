---
title: TF237002-Cannot open the document... 
titleSuffix: Azure DevOps & TFS
description: Appears when a Team Foundation add-in has been disabled in an Office client.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: e10dc22d-2d09-40d8-8a90-37f6f54412ee
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: Troubleshooting
ms.date: 09/28/2018  
---

# TF237002: Cannot open the document because Microsoft Excel 2007 or later, or one of its components is not installed

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Error message TF237002 or TF400593 appears when a Team Foundation add-in has been disabled in an Office client, or Office Primary Interop Assemblies are not installed or were damaged after they were installed.  

 The **Team** menu or **Team** ribbon appears when you install Visual Studio. You can install Visual Studio Community or Team Foundation Server Standalone Office Integration 2015 for free [from the Visual Studio download page](http://www.visualstudio.com/downloads/download-visual-studio-vs).  
  
 If the **Team** menu or **Team** ribbon doesn't appear in your Office client, try re-enabling the Team Foundation add-in. If you continue to have problems, verify that the .NET Programmability Support option is configured correctly. As a final solution, try repairing your Office client.  
  
### To re-enable the Team Foundation Add-in in an Office client  
  
See [TFS-Office integration issues](../../boards/backlogs/office/tfs-office-integration-issues.md) or [How to: Re-enable an Add-in That Has Been Disabled](/visualstudio/vsto/how-to-re-enable-a-vsto-add-in-that-has-been-disabled).  
  
> [!TIP]
>  Usually you re-enable an add-in by choosing **COM add-ins**. However, if you don't see it there, choose the **Disabled Items** option.  
  
### To add a missing component in an Office client  
  
1.  See [Install or remove individual Office programs and components](https://support.office.com/article/download-and-install-or-reinstall-office-365-or-office-2016-on-a-pc-or-mac-4414eaaf-0478-48be-9c42-23adc4716658?ui=en-US&rs=en-US&ad=US).  
  
2.  Verify or configure the .NET Programmability Support option to **Run from My Computer**.  
  
     Locate the .NET Programmability Support option under Microsoft Excel or other client in the Office suite.  
  
     ![Install .NET Programmability Support option](_img/alm_em_netprogsupport.png "ALM_EM_NetProgSupport")  
  
### To repair your Office client  
  
-   See [Repair an Office application](https://support.office.com/article/repair-an-office-application-7821d4b6-7c1d-4205-aa0e-a6b40c5bb88b).