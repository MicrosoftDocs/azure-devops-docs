---
title: Docker
description: Build, tag, push, or run Docker images, or run a Docker command. Task can be used with Docker or Azure Container registry.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: E28912F1-0114-4464-802A-A3A35437FD16
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Build: Docker

![](_img/docker.png) Build, tag, push, or run Docker images, or run a Docker command. Task can be used with Docker or Azure Container registry.

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/Docker.0.md)]

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

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
