---
title: Prepare test run migration
description: Learn about the steps you need to take to prepare for a test run migration to Azure DevOps Service.
ms.topic: how-to
ms.subservice: azure-devops-migrate
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 04/13/2026
ms.custom: sfi-image-nochange
---

# Prepare for test run migration

This article focuses on team preparation and file generation required by the Data Migration Tool.

:::image type="content" source="media/prepare-test-run-stage-migration-highres.png" alt-text="Diagram of highlighted Prepare for test run stage of the seven stages of migration.":::

## Prerequisites 

Complete the [Validate phase](migration-validate.md) before you begin to prepare for test run migration. 

## Generate migration settings 

Generate the migration specification and related files to queue the migration of your collection database.  

1. Run the Data Migration Tool prepare command with the following parameters: 

    `/collection:http://localhost:8080/tfs/DefaultCollection/ tenantDomainName:contoso.com /Region:CUS` 

   - Use the tenant domain name option as the name of your company’s Microsoft Entra ID tenant.  
   - The prepare command requires internet access. If your Azure DevOps Server lacks internet connectivity, run the command from a different computer. 
   - The term "organization region" refers to the location where you plan to migrate your collection into Azure DevOps Services. You previously selected a region and recorded its shorthand code. Use this code in the prepare command.

1. Sign in with a user from the tenant who has permission to read information about all users in the Microsoft Entra ID tenant.

## Configure the migration specification file 

The migration specification file is a JSON file that instructs the Data Migration Tool how to complete the following actions:
- Configure your migrated organization
- Specify the source locations
- Customize the migration 

Many of the fields are auto populated during the prepare step but you must configure the following fields: 

- **Organization name:** The name of the organization you want to create for migrating your data. 
- **Location:** A backup of your database and migration files to upload to an Azure storage container. This field specifies the SAS key used by the migration tool to securely connect to and read the source files from the Azure storage container. Creating the storage container is covered later in Phase 5 and generating a SAS key is covered in Phase 6 before you queue for a new migration. 
- **DACPAC:** A file that packages up your collection’s SQL database. 
- **Migration type:** The type of migration: Test run or Production run. 

Each migration specification file is meant for a single collection. If you try to use a migration specification file generated for another collection, the migration doesn't start. You need to prepare a test run for each collection you wish to migrate and use the generated migration specification file to queue the migration. 

## Review the identity map log file 

The identity map log is crucial, as important as the actual data that you migrate. When you examine the log file, understand how identity migration functions and the potential outcomes. When you migrate an identity, it can be either active or historical. Active identities can sign in to Azure DevOps Services, while historical identities can't. The service decides which type gets used.  

> [!NOTE]
> Once an identity gets migrated as a historical identity, you can't convert it to an active one. 

### Active identities 

Active identities refer to user identities in Azure DevOps Services post-migration. In Azure DevOps Services, these identities are licensed and are displayed as users in the organization. The identities are marked as active in the **Expected Import Status** column in the identity map log file. 

### Historical identities 

The identity map log file shows historical identities in the **Expected Import Status** column. Identities without a line entry in the file also become historical. An example of an identity without a line entry might be an employee who no longer works at a company. 

Unlike active identities, historical identities: 

- Don't have access to an organization after migration. 
- Don't have licenses. 
- Don't show up as users in the organization. All that persists is the notion of that identity's name in the organization, so that its history can be searched later. Use historical identities for users who no longer work at the company or who don't need further access to the organization. 

> [!NOTE]
> After an identity migrates as historical, you can't make it active. 

### Licenses 

During migration, the process automatically assigns licenses for all users displayed as **active** in the **Expected Import Status** column of the identity mapping log. If automatic license assignment is incorrect, you can change it by editing the **access level** of one or more users after migration completes. 

Assignment might not always be perfect, so you have until the first of the following month to reassign licenses as needed. If by the first of the next month you don't link a subscription to your organization and purchase the correct number of licenses, all your grace period licenses are revoked. Alternatively, if auto assignment assigned more licenses than you purchased for next month, then you aren't charged for the extra licenses, but all unpaid licenses are revoked. 

To avoid losing access, link a subscription and purchase needed licenses before the first of the month, as billing runs monthly. For all test runs, licenses are free for as long as the organization is active. 

### Azure DevOps subscriptions 

Visual Studio Subscriptions aren't assigned by default for migrations. Instead, users with Visual Studio Subscriptions automatically get upgraded to use that license. If a user's work organization is linked correctly, Azure DevOps Services automatically applies their Visual Studio subscription benefits on their first sign-in post migration. 

You don't need to repeat a test run migration if users don't automatically get upgraded to use their Visual Studio Subscription in Azure DevOps Services. Visual Studio Subscription linking is something that happens outside of the scope of a migration. If the work organization gets linked correctly before or after the migration, then the user automatically has their license upgraded on the next sign in. Once they're upgraded, next time you migrate the user automatically gets upgraded upon initial sign-in to the organization.

## Restrict access to Azure DevOps Services IPs only 

- [Option 1: Use Service Tags](#option-1-use-service-tags) 
- [Option 2: Use IP List](#option-2-use-ip-list)

Restrict access to your Azure Storage account to only IPs from Azure DevOps Services. You can restrict access by only allowing connections from Azure DevOps Services IPs that are involved in the collection database migration process. The IPs that need access to your storage account depend on the region you're migrating into. 

### Option 1: Use Service Tags 

You can easily allow connections from all Azure DevOps Services regions by adding the `azuredevops` service tag to your network security groups or firewalls either through the portal or programmatically. 

### Option 2: Use IP List 

Use the `IpList` command to get the list of IPs that need access to allow connections from a specific Azure DevOps Services region. 

The help documentation includes instructions and examples for running Migrator from the Azure DevOps Server instance itself and a remote machine. If you're running the command from one of the Azure DevOps Server instance's application tiers, your command should have the following structure: 

```cmdline
Migrator IpList /collection:{CollectionURI} /tenantDomainName:{name} /region:{region} 
```

You can add the list of IPs to your network security groups or firewalls either through the portal or programmatically. 

### Configure IP firewall exceptions for SQL Azure 

This section covers configuring firewall exceptions for SQL Azure. For DACPAC migrations, see [Configure Azure Storage firewalls and virtual networks](/azure/storage/common/storage-network-security?tabs=azure-portal). 

The Data Migration Tool requires you to configure the Azure DevOps Services IPs for inbound connections only on port `1433`. 

To grant exceptions for the necessary IPs that the Azure networking layer handles for your SQL Azure VM, complete the following steps:  

1. Sign in to the Azure portal.  
1. Go to your SQL Azure VM. 
1. In **Settings**, select **Networking**.  
1. Select **Add inbound port rule**.
   :::image type="content" source="media/migration-import/inbound.png" alt-text="Screenshot of the Add inbound port rule button on your SQL Azure VM network interface page.":::
1. Select **Advanced** to configure an inbound port rule for a specific IP. 
   :::image type="content" source="media/migration-import/advanced.png" alt-text="Screenshot of the Advanced button on the Add inbound security rule pane.":::
1. In the **Source** drop-down list, select **IP Addresses**. Enter an IP address that needs an exception. Set the **Destination port range** to `1433`. In the **Name** box, enter a name that best describes the exception you're configuring. 

Depending on other configured inbound port rules, you might need to change the default priority for the Azure DevOps Services exceptions, so they aren't ignored. For example, if you have a "deny on all inbound connections to 1433" rule with a higher priority than your Azure DevOps Services exceptions, the Data Migration Tool might be unable to make a successful connection to your database.

:::image type="content" source="media/migration-import/example.png" alt-text="Screenshot of a completed inbound port rule configuration.":::

Repeat adding inbound port rules until all necessary Azure DevOps Services IPs have an exception. Missing one IP could result in your migration failing to start. 

## Migrate large collections 

For databases that the Data Migration Tool warns are too large, a different data packaging approach is required to migrate to Azure DevOps Services. If you're unsure whether your collection exceeds the size threshold, run a Data Migration Tool validation on the collection. The validation lets you know whether you need to use the SQL Azure VM method for migration. 

### Determine if you can reduce the collection size 

Check if you can clean up old data. Over time, collections can accumulate large volumes of data. This growth is a natural part of the DevOps process, but you might find you don't need to retain all the data. Some common examples of no longer relevant data are older workspaces and build results. 

The Data Migration Tool scans your collection and compares it to the limits mentioned previously. It then reports whether your collection is eligible for DACPAC or SQL migration method. In general, if your collection is small enough to fit within the DACPAC limits, you can use the faster and simpler DACPAC approach. However, if your collection is too large, you need to use the SQL migration method, which involves setting up a SQL Azure VM and migrating the database manually. 

### Size limits 

The current limits are: 

- 150-GB total database size (database metadata + blobs) for DACPAC. If you exceed this limit, you need to perform the SQL migration method. 
- 30-GB individual table size (database metadata + blobs) for DACPAC. If any single table exceeds this limit, you need to perform the SQL migration method. 
- 1,536-GB database metadata size for SQL migration method. Exceeding this limit issues a warning. To have a successful migration, keep under this size. 
- 2,048-GB database metadata size for SQL migration method. Exceeding this limit results in an error, so you can't perform a migration.
- No limit for blob sizes for SQL migration method. 

When you clean older, no-longer-relevant artifacts, you might remove more space than you expect. This cleanup can determine whether you use the DACPAC migration method or a SQL Azure VM. 

> [!IMPORTANT]
> Once you delete older data, you can't recover it unless you restore an older backup of the collection. 

If you're under the DACPAC threshold, follow the instructions to generate a DACPAC for migration. If you still can't get the database under the DACPAC threshold, you need to set up a SQL Azure VM to migrate to Azure DevOps Services. 

## Set up a SQL Azure VM to migrate to Azure DevOps Services 

Complete the following high-level steps to set up a SQL Azure virtual machine (VM) to migrate to Azure DevOps Services. 

1. [Set up a SQL Azure VM](#set-up-a-sql-azure-vm)
1. [Configure IP firewall exceptions](#configure-ip-firewall-exceptions-for-sql-azure)
1. [Restore your database on the VM](#restore-your-database-on-the-vm) 
1. [Configure your collection for migration](#configure-your-collection-for-migration)
1. [Configure the migration specification file to target the VM](#configure-the-migration-specification-file-to-target-the-vm) 

### Set up a SQL Azure VM 
You can quickly set up a SQL Azure VM from the Azure portal. For more information, see [Use the Azure portal to provision a Windows virtual machine with SQL Server](/azure/azure-sql/virtual-machines/windows/create-sql-vm-portal?view=azuresql&preserve-view=true). 

The performance of your SQL Azure VM and attached data disks significantly affects the performance of the migration. For this reason, complete the following tasks: 
- Select a VM size at the level of `D8s_v5_*` or greater.
- Use managed disks. 
- Consult [virtual machine and disk performance](/azure/virtual-machines/disks-performance). Ensure your infrastructure is configured so that the VM IOPS (input/output per second) and storage IOPS don't become a bottleneck on the performance of the migration. For example, ensure the number of data disks attached to your VM is sufficient to support the IOPS from the VM. 

Azure DevOps Services is available in several [Azure regions across the globe](migration-test-run.md#supported-azure-regions-for-migration). To ensure that the migration starts successfully, it's critical to place your data in the correct region. If you set up your SQL Azure VM in a wrong location, the migration fails to start. 

> [!IMPORTANT]
> The Azure VM requires a public IP address. 

If you're using this migration method, create your VM in a supported region. Although Azure DevOps Services is available in multiple regions in the United States (US), only the Central United States region accepts new organizations. You can't migrate your data into other US Azure regions now.

> [!NOTE]
> DACPAC customers should consult the region table in the "Step 3: Upload the DACPAC file](migration-test-run.md#)" section. The preceding guidelines are for SQL Azure VMs only. If you're a DACPAC customer, see [supported Azure regions for migration](migration-test-run.md#supported-azure-regions-for-migration). 

Use the following SQL Azure VM configurations: 
- Configure the SQL temporary database to use a drive other than drive C. Ideally, the drive should have ample free space, at least equivalent to your database's largest table. 
- If your source database is still over 1 terabyte (TB) after you reduced its size, you need to attach more 1-TB disks and combine them into a single partition to restore your database on the VM. 
- If your collection databases are over 1 TB in size, consider using an SSD (solid state hard drives) for both the temporary database and collection database. Also, consider using larger VMs with 16 virtual CPUs (vCPUs) and 128 GB (gigabytes) of RAM (random access memory). 

## Restore your database on the VM 

After you set up and configure an Azure VM, you need to take your detached backup from your Azure DevOps Server instance to your Azure VM. The collection database needs to be restored on your SQL instance and doesn't require Azure DevOps Server to be installed on the VM. 

## Configure your collection for migration 

After restoring your collection database on your Azure VM, configure a SQL authentication to allow Azure DevOps Services to connect to the database and migrate the data. This authentication grants read access to only one database. 

1. Open SQL Server Management Studio on the VM, and then open a new query window for the database you want to migrate.
1. Set the database's recovery model to simple: 

    ```sql
    ALTER DATABASE [<Database name>] SET RECOVERY SIMPLE;
    ```

1. Create a SQL authentication for the database, and assign that authentication the `TFSEXECROLE` role, as shown in the following example. 

    ```sql
    USE [<database name>] 
    CREATE LOGIN <pick a username> WITH PASSWORD = '<pick a password>' 
    CREATE USER <username> FOR LOGIN <username> WITH DEFAULT_SCHEMA=[dbo] 
    EXEC sp_addrolemember @rolename='TFSEXECROLE', @membername='<username>'
    ```

See the following example of the SQL command:  

```sql
    ALTER DATABASE [Foo] SET RECOVERY SIMPLE; 
     
    USE [Foo] 
    CREATE LOGIN fabrikam WITH PASSWORD = 'fabrikampassword' 
    CREATE USER fabrikam FOR LOGIN fabrikam WITH DEFAULT_SCHEMA=[dbo] 
    EXEC sp_addrolemember @rolename='TFSEXECROLE', @membername='fabrikam'
```

> [!IMPORTANT]
> In SQL Server Management Studio on the VM, enable SQL Server and Windows authentication mode. If you don't enable authentication mode, the migration fails. 

### Configure the migration specification file to target the VM 

Update the migration specification file to include information about how to connect to the SQL Server instance. Open your migration specification file and make the following updates: 

1. Remove the DACPAC parameter from the source files object. 
    The migration specification before the change looks like the following example code. 

    :::image type="content" source="media/import-spec-before.png" alt-text="Screenshot of the migration specification before the change."::: 

    The migration specification after the change looks like the following example code. 

    :::image type="content" source="media/import-spec-after.png" alt-text="Screenshot of the migration specification after the change."::: 

1. Enter the required parameters and add the following properties object within your source object in the specification file. 

    ```json
    "Properties": 
    { 
        "ConnectionString": "Data Source={SQL Azure VM Public IP};Initial Catalog={Database Name};Integrated Security=False;User ID={SQL Login Username};Password={SQL Login Password};Encrypt=True;TrustServerCertificate=True"  
    }
    ```

After you apply the changes, the migration specification looks like the following example.

:::image type="content" source="media/import-spec-iaas.png" alt-text="Screenshot of the migration specification referencing a SQL Azure VM."::: 

Your migration specification is now configured to use a SQL Azure VM for migration. Proceed with the rest of the preparation steps for migration. After the migration finishes, be sure to delete the SQL sign-in or rotate the password. Microsoft doesn't retain the sign-in information after the migration completes. 

## Create an Azure Storage Container in chosen data center 

Using the Data Migration Tool for Azure DevOps requires having an Azure Storage container in the same Azure data center as the final Azure DevOps Services organization. For example, if you intend for your Azure DevOps Services organization to be created in the Central United States data center, then create the Azure Storage container in that same data center. This action drastically speeds up the time that it takes to migrate the SQL database, since the transfer occurs within the same data center. 

For more information, see [Create a storage account](/azure/storage/common/storage-account-create?tabs=azure-portal). 

## Set up billing 

When you migrate an Azure DevOps Services organization, the new organization gets a grace period. Use this time to finish any steps and correct license assignments. If you think you might want to purchase more user plans, build or deployment pipelines, or hosted build services, make sure you have an Azure subscription ready to link to your migrated organization. The grace period ends on the first day of the following month after you complete your migration. 

The post-migration phase reminds you when to do the linking. This preparation step is more about making sure that you know which Azure subscription you use in that later step. For more information, see [Set up billing for your organization](../organizations/billing/set-up-billing-for-your-organization-vs.md#set-up-billing). 

## Next steps 

> [!div class="nextstepaction"]
> [Do test run migration](migration-test-run.md)

## Related content 

- [Migrate to Azure DevOps Services](migration-migrate.md) 
- [Complete post-migration tasks](migration-post-migration.md)
 
