---
title: Deploy to Kubernetes task
titleSuffix: Azure Pipelines & TFS
description: Deploy, configure, or update a Kubernetes cluster in Azure Container Service by running kubectl commands.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: CBC316A2-586F-4DEF-BE79-488A1F503564
ms.manager: dastahel
ms.author: dastahel
ms.date: 01/18/2019
monikerRange: 'azure-devops'
---

# Deploy to Kubernetes task

[!INCLUDE [version-team-services](../../_shared/version-team-services.md)]

Use this task in a build or release pipeline to deploy, configure, or update a Kubernetes cluster by running kubectl commands.

::: moniker range="> tfs-2018"

## Service Connection

The task works with two service connection types: **Azure Resource Manager** and **Kubernetes Service Connection**, described below.

### Azure Resource Manager

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>connectionType</code><br/>Service connection type</td><td>(Required) <b>Azure Resource Manager</b> when using Azure Kubernetes Service, or <b>Kubernetes Service Connection</b> for any other cluster.<br/>Default value: Azure Resource Manager</td></tr>
<tr><td><code>azureSubscriptionEndpoint</code><br/>Azure subscription</td><td>(Required) Name of the Azure Service Connection.</td></tr>
<tr><td><code>azureResourceGroup</code><br/>Resource group</td><td>(Required) Name of the resource group within the subscription.</td></tr>
<tr><td><code>kubernetesCluster</code><br/>Kubernetes cluster</td><td>(Required) Name of the AKS cluster.</td></tr>
<tr><td><code>namespace</code><br/>Namespace</td><td>(Optional) The namespace on which the kubectl commands are to be run. If unspecified, the default namespace is used.</td></tr>
</table>

This YAML example shows how Azure Resource Manager is used to refer to the Kubernetes cluster. This is to be used with one of the kubectl [commands](#commands) and the appropriate values required by the command.

```YAML
variables:
    azureSubscriptionEndpoint: Contoso
    azureContainerRegistry: contoso.azurecr.io
    azureResourceGroup: Contoso
    kubernetesCluster: Contoso

steps:
- task: Kubernetes@1
  displayName: kubectl apply
  inputs:
    connectionType: Azure Resource Manager
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureResourceGroup: $(azureResourceGroup)
    kubernetesCluster: $(kubernetesCluster)
```

### Kubernetes Service Connection

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>kubernetesServiceEndpoint</code><br/>Kubernetes service connection</td><td>(Required) Select a Kubernetes service connection.</td></tr>
<tr><td><code>namespace</code><br/>Namespace</td><td>(Optional) The namespace on which the kubectl commands are to be run. If not specified, the default namespace is used.</td></tr>
</table>

This YAML example shows how a Kubernetes Service Connection is used to refer to the Kubernetes cluster. This is to be used with one of the kubectl [commands](#commands) and the appropriate values required by the command.

```YAML
- task: Kubernetes@1
  displayName: kubectl apply
  inputs:
    connectionType: Kubernetes Service Connection
    kubernetesServiceEndpoint: Contoso
```

## Commands

The command input accepts one of the following [kubectl commands](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands):

**apply**, **create**, **delete**, **exec**, **expose**, **get**, **login**, **logout**, **logs**, **run**, **set**, or **top**.

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>Command</td><td>(Required) Applies a configuration to a resource by filename or stdin.<br/>Default value: apply</td></tr>
<tr><td><code>useConfigurationFile</code><br/>Use configuration files</td><td>(Optional) Use Kubernetes configuration files with the kubectl command. Enter the filename, directory, or URL of the Kubernetes configuration files.<br/>Default value: false</td></tr>
<tr><td><code>arguments</code><br/>Arguments</td><td>(Optional) Arguments for the specified kubectl command.</td></tr>
</table>

This YAML example demonstrates the **apply** command:

```YAML
- task: Kubernetes@1
  displayName: kubectl apply using arguments
  inputs:
    connectionType: Azure Resource Manager
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureResourceGroup: $(azureResourceGroup)
    kubernetesCluster: $(kubernetesCluster)
    command: apply
    arguments: -f mhc-aks.yaml
```
This YAML example demonstrates the use of a configuration file with the **apply** command: 

```YAML
- task: Kubernetes@1
  displayName: kubectl apply using configFile
  inputs:
    connectionType: Azure Resource Manager
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureResourceGroup: $(azureResourceGroup)
    kubernetesCluster: $(kubernetesCluster)
    command: apply
    useConfigurationFile: true
    configuration: mhc-aks.yaml
```

## Secrets

Kubernetes objects of type **secret** are intended to hold sensitive information such as passwords,
OAuth tokens, and ssh keys. Putting this information in a secret is safer and more flexible than
putting it verbatim in a pod definition or in a Docker image. Azure Pipelines simplifies the
addition of **ImagePullSecrets** to a service account, or setting up of any generic secret, as described below.

### ImagePullSecret

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>secretType</code><br/>Type of secret</td><td>(Required) Create or update an ImagePullSecret or any other generic secret. Acceptable values: <b>dockerRegistry</b> for ImagePullSecret or <b>generic</b> for any other type of secret.<br/>Default value: dockerRegistry</td></tr>
<tr><td><code>containerRegistryType</code><br/>Container registry type</td><td>(Required) Acceptable values: <b>Azure Container Registry</b>, or <b>Container Registry</b> for any other registry.<br/>Default value: Azure Container Registry</td></tr>
<tr><td><code>azureSubscription<br/>EndpointForSecrets</code><br/>Azure subscription</td><td>(Required if secretType == dockerRegistry and containerRegistryType == Azure Container Registry) Azure Resource Manager service connection scoped to the subscription containing the Azure Container Registry for which the ImagePullSecret is to be set up.</td></tr>
<tr><td><code>azureContainerRegistry</code><br/>Azure container registry</td><td>(Required if secretType == dockerRegistry and containerRegistryType == Azure Container Registry) The Azure Container Registry for which the ImagePullSecret is to be set up.</td></tr>
<tr><td><code>secretName</code><br/>Secret name</td><td>(Optional) Name of the secret.</td></tr>
<tr><td><code>forceUpdate</code><br/>Force update secret</td><td>(Optional) Delete the secret if it exists and create a new one with updated values.<br/>Default value: true</td></tr>
</table>

This YAML example demonstrates the setting up of ImagePullSecrets:

```YAML
    - task: Kubernetes@1
      displayName: kubectl apply for secretType dockerRegistry
      inputs:
        azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
        azureResourceGroup: $(azureResourceGroup)
        kubernetesCluster: $(kubernetesCluster)
        command: apply
        arguments: -f mhc-aks.yaml
        secretType: dockerRegistry
        containerRegistryType: Azure Container Registry
        azureSubscriptionEndpointForSecrets: $(azureSubscriptionEndpoint)
        azureContainerRegistry: $(azureContainerRegistry)
        secretName: mysecretkey2
        forceUpdate: true
```

#### Generic Secrets

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>secretType</code><br/>Type of secret</td><td>(Required) Create or update an ImagePullSecret or any other generic secret. Acceptable values: <b>dockerRegistry</b> for ImagePullSecret or <b>generic</b> for any other type of secret.<br/>Default value: dockerRegistry</td></tr>
<tr><td><code>secretArguments</code><br/>Arguments</td><td>(Optional) Specify keys and literal values to insert in the secret. For example, <code>--from-literal=key1=value1 --from-literal=key2=\"top secret\"</code></td></tr>
<tr><td><code>secretName</code><br/>Secret name</td><td>(Optional) Name of the secret.</td></tr>
</table>

This YAML example creates generic secrets from literal values specified for the **secretArguments** input:

```YAML
    - task: Kubernetes@1
      displayName: secretType generic with literal values
      inputs:
        azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
        azureResourceGroup: $(azureResourceGroup)
        kubernetesCluster: $(kubernetesCluster)
        command: apply
        arguments: -f mhc-aks.yaml
        secretType: generic
        secretArguments: --from-literal=contoso=5678
        secretName: mysecretkey
```

Pipeline variables can be used to pass arguments for specifying literal values, as shown here: 

```YAML
    - task: Kubernetes@1
      displayName: secretType generic with pipeline variables
      inputs:
        azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
        azureResourceGroup: $(azureResourceGroup)
        kubernetesCluster: $(kubernetesCluster)
        command: apply
        arguments: -f mhc-aks.yaml
        secretType: generic
        secretArguments: --from-literal=contoso=$(contosovalue)
        secretName: mysecretkey
```

## ConfigMap

ConfigMaps allow you to decouple configuration artifacts from image content to maintain portability for containerized applications. 

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>configMapName</code><br/>ConfigMapName</td><td>(Optional) Name of the ConfigMap.</td></tr>
<tr><td><code>forceUpdateConfigMap</code><br/>Force update configmap</td><td>(Optional) Delete the configmap if it exists and create a new one with updated values.<br/>Default value: false</td></tr>
<tr><td><code>useConfigMapFile</code><br/>Use file</td><td>(Optional) Create a ConfigMap from an individual file, or from multiple files by specifying a directory.<br/>Default value: false</td></tr>
<tr><td><code>configMapFile</code><br/>ConfigMap File</td><td>(Required if useConfigMapFile == true) Specify a file or directory that contains the configMaps.</td></tr>
<tr><td><code>configMapArguments</code><br/>Arguments</td><td>(Optional) Specify keys and literal values to insert in configMap.
For example, <code>--from-literal=key1=value1 --from-literal=key2=\"top secret\"</code></td></tr>
</table>

This YAML example creates a ConfigMap by pointing to a ConfigMap file:

```YAML
    - task: Kubernetes@1
      displayName: kubectl apply
      inputs:
        configMapName: myconfig
        useConfigMapFile: true
        configMapFile: src/configmap
```

This YAML example creates a ConfigMap by specifying the literal values directly as the **configMapArguments** input,
and setting **forceUpdate** to true:

```YAML
    - task: Kubernetes@1
      displayName: configMap with literal values
      inputs:
        azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
        azureResourceGroup: $(azureResourceGroup)
        kubernetesCluster: $(kubernetesCluster)
        command: apply
        arguments: -f mhc-aks.yaml
        secretType: generic
        secretArguments: --from-literal=contoso=$(contosovalue)
        secretName: mysecretkey4
        configMapName: myconfig
        forceUpdateConfigMap: true
        configMapArguments: --from-literal=myname=contoso
```

You can use pipeline variables to pass literal values when creating ConfigMap, as shown here:

```YAML
    - task: Kubernetes@1
      displayName: configMap with pipeline variables
      inputs:
        azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
        azureResourceGroup: $(azureResourceGroup)
        kubernetesCluster: $(kubernetesCluster)
        command: apply
        arguments: -f mhc-aks.yaml
        secretType: generic
        secretArguments: --from-literal=contoso=$(contosovalue)
        secretName: mysecretkey4
        configMapName: myconfig
        forceUpdateConfigMap: true
        configMapArguments: --from-literal=myname=$(contosovalue)
```

## Advanced

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>versionOrLocation</code><br/>Version</td><td>(Optional) Explicitly choose a version of kubectl to be used, or specify the path (location) of the kubectl binary.<br/>Default value: version</td></tr>
<tr><td><code>versionSpec</code><br/>Version spec</td><td>(Required if versionOrLocation == version) The version of the kubectl to be used. Examples: **1.7.0**, **1.x.0**, **4.x.0**, **6.10.0**, **>=6.10.0**<br/>Default value: 1.7.0</td></tr>
<tr><td><code>checkLatest</code><br/>Check for latest version</td><td>(Optional) If true, a check for the latest version of kubectl is performed.<br/>Default value: false</td></tr>
<tr><td><code>specifyLocation</code><br/>Specify location</td><td>(Required) Full path to the kubectl.exe file.</td></tr>
<tr><td><code>cwd</code><br/>Working directory</td><td>(Optional) Working directory for the Kubectl command.<br/>Default value: $(System.DefaultWorkingDirectory)</td></tr>
<tr><td><code>outputFormat</code><br/>Output format</td><td>(Optional) Acceptable values: <b>json</b> or <b>YAML</b>.<br/>Default value: json</td></tr>
</table>

::: moniker-end

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
