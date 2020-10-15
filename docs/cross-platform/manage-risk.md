---
title: Manageand monitor risks, Agile methods
titleSuffix: Azure DevOps
description: Learn about the tools and features available to manage risk when using Agile methods  
ms.technology: devops-agile 
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 10/05/2020
---



# Manage risks   

[!INCLUDE [temp](../includes/version-vsts-only.md)]

 
Risk management is built into scrum roles, sprints, and events. As a project progresses in an agile environment, the risk of that project declines. The key to managing agile software development risks is to ensure your process encourages flexibility. A flexible process helps team members adapt quickly to changing product needs, promotes rapid and frequent delivery, and contains change management controls.

Traditional planning does risk management up front  
Agile looks for risk throughout the lifecycle 

- Traditional Risk Management and an Agile lifecycle are complimentary
- Traditional Risk Management is done up front and tries to envision what could
- go wrong all the way to the end of the project
- Agile Risk Management is done more by practices then envisioning. Many
- Agile practices look to identify and mitigate risk throughout the project.
- The level of traditional risk management performed should correlate to
- complexity, duration, and experience with the type of project being pursued.


> [!NOTE]
> *Risk management is a methodology, carried out throughout the development process to identify, manage and control risks evolved before and during the development process. Basically, three types of activities are covered under the risk management process: Risk Identification, Risk Analysis, and Risk Control.*

Minimize these types of change: 
- Poorly understood acceptance criteria 
- what more? 


From the point of this article, the change to track is those that occur once a sprint starts. 
ANd, in keeping with agile, want to keep it lightweight. The focus here is to gain insight into the types of changes that are occuring, where they arise, and how they impact the team in their ability to deliver. 



Where does change come from: 
- business needs 
- pulse surveys 
- Sponsorship 
- Change management culture

= Insights into change 
- Measure churn 
- 


Iterative 

Agile requirements management supports the following scenarios.   

> [!div class="checklist"]  
> - Track and monitor risks 
> - Remove/decrease single points of failure 

Agile change management is built on the following four main values:   

> [!div class="checklist"]  
> - Transparency 
> - Collaborative planning 
> - Customer involvement 


Risk implies that actual outcomes may vary, sometimes significantly, from desired outcomes. Both the probability of this variance and the degree of variance between actual and desired outcomes is encapsulated in the term "risk." When you manage risk, you strategically minimize the variance between the outcome that you want and the actual outcome.  
  
 The ability to identify, classify, analyze, and manage risks is an organizational capability that is required to achieve a Standard CMMI Appraisal Method for Process Improvement (SCAMPI) appraisal at level 3. For more information about CMMI, see [Background to CMMI](/azure/devops/boards/work-items/guidance/cmmi/guidance-background-to-cmmi).  
  
 By managing these event-driven risks, a significant contribution is made to the overall goal of managing risk at the project, portfolio, and organizational levels. Good event-driven risk management contributes to an outcome that is satisfactory to all stakeholders and that deviates little from the initially desired outcome. It contributes to an expectation of "no surprises!"  
  
##  Define risks  
 Thinking of risks in this manner is sometimes referred to as the event-driven risk model. This implies that a list of risks is a list of potential future events. Each risk describes some event that may occur in the future. It may include some information about the probability of occurrence. It should include a description of the impact that such an occurrence would have on the project plan. It may also include a description of ways to reduce the probability of occurrence and ways to mitigate the impact of occurrence. It may also include suggested forms of recovery after an occurrence.  
  
 For each risk that is identified, create a risk work item in the project.  
  
##  The risk work item  

 The Risk Management (RSKM) process area in the CMMI focuses on the management of these event-related risks. MSF for CMMI Process Improvement and Visual Studio Team Foundation Server make this easier by providing the risk work item type. By using the risk work item type, you can define and track a list of risks. It provides fields to describe the risk, the probability of occurrence. It also provides fields for actions that can be taken to reduce the probability of occurrence, mitigate the impact, and implement contingency plans for recovery in the event of an occurrence.  
  
 The initial project risks should be identified during project planning. The risk list should be revisited during iteration planning at the start of each project iteration.  
  
 The work item form for a risk stores data in the fields that the following illustration shows:  
  
 ![Risk work item form](/azure/devops/boards/work-items/guidance/cmmi/media/procguid_cmmiriskform.png)  
  
##  Select actions to be taken  
 After you create a list of risks and they have been sufficiently analyzed, it is time to decide what, if any, actions will be taken to manage these risks. Are there any actions that will reduce the probability of occurrence that you want to take now or describe in an iteration plan? Are there any actions that would mitigate the impact of occurrence that you want to take now or describe in an iteration plan? Taking actions to reduce or mitigate risks costs time and resources. This must be traded against using those resources and the available time to move the project work forward and turn the scope into working software. Document the risk reduction and mitigation actions that you plan on the Mitigation tab of the risk.  
  
 The overall risk profile for the project must be considered when you decide when to take action to reduce the probability or mitigate the impact of risks. If the risk profile says "any loss of life is unacceptable," any risk that might cause a loss of life must be managed, and reduction and mitigation actions must be planned and taken.  
  
 You should ensure that risks are managed in line with project governance constraints and in an appropriate balance with the need to achieve delivery of all value-added work within the available time and budget.  
  
 If a risk is selected for reduction of probability or mitigation of its impact, plan this activity by breaking it into task work items and link each to a risk work item.  
  
## Monitor risks  

 Project risks should be monitored regularly.  
  
 Use the risks query to monitor risks. Scan each active risk on the list, and consider whether the probability of occurrence has increased, whether the potential impact has changed, and whether any mitigation trigger events have occurred. If there is any material change in the information that is captured for a risk, update the work item. Also, consider whether further action needs to be taken to reduce the risk or to mitigate its impact.  
  
 The current risk status of the project should be communicated. Reports should include information about any risks that were recently uncovered, any reduction or mitigation actions that are in progress, and any change in status that would cause a change in the earlier assessment of the risk.  
  
## Make contingency plans  
 For risks where a recovery action was defined, a plan should be made to implement the contingency if the event of occurs. For example, if there is a risk that a server might fail and the contingency is to borrow hardware from another department, you should have a plan to enact this if the server fails. Making plans in advance reduces the coordination challenge if the event occurs. A higher maturity organization with a greater capability for risk management makes contingency plans and knows how to enact them without significant impact to other project activities. Lower maturity organizations suffer panic and chaos while trying to recover from unexpected events. An organization that seeks a SCAMPI appraisal at level 3 should have documented evidence to show that contingency plans were made and, when appropriate, followed.  
  
 Break out the contingency plan into a series of tasks or actions to be taken. Estimate each task. Create a schedule and a recommended list of assigned personnel. Describe all the resources that will be required to execute the contingency plan.  
  
 Add the contingency plan to the risk work item on the Contingency Plan tab, or add the plan as an attachment.
 risk reduction approach to software development


## Types of risk

 - budget, finance 
 - personnel
 - knowledge
 - productivity
 - time 
 - compliance 
 - security 

## Risk response

- Risk avoidance
- Mitigation
- Acceptance

create Contingency Plans for Risks with a High Rating


Stakeholder requirements in conflict 
Estimates not based on historical throughput
Team members spread to thin 
Project approved without team buy-in 
Dependencies on third parties or other teams  

## Track risks   

Formally tracking risks using Issue or Impediment work item types is recommended. That way, you can link the issues to requirements or other work items and periodically review the status of each.
  

<a id="related-articles" />


## Related articles 

To learn more about any of the concepts introduced in this article, refer to the following articles. 

#### Industry articles

- [The Key To Managing Risk During Agile](https://clearbridgemobile.com/how-to-manage-software-development-risks-in-an-agile-environment/)
- [Risk Management in an Agile Lifecycle](https://www.agilealliance.org/wp-content/uploads/2016/01/Agile-Risk-Management-Agile-2012.pdf)
 

<!--- 
 
 
#### Agile and Agile culture

- [What is Agile?](/azure/devops/learn/agile/what-is-agile)
- [Agile culture](../boards/plans/agile-culture.md) 
- [Best practices for "light-weight" Agile project management](../boards/best-practices-agile-project-management.md)
- [Scaling Agile - Practices that scale](../boards/plans/practices-that-scale.md) 


#### Work items, work item types, and process models 

- [Manage issues or impediments](/azure/devops/boards/backlogs/manage-issues-impediments) 
- [Manage risks with the CMMI process ](/azure/devops/boards/work-items/guidance/cmmi/guidance-manage-risks)
