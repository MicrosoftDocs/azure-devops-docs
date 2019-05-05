```YAML
# Package and deploy Helm charts
# Deploy, configure, update your Kubernetes cluster in Azure Container Service by running helm commands.
- task: HelmDeploy@0
  inputs:
    #connectionType: 'Azure Resource Manager' # Options: azure Resource Manager, kubernetes Service Connection, none
    #azureSubscription: # Required when connectionType == Azure Resource Manager
    #azureResourceGroup: # Required when connectionType == Azure Resource Manager
    #kubernetesCluster: # Required when connectionType == Azure Resource Manager
    #kubernetesServiceConnection: # Required when connectionType == Kubernetes Service Connection
    #namespace: # Optional
    #command: 'ls' # Options: create, delete, expose, get, init, install, login, logout, ls, package, rollback, upgrade
    #chartType: 'Name' # Required when command == Install || Command == Upgrade# Options: name, filePath
    #chartName: # Required when chartType == Name
    #chartPath: # Required when chartType == FilePath || Command == Package
    #chartVersion: # Optional
    #releaseName: # Optional
    #overrideValues: # Optional
    #valueFile: # Optional
    #destination: '$(Build.ArtifactStagingDirectory)' # Optional
    #canaryImage: false # Optional
    #upgradeTiller: true # Optional
    #updateDependency: false # Optional
    #save: true # Optional
    #install: true # Optional
    #recreate: false # Optional
    #resetValues: false # Optional
    #force: false # Optional
    #waitForExecution: true # Optional
    #arguments: # Optional
    #enableTls: false # Optional
    #caCert: # Required when enableTls == True
    #certificate: # Required when enableTls == True
    #privatekey: # Required when enableTls == True
    #tillerNamespace: # Optional
```
