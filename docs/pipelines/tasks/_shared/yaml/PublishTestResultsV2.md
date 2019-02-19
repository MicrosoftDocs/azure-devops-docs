```YAML
# Publish Test Results
# Publish Test Results to Azure Pipelines/TFS
- task: PublishTestResults@2
  inputs:
    #testResultsFormat: 'JUnit' # Options: JUnit, NUnit, VSTest, xUnit, cTest
    #testResultsFiles: '**/TEST-*.xml' 
    #searchFolder: '$(System.DefaultWorkingDirectory)' # Optional
    #mergeTestResults: false # Optional
    #failTaskOnFailedTests: false # Optional
    #testRunTitle: # Optional
    #buildPlatform: # Optional
    #buildConfiguration: # Optional
    #publishRunAttachments: true # Optional
```
