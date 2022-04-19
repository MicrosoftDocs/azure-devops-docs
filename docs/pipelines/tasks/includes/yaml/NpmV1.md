---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 02/24/2022
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# npm v1
# Install and publish npm packages, or run an npm command. Supports npmjs.com and authenticated registries like Azure Artifacts.
- task: Npm@1
  inputs:
    command: ci | install | publish | custom # Required. The command and arguments which will be passed to npm for execution. Default: install
    workingDir: string # Path to the folder containing the target package. 
    customCommand: string # Required when command = custom. Custom command to run.
  # Advanced
    verbose: boolean # Select to print more information to the console on run. 
    publishPackageMetadata: boolean # Optional when command = publish && publishRegistry = useFeed. Associate this build/release pipeline’s metadata (run #, source code information) with the package. Default: True
  # Custom registries and authentication
    customRegistry: useNpmrc | useFeed # You can either commit a .npmrc file to your source code repository and set its path here or select a registry from Azure Artifacts here. Default: useNpmrc
    customFeed: string # Required when customRegistry = useFeed. Include the selected feed in the generated .npmrc. 
    customEndpoint: string # Optional when customRegistry = useNpmrc. Credentials to use for external registries located in the project's .npmrc. For registries in this organization/collection, leave this blank; the build’s credentials are used automatically. 
  # Destination registry and authentication
    publishRegistry: useExternalRegistry | useFeed # Registry the command will target. Default: useExternalRegistry
    publishFeed: string # Required when publishRegistry = useFeed. Select a registry hosted in this account. 
    publishEndpoint: string # Required when publishRegistry = useExternalRegistry. Credentials to use for publishing to an external registry.
```
