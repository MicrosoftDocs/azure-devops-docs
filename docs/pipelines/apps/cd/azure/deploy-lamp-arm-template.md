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
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../../../get-started/pipelines-sign-up.md).


### Sign in to Azure Pipelines

[!INCLUDE [include](../../../ecosystems/includes/sign-in-azure-pipelines.md)]

[!INCLUDE [include](../../../../includes/create-project.md)]

## Get the code

[!INCLUDE [include](../../../ecosystems/includes/get-code-before-sample-repo.md)]

```
https://github.com/Azure/azure-quickstart-templates/tree/master/lamp-app/
```

## Create your pipeline

[!INCLUDE [include](../../../ecosystems/includes/create-pipeline-before-template-selected.md)]

## Deploy your template

Follow these steps to deploy your ARM template.

1. Add and configure the Copy Files task. You will use the `101-webapp-linux-managed-mysql` project. Start off by adding the Copy Files task.
  ``` yaml
  - task: CopyFiles@2
    inputs:
      SourceFolder: '101-webapp-linux-managed-mysql'
      Contents: '**'
      TargetFolder: '$(Build.ArtifactStagingDirectory)'
  ``` 

2. Create three variables:  `siteName`, `administratorLogin`, and `administratorLoginPassword`. `administratorLoginPassword` needs to be a secret variable.
    * Click *Variables*. 
    * Add the three variables. When you create `administratorLoginPassword`, select **Keep this value secret**. 
        
   |Variable  |Value  |Secret?  |
   |---------|---------|---------|
   |siteName     |  `mytestsite`       |    No     |
   |adminUser     |     `fabrikam`    |    No     |
   |adminPass     |    `Fqdn:5362!`     |    Yes     |


3. Map the secret variable `$(adminPass)` so that it is available in your Azure Resource Group Deployment task. At the top of your YAML file, map `$(adminPass)` to `$(ARM_PASS)`. 

```yaml
variables:
  ARM_PASS: $(adminPass)
```

4. Add and configure the **Azure Resource Group Deployment** task to your YAML file. You will use the artifact you build with the Copy Files task and the variables you added to your pipeline. Set these values when configuring your task. 

   - **Deployment scope (deploymentScope)**: `Resource Group`
   - **Azure Resource Manager connection (azureResourceManagerConnection)**: Select your Azure Resource Manager service connection. You may need to authorize the connection as part of this process. 
   - **Subscription (subscriptionId)**: Select your subscription. 
   - **Action (action)**: Set to `Create or update resource group`. 
   - **Resource group**: The name for the new resource group. Set to`ARMPipelinesLAMP-rg`. 
   - **Location(location)**: Location for deploying the resource group. Set to your closest location.
   - **Template location (templateLocation)**: Set to `Linked artifact`. 
   - **Template (cmsFile)**: Path to the ARM template. Set to `$(Build.ArtifactStagingDirectory)/azuredeploy.json`.
   - **Template parameters (cmsParametersFile)**:  The path to the parameters file for your ARM template. Set to `$(Build.ArtifactStagingDirectory)/azuredeploy.parameters.json`.
   - **Override template parameters (overrideParameters)**: A place to override the parameter values from the template parameters file. Set to `-siteName $(siteName) -administratorLogin $(adminUser) -administratorLoginPassword $(ARM_PASS)` to use the variables you created earlier.
   - **Deployment mode (deploymentMode)**: The way resources should be deployed. Set to `Incremental`. Incremental keeps resources that are not in the ARM template and is faster than `Complete`. 
   
```yaml
variables:
  ARM_PASS: $(adminPass)

trigger:
- none

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: CopyFiles@2
  inputs:
    SourceFolder: '101-webapp-linux-managed-mysql'
    Contents: '**'
    TargetFolder: '$(Build.ArtifactStagingDirectory)'

- task: AzureResourceManagerTemplateDeployment@3
  inputs:
    deploymentScope: 'Resource Group'
    azureResourceManagerConnection: '<your-resource-manager-connection>'
    subscriptionId: '<your-subscription-id>'
    action: 'Create Or Update Resource Group'
    resourceGroupName: 'ARMPipelinesLAMP-rg'
    location: '<your-closest-location>'
    templateLocation: 'Linked artifact'
    csmFile: '$(Build.ArtifactStagingDirectory)/azuredeploy.json'
    csmParametersFile: '$(Build.ArtifactStagingDirectory)/azuredeploy.parameters.json'
    overrideParameters: '-siteName $(siteName) -administratorLogin $(adminUser) -administratorLoginPassword $(ARM_PASS)'
    deploymentMode: 'Incremental'
```


5. Go to your new site. In the example, the site is located at `https://armpipelinetestsite.azurewebsites.net/`.

## Clean up resources
