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

- **Artifact substitution**: The deployment action takes as input a list of container images that can be specified along with their tags or digests. The same input is substituted into the nontemplatized manifest files before application to the cluster. This substitution ensures that the right version of the image is pulled by the cluster nodes.

- **Manifest stability**: The rollout status of the deployed Kubernetes objects is checked. The stability checks are incorporated to determine whether the task status is a success or a failure.

- **Traceability annotations**: Annotations are added to the deployed Kubernetes objects to superimpose traceability information. The following annotations are supported:

  - azure-pipelines/org
  - azure-pipelines/project
  - azure-pipelines/pipeline
  - azure-pipelines/pipelineId
  - azure-pipelines/execution
  - azure-pipelines/executionuri
  - azure-pipelines/jobName

- **Secret handling**: The **createSecret** action lets docker-registry secrets be created using Docker registry service connections. It also lets generic secrets be created by use of either plaintext or secret variables. Before deployment to the cluster, you can use the **secrets** input along with the **deploy** action to augment the input manifest files with the appropriate **imagePullSecrets** value.

- **Bake manifest**: The **bake** action of the task allows for baking templates into Kubernetes manifest files. The **bake** action uses tools such as Helm, kompose, or kustomize so that these Kubernetes manifest files can be used for deployments to the cluster.

- **Deployment strategy**: Choosing the **canary** strategy with the **deploy** action leads to creation of workloads having names suffixed with "-baseline" and "-canary". The task supports two methods of traffic splitting:

  - **Service Mesh Interface**: [Service Mesh Interface](https://smi-spec.io/) (SMI) abstraction allows configuration with service mesh providers like Linkerd and Istio. The Kubernetes Manifest task maps SMI **TrafficSplit** objects to the stable, baseline, and canary services during the life cycle of the deployment strategy.

    Canary deployments that are based on a service mesh and use this task are more accurate. This accuracy comes because service mesh providers enable the granular percentage-based split of traffic. The service mesh uses the service registry and sidecar containers that are injected into pods alongside application containers to achieve the granular traffic split.
  
  - **Only Kubernetes with no service mesh**: In the absence of a service mesh, you might not get the exact percentage split you want at the request level. But you can possibly do canary deployments by using baseline and canary workload variants next to the stable variant.

    The service routes requests to pods of all three workload variants as the selector-label constraints are met. The KubernetesManifest task honors these requests when creating baseline and canary variants. This routing behavior achieves the intended effect of routing only a portion of total requests to the canary.
    
  Compare the baseline and canary workloads by using either a [Manual Intervention task](../utility/manual-intervention.md) in release pipelines or a [Delay task](../utility/delay.md) in YAML pipelines. Do the comparison before using the promote/reject action of the task.

## Deploy action

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><b>action</b><br/>Action</td>
    <td><blockquote>Required</blockquote>
    Acceptable values are <b>deploy</b>, <b>promote</b>, <b>reject</b>, <b>bake</b>, <b>scale</b>, <b>patch</b>, and <b>delete</b>.</td>
  </tr>
  <tr>
    <td><b>kubernetesServiceConnection</b><br/>Kubernetes service connection</td>
    <td><blockquote>Required</blockquote>
    The name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a>.</td>
  </tr>
  <tr>
    <td><b>namespace</b>><br/>Namespace</td>
    <td><blockquote>Required</blockquote>
    The namespace within the cluster to deploy to.</td>
  </tr>
  <tr>
    <td><b>manifests</b><br/>Manifests</td>
    <td><blockquote>Required</blockquote>
    The path to the manifest files to be used for deployment. A <a href="../file-matching-patterns.md" data-raw-source="[file-matching pattern](../file-matching-patterns.md)"> file-matching pattern</a> is an acceptable value for this parameter.</td>
  </tr>
  <tr>
    <td><b>containers</b><br/>Containers</td>
    <td><blockquote>Optional</blockquote>
    Fully qualified URLs of the images to be used for substitutions on the manifest files. This parameter accepts multiline values in newline-separated form for specifying multiple artifact substitutions.<br/>
    <br/>
    Here's an example:<br/>
    <code>containers: |</code><br/>
    <code>&nbsp;&nbsp;contosodemo.azurecr.io/foo:test1</code><br/>
    <code>&nbsp;&nbsp;contosodemo.azurecr.io/bar:test2</code><br/>
    <br/>
    In this example, all references to <code>contosodemo.azurecr.io/foo</code> and <code>contosodemo.azurecr.io/bar</code> are searched for in the image field of the input manifest files. For each match found, the tag <code>test1</code> or <code>test2</code> replaces the matched reference.</td>
  </tr>
  <tr>
    <td><b>imagePullSecrets</b><br/>Image pull secrets</td>
    <td><blockquote>Optional</blockquote>
    Multiline input where each line contains the name of a docker-registry secret that has already been set up within the cluster. Each secret name is added to the <b>imagePullSecrets</b> value for the workloads that are found in the input manifest files.</td>
  </tr>
  <tr>
    <td><b>strategy</b><br/>Strategy</td>
    <td><blockquote>Optional</blockquote>
    The deployment strategy used while applying manifest files on the cluster. Currently, <b>canary</b> is the only acceptable deployment strategy</td>
  </tr>
  <tr>
    <td><b>trafficSplitMethod</b><br/>Traffic split method</td>
    <td><blockquote>Optional</blockquote>
    Acceptable values are <b>pod</b> and <b>smi</b>. The default value is <b>pod</b>.<br/>
    <br/>
    For the value <b>smi</b>, the percentage traffic split is done at the request level using service mesh. Service mesh must be set up by a cluster admin. This task handles orchestration of <a href="https://github.com/deislabs/smi-spec/blob/master/traffic-split.md" data-raw-source="TrafficSplit](https://github.com/deislabs/smi-spec/blob/master/traffic-split.md)">TrafficSplit</a> objects of SMI.
    <br/><br/>
    For the value <b>pod</b>, the percentage split isn't possible at the request level in the absence of service mesh. Instead, the percentage input is used to calculate the replicas for baseline and canary. The calculation is a percentage of replicas that are specified in the input manifests for the stable variant.</td>
  </tr>
  <tr>
    <td><b>percentage</b><br/>Percentage</td>
    <td><blockquote>Required if <b>strategy</b> is set to <b>canary</b> and optional otherwise</blockquote>
    The percentage that is used to compute the number of baseline-variant and canary-variant replicas of the workloads that are found in manifest files.<br/>
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
    <td><b>baselineAndCanaryReplicas</b><br/>Baseline and canary replica</td>
    <td><blockquote>Optional; relevant only if <b>trafficSplitMethod</b> is set to <b>smi</b></blockquote>
    When <b>trafficSplitMethod</b> is set to <b>smi</b>, the percentage traffic split is controlled in the service mesh plane. But the actual number of replicas for canary and baseline variants can be controlled independently of the traffic split.<br/>
    <br/>
    For example, assume that the input deployment manifest specifies 30 replicas for the stable variant. Also assume that you specify the following input for the task:<br/>
    <br/>
    <code>strategy: canary</code><br/>
    <code>trafficSplitMethod: smi</code><br/>
    <code>percentage: 20</code><br/>
    <code>baselineAndCanaryReplicas: 1</code><br/>
    <br/>
    In this case, the stable variant receives 80% of the traffic,while the baseline and canary variants each receive half of the specified 20%. But baseline and canary variants don't receive three replicas each. They instead receive the specified number of replicas, which in this case means they each receive one replica.</td>
  </tr>
</table>

The following YAML code shows a sample deployment to a Kubernetes namespace by use of manifest files:

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
> While you can author deploy, promote, and reject actions with YAML input related to deployment strategy, support for a Manual Intervention task is currently unavailable for build pipelines. For release pipelines, we advise you to use actions and input related to deployment strategy in the following sequence:
> 1. A deploy action with <code>strategy: canary</code> and <code>percentage: $(<i>someValue</i>)</code>.
> 1. A Manual Intervention task so that you can pause the pipeline and compare the baseline variant with the canary variant.
> 1. Promote actions that run if a Manual Intervention task is resumed and reject actions that run if a Manual Intervention task is rejected.

## Promote and reject actions

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><b>action</b><br/>Action</td>
    <td><blockquote>Required</blockquote>
    Acceptable values are <b>deploy</b>, <b>promote</b>, <b>reject</b>, <b>bake</b>, <b>scale</b>, <b>patch</b>, and <b>delete</b>.</td>
  </tr>
  <tr>
    <td><b>kubernetesServiceConnection</b><br/>Kubernetes service connection</td>
    <td><blockquote>Required</blockquote>
    The name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection.</a></td>
  </tr>
  <tr>
    <td><b>namespace</b><br/>Namespace</td>
    <td><blockquote>Required</blockquote>
    The namespace within the cluster to deploy to.</td>
  </tr>
  <tr>
    <td><b>manifests</b><br/>Manifests</td>
    <td><blockquote>Required</blockquote>
    The path to the manifest files to be used for deployment. A <a href="../file-matching-patterns.md" data-raw-source="[file-matching pattern](../file-matching-patterns.md)"> file-matching pattern</a> is an acceptable value for this input</td>
  </tr>
  <tr>
    <td><b>containers</b><br/>Containers</td>
    <td><blockquote>Optional</blockquote>
    The fully qualified resource URL of the image to be used for substitutions on the manifest files. An example is contosodemo.azurecr.io/helloworld:test</td>
  </tr>
  <tr>
    <td><b>imagePullSecrets</b><br/>Image pull secrets</td>
    <td><blockquote>Optional</blockquote>
    Multiline input where each line contains the name of a docker-registry secret that is already set up within the cluster. Each of these secret names is added under <b>imagePullSecrets</b> field for the workloads found in the input manifest files.</td>
  </tr>
  <tr>
    <td><b>strategy</b><br/>Strategy</td>
    <td><blockquote>Optional</blockquote>
    The deployment strategy used in the deploy action before a promote action or reject action. Currently, <b>canary</b> is the only acceptable deployment strategy.</td>
  </tr>
</table>

## Create secret action

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><b>action</b><br/>Action</td>
    <td><blockquote>Required</blockquote>
    Acceptable values are <b>deploy</b>, <b>promote</b>, <b>reject</b>, <b>bake</b>, <b>scale</b>, <b>patch</b>, and <b>delete</b>.</td>
  </tr>
  <tr>
    <td><b>secretType</b><br/>Secret type</td>
    <td><blockquote>Required if the <b>action</b> value is <b>secret</b></blockquote>
    Acceptable values are <b>dockerRegistry</b> and <b>generic</b>. The default value is <b>dockerRegistry</b>.<br/>
    <br/>
    Set this value to <b>dockerRegistry</b> for creating or updating <b>imagePullSecret</b> in a cluster to help image pull from a private container registry.</td>
  </tr>
  <tr>
    <td><b>secretName</b><br/>Secret name</td>
    <td><blockquote>Required</blockquote>
    Name of the secret to be created/updated.</td>
  </tr>
  <tr>
    <td><b>dockerRegistryEndpoint</b><br/>Docker registry service connection</td>
    <td><blockquote>Required if <b>action</b> is set to <b>createSecret</b> and <b>secretType</b> is set to <b>dockerRegistry</b></blockquote>
    The specified service connection's credentials are used to create a docker-registry secret within the cluster. This secret's name can then be referred to from manifest files under the <b>imagePullSecrets</b> field.</td>
  </tr>
  <tr>
    <td><b>secretArguments</b><br/>Secret arguments</td>
    <td><blockquote>Required if <b>action</b> is set to <b>createSecret</b> and <b>secretType</b> is set is to <b>generic</b></blockquote>
    Multiline input accepting keys and literal values to be used for secret creation/updation. Example: --from-literal=key1=value1 
    --from-literal=key2=&quot;top secret&quot;.&quot;
    </td>
  </tr>
  <tr>
    <td><b>kubernetesServiceConnection</b><br/>Kubernetes service connection</td>
    <td><blockquote>Required</blockquote>Name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a></td>
  </tr>
  <tr>
    <td><b>namespace</b><br/>Namespace</td>
    <td><blockquote>Required</blockquote>
    Namespace within the cluster to create secret in</td>
  </tr>
</table>

The following YAML code shows a sample creation of docker registry secrets using [Docker Registry service connection](../../library/service-endpoints.md#sep-docreg): 

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

This YAML code shows a sample creation of generic secrets:

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
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><b>action</b><br/>Action</td>
    <td><blockquote>Required</blockquote>
    Acceptable values are <b>deploy</b>, <b>promote</b>, <b>reject</b>, <b>bake</b>, <b>scale</b>, <b>patch</b>, and <b>delete</b>.</td>
  </tr>
  <tr>
    <td><b>renderType</b><br/>Render engine</td>
    <td><blockquote>Required if <b>action</b> is set to <b>bake</b></blockquote>
    The render type used to produce the manifest files.</br>
    </br>
    Acceptable values are <b>helm2</b>, <b>kompose</b>, and <b>kustomize</b>. The default value is <b>helm2</b>.</td>
  </tr>
  <tr>
    <td><b>helmChart</b><br/>Helm chart</td>
    <td><blockquote>Required if <b>action</b> is set to <b>bake</b> and <b>renderType</b> is set to <b>helm2</b></blockquote>
    Path to the helm chart to be used for bake</td>
  </tr>
  <tr>
    <td><b>overrideFiles</b><br/>Override files</td>
    <td><blockquote>Optional; relevant only if <b>action</b> is set to <b>bake</b> and <b>renderType</b> is set to <b>helm2</b></blockquote>
    Multiline input accepting path to the override files that are to be used when baking manifest files from helm charts</td>
  </tr>
  <tr>
    <td><b>overrides</b>><br/>Override values</td>
    <td><blockquote>Optional; relevant only if <b>action</b> is set to <b>bake</b> and the <b>renderType</b> is set to <b>helm2</b></blockquote>
    Additional override values that are to be used via --set switch when baking manifest files using helm. If multiple overriding key-value pairs are to be used, each key-value pair is to be specified in a separate line (use newline as delimiter between different key-value pairs). Key value pairs are specified in the format key:value</td>
  </tr>
  <tr>
    <td><b>releaseName</b><br/>Release Name</td>
    <td><blockquote>Optional; relevant only if <b>action</b> is set to <b>bake</b> and <b>renderType</b> is set to <b>helm2</b></blockquote>
    Name of the release used when baking Helm charts</td>
  </tr>
  <tr>
    <td><b>kustomizationPath</b><br/>Kustomization path</td>
    <td><blockquote>Optional; relevant only if <b>action</b> is set to <b>bake</b> and <b>renderType</b> is set to <b>kustomize</b></blockquote>
    Path to the directory containing kustomization.yaml</td>
  </tr>
  <tr>
    <td><b>dockerComposeFile</b><br/>Path to docker compose file</td>
    <td><blockquote>Optional; relevant only if <b>action</b> is set to <b>bake</b> and <b>renderType</b> is set to <b>kompose</b></blockquote>
    Path to docker compose file</td>
  </tr>
</table>

The following YAML code shows an example of baking manifest files from Helm charts. Note the usage of name input in the first task which is later referenced from the deploy step for specifying path to the manifests that were produced by the bake step.

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
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><b>action</b><br/>Action</td>
    <td><blockquote>Required</blockquote>
    Acceptable values are <b>deploy</b>, <b>promote</b>, <b>reject</b>, <b>bake</b>, <b>scale</b>, <b>patch</b>, and <b>delete</b>.</td>
  </tr>
  <tr>
    <td><b>kind</b><br/>Kind</td>
    <td><blockquote>Required</blockquote>
    Kind of Kubernetes object (ReplicaSet/StatefulSet/...) to be scaled up/down</td>
  </tr>
  <tr>
    <td><b>name</b><br/>Name</td>
    <td><blockquote>Required</blockquote>
    Name of Kubernetes object to be scaled up/down</td>
  </tr>
  <tr>
    <td><b>replicas</b><br/>Replica count</td>
    <td><blockquote>Required</blockquote>
    Number of replicas to scale to</td>
  </tr>
  <tr>
    <td><b>kubernetesServiceConnection</b><br/>Kubernetes service connection</td>
    <td><blockquote>Required</blockquote>
    Name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a></td>
  </tr>
  <tr>
    <td><b>namespace</b></td>
    <td><blockquote>Required</blockquote>
    Namespace within the cluster to deploy to</td>
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
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><b>action</b><br/>Action</td>
    <td><blockquote>Required</blockquote>
    Acceptable values are <b>deploy</b>, <b>promote</b>, <b>reject</b>, <b>bake</b>, <b>scale</b>, <b>patch</b>, and  <b>delete</b>.</td>
  </tr>
  <tr>
    <td><b>resourceToPatch</b><br/>Resource to patch</td>
    <td><blockquote>Required</blockquote>
    Indicates whether a manifest file is used to identify the objects to be patched, or if an individual object is identified by kind and name as the target for the patch.<br/>
    <br/>
    Acceptable values are <b>file</b> and <b>name</b>. The default value is <b>file</b></td>
  </tr>
  <tr>
    <td><b>resourceFiletoPatch</b><br/>File path</td>
    <td><blockquote>Required if <b>action</b> is set to <b> patch</b> and <b>resourceToPatch</b> is set to <b>file</b></blockquote>
    Path to the file used for patch</td>
  </tr>
  <tr>
    <td><b>kind</b><br/>Kind</td>
    <td><blockquote>Required if <b>action</b> is set to <b>patch</b> and <b>resourceToPatch</b> is set to <b>name</b></blockquote>
    Kind of Kubernetes object (ReplicaSet/StatefulSet/...) </td>
  </tr>
  <tr>
    <td><b>name</b><br/>Name</td>
    <td><blockquote>Required if <b>action</b> is set to <b>patch</b> and <b>resourceToPatch</b>  is set to <b>name</b></blockquote>
    Name of Kubernetes object to be patched</td>
  </tr>
  <tr>
    <td><b>mergeStrategy</b><br/>Merge strategy</td>
    <td><blockquote>Required</blockquote>
    The strategy to be used for applying the patch.</br>
    </br>
    Acceptable values are <b>json</b>, <b>merge</b>, and <b>strategic</b>. The default value is <b>strategic</b>.</td>
  </tr>
  <tr>
    <td><b>patch</b><br/>Patch</td>
    <td><blockquote>Required</blockquote>
    Contents of the patch</td>
  </tr>
  <tr>
    <td><b>kubernetesServiceConnection</b><br/>Kubernetes service connection</td>
    <td><blockquote>Required</blockquote>
    Name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a></td>
  </tr>
  <tr>
    <td><b>namespace</b><br/>Namespace</td>
    <td><blockquote>Required</blockquote>
    Namespace within the cluster to deploy to</td>
  </tr>
</table>

The following YAML code shows an example of object patching:

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
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><b>action</b><br/>Action</td>
    <td><blockquote>Required</blockquote>
    Acceptable values are <b>deploy</b>, <b>promote</b>, <b>reject</b>, <b>bake</b>, <b>scale</b>, <b>patch</b>, and <b>delete</b>.</td>
  </tr>
  <tr>
    <td><b>arguments</b><br/>Arguments</td>
    <td><blockquote>Required</blockquote>
    Arguments to be passed onto kubectl for deleting the necessary objects. For example - <br/> <code>arguments: deployment hello-world foo-bar</code></td>
  </tr>
  <tr>
    <td><b>kubernetesServiceConnection</b><br/>Kubernetes service connection</td>
    <td><blockquote>Required</blockquote>
    Name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a></td>
  </tr>
  <tr>
    <td><b>namespace</b><br/>Namespace</td>
    <td><blockquote>Required</blockquote>
    Namespace within the cluster to deploy to</td>
  </tr>
</table>

This YAML code is an example of object deletion: 

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
