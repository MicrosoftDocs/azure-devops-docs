```YAML
# Bash
# Run a Bash script on macOS, Linux, or Windows
- task: Bash@3
  inputs:
    targetType: # 'filePath' or 'inline'; defaults to 'filePath'
    filePath: # path to script; only valid and required when targetType is filePath
    arguments: # arguments to pass to the script
    script: # inline script body; required when targetType is inline
    workingDirectory: # optional
    failOnStderr: false # optional
```
