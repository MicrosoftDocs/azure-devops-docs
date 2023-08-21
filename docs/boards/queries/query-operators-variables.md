---
title: Query fields, operators, macros, and variables
titleSuffix: Azure Boards
description: Learn about field data types, operators, and macros/variables used by the Query Editor in Azure Boards and Azure DevOps.
ms.custom: boards-queries, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: 814c2dca-cf8f-44bf-bba1-a5d8e293fc05
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 06/29/2022
---


# Query fields, operators, and macros in Azure Boards 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

Here you'll find detailed descriptions of each field data type, query operators, and query macros. Some data types, operators, and macros are only valid for the indicated Azure DevOps version. 

For a quick reference of query tasks and operators and macros supported for each data type, see [Query quick reference](query-index-quick-ref.md). See also [Create a query/Best practices](using-queries.md#best-practices).

<a id="field-values" /> 

## Query field data types and values

The value you specify for a field must conform to the data type for that field. The following table lists the supported data types:

> [!NOTE]   
> For Azure Boards cloud service, the data type corresponds to that listed for the field on the [Process>Fields page](../work-items/work-item-fields.md#review-fields). For on-premises deployments, the data type corresponds to the `type` attribute assigned to a [`FIELD` definition](/previous-versions/azure/devops/reference/xml/field-definition-element-reference). For more information, see [Work item fields and field attributes](../work-items/work-item-fields.md). 

:::row:::
   :::column span="1":::
   **Data type**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Boolean** 
   :::column-end:::
   :::column span="3":::
   Specifies a field that takes on a True/False value. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **DateTime** or  **Date/Time**
   :::column-end:::
   :::column span="3":::
   A date field in which you can specify a variable, such as **<xref href="Today" data-throw-if-not-resolved="False" data-raw-source="@Today"></xref>** or **<xref href="Today-1" data-throw-if-not-resolved="False" data-raw-source="@Today-1"></xref>**, or a value, such as 1/1/2023. Enter dates in the Date Pattern you set for your personal profile. (See [Set personal preferences](../../organizations/settings/set-your-preferences.md) for details.) For query examples, see [Query by date or @CurrentIteration](query-by-date-or-current-iteration.md).  

   For WIQL queries, you can also specify the date in the Coordinated Universal Time (UTC) pattern. For more information, see [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Double** or **Decimal**
   :::column-end:::
   :::column span="3":::
   A real number, such as 0.2 or 3.5. For query examples, see [Query by numeric fields](query-numeric.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **GUID** 
   :::column-end:::
   :::column span="3":::
   A character string that represents a unique ID.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **History** 
   :::column-end:::
   :::column span="3":::
   Custom formatted field used to track historical information. This data type is only used to support the **History** field. This field is automatically indexed for full-text search when full-text search is available. See [Full-Text and partial word searches](#full-text) described later in this article.  For query examples, see [History and auditing](history-and-auditing.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **HTML** 
   :::column-end:::
   :::column span="3":::
   Text strings that support formatted descriptions, such as the **Description** or **Repro Steps** fields. These fields are automatically indexed for full-text search when full-text search is available. See [Full-Text and partial word searches](#full-text) described later in this article. To query rich-text fields, see [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **Identity** 
   :::column-end:::
   :::column span="3":::
   Short text string that identifies a user identity. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **Integer** 
   :::column-end:::
   :::column span="3":::
   A 32-bit integer that is signed, such as 0, 1, 2, 34.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **PlainText** or  **Text field (multi-line)**
   :::column-end:::
   :::column span="3":::
   Text strings that support long descriptions, such as the **Application Start Information** field. These fields are automatically indexed for full-text search, when full-text search is available. See [Full-Text and partial word searches](#full-text) described later in this article. To query plain-text fields, see [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **picklistDouble**<sup>1</sup>
   :::column-end:::
   :::column span="3":::
   Custom field defined to contain a pick list of Decimal values.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **picklistInteger**<sup>1</sup>
   :::column-end:::
   :::column span="3":::
   Custom field defined to contain a pick list of Integer values.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **picklistString**<sup>1</sup>
   :::column-end:::
   :::column span="3":::
   Custom field defined to contain a pick list of short text string (255 characters or less) values.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **String** or  **Text field (single line)**
   :::column-end:::
   :::column span="3":::
   Short text string that can contain up to 255 Unicode characters. String text fields are often used to support picklists or drop-down menus.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **TreePath** 
   :::column-end:::
   :::column span="3":::
   A branching tree structure, such as an Area Path or Iteration path. Choose an item from a list of valid values. Find work items that equal, not equal, under or not under a tree structure, or use the In or Not In operators to specify several values.  You define the tree structure for a project&mdash;[area paths](../../organizations/settings/set-area-paths.md) and [iteration paths](../../organizations/settings/set-iteration-paths-sprints.md)&mdash;and then select the ones you want to associate with a team.
 
   For more information on constructing queries, see [Query by area or iteration path](query-by-area-iteration-path.md) or [Query by date or current iteration](query-by-area-iteration-path.md).

   :::column-end:::
:::row-end:::

> [!NOTE]
> 1. The **picklist...** data types are only assigned to custom fields defined for an inherited process. The Inherited process model is only supported for Azure DevOps Services and Azure DevOps Server 2019. 

[!INCLUDE [date-time-pattern](../includes/date-time-pattern.md)]

<a id="operators" /> 

## Query operators

You can use query operators in the following table to specify how each value in a clause must relate to the corresponding value in a work item. For information about the data type that is assigned to work item fields, see [Work item field reference](../work-items/guidance/work-item-field.md). 

To learn about adding clauses and use of the And/Or operators, see [Define a query, And/Or logical expression](using-queries.md#andor-logical-expression).

:::row:::
   :::column span="1":::
   **Query operator**
   :::column-end:::
   :::column span="3":::
   **Returns work items if the value in the work item matches the criteria listed**
   :::column-end:::
   :::column span="3":::
   **Applicable data types**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **=**

   :::column-end:::
   :::column span="3":::
   Matches the value in the clause.
   :::column-end:::
   :::column span="3":::
   **Number**&mdash;which includes **Double**, **GUID**, **Integer**&mdash;and **String**, **DateTime**, and **TreePath**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **<>**

   :::column-end:::
   :::column span="3":::
   Doesn't match the value in the clause.

   :::column-end:::
   :::column span="3":::
   **Number**, **String**, **DateTime**, and **TreePath**

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **>**

   :::column-end:::
   :::column span="3":::
   Is larger than the value in the clause.

   :::column-end:::
   :::column span="3":::
   **Number**, **String**, and **DateTime**

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **<**

   :::column-end:::
   :::column span="3":::
   Is less than the value in the clause.

   :::column-end:::
   :::column span="3":::
   **Number**, **String**, and **DateTime**

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **>=**

   :::column-end:::
   :::column span="3":::
   Is larger than or equal to the value in the clause.

   :::column-end:::
   :::column span="3":::
   **Number**, **String**, and **DateTime**

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **<=**

   :::column-end:::
   :::column span="3":::
   Is less than or equal to the value in the clause.

   :::column-end:::
   :::column span="3":::
   **Number**, **String**, and **DateTime**

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **=[Field]**

   :::column-end:::
   :::column span="3":::
   Matches the value that is contained in the specified field.

   :::column-end:::
   :::column span="3":::
   Name of a field that is of the same data type as the specified field

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **<>[Field]**

   :::column-end:::
   :::column span="3":::
   Doesn't match the value that is contained in the specified field.

   :::column-end:::
   :::column span="3":::
   Name of a field that is of the same data type as the specified field

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **>[Field]**

   :::column-end:::
   :::column span="3":::
   Is larger than the value that is contained in the specified field.

   :::column-end:::
   :::column span="3":::
   Name of a field that is of the same data type as the specified field

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **<[Field]**

   :::column-end:::
   :::column span="3":::
   Is less than the value that is contained in the specified field.

   :::column-end:::
   :::column span="3":::
   Name of a field that is of the same data type as the specified field

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **>=[Field]**

   :::column-end:::
   :::column span="3":::
   Is larger than or equal to the value that is contained in the specified field.

   :::column-end:::
   :::column span="3":::
   Name of a field that is of the same data type as the specified field

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **<=[Field]**

   :::column-end:::
   :::column span="3":::
   Is less than or equal to the value that is contained in the specified field.

   :::column-end:::
   :::column span="3":::
   Name of a field that is of the same data type as the specified field

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Contains**

   :::column-end:::
   :::column span="3":::
   Contains an exact or partial match of the text string within the field you selected for filtering.

   :::column-end:::
   :::column span="3":::
    **String** 

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Does Not Contain**

   :::column-end:::
   :::column span="3":::
   Doesn't contain an exact or partial match of the text string within the field you selected for filtering.

   :::column-end:::
   :::column span="3":::
    **String** 

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Contains Words**

   :::column-end:::
   :::column span="3":::
   Contains the exact text string or words within the field you selected for filtering. You can also enter partial words or phrases that contain the wildcard character, *. Text string is limited to 100 characters. For restrictions, see [Full-text searches](#full-text) for server and collation requirements.

   :::column-end:::
   :::column span="3":::
   Long-text fields that are indexed for full-text search, which correspond to all **PlainText** and **HTML** fields, and the **History** and **Title** fields.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Does Not Contain Words**

   :::column-end:::
   :::column span="3":::
   Doesn't contain the exact text string or words within the field you selected for filtering. Text string is limited to 100 characters. 

   Use this operator in combination with a clause with the **Contains Words** operator to include and exclude specific keywords.

   :::column-end:::
   :::column span="3":::
   Text fields that are indexed for full text search.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **In**

   :::column-end:::
   :::column span="3":::
   Matches any value in a delimited set. For example, you can find work items whose IDs are 100, 101, and 102 if you specify those values for the ID field. Separate values with the list separator that corresponds to the regional settings that are defined for your client computer. For example, you might use a comma(,).

   :::column-end:::
   :::column span="3":::
   **Number**, **String**, **DateTime**, **TreePath**

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **Is Empty**

   :::column-end:::
   :::column span="3":::
   Lists work items that contain an empty HTML field. You don&#39;t specify a value with this operator. This operator is supported for Azure Boards (cloud service), Azure DevOps Server 2019, and later versions.

   :::column-end:::
   :::column span="3":::
   **HTML** 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Is Not Empty**

   :::column-end:::
   :::column span="3":::
   Lists work items that contain some content in the HTML field. You don&#39;t specify a value with this operator. This operator is supported for Azure Boards (cloud service), Azure DevOps Server 2019, and later versions.

   :::column-end:::
   :::column span="3":::
   **HTML** 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Not In**

   :::column-end:::
   :::column span="3":::
   Doesn't match any value in a delimited set. You can exclude work items whose states are not Resolved, Completed, or Closed from query results if you specify those values for the State field. Separate values with the list separator that corresponds to the regional settings that are defined for your client computer. For example, you might use a comma(,).

   
   > The **Not In** operator is available from Azure Boards and TFS 2018.2 and later versions.


   :::column-end:::
   :::column span="3":::
   **Number**, **String**, **DateTime**, **TreePath**

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **In Group**

   :::column-end:::
   :::column span="3":::
   Matches a value that is a member of the group in the clause. Groups correspond to the name of a team, security group, or work tracking category. For example, you can create a query to find all work items that are assigned to members of the Contributors group or to a team. Team groups are created when you create a team. The name of team groups follows the pattern [*Team Project Name*]&#92;*Team Name*.

   For example queries, see [Query by assignment or workflow changes](query-by-workflow-changes.md).

   :::column-end:::
   :::column span="3":::
    **String** that matches the name of a team, security group, or category defined in the system.


   
   > [!NOTE]
   > You can use the **In Group** operator only with fields that use the **String** data type or the **Work Item Type** field. You can also use groups defined in Azure Active Directory (Azure AD) when your Azure Boards account is backed by Azure AD, or Active Directory when your on-premises server instance is backed by Active Directory.  

   For information about category groups, see [Use categories to group work item types](/previous-versions/azure/devops/reference/xml/use-categories-to-group-work-item-types).

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Not in Group**

   :::column-end:::
   :::column span="3":::
   Doesn't match a value that is a member of the group in the clause.

   :::column-end:::
   :::column span="3":::
    **String**  that matches the name of a user group in Team Foundation Server or a category group defined for a project.

   > [!NOTE]
   > You can use the **Not In Group** operator only with fields that use the **String** data type or the **Work Item Type** field. You can also use groups defined in Azure AD when your Azure Boards account is backed by Azure AD, or Active Directory when your on-premises server instance is backed by Active Directory.     

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Not Under**

   :::column-end:::
   :::column span="3":::
   Doesn't match the value in the clause and isn't contained under the node in the clause.

   :::column-end:::
   :::column span="3":::
   **TreePath** 

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Under**

   :::column-end:::
   :::column span="3":::
   Matches the value in the clause or is contained under the node in the clause.

   :::column-end:::
   :::column span="3":::
    **TreePath** 

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Was Ever**

   :::column-end:::
   :::column span="3":::
   Matches the value in the clause at any previous point.

   :::column-end:::
   :::column span="3":::
   **String** , **DateTime**

   > [!NOTE]
   > **Was Ever** on date fields is not currently supported when using the Query Editor. They are only supported when doing a direct WIQL.

   :::column-end:::
:::row-end:::


> [!TIP] 
> It's possible to contsruct a query using WIQL syntax that uses an operator, such as **Was Ever**, for other data type fields than those listed. For example, you can use **Was Ever** within a clause using the **Iteration Path**. For an example, see [Query by date or current iteration, List work items moved out of a sprint](query-by-date-or-current-iteration.md#list-work-items-moved-out-sprint).  

<a id="variables" /> 
<a id="macros" /> 

## Query macros or variables

You can use the macros described in the following table to filter your queries based on specific fields. 

[!INCLUDE [temp](../includes/note-macro-web-portal.md)]

---
:::row:::
   :::column span="1":::
      **Macro** 
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **[Any]** 
   :::column-end:::
   :::column span="3":::
      Use with the **Work Item Type** or **State** fields to search across all work item types or across all states. For example, <code>Work Item Type=[Any]</code> won't place any filters based on the work item type.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@CurrentIteration**  
   :::column-end:::
   :::column span="3":::
      Use with the **Iteration Path** field to automatically filter for work items assigned to the current sprint based on the [current team focus or context](../../project/navigation/go-to-project-repo.md). For specific examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).  
      The **@CurrentIteration** macro only works when run from the web portal. You can't use the macro when [copying or cloning test suites and test cases](/previous-versions/azure/devops/test/mtm/copying-and-cloning-test-suites-and-test-cases), [defining alerts](../../organizations/notifications/about-notifications.md), or with [REST APIs](/rest/api/azure/devops/).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@CurrentIteration +/- n**   
   :::column-end:::
   :::column span="3":::
      Use with the **Iteration Path** field to filter the set of work items assigned to the current sprint +/- *n* sprints based on the [current team focus or context](../../project/navigation/go-to-project-repo.md?toc=/azure/devops/boards/toc.json&amp;bc=/azure/devops/boards/breadcrumb/toc.json). For specific examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).  
      The **@CurrentIteration +/- n** macro is supported for Azure Boards, Azure DevOps Server 2019 and later versions, and only when run from the web portal.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@Follows**  
   :::column-end:::
   :::column span="3":::
      Use with the **ID** field and **In** operator to list all work items that you're following in the project. To learn more about the Follow feature, see [Follow a work item or pull request](../work-items/follow-work-items.md). You can view this same list from the [Work Items page, **Following** pivot view](../work-items/view-add-work-items.md).  
      The **@Follows** macro is supported only when run from the web portal.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@Me** 
   :::column-end:::
   :::column span="3":::
      Use with an identity or user account field to automatically search for items associated with your user or account name. For example, you can find work items that you opened with the clause <code>Created By=@Me</code>. For more examples, see [Query by assignment, workflow, or Kanban board changes](query-by-workflow-changes.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@MyRecentActivity** <sup>1</sup>  
   :::column-end:::
   :::column span="3":::
      Use with the **ID** field and **In** operator to list work items that you have viewed or updated in the project within the last 30 days. You can view this same list from the [Work Items page, **My activity** pivot view](../work-items/view-add-work-items.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@Project** 
   :::column-end:::
   :::column span="3":::
      Use with the **Team Project** field to filter for work items in other projects. For example, you can find all the work items in the currently selected project with the clause <code>Team Project=@Project</code>. The system automatically defaults to filtering based on the current project. For more information, see [Define a query, Query across projects](using-queries.md#across-projects). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@RecentMentions** <sup>1</sup> 
   :::column-end:::
   :::column span="3":::
      Use with the **ID** field and **In** operator to list work items where you have been mentioned in the Discussion section. You can view this same list from the [Work Items page, **Mentioned** pivot view](../work-items/view-add-work-items.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@RecentProjectActivity** <sup>1</sup>  
   :::column-end:::
   :::column span="3":::
      Use with the **ID** field and **In** operator to list work items that have been recently updated. The number of work items listed depends on the work tracking activity of the project. For highly active projects, the macro lists work items that have been updated in the project within the last 30 days or so. For less active projects, however, this list could include work items older than 30 days. You can view similar lists from the [Work Items page, **Recently created**, **Recently updated** and **Recently completed** pivot views](../work-items/view-add-work-items.md). The number of work items returned is capped at 5000. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@StartOfDay** <sup>2</sup> 
   :::column-end:::
   :::column span="3":::
      Use with a <code>DateTime</code> field to filter for work items that relate to the current date or with a plus/minus offset. For example, you can find all items closed in the last week with the clause <code>Closed Date&gt;=@StartOfDay-7</code>. For more examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@StartOfMonth** <sup>2</sup> 
   :::column-end:::
   :::column span="3":::
      Use with a <code>DateTime</code> field to filter for work items that relate to the current month or with a plus/minus offset. For example, you can find all items created in the last three months with the clause <code>Created Date&gt;=@StartOfMonth-3</code>. For more examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@StartOfWeek** <sup>2</sup> 
   :::column-end:::
   :::column span="3":::
      Use with a <code>DateTime</code> field to filter for work items that relate to the current week or with a plus/minus offset. For example, you can find all items changed in the last two weeks with the clause <code>Changed Date&gt;=@StartOfWeek-2</code>. For more examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@StartOfYear** <sup>2</sup> 
   :::column-end:::
   :::column span="3":::
      Use with a <code>DateTime</code> field to filter for work items that relate to the current year or with a plus/minus offset. For example, you can find all features that have a Target Date scheduled within the current year with the clause <code>Target Date&gt;=@StartOfYear</code>. For more examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@TeamAreas**  
   :::column-end:::
   :::column span="3":::
      Only use with the **Area Path** field to filter for work items whose area path corresponds to one assigned to a specific team. Requires you use the **=** operator. For example, you can find all items assigned to the area paths assigned to the Web team with the clause <code>Area Path=@TeamAreas [Fabrikam Fiber]\Web</code>. For more examples, see [Query by area or iteration path](query-by-area-iteration-path.md).  
      The **@TeamAreas** macro is supported for Azure DevOps Server 2019 and later versions, and only when run from the web portal.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@Today**
   :::column-end:::
   :::column span="3":::
      Use with a <code>DateTime</code> field to filter for work items that relate to the current date or to an earlier date. You can also modify the **@Today** macro by subtracting days. For example, you can find all items created in the last week with the clause <code>Created Date&gt;=@Today-7</code>. For more examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).
   :::column-end:::
:::row-end:::
---
 

> [!NOTE]  
> 1. The **@MyRecentActivity**, **@RecentMentions**, and **@RecentProjectActivity** macros are supported for TFS 2018.2 and later versions.  
> 2. The **@StartOfDay**, **@StartOfWeek**, **@StartOfMonth**, and **@StartOfYear** macros are supported for Azure DevOps Server 2019 Update 1 and later versions.



<a id="full-text" /> 

## Full-text and partial word searches

Specify **Contains** or **Does Not Contain** to search against exact or partial matches of a word or phrase. These operators filter items based on the full-text search index created for long-text fields. Specify **Contains Words** or **Does Not Contain Words** to search against an exact phrase or to use the wildcard character, **&#42;**. These operators use the full-text search index. You can only use the wildcard character at the end of a partial word or phrase.

For examples, see [Example work item queries](query-index-quick-ref.md) and [Query for work items using the History field](history-and-auditing.md).


> [!NOTE]    
> Not all deployments support full-text searches. For example, SQL Express and SQL Azure, which support the cloud service, do not support full-text search. In these instances, you only see the **Contains** and **Does not Contain** operators.


::: moniker range="< azure-devops"
Azure DevOps Server and Team Foundation Server automatically index all long-text fields with a data type of **PlainText** and **HTML** and the **Title** field for full-text search. The index and operators are only available when the SQL Server that supports Team Foundation Server supports full-text search.

Full-text searches require a SQL collation that corresponds to a language that has a word breaker registered with SQL Server. If the collation settings for the project collection database used for your Team Foundation Server instance don't correspond to a supported language, your search results may not match your expectations. In these cases, you might try using the **Contains** or **Does Not Contain** operators.

For more information, see [Full-Text Search Queries and Collation Settings](/azure/devops/server/install/sql-server/collation-requirements).

::: moniker-end



## Related articles 

- [Query quick reference](query-index-quick-ref.md)
- [About managed queries](about-managed-queries.md)
- [Work item field index](../work-items/guidance/work-item-field.md)
- [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md)

[!INCLUDE [temp](../includes/rest-apis-queries.md)] 


<!---
## Query indexed fields

In addition to the full-text search index, a query index is created. It is based on those fields that have indexing enabled. The query index improves the response time when you run queries that include indexed fields.

By default, the following fields are indexed: **Assigned To**, **Created Date**, **Changed By**, **State**, **Reason**, **Area ID**, **Iteration ID**, and **Work Item Type**. If there are other fields that your team frequently uses in their queries, you can add them to the query index.

You use the **witadmin indexfield** command to enable or disable indexing for a field. See [Manage work item fields](../../reference/witadmin/manage-work-item-fields.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json).

-->
