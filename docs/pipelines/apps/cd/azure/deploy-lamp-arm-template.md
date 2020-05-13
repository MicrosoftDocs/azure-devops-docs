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


[!INCLUDE [include](../../../../includes/create-project.md)]

## Get the code

[!INCLUDE [include](../../../ecosystems/includes/get-code-before-sample-repo.md)]

```
https://github.com/Azure/azure-quickstart-templates/
```

## Create your pipeline and deploy your template

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Go to **Pipelines**, and then select **New Pipeline**.

1. Select **GitHub** as the location of your source code. 

  > [!NOTE]
  > You may be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. When the list of repositories appears, select `yourname/azure-quickstart-templates/`.

  > [!NOTE]
  > You may be redirected to GitHub to install the Azure Pipelines app. If so, select **Approve and install**.

1. When the Configure tab appears, select `Starter pipeline`.

1. Replace the content of your pipeline with this code:

```yaml
   trigger:
   - none

   pool:
   vmImage: 'ubuntu-latest'
   ```

1. Create three variables:  `siteName`, `administratorLogin`, and `administratorLoginPassword`. `administratorLoginPassword` needs to be a secret variable.
    * Click *Variables*. 
    * Add the three variables. When you create `administratorLoginPassword`, select **Keep this value secret**. 
        
   |Variable  |Value  |Secret?  |
   |---------|---------|---------|
   |siteName     |  `mytestsite`       |    No     |
   |adminUser     |     `fabrikam`    |    No     |
   |adminPass     |    `Fqdn:5362!`     |    Yes     |


1. Map the secret variable `$(adminPass)` so that it is available in your Azure Resource Group Deployment task. At the top of your YAML file, map `$(adminPass)` to `$(ARM_PASS)`. 

:::code language="yaml" source="code/arm-variables.yml" range="1-9" highlight="1-2":::

1. Add the Copy Files task to the YAML file. You will use the `101-webapp-linux-managed-mysql` project. 
  ``` yaml
  variables:
  ARM_PASS: $(adminPass)

   trigger:
   - none

   pool:
   vmImage: 'ubuntu-latest'

  - task: CopyFiles@2
    inputs:
      SourceFolder: '101-webapp-linux-managed-mysql'
      Contents: '**'
      TargetFolder: '$(Build.ArtifactStagingDirectory)'
  ``` 


1. Add and configure the **Azure Resource Group Deployment** task. The task references both the artifact you built with the Copy Files task and your pipeline variables. Set these values when configuring your task. 

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


5. Go to your new site. If you set `siteName` to `armpipelinetestsite`, the site is located at `https://armpipelinetestsite.azurewebsites.net/`.

## Clean up resources

 You can also use an ARM template to delete resources. Change the `action` value in your **Azure Resource Group Deployment** task to `DeleteRG`. You can also remove the inputs for `templateLocation`, `csmFile`, `csmParametersFile`, `overrideParameters`, and `deploymentMode`.

 ```yaml
 - task: AzureResourceManagerTemplateDeployment@3
  inputs:
    deploymentScope: 'Resource Group'
    azureResourceManagerConnection: '<your-resource-manager-connection>'
    subscriptionId: '<your-subscription-id>'
    action: 'DeleteRG'
    resourceGroupName: 'ARMPipelinesLAMP-rg'
    location: ''<your-closest-location>'
 ```
