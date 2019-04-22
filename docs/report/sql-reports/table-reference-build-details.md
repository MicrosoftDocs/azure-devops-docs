---
title: Build Details tables
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
description: Query for data about builds, such as the status and quality.
ms.assetid: cbcabf4d-d334-4c17-a003-315e337a49b3
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops-2019'
ms.date: 10/17/17
---


# Build Details tables

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

You can query for data about builds, such as the status and quality, by using FactBuildDetails and the associated dimension tables.  

> [!IMPORTANT]  
> Build tables are only applicable for XAML builds, which are deprecated for TFS 2018 and later versions. If your build process isn't based on XAML builds, these tables and the TFS Warehouse for builds won't yield any meaningful data.    

For information about the measures and dimensions that are associated with these tables in the SQL Server Analysis Services cube, see [Builds](perspective-build-analyze-report-build-details-coverage.md).  
  
 ![Tables for Builds](_img/teamproj_factbuilddetails.png "TeamProj_FactBuildDetails")  
  
 FactBuildDetails is associated with the following dimension tables:  
  
-   DimBuild  
-   DimBuildQuality    
-   DimBuildStatus    
-   DimDate    
-   DimPerson    
-   DimTeamProject  
  
## Related notes
-  [Builds](perspective-build-analyze-report-build-details-coverage.md)   
-  [Build Quality Indicators](build-quality-indicators-report.md)   
-  [Build Success Over Time](build-success-over-time-report.md)   
-  [Build Summary](build-summary-report.md)   
-  [Table reference for the relational warehouse database](table-reference-relational-warehouse-database.md) 
- [Continuous integration on any platform](../../pipelines/overview.md) 
