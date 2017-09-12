---
title: Analytics service overview | VSTS  
description: Overview of the Analytics service for VSTS 
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: 0A9D0E48-64B4-4D90-933B-E0EBFC3FA3D4  
ms.manager: douge
ms.author: kaelli
ms.date: 08/04/2017
---

# Analytics Service overview  


**VSTS**  

[!INCLUDE [temp](../_shared/analytics-preview.md)]  

The Analytics service provides a concise OData model over the VSTS suite&mdash;Work Item Tracking, Test, Version Control, Release and Build. You can use it to answer quantitative questions regarding past or present state and velocity of your projects. It is built upon a near real-time reporting warehouse hosted in the cloud and optimized for fast read-access and support of server-based aggregations.  

You can learn more from one of these topics:


> [!div class="mx-tdBreakAll"]  
> |Basics  |Client access |Query access|  Extensions | 
> |-------------|----------|---------|---------|     
> |- [Data model](data-model-analytics-service.md)<br/>- [Security](analytics-security.md) |- [Client authentication options](client-authentication-options.md)<br/>- [Excel](access-analytics-excel.md)<br/>- [Power BI desktop](access-analytics-power-bi.md)<br/>- [PowerBI.com](publishing-power-bi-desktop-to-power-bi.md)<br/>- [Power BI desktop and OData aggregations](using-odata-aggregations-with-power-bi-desktop.md)<br/>- [Create custom calculation](custom-calculations.md)  |- [WIT analytics](wit-analytics.md)<br/>- [Analytic recipes](analytics-recipes.md)<br/>- [Aggregated data](aggregated-data-analytics.md)<br/>- [Query for trend data](querying-for-trend-data.md)<br/>- [Work item links](work-item-links.md) |- [Hub extension](building-extension-against-analytics-service.md)<br/>- [Dashboard widget](widget-extensions-against-analytics-service.md)<br/>- [Add configuration](widget-extension-against-analytics-service-configuration.md) | 
  
## Available data

For more information about the following entities, see [data model](data-model-analytics-service.md).  

- Areas  
- Dates  
- Iterations (including start/end dates)  
- Kanban data  
- Links:  
	- Parent/child link relationships <font style="color: red">*New!* </font>  
	- Related links <font style="color: red">*New!* </font>  
- Work Item Snapshots for trend reporting
- Work Item Board (Kanban) Snapshots for trend reporting
- Tags <font style="color: red">*New!* </font>  
- Team projects  
- Teams (including owned areas/iterations)  
- User information for work item fields (Assigned To, Created By, etc.) <font style="color: red">*New!* </font>  
- Work items  
- Work item revisions
- Custom fields <font style="color: red">*New!* </font>  


## Supported entities and metadata

This information can also be found by going to the service root url endpoint. The endpoint is:  

*AccountName*```.analytics.visualstudio.com/DefaultCollection/_odata   ``` 

So, for the *FabrikamFiber* account:   

```
fabrikamfiber.analytics.visualstudio.com/DefaultCollection/_odata   
``` 

>[!NOTE]  
>The OData Analytics Service URL is case sensitive.  

Accessing this URL returns a metadata document similar to the following:  

```
{
    "@odata.context":"https://fabrikamfiber.analytics.visualstudio.com/DefaultCollection/_odata/$metadata","value":[
    {
        "name":"WorkItems","kind":"EntitySet","url":"WorkItems"
    },{
        "name":"WorkItemRevisions","kind":"EntitySet","url":"WorkItemRevisions"
    },{
        "name":"WorkItemSnapshot","kind":"EntitySet","url":"WorkItemSnapshot"
    },{
        "name":"WorkItemBoardSnapshot","kind":"EntitySet","url":"WorkItemBoardSnapshot"
    },{
        "name":"WorkItemLeadTimes","kind":"EntitySet","url":"WorkItemLeadTimes"
    },{
        "name":"Dates","kind":"EntitySet","url":"Dates"
    },{
        "name":"Projects","kind":"EntitySet","url":"Projects"
    },{
        "name":"Iterations","kind":"EntitySet","url":"Iterations"
    },{
        "name":"Areas","kind":"EntitySet","url":"Areas"
    },{
      "name":"Tags","kind":"EntitySet","url":"Tags"
    },{
      "name":"Teams","kind":"EntitySet","url":"Teams"
    },{
      "name":"BoardLocations","kind":"EntitySet","url":"BoardLocations"
    },{
      "name":"WorkItemLinks","kind":"EntitySet","url":"WorkItemLinks"
    },{
      "name":"Users","kind":"EntitySet","url":"Users"
    }
  ]
}
```
<br/>
To access detailed metadata, add ```$metadata``` to the end of the URL:  

```
https://fabrikamfiber.analytics.visualstudio.com/DefaultCollection/_odata/$metadata
```
<br/>
This returns a fully qualified XML document which describes all entities, fields, and relationships.  

## OData

OData supports access to the Analytics service through an [OData v4](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html) 
interface with [aggregation extensions](http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html).

Currently, updates are pulled from the operational store every 15 minutes. Our goal is to reduce this to 30 seconds using a push model; we aren't there yet.

For details and examples on using OData with the Analytics Service, see [WIT analytics](wit-analytics.md).


## Supported OData functions  

The following table summarizes the supported and unsupported OData functions.  

> [!NOTE]  
> OData aggregation extensions are relatively new and either not supported by various client tools (yet) or full support for the extension is not supported by the Analytics Service.  
  

<table>
<tbody valign="top">
<tr>
<th width="35%">Implemented </th>
<th width="35%">Not implemented</th>
</tr>
<tr>
<td>
- ```$count``` (not in aggregation extensions)  
- ```$apply``` (partially)  
- ```$aggregate```  
- ```groupby```  
- ```filter```  
- ```average```  
- ```countdistinct```  
- ```max```  
- ```min```    
- ```sum```  
- ```$filter```  
- ```$expand```  

*Canonical functions:*   
- ```contains```  
- ```endswith```  
- ```startswith```  
- ```length```  
- ```indexof```  
- ```substring```  
- ```tolower```  
- ```toupper```  
- ```trim```  
- ```concat```  
- ```year```  
- ```month```  
- ```day```  
- ```hour```  
- ```minute```  
- ```second```  
- ```fractionalseconds```  
- ```date```  
- ```time```  
- ```totaloffsetminutes```  
- ```maxdatetime```  
- ```mindatetime```  
- ```totalseconds```  
- ```round```  
- ```floor```  
- ```ceiling```  
- ```isof```  
- ```cast```  

</td>
<td>

- ```concat```  
- ```$search```  
- ```$rollup```  
- ```isdefined```  
- ```$crossjoin```  
- ```now```  
- ```topcount```  
- ```topsum```  
- ```toppercent```  
- ```bottomcount```  
- ```bottomsum```  
- ```bottompercent```  
</td>
</tr>
</tbody>
</table>  


You use OData functions in a ```filter``` clause, but not in a ```$select``` clause the way that you would use them in a SQL statement.  

For example, you can specify:  

```
/WorkItems?$filter=toupper(Title) eq 'HELP' 
```
However, you can't enter the following: 
```
/WorkItems?$select=WorkItemId,State,toupper(Title)
```  

## Related notes  
>[!NOTE]  
>The Analytics Service is on a 15 minute refresh schedule.  

- [WIT analytics](wit-analytics.md)  
- [Aggregate data](aggregated-data-analytics.md)  
- [OData Version 4.0 Part 2: URL Conventions Plus Errata 02](http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html)  


<!---

### Data to be made available 
We are planning to provide access to the following data in future updates:  
Group security data (groups and contained users/groups)  
Capacity  
Process settings  
Team settings  
WIT long text fields  

-->
