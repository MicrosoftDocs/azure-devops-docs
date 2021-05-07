---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 10/21/2020
ms.topic: include
---

### Removing "Assigned To" rule on Bug work item type

There are several hidden system rules across all the different work item types in Agile, Scrum, and CMMI. These rules have existed for over a decade and have generally worked fine without any complaints. However, there are a couple of rules that have run out their welcome. One rule in particular has caused a lot of pain for new and existing customers and we have decided it was time to remove it. This rule exists on the Bug work item type in the Agile process.

"Set the Assigned value to Created By when state is changed to Resolved"

We received a lot of your feedback about this rule. In response, we went ahead and removed this rule from the Bug work item type in the Agile process. This change will affect every project using an inherited Agile or a customized inherited Agile process. For those customers who like and depend on this current rule, please see our [blog post](https://devblogs.microsoft.com/devops/removing-assigned-to-rule-from-bug/) on the steps you can take to re-add the rule in using custom rules.

