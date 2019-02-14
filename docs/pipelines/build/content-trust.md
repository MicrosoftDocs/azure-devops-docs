---
title: Content trust for build and push docker images in Azure Pipelines
description: Learn how to define a continuous integration (CI) build for your GitHub repository using Azure Pipelines
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: ECA8974E-CC1A-47B1-8C14-5BF5FCCDD256
ms.manager: shasb
ms.author: shasb
ms.date: 02/13/2019
monikerRange: '> tfs-2018'
---

# Content trust for build and push Docker images

[!INCLUDE [version](../_shared/version-team-services.md)]

When transferring data among networked systems, trust is a central concern.
In particular, when communicating over an untrusted medium such as the internet,
it is critical to ensure the integrity and validate the publisher of all the
data a system operates on. 

You can use the Docker engine to push and pull images (data)
to a public or private registry. Content trust gives you the ability to verify
both the integrity and the publisher of all the data received from a registry
over any channel.

To create root keys and repository keys, and grant image signing permissions
used later in the pipeline, follow the steps in
[Content trust in Azure Container Registry](https://docs.microsoft.com/azure/container-registry/container-registry-content-trust#how-content-trust-works).

In Azure DevOps, save the Docker content trust private key in the library
[secure files](../library/secure-files.md) section.

## Example

This example shows how you can use content trust when you build and push a Docker image:

```YAML
  pool:
    vmImage: 'Ubuntu 16.04'

  variables:
    TAGGING_KEY: private.key
    # The passphrase variable should be stored securely
    DOCKER_CONTENT_TRUST_REPOSITORY_PASSPHRASE: contoso@12345
    azureSubscriptionEndpoint: Contoso
    azureContainerRegistry: contoso.azurecr.io
  
  steps:
  - task: Docker@1
    displayName: login
    inputs:
        azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
        azureContainerRegistry: $(azureContainerRegistry)
        command: login

  - task: DownloadSecureFile@1
    displayName: Download secure file
    inputs:
        secureFile: adf03f18-455a-404d-bf38-46e8e3457b59

  - powershell:
    mkdir -p $(DOCKER_CONFIG)/trust;mkdir -p $(DOCKER_CONFIG)/trust/private
    cp $(AGENT.TEMPDIRECTORY)/$(TAGGING_KEY) $ (DOCKER_CONFIG)/trust/private
    displayName: PowerShell Script

  - task: Docker@1
    displayName: Build an image
    inputs:
        dockerFile: Dockerfile
        arguments: --disable-content-trust=false
        imageName: $(azureContainerRegistry)/dockercontenttrust
        qualifyImageName: false 

  - task: Docker@1
    displayName: Push an image
    inputs:
        command: Push an image
        arguments: --disable-content-trust=false
        imageName: $(azureContainerRegistry)/dockercontenttrust
    env:
        DOCKER_CONTENT_TRUST_REPOSITORY_PASSPHRASE: $(DOCKER_CONTENT_TRUST_REPOSITORY_PASSPHRASE)
```
