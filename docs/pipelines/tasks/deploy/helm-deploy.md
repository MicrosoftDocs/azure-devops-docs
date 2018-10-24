---
title: Package and Deploy Helm Charts task
titleSuffix: Azure Pipelines & TFS
description: Deploy, configure, update your Kubernetes cluster in Azure Container Service by running helm commands.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: AFA7D54D-537B-4DC8-B60A-E0EEEA2C9A87
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Package and Deploy Helm Charts task

**Azure Pipelines**

Use this task in a build or release pipeline to deploy, configure, or update a Kubernetes cluster in Azure Container Service by running Helm commands.
Helm is a tool that streamlines deploying and managing Kubernetes apps using a packaging format called
[charts](https://github.com/helm/helm/blob/master/docs/charts.md).
You can define, version, share, install, and upgrade even the most complex Kubernetes app by using Helm. 

* Helm helps you combine multiple Kubernetes manifests (yaml) such as service, deployments, configmaps, and more into a single unit called Helm Charts.
  You don't need to either invent or use a tokenization or a templating tool.
* Helm Charts also help you manage application dependencies and deploy as well as rollback as a unit.
  They are also easy to create, version, publish, and share with other partner teams.

Azure Pipelines has built-in support for Helm charts:

* The [Helm Tool installer task](../tool/helm-installer.md) can be used to get the correct version of Helm onto the agents.
* The Helm package and deploy task can be used to package the app and deploy it to a Kubernetes cluster. 
  You can use the task to install or update Tiller to a Kubernetes namespace, to securely connect to Tiller over TLS for deploying charts,
  or to run any Helm command such as lint.
* The Helm task also supports connecting to an Azure Kubernetes Service by using an Azure service connection.
  You can connect to any Kubernetes cluster by using kubeconfig or a service account.
* Helm deployments can be supplemented by using the Kubectl task; for example, create/update, imagepullsecret.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/HelmDeployV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Connection Type</td><td>(Required) Select ‘Azure Resource Manager' to connect to an Azure Kubernetes Service(AKS) cluster by using Azure Service Connection.  Select ‘Container registry' to connect to any Kubernetes cluster by using kubeconfig or Service Account.
</td></tr>
<tr><td>Azure subscription</td><td>(Required) Select an Azure subscription, which has your Azure Container Registry.</td></tr>
<tr><td>Resource group</td><td>(Required) Enter or select the resource group of your AKS cluster.</td></tr>
<tr><td>Kubernetes cluster</td><td>(Required) Select an Azure Managed AKS Cluster.</td></tr>
<tr><td>Kubernetes Service Connection</td><td>(Required) Select a Kubernetes service connection.</td></tr>
<tr><td>Namespace</td><td>(Optional) Specify the Kubernetes cluster namespace where you want to deploy your application. Kubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called namespaces. You can use Namespace to create diferent environments like dev/test/staging in the same cluster. Use Tiller namespace in advance section to specify tiller namespace.</td></tr>
<tr><td>Command</td><td>(Required) Select a helm command.</td></tr>
<tr><td>Chart Type</td><td>(Required) Select how you want to enter chart info. You can either provide name of the chart or folder/file path to the chart.</td></tr>
<tr><td>Chart Name</td><td>(Required) Name of the chart to install or upgrade.</td></tr>
<tr><td>Chart Path</td><td>(Required) Path to the chart to install or upgrade.Chart path can be a path to a packaged chart or a path to an unpacked chart directory. For example if ‘./redis' is specified the task will run ‘helm package ./redis'.</td></tr>
<tr><td>Version</td><td>(Optional) Specify the exact chart version to install. If this is not specified, the latest version is installed. Set the version on the chart to this semver version?</td></tr>
<tr><td>Release Name</td><td>(Optional) Release name. If unspecified, it will autogenerate one for you.</td></tr>
<tr><td>Set Values</td><td>(Optional) Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2).In the Helm chart you can parameterize the container image details like name and tag because the same Helm chart can be used for deploying to different environments. These values can also be specified in the values.yaml file of the chart or be overridden by a user-supplied values file, which can in turn be overridden by --set parameters during helm install or helm upgrade.</td></tr>
<tr><td>Value File</td><td>(Optional) Specify values in a YAML file or a URL.</td></tr>
<tr><td>Destination</td><td>(Optional) Specify values in a YAML file or a URL.</td></tr>
<tr><td>Use canary image version.</td><td>(Optional) Use the canary Tiller image. Will install the latest pre-release version of Tiller.</td></tr>
<tr><td>Upgrade Tiller</td><td>(Optional) Upgrade if Tiller is already installed.</td></tr>
<tr><td>Update Dependency</td><td>(Optional) Run helm dependency update before installing the chart. Update dependencies from 'requirements.yaml' to dir 'charts/' before packaging</td></tr>
<tr><td>Save</td><td>(Optional) Save packaged chart to local chart repository (default true)?</td></tr>
<tr><td>Install if release not present.</td><td>(Optional) If a release by this name doesn't already exist, run an install?.</td></tr>
<tr><td>Recreate Pods.</td><td>(Optional) Performs pods restart for the resource if applicable.</td></tr>
<tr><td>Reset Values.</td><td>(Optional) Reset the values to the ones built into the chart.</td></tr>
<tr><td>Force</td><td>(Optional) Force resource update through delete/recreate if you want to upgrade and rollback when there are any conflicts. This is useful in scenarios where applying patches can fail (e.g., for services, because clusterIp is immutable).</td></tr>
<tr><td>Wait</td><td>(Optional) Block till command execution completes.</td></tr>
<tr><td>Arguments</td><td>(Optional) Command arguments.</td></tr>
<tr><td>Enable TLS</td><td>(Optional) Enables using SSL between Helm and Tiller.</td></tr>
<tr><td>CA certificate</td><td>(Required) CA cert used to issue certificate for tiller and helm client.</td></tr>
<tr><td>Certificate</td><td>(Required) Specify Tiller certificate or Helm client certificate</td></tr>
<tr><td>Key</td><td>(Required) Specify Tiller Key or Helm client key</td></tr>
<tr><td>Tiller namespace</td><td>(Optional) Specify K8 namespace of tiller.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.
