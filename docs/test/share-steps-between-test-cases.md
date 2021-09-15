---
title: Share steps between test cases
titleSuffix: Azure Test Plans
description: Share steps between all your test cases when you want to test web applications
ms.technology: devops-test
ms.topic: how-to
ms.author: sdanie
author: steved0x
monikerRange: '>= tfs-2015'
ms.date: 09/14/2021
---

# Share steps between test cases


[!INCLUDE [version-header](includes/version-header.md)] 


When you [plan manual tests](create-a-test-plan.md) there are some sequences of steps, such as logging in, that occur in many test cases. To avoid having to enter these sequences again and again, create *shared steps*.  

[!INCLUDE [prerequisites-define](includes/prerequisites-define.md)] 

[!INCLUDE [note-new-ui](includes/note-new-ui.md)] 
  
## Create shared steps 
 
While you're editing a test case, select a sequence of steps that you want to share:  
  
![Create shared steps](media/shared-steps/create-shared-steps.png)  
  
The steps you selected are replaced with a link to the new shared steps work item:  
  
![Resulting test case with a shared step.](media/shared-steps/almt_ws34create-shared-result.png)  
  
## Use shared steps  

Now you can use the shared steps in another test case:  
  
![Use shared steps in test cases.](media/shared-steps/use-shared-steps.png)  
  
A query opens. Run it to find the steps you want to insert:  
  
![Run the query to find shared steps](media/shared-steps/shared-step-query.png)  
  
## When you run a test with shared steps  

When you [run a test](run-manual-tests.md), you can either mark the whole shared sequence as passed or failed, or mark each step separately:  
  
![Shared steps in Test Runner.](media/shared-steps/run-shared-steps.png)  
  
## Related articles


* [Test objects and terms](test-objects-overview.md) 
- [FAQs for manual testing](https://docs.microsoft.com/azure/devops/test/reference-qa#sharesteps)
