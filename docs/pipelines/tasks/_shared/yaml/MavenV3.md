```YAML
# Maven
# Build with Apache Maven
- task: Maven@3
  inputs:
    #mavenPomFile: 'pom.xml' 
    #goals: 'package' # Optional
    #options: # Optional
    #publishJUnitResults: true 
    #testResultsFiles: '**/surefire-reports/TEST-*.xml' # Required when publishJUnitResults == True
    #testRunTitle: # Optional
    #codeCoverageToolOption: 'None' # Optional. Options: none, cobertura, jaCoCo
    #codeCoverageClassFilter: # Optional
    #codeCoverageClassFilesDirectories: # Optional
    #codeCoverageSourceDirectories: # Optional
    #codeCoverageFailIfEmpty: false # Optional
    #javaHomeOption: 'JDKVersion' # Options: jDKVersion, path
    #jdkVersionOption: 'default' # Optional. Options: default, 1.11, 1.10, 1.9, 1.8, 1.7, 1.6
    #jdkDirectory: # Required when javaHomeOption == Path
    #jdkArchitectureOption: 'x64' # Optional. Options: x86, x64
    #mavenVersionOption: 'Default' # Options: default, path
    #mavenDirectory: # Required when mavenVersionOption == Path
    #mavenSetM2Home: false # Required when mavenVersionOption == Path
    #mavenOptions: '-Xmx1024m' # Optional
    #mavenAuthenticateFeed: false 
    #sonarQubeRunAnalysis: false 
    #sqMavenPluginVersionChoice: 'latest' # Required when sonarQubeRunAnalysis == True# Options: latest, pom
    #checkStyleRunAnalysis: false # Optional
    #pmdRunAnalysis: false # Optional
    #findBugsRunAnalysis: false # Optional
```
