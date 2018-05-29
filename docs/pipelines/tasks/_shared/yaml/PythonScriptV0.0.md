## YAML snippet

```YAML
# Python Script
# Run a Python script.
- task: PythonScript@0
  inputs:
    targetType: 'filePath' # Options: filePath, inline
    #filePath: # Required when targetType == filePath
    #script: # Required when targetType == inline
    #arguments: # Optional
    #pythonInterpreter: # Optional
    #workingDirectory: # Optional
    #failOnStderr: false # Optional
```

