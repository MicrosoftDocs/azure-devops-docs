---
title: CMMI process guidance, Project activities
titleSuffix: Azure Boards
description: Reduce the risks to your project that stem from shifting requirements and implementation costs 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 078d2b8e-e0a7-4c17-8f00-e830c78d338c
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 01/20/2017
---

# Project activities

[!INCLUDE [temp](../../../_shared/version-vsts-tfs-all-versions.md)]

To make the most effective use of MSF for [CMMI Process Improvement](guidance-background-to-cmmi.md), you should organize your project into a series of iterations, typically between four and eight weeks long. This helps you reduce the risks to your project that stem from shifting requirements and implementation costs. Iterative project structure is an important contribution to meeting the risk management requirements of CMMI.  
  
## At the start of the project  
  
### Project inception  
 Inception includes defining the project vision, which states what users will be able to do when the project releases its product.  
  
 It also includes setting up the team, the infrastructure, and other resources and determining the development process.  
  
 For more information, see [Project inception](guidance-project-inception.md).  
  
### Initial project planning  
 Project planning includes the following activities:  
  
-   Analyzing the requirements in sufficient detail to enable you to form a plan. This analysis can include the use of requirements models, storyboards, and other tools that help envisage the working system.  
  
-   Devising an overall design or architecture for the system. If this involves working on a platform that is new to team members, some time must be assigned to experimenting with it. Development will be slow in the earlier iterations.  
  
-   Casting the requirements as a set of incremental product requirements whose development can be approximately estimated. The difference between general requirements and product requirements is an important one, and this is a significant activity. For more information, see [Develop requirements](guidance-develop-requirements.md).  
  
-   Making an initial assignment of product requirements to iterations.  
  
-   Setting dates for releases.  
  
 The plan and requirements models will be revisited and refined throughout the project. Part of the purpose of iterative development is to allow improvements in the requirements that stem from demonstrating working software at an early stage.  
  
 Initial project planning is done in Iteration 0.  
  
 For more information, see [Plan a project](guidance-plan-a-project-cmmi.md).  
  
### Exploring an existing product  
 The goal of your project might be to update a product that already exists. In this case, if the team is unfamiliar with the product, exploration of the code is an activity for Iteration 0. Each development task in subsequent iterations will also involve understanding the code in a particular locality and tracing the consequences of changing it.  
  
 For more information, see [Visualize code](https://msdn.microsoft.com/library/dd409365).  
  
## During the project  
 The plan is reviewed and subject to change throughout the project.  
  
 Several activities that are related to the project plan are performed regularly throughout the project, usually toward the end of an iteration.  
  
### Validation  
 Demonstrate to your customers or business stakeholders the software that has been developed during the iteration. Where feasible, release it to them so that they can experiment with it or use it to a degree in a practical context.  
  
 After a sufficient interval, arrange a meeting to review user feedback. The feedback should be used to generate change requests.  
  
  
### Risk management  
 Review the probability and impact of potential adverse events, and take steps to reduce the risks. For more information, see [Manage risks](guidance-manage-risks.md).  
  
### Change management  
 You can use change request work items to record changes in the requirements that are stated by the business stakeholders. They can stem from changes in the business context but also from demonstration and trials of early versions of the product. These changes should be welcomed because they improve the fitness of your product to its business purpose. This effect is part of the objective of incremental development.  
  
 Some project teams adjust the product requirements work items when changes are requested, without using a separate work item. But the advantage of the change request work item is that, in the later part of the project, you can review the number and nature of the changes that were made. You can use that information to improve your process or architecture for the future.  
  
 Change requests should be used as input to the Product Plan Review.  
  
 For more information, see [Manage change](guidance-manage-change.md).  
  
### Product plan review  
 Hold a Product Plan Review before you plan each iteration. The project plan assigns product requirements to iterations.  
  
 The plan will change for two principal reasons:  
  
-   Changes in requirements.  
  
-   Changes in the estimates that the developers made. As the project progresses, the development team can make more reliable estimates of the work that will be required to implement future features. In some cases, some functionality might have been postponed from a previous iteration, which adds a feature to the plan.  
  
 Both types of change become less frequent in later iterations.  
  
 Revise the requirements models from which the product requirements are derived.  
  
 Revise the assignment of requirements to iterations. Just as in the initial planning activity, the business stakeholders provide the priorities, the development team provides the estimates, and the meeting juggles the features between iterations.  
  
 For more information, see [Plan a project](guidance-plan-a-project-cmmi.md).  
  
## Before major releases of the product  
 The activities that are involved in deployment of a product vary according to its type and are not dealt with here.  
  
 Consider the following points in respect to the later iterations of software development:  
  
-   Exclude major changes to the design to avoid the chance of unforeseen problems.  
  
-   Raise the bar for changes and bugs in triage meetings. Proposed changes and bug fixes should be rejected unless they have significant effects on the usability and fitness for purpose of the product.  
  
-   Devote resources to increasing test coverage and to performing manual tests.  
  
## Related articles
- [Background to CMMI](guidance-background-to-cmmi.md)
- [CMMI process](../cmmi-process.md)