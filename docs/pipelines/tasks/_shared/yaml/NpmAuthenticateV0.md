```YAML
# npm Authenticate (for task runners)
# Don't use this task if you're also using the npm task. Provides npm credentials to an .npmrc file in your repository for the scope of the build. This enables npm task runners like gulp and Grunt to authenticate with private registries.
- task: npmAuthenticate@0
  inputs:
    #workingFile: # Optional
    #customEndpoint: # Optional
```
