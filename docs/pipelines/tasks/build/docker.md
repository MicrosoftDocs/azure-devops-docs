---
title: Docker task
description: Build, tag, push, or run Docker images, or run a Docker command. Task can be used with Docker or Azure Container Registry.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: E28912F1-0114-4464-802A-A3A35437FD16
ms.manager: shasb
ms.author: shasb
ms.date: 02/12/2019
monikerRange: '> tfs-2018'
---

# Docker task

[!INCLUDE [version-tfs-2018](../../_shared/version-tfs-2018.md)]

Use this task in a build or release pipeline to build, tag, push, or run Docker images, or to run a Docker command.

The built-in Docker task enables you to build Docker images, push Docker images to an authenticated Docker registry,
run Docker images, or execute other operations offered by the Docker CLI:

* **Use Docker best practices**: Usage of pre-defined build variables with Docker task allows for building and pushing an image tagged with `$(Build.BuildId)`. The task also adds rich metadata about the source repository, commit, and build information to the image as labels.
* **Conform to Docker standards**: The task takes care of qualifying the image name with the registry hostname and port image. It helps conform to Docker naming conventions by performing minor fixes such as converting upper case characters to lower case and removing spaces in image names that could occur as a result of using `$(Build.Repository.Name)` for naming images.
* **Manage secrets**: The task makes it easy to use either a **Docker registry service connection** for connecting to any private container registry or an **Azure Service Connection** for connecting to ACR. For example, in the case of ACR, you don't need to enable **admin user** and manage the username and password as secrets. The task will use the Azure Service Connection to sign into ACR.
After you have used the Docker task to sign in, the session is maintained for the duration of the job, allowing you to use follow-up tasks to execute any scripts by leveraging the login by the Docker task. 
For example, you can use the Docker task to sign into ACR and then use a subsequent script to pull an image and scan the container image for vulnerabilities.

See also [Docker Installer task](../tool/docker-installer.md) and [Content Trust for build and push](../../build/content-trust.md).

::: moniker range="> tfs-2018"

## Login command

### Azure Container Registry

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>Command</td><td>(Required) Use the value <b>login</b> when running the task.<br/>Default value: build</td></tr>
<tr><td><code>containerregistrytype</code><br/>Container registry type</td><td>(Optional) <b>Azure Container Registry</b> if using ACR or <b>Container Registry</b> if using any other container registry.<br/>Default value: Azure Container Registry</td></tr>
<tr><td><code>azureSubscriptionEndpoint</code><br/>Azure subscription</td><td>(Required) Name of the Azure Service Connection. See [Azure Resource Manager service connection](../../library/connect-to-azure.md) to manually set up the connection.</td></tr>
<tr><td><code>azureContainerRegistry</code><br/>Azure container registry</td><td>(Required) Name of the Azure Container Registry.</td></tr>
</table>

This YAML example demonstrates logging into Azure Container Registry:

```YAML
variables:
    azureSubscriptionEndpoint: Contoso
    azureContainerRegistry: contoso.azurecr.io
steps:
- task: Docker@1
  displayName: Container registry login
  inputs:
    command: login
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
```

### Other container registries

The **containerregistrytype** input is required when using any container registry other than ACR. Use **containerregistrytype: Container Registry** in this case.

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>Command</td><td>(Required) Use the value <b>login</b> when running the task.<br/>Default value: build</td></tr>
<tr><td><code>containerregistrytype</code><br/>Container registry type</td><td>(Required) <b>Azure Container Registry</b> if using ACR or <b>Container Registry</b> if using any other container registry.<br/>Default value: Azure Container Registry</td></tr>
<tr><td><code>dockerRegistryEndpoint</code><br/>Docker registry service connection</td><td>(Required) [Docker registry service connection](../../library/service-endpoints.md).</td></tr>
</table>

This YAML example demonstrates logging into a container registry other than ACR. **Contoso** is the name of the Docker registry service connection:

```YAML
- task: Docker@1
  displayName: Container registry login
  inputs:
    command: login
    containerregistrytype: Container Registry
    dockerRegistryEndpoint: Contoso
```

## Build command

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>Command</td><td>(Optional) Use the value <b>build</b> when running the task.<br/>Default value: build</td></tr>
<tr><td><code>dockerFile</code><br/>Dockerfile</td><td>(Required) Path to the Docker file.</td></tr>
<tr><td><code>imageName</code><br/>Image name</td><td>(Required) Name of the docker image to be built.<br/>Default value: $(Build.Repository.Name):$(Build.BuildId)</td></tr>
<tr><td><code>qualifyImageName</code><br/>Qualify image name</td><td>(Optional) Qualify the image name with the Docker registry connection's hostname if not otherwise specified.<br/>Default value: true</td></tr>
<tr><td><code>useDefaultContext</code><br/>Use default build context</td><td>(Optional) Accepts boolean values. If true, sets the build context to the directory containing Dockerfile.<br/>Default value: true</td></tr>
<tr><td><code>buildContext</code><br/>Build context</td><td>(Required if useDefaultContext == false) Path to the buildContext.</td></tr>
<tr><td><code>includeSourceTags</code><br/>Include source tags</td><td>(Optional) Include Git tags when building the image.<br/>Default value: false</td></tr>
<tr><td><code>includeLatestTag</code><br/>Include latest tag</td><td>(Optional) Include the <b>latest</b> tag when building the Docker image.<br/>Default value: false</td></tr>
<tr><td><code>addDefaultLabels</code><br/>Add default labels</td><td>(Optional) Add metadata such as repository, commit, and build information to the container image by using Docker labels.<br/>Default value: true</td></tr>
<tr><td><code>arguments</code><br/>Arguments</td><td>(Optional) Additional arguments to be passed to the Docker CLI.</td></tr>
</table>

This YAML example builds an image with the image name qualified using the container registry hostname as specified in the inputs associated with Azure Container Registry:
builds an image with the image name qualified using the container registry hostname as specified in the inputs associated with Azure Container Registry:


```YAML
- task: Docker@1
  displayName: Build image
  inputs:
    command: build
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
    dockerFile: Dockerfile
    imageName: $(Build.Repository.Name)

```

## Tag command

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>Command</td><td>(Required) Use the value <b>tag</b> when running the task.<br/>Default value: build</td></tr>
<tr><td><code>tagMultipleImages</code><br/>Tag multiple images</td><td>(Optional) Tag multiple images by using a text file that contains the names of the Docker images to tag.<br/>Default value: false</td></tr>
<tr><td><code>imageName</code><br/>Image name</td><td>(Required if tagMultipleImages == false or if tagMultipleImages is not specified) Name of the docker image to be tagged.<br/>Default value: $(Build.Repository.Name):$(Build.BuildId)</td></tr>
<tr><td><code>arguments</code><br/>Arguments</td><td>(Optional) Tags that must be applied to the image.</td></tr>
<tr><td><code>imageNamesPath</code><br/>Image names path</td><td>(Required only if tagMultipleImages == true) Points to a text file where each image name is contained on its own line. For example: 
<ul><li>Imagename1:tag1</li><li>Imagename2:tag2</li><li>Imagename3</li></ul>
If only the image name is provided, that image will be tagged as <b>latest</b>.
</td></tr>
<tr><td><code>qualifyImageName</code><br/>Qualify image name</td><td>(Optional) Qualify the image name with the Docker registry service connection's hostname if not otherwise specified.<br/>Default value: true</td></tr>
<tr><td><code>includeSourceTags</code><br/>Include source tags</td><td>(Optional) Include Git tags when tagging the image.<br/>Default value: false</td></tr>
</table>

This YAML example tags the image:

```YAML
- task: Docker@1
  displayName: Tag image
  inputs:
    command: tag
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
    imageName: $(azureContainerRegistry)/$(Build.Repository.Name):latest
    arguments: $(azureContainerRegistry)/$(Build.Repository.Name):$(Build.BuildId)
    
```

## Push command

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>Command</td><td>(Required) Use the value <b>push</b> when running the task.<br/>Default value: build</td></tr>
<tr><td><code>pushMultipleImages</code><br/>Push multiple images</td><td>(Optional) Push multiple images by using a text file that contains the names of the Docker images to push.<br/>Default value: false</td></tr>
<tr><td><code>imageName</code><br/>Image name</td><td>(Required if pushMultipleImages == false or if pushMultipleImages is not specified) Name of the docker image to be pushed.<br/>Default value: $(Build.Repository.Name):$(Build.BuildId)</td></tr>
<tr><td><code>imageNamesPath</code><br/>Image names path</td><td>(Required only if pushMultipleImages == true) Points to a text file where each image name is contained on its own line. For example: 
<ul><li>Imagename1:tag1</li><li>Imagename2:tag2</li><li>Imagename3</li></ul>
If only the image name is provided, all tags of the image will be pushed.
</td></tr>
<tr><td><code>qualifyImageName</code><br/>Qualify image name</td><td>(Optional) Qualify the image name with the Docker registry service connection's hostname if not otherwise specified.<br/>Default value: true</td></tr>
<tr><td><code>arguments</code><br/>Arguments</td><td>(Optional) Additional arguments to be passed to the Docker CLI.</td></tr>
<tr><td><code>includeSourceTags</code><br/>Include source tags</td><td>(Optional) Include Git tags when pushing the image.<br/>Default value: false</td></tr>
<tr><td><code>imageDigestFile</code><br/>Image digest file</td><td>(Optional) Path to a file that is created and populated with the full image repository digest of the Docker image that was pushed.</td></tr>
</table>

This YAML example pushes an image to a container registry:

```YAML
- task: Docker@1
  displayName: Push image
  inputs:
    command: push
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
    imageName: $(Build.Repository.Name):$(Build.BuildId)
    
```

## Run command

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>Command</td><td>(Required) Use the value <b>run</b> when running the task.<br/>Default value: build</td></tr>
<tr><td><code>imageName</code><br/>Image name</td><td>(Required) Name of the docker image to run.<br/>Default value: $(Build.Repository.Name):$(Build.BuildId)</td></tr>
<tr><td><code>qualifyImageName</code><br/>Qualify image name</td><td>(Optional) Qualify the image name with the Docker registry service connection's hostname if not otherwise specified.<br/>Default value: true</td></tr>
<tr><td><code>containerName</code><br/>Container name</td><td>(Optional) Name of the Docker container to run.</td></tr>
<tr><td><code>ports</code><br/>Ports</td><td>(Optional) Ports in the Docker container to publish to the host. Specify each host-port:container-port binding on a new line.</td></tr>
<tr><td><code>volumes</code><br/>Volumes</td><td>(Optional) Volumes to mount from the host. Specify each host-dir:container-dir on a new line.</td></tr>
<tr><td><code>envVars</code><br/>Environment variables</td><td>(Optional) Environment variables for the Docker container. Specify each name-value pair on a new line.</td></tr>
<tr><td><code>workingDirectory</code><br/>Working directory</td><td>(Optional) Working directory for the Docker container.</td></tr>
<tr><td><code>entrypointOverride</code><br/>Entry point override</td><td>(Optional) Overrides the default entry point for the Docker container.</td></tr>
<tr><td><code>containerCommand</code><br/>Container command</td><td>(Optional) The Docker run command first creates a writeable container layer over the specified image, and then starts it by using the specified run command. For example, if the image contains a simple Python Flask web application you can specify <b>python app.py</b> to launch the web application.</td></tr>
<tr><td><code>runInBackground</code><br/>Run in background</td><td>(Optional) Runs the Docker container in the background. Accepts Boolean values.<br/>Default value: true</td></tr>
<tr><td><code>restartPolicy</code><br/>Restart policy</td><td>(Required only when runInBackground == true) Acceptable values are <b>no</b>, <b>onFailure</b>, <b>always</b>, and <b>unlessStopped</b>.<br/>Default value: no</td></tr>
<tr><td><code>maxRestartRetries</code><br/>Maximum restart retries</td><td>(Required only when runInBackground == true and restartPolicy == onFailure) The maximum number of restart retries attempted by the Docker daemon.</td></tr>
</table>

This YAML example executes the **run** command:

```YAML
- task: Docker@1
  displayName: Run image
  inputs:
    command: run
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
    imageName: $(Build.Repository.Name):$(Build.BuildId)

```

## Logout command

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>Command</td><td>(Required) Use the value <b>logout</b> when running the task.<br/>Default value: build</td></tr>
</table>

This YAML example logs out of a container registry:

```YAML
- task: Docker@1
  displayName: Container registry logout
  inputs:
    command: logout
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: $(azureContainerRegistry)
```

## Advanced Options

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>dockerHostEndpoint</code><br/>Docker host service connection</td><td>(Optional) Select a Docker host connection. Defaults to the agent's host.</td></tr>
<tr><td><code>enforceDocker<br/>NamingConvention</code><br/>Force the image name to follow Docker naming conventions.</td><td>(Optional) If enabled, the Docker image name will be modified to follow Docker naming conventions. Converts upper case characters to lower case and removes spaces in the image name.<br/>Default value: true</td></tr>
<tr><td><code>memoryLimit</code><br/>Memory limit</td><td>(Optional) The maximum amount of memory available to the container as a integer with optional suffixes; for example, <b>2GB</b>.</td></tr>
</table>

::: moniker-end

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

