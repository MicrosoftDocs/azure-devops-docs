```YAML
# Visual Studio Test
# Run unit and functional tests (Selenium, Appium, Coded UI test, etc.) using the Visual Studio Test (VsTest) runner. Test frameworks that have a Visual Studio test adapter such as MsTest, xUnit, NUnit, Chutzpah (for JavaScript tests using QUnit, Mocha and Jasmine), etc. can be run. Tests can be distributed on multiple agents using this task (version 2).
- task: VSTest@2
  inputs:
    #testSelector: 'testAssemblies' # Options: testAssemblies, testPlan, testRun
    #testAssemblyVer2: '**\*test*.dll!**\*TestAdapter.dll!**\obj\**' # Required when testSelector == TestAssemblies
    #testPlan: # Required when testSelector == TestPlan
    #testSuite: # Required when testSelector == TestPlan
    #testConfiguration: # Required when testSelector == TestPlan
    #tcmTestRun: '$(test.RunId)' # Optional
    #searchFolder: '$(System.DefaultWorkingDirectory)' 
    #testFiltercriteria: # Optional
    #runOnlyImpactedTests: False # Optional
    #runAllTestsAfterXBuilds: '50' # Optional
    #uiTests: false # Optional
    #vstestLocationMethod: 'version' # Optional. Options: version, location
    #vsTestVersion: 'latest' # Optional. Options: latest, 16.0, 15.0, 14.0, toolsInstaller
    #vstestLocation: # Optional
    #runSettingsFile: # Optional
    #overrideTestrunParameters: # Optional
    #pathtoCustomTestAdapters: # Optional
    #runInParallel: False # Optional
    #runTestsInIsolation: False # Optional
    #codeCoverageEnabled: False # Optional
    #otherConsoleOptions: # Optional
    #distributionBatchType: 'basedOnTestCases' # Optional. Options: basedOnTestCases, basedOnExecutionTime, basedOnAssembly
    #batchingBasedOnAgentsOption: 'autoBatchSize' # Optional. Options: autoBatchSize, customBatchSize
    #customBatchSizeValue: '10' # Required when distributionBatchType == BasedOnTestCases && BatchingBasedOnAgentsOption == CustomBatchSize
    #batchingBasedOnExecutionTimeOption: 'autoBatchSize' # Optional. Options: autoBatchSize, customTimeBatchSize
    #customRunTimePerBatchValue: '60' # Required when distributionBatchType == BasedOnExecutionTime && BatchingBasedOnExecutionTimeOption == CustomTimeBatchSize
    #dontDistribute: False # Optional
    #testRunTitle: # Optional
    #platform: # Optional
    #configuration: # Optional
    #publishRunAttachments: true # Optional
    #diagnosticsEnabled: True # Optional
    #collectDumpOn: 'onAbortOnly' # Optional. Options: onAbortOnly, always, never
    #rerunFailedTests: False # Optional
    #rerunType: 'basedOnTestFailurePercentage' # Optional. Options: basedOnTestFailurePercentage, basedOnTestFailureCount
    #rerunFailedThreshold: '30' # Optional
    #rerunFailedTestCasesMaxLimit: '5' # Optional
    #rerunMaxAttempts: '3' # Optional
```
