---
title: Complete migration prerequisites
description: Learn about what's required before you begin migration from on-premises to the cloud in Azure DevOps Services.
ms.topic: how-to
ms.subservice: azure-devops-migrate
ms.contentid:
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 05/17/2024
---

# Complete prerequisites for migration

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

As you move to the second phase of migrating to Azure DevOps Services with the Azure DevOps Data Migration Tool, you must complete the prerequisites for transferring your data to the cloud. If your organization already meets these prerequisites, you can skip this phase entirely.

:::image type="content" source="media/prerequisites-stage-migration-highres.png" alt-text="Diagram highlighting the Prerequisites stage in sequential stages.":::

## Update Azure DevOps Server 

The Data Migration Tool for Azure DevOps supports the [two latest releases of Azure DevOps Server](/azure/devops/server/release-notes/azuredevops2022?view=azure-devops) at a given time. Releases include updates and major releases.

It can take up to 2-3 weeks after a new RTW version of Azure DevOps Server is released for migration support to come online for that version. Consider this possibility when you choose to upgrade shortly after a new RTW Azure DevOps Server release. 

The Data Migration Tool doesn't support migration from Azure DevOps Server release candidates (RC). If you're planning to migrate your collection database to Azure DevOps Services using this service, it's important that you don't upgrade your production database to an RC release. If you upgrade, then you must wait and upgrade to the release to web (RTW) version when it's available. Or, restore a backup copy of your database from a previous Azure DevOps Server version to migrate. You can't downgrade to a previous version of Azure DevOps, but must revert using a backup of the database at that version. 

Normal release cadence for new Azure DevOps Server versions is once every three to four months. Meaning that support for a given version of Azure DevOps Server for migration to Azure DevOps Services should last for anywhere between six-to-eight months. It's important to ensure that your plan accounts for this support window to avoid having to suddenly upgrade to migrate. 

## Implement Microsoft Entra ID

Ensure your team has a functional Microsoft Entra ID tenant for authenticating members in your Azure DevOps Services organization. In Azure DevOps Services, user authentication relies on a Microsoft Entra ID tenant like Azure DevOps Server user authentication relies on Active Directory. During the Test Run phase(link), you verify an identity map log file to match your on-premises Active Directory organizations with Microsoft Entra ID organizations. This file isn't used by the migration service. This action ensures individual history visibility, security permissions preservation, and access to personal settings. 

**Recommendation:** Use the same Microsoft Entra ID tenant as other Microsoft Cloud services. If your company already has Microsoft Entra ID, skip this step. 

> [!TIP]
> While Microsoft accounts (MSAs) work for Azure DevOps Services authentication, they can't be mapped during Azure DevOps Server database migration.

### Synchronize identities and groups with Microsoft Entra ID Connect 

Synchronize your on-premises Active Directory with Microsoft Entra ID, so your team members can use the same credentials to authenticate. Also, your Azure DevOps Services administrators can use your Active Directory groups for setting permissions within your organization. 

To set up the synchronization, do the following steps: 
- Utilize the [Microsoft Entra ID Connect](https://aka.ms/AzureADConnect) technology. 
- To configure Microsoft Entra ID Connect with your on-premises environment, collaborate with your IT department, DevOps Partner, Microsoft Premier Support, or Microsoft Consulting Services. 

For more information on setting up Microsoft Entra ID Connect, see [Microsoft Entra Connect Sync](https://aka.ms/AzureADConnect).

Also, explore how you can configure Azure DevOps Services to use Microsoft Entra ID by visiting this page. Although the steps in that article don’t align exactly with your Team Foundation Server database migration, it serves as valuable reference information. The Data Migration Tool establishes the link to your Microsoft Entra ID tenant during the creation of your Azure DevOps Services organization at the start of the migration process.

> [!NOTE]
> DirSync was a predecessor technology to Microsoft Entra ID Connect. Upgrade to Microsoft Entra ID Connect if you’re using DirSync.

## Download Azure DevOps Data Migration Tool  

The bulk of the work throughout the migration to Azure DevOps Services gets handled by the Data Migration Tool. The tool gets used with the following high-level steps: 

- Validate a team project collection. 
- Generate the files used to customize the migration. 
- Queue migration of an Azure DevOps Server database to Azure DevOps Services. 

You must have the following items: 

- TFSEXECROLE role in SQL Server. 
- Permissions to connect to both the Azure DevOps Server configuration and collection databases. 
- An established link between your Azure DevOps Services organization and your Microsoft Entra ID tenant. 

### Download the tool 

1. Download the latest version of the Data Migration Tool.
1. Copy the zip file to one of your Azure DevOps Server application tiers. 
1. Unzip the file. 
    You can also run the tool from a different machine without Azure DevOps Server installed, if it can connect to the configuration database of the Azure DevOps Server instance. 
1.Open a Command Prompt window on the server and go to the directory where the Data Migration Tool is stored. 
1. Review the help content for the tool: 
   1. To view the top-level help and guidance, run the following command:  
    `Migrator /help`
   1. View the help text for the validation command: 
    `Migrator validate /help`
    For your first time validating a collection, keep it simple. Your command should have the following structure: 
    `Migrator validate /collection:{collection URL} /tenantDomainName:{name} /region:{region}`
1. Replace {name} with the name of your Microsoft Entra tenant. For example, to run against the DefaultCollection and the fabrikam tenant, the command would look like this: 
    `Migrator validate /collection:[^1^][4]	(http://localhost:8080/DefaultCollection) /tenantDomainName:fabrikam.OnMicrosoft.com /region:{region}`
    If you need to run the tool from a machine other than the Azure DevOps Server, use the `/connectionString` parameter. 

## Next steps 

> [!div class="nextstepaction"]
> [Validate and prepare for migration](migration-validate.md)

## Related articles 

- [Prepare for test run](migration-prepare-test-run.md)
- [Do test run migration](migration-test-run.md)
- [Migrate to Azure DevOps Services](migration-migrate.md)
- [Complete post-migration tasks](migration-post-migration.md)
 