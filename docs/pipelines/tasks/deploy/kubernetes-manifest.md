---
title: Kubernetes manifest task
description: Bake and deploy manifests to Kubernetes clusters
ms.topic: reference
ms.assetid: 31e3875c-c9ef-4c11-8b86-4b4defe84329
ms.manager: atulmal
ms.author: atulmal
author: azooinmyluggage
ms.date: 01/26/2021
monikerRange: 'azure-devops'
---

# Kubernetes manifest task

Use a Kubernetes manifest task in a build or release pipeline to bake and deploy manifests to Kubernetes clusters.

## Overview

The following list shows the key benefits of this task:

- **Artifact substitution**: The deployment action takes as input a list of container images that you can specify along with their tags and digests. The same input is substituted into the nontemplatized manifest files before application to the cluster. This substitution ensures that the cluster nodes pull the right version of the image.

- **Manifest stability**: The rollout status of the deployed Kubernetes objects is checked. The stability checks are incorporated to determine whether the task status is a success or a failure.

- **Traceability annotations**: Annotations are added to the deployed Kubernetes objects to superimpose traceability information. The following annotations are supported:

  - azure-pipelines/org
  - azure-pipelines/project
  - azure-pipelines/pipeline
  - azure-pipelines/pipelineId
  - azure-pipelines/execution
  - azure-pipelines/executionuri
  - azure-pipelines/jobName

- **Secret handling**: The **createSecret** action lets Docker registry secrets be created using Docker registry service connections. It also lets generic secrets be created using either plain-text variables or secret variables. Before deployment to the cluster, you can use the **secrets** input along with the **deploy** action to augment the input manifest files with the appropriate **imagePullSecrets** value.

- **Bake manifest**: The **bake** action of the task allows for baking templates into Kubernetes manifest files. The action uses tools such as Helm, Compose, and kustomize. With baking, these Kubernetes manifest files are usable for deployments to the cluster.

- **Deployment strategy**: Choosing the **canary** strategy with the **deploy** action leads to creation of workloads having names suffixed with "-baseline" and "-canary". The task supports two methods of traffic splitting:

  - **Service Mesh Interface**: [Service Mesh Interface](https://smi-spec.io/) (SMI) abstraction allows configuration with service mesh providers like Linkerd and Istio. The Kubernetes Manifest task maps SMI TrafficSplit objects to the stable, baseline, and canary services during the life cycle of the deployment strategy.

    Canary deployments that are based on a service mesh and use this task are more accurate. This accuracy comes because service mesh providers enable the granular percentage-based split of traffic. The service mesh uses the service registry and sidecar containers that are injected into pods. This injection occurs alongside application containers to achieve the granular traffic split.
  
  - **Kubernetes with no service mesh**: In the absence of a service mesh, you might not get the exact percentage split you want at the request level. But you can possibly do canary deployments by using baseline and canary variants next to the stable variant.

    The service sends requests to pods of all three workload variants as the selector-label constraints are met. Kubernetes Manifest honors these requests when creating baseline and canary variants. This routing behavior achieves the intended effect of routing only a portion of total requests to the canary.

  Compare the baseline and canary workloads by using either a [Manual Intervention task](../utility/manual-intervention.md) in release pipelines or a [Delay task](../utility/delay.md) in YAML pipelines. Do the comparison before using the promote or reject action of the task.

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
    <td>(Required)<br/>
    <br/>
    <b>deploy</b></td>
  </tr>
  <tr>
    <td><b>kubernetesServiceConnection</b><br/>Kubernetes service connection</td>
    <td>(Required unless the task is used in a <a href="../../process/environments-kubernetes.md" data-raw-source="[Kubernetes environment](../../process/environments-kubernetes.md)">Kubernetes environment</a>)<br/>
    <br/>
    The name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a>.</td>
  </tr>
  <tr>
    <td><b>namespace</b><br/>Namespace</td>
    <td>(Required unless the task is used in a <a href="../../process/environments-kubernetes.md" data-raw-source="[Kubernetes environment](../../process/environments-kubernetes.md)">Kubernetes environment</a>)<br/>
    <br/>
    The namespace within the cluster to deploy to.</td>
  </tr>
  <tr>
    <td><b>manifests</b><br/>Manifests</td>
    <td>(Required)<br/>
    <br/>
    The path to the manifest files to be used for deployment. Each line represents a single path. A <a href="../file-matching-patterns.md" data-raw-source="[file-matching pattern](../file-matching-patterns.md)"> file-matching pattern</a> is an acceptable value for each line.</td>
  </tr>
  <tr>
    <td><b>containers</b><br/>Containers</td>
    <td>(Optional)<br/>
    <br/>
    The fully qualified URL of the image to be used for substitutions on the manifest files. This input accepts the specification of multiple artifact substitutions in newline-separated form. Here's an example:<br/>
    <br/>
    <code>containers: |</code><br/>
    <code>&nbsp;&nbsp;contosodemo.azurecr.io/foo:test1</code><br/>
    <code>&nbsp;&nbsp;contosodemo.azurecr.io/bar:test2</code><br/>
    <br/>
    In this example, all references to <code>contosodemo.azurecr.io/foo</code> and <code>contosodemo.azurecr.io/bar</code> are searched for in the image field of the input manifest files. For each match found, the tag <code>test1</code> or <code>test2</code> replaces the matched reference.</td>
  </tr>
  <tr>
    <td><b>imagePullSecrets</b><br/>Image pulls secrets</td>
    <td>(Optional)<br/>
    <br/>
    Multiline input where each line contains the name of a Docker registry secret that has already been set up within the cluster. Each secret name is added under <b>imagePullSecrets</b> for the workloads that are found in the input manifest files.</td>
  </tr>
  <tr>
    <td><b>strategy</b><br/>Strategy</td>
    <td>(Optional)<br/>
    <br/>
    The deployment strategy used while manifest files are applied on the cluster. Currently, <b>canary</b> is the only acceptable deployment strategy.</td>
  </tr>
  <tr>
    <td><b>trafficSplitMethod</b><br/>Traffic split method</td>
    <td>(Optional)<br/>
    <br/>
    Acceptable values are <b>pod</b> and <b>smi</b>. The default value is <b>pod</b>.<br/>
    <br/>
    For the value <b>smi</b>, the percentage traffic split is done at the request level by using a service mesh. A service mesh must be set up by a cluster admin. This task handles orchestration of SMI <a href="https://github.com/servicemeshinterface/smi-spec/blob/master/apis/traffic-split/" data-raw-source="TrafficSplit](https://github.com/servicemeshinterface/smi-spec/blob/master/apis/traffic-split/)">TrafficSplit</a> objects.
    <br/><br/>
    For the value <b>pod</b>, the percentage split isn't possible at the request level in the absence of a service mesh. Instead, the percentage input is used to calculate the replicas for baseline and canary. The calculation is a percentage of replicas that are specified in the input manifests for the stable variant.</td>
  </tr>
  <tr>
    <td><b>percentage</b><br/>Percentage</td>
    <td>(Required only if <b>strategy</b> is set to <b>canary</b>)<br/>
    <br/>
    The percentage that is used to compute the number of baseline-variant and canary-variant replicas of the workloads that are contained in manifest files.<br/>
    <br/>
    For the specified percentage input, calculate:<br/>
    <br/>
    (<i>percentage</i> <b>&times;</b> <i>number&nbsp;of&nbsp;replicas</i>) <b>/</b> 100<br/>
    <br/>
    If the result isn't an integer, the mathematical floor of the result is used when baseline and canary variants are created.<br/>
    <br/>
    For example, assume the deployment hello-world is in the input manifest file and that the following lines are in the task input:<br/>
    <br/>
    <code>replicas: 4</code><br/>
    <code>strategy: canary</code><br/>
    <code>percentage: 25</code><br/>
    <br/>
    In this case, the deployments hello-world-baseline and hello-world-canary are created with one replica each. The baseline variant is created with the same image and tag as the stable version, which is the four-replica variant before deployment. The canary variant is created with the image and tag corresponding to the newly deployed changes.</td>
  </tr>
  <tr>
    <td><b>baselineAndCanaryReplicas</b><br/>Baseline and canary replicas</td>
    <td>(Optional, and relevant only if <b>trafficSplitMethod</b> is set to <b>smi</b>)<br/>
    <br/>
    When you set <b>trafficSplitMethod</b> to <b>smi</b>, the percentage traffic split is controlled in the service mesh plane. But you can control the actual number of replicas for canary and baseline variants independently of the traffic split.<br/>
    <br/>
    For example, assume that the input deployment manifest specifies 30 replicas for the stable variant. Also assume that you specify the following input for the task:<br/>
    <br/>
    <code>strategy: canary</code><br/>
    <code>trafficSplitMethod: smi</code><br/>
    <code>percentage: 20</code><br/>
    <code>baselineAndCanaryReplicas: 1</code><br/>
    <br/>
    In this case, the stable variant receives 80% of the traffic, while the baseline and canary variants each receive half of the specified 20%. But baseline and canary variants don't receive three replicas each. They instead receive the specified number of replicas, which means they each receive one replica.</td>
  </tr>
  <tr>
    <td><b>rolloutStatusTimeout</b><br/>Timeout for rollout status</td>
    <td>(Optional)<br/>
    <br>
    The length of time (in seconds) to wait before ending watch on rollout status. Default is 0 (don't wait).
    </td>
  </tr>
</table>

The following YAML code is an example of deploying to a Kubernetes namespace by using manifest files:

```YAML
steps:
- task: KubernetesManifest@0
  displayName: Deploy
  inputs:
    kubernetesServiceConnection: someK8sSC1
    namespace: default
    manifests: |
      manifests/deployment.yml
      manifests/service.yml
    containers: |
      foo/demo:$(tagVariable1)
      bar/demo:$(tagVariable2)
    imagePullSecrets: |
      some-secret
      some-other-secret
```

In the above example, the task tries to find matches for the images <code>foo/demo</code> and <code>bar/demo</code> in the image fields of manifest files. For each match found, the value of either <code>tagVariable1</code> or <code>tagVariable2</code> is appended as a tag to the image name. You can also specify digests in the containers input for artifact substitution.

> [!NOTE]
> While you can author deploy, promote, and reject actions with YAML input related to deployment strategy, support for a Manual Intervention task is currently unavailable for build pipelines.
>
> For release pipelines, we advise you to use actions and input related to deployment strategy in the following sequence:
> 1. A deploy action specified with <code>strategy: canary</code> and <code>percentage: $(<i>someValue</i>)</code>.
> 1. A Manual Intervention task so that you can pause the pipeline and compare the baseline variant with the canary variant.
> 1. A promote action that runs if a Manual Intervention task is resumed and a reject action that runs if a Manual Intervention task is rejected.

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
    <td>(Required)<br/>
    <br/>
    <b>promote</b> or <b>reject</b></td>
  </tr>
  <tr>
    <td><b>kubernetesServiceConnection</b><br/>Kubernetes service connection</td>
    <td>(Required)<br/>
    <br/>
    The name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a>.</td>
  </tr>
  <tr>
    <td><b>namespace</b><br/>Namespace</td>
    <td>(Required)<br/>
    <br/>
    The namespace within the cluster to deploy to.</td>
  </tr>
  <tr>
    <td><b>manifests</b><br/>Manifests</td>
    <td>(Required)<br/>
    <br/>
    The path to the manifest files to be used for deployment. Each line represents a single path. A <a href="../file-matching-patterns.md" data-raw-source="[file-matching pattern](../file-matching-patterns.md)"> file-matching pattern</a> is an acceptable value for each line.</td>
  </tr>
  <tr>
    <td><b>containers</b><br/>Containers</td>
    <td>(Optional)<br/>
    <br/>
    The fully qualified resource URL of the image to be used for substitutions on the manifest files. The URL contosodemo.azurecr.io/helloworld:test is an example.</td>
  </tr>
  <tr>
    <td><b>imagePullSecrets</b><br/>Image pull secrets</td>
    <td>(Optional)<br/>
    <br/>
    Multiline input where each line contains the name of a Docker registry secret that is already set up within the cluster. Each secret name is added under the <b>imagePullSecrets</b> field for the workloads that are found in the input manifest files.</td>
  </tr>
  <tr>
    <td><b>strategy</b><br/>Strategy</td>
    <td>(Optional)<br/>
    <br/>
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
    <td>(Required)<br/>
    <br/>
    <b>createSecret</b></td>
  </tr>
  <tr>
    <td><b>secretType</b><br/>Secret type</td>
    <td>(Required)<br/>
    <br/>
    Acceptable values are <b>dockerRegistry</b> and <b>generic</b>. The default value is <b>dockerRegistry</b>.<br/>
    <br/>
    If you set <b>secretType</b> to <b>dockerRegistry</b>, the <b>imagePullSecrets</b> field is created or updated in a cluster to help image pull from a private container registry.</td>
  </tr>
  <tr>
    <td><b>secretName</b><br/>Secret name</td>
    <td>(Required)<br/>
    <br/>
    The name of the secret to be created or updated.</td>
  </tr>
  <tr>
    <td><b>dockerRegistryEndpoint</b><br/>Docker registry service connection</td>
    <td>(Required only if <b>secretType</b> is set to <b>dockerRegistry</b>)<br/>
    <br/>
    The credentials of the specified service connection are used to create a Docker registry secret within the cluster. Manifest files under the <b>imagePullSecrets</b> field can then refer to this secret's name.</td>
  </tr>
  <tr>
    <td><b>secretArguments</b><br/>Secret arguments</td>
    <td>(Required only if <b>secretType</b> is set to <b>generic</b>)<br/>
    <br/>
    Accepts keys and literal values to be used for creation and updating of secrets. Here's an example:<br/>
    <b>--from-literal=key1=value1</b>
    <b>--from-literal=key2=&quot;top secret&quot;</b>
    </td>
  </tr>
  <tr>
    <td><b>kubernetesServiceConnection</b><br/>Kubernetes service connection</td>
    <td>(Required)<br/>
    <br/>
    The name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a>.</td>
  </tr>
  <tr>
    <td><b>namespace</b><br/>Namespace</td>
    <td>(Required)<br/>
    <br/>
    The cluster namespace within which to create a secret.</td>
  </tr>
</table>

The following YAML code shows a sample creation of Docker registry secrets by using [Docker Registry service connection](../../library/service-endpoints.md#sep-docreg): 

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
    <td>(Required)<br/>
    <br/>
    <b>bake</b></td>
  </tr>
  <tr>
    <td><b>renderType</b><br/>Render engine</td>
    <td>(Required)<br/>
    <br/>
    The render type used to produce the manifest files.</br>
    </br>
    Acceptable values are <b>helm2</b>, <b>kompose</b>, and <b>kustomize</b>. The default value is <b>helm2</b>.</td>
  </tr>
  <tr>
    <td><b>helmChart</b><br/>Helm chart</td>
    <td>(Required only if <b>renderType</b> is set to <b>helm2</b>)<br/>
    <br/>
    The path to the Helm chart used for baking.</td>
  </tr>
  <tr>
    <td><b>overrideFiles</b><br/>Override files</td>
    <td>(Optional, and relevant only if <b>renderType</b> is set to <b>helm2</b>)<br/>
    <br/>
    Multiline input that accepts the path to the override files. The files are used when manifest files from Helm charts are baked.</td>
  </tr>
  <tr>
    <td><b>overrides</b><br/>Override values</td>
    <td>(Optional, and relevant only if <b>renderType</b> is set to <b>helm2</b>)<br/>
    <br/>
    Additional override values that are used via the command-line switch <b>--set</b> when manifest files using Helm are baked.<br/>
    <br/>
    Specify override values as key-value pairs in the format <i>key</i><b>:</b><i>value</i>. If you use multiple overriding key-value pairs, specify each key-value pair in a separate line. Use a newline character as the delimiter between different key-value pairs.</td>
  </tr>
  <tr>
    <td><b>releaseName</b><br/>Release name</td>
    <td>(Optional, and relevant only if <b>renderType</b> is set to <b>helm2</b>)<br/>
    <br/>
    The name of the release used when baking Helm charts.</td>
  </tr>
  <tr>
    <td><b>kustomizationPath</b><br/>Kustomization path</td>
    <td>(Optional, and relevant only if <b>renderType</b> is set to <b>kustomize</b>)<br/>
    <br/>
    The path to the directory containing the file kustomization.yaml.</td>
  </tr>
  <tr>
    <td><b>dockerComposeFile</b><br/>Path to Docker compose file</td>
    <td>(Optional, and relevant only if <b>renderType</b> is set to <b>kompose</b>)<br/>
    <br/>
    The path to the Docker compose file.</td>
  </tr>
</table>

The following YAML code is an example of baking manifest files from Helm charts. Note the usage of name input in the first task. This name is later referenced from the deploy step for specifying the path to the manifests that were produced by the bake step.

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
    <td>(Required)<br/>
    <br/>
    <b>scale</b></td>
  </tr>
  <tr>
    <td><b>kind</b><br/>Kind</td>
    <td>(Required)<br/>
    <br/>
    The kind of Kubernetes object to be scaled up or down. Examples include ReplicaSet and StatefulSet.</td>
  </tr>
  <tr>
    <td><b>name</b><br/>Name</td>
    <td>(Required)<br/>
    <br/>
    The name of the Kubernetes object to be scaled up or down.</td>
  </tr>
  <tr>
    <td><b>replicas</b><br/>Replica count</td>
    <td>(Required)<br/>
    <br/>
    The number of replicas to scale to.</td>
  </tr>
  <tr>
    <td><b>kubernetesServiceConnection</b><br/>Kubernetes service connection</td>
    <td>(Required)<br/>
    <br/>
    The name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a>.</td>
  </tr>
  <tr>
    <td><b>namespace</b><br/>Namespace</td>
    <td>(Required)<br/>
    <br/>
    The namespace within the cluster to deploy to.</td>
  </tr>
  <tr>
    <td><b>rolloutStatusTimeout</b><br/>Timeout for rollout status</td>
    <td>(Optional)<br/>
    <br>
    The length of time (in seconds) to wait before ending watch on rollout status. Default is 0 (don't wait).
    </td>
  </tr>
</table>

The following YAML code shows an example of scaling objects:

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
    <td>(Required)<br/>
    <br/>
    <b>patch</b></td>
  </tr>
  <tr>
    <td><b>resourceToPatch</b><br/>Resource to patch</td>
    <td>(Required)<br/>
    <br/>
    Indicates one of the following patch methods:
    <ul>
      <li>A manifest file identifies the objects to be patched.</li>
      <li>An individual object is identified by kind and name as the patch target.</li>
    </ul>
    Acceptable values are <b>file</b> and <b>name</b>. The default value is <b>file</b>.</td>
  </tr>
  <tr>
    <td><b>resourceFiletoPatch</b><br/>File path</td>
    <td>(Required only if <b>action</b> is set to <b> patch</b> and <b>resourceToPatch</b> is set to <b>file</b>)<br/>
    <br/>
    The path to the file used for the patch.</td>
  </tr>
  <tr>
    <td><b>kind</b><br/>Kind</td>
    <td>(Required only if <b>resourceToPatch</b> is set to <b>name</b>)<br/>
    <br/>
    The kind of the Kubernetes object. Examples include ReplicaSet and StatefulSet.</td>
  </tr>
  <tr>
    <td><b>name</b><br/>Name</td>
    <td>(Required only if <b>resourceToPatch</b> is set to <b>name</b>)<br/>
    <br/>
    The name of the Kubernetes object to be patched.</td>
  </tr>
  <tr>
    <td><b>mergeStrategy</b><br/>Merge strategy</td>
    <td>(Required)<br/>
    <br/>
    The strategy to be used for applying the patch.</br>
    </br>
    Acceptable values are <b>json</b>, <b>merge</b>, and <b>strategic</b>. The default value is <b>strategic</b>.</td>
  </tr>
  <tr>
    <td><b>patch</b><br/>Patch</td>
    <td>(Required)<br/>
    <br/>
    The contents of the patch.</td>
  </tr>
  <tr>
    <td><b>kubernetesServiceConnection</b><br/>Kubernetes service connection</td>
    <td>(Required)<br/>
    <br/>
    The name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a>.</td>
  </tr>
  <tr>
    <td><b>namespace</b><br/>Namespace</td>
    <td>(Required)<br/>
    <br/>
    The namespace within the cluster to deploy to.</td>
  </tr>
  <tr>
    <td><b>rolloutStatusTimeout</b><br/>Timeout for rollout status</td>
    <td>(Optional)<br/>
    <br>
    The length of time (in seconds) to wait before ending watch on rollout status. Default is 0 (don't wait).
    </td>
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
    <td>(Required)<br/>
    <br/>
    <b>delete</b></td>
  </tr>
  <tr>
    <td><b>arguments</b><br/>Arguments</td>
    <td>(Required)<br/>
    <br/>
    Arguments to be passed on to kubectl for deleting the necessary objects. An example is:<br/>
    <code>arguments: deployment hello-world foo-bar</code></td>
  </tr>
  <tr>
    <td><b>kubernetesServiceConnection</b><br/>Kubernetes service connection</td>
    <td>(Required)<br/>
    <br/>
    The name of the <a href="../../library/service-endpoints.md#sep-kuber" data-raw-source="[Kubernetes service connection](../../library/service-endpoints.md#sep-kuber)">Kubernetes service connection</a>.</td>
  </tr>
  <tr>
    <td><b>namespace</b><br/>Namespace</td>
    <td>(Required)<br/>
    <br/>
    The namespace within the cluster to deploy to.</td>
  </tr>
</table>

This YAML code shows a sample object deletion:

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

## Troubleshooting

### My Kubernetes cluster is behind a firewall and I am using hosted agents. How can I deploy to this cluster?

You can grant hosted agents access through your firewall by allowing the IP addresses for the hosted agents. For more details, see [Agent IP ranges](../../agents/hosted.md#agent-ip-ranges)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/KubernetesManifestV0). Feedback and contributions are welcome.
