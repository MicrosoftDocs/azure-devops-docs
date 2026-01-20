---
title: View and add work items
titleSuffix: Azure Boards
description: Learn how to view and filter work items like user stories, issues, and bugs, as well as create them.
ms.custom: boards-work-items, devx-track-azurecli, engagement-fy23
f1_keywords: 
- vs.tfc.teamexplorer.workitems
- vs.tfc.teamexplorer.TeamExplorer
ms.service: azure-devops-boards
ms.assetid: EBDE0739-FAE6-4BEA-8F59-E9D20AFE5FE8
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: "<=azure-devops"
ms.update: 90-days
ms.date: 01/12/2026
---

# View and add work items

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)] 

This article shows how to view, filter, and create work items (user stories, issues, bugs, tasks). It covers the most common ways to add work items: the web portal, Boards/Backlogs/Sprints pages, Visual Studio, and the Azure DevOps CLI.

What you learn:
- How to open and navigate the Work items page.
- How to filter and save personal views.
- How to add work items from different entry points (web, boards, Visual Studio, CLI).

To create test cases and link them to user stories, see [Add, run, and update inline tests](../boards/add-run-update-tests.md) and [Create test plans and test suites](../../test/create-a-test-plan.md).

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites-work-items.md)] 

[!INCLUDE [note-new-boards-hub-default-images](../includes/note-new-boards-hub-default-images.md)]

[!INCLUDE [enable-mcp-server](../includes/enable-mcp-server.md)] 

## Open the Work items page

There are three common ways to open the Work items page.

# [Web portal](#tab/browser)

From your project, choose **Boards** > **Work items**.  

> [!div class="mx-imgBorder"]  
> ![Screenshot of web portal, Open Boards, Work Items hub.](media/view-add/open-work-items-agile.png)

# [Visual Studio](#tab/visual-studio)

Open Visual Studio, Team Explorer, and choose **Work Items**. To switch between the modern and legacy Work Items experience, see [Set the Work Items experience in Visual Studio](set-work-item-experience-vs.md).

[!INCLUDE [temp](../includes/note-git-vs-github-connect.md)]

> [!div class="mx-imgBorder"]  
> ![Screenshot of Visual Studio, Team Explorer, Open Work Items hub.](media/view-add/open-work-items-vs-te-complete.png) 

If you don't see **Work Items**, you aren't connected to a project. Use the Connect to a Project dialog (use CTRL+Shift to select multiple options) and then choose **Connect**.

> [!div class="mx-imgBorder"]  
> ![Screenshot of Connect to a Project dialog](media/view-add/connect-to-a-project-and-github.png)

# [Azure DevOps CLI](#tab/azure-devops-cli)

The Azure DevOps CLI lets you list and operate on work items (for Azure DevOps Services). It doesn't open the web UI. See the following CLI section for examples.

---

> [!NOTE]    
> The available work item types depend on the process chosen when the project was created—[Agile](guidance/agile-process-workflow.md), [Basic](../get-started/plan-track-work.md), [Scrum](guidance/scrum-process-workflow.md), or [CMMI](guidance/cmmi-process-workflow.md). Backlog items might be called user stories, issues, product backlog items, or requirements depending on the process.
>
> For more information, see [About processes and process templates](../work-items/guidance/choose-process.md). 

## View work items

Use the Work items page to quickly find items assigned to you, items you're following, items that mention you, and more. Each pivot has interactive filters and the page remembers your filter settings per pivot.

# [Web portal](#tab/browser)

Use the pivot menu to select a focus (for example, "Assigned to me") and then apply filters to narrow results.

:::row:::
   :::column span="1":::
      ::: moniker range="<=azure-devops"
      ![Screenshot of web portal, Boards, Work Items, Menu options.](media/view-add/view-menu-cloud-version.png)  
      ::: moniker-end
   :::column-end:::
   :::column span="2":::
      ::: moniker range=">= azure-devops-2022" 
      - **Assigned to me**: Items assigned to you (sorted by last update). Items in the Removed state are excluded.  
      - **Following**: Items you're following.  
      - **Mentioned**: Items mentioning you (last 30 days).  
      - **My activity**: Items you recently viewed or updated.  
      - **My team(s)**: Items your team members recently viewed or updated.  
      ::: moniker-end
      
   :::column-end:::
:::row-end:::

Other pivots:
- **Recently updated—items updated recently in the project.
- **Recently completed—items completed/closed in the project.
- **Recently created—items created in the last 30 days.

You can sort by any column (use Column Options). For more, see [Change column options](../backlogs/set-column-options.md).

# [Visual Studio](#tab/visual-studio)

Double-click the work item title or open the context menu and choose **Open**. The work item opens in a browser with the full form.

:::row:::
   :::column span="2":::
      ![Screenshot of Visual Studio, Team Explorer, Work Items, context menu of options.](media/view-add/work-item-menu-options-vs.png)  
   :::column-end:::
   :::column span="2":::
      - **Assign to me**: Set **Assigned To** to your account.  
      - **New Branch...**: Create a branch linked to the work item. See [Drive Git development](../backlogs/connect-work-items-to-git-dev-ops.md).  
      - **Complete work item**: Set the State to Completed/Done/Closed.  
      - **Relate to changes**: Link the work item to recent commits.  
   :::column-end:::
:::row-end:::

# [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops"  

You can inspect work items with the Azure DevOps CLI. Example:

```azurecli
az boards work-item show --id 864 --open --output table --org https://dev.azure.com/MyOrganizationName/
```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

---

## Filter to create personal views

Filter each work item pivot view by entering a keyword or using fields like work item type (Types), State, Area Path, and Tags. The page remembers your filters for each pivot, providing personalized views across all pivots. For more information, see [Filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md).

# [Web portal](#tab/browser)

> [!div class="mx-imgBorder"]
> ![Screenshot of web portal, Work Items page, Filter options, choose to show Bugs.](media/view-add/work-items-filter-bug.png)

# [Visual Studio](#tab/visual-studio)

> [!div class="mx-imgBorder"]
> ![Screenshot of Visual Studio, Team Explorer, Work Items page, Filter based on a key word.](media/view-add/filter-list-vs-te.png)

# [Azure DevOps CLI](#tab/azure-devops-cli)

No [**az boards**](/cli/azure//boards) command applies to filtering. Azure DevOps CLI commands are only valid for Azure DevOps Services.

---

## Add work items

You can add work items from the **Work Items** page or from a **Boards**, **Backlogs**, or **Sprints** page in the web portal, from Visual Studio, or by using the Azure DevOps CLI.

## Add a work item from the Work items page

> [!NOTE]   
> New work items are assigned to the last **Area Path** and **Iteration Path** selected by the user. 

# [Web portal](#tab/browser)

Select **New Work Item** and choose the work item type from the drop-down menu.
For example, here we choose User Story. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of web portal, Work Items page, New Work Item.](media/view-add/work-items-hub-new.png)

> [!TIP]    
> Work items you add are automatically assigned to the current team's area and iteration paths. To change the team context, see [Switch project or team focus](../../project/navigation/go-to-project-repo.md?toc=/azure/devops/boards/work-items/toc.json). Enter a title and save the work item. You must save it before changing its initial default state.  

![Screenshot of Agile process, User story work item form.](../backlogs/media/add-new-work-item-vsts-user-story.png)  

# [Visual Studio](#tab/visual-studio)

1. Select **New Work Item** and choose the work item type you want. For example, we choose User Story.

   > [!div class="mx-imgBorder"]
   > ![Screenshot of Visual Studio, Work Items hub, New Work Item, choose User Story.](media/view-add/add-user-story-vs-te.png)

   A browser window opens, displaying the work item form for you to complete.
 
2. Enter a title and then **Save** the work item. You must save it before changing its initial default state.

   ![Screenshot of Agile process, User story work item form, opens in web portal.](../backlogs/media/add-new-work-item-vsts-user-story.png)  

# [Azure DevOps CLI](#tab/azure-devops-cli) 

[!INCLUDE [temp](../includes/add-work-items-cli.md)]

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

---

[Add tags to any work item](../queries/add-tags-to-work-items.md) to filter backlogs, queries, and work item lists. Users with **Basic** access can create new tags, while users with **Stakeholder** access can only add existing tags.

## Add a work item from a Boards, Backlogs, or Sprints page

Do the following steps to add a work item from your Boards, Backlogs, or Sprints page.

### [Browser](#tab/browser/)

1. From your **Boards**, **Backlogs**, or **Sprints** page, choose the :::image type="icon" source="../../media/icons/blue-add.png" border="false"::: plus icon or **+ New Work Item**. The following example shows creating a work item from a board.
   
   :::image type="content" source="media/new-work-item-button.png" alt-text="Screenshot showing highlighted New item button, for creating a work item.":::

   > [!NOTE]
   > Depending on the process chosen when the project was created&mdash;[Agile](../work-items/guidance/agile-process.md), [Basic](../get-started/plan-track-work.md), [Scrum](../work-items/guidance/scrum-process.md),
   or [CMMI](../work-items/guidance/cmmi-process.md)&mdash;the types of work items you can create are different. For example, backlog items might be called user stories (Agile), issues (Basic) product backlog items (Scrum), or requirements (CMMI). All four are similar: they describe the customer value to deliver and the work to be performed.
   >
   > For more information, see [About processes and process templates](../work-items/guidance/choose-process.md).

2. Select a work item type from the dropdown menu, enter a title, and then select **Enter**. From a board, for example, you can also select **Add to top**. Before you can change the state from its initial default, save it.  

   ![Screenshot showing Agile process, User story work item form.](media/new-work-item.png)  

You can [add tags to any work item to filter backlogs and queries](../queries/add-tags-to-work-items.md).

Added work items are automatically scoped to your team's default area path and iteration path. To change the team context, see [Switch project or team focus](../../project/navigation/go-to-project-repo.md).

Create as many work items as you need of the type you need to track the work you want to manage.  

### [Visual Studio](#tab/visual-studio/)

1. Open Visual Studio, Team Explorer, and then choose **Work Items**. 

   > [!div class="mx-imgBorder"]
   > ![Screenshot shows selection sequence of Visual Studio, Team Explorer, Choose Work Items.](../work-items/media/view-add/open-work-items-vs-te-complete.png)
   If you don't see the **Work Items** option, you need to connect to a project and not just a repository. From the Connect to a Project dialog. Use **CTRL-Shift** to select your options and then choose **Connect**.

   > [!div class="mx-imgBorder"]  
   > ![Connect to a Project dialog, connect to a Project and Git repository](../work-items/media/view-add/connect-to-a-project-and-github.png)

1. Choose **New Work Item** and select the work item type you want. 

   > [!div class="mx-imgBorder"]  
   > ![Work Items, Add User Story](../work-items/media/view-add/add-user-story-vs-te.png)

   When you work within Visual Studio 2017 or later version, a browser window opens with the work item form to complete. If you work within Visual Studio 2015 or earlier version, a work item form opens within Visual Studio. 

### [Azure DevOps CLI](#tab/azure-devops-cli/)

[!INCLUDE [temp](../includes/add-work-items-cli.md)]

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

* * *

## Open a view as a query  

From the web portal, you can open any view, filtered view, or selected set of work items as a query. Choose **Open in Queries** or the **Open selected items in Queries** option from the context menu. 

Queries provide the following features and more: 
* Edit one or more fields of several work items    
* Add or remove tags from several work items 
* Change the work item type 
* Delete work items 
* Apply work item templates

For more information, see [Bulk modify work items](../backlogs/bulk-modify-work-items.md?toc=/azure/devops/boards/work-items/toc.json). For more information about queries, see [Use the query editor to list and manage queries](../queries/using-queries.md) and [Query fields, operators, and macros](../queries/query-operators-variables.md).

## Use work items page controls  

Use the following three controls to manage your views in the web portal.

> [!div class="mx-tdBreakAll"]
> | Control    | Function       |
> |--------------------------|-------------------------------|
> | ![Screenshot of View options control icon.](../media/icons/view-options-icon.png) | View/hide completed items | 
> | ![Screenshot of Filter control icon.](../media/icons/filter-icon.png) | [Turn filtering On/Off](#filter-to-create-personal-views)  | 
> | ![Screenshot of Full screen icon.](../media/icons/full-screen-icon.png) / ![Image of Exit full screen icon.](../media/icons/exit-full-screen-icon.png)     | Enter or exit full screen mode      |

## Next step

> [!div class="nextstepaction"]
> [Manage work items](../backlogs/manage-work-items.md)

## Related content

- [Azure Boards FAQs](../faqs.yml)   
- [Move, change, or delete work items (Recycle Bin)](../backlogs/remove-delete-work-items.md)
- [Manage or enable features](../../project/navigation/preview-features.md)
- [Use work item form controls](about-work-items.md#work-item-form-controls)
- [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md)
- [Work across projects](../../project/navigation/work-across-projects.md)
