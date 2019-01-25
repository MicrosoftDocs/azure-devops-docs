---
title: Manage documents and document libraries 
titleSuffix: TFS
description: Create documents libraries and share to all team members by uploading them to the project portal for the team project - Team Foundation Server 
ms.prod: devops
ms.technology: devops-analytics
ms.assetid: 405eea1b-d607-4cae-a98b-cca50c6ce41e
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 12/30/2016
ms.topic: conceptual
---

# Manage documents and document libraries

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

You can share documents and files that you want to make available to all team members by uploading them to the project portal for your team project. You can create document libraries and organize the files that you upload to your project portal within those libraries, in addition to folders and subfolders. The folders and subfolders always appear in alphabetical order.  
  
 Your team project's **Documents** page displays all the project portal document libraries as its child nodes. These nodes are the same names that appear when you click **Documents** in the project portal. The **Documents** node is another view of the document libraries on the project portal.  
  
 You can view documents by double-clicking them. You can also upload, delete, move, and perform other tasks on the documents, libraries, and folders.  
  
 When you create a team project, the process template that you use determines the default names and content of the folders that are located under the **Documents** node of Team Explorer. For a description of the documents that are provided with the Microsoft Solutions Framework (MSF) process templates, see [Agile process template](../../boards/work-items/guidance/agile-process.md) or [CMMI process template](../../boards/work-items/guidance/cmmi-process.md). You can add other folders to the Documents node. The folders and subfolders always appear in alphabetical order.  
  
 You can use Team Explorer or your project portal to manage documents and document libraries. For information about how to manage documents in the project portal, see the help information that is provided for SharePoint Products.  
  
 **Requirements**  
  
-   Your team project has a project portal enabled and is associated with a SharePoint site. The **Documents** page appears in Team Explorer only when these conditions are met. See [Configure or redirect process guidance](configure-or-redirect-process-guidance.md).  
  
-   You must be a member of the **Team Foundation Valid Users** security group. If the necessary security permissions are set explicitly, your **View project-level information** permission on the team project must be set to **Allow**.  
  
-   You must also have **Contribute** permissions set for the project portal in SharePoint Products.  
  
     For more information, see [Add users to team projects](../../organizations/security/set-sharepoint-permissions.md).  
  
##  <a name="TE_Uploading"></a> Upload a document  
  
#### To upload a document in Team Explorer  
  
1.  In Team Explorer, under the **Documents** node, right-click the folder where you want to upload the document, and then click **Upload Document**.  
  
2.  In the **Open** dialog box, click the document that you want to upload.  
  
     If necessary, use the navigation buttons to locate the document.  
  
3.  Click **Open**.  
  
     The document is uploaded to the folder that you right-clicked.  
  
#### To upload a document in Windows Explorer  
  
1.  In Team Explorer, expand the **Documents** node or child node where you want to upload the document.  
  
2.  In Windows Explorer, click the document that you want to upload, and then drag it to the folder or document library under the **Documents** node. Note that in Windows 8, Windows Explorer is File Explorer.  
  
##  <a name="TE_CreatingLibrary"></a> Create a document library  
  
#### To create a document library in Team Explorer  
  
1.  In Team Explorer, right-click the Documents node for the team project where you want to create the document library, and then click **New Document Library**.  
  
2.  Type a name for the library, and then press ENTER.  
  
##  <a name="TE_Adding"></a> Add a folder or subfolder  
  
#### To add a folder or subfolder in Team Explorer  
  
1.  In Team Explorer, right-click the folder that is above where you want to add the folder, and then click **New Folder**.  
  
> [!NOTE]
>  You can create folders only at the document library or folder levels. You cannot create a folder at the **Documents** node level.  
  
1.  Type a name for the new folder, and then press ENTER.  
  
##  <a name="TE_Moving"></a> Move, copy, or delete a document or folder  
  
#### To move or copy a document or folder to a new folder  
  
1.  In Team Explorer, right-click the document or folder, and then click **Cut** or **Copy**.  
  
2.  Right-click the target folder, and then click **Paste**.  
  
    > [!NOTE]
    >  If you create a list of work items as a document in one team project and then move or copy that list to another team project, the bindings and references in that list continue to the first team project. For example, if a list of work items is contained in a Microsoft Excel (.xls) or Microsoft Project (.mpp) file, these files continue to be bound to the team project where the work items are defined. If you move the files to another team project, you do not change the server bindings. For information about how to change the server to which a document is bound, see [Connect Excel or Project to a team project](../../organizations/projects/connect-to-projects.md).  
  
#### To delete a document or folder  
  
1.  In Team Explorer, right-click the document or folder, and then click **Delete**.  
  
2.  Click **OK**.  
  
##  <a name="TE_Renaming"></a> Rename a document or folder  
  
#### To rename a document or folder  
  
1.  Right-click the document or folder, and then click **Rename**.  
  
    > [!NOTE]
    >  You cannot rename a folder if it represents a document library.  
  
2.  Type a new name, and then press ENTER.  
  
    > [!NOTE]
    >  You cannot change the file name extension for a document by using Team Explorer or the project portal.  
  
## Related notes  
 [Work in Team Explorer](../../user-guide/work-team-explorer.md)