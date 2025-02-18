---
title: Azure DevOps Server to Azure DevOps Services Migration overview
description: Overview of the high fidelity migration process from on-premises Server to cloud Services.
ms.topic: overview
ms.subservice: azure-devops-migrate
ms.contentid: 3d6edd06-ceed-43b4-9e77-4a121864594c
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 02/18/2025
---

# Migration overview 

Moving from Azure DevOps Server to Azure DevOps Services is an essential step for organizations that want to take advantage of cloud-based collaboration, scalability, and enhanced features. In this overview, we explore the options for transferring your valuable data from the on-premises Azure DevOps Server to the cloud-based Azure DevOps Services. 

For information about the main differences between on-premises Azure DevOps Server and the cloud-based Azure DevOps Services, see [Compare Azure DevOps Services with Azure DevOps Server - Azure DevOps](../user-guide/about-azure-devops-services-tfs.md). 

Regardless of your selected migration option, we recommend that you determine your most important assets, such as source code and work items. You should think about your data size, organization complexity and make sure that you have enough time for test runs before actual migration for a smooth and successful transition. 

### Approaches to migration 

It’s crucial to assess the pros and cons of each approach to migration, based on your specific motivations for adopting Azure DevOps Services. The right strategy depends on your unique context and requirements.   

|Options  |Recommended scenarios  |Limitations  |
|---------|---------|---------|
|[1: Manual migration](#option-1-manual-migration)   |  Use for smaller projects or specific data subsets.    | Not all data can be migrated with full fidelity and is subject to throttling. This migration doesn’t support migrating XML templates, so you need to recreate process templates as inherited templates.   |
|[2: Azure DevOps Data Migration Tool](#option-2-azure-devops-data-migration-tool)  | Use for medium to large-scale migrations with varied data types and complex structures.      |  You can only "lift and shift" one Azure DevOps Server collection to one new Azure DevOps Services organization, with no modifications. For more information, see the [Limitations section](#migration-tool-limitations).  |
|[3: API-based migration](#option-3-api-based-migration)     | Offers flexibility and customization for organizations with unique migration requirements or automation needs.   | Low fidelity, data loss, and ID changes can occur. For more information, see the [Limitations section](#api-based-migration-limitations). |

## Option 1: Manual migration

For example, when the Azure DevOps team at Microsoft chose to move from Azure DevOps Server to Azure DevOps Services, we also decided to move from Team Foundation Version Control (TFVC) to Git. Migration required lots of planning, but when we migrated, we created a new Git repo using the "tip" version of our TFVC sources and left our history behind in Azure DevOps Server. We also moved our active work items, and left behind all our old bugs, completed user stories and tasks, and so on.

### Manual migration process

1. Identify the most important assets that you need to migrate - typically source code, work items, or both. Other assets in Azure DevOps Server - build pipelines, test plans, and so forth - are harder to manually migrate. 
1. Identify a suitable time to make the transition. 
1. Prepare your target organizations. Create the organizations and team projects that you need, provision users, and so on. 
1. Migrate your data. 
1. Consider making the source Azure DevOps Server deployments read-only. You can do so in the following ways: 
   - [Adjust project-level permissions](../organizations/security/change-project-level-permissions.md): Set the permissions for all users or groups to read-only at the project level, which you can do by modifying the security roles in **Project settings**. 
   - [Modify repository settings](../organizations/security/set-object-level-permissions.md): For each repository, you can change the settings to make them read-only, which involves adjusting the permissions for each user or group to only allow read actions. 
   - [Use built-in security groups](../organizations/security/permissions-access.md): Utilize the built-in security groups to manage permissions more efficiently. You can assign users to groups like "Readers" to provide read-only access. 
   - Scripting permission changes: If you have many projects or repositories, you might need to script them. You can use the [Azure CLI DevOps extension](../cli/index.md) to list all permissions and update them as needed.
   - Disable repository feature: Disables access to the repository, including builds and pull requests, but keeps the repository discoverable with a warning. Go to **Project settings** > **Repositories** > your repo, and next to Disable Repository, move the toggle to **On**. 

## Option 2: Azure DevOps Data Migration Tool

The [Azure DevOps Data Migration Tool](https://www.microsoft.com/download/details.aspx?id=54274) is a set of utilities provided by Microsoft to facilitate the migration of data from Azure DevOps Server to Azure DevOps Services. These tools offer a streamlined approach to migrate various artifacts, including source code, work items, test cases, and other project-related data.  

Before you initiate the migration process, the tools can perform a premigration analysis to assess the readiness of the source environment and identify potential issues or dependencies that might affect the migration. Assess readiness, so you can plan and mitigate potential challenges beforehand. 

## Migration Tool limitations

The tool allows you to "lift and shift" one Azure DevOps Server Collection to one new Azure DevOps Service Organization, with no modifications for the following reasons: 

- Data integrity and consistency: 
  - When you migrate data, maintaining integrity and consistency is crucial. Allowing modifications during migration could lead to data corruption or inconsistencies. 
  - The tool ensures that data remains intact during the transfer process, minimizing the risk of errors. 
- Source data preservation: 
  - The migration tool aims to faithfully replicate the source data in the target environment. 
  - Modifications could alter the original data, potentially causing discrepancies between the migrated data and the source data. 
- Predictable behavior: 
  - By restricting modifications, the tool ensures predictable behavior during migration. 
  - Users can rely on consistent results without unexpected changes. 
- Migration focus, not transformation: 
  - The primary purpose of the migration tool is to move data from one location to another. 
  - Data transformation, such as modifying values, typically gets handled separately after migration.
- Supported migration scenarios:
  - Moving projects from one Azure DevOps Services organization to another Azure DevOps Services organization isn't currently supported.
  - Migrating from one Azure DevOps Server instance to another isn't supported. 

You can purge data that you don’t need before or after the migration. 

## Migration Tool process

1. Complete the prerequisites such as updating Azure DevOps Server to one of the two most recent releases. 
1. Validate each collection that you want to move to Azure DevOps Services. 
1. Generate migration files. 
1. Prepare everything for your migration execution. 
1. Perform a test run. 
1. Carry out a migration. 
1. Confirm that your users and data got migrated, and the collection is functioning as expected.

## Option 3: API-based migration

If you can't use the Data Migration Tool but still want a higher fidelity migration than [Option 2](#option-2-azure-devops-data-migration-tool), consider using various tools that leverage public APIs to move data. These tools include extensions available at the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops).

## API-based migration limitations

The following limitations occur with API-based migration: 

- Low fidelity migration: 
  - Limitation: API-based tools provide a higher fidelity than manual copying but are still relatively low fidelity. 
  - Implication: While these tools offer some fidelity, they don’t preserve all aspects of your data. 
    - Example: None of them retain the original dates of TFVC changesets (Team Foundation Version Control). 
    - Many don’t preserve the changed dates of work item revisions either. 
- Data loss and ID changes: 
  - Limitation: During migration, the tools replay work item changes, TFVC changesets, package feeds, and pipeline artifacts. 
  - Implication: This process might lead to data loss, generate new IDs, and alter creation, modification, and closure dates. 
    - Example: Historical context tied to specific dates might get lost, affecting reporting and traceability. 

## API-based migration process

In general, we only recommend this approach if extra fidelity beyond a manual copy is critical. If you decide to take this approach, you might consider hiring a consultant who has experience with one or more of the tools and do a test migration before your final migration. 

Many organizations need a very high-fidelity migration for only a subset of their work. New work could potentially start directly in Azure DevOps Services. Other work, with less stringent fidelity requirements, could be migrated using one of the other approaches.

## Supported process models

Azure DevOps Services supports the following process models: 

- [Inherited](../organizations/settings/work/customize-process.md) 
- [Hosted XML](../organizations/settings/work/hosted-xml-process-model.md)

By default, Hosted XML is turned **off** in Azure DevOps Services. We turn on the Hosted XML process model during migration only if you customized a project in Azure DevOps Server. Once your project is on Hosted XML, you can [upgrade it to inherited post migration](../organizations/settings/work/hosted-xml-process-model.md).

## Key principles 

When migrating into Azure DevOps Services, keep in mind the following key principles and limitations: 

- **Azure DevOps Services is English only**: Azure DevOps Server supports multiple languages, however today, Azure DevOps Services only supports English. If your collection uses the non-English language or used non-English in the past and you converted the language to English during an upgrade, you can’t use the Data Migration Tool. 
- **Inheritance**: A project, which was created from the Agile, Scrum or CMMI process template and was never customized, is on the Inheritance process model after the migration. 
- **Hosted XML**: Any project with customizations uses the Hosted XML process model. 
- **Process per customized project**: Although Azure DevOps Services allows projects to share a process, the Data Migration Tool creates a Hosted XML process for each customized team project. For example, if you have 30 customized projects, you have 30 Hosted XML processes to manage. If you want to further customize your Hosted XML process for all your projects, you must update each Hosted XML process separately. 
- **Process validation**: The process validation of the Data Migration Tool detects the target process model for each project. Before you can migrate, you need to fix any process validation errors for the Hosted XML projects. You might want to consider updating the process of your projects to match one of our processes (Agile, Scrum or CMMI) to take advantage of the Inheritance process model. Learn more on the process validation types in our documentation. 

## Resources 

- [Report an issue in the Developer Community](https://developercommunity.visualstudio.com/AzureDevOps/report) 
- [Get support and provide feedback](../user-guide/provide-feedback.md)

## Next steps 

> [!div class="nextstepaction"]
> [Get started with the Azure DevOps Data Migration Tool](migration-get-started.md)

## Related articles

- [Complete prerequisites for migration](migration-prerequisites.md)
- [Validate and prepare for migration](migration-validate.md)
- [Prepare for test run](migration-prepare-test-run.md) 
- [Do test run migration](migration-test-run.md)
- [Migrate to Azure DevOps Services](migration-migrate.md) 
- [Complete post-migration tasks](migration-post-migration.md)
