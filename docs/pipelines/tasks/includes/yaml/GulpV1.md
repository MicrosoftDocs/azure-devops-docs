---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 12/17/2019
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# gulp
# Run the gulp Node.js streaming task-based build system
- task: gulp@1
  inputs:
    #gulpFile: 'gulpfile.js' 
    #targets: # Optional
    #arguments: # Optional
    #workingDirectory: # Optional
    #gulpjs: # Optional
    #publishJUnitResults: false # Optional
    #testResultsFiles: '**/TEST-*.xml' # Required when publishJUnitResults == True
    #testRunTitle: # Optional
    #enableCodeCoverage: false 
    #testFramework: 'Mocha' # Optional. Options: mocha, jasmine
    #srcFiles: # Optional
    #testFiles: 'test/*.js' # Required when enableCodeCoverage == True
```
