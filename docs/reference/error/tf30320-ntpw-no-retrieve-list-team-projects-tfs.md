---
title: TF30320-The New Team Project Wizard...titleSuffix: Azure DevOps & TFS
description: Display an error when the New Team Project Wizard could not retrieve the list of projects on the Team Foundation Server.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 252752a7-ec21-465e-878c-1d303ee60284
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---

# TF30320: The New Team Project Wizard could not retrieve the list of projects on the Team Foundation Server {0}.

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when the New Team Project Wizard attempts to check the Team Foundation Server {*name*} to determine if there is already a project with the name you typed. The wizard has already established a connection with the server, but the connection is no longer working.  
  
 The likely causes of this problem are:  
  
-   The network is not available    
-   The Team Foundation server is not available    
-   There is an unexpected problem with the CommonStructureService Web service.  
  
 The procedures below will help you correct the cause.  
  
### To correct this error  
  
1.  Confirm that your local computer is plugged into the network and can access network resources.  
  
2.  Contact the administrator for the Team Foundation Server *name* to confirm that the server is available on the network.  
  
3.  Contact the administrator for the Team Foundation Server *name* for further instructions.