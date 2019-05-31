```YAML
# Publish Code Coverage Results
# Publish Cobertura or JaCoCo code coverage results from a build
- task: PublishCodeCoverageResults@1
  inputs:
    #codeCoverageTool: 'JaCoCo' # Options: cobertura, jaCoCo
    summaryFileLocation: 
    #pathToSources: # Optional
    #reportDirectory: # Optional
    #additionalCodeCoverageFiles: # Optional
    #failIfCoverageEmpty: false # Optional
```
