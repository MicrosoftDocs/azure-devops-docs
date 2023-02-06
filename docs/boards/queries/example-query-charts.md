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


What are some useful query charts for teams to create and monitor? 
 
How to view total work done 
How to view remaining work - 

Create tasks and estimate work 
How to view all work items
How to view work items I'm following 

Query charts and Query widgets for dashboards, customizing widget tile. 

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

## What status or trends should your team monitor? 

Questions to answer 

- Do you want to view status or a trend over time
- If trend, what time frame is of interest 
- What team, product, or organization goals need to be monitored
- What recurring activities need to be done to maintain backlog hygiene? 

<!--- What articles should link to this article?  
- Does a change in Stack Rank count toward the Changed Date? 

--> 


## Maintain backlog hygiene 

Here are a few tasks to review periodically, usually at the beginning or end of a sprint. Review this list for what makes sense for your team and organization goals. 
 
- Unassigned work items
- Active work items not assigned to the current sprint 
- Incomplete work assigned to a past sprint 
- Stale work items, no changes made in the last 2 to 3 months (query by Changed Date)
- Ill-defined work items such as no Story Points or Effort defined 
- Unparented work 


## Example status charts 

- **Planned work**: How much work is represented in the backlog. A query that looks at work in the *New* or *Proposed* category state provides a snapshot of work in the backlog.  
- **Active bugs**: Agile teams monitor their bug or technical debt and set goals to maintain the total number under a specific number. 
- **Active bugs by assignment**: Monitor bugs assignments across a team to support load balancing.  
- Active bugs by state 
- **Tagged work items**: Monitor tagged work to ensure the team is meeingt specific goals, milestones, or categories of work. 
- **Blocked work**: How much work is currently blocked? You can query blocked work using a tag or custom field. 


## Example trend charts 

- Bug trends over time by state (last 30 days)
- Active work trends by state (last 30 days)
- Unassigned work  
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
 
 