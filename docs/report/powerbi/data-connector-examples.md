---
title: Example reports for Power BI Data Connector
titleSuffix: Azure DevOps   
description: Guidance on developing reports based on examples when using the Power BI Data Connector and the Analytics service for Azure DevOps 
ms.assetid: 3356B3EF-E9AB-4B42-8738-E58AA34A4B4F
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.reviewer: stansw
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2019'
ms.date: 01/17/2017
---

# Example reports for Power BI Data Connector

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

This document provides guidance on how to generate the following example reports in Power BI: 

- [Number of Work Items](#number-of-work-items)  
- [Number of Bugs by Area Path and Priority](#number-of-bugs-by-area-path-and-priority)  

Prior to generating these reports, you must first [connect to the Analytics services using the Power BI data connector](data-connector-connect.md). 

> [!TIP]  
> Use the search box if you are working with tables that contain many columns.

<a id="number-of-work-items" />
## Number of Work Items

1. Load `Work Items - Today` table with columns: `Work Item Count`.  

2. Select *Card* visual.  

	![Power BI Visualizations, choose Card visual](./_img/data-connector-recipes-count-1.png)  

3. Search for `Work Item Count` and drag it to the `Fields`.

	![Power BI, Filter for Work Item Count, add to fields](./_img/data-connector-recipes-count-2.png)  

<a id="number-of-bugs-by-area-path-and-priority" />
## Number of Bugs by Area Path and Priority

1. Load `Work Items - Today` table with columns: `Area Path`, `Priority`, `Work Item Count`, `Work Item Type`.  

2. Select `Matrix` visual.  

	![Power BI Visualizations, choose Matrix visual](./_img/data-connector-recipes-number-of-bugs-by-area-path-and-priority-1.png)

3. Search for `Area Path` and drag it to `Rows`.

	![Power BI, Add Area Path to Rows](./_img/data-connector-recipes-number-of-bugs-by-area-path-and-priority-2.png)

4. Search for `Priority` and drag it to `Columns`.

	![Power BI, add Priority to Columns](./_img/data-connector-recipes-number-of-bugs-by-area-path-and-priority-3.png)

5. Search for `Work Item Count` and drag it to `Values`.

	![Power BI, add Work Item Count to Values](./_img/data-connector-recipes-number-of-bugs-by-area-path-and-priority-4.png)

6. Search for `Work Item Type`, drag it to `Visual level filters` and select `Bugs`.

	![Power BI, Add Work Item Type to Visual Level Filters, Filter on Bug](./_img/data-connector-recipes-number-of-bugs-by-area-path-and-priority-5.png)

## Related articles 
- [Power BI integration overview](overview.md) 
- [Connect with Power BI Data Connector](./data-connector-connect.md)
- [Dataset design for the Power BI Data Connector](data-connector-dataset.md) 
- [Functions available in Power BI Data Connector](data-connector-functions.md) 
