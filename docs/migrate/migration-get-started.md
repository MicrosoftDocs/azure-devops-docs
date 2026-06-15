---
title: Get started with Azure DevOps Data Migration Tool
description: Overview of the high fidelity migration process from on-premises Server to cloud Azure DevOps Services.
ms.topic: how-to
ms.subservice: azure-devops-migrate
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 06/08/2026
---

# Get started with Azure DevOps Data Migration Tool

Before you use the [Azure DevOps Data Migration Tool](https://www.microsoft.com/download/details.aspx?id=54274) to migrate your database with high fidelity, learn some of the basic concepts in this article.

:::image type="content" source="media/get-started-stage-migration-highres.png" alt-text="Diagram highlighting the Get started stage in sequential stages.":::

## Learn which data gets migrated 

Not all data gets migrated. Separate databases outside the collection, for example, reporting and SharePoint data, don't get migrated. The following sections list more detail about which data gets migrated.

### Included data

The following table shows data included in migration.

|Included data |Description |
|---------|---------|
|Collection mapping     |Each collection in Azure DevOps Server corresponds to one database. During migration, the whole collection - including work items, history, Team Foundation Version Control (TFVC) changesets, Git data, build definitions, and more - gets migrated to Azure DevOps Services. Work item, TFVC changeset, and Git commit numbers/IDs remain unchanged.         |

### Excluded data

 The following table shows specific data exclusions in migration.

|Excluded data    | Description        |
|-----------------|----------|
|Extensions     | You must reinstall extensions after migration. Publish local extensions to the Marketplace as private extensions and share them with the account.        |
|Service Hooks   | Service Hooks data isn't included in the migration. Reconfigure after migration.         |
|Load test    | Load test data isn't brought over. Reconfigure load tests after migration.         |
|Pipeline agents and agent pools  | Reconfigure pipeline agents and agent pools after migration.        |
|Mentions   | User mentions in work item discussions retain on-premises identity, not the new Microsoft Entra ID. Hovering on usernames doesn't display contact cards, and some hyperlinks might be invalid.        |
|Project Server integrations     | Not available for Azure DevOps Services. For example, XAML Builds, Microsoft Test Manager, SharePoint, SQL Data Warehouse, and so on.        |
|Preview features    | Some Azure DevOps Server features can be previewed during migration to Azure DevOps Services.        |

## Project limits 

If your collection contains numerous projects, Azure DevOps Services imposes a limit of 1,000 projects per organization, although 300 or fewer is recommended. Beyond this threshold, certain experiences - such as connecting to the organization from Visual Studio - might degrade. To stay within the limit, consider either splitting the collection or deleting older projects. 

## Understand the relationship between on-premises databases and Azure DevOps organizations. 

Before you dive too deeply into planning your migration, it's important to understand at an elevated level how the database migration process functions. Migrations operate on the following main concepts: 

- **Team Project Collection**: Collections in Azure DevOps Server are a physical container for team projects and their artifacts. Each collection equates to a single SQL database and is the source of migrations to Azure DevOps Services.
- **Azure DevOps Services organization**: Organizations are the management unit in the cloud-hosted service. Logically they map 1:1 to the concept of a team project collection in Azure DevOps Server. Therefore, organizations are the destination of migrations to Azure DevOps Services. For example, Azure DevOps Services organizations are represented as `https://dev.azure.com/Contoso` where Contoso represents the name of the Azure DevOps Services organization. 

When you migrate a team project collection SQL database, the Data Migration Tool creates a new Azure DevOps organization with a user-provided name. You can't migrate a collection database into an existing Azure DevOps Services organization or consolidate multiple collection databases into a single Azure DevOps Services organization. The mapping is strictly one-to-one between team project collections and Azure DevOps Services organizations. 

## Choose data center 

When you set up your Azure DevOps Services organization, choose the location for your data. During initial sign-up and organization creation, select a region that suits your needs. To use later for migration, make a note of the region's shorthand code.

> [!IMPORTANT]
> Not all Azure regions support the Data Migration Tool. Setting up temporary SQL VMs or other migration infrastructure in unsupported regions can cause delays and require reconfiguration. Review the supported regions before proceeding with your migration planning.

### Supported Azure regions for migration

The following table lists the Azure regions that support the Azure DevOps Data Migration Tool:

| Region | Shorthand code |
|--------|----------------|
| Central US | CUS |
| West Europe | WE |
| United Kingdom South | UKS |
| Australia East | AE |
| Brazil South | BS |
| Central India | MA |
| Southeast Asia (Singapore) | SEA |
| Canada Central | CC |

For the complete migration process and most up-to-date region considerations, see [Supported Azure regions for migration](migration-test-run.md#supported-azure-regions-for-migration).

## Understand pricing 

A common question about migration is what type of licensing a company needs to use Azure DevOps Services. The good news is that you likely already have all the licenses you need. An example worksheet is available that should cover most cases. If you have any specific questions about your situation, reach out to your Developer Solution Sales Specialist or Microsoft Reseller. For more information, see [Pricing for Azure DevOps](https://azure.microsoft.com/pricing/details/devops/). 

### User licenses worksheet 

|#|Column 1 |Column 2 | 
||---------|---------| 
|1|Number of team members              |         |
|2|Number of stakeholders              |         |
|3|Subtract the value in line 2 from the value in line 1*    |         |
|4|Number of Visual Studio subscribers**    |         |
|5|Subtract the value in line 4 from the value in line 3     |         |
|6|Subtract the value in line 5 from the value in line 5***  |         |

- *Stakeholders are free. 
- ** Visual Studio Subscribers have Azure DevOps Services included as a benefit of the subscription. 
- ***Each Azure DevOps Services organization gets five free users. 

For more information about cost-effective options for accessing features, see the [Billing overview](../organizations/billing/overview.md) and the [Azure Pricing Calculator](https://azure.microsoft.com/pricing/calculator/?service=azure-devops). 

Buy any needed Azure DevOps Services user licenses through the Visual Studio Marketplace or the Azure portal. This process is covered during the [Prepare for test run phase](migration-prepare-test-run.md). 

In addition to the core features, the following value-added services are available in Azure DevOps that you might find beneficial: 

- Hosted load testing services: If you need to simulate and analyze the performance of your applications under load, Azure DevOps provides hosted load testing services. These services allow you to stress-test your applications and identify bottlenecks or performance issues. 
- Test Manager extensions: For comprehensive test management, consider using Test Manager extensions. These extensions enhance your testing capabilities by providing features like test case management, exploratory testing, and test execution tracking. 
- More features: Azure DevOps offers various extensions and integrations that cater to specific needs. Whether it’s integrating with non-Microsoft tools, enhancing security, or automating deployment pipelines, there's a wide range of options. 

Some of these services might come with extra costs, so it’s essential to evaluate your requirements and budget accordingly. These costs appear on your bill under the associated subscription. For more information, see [Set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md#set-up-billing). If you have specific questions about your situation, contact your DevOps Partner, Microsoft Reseller, or your Microsoft Developer Solutions Sales Specialist for personalized guidance. 

## Reserve your new organization 

Considering the migration project’s timeline, reserve the name of your organization early to ensure that your desired name is available for your final migration. 

For example, if your company is Contoso and you want an organization with a matching name, such as `https://dev.azure.com/contoso`, create an organization with that name now. But keep in mind that you can only migrate into a brand-new Azure DevOps Services organization. 

Complete the following steps to reserve your organization name.

1. Initial reservation:
   1. Create an organization with your desired final name, such as `https://dev.azure.com/contoso`. This step reserves the name so no one else can claim it during your migration window.
   1. Keep this organization in place until you're ready to migrate.
1. Final migration:
   1. When you're ready to begin the final migration, perform it into a temporary organization, such as `https://dev.azure.com/contoso-temporary`. You can't migrate into an existing organization.
   1. After successful migration, rename the reserved organization (`https://dev.azure.com/contoso`) to a placeholder name, such as `https://dev.azure.com/contoso-remove-later`. Renaming the organization is preferable to deleting it because a deletion can take up to an hour to release the name.

      > [!NOTE]
      > Wait at least one hour after a rename operation before renaming another organization. For more information, see [Rename your organization](../organizations/accounts/rename-organization.md).

   1. Rename the migrated organization (`https://dev.azure.com/contoso-temporary`) to your desired final name (`https://dev.azure.com/contoso`).
   1. Optionally, delete the placeholder organization (`https://dev.azure.com/contoso-remove-later`).

By following this approach, you have a smooth transition while ensuring your preferred organization name remains available. 

## Next step 

> [!div class="nextstepaction"]
> [Complete prerequisites for migration](migration-prerequisites.md)

## Related content 

- [Validate and prepare for migration](migration-validate.md)
- [Prepare for test run](migration-prepare-test-run.md)
- [Do test run migration](migration-test-run.md)
- [Migrate to Azure DevOps Services](migration-migrate.md) 
- [Complete post-migration tasks](migration-post-migration.md)
