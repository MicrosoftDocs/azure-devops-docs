---
title: TF30031-Team Explorer can't open a document... titleSuffix: Azure DevOps & TFS
description: Occurs when Team Explorer tries to open a document stored in the document library for a project.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 80812479-89ac-41e8-8f6f-21bd4254f863
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---

# TF30031: Team Explorer cannot open the document because the WebClient service is not running.

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when Team Explorer tries to open a document stored in the document library for a project. The WebClient service is not running on the local computer. You can use the procedure below to help you correct the problem.  
  
### To restart the WebClient service  
  
1.  On the local computer where Team Explorer is installed, click **Start**, and then click **Control Panel**.  
  
2.  In Control Panel, double-click **Administrative Tools**.  
  
3.  On the **Administrative Tools** dialog box, double-click **Services**.  
  
4.  Select **WebClient** from the list.  
  
5.  On the **Action** menu, click **Properties**.  
  
6.  Click the **General** tab of the **WebClient Properties** dialog box.  
  
7.  In the **Startup type** drop-down list, select **Automatic**, and then click **OK**.  
  
8.  Restart your computer.  
  
9. Retry the action you were performing when you encountered this error.