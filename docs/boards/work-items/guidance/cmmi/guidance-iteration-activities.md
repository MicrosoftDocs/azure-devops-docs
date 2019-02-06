---
title: CMMI process guidance, Iteration activities
titleSuffix: Azure Boards
description: Specify the set of requirements, review the requirements that are assigned to the iteration and create task work items for the work that must be performed to implement and test each requirement - Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 085a4bc1-e4f3-4105-bf29-add86b2dfd80
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 01/20/2017
---

# Iteration activities

[!INCLUDE [temp](../../../_shared/version-vsts-tfs-all-versions.md)]

In MSF for CMMI Process Improvement, you plan a project as a series of iterations. Each iteration is typically four to six weeks long, during which the development team implements a specified set of requirements.  
  
## At the start of an iteration  
 Iteration planning takes place at or before the start of each iteration. It includes the following tasks:  
  
-   Review the requirements that are assigned to the iteration, and define them in more detail.  
  
-   Create task work items for the work that must be performed to implement and test each requirement. Link the tasks to the requirement work item by using the parent link type.  
  
-   Set the Original Estimate field of each task. Divide tasks that have estimates that are longer than a few days.  
  
-   Compare the estimates with the time that is available for the iteration. If the estimate total is too long, simplify some of the requirements, or defer them to later iterations.  
  
 For more information, see [Plan an iteration](guidance-plan-an-iteration-cmmi.md).  
  
## During an iteration  
  
### Task execution  
 Team members start and complete tasks, recording these events in work items. Completion of a task might include checking in program code and other artifacts. Each task should last no more than a few days; larger tasks are split during iteration planning. For more information, see and [Day in the life of a Developer: Suspend work, fix a bug, and conduct a code review](../../../../repos/tfvc/day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md).  
  
 If a team member encounters any obstacle to their work that cannot be resolved immediately, they should log an issue work item.  
  
### Tests  
 Manual or automatic tests should be developed, and test cases should be linked to the product requirements. A product requirement cannot be considered completed until the work item is linked to test cases that pass and that demonstrate that it is working.  
  
 Development work for the tests should be included in the tasks that are linked to the product requirement.  
  
### Rolling and nightly builds  
 The build system builds the product from recently checked-in updates and runs automated tests. You can set principal tests to run on a continuous basis, and you can set a full suite to run every night. This practice helps to ensure that multiple increments do not create an accumulation of bugs. For more information see [Continuous integration & delivery](/azure/devops/pipelines/index).  
  
### Stand-up meeting  
 The whole team conducts a brief daily review of progress on the tasks of the iteration. Team members can use the [taskboard](../../../sprints/task-board.md) or project the [Progress Dashboard](../../../../report/sharepoint-dashboards/progress-dashboard-agile-cmmi.md) on the wall, share it by using Office Live Meeting, or both.  
  
-   Each team member briefly reports recent progress, work in hand for the day, and any blocking issues.  
  
-   The project manager or team leader reports on progress toward resolving issues. For more information, see [Manage issues](guidance-manage-issues-cmmi.md).  
  
-   The bug count is reviewed. Bugs should be given priority over new development. Aim to keep the bug count low throughout the project. If the number of bugs increases, discuss the causes and the possible impact on development work.  
  
-   The burndown rate is reviewed.  
  
### Scope adjustments  
 The Burndown Chart might indicate that the tasks will not be completed by the end of the iteration. In that case, the project manager or team leader initiates a discussion about how requirements can be simplified so that tasks can be cut. For more information, see [Burndown and Burn Rate](../../../../report/sql-reports/burndown-and-burn-rate-report.md).  
  
 The requirements and corresponding tests are adjusted. A new requirement feature is put on the project plan for the missing functionality. In the project plan review that is held toward the end of the iteration, the feature might be assigned to a future iteration or cut.  
  
 Change requests and risks are not considered during an iteration.  
  
### Triage  
 Some team members (usually not the whole team) meet regularly to review bugs. Every team member must log a bug when they discover a defect. A logged bug starts in the Proposed state, and the purpose of the triage meeting is to decide whether to fix it, postpone it to a later iteration, or reject it.  
  
 For more information, see [Track bugs](track-bugs.md).  
  
## At the end of an iteration  
  
### Verification  
The requirements are considered completed only if the associated tests pass.   
  
### Retrospective  
 Process improvement is an important CMMI goal.  
  
 An iteration retrospective reflects on what went well or badly in the iteration and considers improvements to the process and tools that are used by the team. A significant volume of material about retrospectives is available on the Web.  
  
 Team members should avoid any assignment of blame. Try to improve the process so that mistakes that are made by individuals are less likely to have an effect.  
  
 When you introduce a change in your process, make sure that the team agrees on the following decisions:  
  
-   How you will know whether it was an improvement.  
  
-   When you will make that assessment.  
  
-   What you will do as a result.  
  
### Integration  
 If this project is part of a larger program, each team performs its work in a branch  of the version control system. The Main branch is reserved for integrating the work of the teams. At the end of an iteration, the team might perform an integration with the main branch. For more information, see [Use branches](../../../../repos/tfvc/use-branches-isolate-risk-team-foundation-version-control.md).  
  
 The integration consists of two steps:  
  
-   A forward integration, to merge the newer code from the main branch into the local project branch. After performing the merge, automatic and manual tests are run. This will create some defects. The defects are fixed at high priority.  
  
-   A reverse integration. The local branch code is merged into the main branch, and the build and full test suite on the main branch runs. The changes are reversed if any errors occur. Introducing errors to the main branch is frowned upon. If no errors occur, the integration is declared completed.  
  
 We recommend that you perform an integration at the end of each iteration. If you delay it, the list of bugs to be fixed after forward integration is longer. If it takes a long time to fix the bugs, the main branch will have new material, and you will have to perform another forward integration.  
  
### Preparing for the Next Iteration  
 Toward or at the end of an iteration, several project management activities are performed. These include reviewing risks and reviewing the plan with regard to change requests and changed development estimates.  
  
 For more information, see [Project activities](guidance-project-activities.md).