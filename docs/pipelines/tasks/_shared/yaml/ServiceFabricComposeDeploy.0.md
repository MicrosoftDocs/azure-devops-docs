## YAML snippet

```YAML
# Service Fabric Compose Deploy
# Deploy a docker-compose application to a Service Fabric cluster.
- task: ServiceFabricComposeDeploy@0
  inputs:
    clusterConnection: 
    #composeFilePath: '**/docker-compose.yml' 
    #applicationName: 'fabric:/Application1' 
    #registryCredentials: 'AzureResourceManagerEndpoint' # Options: azureResourceManagerEndpoint, containerRegistryEndpoint, usernamePassword, none
    #dockerRegistryConnection: # Optional
    #azureSubscription: # Required when registryCredentials == AzureResourceManagerEndpoint
    #registryUserName: # Optional
    #registryPassword: # Optional
    #passwordEncrypted: # Optional
    #deployTimeoutSec: # Optional
    #removeTimeoutSec: # Optional
    #getStatusTimeoutSec: # Optional
```
