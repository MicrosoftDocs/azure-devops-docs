---
title: Bake manifests
description: Bake manifests to be used in deployments to Kubernetes clusters
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 33ffbd7f-746b-4338-8669-0cd6adce6ef4
ms.manager: mijacobs
ms.author: shasb
author: shashankbarsin
ms.date: 08/28/2019
monikerRange: 'azure-devops'
---

# Bake manifests
[!INCLUDE [include](../../_shared/version-team-services.md)]
Bake action of the [Kubernetes manifest task](../../tasks/deploy/kubernetes-manifest.md) is useful for turning templates into manifests with the help of a template engine. The bake action of Kubernetes manifest task is intended to provide visibility into the transformation between the input templates and the end manifest files that are used in the deployments. [Helm 2](https://helm.sh), [kustomize](https://github.com/kubernetes-sigs/kustomize), and [kompose](https://github.com/kubernetes/kompose) are supported as templating options under the bake action.

The baked manifest files are intended to be consumed downstream (subsequent task) where these manifest files are used as inputs for the deploy action of the Kubernetes manifest task.

## Helm 2 example

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
> Instead of transforming the Helm charts into manifest files in the template as shown above, if one intends to use Helm for directly managing releases and rollbacks, checkout the [Package and Deploy Helm Charts task](../../tasks/deploy/helm-deploy.md).

## Kustomize example

```YAML
steps:
- task: KubernetesManifest@0
  name: bake
  displayName: Bake K8s manifests from Helm chart
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
  displayName: Bake K8s manifests from Helm chart
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
