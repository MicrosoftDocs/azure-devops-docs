---
title: Deployment strategies for Kubernetes deployments
description: Setting up deployment strategies using KubernetesManifest task
ms.topic: reference
ms.assetid: bba1eae2-6494-4ad4-991b-53b755c4c86e
ms.author: atulmal
author: azooinmyluggage
ms.date: 03/07/2022
monikerRange: 'azure-devops'
---

# Deployment strategies for Kubernetes in Azure Pipelines
[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

[Kubernetes manifest task](../../tasks/deploy/kubernetes-manifest.md) currently supports canary deployment strategy. This document explains the guidelines and best practices around the usage of this task for setting up canary deployments to Kubernetes.

## Overview of canary deployment strategy
You can use canary deployment strategy to partially deploy the new changes so that the new changes coexist with the current deployments before  a full rollout. In this phase, usually a final check and comparison of the two versions is done. During this phase, there are application health checks and performance monitoring using metrics originating from both the versions. If the canary is found to be at least at par or better than the currently deployed version, a complete rollout of the new changes begins. If the canary is found to be performing worse than the currently deployed versions, the new changes are rejected, and a complete rollout, which could lead to regression, is avoided.

## Canary deployments for Kubernetes
The label selector relationship between pods and services in Kubernetes allow for setting up deployments in such a way that a single service routes requests to both the stable and the canary variants. The Kubernetes manifest task utilizes this to facilitate canary deployments.
- If the task is provided the inputs of `action: deploy` and `strategy: canary`, for each workload (Deployment, ReplicaSet, Pod, ...) defined in the input manifest files, a `-baseline` and `-canary` variant of the deployment are created. 
    - Assume there exists a deployment named `sampleapp` in the input manifest file and that after completion of run number 22 of the pipeline, the stable variant of this deployment named `sampleapp` is deployed in the cluster
    - In the subsequent run (in this case run number 23), Kubernetes manifest task with `action: deploy` and `strategy: canary` would result in creation of sampleapp-baseline and sampleapp-canary deployments whose number of replicas are determined by the product of `percentage` task input with the value of the desired number of replicas for the final stable variant of `sampleapp` as per the input manifest files
    - Excluding the number of replicas, the baseline version has the same configuration as the stable variant while the canary version has the new changes that are being introduced by the current run (in this case, run number 23)
- If a manual intervention is set up in the pipeline after the above mentioned step, it would allow for an opportunity to pause the pipeline so that the pipeline admin can evaluate key metrics for the baseline and canary versions and take the decision on whether the canary changes are safe and good enough for a complete rollout.
- `action: promote` and `strategy: canary` or `action: reject` and `strategy: canary` inputs of the Kubernetes manifest tasks can be used to promote or reject the canary changes respectively. Note that in either cases, at the end of this step, only the stable variant of the workloads declared in the input manifest files will be remain deployed in the cluster, while the ephemeral baseline and canary versions are cleaned up.

> [!NOTE]
> The percentage input mentioned above doesn't result in percentage traffic split, but rather refers to the percentage used for calculating the number of replicas for baseline and canary variants. 
> A service mesh's service discovery and load balancing capabilities would help in achieving a true request based traffic split. Support for canary deployments utilizing [Service Mesh Interface](https://smi-spec.io) is currently being worked on and will be added to the Kubernetes manifest task soon.

## Compare canary against baseline and not against stable variant

While it's possible to compare a canary deployment against the current production deployment, it's better to instead compare the canary against an equivalent baseline. The baseline uses the same version and configuration as the currently deployed version. Canary and baseline variants are better candidates for comparison because they're identical in terms of:

- Same time of deployment
- Same size of deployment
- Same type and amount of traffic

These factors minimize the effects of other variables such as cache warmup time and the heap size in the canary variant, which could adversely impact the analysis.

## End-to-end example

An [end-to-end example](./canary-demo.md) of setting up build and release pipelines to perform canary deployments on Kubernetes clusters for each change made to application code is available. This example also demonstrates the usage of Prometheus for comparing the baseline and canary metrics when the pipeline is paused using a manual intervention task.
 