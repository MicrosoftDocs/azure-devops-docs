---
title: Cumulative flow diagram | Team Services & TFS  
description: Process guidance to configure and use cumulative flow diagrams to improve your Kanban processes - Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)    
ms.prod: vs-devops-alm  
ms.technology: vs-devops-reporting  
ms.assetid: 9A16EDA7-6249-49E1-84A3-FE7550028E9F  
ms.manager: douge
ms.author: kaelli
ms.date: 05/16/2017
---

# Cumulative flow

[!INCLUDE [temp](../../work/_shared/dev15-version-header.md)]

You use cumulative flow diagrams (CFD) to monitor the flow of work through a system. There are two CFD charts, the one viewed from the Kanban board and the one you access by adding the CFD widget to your dashboard. 

>[!NOTE]   
><b>Feature availability:</b> The CFD widget is available only for Team Services at this time. 

The CFD widget provides more configuration options than those supported by the default CFD charts shown on the backlog and board pages. With the [CFD widget](#configure-widget), you can monitor the count of work items as they progressively move through various states which you define. You can configure the CFD chart to monitor the flow of epics, features, user stories, product backlog items, or requirements, depending on the process ([Agile](../../work/guidance/agile-process.md), [Scrum](../../work/guidance/scrum-process.md), or ([CMMI](../../work/guidance/cmmi-process.md)) you've selected.

## View the cumulative flow chart (Kanban board) 

You open the cumulative flow for your backlog or portfolio backlog by clicking the image in the upper-right corner of the Kanban board page. 

<img src="../../work/kanban/_img/ALM_KB_Board5.png" alt="Open the cumulative flow diagram" style="border: 1px solid #CCCCCC;" />   

The CFD shows the count of items in each Kanban column for the past 30 weeks or less. From this chart you can gain an idea of the amount of work in progress and lead time. Work in progress counts unfinished requirements. Lead time indicates the amount of time it takes to complete a requirement once work has started. 

<img src="../../work/kanban/_img/ALM_KB_CumulativeFlow.png" alt="Kanban board, cumulative flow diagram" style="border: 1px solid #CCCCCC;" />   


A few options are available for you to [configure your chart](#configure).
<!---
A few options are available for you to [configure your chart](#configure) or [configure your CFD widget](#configure-widget).
-->

## Sample charts and primary metrics 
The two primary metrics to track, cycle time and lead time, can be extracted from the chart. 

<table>
<tbody valign="top">
<tr >
<td width="35%">

<p>The Continuous flow CFD provides the chart most favored by teams that follow a lean process.</p>
<p>However, many teams have begun combining lean practices with Scrum or other methodologies which means they practice lean within the span of an iteration or sprint. In this situation the diagram takes on a slightly different look and provides two additional, and very valuable, pieces of information as shown in the next chart.</p> 


</td>
<td width="65%">**Continuous flow CFD**  
![CFD metrics](_img/cfd-metrics.png)  
</td>
</tr>

<tr>
<td>
<p>The Fixed period CFD shown here is for a completed sprint. </p>
<p>The top line represents the scope set for the sprint. And, because the work must be completed by the last day of the sprint, the slope of the Closed state indicates whether or not a team is on track to complete the sprint. The easiest way to think of this view is as a burnup chart.</p> 
<p>The data is always depicted with the first step in the process as the upper left and the last step in the process as the bottom right. </p>

</td>
<td>**Fixed period CFD for a completed sprint**  

![CFD metrics](_img/cfd-scope-change.png)  

</td>

</tr>

</tbody>
</table>

##Chart metrics  
CFD charts display the count of work items grouped by state/Kanban column over time. The two primary metrics to track, cycle time and lead time, can be extracted from the chart.  




<table>
<tbody valign="top">
<tr>
<th width="18%">Metric</th>
<th>Definition</th>
</tr>

<tr>
<td>Cycle Time  <sup>1</sup></td>
<td>Measures the time it takes to move work through a single process or workflow state, calculated by the start of the given process to the start of the subsequent process. 

</td>
</tr>

<tr>
<td>Lead Time  <sup>1</sup></td>
<td>*For a continuous flow process:* measures the amount of time it takes from when a request is made (such as adding a proposed user story) until that request is completed (closed).  
<br/>
*For a sprint or fixed period process:* measures the time from when work on a request begins until the work is completed  (i.e. the time from Active to Closed).  


</td>
</tr>


<tr>
<td>Work in Progress</td>
<td>Measures the amount of work or number of work items that are actively being worked.</td>
</tr>

<tr>
<td>Scope</td>
<td>Represents the amount of work committed for the given period of time. Only applies to fixed period processes.</td>
</tr>

</tbody>
</table>

**Note**:

1. The current CFD implementation does not provide discrete numbers on Lead Time and Cycle Time.  

>[!NOTE]   
><b>Feature availability:</b>  For Team Services, you can add a [Cycle time widget](../widget-catalog.md#cycle-time-widget) and [Lead time widget](../widget-catalog.md#lead-time-widget) to your dashboard. You need to first install the [Analyics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). You can then [add the widgets to your dashboard](../add-widget-to-dashboard.md).  You must be an account owner or a member of the [Project Collection Administrator grou](../../setup-admin/add-administrator-tfs.md) to add extensions.


There is a very tight, well defined correlation between Lead Time/Cycle Time and Work in Progress (WIP). The more work in progress, the longer the cycle time which leads to longer lead times. The opposite is also true&mdash;the less work in progress, the shorter the cycle and lead time is because the development team can focus on fewer items. This is a key reason why you can and should set [Work In Progress limits on the Kanban board](../../work/kanban/wip-limits.md).  

The count of work items indicates the total amount of work on a given day. In a fixed period CFD, a change in this count indicates scope change for a given period. In a continuous flow CFD, it indicates the total amount of work in the queue and completed for a given day.  

Decomposing this work into specific Kanban board columns provides a view into where work is in the process. This provides insights on where work is moving smoothly, where there are blockages and where no work is being done at all. It's difficult to decipher a tabular view of the data, however, the visual CFD chart provides clear evidence that something is happening in a given way. 

##Identify issues, take appropriate actions  

The CFD answers several specific questions and based on the answer, actions can be taken to adjust the process to move work through the system. Let's look at each of those questions here.

###Will the team complete work on time?  

This question applies to fixed period CFDs only. You gain an understanding of this by looking at the curve (or progression) of work in the last column of the Kanban board.  

![Sample CFD with a half completed chart, dotted lines show the work won't be completed](_img/cfd-incomplete.png)  

In this scenario it may be appropriate to reduce the scope of work in the iteration if it's clear that work, at a steady pace, is not being completed quickly enough. It may indicate the work was under estimated and should be factored into the next sprints planning.  

There may however be other reasons which can be determined by looking at other data on the chart.  

###How is the flow of work progressing?

Is the team completing work at a steady pace? One way to tell this is to look at the spacing between the different columns on the chart. Are they of a similar or uniform distance from each other from beginning to end? Does a column appear to flat-line over a period of multiple days? Or, does it seem to "bulge"?  

Two problems show up visually as flat lines and as bulges. 

<table>
<tbody valign="top">
<tr>
<td width="235">

<p>Flat lines appear when the team doesn't update their work with a regular cadence. The [Kanban board](../../work/kanban/kanban-basics.md) provides the quickest way to transition work from one column to another. </p>
<p>Flat lines can also appear when the work across one or more processes takes longer than planned for. For this to occur, flat lines must appear across many parts of the system because if only one part of the system or two parts of a system have problems then you'll see a bulge. </p>
</td>
<td width="35%">**Flat lines**  
![CFD metrics](_img/cfd-flatline.png)  
</td>
</tr>

<tr>
<td>
<p>Bulges occur when work builds up in one part of the system and it isn't moving through a process. </p>
<p>An example of this may be that testing is taking a long period of time but development is taking a short period of time therefore work is accumulating in the development state (bulges indicate that a succeeding step is having a problem, not necessarily the step in which the bulge is occurring).  </p>


</td>
<td width="65%">**Bulges**  

![CFD metrics](_img/cfd-bulge.png)  

</td>

</tr>

</tbody>
</table>


Mura, the lean term for flat lines and bulges, means unevenness and indicates a form of waste (Muda) in the system. Any unevenness in the system will cause bulges to appear in the CFD.  

Monitoring the CFD for flat lines and bulges supports a key part of the Theory of Constraints project management process. Protecting the slowest area of the system is referred to as the drum-buffer-rope process and is part of how work is planned.  

<!---
 [We don't have a lot of Microsoft documentation on this so we should probably point to externally respected sources that are not our competitors to lend legitimacy to this and provide further reading]. I want to include industry practices here but not dive into a bunch of details. Aaron and Gregg think we should have one.]  
-->

**How do you fix flow problems?**

You can solve the problem of lack of timely updates through daily stand-ups, other regular meetings, or scheduling a daily team reminder email.  

Systemic flat-line problems indicate a more challenging problem (although you should rarely if ever see this). This problem means that work across the system has stopped. This may be the result of process-wide blockages, processes taking a very long time, or work shifting to other opportunities that aren't captured on the board. 

One example of systemic flat-line can occur with a features CFD. Feature work can take much longer than work on user stories because features are composed of several stories. In these situations, either the slope is expected (as in the example above) or the issue is well known and already being raised by the team as an issue, in which case, problem resolution is outside the scope of this topic to provide guidance.  

Teams can proactively fix problems that appear as CFD bulges. Depending on where the bulge occurs, the fix may be different. As an example, let's suppose that the bulge occurs in the development process because running tests is taking much longer than writing code, or testers are finding  may be finding a large number of bugs and continually transition the work back to the developers so the developers have a growing list of active work.  

Two potentially easy ways to solve this problem are: 1) Shift developers from the development process to the testing process until the bulge is eliminated or 2) change the order of work such that work that can be done quickly is interwoven with work that takes longer to do. Look for simple solutions to eliminate the bulges. 

>[!NOTE]   
>Because many different scenarios can occur which cause work to proceed unevenly, it's critical that you perform an actual analysis of the problem. The CFD will tell you that there is a problem and approximately where it is but you must investigate to get to the root cause(s). The guidance provided here indicate recommended actions which solve specific problems but which may not apply to your situation. 

###Did the scope change?  

Scope changes apply to fixed period CFDs only. The top line of the chart indicates the scope of work because a sprint is pre-loaded with the work to do on the first day, this becomes a set level of work. Changes to this top line indicate worked was added or removed.  

The one scenario where you can't track scope changes with a CFD occurs when the same number of works are added as removed on the same day. The line would continue to be flat. This is the primary reason why several charts should be used in conjunction with one another to monitor for specific issues. For example, the [sprint burndown chart](../../work/scrum/sprint-burndown.md) can also show scope changes.   


###Too much work in progress?  

You can easily monitor [whether WIP limits have been exceed from the Kanban board](../../work/kanban/wip-limits.md). However, you can also see monitor it from the CFD.  

Not so oddly, a large amount of work in progress usually shows up as a vertical bulge. The longer there is a large amount of work in progress, the bulge will expand to become an oval which will indicate that the work in progress is negatively affecting the cycle and lead time.  

A good rule of thumb for work in progress is that there should be no more than two items in progress per team member at any given time. The main reason for two items versus stricter limits is because reality frequently intrudes on any software development process.  

Sometimes it takes time to get information from a stakeholder, or it takes more time to acquire necessary software. There are any number of reasons why work might be halted so having a secondary item to switch to provides a little bit of leeway. If both items are blocked, it's time to raise a red flag to get something unblocked&mdash;not just switch to yet another item. As soon as there are a large number of items in progress, the person working on those items will have difficulty context switching, are more likely to forget what they were doing, and likely incur mistakes.  

<a id="configure"></a>
##Configure the CFD chart (Kanban board) 

Each team can set their preferences for the cumulative flow charts for their Kanban boards.  

1. Open the Board page for the backlog level for which you want to configure and then open the common configuration dialog. Click the ![gear icon](../../work/_img/icons/team-settings-gear-icon.png) gear icon.  

	<img src="../../work/customize/_img/kanban-card-customize-open-settings.png" alt="Kanban board, open common configuration settings" style="border: 1px solid #CCCCCC;" />  

	If you're not a team admin, [get added as one](../../work/scale/manage-team-assets.md#add-team-admin). Only team and project admins can customize the team Kanban boards and CFD charts.  

2. Click the Cumulative flow tab and specify the team's preferences.  

	<img src="_img/cfd-configure-common-settings.png" alt="Kanban board, Common configuration dialog, Cumulative flow" style="border: 1px solid #CCCCCC;" />  

3. Repeat steps 1 and 2 for each backlog level you want to configure.  


<a id="configure-widget"></a>
## Configure the CFD widget    

>[!NOTE]   
><b>Feature availability:</b> For Team Services, you can add the [CFD widget](../widget-catalog.md#cycle-time-widget) to your dashboard. You need to first install the [Analyics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). You can then [add the widget(s) to your dashboard](../add-widget-to-dashboard.md). You must be an account owner or a member of the [Project Collection Administrator group](../../setup-admin/add-administrator-tfs.md) to add extensions.  

You will need to be a team administrator or a member of the Project Administrators group to perform these tasks. See 
[Manage team assets](../../work/scale/manage-team-assets.md#add-team-admin) to get added as a team admin. 

1. If you haven't yet configured your Kanban board, do that now. Define the [columns](../../work/kanban/add-columns.md) and [swimlanes](../../work/kanban/expedite-work.md) that support your workflow processes.  

2. If you want fixed scope CFD charts, make sure that you've [defined the sprint iterations](../../work/scrum/define-sprints.md) for those sprints of interest. 

3. To add a CFD chart to your team dashboard, see [Add a widget to a dashboard](../add-widget-to-dashboard.md). Add the Cumulative Flow Diagram widget. 

	![Cumulative flow diagram widget](_img/cfd-choose-widget.png)  

4. Click the ![Configure widget icon](../_img/icons/configure-icon.png) configure icon to open the configuration dialog. Modify the title, and then select the team, backlog level, swimlanes, and time period you want to monitor.  

	<img src="_img/cfd-configure.png" alt="Configure CFD chart" style="border: 1px solid #CCCCCC;" />    

5. For a continuous flow diagram, select Rolling period and specify the number of days you want to view on the chart.  

	Or, for a fixed scope view, choose and specify the Start date. Choose this view if your team employs a Scrumban process or follows a standard sprint process.  

	The main difference between these two types of CFD charts is that the fixed scope CFD will provide information (in most cases) of scope change.   

6. Choose the color. You can distinguish the CFD for different teams by choosing different colors.

7. Click Save when done. The following image shows an example CFD chart showing 30 days of data. 
   
	<img src="_img/cfd-exampe-rolling-30-days.png" alt="Example CFD chart, rolling 30 days" style="border: 1px solid #CCCCCC;" />    

##Related notes

For the CFD chart to reflect useful information, you'll want to update the status of work items to reflect progress as it occurs. The quickest way to make these updates is through your [Kanban board](../../work/kanban/kanban-basics.md).  

For additional information, see these resources:  

<div style="float:left;width:240px;margin:3px;font-size:100%">
<p style="font-weight:bold;padding-bottom:5px;text-align:center;">Plan and track</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Monitor progress and trends](../monitor-progress-trends.md)</li>
<li style="margin-bottom:2px">[Kanban basics](../../work/kanban/kanban-basics.md)</li>
<li style="margin-bottom:2px">[Task checklists](../../work/kanban/add-task-checklists.md)</li>
<li style="margin-bottom:2px">[Features and epics](../../work/kanban/kanban-epics-features-stories.md)</li>
<li style="margin-bottom:2px">[Add and manage inline tests](../../work/kanban/add-run-update-tests.md)</li>
<li style="margin-bottom:2px">[Git development](../../work/backlogs/connect-work-items-to-git-dev-ops.md)</li>
</ul>
</div>
<div style="float:left;width:180px;margin:3px;font-size:100%">
<p style="font-weight:bold;padding-bottom:5px;text-align:center;">Customize</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Add columns](../../work/kanban/add-columns.md)</li>
<li style="margin-bottom:2px">[WIP limits](../../work/kanban/wip-limits.md)</li>
<li style="margin-bottom:2px">[Split columns](../../work/kanban/split-columns.md)</li>
<li style="margin-bottom:2px">[Expedite work](../../work/kanban/expedite-work.md)</li>
<li style="margin-bottom:2px">[Definition of done](../../work/kanban/definition-of-done.md)</li>
<li style="margin-bottom:2px">[Customize cards](../../work/customize/customize-cards.md)</li>
<li style="margin-bottom:2px">[Card reordering](../../work/kanban/kanban-basics.md#card-reorder-setting)</li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

<a id="switch-team-context">  </a>

### Switch team project or team focus   

Remember that the CFD chart is based on data collected for a specific team. 

You navigate to your team context from the top navigation bar. The method changes slightly depending on the platform/version you work from and the features you have enabled.     

To switch your team focus, see [Work in the web portal, Switch team project or team focus](../../connect/work-web-portal.md#switch-team-context). 

Need more information about teams? See [Multiple teams](../../work/scale/multiple-teams.md) and [Manage team assets](../../work/scale/manage-team-assets.md). 


