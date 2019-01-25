---
title: 7 elements of Agile culture to support autonomy and alignment
titleSuffix: Azure Boards 
description: Create an Agile culture of autonomous teams and an aligned enterprise using Agile tools when working in Azure Boards, Azure DevOps, & Team Foundation Server  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 3C43B829-3514-4493-8D5A-896375835FE7  
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 11/19/2018
---

# Agile culture  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

> [!NOTE] 
> Are you new to Agile? Learn more about [Agile Culture](/azure/devops/learn/agile/agile-culture) and [Scaling Agile to Large Teams](/azure/devops/learn/agile/scale-agile-large-teams).

As your team grows, you want your tools to grow with it. And, if you're an enterprise adopting Agile methodologies, you want your Agile tools to support the business objectives of your enterprise.  

However, to successfully scale Agile requires addressing both the culture and tools within your organization.  


##Alignment enables autonomy
<meta name="keywords" content="Agile culture,alignment,autonomy" /> 
Organizations that aspire to be agile need to consider the twin obligations of creating alignment across the enterprise and supporting team autonomy. Teams need autonomy to be efficient. And, enterprises need alignment across teams and the organization to be efficient.  

Too much alignment with insufficient team autonomy leads doesn't support innovation or agility of teams to get things done. Too little alignment with each team running their own program as they want doesn't provide the insight and coordination required to meet business objectives.  

![Alignment enables autonomy](_img/alignment-enables-autonomy_725.png)

With the right level of alignment across the organization and team autonomy, individuals are empowered to innovate and inspired to collaborate to meet business objectives. 

##7 areas to create alignment and support autonomy 

As you plan how you want to grow your Agile tool set, consider the following areas that are key to creating enterprise alignment while developing team autonomy.  

<table>
<tbody valign="top">
<tr>
<th width="20%">Area</th>
<th width="40%">Create alignment</th>
<th width="40%">Support autonomy</th>
</tr>


<tr>
<td>Product vision</td>
<td>The organization defines the goals and roadmap for the organization. Goals can be defined as epics and features which show up on the [portfolio backlog](portfolio-management.md). </td>

<td>Teams determine how to best meet the roadmap. Teams break down goals into user stories or product backlog items using their [team backlogs](portfolio-management.md#feature-team-backlog).    
</td>
</tr>

<tr>
<td>Team structure</td>
<td>Based on business objectives, organizations determine the number and size of teams. [Vertically structured feature teams](#horizontal-vs-vertical) lead to greater autonomy and efficiency. </td>

<td>With teams, there should be some established roles, such as product owner and development leads, but also room to rotate roles. For example, team members can take turns acting as scrum master, developing sprint demos, running sprint retrospectives, or crafting sprint emails.  
</td>
</tr>


<tr>
<td>Development cadence</td>
<td>Agile organizations need to release products and feature updates at regular intervals. Establishing regular release and sprint schedules promotes the rhythm of the business.  

<p>Each sprint--a time boxed iteration of constant duration between two and four weeks--includes planning, executing, delivering value, reflecting, and engaging in continuous improvement.</p> 
</td>

<td>
All teams manage their work within the set sprint cadence. Teams provide input into the length of sprint that works best for them.  

<p>Teams choose the Agile methods that work for them, [Scrum](../sprints/assign-work-sprint.md), [Kanban](../boards/kanban-quickstart.md), or a mix of both. Teams also take ownership of initiating and acting on their own set of continuous improvement practices.</p>

<p>It's possible for some teams to execute in shorter sprints. For example, if an organization sets a 2 week sprint cadence, some teams may choose to operate in 1 week sprints, while still aligning with the organizational schedule. </p>

</td>
</tr>


<tr>
<td>Communication cadence</td>
<td>Just as sprints bring a natural rhythm to the flow of work, so too do regular communications. By setting expectations for the types of communications they want to see to stay aligned and how often they occur, organizations naturally create alignment across teams and the enterprise.  

<p>Team sprint emails, bug bar status, and release team feature delivery status are examples of such regular communications. </p> 
</td>
<td>Teams determine the details that they communicate and who'll develop the communication. Their sprint emails may contain a summary of previous sprint accomplishments and next sprint plans or include a demo of recently completed features.  
</td>
</tr>

<tr>
<td>Quality</td>
<td>Each organization needs to set the criteria and standards by which they assess quality and set expectations for quality standards. A few ways they can do this is to set exit criteria for new feature development, standards to manage technical debt, and bug caps for teams or individuals.  

<p>Also, they can monitor bug status and trends by creating bug dashboards.  </p> 
</td>
<td>Teams choose how they meet the quality standards. They may stage bug bashes for new features or at the end of each sprint. They may designate an individual to act as a bug shield on a rotating basis.  </td>
</tr>

<tr>
<td>Manage risk, track work</td>
<td>The organization determines how each functional unit will communicate status and risk. They establish a "contract of communication" as to the minimum required information the organization needs.  

<p>Also, the organization provides the infrastructure to reduce risks. The organization owes the teams anything they can do to reduce risks that are common across teams.  </p> 
 </td>
<td>
Beyond meeting the needs set by the organization, teams determine any additional details they need to manage and track to reduce their risks.  Whether they use a white board with stickie notes or a full Gantt chart, they manage the details.  

<p>For example, teams may add a backlog item to track a dependency they have on another team. Or, they may track their risks via a list of issues or impediments. </p>

<p>Also, teams regularly contribute to improving the process and infrastructure to support the organizations ability to manage risk and gain insights.</p>
</td>
</tr>

</tbody>
</table>

<a id="horizontal-vs-vertical">  </a> 
##Feature teams   
<meta name="keywords" content="Agile culture,feature teams,agile teams, horizontal team structure" />  
As you scale, one of the most important tasks to consider is how you structure your teams. Traditionally, horizontal team structures divide teams according to the software architecture: user interface, service-oriented architecture, and data teams.  


![Horizontal vs vertical teams](_img/horizontal-vs-vertical-teams.png)

However, with the adoption of Agile practices, vertical team structures that span the architecture have been shown to provide greater team autonomy. Vertical teams have the ability to deliver on the features they own by working across the software architecture. They also spread the knowledge needed to work at all architecture levels throughout all the teams.  

Configure your teams along the value streams your organization wants to deliver. For example, Fabrikam Fiber, organizes their teams into the following seven feature teams.

![Seven feature teams: Shopping cart, Customer profile, Service status, Email, Voice, Internet, and TV](_img/seven-feature-teams.png)  


Each team plans the features they'll deliver. They have the autonomy to determine how they'll structure the data, architect the services, and design of the web and mobile user interfaces. Of course, they do this in adherence with the quality standards set by the organization and to which all teams contribute. 


##Configure your Agile tools to scale
<meta name="keywords" content="Agile culture,scaling agile" />    
As your organization grows, you can scale your Agile tools in the following ways.     

- **[Add teams and filtered backlog views](../../organizations/settings/add-teams.md):** You add teams to support team autonomy and provide them with the tools they can configure and manage that supports how they want to work. These tools include product backlogs, Kanban boards, sprint backlogs and taskboards, and many others.

	In addition, you can configure teams to support a hierarchy of backlogs and portfolio backlogs so that portfolio managers can review priority and progress across several teams.  

- **[Set up sprints and releases](../sprints/define-sprints.md):** You can structure your iterations to support a flat set of sprints, or a set of sprints embedded within scheduled releases. Each team activates the set of sprints and releases that they need to participate in. 

- **[Manage portfolios](portfolio-management.md):** by setting up a hierarchy of teams and backlogs and [activating portfolio backlogs](../../organizations/settings/select-backlog-navigation-levels.md). Feature teams focused on a subset of the product backlog can remain focused on just their backlog. Portfolio managers who want to view and organize backlogs to track progress and dependencies can manage portfolio backlogs of Features and Epics.  

	If additional portfolio backlogs are needed --for example, Scenarios or Initiatives--you can [add them as well](../../reference/add-portfolio-backlogs.md).  

- **[Configure dashboards](../../report/dashboards/dashboards.md):** With team dashboards, you can configure a number of charts that track progress within a team or across teams. Specifically, you can add status and trend charts based on queries you create. 

- **Group or categorize work:**  There are several ways to group work that you want to track. Backlogs filter work items based on team area assignments. And, portfolio backlogs allow you to [group backlog items under Features and Epics](../backlogs/organize-backlog.md). 

	However, if you want to track and report on work items based on other groupings, you can. You can [add tags to work items and then filter backlogs or queries based on tags](../queries/add-tags-to-work-items.md). Also, you can [add sub-area paths](../../organizations/settings/set-area-paths.md) to represent more granular feature areas.  

- **Add folders and use team favorites:**  As your teams grow, you'll see a growing list of work item queries, build definitions, and source code folders. By using folders, sub-folders, and team favorites, you can manage many of these lists more easily. You can add team favorites for shared queries, source code, and build definitions.

## Related articles  

Before you can create or work with any of the Agile tools, you need a project. If you don't have one yet, you can [create one](../../organizations/projects/create-project.md). 

If you're ready to move from one team to two teams, or configure several teams, see [Add teams](../../organizations/settings/add-teams.md). To add a team administrator or configure team assets, see [Manage teams and configure team tools](../../organizations/settings/manage-teams.md). 

For additional guidance, see these topics: 
- [Practices that scale](practices-that-scale.md) 
- [Visibility across teams](visibility-across-teams.md)
- [Review team delivery plans](review-team-plans.md)
- [Implement Scaled Agile Framework&reg; to support epics, release trains, and multiple backlogs](scaled-agile-framework.md). 

###Agile culture industry resources

- [Nexus, the Exoskeleton of Scaled Scrum](https://www.scrum.org/resources/nexus-guide)  
- [Culture over process](http://blog.crisp.se/wp-content/uploads/2013/09/culture-over-process.pdf) by Henrik Kniberg  
- [The Culture Game - Tools for the Agile Manager](http://www.amazon.com/The-Culture-Game-Tools-Manager/dp/0984875301) by Daniel Mezick   
- [Scaled Agile Framework (SAFe)](http://www.scaledagileframework.com/)  
- [Scaling Agile Software Development, - Disciplined Agility at Scale (White Paper)](http://disciplinedagileconsortium.org/Resources/Documents/ScalingAgileSoftwareDevelopment.pdf)   

### Scale with teams and not projects  
Often times, organizations look at adding a project for each software development project. 

Adding teams to scale your tools rather than adding projects is recommended for the following reasons:  
- **Visibility:**  It's much easier to view progress across all teams  
- **Tracking and auditing:**  It's easier to [link work items and other objects](../queries/link-work-items-support-traceability.md) for tracking and auditing purposes
- **Maintainability:**  You minimize the maintenance of security groups and process updates.  

To learn more, see [About projects and scaling your organization](../../organizations/projects/about-projects.md).

<!---
[Why You Should use a Single (Giant) TFS Team Project](http://geekswithblogs.net/Optikal/archive/2013/09/05/153944.aspx) provides a more detailed discussion as to the pros and cons of going with a single project.   

-->
