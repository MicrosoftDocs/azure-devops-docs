---
title: Package and Deploy Helm Charts task
description: Deploy, configure, update your Kubernetes cluster in Azure Container Service by running helm commands.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: AFA7D54D-537B-4DC8-B60A-E0EEEA2C9A87
ms.manager: shasb
ms.author: shasb
ms.date: 02/12/2019
monikerRange: '> tfs-2018'
---

# Package and Deploy Helm Charts task

**Azure Pipelines**

Use this task in a build or release pipeline to deploy, configure, or update a Kubernetes cluster in Azure Container Service by running Helm commands.
Helm is a tool that streamlines deploying and managing Kubernetes apps using a packaging format called
[charts](https://github.com/helm/helm/blob/master/docs/charts.md).
You can define, version, share, install, and upgrade even the most complex Kubernetes app by using Helm. 

* Helm helps you combine multiple Kubernetes manifests (yaml) such as service, deployments, configmaps, and more into a single unit called Helm Charts.
  You don't need to either invent or use a tokenization or a templating tool.
* Helm Charts help you manage application dependencies and deploy as well as rollback as a unit.
  They are also easy to create, version, publish, and share with other partner teams.

Azure Pipelines has built-in support for Helm charts:

* The [Helm Tool installer task](../tool/helm-installer.md) can be used to install the correct version of Helm onto the agents.
* The Helm package and deploy task can be used to package the app and deploy it to a Kubernetes cluster. 
  You can use the task to install or update Tiller to a Kubernetes namespace, to securely connect to Tiller over TLS for deploying charts,
  or to run any Helm command such as **lint**.
* The Helm task supports connecting to an Azure Kubernetes Service by using an Azure service connection.
  You can connect to any Kubernetes cluster by using **kubeconfig** or a service account.
* Helm deployments can be supplemented by using the **Kubectl** task; for example, create/update, imagepullsecret, and others.

::: moniker range="> tfs-2018"

## Service Connection

The task works with two service connection types: **Azure Resource Manager** and **Kubernetes Service Connection**.

### Azure Resource Manager

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>connectionType</code><br/>(Service connection type)</td><td>(Required) <b>Azure Resource Manager</b> to use Azure Kubernetes Service. <b>Kubernetes Service Connection</b> for any other cluster.<br/>Default value: Azure Resource Manager</td></tr>
<tr><td><code>azureSubscriptionEndpoint</code><br/>(Azure subscription)</td><td>(Required) Name of the Azure service connection.</td></tr>
<tr><td><code>azureResourceGroup</code><br/>(Resource group)</td><td>(Required) Name of the resource group within the subscription.</td></tr>
<tr><td><code>kubernetesCluster</code><br/>(Kubernetes cluster)</td><td>(Required) Name of the AKS cluster.</td></tr>
<tr><td><code>namespace</code><br/>(Namespace)</td><td>(Optional) The namespace on which the **kubectl** commands are run. If not specified, the default namespace is used.</td></tr>
</table>

This YAML example YAML shows how Azure Resource Manager is used to refer to the Kubernetes cluster.
This is used with one of the helm [commands](#commands) and the appropriate values required for the command:

```YAML
variables:
    azureSubscriptionEndpoint: Contoso
    azureContainerRegistry: contoso.azurecr.io
    azureResourceGroup: Contoso
    kubernetesCluster: Contoso

- task: HelmDeploy@0
  displayName: Helm deploy
  inputs:
    connectionType: Azure Resource Manager
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureResourceGroup: $(azureResourceGroup)
    kubernetesCluster: $(kubernetesCluster)
```

### Kubernetes Service Connection

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>kubernetesServiceEndpoint</code><br/>(Kubernetes service connection)</td><td>(Required) Select a Kubernetes service connection.</td></tr>
<tr><td><code>namespace</code><br/>(Namespace)</td><td>(Optional) The namespace on which the **kubectl** commands are run. If not specified, the default namespace is used.</td></tr>
</table>

This YAML example YAML shows how Kubernetes service connection is used to refer to the Kubernetes cluster.
This is used with one of the helm [commands](#commands) and the appropriate values required for the command:

```YAML
- task: HelmDeploy@0
  displayName: Helm deploy
  inputs:
    connectionType: Kubernetes Service Connection
    kubernetesServiceEndpoint: Contoso
```

<a name="commands"></a>
## Command values

The command input accepts one of the following [helm commands](https://docs.helm.sh/helm/helm): create/delete/expose/get/init/install/login/logout/ls/package/rollback/upgrade.

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>(Command)</td><td>(Required) Select a helm command.<br/>Default value: ls</td></tr>
<tr><td><code>arguments</code><br/>(Arguments)</td><td>Helm command options.</td></tr>
</table>

This YAML example demonstrates the **ls** command:

```YAML
- task: HelmDeploy@0
  displayName: Helm list
  inputs:
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureResourceGroup: $(azureResourceGroup)
    kubernetesCluster: $(kubernetesCluster)
    command: ls
    arguments: --all
```

## init command

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>(Command)</td><td>(Required) Select a helm command.<br/>Default value: ls</td></tr>
<tr><td><code>canaryimage</code><br/>(Use canary image version)</td><td>Use the canary Tiller image, the latest pre-release version of Tiller.<br/>Default value: false</td></tr>
<tr><td><code>upgradetiller</code><br/>(Upgrade Tiller)</td><td>Upgrade if Tiller is already installed.<br/>Default value: true</td></tr>
<tr><td><code>waitForExecution</code><br/>(Wait)</td><td>Block until the command execution completes.<br/>Default value: true</td></tr>
<tr><td><code>arguments</code><br/>(Arguments)</td><td>Helm command options.</td></tr>
</table>

This YAML example demonstrates the **init** command:

```YAML
- task: HelmDeploy@0
  displayName: Helm init
  inputs:
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureResourceGroup: $(azureResourceGroup)
    kubernetesCluster: $(kubernetesCluster)
    command: init
    upgradetiller: true
    waitForExecution: true
    arguments: --client-only
```

## install command

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>(Command)</td><td>(Required) Select a helm command.<br/>Default value: ls</td></tr>
<tr><td><code>chartType</code><br/>(Chart Type)</td><td>(Required) Select how you want to enter chart information. You can provide either the name of the chart or the folder/file path to the chart.<br/>Default value: Name</td></tr>
<tr><td><code>chartName</code><br/>(Chart Name)</td><td>(Required) Chart reference to install, this can be a url or a chart name. For example, if chart name is <b>stable/mysql</b>, the task will run <b>helm install stable/mysql</b></td></tr>
<tr><td><code>releaseName</code><br/>(Release Name)</td><td>(Optional) Release name. If not specified, it will be autogenerated.</td></tr>
<tr><td><code>overrideValues</code><br/>(Set Values)</td><td>(Optional) Set values on the command line. You can specify multiple values, or separate values with commas. For example, <b>key1=val1,key2=val2</b>. The task will construct the helm command by using these set values. For example, <b>helm install --set key1=val1 ./redis</b></td></tr>
<tr><td><code>valueFile</code><br/>(Value File)</td><td>(Optional) Specify values in a YAML file or a URL. For example, specifying <b>myvalues.yaml</b> will result in <b>helm install --values=myvals.yaml</b></td></tr>
<tr><td><code>updatedependency</code><br/>(Update Dependency)</td><td>(Optional) Run helm dependency update before installing the chart. Update dependencies from <b>requirements.yaml</b> to the <b>charts/</b> directory before packaging.<br/>Default value: false</td></tr>
<tr><td><code>waitForExecution</code><br/>(Wait)</td><td>(Optional) Block until command execution completes.<br/>Default value: true</td></tr>
<tr><td><code>arguments</code><br/>(Arguments)</td><td>Helm command options</td></tr>
</table>

This YAML example demonstrates the **install** command:

```YAML
- task: HelmDeploy@0
  displayName: Helm install
  inputs:
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureResourceGroup: $(azureResourceGroup)
    kubernetesCluster: $(kubernetesCluster)
    command: install
    chartType: FilePath
    chartPath: Application/charts/sampleapp
```

## package command

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>(Command)</td><td>(Required) Select a helm command.<br/>Default value: ls</td></tr>
<tr><td><code>chartPath</code><br/>(Chart Path)</td><td>(Required) Path to the chart to install. This can be a path to a packaged chart or a path to an unpacked chart directory. For example, if <b>./redis</b> is specified the task will run <b>helm install ./redis</b></td></tr>
<tr><td><code>version</code><br/>(Version)</td><td>(Optional) Specify the exact chart version to install. If this is not specified, the latest version is installed. Set the version on the chart to this semver version.</td></tr>
<tr><td><code>destination</code><br/>(Destination)</td><td>(Optional) Specify values in a YAML file or a URL.<br/>Default value: $(Build.ArtifactStagingDirectory)</td></tr>
<tr><td><code>updatedependency</code><br/>(Update Dependency)</td><td>(Optional) Run helm dependency update before installing the chart. Update dependencies from <b>requirements.yaml</b> to the <b>charts/</b> directory before packaging.<br/>Default value: false</td></tr>
<tr><td><code>save</code><br/>(Save)</td><td>(Optional) Save packaged chart to local chart repository.<br/>Default value: true</td></tr>
<tr><td><code>arguments</code><br/>(Arguments)</td><td>Helm command options.</td></tr>
</table>

This YAML example demonstrates the **package** command:

```YAML
- task: HelmDeploy@0
  displayName: Helm package
  inputs:
    command: package
    chartPath: Application/charts/sampleapp
    destination: $(Build.ArtifactStagingDirectory)
```

## upgrade command

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>command</code><br/>(Command)</td><td>(Required) Select a helm command.<br/>Default value: ls</td></tr>
<tr><td><code>chartType</code><br/>(Chart Type)</td><td>(Required) Select how you want to enter chart information. You can provide either the name of the chart or the folder/file path to the chart.<br/>Default value: Name</td></tr>
<tr><td><code>chartName</code><br/>(Chart Name)</td><td>(Required) Chart reference to install, this can be a url or a chart name. For example, if chart name is <b>stable/mysql</b>, the task will run <b>helm install stable/mysql</b></td></tr>
<tr><td><code>releaseName</code><br/>(Release Name)</td><td>(Optional) Release name. If not specified, it will be autogenerated.</td></tr>
<tr><td><code>overrideValues</code><br/>(Set Values)</td><td>(Optional) Set values on the command line. You can specify multiple values, or separate values with commas. For example, <b>key1=val1,key2=val2</b>. The task will construct the helm command by using these set values. For example, <b>helm install --set key1=val1 ./redis</b></td></tr>
<tr><td><code>valueFile</code><br/>(Value File)</td><td>(Optional) Specify values in a YAML file or a URL. For example, specifying <b>myvalues.yaml</b> will result in <b>helm install --values=myvals.yaml</b></td></tr>
<tr><td><code>install</code><br/>(Install if release not present)</td><td>(Optional) If a release by this name does not already exist, start an installation.<br/>Default value: true</td></tr>
<tr><td><code>recreate</code><br/>(Recreate Pods)</td><td>(Optional) Performs pods restart for the resource if applicable.<br/>Default value: false</td></tr>
<tr><td><code>resetValues</code><br/>(Reset Values)</td><td>(Optional) Reset the values to the ones built into the chart.<br/>Default value: false</td></tr>
<tr><td><code>force</code><br/>(Force)</td><td>(Optional) Force resource update through delete/recreate if required.<br/>Default value: false</td></tr>
<tr><td><code>wait</code><br/>(Wait)</td><td>(Optional) Block until command execution completes.<br/>Default value: true​</td></tr>
<tr><td><code>arguments</code><br/>(Arguments)</td><td>Helm command options</td></tr>
</table>

This YAML example demonstrates the **upgrade** command:

```YAML
- task: HelmDeploy@0
  displayName: Helm upgrade
  inputs:
    azureSubscriptionEndpoint: $(azureSubscriptionEndpoint)
    azureResourceGroup: $(azureResourceGroup)
    kubernetesCluster: $(kubernetesCluster)
    command: upgrade
    chartType: filepath
    chartPath: $(Build.ArtifactStagingDirectory)/sampleapp-v0.2.0.tgz
    releaseName: azuredevopsdemo
    install: true
    waitForExecution: false
```

::: moniker-end

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
