---
title: Docker Content Trust in Azure Pipelines
description: Use Azure Pipelines to sign and push trusted images to container registries
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: b66517e3-85de-4847-82f6-b1b0431d2915
ms.manager: jillfra
ms.author: shasb
author: shashankbarsin
ms.date: 08/28/2019
monikerRange: 'azure-devops'
---
# Docker Content Trust

[!INCLUDE [include](../../_shared/version-team-services.md)]

Docker Content Trust (DCT) provides the ability to use digital signatures for data sent to and received from remote Docker registries. These signatures allow client-side or runtime verification of the integrity and publisher of specific image tags.

> [!NOTE]
> A prerequisite for signing an image is a Docker Registry with a Notary server attached (Such as the [Docker Hub](https://docs.docker.com/engine/security/trust/content_trust/) or [Azure Container Registry](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-content-trust))

## Signing images in Azure Pipelines

### Pre-requisites on development machine

1. Use Docker trust's built in generator or manually [generate delegation key pair](https://docs.docker.com/engine/security/trust/trust_delegation/#using-docker-trust-to-generate-keys). If the built-in generator is used, the delegation private key is imported into the local Docker trust store. Else, the private key will need to be manually imported into the local Docker trust store
1. Using the public key generated from the step above, upload the first key to a delegation and [initiate the repository](https://docs.docker.com/engine/security/trust/trust_delegation/#initiating-the-repository)

### Set up pipeline for signing images

1. Fetch the delegation private key, which is present in the local Docker trust store of your development machine used earlier, and add the same as a [secure file](../../library/secure-files.md) in Pipelines
2. [Authorize this secure file](../../library/secure-files.md#secure-file-authorization) for use in all pipelines
3. Create a pipeline based on the following YAML snippet -

   ```YAML
   pool:
     vmImage: 'Ubuntu 16.04'

   variables:
     system.debug: true
     containerRegistryServiceConnection: serviceConnectionName
     imageRepository: foobar/content-trust
     tag: test
    
   steps:
   - task: Docker@2
     inputs:
       command: login
       containerRegistry: $(containerRegistryServiceConnection)
    
   - task: DownloadSecureFile@1
     name: privateKey
     inputs:
       secureFile: cc8f3c6f998bee63fefaaabc5a2202eab06867b83f491813326481f56a95466f.key
   - script: |
       mkdir -p $(DOCKER_CONFIG)/trust/private
       cp $(privateKey.secureFilePath) $(DOCKER_CONFIG)/trust/private
    
   - task: Docker@2
     inputs:
       command: build
       Dockerfile: '**/Dockerfile'
       containerRegistry: $(containerRegistryServiceConnection)
       repository: $(imageRepository)
       tags: |
         $(tag)
       arguments: '--disable-content-trust=false'
    
   - task: Docker@2
     inputs: 
       command: push
       containerRegistry: $(containerRegistryServiceConnection)
       repository: $(imageRepository)
       tags: |
         $(tag)
       arguments: '--disable-content-trust=false'
     env:
       DOCKER_CONTENT_TRUST_REPOSITORY_PASSPHRASE: $(DOCKER_CONTENT_TRUST_REPOSITORY_PASSPHRASE)
   ```
   > [!NOTE] 
   > In the above snippet, the variable `DOCKER_CONFIG` is set by the login action done by Docker task. It is recommended to setup `DOCKER_CONTENT_TRUST_REPOSITORY_PASSPHRASE` as a [secret variable](../../process/variables.md#secret-variables) for the pipeline as the alternative approach of using a pipeline variable in YAML would expose the passphrase in plaintext form.
