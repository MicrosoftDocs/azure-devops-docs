---
title: Bake manifests
description: Bake manifests to be used in deployments to Kubernetes clusters
ms.topic: quickstart
ms.assetid: 33ffbd7f-746b-4338-8669-0cd6adce6ef4
ms.date: 08/26/2022
monikerRange: 'azure-devops'
---

# Bake manifests
[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

You can use the bake action in the [Kubernetes manifest task](../../tasks/deploy/kubernetes-manifest.md) to bake templates into Kubernetes manifest files. The action lets you use tools such as [Helm](https://helm.sh), [kustomize](https://github.com/kubernetes-sigs/kustomize), and [kompose](https://github.com/kubernetes/kompose). With baking, these Kubernetes manifest files are usable for deployments to the cluster.

The bake action of the Kubernetes manifest task provides visibility into the transformation between input templates and the end manifest files that are used in deployments. 

You can consume baked manifest files downstream (in tasks) as inputs for the deploy action of the Kubernetes manifest task. 


## Helm example

```YAML
- deployment:
  displayName: Bake and deploy to AKS
  pool:
    vmImage: ubuntu-latest
  environment: contoso.aksnamespace
  strategy:
    runOnce:
      deploy:
        steps:
        - checkout: self
        - task: KubernetesManifest@0
          name: bake
          displayName: Bake K8s manifests from Helm chart
          inputs:
            action: bake
            renderType: helm2
            helmChart: charts/sample
            overrides: 'image.repository:nginx'
        
        - task: KubernetesManifest@0
          displayName: Deploy K8s manifests
          inputs:
            kubernetesServiceConnection: k8sSC1
            manifests: $(bake.manifestsBundle)
            containers: |
              nginx: 1.7.9
```

> [!NOTE]
> To use Helm directly for managing releases and rollbacks, see the [Package and Deploy > Helm Charts task](../../tasks/deploy/helm-deploy.md).

## Kustomize example

```YAML
steps:
- task: KubernetesManifest@0
  name: bake
  displayName: Bake K8s manifests from kustomization path
  inputs:
    action: bake
    renderType: kustomize
    kustomizationPath: folderContainingKustomizationFile

- task: KubernetesManifest@0
  displayName: Deploy K8s manifests
  inputs:
    kubernetesServiceConnection: k8sSC1
    manifests: $(bake.manifestsBundle)
```

## Kompose example

```YAML
steps:
- task: KubernetesManifest@0
  name: bake
  displayName: Bake K8s manifests from Docker Compose
  inputs:
    action: bake
    renderType: kompose
    dockerComposeFile: docker-compose.yaml

- task: KubernetesManifest@0
  displayName: Deploy K8s manifests
  inputs:
    kubernetesServiceConnection: k8sSC1
    manifests: $(bake.manifestsBundle)
```
