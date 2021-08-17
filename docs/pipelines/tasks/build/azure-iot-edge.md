---
title: Azure IoT Edge task
description: Build, test, and deploy applications quickly and efficiently to Azure IoT Edge
ms.topic: reference
ms.assetid: 0803ABDD-002B-4179-B824-9765403F4289
ms.manager: dastahel
ms.author: vijayma
ms.date: 03/20/2019
monikerRange: azure-devops
author: vijayma
---

# Azure IoT Edge task

Use this task to build, test, and deploy applications quickly and efficiently to Azure IoT Edge.

## Build module images

|Parameters|Description|
|--- |--- |
|`action` <br/>Action|(Required) Select an Azure IoT Edge action, in this case **Build module images**. <br/>Default value: Build module images.|
|`templateFilePath` <br/>.template.json file|(Required) The path of your Azure IoT Edge solution .template.json file. This file defines the modules and routes in an Azure IoT Edge solution. The filename must end with .template.json. <br/>Default value: deployment.template.json.|
|`defaultPlatform` <br/>Default platform|(Required) In your .template.json file you can leave the modules platform unspecified, in which case the default platform will be used. <br/>Default value: amd64.|

The following YAML example builds module images:

```YAML
- task: AzureIoTEdge@2
  displayName: AzureIoTEdge - Build module images
  inputs:
    action: Build module images
    templateFilePath: deployment.template.json
    defaultPlatform: amd64  
```

## Push module images

|Parameters|Description|
|--- |--- |
|`action` <br/>Action|(Required) Select an Azure IoT Edge action, in this case **Push module images**. <br/>Default value: Build module images.|
|`containerregistrytype` <br/>Container registry type|(Required) The type of container registry, which can be either `Azure Container Registry` if your registry is in Azure, or `Generic Container Registry` for other registries like docker hub. For more information, see [Container registry types](#container-registry-types). <br/>Default value: Azure Container Registry.|
|`templateFilePath` <br/>.template.json file|(Required) The path of your Azure IoT Edge solution .template.json file. This file defines the modules and routes in an Azure IoT Edge solution. The filename must end with .template.json. <br/>Default value: deployment.template.json.|
|`defaultPlatform` <br/>Default platform|(Required) In your .template.json file you can leave the modules platform unspecified, in which case the default platform will be used. <br/>Default value: amd64.|
|`fillRegistryCredential` <br/>Add registry credential to deployment manifest|(Required) Add registry credentials to the deployment manifest to give the edgeAgent module access to pull private docker images. <br/>Default value: true.|
|`bypassModules` <br/>Bypass module(s)|(Optional) Specify the module(s) that you do not need to build or push from the list of module names separated by commas in the .template.json file. For example, if you have two modules, "SampleModule1,SampleModule2" in your file and you want to build or push just SampleModule1, specify SampleModule2 as the bypass module(s). Leave empty to build or push all the modules in .template.json.|

The following YAML example pushes module images:

```YAML
variables:
  azureSubscriptionEndpoint: Contoso
  azureContainerRegistry: contoso.azurecr.io

steps:    
- task: AzureIoTEdge@2
  displayName: AzureIoTEdge - Push module images
  inputs:
    action: Push module images
    containerregistrytype: Azure Container Registry
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureContainerRegistry: {"loginServer":"$(azureContainerRegistry)", "id":"/subscriptions/$(azureSubscriptionEndpoint)"}
    templateFilePath: deployment.template.json
    defaultPlatform: amd64
    fillRegistryCredential: true
```

## Generate deployment manifest

|Parameters|Description|
|--- |--- |
|'action' <br/>Action|(Required) Select an Azure IoT Edge action, in this case **Generate deployment manifest**. <br/>Default value: Build module images.|
|`templateFilePath` <br/>.template.json file|(Required) The path of your Azure IoT Edge solution .template.json file. This file defines the modules and routes in an Azure IoT Edge solution. The filename must end with .template.json. <br/>Default value: deployment.template.json.|
|`defaultPlatform` <br/>Default platform|(Required) In your .template.json file you can leave the modules platform unspecified, in which case the default platform will be used. <br/>Default value: amd64.|
|`deploymentManifestOutputPath` <br/>Output path|(Required) The output path of generated deployment manifest. <br/>Default value: $(System.DefaultWorkingDirectory)/config/deployment.json. |
|`validateGeneratedDeploymentManifest` <br/>Validate the schema of generated deployment manifest|(Required) Fail this step if the generated deployment manifest does not pass schema validation. You can search Azure IoT Edge deployment in the [JSON Schema Store](https://www.schemastore.org/json/) to find the latest schema. <br/>Default value: false.|

The following YAML example creates a deployment manifest based on the template file:

```YAML
variables:
  azureSubscriptionEndpoint: Contoso
  azureContainerRegistry: contoso.azurecr.io

steps:    
- task: AzureIoTEdge@2
  displayName: AzureIoTEdge - Generate deployment manifest
  inputs:
    action: Generate deployment manifest
    templateFilePath: deployment.template.json
    defaultPlatform: amd64
    deploymentManifestOutputPath: $(System.DefaultWorkingDirectory)/config/deployment.json
    validateGeneratedDeploymentManifest: false
```

## Deploy to IoT Edge devices

|Parameters|Description|
|--- |--- |
|`action` <br/>Action|(Required) Select an Azure IoT Edge action, in this case **Deploy to IoT Edge devices**. <br/>Default value: Build module images.|
|`deploymentFilePath` <br/>Deployment file|(Required) Select the deployment JSON file. If this task is in a release pipeline, you must specify the location of the deployment file within the artifacts (the default value works for most conditions). If this task is in a build pipeline, you must specify the deployment manifest output path. <br/>Default value: $(System.DefaultWorkingDirectory)/config/deployment.json.|
|`connectedServiceNameARM` <br/>Azure subscription contains IoT Hub|(Required) Select an Azure subscription that contains an IoT Hub <br/>Argument aliases: `azureSubscription`|
|`iothubname` <br/>IoT Hub name|(Required) Select the IoT Hub|
|`deviceOption` <br/>Choose single/multiple device|(Required) Choose to deploy to a single device, or to multiple devices specified by using tags.|
|`deploymentid` <br/>IoT Edge deployment ID|(Required) Enter the IoT Edge Deployment ID. If an ID already exists, it will be overridden. Up to 128 lowercase letters, numbers, and the characters `- : + % _ # * ? ! ( ) , = @ ;`. [More details](/azure/iot-edge/how-to-deploy-monitor#monitor-a-deployment). <br/>Default value: $(System.TeamProject)-devops-deployment.|
|`priority` <br/>IoT Edge deployment priority|(Required) A positive integer used to resolve deployment conflicts. When a device is targeted by multiple deployments it will use the one with highest priority or, in the case of two deployments with the same priority, the one with the latest creation time. <br/>Default value: 0.|
|`deviceId` <br/>IoT Edge device ID|(Required if device option is single device) Specify the IoT Edge Device ID.|
|`targetcondition` <br/>IoT Edge device target condition|(Required if device option is multiple devices) Specify the target condition of the devices to which you want to deploy. For example, tags.building=9 and tags.environment='test'. Do not include double quotes. [More details](/azure/iot-edge/how-to-deploy-monitor#monitor-a-deployment).|

The following YAML example deploys module images:
```YAML
steps:
- task: AzureIoTEdge@2
  displayName: 'Azure IoT Edge - Deploy to IoT Edge devices'
  inputs:
    action: 'Deploy to IoT Edge devices'
    deploymentFilePath: $(System.DefaultWorkingDirectory)/config/deployment.json
    azureSubscription: $(azureSubscriptionEndpoint)
    iothubname: iothubname
    deploymentid: '$(System.TeamProject)-devops-deployment'
    priority: '0'
    deviceOption: 'Single Device'
    deviceId: deviceId
```

## Container registry types

### Azure Container Registry

|Parameters|Description|
|--- |--- |
|`containerregistrytype` <br/>Container registry type|(Required) Select Azure Container Registry for ACR or Generic Container Registry for generic registries including Docker hub.|
|`azureSubscriptionEndpoint` <br/>Azure subscription|(Required, if containerregistrytype = Azure Container Registry) Select an Azure subscription.|
|`azureContainerRegistry` <br/>Azure Container Registry|(Required) Select an Azure Container Registry.|

### Other container registries

|Parameters|Description|
|--- |--- |
|containerregistrytype <br/>Container registry type|(Required) Select Azure Container Registry for ACR or Generic Container Registry for generic registries including Docker hub.|
|dockerRegistryEndpoint <br/>Docker Registry Connection|(Required) Select a generic Docker registry connection. Required for Build and Push <br/>Argument aliases: `dockerRegistryConnection`|

## Examples

For step-by-step examples of how to use these actions in Azure Pipelines, see the following articles:

* [Continuous integration and continuous deployment to Azure IoT Edge devices (YAML)](/azure/iot-edge/how-to-continuous-integration-continuous-deployment)
* [Continuous integration and continuous deployment to Azure IoT Edge devices (classic editor)](/azure/iot-edge/how-to-continuous-integration-continuous-deployment-classic)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
