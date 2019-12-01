---
title: Deployment strategies for Kubernetes deployments
description: Setting up deployment strategies using KubernetesManifest task
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.assetid: bba1eae2-6494-4ad4-991b-53b755c4c86e
ms.manager: mijacobs
ms.author: shasb
author: shashankbarsin
ms.date: 08/28/2019
monikerRange: 'azure-devops'
---

# Deployment strategies for Kubernetes in Azure Pipelines
[!INCLUDE [include](../../_shared/version-team-services.md)]

[Kubernetes manifest task](../../tasks/deploy/kubernetes-manifest.md) currently supports canary deployment strategy. This document explains the guidelines and best practices around the usage of this task for setting up canary deployments to Kubernetes.

## Overview of canary deployment strategy
Canary deployment strategy involves partially deploying the new changes in such a way that the new changes coexist with the current deployments before performing a full rollout. In this phase, usually a final check and comparison of the two versions is done on the basis of application health checks and performance monitoring using metrics originating from both the versions. If the canary is found to be at least at par or better than the currently deployed version, complete rollout of the new changes is initiated. If the canary is found to be performing worse than the currently deployed versions, the new changes are rejected, and a complete rollout, which could lead to regression, is thus avoided.

## Canary deployments for Kubernetes
The label selector relationship between pods and services in Kubernetes allow for setting up deployments in such a way that a single service routes requests to both the stable and the canary variants. Kubernetes manifest task utilizes this to facilitate canary deployments in the following way
- If the task is provided the inputs of `action: deploy` and `strategy: canary`, for each workload (Deployment, ReplicaSet, Pod, ...) defined in the input manifest files, a `-baseline` and `-canary` variant of the deployment are created. For example
    - Assume there exists a deployment named `sampleapp` in the input manifest file and that after completion of run number 22 of the pipeline, the stable variant of this deployment named `sampleapp` is deployed in the cluster
    - In the subsequent run (in this case run number 23), Kubernetes manifest task with `action: deploy` and `strategy: canary` would result in creation of sampleapp-baseline and sampleapp-canary deployments whose number of replicas are determined by the product of `percentage` task input with the value of the desired number of replicas for the final stable variant of `sampleapp` as per the input manifest files
    - Excluding the number of replicas, the baseline version has the same configuration as the stable variant while the canary version has the new changes that are being introduced by the current run (in this case, run number 23)
- If a manual intervention is set up in the pipeline after the above mentioned step, it would allow for an opportunity to pause the pipeline so that the pipeline admin can evaluate key metrics for the baseline and canary versions and take the decision on whether the canary changes are safe and good enough for a complete rollout.
- `action: promote` and `strategy: canary` or `action: reject` and `strategy: canary` inputs of the Kubernetes manifest tasks can be used to promote or reject the canary changes respectively. Note that in either cases, at the end of this step, only the stable variant of the workloads declared in the input manifest files will be remain deployed in the cluster, while the ephemeral baseline and canary versions are cleaned up.

> [!NOTE]
> The percentage input mentioned above doesn't result in percentage traffic split, but rather refers to the percentage used for calculating the number of replicas for baseline and canary variants. 
> A service mesh's service discovery and load balancing capabilities would help in achieving a true request based traffic split. Support for canary deployments utilizing [Service Mesh Interface](https://smi-spec.io) is currently being worked on and will be added to the Kubernetes manifest task soon.

## Compare canary against baseline and not against stable variant

While it is possible to compare the canary deployment against the current production deployment, it is better to instead compare the canary against an equivalent baseline. As the baseline anyways uses the same version and configuration as the currently deployed version, canary and baseline are better candidates for comparison as they are identical with respect to the following aspects:

- Same time of deployment
- Same size of deployment
- Same type and amount of traffic
This minimizes the effects of factors such as cache warmup time, the heap size, and so on, in the canary variant, which could have adversely impacted the analysis.

## End-to-end example

An [end-to-end example](./canary-demo.md) of setting up build and release pipelines to perform canary deployments on Kubernetes clusters for each change made to application code is available under the how-to guides. This example also demonstrates the usage of Prometheus for comparing the baseline and canary metrics when the pipeline is paused using a manual intervention task.
 