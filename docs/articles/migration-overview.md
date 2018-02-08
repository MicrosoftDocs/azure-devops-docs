---
title: Migration overview from TFS to Visual Studio Team Services (VSTS) | VSTS & TFS 
description: Overview of the high fidelity migration process from Team Foundation Server to Visual Studio Team Services (VSTS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-overview
ms.contentid: 3d6edd06-ceed-43b4-9e77-4a121864594c
---

# Migrate data from TFS to VSTS

## TFS Database Import Service
The TFS Database Import Service, also known shorthand as the Import Service, provides a high fidelity way to migrate collection databases from Team Foundation Server (TFS) to Visual Studio Team Services (VSTS). It's recommended that you download the [migration guide](https://aka.ms/TFSDataImport) if you're looking to use this service to import your collection(s). The guide serves as a walkthrough of the different steps involved in an import. Providing best practices, checklists, and helpful tips to make your import as easy as possible. The guide should be used in conjunction with the more technical documentation referenced below to successfully import to VSTS. 


## Supported TFS Versions for Import

> [!NOTE]
> Migration support for TFS 2017 Update 3 will receive a one-time extension to Monday, April 23rd. After that date migrations from TFS 2017 Update 3 will no longer be supported. Please take this end of support date into consideration when forming your migration plans. All other versions of TFS currently under support will be retired as per normal when they are no longer one of the two most recent releases.

The TFS Database Import Service supports the two latest releases of TFS at a given time. Releases include updates and major releases. Currently the following versions of TFS are supported for import:

* TFS 2017 Update 3
* TFS 2018 

> [!NOTE]
> The Import Service doesn't support imports from TFS release candidates (RC). If you’re planning on importing your collection database to VSTS using this service, it's important that you don’t upgrade your production database to an RC release. If you do upgrade, then you will need to wait and upgrade to the release to web (RTW) version when it's available or restore a backup copy of your database from a previous TFS version to import. 
>
> It can take up to two weeks after a new RTW version of TFS is released for import support to come online for that version.

Normal release cadence for new TFS versions is once every three-to-four months. Meaning that support for a given version of TFS for migration to VSTS should last for anywhere between six-to-eight months. It’s important to ensure that your planning accounts for this support window to avoid having to suddenly upgrade to migrate. 

## Preview Features
The following features can be included with your import, but are currently in a preview state. 

* [Release Management](https://www.visualstudio.com/team-services/release-management/)
* [Package Management](https://www.visualstudio.com/team-services/package-management/)

When queueing an import you can elect to include preview features with your import. If you do, data related to these features will be copied into your new VSTS account along with all your other data. Should you choose to not include these features then their data will not be copied.

For a list of items not included with an import please see the [migration guide](https://aka.ms/TFSDataImport).

## TFS Database Import Service Resources

In general you should use the [migration guide](https://aka.ms/TFSDataImport) when going through an import. When it's required the guide links back to the below documentation. These articles offer deeper technical knowledge on various import topics. 

### Importing Process 
* [Validating a collection for import](.\migration-import.md#validating-a-collection)
* [Preparing a collection for import](.\migration-import.md#generating-import-files)
* [Before import steps](.\migration-import.md#getting-ready-to-import)
* [Running an Import](.\migration-import.md#running-an-import)
* [Post import steps](.\migration-post-import.md)

### Troubleshooting 
* [Troubleshooting validation errors](.\migration-troubleshooting.md)
* [Troubleshooting process errors](.\migration-processtemplates.md#dealing-with-process-errors)
* [Troubleshooting import errors](.\migration-troubleshooting.md#dealing-with-import-errors)


## FAQ

<!-- BEGINSECTION class="md-qanda" -->

#### Q: Is there any risk of using the Hosting XML model becoming a problem in future updates of the service?

A: No, when it comes to service updates, Hosted XML accounts are treated the same as accounts using the Inheritance process model.

#### Q: Will my account be stuck in Hosted XML forever?

A: You are using the Hosted XML because the Inheritance process model does not contain all features yet. We are planning to allow you to migrate from the Hosted XML into the Inheritance process model later this year.

#### Q: Will migrating from Hosted XML into Inheritance process model be a manual process?

A: No, the plan is to provide a simple and automated experience through the web interface.

#### Q: What happens in Hosted XML when Microsoft makes a change to a system process?

A: This is the same experience with TFS on-premises. If we make a change to a system process, it will not be applied to any of your Hosted XML processes. You won't have to update your processes if you don't want to. But if you do, you will need to make the changes in the XML definition files manually for each process. 

#### Q: Is there a difference between a team project that was created manually versus one that was created from data import?

A. The features available to each team project are the same. The differences occur in how you modify the processes in your account. When you create an account, you will use the [Inheritance process model](../work/customize/process/manage-process.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json) to customize the work tracking experience. Team projects migrated via data import, however, will use the [Hosted XML process model](../work/customize/import-process/import-process.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json) to customize the work tracking experience.

#### Q: If my account is using Hosted XML, can I create new projects to use the Inheritance process model?

A: Yes. For data import accounts, VSTS supports team projects that use  Inheritance as well as  Hosted XML process models. To learn more about the Inheritance process, see [Manage processes](../work/customize/process/manage-process.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json).  

#### Q: Where can I find more information on Hosted XML and the Inheritance process model?

* [Inheritance Process Model](../work/customize/process/manage-process.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json)
* [Hosted XML](../work/customize/import-process/import-process.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json)


#### Q: If I have feedback or additional questions is there somewhere I can reach out?

A: Yes, you can contact [vstsdataimport@microsoft.com](mailto:vstsdataimport@microsoft.com). Please note that this alias is for general questions. If you need assistance with a failed import please contact VSTS\TFS [customer support](https://aka.ms/vstscustomersupport). 

<!-- ENDSECTION --> 

 

