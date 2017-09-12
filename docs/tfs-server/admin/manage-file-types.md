---
title: Managing File Types for Team Foundation Server
description: Managing File Types for Team Foundation Server
ms.assetid: e88eaec2-9e63-4fa4-94e6-6c95bae963ce
ms.manager: douge
ms.author: elbatk
ms.date: 08/18/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Managing File Types for Team Foundation Server

**TFS 2017** | **TFS 2015** | **TFS 2013**

File type definitions allow you to customize the way Team Foundation version control processes files with specific extensions. By defining a file type, you can disable files with certain extensions from being merged and thereby, prevent multiple users from checking them out in parallel.

> [!NOTE]
> By default, file merging and multiple check-out is enabled.

> [!NOTE]
> Multiple check-out can be disabled at the team project level.

## File Type Properties

A Team Foundation file type definition consists of three properties. The most important of these properties is File Extension, which is the unique identifier for a file type.

| Property | Example |
| --- | --- |
| Name | Visual Basic File |
| File Extension | .vb |
| Enable File Merging and Multiple Checkout | Yes |

As a Team Foundation administrator, you might want to specify that files of certain types, such as binary Microsoft Excel files (*.xls) for which a merging tool does not exist, cannot be merged when conflicts are detected and can only be checked out by one user at a time. You can control this by selecting **Enable File Merging and Multiple Checkout** in the **Edit File Type** dialog box. For more information, see [Edit File Type Association with Team Foundation Version Control](#edit-file-type). If a file type does not exist for a given extension, files with that extension can be merged.

## File Ecodings

In addition to these basic file type properties, Team Foundation also tracks the file encoding for each file on the version control server. You can override the default encoding for a file from the version control Properties window opened from Source Control Explorer, or using the command line interface. For more information, see [Configure Version Control File Encoding](#config-file-encodings) and [Checkout and Edit Commands](../../tfvc/checkout-or-edit-command.md).


<a name="edit-file-type"></a>
## Edit File Type Association with Team Foundation Version Control

File type definitions let you customize the way the Team Foundation version control system processes files that have specific extensions. By defining a file type, you control whether files that have a particular extension can have internal keywords expanded during a check-in, and whether multiple users can modify a specific file in parallel. The following procedure demonstrates how to change a file type extension association in version control.

**Required Permissions:**

To edit a file type association, you must have the Edit server-level information permission set to Allow. For more information, see Team Foundation Server Permissions.

To change a file type association in version control:

  1. On the **Team** menu, click **Team Foundation Server Settings**, and then **Source Control File Types�**. The **File Types** dialog box displays a listing of the file extensions currently associated with version control.

  2. Click **Edit�**.

  3. On the **Edit File Type** dialog box, in the **Name** box, type a description for the file type; for example, Word Documents to add Microsoft Word document file association to version control.

  4. In the **File Extension** box, type the file type extension; for example, doc for Microsoft Word document files.

  5. Optionally select the **Enable file merging and multiple checkout** box (selected by default).

  6. Click **OK** to return to the **File Types** dialog box and see that the new entry is reflected.

> [!TIP]
> You can specify multiple file type extension associations with a single name; for example you could add **dot** to the Word Documents name entered earlier.
 

<a name="config-file-encodings"></a>
## Configure Version Control File Encoding

Team Foundation version control properties include general file and folder information and the file encoding type. The properties also list the pending check-in status, security information, and branching history. For more information, see [View Version Control File and Folder Properties](https://msdn.microsoft.com/en-us/library/ms245468(v=vs.110).aspx).

> [!NOTE]
> Team Foundation version control properties are not viewed in Visual Studio's Properties Window. They are viewed in their own **Properties** dialog box, as described in the procedure below.
 
**Required Permissions:**

To perform these procedures, you must have the Read and the Check out permissions set to Allow. For more information, see [Team Foundation Server Permissions](../../security/permissions.md).

To configure version control file encoding:

  1. Open Source Control Explorer. On the View menu, click Other Windows, and then click Source Control Explorer.

  2. In Source Control Explorer, click the Workspace drop-down list box in the toolbar, and select the workspace you want to use.

  3. Go to a file for which you want to view properties, right-click, and then click Properties.

  4. In the Properties dialog box, select the General tab.

  5. In the General tab, click Set Encoding.

  6. In the Set Encoding dialog box, use the Encoding drop-down list box to select the encoding base type you want to be used for the file, for example, utf-8.

    > **Tip:**
    > Click **Detect** to have the system detect the file encoding scheme used with the file and populate the list box.

  7. Click **OK**.

> [!NOTE]
> The set encoding results in a pending change that must be checked in.
 

<a name="add-file-types"></a>
## Add File Type Association with Team Foundation Version Control

File type definitions allow you to customize the way the version control system processes files with specific extensions. By defining a file type, you control whether files with a given extension allow multiple users to be able to modify a specific file in parallel. The following procedure demonstrates how to add a file type extension association in version control.

**Required Permissions:**

To add a file type association, you must have the **Edit server-level information** permission set to **Allow**. For more information, see [Team Foundation Server Permissions](../../security/permissions.md).

To add a file type association to version control:

  1. On the **Team** menu, click **Team Foundation Server Settings**, and then click **Source Control File Types**. The **File Types** dialog box is displayed listing the file extensions currently associated with version control.

  2. Click **Add**.

  3. From the **Add File Type** dialog box, in the **Name** box, type a description for the new file type, for example, **Word Documents**, to add a Microsoft Word document file association to version control.

  4. In the **File Extension** box, type or click the file type extension, for example **doc**, for Microsoft Word document files.

  5. Optionally, select the **Enable file merging and multiple check out** check box (selected by default).

  6. Click **OK** to return to the **File Types** dialog box with the new entry reflected.

> [!TIP]
> You can specify multiple file type extensions to be associated with a single name, for example you could add **dot** to the **Word Documents** name entered in this procedure.
 

<a name="remove-file-types"></a>
## Remove a File Type Associated with Team Foundation Version Control

File type definitions let you customize the way the version control system handles files that have specific extensions. By defining a file type, you control whether files that have a particular extension can have internal keywords expanded during a check-in, and whether multiple users can modify a specific file in parallel. For information about adding file type associations to version control, see [Add File Type Association with Team Foundation Version Control](#add-file-types). The following procedure demonstrates how to remove a file type extension associated with version control.

**Required Permissions:**

To remove a file type association, you must have the **Edit server-level information** permission set to Allow. For more information, see [Team Foundation Server Permissions](../../security/permissions.md).

To remove a file type associated with version control:

  1. On the **Team** menu, click **Team Foundation Server Settings**, and then click Source Control File Types. 

  The **File Types** dialog box appears. It displays a list of the file name extensions that are currently associated with version control.

  2. Highlight the file type extension you want to remove and then click **Remove**. 

  The entry is erased and no longer appears in the **File Types** dialog box.

  3. Click **OK**.

