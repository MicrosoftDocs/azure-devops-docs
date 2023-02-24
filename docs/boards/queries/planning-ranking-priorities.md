---
title: Create queries based on rank and priority fields
titleSuffix: Azure Boards
description: Learn how to create queries based on planning, ranking, priority, and picklist fields in Azure DevOps and Azure Boards.
ms.custom: boards-queries
ms.service: azure-devops-boards
ms.assetid: ca05800c-905a-407f-bea8-a7ee32b65973
ms.author: chcomley
author: KathrynEE
ms.topic: example-scenario
monikerRange: '<= azure-devops'
ms.date: 05/24/2022
---

# Query by rank and picklist value in Azure DevOps and Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You use planning, ranking, and priority fields to specify which work the team should complete first.  By ranking and prioritizing work items, all team members gain an understanding of the relative importance of the work that they must accomplish.  

You rank and prioritize work items when you [Create your backlog](../backlogs/create-your-backlog.md).

## Supported operators and macros 

Query clauses that specify a string or integer field can use the operators listed below.
- = , <> , > , < , >= , <=  
- =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field]  
- In, Not In  
- Was Ever  

<a id= "picklist-query-examples" />


## Picklist query examples 

Most of the planning fields described in the next section are either an integer or string field. For example queries of numeric or rich-text fields, see [Query by numeric fields](query-numeric.md) and [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md).   

To use the **In** and **Not In** operators, enter the names or labels of items that correspond to the selected field separated by a comma. For example, to filter for **Work Item Types** that are either user stories or bugs, add the clause: `Work Item Types In User Story,Bug`.  

:::row:::
   :::column span="1":::
   **Filter for**
   :::column-end:::
   :::column span="1":::
   **Include these query clauses**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      List blocked tasks (Scrum)  
      (Blocked field is type String) 
   :::column-end:::
   :::column span="1":::
      `Work Item Type In Task`   
      `And Blocked = Yes`  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Priority 1 bugs (**Priority** field is type Integer) 
   :::column-end:::
   :::column span="1":::
      `Work Item Type In Bug`   
      `And Priority = 1`   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Features and stories that address Architectural areas  
      (**Value Area** field is type String) 
   :::column-end:::
   :::column span="1":::
      `Work Item Type In Feature,User Story`  
      `And Value Area = _ Architectural`  
   :::column-end:::
:::row-end:::  
---

<a id="fields-table" />
<a id="fields" />

## Fields used to plan and prioritize work  

The following table describes the fields that you can use to plan and prioritize work. Some fields are only valid for a specific process&mdash;[Basic](../get-started/plan-track-work.md), [Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), or [Capability Maturity Model Integration (CMMI)](../work-items/guidance/cmmi-process.md).

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
   **Backlog Priority** <sup>1</sup>
   :::column-end:::
   :::column span="2":::
   A number assigned by a background process used to track the sequence of items on a backlog or board. To learn more about how this field is used, see [Use backlogs for effective project management, Backlog priority or stack rank order](../backlogs/backlogs-overview.md#backlog-priority-or-stack-rank-order). 

   Reference name=Microsoft.VSTS.Common.BacklogPriority, Data type=Double
   :::column-end:::  
   :::column span="1":::
   Bug, Epic, Feature, Product backlog item, Task (Scrum)

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Blocked**
   :::column-end:::
   :::column span="2":::
      Indicates that no further work can be performed on the work item. If an issue has been opened to track a blocking problem, a link should be made to the issue.
      - For the Scrum process, task work items: You can specify **Yes** or clear the field. 
      - For the CMMI process work items: You can specify **Yes** or **No**.

     Reference name=Microsoft.VSTS.CMMI.Blocked, Data type=String
   :::column-end:::     
   :::column span="1":::
   Bug, Change Request, Requirement, Risk, Task (CMMI, Scrum)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Committed**
   :::column-end:::
   :::column span="2":::
   Indicates if the requirement is committed in the project. You can specify **Yes** or **No**.

   Reference name=Microsoft.VSTS.CMMI.Committed, Data type=String
   :::column-end:::
   :::column span="1":::
   Requirement (CMMI)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Escalate**
   :::column-end:::
   :::column span="2":::
   Indicates if the issue is affecting the critical path of the project plan. You can specify **Yes** or **No**.
 
   Reference name=Microsoft.VSTS.CMMI.Escalate, Data type=String
   :::column-end:::
   :::column span="1":::
   Issue (CMMI)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="priority" />**Priority** <sup>1</sup>
   :::column-end:::
   :::column span="2":::
   A subjective rating of the bug, issue, task, or test case as it relates to the business. You can specify the following values:  
   - **1**: Highest priority, implement feature or fix as soon as possible. Product cannot ship without successful resolution.  
   - **2**: Medium priority. Product cannot ship without successful resolution, but it does not need to be addressed immediately.  
   - **3**: Low priority. Implementation or fix is optional based on resources, time, and risk. If product ships without successful resolution, document the issue in release notes as known issues. 
   - **4**: Lowest priority. Tracks an issue that basically does not affect usage (such as a small typo).  
   Reference name=Microsoft.VSTS.Common.Priority, Data type=Integer
   :::column-end:::
   :::column span="1":::
   Bug, Change Request, Epic, Feature, Impediment, Issue, Product backlog item, Requirement, Risk, Shared Step, Task, Test Case, User Story
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="risk" />**Risk**
   :::column-end:::
   :::column span="2":::
   A subjective rating of the relative uncertainty around the successful completion of a user story.
   Defined allowed values are:
   - **1 - High**
   - **2 - Medium**
   - **3 - Low**

   Reference name=Microsoft.VSTS.Common.Risk, Data type=String
   :::column-end:::
   :::column span="1":::
   Epic, Feature, User Story (Agile) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Severity**  <sup>1</sup>
   :::column-end:::
   :::column span="2":::
   A subjective rating of the impact of a bug on the project. You can specify the following values:
   - **1 - Critical**
   - **2 - High**
   - **3 - Medium**
   - **4 - Low**
 
   Reference name=Microsoft.VSTS.Common.Severity, Data type=String
   :::column-end:::
   :::column span="1":::
   Bug, Issue (CMMI), Risk (CMMI)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Stack Rank** <sup>2</sup>
   :::column-end:::
   :::column span="2":::
   A number, assigned by a background process, used to track the list order of items on a backlog or board in the web portal. To learn more about how this field is used, see [Use backlogs for effective project management, Backlog priority or stack rank order](../backlogs/backlogs-overview.md#backlog-priority-or-stack-rank-order). 
 
   Reference name=Microsoft.VSTS.Common.StackRank, Data type=Double
   :::column-end:::
   :::column span="1":::
   Bug, Epic, Feature, Requirement (CMMI), Risk (CMMI), Task, User Story (Agile) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Time Criticality**
   :::column-end:::
   :::column span="2":::
   A subjective unit of measure that captures how the business value lessens over time. Higher values indicate that the epic or feature is inherently more time critical than those items with lower values.

   Reference name=Microsoft.VSTS.Common.TimeCriticality, Data type=Double
   :::column-end:::
   :::column span="1":::
   Epic, Feature
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Triage**
   :::column-end:::
   :::column span="2":::
   Indicates the type of triage decision that is pending for the work item. You use this field when the work item is in the **Proposed** state.

   You can specify one of the following values:
   - **Pending** (default)
   - **More Info**
   - **Info Received**
   - **Triaged**

   Reference name=Microsoft.VSTS.Common.Triage, Data type=String
   :::column-end:::
   :::column span="1":::
   CMMI only: Bug, Change Request, Epic, Feature, Issue, Requirement, Task 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Value Area**  <sup>1</sup>
   :::column-end:::
   :::column span="2":::
   The area of customer value addressed by the epic, feature, or backlog item. Values include:
   - **Architectural**: technical services to implement business features that deliver solution
   - **Business**: services that fulfill customers or stakeholder needs that directly deliver customer value to support the business (Default)

   Reference name=Microsoft.VSTS.Common.ValueArea, Data type=String
   :::column-end:::
   :::column span="1":::
   Bug, Epic, Feature, Product Backlog Item (Scrum) Requirement (CMMI), User Story (Agile)
   :::column-end:::
:::row-end:::
---

**Notes:**  
1.  To change the menu selection, see [Add and manage fields (Inherited process)](../../organizations/settings/work/customize-process-field.md) or [Add or modify a field, customize a picklist (On-premises XML process)](../../reference/add-modify-field.md).  
2. The sequence of items on a product backlog page is determined according to where you have added or dragged the items. As you drag items, a background process updates either the Backlog Priority (Scrum) or Stack Rank (Agile, Basic, CMMI) field. These fields determine the order in which backlog items appear on a backlog page. They are assigned to `type="Order"` in the ProcessConfiguration file.  


## More about Backlog Priority or Stack Rank fields

The Backlog Priority and Stack Rank fields don't appear on the work item forms. (To learn why, see [Where is the field on the work item form to order the backlog?](https://devblogs.microsoft.com/devops/where-is-the-field-on-the-work-item-form-to-order-the-backlog).

To add the field to the form:

- For an Inherited process, add the Stack Rank field to a work item type ([for the custom process that your project references](../../organizations/settings/work/customize-process-form.md)).
- For an On-premises XML process, add the field to the form, [modify the WIT XML definition to add the following control element](../../reference/add-modify-wit.md):

    ```xml
    <Control FieldName="Microsoft.VSTS.Common.StackRank" Type="FieldControl" Label="Stack Rank" LabelPosition="Left" />
    ```

    or, for Scrum:

    ```xml
    <Control FieldName="Microsoft.VSTS.Common.BacklogPriority" Type="FieldControl" Label="Stack Rank" LabelPosition="Left" />
    ```


## Related articles 

- [Query by a numeric field](query-numeric.md)   
- [Work item field index](../work-items/guidance/work-item-field.md)  
- [Work item fields and attributes](../work-items/work-item-fields.md).  

