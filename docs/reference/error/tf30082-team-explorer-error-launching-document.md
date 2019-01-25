---
title: TF30082-Team Explorer encountered error... 
description: Occurs when Team Explorer tries to open a document for editing with another application.
titleSuffix: Azure DevOps & TFS
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 99ee70ef-3389-4f78-a600-3772b70c0022
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: Troubleshooting
ms.date: 10/23/2017
---


# TF30082: Team Explorer encountered the following error while launching a document: {0}

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when Team Explorer tries to open a document for editing with another application, but the other application is not available on the local computer.  
  
 When you use the **Open** command to read a project document, Team Explorer calls Internet Explorer (or some other Internet browser) to open and display the document. When you use the **Edit** command to make changes in a project document, Team Explorer calls the Web Client service to open the application associated with the document file type. When using the **Edit** command, one of the following conditions can cause this error:  
  
-   There is no application configured in Windows Explorer (or File Explorer) to handle the file name extension of the document that you are trying to open.  
  
-   The associated application is not installed or is not available on the computer.  
  
### To correct this error when there is no application associated with the file type  
  
1.  On the **Start** menu, click **Control Panel**, and then double-click **Folder Options**.  
  
2.  In the **Folder Options** dialog box, click the **File Types** tab, and then click **New**.  
  
3.  In the **File Extension** text box, type the **file** name **extension**, and then click **Advanced>>**.  
  
4.  In the **Associated File Type** drop-down list, select the file type, and then click **OK**.  
  
5.  On the File Types tab of the **Folder Options** dialog box, select the extension and file type to be associated with an application, and then click **Change**.  
  
6.  In the **Windows** dialog box, select **Select the program from a list**, and then click **OK**.  
  
7.  In the **Open With** dialog box, select the program that you want to use to open this file, and then click **OK**.  
  
### To correct this error when the associated application is missing  
  
1.  If you are an Administrator on your computer, install the missing program.  
  
2.  Follow the steps in the section earlier to associate the file type with the application.  
  
3.  If the problem persists, contact your project administrator.