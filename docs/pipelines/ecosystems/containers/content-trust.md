---
title: Docker Content Trust in Azure Pipelines
description: Use Azure Pipelines to sign and push trusted images to container registries
ms.topic: quickstart
ms.assetid: b66517e3-85de-4847-82f6-b1b0431d2915
ms.author: atulmal
author: azooinmyluggage
ms.date: 08/28/2019
monikerRange: 'azure-devops'
---
# Docker Content Trust

**Azure Pipelines**

Docker Content Trust (DCT) provides the ability to use digital signatures for data sent to and received from remote Docker registries. These signatures allow client-side or runtime verification of the integrity and publisher of specific image tags.

> [!NOTE]
> A prerequisite for signing an image is a Docker Registry with a Notary server attached (Such as the [Docker Hub](https://docs.docker.com/engine/security/trust/content_trust/) or [Azure Container Registry](/azure/container-registry/container-registry-content-trust))

## Signing images in Azure Pipelines

### Prerequisites on development machine

1. Use Docker trust's built in generator or manually generate delegation key pair. If the [built-in generator](https://docs.docker.com/engine/security/trust/trust_delegation/#using-docker-trust-to-generate-keys) is used, the delegation private key is imported into the local Docker trust store. Else, the private key will need to be manually imported into the local Docker trust store. See [Manually Generating Keys](https://docs.docker.com/engine/security/trust/trust_delegation/#manually-generating-keys) for details.
1. Using the delegation key generated from the step above, upload the first key to a delegation and [initiate the repository](https://docs.docker.com/engine/security/trust/trust_delegation/#initiating-the-repository)

> [!Tip]
> To view the list of local Delegation keys, use the Notary CLI to run the following command: `$ notary key list`.

### Set up pipeline for signing images

1. Fetch the delegation private key, which is present in the local Docker trust store of your development machine used earlier, and add the same as a [secure file](../../library/secure-files.md) in Pipelines.
2. [Authorize this secure file](../../library/secure-files.md#secure-file-authorization) for use in all pipelines.
3. The service principal associated with `containerRegistryServiceConnection` must have the AcrImageSigner role in the target container registry.
4. Create a pipeline based on the following YAML snippet:

   ```yaml
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

   In the previous example, the `DOCKER_CONFIG` variable is set by the login action done by the Docker task. We recommend that you set up `DOCKER_CONTENT_TRUST_REPOSITORY_PASSPHRASE` as a [secret variable](../../process/variables.md#secret-variables) for your pipeline. The alternative approach of using a pipeline variable in YAML exposes the passphrase in plain text. We only need the repository passphrase in this example because the repository has been initiated already (prerequisites).

