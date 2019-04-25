```YAML
# Docker
# Build, tag, push, or run Docker images, or run a Docker command. Task can be used with Docker or Azure Container registry.
- task: Docker@0
  inputs:
    #containerregistrytype: 'Azure Container Registry' # Options: azure Container Registry, container Registry
    #dockerRegistryConnection: # Optional
    #azureSubscription: # Optional
    #azureContainerRegistry: # Optional
    #action: 'Build an image' # Options: build An Image, tag Images, push An Image, push Images, run An Image, run A Docker Command
    #dockerFile: '**/Dockerfile' # Required when action == Build An Image
    #buildArguments: # Optional
    #defaultContext: true # Optional
    #context: # Optional
    #imageName: '$(Build.Repository.Name):$(Build.BuildId)' # Required when action == Build An Image || Action == Push An Image || Action == Run An Image
    #imageNamesPath: # Required when action == Tag Images || Action == Push Images
    #qualifyImageName: true # Optional
    #additionalImageTags: # Optional
    #includeSourceTags: false # Optional
    #includeLatestTag: false # Optional
    #imageDigestFile: # Optional
    #containerName: # Optional
    #ports: # Optional
    #volumes: # Optional
    #envVars: # Optional
    #workDir: # Optional
    #entrypoint: # Optional
    #containerCommand: # Optional
    #detached: true # Optional
    #restartPolicy: 'no' # Required when action == Run An Image && Detached == True# Options: no, onFailure, always, unlessStopped
    #restartMaxRetries: # Optional
    #customCommand: # Required when action == Run A Docker Command
    #dockerHostEndpoint: # Optional
    #enforceDockerNamingConvention: true # Optional
    #workingDirectory: '$(System.DefaultWorkingDirectory)' # Optional
    #memory: # Optional
```
