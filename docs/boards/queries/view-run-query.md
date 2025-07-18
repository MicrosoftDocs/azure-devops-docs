---
title: View or run a query in Azure Boards and Azure DevOps
titleSuffix: Azure Boards
description: Learn how to view, run, or favorite a query in Azure Boards and Azure DevOps. 
ms.custom: boards-queries
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '<= azure-devops'
ms.date: 09/20/2024
---


# View, run, or email a work item query  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019.md](../../includes/version-vs-gt-eq-2019.md)]

To locate work items assigned to you or your team, you can run a query. Your process could include several predefined queries that you can access and run. Often, it's easier to create a new query by modifying an existing query definition.

::: moniker range="azure-devops"

[!INCLUDE [note-new-boards-hub-default-images](../includes/note-new-boards-hub-default-images.md)]

::: moniker-end

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites-queries.md)]

## Open Queries 

[!INCLUDE [temp](../includes/open-queries.md)] 

## Run a query in Azure Boards

To run any query, expand a folder and choose the title of the query. The view opens to display the query **Results**. 

::: moniker range="azure-devops"

You can also run a query by using the [Azure DevOps command line interface](#run-a-query-from-the-command-line).

::: moniker-end

#### [Browser](#tab/browser/) 

::: moniker range="< azure-devops"
> [!TIP]    
> The **Queries** page, as with other web portal pages, remembers the view you last went to and returns you to that view.
	
1. Choose **All** to open the page where you can view all queries that you defined or are shared within your project. 

    :::image type="content" source="media/view-run-queries/queries-all.png" alt-text="Screenshot of all queries view." :::

1. Choose **My Queries** as needed. 
   - To view all work items assigned to you, choose **Assigned to me**. This query uses the **@Me**  macro to list all work items assigned to you.  
   - To view all work items you're following, choose **Followed work items**. This query uses the **@Follows**  macro (ID in @Follows) to list all work items you chose to follow. For more information, see [Follow a work item or pull request](../work-items/follow-work-items.md).  

1. Choose **Shared Queries** to expand the folder and access queries saved as shared queries. 

1. Choose a folder within a breadcrumb to open a query folder.

    :::image type="content" source="media/example-queries/queries-breadcrumb-example.png" alt-text="Screenshot of queries breadcrumb example." :::

::: moniker-end

::: moniker range="azure-devops"

> [!TIP]    
> The **Queries** page, as with other web portal pages, remembers the view you last went to and returns you to that view.
	
1. Choose **All** to open the page where you can view all queries you defined or that are shared within your project. 

    :::image type="content" source="media/view-run-queries/open-queries-new-boards-hubs.png" alt-text="Screenshot of all queries view.":::

1. Choose **My Queries** as needed. 
   - To view all work items assigned to you, choose **Assigned to me**. This query uses the **@Me**  macro to list all work items assigned to you.  
   - To view all work items you're following, choose **Followed work items**. This query uses the **@Follows**  macro (ID in @Follows) to list all work items you follow. For more information, see [Follow a work item or pull request](../work-items/follow-work-items.md).  

1. Choose **Shared Queries** to expand the folder and access queries saved as shared queries. 

::: moniker-end


#### [Visual Studio](#tab/visual-studio/)

> [!IMPORTANT]
> We strongly recommend that everyone use the [default view](../work-items/view-add-work-items.md?view=azure-devops&preserve-view=true&tabs=visual-studio#view-work-items) instead of this legacy view. It is designed for you to quickly access a list of work items based on your assignment, following, mentioned, or recent updates. The legacy view is no longer being enhanced and we expect to remove it in a future release of Visual Studio.

- From the Team Explorer **Work Items**, page, open the context menu for the query (right-click with your mouse), and choose **View Results**. Or, double-click the query to open it. 

	:::image type="content" source="../media/team-explorer/open-query-from-team-explorer.png" alt-text="Screenshot of Team Explorer, open context menu for a query, choose View Results.":::


---

::: moniker range="azure-devops"  

## Run a query from the command line 

You can run a query in the CLI with the [az boards query](/cli/azure/boards#az-boards-query) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).

```azurecli 
az boards query [--id]
                [--org]
                [--path]
                [--project]
                [--wiql] 
``` 

#### Parameters

- **id**: The ID of an existing query. Required unless--path or--wiql is specified.
- **wiql**: The query in Work Item Query Language (WIQL) format. Ignored if `--id` or `--path` is specified.
- **path**: The path of an existing query. Ignored if--id is specified.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.

#### Example

The following command runs a query with the specified ID and shows the result in table format.  

```azurecli
az boards query --id 6c286d74-26a5-4cce-bfcf-bf9123495bfe  --output table

Priority    Node Name         Work Item Type    Title                             Remaining Work
----------  ----------------  ----------------  --------------------------------  ----------------
1           Voice             Bug               Apply fix elsewhere as needed
2           CMMI              Bug               Slow response on form
1           Fiber             Bug               Check issues with permissions     0
2           Fiber             Bug               Voicemail hang issue              0
2           FabrikamBB        Bug               Research slow response time
1           FabrikamBB        Bug               Fix performance issues            0 
``` 

The following command runs a query with the specified WIQL and shows the result in table format.  

```azurecli 
az boards query --wiql "SELECT [Microsoft.VSTS.Common.Priority], [System.NodeName], [System.WorkItemType], [System.Title], [Microsoft.VSTS.Scheduling.RemainingWork], [System.AssignedTo], [System.State], [System.Tags], [System.AreaPath] FROM workitems WHERE [System.WorkItemType] = 'Bug' AND [System.AreaPath] = 'Fabrikam Fiber' ORDER BY [System.WorkItemType]" --output table

Priority    Node Name       Work Item Type    Title                  Remaining Work
----------  --------------  ----------------  ----------------       ----------------
2           Fabrikam Fiber  Bug               Slow response on form
2           Fabrikam Fiber  Bug               Check permissions
2           Fabrikam Fiber  Bug               Fix performance issue
2           Fabrikam Fiber  Bug               Secure Sign-in 
``` 
::: moniker-end

## Query directory, query folders, and breadcrumbs 

> [!NOTE]   
> You can't add folders to **My Favorites** or **Team Favorites**. 

#### [Browser](#tab/browser/) 


The **Queries** page contains a **Favorites** and an **All** tab. Each contains a directory-focused view that you can filter to find specific queries of interest. 

When you're working in the **Queries** pages, you can go to a folder, subfolder, or a query page.

::: moniker range="azure-devops"

:::image type="content" source="media/view-run-queries/query-navigation-new-boards-hubs.png" alt-text="Screenshot of queries page." :::

::: moniker-end

::: moniker range="< azure-devops"

As you make selections, the breadcrumbs are shown at the top of the page. You can navigate to a folder, subfolder, or query page.

:::image type="content" source="../../project/navigation/media/breadcrumbs/queries-breadcrumbs.png" alt-text="Screenshot of breadcrumbs on query page." :::

::: moniker-end

You can also select a favorite query or return to the **All** queries page from the drop-down menu of an open query.

::: moniker range="< azure-devops"

:::image type="content" source="../../project/navigation/media/breadcrumbs/query-bd-and-selector.png" alt-text="Screenshot of query dropdown." :::

::: moniker-end

::: moniker range="azure-devops"

:::image type="content" source="../../project/navigation/media/breadcrumbs/query-dropdown-new-boards-hubs.png" alt-text="Screenshot of query navigation dropdown." :::

::: moniker-end


#### [Visual Studio](#tab/visual-studio/)
 
The **Work Items** page displays the same folder structure as defined in the web portal. Changes you make through Visual Studio are reflected in the web portal. 


:::image type="content" source="media/organize-queries/query-folders-visual-studio.png" alt-text="Screenshot of Work Items page, Visual Studio showing query folders.":::

You can expand and collapse folders, rename folders, and drag and drop queries from one folder to another. For more information, see [Manage and organize queries](../queries/organize-queries.md)

---

For more information, see [Query FAQs, Navigate, and Folders](query-faqs.yml).

## All and Favorites supported tasks  

You can do most tasks for viewing and running queries from each of the queries list pages as indicated in the following table. Only queries you save under **My Queries** and have favorited show up under **My Favorites**. Only queries saved under **Shared Queries** can be favorited by a team. 
  

> [!div class="mx-tdCol2BreakAll"]
> |<br/>Task |Favorites<br/>(Browser) |All<br/>(Browser) | Work Items<br/>(Team Explorer)
> |-------------|----------|---------| 
> |View all favorited queries, yours or a team you belong to | ✔️ |  | ✔️ |  
> |View all your queries or shared queries for the current project |  | ✔️ |✔️|  
> |Run a query, open the context menu for a query |✔️ |✔️|✔️|  
> |Expand or collapse container folders or query folders |✔️ |✔️|✔️|  
> |Filter the list of queries |✔️ |✔️ |  |
> |Favorite a query (for web portal, choose ![Favorite](../media/icons/icon-favorite-star.png)) |  |✔️ | |  
> |Unfavorite a query (for web portal, choose :::image type="icon" source="../../media/icons/icon-favorited.png" border="false":::) |✔️ |✔️ | ✔️ |   
> |Add a new query: Choose :::image type="icon" source="/azure/devops/boards/media/icons/add-new-query.png" border="false"::: |✔️ |✔️ | ✔️|  


## Filter the list of queries 

Enter a keyword into the filter box to filter the set of queries displayed on either the **Favorites** or **All** pages. To learn more about filtering, see [Filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md).   

::: moniker range="< azure-devops"

:::image type="content" source="media/queries-all-filter.png" alt-text="Screenshot showing all queries in the project filtered by a keyword criteria." :::

::: moniker-end

::: moniker range="azure-devops"

:::image type="content" source="media/view-run-queries/filter-queries-new-boards-hubs.png" alt-text="Screenshot showing all queries in the project filtered by a keyword criteria." :::

::: moniker-end

For more information, see [Query FAQs, Navigate, and Folders](query-faqs.yml).

## Email query items or share a query URL 

#### [Browser](#tab/browser/) 

From the **Query Editor** or **Results** view, you can email a formatted list of query items or copy the query URL. 

::: moniker range="< azure-devops"

Choose the  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: actions icon to open the menu and select from the options listed, **Email query** or **Copy query URL**. 

:::image type="content" source="media/view-run-queries/email-query-new-exp.png" alt-text="Screenshot of Choose Email query or Copy query URL." :::

::: moniker-end

::: moniker range="azure-devops"

Choose the  more actions icon :::image type="icon" source="../media/icons/more-actions.png" border="false":::  to open the menu and select from the options listed, **Email query** or **Copy query URL**. 

:::image type="content" source="media/view-run-queries/email-query-new-boards-hubs.png" alt-text="Screenshot of Choose Email query or Copy query URL." :::

::: moniker-end

You can only send the email to individual address for a project member that the system recognizes. Adding a team group or security group to the "To" line isn't supported. If you add an email account that the system doesn't recognize, you receive a message that one or more recipients of your email doesn't have permissions to read the mailed work items.  

> [!NOTE]  
> To email a formatted list to people who aren't project members, you'll need to use the **Copy as HTML** option described in [Copy a list of work items](../backlogs/copy-clone-work-items.md). For on-premises Azure DevOps, all email actions require an [SMTP server to be configured](/azure/devops/server/admin/setup-customize-alerts). If you don't have an SMTP server configured, you can work around this by using **Copy as HTML**. 


#### [Visual Studio](#tab/visual-studio/)

You can email a formatted query list by choosing the **Send to Microsoft Outlook** option from the context menu.  

:::image type="content" source="media/view-run-queries/send-to-outlook-team-explorer.png" alt-text="Screenshot of Team Explorer, choose Send to Microsoft Outlook query option.":::

> [!NOTE]
> This feature requires you to have Microsoft Outlook installed. For on-premises Azure DevOps, all email actions require an [SMTP server to be configured](/azure/devops/server/admin/setup-customize-alerts). If you don't have an SMTP server configured, you can work around this by using **Copy as HTML** from the web portal. 

---

## Next steps

> [!div class="nextstepaction"]
> [Define a query](using-queries.md)

## Related content

- [Manage queries and query folders](organize-queries.md)
- [Interactively filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md)
- [Change column options](../backlogs/set-column-options.md)
- [Set personal or team favorites](../../project/navigation/set-favorites.md) 
- [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md) 
