---
title: Docker Compose task
ms.custom: seodec18
description: Build, push or run multi-container Docker applications. Task can be used with Docker or Azure Container registry.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 6975E2D1-96D3-4AFC-8A41-498B5D34EA19
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'azdevops'
---

# Docker Compose task

**Azure Pipelines**

Use this task in a build or release pipeline to build, push or run multi-container Docker applications. This task can be used with Docker or Azure Container registry.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/DockerComposeV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Container Registry Type</td><td>(Required) Select a Container Registry Type.</td></tr>
<tr><td>Docker Registry Connection</td><td>(Optional) Select a Docker registry connection. Required for commands that need to authenticate with a registry.</td></tr>
<tr><td>Azure subscription</td><td>(Optional) Select an Azure subscription</td></tr>
<tr><td>Azure Container Registry</td><td>(Optional) Select an Azure Container Registry</td></tr>
<tr><td>Docker Compose File</td><td>(Required) Path to the primary Docker Compose file to use.</td></tr>
<tr><td>Additional Docker Compose Files</td><td>(Optional) Additional Docker Compose files to be combined with the primary Docker Compose file. Relative paths are resolved relative to the directory containing the primary Docker Compose file. If a specified file is not found, it is ignored. Specify each file path on a new line.</td></tr>
<tr><td>Environment Variables</td><td>(Optional) Environment variables to be set during the command. Specify each name=value pair on a new line.</td></tr>
<tr><td>Project Name</td><td>(Optional) Project name used for default naming of images and containers.</td></tr>
<tr><td>Qualify Image Names</td><td>(Optional) Qualify image names for built services with the Docker registry connection's hostname if not otherwise specified.</td></tr>
<tr><td>Action</td><td>(Required) Select a Docker Compose action.</td></tr>
<tr><td>Additional Image Tags</td><td>(Optional) Additional tags for the Docker images being built or pushed.</td></tr>
<tr><td>Include Source Tags</td><td>(Optional) Include Git tags when building or pushing Docker images.</td></tr>
<tr><td>Include Latest Tag</td><td>(Optional) Include the 'latest' tag when building or pushing Docker images.</td></tr>
<tr><td>Build Images</td><td>(Optional) Build images before starting service containers.</td></tr>
<tr><td>Service Name</td><td>(Required) Name of the specific service to run.</td></tr>
<tr><td>Container Name</td><td>(Optional) Name of the specific service container to run.</td></tr>
<tr><td>Ports</td><td>(Optional) Ports in the specific service container to publish to the host. Specify each host-port:container-port binding on a new line.</td></tr>
<tr><td>Working Directory</td><td>(Optional) The working directory for the specific service container.</td></tr>
<tr><td>Entrypoint Override</td><td>(Optional) Override the default entry point for the specific service container.</td></tr>
<tr><td>Command</td><td>(Optional) Command to run in the specific service container. For example, if the image contains a simple Python Flask web application you can specify 'python app.py' to launch the web application.</td></tr>
<tr><td>Run In Background</td><td>(Optional) Run the service containers in the background.</td></tr>
<tr><td>Abort on Container Exit</td><td>(Optional) Stop all containers when any container exits.</td></tr>
<tr><td>Image Digest Compose File</td><td>(Required) Path to a Docker Compose file that is created and populated with the full image repository digests of each service's Docker image.</td></tr>
<tr><td>Remove Build Options</td><td>(Optional) Remove the build options from the output Docker Compose file.</td></tr>
<tr><td>Base Resolve Directory</td><td>(Optional) The base directory from which relative paths in the output Docker Compose file should be resolved.</td></tr>
<tr><td>Output Docker Compose File</td><td>(Required) Path to an output Docker Compose file.</td></tr>
<tr><td>Command</td><td>(Required) Docker Compose command to execute with arguments. For example, 'rm --all' to remove all stopped service containers.</td></tr>
<tr><td>Docker Host Connection</td><td>(Optional) Select a Docker host connection. Defaults to the agent's host.</td></tr>
<tr><td>No-op if no Docker Compose File</td><td>(Optional) If the Docker Compose file does not exist, skip this step. This is useful when the step offers optional behavior based on the existence of a Docker Compose file in the repository.</td></tr>
<tr><td>Require Additional Docker Compose Files</td><td>(Optional) Produces an error if the additional Docker Compose files do not exist. This overrides the default behavior which is to ignore a file if it does not exist.</td></tr>
<tr><td>Working Directory</td><td>(Optional) Working directory for the Docker Compose command.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
