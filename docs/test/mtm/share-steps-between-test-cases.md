---
title: Share steps between test cases
description: Manual and exploratory testing - Share steps between all your test cases when you want to test web applications
ms.assetid: 5b7b1bfa-d958-442d-ab90-a0339b8baf0a
ms.prod: devops
ms.technology: devops-test
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Share steps between test cases

[!INCLUDE [version-inc-vs](../_shared/version-inc-vs.md)]

>[!NOTE]
>[!INCLUDE [mtm-deprecate-message](../_shared/mtm-deprecate-message.md)]

When you [plan manual tests](../create-a-test-plan.md) there are some sequences of steps, such as logging in, that occur in many test cases. To avoid having to enter these sequences again and again, create *shared steps*.  

[!INCLUDE [feature-availability](../_shared/feature-availability.md)] 
  
## Create shared steps 
 
While you're editing a test case, select a sequence of steps that you want to share:  
  
![Create shared steps](_img/share-steps-between-test-cases/almt_ws31createsharedsteps.png)  
  
The steps you selected are replaced with a link to the new shared steps work item:  
  
![Resulting test case with a shared step.](_img/share-steps-between-test-cases/almt_ws34createsharedresult.png)  
  
## Use shared steps  

Now you can use the shared steps in another test case:  
  
![Use shared steps in test cases.](_img/share-steps-between-test-cases/almt_ws32usesharedsteps.png)  
  
An Azure DevOps or TFS query opens. Run it to find the steps you want to insert:  
  
![Run the query to find shared steps](_img/share-steps-between-test-cases/almt_ws33sharedstepquery.png)  
  
## When you run a test with shared steps  

When you [run a test](../run-manual-tests.md), you can either mark the whole shared sequence as passed or failed, or mark each step separately:  
  
![Shared steps in Test Runner.](_img/share-steps-between-test-cases/almt_ws33runsharedsteps.png)  
  
## See also

*  [FAQs for manual testing](../reference-qa.md#sharesteps)

[!INCLUDE [help-and-support-footer](../_shared/help-and-support-footer.md)] 
