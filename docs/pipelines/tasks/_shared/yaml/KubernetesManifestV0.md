```YAML
# Manifest based Kubernetes deployments
# Manifest based deployments to kubernetes
- task: KubernetesManifest@0
  inputs:
    #connectionType: 'Kubernetes Service Connection' # Options: kubernetes Service Connection, none
    #kubernetesServiceEndpoint: # Required when connectionType == Kubernetes Service Connection
    #namespace: 'default' 
    #action: 'deploy' # Optional. Options: bake, deploy, patch, scale, delete
    #deploymentStrategy: 'None' # Optional. Options: canary, none
    #percentage: # Required when deploymentStrategy == Canary
    #manifests: # Required when action == Deploy
    #containers: # Optional
    #renderType: 'helm2' # Optional. Options: helm2
    #helmChart: # Required when action == Bake && RenderType == Helm2
    #overrideFiles: # Optional
    #overrides: # Optional
    #resourceToPatch: 'file' # Required when action == Patch# Options: file, name
    #resourceFileToPatch: # Required when action == Patch && ResourceToPatch == File
    #kind: # Required when action == Scale || ResourceToPatch == Name
    #name: # Required when action == Scale || ResourceToPatch == Name
    #replicas: # Required when action == Scale
    #mergeStrategy: 'strategic' # Required when action == Patch# Options: json, merge, strategic
    #args: # Required when action == Delete
    #patch: # Required when action == Patch
```
