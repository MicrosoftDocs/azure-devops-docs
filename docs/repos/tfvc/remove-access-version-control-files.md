---
title: Remove Access to Version Control Files
titleSuffix: Azure Repos
description: Remove Access to Version Control Files
ms.assetid: 4264ddaf-ef39-430a-a388-770e2d06b319
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Remove Access to Version Control Files

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

As a Team Foundation administrator, you may have to remove access to a file that is under version control. For example, someone may check in a file infected with a virus. You can also permanently destroy version controlled files. For more information, see [Destroy Version Controlled Files](destroy-version-controlled-files.md).

The following procedure provides the details for removing the file by using the user interface or the **tf** command-line utility. Access is removed by overwriting the bad version with a clean version and adding the clean version to the database. By setting the read/write permissions, you can prevent the file from appearing in Source Control Explorer.

>**Note:**  
>Although the file remains in the database in a deleted state, do not remove the row for the file directly from the database or you may experience unexpected results.

&nbsp;

>**Caution:**  
>If you remove the **Read** permission for the **Service Accounts** security group on a file or folder that is under version control, the VersionControl.Adapter might not be able to read the file or folder. If the adapter cannot read the version control information in the data warehouse, the adapter will write a message in the application-tier event log similar to **The service account might not have permissions to retrieve this changeset**. Without the version control information from the file or folder, the data warehouse, and subsequent version control reports might not be completely accurate.

**Required Permissions**

To remove access to Team Foundation version control files, you must belong to the **Team Foundation Administrators** group. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

### To remove access to a file under version control

1.  On the Visual Studio **View** menu, click **Other Windows**, and then click **Source Control Explorer**.

2.  Locate and check out the file that you want to remove. For more information, see [Check Out and Edit Version-Controlled Items](check-out-edit-files.md).

3.  In the **Check Out** dialog box, verify that the correct file is selected, then click **Check Out** in the **Select lock type** options.

4.  Create a new file and save the file in the same location and with the same name and extension as the latest version of the file that you want to overwrite.

5.  Check in the file. For more information, see [Check In Pending Changes](https://msdn.microsoft.com/library/ms181411).

    >**Note:**  
    >You might want to make sure that any client user who has a local copy of the file on their computer, removes any reference to the file in Solution Explorer and manually removes any copy of the file on their client computer.

6.  Right-click the file and then click **Properties** to open the **Properties** dialog box for the file. On the **Properties** dialog box, click the **Security** tab, and clear the **Inherit Security Settings** box.

7.  Click **deny** for each user and group except **Administrators**.

8.  Click **OK** and the file is removed for other users from Source Control Explorer.

### To remove access to the file from the command line

1.  Open the command line and use the **CheckOut** command of the **tf** utility to obtain a write-enable version of the file that you want to remove. For example:

    **tf checkout myfile.cs**

2.  Create a new file and overwrite the file that you want to remove.

3.  Use the **CheckIn** command to replace the version of the file in the database.

    For example, you might want to add a comment describing that you overwrote the file and that the permissions are denied.

    **tf checkin /comment:"Overwrote bad file and denied permissions."**

4.  Use the **permission** command together with the **/deny** option to change the permissions to that file for a user or a group.

    For example, you can use the following command to deny read permissions on the file to groups on the ADATUM domain.

    **tf permission /inherit:no myfile.cs**

    **tf permission /deny:read myfile.cs /group:ADATAUM\\Group1 ADATAUM\\Group2 myfile.cs**

## See Also

#### Tasks

[Control Access to Team Foundation Version Control](control-access-team-foundation-version-control.md)
