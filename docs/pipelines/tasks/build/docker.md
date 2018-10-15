---
title: Docker
titleSuffix: Azure Pipelines & TFS
description: Build, tag, push, or run Docker images, or run a Docker command. Task can be used with Docker or Azure Container registry.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: E28912F1-0114-4464-802A-A3A35437FD16
ms.manager: dastahel
ms.author: dastahel
ms.date: 09/22/2018
monikerRange: '> tfs-2018'
---

# Build: Docker

**Azure Pipelines | TFS 2018**

![](_img/docker.png) Build, tag, push, or run Docker images, or run a Docker command. Task can be used with Docker or Azure Container registry.

> [!NOTE]
> 
> For YAML pipelines, consider using script-based Docker commands as described in the [Docker guidance](../../languages/docker.md), and using this Docker task when working with container registries that require authentication.

The built-in Docker task enables you to build Docker images, push Docker images to an authenticated Docker registry,
run Docker images, or execute other operations offered by the Docker CLI:

* **Use Docker best practices**: By writing minimal yaml you can build and push an image which is tagged with '$(Build.BuildId)' and has rich metadata about the repository, commit, build information to the container image as Docker labels
* **Conform to Docker standards**: The task takes care of details like tagging image with the registry hostname and port image before pushing the image to a private registry like Azure Container Registry (ACR). It also helps you to follow Docker naming convention, for example, converting upper case character to lower case and removes spaces in 
  image name which can happen if you are using $(Build.Repository.Name) to name your images.
* **Manage secrets**: The task makes it easy to use either 'Docker registry service connection' for connecting to any private container registry or 'Azure Service Connection' For connecting to ACR. For example, in case of ACR you don't have to enable 'admin user' and manage username and password as secret. The task will use the Azure Service connection to login to ACR.
  Once you have used the Docker task to sign in, the session is maintained for the duration of the job thus allowing  you to use follow-up tasks to execute any scripts by leveraging the login done by the Docker task. 
  For example, You can use the Docker task to sign into ACR and then use a subsequent script to pull an image and scan the container image for vulnerabilities.

::: moniker range="> tfs-2018"
## YAML snippet
### Build Docker images
Build a Dockerfile into an image with a registry-qualified name and multiple tags such as the build ID, source branch name and Git tags:
```yaml
- task: Docker@1
  displayName: 'Build an image'
  inputs:
    azureSubscriptionEndpoint: 'ContosoAzureSubscription'
    azureContainerRegistry: contoso.azurecr.io
```
For other private container registries
```yaml
- task: Docker@1
  displayName: 'Build an image'
  inputs:
    containerregistrytype: 'Container Registry'
    dockerRegistryEndpoint: Contoso
```
'azureSubscriptionEndpoint' input is the name of Azure Service Connection. See [Azure Resource Manager service connection](../../library/connect-to-azure.md) to manually set up the connection.
'dockerRegistryEndpoint' input is the name of [Docker Registry service connection](../../library/service-endpoints.md).

This will result in a docker login to the container registry by using the service connection and then a docker build command will be used to build and tag the image. For example, a simplified version of the command run is:
> docker build -t contoso.azurecr.io/contoso-ci:11 .

By writing minimal yaml you can build and push an image which is tagged with '$(Build.BuildId)' and has rich metadata about the repository, commit, build information to the container image as Docker labels.
The task takes care of details like tagging image with the registry hostname and port image before pushing the image to a private registry like Azure Container Registry (ACR). It also helps you to follow Docker naming convention, for example, converting upper case character to lower case and removes spaces in 
image name which can happen if you are using $(Build.Repository.Name) to name your images.

### Push Docker images
Push Docker images with multiple tags to an authenticated Docker Registry and save the resulting repository image digest to a file:

```yaml
- task: Docker@1
  displayName: 'Push an image'
  inputs:
    azureSubscriptionEndpoint: 'ContosoAzureSubscription'
    azureContainerRegistry: contoso.azurecr.io
    command: 'push'
```
This will reult in a docker login to the container registry by using the service connection and then a docker push command will be used to push the image to the container registry. For example, a simplified version of the command run is:
> docker push contoso.azurecr.io/contoso-ci:11

### Build, tag and push container image
Here is an end to end sample yaml for building, tagging and pushing container image.
```yaml
- task: Docker@1
  displayName: 'Build an image'
  inputs:
    imageName: 'contoso.azurecr.io/repositoryname:$(Build.BuildId)'
- task: Docker@1
  displayName: Login
  inputs:
    azureSubscriptionEndpoint: 'ContosoAzureSubscription'
    azureContainerRegistry: contoso.azurecr.io
    command: login
- task: Docker@1
  displayName: 'Push an image'
  inputs:
    command: 'push'
    imageName: 'contoso.azurecr.io/repositoryname:$(Build.BuildId)'
```

### Login to a container registry and run scripts
Task makes it easy to use either 'Docker registry service connection' for connecting to any private container registry or 'Azure Service Connection' For connecting to ACR. For example, in the case of ACR you don't have to enable 'admin user' and manage username and password as secret. The task will use the Azure Service connection to login to ACR.
Once you have used the task to login, the session is maintained for the duration of the job thus allowing  you to use follow-up tasks to execute any scripts by leveraging the login done by the Docker task. 
For example, You can use the Docker task to sign into ACR and then use a subsequent script to pull an image and scan the container image for vulnerabilities.

```yaml
- task: Docker@1
  displayName: Login
  inputs:
    azureSubscriptionEndpoint: 'ContosoAzureSubscription'
    azureContainerRegistry: contoso.azurecr.io
    command: login
- bash: |
   # Write your commands here
   # Use the environment variables input below to pass secret variables to this script
   docker build -t contoso.azurecr.io/repositoryname:$(Build.BuildId) . # include other options to meet your needs
   docker push contoso.azurecr.io/repositoryname:$(Build.BuildId) 
   displayName: 'Build, tag and push image'
```

### Run Docker images
Perform isolated workloads inside a container by running a Docker image. A Docker image can also be run in the background with a specific restart policy.
```yaml
- task: Docker@1
  displayName: 'Push an image'
  inputs:
    azureSubscriptionEndpoint: 'ContosoAzureSubscription'
    azureContainerRegistry: contoso.azurecr.io
    command: 'run'
    containerName: contosocontainer
    ports: 8084
    volumes: '$(System.DefaultWorkingDirectory):/src'
    workingDirectory: /src
    containerCommand: 'npm install'
    restartPolicy: onFailure
```
This will result in a docker run command. For example: 
> docker run -d --restart no atul-aks:1382

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Container Registry Type</td><td>(Required) Select a Container Registry Type.</td></tr>
<tr><td>Docker Registry Connection</td><td>(Optional) Select a Docker registry connection. Required for commands that need to authenticate with a registry.</td></tr>
<tr><td>Azure subscription</td><td>(Optional) Select an Azure subscription</td></tr>
<tr><td>Azure Container Registry</td><td>(Optional) Select an Azure Container Registry</td></tr>
<tr><td>Action</td><td>(Required) Select a Docker action.</td></tr>
<tr><td>Docker File</td><td>(Required) Path to the Docker file to use. Must be within the Docker build context.</td></tr>
<tr><td>Build Arguments</td><td>(Optional) Build-time variables for the Docker file. Specify each name=value pair on a new line.</td></tr>
<tr><td>Use Default Build Context</td><td>(Optional) Set the build context to the directory that contains the Docker file.</td></tr>
<tr><td>Build Context</td><td>(Optional) Path to the build context.</td></tr>
<tr><td>Image Name</td><td>(Required) Name of the Docker image to build, push, or run.</td></tr>
<tr><td>Image Names Path</td><td>(Required) Path to a text file that contains the names of the Docker images to tag or push. Each image name is contained on its own line.</td></tr>
<tr><td>Qualify Image Name</td><td>(Optional) Qualify the image name with the Docker registry connection's hostname if not otherwise specified.</td></tr>
<tr><td>Additional Image Tags</td><td>(Optional) Additional tags for the Docker image being built or pushed.</td></tr>
<tr><td>Include Source Tags</td><td>(Optional) Include Git tags when building or pushing the Docker image.</td></tr>
<tr><td>Include Latest Tag</td><td>(Optional) Include the 'latest' tag when building or pushing the Docker image.</td></tr>
<tr><td>Image Digest File</td><td>(Optional) Path to a file that is created and populated with the full image repository digest of the Docker image that was pushed.</td></tr>
<tr><td>Container Name</td><td>(Optional) Name of the Docker container to run.</td></tr>
<tr><td>Ports</td><td>(Optional) Ports in the Docker container to publish to the host. Specify each host-port:container-port binding on a new line.</td></tr>
<tr><td>Volumes</td><td>(Optional) Volumes to mount from the host. Specify each host-dir:container-dir on a new line.</td></tr>
<tr><td>Environment Variables</td><td>(Optional) Environment variables for the Docker container. Specify each name=value pair on a new line.</td></tr>
<tr><td>Working Directory</td><td>(Optional) The working directory for the Docker container.</td></tr>
<tr><td>Entrypoint Override</td><td>(Optional) Override the default entrypoint for the Docker container.</td></tr>
<tr><td>Command</td><td>(Optional) Command to run in the Docker container. For example, if the image contains a simple Python Flask web application you can specify 'python app.py' to launch the web application.</td></tr>
<tr><td>Run In Background</td><td>(Optional) Run the Docker container in the background.</td></tr>
<tr><td>Restart Policy</td><td>(Required) Select a restart policy.</td></tr>
<tr><td>Maximum Restart Retries</td><td>(Optional) The maximum number of restart retries the Docker daemon attempts.</td></tr>
<tr><td>Command</td><td>(Required) Docker command to execute, with arguments. For example, 'rmi -f image-name' to force remove an image.</td></tr>
<tr><td>Docker Host Connection</td><td>(Optional) Select a Docker host connection. Defaults to the agent's host.</td></tr>
<tr><td>Force image name to follow Docker naming convention</td><td>(Optional) If enabled docker image name will be modified to follow Docker naming convention. Converts upper case character to lower case and removes spaces in image name.</td></tr>
<tr><td>Working Directory</td><td>(Optional) Working directory for the Docker command.</td></tr>
<tr><td>Memory limit</td><td>(Optional) The maximum amount of memory available to the container as a integer with optional suffixes like '2GB'.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
