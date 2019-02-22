---
title: Combine pick list types 
titleSuffix: Azure DevOps & TFS 
description: Examples that show how to create pick lists or drop-down menus by combining different types. 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 04f1daff-fe12-4c1f-8625-e884f0fb2c7c
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: conceptual
ms.date: 04/05/2017
---

# Combine list types

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]  

You can specify multiple types of lists for a single field. This topic defines how the resulting list of items is determined.  
  
 The following descriptions use these conventions:  
  
-   All values for an `ALLOWEDVALUES` list are identified as {set A}.     
-   All values for a `SUGGESTEDVALUES` list are identified as {set S}.    
-   All values for a `PROHIBITEDVALUES` list are identified as {set P}.   
  
## Valid value determination  
 The valid values allowed for a field are obtained by subtracting {set P} from {set A}. If {set A} has no entries, {set A} is considered to be all possible values. This is because no allowed values have been defined; everything is allowed except those values specifically identified in {set P}.  
  
 {Set S} plays no role in determining valid values for a field, but it does help determine the values that display in the drop-down list.  
  
## Populating a drop-down list with list values  
 The following rules use the content of the ALLOWEDVALUES, SUGGESTEDVALUES, and PROHIBITEDVALUES sets to determine the values that populate a drop-down list.  
  
```  
If {set S} AND {set A} have no entries  
  Result: Empty list  
If {set S} has entries and {set A} has no entries  
  Result: The values are obtained by subtracting {set P} from {set S}  
If {set S} AND {set A} have entries  
  Result: The list of values are obtained by:  
                a. Intersecting {set A} with {set S} to get {intermediate set I}  
                b. Subtracting {set P} from {intermediate set I}  
If {set S} has no entries and {set A} has entries  
  Result: The list of values are obtained by subtracting {set P} from {set A}  
```  
  
## Specify multiple lists  
 If you specify multiple `<ALLOWEDVALUES>` sets at a particular point in time (for example, a work item type-wide `<ALLOWEDVALUES>` set plus a state-scoped `<ALLOWEDVALUES>` set), the intersection of these multiple sets is used as the final set, {set A}.  
  
 If you specify multiple `<SUGGESTEDVALUES>` sets or `<PROHIBITEDVALUES>` sets, the union of each of these multiple sets is taken as the final set, {set S} or {set P}, respectively.  
  
## Related articles
- [Define pick lists](define-pick-lists.md)  
- [Expand list items and exclude groups from lists](expand-list-items-and-exclude-groups-from-lists.md) 


