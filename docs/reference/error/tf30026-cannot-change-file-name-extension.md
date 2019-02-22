---
title: TF30026-You cannot change file name extension titleSuffix: Azure DevOps & TFS
description: Occurs when you try to change the file extension on a file stored on a server that hosts SharePoint Products.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 71f64811-274b-4274-a430-b3ef4b33bb20
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---
# TF30026: You cannot change the file name extension using Team Explorer. Do you want to continue?

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when you try to change the file extension on a file stored on a server that hosts SharePoint Products. SharePoint Products does not support changing file extensions after a file has been checked into SharePoint Products. If you continue with the name change, the characters you type will be made a part of the filename instead of the extension.  
  
 To change the file extension, you must copy the file to your local computer, rename the file, and then upload the renamed file to the document library. You can delete the file with the old extension if the file is no longer required.  
  
### To correct this error  
  
1.  Expand the **Documents** node, right-click the document that you want, and then click **Open**.  
  
2.  Save the document to a location on your local computer.  
  
3.  Rename the file extension on your local computer.  
  
4.  Under the **Documents** node, right-click the folder where the renamed file is to be stored, and then click **Upload Document**.  
  
5.  In the **Open** dialog box, locate the renamed file on your local computer, click the file, and then click **Open**.