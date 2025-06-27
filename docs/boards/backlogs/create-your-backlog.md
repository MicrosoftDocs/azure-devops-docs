---
title: Create and manage your product backlog in Azure Boards
titleSuffix: Azure Boards
description: Learn how to create, configure, and manage your product backlog in Azure Boards. Add backlog items, set up boards, and customize work item tracking.
ms.custom: boards-backlogs
ms.service: azure-devops-boards
ms.assetid: 04df6b31-ef6c-4285-81a6-96768f03ecf4
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 06/27/2025
#customer intent: As a team member, I want to understand how to create and manage backlogs in Azure Boards to improve my team's workflow.
---

# Create and manage your backlog in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The product backlog is your project plan, which shows what your team intends to deliver. It contains user stories, backlog items, or requirements that you add to it. Your backlog is a flat list of work items, as the following image illustrates, which shows a Scrum process for Azure Boards. For the Agile, Basic, and Capability Maturity Model Integration (CMMI) process models, the **Backlog items** selection appears as **Stories**, **Issues**, and **Requirements**.

:::image type="content" source="media/create-backlog/intro-image.png" alt-text="Screenshot of a Backlog of Scrum process product backlog items.":::

[!INCLUDE [link other articles](../includes/note-configure-customize.md)]

## Prerequisites

[!INCLUDE [prerequisites](../includes/prerequisites.md)]

## Understand backlog and board work items

Before creating and managing your backlog, it's important to understand what work items appear on your backlog and boards. Your product **Backlog** and **Board** display work items that meet the following criteria:

::: moniker range="<=azure-devops"

- Work item type belongs to the Requirements category. The types differ depending on the process selected for your project:  
    - [Basic](../get-started/plan-track-work.md) : Issue, Backlog name=**Issues**  
    - [Agile](../work-items/guidance/agile-process.md): User Story, Backlog name=**Stories**  
    - [Scrum](../work-items/guidance/scrum-process.md): Product Backlog Item, Backlog name=**Backlog items** 
    - [CMMI](../work-items/guidance/cmmi-process.md): Requirement, Backlog name=**Requirements**  
- Work item **Area Path** matches one of the selected team's Area Paths
- Work item **Iteration Path** is under the team's Default Iteration Path

::: moniker-end

[!INCLUDE [temp](../includes/basic-process-note.md)] 

You can determine the work item types that belong to your Requirements category by [opening your product Backlog](create-your-backlog.md) and checking the product backlog name. 

::: moniker range="<=azure-devops"

> [!div class="mx-imgBorder"]
> ![Product backlog level, Backlog items, Stories, or Requirements](../sprints/media/assign-items-sprint/select-product-backlog-agile.png)

::: moniker-end

Look up your team's Area Path(s) and Iteration Paths. For more information, see [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md) and 
[Define sprint paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md#list-team-iterations). 

## Default sprint backlog and Taskboard work items

Your sprint backlog and Taskboard apply the filters associated with your team's default backlog and board work items along with the Iteration Path you select.  

You can only select Iteration Paths that have been [preselected by your team](../../organizations/settings/set-iteration-paths-sprints.md#list-team-iterations). 

Your sprint backlog displays only those work items assigned to the selected sprint. Child tasks assigned to other sprints aren't displayed.

## Add a backlog

If you have a project, you have a backlog. Your backlog contains a list of features and requirements that you want to build, ordered by priority. By default, each project has a team and a set of backlogs for that team. You can add more backlogs if you need to support more teams. When you create a new team, you also create various team assets that a team admin can customize to suit the team's workflow. To add a set of backlogs to support a new team, see [Create or add a team](../../organizations/settings/add-teams.md).

Each team's set of backlogs is associated with one or more work item types. The work item type associated with a backlog depends on the process selected at project creation, team configurations, and process customizations.

The backlogs defined for each default process are:

::: moniker range="<=azure-devops"

- [**Agile**](../work-items/guidance/agile-process.md): **Stories**, **Features**, and **Epics**
- [**Basic**](../get-started/plan-track-work.md): **Issues** and **Epics**
- [**Scrum**](../work-items/guidance/scrum-process.md): **Backlog items**, **Features**, and **Epics**
- [**CMMI**](../work-items/guidance/cmmi-process.md): **Requirements**, **Features**, and **Epics**
::: moniker-end

::: moniker range="<=azure-devops"

To customize your backlogs with custom work item types, add portfolio backlogs, or other supported options, see [Inherited process model](../../organizations/settings/work/inheritance-process-model.md) or [On-premises XML process model](../../reference/on-premises-xml-process-model.md).
::: moniker-end

## Open your backlog

From your web browser, do the following steps to open your product backlog.  

::: moniker range=">= azure-devops-2020"

1. Sign in to your project (`https://dev.azure.com/{Your_Organization}/{Your_Project}`).
1. Select **Boards** > **Backlogs**.

   :::image type="content" source="media/create-backlog/open-backlogs.png" alt-text="Screenshot of sequence selection for opening Backlogs in Boards.":::

   To select a different backlog, choose a different team or select the **View Backlog directory** option. You can also enter a keyword in the search box to filter the team backlogs for the project.

   :::image type="content" source="media/create-backlog/backlog-team-selector.png" alt-text="Screenshot showing team selection dropdown menu.":::

   > [!TIP]
   > Choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to favorite a team backlog. Favorited artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorited icon) appear at the top of the team selector list.

1. Check that you selected **Stories** (for Agile), **Issues** (for Basic), **Backlog items** (for Scrum), or **Requirements** (for CMMI) as the backlog level.

   :::image type="content" source="media/create-backlog/backlog-selector.png" alt-text="Screenshot shows the option to Choose backlog level.":::

1. (Optional) To select which columns display and in what order, select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and **Column options**. For more information, see [Change column options](../backlogs/set-column-options.md).

   :::image type="content" source="media/create-backlog/open-column-options.png" alt-text="Screenshot showing Column Options button selection.":::

::: moniker-end

::: moniker range="<=azure-devops"
[!INCLUDE [tip backlog view](../includes/tip-configure-backlog-view.md)]
::: moniker-end

## Track bugs on your backlog

Some teams like to track bugs along with requirements on the backlog. Other teams like to track bugs as tasks completed in support of a requirement, so bugs appear on their [Taskboard](../sprints/task-board.md). Before you determine how to manage bugs, see [Bugs as requirements or tasks](../configure-customize.md#show-bugs) and [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md).

<a id="convert-ideas"></a>

## Convert ideas into backlog items

Your backlog shows work that you plan to do or that's in progress. As soon as the **State** of a work item is set to *Done* or *Completed*, the work item doesn't appear on your backlog. You can use the [backlog controls](backlogs-overview.md#product-backlog-controls) to filter or change your view.

If you already defined a long list of items, you don't have to reenter them one at a time. Instead, use [bulk work items with CSV files](../queries/import-work-items-from-csv.md) or [Microsoft Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) to import them to your backlog.

::: moniker range="<=azure-devops"

1. Before you add work items, select :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **View options** and turn the slider for **Parents** and **Forecasting** to **Off**. Optionally, turn **In Progress Items** on or off.

   :::image type="content" source="media/create-backlog/view-options-parents-off.png" alt-text="Screenshot of view options parents turned off.":::

1. To add a work item, select :::image type="icon" source="../../media/icons/blue-add-icon.png" border="false":::**New Work Item** and enter a title. Select **Enter** or select **Add to top**. Work items are assigned the default **Area Path** and **Iteration Path** selected for the team. For more information, see [Manage and configure team tools](../../organizations/settings/manage-teams.md).

   :::image type="content" source="media/create-backlog/add-new-items-agile.png" alt-text="Screenshot of work item added by using New Work Item.":::

   > [!NOTE]  
   > If you have **Stakeholder** access, you can only add work items to the bottom of the backlog. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).

::: moniker-end

Depending on whether you create your project with [Basic](../get-started/plan-track-work.md), [Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), or [CMMI](../work-items/guidance/cmmi-process.md), the items in your backlog might be called issues, user stories, PBIs, or requirements. All of these terms describe the customer value to be delivered and the work to be performed.

By default, user stories appear on Agile backlogs, issues on Basic backlogs, PBIs and bugs appear on Scrum backlogs, and requirements appear on CMMI backlogs.

<a id="reorder-backlog">  </a>
<a id="move-items-priority-order">  </a>

## Reorder your backlog

Reorder your items to create a prioritized list of work. Review and prioritize your backlog frequently to help your team know what's most important to deliver next.

You can't sort your backlog on a column. To view a sorted listed, select **Create query**. Save and open the query, and sort the query results. For more information about queries, see [Use the query editor to list and manage queries](../queries/using-queries.md).

To reorder your backlog, drag the work items. Or, if you prefer to use the keyboard, hold down the Alt key and use the up and down arrows.

:::image type="content" source="media/create-backlog/cyb-order-backlog.png" alt-text="Screenshot of Reordered work items in the backlog.":::

> [!NOTE]  
> To reorder a backlog, have at least Basic access. If you have Stakeholder access, you can't reorder backlog items. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).

Backlogs that participate in portfolio management or that contain nested same-type child items might not allow you to reorder the items. For more information, see these articles:

- [Work with multi-team ownership of backlog items](backlogs-overview.md#multi-team)
- [Troubleshoot reordering and nesting issues](resolve-backlog-reorder-issues.md)

<a id="estimates">  </a>

## Add details and estimates to backlog items

Building and prioritizing your backlog provides a high-level roadmap. Before your team can start work on any item, however, they need more details. Capture the details within the work item form.

To open each item, double-click or select **Enter**. Add all the information you want to track. Change one or more field values, add a description, or make a note in the **Discussion** section. You can also choose the :::image type="icon" source="../media/icons/icon-attachments-tab-wi.png" border="false"::: **Attachments** tab and drag a file onto it to share the file with others.  

Enter as much detail as the team needs to do the following tasks:

- Understand the scope
- Estimate the work required
- Develop tests
- Ensure that the end product meets acceptance criteria

[!INCLUDE [note user assigned](../includes/note-user-assigned.md)]

### [Agile process](#tab/agile-process)

For example, here we assign the story to Raisa Pokrovskaya and we add a discussion note, at-mentioning Raisa.

:::image type="content" source="../get-started/media/plan-track-work/user-story-form-add-details.png" alt-text="Screenshot of User Story work item form, add details.":::

Select **Save & Close** when you're done.

### [Basic process](#tab/basic-process)

For example, here we assign the issue to Raisa Pokrovskaya and we add a discussion note, at-mentioning Raisa.

:::image type="content" source="../get-started/media/track-issues/issue-form-add-details.png" alt-text="Screenshot of Issues work item form, add details.":::

Choose **Save & Close** when you're done.

### [Scrum process](#tab/scrum-process)

For example, here we assign the product backlog item to Christie Church and set an Effort level of 8.

:::image type="content" source="media/create-backlog/pbi-form.png" alt-text="Screenshot of Product Backlog Item form.":::

Choose **Save & Close** when you're done.

### [CMMI process](#tab/cmmi-process)

For example, here we assign the product backlog item to Jamal Hartnett and set Size to 8.

:::image type="content" source="../work-items/guidance/media/cmmi-requirement-form.png" alt-text="Screenshot of Requirements work item form.":::

Choose **Save & Close** when you're done.

***

To plan a sprint, at a minimum, estimate the effort involved to implement each backlog item. To capture effort in the work item form, use **Effort** for Basic or Scrum, **Story Points** for Agile, or **Size** for CMMI.

<a name="estimates"></a>

:::row:::
   :::column span="":::
      **Field**
   :::column-end:::
   :::column span="3":::
      **Usage**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Effort](../queries/query-numeric.md), [Story Points](../queries/query-numeric.md), [Size](../queries/query-numeric.md)
   :::column-end:::
   :::column span="3":::
      Provide a relative estimate of the amount of work required to complete a PBI. For user stories and requirements, you capture estimates in **Story Points** and **Size**.

      Most Agile methods recommend that you set estimates for backlog items based on relative size of work. Such methods include powers of 2 (1, 2, 4, 8) and the Fibonacci sequence (1, 2, 3, 5, 8, and so on). Use any numeric unit of measurement your team prefers.  

      The estimates you set for **Effort**, **Size**, or **Story Points** are used to calculate [velocity](../../report/dashboards/team-velocity.md) and [forecast sprints](../sprints/forecast.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Business Value](../queries/query-numeric.md)
   :::column-end:::
   :::column span="3":::
      Specify a priority that captures the relative value of a PBI compared to other PBIs. The higher the number, the greater the business value.

      Use this field when you want to capture a priority separate from the changeable backlog stack ranking.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Description](../queries/titles-ids-descriptions.md)
   :::column-end:::
   :::column span="3":::
      Provide enough detail to create shared understanding of scope and support estimation efforts. Focus on the user, what they want to accomplish, and why. Don't describe how to develop the product. Do provide sufficient details so that your team can write tasks and test cases to implement the item.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Acceptance Criteria](../queries/titles-ids-descriptions.md)
   :::column-end:::
   :::column span="3":::
      Define what *Done* means by describing the criteria for the team to use to verify whether the PBI or the bug fix is fully implemented.

      Before work begins on a PBI or bug, describe the criteria for customer acceptance as clearly as possible. To determine the acceptance criteria, have conversations between the team and customers. These criteria help ensure a common understanding within the team to meet customer expectations. Also, this information provides the basis for acceptance testing.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Impact Assessment](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi) (CMMI only)
   :::column-end:::
   :::column span="3":::
      Describes the customer impact of not implementing the requirement. You might include details from the Kano model about whether this requirement is in the surprise, required, or obvious categories.
   :::column-end:::
:::row-end:::

<a id="show-hide-in-progress"></a>  

## Show or hide In Progress Items

::: moniker range="<=azure-devops"

From the **View options** selector, you can turn on **In Progress Items**. If you turn it off, items that are in the *Active*, *Committed*, or *Resolved* states or states that map to the [In Progress category state](../work-items/workflow-and-state-categories.md) don't appear in the backlog.

::: moniker-end

::: moniker range=">= azure-devops-2020"

:::image type="content" source="media/create-backlog/in-progress-control-2020.png" alt-text="Screenshot shows the  View options selector with In progress selected.":::

::: moniker-end

You'd likely choose to hide **In Progress items** when you want to forecast work. For more information, see [Forecast your product backlog](../sprints/forecast.md).

<a id="show-hide-completed"></a>  

::: moniker range=">= azure-devops-2020"

## Show or hide work items in Completed state

From the **View options** selector, you can choose to show or hide **Completed Child items**.

:::image type="content" source="media/create-backlog/completed-child-items-control-2020.png" alt-text="Screenshot shows the View options selector with Completed child items selected.":::

Choose to show Completed child items when you want to [view rollup columns](display-rollup.md).

Choose to hide Completed child items when you want to forecast work. For more information, see [Forecast your product backlog](../sprints/forecast.md).

[!INCLUDE [temp](../includes/note-closed-items.md)]

::: moniker-end

Your product backlog is one of three classes of backlogs available to you, *backlogs*, *boards*, and *plans*. If you don't see the work items you expect on your backlog, see [Set up your backlogs and boards](set-up-your-backlog.md).

## Next steps

With your backlog in place, your team can begin work on the top-priority items. Now it's time to decide how you want to work as a team. Do you want to use Scrum or Kanban? You can use these methods independently or together.

> [!div class="nextstepaction"]
> [Scrum: Schedule sprints](../sprints/define-sprints.md) or [Kanban](../boards/kanban-quickstart.md)

Teams who want the least overhead for tracking and estimating might prefer Kanban. Teams who like to work at a steady cadence and plot the details of their sprint plan might prefer Scrum and sprint planning.

## Related articles

::: moniker range=">= azure-devops-2020"

- [Configure and customize Azure Boards](../configure-customize.md)  
- [Bulk modify work items](bulk-modify-work-items.md)
- [Copy or clone work items](copy-clone-work-items.md)
- [Display rollup progress bars or counts](display-rollup.md)
- [Interactively filter backlogs, boards, queries, and plans](filter-backlogs-boards-plans.md)
- [Backlog priority or stack rank order](backlogs-overview.md#stack-rank)
- [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md)
- [Add a team, move from one default team to several teams](../../organizations/settings/add-teams.md)
- [Use categories to group work item types](/previous-versions/azure/devops/reference/xml/use-categories-to-group-work-item-types)
- [Workflow states & state categories](../work-items/workflow-and-state-categories.md) 
- [Automate work item state transitions](../work-items/automate-work-item-state-transitions.md)

::: moniker-end

::: moniker range="< azure-devops"

- [Bulk modify work items](bulk-modify-work-items.md)
- [Copy or clone work items](copy-clone-work-items.md)
- [Filter product and portfolio backlogs](filter-backlogs-boards-plans.md)
- [Backlog priority or stack rank order](backlogs-overview.md#stack-rank)
- [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md)
- [Add a team, move from one default team to several teams](../../organizations/settings/add-teams.md)
- [Use categories to group work item types](/previous-versions/azure/devops/reference/xml/use-categories-to-group-work-item-types)
- [Workflow states & state categories](../work-items/workflow-and-state-categories.md) 
- [Automate work item state transitions](../work-items/automate-work-item-state-transitions.md)

::: moniker-end
