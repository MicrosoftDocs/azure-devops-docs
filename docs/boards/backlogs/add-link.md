---
title: Link work items and other objects
titleSuffix: Azure Boards
description: Learn how to link one or more work items to other work items, to a new git branch, and more.
ms.custom: cross-project, devx-track-azurecli
ms.service: azure-devops-boards
ms.assetid: 7130A14B-C760-4622-B97A-8DA27A1B3D02  
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 07/26/2023
---

# Link work items and other objects

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="azure-devops"

You can [link work items to other work items](#link-to-an-existing-work-item) to manage dependencies and see relationships within your work. These work items can be within the same project or [in different projects](#link-to-a-remote-work-item) in your organization. You can also link work items to other objects such as versioned items, or network resources, and [external (Git) builds and commits](#link-work-items-to-pull-requests). 

::: moniker-end

::: moniker range="< azure-devops"

You can [link work items to other work items](#link-to-an-existing-work-item) to manage dependencies and see relationships within your work. These work items can be within the same project or [in different projects](#link-to-a-remote-work-item) in your collection. You can also link work items to other objects such as versioned items, or network resources, and [external (Git) builds and commits](#link-work-items-to-pull-requests).

::: moniker-end

[!INCLUDE [temp](../includes/prerequisites.md)] 

## Link several work items 

1. From the web portal, open a [backlog](create-your-backlog.md) or [query results page](../queries/view-run-query.md), and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to add a link to.

2. Open the **&hellip;** context menu of one of the selected work items, choose **Add link**, and then choose **Existing item...** or **New item...**. 

    In the following example, we multi-select from the product backlog and choose **Existing item...**.

   :::image type="content" source="media/add-link/multi-select-add-link-vsts.png" alt-text="Screenshot of backlog context menu, Multi-select items in backlog, open context menu, choose Add link to an existing work item.":::

## Link to an existing work item  

From the **Add link** dialog, choose from the following the following link types. For more information, see [Link type reference](../queries/link-type-reference.md).

   - **Duplicate**: When two work items capture the same information; close one of the work items and keep the other one active.  
   - **Parent/Child**: When you want to break down work items into smaller items--for example, break down features into stories, or stories into tasks.
   - **Predecessor-Successor**: When you want to track tasks that must be completed before you can start others.
   - **Related**: When the work items being linked are at the same level--such as two user stories that define features that overlap one another--or to link work items that are defined in different projects or managed by different teams.

> [!TIP]
> Don't nest work items of the same type. While the system allows you to nest work items of the same type--such as, linking bugs to bugs or bugs to user stories when tracking both types on your product backlog--it can cause problems. For example, drag-and-drop of work items on a backlog or display of items on a Kanban board may not work. For more information, see [Fix display, reordering, and nesting issues](resolve-backlog-reorder-issues.md).

#### [Browser](#tab/browser/)

1. From the **Add link** dialog, select the link type, enter a work item ID, and then choose **OK**. 

   In the following example, we use the **Related** link type to link three items to the bug with ID of *400*. 

::: moniker range="azure-devops"
   :::image type="content" source="media/add-link/add-link-dialog-s136.png" alt-text="Screenshot of Add link dialog, web portal, to an existing work item.":::

   You can only add links one at a time. (You can no longer enter their IDs separated by commas or spaces.) To quickly find work items of interest, use [work item search](../../project/search/functional-work-item-search.md).
::: moniker-end 

2. To view the work items selected for linking, you can choose the  :::image type="icon" source="../media/icons/info.png" border="false":::.

:::image type="content" source="media/add-link/info-linked-items.png" alt-text="Screenshot of Add link dialog to an existing work item.":::

::: moniker range="tfs-2018"
:::image type="content" source="media/add-link/link-multi-to-existing.png" alt-text="Screenshot of backlog context menu, choose Add link to an existing work item, TFS-2018 and previous versions.":::

To link to multiple work items, enter their IDs separated by commas or spaces. If you don't know the IDs or you want to link to an item in a different project, you can choose :::image type="icon" source="../../media/icons/more-actions.png" border="false":::  **More actions**. 
::: moniker-end 

3. If you're working from the **Query Results** page, bulk save the work items you've modified. When you work from a backlog, work items automatically save.

::: moniker range=">= azure-devops-2019"
:::image type="content" source="media/bulk-modify/query-results-bulk-save-items.png" alt-text="Screenshot of Query results page, save bulk modified items.":::
::: moniker-end 

::: moniker range="tfs-2018"
:::image type="content" source="media/bulk-modify-link-existing-bulk-save-ts.png" alt-text="Screenshot of Query results page, multi-select items, bulk save modified work items, TFS-2018 and earlier versions.":::
::: moniker-end 

### [Visual Studio](#tab/visual-studio/)

1. From the **Add link to Multiple Items** dialog, select the link type, enter a work item ID, and then choose **OK**. 

   In the following example, we use the **Related** link type to link several items to the user story with ID of *4654*. 

   :::image type="content" source="media/add-link-related-existing-item-vs.png" alt-text="Screenshot of Visual Studio, Add link dialog.":::       

2. To link to multiple work items, enter their IDs separated by commas or spaces. If you don't know the IDs or you want to link to an item in a different project, you can select the Browse button. 

3. Bulk save the work items you've modified. 

* * *

::: moniker range="azure-devops"

## Change the link type of an existing link

> [!NOTE]   
> The **Edit link** feature requires you to [enable the **New Boards Hub** preview feature](../../project/navigation/preview-features.md).

1. Open your work item and select **Links**.  

2. Select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions** > **Edit link**.

	:::image type="content" source="media/add-link/change-link-type.png" alt-text="Screenshot of Links tab, open More actions, choose Edit link option.":::

3. Choose the link type to change to, and then select **Save**.

	:::image type="content" source="media/add-link/edit-link-dialog.png" alt-text="Screenshot of Edit link dialog. ":::

4. **Save** the work item.

::: moniker-end

## Link to a new work item   

Here, we've selected to add a link to the selected work items.  

1. Specify the link type, work item type, and title of the new work item. Choose **OK**.  

   :::image type="content" source="media/add-link-related-new-item-issue.png" alt-text="Screenshot of Add link dialog, Link to new work item.":::

2. A work item of the type you selected opens. Enter additional information and **Save** the work item.

   :::image type="content" source="media/add-link/new-issue-linked-item.png" alt-text="Screenshot of new work item Issue added.":::

3. If you're working from the Query Results page, bulk save the work items you've modified.  

::: moniker range="azure-devops"

## Link to a remote work item 

You can link work items to objects defined in other Azure DevOps organizations as long as both organizations use the same Azure Active Directory to manage users. 

1. Choose from one of the following two remote link types supported. 

   - **Consumes From/Produces For**: When you want to track dependencies of work items that are defined in different organizations and managed by different teams. 
   - **Remote Related**: When the work items being linked are defined in different organizations and managed by different teams, but don't have strong inter-dependencies.

2. From the **Add link** dialog, select the link type, enter the URL of the remote work item, and then choose OK. 

   In the following example, we use the **Remote Related** link type to link to  work item ID *350* that exists in the *remotelinkingtest2* organization, *RemoteLinking* project. 

   :::image type="content" source="media/add-link/add-remote-related-link.png" alt-text="screenshot of add remove work item link.":::

The link tab maintains a count of all links to the work item.  The [*Remote Link Count* field](../queries/linking-attachments.md) maintains a count of the number of links added to a work item that link to a work item defined in another project or organization. 

The following example shows two remote links, indicated by the  :::image type="icon" source="../../media/icons/cloud-link.png" border="false":::  cloud icon, added to a user story. 

:::image type="content" source="media/add-link/link-tab-remote-links.png" alt-text="Screenshot of User Story form, Link tab, showing two external links.":::

::: moniker-end 

## Link several work items to a new git branch 

You can add a new git branch and link them to existing work items at the same time. 

From a backlog or query results page, [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to link to a new git branch, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon, and then **New branch...**. For more information, see [Link work items to Git development objects](connect-work-items-to-git-dev-ops.md).  

:::image type="content" source="media/add-link/link-git-branch.png" alt-text="Screenshot of backlog, context menu, choose Link multiple backlog items to a git branch.":::

[!INCLUDE [temp](../../includes/link-work-item-builds-projects.md)]

::: moniker range="tfs-2018"
## Find work items to link to   
From the **Add link** dialog, you can open a secondary dialog to help you choose one or more work items to link to. If you're going to find and list work items to link to by using a saved query, first [define the query](../queries/using-queries.md) that you want to use. 

1.  From the **Add link** dialog, choose the &hellip; context menu or **Browse** button (Visual Studio) to open the following dialog. 

   :::image type="content" source="media/add-link-choose-linked-work-item-by-title.png" alt-text="Screenshot of linked work items."::: 

   If the work items are in another project, then first open that project. Then, make your selections: 

   - **Query**: When you've defined a query that you know contains the set or superset of the work items that you want.   
   - **IDs**: When you know the IDs of the work items that you want to link to. 
    In the **IDs** box, type the IDs of the work items that you want to find, separated by commas or spaces. 
   - **Title contains**: To find work items that have a common word or phrase in the title field. In the **and type** list, select the type of work item that you want to retrieve.   

   To minimize the time required to run the query, narrow the filter criteria of the search.  

2.  Select the **Find** button. Only those work items defined for the selected project and specified work item type are listed. To sort on a column field, choose the column title.

3.  In the list of returned work items, select one or more work items.   

    - From the web portal: Hold down the shift key to select several items in a sequence. Use the Ctrl key to select several non-sequential items.   

    - From Visual Studio: Select each work item that should link to the current work item. You can also press the SHIFT key while clicking to select a range of work items, or press the CTRL key while clicking to select multiple work items.  
::: moniker-end

::: moniker range=">= azure-devops-2020"

## Link work items to pull requests

1. In the description of your pull request, enter `#` to trigger the `#ID` work item picker. You see a list of 50 work items that you've recently modified or are assigned to you.

   :::image type="content" source="media/add-link/link-pr-to-work-item.png" alt-text="Screenshot of work item list produced when entering # in PR description.":::

2. Enter up to five keywords that match the work item type, ID, or title to narrow the list of suggested work items.

   :::image type="content" source="media/add-link/keyword-pr-link.png" alt-text="Screenshot of entering keyword after # and resulting work item in search":::

::: moniker-end

[!INCLUDE [temp](../../boards/includes/view-linked-objects.md)]


[!INCLUDE [temp](../../includes/set-work-item-state-pull-request.md)]

## More options for modifying links in bulk

Other features you can use to quickly link or change links that use the parent-child link type (some features are version-dependent, see the linked article for details):

- To quickly link backlog items to portfolio backlog items with parent-child links, [use the mapping pane to organize your backlog](organize-backlog.md#mapping). Or, you can choose to Show Parents and [drag-and-drop items within the tree hierarchy](organize-backlog.md).  
- To create and link tasks to backlog items, [use the sprint backlog page](../sprints/assign-work-sprint.md).  
- To indent (![Indent](../queries/media/IC588323.png)), outdent (![Outdent](../queries/media/IC588324.png)), and change the tree hierarchy, use a tree query in Visual Studio.  
- To add or delete work items or change the link structure, you can use Excel. See [Bulk add or modify work items with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md).

<a id="azure-cli" />

::: moniker range="azure-devops" 

## Use Azure CLI to add, remove, and show links

You can add, remove, and show details of links made to a work item using link types supported by your organization with the [az boards work-item relation](/cli/azure/boards/work-item/relation) command. For more information, see [Get started with Azure DevOps CLI](../../cli/index.md). 

Link types include work link types, remote link types, hyperlinks, and attached files. For a list of all link types that you can specify, run the [az boards work-item relation list-type](../queries/link-type-reference.md#list-link-types) command. 

```azurecli
az boards work-item relation add
az boards work-item relation remove
az boards work-item relation show
```

In the following examples, the organization is *fabrikam* and the project ID corresponds to *cebd7ef5-4282-448b-9701-88c8637581b7*. The table format is used to show the output. For other formats, see [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli).  

### Link work items 

To link one or more work item to a single work item, enter the [az boards work-item relation add](/cli/azure/boards/work-item/relation#az-boards-work-item-relation-add) command. 

#### Syntax 

Required parameters include the ID of the work item to link to and the link type. Supported link types include *Parent*, *Child*, *Related*, *Remote Related*. For a list of all link types that you can specify, run the [az boards work-item relation list-type](../queries/link-type-reference.md#list-link-types) command. 

For work items defined within the same organization, you must specify the work item ID or target URL. For work items defined in a remote organization, you must specify the target URL. You can specify multiple values by separating IDs or URLs with a comma.

```azurecli
az boards work-item relation add --id
                                 --relation-type
                                 [--detect {false, true}]
                                 [--org]
                                 [--target-id]
                                 [--target-url]
```

#### Example

The following command links work item *ID=2807* to work item *ID=2794* with the *Child* link type. The command returns a list of all links currently defined for the work item. 

```azurecli
az boards work-item relation add --id 2794 --relation-type Child --target-id 2856 --output table
Are you sure you want to remove this relation(s)? (y/n): y
Relation Type    Url
---------------  -------------------------------------------------------------------------------------------------
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2850
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2808
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2820
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2856
Parent           https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2811
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2876
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2801
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2877
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2805
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2807
```
To view the information for the linked work items, enter one of the URLs listed in your browser. 

### Remove work item links

To remove one or more linked work items from a single work item, enter the [az boards work-item relation remove](/cli/azure/boards/work-item/relation#az-boards-work-item-relation-remove) command.

Required parameters include the ID of the work item to remove the link from and the link type. You can only remove links to work items defined in the same organization. You can specify any of the supported link types except remote link types. 

You must specify the target work item ID. You can specify multiple values by separating IDs or URLs with a comma.

#### Syntax 
```azurecli
az boards work-item relation remove --id
                                    --relation-type
                                    --target-id
                                    [--detect {false, true}]
                                    [--org]
                                    [--yes]
```

#### Example

The following command removes the link to work item *ID=2794* from work item *ID=2856* to work item  with the *Child* link type. The command returns a list of all links currently defined for the work item. 

```azurecli
az boards work-item relation remove --id 2794 --relation-type Child --target-id 2807 --output table
Are you sure you want to remove this relation(s)? (y/n): y
Relation Type    Url
---------------  -------------------------------------------------------------------------------------------------
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2850
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2808
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2820
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2856
Parent           https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2811
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2876
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2801
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2877
Child            https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2805 
```
To view the information for the linked work items, enter one of the URLs listed in your browser. 


### Show details of links made for a single work item 

To view the work items linked to a single work item, enter the  [az boards work-item relation show](/cli/azure/boards/work-item/relation#az-boards-work-item-relation-show) command. For a list of all link types that can be returned, run the [az boards work-item relation list-type](../queries/link-type-reference.md#list-link-types) command.

#### Syntax 
```azurecli
az boards work-item relation show --id
                                  [--detect {false, true}]
                                  [--org]
```

#### Example

The following command lists the details of links defined for work item *ID=2931* in the *fabrikam* organization in table format.

```azurecli
az boards work-item relation show --id 2931 --output table
Relation Type    Url
---------------  -----------------------------------------------------------------------------------------------------------------------------------
Related          https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2932
Successor        https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2932
Remote Related   https://dev.azure.com/fabrikam-fiber5/847568d2-6541-4a99-a240-228510ccbff7/_apis/wit/workItems/1777
Parent           https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2930
Predecessor      https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/workItems/2933
Attached File    https://dev.azure.com/fabrikam/cebd7ef5-4282-448b-9701-88c8637581b7/_apis/wit/attachments/1cc6c026-b4ed-420c-bfe6-065be726cba7
```

To view the information for the linked work items, enter one of the URLs listed in your browser. Choose the URL for an attached file to download the attachment. 
::: moniker-end
 
## Related articles

::: moniker range=">= azure-devops-2020"

- [Link test cases to user stories](../boards/add-run-update-tests.md)
- [Overview of end-to-end traceability](../../cross-service/end-to-end-traceability.md)
- [Map backlog items to portfolio backlog items](organize-backlog.md)
- [Link work items to Git development objects](connect-work-items-to-git-dev-ops.md)
- [Link GitHub commits and pull requests to work items](../github/link-to-from-github.md)
- [Use Excel to edit tree-topology links](../backlogs/office/bulk-add-modify-work-items-excel.md)
- [Linking, traceability, and managing dependencies](../queries/link-work-items-support-traceability.md)
::: moniker-end

::: moniker range="<= azure-devops-2019"
- [Map backlog items to portfolio backlog items](organize-backlog.md)
- [Link to work items from other objects](../../organizations/notifications/add-links-to-work-items.md)
- [Link work items to Git development objects](connect-work-items-to-git-dev-ops.md)
- [Use Excel to edit parent-child links](../backlogs/office/bulk-add-modify-work-items-excel.md)
- [Linking, traceability, and managing dependencies](../queries/link-work-items-support-traceability.md)
::: moniker-end
