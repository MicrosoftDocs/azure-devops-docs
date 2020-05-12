---
title: Deploy an ARM template to Azure
description: Deploy a LAMP app on Ubuntu using an Azure Resource Manager (ARM) Template Deployment Task
ms.topic: conceptual
ms.author: jukullam
author: JuliaKM
ms.date: 05/07/2020
monikerRange: '=azure-devops'
---

# Use an ARM template to deploy a LAMP app

Get started with [ARM templates](https://docs.microsoft.com/azure/azure-resource-manager/templates/overview) by provisioning Azure virtual machines and deploying a LAMP app. ARM templates give you a way to save your configuration in code. Using an ARM template is an example of infrastructure as code and a good DevOps practice.

You can use ARM templates within Azure Pipelines with the [Azure Resource Group Deployment task](../../../tasks/deploy/azure-resource-group-deployment.md). 

## Prerequisites

Before you begin, you need:
- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps account. [Sign up for Azure Pipelines](../../../get-started/pipelines-sign-up.md).


### Sign in to Azure Pipelines

[!INCLUDE [include](includes/sign-in-azure-pipelines.md)]

[!INCLUDE [include](includes/create-project.md)]


## Get the code

[!INCLUDE [include](includes/get-code-before-sample-repo.md)]

```
https://github.com/Azure/azure-quickstart-templates/tree/master/lamp-app/
```

## Create your pipeline

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

## Deploy your template

Follow these steps to deploy your ARM template.

1. Add the **Azure Resource Group Deployment** task.

[Screenshot here?]

2. Configure the **Azure Resource Group Deployment** task:


- **Deployment scope**: `Resource Group`
- **Azure Resource Manager connection**: Select your subscription. You may need to authorize your connection. 
- **Subscription**: Select your subscription. 
- **Action**: Create or update resource group. 
- **Resource group**: The name for a new resource group, or an existing resource group name.
- **Location**

   ![Azure Resource Group Deployment](../../../tasks/deploy/media/azure-resource-group-deployment-icon.png) [Deploy: Azure Resource Group Deployment](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzureResourceGroupDeploymentV2) - Deploy files to an Azure Resource Group.
   
   - **Azure Subscription**: Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions
     connection to your Azure subscription. For more details, see [Azure Resource Manager service connection](../../../library/connect-to-azure.md).
   
   - **Action**: `Create or Update Resource Group`
   
   - **Resource Group**: The name for a new resource group, or an existing resource group name.
   
   - **Template location**: The path of the Resource Manager template, ``.
   
   - **Template Parameters**: The path of the Resource Manager template parameters file, .
   
   - **Override Template Parameters**: A list of values for the parameters in the template that you can override; for example:<br />`-adminUsername $(vmuser) -adminPassword (ConvertTo-SecureString -String $(vmpassword) -AsPlainText -Force) -dnsNameForPublicIP $(dns)'`
   
   - **Enable Deployment Prerequisites**: Checked.
   
   - **Output - Resource Group**: The name of the Resource Group output from the task as a value that can be used as an input to further deployment tasks.

```yaml
trigger:
- master

pool:
  vmImage: 'ubuntu-latest'

steps:
# Make the template available as part of the build
- task: CopyFiles@2
  inputs:
    SourceFolder: '101-webapp-linux-managed-mysql'
    Contents: '**'
    TargetFolder: '$(Build.ArtifactStagingDirectory)'

- task: AzureResourceManagerTemplateDeployment@3
  inputs:
    deploymentScope: 'Resource Group'
    azureResourceManagerConnection: 'DevOps Pipelines - ARM Horizontal Work(82c135d4-f813-4bec-a93e-60e4323918ee)'
    subscriptionId: '82c135d4-f813-4bec-a93e-60e4323918ee'
    action: 'Create Or Update Resource Group'
    resourceGroupName: 'armPipelinetry2'
    location: 'East US 2'
    templateLocation: 'Linked artifact'
    csmFile: '$(Build.ArtifactStagingDirectory)/azuredeploy.json'
    csmParametersFile: '$(Build.ArtifactStagingDirectory)/azuredeploy.parameters.json'
    overrideParameters: '-siteName "juliakmarm" -administratorLogin "fabrikam" -administratorLoginPassword "F*br*k8m"'
    deploymentMode: 'Incremental'
```
```