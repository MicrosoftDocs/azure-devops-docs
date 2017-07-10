---
title: Share steps between test cases
description: Manual and exploratory testing - Share steps between test cases
ms.assetid: 5b7b1bfa-d958-442d-ab90-a0339b8baf0a
ms.prod: vs-devops-alm
ms.technology: vs-devops-test-manual
ms.manager: douge
ms.author: ahomer
ms.date: 10/20/2016
---

# Share steps between test cases

[!INCLUDE [version-header-vs-ts-tfs](../../_shared/version-header-vs-ts-tfs.md)] 

When you [plan manual tests](../getting-started/create-a-test-plan.md) there are some sequences of steps, such as logging in, that occur in many test cases. To avoid having to enter these sequences again and again, create *shared steps*.  
  
## Create shared steps 
 
While you're editing a test case, select a sequence of steps that you want to share:  
  
![Create shared steps](_img/share-steps-between-test-cases/almt_ws31createsharedsteps.png)  
  
The steps you selected are replaced with a link to the new shared steps work item:  
  
![Resulting test case with a shared step.](_img/share-steps-between-test-cases/almt_ws34createsharedresult.png)  
  
## Use shared steps  

Now you can use the shared steps in another test case:  
  
![Use shared steps in test cases.](_img/share-steps-between-test-cases/almt_ws32usesharedsteps.png)  
  
A TFS query opens. Run it to find the steps you want to insert:  
  
![Run the query to find shared steps](_img/share-steps-between-test-cases/almt_ws33sharedstepquery.png)  
  
## When you run a test with shared steps  

When you [run a test](../getting-started/run-manual-tests.md), you can either mark the whole shared sequence as passed or failed, or mark each step separately:  
  
![Shared steps in Test Runner.](_img/share-steps-between-test-cases/almt_ws33runsharedsteps.png)  
  
## Q &amp; A

**Q: How do I use shared steps in Microsoft Test Manager?**  
It's almost exactly the same in Microsoft Test Manager as in the web portal. The buttons look slightly different.  
  
**Q: Can I find all my shared steps, and all the test cases where they are used?**  
Yes. [Open Microsoft Test Manager](connect-microsoft-test-manager-to-your-team-project-and-test-plan.md) and look under **Organize**, **Shared Steps Manager**.  
  
Shared steps and test cases are stored as work items in Team Foundation Server.  
  
**Q: Can I share steps between test plans and team projects?**  
Yes. But don't forget that if you edit shared steps, the changes appear in every place you use them.  
  
**Q: Can I use parameters in shared steps?**  
Yes. You provide values for the [parameters](../repeat-test-with-different-data.md) in the test cases where the shared steps are used.  
  
You don't have to provide values in the shared steps definition. However, you can provide one default row of values, which is used when you create an action recording of a standalone shared step.

[!INCLUDE [help-and-support-footer](../../_shared/help-and-support-footer.md)] 
