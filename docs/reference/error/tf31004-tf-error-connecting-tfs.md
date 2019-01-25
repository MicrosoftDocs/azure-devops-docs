---
title: TF31004-Team Foundation error...titleSuffix: Azure DevOps & TFS
description: Occurs when the instance of Team Foundation on the local computer cannot connect to the application-tier server for Team Foundation Server.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: f0bcc998-859f-4b75-bb3d-3976cd8578f6
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---

# TF31004: Team Foundation encountered an unexpected error while connecting to Team Foundation Server {0}

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This is a generic error message displayed when the instance of Team Foundation on the local computer cannot connect to a Team Foundation Server and no error message was returned by a specific component within Team Foundation Server.  
  
 The likely causes of this problem are:  
  
-   The version of Team Foundation running on the local computer does not match the version running on the Team Foundation Server server {name}.  
  
-   The server returned HTML content instead of XML content.  
  
-   The required Web service on the server could not be found.  
  
 The procedure below will help you correct the cause.  
  
### To correct this error  
  
-   Contact your Team Foundation Server administrator for the server {*name*} for further instructions.