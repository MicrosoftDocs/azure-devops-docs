---
title: Kubernetes Manifest task
description: Bake and deploy manifests to Kubernetes clusters
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 31e3875c-c9ef-4c11-8b86-4b4defe84329
ms.manager: shasb
ms.author: shasb
author: shashankbarsin
ms.date: 11/06/2019
monikerRange: 'azure-devops'
---

# Kubernetes manifest task

Use a Kubernetes manifest task in a build or release pipeline to bake and deploy manifests to Kubernetes clusters.

## Overview

The following list shows the key benefits of this task:

- **Artifact substitution**: The deployment action takes as input a list of container images that can be specified along with their tags or digests. The same input is substituted into the nontemplatized version of manifest files before application to the cluster. This substitution ensures that the right version of the image is pulled by the cluster nodes.

- **Manifest stability**: The rollout status of the deployed Kubernetes objects is checked. The stability checks are incorporated to determine whether the task status is a success or a failure.

- **Traceability annotations**: Annotations are added to the deployed Kubernetes objects to superimpose traceability information. The following annotations are supported:

  - azure-pipelines/org
  - azure-pipelines/project
  - azure-pipelines/pipeline
  - azure-pipelines/pipelineId
  - azure-pipelines/execution
  - azure-pipelines/executionuri
  - azure-pipelines/jobName

- **Secret handling**: The **createSecret** action lets docker-registry secrets be created using Docker registry service connections. It also lets generic secrets be created by use of either plaintext or secret variables. The **secrets** input can be used along with the **deploy** action so that the input manifest files are augmented with the appropriate **imagePullSecrets** action before deployment to the cluster.

- **Bake manifest**: The **bake** action of the task allows for baking Helm charts into Kubernetes manifest files, so that the same charts can be applied onto the cluster.

- **Deployment strategy**: Choosing the **canary** strategy with the **deploy** action leads to creation of workloads having names suffixed with "-baseline" and "-canary". The task supports two methods of traffic splitting:

  - **Service Mesh Interface**: [Service Mesh Interface](https://smi-spec.io/) (SMI) abstraction allows configuration with service mesh providers like Linkerd and Istio. Also, the KubernetesManifest task maps SMI **TrafficSplit** objects to the stable, baseline, and canary services during the lifecycle of the deployment strategy.

    Canary deployments that are based on a service mesh and use this task are more accurate. This result comes because service mesh providers enable the granular split of percentage traffic. The enabling is via service registry and sidecar containers injected into pods alongside application containers.
  
  - **Only Kubernetes with no service mesh**: In the absence of a service mesh, you might not get the exact percentage split you want at the request level. But you can possibly do canary deployments by using baseline and canary workload variants next to the stable variant.

    The service routes requests to pods of all three workload variants as the selector-label constraints are met. The KubernetesManifest task honors these requests when creating baseline and canary variants. This routing behavior achieves the intended effect of routing only a portion of total requests to the canary.
    
  Compare the baseline and canary workloads by using either a [Manual Intervention task](../utility/manual-intervention.md) in release pipelines or a [Delay task](../utility/delay.md) in YAML pipelines. Perform the comparison before using the promote/reject action of the task.

## Deploy action

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><b>action</b>
    <td><blockquote>Required</blockquote>
    Acceptable values are <b>deploy</b>, <b>promote</b>, <b>reject</b>, <b>bake</b>, <b>scale</b>, <b>patch</b>, and <b>delete</b>.</td>
  </tr>
  <tr>
    <td><b>kubernetesServiceConnection</b></td>
    <td><blockquote>Required</blockquote>
    The name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a>.</td>
  </tr>
  <tr>
    <td><b>namespace</b></td>
    <td><blockquote>Required</blockquote>
    The namespace within the cluster to deploy to.</td>
  </tr>
  <tr>
    <td><b>manifests</b></td>
    <td><blockquote>Required</blockquote>
    The path to the manifest files to be used for deployment. A <a href="../file-matching-patterns.md" data-raw-source="[file-matching pattern](../file-matching-patterns.md)"> file-matching pattern</a> is an acceptable value for this parameter.</td>
  </tr>
  <tr>
    <td><b>containers</b></td>
    <td><blockquote>Optional</blockquote>
    Fully qualified URLs of the images to be used for substitutions on the manifest files. This parameter accepts multiline values in newline-separated form for specifying multiple artifact substitutions.<br/>
    <br/>
    Here's an example:<br/>
    <code>containers: |</code><br/>
    <code>&nbsp;&nbsp;contosodemo.azurecr.io/foo:test1</code><br/>
    <code>&nbsp;&nbsp;contosodemo.azurecr.io/bar:test2</code><br/>
    <br/>
    In this example, all references to <code>contosodemo.azurecr.io/foo</code> and <code>contosodemo.azurecr.io/bar</code> are searched for in the image field of the input manifest files. For each match found, the tags <code>test1</code> or <code>test2</code> replaces the matched reference.</td>
  </tr>
  <tr>
    <td><b>imagePullSecrets</b></td>
    <td><blockquote>Optional</blockquote>
    Multiline input where each line contains the name of a docker-registry secret that has already been set up within the cluster. Each of these secret names is added to the <b>imagePullSecrets</b> value for the workloads found in the input manifest files.</td>
  </tr>
  <tr>
    <td><b>strategy</b></td>
    <td><blockquote>Optional</blockquote>
    The deployment strategy used while applying manifest files on the cluster. Currently, <b>canary</b> is the only acceptable deployment strategy</td>
  </tr>
  <tr>
    <td><b>trafficSplitMethod</b></td>
    <td><blockquote>Optional</blockquote>
    Acceptable values are <b>pod</b> and <b>smi</b>. The default value is <b>pod</b>.<br/><br/>
    For the value <b>smi</b>, the percentage traffic split is done at the request level using service mesh. Service mesh must be set up by a cluster admin. This task handles orchestration of <a href="https://github.com/deislabs/smi-spec/blob/master/traffic-split.md" data-raw-source="TrafficSplit](https://github.com/deislabs/smi-spec/blob/master/traffic-split.md)">TrafficSplit</a> objects of SMI.
    <br/><br/>
    For the value <b>pod</b>, the percentage split isn't possible at the request level in the absence of service mesh. Instead, the percentage input is used to calculate the replicas for baseline and canary as a percentage of replicas specified in the input manifests for the stable variant.</td>
  </tr>
  <tr>
    <td><b>percentage</b></td>
    <td><blockquote>Required if the <b>strategy</b> parameter value is <b>canary</b> and optional otherwise</blockquote>
    The percentage that is used to compute the number of replicas of baseline and canary variants of the workloads found in manifest files.<br/>
    <br/>
    For the specified percentage input, calculate:<br/>
    <br/>
    (<i>percentage</i> <b>&times;</b> <i>number&nbsp;of&nbsp;replicas</i>) <b>/</b> 100<br/>
    <br/>
    If the result isn't an integer, the floor of the result is used when baseline and canary variants are created.<br/>
    <br/>
    For example, assume deployment hello-world is in the input manifest file and that the following lines are in the task input:<br/>
    <br/>
    <code>replicas: 4</code><br/>
    <code>strategy: canary</code><br/>
    <code>percentage: 25</code><br/>
    <br/>
    In this case, the deployments hello-world-baseline and hello-world-canary are created with one replica each. The baseline variant is created with the same image and tag as the stable version, meaning the four-replica variant before deployment. And the canary variant is created with the image and tag corresponding to the newly deployed changes.</td>
  </tr>
  <tr>
    <td><b>baselineAndCanaryReplicas</b></td>
    <td><blockquote>Optional, and relevant only if the <b>trafficSplitMethod</b> parameter value is <b>smi</b></blockquote>
    When the <b>trafficSplitMethod</b> parameter value is <b>smi</b>, the percentage traffic split is controlled in the service mesh plane. But the actual number of replicas for canary and baseline variants can be controlled independently of the traffic split.<br/>
    <br/>
    For example, assume that the input deployment manifest specifies 30 replicas for the stable variant and that the following input is specified for the task:<br/>
    <br/>
    <code>strategy: canary</code><br/>
    <code>trafficSplitMethod: smi</code><br/>
    <code>percentage: 20</code><br/>
    <code>baselineAndCanaryReplicas: 1</code><br/>
    <br/>
    In this case, the stable variant receives 80% of the traffic, while the baseline and canary variants each receive half of the specified 20%. But instead baseline and canary variants with three replicas each being created, the explicit count of baseline and canary replicas is honored. That is, only one replica is created for each of the baseline and canary variants.</td>
  </tr>
</table>

<table>
  <thead>
    <tr>
      <th>Parameters</th>
      <th>Required or optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><b>action</b>
    <td>Required</td>
    <td>Acceptable values: <b>deploy</b>, <b>promote</b>, <b>reject</b>, <b>bake</b>, <b>scale</b>, <b>patch</b>, and <b>delete</b>.</td>
  </tr>
  <tr>
    <td><b>kubernetesServiceConnection</b></td>
    <td>Required</td>
    <td>The name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a>.</td>
  </tr>
  <tr>
    <td><b>namespace</b></td>
    <td>Required</td>
    <td>The namespace within the cluster to deploy to.</td>
  </tr>
  <tr>
    <td><b>manifests</b></td>
    <td>Required</td>
    <td>The path to the manifest files to be used for deployment. A <a href="../file-matching-patterns.md" data-raw-source="[file-matching pattern](../file-matching-patterns.md)"> file-matching pattern</a> is an acceptable value for this parameter.</td>
  </tr>
  <tr>
    <td><b>containers</b></td>
    <td>Optional</td>
    <td>Fully qualified URLs of the images to be used for substitutions on the manifest files. This parameter accepts multiline values in newline-separated form for specifying multiple artifact substitutions.<br/>
    <br/>
    Here's an example:<br/>
    <code>containers: |</code><br/>
    <code>&nbsp;&nbsp;contosodemo.azurecr.io/foo:test1</code><br/>
    <code>&nbsp;&nbsp;contosodemo.azurecr.io/bar:test2</code><br/>
    <pre>containers: |
      contosodemo.azurecr.io/foo:test1
      contosodemo.azurecr.io/bar:test2</pre><br/>
    <br/>
    In this example, all references to <code>contosodemo.azurecr.io/foo</code> and <code>contosodemo.azurecr.io/bar</code> are searched for in the image field of the input manifest files. For the matches found, the tags <code>test1</code> and <code>test2</code> are substituted.</td>
  </tr>
  <tr>
    <td><b>imagePullSecrets</b></td>
    <td>Optional</td>
    <td>Multiline input where each line contains the name of a docker-registry secret that has already been setup within the cluster. Each of these secret names is added to the <b>imagePullSecrets</b> value for the workloads found in the input manifest files.</td>
  </tr>
  <tr>
    <td><b>strategy</b></td>
    <td>Optional</td>
    <td>The deployment strategy used while applying manifest files on the cluster. Currently, <b>canary</b> is the only acceptable deployment strategy</td>
  </tr>
  <tr>
    <td><b>trafficSplitMethod</b></td>
    <td>Optional</td>
    <td>Acceptable values are <b>pod</b> and <b>smi</b>. The default value is <b>pod</b>.
    <br/><br/>
    For the value <b>smi</b>, the percentage traffic split is done at the request level using service mesh. Service mesh has to be set up by a cluster admin. This task handles orchestration of <a href="https://github.com/deislabs/smi-spec/blob/master/traffic-split.md" data-raw-source="TrafficSplit](https://github.com/deislabs/smi-spec/blob/master/traffic-split.md)">TrafficSplit</a> objects of SMI.
    <br/><br/>
    For the value <b>pod</b>, the percentage split isn't possible at the request level in the absence of service mesh. Instead, the percentage input is used to calculate the replicas for baseline and canary as a percentage of replicas specified in the input manifests for the stable variant.</td>
  </tr>
  <tr>
    <td><b>percentage</b></td>
    <td>Required if the <b>strategy</b> parameter value is <b>canary</b> and optional otherwise</td>
    <td>The percentage used to compute the number of replicas of baseline and canary variants of the workloads found in manifest files.<br/>
    <br/>
    For the specified percentage input, calculate:<br/>
    <br/>
    (<i>percentage</i> <b>&times;</b><br/>
    <i>number&nbsp;of&nbsp;desired&nbsp;replicas</i>) <b>/</b> 100<br/>
    <br/>
    If the result isn't an integer, the floor of the result is used when baseline and canary variants are created.<br/>
    <br/>
    For example, assume deployment hello-world is in the input manifest file and that the following lines are in the task input:<br/>
    <br/>
    <code>replicas: 4</code><br/>
    <code>strategy: canary</code><br/>
    <code>percentage: 25</code><br/>
    <br/>
    In this case, the deployments hello-world-baseline and hello-world-canary are created with one replica each. The baseline variant is created with the same image and tag as the stable version, meaning the four-replica variant prior to deployment. And the canary variant is created with the image and tag corresponding to the newly deployed changes.</td>
  </tr>
  <tr>
    <td><b>baselineAndCanaryReplicas</b></td>
    <td>Optional, and relevant only if the <b>trafficSplitMethod</b> parameter value is <b>smi</b> 
    <td>When the <b>trafficSplitMethod</b> parameter value is <b>smi</b>, the percentage traffic split is controlled in the service mesh plane, but the actual number of replicas for canary and baseline variants can be controlled independently of the traffic split.<br/>
    <br/>
    For example, assume that the input deployment manifest specifies 30 replicas for the stable variant. Also assume that the following input is specified for the task:<br/>
    <br/>
    <code>strategy: canary</code><br/>
    <code>trafficSplitMethod: smi</code><br/>
    <code>percentage: 20</code><br/>
    <code>baselineAndCanaryReplicas: 1</code><br/>
    <br/>
    In this case, the stable variant receives 80% of the traffic, while the baseline and canary variants each receive half of the specified 20%. But instead, baseline and canary variants with three replicas each being created, the explicit count of baseline and canary replicas is honored. That is, only one replica is created for each of the baseline and canary variants.</td>
  </tr>
</table>

The following YAML code is an example deployment to a Kubernetes namespace by use of manifest files:

```YAML
steps:
- task: KubernetesManifest@0
  displayName: Deploy
  inputs:
    kubernetesServiceConnection: someK8sSC1
    namespace: default
    manifests: manifests/deployment.yml|manifests/service.yml
    containers: |
      foo/demo:$(tagVariable1)
      bar/demo:$(tagVariable2)
    imagePullSecrets: |
      some-secret
      some-other-secret
```

In the above example, the task tries to find matches for the images <code>foo/demo</code> and <code>bar/demo</code> in the image fields of manifest files. If a match is found, the values of <code>tagVariable1</code> and <code>tagVariable2</code> are appended as tags to the image name. You can also specify digests in the containers input for artifact substitution.

> [!NOTE]
> While you can author deploy, promote and reject actions with YAML input related to deployment strategy, support for a Manual Intervention task is currently unavailable for build pipelines. For release pipelines, we advise you to use actions and input related to deployment strategy in the following sequence:
> 1. A deploy action with <code>strategy: canary</code> and <code>percentage: $(<i>someValue</i>)</code>.
> 1. A Manual Intervention task so that you can pause the pipeline and compare the baseline variant with the canary variant.
> 1. Promote actions that run if a Manual Intervention task is resumed and reject actions that run if a Manual Intervention task is rejected.

## Promote and reject actions

<table>
  <thead>
    <tr>
      <th>Parameters</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><code>action</code><br/>Action</td>
    <td>(Required) Acceptable values: deploy/promote/reject/bake/scale/patch/delete</td>
  </tr>
  <tr>
    <td><code>kubernetesServiceConnection</code><br/>Kubernetes service connection</td>
    <td>(Required) Name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a></td>
  </tr>
  <tr>
    <td><code>namespace</code><br/>Namespace</td>
    <td>(Required) Namespace within the cluster to deploy to</td>
  </tr>
  <tr>
    <td><code>manifests</code><br/>Manifests</td>
    <td>(Required) Path to the manifest files to be used for deployment. [File matching patterns](../file-matching-patterns.md) is an acceptable value for this input</td>
  </tr>
  <tr>
    <td><code>containers</code><br/>Containers</td>
    <td>(Optional) Fully qualified resource URL of the image to be used for substitutions on the manifest files<br/>Example: contosodemo.azurecr.io/helloworld: test</td>
  </tr>
  <tr>
    <td><code>imagePullSecrets</code><br/>Image pull secrets</td>
    <td>(Optional) Multiline input where each line contains the name of a docker-registry secret that has already been set up within the cluster. Each of these secret names is added under imagePullSecrets field for the workloads found in the input manifest files</td>
  </tr>
  <tr>
    <td><code>strategy</code><br/>Strategy</td>
    <td>(Optional) Deployment strategy that was used in the deploy action before promote/reject. Currently, &#39;canary&#39; is the only acceptable deployment strategy</td>
  </tr>
</table>

## Create secret action

<table>
  <thead>
    <tr>
      <th>Parameters</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><code>action</code><br/>Action</td>
    <td>(Required) Acceptable values: deploy/promote/reject/bake/scale/patch/delete</td>
  </tr>
  <tr>
    <td><code>secretType</code><br/>Secret type</td>
    <td>(Required if action == secret) Acceptable values: dockerRegistry/generic. Set dockerRegistry option for creating/updating imagePullSecret in cluster to help image pull from a private container registry<br/>Default value: dockerRegistry</td>
  </tr>
  <tr>
    <td><code>secretName</code><br/>Secret name</td>
    <td>(Required) Name of the secret to be created/updated</td>
  </tr>
  <tr>
    <td><code>dockerRegistryEndpoint</code><br/>Docker registry service connection</td>
    <td>(Required if action == createSecret and secretType == dockerRegistry) The specified service connection&#39;s credentials are used to create a docker-registry secret within the cluster. This secret&#39;s name can then be referred to from manifest files under the imagePullSecrets field</td>
  </tr>
  <tr>
    <td><code>secretArguments</code><br/>Secret arguments</td>
    <td>(Required if action == createSecret and secretType == generic) Multiline input accepting keys and literal values to be used for secret creation/updation. Example: --from-literal=key1=value1 
    --from-literal=key2=&quot;top secret&quot;.&quot;
    </td>
  </tr>
  <tr>
    <td><code>kubernetesServiceConnection</code><br/>Kubernetes service connection</td>
    <td>(Required) Name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a></td>
  </tr>
  <tr>
    <td><code>namespace</code><br/>Namespace</td>
    <td>(Required) Namespace within the cluster to create secret in</td>
  </tr>
</table>

Following is an example YAML snippet for creation of docker registry secrets using [Docker Registry service connection](../../library/service-endpoints.md#sep-docreg)- 

```YAML
steps:
- task: KubernetesManifest@0
  displayName: Create secret
  inputs: 
    action: createSecret
    secretType: dockerRegistry
    secretName: foobar
    dockerRegistryEndpoint: demoACR
    kubernetesServiceConnection: someK8sSC
    namespace: default
```

Following is an example YAML snippet for creation of generic secrets - 

```YAML
steps:
- task: KubernetesManifest@0
  displayName: Create secret
  inputs: 
    action: createSecret
    secretType: generic
    secretName: some-secret
    secretArguments: --from-literal=key1=value1
    kubernetesServiceConnection: someK8sSC
    namespace: default
```

## Bake action

<table>
  <thead>
    <tr>
      <th>Parameters</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><code>action</code><br/>Action</td>
    <td>(Required) Acceptable values: deploy/promote/reject/bake/scale/patch/delete</td>
  </tr>
  <tr>
    <td><code>renderType</code><br/>Render engine</td>
    <td>(Required if action == bake) Acceptable values: helm2/kompose/kustomize. Render type to be used for producing the manifest files<br/>Default value: helm2</td>
  </tr>
  <tr>
    <td><code>helmChart</code><br/>Helm chart</td>
    <td>(Required if action == bake and renderType == helm2) Path to the helm chart to be used for bake</td>
  </tr>
  <tr>
    <td><code>overrideFiles</code><br/>Override files</td>
    <td>(Optional; Relevant if action == bake and renderType == helm2) Multiline input accepting path to the override files that are to be used when baking manifest files from helm charts</td>
  </tr>
  <tr>
    <td><code>overrides</code><br/>Override values</td>
    <td>(Optional; Relevant if action == bake and renderType == helm2) Additional override values that are to be used via --set switch when baking manifest files using helm. If multiple overriding key-value pairs are to be used, each key-value pair is to be specified in a separate line (use newline as delimiter between different key-value pairs). Key value pairs are specified in the format key:value</td>
  </tr>
  <tr>
    <td><code>releaseName</code><br/>Release Name</td>
    <td>(Optional; Relevant if action == bake and renderType == helm2) Name of the release used when baking Helm charts</td>
  </tr>
  <tr>
    <td><code>kustomizationPath</code><br/>Kustomization path</td>
    <td>(Optional; Relevant if action == bake and renderType == kustomize) Path to the directory containing kustomization.yaml</td>
  </tr>
  <tr>
    <td><code>dockerComposeFile</code><br/>Path to docker compose file</td>
    <td>(Optional; Relevant if action == bake and renderType == kompose) Path to docker compose file</td>
  </tr>
</table>

Following is an example YAML snippet for baking manifest files from Helm charts. Note the usage of name input in the first task which is later referenced from the deploy step for specifying path to the manifests that were produced by the bake step.

```YAML
steps:
- task: KubernetesManifest@0
  name: bake
  displayName: Bake K8s manifests from Helm chart
  inputs:
    action: bake
    helmChart: charts/sample
    overrides: 'image.repository:nginx'

- task: KubernetesManifest@0
  displayName: Deploy K8s manifests
  inputs:
    kubernetesServiceConnection: someK8sSC
    namespace: default
    manifests: $(bake.manifestsBundle)
    containers: |
      nginx: 1.7.9
```

## Scale action

<table>
  <thead>
    <tr>
      <th>Parameters</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><code>action</code><br/>Action</td>
    <td>(Required) Acceptable values: deploy/promote/reject/bake/scale/patch/delete</td>
  </tr>
  <tr>
    <td><code>kind</code><br/>Kind</td>
    <td>(Required) Kind of Kubernetes object (ReplicaSet/StatefulSet/...) to be scaled up/down</td>
  </tr>
  <tr>
    <td><code>name</code><br/>Name</td>
    <td>(Required) Name of Kubernetes object to be scaled up/down</td>
  </tr>
  <tr>
    <td><code>replicas</code><br/>Replica count</td>
    <td>(Required) Number of replicas to scale to</td>
  </tr>
  <tr>
    <td><code>kubernetesServiceConnection</code><br/>Kubernetes service connection</td>
    <td>(Required) Name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a></td>
  </tr>
  <tr>
    <td><code>namespace</code><br/>Namespace</td>
    <td>(Required) Namespace within the cluster to deploy to</td>
  </tr>
</table>

Following is an example YAML snippet for scaling objects - 

```YAML
steps:
- task: KubernetesManifest@0
  displayName: Scale
  inputs: 
    action: scale
    kind: deployment
    name: bootcamp-demo
    replicas: 5
    kubernetesServiceConnection: someK8sSC
    namespace: default
```

## Patch action
<table>
  <thead>
    <tr>
      <th>Parameters</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><code>action</code><br/>Action</td>
    <td>(Required) Acceptable values: deploy/promote/reject/bake/scale/patch/delete</td>
  </tr>
  <tr>
    <td><code>resourceToPatch</code><br/>Resource to patch</td>
    <td>(Required) Acceptable values: file/name. Indicates whether a manifest file is to be used to identify the objects to be patched or if an individual object is to be identified by kind and name as the target for patch<br/>Default value: file</td>
  </tr>
  <tr>
    <td><code>resourceFiletoPatch</code><br/>File path</td>
    <td>(Required if action == patch and resourceToPatch == file) Path to the file used for patch</td>
  </tr>
  <tr>
    <td><code>kind</code><br/>Kind</td>
    <td>(Required if action == patch and resourceToPatch == name) Kind of Kubernetes object (ReplicaSet/StatefulSet/...) </td>
  </tr>
  <tr>
    <td><code>name</code><br/>Name</td>
    <td>(Required if action == patch and resourceToPatch == name) Name of Kubernetes object to be patched</td>
  </tr>
  <tr>
    <td><code>mergeStrategy</code><br/>Merge strategy</td>
    <td>(Required) Acceptable values: json/merge/strategic. Strategy to be used for applying the patch. <br/>Default: strategic</td>
  </tr>
  <tr>
    <td><code>patch</code><br/>Patch</td>
    <td>(Required) Contents of the patch</td>
  </tr>
  <tr>
    <td><code>kubernetesServiceConnection</code><br/>Kubernetes service connection</td>
    <td>(Required) Name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a></td>
  </tr>
  <tr>
    <td><code>namespace</code><br/>Namespace</td>
    <td>(Required) Namespace within the cluster to deploy to</td>
  </tr>
</table>

Following is an example YAML snippet for patching an object - 

```YAML
steps:
- task: KubernetesManifest@0
  displayName: Patch
  inputs: 
    action: patch
    kind: pod
    name: demo-5fbc4d6cd9-pgxn4
    mergeStrategy: strategic
    patch: '{"spec":{"containers":[{"name":"demo","image":"foobar/demo:2239"}]}}'
    kubernetesServiceConnection: someK8sSC
    namespace: default
```

## Delete action

<table>
  <thead>
    <tr>
      <th>Parameters</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><code>action</code><br/>Action</td>
    <td>(Required) Acceptable values: deploy/promote/reject/bake/scale/patch/delete</td>
  </tr>
  <tr>
    <td><code>arguments</code><br/>Arguments</td>
    <td>(Required) Arguments to be passed onto kubectl for deleting the necessary objects. For example - <br/> <code>arguments: deployment hello-world foo-bar</code></td>
  </tr>
  <tr>
    <td><code>kubernetesServiceConnection</code><br/>Kubernetes service connection</td>
    <td>(Required) Name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a></td>
  </tr>
  <tr>
    <td><code>namespace</code><br/>Namespace</td>
    <td>(Required) Namespace within the cluster to deploy to</td>
  </tr>
</table>

Following is an example YAML snippet for deleting objects - 

```YAML
steps:
- task: KubernetesManifest@0
  displayName: Delete
  inputs: 
    action: delete
    arguments: deployment expressapp
    kubernetesServiceConnection: someK8sSC
    namespace: default
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/KubernetesManifestV0). Feedback and contributions are welcome.
