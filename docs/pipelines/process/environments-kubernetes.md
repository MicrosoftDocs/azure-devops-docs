---
title: Kubernetes resources in environments
description: Learn about using Kubernetes resources in environments to target Kubernetes clusters with Azure Pipelines.
ms.custom: pipelinesresourcesrefresh
ms.topic: conceptual
ms.assetid: b318851c-4240-4dc2-8688-e70aba1cec55
ms.date: 09/30/2025
monikerRange: '>= azure-devops-2020'
#customer intent: As a Kubernetes developer, I want to understand how Kubernetes resources are used in Azure Pipelines environments, so I can deploy apps to my Kubernetes clusters and see review environments for PRs.
---

# Kubernetes resources in environments

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

This article describes using Kubernetes resources in Azure Pipelines [environments](environments.md) that you can target with deployments. You can connect to public or private Kubernetes clusters in Azure Kubernetes Service (AKS) or other cloud providers.
 
Environment resource views show Kubernetes resource status and provide traceability to the pipeline and back to the triggering commit. You can also create dynamic Kubernetes environment resources to review pull request effects before merge. For more information about environment resources, see [Resources in YAML pipelines](resources.md) and [Resource security](../security/resources.md).

> [!NOTE]
> To use a private AKS cluster as an environment resource, you must connect to the cluster's virtual network, because the API server endpoint isn't exposed through a public IP address. The best method is to set up a self-hosted agent within a virtual network that can access the cluster's virtual network. For more information, see [Options for connecting to a private cluster](/azure/aks/private-clusters#options-for-connecting-to-the-private-cluster).

## Kubernetes environment resource advantages

Kubernetes environment resources and resource views in environments provide the following benefits:

- **Pipeline traceability**. The [Kubernetes manifest](/azure/devops/pipelines/tasks/reference/kubernetes-manifest-v1) deployment task adds annotations that support pipeline traceability. You can see the Azure DevOps organization, project, and pipeline responsible for updates to objects within the namespace.

   :::image type="content" source="media/k8s-pipeline-traceability.png" alt-text="Screenshot that shows pipeline traceability for a Kubernetes cluster.":::

- **Resource health diagnostics**. The workload status view is a quick way to debug mistakes or regressions introduced by new deployments. For example, pod status information can help you identify the cause of issues like unconfigured `imagePullSecrets` that result in `ImagePullBackOff` errors.

   :::image type="content" source="media/k8s-imagepullbackoff.png" alt-text="Screenshot that shows the workload status view for a Kubernetes deployment.":::

- **Review app**. The Review app deploys every pull request from your Git repository to a dynamic Kubernetes resource in the environment, and posts a GitHub comment linking to the review environment. Reviewers can see how the PR changes look and work with other dependent services before the changes are merged into the target branch and deployed to production.

   :::image type="content" source="media/kubernetes-github-app.png" alt-text="Screenshot that shows the Review app comment in GitHub.":::

<a name="use-azure-kubernetes-service"></a>
## AKS resources

When you use AKS, a [ServiceAccount](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) is created in your chosen cluster and namespace. For a [Kubernetes role-based access control (RBAC)](/azure/aks/azure-ad-rbac)-enabled cluster, [RoleBinding](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding) is also created to limit the scope of the service account to the chosen namespace. For a Kubernetes RBAC-disabled cluster, the created service account has cluster-wide privileges across namespaces.

AKS maps the Kubernetes resources in your environment to the specified namespace. For information about setting up a Kubernetes service connection outside of an environment, see the [Kubernetes service connection](../library/service-endpoints.md#common-service-connection-types) section in [Service connections](../library/service-endpoints.md).

To add an AKS resource to an Azure Pipelines environment:

1. On the environment's page under **Pipelines** > **Environments**, select **Add resource** and then select **Kubernetes**.

1. On the next screen, select **Azure Kubernetes Service** for the **Provider**, and then select your **Azure subscription**, AKS **Cluster**, and new or existing **Namespace**. For a new namespace, enter the namespace name.

1. Select **Validate and create**.

The new resource appears on the environment's **Resources** tab with the text **Never deployed** if you didn't yet deploy it to your cluster.

   :::image type="content" source="media/kubernetes-environment-cluster.png" alt-text="Screenshot that shows an added Kubernetes resource.":::

<a name="use-an-existing-service-account"></a>
## Non-AKS Kubernetes resources

To map a Kubernetes resource to a namespace from a non-AKS cluster, you need an existing service account for the non-AKS provider.

1. On the environment's page under **Pipelines** > **Environments**, select **Add resource** and then select **Kubernetes**.
1. On the next screen, select **Generic provider (existing service account)** for the **Provider**.
1. Under **Cluster credentials**, enter the **Cluster name**, **Namespace**, **Server URL**, and **Secret**.

   - To get the server URL, run `kubectl config view --minify -o jsonpath={.clusters[0].cluster.server}` in your local shell.
   - To get the secret:
     1. Get service account secret names by running `kubectl get serviceAccounts <service-account-name> -n <namespace> -o=jsonpath={.secrets[*].name}`.
     1. Use the output in `kubectl get secret <service-account-secret-name> -n <namespace> -o json`.

     > [!NOTE]
     > If you get no results from the `get ServiceAccounts` command, see [Manually create a long-lived API token for a ServiceAccount](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#manually-create-a-long-lived-api-token-for-a-serviceaccount).

1. Select **Validate and create**.

## Kubernetes resources in pipelines

The easiest way to create a YAML pipeline to deploy to AKS is to use the [Deploy to Azure Kubernetes Services](../ecosystems/kubernetes/aks-template.md) template. The template builds and pushes an image to Azure Container Registry and deploys to AKS, or sets up a review app for PRs. You don't have to write YAML code or manually create explicit role bindings.

<a name="set-up-review-app"></a>
### Pipeline example

In the following example pipeline based on the [Deploy to Azure Kubernetes Services](../ecosystems/kubernetes/aks-template.md) template, the first deployment job runs for non-PR branches and deploys against a regular Kubernetes resource in the environment.

The second job runs only for PR branches and deploys against review app resources. The pipeline generates review namespaces inside the Kubernetes cluster on demand. These resources are labeled **Review** in the environment resource listing.

:::image type="content" source="media/kubernetes-yaml-templates.png" alt-text="Screenshot that shows the Review environment in the pipeline environment listing.":::

> [!NOTE]
> To use this job in an existing pipeline, make sure the service connection backing the regular Kubernetes environment resource is set to **Use cluster admin credentials**. Otherwise, role bindings must be created for the underlying service account to the review app namespace.

This example defines and uses variables in the pipeline. If you use the [Deploy to Azure Kubernetes Services ](../ecosystems/kubernetes/aks-template.md) template, the generated pipeline defines these variables for you.

```yaml
# Build and push image to Azure Container Registry; Deploy to Azure Kubernetes Service
trigger:
- main

pr:
- main

resources:
- repo: self

variables:

  # Container registry service connection established during pipeline creation
  dockerRegistryServiceConnection: '12345' # Docker service connection identifier
  envName: 'myEnv' # name of your environment
  imageRepository: 'name-of-image-repository' # name of image repository
  containerRegistry: 'mycontainer.azurecr.io' # path to container registry
  dockerfilePath: '**/Dockerfile'
  tag: '$(Build.BuildId)'
  imagePullSecret: 'my-app-secret' # image pull secret

  # Agent VM image name
  vmImageName: 'ubuntu-latest'

  # Name of the new namespace being created to deploy the PR changes.
  k8sNamespaceForPR: 'review-app-$(System.PullRequest.PullRequestId)'

stages:
- stage: Build
  displayName: Build stage
  jobs:
  - job: Build
    displayName: Build
    pool:
      vmImage: $(vmImageName)
    steps:
    - task: Docker@2
      displayName: Build and push an image to container registry
      inputs:
        command: buildAndPush
        repository: $(imageRepository)
        dockerfile: $(dockerfilePath)
        containerRegistry: $(dockerRegistryServiceConnection)
        tags: |
          $(tag)

    - upload: manifests
      artifact: manifests

- stage: Production
  displayName: Deploy stage
  dependsOn: Build

  jobs:
  - deployment: Production
    condition: and(succeeded(), not(startsWith(variables['Build.SourceBranch'], 'refs/pull/')))
    displayName: Production
    pool:
      vmImage: $(vmImageName)
    environment: 
      name: $(envName).$(resourceName)
      resourceType: Kubernetes 
    strategy:
      runOnce:
        deploy:
          steps:
          - task: KubernetesManifest@1
            displayName: Create imagePullSecret
            inputs:
              action: createSecret
              secretName: $(imagePullSecret)
              dockerRegistryEndpoint: $(dockerRegistryServiceConnection)

          - task: KubernetesManifest@1
            displayName: Deploy to Kubernetes cluster
            inputs:
              action: deploy
              manifests: |
                $(Pipeline.Workspace)/manifests/deployment.yml
                $(Pipeline.Workspace)/manifests/service.yml
              imagePullSecrets: |
                $(imagePullSecret)
              containers: |
                $(containerRegistry)/$(imageRepository):$(tag)

  - deployment: DeployPullRequest
    displayName: Deploy Pull request
    condition: and(succeeded(), startsWith(variables['Build.SourceBranch'], 'refs/pull/'))
    pool:
      vmImage: $(vmImageName)

    environment: 
      name: $(envName).$(resourceName)
      resourceType: Kubernetes
    strategy:
      runOnce:
        deploy:
          steps:
          - reviewApp: default

          - task: Kubernetes@1
            displayName: 'Create a new namespace for the pull request'
            inputs:
              command: apply
              useConfigurationFile: true
              inline: '{ "kind": "Namespace", "apiVersion": "v1", "metadata": { "name": "$(k8sNamespaceForPR)" }}'

          - task: KubernetesManifest@1
            displayName: Create imagePullSecret
            inputs:
              action: createSecret
              secretName: $(imagePullSecret)
              namespace: $(k8sNamespaceForPR)
              dockerRegistryEndpoint: $(dockerRegistryServiceConnection)

          - task: KubernetesManifest@1
            displayName: Deploy to the new namespace in the Kubernetes cluster
            inputs:
              action: deploy
              namespace: $(k8sNamespaceForPR)
              manifests: |
                $(Pipeline.Workspace)/manifests/deployment.yml
                $(Pipeline.Workspace)/manifests/service.yml
              imagePullSecrets: |
                $(imagePullSecret)
              containers: |
                $(containerRegistry)/$(imageRepository):$(tag)

          - task: Kubernetes@1
            name: get
            displayName: 'Get services in the new namespace'
            continueOnError: true
            inputs:
              command: get
              namespace: $(k8sNamespaceForPR)
              arguments: svc
              outputFormat: jsonpath='http://{.items[0].status.loadBalancer.ingress[0].ip}:{.items[0].spec.ports[0].port}'

          # Getting the IP of the deployed service and writing it to a variable for posting comment
          - script: |
              url="$(get.KubectlOutput)"
              message="Your review app has been deployed"
              if [ ! -z "$url" -a "$url" != "http://:" ]
              then
                message="${message} and is available at $url."
              fi
              echo "##vso[task.setvariable variable=GITHUB_COMMENT]$message"
```

## Related content

- [Build and deploy to Azure Kubernetes Service with Azure Pipelines](../ecosystems/kubernetes/aks-template.md)
- [Deploy to Kubernetes](../ecosystems/kubernetes/deploy.md) 
- [Deploy ASP.NET Core apps to Azure Kubernetes Service with Azure DevOps Starter](/azure/devops-project/azure-devops-project-aks)
- [Kubernetes with Azure DevOps REST API](/rest/api/azure/devops/distributedtask/kubernetes)
