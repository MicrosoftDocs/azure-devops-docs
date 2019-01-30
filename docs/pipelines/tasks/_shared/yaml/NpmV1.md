```YAML
# npm
# Install and publish npm packages, or run an npm command. Supports npmjs.com and authenticated registries like Package Management.
- task: Npm@1
  inputs:
    #command: 'install' # Options: install, publish, custom
    #workingDir: # Optional
    #verbose: # Optional
    #customCommand: # Required when command == Custom
    #customRegistry: 'useNpmrc' # Optional. Options: useNpmrc, useFeed
    #customFeed: # Required when customRegistry == UseFeed
    #customEndpoint: # Optional
    #publishRegistry: 'useExternalRegistry' # Optional. Options: useExternalRegistry, useFeed
    #publishFeed: # Required when publishRegistry == UseFeed
    #publishPackageMetadata: true # Optional
    #publishEndpoint: # Required when publishRegistry == UseExternalRegistry
```
