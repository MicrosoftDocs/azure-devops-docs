---
title: Docker Compose task
description: Build, push or run multi-container Docker applications. Task can be used with Docker or Azure Container registry.
ms.topic: reference
ms.assetid: 6975E2D1-96D3-4AFC-8A41-498B5D34EA19
ms.author: atulmal
author: azooinmyluggage
ms.date: 04/09/2021
monikerRange: '> tfs-2018'
---

# Docker Compose task

**Azure Pipelines**

Use this task to build, push or run multi-container Docker applications.
This task can be used with a Docker registry or an Azure Container Registry.

::: moniker range="> tfs-2018"

## Container registry types

### Azure Container Registry

|Parameters|Description|
|--- |--- |
|`containerregistrytype` <br/>(Container registry type)|(Optional) Azure Container Registry if using ACR or Container Registry if using any other container registry. <br/>Default value: Azure Container Registry|
|`azureSubscriptionEndpoint` <br/>(Azure subscription)|(Required) Name of the Azure Service Connection. See [Azure Resource Manager service connection](../../library/connect-to-azure.md) to manually set up the connection. <br/>Argument aliases: `azureSubscription`|
|`azureContainerRegistry` <br/>(Azure Container Registry)|(Required) Name of the Azure Container Registry. <br/>Example: `Contoso.azurecr.io`|

This YAML example specifies the inputs for Azure Container Registry:

```YAML
variables:
  azureContainerRegistry: Contoso.azurecr.io
  azureSubscriptionEndpoint: Contoso
steps:
- task: DockerCompose@0
  displayName: Container registry login
  inputs:
    containerregistrytype: Azure Container Registry
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
```
### Other container registries

The **containerregistrytype** value is required when using any container registry other than ACR. Use <code>containerregistrytype: Container Registry</code> in this case.

|Parameters|Description|
|--- |--- |
|`containerregistrytype` <br/>(Container registry type)|(Required) Azure Container Registry if using ACR or Container Registry if using any other container registry. <br/>Default value: Azure Container Registry|
|`dockerRegistryEndpoint` <br/>(Docker registry service connection)|(Required) [Docker registry service connection](../../library/service-endpoints.md).|

This YAML example specifies a container registry other than ACR where **Contoso**
is the name of the Docker registry service connection for the container registry:

```YAML
- task: DockerCompose@0
  displayName: Container registry login
  inputs:
    containerregistrytype: Container Registry
    dockerRegistryEndpoint: Contoso
```

## Build service images

|Parameters|Description|
|--- |--- |
|`containerregistrytype` <br/>(Container Registry Type)|(Required) Azure Container Registry if using ACR or Container Registry if using any other container registry. <br/>Default value: Azure Container Registry|
|`azureSubscriptionEndpoint` <br/>(Azure subscription)|(Required) Name of the Azure Service Connection.|
|`azureContainerRegistry` <br/>(Azure Container Registry)|(Required) Name of the Azure Container Registry.|
|`dockerComposeFile` <br/>(Docker Compose File)|(Required) Path to the primary Docker Compose file to use. <br/>Default value: **/docker-compose.yml|
|`additionalDockerComposeFiles` <br/>(Additional Docker Compose Files)|(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.|
|`dockerComposeFileArgs` <br/>(Environment Variables) | (Optional) Environment variables to be set up during the command. Specify each name = value pair on a new line. You need to use the \| operator in YAML to indicate that newlines should be preserved. <br/>Example:  `dockerComposeFileArgs: DOCKER_BUILD_SOURCE=$(CustomVar)` |
| `projectName` <br/>(Project Name) |(Optional) Project name used for default naming of images and containers. <br/>Default value: $(Build.Repository.Name)|
|`qualifyImageNames` <br/>(Qualify Image Names) | (Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified. <br/>Default value: true|
|`action` <br/>(Action)|(Required) Select a Docker Compose action. <br/>Default value: Run a Docker Compose command|
|`additionalImageTags` <br/>(Additional Image Tags)|(Optional) Additional tags for the Docker images being built or pushed. Specify multiple tags with a line feed `\n`.|
|`includeSourceTags` <br/>(Include Source Tags)|(Optional) Include Git tags when building or pushing Docker images. <br/>Default value: false|
|`includeLatestTag` <br/>(Include Latest Tag)|(Optional) Include the latest tag when building or pushing Docker images. <br/>Default value: false|

This YAML example builds the image where the image name is qualified on the basis of the inputs related to Azure Container Registry:

```YAML
- task: DockerCompose@0
  displayName: Build services
  inputs:
    action: Build services
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
    dockerComposeFile: docker-compose.yml
    projectName: $(Build.Repository.Name)
    qualifyImageNames: true
    additionalImageTags: $(Build.BuildId)
    dockerComposeFileArgs: |
      firstArg=$(firstArg)
      secondArg=$(secondArg)

```

## Push service images

|Parameters|Description|
|--- |--- |
|`containerregistrytype` <br/>(Container Registry Type)|(Required) Azure Container Registry if using ACR or Container Registry if using any other container registry. <br/>Default value: Azure Container Registry|
|`azureSubscriptionEndpoint` <br/>(Azure subscription)|(Required) Name of the Azure Service Connection.|
|`azureContainerRegistry` <br/>(Azure Container Registry)|(Required) Name of the Azure Container Registry.|
|`dockerComposeFile` <br/>(Docker Compose File)|(Required) Path to the primary Docker Compose file to use. <br/>Default value: **/docker-compose.yml|
|`additionalDockerComposeFiles` <br/>(Additional Docker Compose Files)|(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.|
|`dockerComposeFileArgs` <br/>(Environment Variables)|(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line.|
|`projectName` <br/>(Project Name)|(Optional) Project name used for default naming of images and containers. <br/>Default value: $(Build.Repository.Name)|
|`qualifyImageNames` <br/>(Qualify Image Names)|(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified. <br/>Default value: true|
|`action` <br/>(Action)|(Required) Select a Docker Compose action. <br/>Default value: Run a Docker Compose command|
|`additionalImageTags` <br/>(Additional Image Tags)|(Optional) Additional tags for the Docker images being built or pushed.|
|`includeSourceTags` <br/>(Include Source Tags)|(Optional) Include Git tags when building or pushing Docker images. <br/>Default value: false|
|`includeLatestTag` <br/>(Include Latest Tag)|(Optional) Include the latest tag when building or pushing Docker images. <br/>Default value: false|

This YAML example pushes an image to a container registry:

```YAML
- task: DockerCompose@0
  displayName: Push services
  inputs:
    action: Push services
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
    dockerComposeFile: docker-compose.yml
    projectName: $(Build.Repository.Name)
    qualifyImageNames: true
    additionalImageTags: $(Build.BuildId)
```

## Run service images

|Parameters|Description|
|--- |--- |
|`dockerComposeFile` <br/>(Docker Compose File)|(Required) Path to the primary Docker Compose file to use. <br/>Default value: **/docker-compose.yml|
|`additionalDockerComposeFiles` <br/>(Additional Docker Compose Files)|(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.|
|`dockerComposeFileArgs` <br/>(Environment Variables)|(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line.|
|`projectName` <br/>(Project Name)|(Optional) Project name used for default naming of images and containers. <br/>Default value: $(Build.Repository.Name)|
|`qualifyImageNames` <br/>(Qualify Image Names)|(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified. <br/>Default value: true|
|`action` <br/>(Action)|(Required) Select a Docker Compose action. <br/>Default value: Run a Docker Compose command|
|`buildImages` <br/>(Build Images)|(Optional) Build images before starting service containers. <br/>Default value: true|
|`detached` <br/>(Run in Background)|(Optional) Run the service containers in the background. <br/>Default value: true|

This YAML example runs services:

```YAML
- task: DockerCompose@0
  displayName: Run services
  inputs:
    action: Run services
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
    dockerComposeFile: docker-compose.ci.build.yml
    projectName: $(Build.Repository.Name)
    qualifyImageNames: true
    buildImages: true
    abortOnContainerExit: true
    detached: false
```

## Run a specific service image

|Parameters|Description|
|--- |--- |
|`dockerComposeFile` <br/>(Docker Compose File)|(Required) Path to the primary Docker Compose file to use. <br/>Default value: **/docker-compose.yml|
|`additionalDockerComposeFiles` <br/>(Additional Docker Compose Files)|(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.|
|`dockerComposeFileArgs` <br/>(Environment Variables)|(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line.|
|`projectName` <br/>(Project Name)|(Optional) Project name used for default naming of images and containers. <br/>Default value: $(Build.Repository.Name)|
|`qualifyImageNames` <br/>(Qualify Image Names)|(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified. <br/>Default value: true|
|`action` <br/>(Action)|(Required) Select a Docker Compose action. <br/>Default value: Run a Docker Compose command|
|`serviceName` <br/>(Service Name)|(Required) Name of the specific service to run.|
|`containerName` <br/>(Container Name)|(Optional) Name of the specific service container to run.|
|`ports` <br/>(Ports)|(Optional) Ports in the specific service container to publish to the host. Specify each host-port:container-port binding on a new line.|
|`workDir` <br/>(Working Directory)|(Optional) The working directory for the specific service container. <br/>Argument aliases: `workingDirectory`|
|`entrypoint` <br/>(Entry Point Override)|(Optional) Override the default entry point for the specific service container.|
|`containerCommand` <br/>(Command)|(Optional) Command to run in the specific service container. For example, if the image contains a simple Python Flask web application you can specify python app.py to launch the web application.|
|`detached` <br/>(Run in Background)|(Optional) Run the service containers in the background. <br/>Default value: true|

This YAML example runs a specific service:

```YAML
- task: DockerCompose@0
  displayName: Run a specific service
  inputs:
    action: Run a specific service
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
    dockerComposeFile: docker-compose.yml
    projectName: $(Build.Repository.Name)
    qualifyImageNames: true
    serviceName: myhealth.web
    ports: 80:80
    detached: true
```

## Lock service images

|Parameters|Description|
|--- |--- |
|`dockerComposeFile` <br/>(Docker Compose File)|(Required) Path to the primary Docker Compose file to use. <br/>Default value: **/docker-compose.yml|
|`additionalDockerComposeFiles` <br/>(Additional Docker Compose Files)|(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.|
|`dockerComposeFileArgs` <br/>(Environment Variables)|(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line.|
|`projectName` <br/>(Project Name)|(Optional) Project name used for default naming of images and containers. <br/>Default value: $(Build.Repository.Name)|
|`qualifyImageNames` <br/>(Qualify Image Names)|(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified. <br/>Default value: true|
|`action` <br/>(Action)|(Required) Select a Docker Compose action. <br/>Default value: Run a Docker Compose command|
|`removeBuildOptions` <br/>(Remove Build Options)|(Optional) Remove the build options from the output Docker Compose file. <br/>Default value: false|
|`baseResolveDirectory` <br/>(Base Resolve Directory)|(Optional) The base directory from which relative paths in the output Docker Compose file should be resolved.|
|`outputDockerComposeFile` <br/>(Output Docker Compose File)|(Required) Path to an output Docker Compose file. <br/>Default value: $(Build.StagingDirectory)/docker-compose.yml|

This YAML example locks services:

```YAML
- task: DockerCompose@0
  displayName: Lock services
  inputs:
    action: Lock services
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
    dockerComposeFile: docker-compose.yml
    projectName: $(Build.Repository.Name)
    qualifyImageNames: true
    outputDockerComposeFile: $(Build.StagingDirectory)/docker-compose.yml
```

## Write service image digests

|Parameters|Description|
|--- |--- |
|`dockerComposeFile` <br/>(Docker Compose File)|(Required) Path to the primary Docker Compose file to use. <br/>Default value: **/docker-compose.yml|
|`additionalDockerComposeFiles` <br/>(Additional Docker Compose Files)|(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.|
|`dockerComposeFileArgs` <br/>(Environment Variables)|(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line.|
|`projectName` <br/>(Project Name)|(Optional) Project name used for default naming of images and containers. <br/>Default value: $(Build.Repository.Name)|
|`qualifyImageNames` <br/>(Qualify Image Names)|(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified. <br/>Default value: true|
|`action` <br/>(Action)|(Required) Select a Docker Compose action. <br/>Default value: Run a Docker Compose command|
|`imageDigestComposeFile` <br/>(Image Digest Compose File)|(Required) Path to a Docker Compose file that is created and populated with the full image repository digests of each service's Docker image. <br/>Default value: $(Build.StagingDirectory)/docker-compose.images.yml|

This YAML example writes service image digests:

```YAML
- task: DockerCompose@0
  displayName: Write service image digests
  inputs:
    action: Write service image digests
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
    dockerComposeFile: docker-compose.yml
    projectName: $(Build.Repository.Name)
    qualifyImageNames: true
    imageDigestComposeFile: $(Build.StagingDirectory)/docker-compose.images.yml 
```

## Combine configuration

|Parameters|Description|
|--- |--- |
|`dockerComposeFile` <br/>(Docker Compose File)|(Required) Path to the primary Docker Compose file to use. <br/>Default value: **/docker-compose.yml|
|`additionalDockerComposeFiles` <br/>(Additional Docker Compose Files)|(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.|
|`dockerComposeFileArgs` <br/>(Environment Variables)|(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line|
|`projectName` <br/>(Project Name)|(Optional) Project name used for default naming of images and containers. <br/>Default value: $(Build.Repository.Name)|
|`qualifyImageNames` <br/>(Qualify Image Names)|(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified. <br/>Default value: true|
|`action` <br/>(Action)|(Required) Select a Docker Compose action. <br/>Default value: Run a Docker Compose command|
|`removeBuildOptions` <br/>(Remove Build Options)|(Optional) Remove the build options from the output Docker Compose file. <br/>Default value: false|
|`baseResolveDirectory` <br/>(Base Resolve Directory)|(Optional) The base directory from which relative paths in the output Docker Compose file should be resolved.|
|`outputDockerComposeFile` <br/>(Output Docker Compose File)|(Required) Path to an output Docker Compose file. <br/>Default value: $(Build.StagingDirectory)/docker-compose.yml|

This YAML example combines configurations:

```YAML
- task: DockerCompose@0
  displayName: Combine configuration
  inputs:
    action: Combine configuration
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
    dockerComposeFile: docker-compose.yml
    additionalDockerComposeFiles: docker-compose.override.yml
    projectName: $(Build.Repository.Name)
    qualifyImageNames: true
    outputDockerComposeFile: $(Build.StagingDirectory)/docker-compose.yml
```
## Run a Docker Compose command

|Parameters|Description|
|--- |--- |
|`dockerComposeFile`(Docker Compose File)|(Required) Path to the primary Docker Compose file to use. <br/>Default value: **/docker-compose.yml|
|`additionalDockerComposeFiles` <br/>(Additional Docker Compose Files)|(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.|
|`dockerComposeFileArgs` <br/>(Environment Variables)|(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line.|
|`projectName` <br/>(Project Name)|(Optional) Project name used for default naming of images and containers. <br/>Default value: $(Build.Repository.Name)|
|`qualifyImageNames` <br/>(Qualify Image Names)|(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified. <br/>Default value: true|
|`action` <br/>(Action)|(Required) Select a Docker Compose action. <br/>Default value: Run a Docker Compose command|
|`dockerComposeCommand` <br/>(Command)|(Required) Docker Compose command to execute with the help of arguments. For example, rm to remove all stopped service containers.|

This YAML example runs a docker Compose command:

```YAML
- task: DockerCompose@0
  displayName: Run a Docker Compose command
  inputs:
    action: Run a Docker Compose command
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
    dockerComposeFile: docker-compose.yml 
    projectName: $(Build.Repository.Name)
    qualifyImageNames: true
    dockerComposeCommand: rm
```

::: moniker-end

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
