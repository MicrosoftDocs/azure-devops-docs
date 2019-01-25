---
title: Attachment upload failed with the error 
titleSuffix: Azure DevOps & TFS
description: This message might appear in a dialog box when you save a work item that has attachments 
ms.prod: devops
ms.technology: devops-agile
ms.assetid:  
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.topic: Troubleshooting
ms.date: 10/22/2017
---

# Attachment upload failed with the error: The underlying connection was closed: An unexpected error occurred on a receive

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This message might appear in a dialog box when you save a work item that has attachments. The problem might be intermittent and difficult to reproduce.  
  
**Possible Causes**  
  
The client computer might not be configured to automatically detect the link speed of its network adapter. This setting might decrease performance between the client computer and Visual Studio Team Foundation Server.  
  
**Solutions**  
  
On the client computer, enable automatic detection of the link speed for the network adapter. For more information, see [Configure a network adapter to automatically adjust speed](../xml/configure-network-adapter-automatically-adjust-speed.md).