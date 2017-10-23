---
title: Attachment upload failed with the error 
description: This message might appear in a dialog box when you save a work item that has attachments 
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit
ms.assetid: 5d0e19c4-69fc-469e-93a0-f6d1ebd96777
ms.author: kaelli
ms.manager: douge
ms.date: 10/22/2017
---

# Attachment upload failed with the error: The underlying connection was closed: An unexpected error occurred on a receive

[!INCLUDE [temp](../../../_shared/dev15-version-header.md)]

This message might appear in a dialog box when you save a work item that has attachments. The problem might be intermittent and difficult to reproduce.  
  
**Possible Causes**  
  
The client computer might not be configured to automatically detect the link speed of its network adapter. This setting might decrease performance between the client computer and Visual Studio Team Foundation Server.  
  
**Solutions**  
  
On the client computer, enable automatic detection of the link speed for the network adapter. For more information, see [Configure a network adapter to automatically adjust speed](../configure-network-adapter-automatically-adjust-speed.md).