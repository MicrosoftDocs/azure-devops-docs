---
title: Deploy a Docker container app to an Azure Kubernetes Service (AKS)
description: Set up continuous deployment (CD) of a Docker-enabled app to an Azure Kubernetes Service (AKS) from Azure Pipelines
ms.assetid:
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: 'vsts'
---

# Deploy to an Azure Kubernetes Service

We'll show you how to set up continuous deployment of your containerized application to an Azure Kubernetes Service (AKS) using
Azure Pipelines.

After you commit and push a code change, it will be automatically built and deployed to the target Kubernetes cluster.

## Example

If you want some sample code that works with this guidance, import (into Azure DevOps or Azure DevOps Server) or fork (into GitHub) this repo:

```
https://github.com/Microsoft/devops-project-samples/tree/master/dotnet/aspnetcore/kubernetes/Application

```


## Define your CI build process

You'll need a continuous integration (CI) build process that publishes a container image to a container registry (for example: Azure Container Registry) and packages a Helm chart.

To set up a CI build process, see:
* [Build Docker image and publish Helm chart](../../languages/docker.md).

## Prerequisites

You'll need an Azure subscription. You can get one free through [Visual Studio Dev Essentials](https://visualstudio.microsoft.com/dev-essentials/).

## Create an AKS to host your app

1. Sign into Azure at [https://portal.azure.com](https://portal.azure.com).

2. In the Azure Portal, choose **Create a resource**, **New**, **Containers**, then choose **Kubernetes Service**.    

3. Select or create a new Resource Group, enter name for your new Kubernetes Service cluster and DNS name prefix

   ![Creating AKS Cluster](_img/create-aks-cluster.png)

4. Click on **Review + Create** and then once validation passes, click on **Create** button.

5. Wait until the new AKS cluster has been created. Then you can create a release pipeline as shown in the next section.

The build pipeline used to set up CI has already built a Docker image and pushed it to a Azure Container Registry. It has also packaged and published a Helm chart as an artifact. In the release pipleine we will deploy the container image as a Helm application to the AKS cluster.


## Create a release pipeline

1. In the **Build &amp; Release** hub, open the build summary for your build.

2. In the build summary page, choose the **Release** icon to start a new release pipeline.

   If you have previously created a release pipeline that uses these build artifacts, you will
   be prompted to create a new release instead. In that case, go to the **Releases** tab page and
   start a new release pipeline from there by choosing the **+** icon.

3. Select the **Empty Process**.

   ![Adding the App Service Deployment task](_img/add-empty-process.png)

4. Go to **Environment 1** and click on **+** icon to add new task
5. Add **Helm tool installer** task to ensure that the agent which runs the subsequent tasks has Helm and Kubectl installed on it.
6. Click on **+** icon again to add new **Package and deploy Helm charts** task
   Configure the properties as follows:

   - **Connection Type**: Select ‘Azure Resource Manager’ to connect to an AKS cluster by using Azure Service Connection.  Select ‘Container registry’ to connect to any Kubernetes cluster by using kubeconfig or Service Account.
 
   - **Azure Subscription**: Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions connection to your Azure subscription.
     If you are using Azure DevOps and if you see an **Authorize** button next to the input, click on it to authorize Azure DevOps to connect to your Azure subscription. If you are using Azure DevOps Server or if you do not see
     the desired Azure subscription in the list of subscriptions, see [Azure Resource Manager service connection](../../library/connect-to-azure.md) to manually set up the connection.

   - **Resource Group**: Enter or select the resource group of your **AKS cluster**.  
   
   - **Kubernetes cluster**: Enter or select the **AKS cluster** you have created.  
   
   - **Command**: Select **init** as Helm command. This will install Tiller to your running Kubernetes cluster. It will also set up any necessary local configuration. Tick **Use canary image version** to install the latest pre-release version of Tiller. You could also choose to upgrade tiller if it is pre-installed by ticking on **Upgrade Tiller**. If these options are enabled, the task will run 'helm init --canary-image --upgrade'
   
7. Again click on **+** icon to add another **Package Helm charts** task
   Configure the properties as follows:
   
   - **Kubernetes cluster**: Enter or select the **AKS cluster** you have created.  
   
   - **Namespace**: Enter your Kubernetes cluster namespace where you want to deploy your application. Kubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called namespaces. You can use Namespace to create diferent environments like dev/test/staging in the same cluster. 

   - **Command**: Select **upgrade** as Helm command. You can run any Helm command by using the task and passing command options as arguments.

   When you select the **upgrade** as helm command, the task recognizes it and shows some additional fields.

   - **Chart Type**: Select **File Path** as Chart type. You can also specify **Chart Name** which can be a url or a chart name. For example: If Chart name is ‘stable/mysql’, the task will run ‘helm upgrade stable/mysql’. 
   
   Since in our build pipeline we packaged and published the chart, we will use File Path.   
   
   - **Chart Path**: Chart path can be a path to a packaged chart or a path to an unpacked chart directory. If you are publishing it using CI build, you can pick the file package by clicking on file picker.  Or simply enter $(System.DefaultWorkingDirectory)/**/*.tgz
   
   For example if ‘./redis’ is specified the task will run ‘helm upgrade ./redis’.

   - **Release Name**: Give any name to your release. For example **azuredevops**
   
   - **Arguments**: Enter the Helm command arguments and their values here. In the build pipeline we tagged the container image with $(Build.BuildId) and pushed it to an Azure Container Registry. 
   
   In the Helm chart you can parameterize the container image details like name and tag because the same Helm chart can be used for deploying to different environments. These values can also be specified in the values.yaml file of the chart or be overridden by a user-supplied values file, which can in turn be overridden by --set parameters during helm install or helm upgrade.
   
   For our sample app we will pass the following:   
    ```
    --set image.repository=$(imageRepoName) --set image.tag=$(Build.BuildId) 
   
    ```
   > Either set the values of $(imageRepoName) in the variable section or replace it with your image repository name, which is typically of format `name.azurecr.io/coderepository`
   
   Here the assumption is that your Helm chart uses variables to be passed into your templates for image name and tag. For example the values.yaml file will have the following
   ```
   image:
     repository: VALUE_TO_BE_OVERRIDDEN
     tag: latest
   ```
   
 - **Set Values**: You could also specify the values in this field as comma separated key-value pairs or provide a **Value File** which can be a YAML file or a URL.
 
     ```
    When you're using Azure Container Registry (ACR) with Azure Kubernetes Service (AKS), an authentication mechanism needs to be established. this can be achieved in two ways: Either by granting AKS access to ACR https://docs.microsoft.com/en-us/azure/container-registry/container-registry-auth-aks#grant-aks-access-to-acr. Or by using [Kubernetes image pull secret](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-auth-aks#access-with-kubernetes-secret). Image pull secret can be created by using Kubernetes deploy task.
   
    ```
 - **Reset Values**: Tick this checkbox if you need the values built into the chart to override all values provided from the task.
 - **Recreate Pods**: Tick this checkbox if there is a configuration change during the release and you want to replace a running pod with new configuration
 - **Force**: Tick this checkbox if you want to upgrade and rollback to delete, recreate the resource and re-install the full release when there are any conflicts. This is useful in scenarios where applying patches can fail (e.g., for services, because clusterIp is immutable). 
 
 If the above options are chosen, then the task will run ‘helm upgrade --reset-values --recreate-pods --force’
 
 - **Enable TLS**: Tick this checkbox to enable strong TLS based connections between Helm and Tiller. When this option is enabled, the task recognizes it and shows some additional fields.
 - **CA certificate**: Upload a CA cert used to issue certificate for tiller and helm client.
 - **Certificate**: Specify Tiller certificate or Helm client certificate
 - **Key**: Specify Tiller Key or Helm client key

8. Save the release pipeline.

## Create a release to deploy your app

You're now ready to create a release, which means to start the process of running the release pipeline with the artifacts produced by a specific build. This will result in deploying the build:

1. Choose **+ Release** and select **Create Release**.

2. In the **Create new release** panel, check that the artifact version you want to use is selected and choose **Create**.

3. Choose the release link in the information bar message. For example: "Release **Release-1** has been created".

4. Open the **Logs** tab to watch the release console output.


## Next steps

* [Set up multi-stage release](../../release/define-multistage-release-process.md)