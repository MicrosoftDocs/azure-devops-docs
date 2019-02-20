---
title: View and filter work items 
titleSuffix: Azure DevOps Services Public Project
description: View and filter work items using the work items page   
ms.technology: devops-public-projects
ms.prod: devops
ms.assetid:
ms.reviewer: 
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.topic: quickstart
ms.date: 02/19/2019
monikerRange: 'azure-devops'
---

# View and filter work items  

[!INCLUDE [temp](_shared/version-public-projects.md)]

When you're viewing a public project, you're able to view work items defined for that project. If you're a contributor or stakeholder, you can also [add and edit work items](../../boards/work-items/view-add-work-items.md).  

[!INCLUDE [temp](_shared/anon-user.md)]

## View work items

To view **Work Items**, choose **Boards**. You can view recently created, updated, and completed work items.  

> [!div class="mx-imgBorder"]
![Boards>Work Items page ](_img/view-work-items/open-work-items-vert-brn.png)

By default, completed work items are hidden. To show them, choose the ![](../../_img/icons/view-options-icon.png) view options icon, and switch the slider to show **Completed Work Items**.
  
To view a work item, choose its title. As an anonymous user (one not signed into the project), you can only view the details shown. You can't modify or add information to the work item.

## Choose your work item view

Using the drop-down menu, you can focus on relevant items using one of the three pivots described next. Additionally, you can [filter](#filter) and [sort](#sort) each pivot view.  

<table>
<tbody valign="top">
<tr>
<td>
![Work Items page, Menu options](_img/view-work-items/view-recently-changed-items.png)
</td>
<td>
<ul>
<li>**Recently updated**: lists work items recently updated in the project. </li>
<li>**Recently completed**: lists work items completed or closed in the project.</li>
<li>**Recently created**: lists work items created within the last 30 days in the project.</li>
</ul>
</td>
</tr>
</tbody>
</table>



<a id="filter" />

## Filter the list of work items

Choose the ![](../../_img/icons/filter-icon.png) filter icon to view the filters available to you. You can filter each view by typing a keyword or using one or more of the fields provided, such as work item type (Types), State, Area Path, and Tags. The page remembers the filters you set for each pivot, supporting personalized views across all pivots.

> [!div class="mx-imgBorder"]
![Work Items page, filter by work item type ](_img/view-work-items/filter-bug.png)

> [!NOTE]  
> Depending on the process chosen when the project was created&mdash;[Agile](../../boards/work-items/guidance/agile-process-workflow.md), [Scrum](../../boards/work-items/guidance/scrum-process-workflow.md), or [CMMI](../../boards/work-items/guidance/cmmi-process-workflow.md)&mdash;the types of work items shown differ. For example, backlog items may be called product backlog items (Scrum), user stories (Agile), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
>
> For an overview of all three processes, see [Choose a process](../../boards/work-items/guidance/choose-process.md).

<a id="sort" />

## Sort your view and other View options

You can sort your view by one of the column fields. If the column fields aren't displaying, choose the ![](../../_img/icons/filter-icon.png) filter icon.

To sort on a column, click the column title. To reverse the sort order, click the column title again.

To view or hide completed work items, choose the ![](../../_img/icons/view-options-icon.png) view options icon, and switch the slider to show/hide **Completed Work Items**.

## Next steps

> [!div class="nextstepaction"]
> [View project homepage or a dashboard](view-project-dashboard-public.md)

