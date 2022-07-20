---
title: Data pipelines, automated training, and deployment of machine learning models 
titleSuffix: Azure Pipelines
description: Use Azure Pipelines for flexible MLOps automation
services: machine-learning
ms.topic: tutorial
ms.assetid: C426EDB7-675F-41D7-9AFF-44540D6402A6
ms.author: jukullam
ms.reviewer: laobri
ms.custom: devops-pipelines-deploy
author: juliakm
ms.date: 07/18/2022
monikerRange: azure-devops
---

# Prepare data, train, deploy, and monitor machine learning models with Azure Pipelines and Azure Machine Learning

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

You can use a DevOps pipeline to automate the machine learning lifecycle. Some of the operations you can automate are:

* Data preparation (extract, transform, load operations)
* Training machine learning models with on-demand scale-out and scale-up
* Deployment of machine learning models as public or private web services
* Monitoring deployed machine learning models (such as for performance or data-drift analysis)

This article will teach you how to create an Azure Pipeline that builds and deploys a machine learning model to [Azure Machine Learning](/azure/machine-learning/overview-what-is-azure-machine-learning). You'll train a scikit-learn linear regression model on the Diabetes dataset.

This tutorial uses [Azure Machine Learning Python SDK v2](python/api/overview/azure/ml/installv2), which is in public preview, and 
SDK v2 and [Azure CLI ML extension v2](/cli/azure/ml). 

## Prerequisites

Complete the [Quickstart: Get started with Azure Machine Learning](/azure/machine-learning/quickstart-create-resources) to:
* Create a workspace
* Create a cloud-based compute instance to use for your development environment
* Create a cloud-based compute cluster to use for training your model

## Get the code

[!INCLUDE [include](../ecosystems/includes/get-code-before-sample-repo.md)]

```
https://github.com/azure/azureml-examples
```

## Sign in to Azure Pipelines

[!INCLUDE [include](../ecosystems/includes/sign-in-azure-pipelines.md)]

[!INCLUDE [include](../ecosystems/includes/create-project.md)]

## Create an Azure Resource Manager connection

You'll need an Azure Resource Manager connection to authenticate with Azure portal. 

1. In Azure DevOps, open the **Service connections** page from the [project settings page](../../project/navigation/go-to-service-page.md#open-project-settings).

2. Choose **+ New service connection** and select **Azure Resource Manager**.

3. Select the default authentication method, **Service principal (automatic)**.

4. Create your service connection. Set your subscription, resource group, and connection name. 
    :::image type="content" source="media/machine-learning/machine-learning-arm-connection.png" alt-text="Screenshot of ARM service connection.":::


## Create variables

secure way to create variables for subscriptionID, resource group, and machine learning

## Set up Python


## Run code


## Verify run

## Delete resources