---
title: Test Result tables
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
description: Query for data about test results 
ms.assetid: 0fa44e3e-3033-49e7-a796-eb4fbd12d984
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 10/17/17
---

# Test Result tables


[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

You can query for data about test results by using the FactTestResult table and the associated dimension tables. For information about the measures and dimensions that are associated with these tables in the SQL Server Analysis Services cube, see [Test results](perspective-test-analyze-report-test-results.md).  
  
  
## Test Results, Test Suites, and Test Plans  
 The DimTestResult table provides details about the test results themselves, and you can use the DimTestPlan and DimTestSuite tables to organize the results by test plan and test suite.  
  
 ![Fact Table for Test Results](_img/teamproj_facttestresult.png "TeamProj_FactTestResult")  
  

  
## Test Results and Test Runs  
 You can use the DimTestRun, DimConfiguration, and DimPerson dimension tables to include data about how the tests were run.  
  
 ![Fact Table for Test Results with Runs](_img/teamproj_result_other.png "TeamProj_Result_Other")  
  
  
## Test Results and Builds  
 You can use the DimBuild, DimBuildFlavor, and DimBuildPlatform dimension tables, to include data about the build that was used to create the test results.  
  
 ![Fact Table for Test Results with Builds](_img/teamproj_testresultbuild.png "TeamProj_TestResultBuild")  
  
  
## Test Results and Team Project Data  
 You can use the DimTeamProject, DimArea, and DimIteration tables to obtain details about how the tests are organized in the team project, and you can use DimDate to show when the test results were created.  
  
 ![Fact Table for Test Results with Other](_img/teamproj_testresultother.png "TeamProj_TestResultOther")  
  
 
  
## Related notes 
-  [Test results](perspective-test-analyze-report-test-results.md)   
-  [Test Management Reports](../excel/test-management-reports.md)   
-  [Testing overview](../../test/index.md)   
-  [Work Item Test Result tables](work-item-test-result-tables.md)   
-  [Table reference for the relational warehouse database](table-reference-relational-warehouse-database.md)
