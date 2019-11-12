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
Use this task in a build or release pipeline to bake and deploy manifests to Kubernetes clusters.

## Overview
Following are the key benefits of this task - 

- **Artifact substitution** - The deploy action takes as input a list of container images which can be specified along with their tags or digests. The same is substituted into the non-templatized version of manifest files before application to the cluster to ensure that the right version of the image is pulled by the cluster nodes.
- **Manifest stability** - Rollout status is checked for the Kubernetes objects deployed. This is done to incorporate stability checks while computing the task status as success/failure.
- **Traceability annotations** - Annotations are added to the deployed Kubernetes objects to superimpose traceability information in the form of following annotations - 
  - azure-pipelines/org
  - azure-pipelines/project
  - azure-pipelines/pipeline
  - azure-pipelines/pipelineId
  - azure-pipelines/execution
  - azure-pipelines/executionuri
  - azure-pipelines/jobName
- **Secret handling** - The createSecret action enables creation of docker-registry secrets using Docker Registry Service Connections and generic secrets using plain-text/secret variables. The *secrets* input can be used along with *deploy* action so that the manifest files specified as inputs are augmented with appropriate imagePullSecrets before deploying to the cluster.
- **Bake manifest** - The bake action of the task allows for baking Helm charts into Kubernetes manifest files so that the same can be applied onto the cluster.
- **Deployment strategy** - Choosing canary strategy with deploy action leads to creation of workloads suffixed with '-baseline' and '-canary'. There are two methods of traffic splitting supported in the task:
    - **Service Mesh Interface** -  [Service Mesh Interface](https://smi-spec.io/) abstraction allows for plug-and-play configuration with service mesh providers such as Linkerd and Istio. Meanwhile, the KubernetesManifest task takes away the hard work of mapping SMI's TrafficSplit objects to the stable, baseline and canary services during the lifecycle of the deployment strategy. Service mesh based canary deployments using this task are more accurate as service mesh providers enable granular percentage traffic split (via service registry and sidecar containers injected into pods alongside application containers).
    - **Only Kubernetes (no service mesh)**- In the absence of service mesh, while it may not be possible to achieve exact percentage split at the request level, it is still possible to perform canary deployments by deploying -baseline and -canary workload variants next to the stable variant. The service routes requests to pods of all three workload variants as the selector-label constraints are met (KubernetesManifest will honor these when creating -baseline and -canary variants). This achieves the intended effect of routing only a portion of total requests to the canary.
    
    The -baseline and -canary workloads can be compared using a [ManualIntervention task](../utility/manual-intervention.md)) in release pipelines or using a [Delay task](../utility/delay.md) in YAML pipeline before utilizing the promote/reject action of the task.

## Deploy action
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
    <td>(Optional) Fully qualified resource URL of the image to be used for substitutions on the manifest files. This multiline input accepts specifying multiple artifact substitutions in newline separated form. For example - <br>containers: |<br>&nbsp&nbspcontosodemo.azurecr.io/foo:test1<br>&nbsp&nbspcontosodemo.azurecr.io/bar:test2<br>In this example, all references to contosodemo.azurecr.io/foo and contosodemo.azurecr.io/bar are searched for in the image field of the input manifest files. For the matches found, the tags test1 and test2 are substituted.</td>
  </tr>
  <tr>
    <td><code>imagePullSecrets</code><br/>Image pull secrets</td>
    <td>(Optional) Multiline input where each line contains the name of a docker-registry secret that has already been setup within the cluster. Each of these secret names are added under imagePullSecrets field for the workloads found in the input manifest files</td>
  </tr>
  <tr>
    <td><code>strategy</code><br/>Strategy</td>
    <td>(Optional) Deployment strategy to be used while applying manifest files on the cluster. Currently, &#39;canary&#39; is the only acceptable deployment strategy</td>
  </tr>
  <tr>
    <td><code>trafficSplitMethod</code><br/>Traffic split method</td>
    <td>(Optional) Acceptable values: pod/smi; Default value: pod <br>SMI: Percentage traffic split is done at request level using service mesh. Service mesh has to be setup by cluster admin. Orchestration of <a href="https://github.com/deislabs/smi-spec/blob/master/traffic-split.md" data-raw-source="TrafficSplit](https://github.com/deislabs/smi-spec/blob/master/traffic-split.md)">TrafficSplit</a> objects of SMI is handled by this task. <br>Pod: Percentage split not possible at request level in the absence of service mesh. So the percentage input is used to calculate the replicas for baseline and canary as a percentage of replicas specified in the input manifests for the stable variant.</td>
  </tr>
  <tr>
    <td><code>percentage</code><br/>Percentage</td>
    <td>(Required if strategy ==  canary) Percentage used to compute the number of replicas of &#39;-baseline&#39; and &#39;-canary&#39; varaints of the workloads found in manifest files. For the specified percentage input, if (percentage * numberOfDesirerdReplicas)/100 is not a round number, the floor of this number is used while creating &#39;-baseline&#39; and &#39;-canary&#39;<br/>Example: If Deployment hello-world was found in the input manifest file with &#39;replicas: 4&#39; and if &#39;strategy: canary&#39; and &#39;percentage: 25&#39; are given as inputs to the task, then the Deployments hello-world-baseline and hello-world-canary are created with 1 replica each. The &#39;-baseline&#39; variant is created with the same image and tag as the stable version (4 replica variant prior to deployment) while the &#39;-canary&#39; variant is created with the image and tag corresponding to the new changes being deployed</td>
  </tr>
  <tr>
    <td><code>baselineAndCanaryReplicas</code><br/>Baseline and canary replicas</td>
    <td>(Optional; Relevant only if trafficSplitMethod ==  smi) When trafficSplitMethod == smi, as percentage traffic split is controlled in the service mesh plane, the actual number of replicas for canary and baseline variants could be controlled independently of the traffic split. For example, assume that the input Deployment manifest desired 30 replicas to be used for stable and that the following inputs were specified for the task - <br>&nbsp;&nbsp;&nbsp;&nbsp;strategy: canary<br>&nbsp;&nbsp;&nbsp;&nbsp;trafficSplitMethod: smi<br>&nbsp;&nbsp;&nbsp;&nbsp;percentage: 20<br>&nbsp;&nbsp;&nbsp;&nbsp;baselineAndCanaryReplicas: 1<br> In this case, stable variant will receive 80% traffic while baseline and canary variants will receive 10% each (20% split equally between baseline and canary). However, instead of creating baseline and canary with 3 replicas, the explicit count of baseline and canary replicas is honored. That is, only 1 replica each is created for baseline and canary variants.</td>
  </tr>
</table>


Following is an example YAML snippet for deploying to a Kubernetes namespace using manifest files - 

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

In the above example, the tasks tries to find matches for the image foobar/demo in the image fields of manifest files. If a match is found, the value of *tagVariable* is appended as tag to the image name. Note that it is also possible to specify digests in the containers input for artifact substitution.

> [!NOTE]
> While it is possible to author deploy, promote and reject actions with deployment strategy related inputs in YAML, support for ManualIntervention task is currently not in place for build pipeline. It is thus advisable to use the deployment strategy related actions and inputs in release pipelines in the following sequence - 1. Deploy action with strategy: canary and percentage: $(someValue). 2. ManaulIntervention task so that one can pause the pipeline and compare the baseline with canary. 3. Promote (run if ManualIntervention is resumed) and reject actions (run if ManualIntervention is rejected)

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
    <td>(Optional) Fully qualified resource URL of the image to be used for substitutions on the manifest files<br/>Example: contosodemo.azurecr.io/helloworld:test</td>
  </tr>
  <tr>
    <td><code>imagePullSecrets</code><br/>Image pull secrets</td>
    <td>(Optional) Multiline input where each line contains the name of a docker-registry secret that has already been setup within the cluster. Each of these secret names are added under imagePullSecrets field for the workloads found in the input manifest files</td>
  </tr>
  <tr>
    <td><code>strategy</code><br/>Strategy</td>
    <td>(Optional) Deployment strategy that was used in the deploy action prior to promote/reject. Currently, &#39;canary&#39; is the only acceptable deployment strategy</td>
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
    <td>(Required if action == secret) Acceptable values: dockerRegistry/generic. Set dockerRegistry option for creating/updating imagePullSecret in cluster to facilitate image pull from a private container registry<br/>Default value: dockerRegistry</td>
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
    <td><code>overrideFiles</code><br/>Overridee files</td>
    <td>(Optional; Relevant if action == bake and renderType == helm2) Multiline input accepting path to the override files that are to be used when baking manifest files from helm charts</td>
  </tr>
  <tr>
    <td><code>overrides</code><br/>Override values</td>
    <td>(Optional; Relevant if action == bake and renderType == helm2) Additional override values that are to be used via --set switch when baking manifest files using helm. If multiple overriding key-value pairs are to be used, each key-value pair is to be specified in a separate line (use newline as delimiter between different key-value pairs).</td>
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

Following is an example YAML snippet for baking manifest files from Helm charts. Note the usage of name input in the first task which is later referenced from the subsequent deploy step for specifying path to the manifests that were produced by the bake step - 
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
    <td>(Required) Acceptablee values: file/name. Indicates whether a manifest file is to be used to identify the objects to be patched or if an individual object is to be identified by kind and name as the target for patch<br/>Default value: file</td>
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