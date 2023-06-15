---
title: Remove access to TFVC files
titleSuffix: Azure Repos
description: Remove access to files that are under version control in Team Foundation Version Control (TFVC).
ms.assetid: 4264ddaf-ef39-430a-a388-770e2d06b319
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/29/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Remove access to TFVC files

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]


As a Team Foundation Version Control (TFVC) administrator, you might have to remove access to a file that is under version control, for example a file that's infected with a virus. You can also permanently destroy version-controlled files. For more information, see [Destroy version controlled files](destroy-version-controlled-files.md).

> [!IMPORTANT] 
> If you remove the **Read** permission for the **Service Accounts** security group on a file or folder that is under version control, the VersionControl.Adapter might not be able to read the file or folder. If the adapter can't read the version control information in the data warehouse, the adapter writes a message in the application-tier event log similar to **The service account might not have permissions to retrieve this changeset**. Without the version control information from the file or folder, the data warehouse and subsequent version control reports might not be completely accurate.

## Prerequisites

To remove access to Team Foundation version control files, you must belong to the **Azure DevOps Administrators** group. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Remove access to a file under version control

The following procedures provide details for removing a file by using the Visual Studio user interface or the `tf` command-line utility. To remove access, you overwrite the bad file version with a clean version and add the clean version to the database. By setting the read/write permissions, you can prevent the file from appearing in **Source Control Explorer**.

> [!NOTE]
> Although the file remains in the database in a deleted state, don't remove the row for the file directly from the database, or you might experience unexpected results.

### Remove access to the file from Source Control Explorer

1. On the Visual Studio **View** menu, select **Other Windows** > **Source Control Explorer**.

1. In **Source Control Explorer**, right-click the file that you want to remove and select **Check Out for Edit**. For more information, see [Check out and edit files](check-out-edit-files.md).

1. In the **Check Out** dialog box, verify that the correct file is selected and select **Check Out**.

1. Create a new file and save the file in the same location and with the same name and extension as the latest version of the file that you want to overwrite.

1. Check in the file. For more information, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md).

   > [!NOTE]
   > You should make sure that any user who has a local copy of the file on their computer removes any reference to the file in **Solution Explorer**, and manually removes any copy of the file on their client computer.

1. In Windows File Explorer, right-click the file and select **Properties**.

1. In the **Properties** dialog box, select the **Security** tab, and then select **Advanced**.

1. In the **Advanced Security Settings** dialog box, select **Disable inheritance**.

1. In the **Disable inheritance** dialog box, select **Remove all inherited permissions from this object**.

1. In the **Advanced Security Settings** dialog box, select **Add**.

1. In the **Permission Entry** dialog box, select **Select a principal**.

1. Add the **Administrators** group, and select **OK**. Select **OK** again, and then select **OK** again on the **Properties** screen.

   The file is removed from **Source Control Explorer** for other users.

### Remove access to the file from the command line

1. Open the command line and use the `checkout` command of the `tf` utility to get a write-enabled version of the file that you want to remove. For example:

   ```
   tf checkout myfile.cs
   ```

1. Create a new file and overwrite the file that you want to remove.

1. Use the `tf checkin` command to replace the version of the file in the database.

   You can add a comment noting that you overwrote the file and that permissions are denied.

   ```
   tf checkin /comment:"Overwrote bad file and denied permissions."
   ```

1. Use the [permission](permission-command.md) command with the `/deny` option to deny permissions to that file for users or groups.

   For example, you can use the following command to deny read permissions on the file to groups on the `ADATUM` domain.

   ```
   tf permission /inherit:no myfile.cs

   tf permission /deny:read myfile.cs /group:ADATAUM\Group1 ADATAUM\Group2 myfile.cs
   ```

## Related articles

- [Control access to Team Foundation Version Control](control-access-team-foundation-version-control.md)