---
title: Deploy to Kubernetes
description: Use Azure Pipelines to deploy to Kubernetes clusters
ms.topic: quickstart
ms.assetid: 710a03c9-d8ba-4013-bf8f-e672efc7abe4
ms.author: atulmal
author: azooinmyluggage
ms.date: 03/03/2022
monikerRange: 'azure-devops'
---
# Deploy to Kubernetes

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

Azure Pipelines can be used to deploy to Kubernetes clusters offered by multiple cloud providers. This document contains the concepts associated with setting up deployments for any Kubernetes cluster.

While it's possible to use script for loading kubeconfig files onto the agent from a remote location or secure files and then use kubectl for performing the deployments, the [KubernetesManifest task](../../tasks/deploy/kubernetes-manifest.md) and [Kubernetes service connection](../../library/service-endpoints.md) are the recommended approach. 

## KubernetesManifest task

The [KubernetesManifest task](../../tasks/deploy/kubernetes-manifest.md) has the added benefits of being able to check for object stability before marking a task as success/failure. The task can also perform artifact substitution, add pipeline traceability-related annotations onto deployed objects, simplify creation and referencing of imagePullSecrets, bake manifests using Helm or kustomization.yaml or Docker compose files, and aid in deployment strategy roll outs.

## Kubernetes resource in environments

The [Kubernetes resource](../../process/environments-kubernetes.md) in [environments](../../process/environments.md) provides a secure way of specifying the credential required to connect to a Kubernetes cluster for performing deployments. 

### Resource creation

In the **Azure Kubernetes Service** provider option, once the subscription, cluster and namespace inputs are provided, in addition to fetching and securely storing the required credentials, for an RBAC-enabled cluster [ServiceAccount](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) and [RoleBinding](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#service-account-permissions) objects are created such that the ServiceAccount is able to perform actions only on the chosen namespace.

The **Generic provider** (reusing existing ServiceAccount) option can be used to configure a connection to any cloud provider's cluster (AKS/EKS/GKE/OpenShift/etc.).

## Example
```YAML

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
          displayName: Create secret
          inputs: 
            action: createSecret
            namespace: aksnamespace
            secretType: dockerRegistry
            secretName: foo-acr-secret
            dockerRegistryEndpoint: fooACR
            
        - task: KubernetesManifest@0
          displayName: Create secret
          inputs: 
            action: createSecret
            namespace: aksnamespace
            secretType: dockerRegistry
            secretName: bar-acr-secret
            dockerRegistryEndpoint: barACR
            
        - task: KubernetesManifest@0
          displayName: Deploy
          inputs:
            action: deploy
            namespace: aksnamespace
            manifests: manifests/deployment.yml|manifests/service.yml
            containers: |
              foo.azurecr.io/demo:$(tagVariable1)
              bar.azurecr.io/demo:$(tagVariable2)
            imagePullSecrets: |
              foo-acr-secret
              bar-acr-secret
```

To allow image pull from private registries, before the `deploy` action, the `createSecret` action is used along with instances of [Docker registry service connection](../../library/service-endpoints.md#docker-registry-service-connection) to create imagePullSecrets that are later referenced in the step corresponding to `deploy` action.

> [!TIP]
> - If setting up an end-to-end CI-CD pipeline from scratch for a repository containing a Dockerfile, checkout the [Deploy to Azure Kubernetes template](aks-template.md), which constructs an end-to-end YAML pipeline along with creation of an [environment](../../process/environments.md) and [Kubernetes resource](../../process/environments-kubernetes.md) to help visualize these deployments.
> -  While YAML based pipeline currently supports triggers on a single Git repository, if triggers are required for manifest files stored in another Git repository or if triggers are required for Azure Container Registry or Docker Hub, usage of release pipelines instead of a YAML based pipeline is recommended for doing the Kubernetes deployments.

## Alternatives

Instead of using the KubernetesManifest task for deployment, one can also use the following alternatives:
- [Kubectl task](../../tasks/deploy/kubernetes.md)
- kubectl invocation on script. For example: ```script: kubectl apply -f manifest.yml```