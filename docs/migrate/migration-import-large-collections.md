---
title: Import process for large collections from Azure DevOps on-premises
titleSuffix: Azure DevOps
description: How to guide for importing a large collection to the cloud
ms.topic: how-to
ms.subservice: azure-devops-migrate
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/07/2021
---

# Import large collections 

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

<a id="import-large-collections"></a>


For databases that the data migration tool warns are too large, a different data packaging approach is required to migrate to Azure DevOps Services. If you're unsure whether your collection exceeds the size threshold, you should run a data migration tool validation on the collection. The validation lets you know whether you need to use the SQL Azure VM method for import. 

## Determine if you can reduce the collection size

Before you proceed, we recommend checking to see whether your [old data can be cleaned up](/azure/devops/server/upgrade/clean-up-data). Over time, collections can build up large volumes of data. This growth is a natural part of the DevOps process, but you might find that you don't need to retain all of the data. Some common examples of no longer relevant data are older workspaces and build results. 

Cleaning older, no-longer-relevant artifacts could remove a lot more space than you might expect, and it could determine whether you use the DACPAC import method or a SQL Azure VM. 

> [!IMPORTANT]
> After you've deleted older data, it *can't* be recovered unless you restore an older backup of the collection.

If you're under the DACPAC threshold, follow the instructions to [generate a DACPAC](migration-import.md#dacpac-file) for import. If you still can't get the database under the DACPAC threshold, you need to set up a SQL Azure VM to import to Azure DevOps Services. 

## Set up a SQL Azure VM to import to Azure DevOps Services

Let's walk through how to accomplish this. At a high level, you'll:

* Set up a SQL Azure VM.  
* (Optional) Restrict access to Azure DevOps Services IPs only.  
* Configure IP firewall exceptions.  
* Restore your database on the VM.  
* Configure your collection for import.  
* Configure the import specification file to target the VM  

## Set up a SQL Azure VM

You can set up a SQL Azure VM from the Azure portal with just a few clicks. To learn how, see [Use the Azure portal to provision a Windows virtual machine with SQL Server](/azure/azure-sql/virtual-machines/windows/create-sql-vm-portal). 

> [!NOTE] 
> While setting up your SQL Azure VM, bear in mind that the performance of the VM and attached data disks will have a significant impact on the performance of the import. For this reason, we *highly* recommend:
> - Selecting a VM Size at the level of D8s_v5_* or greater
> - Using managed disks
> - Consulting [Virtual machine and disk performance](/azure/virtual-machines/disks-performance). Please ensure your infrastructure is configured so that neither the VM IOPS or storage IOPS become a bottleneck on the performance of the import. For example, ensuring the number of data disks attached to your VM is sufficient to support the IOPS from the VM.

Azure DevOps Services is available in several Azure regions across the globe. These can be seen in the table below.

> [!IMPORTANT]
> To ensure that the import starts successfully, it's critical to place your data in the correct region. If you set up your SQL Azure VM in a location other than the regions listed in the following table, the import will fail to start.

If you're using this import method, determine where to create your SQL Azure VM by referring to the following table. Creating your VM in a region other than those in this list is not supported for running an import.

| Desired import region | SQL Azure VM region |
| --- | --- |
| Central United States | Central US |
| Western Europe |  West Europe |
| Australia East | Australia East |
| Brazil South | Brazil South |
| South India | South India |
| Central Canada | Canada Central |
| Asia Pacific | Southeast Asia (Singapore) |
| UK South | UK South |

<br> 

Although Azure DevOps Services is available in multiple regions in the US, only the Central United States region accepts new organizations. Companies can't import their data into other US Azure regions at this time. 

> [!NOTE] 
> DACPAC customers should consult the region table in the ["Step 3: Upload the DACPAC file" section](migration-import.md#step-3-upload-the-dacpac-file). The preceding guidelines are for SQL Azure VMs only. 

Here are a few more SQL Azure VM configurations that we recommend:
- [Configure the SQL temporary database](/sql/relational-databases/databases/move-system-databases#Examples) to use a drive other than drive C. Ideally the drive should have ample free space; at least equivalent to your database's [largest table](migration-import.md#step-2-generate-a-dacpac-file).
- If your source database is still over 1 terabyte (TB) after you've [reduced its size](/azure/devops/server/upgrade/clean-up-data), you need to [attach additional 1-TB disks](/azure/virtual-machines/windows/attach-disk-portal) and combine them into a single partition to restore your database on the VM. 
- If your collection databases are over 1 TB in size, consider using an SSD for both the temporary database and collection database. Also, consider using larger VMs with 16 virtual CPUs (vCPUs) and 128 GB of RAM.
- You need to have a public facing IP address for the service to reach this machine.

<a id="ips"></a>

## Restrict access to Azure DevOps Services IPs only

See the [Restrict access to Azure DevOps Services IPs only](migration-restricting-access-to-azure-devops-services.md) page for more details.

## Restore your database on the VM

After you set up and configure an Azure VM, you need to take your detached backup from your Azure DevOps Server instance to your Azure VM. Azure has [several documented methods](/azure/azure-sql/virtual-machines/windows/migrate-to-vm-from-sql-server) for how to accomplish this task. The collection database needs to be restored on your SQL instance and doesn't require Azure DevOps Server to be installed on the VM. 

## Configure your collection for import

After your collection database has been restored on your Azure VM, configure a SQL login to allow Azure DevOps Services to connect to the database to import the data. This login allows only *read* access to a single database. 

To start, open SQL Server Management Studio on the VM, and then open a new query window against the database to be imported. 

Set the database's recovery to simple: 

```sql
ALTER DATABASE [<Database name>] SET RECOVERY SIMPLE;
```

Create a SQL login for the database, and assign that login the 'TFSEXECROLE':

```sql
USE [<database name>]
CREATE LOGIN <pick a username> WITH PASSWORD = '<pick a password>'
CREATE USER <username> FOR LOGIN <username> WITH DEFAULT_SCHEMA=[dbo]
EXEC sp_addrolemember @rolename='TFSEXECROLE', @membername='<username>'
```

Following our Fabrikam example, the two SQL commands would be:

```sql
ALTER DATABASE [Foo] SET RECOVERY SIMPLE;

USE [Foo]
CREATE LOGIN fabrikam WITH PASSWORD = 'fabrikamimport1!'
CREATE USER fabrikam FOR LOGIN fabrikam WITH DEFAULT_SCHEMA=[dbo]
EXEC sp_addrolemember @rolename='TFSEXECROLE', @membername='fabrikam'
```
> [!NOTE] 
> Be sure to enable [SQL Server and Windows authentication mode](/sql/database-engine/configure-windows/change-server-authentication-mode?view=sql-server-ver15#change-authentication-mode-with-ssms&preserve-view=true) in SQL Server Management Studio on the VM. If you don't enable authentication mode, the import will fail.  

## Configure the import specification file to target the VM

Update the import specification file to include information about how to connect to the SQL Server instance. Open your import specification file and make the following updates:

1. Remove the DACPAC parameter from the source files object.

    The import specification before the change is shown in the following code:
    
    ![Screenshot of the import specification before the change.](media/migration-import/importSpecBefore.png)
    
    The import specification after the change is shown in the following code:
    
    ![Screenshot of the import specification after the change.](media/migration-import/importSpecAfter.png)

1. Fill out the required parameters and add the following properties object within your source object in the specification file.

    ```json
    "Properties":
    {
        "ConnectionString": "Data Source={SQL Azure VM Public IP};Initial Catalog={Database Name};Integrated Security=False;User ID={SQL Login Username};Password={SQL Login Password};Encrypt=True;TrustServerCertificate=True" 
    }
    ```

Following the Fabrikam example, after you apply the changes, the import specification would look like the following:

![Screenshot of the import specification referencing a SQL Azure VM.](media/migration-import/importSpecIaaS.png)

Your import specification is now configured to use a SQL Azure VM for import. Proceed with the [rest of preparation steps](migration-import.md#determine-the-import-type) to import to Azure DevOps Services. After the import has finished, be sure to delete the SQL login or rotate the password. Microsoft does not retain the login information after the import has finished. 
 

## Related articles

- [Validation and import processes](migration-import.md)  
