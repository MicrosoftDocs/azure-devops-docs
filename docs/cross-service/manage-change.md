---
title: Manage change, Agile methods
titleSuffix: Azure DevOps
description: Learn about the tools and features available to manage change when using Agile methods  
ms.technology: devops-agile 
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 10/15/2020
---
 

# Manage change 

[!INCLUDE [temp](../includes/version-vsts-only.md)]

Managing change is an aspect of managing requirements and your project plan. This article provides an overview of the types of changes to monitor and methods for managing change. 

> [!NOTE]
> *Change management is defined as the methods and manners in which a company describes and implements change within both its internal and external processes. ... Developing a structured approach to change is critical to help ensure a beneficial transition while mitigating disruption. Asq.org*  

In keeping with the Agile manifesto that encourages "*Responding to change over following a plan*, how should you manage change? 
 
In keeping with Agile methods, you want to keep your change management process lightweight. The focus here is to gain insight into the types of changes that are occuring, where they arise, and how they impact the team in their ability to deliver.  When managing change using Agile methods, you want to meet the following scenarios.   

> [!div class="checklist"]  
> - Define and track status of change  
> - Analyze and prioritize change requirements  
> - Monitor and report on changes  
 
 
This article maps Agile change management tasks by project managers to the tools Azure DevOps supports. More detailed information is provided under [Related articles](#related-articles).   


## Where does change arise?   

Very briefly, for the purposes of this article, valid changes can occur from a number of areas: 

- Business needs and customer needs change  
- New priorities arise 
- Feature requirements change as new information arises 
- Resources change, organizations change  
- New dependencies are discovered  

Less valid changes that can occur and contribute to scope creep include - many of these arise as Agile culture hasn't been completely adopted.  
- A team member is unclear on a requirement or project scope or acceptance criteria
- A team member is focused on developing what they believe to be best rather than what is required 
- One or more team members make decisions without communicating with others 
- Requirements aren't clearly articulated 
- Requirements aren't well prioritized 
- No agreement within the team on how to handle change
- Poor estimates
- New requests aren't negotiated
- Stakeholders and customer input isn't sought out early enou, well enough, complete
- Team members don't raise issues proactively 
- Testing takes longer than expected 
 

Best change management practices must be integrated into the organization culture. 
- Continuous improvement 
- Adoption of Agile practices and an entrepreneurial mindset  
- Transparent operations
- Daily communication 
- More upfront work to minimize change 
- Early engagement of the change
- Consistent communication
- Senior leader engagement
 

B- usiness Case for Action to define what the change is
- From-To Definition to identify gaps between “is” and “will be”
- Key Role Mapping to identify where Sponsors are needed, and who specifically these individuals are by name
- Readiness Planning to have strategies and tactics available to manage resistance
- Communication Planning by audience, with feedback loops to gather feedback that identifies potential sources of resistance

Minimize these types of change: 
- Poorly understood acceptance criteria 
- what more? 

Log change to the backlog or change tracker
Eliminate as many approvals as possible
Have a light change control form, if necessary
Keep the stakeholders and operations involved


## Goals for managing change

Agile project managers focus on the following goals when managing change: 

- Ensure customer needs are being met
- Control scope changes, minimize scope creep 

- Complete on time and within budget  
- Meet customer needs, requirements 
- Meet business objectives 
- Meet human objectives - organization, team objectives 
- Keep everyone informed 

- Develop contingency plans in the event of change 
- Identify planned, completed, and incomplete work
- Support a change management process

- Assist teams in their continual improvement processes 

> [!NOTE]
> *What is Scope creep? Scope creep occurs when the deliverables or features of a project expand from what was originally defined, without a commensurate change in additional time or budget.*  
 
 
## Best practices for managing change

Changes should be added to the backlog, tag 
Keep the process lightweight and eliminate as much waste as possible.


- Log changes to the backlog  
- Eliminate as many approvals as possible
- Have a light change control form as needed
- Keep all stakeholders and teams involved

#### Ensure Definition of DOne, acceptance criteria is well defined

The Definition of Done is the criteria necessary in order to consider something done or complete. It is most often created for User Stories to ensure the team agrees what is required to finish a story, but also can be created for Sprints themselves for the team to agree on when a Sprint is done.

Ensures that all team members (including the Product Owner) understand what is required for a User Story to be completed within a sprint. If this is not established early for a scrum team, it is possible to get to the sprint demo and have stories that team members think are done, but in reality, have not been fully implemented. "Wait, I was supposed to write automated unit tests too?"

**Example 1: A Product Backlog Item is considered “Done” when:**

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
- Static Code Analysis is run with results no worse than the baseline

**Example 2: A Sprint is considered “Done” when:**
- The time period allocated for the Sprint has passed
- Unfinished work has been moved to the Backlog
- Completed work has been deployed to target environment(s) and demoed in a Sprint Review to the Product Owner
- Sprint Summary email has been sent to the team detailing:
- User Stories Completed
- Velocity of the sprint
- Sprint Burndown
- Notable accomplishments, highlights, or milestones that were hit
- Retrospective conducted



#### Questions to ask before accepting a change

Does it serve the sprint goal?    
Is there a clear business value for the change? 
Upon release, sill the customer use the result of the scope change?
What is the urgency for the change request?
If new scope is added to the sprint backlog, is there something that can be removed? 

### Avoid scope creep  
1. Know your project goals from the start
2. Get serious about documenting requirements
3. Use project management software to keep everyone on track
4. Create a change control process
5. Set (and stick to) a clear schedule
6. Learn the proper ways to communicate with stakeholders and your team
7. Protect your team against “Gold plating”


## Options for tracking change 

The point is that when does change occur? Everything is iterative. Good practice is to constantly refine the backlog to ensure acceptance criteria is well defined and your team is building the software your customers want.  

You can track changes informally or formally. The more informal tracking, while lightweight in process, leads to less capability to track the change. In the end, the way you track changes should mesh with the change management culture established in your organization. 

The methods you adopt will depend on several factors, such as the following:
- Change management processes adopted by your organization
- The need to maintain an audit trail 
- Communicate changes occurring across teams ... .  

### Manage change at the product plan level 

From an Agile methodology point of view you can minimize the need to track changes by following these suggestions: 
- Constantly refine the product plan and product backlog for dependencies, risks 
- Ensure the acceptance criteria and requirements are well understood at the start of a sprint 
- Work to minimize accepting changes after the start of the sprint, while still adhering to Agile principles 

> [!NOTE]
> *Continuous Improvement is a Scrum approach in which the team learns from experience and stakeholder engagement to constantly keep the Prioritized Product Backlog updated with any changes in requirements.*



### Manage change during a sprint 
 
Here are the main ways you can track change: 
- Track changes to requirements within the requirement work item through discussions, changes to acceptance criteria, or attachments
- Add a *change* tag to work items to support tracking changes to the scope of work 
- Add a bug that tracks a change in scope or additional work 
- Add a change request work item type to formally track 
- Set up notifications to automatically communicate change within your team or organization 

#### Change request form 

To formally track change, you may want to define a change request work item type, similar to the one shown in the following image for the [Capability Maturity Model Integration (CMMI) process](/azure/devops/boards/work-items/guidance/cmmi-process).

> [!div class="mx-imgBorder"]  
> ![Change request work item form.](media/manage-change/change-request-form.png) 

This form provides rich-text fields to capture the impact of the change on the following areas: 
- Architecture
- User experience
- Test
- Design and development
- Technical publications 

You can adopt this form or customize your own to track the changes of most interest to your organization's needs. 
 
Also, you can customize your backlogs and boards to manage change request work items alongside requirements. 
 
## Monitor and report on changes    


How to monitor change? Goals and methods.  

- Monitor and review change additions - query by tag or work items 
- Monitor scope creep - sprint burndown 
- Review was ever queries 


### Monitor scope creep 

Two charts that can help with monitoring scope creep are the sprint burndown and release burndown charts. Sprint burndown provides a visual of how much work 

Monitor scope creep - sprint burndown 

Monitor scope creep - release period  


Questions for retrospective scope creep change management


  
 
<!---


Agile requirements management supports the following scenarios.   

> [!div class="checklist"]  
> - Define and track status of change requirements  
 
> - Determine what can ship and when  
> - Monitor and report on progress  
> - Control Scope Changes 
> - Identify planned, completed, and incomplete work 
> - Minimize scope creep  
> - Support a change management process

Early engagement of change manager
Consistent communication
Senior leader engagement
Early wins

 risk reduction approach to software development
-->

## Get notified of changes 

Azure DevOps provides a robust alert system, allowing project members to set alerts for themselves, a team, or a project.   

As changes occur to work items, code reviews, source control files, and builds, you can receive email notifications. For example, you can set an alert to be notified whenever a bug that you opened is resolved or a work item is assigned to you. You can set personal alerts, team, project, or organization alerts. 

To support change management, you can set up alerts to go out to your team for the following instances: 
- Change request is filed 
- A requirement is tagged with a change request tag 
 
 

<a id="related-articles" />


## Related articles 

To learn more about any of the concepts introduced in this article, refer to the following articles. 

#### Industry articles

- [Managing Change Requests in Scrum](https://www.infoq.com/news/2008/12/change-requests-in-scrum/) 
- [Identify And Avoid Project Scope Creep](https://thedigitalprojectmanager.com/scope-creep/)
- [5 Implications for Change Management in an Agile World](https://www.imaworldwide.com/blog/5-implications-for-change-management-in-an-agile-world)
- [Change Management meets Agile, how does that work?](https://www.andchange.com/themes/change-management-meets-agile/)

 
### Work items and process guidance 

- [Manage change using Change request form](/azure/devops/boards/work-items/guidance/cmmi/guidance-manage-change)  
- [Add work item tags to categorize and filter lists and boards](/azure/devops/boards/queries/add-tags-to-work-items)

#### Monitor and report on progress

- [View or configure team velocity](/azure/devops/report/dashboards/team-velocity)
- [Burndown guidance, scope management](/azure/devops/report/dashboards/burndown-guidance)

#### Notifications

- [Default and supported notifications](/azure/devops/notifications/oob-built-in-notifications) 
- [Manage personal notifications](/azure/devops/notifications/manage-your-personal-notifications)
- [Manage notifications for a team or group](/azure/devops/notifications/manage-team-group-notifications)


!--- 


#### Agile and Agile culture

- [What is Agile?](/azure/devops/learn/agile/what-is-agile)
- [Agile culture](../boards/plans/agile-culture.md) 
- [Best practices for "light-weight" Agile project management](../boards/best-practices-agile-project-management.md)
- [Scaling Agile - Practices that scale](../boards/plans/practices-that-scale.md) 


#### Work items, work item types, and process models 

- [About work items](../boards/work-items/about-work-items.md) 
- [Choose a process](../boards/work-items/guidance/choose-process.md)
- [About process customization and inherited processes](../organizations/settings/work/inheritance-process-model.md) 
- [Bulk add or modify work items with Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md)
- [About Area and Iteration Paths (sprints)](../organizations/settings/about-areas-iterations.md) 
- [Work tracking, process, and project limits](../organizations/settings/work/object-limits.md)


#### Backlogs and boards

- [Create your backlog](../boards/backlogs/create-your-backlog.md)  
- [Organize your backlog](../boards/backlogs/organize-backlog.md)  
- [Define features and epics](../boards/backlogs/define-features-epics.md) 
- [Refine your backlog](../boards/backlogs/best-practices-product-backlog.md) 
- [About teams and Agile tools](../organizations/settings/about-teams-and-settings.md) 
- [Tasks supported by Backlogs, Boards, Taskboards, and Plans](../boards/backlogs/backlogs-boards-plans.md)
- [Configure and customize Azure Boards](../boards/configure-customize.md)

#### Kanban 

- [Start using your Kanban board](../boards/boards/kanban-quickstart.md)
- [Add columns to your Kanban board](../boards/boards/add-columns.md) 
- [Customize cards](../boards/boards/customize-cards.md)
- [Filter your Kanban board](../boards/boards/filter-kanban-board.md)
- [Kanban best practices](../boards/boards/best-practices-kanban.md)

#### Scrum

- [Assign backlog items to a sprint](../boards/sprints/assign-work-sprint.md) 
- [Configure and monitor sprint burndown](../report/dashboards/configure-sprint-burndown.md) 
- [Scrum and best practices](../boards/sprints/best-practices-scrum.md)  

#### Dependency management 

- [Link user stories, issues, bugs, and other work items](../boards/backlogs/add-link.md) 
- [Triage work items](../boards/queries/triage-work-items.md) 

#### Milestone planning 

- [View or configure team velocity](../report/dashboards/team-velocity.md)
- [Forecast your product backlog](../boards/sprints/forecast.md) 
- [The Critical Path on Agile Projects](https://www.mountaingoatsoftware.com/blog/the-critical-path-on-agile-projects)
- [Running a lean startup on Azure DevOps](https://medium.com/@giladkhen/running-a-lean-startup-on-azure-devops-5934ced2cc42) 

#### Monitor and report on progress

- [Display rollup progress or totals](../boards/backlogs/display-rollup.md)
- [Review team Delivery Plans](../boards/plans/review-team-plans.md)

#### Maintain specifications and share information 

- [About Wikis, READMEs, and Markdown](../project/wiki/about-readme-wiki.md)
- [Share information within work items and social tools](../boards/queries/share-plans.md)



--> 