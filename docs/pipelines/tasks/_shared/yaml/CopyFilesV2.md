```YAML
# Copy Files
# Copy files from source folder to target folder using match patterns (The match patterns will only match file paths, not folder paths)
- task: CopyFiles@2
  inputs:
    #sourceFolder: # Optional
    #contents: '**' 
    targetFolder: 
    #cleanTargetFolder: false # Optional
    #overWrite: false # Optional
    #flattenFolders: false # Optional
```
