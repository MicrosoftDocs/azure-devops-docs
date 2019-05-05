```YAML
# Copy Files Over SSH
# Copy files or build artifacts to a remote machine over SSH
- task: CopyFilesOverSSH@0
  inputs:
    sshEndpoint: 
    #sourceFolder: # Optional
    #contents: '**' 
    #targetFolder: # Optional
    #cleanTargetFolder: false # Optional
    #overwrite: true # Optional
    #failOnEmptySource: false # Optional
    #flattenFolders: false # Optional
```
