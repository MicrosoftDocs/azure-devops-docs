---
title: Deploy to Kubernetes
description: Use Azure Pipelines to deploy to Kubernetes clusters
ms.topic: how-to
ms.assetid: 710a03c9-d8ba-4013-bf8f-e672efc7abe4
ms.date: 05/27/2025
monikerRange: '>= azure-devops-2022'
ms.custom: engagement-fy23
---

# Deploy to Kubernetes

[!INCLUDE [version-eq-azure-devops](../../../includes/version-gt-eq-2022.md)]

Use Azure Pipelines to deploy to [Azure Kubernetes Service](/azure/aks/) and Kubernetes clusters offered by other cloud providers. Azure Pipelines has two tasks for working with Kubernetes:

* [KubernetesManifest task](/azure/devops/pipelines/tasks/reference/kubernetes-manifest-v0): bake and deploy manifests to Kubernetes clusters with Helm, Kompose, or Kustomize
* [Kubectl task](/azure/devops/pipelines/tasks/reference/kubernetes-v1): deploy, configure, and update a Kubernetes cluster in Azure Container Service by running kubectl commands

If you use Azure Kubernetes Service with either task, the Azure Resource Manager service connection type is the best way to connect to a private cluster or a cluster with local accounts disabled. 

For added deployment traceability, use a [Kubernetes resource](../../process/environments-kubernetes.md) in [environments](../../process/environments.md) along with a Kubernetes task. 

To get started with Azure Pipelines and Azure Kubernetes Service, see [Build and deploy to Azure Kubernetes Service with Azure Pipelines](/azure/aks/devops-pipeline). To get started with Azure Pipelines, Kubernetes, and the canary deployment strategy, see [Use a canary deployment strategy for Kubernetes deployments with Azure Pipelines](./canary-demo.md). 

## KubernetesManifest task

The [KubernetesManifest task](/azure/devops/pipelines/tasks/reference/kubernetes-manifest-v0) checks for object stability before marking a task as successful or failed. The task can also perform artifact substitution, add pipeline traceability-related annotations, simplify creation and referencing of imagePullSecrets, bake manifests, and aid in deployment strategy roll outs.

> [!NOTE]
>  YAML-based pipeline support triggers on a single Git repository. If you need a trigger for a manifest file stored in another Git repository, or if triggers are needed for Azure Container Registry or Docker Hub, use a classic pipeline instead of a YAML-based pipeline.

You can use the bake action in the [Kubernetes manifest task](/azure/devops/pipelines/tasks/reference/kubernetes-manifest-v0) to bake templates into Kubernetes manifest files. The action lets you use tools such as [Helm](https://helm.sh), [Kustomize](https://github.com/kubernetes-sigs/kustomize), and [Kompose](https://github.com/kubernetes/kompose). The bake action of the Kubernetes manifest task shows the transformation between input templates and the final manifest files used in deployments.  You can consume baked manifest files downstream (in tasks) as inputs for the deploy action of the Kubernetes manifest task. 

Target [Kubernetes resources](../../process/environments-kubernetes.md) that are part of [environments](../../process/environments.md) with [deployment jobs](../../process/deployment-jobs.md). Using environments and resource deployments improves pipeline traceability, helping you diagnose deployment issues. You can also deploy to Kubernetes clusters with regular [jobs](../../process/phases.md) without the same health features.

The following YAML code shows how to bake manifest files from Helm charts

```yaml
steps:
- task: KubernetesManifest@1
  name: bake
  displayName: Bake K8s manifests from Helm chart
  inputs:
    action: bake
    helmChart: charts/sample
    overrides: 'image.repository:nginx'

- task: KubernetesManifest@1
  displayName: Deploy K8s manifests
  inputs:
    kubernetesServiceConnection: someK8sSC
    namespace: default
    manifests: $(bake.manifestsBundle)
    containers: |
      nginx: 1.7.9
```
## Kubectl task

As an alternative to the KubernetesManifest [KubernetesManifest task](/azure/devops/pipelines/tasks/reference/kubernetes-manifest-v0), use the [Kubectl task](/azure/devops/pipelines/tasks/reference/kubernetes-v1) to deploy, configure, and update a Kubernetes cluster in Azure Container Service by running kubectl commands. 

This example shows how a service connection refers to the Kubernetes cluster. 

```yaml
- task: Kubernetes@1
  displayName: kubectl apply
  inputs:
    connectionType: Kubernetes Service Connection
    kubernetesServiceConnection: Contoso #alias: kubernetesServiceEndpoint
```

## Script task

Use `kubectl` with a [script task](../../scripts/cross-platform-scripting.md). 

This example uses a script to run `kubectl`. 

```yaml
- script: |
    kubectl apply -f manifest.yml
```


## Kubernetes deployment strategies

The [Kubernetes manifest task](/azure/devops/pipelines/tasks/reference/kubernetes-manifest-v0) supports the canary deployment strategy. Use the canary deployment strategy to partially deploy new changes so the new changes coexist with current deployments before a full rollout. 

For more information about canary deployments with pipelines, see [Use a canary deployment strategy for Kubernetes deployments with Azure Pipelines](./canary-demo.md). 

## Multicloud Kubernetes deployments

Kubernetes works the same way on all cloud providers. Use Azure Pipelines to deploy to Azure Kubernetes Service (AKS), Google Kubernetes Engine (GKE), Amazon Elastic Kubernetes Service (EKS), or clusters from other cloud providers.

To set up multicloud deployment, [create an environment](../../process/environments.md#create-an-environment) and add Kubernetes resources associated with namespaces of Kubernetes clusters. 

* [Azure Kubernetes Service](../../process/environments-kubernetes.md#use-azure-kubernetes-service)
* [Generic provider using existing service account](../../process/environments-kubernetes.md#use-an-existing-service-account)

> The generic provider approach, based on an existing service account, works with clusters from any cloud provider, including Azure. Using the Azure Kubernetes Service option creates new [ServiceAccount](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) and [RoleBinding](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#service-account-permissions) objects. This ensures the RoleBinding object limits the ServiceAccount's operations to the chosen namespace.

When using the generic provider approach, [ensure a RoleBinding exists](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#kubectl-create-rolebinding) that grants permissions in the `edit` `ClusterRole` to the desired service account. Grant permissions to the correct service account so Azure Pipelines can use it to create objects in the chosen namespace.

### Parallel deployments to multiple clouds

The following example shows how to do parallel deployments to clusters in multiple clouds. In this example, there are deployments to the AKS, GKE, EKS, and OpenShift clusters. These four namespaces are associated with Kubernetes resources under the `contoso` environment. 

```YAML
trigger:
- main

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
        - task: KubernetesManifest@1
          displayName: Deploy to Kubernetes cluster
          inputs:
            action: deploy
            kubernetesServiceConnection: serviceConnection #replace with your service connection
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
        - task: KubernetesManifest@1
          displayName: Deploy to Kubernetes cluster
          inputs:
            action: deploy
            kubernetesServiceConnection: serviceConnection #replace with your service connection
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
        - task: KubernetesManifest@1
          displayName: Deploy to Kubernetes cluster
          inputs:
            action: deploy
            kubernetesServiceConnection: serviceConnection #replace with your service connection
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
        - task: KubernetesManifest@1
          displayName: Deploy to Kubernetes cluster
          inputs:
            action: deploy
            kubernetesServiceConnection: serviceConnection #replace with your service connection
            namespace: openshiftnamespace
            manifests: manifests/*
- deployment:
  displayName: Deploy to DigitalOcean
  pool:
    vmImage: ubuntu-latest
  environment: contoso.digitaloceannamespace
  strategy:
    runOnce:
      deploy:
        steps:
        - checkout: self
        - task: KubernetesManifest@1
          displayName: Deploy to Kubernetes cluster
          inputs:
            action: deploy
            kubernetesServiceConnection: serviceConnection #replace with your service connection
            namespace: digitaloceannamespace
            manifests: manifests/*
```
