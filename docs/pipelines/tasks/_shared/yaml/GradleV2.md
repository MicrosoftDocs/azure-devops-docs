```YAML
# Gradle
# Build using a Gradle wrapper script
- task: Gradle@2
  inputs:
    #gradleWrapperFile: 'gradlew' 
    #workingDirectory: # Optional
    #options: # Optional
    #tasks: 'build' 
    #publishJUnitResults: true 
    #testResultsFiles: '**/TEST-*.xml' # Required when publishJUnitResults == True
    #testRunTitle: # Optional
    #codeCoverageToolOption: 'None' # Optional. Options: none, cobertura, jaCoCo
    #codeCoverageClassFilesDirectories: 'build/classes/main/' # Required when codeCoverageToolOption == False
    #codeCoverageClassFilter: # Optional
    #codeCoverageFailIfEmpty: false # Optional
    #javaHomeOption: 'JDKVersion' # Options: jDKVersion, path
    #jdkVersionOption: 'default' # Optional. Options: default, 1.11, 1.10, 1.9, 1.8, 1.7, 1.6
    #jdkDirectory: # Required when javaHomeOption == Path
    #jdkArchitectureOption: 'x64' # Optional. Options: x86, x64
    #gradleOptions: '-Xmx1024m' # Optional
    #sonarQubeRunAnalysis: false 
    #sqGradlePluginVersionChoice: 'specify' # Required when sonarQubeRunAnalysis == True# Options: specify, build
    #sonarQubeGradlePluginVersion: '2.6.1' # Required when sonarQubeRunAnalysis == True && SqGradlePluginVersionChoice == Specify
    #checkStyleRunAnalysis: false # Optional
    #findBugsRunAnalysis: false # Optional
    #pmdRunAnalysis: false # Optional
```
