```YAML
# SSH
# Run shell commands or a script on a remote machine using SSH
- task: SSH@0
  inputs:
    sshEndpoint: 
    #runOptions: 'commands' # Options: commands, script, inline
    #commands: # Required when runOptions == Commands
    #scriptPath: # Required when runOptions == Script
    #inline: # Required when runOptions == Inline
    #args: # Optional
    #failOnStdErr: true # Optional
```
