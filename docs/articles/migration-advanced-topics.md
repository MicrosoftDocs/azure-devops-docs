---
title: Migration from TFS to Visual Studio Team Services (VSTS), advanced topics | VSTS & TFS
description: Advanced Team Foundation Server to VSTS topics. 
ms.prod: vs-devops-alm
ms.technology: vs-devops-overview
ms.contentid: f069d4ab-c824-4eb4-94ea-8e24942d5dcd
---

# Advanced Topics

> [!NOTE]
> The TFS Database Import Service for Visual Studio Team Services (VSTS) is currently in preview.
>
> It's recommended that you use the [Migration Guide](https://aka.ms/tfsimport) to progress through your import. The guide links to the technical documentation as needed.

## Overriding Licensing Map Values
To learn more about [licensing in Visual Studio Team Services (VSTS)](https://www.visualstudio.com/en-us/products/visual-studio-team-services-pricing-vs.aspx), visit our website. Generated identity mapping files provide a best guess as to what level of access each user will require. Upon inspecting the file you will notice one the following entries for each row’s license field:

* **Stakeholder** - This license is free for people that just need to use work items. Team Service accounts can have as many stakeholder users as they wish.
* **Basic** - Standard license that gives the individual access to code and allows them to contribute to projects. 
* **MSDN** - Also known as a Visual Studio subscriber. Users that have linked their subscription to their AAD identity can input "MSDN" to use their included benefits as a license in VSTS after the migration.

Ensure that you have reviewed the license assignment for each user. Any changes from the generated output should be placed in the "License Assignment Override" column and the identity mapping file [re-validated](#validating-sync-between-on-premises-ad-and-azure-ad). Instructions on how to re-validate the input are included in the section below. An identity's license can also be changed after import if more or less access is required. 

> **IMPORTANT**  
> You must re-validate the identity mapping file for the changes placed in the override column to be respected. If this step is missed then your new license assignments will not be respected at import time.  

<a id="validating-sync-between-on-premises-ad-and-azure-ad"></a>
## Validating issues addressed in the sync between on-premises AD and Azure AD
Once the issues in the identity map are addressed by checking and fixing the sync process between on-premises AD and Azure AD, TfsMigrator's validate command can be used to validate changes to import files. The command can also be used to verify and apply values placed in the license override column. It's always recommended that you validate your changes to ensure that no typos or mistakes make it into the migration.

> The UserPrincipalName[Target] column **CANNOT** be manually updated. Users marked as "NO MATCH" will need to be investigated with your AAD admin to see why they aren't part of your directory sync. 

The command will ask you to sign into AAD so that the identity changes can be validated. After the validate has completed running you will be able to open the identity mapping file and review the results. Assuming if an sync issue for a given identity is addressed, you will see the mapping between the on-premises AD user and AAD correctly reflect that. The status column will also be updated to reflect that the row is now "OK". Any rows that are still marked as "NO MATCH" will need to be reviewed further. It could be that there was a typo in the entry or that the identity doesn't exist. Repeat this process as many times as needed to get the desired set of identities to be imported as active. 

Instructions and an example of how to run validation on the identity mapping file are included in TfsMigrator's help text:

```cmdline
TfsMigrator validate /help
```

The command structure to run a validate against both the collection and identity mapping file will look like the following:

```cmdline
TfsMigrator validate /collection:{Collection Url} /identityMap:{Location on Disc} /tenantDomainName:{name}
```

Note that /tenantDomainName is required since validating the changes made to the identity mapping file require a connection to AAD. 

Following the Fabrikam example, the command would look like:

```cmdline
TfsMigrator validate /collection:http://localhost:8080/tfs/DefaultCollection /identityMap:C:\DataImport\IdentityMap.csv /tenantDomainName:Fabrikam.OnMicrosoft.com
```



