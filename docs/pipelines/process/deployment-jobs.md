---
title: Deployment jobs
description: Deploy to resources within an environment
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.assetid: fc825338-7012-4687-8369-5bf8f63b9c10
ms.manager: jillfra
ms.author: shasb
author: shashankbarsin
ms.date: 5/2/2019
monikerRange: 'azure-devops'
---

# Deployment jobs

**Azure Pipelines**

> [!NOTE]
>
> To use deployment jobs, [make sure the Multi-stage pipelines experience is turned on](../../project/navigation/preview-features.md).

In YAML pipeline, we recommend that you put your deployment steps in a deployment job. A deployment job is a special type of [job](phases.md) that is used to deploy your app to an environment.

## Overview

The advantages of using deployment jobs include:

* You can deploy to an environment, which includes benefits such as being able to see the history of what you've deployed. It's especially helpful to be able to trace deployments in those scenarios where multiple pipelines, stages and jobs are deploying to the same resource (deployment target).

* You can control how your deployment steps run. 
  > At the moment we offer only the `runOnce` strategy, which runs the deployment steps exactly once. The `rolling` strategy is on our roadmap to enable you to iteratively expand deployment steps.

## Examples

Here's a very simple abstract example of a deployment job: 

```YAML
jobs:
- deployment: string
  dependsOn: string | [ string ]
  condition: string
  continueOnError: boolean  # 'true' if future jobs should run even if this job fails; defaults to 'false'
  pool:
    name: string
    demands: string | [ string ]
  environment: string
  strategy:
    runOnce:
      deploy:
        steps:
        - script: echo Hello!
```


The following example YAML snippet showcases the use of a deploy job - 

```YAML
jobs:
- deployment: DeployJob
  displayName: Deploy Job
  pool:
    vmImage: Ubuntu-16.04
  environment: staging
  strategy:
    runOnce:
      deploy:
        steps:
        - script: echo Hello
```

In the above example, with each run of this job, deployment history is recorded against the staging environment.

> [!NOTE]
> - Currently only Kubernetes resources are supported within an environment, with support for VMs and other resources on the roadmap.
> - It is also possible to create an environment with empty resources and use that as an abstract shell to record deployment history as shown in the example above.

The following example snippet demonstrates how a pipeline can refer an environment and a resource within the same to be used as the target of a deployment job - 

```YAML
deployment: Deploy
  displayName: Deploy job
  pool:
    vmImage: 
  environment: staging.aks-cluster-namespace-1
  strategy:
    runOnce:
      deploy:
        steps:
        - task: KubernetesManifest@0
          displayName: Deploy to Kubernetes cluster
          inputs:
            action: deploy
            namespace: staging
            manifests: |
              manifests/deployment.yml
              manifests/service.yml
            imagePullSecrets: |
              demo-secret
            containers: |
              fabrikam.azurecr.io/sample:test
```

The above approach has the following advantages - 
1. More selective recording of deployment history on a specific resource within the environment as opposed to recording the history on all resources within the environment.
2. Referencing the Kubernetes type resource (aks-cluster-namespace-1 within environment staging in above example) results in **automatic propagation** of the service connection details (service connection backing the resource) for the steps authored under this deployment job. This is particularly useful in the cases where the same service connection value is to be set for multiple steps of the job.