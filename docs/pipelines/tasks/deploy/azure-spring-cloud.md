---
title: Azure Spring Cloud task
description: Learn how to use the Azure Spring Cloud task to deploy applications to Azure Spring Cloud.
ms.topic: reference
ms.assetid: 0C07E3BA-5197-48F7-83C9-D0D7178B6D19
ms.author: yebronsh
author: yevster
ms.date: 05/05/2021
monikerRange: 'azure-devops'
---

# Azure Spring Cloud task

[!INCLUDE [include](../../includes/version-team-services.md)]

Use this task to deploy applications to [Azure Spring Cloud](/azure/spring-cloud/) and to manage Azure Spring Cloud [deployments](/azure/spring-cloud/concept-understand-app-and-deployment).

## Arguments

> [!NOTE]
> Some arguments are only applicable for certain settings of the `Action` argument. The Action column below specifies the pertinent actions for each argument. Any argument listed as Required is only required for the pertinent Action(s).

|Argument|Action&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|Description|
|--- |--- |--- |
|`Action`<br/>Action|All|(Required) The action to be performed by this task.<br/>One of: `Deploy`, `Set Production`, `Delete Staging Deployment`<br/>Default value: `Deploy`|
|`ConnectedServiceName`<br/>Azure Subscription|All|(Required) The name of the [Azure Resource Manager service connection](../../library/connect-to-azure.md). <br/>Argument alias: `azureSubscription`|
|`AzureSpringCloud`<br/>Azure Spring Cloud|All|(Required) The name or resource ID of the Azure Spring Cloud instance.|
|`AppName`<br/>App Name|All|(Required) The name of the Azure Spring Cloud app to deploy. The app must exist prior to task execution.
|`UseStagingDeployment`<br/>Use Staging Deployment.|Deploy<br/>Set Production|(Required) If set to `true`, apply the task to whichever [deployment](/azure/spring-cloud/concept-understand-app-and-deployment) is set as the staging deployment at time of execution. If omitted, the `DeploymentName` parameter must be set.<br/>Default value: `true`|
|`DeploymentName`<br/>Deployment Name |Deploy<br/>Set production|(Required if `UseStagingDeployment` is `false`) The name of the [deployment](/azure/spring-cloud/concept-understand-app-and-deployment) to which the action will apply. If not using blue-green deployments, set this field to  `default`.|
|`CreateNewDeployment`<br/>Create new deployment |Deploy|(Optional) If set to `true` and the deployment specified by `DeploymentName` does not exist at execution time, it will be created.<br/>Default value: `false`|
|`Package`<br/>Package or folder|Deploy|(Required) The file path to the package containing the application to be deployed (`.jar` file for Java, `.zip` for .NET Core) or to a folder containing the application source to be built. [Build variables](../../build/variables.md) or [release variables](../../release/variables.md#default-variables) are supported. <br/>Default value: ```$(System.DefaultWorkingDirectory)/**/*.jar```|
|`RuntimeVersion`<br/>Runtime Version|Deploy|(Optional) The runtime stack for the application.<br/>One of: `Java_8`, `Java_11`, `NetCore_31`,<br/>Default value: `Java_11`|
|`EnvironmentVariables`<br/>Environment Variables|Deploy|(Optional) Environment variables to be entered using the syntax &#39;-key value&#39;. Values containing spaces should be enclosed in double quotes. <br/>Example: ```-CUSTOMER_NAME Contoso -WEBSITE_TIME_ZONE "Eastern Standard Time"```|
|`JvmOptions`<br/>JVM Options|Deploy|(Optional) A string containing JVM Options. <br/> Example: `-XX:+UseG1GC -XX:MaxRAMPercentage=70 -Dazure.keyvault.enabled=true -Dazure.keyvault.uri=https://myvault.vault.azure.net/`|
|`DotNetCoreMainEntryPath`<br/>.NET Core entry path |Deploy|(Optional) A string containing the path to the .NET executable relative to zip root.|
|`Version`<br/>Version|Deploy|(Optional) The deployment version. If not set, the version is left unchanged.|

## Examples

The following examples demonstrate common usage scenarios. For more information, see [Automate application deployments to Azure Spring Cloud](/azure/spring-cloud/how-to-cicd?pivots=programming-language-java).

### Deleting a staging deployment

The "Delete Staging Deployment" action allows you to delete the deployment not receiving production traffic. This frees up resources used by that deployment and makes room for a new staging deployment:

```yml
variables:
  azureSubscription: Contoso

steps:
- task: AzureSpringCloud@0
  continueOnError: true # Don't fail the pipeline if a staging deployment doesn't already exist.
  inputs:
    continueOnError: true
    inputs:
    azureSubscription: $(azureSubscription)
    Action: 'Delete Staging Deployment'
    AppName: customer-api
    AzureSpringCloud: contoso-dev-az-spr-cld
```

### Deploying

#### To production

The following example deploys to the default production deployment in Azure Spring Cloud. This is the only possible deployment scenario when using the Basic SKU:

```yml
variables:
  azureSubscription: Contoso

steps:
- task: AzureSpringCloud@0
    inputs:
    azureSubscription: $(azureSubscription)
    Action: 'Deploy'
    AzureSpringCloud: contoso-dev-az-spr-cld
    AppName: customer-api
    UseStagingDeployment: false
    DeploymentName: default
    Package: '$(System.DefaultWorkingDirectory)/**/*customer-api*.jar'
```

#### Blue-green

The following example deploys to a pre-existing staging deployment. This deployment will not receive production traffic until it is set as a production deployment.

```yml
variables:
  azureSubscription: Contoso

steps:
- task: AzureSpringCloud@0
    inputs:
    azureSubscription: $(azureSubscription)
    Action: 'Deploy'
    AzureSpringCloud: contoso-dev-az-spr-cld
    AppName: customer-api
    UseStagingDeployment: true
    Package: '$(System.DefaultWorkingDirectory)/**/*customer-api*.jar'
```

For more on blue-green deployments, including an alternative approach, see [Blue-green deployment strategies](/azure/spring-cloud/concepts-blue-green-deployment-strategies).

### Setting production deployment

The following example will set the current staging deployment as production, effectively swapping which deployment will receive production traffic.

```yml
variables:
  azureSubscription: Contoso

steps:
- task: AzureSpringCloud@0
    inputs:
    azureSubscription: $(azureSubscription)
    Action: 'Set Production'
    AzureSpringCloud: contoso-dev-az-spr-cld
    AppName: customer-api
    UseStagingDeployment: true
```
