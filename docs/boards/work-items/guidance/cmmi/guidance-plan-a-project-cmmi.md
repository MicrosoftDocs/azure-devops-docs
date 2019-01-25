---
title: CMMI process guidance, Plan a project  
titleSuffix: Azure Boards
description: Understand the desired outcome of planning a project  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 26f38202-a173-4d10-9d56-03c9ff69546d
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 01/20/2017
---

# Plan a project (CMMI)

[!INCLUDE [temp](../../../_shared/version-vsts-tfs-all-versions.md)]

The desired outcome of planning a project is a plan that includes a scope, a schedule, a budget, a risk management plan, and a commitment and approval from all stakeholders. With an agreed-upon project plan, you want to progress with analysis, design, development, testing, and eventually delivery.  
  
 You can reduce risk by using an iterative development method. Iterations let you demonstrate a partly working product at the end of each iteration and act on feedback from that demonstration. Therefore, the plan provides an overall shape and is subject to review and refinement before the start of each iteration.  
  
##  <a name="Gathering"></a> Gathering and modeling the requirements  
 This activity is about discussing what the system should do, with business stakeholders, prospective users, and subject matter experts. It is important to understand the business context. If you have been asked to write an application for police officers, it helps to understand their jargon, procedures, and rules.  
  
 UML models are a useful tool for expressing and thinking about complex relationships. You can draw them in Visual Studio and link them to other documents and to Team Foundation work items. For more information see [Model user requirements](/visualstudio/modeling/model-user-requirements).  
  
 Update and refine the requirements model throughout the project. As each iteration approaches, add more detail to the aspects of the model that are relevant to that iteration. From the model, you can derive verification tests.  
  
 For more information, see [Develop requirements](guidance-develop-requirements.md) and [Develop tests from a model](/visualstudio/modeling/develop-tests-from-a-model).  
  
##  <a name="Features"></a> Creating incremental product requirements  
 The requirements as you have gathered them from your customers are not directly appropriate for the purpose of scheduling incremental development. For example, to clarify the procedure when a user buys something from a Web site, you might have written a detailed series of steps: customer browses catalog, adds item to cart, checks out cart, supplies address, and pays; warehouse schedules delivery; and so on. These steps, or an equivalent activity diagram, are not incremental requirements.  
  
 Instead, the first increment of your system might offer only one item for sale, deliver to only one address, and perform only a test transaction with the payment service. The second increment might provide a catalog that consists of a simple list. Later increments might add the option of gift wrapping the purchase or of requesting catalogs that are provided by different vendors. Some increments might be about quality of service, such as the ability to handle 1,000 customers instead of only one.  
  
 In other words, the early increments should exercise the major use cases end-to-end and gradually add functionality throughout.  
  
 If you work with an existing product, the principle is the same, but you start from the existing functionality. If you are unfamiliar with its internal design, the cost of updates can be difficult to estimate. It is worth being liberal with your estimates for the earlier changes.  
  
 For more information, see [Develop requirements](guidance-develop-requirements.md).  
  
##  <a name="EnterProductReqs"></a> Entering and editing product requirements  
 Record the incremental product requirements as requirement work items in Team Foundation, and set the requirements type to Feature. You can create a [backlog of requirements](../../../backlogs/create-your-backlog.md) using the web portal or Team Explorer. If you have several work items that you want to create at the same time, you can use the [Excel](../../../backlogs/office/bulk-add-modify-work-items-excel.md).  
  
##  <a name="Estimate"></a> Estimating the product requirements  
 The development team should estimate the work that is required to develop each product requirement. The estimate should be entered in hours, in the Original Estimate field of the work item.  
  
 Early in the project, a rough estimate is all that is needed.  
  
 Break large product requirements into smaller ones. Ideally, each product requirement will take only a few days of development time.  
  
##  <a name="Map"></a> Assigning product requirements to iterations  
 Representatives of the business stakeholders and the development team should work together to assign product requirements to iterations. Typically, you do this in a meeting, where you share or project the Office Excel view of the Product Requirements query.  
  
 The assignment is completed by using the following pieces of information:  
  
-   The priority of the requirement. See the notes in the following subsection.  
  
-   The estimated cost. Given the number of team members and the length of the iteration, each iteration has only a fixed number of hours that are available for development. Furthermore, a significant number of those hours will be used for iteration planning and other tasks that do not directly involve development.  
  
-   Dependencies among the product requirements. In an incremental series of requirements, the simplest requirements must be tackled before enhancements in the same area.  
  
 You can define the requirement in a work item by specifying a variety of information, as the following illustrations show:  
  
 ![Requirement work item form](_img/procguid_cmmiform.png "ProcGuid_CMMIform")  
  
### Some guidelines on prioritization  
 Many detailed schemes exist for prioritization. We will examine some of these when we consider iteration planning. For now, at the project level, we include some guidelines that may be useful to help manage risk and optimize added value.  
  
1.  Prioritize minimal end-to-end scenarios.  
  
     Aim to achieve a simple end-to-end scenario as early in the project as possible. Later, add more features to the different parts of the scenario. This practice ensures that the principal functions of the platform and the principal ideas in the requirements are tried early.  
  
     By contrast, do not divide the schedule according to the architecture. A schedule that completes the database, then the business logic, and then the user interface will probably require a great deal of rework to integrate the parts at the end. In the same manner, a horizontal split such as {sales component; warehouse component; payment component} is not recommended. It would probably produce a wonderful system for selling on the Web but run out of time before the business has a means of getting money from its customers. Complete components can be scheduled for later iterations only if they are truly optional add-ons.  
  
2.  Prioritize technical risk.  
  
     If a scenario includes a technically risky element, develop it early in the schedule. Take a "fail early" approach to risk. If something cannot be accomplished, you want to know this early in the project so that it can be canceled or replaced with an alternative approach. So prioritize technically risky requirements into early iterations.  
  
3.  Prioritize reduction of uncertainty.  
  
     The business stakeholders will not be sure about some requirements. It is difficult to predict what product behavior will work best in the business context. Prioritize work that is likely to reduce the uncertainties. This can often be achieved by developing a simpler version of the scenario with which users can experiment. Defer the full scenario to a later iteration, in which the results of these experiments can be considered.  
  
4.  Prioritize highly valuable requirements.  
  
     If possible, try to establish an opportunity-cost-of-delay function for each scenario. Use these to determine the requirements that can potentially bring more value to the customers earlier. Prioritize these requirements into earlier iterations. This may buy you the option of releasing a partial product early  
  
5.  Group scenarios that are common to multiple personas.  
  
     If you have scenarios that have utility for two or more personas, group these together. Rank them by the number of personas that require the scenario. Prioritize the scenarios that apply to a larger number of personas into early iterations.  
  
6.  Rank personas.  
  
     Personas represent market segments or user groups. Marketing people or business owners should be able to articulate the priority of such segments or groups based on utility to be delivered or the value of the segment. If segments or user groups can be ranked in priority, show this by listing the personas for each segment by rank. Identify the scenarios for the highest ranked personas, and prioritize these into earlier iterations in the schedule.  
  
 In general, we want to prioritize the reduction of risk because of the possibility of failure. We want to prioritize common functionality because it is likely to be required and unlikely to change. We want to prioritize more valuable requirements. We want to enable the option for early release of the product to a subset of personas by prioritizing all scenarios that are required to satisfy the needs of any one persona.  
  
##  <a name="PlanTests"></a> Planning tests  
 The work estimate for each requirement must include the effort that is required to test the requirement, either manually or by creating an automated test.  
  
 Before it is considered completed, each product requirement must be linked to a set of test case work items that together demonstrate whether the requirement has been met, and the tests must pass.  
  
 When you create or revise product requirements, the corresponding test plan must be updated.  
  
##  <a name="ReviseProductReqs"></a> Revising the product requirements  
 Revisit this activity before each iteration to consider revised and new requirements, revised priorities, and revised estimates. There will be more revisions in the first few iterations.  
  
 After the first few iterations, members of the development team will be more confident about the estimates. They should go through the estimates for the next one or two iterations and revise the Original Estimates fields of the requirements that are assigned to those iterations.  
  

## Related articles
- [Background to CMMI](guidance-background-to-cmmi.md)
- [CMMI process](../cmmi-process.md)