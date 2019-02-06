```YAML
# Docker
# Build, tag, push, or run Docker images, or run a Docker command. Task can be used with Docker or Azure Container registry.
- task: Docker@1
  inputs:
    #containerregistrytype: 'Azure Container Registry' # Options: azure Container Registry, container Registry
    #dockerRegistryEndpoint: # Optional
    #azureSubscriptionEndpoint: # Optional
    #azureContainerRegistry: # Optional
    #command: 'Build an image' # Options: build An Image, tag Image, push An Image, run An Image, login, logout
    #dockerFile: '**/Dockerfile' # Required when command == Build An Image || Command == Build
    #arguments: # Optional
    #pushMultipleImages: false # Optional
    #tagMultipleImages: false # Optional
    #imageName: '$(Build.Repository.Name):$(Build.BuildId)' # Required when command == Build An Image || Command == Build || Command == Run An Image || Command == Run || PushMultipleImages == False || TagMultipleImages == False
    #imageNamesPath: # Required when tagMultipleImages == True || PushMultipleImages == True
    #qualifyImageName: true # Optional
    #includeSourceTags: false # Optional
    #includeLatestTag: false # Optional
    #addDefaultLabels: true # Optional
    #useDefaultContext: true # Optional
    #buildContext: # Optional
    #imageDigestFile: # Optional
    #containerName: # Optional
    #ports: # Optional
    #volumes: # Optional
    #envVars: # Optional
    #workingDirectory: # Optional
    #entrypointOverride: # Optional
    #containerCommand: # Optional
    #runInBackground: true # Optional
    #restartPolicy: 'no' # Required when runInBackground == True# Options: no, onFailure, always, unlessStopped
    #maxRestartRetries: # Optional
    #dockerHostEndpoint: # Optional
    #enforceDockerNamingConvention: true # Optional
    #memoryLimit: # Optional
```
