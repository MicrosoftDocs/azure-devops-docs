---
title: Underlying connection was closed titleSuffix: Azure DevOps & TFS
description: Occurs when users save work items, check in code merges, or perform other operations on a large number of files.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 31712682-bbb2-4821-b5a4-dd5eb215d18a
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---

# Underlying connection was closed

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

When users save work items, check in code merges, or perform other Team Foundation operations on a large number of files, a dialog box might appear that contains the phrase "The underlying connection was closed." The problem might be intermittent and difficult to reproduce.  
  
**Possible Causes**  
  
The client computer might not be configured to automatically detect the link speed of its network adapter. This setting can decrease performance between the client computer and Visual Studio Team Foundation Server.  
  
**Solutions**  
  
On the client computer, enable automatic detection of the link speed for the network adapter. For more information, see [Configure a network adapter to automatically adjust speed](../xml/configure-network-adapter-automatically-adjust-speed.md).