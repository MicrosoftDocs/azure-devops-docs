---
title: Supported OData features   
titleSuffix: Azure DevOps 
description: Current level of support for OData specification in the Analytics Service
ms.prod: devops
ms.technology: devops-analytics
ms.assetid: 8D81FEFD-F432-4E10-A415-9167B5FE9A57 
ms.reviewer: kokosins
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= azure-devops-2019'
ms.date: 04/05/2019
---


# Supported OData features and clauses 

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

this article provides a summary of the OData features and functions supported or not supported by the Analytics Service for Azure DevOps.

[!INCLUDE [temp](../_shared/analytics-preview.md)]

<a id="clauses" />

## Supported clauses

- ```$apply``` 
- ```$compute``` 
- ```$count``` 
- ```$expand```  
- ```$filter```
- ```$orderby``` 
- ```$select``` 
- ```$skip```  
- ```$top```  


When multiple clauses are used in query they will be applied in the order specified above. Order of clauses in query string ignored. For example, in the following query, first work items are grouped and aggregated. Next, the groups are filtered. After that, the filtered groups are sorted. Finally, the first 5 records are returned. This means the query returns the top 5 work item types used at least 100 times.
``` 
WorkItems?$filter=Count ge 100$apply=groupby((WorkItemType), aggregate($count as Count))&&$orderby=Count&top=5
```


<a id="aggregation-extensions" />

### Aggregation extensions support

$apply triggers aggregation behavior. It takes a sequence of set transformations, separated by forward slashes to express that they are consecutively applied, i.e. the result of each transformation is the input to the next transformation. For example in the following query, first work item are filtered. Next, grouped by work item type and state. Then groups are filtered and grouped again.

> [!NOTE]  
> OData aggregation extensions are relatively new and not yet fully supported by some client tools. 

``` 
Workitems?$apply=filter(State ne 'Closed')/groupby((WorkItemType, State), aggregate($count as Count))/filter(Count gt 100)/groupby((State),aggregate(Count with max as MaxCount))  
``` 

The following transformations are supported:
| Transformation | Notes |
| ------------------ | ----------- |
| ```aggregate```  | Allows aggregation using one of following methods   ```$count```, ```average```, ```max```,  ```min```, ```sum```  |
| ```compute```  | Allows adding calculated properties |
| ```expand```  | Allows expansion by specified properties |
| ```filter```| Allows filtering input set. Supports the same expressions as ```$filter``` |  
| ```groupby```  | Allows grouping by properties |

For more details, see [Aggregate data](aggregated-data-analytics.md)

<a id="supported-functions"></a> 

## Supported functions

| Canonical function | Description |
| ------------------ | ----------- |  
| [```cast```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341801) |  Returns expression casted to specified type  |  
| [```contains```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868695) |  Returns true if the second parameter string value is a substring of the first parameter string value, otherwise it returns false  |  
| [```endswith```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341774) | Returns true if the first parameter string value ends with the second parameter string value, otherwise it returns false |  
| [```startswith```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868699) |  Returns true if the first parameter string value starts with the second parameter string value, otherwise it returns false |  
| [```length```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868698) | Returns the number of characters in the parameter value | 
| [```indexof```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341774) | Returns the zero-based character position of the first occurrence of the second parameter value in the first parameter value or -1 if the second parameter value does not occur in the first parameter value|  
| [```substring```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341777) | Returns a substring of the first parameter string value, starting at the Nth character and finishing at the last character (where N is the second parameter integer value) |  
| [```tolower```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341779) |  Returns the input parameter string value with all uppercase characters converted to lowercase  |  
| [```toupper```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341780) |  Returns  the input parameter string value with all lowercase characters converted to uppercase |  
| [```trim```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341781) |  Returns the input parameter string value with all leading and trailing whitespace characters |  
| [```year```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868718) |  Returns the year component of the Date or DateTimeOffset parameter value |  
| [```month```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341784) | Returns the month component of the Date or DateTimeOffset parameter value |  
| [```day```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868706) |  Returns the day component of the Date or DateTimeOffset parameter value |  
| [```date```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341790) | Returns the date part of the DateTimeOffset parameter value |  
| [```time```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868715) |  Returns the time part of the DateTimeOffset parameter value |  
| [```totaloffsetminutes```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868716) | Returns  the signed number of minutes in the time zone offset part of the DateTimeOffset parameter value |  
| [```now```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868713) |  Returns the current point in time (date and time with time zone) as a DateTimeOffset value |  
| [``` maxdatetime```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868709) | Returns the latest possible point in time as a DateTimeOffset value |  
| [```mindatetime```](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341795) |  Returns the earliest possible point in time as a DateTimeOffset value |  


OData functions are used in a ```$filter``` clause, but not in a ```$select``` clause the way they would be uses in a SQL statement.  

For example, you can specify:  

```
/WorkItems?$filter=toupper(Title) eq 'HELP' 
```
However, you can't enter the following: 
```
/WorkItems?$select=WorkItemId,State,toupper(Title)
```  

<a id="unsupported" />

## Not supported features

- ```bottomcount```  
- ```bottomsum```  
- ```bottompercent``` 
- ```$crossjoin```  
- ```concat```   
- ```countdistinct```  
- ```from```
- ```isdefined```  
- ```$rollup```  
- ```$search```  
- ```topcount```  
- ```topsum```  
- ```toppercent```  
 

## Related articles  

- [Query your work tracking data](wit-analytics.md)  
- [Aggregate data](aggregated-data-analytics.md)
- [OData v4.0 specification](http://www.odata.org/documentation/)  
- [OData v4.0 Part 2: URL Conventions Plus Errata 02](http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html)
- [OData v4.0 Aggregation Extension](http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html)
