---
title: Multi-cloud Kubernetes deployments
description: Use Azure Pipelines to deploy to Kubernetes clusters in multiple clouds
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 525536ba-94c7-487b-bcf9-ca7733135e89
ms.manager: jillfra
ms.author: shasb
author: shashankbarsin
ms.date: 08/28/2019
monikerRange: 'azure-devops'
---

# Multi-cloud Kubernetes deployments

[!INCLUDE [include](../../_shared/version-team-services.md)]
With Kubernetes having a standard interface and running the same way on all cloud providers, Azure Pipelines can be used for deploying to Azure Kubernetes Service (AKS), Google Kubernetes Engine (GKE), Amazon Elastic Kubernetes Service (EKS), or clusters from any other cloud providers. This document contains information on how to connect to each of these clusters, and how to perform parallel deployments to multiple clouds - 

## Setup environment and Kubernetes resources

[Kubernetes resources](../../process/environments-kubernetes.md) belonging to [environments](../../process/environments.md) can be targeted from [deployment jobs](../../process/deployment-jobs.md) to enable pipeline traceability and ability to diagnose resource health.

> [!NOTE]
> Deployments to Kubernetes clusters are possible using regular [jobs](../../process/phases.md) as well, but the benefits of pipeline traceability and ability to diagnose resource health are not available in this option.

To set up multi-cloud deployment, [create an environment](../../process/environments.md#creation) and subsequently add Kubernetes resources associated with namespaces of Kubernetes clusters. Follow the steps under the linked sections based on the cloud provider of your Kubernetes cluster - 
- [Azure Kubernetes Service](../../process/environments-kubernetes.md#resource-creation-aks)
- [Generic provider using existing service account](../../process/environments-kubernetes.md#resource-creation-generic) (For GKE/EKS/...)

> [!TIP]
> The generic provider approach based on existing service account works with clusters from any cloud provider, including Azure. The incremental benefit of using the Azure Kubernetes Service option instead is that it involves creation of new [ServiceAccount](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) and [RoleBinding](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#service-account-permissions) objects (instead of reusing an existing ServiceAccount) so that the newly created RoleBinding object limits the operations of the ServiceAccount to the chosen namespace only.

## Parallel deployments to multiple clouds

The following YAML snippet showcases how to perform parallel deployments to clusters from multiple clouds. In this example, deployments are done to resources corresponding to namespaces from AKS, GKE, EKS, and OpenShift clusters. These four namespaces are associated with Kubernetes resources under the 'contoso' environment. 

```YAML
trigger:
- master

jobs:
- deployment:
  displayName: Deploy to AKS
  pool:
    vmImage: ubuntu-latest
  environment: contoso.aksnamespace
  strategy:
    runOnce:
      deploy:
        steps:
        - checkout: self
        - task: KubernetesManifest@0
          displayName: Deploy to Kubernetes cluster
          inputs:
            action: deploy
            namespace: aksnamespace
            manifests: manifests/*
- deployment:
  displayName: Deploy to GKE
  pool:
    vmImage: ubuntu-latest
  environment: contoso.gkenamespace
  strategy:
    runOnce:
      deploy:
        steps:
        - checkout: self
        - task: KubernetesManifest@0
          displayName: Deploy to Kubernetes cluster
          inputs:
            action: deploy
            namespace: gkenamespace
            manifests: manifests/*
- deployment:
  displayName: Deploy to EKS
  pool:
    vmImage: ubuntu-latest
  environment: contoso.eksnamespace
  strategy:
    runOnce:
      deploy:
        steps:
        - checkout: self
        - task: KubernetesManifest@0
          displayName: Deploy to Kubernetes cluster
          inputs:
            action: deploy
            namespace: eksnamespace
            manifests: manifests/*
- deployment:
  displayName: Deploy to OpenShift
  pool:
    vmImage: ubuntu-latest
  environment: contoso.openshiftnamespace
  strategy:
    runOnce:
      deploy:
        steps:
        - checkout: self
        - task: KubernetesManifest@0
          displayName: Deploy to Kubernetes cluster
          inputs:
            action: deploy
            namespace: openshiftnamespace
            manifests: manifests/*
```
