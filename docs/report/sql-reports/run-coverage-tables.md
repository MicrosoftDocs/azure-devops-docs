---
title: Run Coverage tables 
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
description: Uses FactRunCoverage to query for data in Team Foundation Server
ms.assetid: 4868da2c-9402-444e-a4a4-6b99e71a27ac
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 10/17/17
---


# Run Coverage tables
[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

You can query for data about how thoroughly a particular test run covered the code that it was intended to test by using FactRunCoverage and the associated dimensions.  
  
 For information about the measures and dimensions that are associated with these tables in the SQL Server Analysis Services cube, see [Code churn and code coverage](perspective-code-analyze-report-code-churn-coverage.md).  
  
 ![Fact Table for Run Coverage](_img/teamproj_factruncoverage.png "TeamProj_FactRunCoverage")  
  
> [!NOTE]
>  You cannot aggregate these coverage values to determine code coverage for a build. To determine the code coverage in a build, you must use FactBuildCoverage. For more information, see [Build Coverage tables](table-reference-build-coverage.md).  
  
 FactRunCoverage is associated with the following dimension tables:  
  
-   DimAssembly  
-   DimBuild    
-   DimBuildFlavor    
-   DimBuildPlatform    
-   DimDate    
-   DimPerson   
-   DimTestRun  
  
## Related notes
-  [Code churn and code coverage](perspective-code-analyze-report-code-churn-coverage.md)   
-  [Code Churn](../excel/code-coverage-excel-report.md)  
-  [Build](/visualstudio/ide/walkthrough-building-an-application)   
-  [Table reference for the relational warehouse database](table-reference-relational-warehouse-database.md)