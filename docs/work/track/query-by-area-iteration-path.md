---
title: Query by area or iteration path | Team Services & TFS
description: Find or list work items based on their area or iteration path  (Visual Studio Team Services and Team Foundation Server)
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 65066197-F5BE-45F3-898E-1BA3C7BFDCA3
ms.manager: douge
ms.author: kaelli
ms.date: 06/01/2016
---


# Query by area or iteration path 

[!INCLUDE [temp](../_shared/dev15-version-header.md)]


Add examples of usage for areas and iteration paths. 
Mention node names. 
Tips for usage 


<a name="field-reference"></a>
## Classification field reference 

These fields appear on the forms for all WITs. 

|**Field name**|**Description**|**Reference name**|
|---|---|---|
|**Area Path**|Groups work items into product feature or team areas. The area must be a valid node in the project hierarchy.|System.AreaPath|
|**Iteration Path**|Groups work items by named sprints or time periods. The iteration must be a valid node in the project hierarchy.|System.IterationPath|

For each field, data path=```TreePath```, reportable type=```Dimension```, index attribute=```True```. 
 
If you define a path name that is longer than 256 characters, you will not be able to specify it in Microsoft Project. To avoid this problem, define path names of no more than 10 characters, and do not nest nodes more than 14 levels deep.

You can't apply most field rules to the System.AreaPath and System.IterationPath fields. To learn more, see [Apply a field rule](../reference/apply-rule-work-item-field.md).

The following fields do not appear on work item forms but are tracked for each work item type. These fields provide a numeric value for each classification value that is defined for a team project. You can use these fields to filter queries and create reports.

|**Field name**|**Description**|**Reference name**|**Data type**|
|---|---|---|---|
|Area ID|The unique ID of the area to which this work item is assigned.|System.AreaId|Integer|
|Iteration ID|The unique ID of the iteration to which this work item is assigned.|System.IterationId|Integer|
|Node Name|The name of the leaf node of an area path. For example, if the area path is Project\A1\B2\C3, the node name is C3.|System.NodeName|String|

The default reportable type is none. Area ID and Iteration ID are indexed, Node Name is not. To learn more about field attributes, see [Work item data type reference](../reference/define-modify-work-item-fields.md).



## Related notes 

*	[Add another team](../scale/multiple-teams.md)  
*	[Set team defaults](../scale/set-team-defaults.md)  
*	[Customize iteration paths](../customize/set-iteration-paths-sprints.md)  
*	[Customize area paths](../customize/set-area-paths.md)  
*	[Manage team assets ](../scale/manage-team-assets.md)  
*	[Set permissions and access for work tracking](../how-to/set-permissions-access-work-tracking.md) 


<a name="field-rules"></a>
### Supported field rules  

For the Hosted XML and On-premises XML process models, you can apply rules to fields. However, for system fields (System.XXX), such as the Area Path and Iteration Path, you can [specify only a small subset of rules](../reference/apply-rule-work-item-field.md#system), such as ```HELPTEXT``` and ```READONLY``` to  fields. 