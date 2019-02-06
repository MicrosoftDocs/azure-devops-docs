```YAML
# Deploy to Kubernetes
# Deploy, configure, update your Kubernetes cluster in Azure Container Service by running kubectl commands.
- task: Kubernetes@0
  inputs:
    #kubernetesServiceConnection: # Optional
    #namespace: # Optional
    #command: # Optional. Options: apply, create, delete, exec, expose, get, logs, run, set, top
    #useConfigurationFile: false # Optional
    #configuration: # Required when useConfigurationFile == True
    #arguments: # Optional
    #secretType: 'dockerRegistry' # Options: dockerRegistry, generic
    #secretArguments: # Optional
    #containerRegistryType: 'Azure Container Registry' # Required when secretType == DockerRegistry# Options: azure Container Registry, container Registry
    #dockerRegistryConnection: # Optional
    #azureSubscription: # Optional
    #azureContainerRegistry: # Optional
    #secretName: # Optional
    #forceUpdate: true # Optional
    #configMapName: # Optional
    #forceUpdateConfigMap: false # Optional
    #useConfigMapFile: false # Optional
    #configMapFile: # Required when useConfigMapFile == True
    #configMapArguments: # Optional
    #versionOrLocation: 'version' # Optional. Options: version, location
    #versionSpec: '1.7.0' # Optional
    #checkLatest: false # Optional
    #specifyLocation: # Required when versionOrLocation == Location
    #workingDirectory: '$(System.DefaultWorkingDirectory)' # Optional
    #outputFormat: 'json' # Optional. Options: json, yaml
    #kubectlOutput: # Optional
```
