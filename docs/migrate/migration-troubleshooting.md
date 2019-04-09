---
title: Troubleshooting the migration import from Azure DevOps Server to Azure DevOps Services | Azure DevOps
description: Guidance for fixing common DataMigratorTool validation errors. 
ms.prod: devops
ms.topic: article
ms.technology: devops-learn
ms.contentid: ee8c290d-0b48-4cbd-b7fd-7afb9591c169
ms.manager: jillfra
ms.author: elbatk
author: elbatk
monikerRange: '>= tfs-2013'
ms.date: 04/13/2018
---

# Troubleshooting

[!INCLUDE [version-azure-devops](_shared/version-azure-devops.md)]

> [!NOTE]
> It's recommended that you use the [Migration Guide](https://aka.ms/AzureDevOpsImportt) to progress through your import. The guide links to the technical documentation as needed.
>
> With the release of Azure DevOps Server 2019 the TFS Database Import Service has been rebranded to become data migration tool for Azure DevOps. This includes TfsMigrator becoming the data migration tool or migrator for short. This service still works exactly the same as the old Import Service. If you're on an older version of on-premises with TFS as the branding you can still use this feature to migrate to Azure DevOps as long as you upgrade to one of the supported versions. 

The data migration tool could flag errors which need to be corrected prior to performing a migration. Below are the most common errors that are encountered when prepping 
for a migration. After correcting each error you will need to run the data migration tool validate command again to ensure the error(s) is/are actually gone.

## Dealing with Size Warnings
If your collection is particularly large then you might receive one of the below messages after running the data migration tool. If you receive any of the below warnings or errors, it's always recommended that you try to [reduce your database's size](/azure/devops/server/upgrade/clean-up-data). 

```cmdline
The database is currently {Database Size}GBs. This is above the recommended size of {DACPAC Size Limit}GBs to use the DACPAC import method. Please see the following page to learn how to import using a SQL Azure VM: https://aka.ms/AzureDevOpsImportLargeCollection
```

This is a warning that means you will need to use the SQL Azure VM method to complete your import. Once a database reaches a certain size it becomes faster to setup a SQL Azure VM to complete the import to Azure DevOps Services. Follow the instructions linked from the warning message to setup the VM and complete your import. This warning does **NOT** mean that your collection is too big to be imported. 

```cmdline
The largest table size is currently {Table size}GBs. This is above the recommended size of {Size limit}GBs to use the DACPAC import method. Please see the following page to learn how to import using a SQL Azure VM: https://aka.ms/AzureDevOpsImportLargeCollection  
```

Similar to the previous warning, this warning means you will have to use the SQL Azure VM method to complete the import. Follow the instructions linked from the warning message to setup the VM and complete your import. This warning does **NOT** mean that your collection is too big to be imported. 

```cmdline
The database metadata size is currently {Metadata Size}GBs. This is above the recommended size of {Warning Size}GBs. It's recommended that you consider cleaning up older data as described in [Cleaning up old data](/azure/devops/server/upgrade/clean-up-data).
```

This warning means that your database is approaching the limit for total metadata size. Metadata size refers to the size of your database without including files, code, and other binary data. The warning does **NOT** mean that your collection is too big for import, rather its metadata size is larger than the vast majority of other databases. It's strongly recommended that you [reduce the size](/azure/devops/server/upgrade/clean-up-data) of your database before import. Reducing the size provides the additional benefit of speeding up your import.

```cmdline
The database metadata size is currently {Metadata Size}GBs. This is above the maximum supported size of {Metadata Limit}GBs.
```

Unlike the previous warnings, this is an error that **WILL** block you from moving forward with your migration to Azure DevOps Services. The volume of metadata in your collection is too large and needs to be [reduced](/azure/devops/server/upgrade/clean-up-data) below the mentioned limit to proceed with the import.   

## Dealing with Collation Warnings
Collation in this case refers to the collection database's collation. Collations control the way string values are sorted and compared. Collections that aren't using either SQL_Latin1_General_CP1_CI_AS or Latin1_General_CI_AS will generally receive one of the two below **warning** messages.  

```cmdline
The collection database's collation '{collation}' is not natively supported in Azure DevOps Services. Importing your collection will result in your collation being converted to one of the supported Azure DevOps Services collations. See more details at https://aka.ms/AzureDevOpsImportCollations
```

Receiving this warning **does NOT** mean that you can't import your collection to Azure DevOps Services. Rather, it means that you will need to think through some additional considerations before performing an import. When a non-supported collation is imported into Azure DevOps Services it is effectively transformed to the supported Azure DevOps Services collation. While this generally works without issue, unexpected results could be observed post import or the import could fail if a unique collation translation issue is encountered. For instance, customers will notice different ordering for strings containing non-English characters. Non-English characters like 'é' may become equivalent to the English 'e' after the import has completed. It's important that you complete and verify a dry run import when importing a collection with a non-supported collation.

This warning requires an acknowledgement from the user running the data migration tool command. Accepting the warning will allow the data migration tool to continue assisting you with preparing for your import. 

```cmdline
The collections database's collation '{collation}' is not natively supported in Azure DevOps Services. It could not be validated that the collation can be converted during import to a supported Azure DevOps Services collation, as there was no internet connection. Please run the command again from a machine with an internet connection. See more details at https://aka.ms/AzureDevOpsImportCollations
```

If the data migration tool is unable to make a connection to the internet then it will be unable to validate that your collation can be converted to one of the supported version at import time. It's only a warning, so you will be able to make forward progress on your migration process. However, when you run the prepare command, an internet connection is required and your collation will be validated at that time.

Generally a non-supported collation can be converted to one of the supported collations at import time. However, in extreme cases there are some collations which can't be converted. If your collection uses one of those collations then you will receive the below **error** message. 

```cmdline
The collection database's collation '{collation}' is not supported for import to Azure DevOps Services. It will need to be changed to a supported collation before it can be imported. See more details at https://aka.ms/AzureDevOpsImportCollations
```

In order to continue your collection's collation will need to be [changed](/sql/relational-databases/collations/set-or-change-the-database-collation) to one of the supported collations on Azure DevOps Services.
    
## Dealing with Identity Errors
Identity errors aren't common when validating a collection, but when they do come up it's important to fix them prior to migration to avoid any undesired results. Generally, identity problems stem from valid operations on previous versions of TFS that are no longer valid on your current Azure DevOps Server version. For example, some users being members of a built-in valid users group was once allowed, but isn't in more recent versions. The most common identity errors and guidance on fixing them can be found below.

### ISVError:100014
This error indicates that a permission is missing from a system group. System groups are well known groups in Azure DevOps Server and Azure DevOps Services. For example, every collection that you create has "Project Collection Valid Users" and "Project Collection Administrators" groups. They're created by default and it's not possible to edit the permissions for these groups. What this error indicates is that somehow one or more of these groups is missing a permission that it's expected to have. In order to fix this, you will need to use TFSSecurity.exe to apply the expected permissions onto the flagged system groups. To get started you will need to identify which [TFSSecurity](/azure/devops/server/ref/command-line/tfssecurity-cmd) command(s) will need to be run.

#### Project Collection Valid Users Error Message

Carefully examine the error message(s) the data migration tool highlighted. If the group that was flagged ends with "**0-0-0-0-3**", such as in the example below, then you will need to fix a missing permission for the "Project Collection Valid Users" group. Run the below command against TFSSecurity.exe after replacing the scope with the one from the error message and adding in your collection URL.

```cmdline
TFSSecurity.exe /a+ Identity "{scope}\\" Read sid:{Group SID} ALLOW /collection:{collectionUrl}
```
In the below example you will need to take the scope and group SID from the error message, and add it the templated command above. 

```cmdline
ISVError:100014 Missing permission for group:Microsoft.TeamFoundation.Identity;S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-3 for scope:397c326b-b97c-4510-8271-75aac13de7a9. Expected:1 and Actual:0 
```

The final command will look like:

```cmdline
TFSSecurity.exe /a+ Identity "397c326b-b97c-4510-8271-75aac13de7a9\\" Read sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-3 ALLOW /collection:https://localhost:8080/defaultcollection
```
#### Project Collection Administrators Error Message

Carefully examine the error message(s) the data migration tool highlighted. If the group that was flagged ends with "**0-0-0-0-1**", such as in the example below, then you will need to fix a missing permission for the "Project Collection Administrators" group. Run the below commands against TFSSecurity.exe after replacing the scope with the one from the error message and adding in your collection.

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
TFSSecurity.exe /a+ Identity "0c7c2216-fa4b-4107-a203-82b324a147ef\\" Read sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1 ALLOW /collection:https://localhost:8080/defaultcollection

TFSSecurity.exe /a+ Identity "0c7c2216-fa4b-4107-a203-82b324a147ef\\" Write sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1 ALLOW /collection:https://localhost:8080/defaultcollection

TFSSecurity.exe /a+ Identity "0c7c2216-fa4b-4107-a203-82b324a147ef\\" Delete sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1 ALLOW /collection:https://localhost:8080/defaultcollection

TFSSecurity.exe /a+ Identity "0c7c2216-fa4b-4107-a203-82b324a147ef\\" ManageMembership sid:S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1 ALLOW /collection:https://localhost:8080/defaultcollection
```
If you have multiple errors that need to be corrected, it's recommended that you put all of the commands into a batch file to execute them against TFSSecurity in an automated fashion. Once the commands have been executed you will need to run the data migration tool validate again to ensure that the error(s) has\have been corrected. If the error(s) still persists, please contact [Azure DevOps Services customer support](https://aka.ms/AzureDevOpsImportSupport).

### ISVError:300005

> [!IMPORTANT]
> Ensure that you have a backup of your collection and configuration databases before running the below commands to fix this error. 

ISVError:300005 indicates that a non-group identity is a member of an everyone group, more commonly known as the Valid Users groups. Valid Users groups are created by default for all projects and collections. They're uneditable groups that only contain other Azure DevOps Server groups as members. In the case of ISVError:300005, a non Azure DevOps Server group identity, such as an AD group or user identity, has a direct membership in a Valid Users group. 

Since Valid Users groups can't be edited directly or through TFSSecurity.exe, correcting the invalid membership will need to be done by running a SQL statement against the configuration database to remove the offending identity. Carefully examine the error message(s) the data migration tool highlighted. You will need copy down the GroupSid, MemberId, and ScopeId as these values will need to be placed into the templated command below.

```SQL
DECLARE @p6 dbo.typ_GroupMembershipTable

INSERT into @p6 values('{GroupSid}','Microsoft.TeamFoundation.Identity','{MemberId}',0)
 
EXEC prc_UpdateGroupMembership @partitionId=1,@scopeId='{ScopeId}',@idempotent=1,@incremental=1,@insertInactiveUpdates=0,@updates=@p6,@eventAuthor='9EE20697-5343-43FC-8FC5-3D5D455D21C5',@updateGroupAudit=0
```


Below is an example ISVError:300005 message from the data migration tool. 

```cmdline
ISVError:300005 Unexpected non group identity was found to have direct membership to everyone group. GroupSid:S-1-9-1551374245-3746625149-2333054533-2458719197-2313548623-0-0-0-0-3, MemberId:76050ddf-4fd8-48c4-a1ff-859e44364519, ScopeId:7df650df-0f8b-4596-928d-13dd89e5f34f
```


Copy the GroupSid, MemberId, and ScopeId into the templated SQL command.

```SQL
DECLARE @p6 dbo.typ_GroupMembershipTable

INSERT into @p6 values('S-1-9-1551374245-3746625149-2333054533-2458719197-2313548623-0-0-0-0-3','Microsoft.TeamFoundation.Identity','76050ddf-4fd8-48c4-a1ff-859e44364519',0)
 
EXEC prc_UpdateGroupMembership @partitionId=1,@scopeId='7df650df-0f8b-4596-928d-13dd89e5f34f',@idempotent=1,@incremental=1,@insertInactiveUpdates=0,@updates=@p6,@eventAuthor='9EE20697-5343-43FC-8FC5-3D5D455D21C5',@updateGroupAudit=0
```

Run the completed command against the Azure DevOps Server configuration database. This will need to be repeated for each ISVError:300005 instance that the data migration tool found. Errors with the same scope ID can be batched into one command. Once the commands have been executed you will need to run the data migration tool validate again to ensure that the errors have been corrected. If the errors still persist, please contact [Azure DevOps Services customer support](https://aka.ms/AzureDevOpsImportSupport). 

> [!IMPORTANT]
> The collection that you're trying to fix the error for must be attached. 
>
> If you receive a -1 result from running the command, ensure that your collection database that produced the error is attached to your Azure DevOps Server instance and that you're running the command on the configuration database. 

### AAD Timeout Exception
On rare occasions some might receive an AAD timeout error when running the data migration tool prepare command. 

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

If this number is in the high five-digits or even six-digits ranges then it could be an indication that the volume of identities being mapped require more time than the timeout limit provides. You should inspect your collection for inclusions of large AD groups such as an 'everyone' group. If possible remove these groups and try again. If you still can't resolve this error then please reach out to [Azure DevOps Services customer support](https://aka.ms/AzureDevOpsImportSupport).

## Dealing with Process Errors
See the separate [Process Templates](migration-processtemplates.md) page for details on resolving common process errors.

## Dealing with Field Validation Errors


#### <a name= "VS403442" ></a> **VS403442**
In order to migrate successfully, you must rename field *{TFSfieldReferenceName}*. Given name *{TFSfieldName}* is reserved for field *{VSTSfieldReferenceName}*.

Sometimes your local collection may have a field whose name may conflict with Azure DevOps Services system field. To resolve this error, you must change name of your collection field. use *changefield* command from [witadmin](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)

```cmdline
witadmin changefield /collection:http://AdventureWorksServer:8080/DefaultCollection /n:TFSfieldReferenceName /name:newFieldName
```

#### <a name= "VS403443" ></a> **VS403443**
In order to migrate successfully, you must rename field *{TFSfieldReferenceName}* to *{VSTSfieldName}*. Given name for *{TFSfieldReferenceName}* is *{TFSfieldName}*

Sometimes your local collection may have different name for a particular field. To resolve this error, use *changefield* command from [witadmin](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)

```cmdline
witadmin changefield /collection:http://AdventureWorksServer:8080/DefaultCollection /n:TFSfieldReferenceName /name:VSTSfieldName
```

#### <a name= "VS403444"> </a> **VS403444**
In order to migrate successfully, you must set type of field *{TFSfieldReferenceName}* to *{Type}*. Given type for *{TFSfieldReferenceName}* is *{collectionType}*.

Sometimes your local collection may have different type for a particular field. Presently [witadmin](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json) allows type change for only those fields which are either of HTML or PlainText type. If your field type is either HTML or PlainText, then you can change its type to required type using witadmin.

```cmdline
witadmin changefield /collection:http://AdventureWorksServer:8080/DefaultCollection /n:TFSfieldReferenceName  /type:PlainText | HTML
```
>[!Note]
> If your field type is something different than HTML|PlainText and field data is not important or field is not being used in any project, then we recommend using witadmin to delete that field.

> [!Important]
> Using [witadmin](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json) to delete a field will result in loss of field data across collection.

```cmdline
witadmin deletefield /collection:http://AdventureWorksServer:8080/DefaultCollection /n:TFSfieldReferenceName
```


## Dealing with Import Errors
Hit a failure when running your import? Failures in the import space fall into one of two categories. Verification failures happen when the import fails to start. The indication that this has occurred is when the data migration tool attempts to queue an import, but returns an error instead. Import failures happen when the import was queued successfully in the data migration tool, but failed after that point. The individual that queued the import will receive a failure email if this happens. 

### Verification Failures
Verification failures happen when the import fails to start. Issues falling into this category mean that something with your import request isn't valid. Look up you error message below and follow the recommended guidance on how to resolve the error. After that your team can try to queue the import again.   

**VS403254**

```cmdline
VS403254: Region {0} may not be used for the Import, it is not a supported region.
```

The region that you entered for your Azure DevOps Services import isn't supported. Open your import specification file and update the region that you've provided with the correct short name for the [region](migration-import.md#supported-azure-regions-for-import) you want to import into. 

**VS403249**

```cmdline
VS403249: The organization {0} already exists. Please select a different name and try the import again.
```

All Azure DevOps Services imports go into a new organization that is created at import time. This error indicates that the organization name your team has selected is already being used by an existing organization. Select a different name and update the import specification file before retrying the import. 

**VS403250 & VS403286**

```cmdline
VS403250: The dacpac is not a detached Azure DevOps Server Collection database.
VS403286: The dacpac is from a Azure DevOps Server Configuration database. You must use a detached Azure DevOps Server Collection database.
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
VS403351: The DACPAC or source database is missing an expected table. It's possible that the database was not correctly detached from Azure DevOps Server.
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

There is a known issue with using sp_addrolemember to add 'TFSEXECROLE' to an existing SQL login. The role membership is not applied until all open connections using that identity are closed. If you're hitting the above error and have confirmed your identity has this role, it's recommended that you create a new identity for your import. Details on how to create a new SQL login that's ready to be used for import can be found at https://aka.ms/AzureDevOpsImportLargeCollection.

**VS403264**

```cmdline    
VS403264: The database is not a Azure DevOps Server Collection database, it cannot be used for import.
```
    
The connection string does not point to a Azure DevOps Server Collection database. 

**VS40325**

```cmdline
VS403255: The collection cannot be imported due to an ongoing post upgrade job. Please wait and try again later
```

The Azure DevOps Server Update has queued the file migration job. Imports cannot be performed until this job has completed. The completion time for this job is dependent on the size of the collection. Job progress can be tracked by running the below query on the collection database:

```SQL 
SELECT  COUNT (*) as remaining_files_to_migrate
FROM    tbl_FileReference
WHERE   PartitionId > 0
        AND MigrateFileId IS NOT NULL
```

Once the number of files remaining to migrate is zero you can run the data migration tool. 

**VS403282**   

```cmdline
VS403282: The source location parameter contains a new line character. Please ensure the SAS key is defined on a single line in the import specification file.
```

There is a new line character in the source location value, this could have been left over when copying the SAS key from your windows console, please remove the line break and try again.

**VS403271**   

```cmdline
VS403271: It appears that your DACPAC was uploaded to East US. It's required that customers targeting Central US for import put their DACPACs in Central US. Please move your DACPAC to Central US and requeue the import.
``` 

Your import files and DACPAC are not located in the **required** Azure region to complete the import to your target Azure DevOps Services region. Please [Create a new windows azure storage account](/azure/storage/common/storage-create-storage-account) in the required region and copy your files. Below is an example of how to copy your data using AzCopy.

```cmdline
AzCopy.exe /Source:https://accountSCUS.blob.core.windows.net/mycontainer /SourceKey:"primary access key" /Dest:https://accountCUS.blob.core.windows.net/mycontainer /DestKey:"primary access key" /S
```

**VS403316**

```cmdline
VS403316: An inconsistency was detected in some TFVC files for this collection. The inconsistency needs to be corrected prior to running an import to Azure DevOps Services. Please reach out to https://aka.ms/AzureDevOpsImportSupport for assistance with addressing this issue.
```

An inconsistency was detected in some TFVC files within your collection. To resolve the error you will need to work Azure DevOps Services [customer support](https://aka.ms/AzureDevOpsImportSupport). Please open a support ticket and they will assist you with correcting the error. 

**VS403366**

```cmdline
VS403366: A problem occurred while attempting to connect to your database. Please verify that your connection string is correct and that all required IP addresses for Azure DevOps Services have been provided exceptions for your machines firewall.

List of Azure DevOps Services IPs:
```

The data migration tool was unable make a connection to the SQL Azure VM. Verify that you've entered the information correctly in your connection string and that you can connect to the VM. The IPs that the error message lists are for Azure DevOps Services. Azure DevOps Services IPs can change temporarily during deployments. Please add them to your firewall exceptions and try queuing the import again. 

**VS403373**

Importing multiple copies of the **SAME** collection is not supported by the data migration tool for Azure DevOps. However, we **DO** support importing **split** copies of a collection. What you need to do is change the GUID for the _DataImportCollectionID_.

From SQL Server Management Studio (SSMS) open the extended properties for the split copies that haven't been imported yet. Add a newly generated GUID to the "TFS_DATAIMPORT_COLLECTIONID" property. Then re-run the prepare command and use the new import.json to queue the import.

### Import Failures
When an import fails, the individual that queued the import will receive an email notification. Most of the time this email will include a reason for the failure. If it does, use the troubleshooting steps provided in the email and this page to resolve the errors and try your import again. 

If the error is more complex then the email will provide instructions on how to file a customer [support case](https://aka.ms/AzureDevOpsImportSupport). After submitting a customer support case, your team will need to roll back by bringing your Azure DevOps Server instance back online and reattach your collection. This will allow your team members to continue working. It's recommended not to attempt the import again until the issue causing the failure has been resolved. 
 






