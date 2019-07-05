```YAML
# File transform
# Replace tokens with variable values in XML or JSON configuration files
- task: FileTransform@1
  inputs:
    #folderPath: '$(System.DefaultWorkingDirectory)/**/*.zip' 
    #enableXmlTransform: # Optional
    #xmlTransformationRules: '-transform **\*.Release.config -xml **\*.config-transform **\*.$(Release.EnvironmentName).config -xml **\*.config' # Optional
    #fileType: # Optional. Options: xml, json
    #targetFiles: # Optional
```
