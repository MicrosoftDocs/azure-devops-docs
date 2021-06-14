---
title: Troubleshoot work item form caching issues
titleSuffix: Azure Boards
description: Resolve work item cache rules that cause delay in server-side rule evaluations  
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: troubleshooting
monikerRange: "<= azure-devops"
ms.date: 04/12/2021
---

# Troubleshoot work item form caching issues

[!INCLUDE [temp](../../../boards/includes/version-azure-boards-plus-2018-2020.md)]
 
To quickly render work items in your client or browser, several data elements are cached by the IndexDB process. A known issue exists in the cache rules that can cause a delay in server-side rule re-evaluations.  

This issue may cause rules added to a work item type to evaluate improperly. Specifically, this issue occurs when modifying a work item in a web browser and a change to a user's group membership causes a change in how a conditional rule should be evaluated. For example, a user is added to a group that lifts a restricted state change, but the user's browser doesn't immediately accept the change in the user's status.
  
If you come across this issue and take no action, the issue will self-resolve. Each user's cache automatically updates every three days with a full update of membership information. Otherwise, you can resolve the issue by following the instructions provided in [Clear the IndexDB cache](#clear-cache) later in this article. 

## Background information on issue cause 

Each work item uses IndexedDB to cache work item type information and other meta data. Included in the information are rules added to the work item type. User and group-based rule restrictions are evaluated on the server-side. Permissions that prohibit or allow certain actions are applied to the user based on the evaluation.  

For the **Inherited process model**, conditional rules include rules with the following conditions: 

:::image type="content" source="media/customize-workflow/conditions-user-group-membership.png" alt-text="User and group membership conditions, Inherited process"::: 
 
For the **Hosted XML** and **On-premises XML** process models, conditional rules include rules with the **for** or **not** attributes, such as:  

```xml
<FIELD name="Triage Description">
    <READONLY not="[Project]\Triage Committee" />
</FIELD>
```

Rules are always evaluated from the web cache. Rules that are impacted by user or group membership changes aren't reevaluated in real time. While a potential solution is to invalidate the cache when updates to memberships are made, this solution runs up against performance constraints.  

## How to avoid the issue  

To avoid triggering this issue in the first place, consider adding yourself to all relevant teams before you create a work item. This action ensures that the cache stores the correct information.

<a id="clear-cache" /> 

## Clear the IndexDB cache 

If your cache stores outdated rules, you can wait for the client cache to expire within three days or you can clear the cache. To clear the cache, run the following command in the browser command window and then refresh the browser:

`window.indexedDB.deleteDatabase("wit")`

## Related resources

- [Set permissions and access for work tracking](../../security/set-permissions-access-work-tracking.md) 
- [Apply rules to workflow states (Inheritance process)](apply-rules-to-workflow-states.md) 
- [Add a rule to a work item type (Inheritance process)](custom-rules.md) 
- [Apply or ignore rules based on user or group (On-premises XML process)](../../../organizations/settings/work/rule-reference.md)#apply-or-ignore-rules-based-on-user-or-group)  
 
