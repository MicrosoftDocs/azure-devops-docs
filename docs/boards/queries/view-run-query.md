---
title: View, run, or email a query
titleSuffix: Azure Boards
description: Learn how to view, run, favorite, or email queries in Azure Boards.
ms.custom: boards-queries
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '<= azure-devops'
ms.date: 10/24/2025
##customer intent: As an Azure Boards user, I want to learn how to use Azure Boards queries so I can easily access, run, and share queries for my team's work items.

---

# View, run, or email a work item query

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2022.md](../../includes/version-vs-gt-eq-2022.md)]

To locate Azure Boards work items assigned to you or your team or that meet other criteria, you can run a query. You can access and run predefined queries, or easily create new queries by modifying existing query definitions.

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites-queries.md)]

## Open the Queries page

To open the **Queries** page for your project, select **Boards** > **Queries**. The **Queries** page opens to the **Favorites** tab, showing queries you or your team choose as favorites. For more information, see [Set personal or team favorites](../../project/navigation/set-favorites.md#favorite-a-shared-query).

::: moniker range="azure-devops"

The **Favorites** tab also shows the last queries you opened under **Continue where you left off**.

:::image type="content" source="media/view-run-queries/queries-all.png" alt-text="Screenshot of the Favorites tab on the Queries page." :::

::: moniker-end

To see all personal and shared queries in your project, select the **All** tab. The **All** tab shows built-in queries, queries that you defined, and queries that are shared in your project. Expand the **My Queries**, **Shared Queries**, and other folders to access their queries.

On the **All** tab of the **Queries** page, the **My Queries** folder contains the following built-in queries in addition to those you define:

- **Assigned to me** uses the `@Me`  macro to list all work items assigned to you in the current project.
- **Followed work items** uses the **@Follows**  macro, `ID` in `@Follows`, to list all work items you're following. For more information, see [Follow a work item or pull request](../work-items/follow-work-items.md).

::: moniker range="< azure-devops"
:::image type="content" source="media/view-run-queries/open-queries-vert.png" alt-text="Screenshot of the Queries page All tab.":::
::: moniker-end

::: moniker range="azure-devops"
:::image type="content" source="media/view-run-queries/open-queries-new-boards-hubs.png" alt-text="Screenshot of the All tab on the Queries page.":::
::: moniker-end

## Filter the list of queries 

Enter a keyword into the filter box on either the **Favorites** or **All** tabs of the **Queries** page to filter the queries displayed. For more information, see [Filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md).

::: moniker range="< azure-devops"
:::image type="content" source="media/queries-all-filter.png" alt-text="Screenshot showing all queries in the project filtered by a keyword criteria." :::
::: moniker-end

::: moniker range="azure-devops"
:::image type="content" source="media/view-run-queries/filter-queries-new-boards-hubs.png" alt-text="Screenshot showing all queries in the project filtered by a keyword criteria." :::
::: moniker-end

## Navigate to queries and folders

From either the **Favorites** or **All** tab of the **Queries** page, you can navigate and filter to find and open specific queries.

On the **All** tab, query pages can appear directly or be in folders or subfolders. You can navigate to a folder, subfolder, or query page.

As you make selections and open folders, breadcrumbs are shown at the top of the page.

::: moniker range="< azure-devops"
:::image type="content" source="../../project/navigation/media/breadcrumbs/queries-breadcrumbs.png" alt-text="Screenshot of breadcrumbs on query page.":::
::: moniker-end

::: moniker range="azure-devops"
:::image type="content" source="media/view-run-queries/queries-breadcrumbs-services.png" alt-text="Screenshot of breadcrumbs on query page.":::
::: moniker-end

You can select a folder within the breadcrumb to open the folder.

:::image type="content" source="media/example-queries/queries-breadcrumb-example.png" alt-text="Screenshot of queries breadcrumb example." :::

You can also select a favorite query or return to the **All** queries page from the drop-down menu of an open query.

::: moniker range="< azure-devops"
:::image type="content" source="../../project/navigation/media/breadcrumbs/query-bd-and-selector.png" alt-text="Screenshot of query dropdown." :::
::: moniker-end

::: moniker range="azure-devops"
:::image type="content" source="../../project/navigation/media/breadcrumbs/query-dropdown-new-boards-hubs.png" alt-text="Screenshot of query navigation dropdown." :::
::: moniker-end

## Run a query

To run a query from either the **Favorites** or **All** tabs of the **Queries** page, expand its folder if necessary and select the query. The query **Results** page opens.

::: moniker range="azure-devops"

You can also select the **More actions** icon next to the query on the **Queries** page and select **Run query** or other options from the context menu.

:::image type="content" source="media/view-run-queries/run-query.png" alt-text="Screenshot of the context menu for a query on the Queries page.":::

### Run a query from the Azure DevOps CLI

You can also run an Azure Boards query by using the [az boards query](/cli/azure/boards#az-boards-query) command in the Azure DevOps command line interface. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).

```azurecli 
az boards query [--id] [--org] [--path] [--project] [--wiql] 
``` 

#### Parameters

- **id**: The ID of an existing query. Required unless `--path` or `--wiql` is specified.
- **wiql**: The query in Work Item Query Language (WIQL) format. Ignored if `--id` or `--path` is specified.
- **path**: The path of an existing query. Ignored if `--id` is specified.
- **org**: Azure DevOps organization URL, such as `--org https://dev.azure.com/MyOrganizationName/`. Required unless configured as default or picked up using `git config`. Configure the default organization using `az devops configure -d organization=ORG_URL`.
- **project**: Project name or ID. Required if not configured as default or picked up using `git config`. Configure the default project using `az devops configure -d project=NAME_OR_ID`.

#### Examples

The following command runs a query with the specified ID and shows the result in table format.

```azurecli
az boards query --id 6c286d74-26a5-4cce-bfcf-bf9123495bfe  --output table

Priority    Node Name         Work Item Type    Title                             Remaining Work
----------  ----------------  ----------------  --------------------------------  ----------------
1           Voice             Bug               Apply fix elsewhere as needed
2           CMMI              Bug               Slow response on form
``` 

The following command runs a query with the specified WIQL and shows the result in table format.

```azurecli 
az boards query --wiql "SELECT [Microsoft.VSTS.Common.Priority], [System.NodeName], [System.WorkItemType], [System.Title], [Microsoft.VSTS.Scheduling.RemainingWork], [System.AssignedTo], [System.State], [System.Tags], [System.AreaPath] FROM workitems WHERE [System.WorkItemType] = 'Bug' AND [System.AreaPath] = 'Fabrikam Fiber' ORDER BY [System.WorkItemType]" --output table

Priority    Node Name       Work Item Type    Title                  Remaining Work
----------  --------------  ----------------  ----------------       ----------------
2           Fabrikam Fiber  Bug               Slow response on form
2           Fabrikam Fiber  Bug               Check permissions
``` 
::: moniker-end

## Email query items or share a query URL

From the query **Editor** or **Results** view, you can email a formatted list of query items to project members or copy the query URL.

Select the **More actions** icon at upper right and select **Email query** or **Copy query URL** from the context menu.

::: moniker range="< azure-devops"
:::image type="content" source="media/view-run-queries/email-query-new-exp.png" alt-text="Screenshot of Choose Email query or Copy query URL." :::
::: moniker-end

::: moniker range="azure-devops"
:::image type="content" source="media/view-run-queries/email-query-new-boards-hubs.png" alt-text="Screenshot of Choose Email query or Copy query URL." :::
::: moniker-end

You can send email only to individual project members that the system recognizes. Sending to a team group or security group isn't supported. Recipients must have permissions to read the mailed work items.

> [!NOTE]
> To email a formatted list to people who aren't project members, see [Copy or email a list of work items](../backlogs/copy-clone-work-items.md#copy-or-email-a-list-of-work-items).

::: moniker range="< azure-devops"

> [!NOTE]
> For on-premises Azure DevOps, all email actions require an [SMTP server to be configured](/azure/devops/server/admin/setup-customize-alerts). If you don't have an SMTP server configured, you can work around this by using **Copy as HTML** as described in [Copy or email a list of work items](../backlogs/copy-clone-work-items.md#copy-or-email-a-list-of-work-items).

::: moniker-end

## View work items in Visual Studio

On the **Work Items** page of the Visual Studio **Team Explorer**, you can list work items for connected Azure DevOps projects. Query creation and management must be done in the Azure Boards web interface.

In the **Work Items** Search pane, you can apply filters to view listed work items by **Assigned to**, **Created by**, **State**, or **Work Item Type**.

You can expand the **Work Items** list and select the dropdown arrow next to the current view to select built-in **Assigned to Me**, **Following**, **Mentioned**, or **My Activity** views.

:::image type="content" source="media/view-run-queries/visual-studio-views.png" alt-text="Screenshot of Work Items page showing view options.":::

For listed individual work items, you can:

- Hover over the work item to display information.
- Select a work item title to rename the work item.
- Right-click the work item to assign it to yourself or to complete the work item.
- Double-click the item or right-click and select **Open** to open the work item in the Azure Boards UI.

:::image type="content" source="media/view-run-queries/visual-studio.png" alt-text="Screenshot of options for work items on the Team Explorer Work Items page.":::

You can also create work items by selecting **New Work Item** and entering a work item title. Changes you make through Visual Studio are reflected in Azure Boards.

## All and Favorites supported tasks  

You can do most tasks for viewing and running queries from either the **All** or **Favorites** tab of the **Queries** page, as indicated in the following table. 

|<br/>Task |Favorites |All |
|-------------|----------|
|View all favorited queries, yours or a team you belong to | ✔️ |  |
|View all your queries or shared queries for the current project |  | ✔️ |
|Run a query, open the context menu for a query |✔️ |✔️|
|Expand or collapse container folders or query folders |✔️ |✔️|
|Filter the list of queries |✔️ |✔️ |
|Favorite a query |  |✔️ |
|Unfavorite a query |✔️ |✔️ |

Only the built-in queries and queries you save under **My Queries** appear under **My Queries**. Only queries you favorite appear in **My Favorites**. Only queries saved under **Shared Queries** can be favorited by a team.## Next step

> [!div class="nextstepaction"]
> [Define a work item query](using-queries.md)

## Related content

- [Manage queries and query folders](organize-queries.md)
- [Interactively filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md)
- [FAQs about queries in Azure Boards](query-faqs.yml)
