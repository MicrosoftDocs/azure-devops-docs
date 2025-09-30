---
title: Kubernetes resources in environments
description: Learn about using Kubernetes resources and resource views in environments to target Kubernetes clusters with Azure Pipelines.
ms.custom: pipelinesresourcesrefresh
ms.topic: conceptual
ms.assetid: b318851c-4240-4dc2-8688-e70aba1cec55
ms.date: 09/29/2025
monikerRange: '>= azure-devops-2020'
---

# Kubernetes resources in environments

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

This article explains how you can use Kubernetes [environment](environments.md) resources to deploy to Kubernetes clusters in Azure Pipelines. You can use Kubernetes resources with public or private clusters from Azure Kubernetes Service (AKS) or other cloud providers.

The Kubernetes resource view shows the status of objects in the namespace that are mapped to the resource. The resource view provides pipeline traceability from a Kubernetes object to the pipeline, and then back to the commit.

For more information about how resources work, see [resources in YAML](resources.md) and [security with resources](../security/resources.md).

> [!NOTE]
> If you use a private AKS cluster, make sure to connect to the cluster's virtual network, because the API server endpoint isn't exposed through a public IP address. It's best to set up a self-hosted agent within a virtual network that has access to the cluster's virtual network. For more information, see [Options for connecting to a private cluster](/azure/aks/private-clusters#options-for-connecting-to-the-private-cluster).

## Kubernetes resource views features

Using Kubernetes resource views within environments provides the following benefits:

- **Pipeline traceability** - The [Kubernetes manifest task](/azure/devops/pipelines/tasks/reference/kubernetes-manifest-v0), used for deployments, adds more annotations to show pipeline traceability in resource views. Pipeline traceability helps to identify the originating Azure DevOps organization, project, and pipeline responsible for updates that were made to an object within the namespace.

  > [!div class="mx-imgBorder"]
  > ![Pipeline traceability](media/k8s-pipeline-traceability.png)

- **Resource health diagnostics** - Workload status can be useful for quickly debugging mistakes or regressions introduced by a new deployment. For example, for unconfigured *imagePullSecrets* resulting in ImagePullBackOff errors, pod status information can help you identify the root cause for the issue.
  > [!div class="mx-imgBorder"]
  > ![ImagePullBackOff](media/k8s-imagepullbackoff.png)

- **Review App** - Review App works by deploying every pull request from your Git repository to a dynamic Kubernetes resource under the environment. Reviewers can see how those changes look and work with other dependent services before they're merged into the target branch and deployed to production.

## AKS resources

If you use Azure Kubernetes Service (AKS), AKS maps a Kubernetes resource within your environment to a namespace. Azure Pipelines creates a [ServiceAccount](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) for your cluster and namespace.

[RoleBinding](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#service-account-permissions) is also created for a [Kubernetes RBAC](/azure/aks/azure-ad-rbac)-enabled cluster to limit the scope of the service account to the chosen namespace. For a Kubernetes RBAC-disabled cluster, the created ServiceAccount has cluster-wide privileges across namespaces.

For more information about setting up a Kubernetes service connection outside of an environment, see the [Kubernetes service connection](../library/service-endpoints.md#common-service-connection-types) section in [Service connections](../library/service-endpoints.md).

### Add an AKS Kubernetes resource

1. In the environment details page, select **Add resource** and choose **Kubernetes**.
1. Select **Azure Kubernetes Service** in the Provider dropdown.
1. Choose the Azure subscription, cluster, and namespace (new/existing).
1. Select **Validate and create** to create the Kubernetes resource.
1. Verify that you see a cluster for your environment. You'll see the text "Never deployed" if you haven't yet deployed code to your cluster. 

   :::image type="content" source="media/kubernetes-environment-cluster.png" alt-text="Add a Kubernetes cluster.":::

### Add a non-AKS Kubernetes resource

Use the generic provider existing service account to map a Kubernetes resource to a namespace from a non-AKS cluster.

1. In the environment details page, select **Add resource** and choose **Kubernetes**.
1. Select **Generic provider (existing service account)** for your provider.
1. Add the cluster name and namespace values.
1. Add the server URL. You can get the URL by running the following command: `kubectl config view --minify -o 'jsonpath={.clusters[0].cluster.server}'`.
1. Get the secret object by running the following steps:
   1. Run the following command, replacing `service-account-name` with your account name.
   ```
   kubectl get secret -n <namespace>  -o jsonpath='{.items[?(@.metadata.annotations.kubernetes\.io/service-account\.name==\"service-account-name\")]}'
   ```
   If you get no results, see [Manually create a long-lived API token for a ServiceAccount](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#manually-create-a-long-lived-api-token-for-a-serviceaccount).

   1. Run the following command, replacing `<service-account-secret-name>` with the output from the previous step.

   ```
   kubectl get secret <service-account-secret-name> -n <namespace> -o json
   ```

1. Paste the secret object into the **Secret** field.
1. Select **Validate and create** to create the Kubernetes resource.

## Kubernetes resources in a pipeline

If you're using AKS, the easiest way to build a YAML pipeline is to use the [Deploy to Azure Kubernetes Services template](../ecosystems/kubernetes/aks-template.md). The template builds and pushes an image to Azure Container Registry, deploys to AKS, and lets you set up a review app. You don't have to write YAML code or manually create explicit role bindings.

:::image type="content" source="media/kubernetes-yaml-templates.png" alt-text="Kubernetes template options.":::

### Set up Review App

In the following example, the first deployment job is run for non-PR branches and does deployments against a regular Kubernetes resource under environments. The second job runs only for PR branches and deploys against Review App resources (namespaces inside Kubernetes cluster) generated on demand. Resources get labeled with "Review" in the resource listing view of the environment.
Define variables to use in the pipeline. If you use the [Deploy to Azure Kubernetes Services template](../ecosystems/kubernetes/aks-template.md), these variables get defined for you.

```YAML
# Build and push image to Azure Container Registry; Deploy to Azure Kubernetes Service
trigger:
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
                message="${message} and is available at $url.<br><br>[Learn More](https://aka.ms/testwithreviewapps) about how to test and provide feedback for the app."
              fi
              echo "##vso[task.setvariable variable=GITHUB_COMMENT]$message"
```

To use this job in an **existing** pipeline, the service connection backing the regular Kubernetes environment resource must be modified to "Use cluster admin credentials". Otherwise, role bindings must be created for the underlying service account to the Review App namespace.

## Next steps

> [!div class="nextstepaction"]
> [Build and deploy to Azure Kubernetes Service](../ecosystems/kubernetes/aks-template.md)

## Related articles

* [Deploy](../ecosystems/kubernetes/deploy.md) 
* [Deploy ASP.NET Core apps to Azure Kubernetes Service with Azure DevOps Starter](/azure/devops-project/azure-devops-project-aks)
* [REST API: Kubernetes with Azure DevOps](/rest/api/azure/devops/distributedtask/kubernetes/add)
