```YAML
# Command Line
# Run a command line script using cmd.exe on Windows and bash on macOS and Linux.
- task: CmdLine@2
  inputs:
    script: # script you want to run
    workingDirectory: # Optional
    failOnStderr: false # Optional
```
