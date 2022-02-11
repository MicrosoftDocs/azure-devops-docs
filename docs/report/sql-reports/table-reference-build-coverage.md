---
title: Build Coverage tables
titleSuffix: Azure DevOps Server
description: Learn how to query for data about how thoroughly source code was covered by the tests that use specific builds.    
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: 262d8253-6e8c-4c2f-8b11-db3f9a5bcd89
ms.author: kaelli
author: KathrynEE
ms.date: 10/19/2021
---


# Build Coverage tables

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

Use FactBuildCoverage and the associated dimension tables to query for data. Find out how thoroughly source code was covered by the tests that use specific builds.   

> [!IMPORTANT]  
> Build tables are only applicable for XAML builds, which are deprecated for TFS 2018 and later versions. If your build process isn't based on XAML builds, these tables and the TFS Warehouse for builds won't yield any meaningful data.  


For information about the measures and dimensions that are associated with these tables in the SQL Server Analysis Services cube, see [Builds](perspective-build-analyze-report-build-details-coverage.md).  
  
![Build Coverage Fact Table](media/teamproj_factbuildcoverage.png "TeamProj_FactBuildCoverage")  
  
 FactBuildCoverage is associated with the following dimension tables:  
  
- DimAssembly
- DimBuild
- DimBuildFlavor
- DimBuildPlatform
- DimCodeElement
- DimDate
- DimTeamProject
  
For more information, see these articles:
- [Builds](perspective-build-analyze-report-build-details-coverage.md)   
- [Code Churn](/previous-versions/azure/devops/report/excel/code-coverage-excel-report)   
- [Run Coverage tables](run-coverage-tables.md)    
- [Table reference for the relational warehouse database](table-reference-relational-warehouse-database.md) 
- [Continuous integration on any platform](../../pipelines/get-started/what-is-azure-pipelines.md)