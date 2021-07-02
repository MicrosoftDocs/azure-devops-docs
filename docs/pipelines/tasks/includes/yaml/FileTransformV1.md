---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 02/21/2019
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# File transform
# Replace tokens with variable values in XML or JSON configuration files
- task: FileTransform@1
  inputs:
    #folderPath: '$(System.DefaultWorkingDirectory)/**/*.zip' 
    #enableXmlTransform: # Optional
    #xmlTransformationRules: '-transform **\*.Release.config -xml **\*.config-transform **\*.$(Environment.Name).config -xml **\*.config' # Optional
    #fileType: # Optional. Options: xml, json
    #targetFiles: # Optional
```
