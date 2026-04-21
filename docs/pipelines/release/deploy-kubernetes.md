---
title: Build and deploy a multi-container AKS app with Azure Pipelines
description: Learn how to build and deploy a multi-container application to Azure Kubernetes Service by using Azure Pipelines, Azure Container Registry, and Kubernetes manifests.
author: ramiMSFT
ms.author: rabououn
ms.topic: tutorial
ms.date: 04/17/2026
---

Use Azure Pipelines to continuously build and deploy a multi-container app to Azure Kubernetes Service (AKS). In this tutorial, you deploy the Tailspin Space Game web app and leaderboard API as separate containers, push both images to Azure Container Registry (ACR), and deploy them to AKS by using Kubernetes manifests.

## Prerequisites

- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?azure-portal=true).
- An Azure DevOps organization with access to Microsoft-hosted parallel jobs. [Check available parallel jobs](https://learn.microsoft.com/azure/devops/pipelines/troubleshooting/troubleshooting?tabs=yaml#check-for-available-parallel-jobs).
- A GitHub account.
- Azure CLI in Cloud Shell or locally.
- A fork of the sample repository: [MicrosoftDocs/mslearn-tailspin-spacegame-web-kubernetes](https://github.com/MicrosoftDocs/mslearn-tailspin-spacegame-web-kubernetes).

## Get the code

1. Go to [MicrosoftDocs/mslearn-tailspin-spacegame-web-kubernetes](https://github.com/MicrosoftDocs/mslearn-tailspin-spacegame-web-kubernetes).
1. Select **Fork**.
1. Choose your GitHub account as the owner and create the fork.

## Create the Azure resources

Use Azure Cloud Shell (Bash) to create your Azure Kubernetes Service (AKS) cluster and Azure Container Registry (ACR).

1. Sign in to [Azure portal](https://portal.azure.com?azure-portal=true), then open **Cloud Shell** and select **Bash**.

1. Set reusable variables:

    ```bash
    resourceSuffix=$RANDOM
    registryName="tailspinspacegame${resourceSuffix}"
    aksName="tailspinspacegame-${resourceSuffix}"
    rgName='tailspin-space-game-rg'
    ```

1. (Optional) Set a default region:

    ```azurecli
    az account list-locations \
      --query "[].{Name: name, DisplayName: displayName}" \
      --output table
    
    az configure --defaults location=westus2
    ```

1. Create the resource group, ACR, and AKS cluster:

    ```azurecli
    az group create --name $rgName
    
    az acr create \
      --name $registryName \
      --resource-group $rgName \
      --sku Standard
    
    az aks create \
      --name $aksName \
      --resource-group $rgName \
      --enable-addons monitoring \
      --generate-ssh-keys
    ```

1. Grant the AKS kubelet identity pull access to ACR. The kubelet is the node agent that runs on each Kubernetes node and pulls container images so your pods can start:

    ```azurecli
    clientId=$(az aks show \
      --resource-group $rgName \
      --name $aksName \
      --query "identityProfile.kubeletidentity.clientId" \
      --output tsv)
    
    acrId=$(az acr show \
      --name $registryName \
      --resource-group $rgName \
      --query "id" \
      --output tsv)
    
    az role assignment create \
      --assignee $clientId \
      --role AcrPull \
      --scope $acrId
    ```

1. Get your ACR login server, copy the value, and keep it for the next section where you set the `RegistryName` variable in the pipeline variable group:

    ```azurecli
    az acr list \
      --resource-group $rgName \
      --query "[].{loginServer: loginServer}" \
      --output table
    ```

## Set up authentication in Azure DevOps

Before you create the pipeline, set up the authentication and shared variables that Azure Pipelines uses to access your Azure resources and container registry.

1. In your Azure DevOps project, go to **Pipelines** > **Library**.

1. Create a variable group named **Release**.

1. Add a variable named `RegistryName` and set the value to your ACR login server (for example, `tailspinspacegame4692.azurecr.io`).

1. Create these service connections:

    - Azure Resource Manager service connection for the subscription and resource group.
    - Docker Registry service connection for the ACR instance.

## Create the pipeline

In this section, you create a multi-stage Azure Pipelines definition that builds two container images, publishes Kubernetes manifests, and deploys both services to your Azure Kubernetes Service cluster.

Before you paste the YAML, make sure these items already exist in your project:

- A variable group named `Release` with `RegistryName` set to your Azure Container Registry login server.
- A Docker registry service connection named `Container Registry Connection`.
- An Azure Resource Manager service connection named `Kubernetes Cluster Connection`.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select **Edit**.

1. Paste the following snippet into your YAML file, and replace placeholder values with the appropriate values for your environment:

    ```yml
    trigger:
    - 'main'
    
    variables:
      buildConfiguration: 'Release'
      leaderboardRepository: 'leaderboard'
      webRepository: 'web'
      tag: '$(Build.BuildId)'
      imagePullSecret: 'secret'
    
    stages:
    - stage: Build
      displayName: Build the containers
      jobs:
      - job: Build
        pool:
          vmImage: 'ubuntu-20.04'
        steps:
        - task: Docker@2
          displayName: Build and push the web image to container registry
          inputs:
            command: buildAndPush
            buildContext: $(Build.Repository.LocalPath)
            repository: $(webRepository)
            dockerfile: '$(Build.SourcesDirectory)/Tailspin.SpaceGame.Web/Dockerfile'
            containerRegistry: 'Container Registry Connection'
            tags: |
              $(tag)
    
        - task: Docker@2
          displayName: Build and push the leaderboard image to container registry
          inputs:
            command: buildAndPush
            buildContext: $(Build.Repository.LocalPath)
            repository: $(leaderboardRepository)
            dockerfile: '$(Build.SourcesDirectory)/Tailspin.SpaceGame.LeaderboardContainer/Dockerfile'
            containerRegistry: 'Container Registry Connection'
            tags: |
              $(tag)
    
        - publish: '$(Build.SourcesDirectory)/manifests'
          artifact: manifests
    
    - stage: Deploy
      displayName: Deploy the containers
      dependsOn: Build
      jobs:
      - deployment: Deploy
        displayName: Deploy
        pool:
          vmImage: 'ubuntu-20.04'
        environment: 'spike.default'
        variables:
        - group: Release
        strategy:
          runOnce:
            deploy:
              steps:
              - download: current
                artifact: manifests
    
              - task: KubernetesManifest@1
                displayName: Create imagePullSecret
                inputs:
                  action: createSecret
                  connectionType: azureResourceManager
                  secretName: $(imagePullSecret)
                  dockerRegistryEndpoint: 'Container Registry Connection'
                  azureSubscriptionConnection: 'Kubernetes Cluster Connection'
                  azureResourceGroup: 'tailspin-space-game-rg'
                  kubernetesCluster: 'tailspinspacegame-24591'
                  namespace: 'default'
    
              - task: KubernetesManifest@1
                displayName: Deploy to Kubernetes cluster
                inputs:
                  action: deploy
                  connectionType: azureResourceManager
                  azureSubscriptionConnection: 'Kubernetes Cluster Connection'
                  azureResourceGroup: 'tailspin-space-game-rg'
                  kubernetesCluster: 'tailspinspacegame-24591'
                  namespace: 'default'
                  manifests: |
                    $(Pipeline.Workspace)/manifests/deployment.yml
                    $(Pipeline.Workspace)/manifests/service.yml
                  imagePullSecrets: |
                    $(imagePullSecret)
                  containers: |
                    $(RegistryName)/$(webRepository):$(tag)
                    $(RegistryName)/$(leaderboardRepository):$(tag)
    ```

> [!TIP]
> YAML is whitespace-sensitive. Make sure to keep indentation consistent.
