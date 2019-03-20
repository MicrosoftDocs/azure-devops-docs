---
title: Azure IoTEdge task
description: Build, test, and deploy applications quickly and efficiently to Azure IoT Edge
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 0803ABDD-002B-4179-B824-9765403F4289
ms.manager: dastahel
ms.author: dastahel
ms.date: 03/20/2019
monikerRange: 'azure-devops'
---

# Azure IoT Edge task

Use this task in a build or release pipeline to build, test, and deploy applications quickly and efficiently to Azure IoT Edge.

## Container registry types

### Azure Container Registry

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>containerregistrytype</code><br/>Container registry type</td><td>(Required) Select <b>Azure Container Registry</b> for ACR or <b>Generic Container Registry</b> for generic registries including Docker hub.</td></tr>
<tr><td><code>azureSubscriptionEndpoint</code><br/>Azure subscription</td><td>(Required, if containerregistrytype = Azure Container Registry) Select an Azure subscription.</td></tr>
<tr><td><code>azureContainerRegistry</code><br/>Azure Container Registry</td><td>(Required) Select an Azure Container Registry.</td></tr>
</table>

### Other container registries

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>containerregistrytype</code><br/>Container registry type</td><td>(Required) Select <b>Azure Container Registry</b> for ACR or <b>Generic Container Registry</b> for generic registries including Docker hub.</td></tr>
<tr><td><code>dockerRegistryEndpoint</code><br/>Docker Registry Connection</td><td>(Required) Select a generic <b>Docker registry connection</b>. Required for <b>Build and Push</b></td></tr>
</table>

## Build module images

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>action</code><br/>Action</td><td>(Required) Select an Azure IoT Edge action.<br/>Default value: <b>Build module images</b>.</td></tr>
<tr><td><code>templateFilePath</code><br/>.template.json file</td><td>(Required) The path of your Azure IoT Edge solution <b>.template.json</b> file. This file defines the modules and routes in an Azure IoT Edge solution. The filename must end with <b>.template.json.</b><br/>Default value: <b>deployment.template.json</b>.</td></tr>
<tr><td><code>defaultPlatform</code><br/>Default platform</td><td>(Required) In your <b>.template.json</b> file you can leave the modules platform unspecified, in which case the <b>default platform</b> will be used.<br/>Default value: <b>amd64</b>.</td></tr>
</table>

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

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>action</code><br/>Action</td><td>(Required) Select an Azure IoT Edge action.<br/>Default value: <b>Build module images</b>.</td></tr>
<tr><td><code>templateFilePath</code><br/>.template.json file</td><td>(Required) The path of your Azure IoT Edge solution <b>.template.json</b> file. This file defines the modules and routes in an Azure IoT Edge solution. The filename must end with <b>.template.json.</b><br/>Default value: <b>deployment.template.json</b>.</td></tr>
<tr><td><code>defaultPlatform</code><br/>Default platform</td><td>(Required) In your <b>.template.json</b> file you can leave the modules platform unspecified, in which case the <b>default platform</b> will be used.<br/>Default value: <b>amd64</b>.</td></tr>
<tr><td><code>bypassModules</code><br/>Bypass module(s)</td><td>(Optional) Specify the module(s) that you <b>do not</b> need to build or push from the list of module names separated by commas in the <b>.template.json</b> file. For example, if you have two modules, "<b>SampleModule1,SampleModule2</b>" in your file and you want to build or push just <b>SampleModule1</b>, specify <b>SampleModule2</b> as the bypass module(s). Leave empty to build or push all the modules in <b>.template.json</b>.
</table>

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
    azureContainerRegistry: $(azureContainerRegistry)
    templateFilePath: deployment.template.json
    defaultPlatform: amd64  
```

## Deploy to IoT Edge devices

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>action</code><br/>Action</td><td>(Required) Select an Azure IoT Edge action.<br/>Default value: <b>Build module images</b>.</td></tr>
<tr><td><code>deploymentFilePath</code><br/>Deployment file</td><td>(Required) Select the deployment JSON file. If this task is in a release pipeline, you must specify the location of the deployment file within the artifacts (the default value works for most conditions). If this task is in a build pipeline, you must specify the <b>Path of output deployment file</b>.<br/>Default value: <b>$(System.DefaultWorkingDirectory)/**/*.json.</b></td></tr>
<tr><td><code>connectedServiceNameARM</code><br/>Azure subscription contains IoT Hub</td><td>(Required) Select an <b>Azure subscription</b> that contains an IoT Hub</td></tr>
<tr><td><code>iothubname</code><br/>IoT Hub name</td><td>(Required) Select the <b>IoT Hub</b></td></tr>
<tr><td><code>deviceOption</code><br/>Choose single/multiple device</td><td>(Required) Choose to deploy to a single device, or to multiple devices specified by using tags.</td></tr>
<tr><td><code>deploymentid</code><br/>IoT Edge deployment ID</td><td>(Required) Enter the <b>IoT Edge Deployment ID</b>. If an ID already exists, it will be overridden. Up to 128 lowercase letters, numbers, and the characters <code>- : + % _ # * ? ! ( ) , = @ ; '</code> <a href="https://docs.microsoft.com/azure/iot-edge/how-to-deploy-monitor#monitor-a-deployment">More details</a>.<br/>Default value: <b>$(System.TeamProject)-devops-deployment.</b></td></tr>
<tr><td><code>priority</code><br/>IoT Edge deployment priority</td><td>(Required) A positive integer used to resolve deployment conflicts. When a device is targeted by multiple deployments it will use the one with highest priority or, in the case of two deployments with the same priority, the one with the latest creation time.<br/>Default value: <b>0</b>.</td></tr>
<tr><td><code>targetcondition</code><br/>IoT Edge device target condition</td><td>(Required) Specify the target condition of the devices to which you want to deploy. For example, <b>tags.building=9 and tags.environment='test'</b>. Do not include double quotes. <a href="https://docs.microsoft.com/azure/iot-edge/how-to-deploy-monitor#monitor-a-deployment">More details</a>.</td></tr>
<tr><td><code>deviceId</code><br/>IoT Edge device ID</td><td>(Required) Specify the IoT Edge <b>Device ID</b>.</td></tr>
</table>








