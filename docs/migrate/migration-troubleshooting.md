---
title: Troubleshoot migration errors
titleSuffix: Azure DevOps
description: Resolve common Data Migration Tool validation errors. 
ms.topic: troubleshooting
ms.subservice: azure-devops-migrate
ms.custom: has-azure-ad-ps-ref, azure-ad-ref-level-one-done
ms.contentid: ee8c290d-0b48-4cbd-b7fd-7afb9591c169
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 05/17/2024
---

# Troubleshoot migration errors

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

The data migration tool flags errors that you need to correct prior to performing a migration to Azure DevOps Services. This article describes the most common warnings and errors that you might receive when you're preparing to migrate. After you correct each error, run the **migrator validate** command again to verify resolution.

> [!NOTE]
> We recommended that you use the [Migration guide](https://aka.ms/AzureDevOpsImport) to progress through your import. The guide links to the technical documentation as needed.
>
> With the release of Azure DevOps Server 2019, the Team Foundation Server (TFS) Database Import Service was re-branded to become the data migration tool for Azure DevOps. The data migration tool, **TfsMigrator** has been renamed **Migrator** for short. The service still works exactly the same as the previous import service. If you're on an older version of on-premises with TFS as the branding, you can still use **Migrator** to migrate to Azure DevOps as long as you upgrade to one of the supported versions. For details, see [Migrate data from Azure DevOps Server to Azure DevOps Services](migration-overview.md).

## Resolve size warnings

Extra-large collections might generate one of the following messages after running the Data Migration Tool. If you receive any of these warnings or errors, we recommend that you try to [reduce your database's size](/azure/devops/server/upgrade/clean-up-data). 

### Database size over recommended size

The following warning means you need to use the SQL Azure VM method to complete your migration. Once a database reaches a certain size, it becomes faster to set up a SQL Azure VM to complete the migration to Azure DevOps Services. To set up the VM and complete your migration, follow the instructions linked from the warning message. 

```cmdline
The database is currently {Database Size}GBs. This is above the recommended size of {DACPAC Size Limit}GBs to use the DACPAC migration method. Please see the following page to learn how to migration using a SQL Azure VM: https://aka.ms/AzureDevOpsImportLargeCollection
```

This warning **DOES NOT** mean that your collection is too large for migration. 

### Table size over recommended size

Similar to the previous warning, the following warning means you must use the SQL Azure Virtual Machine (VM) method to complete the migration. To set up the VM and complete your migration, follow the instructions linked from the warning message.  

```cmdline
The largest table size is currently {Table size}GBs. This is above the recommended size of {Size limit}GBs to use the DACPAC migration method. Please see the following page to learn how to migration using a SQL Azure VM: https://aka.ms/AzureDevOpsImportLargeCollection  
```

This warning **DOES NOT** mean that your collection is too large for migration. 

### Database metadata size over recommended size

The following warning means that your database is approaching the limit for total metadata size. Metadata size refers to the size of your database without including files, code, and other binary data. We recommend that you [reduce the size](/azure/devops/server/upgrade/clean-up-data) of your database before migration. Reducing the size provides the other benefit of speeding up your migration.

```cmdline
The database metadata size is currently {Metadata Size}GBs. This is above the recommended size of {Warning Size}GBs. It's recommended that you consider cleaning up older data as described in [Cleaning up old data](/azure/devops/server/upgrade/clean-up-data).
```

The warning **DOES NOT** mean that your collection is too large for migration, rather its metadata size is larger than most other databases. 

### Database metadata size over maximum supported size

Unlike the previous warnings, the following error **WILL** block you from moving forward with your migration. 

It indicates that the volume of metadata in your collection is too large. To proceed with the migration, you need to [reduce](/azure/devops/server/upgrade/clean-up-data) the size below the indicated limit.   

```cmdline
The database metadata size is currently {Metadata Size}GBs. This is above the maximum supported size of {Metadata Limit}GBs.
```

## Resolve collation warnings

Collation warnings refer to your collection database's collation. Collations control the way string values are sorted and compared. Collections that aren't using either `SQL_Latin1_General_CP1_CI_AS` or `Latin1_General_CI_AS` receive one of the **warning** messages.  

### No native support

Receiving the following warning means that you need to consider collation implications before performing the migration.  

```cmdline
The collection database's collation '{collation}' is not natively supported in Azure DevOps Services. Importing your collection will result in your collation being converted to one of the supported Azure DevOps Services collations. See more details at https://aka.ms/AzureDevOpsImportCollations
```

This warning **DOES NOT** mean that you can't migrate your collection.  

This warning requires you to acknowledge acceptance of the warning. Accepting the warning allows the Data Migration Tool to continue migration preparations.  

When you migrate an unsupported collation into Azure DevOps Services, the collation is transformed to a supported collation. While this transform generally works without issue, unexpected results post migration or migration failures could occur.  

For instance, customers might notice different ordering for strings containing non-English characters. Non-English characters like 'é' might become equivalent to the English 'e' after migration. It's important that you complete and verify a test run migration when importing a collection with a nonsupported collation.

### No native support, no internet connection

If the Data Migration Tool can't connect to the internet, it can't validate conversion of your collation. It's only a warning, so you can continue with your migration process. However, when you run the **prepare** command, an internet connection is required and collation conversion is validated at that time.

```cmdline
The collections database's collation '{collation}' is not natively supported in Azure DevOps Services. It could not be validated that the collation can be converted during migration to a supported Azure DevOps Services collation, as there was no internet connection. Please run the command again from a machine with an internet connection. See more details at https://aka.ms/AzureDevOpsImportCollations
```

### Unsupported database collation  

Generally you can convert a nonsupported collation to a supported collation at migration time. However, some collations can't be converted. If your collection uses one of these collations, you receive the following **error** message. 

```cmdline
The collection database's collation '{collation}' is not supported for migration to Azure DevOps Services. It will need to be changed to a supported collation before it can be imported. See more details at https://aka.ms/AzureDevOpsImportCollations
```

In order to continue, you need to [change your collection's collation](/sql/relational-databases/collations/set-or-change-the-database-collation) to one of the supported collations on Azure DevOps Services.
    
## Resolve identity errors

Fix identity errors before migration to prevent problems. They're rare and happen when old TFS operations are invalid on new Azure DevOps Server. For instance, some users can’t be in valid users group anymore.

The following sections provide guidance for resolving the most common identity errors.

### ISVError: 100014

This error indicates that a permission is missing from a system security group. For example, every collection that you create has Project Collection Valid Users and Project Collection Administrators groups. The system creates them  by default. These groups don't support editing of their permissions. 

This error indicates that one or more groups is missing a permission that it should have. To resolve this error, use the **TFSSecurity.exe** command to apply the expected permissions onto the flagged system groups. Your first step is to identify which [TFSSecurity](/azure/devops/server/command-line/tfssecurity-cmd) command you need to run.

#### Project Collection Valid Users error message

Examine one or more error messages the Data Migration Tool highlighted. If the flagged group ends with "**0-0-0-0-3**", such as in the following example, you need to fix a missing permission for the **Project Collection Valid Users** group. 

Run the following command, replace the scope with the one from the error message and specify your collection URL.

```cmdline
TFSSecurity.exe /a+ Identity "{scope}\\" Read sid:{Group SID} ALLOW /collection:{collectionUrl}
```

You determine the scope and group security ID (SID) from the error message. 

```cmdline
ISVError:100014 Missing permission for group:Microsoft.TeamFoundation.Identity;S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-3 for scope:397c326b-b97c-4510-8271-75aac13de7a9. Expected:1 and Actual:0 
```

The final command appears similar to the following entry:

```cmdline
TFSSecurity.exe /a+ Identity "397c326b-b97c-4510-8271-75aac13de7a9\\" Read sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-3 ALLOW /collection:https://localhost:8080/defaultcollection
```

#### Project Collection Administrators error message

Carefully examine the error messages the Data Migration Tool highlighted. If the flagged group that ends with "**0-0-0-0-1**", such as in the following example, then you need to fix a missing permission for the **Project Collection Administrators** group. Run the following commands against **TFSSecurity.exe**, replace the scope with the one from the error message and specify your collection.

```cmdline
TFSSecurity.exe /a+ Identity "{scope}\\" Read sid:{Group SID} ALLOW /collection:{collectionUrl}

TFSSecurity.exe /a+ Identity "{scope}\\" Write sid:{Group SID} ALLOW /collection:{collectionUrl}

TFSSecurity.exe /a+ Identity "{scope}\\" Delete sid:{Group SID} ALLOW /collection:{collectionUrl}

TFSSecurity.exe /a+ Identity "{scope}\\" ManageMembership sid:{Group SID} ALLOW /collection:{collectionUrl}
```

In the following example, take the scope and group `SID` from the error message and add them to the preceding command. 

```cmdline
ISVError:100014 Missing permission for group:Microsoft.TeamFoundation.Identity;S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1 for scope:0c7c2216-fa4b-4107-a203-82b324a147ef. Expected:15 and Actual:0 
```

The final command appears similar to the following entry:

```cmdline
TFSSecurity.exe /a+ Identity "0c7c2216-fa4b-4107-a203-82b324a147ef\\" Read sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1 ALLOW /collection:https://localhost:8080/defaultcollection

TFSSecurity.exe /a+ Identity "0c7c2216-fa4b-4107-a203-82b324a147ef\\" Write sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1 ALLOW /collection:https://localhost:8080/defaultcollection

TFSSecurity.exe /a+ Identity "0c7c2216-fa4b-4107-a203-82b324a147ef\\" Delete sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1 ALLOW /collection:https://localhost:8080/defaultcollection

TFSSecurity.exe /a+ Identity "0c7c2216-fa4b-4107-a203-82b324a147ef\\" ManageMembership sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1 ALLOW /collection:https://localhost:8080/defaultcollection
```

When you need to correct  multiple errors, we recommend that you create a batch file to automate execution of the commands. Once you execute the commands, rerun the data migration **validate** tool to verify resolution. If some errors still persist, contact [Azure DevOps Services customer support](https://aka.ms/AzureDevOpsImportSupport).

### ISVError: 300005

ISVError: 300005 indicates that a nongroup identity is a member of an everyone group, more commonly known as the Valid Users groups. Valid Users groups are default groups defined for all projects and collections. These groups aren't editable. They're designed to only contain other Azure DevOps permission or security groups as members. This error indicates that an Active Directory (AD) group or user identity has a direct membership in a Valid Users group. 

> [!IMPORTANT]
> Ensure that you have a backup of your collection and configuration databases before running the following commands to resolve the error. 

Since you can't directly edit Valid Users groups, you need to run a SQL statement against the configuration database to remove the offending identity and correct the invalid membership. Carefully examine the error messages highlighted by the Data Migration Tool. Copy the `GroupSid`, `MemberId`, and `ScopeId` as you need to place these values into the following command.

```SQL
DECLARE @p6 dbo.typ_GroupMembershipTable

INSERT into @p6 values('{GroupSid}','Microsoft.TeamFoundation.Identity','{MemberId}',0)
 
EXEC prc_UpdateGroupMembership @partitionId=1,@scopeId='{ScopeId}',@idempotent=1,@incremental=1,@insertInactiveUpdates=0,@updates=@p6,@eventAuthor='9EE20697-5343-43FC-8FC5-3D5D455D21C5',@updateGroupAudit=0
```

The following example lists an example of an ISVError: 300005 message from the Data Migration Tool. 

```cmdline
ISVError:300005 Unexpected non group identity was found to have direct membership to everyone group. GroupSid:S-1-9-1551374245-3746625149-2333054533-2458719197-2313548623-0-0-0-0-3, MemberId:76050ddf-4fd8-48c4-a1ff-859e44364519, ScopeId:7df650df-0f8b-4596-928d-13dd89e5f34f
```

If the error message lists a `MemberSid`, you need to get the `MemberID` from the dbo.tbl_Identity table in the configuration database. With the `MemberID`, you can then look up the GUID for the `MemberSid`.

```cmdline
ISVError:300005 Unexpected non group identity was found to have direct membership to everyone group. GroupSid:S-1-9-1551374245-3746625149-2333054533-2458719197-2313548623-0-0-0-0-3, MemberSid:System.Security.Principal.WindowsIdentity;S-1-5-21-124525095-708259637-1543119021-1737349, ScopeId:7df650df-0f8b-4596-928d-13dd89e5f34f
```
```SQL
DECLARE @MemberId uniqueidentifier 

SET @MemberId = (Select Id from dbo.tbl_Identity where Sid ='S-1-5-21-124525095-708259637-1543119021-1737349');

SELECT @MemberId
```

Copy the `GroupSid`, `MemberId`, and `ScopeId` into the SQL command.

```SQL

DECLARE @p6 dbo.typ_GroupMembershipTable

INSERT into @p6 values('S-1-9-1551374245-3746625149-2333054533-2458719197-2313548623-0-0-0-0-3','Microsoft.TeamFoundation.Identity','76050ddf-4fd8-48c4-a1ff-859e44364519',0)
 
EXEC prc_UpdateGroupMembership @partitionId=1,@scopeId='7df650df-0f8b-4596-928d-13dd89e5f34f',@idempotent=1,@incremental=1,@insertInactiveUpdates=0,@updates=@p6,@eventAuthor='9EE20697-5343-43FC-8FC5-3D5D455D21C5'
```
   
Run the completed command against the Azure DevOps Server configuration database. Repeat this command for each ISVError: 300005 instance reported. You can batch errors with the same scope ID into a single command. Once you execute the commands, rerun the Data Migration Tool validate again to ensure that the errors are corrected. If the errors still persist, contact [Azure DevOps Services customer support](https://aka.ms/AzureDevOpsImportSupport). 

> [!IMPORTANT]
> To address these errors, the collection must be attached. 
>
> If you receive a -1 result when you run the command, ensure that your collection database that produced the error is attached to your Azure DevOps Server instance and that you're running the command on the configuration database. 

<a name='azure-active-directory-timeout-exception'></a>

### Microsoft Entra timeout exception

On rare occasions, you might receive a Microsoft Entra timeout error when running the Data Migration Tool prepare command. 

```cmdline
Exception Message: Request failed (type AadGraphTimeoutException)
```

This error means that the requests to Microsoft Entra ID to find the matching Microsoft Entra identities for users in your collection timed out. Generally, you can resolve this error by waiting to run the **prepare** command at a less busy time of the day, such as after regular business hours. 

To troubleshoot, test Microsoft Entra ID connection from **prepare** machine. Follow these steps to get user info from Microsoft Entra ID.

Open PowerShell in elevated mode and replace 'someone@somecompany.com' in the following command with your Microsoft Entra user identity.  

```PowerShell
# Install the Microsoft Graph PowerShell module - ensuring to select Yes to All
Install-Module Microsoft.Graph 

# Import Users module
Import-Module Microsoft.Graph.Users

# Connect to Microsoft Entra and use your Microsoft Entra ID credentials (someone@somecompany.com) to login when the pop-up appears
Connect-MgGraph  -Scopes 'User.Read.All'

# Try to retrieve information on a user from your Microsoft Entra
Get-MgUser -Filter "UserPrincipalName eq 'someone@somecompany.com'"
```

If the steps fail or you can’t find the user, check the connection between the **prepare** machine and Microsoft Entra ID. Run a network trace with **prepare** to see if the network blocks calls. If not, contact Azure support. Check the log file for the user information.

```cmdline
Number of active users is {Number of Users}.
```

If the number of active users is over 50,000, the volume of identities being mapped might require more time than provided by the timeout limit. Inspect your collection for inclusions of large groups such as an 'everyone' group. If possible, remove these groups and try again. If you still can't resolve this error, contact [Azure DevOps Services customer support](https://aka.ms/AzureDevOpsImportSupport).

## Resolve process errors

See the separate [Process Templates](migration-processtemplates.md) page for details on resolving common process errors.

## Resolve field validation errors

<a name= "VS403310" ></a>
 
#### VS403310

The following error message can occur when an inconsistency in collection files is detected. Contact customer support if you encounter this error. 

`VS403310: An inconsistency was detected in some of the files in the collection.`
 
#### VS403442

Field name conflicts sometimes occur between your local collection and an Azure DevOps Services system field.

`In order to migrate successfully, you must rename field *{TFSfieldReferenceName}*. Given name *{TFSfieldName}* is reserved for field *{VSTSfieldReferenceName}*.`

To resolve this error, change the name of your collection field. Use the **witadmin changefield** command from [witadmin](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md).  

```cmdline
witadmin changefield /collection:http://AdventureWorksServer:8080/DefaultCollection /n:TFSfieldReferenceName /name:newFieldName
```

#### VS403443

The following error indicates a field name conflict exists between your local collection and a specific Azure DevOps Services field. 


`In order to migrate successfully, you must rename field *{TFSfieldReferenceName}* to *{VSTSfieldName}*. Given name for *{TFSfieldReferenceName}* is *{TFSfieldName}*`

To resolve this error, use the **witadmin changefield** command. For details, see [witadmin](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md).

```cmdline
witadmin changefield /collection:http://AdventureWorksServer:8080/DefaultCollection /n:TFSfieldReferenceName /name:VSTSfieldName
```

#### VS403444

The following error indicates a field type conflict exists between your local collection and Azure DevOps Services.  

Using [witadmin](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md), you can change the data type only for HTML or PlainText fields. 

`In order to migrate successfully, you must set type of field *{TFSfieldReferenceName}* to *{Type}*. Given type for *{TFSfieldReferenceName}* is *{collectionType}*.`

If your field type is HTML or PlainText, then you can change its type to the required type.

```cmdline
witadmin changefield /collection:http://AdventureWorksServer:8080/DefaultCollection /n:TFSfieldReferenceName  /type:PlainText | HTML
```

> [!NOTE]
> If your field type is something different than HTML or PlainText and field data isn't important or the field isn't used in any project, then we recommend you delete the field. 


```cmdline
witadmin deletefield /collection:http://AdventureWorksServer:8080/DefaultCollection /n:TFSfieldReferenceName
```

> [!IMPORTANT]
> Deleting a field results in a loss of field data across the collection.

## Resolve migration errors

Failures that occur during migration fall into one of two categories, [verification failure](#verification-failures) and [import failure](#import-failures).  

### Verification failures

Verification failures mean the migration didn't start. The Data Migration Tool attempted to queue a migration, but got an error instead. Your migration request isn't valid. Fix the error messages and then try to migration again.   

**VS403254**

The region that you entered for your Azure DevOps Services migration isn't supported. 

`VS403254: Region {0} might not be used for the Import, it is not a supported region.`

Open your migration specification file and update the region that you provided with the correct short name for the [region](migration-migration.md#supported-azure-regions-for-import). 

**VS403249**

The organization name your team selected is already in use by an existing organization. All Azure DevOps Services imports go into a new organization that is created at migration time. 

`VS403249: The organization {0} already exists. Please select a different name and try the migration again.`

Select a different organization name and update the migration specification file before retrying the migration. 

**VS403250 & VS403286**

The DACPAC isn't built off a detached collection. 

`VS403250: The dacpac is not a detached Azure DevOps Server Collection database.`

`VS403286: The dacpac is from a Azure DevOps Server Configuration database. You must use a detached Azure DevOps Server Collection database.`

[Detach](migration-migration.md#step-1-detach-your-collection) your collection database and generate the DACPAC again.

**VS403243**

Unable to make a connection to the database using the provided SQL Connection String. 

`VS403243: Unable to connect to the database using the provided SQL Connection String {0}.`

Review the parameters that were provided to ensure they're correct and try again.

**VS403260 & VS403351**

The collection database isn't detached.

`VS403260: The database is not detached.`

`VS403351: The DACPAC or source database is missing an expected table. It's possible that the database was not correctly detached from Azure DevOps Server.`

[Detach](migration-migration.md#step-1-detach-your-collection) your collection database and retry the migration queue.  

**VS403261**

The connection string must be encrypted otherwise the password is sent in the clear. 

`VS403261: The SQL connection string must use encryption.`
    
Add **Encrypt=true** to your SQL connection string.

**VS403262**

The connection string must use SQL Authentication. 

`VS403262: The SQL connection string must use SQL Authentication, Integrated Authentication is not supported.`

Add **Integrated Security=False** to your SQL connection string.

**VS403263**

Your SQL sign in user account doesn't have the required database role.

`VS403263: The User ID {0} must be member of the database role {1}.`

Make sure the user account for sign in is assigned the ['TFSEXECROLE'](migration-migration.md#configure-your-collection-for-import) role. 

> [!NOTE]   
> There is a known issue with using `sp_addrolemember` to add `TFSEXECROLE` to an existing SQL login. The role membership isn't applied until all open connections using that identity are closed. If you receive the VS403263 error and have confirmed your identity has the role, we recommend that you create a new identity for your migration. Details on how to create a new SQL login that's ready to be used for migration can be found at [Import large collections](migration-import-large-collections.md).

**VS403264**

The connection string doesn't point to an Azure DevOps Server collection database. 

`VS403264: The database is not a Azure DevOps Server Collection database, it cannot be used for migration.`

Verify or correct the connection string points to your collection database. 

**VS40325**

The Azure DevOps Server Update has queued the file migration job. Imports can't be performed until this job completes. The completion time for this job is dependent on the size of the collection. 

`VS403255: The collection cannot be imported due to an ongoing post upgrade job. Please wait and try again later`

You can track job progress by running the following query on the collection database:

```SQL 
SELECT  COUNT (*) as remaining_files_to_migrate
FROM    tbl_FileReference
WHERE   PartitionId > 0
        AND MigrateFileId IS NOT NULL
```

Once the number of files remaining to migrate is zero, you can run the Data Migration Tool. 

**VS403282**   

A new line character exists in the source location value. This character might remain after copying the SAS key from your windows console.

`VS403282: The source location parameter contains a new line character. Please ensure the SAS key is defined on a single line in the migration specification file.`

Remove the line break and try again.

**VS403271**   

Your migration files and DACPAC aren't located in the **required** Azure region to complete the migration to your target Azure DevOps Services region. 

`VS403271: It appears that your DACPAC was uploaded to East US. It's required that customers targeting Central US for migration put their DACPACs in Central US. Please move your DACPAC to Central US and requeue the migration.` 

[Create a new Microsoft Azure storage account](/azure/storage/common/storage-create-storage-account) in the required region and copy your files. The following example shows how to copy your data using **AzCopy**.

```cmdline
AzCopy.exe /Source:https://accountSCUS.blob.core.windows.net/mycontainer /SourceKey:"primary access key" /Dest:https://accountCUS.blob.core.windows.net/mycontainer /DestKey:"primary access key" /S
```

**VS403316**

Inconsistencies were detected in some Team Foundation version control (TFVC) files within your collection.

`VS403316: An inconsistency was detected in some TFVC files for this collection. The inconsistency needs to be corrected prior to running a migration to Azure DevOps Services. Please reach out to https://aka.ms/AzureDevOpsImportSupport for assistance with addressing this issue.`

Work with Azure DevOps Services [customer support](https://aka.ms/AzureDevOpsImportSupport). Open a support ticket and they work with you to resolve the error. 

**VS403366**

The Data Migration Tool was unable to connect to the SQL Azure VM. 

```
VS403366: A problem occurred while attempting to connect to your database. Please verify that your connection string is correct and that all required IP addresses for Azure DevOps Services have been provided exceptions for your machines firewall.

List of Azure DevOps Services IPs:
```

Verify that you entered the information correctly in your connection string and that you can connect to the VM. 

The IPs that the error message lists are for Azure DevOps Services. Azure DevOps Services IPs can change temporarily during deployments. Add them to your firewall exceptions and try queuing the migration again. For a list of IP addresses, see [Import large collections, Restrict access to Azure DevOps Services IPs only.](migration-import-large-collections.md#ips)

**VS403373**

The Data Migration Tool doesn't support importing multiple copies of the **SAME** collection. However, it **DOES** support importing **split** copies of a collection. Change the GUID for the **_DataImportCollectionID_**.

From SQL Server Management Studio (SSMS), open the extended properties for the split copies that you didn't migrate yet. Add a newly generated GUID to the "TFS_DATAIMPORT_COLLECTIONID" property. Then rerun the **prepare** command and use the new **migration.json** file to queue the migration.

**VS403379**

Data migration fails as one or more projects found in this collection are in the soft-deleted stage. Restore the soft-deleted projects or delete them permanently before running the data migration. For details, see [Delete a project](../organizations/projects/delete-project.md).

`VS403379: Data migration will fail as one or more projects found in this collection are in the soft-deleted stage. Please restore the soft-deleted project(s) or delete them permanently before running the data migration.`

Verify the collection against which you're running the Data Migration Tool has projects in the soft-deleted stage. Once a project is deleted, it remains in a soft-delete state for 28 days during which the deleted project can be restored. You can read about how to restore a deleted project in [Restore a project](../organizations/projects/delete-project.md#restore-a-deleted-project). If you have projects in the soft-deleted stage, remove them completely or restore them back before running data migration.

### Import failures

Import failures mean that the migration queued, but didn't complete. The individual who queued the migration receives a failure email notification. Most of the time this email includes a reason for the failure. If it does, use the troubleshooting steps provided in the email and this page to resolve the errors and retry your migration. 

If the error is more complex, then the email you receive provides instructions on how to file a [customer support case](https://aka.ms/AzureDevOpsImportSupport). After you submit a customer support case, your team must roll back by bringing your Azure DevOps Server instance back online and reattach your collection. Your team members can then continue working. We recommended that you don't try the migration again until the failure causing the issue gets resolved.
 
## Related articles

- 
- [Post-import](migration-post-import.md)
- [Delete a project](../organizations/projects/delete-project.md)
