---
title: Package a Docker-enabled app in a Helm chart
description: Package and deploy a Docker-enabled app to an Azure Kubernetes Service (AKS) in Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.assetid: 154DFD11-88BC-4DF8-9D24-A546CCAAADD2
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.custom: seodec18
ms.date: 08/28/2018
monikerRange: 'azure-devops'
---

# Package Docker-based apps in Helm charts in Azure Pipelines

**Azure Pipelines**

This guidance explains how to use [Helm](https://www.helm.sh/) to package a Docker-based application in a Helm chart.

Helm is a tool that streamlines deploying and managing Kubernetes applications using a packaging format called [charts](https://github.com/helm/helm/blob/master/docs/charts.md).
You can define, version, share, install, and upgrade even the most complex Kubernetes application using Helm. 

1.	Helm helps you combine multiple Kubernetes manifests (yaml) like service, deployments, configmaps etc. in to a single unit called Helm Charts. You don’t need to either invent or use a tokenization or templating tool.
2.	Helm Charts also help you manage application dependencies and deploy as well as rollback as a unit. They are also easy to create, version, publish and share with other partner teams

A Helm chart consists of metadata, definitions, config and documentation. This can be either stored in the same code repository as your application code or in a separate repository. 
Helm can package these files into a chart archive (*.tgz file), which gets deployed to a Kubernetes cluster. 

The steps required to build a container image and pushing it to a container registry remains the same. Once that has been the done, we start creating a Helm Chart archive package. 

Azure Pipelines has built-in support for Helm charts:
1.	[Helm Tool installer task](../tasks/tool/helm-installer.md) can be used to get the right version of Helm on the agents.
2.	[Helm package and deploy task](../tasks/deploy/helm-deploy.md) can be used to package the application and deploy it to a Kubernetes cluster.
3.	You can use the task to install/update Tiller to a Kubernetes namespace, securely connect to the Tiller over TLS for deploying charts, use the task to run any Helm command like lint
4.	The Helm task also supports connecting to an Azure Kubernetes Service by using Azure Service Connection. You can connect to any Kubernetes cluster by using kubeconfig or Service Account as well.
5.	The Helm deployments can be supplemented by using Kubectl task. For example create/update imagepullsecret

## Define your CI build process using Helm

We'll show you how to set up a continuous integration workflow for your containerized application using Azure Pipelines and Helm.


## Prerequisites

You'll need an Azure subscription. You can get one free through [Visual Studio Dev Essentials](https://visualstudio.microsoft.com/dev-essentials/).

You'll need a Docker container image published to a Kubernetes Cluster (for example: Azure Kubernetes Service). 
To set up a continuous integration (CI) build process, see:

* [Build and publish a Docker image](docker.md).


## Package and publish a Helm chart

1. In the **Build &amp; Release** hub, open the [build pipeline](docker.md) created to build and publish a Docker image.

2. Select Tasks tab and click on **+** icon  to add **Helm tool installer** task  to ensure that the agent which runs the subsequent tasks has Helm and Kubernetes installed on it.
3. Click on **+** icon again to add new **Package and deploy Helm charts** task.
Configure the properties as follows:
   - **Connection Type**: Select ‘Azure Resource Manager’ to connect to an AKS cluster by using Azure Service Connection.  Select ‘Container registry’ to connect to any Kubernetes cluster by using kubeconfig or Service Account.
   
   - **Azure Subscription**: Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions connection to your Azure subscription.
     If you are using Azure DevOps and if you see an **Authorize** button next to the input, click on it to authorize Azure DevOps to connect to your Azure subscription. If you do not see
     the desired Azure subscription in the list of subscriptions, see [Azure Resource Manager service connection](../library/connect-to-azure.md) to manually set up the connection.

   - **Resource Group**: Enter or select the resource group of your **AKS cluster**.  
   
   - **Kubernetes cluster**: Enter or select the **AKS cluster** you have created.  
   
   - **Command**: Select **init** as Helm command.
     
   -**Arguments**: Provide additional arguments for the Helm command. In this case set this field as "--client-only" to ensure the installation of only the Helm client.
   
4. Again click on **+** icon to add another **Package and deploy Helm charts** task
   Configure the properties as follows:
   
   - **Command**: Select **package** as Helm command. You can run any Helm command by using the task and passing command options as arguments.
   When you select **package** as the helm command, the task recognizes it and shows only the relevant fields.

   - **Chart Path**: Enter the path to your Helm chart. Chart path can be a path to a packaged chart or a path to an unpacked chart directory. For example if ‘./redis’ is specified the task will run ‘helm package ./redis’. 
   
   -**Version**: Specify a semver version to be set on the chart.
   
   -**Destination**: Choose the destination to publish the Helm chart. If it is the working directory, just set "$(Build.ArtifactStagingDirectory)"
   
   -**Update dependency**: Tick this checkbox to run helm dependency update before installing the chart. Task runs ‘helm package  --dependency-update’ and updates dependencies from 'requirements.yaml' to dir 'charts/' before packaging. 
   
5. Again click on **+** icon to add a **Publish Artifacts** task

6. Save the build pipeline.
