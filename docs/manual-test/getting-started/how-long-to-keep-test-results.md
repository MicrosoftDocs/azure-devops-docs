---
title: Manage how long to keep test results in VSTS
description: Manage how long VSTS keeps you test results
ms.prod: vs-devops-alm
ms.technology: vs-devops-test-manual
ms.assetid: 7a9e6fbe-bdd0-4cb5-8e57-f4d8d2126218
ms.manager: douge
ms.author: ahomer
ms.date: 01/18/2018
---

# Control how long to keep test results in VSTS

[!INCLUDE [version-header-vs-ts-tfs](../_shared/version-header-vs-ts-tfs.md)] 

Running tests, especially automated ones, generates lots of data. 
To keep your test system responsive and performing well,
have a policy to clear test results that you don't need anymore. 
Delete automated test results when you delete your builds.
You can keep manual test results while you're still reviewing them, 
for example, up to a year. 

<a name="manual-test-results-limits"></a> 
## Manual test results 

To delete manual test results after a specific number of days, 
set the retention limit at the team project level. 
Visual Studio Team Services (VSTS) keeps manual test results related to builds, 
even after you delete those builds. That way, build policies don't delete 
your test results before you can analyze the data.

1. Sign to your VSTS account (**https://**your-account-name**.visualstudio.com**). 
   You'll need at least team project administrator permissions.

1. Go to your team project.

1. Go to the team project control panel.

   ![Team project control panel](_img/how-long-to-keep-test-results/team-project-control-panel-jamal.png)
  
1. Select a limit for how long you want to keep manual test data. 

   ![Select test data retention limits](_img/how-long-to-keep-test-results/team-project-test-data-retention-limits.png)

## Automated test results 

### Automated test results associated with builds

By default, VSTS keeps automated test results related to builds 
only as long as you keep those builds. To keep test results after you delete your builds, 
edit the build retention policy. If you use Git for version control, 
you can specify how long to keep automated test results based on the branch. 

1. Sign to your VSTS account (**https://**your-account-name**.visualstudio.com**). 
   You'll need at least build level permissions to edit build definitions.

1. Go to your team project. Find and edit your build definition.

   ![Build definition](_img/how-long-to-keep-test-results/edit-build-def.png)

   By default, test results are deleted when the build is deleted.  

   ![Test results are deleted when builds are deleted](_img/how-long-to-keep-test-results/vso-keep-test-data-builds.png)

1. If you use Git, and you have more than one branch, 
   set the branch filter to delete test results and builds
   in one branch. Meanwhile, you can keep test results in another branch, 
   even though you delete the builds in that other branch.  

   ![Delete test results by branch](_img/how-long-to-keep-test-results/vso-git-keep-test-data-builds.png)

### Automated test results not associated with builds or orphaned from deleted builds

To clean up automated test results that are left over from deleted 
builds or test results that aren't related to builds, 
for example, results published from external test systems, 
set the retention limits at the team project level. 
[Learn more](#manual-test-results-limits)

## See also

*  [FAQs for manual testing](../reference-qa.md#manageresults)

[!INCLUDE [help-and-support-footer](../_shared/help-and-support-footer.md)] 
