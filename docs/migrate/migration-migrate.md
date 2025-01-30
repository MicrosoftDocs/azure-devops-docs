---
title: Migrate to Azure DevOps Services
titleSuffix: Azure DevOps
description: How to do a production migration from on-premises to the cloud in Azure DevOps Services.
ms.topic: how-to
ms.subservice: azure-devops-migrate
ms.contentid: 
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 05/20/2024
---

# Migrate to Azure DevOps Services 

You completed the [Test run](migration-test-run.md) phase and familiarized yourself with the process. Now, it’s time to embark on the actual journey of migrating to Azure DevOps Services. 

:::image type="content" source="media/migrate-stage-migration-highres.png" alt-text="Diagram of highlighted Migrate stage of the seven stages of migration.":::

## Prerequisites 

Ensure your test runs result in zero errors before you officially migrate to Azure DevOps Services.Validating the data structure is also a critical step in the migration process. This involves ensuring that all required fields are present, formatted, and accurately mapped to their respective structures in the target system. Additionally, relationships between data entities—such as parent-child associations, dependencies, and references—must be correctly established to maintain data integrity. By performing thorough validation, you can minimize the risk of data loss, inconsistencies, or errors that could disrupt workflows after migration. This proactive approach helps streamline the transition, ensuring a smooth and reliable migration with minimal post-migration adjustments. 

## Queue the migration 

Do the following steps to queue the migration with the Data Migration Tool.  

1. Ensure the migration specification file is complete. 
1. Use the following command to queue the migration: `Migration /importFile:C:\TFSDataImportFiles\import.json`. 
    - Ownership: The user who queued the migration owns the migrated organization. 
    - Notifications: The owner receives an email for migration success or [failure](migration-troubleshooting.md).

## Points to consider while queuing the migration

- Prioritize critical data and ensure dependencies are respected, such as user mapping before migrating work items 
- Perform data validation and ensure error handling is in place for automatic retries and consistency during migration 
- Choose between full or incremental migration and ensure data formats are compatible between the source and target systems 
- Verify proper permissions and user mappings to ensure smooth data transfer and post-migration access 
- Plan the migration during non-peak hours, estimate the duration, and break it into batches if necessary 
- Set up progress tracking, notifications, and detailed error logs for real-time updates and troubleshooting 
- Validate migrated data for accuracy and perform User Acceptance Testing (UAT) to ensure proper functionality in the target system

 When migrating to Azure DevOps, it's essential to follow a well-planned approach while considering the prerequisites mentioned above. This includes preparing the target system and understanding the necessary configurations. Tools like [OpsHub Migrator for Microsoft Azure DevOps (OM4ADO)](https://www.opshub.com/products/opshub-azure-devops-migrator/?utm_source=Microsoft.Learn.com&utm_medium=Referrals&utm_campaign=Migrate+to+Azure+DevOps+Services+article) and [OpsHub Migration Manager (OMM)](https://www.opshub.com/products/opshub-migration-manager/?utm_source=Microsoft.Learn.com&utm_medium=Referrals&utm_campaign=Migrate+to+Azure+DevOps+Services+article) support automated migration, ensuring accurate data transfer, preventing disruptions to ongoing work, minimizing downtime, and eliminating the risk of data loss. By leveraging these tools, the migration becomes more streamlined and less prone to errors.   

## Next steps

> [!div class="nextstepaction"]
> [Complete post-migration tasks](migration-post-migration.md)

## Related articles 

- [Validate and prepare for migration](migration-validate.md)
- [Prepare for test run](migration-prepare-test-run.md)
- [Do test run migration](migration-test-run.md)

 
