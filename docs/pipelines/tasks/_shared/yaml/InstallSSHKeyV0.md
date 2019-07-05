```YAML
# Install SSH key
# Install an SSH key prior to a build or deployment
- task: InstallSSHKey@0
  inputs:
    knownHostsEntry: 
    sshPublicKey: 
    #sshPassphrase: # Optional
    sshKeySecureFile: 
```
