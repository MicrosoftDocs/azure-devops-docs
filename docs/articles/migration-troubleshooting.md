---
title: Troubleshooting the migration import from TFS to Visual Studio Team Services (VSTS) | VSTS & TFS
description: Guidance for fixing common TfsMigrator valdiation errors. 
ms.prod: devops
ms.topic: article
ms.technology: devops-article
ms.contentid: ee8c290d-0b48-4cbd-b7fd-7afb9591c169
ms.manager: douge
ms.author: elbatk
author: elbatk
---

# Troubleshooting

> [!NOTE]
> It's recommended that you use the [Migration Guide](https://aka.ms/tfsimport) to progress through your import. The guide links to the technical documentation as needed.

TfsMigrator could flag errors which need to be corrected prior to performing a migration. Below are the most common errors that are encountered when prepping 
for a migration. After correcting each error you will need to run TfsMigrator's validate command again to ensure the error(s) is/are actually gone.

## Dealing with Size Warnings
If your collection is particularly large then you might receive one of the below messages after running TfsMigrator. If you receive any of the below warnings or errors, it's always recommended that you try to [reduce your database's size](../tfs-server/upgrade/clean-up-data.md). 

```cmdline
The database is currently {Database Size}GBs. This is above the recommended size of {DACPAC Size Limit}GBs to use the DACPAC import method. Please see the following page to learn how to import using a SQL Azure VM: https://aka.ms/VSTSImportLargeCollection
```

This is a warning that means you will need to use the SQL Azure VM method to complete your import. Once a database reaches a certain size it becomes faster to setup a SQL Azure VM to complete the import to Visual Studio Team Services (VSTS). Follow the instructions linked from the warning message to setup the VM and complete your import. This warning does **NOT** mean that your collection is too big to be imported. 

```cmdline
The largest table size is currently {Table size}GBs. This is above the recommended size of {Size limit}GBs to use the DACPAC import method. Please see the following page to learn how to import using a SQL Azure VM: https://aka.ms/VSTSImportLargeCollection   
```

Similar to the previous warning, this warning means you will have to use the SQL Azure VM method to complete the import. Follow the instructions linked from the warning message to setup the VM and complete your import. This warning does **NOT** mean that your collection is too big to be imported. 

```cmdline
The database metadata size is currently {Metadata Size}GBs. This is above the recommended size of {Warning Size}GBs. It's recommended that you consider cleaning up older data as described in [Cleaning up old data] (../../tfs-server/upgrade/clean-up-data.md).
```

This warning means that your database is approaching the limit for total metadata size. Metadata size refers to the size of your database without including files, code, and other binary data. The warning does **NOT** mean that your collection is too big for import, rather its metadata size is larger than the vast majority of other databases. It's strongly recommended that you [reduce the size](../tfs-server/upgrade/clean-up-data.md) of your database before import. Reducing the size provides the additional benefit of speeding up your import.

```cmdline
The database metadata size is currently {Metadata Size}GBs. This is above the maximum supported size of {Metadata Limit}GBs.
```

Unlike the previous warnings, this is an error that **WILL** block you from moving forward with your migration to VSTS. The volume of metadata in your collection is too large and needs to be [reduced](../tfs-server/upgrade/clean-up-data.md) below the mentioned limit to proceed with the import.   

## Dealing with Collation Warnings
Collation in this case refers to the collection database's collation. Collations control the way string values are sorted and compared. Collections that aren't using either SQL_Latin1_General_CP1_CI_AS or Latin1_General_CI_AS will generally receive one of the two below **warning** messages.  

```cmdline
The collection database's collation '{collation}' is not natively supported in VSTS. Importing your collection will result in your collation being converted to one of the supported VSTS collations. See more details at https://aka.ms/vstsimportcollations
```

Receiving this warning **does NOT** mean that you can't import your collection to VSTS. Rather, it means that you will need to think through some additional considerations before performing an import. When a non-supported collation is imported into VSTS it is effectively transformed to the supported VSTS collation. While this generally works without issue, unexpected results could be observed post import or the import could fail if a unique collation translation issue is encountered. For instance, customers will notice different ordering for strings containing non-English characters. Non-English characters like 'é' may become equivalent to the English 'e' after the import has completed. It's important that you complete and verify a dry run import when importing a collection with a non-supported collation.

This warning requires an acknowledgement from the user running the TfsMigrator command. Accepting the warning will allow TfsMigrator to continue assisting you with preparing for your import. 

```cmdline
The collections database's collation '{collation}' is not natively supported in VSTS. It could not be validated that the collation can be converted during import to a supported VSTS collation, as there was no internet connection. Please run the command again from a machine with an internet connection. See more details at https://aka.ms/vstsimportcollations
```
If TfsMigrator is unable to make a connection to the internet then it will be unable to validate that your collation can be converted to one of the supported version at import time. It's only a warning, so you will be able to make forward progress on your migration process. However, when you run the prepare command, an internet connection is required and your collation will be validated at that time.

Generally a non-supported collation can be converted to one of the supported collations at import time. However, in extreme cases there are some collations which can't be converted. If your collection uses one of those collations then you will receive the below **error** message. 

```cmdline
The collection database's collation '{collation}' is not supported for import to VSTS. It will need to be changed to a supported collation before it can be imported. See more details at https://aka.ms/vstsimportcollations
```

In order to continue your collection's collation will need to be [changed](https://docs.microsoft.com/en-us/sql/relational-databases/collations/set-or-change-the-database-collation) to one of the supported collations on VSTS.
    
## Dealing with Identity Errors
Identity errors aren't common when validating a collection, but when they do come up it's important to fix them prior to migration to avoid any undesired results. Generally, identity problems stem from valid operations on previous versions of TFS that are no longer valid on your current TFS version. For example, some users being members of a built-in valid users group was once allowed, but isn't in more recent versions. The most common identity errors and guidance on fixing them can be found below.

### ISVError:100014
This error indicates that a permission is missing from a system group. System groups are well known groups in TFS and VSTS. For example, every collection that you create has "Project Collection Valid Users" and "Project Collection Administrators" groups. They're created by default and it's not possible to edit the permissions for these groups. What this error indicates is that somehow one or more of these groups is missing a permission that it's expected to have. In order to fix this, you will need to use TFSSecurity.exe to apply the expected permissions onto the flagged system groups. To get started you will need to identify which [TFSSecurity](../tfs-server/command-line/tfssecurity-cmd.md) command(s) will need to be run.

#### Project Collection Valid Users Error Message

Carefully examine the error message(s) TfsMigrator highlighted. If the group that was flagged ends with "**0-0-0-0-3**", such as in the example below, then you will need to fix a missing permission for the "Project Collection Valid Users" group. Run the below command against TFSSecurity.exe after replacing the scope with the one from the error message and adding in your collection URL.

```cmdline
TFSSecurity.exe /a+ Identity "{scope}\\" Read sid:{Group SID} ALLOW /collection:{collectionUrl}
```
In the below example you will need to take the scope and group SID from the error message, and add it the templated command above. 

```cmdline
ISVError:100014 Missing permission for group:Microsoft.TeamFoundation.Identity;S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-3 for scope:397c326b-b97c-4510-8271-75aac13de7a9. Expected:1 and Actual:0 
```

The final command will look like:

```cmdline
TFSSecurity.exe /a+ Identity "397c326b-b97c-4510-8271-75aac13de7a9\\" Read sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-3 ALLOW /collection:https://localhost:8080/tfs/defaultcollection
```
#### Project Collection Administrators Error Message

Carefully examine the error message(s) TfsMigrator highlighted. If the group that was flagged ends with "**0-0-0-0-1**", such as in the example below, then you will need to fix a missing permission for the "Project Collection Administrators" group. Run the below commands against TFSSecurity.exe after replacing the scope with the one from the error message and adding in your collection.

```cmdline
TFSSecurity.exe /a+ Identity "{scope}\\" Read sid:{Group SID} ALLOW /collection:{collectionUrl}

TFSSecurity.exe /a+ Identity "{scope}\\" Write sid:{Group SID} ALLOW /collection:{collectionUrl}

TFSSecurity.exe /a+ Identity "{scope}\\" Delete sid:{Group SID} ALLOW /collection:{collectionUrl}

TFSSecurity.exe /a+ Identity "{scope}\\" ManageMembership sid:{Group SID} ALLOW /collection:{collectionUrl}
```
In the below example you will need to take the scope and group SID from the error message, and add it the templated command above. 

```cmdline
ISVError:100014 Missing permission for group:Microsoft.TeamFoundation.Identity;S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1 for scope:0c7c2216-fa4b-4107-a203-82b324a147ef. Expected:15 and Actual:0 
```

The final command will look like:

```cmdline
TFSSecurity.exe /a+ Identity "0c7c2216-fa4b-4107-a203-82b324a147ef\\" Read sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1 ALLOW /collectionhttps://localhost:8080/tfs/defaultcollection

TFSSecurity.exe /a+ Identity "0c7c2216-fa4b-4107-a203-82b324a147ef\\" Write sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1 ALLOW /collectionhttps://localhost:8080/tfs/defaultcollection

TFSSecurity.exe /a+ Identity "0c7c2216-fa4b-4107-a203-82b324a147ef\\" Delete sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1 ALLOW /collectionhttps://localhost:8080/tfs/defaultcollection

TFSSecurity.exe /a+ Identity "0c7c2216-fa4b-4107-a203-82b324a147ef\\" ManageMembership sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1 ALLOW /collectionhttps://localhost:8080/tfs/defaultcollection
```
If you have multiple errors that need to be corrected, it's recommended that you put all of the commands into a batch file to execute them against TFSSecurity in an automated fashion. Once the commands have been executed you will need to run TfsMigrator validate again to ensure that the error(s) has\have been corrected. If the error(s) still persists, please contact [VSTS customer support](https://aka.ms/vstscustomersupport).

### ISVError:300005

> [!IMPORTANT]
> Ensure that you have a backup of your collection and configuration databases before running the below commands to fix this error. 

ISVError:300005 indicates that a non-group identity is a member of an everyone group, more commonly known as the Valid Users groups. Valid Users groups are created by default for all projects and collections. They're uneditable groups that only contain other TFS groups as members. In the case of ISVError:300005, a non TFS group identity, such as an AD group or user identity, has a direct membership in a Valid Users group. 

Since Valid Users groups can't be edited directly or through TFSSecurity.exe, correcting the invalid membership will need to be done by running a SQL statement against the configuration database to remove the offending identity. Carefully examine the error message(s) TfsMigrator highlighted. You will need copy down the GroupSid, MemberId, and ScopeId as these values will need to be placed into the templated command below.

```SQL
DECLARE @p6 dbo.typ_GroupMembershipTable

INSERT into @p6 values('{GroupSid}','Microsoft.TeamFoundation.Identity','{MemberId}',0)
 
EXEC prc_UpdateGroupMembership @partitionId=1,@scopeId='{ScopeId}',@idempotent=1,@incremental=1,@insertInactiveUpdates=0,@updates=@p6,@eventAuthor='9EE20697-5343-43FC-8FC5-3D5D455D21C5',@updateGroupAudit=0
```


Below is an example ISVError:300005 message from TfsMigrator. 

```cmdline
ISVError:300005 Unexpected non group identity was found to have direct membership to everyone group. GroupSid:S-1-9-1551374245-3746625149-2333054533-2458719197-2313548623-0-0-0-0-3, MemberId:76050ddf-4fd8-48c4-a1ff-859e44364519, ScopeId:7df650df-0f8b-4596-928d-13dd89e5f34f
```


Copy the GroupSid, MemberId, and ScopeId into the templated SQL command.

```SQL
DECLARE @p6 dbo.typ_GroupMembershipTable

INSERT into @p6 values('S-1-9-1551374245-3746625149-2333054533-2458719197-2313548623-0-0-0-0-3','Microsoft.TeamFoundation.Identity','76050ddf-4fd8-48c4-a1ff-859e44364519',0)
 
EXEC prc_UpdateGroupMembership @partitionId=1,@scopeId='7df650df-0f8b-4596-928d-13dd89e5f34f',@idempotent=1,@incremental=1,@insertInactiveUpdates=0,@updates=@p6,@eventAuthor='9EE20697-5343-43FC-8FC5-3D5D455D21C5',@updateGroupAudit=0
```

Run the completed command against the TFS configuration database. This will need to be repeated for each ISVError:300005 instance that TfsMigrator found. Errors with the same scope ID can be batched into one command. Once the commands have been executed you will need to run TfsMigartor validate again to ensure that the errors have been corrected. If the errors still persist, please contact [VSTS customer support](https://aka.ms/vstscustomersupport). 

### AAD Timeout Exception
On rare occasions some might receive an AAD timeout error when running the TfsMigrator prepare command. 

```cmdline
Exception Message: Request failed (type AadGraphTimeoutException)
```

This error means that the requests to AAD to find the matching AAD identities for users in your collection timed out. Generally, this error can be resolved by waiting to run the prepare command at a less busy time of the day. Such as after regular business hours. 

In the event that the error continues there are few troubleshooting steps which should be undertaken. First, you will want to test your connection to AAD from the machine running the prepare command. Follow the below steps and see if you can retrieve information on a user in your AAD. 

Open PowerShell in elevated mode and add replace 'someone@somecompany.com' below with a user you expect to be present in your company's AAD.

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

If any of the above steps fail or you're unable to look up a users identity, that's a strong indication that there is a connection issue between the machine running the prepare command and AAD. You should run a network trace while executing the prepare command to ensure that nothing within your own network is stopping the calls from reaching AAD. If you've confirmed that the problem is not with your network then you will need reach out to Azure support for assistance with troubleshooting. 
 
If you are able to get information back on a user, open your log file from the prepare attempt and look for a line like the following. 

```cmdline
Number of active users is {Number of Users}.
```

If this number is in the high five-digits or even six-digits ranges then it could be an indication that the volume of identities being mapped require more time than the timeout limit provides. You should inspect your collection for inclusions of large AD groups such as an 'everyone' group. If possible remove these groups and try again. If you still can't resolve this error then please reach out to [VSTS customer support](https://aka.ms/vstscustomersupport).

## Dealing with Process Errors
See the separate [Process Templates](migration-processtemplates.md) page for details on resolving common process errors.

## Dealing with Field Validation Errors


#### <a name= "VS403442" ></a> **VS403442**
In order to migrate successfully, you must rename field *{TFSfieldReferenceName}*. Given name *{TFSfieldName}* is reserved for field *{VSTSfieldReferenceName}*.

Sometimes your local collection may have a field whose name may conflict with VSTS system field. To resolve this error, you must change name of your collection field. use *changefield* command from [witadmin](https://docs.microsoft.com/en-us/vsts/work/customize/reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json)

```cmdline
witadmin changefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:TFSfieldReferenceName /name:newFieldName
```

#### <a name= "VS403443" ></a> **VS403443**
In order to migrate successfully, you must rename field *{TFSfieldReferenceName}* to *{VSTSfieldName}*. Given name for *{TFSfieldReferenceName}* is *{TFSfieldName}*

Sometimes your local collection may have different name for a particular field. To resolve this error, use *changefield* command from [witadmin](https://docs.microsoft.com/en-us/vsts/work/customize/reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json)

```cmdline
witadmin changefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:TFSfieldReferenceName /name:VSTSfieldName
```

#### <a name= "VS403444"> </a> **VS403444**
In order to migrate successfully, you must set type of field *{TFSfieldReferenceName}* to *{Type}*. Given type for *{TFSfieldReferenceName}* is *{collectionType}*.

Sometimes your local collection may have different type for a particular field. Presently [witadmin](https://docs.microsoft.com/en-us/vsts/work/customize/reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json) allows type change for only those fields which are either of HTML or PlainText type. If your field type is either HTML or PlainText, then you can change its type to required type using witadmin.

```cmdline
witadmin changefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:TFSfieldReferenceName  /type:PlainText | HTML
```
>[!Note]
> If your field type is something different than HTML|PlainText and field data is not important or field is not being used in any project, then we recommend using witadmin to delete that field.

> [!Important]
> Using [witadmin](https://docs.microsoft.com/en-us/vsts/work/customize/reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json) to delete a field will result in loss of field data across collection.

```cmdline
witadmin deletefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:TFSfieldReferenceName
```


## Dealing with Import Errors
Hit a failure when running your import? Failures in the import space fall into one of two categories. Verification failures happen when the import fails to start. The indication that this has occurred is when TfsMigrator attempts to queue an import, but returns an error instead. Import failures happen when the import was queued successfully in TfsMigrator, but failed after that point. The individual that queued the import will recieve a failure email if this happens. 

### Verification Failures
Verification failures happen when the import fails to start. Issues falling into this category mean that something with your import request isn't valid. Look up you error message below and follow the recommended guidance on how to resolve the error. After that your team can try to queue the import again.   

**VS403254**

```cmdline
VS403254: Region {0} may not be used for the Import, it is not a supported region.
```

The region that you entered for your VSTS import isn't supported. Open your import specification file and update the region that you've provided with the correct short name for the [region](.\migration-import.md#supported-azure-regions-for-import) you want to import into. 

**VS403249**

```cmdline
VS403249: The account {0} already exists. Please select a different name and try the import again.
```

All VSTS imports go into a new account that is created at import time. This error indicates that the account name your team has selected is already being used by an existing account. Select a different name and update the import specification file before retrying the import. 

**VS403250 & VS403286**

```cmdline
VS403250: The dacpac is not a detached TFS Collection database.
VS403286: The dacpac is from a TFS Configuration database. You must use a detached TFS Collection database.
```

The DACPAC is not built off a detached collection. The collection database will need to be [detached](migration-import.md#detaching-your-collection) and the DACPAC generated again.

**VS403243**

```cmdline
VS403243: Unable to connect to the database using the provided SQL Connection String {0}.
```

Unable to make a connection to the database using the provided SQL Connection String. Review the parameters that were provided to ensure they're correct and try again.

**VS403260 & VS403351**

```cmdline
VS403260: The database is not detached.
VS403351: The DACPAC or source database is missing an expected table. It's possible that the database was not correctly detached from TFS.
```

The database is not detached. It will need to be [detached](migration-import.md#detaching-your-collection) and the import queued again. 

**VS403261**

```cmdline
VS403261: The SQL connection string must use encryption.
```
    
The connection string must be encrypted otherwise the password will be sent in the clear. Please add "Encrypt=true" to your SQL connection string.

**VS403262**

```cmdline
VS403262: The SQL connection string must use SQL Authentication, Integrated Authentication is not supported.
```

Please add "Integrated Security=False" to your SQL connection string.

**VS403263**

```cmdline
VS403263: The User ID {0} must be member of the database role {1}.
```

This error means that your SQL login user does not have the required database role. Please make sure ['TFSEXECROLE'](migration-import.md#configuring-your-collection-for-import) is assigned to the login. 

There is a known issue with using sp_addrolemember to add 'TFSEXECROLE' to an existing SQL login. The role membership is not applied until all open connections using that identity are closed. If you're hitting the above error and have confirmed your identity has this role, it's recommended that you create a new identity for your import. Details on how to create a new SQL login that's ready to be used for import can be found at https://aka.ms/VSTSImportLargeCollection.

**VS403264**

```cmdline    
VS403264: The database is not a TFS Collection database, it cannot be used for import.
```
    
The connection string does not point to a TFS Collection database. 

**VS40325**

```cmdline
VS403255: The collection cannot be imported due to an ongoing post upgrade job. Please wait and try again later
```

The TFS Update has queued the file migration job. Imports cannot be performed until this job has completed. The completion time for this job is dependent on the size of the collection. Job progress can be tracked by running the below query on the collection database:

```SQL 
SELECT  COUNT (*) as remaining_files_to_migrate
FROM    tbl_FileReference
WHERE   PartitionId > 0
        AND MigrateFileId IS NOT NULL
```

Once the number of files remaining to migrate is zero you can run TfsMigrator. 

**VS403282**   

```cmdline
VS403282: The source location parameter contains a new line character. Please ensure the SAS key is defined on a single line in the import specification file.
```

There is a new line character in the source location value, this could have been left over when copying the SAS key from your windows console, please remove the line break and try again.

**VS403271**   

```cmdline
VS403271: It appears that your DACPAC was uploaded to East US. It's required that customers targeting Central US for import put their DACPACs in Central US. Please move your DACPAC to Central US and requeue the import.
``` 

Your import files and DACPAC are not located in the **required** Azure region to complete the import to your target VSTS region. Please [Create a new windows azure storage account](https://docs.microsoft.com/azure/storage/common/storage-create-storage-account) in the required region and copy your files. Below is an example of how to copy your data using AzCopy.

```cmdline
AzCopy.exe /Source:https://accountSCUS.blob.core.windows.net/mycontainer /SourceKey:"primary access key" /Dest:https://accountCUS.blob.core.windows.net/mycontainer /DestKey:"primary access key" /S
```

**VS403316**

```cmdline
VS403316: An inconsistency was detected in some TFVC files for this collection. The inconsistency needs to be corrected prior to running an import to Visual Studio Team Services. Please reach out to https://aka.ms/VSTSCustomerSupport for assistance with addressing this issue.
```

An inconsistency was detected in some TFVC files within your collection. To resolve the error you will need to work VSTS [customer support](https://aka.ms/VSTSCustomerSupport). Please open a support ticket and they will assist you with correcting the error. 

**VS403366**

```cmdline
VS403366: A problem occurred while attempting to connect to your database. Please verify that your connection string is correct and that all required IP addresses for Visual Studio Team Services have been provided exceptions for your machines firewall.

List of Visual Studio Team Services IPs:
```

The Import Service was unable make a connection to the SQL Azure VM. Verify that you've entered the information correctly in your connection string and that you can connect to the VM. The IPs that the error message lists are for VSTS. VSTS's IPs can change temporarily during deployments. Please add them to your firewall exceptions and try queuing the import again. 

### Import Failures
When an imports fails the individual that queued the import will receive an email. In this case, your team will need to roll back by bringing your Team Foundation Server instance back online and attaching your collection. This will allow your team members to continue working. Once your team is back up and working again, follow the instructions in the failure email and file a [support case](https://www.visualstudio.com/team-services/support) to get assistance. 

 






