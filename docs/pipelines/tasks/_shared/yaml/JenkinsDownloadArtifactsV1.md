```YAML
# Jenkins Download Artifacts
# Download artifacts produced by a Jenkins job
- task: JenkinsDownloadArtifacts@1
  inputs:
    jenkinsServerConnection: 
    jobName: 
    #jenkinsJobType: # Optional
    #saveTo: 'jenkinsArtifacts' 
    #jenkinsBuild: 'LastSuccessfulBuild' # Options: lastSuccessfulBuild, buildNumber
    #jenkinsBuildNumber: '1' # Required when jenkinsBuild == BuildNumber
    #itemPattern: '**' # Optional
    #downloadCommitsAndWorkItems: # Optional
    #startJenkinsBuildNumber: # Optional
    #artifactDetailsFileNameSuffix: # Optional
    #propagatedArtifacts: false # Optional
    #artifactProvider: 'azureStorage' # Required when propagatedArtifacts == NotValid# Options: azureStorage
    #connectedServiceNameARM: # Required when propagatedArtifacts == True
    #storageAccountName: # Required when propagatedArtifacts == True
    #containerName: # Required when propagatedArtifacts == True
    #commonVirtualPath: # Optional
```
