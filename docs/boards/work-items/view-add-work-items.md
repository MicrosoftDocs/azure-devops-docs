---
title: View and add work items from Work Items page
titleSuffix: Azure Boards
description: Learn how to view and filter work items like user stories, issues, and bugs from the Work Items hub and seven personalized pivot views. 
ms.custom: boards-work-items, devx-track-azurecli, contperf-fy20q4,  engagement-fy23
f1_keywords: 
- vs.tfc.teamexplorer.workitems
- vs.tfc.teamexplorer.TeamExplorer
ms.service: azure-devops-boards
ms.assetid: EBDE0739-FAE6-4BEA-8F59-E9D20AFE5FE8
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '>= azure-devops-2019'
ms.date: 02/02/2023
---

# View and add work items using the Work Items page  

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)] 

View work items that you created or are assigned to you. The **Work Items** page provides several personalized pivots, as shown in the following image, and interactive filter functions to streamline listing work items. Use this page to quickly find work items defined across teams within a project. 


::: moniker range=">= azure-devops-2020"
![Screenshot of Boards, Work Items page, Work Item Menu, cloud version.](media/view-add/view-menu-cloud-version.png)  
::: moniker-end
::: moniker range="< azure-devops-2020"
![Screenshot of Boards, Work Items page, Work Item Menu, on-premises version.](media/view-add/view-menu.png)  
::: moniker-end


> [!NOTE]     
> The **Work Items** page is available from Azure DevOps Services, Azure DevOps Server 2019 and later versions, and Visual Studio 2019 RC1. 


[!INCLUDE [temp](../includes/prerequisites-work-items.md)] 


## Open Work Items

You can start viewing and adding work items once you connect to a project. 

<a id="browser" /> 

# [Web portal](#tab/browser)

(1) Check that you've selected the right project, then (2) choose **Boards>Work Items**. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of web portal, Open Boards, Work Items hub.](media/view-add/open-work-items-agile.png)


# [Visual Studio 2019](#tab/visual-studio)

Open Visual Studio 2019, Team Explorer, and then choose **Work Items**. To switch between the **Work Items** (default) view and the legacy view, see [Set the Work Items experience in Visual Studio 2019](set-work-item-experience-vs.md).  

[!INCLUDE [temp](../includes/note-git-vs-github-connect.md)] 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Visual Studio, Team Explorer, Open Work Items hub.](media/view-add/open-work-items-vs-te-complete.png) 

If you don't see the **Work Items** option, you need to connect to a project and not just a repository. From the Connect to a Project dialog. Use **CTRL-Shift** to select your options and then choose **Connect**.

> [!div class="mx-imgBorder"]  
> ![Screenshot of Connect to a Project dialog, connect to a Project and Git repository.](media/view-add/connect-to-a-project-and-github.png)


::: moniker range="azure-devops-2019"

> [!NOTE]   
> The new **Work Items** experience is available when you connect to a Azure Repos Git repository. If you connect to a TFVC repository, you'll continue to see the legacy query-focused experience.  

::: moniker-end


# [Azure DevOps CLI](#tab/azure-devops-cli)

There's no [**az boards**](/cli/azure//boards) command that opens the **Work Items** page at this time. The Azure DevOps CLI commands are valid for Azure DevOps Services only.

***

> [!NOTE]    
> Depending on the process chosen when the project was created&mdash;[Agile](guidance/agile-process-workflow.md), [Basic](../get-started/plan-track-work.md), [Scrum](guidance/scrum-process-workflow.md), or [CMMI](guidance/cmmi-process-workflow.md)&mdash;the types of work items you can create differ. For example, backlog items may be called user stories (Agile), issues (Basic), product backlog items (Scrum), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
>
> For more information, see [About processes and process templates](../work-items/guidance/choose-process.md). 

## View work items

Using the drop-down menu, you can focus on relevant items inside a project using one of seven pivots. Additionally, you can [filter](#filter) and [sort](#sort) each pivot view.  You can also use an Azure DevOps CLI command to view details about a work item.

# [Web portal](#tab/browser)
 
:::row:::
   :::column span="1":::
      ::: moniker range=">= azure-devops-2020"
      ![Screenshot of web portal, Boards, Work Items, Menu options.](media/view-add/view-menu-cloud-version.png)  
      ::: moniker-end
      ::: moniker range="< azure-devops-2020"
      ![Screenshot of web portal, Boards, Work Items, Menu options, Azure DevOps Server 2019 version.](media/view-add/view-menu.png)  
      ::: moniker-end
   :::column-end:::
   :::column span="2":::
      ::: moniker range=">= azure-devops-2022" 
      - **Assigned to me**: lists all work items assigned to you in the project in the order they were last updated. Doesn't include items moved to the **Removed** category state. To open or update a work item, simply click its title.  
      - **Following**: lists work items that you&#39;re [following](follow-work-items.md).  
      - **Mentioned**: lists work items in which you&#39;ve been mentioned in the last 30 days.  
      - **My activity**: lists work items that you&#39;ve recently viewed or updated.  
      - **My team(s)**: lists work items that your team members have recently viewed or updated.  
      ::: moniker-end
      ::: moniker range="azure-devops-2020" 
      - **Assigned to me**: lists all work items assigned to you in the project in the order they were last updated. To open or update a work item, simply click its title.  
      - **Following**: lists work items that you&#39;re [following](follow-work-items.md).  
      - **Mentioned**: lists work items in which you&#39;ve been mentioned in the last 30 days.  
      - **My activity**: lists work items that you&#39;ve recently viewed or updated.  
      - **My team(s)**: lists work items that your team members have recently viewed or updated.  
      ::: moniker-end
      ::: moniker range="< azure-devops-2020" 
      - **Assigned to me**: lists all work items assigned to you in the project in the order they were last updated. To open or update a work item, simply click its title.  
      - **Following**: lists work items that you&#39;re [following](follow-work-items.md).  
      - **Mentioned**: lists work items in which you&#39;ve been mentioned in the last 30 days.  
      - **My activity**: lists work items that you&#39;ve recently viewed or updated.   
      ::: moniker-end
      ---
      - **Recently updated**: lists work items recently updated in the project.  
      - **Recently completed**: lists work items completed or closed in the project.  
      - **Recently created**: lists work items created within the last 30 days in the project.  
   :::column-end:::
:::row-end:::
 
 
# [Visual Studio 2019](#tab/visual-studio)


To view a work item, double-click the title or open the context menu for the work item (right-click or enter the menu key) and select **Open**. A browser window opens with the work item form.

:::row:::
   :::column span="2":::
      ![Screenshot of Visual Studio 2019, Team Explorer, Work Items, context menu of options.](media/view-add/work-item-menu-options-vs.png)  
   :::column-end:::
   :::column span="2":::
      - **Assign to me**: Changes the **Assigned To** field to your user name.    
      - **New Branch...**: Opens a dialog to create a new branch automatically linked to the work item. For more information, see [Drive Git development](../backlogs/connect-work-items-to-git-dev-ops.md).
      - **Complete work item**: Updates the **State** field to Completed, Done, or Closed.
      - **Relate to changes**: Links the work item to the current commit of recent changes.  
   :::column-end:::
:::row-end:::


# [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops"  

You can view a new work item with the [az boards work-item show](/cli/azure/boards/work-item?#az-boards-work-item-show) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).

```azurecli
az boards work-item show --id
                         [--open]
                         [--org]
```

#### Parameters

- **id**: Required. The ID of the work item.
- **open**: Optional. Open the work item in the default web browser.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.

#### Example

The following command opens the bug with the ID 864 in your default web browser. It also displays the results in the Azure DevOps CLI in table format.

```azurecli
az boards work-item show --id 864  --open --output table

ID    Type    Title      Assigned To          State
----  ------  ---------  -------------------  -------
864   Bug     fix-issue  contoso@contoso.com  New
```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]


***

<a id="add-work-item" />

## Add a work item

Adding a work item is just one click away. Choose the work item type from the **New Work Item** drop down menu.  You can also use an Azure DevOps CLI command to add a new work item.

> [!NOTE]   
> New work items are assigned the last **Area Path** and **Iteration Path** selected by the user. 

# [Web portal](#tab/browser)

For example, here we choose User Story. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of web portal, Work Items page, New Work Item.](media/view-add/work-items-hub-new.png)

> [!TIP]    
> Work items you add are automatically scoped to the currently selected team's area and iteration paths. To change the team context, see [Switch project or team focus](../../project/navigation/go-to-project-repo.md?toc=/azure/devops/boards/work-items/toc.json). 

Enter a title and then save the work item. Before you can change the State from its initial default, you must save it.  

![Screenshot of Agile process, User story work item form.](../backlogs/media/add-new-work-item-vsts-user-story.png)  


# [Visual Studio 2019](#tab/visual-studio)


For example, here we choose User Story. 

Choose **New Work Item** and select the work item type you want. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Visual Studio 2019, Work Items hub, New Work Item, choose User Story.](media/view-add/add-user-story-vs-te.png)

A browser window opens with the work item form to complete. 
 

Enter a title and then save the work item. Before you can change the State from its initial default, you must save it.  

![Screenshot of Agile process, User story work item form, opens in web portal.](../backlogs/media/add-new-work-item-vsts-user-story.png)  


# [Azure DevOps CLI](#tab/azure-devops-cli) 


[!INCLUDE [temp](../includes/add-work-items-cli.md)]

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

***

You can [add tags to any work item](../queries/add-tags-to-work-items.md) to filter backlogs, queries, and work item lists. Users with **Basic** access can create new tags by default, users with **Stakeholder** access can only add existing tags. 


<a id="filter" />

## Filter to create personal views

You can filter each work item pivot view by entering a keyword or using one or more of the fields provided, such as work item type (Types), State, Area Path, and Tags. The page remembers the filters you set for each pivot, supporting personalized views across all pivots. To learn more about filtering, see [Filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md).  


# [Web portal](#tab/browser)

> [!div class="mx-imgBorder"]
> ![Screenshot of web portal, Work Items page, Filter options, choose to show Bugs.](media/view-add/work-items-filter-bug.png)

# [Visual Studio 2019](#tab/visual-studio)

> [!div class="mx-imgBorder"]
> ![Screenshot of Visual Studio 2019, Team Explorer, Work Items page, Filter based on a key word.](media/view-add/filter-list-vs-te.png)

# [Azure DevOps CLI](#tab/azure-devops-cli)

There's no [**az boards**](/cli/azure//boards) command that applies to filtering. The Azure DevOps CLI commands are only valid for Azure DevOps Services.

***


<a id="sort" />

## Add columns and sort by a column 

From the web portal, you can sort your view by one of the column fields that you select from the **Column Options** dialog. For more information, see [Change column options](../backlogs/set-column-options.md).

[!INCLUDE [temp](../includes/discussion-tip-azure-devops.md)] 


## Copy selected items to the clipboard or email them

To select several items in a sequence, hold down the shift key from a web portal page. To select several non-sequential items, use the **Ctrl** key. Then, you can use **Ctrl+c** to copy the selected items to a clipboard. Or, you can open the context menu for the selected work items, click ( :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: actions icon), and then select an option from the menu. 

> [!div class="mx-imgBorder"]
> ![Screenshot of web portal, Work Items page, Following view, Select multiple work items, open context menu.](media/view-add/following-context-menu.png)


## Open a view as a query  

From the web portal, you can open any view, filtered view, or selected set of work items as a query. Choose **Open in Queries** or the **Open selected items in Queries** option from the context menu. 

Queries provide other features that you can use, including: 
* Edit one or more fields of several work items    
* Add or remove tags from several work items 
* Change the work item type 
* Delete work items 
* Apply work item templates
* And more

For more information, see [Bulk modify work items](../backlogs/bulk-modify-work-items.md?toc=/azure/devops/boards/work-items/toc.json). To learn more about queries, see [Use the query editor to list and manage queries](../queries/using-queries.md) and [Query fields, operators, and macros](../queries/query-operators-variables.md).


<a id="page-controls">  </a>

## Work Items page controls  

Use the following three controls to manage your views in the web portal.

> [!div class="mx-tdBreakAll"]
> | Control                  | Function                      |
> |--------------------------|-------------------------------|
> | ![Image of View options control icon.](../media/icons/view-options-icon.png) | View/hide completed items | 
> | ![Image of Filter control icon.](../media/icons/filter-icon.png) | [Turn filtering On/Off](#filter)  | 
> | ![Image of Full screen icon.](../media/icons/full-screen-icon.png) / ![Image of Exit full screen icon.](../media/icons/exit-full-screen-icon.png)     | Enter or exit full screen mode      |


## Related articles

- [Azure Boards FAQs](../faqs.yml) 
- [Best tool to add, update, and link work items](best-tool-add-update-link-work-items.md)  
- [Move, change, or delete work items (Recycle Bin)](../backlogs/remove-delete-work-items.md)
- [Manage or enable features](../../project/navigation/preview-features.md)
- [Use work item form controls](work-item-form-controls.md)
- [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md)
- [Work across projects](../../project/navigation/work-across-projects.md)

 

