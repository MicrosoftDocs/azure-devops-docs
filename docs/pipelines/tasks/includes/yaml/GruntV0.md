---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 08/10/2016
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Grunt
# Run the Grunt JavaScript task runner
- task: Grunt@0
  inputs:
    #gruntFile: 'gruntfile.js' 
    #targets: # Optional
    #arguments: # Optional
    #workingDirectory: # Optional
    #gruntCli: 'node_modules/grunt-cli/bin/grunt' 
    #publishJUnitResults: false # Optional
    #testResultsFiles: '**/TEST-*.xml' # Required when publishJUnitResults == True
    #testRunTitle: # Optional
    #enableCodeCoverage: false # Optional
    #testFramework: 'Mocha' # Optional. Options: mocha, jasmine
    #srcFiles: # Optional
    #testFiles: 'test/*.js' # Required when enableCodeCoverage == True
```
