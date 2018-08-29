```YAML
# Publish Test Results
# Publish Test Results to Azure Pipelines/TFS
- task: PublishTestResults@2
  inputs:
    #testRunner: 'JUnit' # Options: JUnit, NUnit, VSTest, XUnit
    #testResultsFiles: '**/TEST-*.xml' 
    #searchFolder: '$(System.DefaultWorkingDirectory)' # Optional
    #mergeTestResults: false # Optional
    #testRunTitle: # Optional
    #platform: # Optional
    #configuration: # Optional
    #publishRunAttachments: true # Optional
```
