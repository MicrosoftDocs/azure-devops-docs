---
title: Collect screenshots, video, logs, and attachments
description: Collect screenshots, video, logs, and attachments in a continuous integration pipeline with Azure DevOps and TFS 
ms.assetid: 234848A2-BDED-4DD5-8D15-AD56F6B49AD5
ms.prod: devops
ms.technology: devops-test
ms.topic: conceptual 
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Collect screenshots, video, logs, and attachments in continuous tests

[!INCLUDE [version-header-tfs17](_shared/version-header-tfs17.md)] 

When running tests in a CI/CD pipeline, collecting diagnostic data such as
screenshots, video, logs, and attachments is often useful to help troubleshoot failures.

## Collect screenshots, logs, and attachments

This example demonstrates how you can collect screenshots when using MSTest.
It does not apply if you are using NUnit or XUnit test frameworks.

1. Add the file you want to include in the test results as a **TestResult** file. 

   ```csharp
   Screenshot ss = ((ITakesScreenshot)driver).GetScreenshot();
   string path = Directory.GetCurrentDirectory() + "SearchTestScreenshot.png";
   ss.SaveAsFile(path);
   this.TestContext.AddResultFile( path); 
   ```

1. Define the **TestContext** in your test class. 

   ```csharp
   private TestContext testContextInstance;
   
   public TestContext TestContext
   {
     get
     {
       return testContextInstance;
     }
     set
     {
       testContextInstance = value;
     }
   }
   ``` 

1. View the test results and the collected files as attachments to your test results in Azure DevOps or TFS. 

   ![Viewing the collected files](_img/screenshots-result.png)

## Collect video using the Visual Studio Test task

1. To collect video, specify the data collector you want to use in a [runsettings file](https://docs.microsoft.com/visualstudio/test/configure-unit-tests-by-using-a-dot-runsettings-file#video-data-collector).
   The video data collector captures a screen recording when tests are run.

1. In the [Visual Studio Test](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/Tasks/VsTestV2/README.md) task,
   specify the location of the runsettings file.

   ![Specifying the location of the runsettings file](_img/runsettings-in-vs-task.png) 

## Publish attachments when not using the Visual Studio Test task

If you are not using the **Visual Studio Test** task, you must publish attachments in your test results in a different way:

* If you are running tests in the build (CI) pipeline, you can use the
  [Copy and Publish Build Artifacts](../pipelines/tasks/utility/copy-and-publish-build-artifacts.md) task to publish any additional files created in your tests.
  These will appear in the **Artifacts** page of your build summary. 

* Use the REST APIs to publish the necessary attachments. Code samples can be found
  in [this GitHub repository](https://github.com/ManojBableshwar/VstsTestRestApiSamples/blob/master/PublishResultsFromCsvWithAttachments/PublishResultsFromCsvWithAttachments.cs). 

The NUnit and JUnit test result formats do not have a formal definition for attachments in the results schema,
so the **Publish Test Results** task cannot publish attachments when these formats are used. 

## See also

* [Continuous testing scenarios and capabilities](index.md)
* [Set up continuous testing for your builds](../pipelines/test/set-up-continuous-testing-builds.md)
* [Test with unified agents and jobs](../pipelines/test/set-up-continuous-testing-builds.md)

[!INCLUDE [help-and-support-footer](_shared/help-and-support-footer.md)] 
 
