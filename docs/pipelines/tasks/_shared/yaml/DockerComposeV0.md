```YAML
# Docker Compose
# Build, push or run multi-container Docker applications. Task can be used with Docker or Azure Container registry.
- task: DockerCompose@0
  inputs:
    #containerregistrytype: 'Azure Container Registry' # Options: azure Container Registry, container Registry
    #dockerRegistryEndpoint: # Optional
    #azureSubscription: # Optional
    #azureContainerRegistry: # Optional
    #dockerComposeFile: '**/docker-compose.yml' 
    #additionalDockerComposeFiles: # Optional
    #dockerComposeFileArgs: # Optional
    #projectName: '$(Build.Repository.Name)' # Optional
    #qualifyImageNames: true # Optional
    #action: 'Run a Docker Compose command' # Options: build Services, push Services, run Services, run A Specific Service, lock Services, write Service Image Digests, combine Configuration, run A Docker Compose Command
    #additionalImageTags: # Optional
    #includeSourceTags: false # Optional
    #includeLatestTag: false # Optional
    #buildImages: true # Optional
    #serviceName: # Required when action == Run A Specific Service
    #containerName: # Optional
    #ports: # Optional
    #workingDirectory: # Optional
    #entrypoint: # Optional
    #containerCommand: # Optional
    #detached: true # Optional
    #abortOnContainerExit: true # Optional
    #imageDigestComposeFile: '$(Build.StagingDirectory)/docker-compose.images.yml' # Required when action == Write Service Image Digests
    #removeBuildOptions: false # Optional
    #baseResolveDirectory: # Optional
    #outputDockerComposeFile: '$(Build.StagingDirectory)/docker-compose.yml' # Required when action == Lock Services || Action == Combine Configuration
    #dockerComposeCommand: # Required when action == Run A Docker Compose Command
    #dockerHostEndpoint: # Optional
    #nopIfNoDockerComposeFile: false # Optional
    #requireAdditionalDockerComposeFiles: false # Optional
    #currentWorkingDirectory: '$(System.DefaultWorkingDirectory)' # Optional
```
