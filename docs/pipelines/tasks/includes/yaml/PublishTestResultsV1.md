```YAML
# Publish test results
# Publish test results to Azure Pipelines
- task: PublishTestResults@1
  inputs:
    #testRunner: 'JUnit' # Options: jUnit, nUnit, vSTest, xUnit
    #testResultsFiles: '**/TEST-*.xml' 
    #mergeTestResults: false # Optional
    #testRunTitle: # Optional
    #platform: # Optional
    #configuration: # Optional
    #publishRunAttachments: true # Optional
```
