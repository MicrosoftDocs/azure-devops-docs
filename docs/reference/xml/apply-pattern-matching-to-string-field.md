---
title: Apply pattern matching to a string field 
titleSuffix: Azure DevOps & TFS
description: Syntax and usage for the MATCH element to force values in a field of String type to follow specified pattern - Team Foundation Server  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 1134a153-0133-4404-8690-d25e934a45f7
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: reference
ms.date: 02/10/2017
---

# Apply pattern matching to a string field

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)] 

You can use the **MATCH** element to force values in a field of String type to follow a pattern that you specify. If you define multiple **MATCH** elements, the value will be valid if it matches any of the patterns that you specify for the field. If at least one element succeeds, the field has a valid value.  
  
> [!NOTE]
> To add a rule to a `FIELD` definition, use the **witadmin** command-line tool to import and export the definition for the work item type. See [Import, export, and manage work item types](../witadmin/witadmin-import-export-manage-wits.md).  
  
## MATCH Element Syntax Structure  
 You use the **MATCH** element to enforce basic pattern matching by defining a pattern that values in String type fields must match.  
  
```xml
<MATCH pattern="patternValue" for="userGroupName" not="userGroupName" />  
  
```  
  
## Attributes  
 You can specify to which users the **MATCH** rule applies. If you do not define any optional attributes, all valid users and groups in Team Foundation Server must specify a value that matches the pattern.  
  
|Attribute|Description|  
|---------------|-----------------|  
|`pattern`|Required. Enforces basic pattern matching for strings only, and only for strings whose `syncnamechanges="false"`.<br /><br /> Valid values for the *patternValue* are "A", "N", and "X", which denote the following types of characters:<br /><br /> -   "A" represents an alphabetical character.<br />-   "N" represents a numeric character.<br />-   "X" represents any alphanumeric character.<br /><br /> All other values are taken as literals. Minimum length: 1; maximum length: 255.<br /><br /> Pattern value: ^[^\\\\]*$<br /><br /> Pattern value example: xxxxx.nn.nn|  
|`for`|Optional. Specifies the name of a user or group in Team Foundation to whom the rule applies. Valid names consist of a string of text that contains between 1 and 255 characters.<br /><br /> Pattern value: ^[^\\\\]+\\\\[^\\\\]+$<br /><br /> Pattern value example: *Domain*\\*UserID*|  
|`not`|Optional. Specifies the name of a user or group in Team Foundation to whom the rule does not apply. Valid names consist of a string of text that contains between 1 and 255 characters.<br /><br /> Pattern value: ^[^\\\\]+\\\\[^\\\\]+$<br /><br /> Pattern value example:  *Domain*\\*UserID*|  
  
 
  
## Pattern Matching Examples  
 The following examples illustrate successful and unsuccessful pattern matches for a variety of field uses.  
  
### Release Number  
 Pattern: ANN.NN.NN  
  
|||  
|-|-|  
|Validates|R01.03.04 or V05.08.99|  
|Fails validation|1.3.4 or V5.8.99 or v1.3|  
  
### A Flexible Identifier  
 Pattern: XXX-XXX  
  
|||  
|-|-|  
|Validates|001-abc or a00-b02|  
|Fails validation|1-abc or 001.abc|  
  
### Priority  
 Pattern: PN  
  
|||  
|-|-|  
|Validates|P1 or P5 or P9|  
|Fails validation|1 or P10|  
  
 Match tags are case-insensitive. Therefore, "PN" matches both P1 and p1.  
  
 
  
## Related articles 
 [Apply a field rule](apply-rule-work-item-field.md)