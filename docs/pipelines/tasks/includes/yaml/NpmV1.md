---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 02/24/2022
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# npm v1
# Install and publish npm packages, or run an npm command. Supports npmjs.com and authenticated registries like Azure Artifacts.
- task: Npm@1
  inputs:
    command: ci | install | publish | custom # Required. Command. Default: install
    workingDir: string # Working folder that contains package.json. 
    customCommand: string # Required when command = custom. Command and arguments. 
  # Advanced
    verbose: boolean # Verbose logging. 
    publishPackageMetadata: boolean # Optional. Use when command = publish && publishRegistry = useFeed. Publish pipeline metadata. Default: True
  # Custom registries and authentication
    customRegistry: useNpmrc | useFeed # Registries to use. Default: useNpmrc
    customFeed: string # Required when customRegistry = useFeed. Use packages from this Azure Artifacts/TFS registry. 
    customEndpoint: string # Optional. Use when customRegistry = useNpmrc. Credentials for registries outside this organization/collection. 
  # Destination registry and authentication
    publishRegistry: useExternalRegistry | useFeed # Registry location. Default: useExternalRegistry
    publishFeed: string # Required when publishRegistry = useFeed. Target registry. 
    publishEndpoint: string # Required when publishRegistry = useExternalRegistry. External Registry. 
```
