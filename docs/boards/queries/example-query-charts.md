---
title: Example query charts in Azure Boards  
titleSuffix: Azure Boards
description: Learn about useful query charts to create and display on dashboards when working in Azure Boards.
ms.service: azure-devops-boards
ms.custom: boards-queries, engagement-fy23 
ms.author: kaelli
author: KathrynEE
ms.topic: sample
monikerRange: '<= azure-devops'
ms.date: 02/06/2023
---


# Example query charts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Query charts are a great way to visualize status and trends. Also, by adding several charts to a dashboard, you can quickly review all the important data you want to monitor for your team or project. With that in mind, consider addressing the following questions with your team: 
- *What are the most useful query charts for teams to create and monitor?* 
- *What charts will help us maintain backlog hygiene?*
- *When creating trend charts, what time frame should I consider?*

Not all teams have the same goals or tracking needs. However, teams that adopt Agile methods tend to routinely perform the following tasks. So consider the status and trend charts that will help your team perform these tasks.  
- [Triage incoming work](../sprints/best-practices-scrum.md#tips-for-successful-triage-meetings), ensure new work is well defined 
- Refine the backlog as described in [Backlog management ](../backlogs/best-practices-product-backlog.md) 
- Plan sprints and set sprint goals as described in [Scrum and best practices](../sprints/best-practices-scrum.md)
- Conduct [daily standups](../sprints/best-practices-scrum.md#daily-scrum-meetings)  


<!---TIPS
consider the time frame you want to monitor
snapshot or trends
what's shipping when?
Track bug debt, progress
Active bugs
Stale bugs
Hi priority bugs
Triage bugs
Active bug trends


How to view total work done 
How to view remaining work - 

Create tasks and estimate work 
How to view all work items
How to view work items I'm following 

Query charts and Query widgets for dashboards, customizing widget tile. 

## What status or trends should your team monitor? 

Questions to answer 

- Do you want to view status or a trend over time
- If trend, what time frame is of interest 
- What team, product, or organization goals need to be monitored
- What recurring activities need to be done to maintain backlog hygiene? 

What articles should link to this article?  
- Does a change in Stack Rank count toward the Changed Date? 

Tips: Pie charts versus Query count; can quickly see the types of work items 
--> 


## Maintain backlog hygiene 

The following queries can help your team maintain a healthy backlog by ensuring that work is assigned Here are a few tasks to review periodically, usually at the beginning or end of a sprint. Review this list for what makes sense for your team and organization goals. 

:::row:::
   :::column span="1":::
      Query focus
   :::column-end:::
   :::column span="3":::
      Query clause
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Work assigned to a sprint but not assigned to a team member
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-no-assigned-to.png" alt-text="Screenshot of Query Editor, Assigned To field is blank for current iteration.":::
   :::column-end:::
:::row-end:::   
:::row:::
   :::column span="1":::
      Active work items not assigned to the current sprint 
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-active-but-not-current-iteration.png" alt-text="Screenshot of Query Editor, Active but not assigned to current iteration.":::
   :::column-end:::
:::row-end:::   
:::row:::
   :::column span="1":::
      Active work items assigned to a past sprint
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-active-past-iteration.png" alt-text="Screenshot of Query Editor, Active but assigned to a past iteration."::: 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Stale work items, no changes made in the last 2 to 3 months (query by Changed Date)
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-stale-work.png " alt-text="Screenshot of Query Editor, Active work not changed for past 3 months.":::
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Ill-defined work items, for example, ones with no Description, Acceptance Criteria, Story Points, or Effort defined
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-ill-defined-work.png " alt-text="Screenshot of Query Editor, Work with empty required fields.":::
   :::column-end:::
:::row-end:::

In the following image, all five query charts appear on a team dashboard. To add query charts to a dashboard, see [Add charts to a dashboard](../../report/dashboards/add-charts-to-dashboard.md#add-a-work-item-query-or-chart) 


:::image type="content" source="media/example-queries/dashboard-backlog-hygiene-query-charts.png " alt-text="Screenshot of Dashboard with five query charts added.":::  


## Example status charts 

- **Planned work**: How much work is represented in the backlog. A query that looks at work in the *New* or *Proposed* category state provides a snapshot of work in the backlog.  
- **Active bugs**: Agile teams monitor their bug or technical debt and set goals to maintain the total number under a specific number. 
- **Active bugs by assignment**: Monitor bugs assignments across a team to support load balancing.  
- Active bugs by state 
- **Tagged work items**: Monitor tagged work to ensure the team is meeting specific goals, milestones, or categories of work. 
- **Blocked work**: How much work is currently blocked? You can query blocked work using a tag or custom field. 


## Example trend charts 

- Bug trends over time by state (last 30 days)
- Active work trends by state (last 30 days) 
- Newly added work over time 
- Velocity by distinct area path 

## Useful work tracking widgets and charts

- Velocity 
- Sprint burndown 
- Lead time
- Cycle time 
- Cumulative flow 


Widget error: The daily number of work items returned exceeds the trend chart size limit of 1000. 
 
## Related articles

- [Query editor](using-queries.md)
- [Query fields, operators, and macros](query-operators-variables.md)   
- [Query by date or current iteration](query-by-date-or-current-iteration.md)
 
 