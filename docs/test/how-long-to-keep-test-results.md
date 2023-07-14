---
title: Set test retention policies
description: Manage how long Azure DevOps keeps your manual test results by clearing test results that you do not need anymore or when you delete your builds
ms.assetid: 7a9e6fbe-bdd0-4cb5-8e57-f4d8d2126218
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: conceptual
ms.author: sdanie
author: steved0x
monikerRange: '<= azure-devops'
ms.date: 4/04/2022
---

# Set test retention policies

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]  

Running tests, especially automated ones, generates lots of data. 
To keep your test system responsive and performing well,
have a policy to clear test results that you don't need anymore. 
Delete automated test results when you delete your builds.
You can keep manual test results while you're still reviewing them, 
for example, up to a year. 

## Prerequisites
  
- To manage project-level test-related policies, you must be a member of the [**Project Administrators** group](../organizations/security/change-project-level-permissions.md). 
- To manage build pipeline object-level test retention policies, you must have the **Edit build pipeline** permissions set to **Allow**. 
  
<a name="manual-test-results-limits"></a> 

## Set retention period for test results

To delete manual test results after a specific number of days, 
set the retention limit at the project level. 
Azure DevOps keeps manual test results related to builds, 
even after you delete those builds. That way, build policies don't delete 
your test results before you can analyze the data.

1. Sign into Azure DevOps. You'll need at least project administrator permissions.

1. Go to your project and then open the [project settings page](../project/navigation/go-to-service-page.md#open-project-settings).
  
1. In the **Test>Retention** page, select a limit for how long you want to keep manual test data. 

   ![Select test data retention limits](media/how-long-to-keep-test-results/team-project-test-data-retention-limits.png)

## Set retention policy for automated test results associated with builds

By default, Azure DevOps keeps automated test results related to builds 
only as long as you keep those builds. To keep test results after you delete your builds, 
edit the build retention policy. If you use Git for version control, 
you can specify how long to keep automated test results based on the branch. 

1. Sign into Azure DevOps. You'll need at least build level permissions to edit build pipelines.

1. Go to your project. Find and edit your build pipeline.

   ![Build pipeline](media/how-long-to-keep-test-results/edit-build-def.png)

1. Open the **Retention** page. Modify the default policies as required, or add new policies.

   ![Delete test results by branch](media/how-long-to-keep-test-results/vso-git-keep-test-data-builds.png)

   If you use Git, and have more than one branch, 
   set the branch filter to delete test results and builds
   in specific branches as required. You can keep test results in other branches, 
   even though you delete the builds in these branches.  
 
## Set retention policy for automated test results not associated with builds
To clean up automated test results that are left over from deleted 
builds or test results that aren't related to builds, 
for example, results published from external test systems, 
set the retention limits at the project level as described in [Set retention period for test results](#manual-test-results-limits) earlier in this article.

## Related articles

- [Delete test artifacts](../boards/backlogs/delete-test-artifacts.md)
- [FAQs for manual testing](reference-qa.yml#manageresults)

 
