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

Use Azure Cloud Shell (Bash) to create your AKS and ACR resources.

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

1. Grant the AKS kubelet identity pull access to ACR:

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

1. Get your ACR login server. You use it later in the pipeline variable group:

    ```azurecli
    az acr list \
      --resource-group $rgName \
      --query "[].{loginServer: loginServer}" \
      --output table
    ```


