---
ms.topic: include
---

## Substitution strings

[!INCLUDE [temp](sample-query-substitutions-2.md)]

## Query breakdown

The following table describes each part of the query.

<table>
<tbody valign="top">
<tr><td width="50%"><b>Query part</b></td><td><b>Description</b></td><tr>
<tr><td width="50%"><code>Processes/any(p:p/BacklogType eq 'RequirementBacklog')</code></td><td>Filter the work items in such a way that they should fall in 'requirements' category for at least one process associated with them.</td><tr>
<tr><td><code>Processes/all(p:p/IsBugType eq false)</code></td><td>Omit the bug type work items while getting requirements. In Basic process template, Issue work items are also of bug type, so for Basic process remove this clause from your query.</td><tr>
</tbody>
</table>