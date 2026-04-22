---
title: Build and deploy a multi-container AKS app with Azure Pipelines
description: Learn how to build and deploy a multi-container application to Azure Kubernetes Service by using Azure Pipelines, Azure Container Registry, and Kubernetes manifests.
author: ramiMSFT
ms.author: rabououn
ms.topic: tutorial
ms.date: 04/17/2026
---

# Build and deploy a multi-container app to Azure Kubernetes Service

Use Azure Pipelines to continuously build and deploy a multi-container app to Azure Kubernetes Service (AKS). In this tutorial, you deploy the Tailspin Space Game web app and leaderboard API as separate containers, push both images to Azure Container Registry (ACR), and deploy them to AKS by using Kubernetes manifests.

## Prerequisites

| **Product** | **Requirements**   |
|---|---|
| **Azure DevOps** | - An Azure DevOps organization and project. [Create one for free](../get-started/pipelines-sign-up.md). <br>   - **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To grant access to all pipelines in the project: You must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md).<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections: You must have the *Administrator* or *Creator* role for [service connections](../library/add-resource-protection.md).<br>   - An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../licensing/concurrent-jobs.md) or you can request a free tier.  |
| **GitHub** | - A [GitHub](https://github.com) account.|
| **Azure** | - An [Azure subscription](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn).|

## Get the code

Fork the following repository into your GitHub account:

```
https://github.com/MicrosoftDocs/mslearn-tailspin-spacegame-web-kubernetes
```

## Create the Azure resources

Use Azure Cloud Shell to create your Azure Kubernetes Service cluster and Azure Container Registry.

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

    - [Azure Resource Manager service connection](../library/connect-to-azure.md) for the subscription and resource group.
    - [Docker Registry service connection](../ecosystems/containers/publish-to-acr.md#create-a-docker-registry-service-connection) for the ACR instance.

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
          vmImage: 'ubuntu-latest'
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
          vmImage: 'ubuntu-latest'
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

## How the pipeline works

This pipeline uses a standard build-then-deploy pattern across two stages.

- **Build stage**:

- The two `Docker@2` tasks build and push the `web` and `leaderboard` images to Azure Container Registry.
- Image tags use `$(Build.BuildId)` so each run produces a traceable, unique version.
- The `manifests` folder is published as a pipeline artifact so the deployment stage can consume the same manifests on a different agent.

- **Deploy stage**:

- The deployment job targets the configured Azure DevOps environment, which gives you deployment history and environment-level visibility.
- The `download` step retrieves the `manifests` artifact from the current run.
- `KubernetesManifest@1` with `createSecret` creates an image pull secret in the target namespace so cluster nodes can authenticate to Azure Container Registry.
- `KubernetesManifest@1` with `deploy` applies the Kubernetes manifests and injects the `web` and `leaderboard` image references for the current build tag.

## Run and validate deployment

Use this section to verify that your build completed, your deployment succeeded, and both application endpoints are reachable from outside the cluster.

1. In Azure DevOps, open your pipeline run and confirm both stages complete successfully:

    - **Build** stage: confirms both images were built and pushed to Azure Container Registry.
    - **Deploy** stage: confirms manifests were applied and pods were updated in your Azure Kubernetes Service cluster.

1. In Azure portal, open your Azure Kubernetes Service cluster, and then select **Services and ingresses**.

    :::image type="content" source="media/aks-external-ip.png" alt-text="Screenshot of Azure Kubernetes Service showing where to find external IP addresses for services." lightbox="media/aks-external-ip.png":::

1. Find the `web` and `leaderboard` services, and wait until each service has an external IP.

1. Open the external IP for the `web` service in your browser.

    :::image type="content" source="media/space-game.png" alt-text="Screenshot of the Tailspin Space Game web app running from an AKS service endpoint." lightbox="media/4-space-game.png":::

1. Copy the external IP for the `leaderboard` service, then open the following endpoint in your browser:

    ```text
    http://<external-ip>/api/Leaderboard?pageSize=10
    ```

    :::image type="content" source="media/leaderboard.png" alt-text="Screenshot of browser output showing JSON leaderboard results returned by the API service on AKS." lightbox="media/4-leaderboard-api.png":::

1. Confirm validation results:

    - The Space Game web page loads from the `web` service endpoint.
    - The leaderboard endpoint returns JSON data from the `leaderboard` API.

## Clean up resources

After you complete this tutorial, delete the resource group to avoid additional charges. Run the following command to remove the resource group and all resources in it.

```azurecli
az group delete --name tailspin-space-game-rg
```

## Related content

- [Build multiple branches in Azure Pipelines](../build/ci-build-git.md)

- [Create a multi-stage release pipeline](define-multistage-release-process.md)

- [Pipeline caching](caching.md)
