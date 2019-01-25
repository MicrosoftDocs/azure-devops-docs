---
title: CMMI process guidance, Develop requirements
titleSuffix: Azure Boards
description: Describes the requirements what the stakeholders expect from the product and allowing them to be easily discussed with the business stakeholders, using the vocabulary and concepts of the business domain - Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 4947c45a-c6a4-4865-9e3a-677740a0a1bc
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 04/28/2017
---

# Develop requirements

[!INCLUDE [temp](../../../_shared/version-vsts-tfs-all-versions.md)]

Requirements describe what the stakeholders expect from the product. You should express your requirements in terms that allow them to be easily discussed with the business stakeholders, using the vocabulary and concepts of the business domain. Requirements should neither discuss nor depend on the implementation. Requirements include not only the behavioral and quality of service expectations of the users but also statutory constraints and commercial standards.  
  
 By creating requirements in TFS, you gain the following benefits:  
  
-   Verify that requirements have been satisfied by linking them to test cases.  
  
-   Monitor progress toward implementing the requirements by linking them to task work items.  
  
-   Structure the requirements into overall and more detailed requirements so that you can manage them more easily and so that progress reports can summarize the information.  
  
-   Model the requirements in Visual Studio Ultimate, linking model elements to requirements in Team Foundation Server.  
  
 this article does not attempt to replicate the very large body of literature that is available on the subject of determining requirements. Instead, it focuses on the aspects that are important for using the Visual Studio tools in a manner that conforms to CMMI. For more information about CMMI, see [Background to CMMI](guidance-background-to-cmmi.md).  
  
 The activities that are described in this article, like any development activities, should not be performed in strict order. Develop a domain model while you are writing scenarios because one activity will help you improve the other activity. Develop the scenarios as the time for coding them approaches. Feed the experience with code that has been written and demonstrated back to the scenarios that have yet to be implemented.  
  
##  <a name="When"></a> When to develop requirements  
 TFS supports iterative working, and this practice is most effective when the early iterations are used to gain feedback from prospective users and other stakeholders. This feedback can be used to improve the requirements that have been stated for future iterations. This results in a product that is much more effective in its ultimate installation than a product that is developed over the same period without any user trial. If your project is one component among many in a larger program, early integration with other components allows the program architects to improve the overall product.  
  
 This flexibility must be balanced against the need to give firm commitments to your customer or to partners in parallel projects.  
  
 To a controlled extent, therefore, requirements are developed and refined throughout the project. Because the detailed requirements are likely to change during the project, determining them in full before the appropriate implementation is likely to result in wasted effort.  
  
-   In Iteration 0, develop a set of requirements that describe of the main features, with just enough detail to form a product plan. The product plan assigns requirements to iterations and states what requirement will be fulfilled at the end of each iteration. Create a domain model of the major concepts and activities, and define the vocabulary that will be used for those concepts both in discussion with the users and in the implementation. Determine broad requirements that pervade every feature, such as security and other quality of service requirements.  
  
-   At or near the start of each iteration, develop the requirements for those features in more detail. Determine the steps that the users will follow, defining them with the help of activity or sequence diagrams. Define what happens in exceptional cases.  
  
-   Verify as often as possible all the requirements that have been implemented. Pervasive requirements, such as security, must be verified with tests that are extended for each new feature. If possible, automate the tests because automatic tests can be performed continuously.  
  
### Managing requirements changes  
 The following guidelines let you operate an incremental process while monitoring it to satisfy CMMI requirements.  
  
-   Do not change the requirements that are set for an iteration. In the rare case of an abrupt change in circumstances, you might have to cancel an iteration, review the product plan, and start a new iteration.  
  
-   Look for uncertainties in the requirements. Try to arrange the plan so that user experience with early iterations yields information that reduces the uncertainties.  
  
-   Use change request work items to record requests to change behavior that has already been implemented, unless the requested improvement is already part of the plan. Link each change request to the appropriate requirement work items.  
  
-   Review change requests when you review the product before each iteration. Examine the impact of the request on dependent projects and users, and estimate the cost with regard to changes in your code. If a change request is accepted, update the requirement.  
  
-   Update the tests to conform to every requirements change.  
  
-   Designate a cut-off date (for example, after iteration 2 or 3) after which requirements changes must be much more strongly justified. If your project is for a paying customer, this is the date to have the customer approve a baseline set of requirements and switch from hourly payment to fixed price.  
  
-   Use bug work items to record implemented behavior that does not perform according to the explicit or implicit requirements. Where practical, create a new test that would have caught the bug.  
  
##  <a name="Vision"></a> Write a vision statement  
 Discuss a vision statement with the team, and display it on the project's Web portal for Team Foundation Server.  
  
 A vision statement is a short summary of what benefit the product will bring. What will the users be able to do that they could not do before? The vision statement helps clarify the scope of the product.  
  
 If the product already exists, write a vision statement for this version. What will the product's users be able to do that they could not do before?  
  
##  <a name="Scenarios"></a> Write scenarios  
 Work with your customer and other stakeholders to create scenarios, and enter them as requirement work items, with the Requirement Type field set to Scenario.  
  
 A scenario or use case is a narrative that describes a sequence of events, shows how a particular goal is achieved, and usually involves interaction between people or organizations and computers.  
  
 Give it a descriptive title that clearly distinguishes it from others when viewed in a list. Make sure that the principal actor or actors are stated and that their goal is clear. For example, this would be a good title:  
  
 Customer buys a meal.  
  
 You can write a scenario in the following forms. Sometimes it can help to use more than one form:  
  
-   One or two sentences in the work item description:  
  
     A customer orders a meal on a Web site and pays with a credit card. The order is passed to a restaurant, which prepares and delivers the meal.  
  
-   Numbered steps in the work item description:  
  
	1.  A customer visits the Web site and creates an order for a meal.  
	2.  The Web site redirects the customer to a payment site to make payment.  
	3.  The order is added to the restaurant's work list.  
	4.  The restaurant prepares and delivers the meal. 
  
-   Storyboard. A storyboard is essentially a cartoon strip that tells the story. You can draw it in PowerPoint. Attach the storyboard file to the requirement work item, or upload the file to the team portal, and add a hyperlink to the work item.  
  
     A storyboard is especially useful for showing user interactions. But for a business scenario, it is recommended to use a sketch style that makes it clear that this is not the final design for the user interface.  
  
-   Requirement documents. Requirement documents give you the freedom to provide the appropriate level of detail for each requirement. If you decide to use documents, create a Word document for each requirement, and attach the document to the requirement work item, or upload the file to the team portal and add a hyperlink to the work item.  
  
-   Unified Markup Language (UML) sequence diagram. A sequence diagram is especially useful where several parties interact. For example, ordering the meal requires the customer, the DinnerNow Web site, the payment system, and the restaurant to interact in a specific sequence. Draw the sequence diagram in a UML model, check it into Team Foundation Server, and enter a link in the requirement work item. For more information, see [UML Sequence Diagrams: Guidelines](https://msdn.microsoft.com/library/dd409389).  
  
### Specific scenarios  
 Start by writing specific scenarios, which follow a particular set of actors through a specific sequence. For example, "Carlos orders a pizza and garlic bread at the DinnerNow Web site. The Web site redirects Carlos to Woodgrove Bank's payment service. Fourth Coffee prepares the pizza and delivers it."  
  
 Specific scenarios help you envisage the system in use and are most useful when you first explore a feature.  
  
 It can also be useful to create named personas that describe the backgrounds and other activities of people and organizations. Carlos sleeps rough and uses an Internet café; Wendy lives in a gated community; Sanjay orders meals for his wife at her work; Contoso runs a chain of 2,000 restaurants worldwide; Fourth Coffee is run by a couple who deliver by bicycle.  
  
 More generic scenarios that are written in terms of "a customer," "a menu item," and so on can be more convenient but are less likely to lead to the discovery of useful features.  
  
### Levels of detail  
 In Iteration 0, write a few important scenarios in some detail, but write most scenarios in outline. When an iteration approaches in which a particular scenario is to be fully or partly implemented, add more detail.  
  
 When you first consider a scenario, it can be useful to describe the business context, even aspects in which the product takes no part. For example, describe the DinnerNow method of delivery: Does each restaurant organize its own deliveries, or does DinnerNow run a delivery service? The answers to such questions provide useful context for the development team.  
  
 The more detailed scenarios that you develop at the start of an iteration can describe user interface interactions, and storyboards can show user interface layout.  
  
### Organizing the scenarios  
 You can organize scenarios by using the following methods:  
  
-   Draw use case diagrams that show each scenario as a use case. This method is recommended because it makes the scenarios very easy to present and discuss. For more information, see [UML Use Case Diagrams: Guidelines](https://msdn.microsoft.com/library/dd409432).  
  
    -   Link each use case to the work item that defines the scenario. For more information, see [Link model elements and work items](https://msdn.microsoft.com/library/dd465152).  
  
    -   Draw Extends relationships to show that one scenario is a variation of another. For example, "Customer specifies separate payment and delivery addresses" is an extension of the basic "Customer makes an order" use case. Extensions are particularly useful to separate out scenarios that will be implemented in a later iteration.  
  
    -   Draw Includes relationships to separate a procedure such as "Customer logs on," which is common to several use cases.  
  
    -   Draw generalization relationships between general scenarios such as "Customer pays" and specific variants such as "Customer pays by card."  
  
-   Create parent-child links between scenario work items. You can view the hierarchy in Team Explorer. For more information, see [Arrange requirements into a product plan](arrange-requirements-into-a-product-plan.md).  
  
##  <a name="Model"></a> Model the business domain  
 Create a UML model that describes the principal activities and concepts that are involved in the use of your product. Use the terms that are defined in this model as a "ubiquitous language," in the scenarios, in discussions with the stakeholders, in the user interface and any user manuals, and in the code itself.  
  
 Many requirements are not explicitly stated by your customer, and comprehending the implied requirements depends on an understanding of the business domain, that is, the context in which the product will work. Some of the work of requirements gathering in an unfamiliar domain is, therefore, about gaining knowledge of that context. After this kind of knowledge has been established, it can be used on more than one project.  
  
 Save the model in version control.  
  
 For more information, see [Model user requirements](https://msdn.microsoft.com/library/dd409376).  
  
### Modeling behaviors  
 Draw activity diagrams to summarize scenarios. Use swimlanes to group the actions that are performed by different actors. For more information, see [UML Activity Diagrams: Guidelines](https://msdn.microsoft.com/library/dd409389).  
  
 Although a scenario usually describes a specific sequence of events, an activity diagram shows all the possibilities. Drawing an activity diagram can prompt you to think about alternative sequences and to ask your business clients what should happen in those cases.  
  
 The following illustration shows a simple example of an activity diagram.  
  
 ![Activity with three actions and a loop.](_img/uc_reqmwfact.png "UC_ReqmWFAct")  
  
 Where the interchange of messages is important, it might be more effective to use a sequence diagram that includes a lifeline for each actor and major product component.  
  
 Use case diagrams let you summarize the different flows of activity that your product supports. Each node on the diagram represents a series of interactions between the users and the application in pursuit of a particular user goal. You can also factor common sequences and optional extensions into separate use case nodes. For more information, see [UML Use Case Diagrams: Guidelines](https://msdn.microsoft.com/library/dd409389.aspx).  
  
 The following illustration shows a simple example of a use case diagram.  
  
 ![Use cases for previous actions](_img/uml_reqmwfuc.png "UML_ReqmWFUC")  
  
### Modeling concepts  
 Draw domain class diagrams to describe the important entities and their relationships that are mentioned in the scenarios. For example, the DinnerNow model shows Restaurant, Menu, Order, Menu Item, and so on. For more information, see [UML Class Diagrams: Guidelines](https://msdn.microsoft.com/library/dd409389).  
  
 Label the roles (ends) of the relationships with names and cardinalities.  
  
 In a domain class diagram, you do not typically attach operations to the classes. In the domain model, the activity diagrams describe the behavior. Assigning responsibilities to program classes is part of the development work.  
  
 The following illustration shows a simple example of a class diagram.  
  
 ![Rule in Comment attached to Order class.](_img/uml_reqmcd2.png "UML_ReqmCD2")  
  
### Static constraints  
 Add to the class diagrams constraints that govern the attributes and relationships. For example, the items on an order must all come from the same restaurant. These types of rules are important for the design of the product.  
  
### Model consistency  
 Ensure that the model and scenarios are consistent. One of the most powerful uses for a model is to resolve ambiguities.  
  
-   The scenario descriptions use the terms that are defined in the model and are consistent with the relations that it defines. If the model defines menu items, the scenarios should not refer to the same thing as products. If the class diagram shows that a menu item belongs to exactly one menu, the scenarios should not talk of sharing an item between menus.  
  
-   Every scenario describes a series of steps that are allowed by the activity diagrams.  
  
-   Scenarios or activities describe how each class and relationship in the class diagram is created and destroyed. For example, what scenario creates a menu item? When is an order destroyed?  
  
##  <a name="QofS"></a> Develop Quality of Service Requirements  
 Create work items that specify quality of service requirements. Set the Requirement Type field to Quality of Service.  
  
 Quality of service or non-functional requirements include performance, usability, reliability, availability, data integrity, security, afford-ability, service-ability and upgrade-ability, deliver-ability, maintainability, design, and fit and finish.  
  
 Consider each of these categories for each scenario.  
  
 The title of each quality of service requirement should capture its definition by presenting a context, an action, and a measurement. For example, you might create the following requirement: "During a catalog search, return the search results in less than three seconds."  
  
 In addition, it is useful to capture more detail that explains why the requirement is necessary. Describe why the persona would value the requirement and why this level of service is required. Provide context and justification. This explanation may include useful risk management information such as data from a market survey, a customer focus group, or a usability study; help desk reports/tickets; or other anecdotal evidence.  
  
 Link the quality of service requirement to any scenario (requirement work item) that is affected by the quality of service. Linking related work items allows users of Team Foundation Server to keep track of dependent requirements. Queries and reports can show how quality of service requirements affect the functional requirements that are captured as scenarios.  
  
##  <a name="Review"></a> Review requirements  
 When the requirements have been written or updated, they should be reviewed by the appropriate stakeholders to ensure that they adequately describe all user interactions with the product. Common stakeholders might include a subject matter expert, a business analyst, and a user experience architect. The scenarios are also reviewed to ensure that they can be implemented in the project without any confusion or problems. If any problems are spotted, the scenarios must be fixed so that they are valid at the conclusion of this activity.  
  
 Create a review work item to track the review. This item provides important evidence for a Standard CMMI Appraisal Method for Process Improvement (SCAMPI) appraisal and may provide a good source of information for root cause analysis in the future.  
  
 Review each scenario for the following characteristics:  
  
-   The scenario is written in the context of what task users must perform, what they already know, and how they expect to interact with the product.  
  
-   The scenario outlines a problem and is not obscured by proposed solutions to the problem.  
  
-   All relevant user interactions with the product are identified.  
  
-   The subject matter expert, the business analyst, and the user experience architect review each scenario in the context of the project to validate that all scenarios can be implemented successfully. If a scenario is not valid, it is revised so that it is valid.  
  
-   The scenario can be implemented with the available techniques, tools, and resources and within budget and schedule.  
  
-   The scenario has a single interpretation that is easily understood.  
  
-   The scenario does not conflict with another scenario.  
  
-   The scenario is testable.  
  
##  <a name="Validate"></a> Validation  
 Plan to deploy beta versions of the product into its working environment before its final release. Plan to update the requirements, based on stakeholder feedback from that deployment.  
  
 Validation means ensuring that the product fulfills its intended use in its operating environment. In MSF for CMMI, validation is achieved by demonstrating working software to the stakeholders at the end of every iteration throughout the project. The schedule is arranged in such a way that concerns that are fed back to the developers from early demonstrations can be dealt with in the plan for the remaining iterations.  
  
 To achieve true validation, the product must not only be run in a demonstration or simulated context. As far is as practicable, it should be tested in real conditions.  
  
##  <a name="Inspect"></a> Inspecting and editing the requirements  
 The scenario and quality of service requirements, which lead to most development tasks, can be inspected by using the customer requirements query. If you prefer to display all requirements, you can [write a query](../../../queries/using-queries.md) that returns all work items of the requirement work item type. Set the columns of the result to show the iteration path.  
  
 Your team should create most requirements in the early iterations of the project. New requirements will be added and others adjusted as feedback is gained from early versions.  
  
## Additional resources  
 For more information, see the following Web resources:  
  
-   [Modern Requirements Suite 4TFS](http://www.modernrequirements.com/), a requirement management software platform that bi-directionally connects Microsoft Office technologies with Azure Boards and TFS to increase stakeholder engagement and provide end-to-end traceability.  
    
-   [A Practical Guide to Feature Driven Development](http://go.microsoft.com/fwlink/?LinkId=179031), Stephen R. Palmer and Malcolm J. Felsing; Prentice-Hall PTR, 2002.  
  
-   [Streamlined Object Modeling: Patterns, Rules and Implementation](http://go.microsoft.com/fwlink/?LinkId=179032), Jill Nicola, Mark Mayfield, and Mike Abney; Prentice Hall PTR, 2001.  
  
-   [Agile Modeling: Effective Practices for Extreme Programming and the Unified Process, Scott Ambler](http://go.microsoft.com/fwlink/?LinkId=179033); Wiley, 2002.  
  
-   [Domain Driven Design: Tackling Complexity in the Heart of Software](http://go.microsoft.com/fwlink/?LinkId=179034), Eric Evans; Addison Wesley Professional, 2003.  
  
-   [Object Design: Roles, Responsibilities and Collaborations, Rebecca Wirfs-Brock and Alan McKean](http://go.microsoft.com/fwlink/?LinkId=179035); Addison Wesley Professional, 2002.