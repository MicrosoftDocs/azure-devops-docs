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
ms.date: 05/17/2024
---

# Migrate to Azure DevOps Services 

You completed the [Test run](migration-test-run.md) phase and familiarized yourself with the process. Now, it’s time to embark on the actual journey of migrating to Azure DevOps Services. 

:::image type="content" source="media/migrate-stage-migration-highres.png" alt-text="Diagram of highlighted Migrate stage of the seven stages of migration.":::

## Prerequisites 

Ensure your test runs result in zero errors before you officially migrate to Azure DevOps Services. 

## Queue the migration 

Do the following steps to queue the migration with the Data Migration Tool.  

1. Ensure the migration specification file is complete. 
1. Use the following command to queue the migration: `Migration /importFile:C:\TFSDataImportFiles\import.json`. 
    - Ownership: The user who queued the migration owns the migrated organization. 
    - Notifications: The owner receives an email for migration success or [failure](migration-troubleshooting.md).

## Next steps

> [!div class="nextstepaction"]
> [Complete post-migration tasks](migration-post-migration.md)

## Related articles 

- [Validate and prepare for migration](migration-validate.md)
- [Prepare for test run](migration-prepare-test-run.md)
- [Do test run migration](migration-test-run.md)

 