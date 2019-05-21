---
ms.topic: include
---

### Updates to hosted pipelines images

We've made many additions and updates to several of the Azure Pipelines hosted VM images. The following changes were added as part of this update: 
    
   * Added Rust 1.34.1 to VS2017, VS2019, and Ubuntu 16.04
   * Added .NET Framework 4.8 to VS2017 and VS2019
   * Added Windows SDK 16299 to VS2019
   * Initialized the Visual Studio experimental instance (VSIX) for VS2017 and VS2019
   * Updated versions of Go, Maven, Ruby, Python, and DAV Fx

You can find more details about the latest releases [here](https://github.com/microsoft/azure-pipelines-image-generation/releases).

For a full list of tools available on our images, visit our Image Generation repo on GitHub [here](https://github.com/Microsoft/azure-pipelines-image-generation).

### Create and manage pipelines from a command line

YAML-based multi-stage pipelines can now be managed from the command line by using the `az pipelines` command. For example, you can setup and manage pipelines interactively from the CLI, or automate the entire setup using a script. 

For more details about the command see the documentation [here](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/pipelines?view=azure-cli-latest).

### Manage build tags from a command line

Managing build tags when you are creating builds from the command line is now easier. With the `az pipelines build tag` commands, you can now kick off a build and tag the build at the same time. The Azure Pipeline build tag command allows you to add, delete or list build tags. 

For more details on the commands and its syntax, see the documentation [here](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/pipelines/build/tag?view=azure-cli-latest).