---
title: Get started with migration
description: Overview of the high fidelity migration process from on-premises Server to cloud Azure DevOps Services.
ms.topic: how-to
ms.subservice: azure-devops-migrate
ms.contentid:
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 05/17/2024
---

# Get started with migration

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Before you use the Azure DevOps Data Migration Tool to migrate your database with high fidelity, learn some of the basic concepts in this article.

:::image type="content" source="media/get-started-stage-migration-highres.png" alt-text="Diagram highlighting the Get started stage in sequential stages.":::

## Learn which data gets migrated 

Not all data gets migrated. Separate databases outside the collection, for example, reporting and SharePoint data, don’t get migrated. The following sections list more detail about which data gets migrated.

### Included data

The following table shows data included in migration.

|Included data |Description |
|---------|---------|
|Collection mapping     |Each collection in Azure DevOps Server corresponds to one database. During migration, the whole collection—including work items, history, Team Foundation Version Control (TFVC) changesets, Git data, build definitions, and more—get migrated to Azure DevOps Services. Work item, TFVC changeset, and Git commit numbers/IDs remain unchanged.         |

### Excluded data

 The following table shows specific data exclusions in migration.

|Excluded data    | Description        |
|-----------------|----------|
|Extensions     | Extensions must be reinstalled post-migration. You should publish local extensions to the Marketplace as private extensions and shared with the account.        |
|Service Hooks   |Service Hooks data isn’t included in the migration; reconfigure after migration.         |
|Load test    |Load test data isn’t brought over; reconfigure load tests after migration.         |
|Pipeline agents and agent pools  | Reconfigure pipeline agents and agent pools after migration.        |
|Mentions   | User mentions in work item discussions retain on-premises identity, not the new Microsoft Entra ID. Hovering on usernames doesn’t display contact cards, and some hyperlinks might be invalid.        |
|Project Server integrations     | Not available for Azure DevOps Services. For example, XAML Builds, Microsoft Test Manager, SharePoint, SQL Data Warehouse, and so on.        |
|Preview features    | Some Azure DevOps Server features can be previewed during migration to Azure DevOps Services.        |

## Project limits 

If your collection contains numerous projects, Azure DevOps Services imposes a limit of 1,000 projects per organization, although we recommend 300 or less. Beyond this threshold, certain experiences—such as connecting to the organization from Visual Studio—might degrade. To stay within the limit, consider either splitting the collection or deleting older projects. 

## Understand the relationship between on-premises databases and Azure DevOps organizations. 

Before you dive too deeply into planning your migration, it’s important to understand at an elevated level how the database migration process functions. Migrations operate on the following main concepts: 

- **Team Project Collection**: Collections in Azure DevOps Server are a physical container for team projects and their artifacts. Each collection equates to a single SQL database and is the source of migrations to Azure DevOps Services.
- **Azure DevOps Services organization**: Organizations are the management unit in the cloud-hosted service. Logically they map 1:1 to the concept of a team project collection in Azure DevOps Server. Therefore, organizations are the destination of migrations to Azure DevOps Services. For example, Azure DevOps Services organizations are represented as https://dev.azure.com/Contoso where Contoso represents the name of the Azure DevOps Services organization. 

When you migrate a team project collection SQL database, the Data Migration Tool creates a new Azure DevOps organization with a user-provided name. Migrating a collection database into an existing Azure DevOps Services organization or consolidating multiple collection databases into a single Azure DevOps Services organization isn't possible. The mapping is strictly one-to-one between team project collections and Azure DevOps Services organizations. 

## Choose data center 

When you set up your Azure DevOps Services organization, you can choose the location for your data. During initial sign-up and organization creation, select a region that suits your needs. To use later for migration, make a note of the region’s shorthand code. For more information, see Supported regions for migration. 

## Understand pricing 

A question that typically comes up with migration is what type of licensing a company needs to use Azure DevOps Services. The good news is you're likely to have all the licenses you already need. We created an example worksheet that should cover most cases. If you have any specific questions about your situation, reach out to your Developer Solution Sales Specialist or Microsoft Reseller. For more information, see Pricing for Azure DevOps. 

### User licenses worksheet 

|#|Column 1 |Column 2 | 
||---------|---------| 

|1|Number of team members              |         | 

|2|Number of stakeholders              |         | 

|3|Subtract line (2) from line (1)*    |         | 

|4|# of Visual Studio subscribers**    |         | 

|5|Subtract line (4) from line (3)     |         | 

|6|Subtract line (5) from line (5)***  |         | 

- *Stakeholders are free. 
- ** Visual Studio Subscribers have Azure DevOps Services included as a benefit of the subscription. 
- ***Each Azure DevOps Services organization gets five free users. 

For more information about cost-effective options for accessing features, see the [Billing overview](../organizations/billing/overview.md). 

Buy any needed Azure DevOps Services user licenses through the Visual Studio Marketplace or the Azure portal. We delve into this process during the Prepare for Test Run phase. 

For more information, see the [Azure Pricing Calculator]( https://aka.ms/AzureDevOpsPricing). 

In addition to the core features, the following value-added services are available in Azure DevOps that you might find beneficial: 

- Hosted load testing services: If you need to simulate and analyze the performance of your applications under load, Azure DevOps provides hosted load testing services. These services allow you to stress-test your applications and identify bottlenecks or performance issues. 
- Test Manager extensions: For comprehensive test management, consider using Test Manager extensions. These extensions enhance your testing capabilities by providing features like test case management, exploratory testing, and test execution tracking. 
- More features: Azure DevOps offers various extensions and integrations that cater to specific needs. Whether it’s integrating with non-Microsoft tools, enhancing security, or automating deployment pipelines, there's a wide range of options. 

Some of these services might come with extra costs, so it’s essential to evaluate your requirements and budget accordingly. These costs appear on your bill under the associated subscription. For more information, see [Set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md). If you have specific questions about your situation, contact your DevOps Partner, Microsoft Reseller, or your Microsoft Developer Solutions Sales Specialist for personalized guidance. 

## Reserve your new organization 

Considering the migration project’s timeline, we recommend that you reserve the name of your organization early on to ensure that your desired name is available for your final migration. 

For instance, if your company is Contoso and you want an organization with a matching name, for example, `https://dev.azure.com/contoso`, you can create an organization with that name now. But keep in mind that you can only migrate into a brand-new Azure DevOps Services organization. 

Do the following steps to reserve your organization name. 

1. Initial reservation: 
   1. Create an organization with a temporary name, for example, `https://dev.azure.com/contoso-temporary`.
   2. Reserve this temporary name for your future migration. 
2. Final migration: 
   1. When you’re ready to begin the final migration, perform it into the `https://dev.azure.com/contoso-temporary` organization.
   2. After successful migration, rename the reserved organization to open your desired name for the imported organization. Rename it rather than deleting it because a deletion can take up to an hour to release the name, when renaming it's immediate.
   3. Immediately rename the migrated organization to the desire name, for example, `https://dev.azure.com/contoso`, that you just cleared by renaming.
   4. Optionally, you can delete the originally reserved and renamed organization at this point. 

By following this approach, you have a smooth transition while ensuring your preferred organization name remains available. 

## Next steps 

> [!div class="nextstepaction"]
> [Complete prerequisites for migration](migration-prerequisites.md)

## Related articles 

- [Validate and prepare for migration](migration-validate.md)
- [Prepare for test run](migration-prepare-test-run.md)
- [Do test run migration](migration-test-run.md)
- Migrate to Azure DevOps Services(link) 
- Complete post-migration tasks(link)
