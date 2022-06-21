---
ms.topic: include
---

## Substitution strings

[!INCLUDE [temp](sample-query-substitutions-2.md)]

## Query breakdown

The following table describes each part of the query.

:::row:::
   :::column span="1":::
   **Query part**
   :::column-end:::
   :::column span="1":::
   **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Processes/any(p:p/BacklogType eq 'RequirementBacklog')`
   :::column-end:::
   :::column span="1":::
   Filter the work items in such a way that they should fall in 'requirements' category for at least one process associated with them.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Processes/all(p:p/IsBugType eq false)`
   :::column-end:::
   :::column span="1":::
   Omit the bug type work items while getting requirements. In Basic process template, Issue work items are also of bug type, so for Basic process remove this clause from your query.
   :::column-end:::
:::row-end:::
