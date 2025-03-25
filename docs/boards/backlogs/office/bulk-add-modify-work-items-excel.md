---
title: Modify Azure Boards work items in bulk with Microsoft Excel
titleSuffix: Azure Boards
description: Use the Excel plugin in Azure DevOps to bulk add or modify Azure Boards work items, such as tasks, bugs, backlog items, or issues.
ms.service: azure-devops-boards
ms.assetid: 1399B4B1-72AE-4328-AAD8-3AAF0B808761
ms.author: chcomley
author: chcomley
ms.custom: linked-from-support
ms.topic: tutorial
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 08/19/2024
---

# Add or modify work items in bulk with Microsoft Excel 

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

::: moniker range=">= azure-devops-2020"
> [!TIP]  
> To import or update work items in bulk, you can use either the [web portal](../bulk-modify-work-items.md) or the [CSV import](../../queries/import-work-items-from-csv.md) feature, which is the recommended approach.
::: moniker-end

Save time with Microsoft Excel when you need to add or modify many work items, add links and attachments to multiple work items, and more. You can also use native Excel features to perform actions such as summing a column, copying and pasting rows, filling down data into cells, and more.

For information about connecting to Excel, see [Connect Azure Boards to an Office client](track-work.md). For answers to specific questions about the integration of Excel and Azure DevOps, see [FAQs: Work in Excel connected to Azure Boards](faqs.yml).

> [!NOTE]  
> macOS is not supported. Even with Visual Studio for Mac installed, connecting to Azure DevOps from Excel is not supported.

## Prerequisites 

::: moniker range="azure-devops"

|Category | Requirements |
|--------------|-------------|
| **Project access** | [Project member](../../../organizations/security/add-users-team-project.md). |
| **Access levels** |At least [Stakeholder access](../../../organizations/security/stakeholder-access.md).   |
| **Permissions** | - Member of the **Contributors** group.<br> - **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission. For more information, see [Set permissions and access for work tracking](../../../organizations/security/set-permissions-access-work-tracking.md). |
| **Tools** |- Microsoft Excel 2010 or later, including Microsoft Office Excel 365. <br> - [Azure DevOps Office Integration 2019 (free)](https://visualstudio.microsoft.com/downloads/#other-family). Install the Azure DevOps Office Integration plug-in by installing one of the latest editions of Visual Studio or the Azure DevOps Office Integration installer. The plug-in supports connection to Azure Boards and Azure DevOps Server from Excel.<br> - [Visual Studio 2015.1 or later](https://visualstudio.microsoft.com/downloads/) or [Team Foundation Server Office Integration 2015 Update 2 or later](https://visualstudio.microsoft.com/downloads/) To use the [Select User](#select-user) feature, download the free version of Visual Studio Community. This feature helps avoid data validation errors by misspelling user names and is useful when assigning user names from a large group of user accounts. |

::: moniker-end

::: moniker range="< azure-devops" 

|Category | Requirements |
|--------------|-------------|
| **Project access** | [Project member](../../../organizations/security/add-users-team-project.md). |
| **Access levels** |At least [Stakeholder access](../../../organizations/security/stakeholder-access.md).   |
| **Permissions** | - Member of the **Contributors** group.<br> - *View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission. For more information, see [Set permissions and access for work tracking](../../../organizations/security/set-permissions-access-work-tracking.md). |
| **Tools** |- Microsoft Excel 2010 or later, including Microsoft Office Excel 365. <br>- [Azure DevOps Office Integration 2019 (free)](https://visualstudio.microsoft.com/downloads/#other-family). Install the plug-in by installing one of the latest editions of Visual Studio or the Azure DevOps Standalone Office Integration installer. The Azure DevOps Office Integration 2019 plug-in supports connection to Azure Boards and Azure DevOps from Excel, Project, and the PowerPoint-based storyboarding tool.<br> -  To use the [Select User](#select-user) feature, install [Visual Studio 2015.1 or later](https://visualstudio.microsoft.com/downloads/) or [Azure DevOps Office Integration 2019 or later](https://visualstudio.microsoft.com/downloads/#azure-devops-office-integration-2019). You can download the free version of Visual Studio Community. This feature helps avoid data validation errors by misspelling user names and is useful when assigning user names from a large group of user accounts.|

::: moniker-end  

For more information, see [Compatibility with Azure DevOps Server](/azure/devops/server/compatibility). 

## Use list and query types

You can add, modify, publish, and refresh work items using any query type and list type.

- [Use a flat list](../../queries/using-queries.md#flat-list) to bulk add or modify several types of work items at once, such as backlog items, tasks, bugs, or issues.
- [Use a tree list](../../queries/using-queries.md) to bulk add or modify work items and their tree-topology links.

Follow these best practices:

::: moniker range="azure-devops"
- **Input list, flat list**: Import a list of work items or create new work items without hierarchy.
- **Input list, tree list**: Complete top-down planning and import hierarchically linked work items.
- **Query list, tree list**: View and modify the hierarchy of link relationships of many existing work items.
- **Query list, flat list**: Bulk update a list of work items or create new work items without hierarchy.
::: moniker-end

::: moniker range="< azure-devops"
- **Input list, flat list**: Import a list of work items or create new work items without hierarchy.
- **Input list, tree list**: Complete top-down planning and publish parent-child linked work items.
- **Query list, flat list**: Create an Excel report based on the query of work items. To create an Excel report, your project collection must be configured to support Analytics reporting. For more information, see [Create Excel reports from a work item query](/previous-versions/azure/devops/report/admin/create-status-and-trend-excel-reports).
- **Query list, tree list**: View and modify the hierarchy and parent-child link relationships of many existing work items.
::: moniker-end

### Query types  

**Query types**:
- **None**: Indicates an **input list**.
- **Query title**: Indicates the list of work items is tied to the specified **query**.

Azure Boards supports three query types, indicated by icons next to each query:

- **Flat list of work items**: Imported as a flat list query.
- **Work items and direct links**: Imported as a flat list query.
- **Tree of work items**: Imported as a tree list.

:::image type="content" source="media/excel/query-types.png" alt-text="Screenshot of query type icon list.":::

Direct links queries are imported as a flat list into Excel, as modifying multiple types of links isn't supported in Excel.

<a id="tree-list"></a>

### Tree lists

You can bulk add a nested list of work items, such as a work breakdown structure or hierarchical user stories. For example, you can add a nested list of tasks, subtasks, and bugs, or link tasks to product backlog items.

**List types**:
- **Flat list**: A simple list of work items with a single **Title** column. No link management is supported.
- **Tree list**: A hierarchical list of work items that supports creating and updating tree topology links, such as Parent-Child links, between work items. These lists include two or more **Title** columns.

:::image type="content" source="media/IC354953.png" alt-text="Screenshot of Tree list of work items, conceptual image.":::

Parent-child links or other tree topology link types support creating a hierarchical backlog structure. The work item types that participate in the hierarchy differ with different processes and are shown in the following images.

**Hierarchies**

[!INCLUDE [temp](../../includes/work-item-types.md)]

To import a hierarchical list, see [Add or import a hierarchical list of work items](#add-work-items-tree) later in this article. 

### My queries versus shared queries 

You can open any query you defined in Azure Boards in Excel, including queries under My Queries and Shared Queries. However, if you plan to share the workbook with other team members, use a Shared Query. Other team members can't access workbooks or worksheets based on personal queries stored under your My Queries folder.

## Use Excel features 

You can use most Excel features when you work with a list of work items. 

**Features:**

- Format a cell or apply conditional formatting to a cell or column 
- Cut and paste from one cell to other cells 
- Cut and paste a single row 
- Sum a column or add other formulas  
- Fill down cells 
- Filter 
- Add multiple worksheets to your workbook 

Each worksheet in Excel can contain a different input list or query. However, all worksheets within the workbook must connect to the same project within an organization or project collection.

The following features behave differently when working with a worksheet connected to Azure Boards.

- Each cell or column of cells corresponds to a work item field. Each field is associated with a data type. You can't enter data into an Excel cell that doesn't meet the data type and requirements for that field.  
- You can only insert a single row at a time within the worksheet. 
- You can copy and paste multiple rows within the worksheet. 
- To move a work item within a hierarchy, cut the entire row and paste it under the work item you want as its parent. 
- Use **Outdent** and **Indent** to change the location of a work item within the tree. 
- Undo (Ctrl Z) might not work. If you do something that you want to revert, you can refresh the worksheet. 

We recommend you publish and refresh your worksheet often to make sure your local work remains in sync with Azure Boards data store. For more information about Excel, see [Basic Excel tasks](https://support.office.com/article/basic-tasks-in-excel-dc775dd1-fa52-430f-9c3c-d998d1735fca) .

###  Sort work items  

You can sort work item flat lists using the [Excel sort feature](https://support.office.com/article/sort-data-in-a-range-or-table-62d0b95d-2a90-4610-a6ae-2e545c4a4654). But, if you're working from a tree list, you don't want to do any type of sort. Doing so changes the tree structure and as such, the links between work items.  

If you want to use Excel to manage the order of your work items as they appear in a [team backlog](../create-your-backlog.md#reorder-your-backlog), you can do that by using the [Stack Rank](../../queries/planning-ranking-priorities.md#fields-table) or [Backlog Priority](../../queries/planning-ranking-priorities.md#fields-table) field (Agile or Scrum process). You can set values in these fields, publish your worksheet, and refresh your backlog. Your backlog items should appear reordered based on lowest to highest number. However, the next time the backlog is reordered from the backlog, the values you entered are subject to change. 

To maintain a specific order of work items, consider adding a custom field to manage the sort order. You can then use this field within Excel to sort your flat list of work items. This option doesn't change the order in which work items appear in your backlog. 

### Tasks you can and can't do with Excel

You can and can't do the following tasks from an Excel worksheet: 

**Can do:**

- Add tags and bulk update work items with tags as described in [Add work item tags to categorize and filter lists and boards](../../queries/add-tags-to-work-items.md). Add the **Tags** field to your worksheet. Add multiple tags separated by a semicolon (;). 
- Add simple text to a rich-text field, but if you're updating several work items in bulk, you might lose formatting in existing work items. 
- Work offline and then reconnect and publish your changes. For more information, see [Connect Azure Boards to an Office client, Work offline, and reconnect](track-work.md).

**Can't do:**

::: moniker range="azure-devops" 
- Delete work items 
- Change the work item type of an existing work item
- Move work items to another project  
- Import or update test case steps or other test artifacts 
- Add work items in any other State than the new State 
- Add to a work item discussion thread 
- Link to a remote work item. 
::: moniker-end  

::: moniker range="azure-devops-2020" 
- Delete work items 
- Change the work item type of an existing work item
- Move work items to another project  
- Import or update test case steps or other test artifacts 
- Add work items in any other State than the new State 
- Add to a work item discussion thread. 
::: moniker-end  

  

<a id="add-work-items"> </a>  

## Import work items as a flat list 

1. Open Excel and connect to your Azure Boards project. Use one of the four methods provided in [Connect Azure DevOps project to Excel](track-work.md).

	> [!NOTE]   
	> When you connect to Azure Boards in the cloud, the **Team Project Collection** is automatically selected as there is only one collection associated with your Azure DevOps Services organization. When you connect to Azure Boards in an on-premises server, you choose the **Team Project Collection** prior to choosing the project.  

1. In Excel, start with a blank worksheet. If you don't see the **Team** ribbon (or the **Team** menu if you use Excel 2007), ensure that you installed the [Azure DevOps Office Integration 2019 tool](https://visualstudio.microsoft.com/downloads/#other-family). For more information, see [Azure DevOps Office integration issues](tfs-office-integration-issues.md). 

1. Choose **New List** from the Team ribbon. 

   :::image type="content" source="media/excel/team-ribbon.png" alt-text="Screenshot of Choose New List.":::

1. From the **New List** dialog, choose **Input list**.  

    :::image type="content" source="media/excel/2019-input-list-dialog.png" alt-text="Screenshot of Select input list.":::

1.  <a id="step-5"></a>Your worksheet is now bound to your project as an input list (Query[None]), flat list.  

	:::image type="content" source="media/excel/2019-input-list.png" alt-text="Screenshot of Empty flat list connected to a project."::: 

1. Specify the titles of the work items you want to add and their work item type.

	:::image type="content" source="media/excel/2019-specify-titles.png" alt-text="Screenshot of adding work items to Excel.":::

    The **State** and **Reason** fields automatically populate with default values once your select the work item type.

1. **Publish** your worksheet. 

	:::image type="content" source="media/excel/2019-publish.png" alt-text="Screenshot of Publish your worksheet.":::

    Make sure your cursor is in a cell that contains data. Otherwise, the **Publish** button might appear disabled.

    You work items now have ID numbers.

	:::image type="content" source="media/excel/2019-ids-assigned.png" alt-text="Screenshot of published work item IDs show in Excel.":::

1. To assign values to other fields, open [**Choose Columns**](#choose-columns), add the fields, make the assignments, and publish your changes. 

    > [!TIP]
    > When you add work items to a team backlog, ensure you specify the team's Area Path and Iteration Path. If you need to add Area Paths or Iteration Paths, select **Edit Areas and Iterations**. This link opens the **Project settings** page in a web browser. For more information, see [Define area paths and assign to a team](../../../organizations/settings/set-area-paths.md) and [Define Iteration Paths and configure team iterations](../../../organizations/settings/set-iteration-paths-sprints.md). 

1. To open a work item to add more information, Choose the work item you want to open and then choose **Open in Web Access**. Before you do, make sure you publish any changes you made.  

	:::image type="content" source="media/excel/2019-open-in-web-access.png" alt-text="Screenshot of Open a work item in the web portal from Excel.":::

    A web browser opens and displays the work item. If you make changes to the work item, immediately refresh your worksheet to capture the changes.  

<a id="add-work-items-tree"> </a>  

## Import work items as a tree list

You can add a hierarchy of work items linked using parent-child links or other tree topology link type. 

> [!IMPORTANT]
> Avoid sorting a tree list, as it can alter the hierarchical link relationships. 

1. Starting from [Step 5](#step-5) from the previous procedure, convert your flat list, input list into a tree list. Choose a cell within the flat list and then select **Add Tree Level**. 
 
	:::image type="content" source="media/excel/convert-flat-to-tree.png" alt-text="Screenshot of Empty flat list connected to a project, Add Tree Level.":::

	If the **Add Tree Level** is disabled, you're working from a query list. To convert your list to a tree list, you must first [reconfigure your list](#reconfigure-list) to an input list. 

2. Choose the link type to use when you're adding work items to a hierarchy, and then select **Convert**. The most usual choice is **Parent-Child**. You can only select from tree topology link types. For more information, see [Link type topologies and restrictions](/previous-versions/azure/devops/reference/xml/link-type-element-reference#topology). 

	:::image type="content" source="media/excel/converted-tree-list-type.png" alt-text="Screenshot of Convert to Tree List dialog.":::

	The List type changes to **Tree** and a second **Title** column appears.  

	:::image type="content" source="media/excel/converted-tree-list-type.png" alt-text="Screenshot of List type changed to Tree, and a second Title column appears.":::

3. To add more levels to the hierarchy, select **Add Tree Level** again. For example, if you want to add a hierarchy of Epics, Features, and User Stories, you want to have **Title 1**, **Title 2**, and **Title 3** columns.

	If you want to add tasks, add another tree level to have four title columns. To remove a column, see [Remove a tree level](#remove-tree-level). 

4. **Save** your Excel file. 

5. Enter the **Work Item Type** and **Titles** for the hierarchy you want to import. The **State** fields automatically fill in with default values once you select the work item type. 

	:::image type="content" source="media/excel/import-safe-hierarchy-list.png" alt-text="Screenshot of Excel worksheet, hierarchical list of work items for import.":::

6.  Publish your worksheet.

	:::image type="content" source="media/excel/publish-tree-list.png" alt-text="Screenshot of Team Ribbon, Publish link.":::

    Make sure your cursor is in a cell that contains data. Otherwise, the **Publish** button might appear disabled. 

    IDs are now assigned to your work items. In the background, the link type you selected is used to link each work item in the hierarchy. Epics are linked to Features. Features are linked to User Stories. 

7. To check the links made, choose a work item and choose **Links and Attachments**.

    For example, here we show the Child and Parent links created for a Feature that was imported. 

	:::image type="content" source="media/excel/view-hierarchical-links.png" alt-text="Screenshot of Link and Attachments, Link tab dialog.":::

8. To enter a row under a work item where you want to add a child, choose the row and then choose **Add Child**.

	:::image type="content" source="media/excel/tree-group-add-child.png" alt-text="Screenshot of Team ribbon, Tree group, Add child link.":::

9. To assign values to other fields, open [**Choose Columns**](#choose-columns), add the fields, make the assignments, and publish your changes. 

10. To change the hierarchy, cut and paste the entire row of a work item to place it under the new parent. When you publish the change, the old hierarchical links are deleted, and the new hierarchical links are created.

   You can use the ![indent item in tree](media/bulk-modify-excel-indent-inline.png) or ![Outdent item in tree](media/bulk-modify-excel-outdent-inline.png) indent/outdent icons to demote or promote a work item within the tree hierarchy. Ensure the header at the top of the column reads **Title n**; if it doesn't, add a tree level.

<a id="remove-tree-level"></a>

### Remove a tree level

1. First, publish changes that you made to work items before you remove a tree level. Removing a tree level requires a refresh, which overwrites data in the work item list. You lose any data you didn't publish. 

2. Next, delete any content under the tree-level **Title** *number* column you want to remove&mdash;the highest numbered column&mdash;. This column should be the highest numbered column in the tree. 

3. **Refresh** your worksheet. The column containing empty values for the Title is removed. 

	You get an error message if you attempt to delete the column. 

### Tips for working with a tree list 

Excel uses the data in the **Title** columns to determine the pattern of links between work items. When you publish changes, any of the following conditions can result in an error, an invalid link, or a tree link being created between incorrect work items:

- A row between the work items is blank within the hierarchy.
- The title of a work item is in the wrong column. Ensure you enter a title for each child work item.
- Multiple **Title** columns contain data within a row. Enter text in only one of the title columns per row.
- The list was sorted. Avoid sorting a tree list, as it can change the hierarchical link relationships. If you do sort a tree list, recover by immediately refreshing.

To resolve an error, see [Resolve invalid links](resolve-excel-invalid-links-tree-list.md).

Additionally, a parent-child linked work item can only have one parent. You can't add the same work item task to two backlog items. Instead, define distinct work item tasks.

<a id="update-work-items "></a>

## Update work items in bulk with a query list

The easiest way to bulk update multiple work items is to create a query for the work items you want to update, and then open that query in Excel.

> [!TIP]
> **Keep your work in sync with these tips:**
> - Use ![Refresh icon in Excel on Team ribbon](media/bulk-modify-excel-refresh-inline.png) (**Refresh**) when you first open a saved worksheet to download the latest data from the data store.
> - Add columns to the worksheet using ![Choose Column icon in Excel on Team ribbon](media/bulk-modify-excel-choose-columns-inline.png) (**Choose Columns**) to enter data for additional fields.
> - Publish your additions and modifications often to avoid data conflicts.
> - Save your workbook periodically to prevent data loss before you publish or refresh.

1. From the web portal or Visual Studio, create the work item query that contains the work items you want to update. For more information, see [Create and save managed queries with the query editor](../../queries/using-queries.md). 

2. Open Excel and connect to your Azure Boards project. Use one of the four methods provided in [Connect Azure DevOps project to Excel](track-work.md).

3. If you opened your query from the web portal or Visual Studio, you're done. Make any changes you want. Open [**Choose Columns**](#choose-columns), add fields, make assignments, and publish your changes.  

4. If you start from Excel, open a blank worksheet. You can add a worksheet to an existing workbook, as long as you're choosing a query from the same project the workbook is bound to. 

5. Choose **New List** from the Team ribbon. 

	:::image type="content" source="media/excel/team-ribbon.png" alt-text="Screenshot of Choose New List.":::

6. From the **New List** dialog, choose **Query list**, and select the query you want from the drop-down menu.  

	:::image type="content" source="media/excel/input-query-list.png" alt-text="screenshot of Select input list, query list.":::

	The icon next to each query indicates the query type. The first two query types, **Flat list of work items** and **Work items and direct links** are imported as flat list queries. Only the **Tree of work items** queries import as a tree list. 

	:::image type="content" source="media/excel/query-types.png" alt-text="Screenshot of Query type icon list.":::

7. With the work items imported to Excel, make the modifications you want and publish your changes. 

    If you're working with a tree list, see also the information provided in [Import a hierarchical list of work items](#add-work-items-tree).

## Enable Tree commands

If the **Tree group** commands aren't available, your worksheet is configured as a flat or query list. To enable the Tree group commands, convert the list to either an input list or a list based on a tree query. For more information, see the next section on [Change your list type or query](#reconfigure-list).

<a id="reconfigure-list"></a>

## Change your list type or query

You can change the work items listed in your worksheet. Specifically, you can: 
- Change your flat list to a tree list
- Change from a query list to an input list
- Change from an input list to a query list 
- Change the query your worksheet references

You can change your flat list to a tree list. However, if your list is a query list, you need to reconfigure it first. If the **Tree group** commands are disabled, it indicates a flat or query list.

:::image type="content" source="media/excel/disabled-tree-group.png" alt-text="Screenshot of Team ribbon, disabled Tree group commands.":::

To convert your query list to an input list, follow these steps. 

1. Publish your changes. 

2. On the **Team** ribbon, choose **Configure**, **List**.

	:::image type="content" source="media/excel/team-ribbon-configure-list.png" alt-text="Screenshot of Team ribbon, Configure, List menu option.":::

3. Choose **Refresh work items only** and then **Apply**. 

    This choice changes the query list to an input list.  

	:::image type="content" source="media/excel/configure-list-properties-dialog-refresh-query.png" alt-text="Screenshot of Configure List properties dialog, Input.":::

4. To convert from an input list to a query list, choose **Refresh from query**, select the query, and then **Apply**. 

	:::image type="content" source="media/excel/configure-list-properties-dialog-refresh-query.png" alt-text="Screenshot of Configure List properties dialog, Query.":::

<a id="get-work-items"></a>

## Add existing work items to your worksheet 

If you're working from a query, [modify your query](../../queries/using-queries.md) to contain the work items you want. Then refresh your list. The other work items appear in your list. 

If you're working with an input list, complete these steps. 

1. From the **Team** ribbon, choose **Get Work Items**. 

	:::image type="content" source="media/excel/team-ribbon-get-work-items.png" alt-text="Screenshot of Team Ribbon, Get work items.":::

2. Choose the method you want from the three options available. 

	:::image type="content" source="media/excel/get-work-items.png" alt-text="Screenshot of Get work items dialog.":::

    If the work items are defined in another project, then first select the Project. Then, make your selections: 

    -  **Query**. Use this method when you defined a query that contains the set or superset of work items you want.   
    -  **IDs**. Use this method when you know the IDs of the work items that you want to link to. 
          In the **IDs** box, type the IDs of the work items that you want to find, separated by commas or spaces. 
    -  **Title contains**. Use this method to find work items that have a common word or phrase in the title field. In the **and type** list, select the type of work item that you want to retrieve.   
    
	> [!NOTE]
    > To minimize the time required to run the query, narrow the filter criteria of the search.  

3.  Choose **Find**.

    Only those work items defined for the selected project and specified work item type are listed. To sort on a column field, choose the column **Title**. 

4.  In the list of returned work items, select the check-box of one or more work items.   

    - Select each work item that should link to the current work item. You can also press the SHIFT key while selecting to choose a range of work items, or press the CTRL key while selecting to choose multiple work items.  
    - Choose **Select All** to select all work items in the list.  

<a id="choose-columns"> </a>  

## Add or remove column fields 

If you start your worksheet with a **New List**, you see only a set of default field columns. You can add columns using the **Choose Columns** on the Team ribbon.

If you start your worksheet from an existing query, you see all the column fields defined for the query. From there, you can add columns using the **Choose Columns**. However, your additions don't modify the underlying query. 

1. To assign values to other fields, choose **Column Options** to add the fields of interest.  

	:::image type="content" source="media/excel/choose-columns-with-ribbon.png" alt-text="Screenshot of Choose Columns dialog.":::

	- To filter the fields based on work item type, select the **Work item type**.
	- To move or remove a field, choose the field and then select the > or < icons.
	- To change the field sequence, move the field up or down in the list using the up and down arrows. 
	- You can add a rich-text field, such as the **Description** field, however you might lose some of the formatting upon publish.  

2. Once the fields appear in the worksheet, assign values and publish your updates. When working with identity fields, ones that accept user accounts, see the next section, [Select user accounts](#select-user).

3. **Save** your worksheet. 

<a id="select-user"></a>

## Select user accounts 

Use the Select User feature to find user accounts and assign values to person-named fields. This feature also provides access to the most recently used (MRU) values. If your team has hundreds or thousands of user accounts, this feature is especially useful.

> [!TIP]  
> Without the **Select User** feature, you must enter user names exactly as they are in the database, or you'll receive data validation errors when you try to publish.  

1. If you don't have the latest version of [Visual Studio (2015.1 or later version](https://visualstudio.microsoft.com/downloads/), get it now. You need the latest update to access the Select User feature.  

2. Choose an identity or person-named field to activate the **Select User** feature in the Team ribbon.  

	:::image type="content" source="media/excel/select-user.png" alt-text="Screenshot of Team ribbon, Select User.":::

	An identity or person-named field contains a user identity. These fields are typically synchronized with a user account database, such as Microsoft Entra ID, Active Directory, or a Workgroup.
3. Begin entering the name of the user account and the Assign User dialog automatically filters the results until you can select the account of interest.  

	:::image type="content" source="media/bulk-add-excel-assign-user.png" alt-text="Screenshot of Assign User dialog.":::

	Enter a letter to jump to names starting with that letter. Only user names are recognized; account aliases aren't. As you select user names, Excel remembers your recent selections, allowing you to choose user accounts directly from the field.   

	:::image type="content" source="media/bulk-add-excel-assign-to-field.png" alt-text="screenshot of Assigned to field, Drop-down menu shows most recently used values.":::

<a id="link-attachments"></a>

## Link work items  

You can complete many actions from the **Links** tab of the **Links and Attachments** dialog. Specifically, you can: 
- Review the existing links defined for the selected work item 
- Add links to selected work items to one or more work items or select objects 
- Delete links 
- Open a linked work item (opens in the web portal)  
- Edit the link type of an existing link 
- Add columns to the Link list and sort on that list 

For more information on linking work items, see [Link user stories, issues, bugs, and other work items](../add-link.md). 

### View and add links 

You can't use the Links and Attachments dialog to bulk update work item links. To bulk update tree-topology link types, use a tree list instead.

1. To link a work item to other work items, choose the work item and then choose **Links and Attachments**. From the Links tab, choose **Link to** and then choose the **Link Type** and work item you want to link to. Choose **OK** and then **Publish**. 

	:::image type="content" source="media/excel/link-work-item.png" alt-text="Screenshot of Links and Attachments dialog, Add links.":::

2. When you're done, select **Close** to dismiss the dialog. 

3. To link several work items to the same work item, multi-select them by using **Ctrl-select** for consecutive rows, or **Shift-select** for nonconsecutive rows. 

<a id="find-items"> </a>  

### Find work items to link   

In the Add link dialog, you can open a secondary dialog to select one or more work items to link to. If you plan to find and list work items using a saved query, first [define the query](../../queries/using-queries.md).

In the Add link dialog, select **Browse** (Visual Studio) to open the following dialog.

:::image type="content" source="media/excel/choose-linked-work-items-dialog.png" alt-text="Screenshot of Choose Link Work Items dialog.":::

The **Choose Linked Work Items** dialog works in the same way as the **Get Work Items** dialog. For more information, see [Add existing work items to your worksheet](#get-work-items) described earlier in this article.

### Add columns to the links list

1. From the **Links** tab, choose the :::image type="icon" source="media/icons/choose-columns.png" border="false"::: **Columns** icon, and add the fields you want displayed. Here we add the Assigned to and State fields. 

    :::image type="content" source="media/excel/link-tabs-choose-columns-dialog.png" alt-text="Screenshot of Links and Attachments dialog, Links tab, Added columns.":::

2. To reorder the links, choose the field to sort the list on that field. 

	:::image type="content" source="media/excel/links-tab-added-columns.png" alt-text="Screenshot of To reorder the links, choose the field to sort the list on that field.":::

This dialog works in the same way as the **Get Work Items** dialog. See [Add existing work items to your worksheet](#get-work-items) described earlier in this article.
### Open a linked work item

From the **Links** tab, choose the linked work item, right-select to open the context menu, and choose **Open Linked Item**. 

:::image type="content" source="media/excel/links-tab-open-linked-work-item.png" alt-text="Screenshot of Links and Attachments dialog, Links tab, Open Linked Work Item.":::

The work item opens in your web portal.

### Edit the link and change the link type 

You can edit any listed link, including changing the link type and the linked work items.
  
1. Choose the link and choose the :::image type="icon" source="media/icons/edit.png" border="false"::: **Edit** icon. 

1. Change the link type as needed. 

	:::image type="content" source="media/excel/edit-link-dialog.png" alt-text="Screenshot of Links and Attachments dialog, Links tab, Edit link dialog.":::

1. To change the work item linked to, enter the ID of the work item, or choose **Browse** to find the work item to link to. 

	The **Choose Linked Work Items** dialog works in the same way as the **Get Work Items** dialog. For more information, see [Add existing work items to your worksheet](#get-work-items) described earlier in this article.

## Add attachments

1. Open the work item, then select **Links and Attachments** > **Attachments**.  

	Choose the file you want to attach, then select **OK** > **Publish**.  

	:::image type="content" source="media/excel/add-attachment.png" alt-text="Screenshot of Links and Attachments dialog, Add Attachment.":::

2. When you're done, select **Close**. 

3. Optional: To add one or more same attachments to several work items, multi-select them by using **Ctrl-select** for consecutive rows, or **Shift-select** for nonconsecutive rows. 

## Create a report 

You can create a report or chart from the web portal for flat-list queries. See [Track progress by creating status and trend query-based charts](../../../report/dashboards/charts.md). 

> [!IMPORTANT]
> You can create an Excel report using **New Report** only from an on-premises Azure DevOps Server. These reports require your project's collection to be configured to support SQL Server Analytics Server.
 
Select **New Report**.

:::image type="content" source="media/excel/team-ribbon-new-report.png" alt-text="Screenshot of Create a report using the New Report feature.":::

For more information, see [Create Excel reports from a work item query](/previous-versions/azure/devops/report/admin/create-status-and-trend-excel-reports). 

## Resolve publishing errors  

To resolve publishing errors that might arise when you're working in Excel, see one of the following articles:   

- [Resolve data conflicts](resolve-excel-data-conflicts-publish-refresh.md): 
    A data conflict occurs when a field value is changed in Azure Boards since the last time you published from Excel.  
- [Resolve data validation errors](resolve-excel-data-validation-errors.md):
    A data validation error occurs if a field value violates the rules for that field and work item type.  
- [Resolve invalid links in a tree hierarchy](resolve-excel-invalid-links-tree-list.md):
    An invalid link happens when a work item in a hierarchy or tree list and is moved or sorted, breaking the dependencies between work items. To resolve this error, review the error message and reposition the work items to restore the correct structure.
- [Address Error TF208104: Hierarchical Link Relationship Is Locked](resolve-excel-invalid-links-tree-list.md#tf208104):  
    If you receive error TF208104, your changes to the fields are published, but changes to the link hierarchy aren't. This error occurs because another process locks at least one of the link relationships for the work item, such as Project Server integration. 

## Next steps

> [!div class="nextstepaction"]
> [Integrate Azure Boards and GitHub](../../github/index.md)

## Related articles

::: moniker range=">= azure-devops-2020"  

- [Modify work items in bulk (web portal)](../bulk-modify-work-items.md)  
- [Import or update work items in bulk using CSV files](../../queries/import-work-items-from-csv.md)
- [Troubleshoot Azure DevOps Office integration issues](tfs-office-integration-issues.md)
- [View FAQs: Work in Excel connected to Azure Boards](faqs.yml) 
- [View and add work items](../../work-items/view-add-work-items.md) 
- [Learn basic Excel tasks](https://support.office.com/article/basic-tasks-in-excel-dc775dd1-fa52-430f-9c3c-d998d1735fca) 

::: moniker-end  

  
