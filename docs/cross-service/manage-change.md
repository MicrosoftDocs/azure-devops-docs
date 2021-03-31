---
title: Manage change, Agile methods
titleSuffix: Azure DevOps
description: Learn about the tools and features available to manage change when using Agile methods  
ms.technology: devops-agile 
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 03/30/2021
---
 

# Manage change 

[!INCLUDE [temp](../includes/version-vsts-only.md)]

Managing change is an aspect of managing requirements, your project plan, and sprints. This article provides an overview of the types of changes to monitor and methods for managing those changes. 

> [!NOTE]
> *Change management is defined as the methods and manners in which a company describes and implements change within both its internal and external processes. ... Developing a structured approach to change is critical to help ensure a beneficial transition while mitigating disruption. &mdash;[Asq.org](https://asq.org/quality-resources/change-management)*  

In keeping with the Agile manifesto that encourages "*Responding to change over following a plan*, how should you manage change? 
 
In keeping with Agile methods, you want to keep your change management process lightweight. The focus here is to gain insight into the types of changes that are occuring, where they arise, and how they impact the team in their ability to deliver. When managing change, consider your business requirements to meet the following scenarios.   

> [!div class="checklist"]  
> - Define and track status of change  
> - Analyze and prioritize change requirements  
> - Monitor and report on changes  
> - Keep stakeholders and teams informed of changes.   
 
 
This article provides best practices and guidance for managing change. It also maps Agile change management tasks by project managers to the tools Azure DevOps supports. More detailed information is provided under [Related articles](#related-articles). 

## Where does change arise? How can we minimize change?  

Changes to a software development project can occur from a number of areas, such as the following: 

- Business needs and customer needs change  
- New priorities arise 
- Feature requirements change as new information occurs or dependencies are discovered 
- Resources and organizations change    
- Development or testing takes longer than expected.

### Minimize changes that are avoidable 

While some changes are unavoidable, other types of changes can be avoided or their impact minimized. Many of these types of changes arise when a team is new to Agile methods and may not have completely adopted an Agile culture. Such types of changes often introduce scope creep during a sprint or release.  

> [!NOTE]
> *What is Scope creep? Scope creep occurs when the deliverables or features of a project expand from what was originally defined, without a commensurate change in additional time or budget.*  

To minimize avoidable changes, minimize the occurrence of the following.  
- Unclear requirements and acceptance criteria  
- Unclear project scope and priorities
- No change management process agreed to by the team 
- Poor estimates on planned work
- Not negotiating requests for new work  
- Allowing a team member to focus  on developing what they believe to be best rather than what is required 
- Poor communication within the team when changes occur 
- Lack of stakeholders and customer input around change requests  
- Lack of proactive raising of issues by team members.   
 
### Adopt best change management practices

To avoid some of these undesirable changes, you'll want to integrate  best change management practices into your organization culture. These include: 
  
- Continuous improvement 
- Agile practices and an entrepreneurial mindset  
- Transparent operations 
- Daily communication 
- More upfront work to minimize change 
- Early engagement of the change
- Consistent communication
- Senior leader engagement as needed.

## Goals for managing change

To mitigate problems that arise from change, Agile project managers focus on the following goals to manage change: 

- Ensure customer needs are understood and properly scoped and communicated   
- Control scope changes and minimize scope creep  
- Meet business objectives as well as organization, team, and human objectives  
- Keep everyone informed  
- Develop contingency plans in the event of change   
- Identify planned, completed, and incomplete work  
- Support a change management process  
- Assist teams in their continual improvement processes.   

 
## Best practices for managing change

Good practice is to constantly refine the backlog to ensure acceptance criteria is well defined and your team is building the software your customers want. 
 
- Analyze and triage change requests
- Determine the scope impact on current and planned work 
- Assess the risks of accepting or rejecting the change 
- Eliminate as many approvals as possible 
- Have a light change control form as needed 
- Keep all stakeholders and teams involved.  

### Questions to ask before accepting a change

- Does it serve the sprint goal?    
- Is there a clear business value for the change? 
- Upon release, will the customer use the result of the scope change?
- What is the urgency for the change request?
- If new scope is added to the sprint backlog, is there something that can be removed? 

### Avoid scope creep  

Some practices that help avoid scope creep are: 

- Know your project goals from the start 
- Clearly document requirements and acceptance criteria
- Use project management software to keep everyone on track
- Create a change control process
- Set and follow a clear schedule
- Properly communicate with stakeholders and your team
- Protect your team against "gold plating", a practice of making changes to a project that are outside of the original agreed-upon scope.  


### Manage change at the product plan level 

You can minimize the need to track changes by following these suggestions: 

- Constantly refine the product plan and product backlog for dependencies, risks 
- Ensure the acceptance criteria and requirements are well understood at the start of a sprint 
- Work to minimize accepting changes after the start of the sprint, while still adhering to Agile principles 

> [!NOTE]
> *Continuous Improvement is a Scrum approach in which the team learns from experience and stakeholder engagement to constantly keep the Prioritized Product Backlog updated with any changes in requirements.*

 
## Options for tracking change 

You can track changes informally or formally. The more informal tracking, while lightweight in process, leads to less capability to track the change. In the end, the way you track changes should mesh with the change management culture established in your organization. 

The methods you adopt will depend on several factors, such as the following:
- Change management processes adopted by your organization
- The need to maintain an audit trail 
- Communicate changes occurring across teams.

You have several choices for tracking change. From most lightweight to most robust, you can use one or more of the following methods: 

- Track changes to requirements within the requirement work item through discussions, changes to acceptance criteria, or attachments
- Add a *change* tag to work items to support tracking changes to the scope of work 
- Set up notifications to automatically communicate change within your team or organization 
- Add a bug that tracks a change in scope or additional work 
- Add a change request work item type to formally track and log change requests to the product backlog.   

With any of these methods, you can generate a query, review and triage the change. In many cases, how you choose to track change should align with how you and your team choose to monitor and report the scope of change. When early on in the adoption of Agile methods, the need to monitor and track change may be greater than when a team has managed to forge an Agile culture. 

### Change request form 

To formally track change, you can define a change request work item type, similar to the one shown in the following image for the [Capability Maturity Model Integration (CMMI) process](/azure/devops/boards/work-items/guidance/cmmi-process).

> [!div class="mx-imgBorder"]  
> ![Change request work item form.](media/manage-change/change-request-form.png) 

This form provides rich-text fields to capture the impact of the change to the following areas: 
- Architecture
- User experience
- Test
- Design and development
- Technical publications 

You can adopt this form or customize your own to track the changes of most interest to your organization's needs. You can also customize your backlog to have change requests appear on your backlog along with other user stories or requirements. Also, you can customize your backlogs and boards to manage change request work items alongside requirements. 

### Ensure acceptance criteria is well defined

Acceptance criteria defines what "done" means. It clearly describes the conditions that the team should use to verify whether a requirement or bug fix has been fully implemented. Typically, you want to capture these criteria within the work item. Clear acceptance criteria helps team estimate work and develop tests to ensure the criteria has been met.  

You can specify acceptance criteria for individual requirements and for sprints. Clear definition and shared understanding of acceptance criteria ensures that all team members understand the scope of work. 

Here are two examples of defining acceptance criteria.  

- **Example 1: A Product Backlog Item is considered "Done" when the following objectives have been met:**

	- Solution builds successfully.
	- Code written and merged into main branch
	- Unit Tests implemented on all features to an appropriate code coverage
	- All regression tests run and pass
	- All acceptance criteria met
	- Code has been peer reviewed and comments addressed
	- User Story moved to Resolved state
	- Remaining hours for tasks set to zero and tasks closed.
	- No open Sev1 or Sev2 bugs
	- Deploys successfully to non development environment (automated)
	- Static Code Analysis is run with results no worse than the baseline.

- **Example 2: A Sprint is considered "Done" when  the following objectives have been met:**
	- The time period allocated for the Sprint has passed
	- Unfinished work has been moved to the Backlog
	- Completed work has been deployed to target environment(s) and demoed in a Sprint Review to the Product Owner
	- Sprint Summary email has been sent to the team detailing:
	- User Stories Completed
	- Velocity of the sprint
	- Sprint Burndown
	- Notable accomplishments, highlights, or milestones that were hit
	- Retrospective conducted.
 
## Monitor and report on changes 
 
Teams can monitor changes through the following methods: 
- Work item queries 
- Team velocity charts 
- Sprint burndown and release burndown charts  
 

### Work item queries 

With queries you can find and triage a list of change management requests or work items tagged with a change management tag. You can also use the Was Ever operator to determine if work went through a ... 

In addition, you can filter work items that 
- Monitor and review change additions - query by tag or work items 
- Monitor scope creep - sprint burndown 
- Review was ever queries 

### Team velocity and unplanned work  

The team velocity chart provides several pieces of information. This chart shows how much work was planned and how much was completed. Viusally, you can determine how often work was added to a sprint after the sprint began. As shown in the following image, the team velocity for the past 10 sprints shows a pattern of adding work after the sprint start date. 

:::image type="content" source="media/manage-change/velocity-chart-scope-creep.png" alt-text="Screenshot of Velocity chart showing scope creep":::


### Sprint burndown and scope creep 

Another chart to review for scope creep is the sprint burndown chart. As shown in the following image, a number of work items were added after the start of the sprint.   

:::image type="content" source="media/manage-change/sprint-burndown-scope-increase.png" alt-text="Screenshot of Sprint burndown showing scope creep":::

With Azure Boards, you can review the sprint burndown charts for each sprint and each team to determine the degree of scope creep introduced into each sprint. 

## Get notified of changes 

Azure DevOps provides a robust alert system, allowing project members to set alerts for themselves, a team, or a project.   

As changes occur to work items, code reviews, source control files, and builds, you can receive email notifications. For example, you can set an alert to be notified whenever a bug that you opened is resolved or a work item is assigned to you. You can set personal alerts, team, project, or organization alerts. 

To support change management, you can define team alerts for the following instances: 

- A requirement or work item is tagged with a change request tag 
- A formal change request work item is filed 
- Work is added to a sprint after the sprint has started 

<a id="related-articles" />

## Related articles 

To learn more about any of the concepts introduced in this article, refer to the following resources. 

#### Industry articles

- [How to Create the Best Agile Change Management Process](https://www.mindville.com/blog/create-the-best-agile-change-management-process) 
- [Managing Change Requests in Scrum](https://www.infoq.com/news/2008/12/change-requests-in-scrum/) 
- [Identify And Avoid Project Scope Creep](https://thedigitalprojectmanager.com/scope-creep/)
- [5 Implications for Change Management in an Agile World](https://www.imaworldwide.com/blog/5-implications-for-change-management-in-an-agile-world)
- [Change Management meets Agile, how does that work?](https://www.andchange.com/themes/change-management-meets-agile/)


#### Agile and Agile culture

- [What is Agile?](/azure/devops/learn/agile/what-is-agile)
- [Agile culture](../boards/plans/agile-culture.md) 
- [Best practices for "light-weight" Agile project management](../boards/best-practices-agile-project-management.md)
- [Scaling Agile - Practices that scale](../boards/plans/practices-that-scale.md) 


#### Work items and process guidance 

- [Acceptance criteria](/azure/devops/boards/backlogs/best-practices-product-backlog#acceptance-criteria)
- [Definition of Done](/azure/devops/boards/boards/definition-of-done)
- [Manage change using Change request form](/azure/devops/boards/work-items/guidance/cmmi/guidance-manage-change)  
- [Add work item tags to categorize and filter lists and boards](/azure/devops/boards/queries/add-tags-to-work-items) 
- [Customize your backlogs or boards (Inheritance process)](/azure/devops/organizations/settings/work/customize-process-backlogs-boards)

#### Monitor and report on progress

- [Velocity metrics and usage guidance](/azure/devops/report/dashboards/velocity-guidance)
- [View or configure team velocity](/azure/devops/report/dashboards/team-velocity)
- [Burndown guidance, scope management](/azure/devops/report/dashboards/burndown-guidance)
- [Cumulative flow, lead time, and cycle time guidance](/azure/devops/report/dashboards/cumulative-flow-cycle-lead-time-guidance)

#### Notifications

- [Default and supported notifications](/azure/devops/notifications/oob-built-in-notifications) 
- [Manage personal notifications](/azure/devops/notifications/manage-your-personal-notifications)
- [Manage notifications for a team or group](/azure/devops/notifications/manage-team-group-notifications)
  
 
#### Maintain specifications and share information 

- [About Wikis, READMEs, and Markdown](../project/wiki/about-readme-wiki.md)
- [Share information within work items and social tools](../boards/queries/share-plans.md)

  