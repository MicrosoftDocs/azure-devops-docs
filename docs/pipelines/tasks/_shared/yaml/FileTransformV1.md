```YAML
# File Transform
- task: FileTransform@1
  displayName: 'File Transform: '
  inputs:
    folderPath: $(System.DefaultWorkingDirectory)/**/*.zip
    enableXmlTransform: true
    xmlTransformationRules: |
      -transform **\*.Release.config -xml **\*.config
      -transform **\*.$(Release.EnvironmentName).config -xml **\*.config
    fileType: xml # Options: xml, json
    targetFiles: '**/*.config, parameters.xml'
```
