---
title: Azure Machine Learning service training and deployment
titleSuffix: Azure Pipelines
description: Train machine learning models and deploy to web services from Azure Pipelines. Learn how to create a pipeline that uses the Azure Machine Learning service to train and deploy models.
services: machine-learning
ms.prod: devops
ms.technology: devops-cicd
ms.topic: tutorial
manager: jillfra
ms.assetid: C426EDB7-675F-41D7-9AFF-44540D6402A6
ms.author: jordane
author: jpe316
ms.date: 5/6/2019
monikerRange: 'azure-devops'
---

# Train and deploy machine learning models

[!INCLUDE [include](../_shared/version-team-services.md)]

You can use a pipeline to automatically train and deploy machine learning models with the Azure Machine Learning service. Here you'll learn how to build a machine learning model, and then deploy the model as a web service. You'll end up with a pipeline that you can use to train your model.

## Prerequisites

Before you read this topic, you should understand [how the Azure Machine Learning service works](/azure/machine-learning/service/concept-azure-machine-learning-architecture).

Follow the steps in the steps in [Azure Machine Learning quickstart: portal](/azure/machine-learning/service/setup-create-workspace) to create a workspace.

## Get the code

[!INCLUDE [include](../languages/_shared/get-code-before-sample-repo.md)]

```
https://github.com/MicrosoftDocs/pipelines-azureml
```

This sample includes an `azure-pipelines.yml` file at the root of the repository. 

## Sign in to Azure Pipelines

[!INCLUDE [include](../languages/_shared/sign-in-azure-pipelines.md)]

[!INCLUDE [include](../languages/_shared/create-project.md)]

## Create the pipeline

[!INCLUDE [include](../languages/_shared/create-pipeline-before-template-selected.md)]

When your new pipeline appears:

1. Replace `myresourcegroup` with the name of the Azure resource group that contains your Azure Machine Learning service workspace.

1. Replace `myworkspace` with the name of your Azure Machine Learning service workspace.

1. When you're ready, select **Save and run**.

1. You're prompted to commit your changes to the _azure-pipelines.yml_ file in your repository. After you're happy with the message, select **Save and run** again.

 If you want to watch your pipeline in action, select the build job.

You now have a YAML pipeline in your repository that's ready to train your model!

## Azure Machine Learning service automation

There are two primary ways to use automation with the Azure Machine Learning service:

* The [Machine Learning CLI](/azure/machine-learning/service/reference-azure-machine-learning-cli) is an extension to the Azure CLI. It provides commands for working with the Azure Machine Learning service.
* The [Azure Machine Learning SDK](/python/api/overview/azure/ml/intro?view=azure-ml-py) is Python package that provides programmatic access to the Azure Machine Learning service.

The example with this document uses the Machine Learning CLI.

## Planning

Before you using Azure Pipelines to automate model training and deployment, you must understand the files needed by the model and what indicates a "good" trained model.

### Machine learning files

In most cases, your data science team will provide the files and resources needed to train the machine learning model. The following files in the example project would be provided by the data scientists:

* __Training script__ (`train.py`): The training script contains logic specific to the model that you are training.
* __Scoring file__ (`score.py`): When the model is deployed as a web service, the scoring file receives data from clients and scores it against the model. The output is then returned to the client.
* __RunConfig settings__ (`sklearn.runconfig`): Defines how the training script is ran on the compute target that is used for training.
* __Training environment__ (`myenv.yml`): Defines the packages needed to run the training script.
* __Deployment environment__ (`deploymentConfig.yml`): Defines the resources and compute needed for the deployment environment.
* __Deployment environment__ (`inferenceConfig.yml`): Defines the packages needed to run and score the model in the deployment environment.


Some of these files are directly used when developing a model. For example, the `train.py` and `score.py` files. However the data scientist may be programmatically creating the run configuration and environment settings. If so, they can create the `.runconfig` and training environment files, by using [RunConfiguration.save()](https://docs.microsoft.com/python/api/azureml-core/azureml.core.runconfiguration?view=azure-ml-py#save-path-none--name-none--separate-environment-yaml-false-). Alternatively, default run configuration files will be created for all compute targets already in the workspace when running the following command.

```azure-cli
az ml folder attach --experiment-name myexp -w myws -g mygroup
```

The files created by this command are stored in the `.azureml` directory.

### Determine the best model

The example pipeline deploys the trained model without doing any performance checks. In a production scenario, you may want to log metrics so that you can determine the "best" model.

For example, you have a model that is already deployed and has an accuracy of 90. You train a new model based on new checkins to the repo, and the accuracy is only 80, so you don't want to deply it. This is an example of a metric that you can create automation logic around, as you can do a simple comparison to evaluate the model. In other cases, you may have several metrics that are used to indicate the "best" model, and must be evaluated by a human before deployment.

Depending on what "best" looks like for your scenario, you may need to create a [release pipeline](../release/index.md) where someone must inspect the metrics to determine if the model should be deployed.

You should work with your data scientists to understand what metrics are important for your model.

To log metrics during training, use the [Run](/python/api/azureml-core/azureml.core.run.run?view=azure-ml-py) class.

## Azure CLI Deploy task

The __Azure CLI Deploy task__ is used to run Azure CLI commands. In the example, it installs the Azure Machine Learning CLI extension and then uses individual CLI commands to train and deploy the model.

## Azure Service Connection

The __Azure CLI Deploy task__ requires an Azure service connection. The Azure service connection stores the credentials needed to connect from Azure Pipelines to Azure. 

The name of the connection used by the example is `azmldemows`

To create a service connection, see [Create an Azure service connection](../library/connect-to-azure.md).

## Machine Learning CLI

The following Azure Machine Learning service CLI commands are used in the example for this documemt:

| Command | Purpose |
| ----- | -----| 
| az ml folder attach | Associates the files in the project with your Azure Machine Learning service workspace. |
| az ml computetarget create | Creates a compute target that is used to train the model. |
| az ml experiment list | Lists experiments for your workspace. |
| az ml run submit-script | Submits the model for training. |
| az ml model register | Registers a trained model with your workspace. |
| az ml model deploy | Deploys the model as a web service. |
| az ml service list | Lists deployed services. |
| az ml service delete | Deletes a deployed service. |
| az ml pipeline list | Lists Azure Machine Learning pipelines. |
| az ml computetarget delete | Deletes a compute target. |

For more information on these commands, see the [CLI extension reference](https://docs.microsoft.com/cli/azure/ext/azure-cli-ml/ml?view=azure-cli-latest).

## Next steps

Learn how you can further integrate machine learning into your pipelines with the [Machine Learning extension](https://marketplace.visualstudio.com/items?itemName=ms-air-aiagility.vss-services-azureml).