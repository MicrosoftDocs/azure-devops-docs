```YAML
# Docker
# Build or push Docker images, login or logout, or run a Docker command. Task can be used with Docker registry.
- task: Docker@2
  inputs:
    #containerRegistry: # Optional
    #repository: # Optional
    #command: 'buildAndPush' # Options: buildAndPush, build, push, login, logout
    #dockerFile: '**/Dockerfile' # Required when command == Build || Command == BuildAndPush
    #buildContext: '**' # Optional
    #tags: '$(Build.BuildId)' # Optional
    #arguments: # Optional
```
