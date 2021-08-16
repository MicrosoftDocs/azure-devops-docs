---
title: Troubleshoot migration import to Azure DevOps Services
titleSuffix: Azure DevOps
description: Resolve common DataMigratorTool validation errors 
ms.topic: troubleshooting
ms.technology: devops-migrate
ms.contentid: ee8c290d-0b48-4cbd-b7fd-7afb9591c169
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 12/16/2019
---

# Troubleshoot import and migration errors

[!INCLUDE [version-azure-devops](includes/version-azure-devops.md)]

The data migration tool flags errors that you need to correct prior to performing a migration to Azure DevOps Services. This article describes the most common warnings and errors that you may receive when preparing to migrate. After correcting each error, run the **migrator validate** command again to verify resolution of all errors.


> [!NOTE]
> We recommended that you use the [Migration guide](https://aka.ms/AzureDevOpsImport) to progress through your import. The guide links to the technical documentation as needed.
>
> With the release of Azure DevOps Server 2019, the TFS Database Import Service was re-branded to become the data migration tool for Azure DevOps. The data migration tool, **TfsMigrator** has been renamed **migrator** for short. The service still works exactly the same as the previous import service. If you're on an older version of on-premises with TFS as the branding, you can still use **migrator** to migrate to Azure DevOps as long as you upgrade to one of the supported versions. For details, see [Migrate data from Azure DevOps Server to Azure DevOps Services](migration-overview.md).


## Resolve size warnings

Extra-large collections may generate one of the following messages after running the data migration tool. If you receive any of these warnings or errors, we recommend that you try to [reduce your database's size](/azure/devops/server/upgrade/clean-up-data). 

### Database size above recommended size

The following warning means you need to use the SQL Azure VM method to complete your import. Once a database reaches a certain size, it becomes faster to setup a SQL Azure VM to complete the import to Azure DevOps Services. To setup the VM and complete your import, follow the instructions linked from the warning message. 

```cmdline
The database is currently {Database Size}GBs. This is above the recommended size of {DACPAC Size Limit}GBs to use the DACPAC import method. Please see the following page to learn how to import using a SQL Azure VM: https://aka.ms/AzureDevOpsImportLargeCollection
```

This warning **DOES NOT** mean that your collection is too large for import. 

### Table size above recommended size

Similar to the previous warning, the following warning means you must use the SQL Azure VM method to complete the import. Follow the instructions linked from the warning message to setup the VM and complete your import.  

```cmdline
The largest table size is currently {Table size}GBs. This is above the recommended size of {Size limit}GBs to use the DACPAC import method. Please see the following page to learn how to import using a SQL Azure VM: https://aka.ms/AzureDevOpsImportLargeCollection  
```

This warning **DOES NOT** mean that your collection is too large for import. 

### Database metadata size above recommended size

The following warning means that your database is approaching the limit for total metadata size. Metadata size refers to the size of your database without including files, code, and other binary data. We recommend that you [reduce the size](/azure/devops/server/upgrade/clean-up-data) of your database before import. Reducing the size provides the additional benefit of speeding up your import.

```cmdline
The database metadata size is currently {Metadata Size}GBs. This is above the recommended size of {Warning Size}GBs. It's recommended that you consider cleaning up older data as described in [Cleaning up old data](/azure/devops/server/upgrade/clean-up-data).
```

The warning **DOES NOT** mean that your collection is too large for import, rather its metadata size is larger than the vast majority of other databases. 

### Database metadata size above maximum supported size

Unlike the previous warnings, the following error **WILL** block you from moving forward with your migration. 

It indicates that the volume of metadata in your collection is too large. To proceed with the import, you need to [reduce](/azure/devops/server/upgrade/clean-up-data) the size below the indicated limit.   

```cmdline
The database metadata size is currently {Metadata Size}GBs. This is above the maximum supported size of {Metadata Limit}GBs.
```



## Resolve collation warnings

Collation warnings refer to your collection database's collation. Collations control the way string values are sorted and compared. Collections that aren't using either SQL_Latin1_General_CP1_CI_AS or Latin1_General_CI_AS will generally receive one of the **warning** messages.  

### No native support

Receiving the following warning means that you need to consider collation implications before performing the import.  

```cmdline
The collection database's collation '{collation}' is not natively supported in Azure DevOps Services. Importing your collection will result in your collation being converted to one of the supported Azure DevOps Services collations. See more details at https://aka.ms/AzureDevOpsImportCollations
```

This warning **DOES NOT** mean that you can't import your collection.  

This warning requires you to acknowledge acceptance of the warning. Accepting the warning allows the data migration tool to continue import preparations.  

When you import a non-supported collation into Azure DevOps Services, the collation is transformed to a supported collation. While this transform generally works without issue, unexpected results post import or import failures could occur.  

For instance, customers may notice different ordering for strings containing non-English characters. Non-English characters like 'é' may become equivalent to the English 'e' after import. It's important that you complete and verify a dry run import when importing a collection with a non-supported collation.

### No native support, no internet connection

If the data migration tool can't connect to the internet, it can't validate conversion of your collation. It's only a warning, so you can continue with your migration process. However, when you run the **prepare** command, an internet connection is required and collation conversion is validated at that time.

```cmdline
The collections database's collation '{collation}' is not natively supported in Azure DevOps Services. It could not be validated that the collation can be converted during import to a supported Azure DevOps Services collation, as there was no internet connection. Please run the command again from a machine with an internet connection. See more details at https://aka.ms/AzureDevOpsImportCollations
```

### Unsupported database collation  

Generally you can convert a non-supported collation to a supported collation at import time. However, some collations can't be converted. If your collection uses one of these collations, you'll receive the following **error** message. 

```cmdline
The collection database's collation '{collation}' is not supported for import to Azure DevOps Services. It will need to be changed to a supported collation before it can be imported. See more details at https://aka.ms/AzureDevOpsImportCollations
```

In order to continue, you need to [change your collection's collation](/sql/relational-databases/collations/set-or-change-the-database-collation) to one of the supported collations on Azure DevOps Services.
    
## Resolve identity errors

Identity errors aren't common when validating a collection, but when they do occur you need to fix them prior to migration to avoid undesired results. Generally, identity problems stem from valid operations on previous versions of TFS that are no longer valid on your current Azure DevOps Server version. For example, while is was once allowed for some users to be members of a built-in valid users group, it isn't in the more recent versions. 

The following sections provide guidance for resolving the most common identity errors.

### ISVError: 100014

This error indicates that a permission is missing from a system security group. For example, every collection that you create has Project Collection Valid Users and Project Collection Administrators groups. The system creates them  by default. These groups don't support editing of their permissions. 

This error indicates that one or more groups is missing a permission that it's expected to have. To resolve this error, use the **TFSSecurity.exe** command to apply the expected permissions onto the flagged system groups. Your first step is to identify which [TFSSecurity](/azure/devops/server/command-line/tfssecurity-cmd) command(s) you need to run.

#### Project Collection Valid Users error message

Examine the error message(s) the data migration tool highlighted. If the flagged group ends with "**0-0-0-0-3**", such as in the example below, you need to fix a missing permission for the **Project Collection Valid Users** group. 

Run the following command, replace the scope with the one from the error message and specify your collection URL.

```cmdline
TFSSecurity.exe /a+ Identity "{scope}\\" Read sid:{Group SID} ALLOW /collection:{collectionUrl}
```

You determine the scope and group SID from the error message. 

```cmdline
ISVError:100014 Missing permission for group:Microsoft.TeamFoundation.Identity;S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-3 for scope:397c326b-b97c-4510-8271-75aac13de7a9. Expected:1 and Actual:0 
```

The final command appears similar to the following entry:

```cmdline
TFSSecurity.exe /a+ Identity "397c326b-b97c-4510-8271-75aac13de7a9\\" Read sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-3 ALLOW /collection:https://localhost:8080/defaultcollection
```

#### Project Collection Administrators error message

Carefully examine the error message(s) the data migration tool highlighted. If the flagged group that ends with "**0-0-0-0-1**", such as in the example below, then you will need to fix a missing permission for the **Project Collection Administrators** group. Run the following commands against **TFSSecurity.exe**, replace the scope with the one from the error message and specify your collection.

```cmdline
TFSSecurity.exe /a+ Identity "{scope}\\" Read sid:{Group SID} ALLOW /collection:{collectionUrl}

TFSSecurity.exe /a+ Identity "{scope}\\" Write sid:{Group SID} ALLOW /collection:{collectionUrl}

TFSSecurity.exe /a+ Identity "{scope}\\" Delete sid:{Group SID} ALLOW /collection:{collectionUrl}

TFSSecurity.exe /a+ Identity "{scope}\\" ManageMembership sid:{Group SID} ALLOW /collection:{collectionUrl}
```

In the following example, take the scope and group SID from the error message and add them to the preceding command. 

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

When you need to correct  multiple errors, we recommend that you create a batch file to automate execution of the commands. Once you've executed the commands, you need to rerun the data migration **validate** tool to verify resolution. If some errors still persist, contact [Azure DevOps Services customer support](https://aka.ms/AzureDevOpsImportSupport).

### ISVError: 300005

ISVError: 300005 indicates that a non-group identity is a member of an everyone group, more commonly known as the Valid Users groups. Valid Users groups are default groups defined for all projects and collections. They're non-editable groups that only contain other Azure DevOps security groups as members.This error indicates that an AD group or user identity has a direct membership in a Valid Users group. 

> [!IMPORTANT]
> Ensure that you have a backup of your collection and configuration databases before running the following commands to resolve the error. 

Since you can't directly edit Valid Users groups, you need to correct the invalid membership by running a SQL statement against the configuration database to remove the offending identity. Carefully examine the error messages the data migration tool highlights. Copy down the GroupSid, MemberId, and ScopeId as you'll need to place these values into the following command.

```SQL
DECLARE @p6 dbo.typ_GroupMembershipTable

INSERT into @p6 values('{GroupSid}','Microsoft.TeamFoundation.Identity','{MemberId}',0)
 
EXEC prc_UpdateGroupMembership @partitionId=1,@scopeId='{ScopeId}',@idempotent=1,@incremental=1,@insertInactiveUpdates=0,@updates=@p6,@eventAuthor='9EE20697-5343-43FC-8FC5-3D5D455D21C5',@updateGroupAudit=0
```


Below is an example ISVError: 300005 message from the data migration tool. 

```cmdline
ISVError:300005 Unexpected non group identity was found to have direct membership to everyone group. GroupSid:S-1-9-1551374245-3746625149-2333054533-2458719197-2313548623-0-0-0-0-3, MemberId:76050ddf-4fd8-48c4-a1ff-859e44364519, ScopeId:7df650df-0f8b-4596-928d-13dd89e5f34f
```


Copy the GroupSid, MemberId, and ScopeId into the SQL command.

```SQL
DECLARE @p6 dbo.typ_GroupMembershipTable

INSERT into @p6 values('S-1-9-1551374245-3746625149-2333054533-2458719197-2313548623-0-0-0-0-3','Microsoft.TeamFoundation.Identity','76050ddf-4fd8-48c4-a1ff-859e44364519',0)
 
EXEC prc_UpdateGroupMembership @partitionId=1,@scopeId='7df650df-0f8b-4596-928d-13dd89e5f34f',@idempotent=1,@incremental=1,@insertInactiveUpdates=0,@updates=@p6,@eventAuthor='9EE20697-5343-43FC-8FC5-3D5D455D21C5'
```

Run the completed command against the Azure DevOps Server configuration database. You'll need to repeat this command for each ISVError: 300005 instance reported. You can batch errors with the same scope ID into a single command. Once you've executed the commands, rerun the data migration tool validate again to ensure that the errors have been corrected. If the errors still persist, contact [Azure DevOps Services customer support](https://aka.ms/AzureDevOpsImportSupport). 

> [!IMPORTANT]
> To address these errors, the collection must be attached. 
>
> If you receive a -1 result when you run the command, ensure that your collection database that produced the error is attached to your Azure DevOps Server instance and that you're running the command on the configuration database. 

### Azure Active Directory timeout exception

On rare occasions, you may receive an Azure Active Directory (Azure AD) timeout error when running the data migration tool prepare command. 

```cmdline
Exception Message: Request failed (type AadGraphTimeoutException)
```

This error means that the requests to Azure AD to find the matching Azure AD identities for users in your collection timed out. Generally, you can resolve this error by waiting to run the **prepare** command at a less busy time of the day, such as after regular business hours. 

In the event that the error continues, you should undertake a few troubleshooting steps. First, you will want to test your connection to Azure AD from the machine running the **prepare** command. Execute the following steps to retrieve information on a user in your Azure AD. 

Open PowerShell in elevated mode and replace 'someone@somecompany.com' in the following command with your Azure AD user identity.  

```PowerShell
//Install the AzureAD PowerShell module - ensuring to select Yes to All
Install-Module AzureAD 

// Install the MSOnline PowerShell module -  ensuring to select Yes to All
Install-Module MSOnline

// Connect to AAD and use your AAD credentials (someone@somecompany.com) to login when the pop-up appears
Connect-MsolService 

// Try to retrieve information on a user from your AAD
Get-MsolUser -UserPrincipalName someone@somecompany.com
```

If any of the above steps fail or you're unable to look up a user's identity, a connection issue may exist between the machine running the **prepare** command and Azure AD. Run a network trace while executing the **prepare** command to ensure that nothing within your network is interfering with calls reaching Azure AD. If you've confirmed that the problem isn't with your network, contact Azure support for assistance with troubleshooting. 
If you're able to retrieve user information, open your log file from the **prepare** attempt and look for a line similar to the following entry. 

```cmdline
Number of active users is {Number of Users}.
```

If this number is in the high five-digits or even six-digits ranges, it may indicate that the volume of identities being mapped requires more time than the timeout limit provides. Inspect your collection for inclusions of large AD groups such as an 'everyone' group. If possible, remove these groups and try again. If you still can't resolve this error, contact [Azure DevOps Services customer support](https://aka.ms/AzureDevOpsImportSupport).

## Resolve process errors

See the separate [Process Templates](migration-processtemplates.md) page for details on resolving common process errors.

## Resolve field validation errors

<a name= "VS403442" ></a>
 
#### VS403442

Field name conflicts sometimes occur between your local collection and an Azure DevOps Services system field.

```cmdline
In order to migrate successfully, you must rename field *{TFSfieldReferenceName}*. Given name *{TFSfieldName}* is reserved for field *{VSTSfieldReferenceName}*.
```

To resolve this error, change the name of your collection field. Use the **witadmin changefield** command from [witadmin](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md).  

```cmdline
witadmin changefield /collection:http://AdventureWorksServer:8080/DefaultCollection /n:TFSfieldReferenceName /name:newFieldName
```

<a name= "VS403443" ></a> 

#### VS403443

The following error indicates a field name conflict exists between your local collection and a specific Azure DevOps Services field. 


```cmdline
In order to migrate successfully, you must rename field *{TFSfieldReferenceName}* to *{VSTSfieldName}*. Given name for *{TFSfieldReferenceName}* is *{TFSfieldName}*
```

To resolve this error, use the **witadmin changefield** command. For details, see [witadmin](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md).

```cmdline
witadmin changefield /collection:http://AdventureWorksServer:8080/DefaultCollection /n:TFSfieldReferenceName /name:VSTSfieldName
```

<a name= "VS403444"> </a>

#### VS403444

The following error indicates a field type conflict exists between your local collection and Azure DevOps Services.  

Using [witadmin](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md), you can change the data type only for HTML or PlainText fields. 

```cmdline
In order to migrate successfully, you must set type of field *{TFSfieldReferenceName}* to *{Type}*. Given type for *{TFSfieldReferenceName}* is *{collectionType}*.
```

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

<a id="resolve-import-errors" />

## Resolve import errors

Hit a failure when running your import? Failures in the import space fall into one of two categories. 
- Verification failures occur when the import fails to start. This failure indicates that the data migration tool attempted to queue an import, but returned an error instead. 
- Import failures happen when the import was queued successfully in the data migration tool, but failed after that point. The individual that queued the import receives a failure email. 

### Verification failures

Verification failure issues indicate that your import request isn't valid. Follow the recommended guidance provided below based on the error messages you receive. Then try to queue the import again.   

**VS403254**

The region that you entered for your Azure DevOps Services import isn't supported. 


```cmdline
VS403254: Region {0} may not be used for the Import, it is not a supported region.
```

Open your import specification file and update the region that you've provided with the correct short name for the [region](migration-import.md#supported-azure-regions-for-import). 

**VS403249**

The organization name your team has selected is already in use by an existing organization. All Azure DevOps Services imports go into a new organization that is created at import time. 

```cmdline
VS403249: The organization {0} already exists. Please select a different name and try the import again.
```

Select a different organization name and update the import specification file before retrying the import. 

**VS403250 & VS403286**

The DACPAC isn't built off a detached collection. 

```cmdline
VS403250: The dacpac is not a detached Azure DevOps Server Collection database.
VS403286: The dacpac is from a Azure DevOps Server Configuration database. You must use a detached Azure DevOps Server Collection database.
```

[Detach](migration-import.md#step-1-detach-your-collection) your collection database and generate the DACPAC again.

**VS403243**

Unable to make a connection to the database using the provided SQL Connection String. 

```cmdline
VS403243: Unable to connect to the database using the provided SQL Connection String {0}.
```

Review the parameters that were provided to ensure they're correct and try again.

**VS403260 & VS403351**

The collection database isn't detached.

```cmdline
VS403260: The database is not detached.
VS403351: The DACPAC or source database is missing an expected table. It's possible that the database was not correctly detached from Azure DevOps Server.
```

[Detach](migration-import.md#step-1-detach-your-collection) your collection database and retry the import queue.  

**VS403261**

The connection string must be encrypted otherwise the password is sent in the clear. 

```cmdline
VS403261: The SQL connection string must use encryption.
```
    
Add **Encrypt=true** to your SQL connection string.

**VS403262**

The connection string must use SQL Authentication. 

```cmdline
VS403262: The SQL connection string must use SQL Authentication, Integrated Authentication is not supported.
```

Add **Integrated Security=False** to your SQL connection string.

**VS403263**

Your SQL sign in user account doesn't have the required database role.


```cmdline
VS403263: The User ID {0} must be member of the database role {1}.
```

Make sure the user account for sign in is assigned the ['TFSEXECROLE'](migration-import.md#configure-your-collection-for-import) role. 

> [!NOTE]   
> There is a known issue with using sp_addrolemember to add 'TFSEXECROLE' to an existing SQL login. The role membership isn't applied until all open connections using that identity are closed. If you receive the VS403263 error and have confirmed your identity has the role, we recommend that you create a new identity for your import. Details on how to create a new SQL login that's ready to be used for import can be found at [Import large collections](migration-import-large-collections.md).

**VS403264**

The connection string doesn't point to an Azure DevOps Server collection database. 

```cmdline    
VS403264: The database is not a Azure DevOps Server Collection database, it cannot be used for import.
```

Verify or correct the connection string points to your collection database. 


**VS40325**

The Azure DevOps Server Update has queued the file migration job. Imports can't be performed until this job has completed. The completion time for this job is dependent on the size of the collection. 

```cmdline
VS403255: The collection cannot be imported due to an ongoing post upgrade job. Please wait and try again later
```

You can track job progress by running the following query on the collection database:

```SQL 
SELECT  COUNT (*) as remaining_files_to_migrate
FROM    tbl_FileReference
WHERE   PartitionId > 0
        AND MigrateFileId IS NOT NULL
```

Once the number of files remaining to migrate is zero, you can run the data migration tool. 

**VS403282**   

A new line character exists in the source location value. This character could have remained after copying the SAS key from your windows console.

```cmdline
VS403282: The source location parameter contains a new line character. Please ensure the SAS key is defined on a single line in the import specification file.
```

Remove the line break and try again.

**VS403271**   

Your import files and DACPAC aren't located in the **required** Azure region to complete the import to your target Azure DevOps Services region. 

```cmdline
VS403271: It appears that your DACPAC was uploaded to East US. It's required that customers targeting Central US for import put their DACPACs in Central US. Please move your DACPAC to Central US and requeue the import.
``` 

[Create a new Windows Azure storage account](/azure/storage/common/storage-create-storage-account) in the required region and copy your files. The following example shows how to copy your data using **AzCopy**.

```cmdline
AzCopy.exe /Source:https://accountSCUS.blob.core.windows.net/mycontainer /SourceKey:"primary access key" /Dest:https://accountCUS.blob.core.windows.net/mycontainer /DestKey:"primary access key" /S
```

**VS403316**

Inconsistencies were detected in some TFVC files within your collection.

```cmdline
VS403316: An inconsistency was detected in some TFVC files for this collection. The inconsistency needs to be corrected prior to running an import to Azure DevOps Services. Please reach out to https://aka.ms/AzureDevOpsImportSupport for assistance with addressing this issue.
```

Work with Azure DevOps Services [customer support](https://aka.ms/AzureDevOpsImportSupport). Open a support ticket and they'll work with you to resolve the error. 

**VS403366**

The data migration tool was unable to connect to the SQL Azure VM. 

```cmdline
VS403366: A problem occurred while attempting to connect to your database. Please verify that your connection string is correct and that all required IP addresses for Azure DevOps Services have been provided exceptions for your machines firewall.

List of Azure DevOps Services IPs:
```

Verify that you've entered the information correctly in your connection string and that you can connect to the VM. 

The IPs that the error message lists are for Azure DevOps Services. Azure DevOps Services IPs can change temporarily during deployments. Add them to your firewall exceptions and try queuing the import again. For a list of IP addresses, see [Import large collections, Restrict access to Azure DevOps Services IPs only](migration-import-large-collections.md#ips)

**VS403373**

The data migration tool doesn't support importing multiple copies of the **SAME** collection. However, it **DOES** support importing **split** copies of a collection. Change the GUID for the **_DataImportCollectionID_**.

From SQL Server Management Studio (SSMS), open the extended properties for the split copies that you haven't  imported yet. Add a newly generated GUID to the "TFS_DATAIMPORT_COLLECTIONID" property. Then rerun the **prepare** command and use the new **import.json** file to queue the import.

**VS403379**

Data import will fail as one or more projects found in this collection are in the soft-deleted stage. Please restore the soft-deleted project(s) or delete them permanently before running the data import. For details, see [Delete a project](../organizations/projects/delete-project.md).

```cmdline
VS403379: Data import will fail as one or more projects found in this collection are in the soft-deleted stage. Please restore the soft-deleted project(s) or delete them permanently before running the data import.
```
Verify the collection against which you are running the data migration tool has projects in the soft-deleted stage. Once a project is deleted, it remains in a soft-delete state for 28 days during which the deleted project can be restored. You can read about how to restore a deleted project in [Restore a project](../organizations/projects/restore-project.md). If you have projects in the soft-deleted stage, remove them completely or restore them back before running data import.

### Import failures

When an import fails, the individual that queued the import receives an email notification. Most of the time this email includes a reason for the failure. If it does, use the troubleshooting steps provided in the email and this page to resolve the errors and retry your import. 

If the error is more complex, then the email you receive provides instructions on how to file a [customer support case](https://aka.ms/AzureDevOpsImportSupport). After submitting a customer support case, your team will need to roll back by bringing your Azure DevOps Server instance back online and reattach your collection. Your team members can then continue working. We recommended you not attempt the import again until the failure causing issue is resolved. 
 

## Related articles

- [Validate and import](migration-import.md) 
- [Post-import](migration-post-import.md)
- [Delete a project](../organizations/projects/delete-project.md)
- [Restore a project](../organizations/projects/restore-project.md)




