---
title: Docker Compose task
description: Build, push or run multi-container Docker applications. Task can be used with Docker or Azure Container registry.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 6975E2D1-96D3-4AFC-8A41-498B5D34EA19
ms.manager: shasb
ms.author: shasb
ms.date: 02/12/2019
monikerRange: '> tfs-2018'
---

# Docker Compose task

**Azure Pipelines**

Use this task in a build or release pipeline to build, push or run multi-container Docker applications.
This task can be used with a Docker registry or an Azure Container Registry.

See also [Docker Installer task](../tool/docker-installer.md) and [Content Trust for build and push](../../build/content-trust.md).

::: moniker range="> tfs-2018"

## Container registry types

### Azure Container Registry

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>containerregistrytype</code><br/>(Container registry type)</td><td>(Optional) <b>Azure Container Registry</b> if using ACR or <b>Container Registry</b> if using any other container registry.<br/>Default value: Azure Container Registry</td></tr>
<tr><td><code>azureSubscriptionEndpoint</code><br/>(Azure subscription)</td><td>(Required) Name of the Azure Service Connection. See [Azure Resource Manager service connection](../../library/connect-to-azure.md) to manually set up the connection.</td></tr>
<tr><td><code>azureContainerRegistry</code><br/>(Azure container registry)</td><td>(Required) Name of the Azure Container Registry.</td></tr>
</table>

This YAML example specifies the inputs for Azure Container Registry:

```YAML
variables:
    azureContainerRegistry: Contoso
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

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>containerregistrytype</code><br/>(Container registry type)</td><td>(Required) <b>Azure Container Registry</b> if using ACR or <b>Container Registry</b> if using any other container registry.<br/>Default value: Azure Container Registry</td></tr>
<tr><td><code>dockerRegistryEndpoint</code><br/>(Docker registry service connection)</td><td>(Required) [Docker registry service connection](../../library/service-endpoints.md).</td></tr>
</table>

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

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>containerregistrytype</code><br/>(Container Registry Type)</td><td>(Required) <b>Azure Container Registry</b> if using ACR or <b>Container Registry</b> if using any other container registry.<br/>Default value: Azure Container Registry</td></tr>
<tr><td><code>azureSubscription</br>Endpoint</code><br/>(Azure subscription)</td><td>(Required) Name of the Azure Service Connection.</td></tr>
<tr><td><code>azureContainerRegistry</code><br/>(Azure Container Registry)</td><td>(Required) Name of the Azure Container Registry.</td></tr>
<tr><td><code>dockerComposeFile</code><br/>(Docker Compose File)</td><td>(Required) Path to the primary Docker Compose file to use.<br/>Default value: **/docker-compose.yml</td></tr>
<tr><td><code>additionalDocker</br>ComposeFiles</code><br/>(Additional Docker Compose Files)</td><td>(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.</td></tr>
<tr><td><code>dockerCompose</br>FileArgs</code><br/>(Environment Variables)</td><td>(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line.</td></tr>
<tr><td><code>projectName</code><br/>(Project Name)</td><td>(Optional) Project name used for default naming of images and containers.<br/>Default value: $(Build.Repository.Name)</td></tr>
<tr><td><code>qualifyImage</br>Names</code><br/>(Qualify Image Names)</td><td>(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified.<br/>Default value: true</td></tr>
<tr><td><code>action</code><br/>(Action)</td><td>(Required) Select a Docker Compose action.<br/>Default value: Run a Docker Compose command</td></tr>
<tr><td><code>additionalImage</br>Tags</code><br/>(Additional Image Tags)</td><td>(Optional) Additional tags for the Docker images being built or pushed.</td></tr>
<tr><td><code>includeSourceTags</code><br/>(Include Source Tags)</td><td>(Optional) Include Git tags when building or pushing Docker images.<br/>Default value: false</td></tr>
<tr><td><code>includeLatestTag</code><br/>(Include Latest Tag)</td><td>(Optional) Include the <b>latest</b> tag when building or pushing Docker images.<br/>Default value: false</td></tr>
</table>

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
```

## Push service images

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>containerregistrytype</code><br/>(Container Registry Type)</td><td>(Required) <b>Azure Container Registry</b> if using ACR or <b>Container Registry</b> if using any other container registry.<br/>Default value: Azure Container Registry</td></tr>
<tr><td><code>azureSubscription</br>Endpoint</code><br/>(Azure subscription)</td><td>(Required) Name of the Azure Service Connection.</td></tr>
<tr><td><code>azureContainerRegistry</code><br/>(Azure Container Registry)</td><td>(Required) Name of the Azure Container Registry.</td></tr>
<tr><td><code>dockerComposeFile</code><br/>(Docker Compose File)</td><td>(Required) Path to the primary Docker Compose file to use.<br/>Default value: **/docker-compose.yml</td></tr>
<tr><td><code>additionalDocker</br>ComposeFiles</code><br/>(Additional Docker Compose Files)</td><td>(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.</td></tr>
<tr><td><code>dockerCompose</br>FileArgs</code><br/>(Environment Variables)</td><td>(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line.</td></tr>
<tr><td><code>projectName</code><br/>(Project Name)</td><td>(Optional) Project name used for default naming of images and containers.<br/>Default value: $(Build.Repository.Name)</td></tr>
<tr><td><code>qualifyImage</br>Names</code><br/>(Qualify Image Names)</td><td>(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified.<br/>Default value: true</td></tr>
<tr><td><code>action</code><br/>(Action)</td><td>(Required) Select a Docker Compose action.<br/>Default value: Run a Docker Compose command</td></tr>
<tr><td><code>additionalImage</br>Tags</code><br/>(Additional Image Tags)</td><td>(Optional) Additional tags for the Docker images being built or pushed.</td></tr>
<tr><td><code>includeSourceTags</code><br/>(Include Source Tags)</td><td>(Optional) Include Git tags when building or pushing Docker images.<br/>Default value: false</td></tr>
<tr><td><code>includeLatestTag</code><br/>(Include Latest Tag)</td><td>(Optional) Include the <b>latest</b> tag when building or pushing Docker images.<br/>Default value: false</td></tr>
</table>

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

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>dockerComposeFile</code><br/>(Docker Compose File)</td><td>(Required) Path to the primary Docker Compose file to use.<br/>Default value: **/docker-compose.yml</td></tr>
<tr><td><code>additionalDocker</br>ComposeFiles</code><br/>(Additional Docker Compose Files)</td><td>(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.</td></tr>
<tr><td><code>dockerCompose</br>FileArgs</code><br/>(Environment Variables)</td><td>(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line.</td></tr>
<tr><td><code>projectName</code><br/>(Project Name)</td><td>(Optional) Project name used for default naming of images and containers.<br/>Default value: $(Build.Repository.Name)</td></tr>
<tr><td><code>qualifyImage</br>Names</code><br/>(Qualify Image Names)</td><td>(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified.<br/>Default value: true</td></tr>
<tr><td><code>action</code><br/>(Action)</td><td>(Required) Select a Docker Compose action.<br/>Default value: Run a Docker Compose command</td></tr>
<tr><td><code>buildImages</code><br/>(Build Images)</td><td>(Optional) Build images before starting service containers.<br/>Default value: true</td></tr>
<tr><td><code>detached</code><br/>(Run in Background)</td><td>(Optional) Run the service containers in the background.<br/>Default value: true</td></tr>
</table>

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

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>dockerComposeFile</code><br/>(Docker Compose File)</td><td>(Required) Path to the primary Docker Compose file to use.<br/>Default value: **/docker-compose.yml</td></tr>
<tr><td><code>additionalDocker</br>ComposeFiles</code><br/>(Additional Docker Compose Files)</td><td>(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.</td></tr>
<tr><td><code>dockerCompose</br>FileArgs</code><br/>(Environment Variables)</td><td>(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line.</td></tr>
<tr><td><code>projectName</code><br/>(Project Name)</td><td>(Optional) Project name used for default naming of images and containers.<br/>Default value: $(Build.Repository.Name)</td></tr>
<tr><td><code>qualifyImage</br>Names</code><br/>(Qualify Image Names)</td><td>(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified.<br/>Default value: true</td></tr>
<tr><td><code>action</code><br/>(Action)</td><td>(Required) Select a Docker Compose action.<br/>Default value: Run a Docker Compose command</td></tr>
<tr><td><code>serviceName</code><br/>(Service Name)</td><td>(Required) Name of the specific service to run.</td></tr>
<tr><td><code>containerName</code><br/>(Container Name)</td><td>(Optional) Name of the specific service container to run.</td></tr>
<tr><td><code>ports</code><br/>(Ports)</td><td>(Optional) Ports in the specific service container to publish to the host. Specify each host-port:container-port binding on a new line.</td></tr>
<tr><td><code>workDir</code><br/>(Working Directory)</td><td>(Optional) The working directory for the specific service container.</td></tr>
<tr><td><code>entrypoint</code><br/>(Entry Point Override)</td><td>(Optional) Override the default entry point for the specific service container.</td></tr>
<tr><td><code>containerCommand</code><br/>(Command)</td><td>(Optional) Command to run in the specific service container. For example, if the image contains a simple Python Flask web application you can specify <b>python app.py</b> to launch the web application.</td></tr>
<tr><td><code>detached</code><br/>(Run in Background)</td><td>(Optional) Run the service containers in the background.<br/>Default value: true</td></tr>
</table>

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
    ports: 80
    detached: true
```

## Lock service images

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>dockerComposeFile</code><br/>(Docker Compose File)</td><td>(Required) Path to the primary Docker Compose file to use.<br/>Default value: **/docker-compose.yml</td></tr>
<tr><td><code>additionalDocker</br>ComposeFiles</code><br/>(Additional Docker Compose Files)</td><td>(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.</td></tr>
<tr><td><code>dockerCompose</br>FileArgs</code><br/>(Environment Variables)</td><td>(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line.</td></tr>
<tr><td><code>projectName</code><br/>(Project Name)</td><td>(Optional) Project name used for default naming of images and containers.<br/>Default value: $(Build.Repository.Name)</td></tr>
<tr><td><code>qualifyImage</br>Names</code><br/>(Qualify Image Names)</td><td>(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified.<br/>Default value: true</td></tr>
<tr><td><code>action</code><br/>(Action)</td><td>(Required) Select a Docker Compose action.<br/>Default value: Run a Docker Compose command</td></tr>
<tr><td><code>removeBuildOptions</code><br/>(Remove Build Options)</td><td>(Optional) Remove the build options from the output Docker Compose file.<br/>Default value: false</td></tr>
<tr><td><code>baseResolveDirectory</code><br/>(Base Resolve Directory)</td><td>(Optional) The base directory from which relative paths in the output Docker Compose file should be resolved.</td></tr>
<tr><td><code>outputDocker</br>ComposeFile</code><br/>(Output Docker Compose File)</td><td>(Required) Path to an output Docker Compose file.<br/>Default value: $(Build.StagingDirectory)/docker-compose.yml</td></tr>
</table>

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

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>dockerComposeFile</code><br/>(Docker Compose File)</td><td>(Required) Path to the primary Docker Compose file to use.<br/>Default value: **/docker-compose.yml</td></tr>
<tr><td><code>additionalDocker</br>ComposeFiles</code><br/>(Additional Docker Compose Files)</td><td>(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.</td></tr>
<tr><td><code>dockerCompose</br>FileArgs</code><br/>(Environment Variables)</td><td>(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line.</td></tr>
<tr><td><code>projectName</code><br/>(Project Name)</td><td>(Optional) Project name used for default naming of images and containers.<br/>Default value: $(Build.Repository.Name)</td></tr>
<tr><td><code>qualifyImage</br>Names</code><br/>(Qualify Image Names)</td><td>(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified.<br/>Default value: true</td></tr>
<tr><td><code>action</code><br/>(Action)</td><td>(Required) Select a Docker Compose action.<br/>Default value: Run a Docker Compose command</td></tr>
<tr><td><code>imageDigest</br>ComposeFile</code><br/>(Image Digest Compose File)</td><td>(Required) Path to a Docker Compose file that is created and populated with the full image repository digests of each service's Docker image.<br/>Default value: $(Build.StagingDirectory)/docker-compose.images.yml</td></tr>
</table>

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

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>dockerComposeFile</code><br/>(Docker Compose File)</td><td>(Required) Path to the primary Docker Compose file to use.<br/>Default value: **/docker-compose.yml</td></tr>
<tr><td><code>additionalDocker</br>ComposeFiles</code><br/>(Additional Docker Compose Files)</td><td>(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.</td></tr>
<tr><td><code>dockerCompose</br>FileArgs</code><br/>(Environment Variables)</td><td>(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line</td></tr>
<tr><td><code>projectName</code><br/>(Project Name)</td><td>(Optional) Project name used for default naming of images and containers.<br/>Default value: $(Build.Repository.Name)</td></tr>
<tr><td><code>qualifyImage</br>Names</code><br/>(Qualify Image Names)</td><td>(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified.<br/>Default value: true</td></tr>
<tr><td><code>action</code><br/>(Action)</td><td>(Required) Select a Docker Compose action.<br/>Default value: Run a Docker Compose command</td></tr>
<tr><td><code>removeBuildOptions</code><br/>(Remove Build Options)</td><td>(Optional) Remove the build options from the output Docker Compose file.<br/>Default value: false</td></tr>
<tr><td><code>baseResolveDirectory</code><br/>(Base Resolve Directory)</td><td>(Optional) The base directory from which relative paths in the output Docker Compose file should be resolved.</td></tr>
<tr><td><code>outputDocker</br>ComposeFile</code><br/>(Output Docker Compose File)</td><td>(Required) Path to an output Docker Compose file.<br/>Default value: $(Build.StagingDirectory)/docker-compose.yml</td></tr>
</table>

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

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>dockerComposeFile</code><br/>(Docker Compose File)</td><td>(Required) Path to the primary Docker Compose file to use.<br/>Default value: **/docker-compose.yml</td></tr>
<tr><td><code>additionalDocker</br>ComposeFiles</code><br/>(Additional Docker Compose Files)</td><td>(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.</td></tr>
<tr><td><code>dockerCompose</br>FileArgs</code><br/>(Environment Variables)</td><td>(Optional) Environment variables to be set up during the command. Specify each name=value pair on a new line.</td></tr>
<tr><td><code>projectName</code><br/>(Project Name)</td><td>(Optional) Project name used for default naming of images and containers.<br/>Default value: $(Build.Repository.Name)</td></tr>
<tr><td><code>qualifyImage</br>Names</code><br/>(Qualify Image Names)</td><td>(Optional) Qualify image names for built services with the Docker registry service connection's hostname if not otherwise specified.<br/>Default value: true</td></tr>
<tr><td><code>action</code><br/>(Action)</td><td>(Required) Select a Docker Compose action.<br/>Default value: Run a Docker Compose command</td></tr>
<tr><td><code>docker</br>ComposeCommand</code><br/>(Command)</td><td>(Required) Docker Compose command to execute with the help of arguments. For example, <b>rm</b> to remove all stopped service containers.</td>
</table>

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

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
