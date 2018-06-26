---
ms.topic: include
---


<!--- Team defaults referenced by Agile tools --> 

>**Note**: Some features are available only from VSTS and TFS 2017 or later versions. For details, see [Set team defaults](../../organizations/settings/set-team-defaults.md).

When you define a team, you define the team's: 
- Selected area path(s) 
- Default area path
- Selected iteration path(s)
- Backlog iteration path 
- Default iteration path 

All Agile tools reference the area path(s) defined for a team. For example, one team might handle all work assigned to *Customer Profile* and *Shopping Cart*, while another team only manages work assigned to the *Email* area path.  Also, the set of work items that appear on a backlog or board depend on the current State of a work item or it's parent-child status.   

In addition, several tools reference the team's default iteration and selected iteration paths or sprints. For example, when you add new work items from a backlog or board view, or from a team dashboard, the system assigns the team's default area path and default iteration path to these work items. 

<div style="font-size:90%">

<table valign="top" width="100%" > 
<tr valign="bottom" > 
<th width="20%">Agile tool</th>
<th width="18%">Area path<br/>(see note 1)</th>
<th width="32%">Iteration path</th>
<th width="30%">State</th>
</tr>
<tr valign="top" > 
<td>Portfolio or product backlogs</td>
<td>Selected area path(s)</td>
<td>Equal to or under team's [backlog iteration path](../../organizations/settings/set-team-defaults.md#set-backlog-iteration)</td>
<td>Active (corresponds to a Proposed or InProgress state category, see notes 2, 3)</td>
</tr>


<tr valign="top" > 
<td>Kanban boards (see note 4)</td>
<td>Selected area path(s)</td>
<td>Equal to or under team's [backlog iteration path](../../organizations/settings/set-team-defaults.md#set-backlog-iteration)</td>
<td>Any state (see notes 3, 5)</td>
</tr>

<tr valign="top" > 
<td>Sprint backlogs (see note 4)</td>
<td>Selected area path(s)</td>
<td>Team's selected iteration paths</td>
<td>Any state (see notes 3, 5)</td>
</tr>


<tr valign="top" > 
<td>Task boards (see note 4)</td>
<td>Selected area path(s)</td>
<td>Team's selected iteration paths</td>
<td>Any state (see notes 3, 5)</td>
</tr>

<tr valign="top" > 
<td>New work item widget</td>
<td>Default area path</td>
<td>Default iteration path</td>
<td>n/a</td>
</tr>

</table>

<p><b>Notes:</b><p>
<ol>
<li>Agile tools filter items based on the team's selected area path(s). Teams can choose [whether to include or exclude items assigned to subarea paths](../../organizations/settings/set-team-defaults.md#team-area-paths).</li>
<li>Work items whose State equals Closed, Done, or Removed (corresponding to a Completed category state) don't appear on portfolio and product backlogs.</li>
<li>You can add custom workflow states and assign them to one of three state categories. The [state categories](../customize/workflow-and-state-categories.md) determine which work items appear on backlog and board views. </li>
<li>Kanban boards, sprint backlogs, and task boards only show the last node in a hierarchy, called the leaf node. For example, if you link items within a hierarchy that is four levels deep, only the items at the fourth level appear on the Kanban board, sprint backlog, and task board. To learn more, see [parent-child links between items](../backlogs/resolve-backlog-reorder-issues.md#leaf-nodes).</li>
<li>Work items whose State equals Removed don't appear on boards.</li> 
</ol>
</div>

<div style="clear:left;font-size:100%">
</div>


 