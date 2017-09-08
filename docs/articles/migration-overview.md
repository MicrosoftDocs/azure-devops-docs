---
title: Migration overview from TFS to Visual Studio Team Services (VSTS) | VSTS & TFS 
description: Overview of the high fidelity migration process from Team Foundation Server to Visual Studio Team Services (VSTS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-overview
ms.contentid: 3d6edd06-ceed-43b4-9e77-4a121864594c
---

> The TFS Database Import Service for Visual Studio Team Services (VSTS) is currently in preview.

# Overview

An increasing number of Team Foundation Server (TFS) teams are starting to transition to Visual Studio Team Services (VSTS). There is an abundance of reasons why we’re seeing this up-tick. To name a few of the most common driving forces:

* Getting the latest and greatest features every three weeks. 
* Offloading maintenance and uptime responsibilities to Microsoft. 
* Cost saving measure through a removal of servers that need to be maintained locally for TFS. 
* Going all in on the cloud in every aspect of the company; including the devops space.

Microsoft has designed the TFS Database Import Service with the goals of being high fidelity, as simple as possible to use, and requiring as little downtime as possible. 

## TFS Database Import Service preview
The TFS Database Import Service for VSTS is currently in a preview. Make sure you download the [migration guide](https://aka.ms/TFSDataImport) for more details on how to participate in this preview. 

## Migration Process

Before diving too deeply into planning a migration it’s important to understand, at least at high-level, how the migration process functions. Migrations operate on two main concepts: 

* **Team Project Collection**: Collections in TFS are a physical container for projects and their artifacts. Each collection equates to a single database; thus they’re the unit of import for migrations to VSTS. 
* **VSTS Account**: Accounts are the management unit in the cloud. Logically they map to the concept of a collection in TFS. Therefore, accounts are the target for imports during migrations to VSTS.  

The action of detaching a TFS collection, moving it to another TFS instance, and reattaching it is very similar to how import works on a high-level. Each import takes a detached collection and ‘reattaches’ it to a VSTS account. Let’s take an example where we have three TFS collections; like in the diagram below. 

![High level migration example](_img/migration-overview/MigrationHighLevelExample.png)

Each collection (A, B, and C) gets imported into its own VSTS account. This means that you **CANNOT** import a collection into an existing account. Each import account is created at the time the import occurs. It also means that the import process is done in a single shot. You take the collection offline, detach it, and package the collection up for import. Changes that occur in-between **CANNOT** be automatically streamed over. In fact, it’s recommend that teams keep their collections offline during the migration process. 

Before a collection can be migrated from TFS to VSTS, there are a set of steps that need to be completed. The migration process has been built in such a way to deal with most of the heavy lifting, but some work should be expected to make highly customized collections ready for import. A tool, TfsMigrator, was created to assist with validating and preparing for a migration. At a high-level the migration process has seven steps: 

1. Ensuring your version of TFS is supported.
2. Running TfsMigrator to validate your collection is OK to be migrated.
3. Fixing any validation errors that are discovered.
4. Running TfsMigrator prepare to generate the necessary import files.
5. Take the collection offline and generating a DACPAC.
6. Uploading the import files and DACPAC to an Azure storage account.
7. Notifying Microsoft to execute the import.

Assuming that you’re on a supported version, you can start focusing on the validation and preparation steps. Depending on the level of customizations in your collections, some might find that their collections are already OK for import right away and the process can be completed quickly. Larger, more customized collections should include extra time into their migration plans for encountering validation errors that need to be corrected. 

## Data Migrated
Since each collection maps to one database in TFS, and the migration process works by importing an entire collection, all data in the collection will be brought over to VSTS. More specifically, this means that all of your work items, work item history, TFVC changesets, TFVC changeset history, Git data, build definitions, build history, and other data stored in the collection will be migrated over. Furthermore, the work item, TFVC changeset, and Git commit numbers/IDs will be retained and won't change as part of the migration. 

It's important to note that some data isn't brought along during the migration. Any data that resides in a separate database outside the collection database won't be imported. Prime examples of this scenario include reporting and SharePoint data. There are also a few other instances where data won't be brought over:

* **Release Management** - Both the previous and new Release Management data will not be migrated at this time. We're working on adding Release Management to the migration as soon as possible.
* **Package Management** - As Package Management is new to TFS we're unable to include it at this time in the import process. We're working on adding Package Management to the migration as soon as possible.
* **Extensions** - Extensions will need to be reinstalled post import. Local extensions will need to be published to the Marketplace as private extensions and shared with the account post import to be installed. We're working on adding Extensions to the migration as soon as possible. 
* **Service Hooks** - Service Hooks data currently isn't included in the migration process. Hooks will need to be reconfigured after import.
* **Load Test** - Load test data will not be brought over as part of import. You will have reconfigure load test after import.
* **Mentions** - Mentions of users in work item discussions will remain but reference the on-premises identity and not the new AAD identity.  Hovering on the user name will not display a contact card.  Mentions of pull requests and other work items will have an invalid hyperlink.    
* **Project Server Integrations** - Project Server integration does not exist for VSTS.

## Process Customization
There are two types of process customization that are supported in VSTS. [Inherited](../work/customize/inheritance-process-model.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json) and [Hosted XML](../work/customize/hosted-xml-process-model.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json). If you have customized any of your projects in TFS on-premises, you will automatically be placed on Hosted XML. **There is currently no path to move your Hosted XML projects to Inherited**. This is on our roadmap to get resolved.

Here are some key process customization points to consider when coming into VSTS with data import.

* **Hosted XML** - Unless all of your projects are using a core process (un-customized Agile, Scrum or CMMI), all of those projects will use Hosted XML.
* **Process per Project** - Just like in TFS, each project will be mapped to its own unique corresponding process. For example, if you have 30 projects, you will have 30 unique processes to manage.
* **All Projects are Considered Customized** - If just one project has been customized, then data import considers **all** projects as customized. This means all projects will use Hosted XML.
* **Updated a Process** - If you want to add a new customization (add a new field for example) to all your projects, you will need to update each and every process separately.
* **Consolidate Processes** - VSTS currently does not support consolidating projects to use a shared process.
* **Inherited and Hosted XML Together** - When using the TfsMigrator, be sure you understand the [different logs and validation types](migration-processtemplates.md#process-validation-types). If you elect to import your data and use Hosted XML, the Inherited features will not be available.
* **Inherited Only** - If all of your projects are un-customized, data import will place your account into the Inherited model. Therefore Hosted XML will not be available.

> These restrictions are items we plan to address and are on our backlog to fix. Be sure to check back here for updates on when these items are resolved.

## Work item form
Work items in VSTS have been given a [facelift](../work/process/new-work-item-experience.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json).  This is the same modern experience that appears in TFS "15" for our on-premises customers.  The new user experience provides the building blocks for: 
* Improved readability and usability 
* Richer, interactive experiences within the work item including discussion, code viewing, and more 
* Extensibility support 

When a collection is imported, the form definitions for all work item types (WITs) defined in your project collection undergo an automated transformation to the new layout.  This is a [best-effort transformation](../work/customize/manage-new-form-rollout.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json#best-effort-transformation) meant to maintain the field groupings and layout of your customized WIT definitions.  You can [manually opt-in](../work/process/new-work-item-experience.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json#switch-to-the-new-experience) to the new experience on-premises before migrating to the cloud.
Reviewing and optimizing the transformed web layout will allow you to adjust this new layout to your own needs. Even though these changes can also be done once the import is completed we recommend you to do them beforehand to prepare your customers for the change.

## Projects
TFS Data Import Services supports collections that contain up to 300 projects. If your collection has more than 300 projects you can [split the collection](../tfs-server/admin/split-team-project-collection.md) into two or more collections. Each collection can then be imported seperately into their own account. If splitting the collection is not an option for you, please contact us at [vstsdataimport@microsoft.com](mailto:vstsdataimport@microsoft.com).

## Supported TFS Versions for Import
Support for the TFS Database Import Service is limited to the two most recent releases of TFS. Releases include all major and regular updates. Currently the following versions of TFS are supported for import: 

* TFS 2017 Update 1
* TFS 2017 Update 2

It's strongly recommended that you upgrade to the latest supported version of TFS before importing to VSTS.  

> Release Candidate (RC) and preview versions of TFS are NOT supported by the Import Service. You will need to be on an RTW version for one of the above supported TFS versions to import.

Normal release cadence for new TFS versions is once every three-to-four months. Meaning that support for a given version of TFS for migration to VSTS should stay in support for anywhere between six-to-eight months. It’s important to ensure that your planning accounts for this support window to avoid having to suddenly upgrade to migrate. 

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

#### Q: Is there any risk of using the Hosting XML model becoming a problem in future updates of the service?

A: No, when it comes to service updates, Hosted XML accounts are treated the same as accounts using the Inheritance process model.

#### Q: Will my account be stuck in Hosted XML forever?

A: You are using the Hosted XML, because the Inheritance process model does not contain all features yet. We are planning to allow you to migrate from the Hosted XML into the Inheritance process model later this year.

#### Q: Will migrating from Hosted XML into Inheritance process model be a manual process?

A: No, the plan is to provide a simple and automated experience through the web interface.

#### Q: What happens in Hosted XML when Microsoft makes a change to a system process?

A: This is the same experience with TFS on-premises. If we make a change to a system process, it will not be applied to any of your Hosted XML processes. You won't have to update your processes if you don't want to. But if you do, you will need to make the changes in the XML definition files manually for each process. 

#### Q: Is there a difference between a team project that was created manually versus one that was created from data import?

A. The features available to each team project are the same. The differences occur in how you modify the processes in your account. When you create an account, you will use the [Inheritance process model](../work/process/manage-process.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json) to customize the work tracking experience. Team projects migrated via data import, however, will use the [Hosted XML process model](../work/import-process/import-process.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json) to customize the work tracking experience.

#### Q: If my account is using Hosted XML, can I create new projects to use the Inheritance process model?

Yes. For data import accounts, VSTS supports team projects that use  Inheritance as well as  Hosted XML process models. To learn more about the Inheritance process, see [Manage processes](../work/process/manage-process.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json).  

#### Q: Where can I find more information on Hosted XML and the Inheritance process model?

* [VSTS Process Customization Roadmap (2017)](https://blogs.msdn.microsoft.com/visualstudioalm/2017/01/26/team-services-process-customization-roadmap-jan-2017/)
* [Inheritance Process Model](../work/process/manage-process.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json)
* [Hosted XML](../work/import-process/import-process.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json)

<!-- ENDSECTION --> 
