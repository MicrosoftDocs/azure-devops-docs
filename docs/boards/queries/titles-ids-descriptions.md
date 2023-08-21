---
title: Query by title, ID, or rich-text fields in Azure Boards and Azure DevOps 
titleSuffix: Azure Boards
description: Learn about work queries based on titles, IDs, and rich-text fields in Azure Boards and Azure DevOps.
ms.custom: boards-queries
ms.service: azure-devops-boards
ms.assetid: c0b1fcb1-c4f4-4651-a401-171fa4372518
ms.author: chcomley
author: chcomley
ms.topic: example-scenario
monikerRange: '<= azure-devops'
ms.date: 10/06/2022
---

# Query by titles, IDs, and rich-text fields in Azure Boards and Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you want to find work items based on a keyword or phrase or a null text field, you can do so by filtering on single-line text (String), multi-line text (PlainText), and rich-text (HTML) fields. If you find that your queries take too long to return results, see [Create a query/Best practices](using-queries.md#best-practices).  

## Supported operators and macros 

Query clauses that specify a text or rich-text field can use the operators and macros listed in the following table.



---
:::row:::
   :::column span="1":::
      **Data type**
   :::column-end::: 
   :::column span="3":::
      **Supported operators and macros**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Rich-text (HTML)**  
      **Multi-line text strings (PlainText)**
   :::column-end::: 
   :::column span="3":::
      `Contains Words`, `Does Not Contain Words`, `Is Empty`<sup>1</sup>, `Is Not Empty`<sup>1</sup>
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Single text (String)**
   :::column-end::: 
   :::column span="3":::
      `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], Contains, Does Not Contain, In, Not In, In Group, Not In Group, Was Ever`
      **Macros**: `[Any]`, valid with the **Work Item Type** field and `@Project`<sup>2</sup>, valid with the **Team Project** field. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **ID**
   :::column-end::: 
   :::column span="3":::
      `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], In, Not In, Was Ever`
      **Macros**: `@Follows`, `@MyRecentActivity`, `@RecentMentions`, `@RecentProjectActivity` valid with the **ID** field and `In` and `Not In` operators 
     `@Project`<sup>2</sup>, valid with the **Team Project** field. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **State** and **Work Item Type** fields
   :::column-end::: 
   :::column span="3":::
      `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], `Contains`, `Does Not Contain`, `In`, `Not In`, `In Group`, `Not In Group`, `Was Ever`   
      **Macros**: `[Any]` valid with both fields. 
   :::column-end:::
:::row-end:::
---
 

> [!NOTE]  
> 1. The `Is Empty` and `Is Not Empty` operators are supported for Azure DevOps Server 2019 RC2 and later versions
> 2. The system automatically defaults to filtering based on the current project. For more information, see [Query across projects](using-queries.md#across-projects). 


## Use `Contains words` for string matches
 
When you want to filter on a string match, try using the `Contains Words` operator instead of `Contains`. The `Contains Words` operator runs a full-text search on the specified field, which is faster in most cases. Text string is limited to 100 characters. 

While the `Contains` operator runs a table scan, which isn't only slower, but also consumes more CPU cycles. These CPU cycles contribute towards your resource consuming rate limit. 


<a id="keyword"/>

## Keyword or phrase query with wildcards

Use **Contains** or **Contains Words** to list items that partially or exactly match the words or phrase that you enter.  

![Editor for flat list query for filtering key words.](media/example-work-item-queries/IC675039.png)   

Choose **Contains** or **Does Not Contain** to search against exact or partial matches of a word or phrase. Choose **Contains Words** or **Does Not Contain Words** to search against an exact phrase or to use the wildcard character, *. These operators use the full-text search index.

For example, specify **Contains Words** and **inform&#42;** to filter on a text field that contains *inform* or *information* or *informational*. 

> [!div class="mx-imgBorder"] 
> ![Use wild card with Contains Words.](media/text-queries/contains-word-wildcard.png)

[!INCLUDE [temp](../includes/query-clause-tip.md)]

<a id="undefined-value"/>



## Query for specific words and not others

Use **Contains Words** and **Does Not Contain Words** operators to list items that exactly match the words or phrase that you enter, and exclude other words or phrases. You can use these operators in combination and with the wildcard character (*).

In the following example, these operators filter work items for those items that contain the work *Phase* but not the word *Phasor*. 

> [!div class="mx-imgBorder"] 
> ![Screenshot of Query Editor to include and exclude exact words.](media/text-queries/contains-words-exact-query.png)


## Undefined field value queries

You can find work items that have an undefined field value by using the equals operator (=) and leaving the Value for the field blank. For example, the following filters list all work items of type Task whose Activity field is blank.  

![Filter based on blank entries](media/example-work-item-queries/IC736440.png)

To list work items based on a field that isn't blank, use the not operator (<>) and leave the Value blank.

<a id="empty"/>
<a id="empty-or-not-empty-html-field-queries"/>

::: moniker range=">= azure-devops-2019"

## Empty or not empty HTML field queries

You can find work items where no **Description** has been entered. Using the **Is Empty** or **Is Not Empty** with an HTML field supports listing work items with empty or not empty rich text fields. You don't specify a value with this operator.  

For example, the following query filters list all work items where some entries have been made into the **Description** field.  

> [!div class="mx-imgBorder"] 
> ![Filter based non-empty HTML fields](media/example-queries/is-not-empty-query.png)

::: moniker-end

<a id="no-tags" />

> [!NOTE]
> The ability to query for work items that don't have any tags attached to them is not a supported feature. If you'd like to up vote the request to support this feature, you can do so on our Developer Community page, [Be able to search for empty tags](https://developercommunity.visualstudio.com/t/be-able-to-search-for-empty-tags/907425). 


<a id="category"/>

## Category-based queries

To filter work items based on the category they belong to, use the **In Group** operator. For example, the following filter criteria returns all work items that are in the current project, assigned to the team member, and defined as belonging to the Bug Category.

![Query clause to find work items by category](media/example-work-item-queries/IC720125.png)

<a id="category"/>

### What items appear in the Requirement or Task categories? 

The default assignments of work item types to each category are listed below for each process.  

| Process | Requirement category | Task category |
|---------|---------|---------|
| Basic | Issue | Task |
| Agile | User Story | Task |
| Scrum | Product Backlog Item, Bug | Task |
| CMMI | Requirement | Task |

Each team can determine if the Bug work item type appears in either the Requirement or Task category. See [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md). You can add custom work item types to a backlog. For more information, see [Add or modify a work item type, Add a custom WIT to a backlog or board](../../reference/add-modify-wit.md). 

<a id="following" />

## Query for work items that you're following

You can use the **@Follows** macro to filter a list based on work items you're following along with other query filters. 

For example, the following query shows how to query across all projects for active work items that you're following. You use the ID field and the In operator with the **@Follows** macro.  


:::image type="content" source="../work-items/media/follow-work/query-follows.png" alt-text="Query Editor, with ID In @Follows query clause":::


<a id="recent-macros" />


## Query for recent work item activity

You can use the following macros to list work items based on recent activity: 

- **@MyRecentActivity**: List items you've recently viewed or modified.
- **@RecentMentions**: List items you were added to via an **@mention** in the last 30 days.
- **@RecentProjectActivity**: List items that have been recently created or modified in your project.

Specify the **ID** field and either the **In** or **Not In** operators.  

For example, the following query shows how to query for work items that you've recently viewed or modified. 

:::image type="content" source="media/titles-ids/my-recent-activity-macro-query.png" alt-text="Query Editor, with ID In @MyRecentActivity query clause":::


<a id="fields" />

## Common fields for most work item types 

The following table describes common fields used to filter queries. The **ID** fields uniquely identify work items in a list. Use the **Title** field to distinguish the work item from all others of the same type.  The **Description** and other rich-text (data type=HTML) fields provide additional information that is needed to implement work and track changes. After a work item is created, you can modify all fields except for the **ID**. When you add and save a work item, the ID is assigned by the system and cannot be changed. 

> [!NOTE]   
> The system automatically indexes all long-text fields with a data type of **PlainText** and **HTML** fields for full-text search. This includes the **Title**, **Description**, and **Steps to Repro** fields. For more information and  server and collation requirements applicable to on-premises Azure DevOps, see [Query fields, operators, values, and variables - Full-text and partial word searches](query-operators-variables.md#full-text).

:::row:::
     :::column span="1":::
   **Field name**
   :::column-end:::
     :::column span="2":::
   **Description**
   :::column-end:::
     :::column span="1":::
   **Work item type**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
   Acceptance Criteria  <sup>1</sup>
   :::column-end:::
   :::column span="2":::
   A description of the criteria to be met before the bug or product backlog item can be closed.

   Before work begins on a bug or product backlog item, the criteria for customer acceptance should be described as clearly as possible. Conversations between the team and customers to define the acceptance criteria helps ensure that your team understands your customers&#39; expectations. The acceptance criteria can be used as the basis for acceptance tests so that you can more effectively evaluate whether an item has been satisfactorily completed.
 
   Reference name=Microsoft.VSTS.Common.AcceptanceCriteria, Data type=HTML
   :::column-end:::     
   :::column span="1":::
   Bug, Epic, Feature, Product backlog item (Scrum)

   :::column-end:::
:::row-end:::
:::row:::
     :::column span="1":::
   Description <sup>1, 2</sup>
   :::column-end:::
     :::column span="2":::
   
   Use this field to provide in-depth information about a work item.

   Reference name=System.Description, Data type=HTML
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   ID
   :::column-end:::
   :::column span="2":::
   
   The unique identifier that is assigned to a work item. Work item IDs are unique across all projects and within a project collection.  

   Reference name=System.Id, Data type=Integer
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::
:::row:::
     :::column span="1":::
   Repro Steps (or Steps to reproduce) <sup>1</sup> 
   :::column-end:::
     :::column span="2":::
   The steps that are required to reproduce unexpected behavior. Capture enough information so that other team members can understand the full impact of the problem as well as whether they have fixed the bug. This includes actions taken to find or reproduce the bug and expected behavior.   
   Reference name=Microsoft.VSTS.TCM.ReproSteps, Data type=HTML
   :::column-end:::
   :::column span="1":::
   Bug
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Resolution
   :::column-end:::
   :::column span="2":::
   Describes how an impediment was resolved.

   Reference name=Microsoft.VSTS.Common.Resolution, Data type=HTML
   :::column-end:::     
   :::column span="1":::
   Impediment (Scrum)
   :::column-end:::
:::row-end:::
:::row:::
     :::column span="1":::
   System Info<sup>1</sup> 
   :::column-end:::
     :::column span="2":::
   Information about the software and system configuration that is relevant to the bug, code review, or feedback. 

   Reference name=Microsoft.VSTS.TCM.SystemInfo, Data type=HTML
   :::column-end:::
     :::column span="1":::
   Bug, Code Review Request, Feedback Request    
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Team Project
   :::column-end:::
   :::column span="2":::
   The project to which a work item belongs. Add this field to a query when you want to filter your list to items in one or more projects. For more information, see [Example queries, query across projects](using-queries.md#across-projects).   

   Reference name=System.TeamProject, Data type=String
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::
:::row:::
     :::column span="1":::
   Title
   :::column-end:::
     :::column span="2":::
   A short description that summarizes what the work item is and helps team members distinguish it from other work items in a list.

   Reference name=System.Title, Data type=String
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::
:::row:::
     :::column span="1":::
   Work Item Type
   :::column-end:::
     :::column span="2":::
   The name of the work item type. Work item types are defined based on the process used when you created your project. For more information, see [About processes and process templates](../work-items/guidance/choose-process.md) and [Add or modify a work item type](../../reference/add-modify-wit.md). 

   To filter work items based on their [category assignment](#category), you can use the **In Group** and **Not In Group** operators and select a category from the drop-down list.  

   Reference name=System.WorkItemType, Data type=String
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::

> [!NOTE]  
> 1. To learn more about working with rich-text fields, see [Share information within work items](share-plans.md#rich-text).   
> 2. Upon upgrade to Team Foundation Server 2012, the Description field was changed from a field type of PlainText to **HTML**. Using the **witadmin changefield** command you can revert the data type for this field. See [Manage work item fields (witadmin)](../../reference/witadmin/manage-work-item-fields.md).


## Related articles

- [Query editor](using-queries.md)   
- [Add work items](../backlogs/add-work-items.md)  
- [Work item field index](../work-items/guidance/work-item-field.md)  
- [About managed queries](about-managed-queries.md)   


[!INCLUDE [temp](../includes/rest-apis-queries.md)]



