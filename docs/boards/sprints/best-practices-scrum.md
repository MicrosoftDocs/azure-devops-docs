---
title: Sprint and scrum best practices
titleSuffix: Azure Boards 
description: Learn best practices for planning effective sprints, managing technical debt, and optimizing your team's workflow in Azure Boards.
ms.service: azure-devops-boards
ms.custom: boards-sprints, engagement-fy23 
ms.assetid: 1E2F0BDC-C267-4724-86E8-E4BBD75B50B2
ms.author: chcomley
ms.reviewer: chcomley
author: chcomley
ms.topic: best-practice
monikerRange: '<= azure-devops'
ms.date: 03/24/2026
ai-usage: ai-assisted
---


# Sprint and scrum best practices 
 
[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

Scrum is an agile framework that helps teams deliver value incrementally through time-boxed sprints. This article covers best practices for sprint planning, daily Scrum meetings, sprint reviews, retrospectives, bug triage, and the Scrum Master role in Azure DevOps.

<a id="assign-work-sprint-meeting">  </a>

## Sprint planning meetings 

Sprint planning involves a negotiation between the product owner and the team to determine the focus and work for the upcoming sprint. Time-box the planning meeting to 4 hours or less. 

In the first part of the meeting, the product owner discusses the user stories that might be included in the sprint, shares information, and answers questions. These conversations can reveal details like data sources, user interface layout, response time expectations, and security or usability considerations. Capture these details in the backlog item form. This part of the meeting clarifies what the team must build.

As you plan, you might discover other requirements to add to your backlog. Keep the backlog well defined and in priority order. Setting a sprint goal helps the team stay focused on what's most important for each sprint.

After you plan your sprint, you can [share the plan](share-plan.md) with key stakeholders. 

For more information, see:
*	[What is Scrum?](/devops/plan/what-is-scrum)
*	[The Scrum Guide](https://www.scrumguides.org/scrum-guide.html)


<a id="set-sprint-goals">  </a>

## Set sprint goals
 
Scrum teams use sprint goals to focus their sprint activities. They often set this goal during the sprint planning meeting. The goal summarizes what the team wants to accomplish by the end of the sprint. By explicitly stating the goal, you create shared understanding within the team and help guide decisions when conflicts arise around priorities.
<a id="tips-from-trenches"></a>

## Tips from the trenches: Define sprint goals
 
The sprint goal defines what the product owner and the team consider as the ultimate target to accomplish that sprint. It's not a random selection of unrelated backlog items, but a short statement that captures what the team should accomplish. Normally the product owner defines the sprint goal before selecting items for the next sprint. The items for that sprint should all fit that common goal.

Sprint goals can be feature oriented, but might also have a large process component such as deployment automation or test automation. 

For example:
- This sprint focuses on a simple user story to prove the proposed solution works.
- This sprint implements security features that properly secure the administration section of the website.
- This sprint integrates the most important payment gateways so the team can start collecting payments.

Setting sprint goals helps the team stay focused, makes it easier to prioritize tasks within a sprint, and limits the number of stakeholders involved.

During the sprint review, the most important question is whether you achieved the sprint goal. How many stories you completed comes second. If the goal is accomplished, the sprint succeeds, even if not all stories are finished.

## Tips for successful triage meetings  

Fixing bugs represents a trade-off with other work. Use your triage meeting to determine how important each bug is against other priorities related to project scope, budget, and schedule.  

- Establish criteria for evaluating which bugs to fix and how to assign priority and severity. Bugs associated with high-value features (or significant opportunity cost of delay) or other project risks should get higher priority and severity. Store your triage criteria with other team documents and update them as needed.
- Use your triage criteria to determine which bugs to fix and how to set their State, Priority, Severity, and other fields. 
- Adjust criteria based on where you are in your development cycle. Early on, you might fix most of the bugs you triage. Later in the cycle, raise the bar to reduce the number of bugs you fix.
- After you triage a bug, assign it to a developer to investigate and implement a fix.

## Manage your technical debt 

Manage your bug bar and technical debt as part of your team's continuous improvement activities. The following resources offer useful guidance: 

- [Good and Bad Technical Debt (and how TDD helps)](https://blog.crisp.se/2013/10/11/henrikkniberg/good-and-bad-technical-debt) by Henrik Kniberg  
- [Managing Technical Debt](https://www.infoq.com/articles/managing-technical-debt) by Sven Johann & Eberhard Wolff  

## Tips from the trenches: Bug management

[Agile Bug Management: Not an Oxymoron](https://visualstudiomagazine.com/articles/2012/10/12/agile-bug-management.aspx)  
*by Gregg Boer, principal program manager, Visual Studio Cloud Services at Microsoft*  

### Address any known bug debt every sprint 

Every sprint, the team reviews bugs remaining in the bug backlog and dedicates capacity to get that known set down to zero or near zero. Whether this process takes one day, one week, or the entire sprint, the team fixes bugs first. Bugs found later within the sprint aren't part of the initial commitment. Unless they're high priority, they go on the bug backlog for the next sprint.

Many teams work in commitment-based organizations where management values the team's ability to meet commitments. Capacity planning against a known set of bugs makes sprint planning more deterministic and increases the chance of meeting commitments. New bugs discovered during the sprint aren't part of the initial commitment and can be addressed next sprint.

### Manage bug debt across an enterprise 

Organizations transitioning to a culture where they continually eliminate debt often face this question: How do you get teams to reduce their bug count without telling them exactly what to do? Leadership wants the team to change, yet gives the team autonomy to determine how. One option is to use a bug cap.

For example, consider a bug cap of three bugs per engineer. A team of 10 people shouldn't have more than 30 bugs in its bug backlog. If the team exceeds its cap, it stops work on new features until it gets under the cap. The team is expected to stay under its cap at all times, but decides how to do so. The bug cap ensures that teams don't carry bug debt too long and can learn from the mistakes that caused the bugs in the first place.

The bug cap covers only bugs in the bug backlog. Bugs found and fixed within the sprint in which a feature is developed are considered undone work, not debt.

While bugs contribute to technical debt, they don't represent all debt. Poor software design, poorly written code, or short-term fixes also contribute to technical debt — the extra development work that arises from these problems.

Track work to address technical debt as PBIs, user stories, or bugs. To track progress in incurring and addressing technical debt, consider how to categorize the work item and the details you want to track. You can [add tags to any work item to group it into a category of your choosing](../queries/add-tags-to-work-items.md).


<a id="scrum-master-role">  </a>

## Role of the Scrum Master  

Scrum Masters build and maintain healthy teams by employing Scrum processes. They guide, coach, teach, and assist Scrum teams in the proper use of Scrum methods. Scrum Masters also act as change agents to help teams overcome impediments and drive significant productivity increases.   

Core responsibilities of Scrum Masters include: 
*	Support the team in adopting and following Scrum processes. For example, don't let the daily Scrum meeting become an open discussion that lasts 45 minutes. 
*	Guard against the product owner or team members adding work after the sprint begins.  
*	Clear blocking issues that prevent forward progress. This work might require completing small tasks, such as approving a purchase order for a new build computer or resolving a conflict within the team.
*	Help the team resolve conflicts and issues that arise, and learn from the process.  
*	Ask questions that reveal hidden issues and confirm that communications are well understood by the entire team.  
*	Identify and address potential issues before they become major problems. It's easier and less disruptive to fix a team issue when it's small and manageable.
*	Prevent the team from presenting incomplete user stories during a [sprint review meeting](#sprint-review-meeting).
*	Gather, analyze, and present data to business stakeholders to demonstrate how the team is improving. For example, if your team has increased the value it delivers while generating fewer bugs, make that improvement visible through regular communications.   

Good Scrum Masters develop excellent communication, negotiation, and conflict resolution skills. They actively listen to the words people say and write, as well as how they deliver messages - body language, facial expressions, vocal pace, and other nonverbal communication.

<a id="daily-scrum-meetings">  </a>

## Daily Scrum meetings

Daily Scrum meetings help keep a team focused on what it needs to do next. The Scrum Master enforces the structure of the meeting and ensures that it starts on time and finishes in 15 minutes or less.  

Three aspects of successful Scrum meetings:

*	Everyone stands up. Standing helps keep the meeting focused and short. 
*	The meeting starts and ends on time, at the same time and location each day.
*	Everyone participates. Each team member answers the three Scrum questions:
	*	*What have I accomplished since the most recent Scrum?*  
	*	*What will I accomplish before the next Scrum?*  
	*	*What blocking issues or impediments might affect my work?*  

> [!NOTE]   
> The focus for Scrum meetings is on the status of work that needs to pass from one team member to another. 
 

Team members answer their questions quickly and concisely. Good responses state what was completed, what's planned next, and whether any help or unblocking is needed. Avoid vague answers like "I worked on the class" — specify which work item and what remains.

No one interrupts during report outs. Save in-depth discussions for after the meeting. Many teams use a "parking lot" — a whiteboard or flipchart where topics that need follow-up get listed during the meeting and addressed afterward.
 

<a id="sprint-review-meeting">  </a>

## Sprint review meetings

Conduct sprint review meetings on the last day of the sprint. Your team demonstrates each product backlog item completed in the sprint. The product owner, customers, and stakeholders accept the user stories that meet their expectations and identify new requirements. Customers often understand their needs more fully after seeing the demonstrations and might identify changes they want.

Based on this meeting, accept some user stories as complete. Keep incomplete user stories in the product backlog, and add new user stories. Rank both sets of stories and either estimate or re-estimate them in the next sprint planning meeting.  

After this meeting and the retrospective, your team plans the next sprint. Because business needs change quickly, use this meeting to review the priorities of the product backlog with the product owner, customers, and stakeholders.

<a id="sprint-retrospective-meeting">  </a>

## Sprint retrospective meetings

Retrospectives, when conducted well and at regular intervals, support continuous improvement. 

The sprint retrospective typically occurs on the last day of the sprint, after the sprint review meeting. In this meeting, your team explores its execution of Scrum and what might need to change. 

Based on discussions, your team might change one or more processes to improve effectiveness, productivity, quality, and satisfaction. This meeting and the resulting improvements are critical to the agile principle of self-organization. 

> [!NOTE]  
> To support your team's retrospective, consider installing the Marketplace [Retrospectives](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-retrospectives) extension. This extension helps collect feedback on project milestones, organize and prioritize feedback, and create actionable tasks to help your team improve over time.  


Address these areas during sprint retrospectives:  

*	Issues that affected your team's effectiveness, productivity, and quality.
*	Elements that affected your team's satisfaction and project flow.
*	What caused incomplete backlog items? What actions can the team take to prevent these issues in the future?  
	
	For example, consider a team that had several tasks only one individual could do. The isolated expertise created a critical path that threatened the sprint's success. That team member put in extra hours while other members couldn't help. Going forward, the team decided to practice [eXtreme Programming](https://www.extremeprogramming.org) to help correct this problem over time.

As a team, determine whether to adapt one or more processes to minimize problems during the sprint. 

Your team might also need to do work to implement an improvement. For example, a team negatively affected by too many failed builds decided to implement continuous integration. They set up a trial build before turning it on in production. To represent this work, they created a spike and organized it against the rest of the product backlog.

## Related content

- [End of sprint activities](end-sprint-activities.md) 
- [What is Scrum?](/devops/plan/what-is-scrum)
- [Agile Retrospectives: Making Good Teams Great](https://www.amazon.com/Agile-Retrospectives-Making-Teams-Great/dp/0977616649/)	