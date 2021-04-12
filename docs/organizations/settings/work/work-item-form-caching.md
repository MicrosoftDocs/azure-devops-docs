---
title: Work item form IndexDB caching issues
titleSuffix: Azure Boards
description: Work item cache rules cause delay in some server side rule evaluations  
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: troubleshooting
monikerRange: "<= azure-devops"
ms.date: 04/12/2021
---

# Work item form IndexDB caching issues

[!INCLUDE [temp](../../../boards/includes/version-all.md)]
 
To quickly render work items in your client or browser, several data elements are cached by the IndexDB process. A known issue exists in the cache rules that can cause a delay in server side rule re-evaluations.  

Specifically, this issue may cause rules added to a work item type to not evaluate properly within a web browser when a user's group membership is updated. For example, a user is added to a group that lifts a restricted state change, but their client doesn't immediately accept that new ability.
  
If you encounter this issue and take no action, the issue will self-resolve within three days when the cache gets a full update of membership information. Otherwise, you can resolve the issue by following the instructions provided to [Clear the IndexDB cache](#clear-cache). 

## Background information on issue cause 

Each work item uses IndexedDB to cache work item type information and other meta data. Included in the work item type information are rules added to the work item type. User and group based rule restrictions are evaluated on the server-side and prohibited/allowed values are added to the rules based on the evaluation.  

For the **Inherited process model**, this includes rules with the following conditions: 

:::image type="content" source="media/customize-workflow/conditions-user-group-membership.png" alt-text="User and group membership conditions, Inherited process"::: 
 
For the **Hosted XML** and **On-premises XML** process models, this includes conditional rules that include the **for** or **not** attributes, such as:  

```xml
<FIELD name="Triage Description">
    <READONLY not="[Project]\Triage Committee" />
</FIELD>
```

If group membership changes are made to a team or user, the rules impacted by those changes aren't re-evaluated in real time as the rules always come from the cache. While a potential solution is to invalidate the cache when updates to memberships are made, this solution runs up against performance constraints.  

## How to avoid the issue  

To avoid triggering this issue in the first place, adding yourself to all the relevant teams before attempting to create a work item ensures that the cache stores the correct information.

<a id="clear-cache" /> 

## Clear the IndexDB cache 

If your cache stores outdated rules, you can either wait for the client cache to expire within three days, or you can clear the cache. To clear the cache, run the following command in the browser command window and then refresh the browser:

`window.indexedDB.deleteDatabase("wit")`

## Related resources

- [Set permissions and access for work tracking](../../security/set-permissions-access-work-tracking.md) 
- [Apply rules to workflow states (Inheritance process)](apply-rules-to-workflow-states.md) 
- [Add a rule to a work item type (Inheritance process)](custom-rules.md) 
- [Apply or ignore rules based on user or group (On-premises XML process](../../../reference/xml/apply-rule-work-item-field.md#apply-or-ignore-rules-based-on-user-or-group)  
 