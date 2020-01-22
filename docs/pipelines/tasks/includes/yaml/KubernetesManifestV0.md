```YAML
# Deploy Kubernetes manifests
# Use Kubernetes manifest files to deploy to clusters or even bake the manifest files to be used for deployments using Helm charts
- task: KubernetesManifest@0
  inputs:
    #action: 'deploy' # Optional. Options: bake, createSecret, delete, deploy, patch, promote, scale, reject
    #kubernetesServiceConnection: # Required when action != Bake
    #namespace: 'default' # Required when action != Bake
    #strategy: 'none' # Optional. Options: canary, none
    #percentage: # Required when strategy == Canary && Action == Deploy
    #manifests: # Required when action == Deploy || Action == Promote || Action == Reject
    #containers: # Optional
    #imagePullSecrets: # Optional
    #renderType: 'helm2' # Optional. Options: helm2, kompose, kustomize
    #dockerComposeFile: # Required when action == Bake && RenderType == Kompose
    #helmChart: # Required when action == Bake && RenderType == Helm2
    #releaseName: # Optional
    #overrideFiles: # Optional
    #overrides: # Optional
    #kustomizationPath: # Optional
    #resourceToPatch: 'file' # Required when action == Patch# Options: file, name
    #resourceFileToPatch: # Required when action == Patch && ResourceToPatch == File
    #kind: # Required when action == Scale || ResourceToPatch == Name# Options: deployment, replicaset, statefulset
    #name: # Required when action == Scale || ResourceToPatch == Name
    #replicas: # Required when action == Scale
    #mergeStrategy: 'strategic' # Required when action == Patch# Options: json, merge, strategic
    #arguments: # Optional
    #patch: # Required when action == Patch
    #secretType: 'dockerRegistry' # Required when action == CreateSecret# Options: dockerRegistry, generic
    #secretName: # Optional
    #secretArguments: # Optional
    #dockerRegistryEndpoint: # Optional
```
