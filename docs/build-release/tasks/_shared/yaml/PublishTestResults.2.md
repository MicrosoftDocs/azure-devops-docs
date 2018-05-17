## YAML snippet

```YAML
# Publish Test Results
# Publish Test Results to VSTS/TFS
- task: PublishTestResults@2
  inputs:
    #testRunner: 'JUnit' # Options: jUnit, nUnit, vSTest, xUnit
    #testResultsFiles: '**\TEST-*.xml' 
    #searchFolder: '$(System.DefaultWorkingDirectory)' # Optional
    #mergeTestResults: false # Optional
    #testRunTitle: # Optional
    #platform: # Optional
    #configuration: # Optional
    #publishRunAttachments: true # Optional
```
