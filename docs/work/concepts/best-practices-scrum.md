---
title: Sprint and scrum best practices | Team Services & TFS
description: Best practice guidance to implement scrum and use sprint tools in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)   
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 1E2F0BDC-C267-4724-86E8-E4BBD75B50B2
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article  
ms.date: 06/22/2017
---


# Scrum and working with sprints best practices 
 
<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013</b>  




<a id="sprint-planning-meeting">  </a>
## Sprint planning meetings 

Much of sprint planning involves a negotiation between the product owner and the team to determine the focus and work to tackle in the upcoming sprint. It's useful to time-box the planning meeting, restricting it to 4 hours or less. 

In the first part of the meeting, your product owner meets with your team to discuss the user stories that might be included in the sprint. Your product owner will share information and answer any questions that your team has about those stories. This conversation might reveal details such as data sources, user interface layout, response time expectations, and considerations for security and usability. Your team should capture these details within the backlog items form. During this part of the meeting, your team learns what it must build.

As you plan your sprints, you may discover additional requirements that you should capture and add to your backlog. Before your sprint planning meeting, you'll want to [refine your backlog](best-practices-product-backlog.md#groom) to make sure that it is well defined and in priority order. 

Also, setting a sprint goal as part of your planning efforts can help the team stay focused on what's most important for each sprint. 

After you've planned your sprint, you may want to [share the plan](../scrum/sprint-planning.md#share) with key stakeholders. 

You can learn more about conducting your sprint planning meeting from these resources: 
*	[What is Scrum?](https://www.visualstudio.com/learn/what-is-scrum/)
*	[Sprint planning](https://msdn.microsoft.com/library/hh765982.aspx) white paper
*	[The Scrum Guide](http://www.scrumguides.org/scrum-guide.html)
*	[Build and manage the product backlog](https://msdn.microsoft.com/library/hh765982.aspx) white paper




<a id="set-sprint-goals">  </a>
##Set sprint goals
 
Scrum teams use sprint goals to focus their sprint activities. They often set this goal during their sprint planning meeting. The goal summarizes what the team wants to accomplish by the end of the sprint. By explicitly stating the goal, you create shared understanding within the team of the core objective. The sprint goal can also help guide the team when conflicts arise around priorities. 
<a id="tips-from-trenches" />

>## Tips from the trenches: Define sprint goals 
>The sprint goal defines what the product owner and the team consider as the ultimate target to accomplish that sprint. 
>It's not a random selection of backlog items that don't really have a relationship, but a short piece of text that captures 
>what the team should try to accomplish. Normally the product owner comes up with the sprint goal before selecting a 
>number of items for the next sprint. The items for that sprint should all fit that common goal.
>
>Sprint goals can be feature oriented, but might also have a large process component such as deployment automation or test automation. 
>For example:
> - This sprint we will focus on a very simple user story and we will use it to prove that the proposed solution will work.  
> - This sprint will revolve around implementing the security features that will properly secure the administration section of the website.  
> - This sprint will be about integrating the most important payment gateways so that we can start collecting money.  
> 
> Setting the sprint goals helps the team to stay focused. 
> It will make it easier to define priority of tasks within a sprint and it will probably 
help limit the number of stakeholders and end-users that are involved. 
> 
> During the sprint review the most important question you should ask yourself is whether you managed to achieve the sprint goal. 
> How many stories you actually completed comes second. If the goal is accomplished, the sprint succeeds, even if not all stories were finished.
> 
> Contributed by [Jesse Houwing](http://blog.jessehouwing.nl/), Visual Studio devops Ranger and a senior consultant working for Avanade Netherlands.

## Tips for successful triage meetings  
Fixing bugs represents a trade-off with regards to other work. Use your triage meeting to determine how important fixing each bug is against other priorities related to meeting the project scope, budget, and schedule.  

- Establish the team's criteria for evaluating which bugs to fix and how to assign priority and severity. Bugs associated with features of significant value (or significant opportunity cost of delay), or other project risks, should be assigned higher priority and severity. Store your triage criteria with other team documents and update as needed.
- Use your triage criteria to determine which bugs to fix and how to set their State, Priority, Severity, and other fields. 
- Adjust your triage criteria based on where you are in your development cycle. Early on, you may decide to fix most of the bugs that you triage. However, later in the cycle, you may raise the triage criteria (or bug bar) to reduce the number of bugs that you need to fix.  
- Once you've triaged and prioritized a bug, assign it to a developer for further investigation and to determine how to implement a fix.  



### Manage your technical debt 

Consider managing your bug bar and technical debt as part of your team's overall set of continuous improvement activities. You may find these additional resources of interest: 

- [Good and Bad Technical Debt (and how TDD helps)](http://blog.crisp.se/2013/10/11/henrikkniberg/good-and-bad-technical-debt) by Henrik Kniberg  
- [Managing Technical Debt](http://www.infoq.com/articles/managing-technical-debt) posted by Sven Johann & Eberhard Wolff  



>###Tips from the trenches: [Agile Bug Management: Not an Oxymoron](https://visualstudiomagazine.com/articles/2012/10/12/agile-bug-management.aspx)  
>*by Gregg Boer, Principal Program Manager, Visual Studio Cloud Services at Microsoft*  
>#### Every Sprint, Address any Known Bug Debt 
>Every sprint, the team looks at any bugs remaining in the bug backlog and allocates capacity to get that known set of bugs down to zero, or near-zero. Whether this is one day, one week or the entire sprint, they fix the bugs first. Bugs found later, within the sprint, are not considered part of that initial commitment. Unless they're very high priority, they're put on the bug backlog for the next sprint.
>
>Many teams work in a commitment-based organization, where management places a high value on a team's ability to meet their commitments. Doing capacity planning against a known set of bugs makes sprint planning more deterministic, increasing their chance to meet commitments. Any new bugs discovered during the sprint are not a part of the initial commitment, and will be tackled next sprint.>
 >
>#### Managing Bug Debt across an Enterprise 
>An organization transitioning to a culture where debt is continually eliminated likely is dealing with the following question: How do you get teams to reduce their bug count without telling them exactly what to do? Leadership wants the team to change, yet gives the team autonomy to determine how they change. One option is to use a bug cap.
>
>For example, consider a bug cap of three bugs per engineer. This means a team of 10 people should not have more than 30 bugs in its bug backlog. If the team is over its cap, it's expected to stop work on new features and get under the bug cap. A team is expected to be under its cap at all times, but the team decides how it wants to do that. The bug cap ensures that bug debt is never carried for too long, and the team can learn from the mistakes that causes the bugs to be injected in the first place. 
>
>Remember that the bug cap represents the bugs in the bug backlog. It does not include bugs found and fixed within the sprint in which a feature is developed. Those bugs are considered undone work, not debt. 


While bugs contribute to technical debt, they may not represent all debt. 

Poor software design, poorly written code, or short-term fixes in place of best, well-designed solutions can all contribute to technical debt. Technical debt reflects extra development work that arises from all these problems. 

You need to track work to address technical debt as PBIs, user stories, or bugs. To track a team's progress in incurring and addressing technical debt, you'll want to consider how to categorize the work item and the details you want to track. You can [add tags to any work item to group it into a category of your choosing](../track/add-tags-to-work-items.md). 
