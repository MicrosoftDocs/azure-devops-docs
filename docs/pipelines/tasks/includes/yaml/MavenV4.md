---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 10/03/2022
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Maven
# Build, test, and deploy with Apache Maven
- task: Maven@4
  inputs:
    #mavenPomFile: 'pom.xml' 
    #goals: 'package' # Optional
    #options: # Optional
    #publishJUnitResults: true 
    #testResultsFiles: '**/surefire-reports/TEST-*.xml' # Required when publishJUnitResults == True
    #testRunTitle: # Optional
    #allowBrokenSymlinks: false # Optional. Has effect only when publishJUnitResults == True
    #codeCoverageToolOption: 'None' # Optional. Options: none, cobertura, jaCoCo. Enabling code coverage inserts the `clean` goal into the Maven goals list when Maven runs.
    #codeCoverageClassFilter: # Optional. Comma-separated list of filters to include or exclude classes from collecting code coverage. For example: +:com.*,+:org.*,-:my.app*.*
    #codeCoverageClassFilesDirectories: # Optional | Required for a multi-module project
    #codeCoverageSourceDirectories: # Optional | Required for a multi-module project
    #codeCoverageFailIfEmpty: false # Optional
    #codeCoverageRestoreOriginalPomXml: false # Optional
    #javaHomeOption: 'JDKVersion' # Options: jDKVersion, path
    #jdkVersionOption: 'default' # Optional. Options: default, 1.14, 1.13, 1.12, 1.11, 1.10, 1.9, 1.8, 1.7, 1.6
    #jdkDirectory: # Required when javaHomeOption == Path
    #jdkArchitectureOption: 'x64' # Optional. Options: x86, x64
    #mavenVersionOption: 'Default' # Options: default, path
    #mavenDirectory: # Required when mavenVersionOption == Path
    #mavenSetM2Home: false # Required when mavenVersionOption == Path
    #mavenOptions: '-Xmx1024m' # Optional
    #mavenAuthenticateFeed: false 
    #effectivePomSkip: false 
    #sonarQubeRunAnalysis: false 
    #isJacocoCoverageReportXML: false # Optional
    #sqMavenPluginVersionChoice: 'latest' # Required when sonarQubeRunAnalysis == True# Options: latest, pom
    #checkStyleRunAnalysis: false # Optional
    #pmdRunAnalysis: false # Optional
    #findBugsRunAnalysis: false # Optional
    #spotBugsRunAnalysis: false # Optional
    #spotBugsVersion: 4.5.3.0 # Optional
    #spotBugsGoal: spotbugs # Optional
    #sbFailWhenBugsFound: true # Optional
```
