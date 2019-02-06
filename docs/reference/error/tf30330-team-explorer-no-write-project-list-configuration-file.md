---
title: TF30330-Team Explorer cannot write...titleSuffix: Azure DevOps & TFS
description: Display an error when Team Explorer cannot establish read/write access to the project list configuration file.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 656c2e1d-3a52-4f1e-a41f-7a794a32ac94
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---


# TF30330: Team Explorer cannot write to the project list configuration file. Free up space on the local hard disk.

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when Team Explorer can't establish read/write access to the project list configuration file. There are at least three possible conditions that can cause this error:  
  
-   The local hard disk is full and has no additional space for writing to the file    
-   You do not have sufficient user permissions to write to the file    
-   The folder containing the configuration file is set to read-only.  
  
These causes are listed in the most likely order of occurrence, and the procedures below will help you correct the cause.  
  
### To correct this error when the disk is full  
  
-   Delete files from the local hard disk and try the operation again.  
  
### To correct this error when you do not have the appropriate permissions  
  
-   Contact the Team Foundation Server administrator and ask him or her to add the necessary permissions to your user account.  
  
### To correct this error when the folder is read-only  
  
-   Contact the administrator for the local computer and ask that the attribute on the folder be set to read/write.