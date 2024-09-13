---
title: Use a canary deployment strategy for Kubernetes
description: Learn how to perform and evaluate canary deployments on Kubernetes clusters by using Azure Pipelines.
ms.topic: tutorial
ms.assetid: 33ffbd7f-746b-4338-8669-0cd6adce6ef4
ms.date: 09/12/2024
ms.custom: fasttrack-edit
monikerRange: '>= azure-devops-2022'
---

# Tutorial: Use a canary deployment strategy for Kubernetes

[!INCLUDE [version-eq-azure-devops](../../../includes/version-gt-eq-2022.md)]

This step-by-step guide covers how to use the [Kubernetes manifest task](/azure/devops/pipelines/tasks/reference/kubernetes-manifest-v0) with the `canary` strategy. A *canary* deployment strategy deploys new versions of an application next to stable, production versions.

You use the associated workflow to evaluate the code and compare the baseline and canary app deployments. Based on the evaluation, you decide whether to promote or reject the canary deployment.

This tutorial uses Docker Registry and Azure Resource Manager service connections to connect to Azure resources. For an Azure Kubernetes Service (AKS) private cluster or a cluster that has local accounts disabled, an [Azure Resource Manager service connections](../../library/service-endpoints.md#azure-resource-manager-service-connection) is a better way to connect.


## Prerequisites

- An Azure DevOps project with at least **User** permissions.
- An Azure account. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An [Azure Container Registry](/azure/container-registry/container-registry-get-started-portal#create-a-container-registry) instance with push privileges.
- An [Azure Kubernetes Service (AKS) cluster](/azure/aks/tutorial-kubernetes-deploy-cluster) deployed. You can attach the AKS cluster to your Azure Container registry cluster when you deploy the AKS cluster or afterwards.
- A GitHub account. [Create a free GitHub account](https://github.com/join).
- A fork of the [https://github.com/MicrosoftDocs/azure-pipelines-canary-k8s](https://github.com/MicrosoftDocs/azure-pipelines-canary-k8s) GitHub repository.

  >[!IMPORTANT]
  >During the following procedures, you might be prompted to create a [GitHub service connection](../../library/service-endpoints.md#github-service-connection) or be redirected to GitHub to sign in, install Azure Pipelines, or authorize Azure Pipelines. Follow the onscreen instructions to complete the process. For more information, see [Access to GitHub repositories](../../repos/github.md#access-to-github-repositories).

### GitHub repository files

The GitHub repository contains the following files:

|File|Description|
|----|-----------|
|*./app/app.py*|A simple, Flask-based web server . The file sets up a custom counter for the number of good and bad responses, based on the value of the `success_rate` variable.|
|*./app/Dockerfile*|Used for building the image with each change to *app.py*. Each change triggers the build pipeline to build the image and push it to the container registry.|
|*./manifests/deployment.yml*|Contains the specification of the `sampleapp` deployment workload corresponding to the published image. You use this manifest file for the stable version of the deployment object and for deriving the baseline and canary variants of the workloads.|
|*./manifests/service.yml*|Creates the `sampleapp` service. This service routes requests to the pods spun up by the stable, baseline, and canary deployments.|
|*./misc/fortio.yml*|Sets up a fortio deployment. This deployment is a load-testing tool that sends a stream of requests to the deployed `sampleapp` service. The request stream routes to pods under the three deployments: stable, baseline, and canary.|

## Create service connections

1. In your Azure DevOps project, go to **Project settings** > **Pipelines** > **Service connections**.
1. Create a [Docker Registry service connection](../../library/service-endpoints.md#azure-container-registry) named **azure-pipelines-canary-acr** that's associated with your Azure Container Registry instance.
1. Create a [Azure Resource Manager service connection with workload identity](../../library/service-endpoints.md##create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation) named **azure-pipelines-canary-k8s** for your resource group.

## Set up continuous integration

1. In your Azure DevOps project, go to **Pipelines** > **Create Pipeline** or **New pipeline**.
1. Select **GitHub** for your code location, and select your forked **azure-pipelines-canary-k8s** repository.
1. On the **Configure** tab, choose **Starter pipeline**.
1. On the **Review** tab, replace the pipeline YAML with the following code.

    ```YAML
    trigger:
    - main
    
    pool:
      vmImage: ubuntu-latest
    
    variables:
      imageName: azure-pipelines-canary-k8s # name of ACR image
      dockerRegistryServiceConnection: azure-pipelines-canary-acr # name of ACR service connection
      imageRepository: 'azure-pipelines-canary-k8s' # name of image repostory
      containerRegistry: example.azurecr.io # name of Azure container registry
      tag: '$(Build.BuildId)'
    
    stages:
    - stage: Build
      displayName: Build stage
      jobs:  
      - job: Build
        displayName: Build
        pool:
          vmImage: ubuntu-latest
        steps:
        - task: Docker@2
          displayName: Build and push image
          inputs:
            containerRegistry: $(dockerRegistryServiceConnection)
            repository: $(imageName)
            command: buildAndPush
            Dockerfile: app/Dockerfile
            tags: |
              $(tag)
    ```

   If the Docker registry service connection that you created is associated with a container registry named `example.azurecr.io`, then the image is set to `example.azurecr.io/azure-pipelines-canary-k8s:$(Build.BuildId)`.

1. Select **Save and run** and ensure the job runs successfully.

### Edit the manifest file

In your repository fork, edit *manifests/deployment.yml* to replace `<foobar>` with your container registry's URL, for example `example.azurecr.io/azure-pipelines-canary-k8s`. 

## Set up continuous deployment

Now, set up continuous deployment, deploy the canary stage, and promote or reject the canary through manual approval.

### Create an environment

You can deploy with YAML or Classic.

#### [YAML](#tab/yaml/)

1. In your Azure DevOps project, go to **Pipelines** > **Environments** and then select **Create environment** or **New environment**.
1. On the first **New environment** screen, enter *akscanary* under **Name**, select **Kubernetes** under **Resource**, and select **Next**.
1. Fill out the **Kubernetes resource** screen as follows:
   - **Provider**: Select **Azure Kubernetes Service**.
   - **Azure subscription**: Select your Azure subscription.
   - **Cluster**: Select your AKS cluster.
   - **Namespace**: Select **New** and enter *canarydemo*.
1. Select **Validate and create**.

### Add the canary stage

1. Go to **Pipelines**, select the pipeline you created, and select **Edit**.
1. Replace the entire pipeline YAML with the following code.

   This code changes the `Docker@2` step you ran previously to use a stage, and adds two more steps to copy the manifests and *misc* directories as artifacts for consecutive stages to use.

   The code also moves some values to variables for easier usage later in the pipeline. In the `containerRegistry` variable, replace `<example>` with the name of your container registry.

    ```YAML
    trigger:
    - main
    
    pool:
      vmImage: ubuntu-latest
    
    variables:
      imageName: azure-pipelines-canary-k8s
      dockerRegistryServiceConnection: azure-pipelines-canary-acr
      imageRepository: 'azure-pipelines-canary-k8s'
      containerRegistry: <example>.azurecr.io
      tag: '$(Build.BuildId)'
    
    stages:
    - stage: Build
      displayName: Build stage
      jobs:  
      - job: Build
        displayName: Build
        pool:
          vmImage: ubuntu-latest
        steps:
        - task: Docker@2
          displayName: Build and push image
          inputs:
            containerRegistry: $(dockerRegistryServiceConnection)
            repository: $(imageName)
            command: buildAndPush
            Dockerfile: app/Dockerfile
            tags: |
              $(tag)

        - publish: manifests
          artifact: manifests
    
        - publish: misc
          artifact: misc
    ```

1. Add another stage at the end of the YAML file to deploy the canary version. Replace the values `my-resource-group` and `my-aks-cluster` with your resource group and Azure Kubernetes Service cluster name. 

    ```YAML
    trigger:
    - main
    
    pool:
      vmImage: ubuntu-latest
    
    variables:
      imageName: azure-pipelines-canary-k8s
      dockerRegistryServiceConnection: azure-pipelines-canary-acr
      imageRepository: 'azure-pipelines-canary-k8s'
      containerRegistry: kubernetessept4.azurecr.io
      tag: '$(Build.BuildId)'
    
    stages:
    - stage: Build
      displayName: Build stage
      jobs:  
      - job: Build
        displayName: Build
        pool:
          vmImage: ubuntu-latest
        steps:
        - task: Docker@2
          displayName: Build and push image
          inputs:
            containerRegistry: $(dockerRegistryServiceConnection)
            repository: $(imageName)
            command: buildAndPush
            Dockerfile: app/Dockerfile
            tags: |
              $(tag)
              
        - publish: manifests
          artifact: manifests
    
        - publish: misc
          artifact: misc
    
    - stage: DeployCanary
      displayName: Deploy canary
      dependsOn: Build
      condition: succeeded()
    
      jobs:
      - deployment: Deploycanary
        displayName: Deploy canary
        pool:
          vmImage: ubuntu-latest
        environment: 'akscanary'
        strategy:
          runOnce:
            deploy:
              steps:
              - task: KubernetesManifest@1
                displayName: Create Docker Registry Secret
                inputs:
                  action: 'createSecret'
                  connectionType: 'azureResourceManager'
                  azureSubscriptionConnection: 'azure-pipelines-canary-sc'
                  azureResourceGroup: 'my-resource-group'
                  kubernetesCluster: 'my-aks-cluster'
                  secretType: 'dockerRegistry'
                  secretName: 'my-acr-secret'
                  dockerRegistryEndpoint: 'azure-pipelines-canary-acr'
    
              - task: KubernetesManifest@1
                displayName: Deploy to Kubernetes cluster
                inputs:
                  action: 'deploy'
                  connectionType: 'azureResourceManager'
                  azureSubscriptionConnection: 'azure-pipelines-canary-sc'
                  azureResourceGroup: 'my-resource-group'
                  kubernetesCluster: 'my-aks-cluster'
                  strategy: 'canary'
                  percentage: '25'
                  manifests: |
                    $(Pipeline.Workspace)/manifests/deployment.yml
                    $(Pipeline.Workspace)/manifests/service.yml
                  containers: '$(containerRegistry)/$(imageRepository):$(tag)'
                  imagePullSecrets: 'my-acr-secret'
    
              - task: KubernetesManifest@1
                displayName: Deploy Forbio to Kubernetes cluster
                inputs:
                  action: 'deploy'
                  connectionType: 'azureResourceManager'
                  azureSubscriptionConnection: 'azure-pipelines-canary-sc'
                  azureResourceGroup: 'my-resource-group'
                  kubernetesCluster: 'my-aks-cluster'
                  manifests: '$(Pipeline.Workspace)/misc/*'
    ```
1. Select **Validate and save**, and save the pipeline directly to the main branch.

#### [Classic](#tab/classic/)

1. Go to **Pipelines** > **Releases** > **New** > **New release pipeline**. Name it *CanaryK8sDemo*.
1. In the subsequent model for selecting a template for Stage 1, choose **Empty job**. Name the stage as *Deploy canary*.
1. Select **Add an artifact**, and choose **GitHub**.
    - Choose an existing Git service connection, or create a new one through which the forked repository can be accessed. Then choose the same in the **Source (repository)** dropdown list.
    - **Default branch**: *main*
    - **Default version**: Choose the latest from the default branch.
    - **Source alias**: *azure-pipelines-canary-k8s*
    - Confirm your inputs by choosing **Add**.
1. Select **Add an artifact**, and choose **Azure container registry** or **Docker Hub**, depending on the container registry you chose earlier, in the "Prerequisites" section. Provide appropriate values for the input dropdown lists to locate your container registry. Provide *image* as the alias for this artifact, and confirm the inputs by choosing **Add**. When the artifact has been added, select the lightning bolt icon on the artifact card to enable the continuous deployment trigger.
1. In the **Deploy Canary** stage that you created, select the **1 job, 0 task** link to go to the window for adding jobs and stages.
1. Select  **Agent job**. In the configuration window, in the **Agent pool** dropdown list, choose **Hosted Ubuntu 1604**.
1. Select the **+** sign on the agent job row to add a new task. Add the **Deploy Kubernetes manifests** task, with the following configuration:
    - **Display name**: Create secret
    - **Action**: Create secret
    - **Kubernetes service connection**: *azure-pipelines-canary-k8s*
    - **Namespace**: The namespace within the cluster to which you want to deploy.
    - **Type of secret**: `dockerRegistry`
    - **Secret name**: *azure-pipelines-canary-k8s*
    - **Docker registry service connection**: *azure-pipelines-canary-k8s*
1. Add another **Deploy Kubernetes manifests** task, with the following configuration:
    - **Display name**: Deploy canary
    - **Action**: Deploy
    - **Kubernetes service connection**: *azure-pipelines-canary-k8s*
    - **Namespace**: The namespace within the cluster to which you want to deploy.
    - **Strategy**: Canary
    - **Percentage**: 25
    - **Manifests**: *azure-pipelines-canary-k8s/manifests/**
    - **Containers**: `<example>/azure-pipelines-canary-k8s:$(Release.Artifacts.image.BuildId),` where `<example>` is to be replaced with the container registry URL.
    - **ImagePullSecrets**: *azure-pipelines-canary-k8s*
1. Add another **Deploy Kubernetes manifests** task, with the following configuration:
    - **Display name**: Deploy Fortio and ServiceMonitor
    - **Action**: Deploy
    - **Kubernetes service connection**: *azure-pipelines-canary-k8s*
    - **Namespace**: The namespace within the cluster to which you want to deploy.
    - **Strategy**: None
    - **Manifests**: *azure-pipelines-canary-k8s/misc/**

* * *

### (Optional) Add manual approval for promoting or rejecting canary

You can intervene manually with YAML or Classic. 

#### [YAML](#tab/yaml/)

1. Create a new Kubernetes environment called *akspromote*.
1. Open the new **akspromote** environment from the list of environments, and select **Approvals** on the **Approvals and checks** tab.
1. On the **Approvals** screen, add your own user account under **Approvers**.
1. Expand **Advanced**, and make sure **Allow approvers to approve their own runs** is selected.
1. Select **Create**.

### Add promote and reject stages to the pipeline

1. Go to **Pipelines**, select the pipeline you created, and select **Edit**.
1. Add the following `PromoteRejectCanary` stage at the end of your YAML file that promotes the changes.

    ```YAML
    - stage: PromoteRejectCanary
      displayName: Promote or Reject canary
      dependsOn: DeployCanary
      condition: succeeded()
        
      jobs:
      - deployment: PromoteCanary
        displayName: Promote Canary
        pool: 
          vmImage: ubuntu-latest
        environment: 'akspromote'
        strategy:
          runOnce:
            deploy:
              steps:      
              - task: KubernetesManifest@1
                displayName: Create Docker Registry Secret for akspromote
                inputs:
                  action: 'createSecret'
                  connectionType: 'azureResourceManager'
                  azureSubscriptionConnection: 'azure-pipelines-canary-sc'
                  azureResourceGroup: 'my-resource-group'
                  kubernetesCluster: 'my-aks-cluster'
                  secretType: 'dockerRegistry'
                  secretName: 'my-acr-secret'
                  dockerRegistryEndpoint: 'azure-pipelines-canary-acr'
          
              - task: KubernetesManifest@1
                displayName: promote canary
                inputs:
                  action: 'promote'
                  connectionType: 'azureResourceManager'
                  azureSubscriptionConnection: 'azure-pipelines-canary-sc'
                  azureResourceGroup: 'my-resource-group'
                  kubernetesCluster: 'my-aks-cluster'
                  strategy: 'canary'
                  manifests: '$(Pipeline.Workspace)/manifests/*'
                  containers: '$(containerRegistry)/$(imageRepository):$(tag)'
                  imagePullSecrets: 'my-acr-secret'
        ```

1. Add the following `RejectCanary`stage at the end of the file that rolls back the changes.
    
    ```YAML
    - stage: RejectCanary
      displayName: Reject canary
      dependsOn: PromoteRejectCanary
      condition: failed()
    
      jobs:
      - deployment: RejectCanary
        displayName: Reject Canary
        pool: 
          vmImage: ubuntu-latest
        environment: 'akscanary'
        strategy:
          runOnce:
            deploy:
              steps:        
              - task: KubernetesManifest@1
                displayName: Create Docker Registry Secret for reject canary
                inputs:
                  action: 'createSecret'
                  connectionType: 'azureResourceManager'
                  azureSubscriptionConnection: 'azure-pipelines-canary-sc'
                  azureResourceGroup: 'kubernetes-testing'
                  kubernetesCluster: 'aksclustersept12'
                  secretType: 'dockerRegistry'
                  secretName: 'my-acr-secret'
                  dockerRegistryEndpoint: 'azure-pipelines-canary-acr'    
              - task: KubernetesManifest@1
                displayName: Reject canary deployment
                inputs:
                  action: 'reject'
                  connectionType: 'azureResourceManager'
                  azureSubscriptionConnection: 'azure-pipelines-canary-sc'
                  azureResourceGroup: 'my-resource-group'
                  kubernetesCluster: 'my-aks-cluster'
                  namespace: 'default'
                  strategy: 'canary'
                  manifests: '$(Pipeline.Workspace)/manifests/*'
        ```
1. Select **Validate and save**, and save the pipeline directly to the main branch.

#### [Classic](#tab/classic/)

1. Select the **Pipeline** tab to go back to the pipeline view. Add a new stage named *Promote/reject canary*, based on the empty job template.
1. Add an agentless job to this stage, and reorder this job to be the first job of this stage. Name this agentless job *Promote/reject input*.
1. Add a **Manual Intervention** task to this job, and change the display name of the task to *Promote or reject canary*.
1. Configure the currently empty agent job placed after the **Promote/reject input** agentless job. 
    - **Display name**: Promote canary
    - **Agent pool**: Hosted Ubuntu 1604
    - **Run this job**: Choose to run only when all previous jobs have succeeded.
1. Add the **Deploy Kubernetes manifests** task, with the following configuration to the **Promote canary** job.
    - **Display name**: Promote canary
    - **Action**: Promote
    - **Kubernetes service connection**: *azure-pipelines-canary-k8s*
    - **Namespace**: The namespace within the cluster to which you want to deploy.
    - **Strategy**: Canary
    - **Percentage**: 25
    - **Manifests**: *azure-pipelines-canary-k8s/manifests/**
    - **Containers**: `<example>/azure-pipelines-canary-k8s:$(Release.Artifacts.image.BuildId)`, where you replace `<example>` with the container registry URL.
    - **ImagePullSecrets**: *azure-pipelines-canary-k8s*
1. Add another agent job with the following configuration, after the **Promote canary** agent job.
    - **Display name**: Reject canary
    - **Agent pool**: Hosted Ubuntu 1604
    - **Run this job**: Choose to run only when a previous job has failed.
1. Add the **Deploy Kubernetes manifests** task, with the following configuration to the **Reject canary** job.
    - **Display name**: Reject canary
    - **Action**: Reject
    - **Kubernetes service connection**: *azure-pipelines-canary-k8s*
    - **Namespace**: The namespace within the cluster to which you want to deploy.
    - **Strategy**: Canary
    - **Percentage**: 25
    - **Manifests**: *azure-pipelines-canary-k8s/manifests/**

* * *

## Deploy a stable version

For the first run of the pipeline, the stable version of the workloads, and their baseline or canary versions, don't exist in the cluster. Deploy a stable version of the `sampleapp` workload as follows.

You can deploy a stable version with YAML or Classic.

### [YAML](#tab/yaml/)

1. In *app/app.py*, change `success_rate = 50` to `success_rate = 100`. This change triggers the pipeline, building and pushing the image to the container registry, and also triggers the `DeployCanary` stage.
1. Because you configured an approval on the `akspromote` environment, the release waits before running that stage. On the build run summary page, select **Review** and then select **Approve**.

Once approved, the pipeline deploys the stable version of the `sampleapp` workload in *manifests/deployment.yml* to the namespace.

### [Classic](#tab/classic/)

1. In *app/app.py*, change `success_rate = 50` to `success_rate = 100`. This change triggers the  pipeline, leading to a build and push of the image to the container registry. The continuous deployment trigger, set up earlier on the image push event, results in triggering the release pipeline.
1. In the **CanaryK8sDemo** release pipeline, select the **Promote/reject canary** stage of the release, where it's waiting on manual intervention.
1. Select **Resume/Reject**, and then select **Resume** in the subsequent dialog box. This deploys the stable version of the workloads (the `sampleapp` deployment in *manifests/deployment.yml*) to the namespace.

* * *

## Initiate the canary workflow

The stable version of the `sampleapp` workload now exists in the cluster. Next, make the following change to the simulation application:
 
In *app/app.py*, change `success_rate = 100` to `success_rate = 20`.

This change triggers the build pipeline, resulting in the build and push of the image to the container registry. This process in turn triggers the release pipeline and begins the **Deploy canary** stage.

