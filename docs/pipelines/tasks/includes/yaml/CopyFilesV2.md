```YAML
# Copy files
# Copy files from a source folder to a target folder using patterns matching file paths (not folder paths)
- task: CopyFiles@2
  inputs:
    #sourceFolder: # Optional
    #contents: '**' 
    targetFolder: 
    #cleanTargetFolder: false # Optional
    #overWrite: false # Optional
    #flattenFolders: false # Optional
    #preserveTimestamp: false # Optional
```
