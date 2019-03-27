```YAML
# Deploy to Kubernetes
# Deploy, configure, update your Kubernetes cluster in Azure Container Service by running kubectl commands.
- task: Kubernetes@1
  inputs:
    #connectionType: 'Kubernetes Service Connection' # Options: Azure Resource Manager, Kubernetes Service Connection, none
    #kubernetesServiceEndpoint: # Required when connectionType == Kubernetes Service Connection
    #azureSubscriptionEndpoint: # Required when connectionType == Azure Resource Manager
    #azureResourceGroup: # Required when connectionType == Azure Resource Manager
    #kubernetesCluster: # Required when connectionType == Azure Resource Manager
    #useClusterAdmin: false # Optional
    #namespace: # Optional
    #command: # Optional. Options: apply, create, delete, exec, expose, get, login, logout, logs, run, set, top
    #useConfigurationFile: false # Optional
    #configurationType: 'configuration' # Optional. Options: configuration, inline
    #configuration: # Required when configurationType == Configuration
    #inline: # Required when configurationType == Inline
    #arguments: # Optional
    #secretType: 'dockerRegistry' # Options: dockerRegistry, generic
    #secretArguments: # Optional
    #containerRegistryType: 'Azure Container Registry' # Required when secretType == DockerRegistry# Options: azure Container Registry, container Registry
    #dockerRegistryEndpoint: # Optional
    #azureSubscriptionEndpointForSecrets: # Optional
    #azureContainerRegistry: # Optional
    #secretName: # Optional
    #forceUpdate: true # Optional
    #configMapName: # Optional
    #forceUpdateConfigMap: false # Optional
    #useConfigMapFile: false # Optional
    #configMapFile: # Required when useConfigMapFile == True
    #configMapArguments: # Optional
    #versionOrLocation: 'version' # Optional. Options: version, location
    #versionSpec: '1.13.2' # Optional
    #checkLatest: false # Optional
    #specifyLocation: # Required when versionOrLocation == Location
    #workingDirectory: '$(System.DefaultWorkingDirectory)' # Optional
    #outputFormat: 'json' # Optional. Options: json, yaml
```
