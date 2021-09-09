---
title: Azure DevOps Server to Services Migration overview
description: Overview of the high fidelity migration process from Server to Services
ms.topic: overview
ms.technology: devops-migrate
ms.contentid: 3d6edd06-ceed-43b4-9e77-4a121864594c
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 04/01/2021
---

# Migrate data from Azure DevOps Server to Azure DevOps Services  

[!INCLUDE [version-azure-devops](includes/version-azure-devops.md)]

The data migration tool for Azure DevOps provides a high fidelity way to migrate collection databases from Azure DevOps Server to Azure DevOps Services. It's recommended that you download the [migration guide and tool](https://aka.ms/AzureDevOpsImport) if you're looking to use this service to import your collection(s). The guide serves as a walk through of the different steps involved in an import. Providing best practices, checklists, and helpful tips to make your import as easy as possible. The guide should be used in conjunction with the more technical documentation referenced below to successfully import to Azure DevOps Services. 

## Supported Azure DevOps Server versions for import

> [!IMPORTANT] 
> It can take up to 2-3 weeks after a new RTW version of Azure DevOps Server is released for import support to come online for that version. It's important to take this into consideration when choosing to upgrade shortly after a new RTW Azure DevOps Server release.

The data migration tool for Azure DevOps supports the two latest releases of Azure DevOps Server at a given time. Releases include updates and major releases. Currently the following versions of Azure DevOps Server are supported for import:

* Azure DevOps Server 2020.1.1
* Azure DevOps Server 2020.1
* Azure DevOps Server 2020.0.1

> [!NOTE]
> The data migration tool doesn't support imports from Azure DevOps Server release candidates (RC). If you're planning on importing your collection database to Azure DevOps Services using this service, it's important that you don't upgrade your production database to an RC release. If you do upgrade, then you will need to wait and upgrade to the release to web (RTW) version when it's available or restore a backup copy of your database from a previous Azure DevOps Server version to import. 

Normal release cadence for new Azure DevOps Server versions is once every three-to-four months. Meaning that support for a given version of Azure DevOps Server for migration to Azure DevOps Services should last for anywhere between six-to-eight months. It's important to ensure that your planning accounts for this support window to avoid having to suddenly upgrade to migrate. 

## Preview features

> [!Note]
> If you're not including preview features when running the migration tool, then you will need to re-run the migration tool prepare to generate a new import.json to queue an import. You DO NOT need to include preview features when you re-generate your import.json.  
>
> If you had previously been including preview features then you DO NOT need to take any additional actions after Monday, April 23, 2020. 


The following features can be included with your import, but are currently in a preview state. 

* [Analytics](../report/powerbi/what-is-analytics.md) - Note this is only supported for Azure DevOps Server 2019 and later.

When queueing an import you can elect to include preview features with your import. If you do, data related to these features will be copied into your new organization along with all your other data. Should you choose to not include these features then their data will not be copied.

For a list of items not included with an import, see the [migration guide and tool](https://aka.ms/AzureDevOpsImport).

## Data migration tool for Azure DevOps resources

In general you should use the [Migration guide and tool](https://aka.ms/AzureDevOpsImport) when going through an import. When it's required, the guide links back to the following articles. These articles offer deeper technical knowledge on various import topics. 

### Import process 

* [Validate a collection for import](migration-import.md#validate-a-collection)
* [Prepare a collection for import](migration-import.md#generate-import-files) 
* [Prepare for import](migration-import.md#prepare-import)
	* [Prepare large collections for import](migration-import-large-collections.md)
* [Run an import](migration-import.md#run-an-import)
* [Post import steps](migration-post-import.md)

### Troubleshooting 

* [Troubleshooting validation errors](migration-troubleshooting.md)
* [Troubleshooting process errors](migration-processtemplates.md#dealing-with-process-errors)
* [Troubleshooting import errors](migration-troubleshooting.md#resolve-import-errors)


## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### Q: Will my Personal Access Tokens also migrate when I migrate from on-premises to Azure DevOps Services?

A: **No**. Your tokens will not migrate and you will need to [regenerate your Personal Access Tokens](../organizations/accounts/use-personal-access-tokens-to-authenticate.md?tabs=preview-page) on Azure DevOps Services.

### Q: If I have feedback or additional questions is there somewhere I can reach out?

A: **Yes**. You can contact [AzureDevOpsImport@microsoft.com](mailto:AzureDevOpsImport@microsoft.com). Please note that this alias is for general questions. If you need assistance with a failed import please contact Azure DevOps [customer support](https://aka.ms/AzureDevOpsImportSupport). 

## Videos 

> [!VIDEO https://channel9.msdn.com/Events/Ignite/Microsoft-Ignite-Orlando-2017/BRK3199/player]

<!-- ENDSECTION --> 

## Related articles

- [Migration and process model FAQs](faqs.yml)
