---
title: Supported OData functions and clauses    
titleSuffix: Azure DevOps 
description: Current level of support for OData specification in Analytics
ms.technology: devops-analytics
ms.assetid: 8D81FEFD-F432-4E10-A415-9167B5FE9A57 
ms.reviewer: kokosins
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= azure-devops-2019'
ms.date: 01/28/2021
---


# Supported OData functions and clauses 

[!INCLUDE [temp](../includes/version-azure-devops.md)]

Analytics supports several OData functions as summarized in this article. Unsupported functions are also listed. OData (Open Data Protocol) is an ISO/IEC approved, OASIS standard which defines best practices for building and consuming REST APIs. To learn more, see [OData documentation](/odata/). 

[!INCLUDE [temp](../includes/analytics-preview.md)]

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


When multiple clauses are used in a query, they are applied in the order specified above. The order of clauses in the query string are ignored. For example, in the following query, work items are first  grouped and aggregated. Next, the groups are filtered. After that, the filtered groups are sorted. Finally, the first 5 records are returned. The query returns the top five work item types used at least 100 times.

``` 
WorkItems?$filter=Count ge 100$apply=groupby((WorkItemType), aggregate($count as Count))&&$orderby=Count&top=5
```


<a id="aggregation-extensions" />

### Aggregation extensions support

It takes a sequence of set transformations, separated by forward slashes to express that they are consecutively applied. The result of each transformation is the input to the next transformation. For example, in the following query, work items are filtered and then grouped by work item type and state. Next, the groups are filtered and grouped again. 

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

For more details, see [Aggregate work tracking data](aggregated-data-analytics.md).

<a id="supported-functions"></a> 

## Supported functions

| Canonical function | Description |
| ------------------ | ----------- |  
| [```cast```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341801) |  Returns expression of the current instance cast to the type specified.  |  
| [```contains```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868695) |  Returns true if the second parameter string value is a substring of the first parameter string value, otherwise it returns false.  |  
| [```endswith```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341774) | Returns true if the first parameter string value ends with the second parameter string value, otherwise it returns false. |  
| [```startswith```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868699) |  Returns true if the first parameter string value starts with the second parameter string value, otherwise it returns false. |  
| [```length```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868698) | Returns the number of characters in the parameter value. | 
| [```indexof```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341774) | Returns the zero-based character position of the first occurrence of the second parameter value in the first parameter value or -1 if the second parameter value does not occur in the first parameter value.|  
| [```substring```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341777) | Returns a substring of the first parameter string value, starting at the Nth character and finishing at the last character (where N is the second parameter integer value). |  
| [```tolower```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341779) |  Returns the input parameter string value with all uppercase characters converted to lowercase.  |  
| [```toupper```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341780) |  Returns  the input parameter string value with all lowercase characters converted to uppercase. |  
| [```trim```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341781) |  Returns the input parameter string value with all leading and trailing whitespace characters. |  
| [```year```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868718) |  Returns the year component of the Date or DateTimeOffset parameter value. |  
| [```month```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341784) | Returns the month component of the Date or DateTimeOffset parameter value. |  
| [```day```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868706) |  Returns the day component of the Date or DateTimeOffset parameter value. |  
| [```date```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341790) | Returns the date part of the DateTimeOffset parameter value. |  
| [```time```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868715) |  Returns the time part of the DateTimeOffset parameter value. |  
| [```totaloffsetminutes```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868716) | Returns  the signed number of minutes in the time zone offset part of the DateTimeOffset parameter value. |  
| [```now```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868713) |  Returns the current point in time (date and time with time zone) as a DateTimeOffset value. |  
| [```maxdatetime```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868709) | Returns the latest possible point in time as a DateTimeOffset value. |  
| [```mindatetime```](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc371341795) |  Returns the earliest possible point in time as a DateTimeOffset value. |  


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
- [OData v4.0 specification](https://www.odata.org/documentation/)  
- [OData v4.0 Part 2: URL Conventions Plus Errata 02](https://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html)
- [OData v4.0 Aggregation Extension](https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html)
