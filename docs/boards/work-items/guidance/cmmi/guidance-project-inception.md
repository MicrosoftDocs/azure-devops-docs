---
title: CMMI process guidance, Project inception
titleSuffix: Azure Boards
description: Arrange the basic resources of the project in an initial stage.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 193eee36-7d2a-4652-b905-7759cc60321e
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 01/20/2017
---

# Project inception

[!INCLUDE [temp](../../../_shared/version-vsts-tfs-all-versions.md)]

You arrange the basic resources of the project in an initial stage that is named Project Inception.  
  
##  <a name="PlanningMeeting"></a> Planning meeting  
 At an early stage in the project, several stakeholders and subject matter experts should be convened to discuss the project and make the product plan. You should choose stakeholders based on the nature and complexity of the project and its product deliverable.  
  
 Depending on the size of the project and its complexity, the meeting may take several days or weeks.  
  
##  <a name="Iterative"></a> Iterative development  
 An important technique in risk management is planning your project in iterations, typically of four to six weeks. An iteration plan is a list of features that the project team will develop and test. Each feature specifies a task or an improved variant of a task that the user will be able to perform by using the product. At the end of each iteration, the planned features are demonstrated. At the end of some iterations, the partly completed product is released for trial by a limited set of users.  
  
 The feedback from those demonstrations and trials is used to review the plan.  
  
 The product plan is arranged so that the principal user scenarios and the main components of the system are exercised at an early stage, even if only in a simplified manner.  
  
 One of the most significant risks in most projects is misunderstood requirements. Requirements can be misunderstood not only by the development team but also by the end users and stakeholders. They can find it difficult to envisage how their business activities will be affected by the installation of the new system.  
  
 In addition, the business context may change during the lifespan of the project, leading to a change in the product requirements.  
  
 An iterative process provides assurance that any adjustment in the requirements that is found by demonstrating the product can be accommodated before the end of the project, without incurring the costs of substantial rework.  
  
 Another significant risk is poorly estimated development costs. It can be difficult for developers who work in a new area, and perhaps on a new platform, to make accurate estimates of development costs in advance of the project. In some cases, it can be difficult to determine whether a particular implementation strategy will perform sufficiently well. But by reviewing the plan at the end of each iteration, the team can consider the experience of the previous iterations. This is one reason why a good product plan schedules some work on every principal component at an early stage.  
  
##  <a name="ScopeOrDateDriven"></a> Is this a scope-driven or date-driven project?  
 Some projects require that all the requirements must function before delivery. These kinds of projects are unusual in a software context. A real-world example might be building a bridge. A half-finished span is useless. On the other hand, a half-completed but properly planned software project should be deployable and usable for a limited set of users. It can then be completed incrementally over the course of several upgrades.  
  
 First determine whether your project is truly scope-driven. If it is, you must wait to determine an end date until you have detailed estimates and a detailed plan. You pay a price for this. Planning overhead is increased, and schedule buffering as a contingency against poor estimation will push the delivery date out more, which increases costs. Therefore, before you decide that you have a scope-driven project, be absolutely sure. It is more probable in a complex systems-engineering environment than in a pure software product or service situation.  
  
 Most software projects are date-driven because they can be delivered incrementally. For example, if a computer game is to be released for the holiday season in the United States, it must be ready by October. Failure to deliver in October will severely affect sales between Halloween and Christmas, and, if the schedule slips by two months, the window of opportunity may be lost altogether.  
  
##  <a name="PlanProjectResources"></a> Plan project resources  
 A project should be staffed so that it can be delivered by the desired date. Historical data from previous projects should be used to inform a discussion about sufficient resources.  
  
 After you understand your staff requirements, create a project organization chart that clearly identifies the project team structure, resourcing levels, and geographic distribution, if appropriate. Save all staffing information to your project portal.  
  
##  <a name="DefineRolesAndResponsibilities"></a> Define roles and responsibilities  
 Describe each project role and its responsibilities, and publish them in the project plan. Each person who joins the project should understand their role and responsibilities in the project.  
  
##  <a name="DefineCommunicationPlan"></a> Define a communication plan  
 It is important to define a communication plan for the project. Paths of communication help manage the coordination costs on the project. It is important to define who should attend meetings, how often meetings are held, paths of communication, and how to escalate issues that cannot be resolved by the usual attendees of any one meeting.  
  
 The objective of a good communication plan is to make sure that coordination activities on the project run as smoothly as possible and to avoid wasted effort through miscommunication.  
  
 The communication plan should be published to the project portal and maintained as it is required. A communication plan is a useful tool for all staff, particularly new members. It helps them understand how a larger team works and how to get things done by communicating appropriately in different ways, with different team members, and for different purposes.  
  
##  <a name="IdentifyStakeHolders"></a> Identify stakeholders  
 Identify all relevant project stakeholders. In addition to the core team members, the list should include business people and technical people who have an interest in the successful implementation of the project or the effect that the product might have after it enters service. These stakeholders may be upstream or downstream of the software engineering activity.  
  
##  <a name="Outline"></a> Outline the project plan  
 Create a sketch version of the first project plan, which can be revised when development starts. The purpose of this version is to help discuss resources and timescales with project sponsors. It should outline the major features and their estimated delivery dates. For more information, see [Plan a project](guidance-plan-a-project-cmmi.md).  
  
##  <a name="ReviewProjectPlan"></a> Review the project plan  
 Publish the outline of the project plan on the project portal. Although much work has gone into the plan, it is still a high-level plan that defers many detailed scheduling decisions. This is intentional. Too much detail now will generate waste later.  
  
 Where requirements are uncertain, plan them in outline only, and detail should be deferred until more information is available. Plan to obtain that information.  
  
 Schedule a review meeting with all stakeholders. Face-to-face meetings are always best for this kind of activity. Be sure to schedule enough time to enable a full review and to allow dissenting opinions to be heard.  
  
##  <a name="ObtainProjectCommitments"></a> Obtain Project Commitments  
 Now that the project plan is agreed upon with the project stakeholders, obtain commitments from each stakeholder to approve the project plan.  
  
 Collect the commitments, and archive the details in the project portal.  
  
##  <a name="AdditionalResources"></a> Additional Resources  
 For more information, see the following Web resources:  
  
-   [A Practical Guide to Feature Driven Development](http://go.microsoft.com/fwlink/?LinkId=179021), Stephen R. Palmer and John Malcolm Felsing; Prentice Hall PTR, 2002.  
  
-   [The IT Measurement Compendium: Estimating and Benchmarking Success with Functional Size Measurement](http://go.microsoft.com/fwlink/?LinkId=179022), Manfred Bundschuh and Carol Dekkers; Springer, 2008.