---
title: CMMI process guidance, Plan an iteration  
titleSuffix: Azure Boards
description: Understand the planning iterations to decide how long you want your iterations to be, determining how much work your team can get done in that time, and planning what work should be included in each iteration - Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 63b93130-06bf-474c-883f-9514e3e92db0
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 01/20/2017
---

# Plan an iteration (CMMI)

[!INCLUDE [temp](../../../_shared/version-vsts-tfs-all-versions.md)]

Developing software in iterations means that you divide your work into incremental stages such that you have software with progressively more working features at the end of each iteration. Ideally, you have something to show the customer after even the first iteration. Iterations let you receive feedback early so that you can make course corrections early.  
  
 The matter of planning iterations comes down to deciding how long you want your iterations to be, determining how much work your team can get done in that time, and planning what work should be included in each iteration.  
  
 The MSF for CMMI Process Improvement template supplies an Iteration Path field in each work item to help you track your work by iteration. You can customize that path to reflect the iterations that you plan to perform. For more information about CMMI, see [Background to CMMI](guidance-background-to-cmmi.md).  
  
## Create tasks to implement and test each requirement  
 The iteration plan is represented by the list of tasks that are scheduled for the iteration. Each task is linked to the product requirement that it implements.  
  
 The task list is visible in the [taskboard](http://msdn.microsoft.com/f13e32ae-fe77-421a-b524-43b6bcd1a0f3), Work Breakdown query, and on the [Progress Dashboard](http://msdn.microsoft.com/4aa21c4a-651b-4cec-a204-59524abdae82).  
  
 At the start of the iteration, the team reviews the requirements that are scheduled for this iteration and creates task work items. The task work items describe the work (such as design, development, and testing) that is required to complete the requirement.  
  
 During the iteration, team members update the completion status and work remaining fields of the tasks. If the team keeps this information current, the Progress dashboard and other reports indicate how much work remains and the slope of the burndown chart indicates whether the work is likely to be completed on time.  
  
##  <a name="PlanningTimeBound"></a> Estimate the appropriate work load for the iteration  
 It's most likely that, during project planning, it was agreed that product increments should be developed in a series of time-bound iterations. Typically, these iterations vary from one week to four weeks.  
  
 The template provides the following reports, which are useful when estimating how much work to plan for an iteration.  
  
-   **Status on All Iterations** This report helps you track team performance over successive iterations. Use the report to see how many requirements and how many hours were completed in an iteration.  
  
-   **Requirements Overview** This report lists all requirements, filtered by area and iteration and sorted in order of importance. This report can show you how much work was completed by the team in an iteration.  
  
-   **Burndown and Burn Rate** Burndown shows the trend of completed and remaining work over a specified time period. The burn rate shows the completed and required rate of work based on the length of the iteration.  
  
##  <a name="Handoff"></a> Schedule an iteration demonstration and handoff  
 You should plan time to demonstrate the incremental functionality to stakeholders, to gather the team for a retrospective, and to hand off the completed work for validation tests.  
  
 Typically, you should allocate time on the last day of the iteration to demonstrate the working functionality to stakeholders.  
  
 Record the feedback, and save it on the project portal. If the demonstration brings new tasks or requirements to light, create work items as necessary. These should then be fed into future iteration plans.  
  
##  <a name="Launch"></a> Launch an iteration  
 Kick off the iteration with a mini-version of the project launch. Bring the team together. Outline the goals and the scope of the iteration. Discuss and present the plan and any targets. Ensure that all team members have enough context to continue with the work in a self-organizing manner. Make time and space for questions from team members, and record any issues or risks that are brought up during the meeting. Store these as minutes in the project portal. As a project manager, follow up by creating risk and issue work items, as appropriate.  
  
##  <a name="Tracking"></a> Track an iteration  
 Throughout the iteration, you can monitor its progress daily by using the burndown chart shown on the taskboard, or the reports that are provided with the template. You will want to pay extra attention to the [Remaining Work](https://msdn.microsoft.com/library/dd380673.aspx), [Unplanned Work](https://msdn.microsoft.com/library/ee707132.aspx), and [Requirements Overview](https://msdn.microsoft.com/library/ee461517.aspx) to make sure that the iteration is tracking against expectations.  
  
##  <a name="AdditionalResources"></a> Additional resources  
 For more information, see the following Web resources:  
  
 [Project Retrospectives: A Handbook for Team Reviews](http://go.microsoft.com/fwlink/?LinkId=179023), Norman Kerth; Dorset House, 2001.  
  
 [Agile Retrospectives: Making Good Teams Great](http://go.microsoft.com/fwlink/?LinkId=179024), Esther Derby and Diana Larsen; Pragmatic Bookshelf, 2006.