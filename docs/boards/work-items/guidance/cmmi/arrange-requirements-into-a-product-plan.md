---
title: Arrange requirements in a product plan
titleSuffix: Azure Boards
description: CMMI process guidance, Create a plan from a set of requirements 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 83ade2b1-dd94-489e-bf6d-42391eea6171
ms.topic: conceptual
ms.author: kaelli  
author: KathrynEE 
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.date: 01/20/2017 
---

# Arrange requirements into a product plan

[!INCLUDE [temp](../../../_shared/version-vsts-tfs-all-versions.md)]

After you analyze your customer requirements sufficiently to understand what the product should do, you must work out a plan to implement the product. Or, for an existing product, you must work out what functionality is missing and work out a plan for making the changes. But the requirements do not automatically tell you the plan.  
  
 this article outlines a method of obtaining a plan, starting from a set of requirements. This is just one method among a variety that will work on Visual Studio, and you should adapt it so that it suits your needs.  
  
 You can use the [backlog](../../../backlogs/create-your-backlog.md) and [portfolio backlogs](../../../backlogs/organize-backlog.md) to define and map requirements and features.  
  
##  <a name="ReqFeature"></a> Requirements and features  
 There are two kinds of requirement in this method: customer requirements and features. Customer requirements are what you get by analyzing what the customer wants from the product. Features are items in the product plan, which correspond to small subsets of the customer requirements. Each feature may include pieces of the customer requirements that come from different parts of the user experience and different functional areas.  
  
 **Customer requirements**  
  
-   Customer requirements are determined by discussion with the prospective users and other stakeholders.  
  
-   To help analyze these requirements, you will typically create storyboards and models, and you decompose the scenarios into smaller steps, forming a tree. You can link modeling elements such as use cases and activities to scenario work items.  
  
-   There are two kinds of customer requirement:  
  
    -   Scenarios, also known as use cases, represent sequences of interactions between the users and product, in pursuit of specific goals. An example scenario might have the title "User buys a book."  
  
    -   Quality of Service requirements include performance, security, usability, and other criteria.  
  
-   You can represent these requirements as work items of type requirement, with the Requirement Type field set to Scenario or Quality of Service. For more information, see [Develop requirements](guidance-develop-requirements.md).  
  
-   These requirement work items should be linked to system tests so that you can ensure that all the requirements are tested. See [Create a test plan](../../../../test/create-a-test-plan.md).  
  
-   [View the backlog](../../../backlogs/create-your-backlog.md) or open the Customer Requirement query to list these requirement work items.  
  
-   Use the [Requirements Progress](../../../../report/sql-reports/requirements-progress-report-cmmi.md) report to monitor which requirements have been satisfied.  
  
 **Features**  
  
-   A feature is an item in a product plan that represents a group of tasks. In product planning, representatives of the development team and stakeholders assign features to iterations. For more information, see [Plan a project](guidance-plan-a-project-cmmi.md).  
  
-   Enter features as requirement work items with the Requirements Type field set to Feature.  
  
-   The feature's title states, in users' terms, what the users will be able to do with the product, that they could not do in previous iterations. There are no items, or very few items, on the plan that do not deliver new user value.  
  
     For example, this sequence of features could form an implementation plan:  
  
    -   "A buyer can pick a book from a list and add it to a wish list."  
  
    -   "The book list displays prices. In the wish list, the total price is displayed."  
  
    -   "Vendors can attach tags to books. Buyers can filter the book list by tag."  
  
     Notice that no feature touches just one step in the user experience, and no feature involves just one part of the product architecture. Instead, as the features are implemented, several functions are revisited and augmented with new user value.  
  
-   A feature is assigned to an iteration during product planning. All the tasks under a feature must be assigned to the same iteration.  
  
-   A feature describes a partial realization of the customer requirements. It is a subset of the customer requirements, and it might implement each customer requirement to a limited extent.  
  
-   Every feature can be linked to one or more test cases that test the part of the requirements that the feature represents. These test cases are a subset of the system tests that are linked to the customer requirements.  
  
-   The feature's state must not be marked complete until its tests are fully defined and pass.  
  
-   Every feature is a group of development and test tasks. It is the root of a tree of tasks. The development tasks implement the partial requirements that the feature describes. The test tasks design and execute the appropriate test cases.  
  
-   You use the Product Requirements query to list features.  
  
### Finding features  
 Separating requirements into incremental features is a creative task that must involve developers, analysts, and stakeholders. A feature defines a piece of the product's functionality that can sensibly be implemented separately from the surrounding functions. Therefore, a workable set of feature definitions and an ordering into a plan depends partly on the architecture of the system.  
  
 For this reason, planning and the initial design of the product must work in parallel, particularly in Iteration 0 where the bulk of the plan is being sketched.  
  
##  <a name="Decomp"></a> Scenario decomposition  
 To help you arrange the requirements into features, it helps to decompose the scenarios into smaller steps.  
  
 Storyboards often help with this activity. A storyboard is a sequence of pictures that illustrate the scenario. UML activity diagrams are useful for showing alternative paths, and UML sequence diagrams can help you discuss interactions between several actors. After you use these tools to analyze a scenario, you can enter the decomposed scenarios into Team Explorer. This lets you link test cases to the scenarios and thereby ensure that the requirements have been satisfied. For more information, see [UML Activity Diagrams: Guidelines](/visualstudio/modeling/create-uml-modeling-projects-and-diagrams) and [UML Sequence Diagrams: Guidelines](/visualstudio/modeling/create-uml-modeling-projects-and-diagrams).  
  
##  <a name="Features"></a> Features - requirements fulfilled in each iteration  
 A feature is a requirement that summarizes what the users can do at the completion of each iteration. You can create more than one feature for each iteration. Enter them as requirement work items, setting the Requirement Type to Feature.  
  
 Use your assignments of scenarios to work items to help you define the features. The following example feature plan is derived from the assignments of scenarios to iterations in the previous section:  
  
-   Iteration 1  
  
    -   Customer chooses items from a menu, adds them to an order, and adds a delivery address.  
  
-   Iteration 2  
  
    -   Customers start by displaying a list of restaurants and then choose one.  
  
    -   When the customer completes an order, the order appears on the chosen restaurant's screen.  
  
    -   The prices of items and the total price are displayed on the order.  
  
-   Iteration 3  
  
    -   Restaurant marks the order as "Done" when the prepared meal has been dispatched. The meal is logged against the restaurant.  
  
    -   Each restaurant can enter and update its menu.  
  
    -   Customer can browse the menu of every restaurant before selecting one.  
  
-   Iteration 4  
  
    -   Customer enters payment details on completing an order. Customer's card is charged when the restaurant marks the order as Done.  
  
    -   Restaurant is paid for orders that are marked as Done.  
  
-   Iteration 5  
  
    -   Restaurants can set their delivery area. Customer enters postal code at start of session. The Web site displays only restaurants that can deliver to the local area.  
  
### Partly implemented scenarios  
 Decomposing the scenarios into small steps helps you to separate some steps that can be implemented earlier from others that can be implemented later.  
  
 But sometimes you can separate out other aspects of the scenarios. In this example, the team might implement a basic version of the user experience in early iterations and then improve it later. So you might add the following feature:  
  
-   Iteration 6 - Restaurant can choose the color scheme and font of its menu and upload its own logo and pictures of meals.  
  
 This type of feature does not emerge directly from the decomposition into steps, but it usually emerges in discussion of storyboards. User experience features are good candidates for later iterations.  
  
### Entering and inspecting features  
 Create work items with work item type of requirement, and set the Requirement Type field to Feature. Set the feature title to the short description.  
  
### Tracing features to requirements  
 You can link features to requirements in the following ways:  
  
-   Link feature work items to the leaf scenario requirements of their iterations. You must link them by using Related Item links because the leaf scenarios already have parents.  
  
-   Link test case work items to the scenarios and quality of service requirements that they test. Link features to the subset of test cases that should pass when the feature has been developed. In this manner, the test cases act as the link between features and customer requirements.  
  
##  <a name="QofS"></a> Quality of service features  
 Quality of service requirements are usually pervasive with regard to the software design. For example, security requirements are generally not related to a particular development task.  
  
 Nevertheless, for each quality of service requirement, you should create a feature work item whose children are mainly testing tasks that ensure that a quality of service criterion is met. These work items are called quality of service features.  
  
 Some quality of service features can have development tasks. For example, in an early iteration, you might implement a version of the system that can handle only a few users, as a proof of concept. For a later iteration, you might add a feature that specifies the target capacity as stated in the customer requirements.  
  
##  <a name="ProdPlan"></a> Product planning  
 Before the start of every iteration, hold a meeting to review the product plan. The first product planning meeting creates the plan, and subsequent meetings review it based on earlier iterations. For more information, see [Plan a project](guidance-plan-a-project-cmmi.md).  
  
 In a product plan review, discuss the features with business stakeholders, and be prepared to reprioritize them and arrange them into different iterations. The meeting should include business stakeholders and representatives of the development team.  
  
 The meeting discusses the sequence in which features will be developed. This can be done by projecting or screen-sharing the Office Excel view of the Product Requirements query and ordering the features by iteration.  
  
 An alternative technique is to place the features in a specific sequence and then consider how much can be done in each iteration. For example, the developers might discuss whether "Customer can display the prices" should be moved from Iteration 2 to Iteration 3, without moving it in the sequence. To place the items in a sequence, add an extra column that is named Rank to the spreadsheet, and insert integers that denote the sequence. Order the spreadsheet by this column. The ranks will not be stored in Team Foundation Server, but you can save the spreadsheet. When you open the spreadsheet again, click any cell in the work item table, and then click Refresh on the Team tab.  
  
 Product planning considers the priorities of the features and the development costs. Priorities come from the business stakeholders, with some guidance about risk from the developers. Cost estimates come from the developers. To get an accurate idea of the costs, the development team must have already done some work on the architecture of the product and might need some experience from the early iterations. For this reason, the cost estimates should be refined at every product plan review.  
  
##  <a name="IterPlan"></a> Iteration planning  
 After the product plan review, plan the iteration. The product plan determines the features that will be delivered by the end of the iteration. The iteration plan determines what work the team will do to implement and test the features.  
  
 The following activities are part of iteration planning:  
  
-   Create tasks for development and testing, and link them as children to the feature requirements.  
  
-   Create test cases for the aspects of the customer requirements that are to be developed in each feature. The test cases should be linked to the customer requirements so that you can monitor how complete the requirements are.  
  
 You can also link test cases to the features so that you can track the correspondence between features and requirements. The feature should not be marked complete until the linked test cases pass.  
  
 For more information, see [Plan an iteration](guidance-plan-an-iteration-cmmi.md).
