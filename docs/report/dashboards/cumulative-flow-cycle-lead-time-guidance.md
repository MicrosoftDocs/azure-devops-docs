---
title: Cumulative Flow Guidance
titleSuffix: Azure DevOps   
description: "Learn how to use cumulative flow diagrams (CFDs), cycle times, and lead times to monitor your work process and identify issues. Discover actionable insights to improve workflow efficiency."
ms.custom: dashboards
ms.subservice: azure-devops-analytics
ms.topic: overview 
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 09/10/2025
# customer intent: As a team member, I want to become familiar with cumulative flow diagrams (CFDs), cycle times, and lead times so that I can monitor and identify issues in my work process.
---

# Cumulative flow guidance for lead time and cycle time

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Cumulative flow diagrams (CFDs) help you monitor your work process by visualizing the flow of work through your system. This article explains how to use CFDs, cycle times, and lead times to identify issues and improve workflow efficiency.

- To set up or view a CFD, see [View and configure a cumulative flow diagram](cumulative-flow.md).
- To add a lead time or cycle time control chart to a dashboard, see [Lead Time and Cycle Time widgets](cycle-time-and-lead-time.md).
- To set up or view a CFD, see [View and configure a cumulative flow diagram](cumulative-flow.md).
- To add a lead time or cycle time control chart to a dashboard, see [Lead Time and Cycle Time widgets](cycle-time-and-lead-time.md).

:::row:::
   :::column span="2":::
      The continuous-flow CFD is the chart most teams that follow a lean process prefer.

But many teams combine lean practices with Scrum or other methods. They use lean practices during an iteration or sprint. In this case, the diagram looks a bit different. It shows two extra,The continuous-flow CFD is the chart most teams that follow a lean process prefer.

But many teams combine lean practices with Scrum or other methods. They use lean practices during an iteration or sprint. In this case, the diagram looks a bit different. It shows two extra, valuable pieces of information, as shown in the next chart, the fixed-period CFD.
      **Continuous-flow CFD**  
      :::image type="content" source="media/guidance/cfd-metrics.png" alt-text="Chart that shows an abstract continuous-flow CFD. Labels point out the lead time, cycle time, work in progress, and items in various states.":::
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      This fixed-period CFD shows a completed sprint.

The top line shows the scope set for the sprint. Because the work needs to finish by the last day, the slope of the Closed state shows if a team is on track. Think of this view as a burnup chart.

In the chart, the first step in the process is in the upper-left area. The last step is in the bottom-right area.  
   :::column-end:::
   :::column span="3":::
      **Fixed-period CFD for a completed sprint**  
      :::image type="content" source="media/cfd-scope-change.png" alt-text="Chart that shows an abstract fixed-period CFD. Labels point out active, resolved, and closed items and the scope change.":::
   :::column-end:::
:::row-end:::

## Chart metrics  

CFDs show the count of work items grouped by state or column over time. The two primary metrics for tracking are cycle time and lead time. You extract these metrics from the chart.

---
:::row:::
   :::column span="1":::
      **Metric**
   :::column-end:::
   :::column span="3":::
      **Definition**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Cycle time** <sup>1</sup>
   :::column-end:::
   :::column span="3":::
      The time it takes to move work through a single process or workflow state. Measure the length from the start of one process to the start of the next process.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Lead time** <sup>1</sup>
   :::column-end:::
   :::column span="3":::
            *For a continuous-flow process*: The time from when a request is made (like adding a proposed user story) until that request is completed (closed).
      
      *For a sprint or fi      *For a continuous-flow process*: The time from when a request is made (like adding a proposed user story) until that request is completed (closed).
      
      *For a sprint or fixed-period process*: The time from when work on a request begins until the work is completed (for example, the time from the Active to the Closed state).
:::row:::
   :::column span="1":::
      **Work in progress (WIP)**
   :::column-end:::
   :::column span="3":::
      The amount of work or number of work items that are actively in progress.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Scope**
   :::column-end:::
   :::column span="3":::
      The amount of work committed for the given period. This metric only applies to fixed-period processes.
   :::column-end:::
:::row-end:::
--- 
<sup>1</sup> The CFD widget that uses Analytics data and the built-in CFD that you can view from a team backlog or board don't provide discrete lead time and cycle time values. However, the [Lead Time and Cycle Time widgets](cycle-time-and-lead-time.md) do provide these values.

There's a clear correlation between lead time or cycle time and WIP. More WIP leads to longer cycle times and longer lead times. The opposite is also true—less WIP leads to shorter cycle and lead times. When the development team focuses on fewer items, they reduce cycle and lead times. This correlation is a key reason to set [WIP limits](../../boards/boards/wip-limits.md) on the board you use to track and manage work.

The count of work items shows the total amount of work on a given day. In a fixed-period CFD, a change in this count means a scope change for that period. In a continuous-flow CFD, it shows the total amount of work that's in the queue and completed for a given day.

Categorizing work into specific board columns shows the amount of work in each area of the process. This view gives insight into where work is moving smoothly, where there are blockages, and where no work is being done. It's hard to understand a tabular view of the data, but the visual CFD helps you see what's happening in your work process and why. 

## Identify issues and take appropriate actions 
 
The CFD provides answers to the following questions. Based on the answers, you can adjust the process to move work through the system.

### Will the team complete work on time? 
 
This question applies to fixed-period CFDs only. You can gain an understanding by looking at the curve (or progression) of work in the last column of the board.  

:::image type="content" source="media/cfd-incomplete.png" alt-text="Chart that shows a half-completed CFD. The projected curve for completed items is below the scope level at the end of the sprint.":::

In this scenario, you might consider reducing the scope of work in the iteration. This action is appropriate if it's clear that the work isn't being completed quickly enough, assuming it continues at a steady pace. This scenario can indicate that the work was underestimated and should be factored into the next sprint's planning.  

However, there might be other reasons the work isn't being completed quickly enough. You can determine those reasons by looking at other data on the chart.  

### How is the flow of work progressing?

Is the team completing work at a steady pace? One way to tell is to look at the spacing between the various columns on the chart. Are they of a similar or uniform distance from each other from beginning to end? Do any columns appear to flatline over a period of multiple days? Or do any seem to bulge?  

*Mura*, or unevenness, is the lean term for flat lines and bulges. Mura indicates a form of waste (*Muda*) in the system. Any unevenness in the system causes bulges to appear in the CFD.  

Monitoring the CFD for flat lines and bulges supports a key part of the Theory of Constraints project management process. Protecting the slowest area of the system is referred to as the *drum-buffer-rope* process and is part of how work is planned.  

Two problems show up visually as flat lines and as bulges. 

:::row:::
   :::column span="2":::
      Flat lines appear when the team doesn't update the status of their work items with a regular cadence. The [board that you use to track and manage work](../../boards/boards/kanban-overview.md) provides the quickest way to transition work from one column to another.  
      Flat lines can also appear when the work across one or more processes takes longer than planned. Flat lines appear across many parts of the system because if only one or two parts have problems, you see a bulge. 
   :::column-end:::
   :::column span="3":::
      **Flat lines**  
      :::image type="content" source="media/cfd-flatline.png" alt-text="Chart of an abstract CFD. Lines for the number of active, resolved, and closed items are flat for a significant number of time periods.":::
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      Bulges occur when work builds up in one part of the system and doesn't move through a process.  
      For example, a bulge can occur when testing takes a long time but development takes less time. The result is that work accumulates in the development state. Bulges indicate that a succeeding step is having a problem, not necessarily the step in which the bulge is occurring. 
   :::column-end:::
   :::column span="3":::
      **Bulges**  
      :::image type="content" source="media/cfd-bulge.png" alt-text="Chart of an abstract CFD. The area for active items bulges toward the lower-right corner of the chart.":::
   :::column-end:::
:::row-end:::
  
### How do you fix flow problems? 

You can solve the problem of a lack of timely updates by taking the following actions:

- Holding daily stand-ups
- Holding other regular meetings
- Scheduling a daily team reminder email 

Systemic flat-line problems indicate a more challenging problem, although such problems are rare. Flat lines indicate that work across the system is stopped. Underlying causes can include the following issues:

- Process-wide blockages
- Processes taking a long time
- Work shifting to other opportunities that aren't captured on the board 

One example of systemic flat lining can occur in a features CFD. Feature work can take longer than work on user stories, because features are composed of several stories. In these situations, either the slope is expected (as in an earlier example), or the issue is well known and the team already raised it. If it's a known issue, the problem resolution is outside the scope of this article.  

Teams can proactively fix problems that appear as CFD bulges. The fix that's appropriate can depend on where the bulge occurs. As an example, suppose that the bulge occurs in the development process. The bulge might be happening because testing is taking longer than writing code. Testers might also be finding a large number of bugs. When they continually transition the work back to the developers, the developers inherit a growing list of active work.  

There are two potentially easy ways to solve this problem:

- Shift developers from the development process to the testing process until the bulge is eliminated.
- Change the order of work. Specifically, interweave work that can be done quickly with work that takes longer to do.

Look for basic solutions to eliminate the bulges. 

> [!NOTE]   
> Because various scenarios can occur that cause work to proceed unevenly, it's critical that you perform an actual analysis of the problem. The CFD can tell you that a problem exists. It can also tell you approximately where the problem is, but you must investigate to get to the root causes. This guidance provides recommended actions that solve specific problems, but the solutions might not apply to your situation. 

### Did the scope change?  

Scope changes apply to fixed-period CFDs only. The top line of the chart indicates the scope of work. A sprint is preloaded with the work to do on the first day. Changes to the top line indicate the addition or removal of work.  

In one particular scenario, you can't track scope changes with a CFD. That scenario occurs when the same number of work items are added and removed on the same day. The line stays flat in this case.

To track scope changes in this case, take the following actions:

- Compare several charts with one another.
- Monitor specific issues.
- Use [sprint burndown](configure-sprint-burndown.md) to monitor scope changes. 

### Is there too much WIP?  

You can easily [monitor the board to determine whether WIP limits are exceeded](../../boards/boards/wip-limits.md). You can also monitor WIP levels by using the CFD.

A large amount of WIP usually shows up as a vertical bulge. The longer that there's a large amount of WIP, the more the bulge expands into an oval shape. This behavior is an indication that the WIP is negatively affecting the cycle and lead time.

Here's a good rule of thumb for WIP: There should be no more than two items in progress per team member at any given time. The main reason for using a limit of two items, not a stricter limit, is that reality frequently intrudes on the software development process.

Sometimes it takes time to get information from a stakeholder or to acquire necessary software. There are any number of reasons why work can be halted. Maintaining a second work item provides operational flexibility during unexpected delays. If both items are blocked, it's time to raise a red flag to get something unblocked&mdash;not just switch to yet another item. As soon as there are a large number of items in progress, the person working on those items can have difficulty switching context. It's likely that they forget what they were doing, which can lead to mistakes.

## Lead time versus cycle time   

The following diagram shows how lead time and cycle time differ. Lead time starts when a work item is created and ends when the work item enters a Completed state category. Cycle time starts when a work item enters an In Progress or Resolved state category and ends when it enters a Completed state category. 

:::image type="content" source="media/cycle-lead-time-concept-intro.png" alt-text="Diagram that shows how state categories are used to measure cycle time and lead time.":::

If your team uses a board to track and manage work, understanding how your columns map to workflow states helps you manage work more effectively. To learn how to set up your board, see [Manage columns on your board](../../boards/boards/add-columns.md). 

To learn how the system uses the state categories—Proposed, In Progress, Resolved, and Completed—see [About workflow states in backlogs and boards](../../boards/work-items/workflow-and-state-categories.md).

[!INCLUDE [how-cycle-time-handles-reactivated-work-items](../includes/how-cycle-time-handles-reactivated-work-items.md)]

## Estimate delivery times based on lead and cycle times
  
Use your average lead and cycle times and standard deviations to estimate delivery times.

When you create a work item, use your team's average lead time to estimate the completion date. The team's standard deviation shows the variability of the estimate. Likewise, use your cycle time and its standard deviation to estimate when a work item finishes after work begins.

### Example Cycle Time widget

In the following chart, the average cycle time is eight days and the standard deviation is six days. With this data, estimate that the team completes future user stories about 2 to 14 days after work begins. A narrower standard deviation makes your estimates more predictable.

:::image type="content" source="media/cycle-time-planning.png" alt-text="Screenshot of a Cycle Time widget. The scatter-plot chart shows dots for work items, a moving average line, and a standard deviation band.":::

## Identify process issues 

Outliers often mean there's an underlying process issue. For example, waiting too long to review pull requests or not fixing an external dependency quickly. Check your team's control chart for outliers.

### Example cycle time widget showing several outliers

The following chart shows several outliers because some bugs took longer than average to finish. Checking why these bugs took longer can help you find process issues. Fixing process issues helps reduce your team's standard deviation and improves your team's predictability.

:::image type="content" source="media/cycle-time-outliers.png" alt-text="Screenshot of a cycle time widget. Several work item dots are far above the moving average line and the standard deviation band.":::

You also see how process changes affect your lead and cycle times. For example, on May 15, the team worked to limit the WIP and fix stale bugs. The standard deviation narrows after that date, showing improved predictability.

## Next steps

> [!div class="nextstepaction"]
> [View and configure a cumulative flow diagram](cumulative-flow.md)

> [!div class="nextstepaction"]
> [Lead Time and Cycle Time widgets](cycle-time-and-lead-time.md)
