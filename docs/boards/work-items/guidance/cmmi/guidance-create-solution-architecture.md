---
title: Create a solution architecture in Azure Boards
titleSuffix: Azure Boards
description: Learn how to investigate alternative architectural strategies to create good architecture in Azure Boards. 
ms.service: azure-devops-boards
ms.custom: archive-candidate
ms.assetid: 77707311-8835-4bc8-9b28-17534d7a7d9c
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 10/27/2021
---

# Investigate architectural strategies and create a solution architecture

[!INCLUDE [version-lt-eq-azure-devops](../../../../includes/version-lt-eq-azure-devops.md)]


Part of creating a good architecture is investigating alternative architectural strategies. Alternative strategies have different benefits that are based on platform selection, technologies that are used, and code reuse. Each strategy is designed and proofs of concept are built to further investigate the costs and benefits of each strategy. The strategies are assessed against product and quality requirements, and ultimately a strategy is chosen to implement the product. Finally, security and performance are architectural concerns for which work must be done over the entire product.  
  
 
  
##  <a name="CreateAlternative"></a> Create alternative architecture partitioning designs  
 The problem is analyzed and different approaches are considered. A group of requirements are selected that represent key business and technological challenges. Examine the characteristics of these challenges, such as integration of legacy systems, and predict future needs based on current needs, reusability of code, and maintenance costs.  
  
### Create an application diagram  
 Using the domain model and requirements as input, create an application diagram that represents the core logical elements of the system. This diagram will later be partitioned into system diagrams. Alternative partitioning schemes will be considered and evaluated.  
  
 One way to represent an application diagram is as a Unified Modeling Language (UML) use case diagram. This type of diagram can show the major subsystems and their dependencies. Also, you can place use cases in each subsystem to show which subsystem manages each user scenario.  
  
### Establish evaluation criteria  
 Determine which criteria to use to identify requirements and scenarios that represent significant architectural challenges. Consult the existing enterprise architecture documents for criteria. Review any business requirements, technical requirements, and enterprise standards that must be applied to new applications. Capture other criteria that are known to be architecturally significant, such as integration with legacy systems, reusability of code, reusing existing vendor libraries and platforms, and controlling maintenance costs. Capture other criteria that represent risks and cost when implementing a technical solution.  
  
### Select a candidate group of requirements  
 Evaluate each quality of service requirement and product requirement against the evaluation criteria. If a requirement represents an architectural challenge, consider it a candidate for modeling. For example, a requirement that the new product must support older customer databases meets the criteria of integrating with legacy systems. Such a requirement is a candidate for modeling how the integration would work.  
  
### Select a candidate group of scenarios  
 Evaluate each scenario against the evaluation criteria. If a scenario represents an architectural challenge, consider it a candidate for modeling. For example, a scenario in which the user downloads a client update meets the criteria that concerns maintenance costs. Such a scenario is a candidate for modeling how best to handle client updates.  
  
### Reduce the candidate group  
 Review the candidate scenarios and requirements. Remove scenarios and requirements that duplicate the evaluation criteria or are better represented by other scenarios and requirements. Trim the candidate group to a core group that represents the key architectural challenges, risks, and costs of the new application. Keep the scenarios and requirements that best represent the evaluation criteria, that present the most risk, and that present the most potential cost when architecting a technical solution. Keep the scenarios and the requirements that are the most comprehensive or key parts of the application.  
  
### Create partitioning criteria  
 Using the requirements as motivation, analyze established architectural patterns (such as fa&ccedil;ade or model-view-controller), and identify potential candidates for implementation. Identify candidate patterns through their motivation, and consider their design tradeoffs related to coupling, cohesion, extensibility, adaptability, and flexibility. Select a set of candidates for implementation as alternatives for assessment.  
  
<a name="Design"></a> 
##  Design system architecture and deployment  
 The system architecture defines the groupings and configurations of elements that are identified in the application diagram. System diagrams are created that capture the system architecture for each possible architecture approach. Deployment diagrams show the deployment steps that are based on dependencies and core functionality. An infrastructure architect creates a logical datacenter diagram that describes the logical structure of the datacenter where the application will be deployed. The deployment diagrams are validated against the logical datacenter diagram to ensure that the systems can be deployed.  
  
### Create a system model  
 The architect and the lead developer create system diagrams from the application diagram. Through system diagrams, you can design reusable application systems as units of deployment by composing them from elements on the application diagram. You can also design larger and more complex systems that contain other systems so that you can use them in distributed system scenarios and abstract the details of applications in those systems. Check in each new diagram file to version control.  
  
 You can represent system diagrams in Visual Studio in the following ways:  
  
- Use case diagrams. The main user scenarios are represented as use cases, and the major components of the system are shown as subsystems. Each use case can be placed inside the subsystem that deals with it. For more information, see [UML Use Case Diagrams: Guidelines](/visualstudio/modeling/uml-use-case-diagrams-guidelines).  
  
- UML component diagrams. These diagrams let you show communications channels between the components, in addition to dependencies. You might also want to create class diagrams to describe the types that are visible at the interfaces to the components, and you can create sequence diagrams to show their interactions. For more information, see [UML Component Diagrams: Guidelines](/visualstudio/modeling/uml-use-case-diagrams-guidelines), [UML Class Diagrams: Guidelines](/visualstudio/modeling/uml-use-case-diagrams-guidelines), and [UML Sequence Diagrams: Guidelines](/visualstudio/modeling/uml-use-case-diagrams-guidelines).  
  
- [Layer diagrams](/visualstudio/modeling/layer-diagrams-guidelines). A layer diagram describes the block structure of the application. It shows only components and the dependencies between them. It has the benefit that, after the code is written, you can validate the code and the dependencies against the diagram. For more information, see [Layer Diagrams: Guidelines](/visualstudio/modeling/layer-diagrams-guidelines).  
  
  For each subsystem, you can create a package that describes its types and behavior in more detail. For more information, see [Define packages and namespaces](/visualstudio/modeling/define-packages-and-namespaces).  
  
##  <a name="CreateProofs"></a> Create proofs of concept  
 Significant risks to the project can be mitigated by creating an architectural proof of concept. It's important to address risk as early as possible in the project so that key strategic and architectural decisions can be made while it's still easy to modify fundamental pieces of the architecture. Creating early proofs of concept reduces overall project risk and unknowns. Lower project risk and fewer unknowns make planning and estimating in later iterations more accurate. Proofs of concept can be temporary and discarded after the issues have been addressed, or they can be built as the foundation of the core architecture.  
  
### Examine risk  
 Understand the elements that lead to the identification of the risk or architectural decisions. Examine related scenarios and quality of service requirements. Check for any target environment implications.  
  
### Plan the approach  
 Determine the form of the proof of concept that is needed. Use the application and system diagrams to help plan. Solve only the architectural problem that is identified by the risk. Look for the simplest resolution.  
  
### Build and run the proof of concepts  
 Build the proof of concept. You can implement the proof of concept from the application diagram. Maintain focus on the problem to be solved. Deploy the proof of concept to a physical environment that is congruent to the logical datacenter diagram. The physical environment should match the settings of the logical datacenter diagram as closely as possible. Test the proof of concept against the high-risk issues.  
  
##  <a name="Assess"></a> Assess alternatives  
 The Lightweight Architecture Alternative Analysis Method (LAAAM) is used to help decide between different architectural strategies for building an application. The LAAAM typically takes one day to complete. Start by building a utility tree that describes key quality and functional drivers of the application that are based on requirements. Each driver is written as a scenario that takes the form of a statement that is written as context, stimulus, and response. Use an assessment matrix to evaluate how well each strategy addresses each scenario.  
  
### Create a utility tree  
 Examine quality of service requirements and product requirements to determine the key drivers of quality and function in the application. Construct a utility tree that represents the overall quality of the application. The root node in the tree is labeled Utility. Subsequent nodes are typically labeled in standard quality terms such as modifiability, availability, and security. The tree should represent the hierarchical nature of the qualities and provide a basis for prioritization. Each level in the tree is a further refinement of the qualities. Ultimately, these qualities become scenarios.  
  
### Construct an assessment matrix  
 For each leaf in the utility tree, write a scenario. The scenario is in the form of context, stimulus, and response (for example, "Under typical operation, perform a database transaction in fewer than 100 milliseconds").  
  
 Create a spreadsheet or a table, and enter each scenario as a row in this assessment matrix. Enter each architectural strategy as a column. At each intersection of strategies and scenarios, enter a rating on a scale between 1 and 4.  
  
 The rating should take into account the following factors:  
  
- **Development cost** Is this solution easy or difficult to implement? What is its impact on other areas?  
  
- **Operational cost** At run time, will this solution work easily, or will it adversely affect usability, performance, and so on?  
  
- **Risk** Is this solution certain to address the scenario well, or are there unknown costs? Could this solution have an adverse impact on the team's ability to accommodate future enhancements in the requirements?  
  
  If a proof of concept has been built for a strategy, use information from that proof of concept to help determine the values.  
  
  At the bottom of the table, sum the values from the scenarios. Use these figures as an input to the discussion that leads to decisions on the alternative architectures.  
  
  Upload the completed assessment matrix to the project portal.  
  
##  <a name="Select"></a> Select the architecture  
 After the assessment matrix is created, a review meeting is held to determine which architecture to use in the next iteration. The assessment matrix and information that is discovered from creating the proofs of concept is used to help make a decision. After the architecture is selected, diagrams for the architecture are checked in as the reference solution, and a justification document is created that captures the reasons behind the selection.  
  
### Prepare for review  
 The architect and the lead developer identify the appropriate reviewers for reviewing the proposed architectures and circulate documentation for the architectures to each participant.  
  
### Review system architecture and deployment architecture  
 During the review meeting, the system diagrams, the deployment report, and the logical datacenter diagram are reviewed. The goal is to choose an architecture to implement in the next iteration.  
  
 Consider the assessment matrix rankings for each architecture to help evaluate the suitability of each architecture. Consider any information that is discovered from the proofs of concept such as cost or complexity that is involved with implementing the different architectures. If the logical datacenter diagram represents an existing datacenter that cannot be modified, don't review it. If a datacenter is being created, review the diagram for deployment considerations. Select the architecture to be used. Review the architectural concept against the scenarios to validate that the solution meets the customer needs and is complete.  
  
### Create a reference solution  
 Create a justification document that captures the decisions of the meeting. Upload it to the project portal. For the selected architecture, check in any application, system, or logical datacenter diagrams as the reference solution to use for implementing features in the next iteration. Communicate to the entire team and any dependent teams the decision on what architecture is selected for the next iteration.  
  
##  <a name="Develop"></a> Develop a performance model  
 Performance modeling is used to identify and address potential performance issues in the application. A performance model is developed from a quality of service requirement, which is then broken into development tasks. Each development task is assigned a performance budget for implementation.  
  
 Identify the scenarios that are linked to the performance quality of service requirement. Map the development tasks to the scenarios. From the quality of service requirements list, determine the workload for the application. Using the workload estimates and the quality of service requirements list, identify the performance goals for each key scenario. These include goals such as response time, throughput, and resource use. Identify the performance-related resources that have been budgeted to meet the performance goals. Some examples of performance-related resources are execution time and network bandwidth. Determine the maximum allowable allocation of each resource.  
  
 Spread the budgeted resources across the processing steps for each scenario. When not sure of how to assign the budget, make best guesses, or divide the resources evenly among the steps. Budgeting is refined during validation. Attach or write the allocation on the appropriate development task.  
  
 Find budget allocations that pose a risk to meeting performance goals. Consider tradeoffs that help meet performance goals such as design and deployment alternatives. Reevaluate quality of service requirements if necessary.  
  
 Identify the scenarios that don't meet budget allocations. Measure the performance of the scenarios. Use prototyping in early iterations if code isn't available. Repeat the budgeting, evaluation, and validation steps as necessary by using data that is acquired during validation.  
  
## Develop a threat model  
 For more information, see the following page on the Microsoft Web site: [Security Developer Center](https://go.microsoft.com/fwlink/?LinkId=158810).