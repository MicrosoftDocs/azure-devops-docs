---
title: Migration overview from Azure DevOps Server to Azure DevOps Services | Azure DevOps 
description: Overview of the high fidelity migration process from Azure DevOps Server to Azure DevOps Services
ms.prod: devops
ms.topic: article
ms.technology: devops-learn
ms.contentid: 3d6edd06-ceed-43b4-9e77-4a121864594c
ms.manager: jillfra
ms.author: elbatk
author: elbatk
monikerRange: '>= tfs-2013'
ms.date: 04/13/2018
---

# Migrate data from Azure DevOps Server to Azure DevOps Services 

> [!NOTE]
> [Visual Studio Team Services (VSTS) is now Azure DevOps Services.](../user-guide/what-happened-vsts.md)

> [!NOTE]
> [Visual Studio Team Services (VSTS) is now Azure DevOps Services.](../user-guide/what-happened-vsts.md)
>
> With the release of Azure DevOps Server 2019 the TFS Database Import Service has been rebranded to become data migration tool for Azure DevOps. This includes TfsMigrator becoming the data migration tool or migrator for short. This service still works exactly the same as the old Import Service. If you're on an older version of on-premises with TFS as the branding you can still use this feature to migrate to Azure DevOps as long as you upgrade to one of the supported versions. 

## Data Migration Tool for Azure DevOps
The data migration tool for Azure DevOps provides a high fidelity way to migrate collection databases from Azure DevOps Server to Azure DevOps Services. It's recommended that you download the [migration guide](https://aka.ms/AzureDevOpsImport) if you're looking to use this service to import your collection(s). The guide serves as a walk through of the different steps involved in an import. Providing best practices, checklists, and helpful tips to make your import as easy as possible. The guide should be used in conjunction with the more technical documentation referenced below to successfully import to Azure DevOps Services. 


## Supported Azure DevOps Server Versions for Import

> [!IMPORTANT] 
> It can take up to 2-3 weeks after a new RTW version of Azure DevOps Server is released for import support to come online for that version. It's important to take this into consideration when choosing to upgrade shortly after a new RTW Azure DevOps Server release.
>
> TfsMigrator for TFS 2018 Update 3 supports TFS 2018 Update 3.1 & Update 3.2 as well. If you run into an issue running TfsMigrator and are on that version, download the latest TfsMigrator version and try again. 


The data migration tool for Azure DevOps supports the two latest releases of Azure DevOps Server at a given time. Releases include updates and major releases. Currently the following versions of Azure DevOps Server are supported for import:


* TFS 2018 Update 3, Update 3.1, and Update 3.2
* Azure DevOps Server 2019

> [!NOTE]
> The data migration tool doesn't support imports from Azure DevOps Server release candidates (RC). If you're planning on importing your collection database to Azure DevOps Services using this service, it's important that you don't upgrade your production database to an RC release. If you do upgrade, then you will need to wait and upgrade to the release to web (RTW) version when it's available or restore a backup copy of your database from a previous Azure DevOps Server version to import. 

Normal release cadence for new Azure DevOps Server versions is once every three-to-four months. Meaning that support for a given version of Azure DevOps Server for migration to Azure DevOps Services should last for anywhere between six-to-eight months. It's important to ensure that your planning accounts for this support window to avoid having to suddenly upgrade to migrate. 

## Preview features

> [!Note]
> If you’re not including preview features when running the migration tool, then you will need to re-run the migration tool prepare to generate a new import.json to queue an import. You DO NOT need to include preview features when you re-generate your import.json.  
>
> If you had previously been including preview features then you DO NOT need to take any additional actions after Monday, April 23rd. 


The following features can be included with your import, but are currently in a preview state. 

* No preview features at this time

When queueing an import you can elect to include preview features with your import. If you do, data related to these features will be copied into your new organization along with all your other data. Should you choose to not include these features then their data will not be copied.

For a list of items not included with an import please see the [migration guide](https://aka.ms/AzureDevOpsImport).

## Data Migration Tool for Azure DevOps Resources

In general you should use the [migration guide](https://aka.ms/AzureDevOpsImport) when going through an import. When it's required the guide links back to the below documentation. These articles offer deeper technical knowledge on various import topics. 

### Importing Process 
* [Validating a collection for import](migration-import.md#validating-a-collection)
* [Preparing a collection for import](migration-import.md#generating-import-files)
* [Before import steps](migration-import.md#getting-ready-to-import)
* [Running an Import](migration-import.md#running-an-import)
* [Post import steps](migration-post-import.md)

### Troubleshooting 
* [Troubleshooting validation errors](migration-troubleshooting.md)
* [Troubleshooting process errors](migration-processtemplates.md#dealing-with-process-errors)
* [Troubleshooting import errors](migration-troubleshooting.md#dealing-with-import-errors)


## FAQ

<!-- BEGINSECTION class="md-qanda" -->

#### Q: Is there any risk of using the Hosting XML model becoming a problem in future updates of the service?

A: No, when it comes to service updates, Hosted XML organizations are treated the same as organizations using the Inheritance process model.

#### Q: Will my organization be stuck in Hosted XML forever?

A: You are using the Hosted XML process because the Inheritance process model does not contain all features yet. However, you can now [clone a hosted XML process to an Inheritance process](https://docs.microsoft.com/azure/devops/organizations/settings/work/upgrade-hosted-to-inherited).

#### Q: Will migrating from Hosted XML into Inheritance process model be a manual process?

A: No, the migration is automated. Simply follow the steps to [clone a hosted XML process to an Inheritance process](https://docs.microsoft.com/azure/devops/organizations/settings/work/upgrade-hosted-to-inherited).


#### Q: What happens in Hosted XML when Microsoft makes a change to a system process?

A: This is the same experience with Azure DevOps Server. If we make a change to a system process, it will not be applied to any of your Hosted XML processes. You won't have to update your processes if you don't want to. But if you do, you will need to make the changes in the XML definition files manually for each process. 

#### Q: Is there a difference between a team project that was created manually versus one that was created from data import?

A. The features available to each team project are the same. The differences occur in how you modify the processes in your organization. When you create an organization, you will use the [Inheritance process model](../organizations/settings/work/manage-process.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json) to customize the work tracking experience. Team projects migrated via data import, however, will use the [Hosted XML process model](../organizations/settings/work/import-process/import-process.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json) to customize the work tracking experience. As described above, these Hosted XML processes can be cloned to an Inheritance process model after import.

#### Q: If my organization is using Hosted XML, can I create new projects to use the Inheritance process model?

A: Yes. For data import organizations, Azure DevOps Services supports team projects that use Inheritance as well as Hosted XML process models. To learn more about the Inheritance process, see [Manage processes](../organizations/settings/work/manage-process.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json).  

#### Q: Where can I find more information on Hosted XML and the Inheritance process model?

* [Inheritance Process Model](../organizations/settings/work/manage-process.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)
* [Hosted XML](../organizations/settings/work/import-process/import-process.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)

#### Q: If I have feedback or additional questions is there somewhere I can reach out?

A: Yes, you can contact [AzureDevOpsImport@microsoft.com](mailto:AzureDevOpsImport@microsoft.com). Please note that this alias is for general questions. If you need assistance with a failed import please contact Azure DevOps [customer support](https://aka.ms/AzureDevOpsImportSupport). 

## Videos 
> [!VIDEO https://channel9.msdn.com/Events/Ignite/Microsoft-Ignite-Orlando-2017/BRK3199/player]

<!-- ENDSECTION --> 

 

