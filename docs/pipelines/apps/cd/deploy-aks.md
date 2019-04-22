---
title: Deploy a Docker container app to AKS
description: Set up continuous deployment (CD) of a Docker-enabled app to an Azure Kubernetes Service (AKS) from Azure Pipelines
ms.assetid:
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '> tfs-2018'
---

# Deploy a Docker container app to Azure Kubernetes Service

**Azure Pipelines**

We'll show you how to set up continuous deployment of your containerized application to an Azure Kubernetes Service (AKS) using
Azure Pipelines.

After you commit and push a code change, it will be automatically built and deployed to the target Kubernetes cluster.

## Example

If you want some sample code that works with this guidance, import (into Azure DevOps) or fork (into GitHub) this repo:

```
https://github.com/Microsoft/devops-project-samples/tree/master/dotnet/aspnetcore/kubernetes/Application

```


## Define your CI build process

You'll need a continuous integration (CI) build process that publishes a container image to a container registry (for example: Azure Container Registry) and packages a Helm chart.

To set up a CI build process, see:

* [Build a Docker image](../../languages/docker.md) and [create a Helm chart](../../languages/helm.md).

## Prerequisites

You'll need an Azure subscription. You can get one free through [Visual Studio Dev Essentials](https://visualstudio.microsoft.com/dev-essentials/).

## Create an AKS to host your app

1. Sign into Azure at [https://portal.azure.com](https://portal.azure.com).

1. In the Azure Portal, choose **Create a resource**, **New**, **Containers**, then choose **Kubernetes Service**.    

1. Select or create a new Resource Group, enter name for your new Kubernetes Service cluster and DNS name prefix.

1. Choose **Review + Create** and then, after validation, choose **Create**.

1. Wait until the new AKS cluster has been created.

## Configure authentication

When you use Azure Container Registry (ACR) with Azure Kubernetes Service (AKS),
you must establish an authentication mechanism. This can be achieved in two ways:

1. Grant AKS access to ACR. See [Authenticate with Azure Container Registry from Azure Kubernetes Service](https://docs.microsoft.com/azure/container-registry/container-registry-auth-aks#grant-aks-access-to-acr).

1. Use a [Kubernetes image pull secret](https://docs.microsoft.com/azure/container-registry/container-registry-auth-aks#access-with-kubernetes-secret).
   An image pull secret can be created by using the [Kubernetes deployment task](../../tasks/deploy/kubernetes.md).

## Create a release pipeline

The build pipeline used to set up CI has already built a Docker image and pushed it to an Azure Container Registry.
It also packaged and published a Helm chart as an artifact. In the release pipeline we'll deploy the container image as a Helm application to the AKS cluster.

1. In **Azure Pipelines**, or the **Build &amp; Release** hub in TFS, open the summary for your build.

1. In the build summary, choose the **Release** icon to start a new release pipeline.

   If you have previously created a release pipeline that uses these build artifacts, you will
   be prompted to create a new release instead. In that case, go to the **Releases** page and
   start a new release pipeline from there by choosing the **+** icon.

1. Select the **Empty job** template.

1. Open the **Tasks** page and select **Agent job**.

1. Choose **+** to add a new task and add a **Helm tool installer** task.
   This ensures the agent that runs the subsequent tasks has Helm and Kubectl installed on it.

1. Choose **+** again and add a **Package and deploy Helm charts** task.
   Configure the settings for this task as follows:

   - **Connection Type**: Select **Azure Resource Manager** to connect to an AKS cluster by using
     an Azure service connection. If, alternatively, you want to connect to any Kubernetes
     cluster by using kubeconfig or a service account, you can select **Kubernetes Service Connection**.
     In this case, you will need to create and select a Kubernetes service connection instead of
     an Azure subscription for the following setting.
 
   - **Azure subscription**: Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions connection to your Azure subscription.
     If you see an **Authorize** button next to the input, use it to authorize the connection to your Azure subscription.
     If you do not see the required Azure subscription in the list of subscriptions, see [Create an Azure service connection](../../library/connect-to-azure.md) to manually set up the connection.

   - **Resource group**: Enter or select the resource group containing your AKS cluster.  
   
   - **Kubernetes cluster**: Enter or select the AKS cluster you created.  
   
   - **Command**: Select **init** as the Helm command. This will install Tiller to your running Kubernetes cluster.
     It will also set up any necessary local configuration.
     Tick **Use canary image version** to install the latest pre-release version of Tiller.
     You could also choose to upgrade Tiller if it is pre-installed by ticking **Upgrade Tiller**.
     If these options are enabled, the task will run `helm init --canary-image --upgrade`
   
1. Choose **+** in the **Agent job** and add another **Package and deploy Helm charts** task.
   Configure the settings for this task as follows:
   
   - **Kubernetes cluster**: Enter or select the AKS cluster you created.  
   
   - **Namespace**: Enter your Kubernetes cluster namespace where you want to deploy your application.
     Kubernetes supports multiple virtual clusters backed by the same physical cluster.
     These virtual clusters are called _namespaces_.
     You can use namespaces to create different environments such as dev, test, and staging in the same cluster. 

   - **Command**: Select **upgrade** as the Helm command.
     You can run any Helm command using this task and pass in command options as arguments.
     When you select the **upgrade**, the task shows some additional fields:

     * **Chart Type**: Select **File Path**. Alternatively, you can specify **Chart Name** if you want to
       specify a URL or a chart name. For example, if the chart name is `stable/mysql`, the task will execute
       `helm upgrade stable/mysql` 
   
     * **Chart Path**: This can be a path to a packaged chart or a path to an unpacked chart directory.
       In this example you are publishing the chart using a CI build, so select the file package using file picker
       or enter `$(System.DefaultWorkingDirectory)/**/*.tgz`
   
     * **Release Name**: Enter a name for your release; for example `azuredevops`
   
     * **Recreate Pods**: Tick this checkbox if there is a configuration change during the release and you want to replace a running pod with the new configuration.

     * **Reset Values**: Tick this checkbox if you want the values built into the chart to override all values provided by the task.

     * **Force**: Tick this checkbox if, should conflicts occur, you want to upgrade and rollback to delete, recreate the resource, and reinstall the full release.
       This is useful in scenarios where applying patches can fail (for example, for services because the cluster IP address is immutable). 

     * **Arguments**: Enter the Helm command arguments and their values; for this example
       `--set image.repository=$(imageRepoName) --set image.tag=$(Build.BuildId)` 
       See [this section](#argument-details) for a description of why we are using these arguments. 
   
     * **Enable TLS**: Tick this checkbox to enable strong TLS-based connections between Helm and Tiller.

     * **CA certificate**: Specify a CA certificate to be uploaded and used to issue certificates for Tiller and Helm client.
 
     * **Certificate**: Specify the Tiller certificate or Helm client certificate

     * **Key**: Specify the Tiller Key or Helm client key

1. In the **Variables** page of the pipeline, add a variable named **imageRepoName** and set the value
   to the name of your Helm image repository. Typically, this is in the format `name.azurecr.io/coderepository`

1. Save the release pipeline.

<a name="argument-details"></a>

### Arguments used in the Helm upgrade task

In the build pipeline, the container image is tagged with `$(Build.BuildId)` and this is pushed to an Azure Container Registry. 
In a Helm chart you can parameterize the container image details such as the name and tag
because the same chart can be used to deploy to different environments.
These values can also be specified in the **values.yaml** file or be overridden by a user-supplied values file,
which can in turn be overridden by `--set` parameters during the Helm install or upgrade.
   
In this example, we pass the following arguments:   

`--set image.repository=$(imageRepoName) --set image.tag=$(Build.BuildId)` 
   
The value of `$(imageRepoName)` was set in the **Variables** page (or the **variables** section of your YAML file).
Alternatively, you can directly replace it with your image repository name in the `--set` arguments value or **values.yaml** file.
For example:

```
  image:
    repository: VALUE_TO_BE_OVERRIDDEN
    tag: latest
```

Another alternative is to set the **Set Values** option of the task to specify the argument values as comma separated key-value pairs.

## Create a release to deploy your app

You're now ready to create a release, which means to start the process of running the release pipeline with the artifacts produced by a specific build. This will result in deploying the build:

1. Choose **+ Release** and select **Create a release**.

1. In the **Create a new release** panel, check that the artifact version you want to use is selected and choose **Create**.

1. Choose the release link in the information bar message. For example: "Release **Release-1** has been created".

1. In the pipeline view, choose the status link in the stages of the pipeline to see the logs and agent output.


## Next steps

* [Set up multi-stage release](../../release/define-multistage-release-process.md)
