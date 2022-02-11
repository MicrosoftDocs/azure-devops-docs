---
title: Test Result tables
titleSuffix: Azure DevOps Server
description: Learn how to query for data about test results.
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: 0fa44e3e-3033-49e7-a796-eb4fbd12d984
ms.author: kaelli
author: KathrynEE
ms.date: 10/20/2021
---

# Test Result tables

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

Use the FactTestResult table and the associated dimension tables to query for data about test results. For information about the measures and dimensions that are associated with these tables in the SQL Server Analysis Services cube, see [Test results](perspective-test-analyze-report-test-results.md).  
 
  
## Test results, test suites, and test plans

The DimTestResult table provides details about the test results themselves. You can use the DimTestPlan and DimTestSuite tables to organize the results by test plan and test suite.  
  
![Fact Table for Test Results](media/teamproj_facttestresult.png "TeamProj_FactTestResult")  

## Test results and test runs  

You can use the DimTestRun, DimConfiguration, and DimPerson dimension tables to include data about how the tests were run.  
  
![Fact Table for Test Results with Runs](media/teamproj_result_other.png "TeamProj_Result_Other")  
  
## Test results and builds  

You can use the DimBuild, DimBuildFlavor, and DimBuildPlatform dimension tables, to include data about the build that was used to create the test results.  
  
![Fact Table for Test Results with Builds](media/teamproj_testresultbuild.png "TeamProj_TestResultBuild")  
  
  
## Test results and team project data  

You can use the DimTeamProject, DimArea, and DimIteration tables to obtain details about how the tests are organized in the team project. You can use DimDate to show when the test results were created.  

![Fact Table for Test Results with Other](media/teamproj_testresultother.png "TeamProj_TestResultOther")  

## Related articles 
- [Test results](perspective-test-analyze-report-test-results.md)   
- [Test Management Reports](/previous-versions/azure/devops/report/excel/test-management-reports)   
- [Testing overview](../../test/index.yml)   
- [Work Item Test Result tables](work-item-test-result-tables.md)   
- [Table reference for the relational warehouse database](table-reference-relational-warehouse-database.md)
