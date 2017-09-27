---
title: Work item save is slow to complete | VSTS & TFS
description: Occurs when you save a work item.
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit
ms.assetid: 367d2f3d-8dcd-4311-a411-7ba93217aabf
ms.manager: douge
ms.author: kaelli
ms.date: 01/20/2017
---
# Work item save is slow to complete
[!INCLUDE [temp](../../_shared/dev15-version-header.md)]

This problem might occur when you save a work item. The problem might be intermittent and difficult to reproduce.  
  
 **Possible Causes**  
  
 The client computer might not be configured to automatically detect the link speed of its network adapter. This setting might decrease performance between the client computer and Visual Studio Team Foundation Server.  
  
 **Solutions**  
  
 On the client computer, enable automatic detection of the link speed for the network adapter. For more information, see [Configure a network adapter to automatically adjust speed](configure-network-adapter-automatically-adjust-speed.md).