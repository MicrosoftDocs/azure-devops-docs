```YAML
# Docker
# Build or push Docker images, login or logout, or run a Docker command
- task: Docker@2
  inputs:
    #containerRegistry: # Optional
    #repository: # Optional
    #command: 'buildAndPush' # Options: buildAndPush, build, push, login, logout
    #dockerfile: '**/Dockerfile' # Required when command == Build || Command == BuildAndPush
    #buildContext: '**' # Optional
    #tags: '$(Build.BuildId)' # Optional
    #arguments: # Optional
    #addPipelineData: true # Optional
```
