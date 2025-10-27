---
title: Query Work Items By Link Or Attachment Count In Azure Boards  
titleSuffix: Azure Boards
description: Learn how to query work items based on link type, link count, link restrictions, and attached file count in Azure Boards.
ms.custom: boards-queries, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: 219717a0-de6e-4f70-8558-54f813f82507
ms.author: chcomley
author: chcomley
ms.topic: example-scenario
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 10/27/2025
---

# Query work items by link or attachment count  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Link work items to track related work and dependencies, and attach files to share information with your team. Query work items using the following fields:

::: moniker range="azure-devops"
- Attached File Count
- (Discussion) Comment Count
- External Link Count  
- Hyperlink Count
- Link Comment
- Related Link Count
- Remote Link Count
::: moniker-end 

::: moniker range="< azure-devops" 
- Attached File Count
- (Discussion) Comment Count 
- External Link Count
- Hyperlink Count
- Link Comment
- Related Link Count
::: moniker-end 

For detailed field descriptions, see [Fields associated with links and attachments](#fields).

## Prerequisites

[!INCLUDE [prerequisites-queries](../includes/prerequisites-queries.md)]

## Supported operators and macros 

Use the following operators for clauses that specify an integer field:

`= , <> , > , < , >= , <=`  
`=[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field]`   
`In, Not In`   
`Was Ever`  

<a id="tree"></a>

## List hierarchical items in a tree view  

Create a query and select **Tree of work items** to begin. The Query Editor shows the following examples:

#### [Browser](#tab/browser/)

:::image type="content" source="media/query-link-attach-all-items-tree-query.png" alt-text="Screenshot that shows the Query Editor tree query in the web portal.":::

#### [Visual Studio 2015](#tab/visual-studio/)

:::image type="content" source="media/link-attachments/tree-query-te.png" alt-text="Screenshot that shows the Query Editor tree query in Team Explorer (Visual Studio).":::

***
> [!NOTE]
> You can't construct a query that shows a hierarchical view of Test Plans, Test Suites, and Test Cases because those items don't link together using parent-child link types. Use a direct links query to list test-related work items, or view the hierarchy on the Test Plans page.

## Options for filters and query clauses

Change the filter options for linked work items and add query clauses by using the options in the Query Editor.

:::row:::
   :::column span="":::
     **Filter for**
   :::column-end:::
   :::column span="":::
      **Include these query clauses**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
     Only child items of work item 645
   :::column-end:::
   :::column span="":::
      **Add to Filters for top-level work items:**  
      `ID  =  645`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
     Tasks or bugs
   :::column-end:::
   :::column span="":::
      **Add to Filters for linked work items:**  
      `Work Item Type  In  Task,Bug`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
     Items assigned to my team (Web)
   :::column-end:::
   :::column span="":::
      **Add to both top and bottom filters:**  
      `Assigned to  In Group  [Fabrikam Fiber]\Web`  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
     Parent items of tasks assigned to me
   :::column-end:::
   :::column span="":::
      Change Filter options to **Match linked work items first**  
      **Add to Filters for linked work items:**  
      `Assigned To = @Me`
   :::column-end:::
:::row-end:::

<a id="dependents"></a>

## List items based on linked dependents  

The following example shows a dependent linked query that returns items with dependencies on work managed by other teams and projects. 

#### [Browser](#tab/browser/)

The following query finds work items in all projects that link to work items under the **Fabrikam** area path and project using Predecessor and Successor link types.

:::image type="content" source="media/link-attachments/direct-links-query-web-portal.png" alt-text="Screenshot that shows a direct links query in the web portal.":::

- Select **Query across projects** to include dependent linked work items from other projects.
- Add the **Area Path Under Fabrikam** clause to filter for work items that link to items defined under the Fabrikam project.   
- Select **Only return items that have matching links**, and then select **Return selected link types** to return only work items linked as **Predecessor** or **Successor**.


#### [Visual Studio 2015](#tab/visual-studio/)

Use this query to list dependent work items that link to active Product Backlog Items or Bugs that aren't removed, closed, or completed. Only dependent work items that are under a product area other than **Phone Save\Phone Customers** are returned.

![Screenshot that shows a dependent links query in Visual Studio.](media/example-work-item-queries/IC588290.png)   

- Remove the **Team Project = @Project** clause to enable results from all projects in the collection.
- Group the two clauses that select **Product Backlog Item**s and **Bug**s to return work items that match either filter.
- When you group the two clauses, start the second group with the **OR** operator to return work items that match either of the grouped clauses.
- Select **Only return items that have the specified links** to return top-level work items that have dependencies.
- Select **Return links of any type** to return all linked work items that match the linked-item filter criteria.

The following image shows the query results.

![Screenshot that shows direct links query results in Visual Studio.](media/example-work-item-queries/IC588291.png)  

***
<a id="orphan-stories"></a>

## List orphan user stories 

If you organize user stories under features, find unparented stories quickly by doing one of the following actions:

1. Open the product backlog and turn on the **Parents On** view option. 
2. Scroll to the **Unparented Stories** (Agile) or **Unparented Backlog items** (Scrum) section.

:::image type="content" source="media/link-attachments/list-orphan-stories.png" alt-text="Screenshot that shows the product backlog with unparented stories.":::

Or, find unparented backlog items using a **Work items and direct links** query. For example, the following query lists active user stories for the Azure DevOps team that don't have a Parent link. 

:::image type="content" source="media/link-attachments/unparented-work-items.png" alt-text="Screenshot that shows the Query Editor for unparented user stories in the web portal.":::

<a id="table-field"></a>
<a id="fields"></a>

## Fields associated with links and attachments

The following table describes fields associated with links and attachments. Most of these fields don't appear on the work item form but are tracked for all work item types. 

:::row:::
   :::column span="1":::
   **Attached File Count**
   :::column-end:::
   :::column span="3":::
   The number of files attached to the work item and stored in the work item tracking database.  
   **Reference Name**=`System.AttachedFileCount`, **Data type**=Integer  
   > [!NOTE]
   > For Azure Boards (cloud service), you can add up to 100 attachments to a work item. Attempts to add more result in an error message when you save the work item.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Comment Count**
   :::column-end:::
   :::column span="3":::
   The number of comments added to the **Discussion** section of the work item.  
   **Reference Name**=`System.CommentCount`, **Data type**=Integer  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="external-link-count"></a>

   **External Link Count**

   :::column-end:::
   :::column span="3":::
   The number of links from the work item to artifacts that aren't work items, such as pull requests, commits, changesets, or other link types.  
   **Reference Name**=`System.ExternalLinkCount`, **Data type**=Integer
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="hyper-link-count"></a>

   **Hyperlink Count**

   :::column-end:::
   :::column span="3":::
   The number of hyperlinks that the work item contains.

   **Reference Name**=`System.HyperLinkCount`, **Data type**=Integer
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Link Comment**
   :::column-end:::
   :::column span="3":::
   Contains comments from the team member who created the link. You can configure this field to appear as a column in a list of links on a work item form. (The Query Editor doesn't support this field.)  

   **Reference Name**=`System.Links.Comment`, **Data type**=PlainText
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::

   **Link Description**

   :::column-end:::
   :::column span="3":::
   Contains the work item type, ID, and title of the work item that is the target of the link. You can configure this field to appear as a column in a list of links on a work item form. (The Query Editor doesn't support this field.) 

   **Reference Name**=`System.Links.Description`, **Data type**=PlainText
   :::column-end:::
:::row-end:::
::: moniker range=">= azure-devops-2022" 
:::row:::
   :::column span="1":::
   <a id="parent"></a>

   **Parent**

   :::column-end:::
   :::column span="3":::
   When included as a column option in a backlog or query results list, the system displays the **Title** of the parent work item. Internally, the system stores the **ID** of the work item in an Integer field. 
   > [!NOTE]
   > You can add the **Parent** field as a column or specify it within a query clause by specifying the parent work item ID.   
   **Reference Name**=`System.Parent`, **Data type**=Integer
   :::column-end:::
:::row-end:::
::: moniker-end 
::: moniker range="azure-devops-2020" 
:::row:::
   :::column span="1":::
   <a id="parent"></a>

   **Parent**

   :::column-end:::
   :::column span="3":::
   When included as a column option in a backlog or query results list, the system displays the **Title** of the parent work item. Internally, the system stores the **ID** of the work item in an Integer field. 
   > [!NOTE]
   > The **Parent** field is available from Azure DevOps Server 2020 and later versions. You can't specify this field within a query clause.   
   **Reference Name**=`System.Parent`, **Data type**=Integer
   :::column-end:::
:::row-end:::
::: moniker-end 
:::row:::
   :::column span="1":::
   <a id="related-link-count"></a>

   **Related Link Count**

   :::column-end:::
   :::column span="3":::
   The number of links defined for a work item that use a work link type, such as Parent-Child, Predecessor-Successor, and Related. For a full list, see  [Link type reference](link-type-reference.md).  
   **Reference Name**=`System.RelatedLinkCount`, **Data type**=Integer
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="remote-link-count"></a>

   **Remote Link Count**

   :::column-end:::
   :::column span="3":::
   Available for Azure DevOps Services only. The number of links from a work item to work items defined in another organization. The same Microsoft Entra ID must manage the organizations. Supported link types include Consumes From, Produced For, and Remote Related. For more information, see [Add link to work items, Link to a remote work item](../backlogs/add-link.md).  
   **Reference Name**=`System.RemoteLinkCount`, **Data type**=Integer
   :::column-end:::
:::row-end:::

::: moniker range="< azure-devops" 

### Visualize related work and other objects 

View related work items and objects within a work item by using the [Work item visualization extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) available from the Visual Studio Marketplace, Azure DevOps tab.

### Add custom link types or customize the links controls 

To add link types, see [Manage link types [witadmin]](/previous-versions/azure/devops/reference/witadmin/manage-link-types). 

All tabs that support creating links between work items use the **LinksControl** element on the work item form. This element controls filtering and restricts the types of work items to which you can link. It also controls the types of links you can create and whether you can link work items in another project. To customize the link controls and restrictions, modify the definition of the `LinksControlOptions` for a work item type; see [LinksControlOptions XML elements](/previous-versions/azure/devops/reference/xml/linkscontroloptions-xml-elements?view=tfs-2017&preserve-view=true).  

### Default data fields in lists of links

You can add or remove columns from the list of links, and you can customize the default columns and the column order. For more information, see [LinksControlOptions XML elements](/previous-versions/azure/devops/reference/xml/linkscontroloptions-xml-elements?view=tfs-2017&preserve-view=true).

::: moniker-end

## Related content

- [Add a link to multiple work items](../backlogs/add-link.md) 
- [Link work items to other objects](../backlogs/add-link.md) 
- [Query quick reference](query-index-quick-ref.md)
- [Query editor](using-queries.md)   
- [Query fields, operators, and macros](query-operators-variables.md)   
- [Work item field index](../work-items/guidance/work-item-field.md) 
