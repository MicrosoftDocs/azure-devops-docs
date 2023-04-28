---
title: Use a canary deployment strategy for Kubernetes deployments with Azure Pipelines
description: Demo of performing canary deployments on Kubernetes clusters by using Azure Pipelines
ms.topic: quickstart
ms.assetid: 33ffbd7f-746b-4338-8669-0cd6adce6ef4
ms.date: 01/24/2023
ms.custom: fasttrack-edit
monikerRange: 'azure-devops'
---

# Tutorial: Use a canary deployment strategy for Kubernetes deployments

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

A *canary* deployment strategy means deploying new versions of an application next to stable, production versions. You can then see how the canary version compares to the baseline, before promoting or rejecting the deployment.

This step-by-step guide covers how to use the [Kubernetes manifest task's](/azure/devops/pipelines/tasks/reference/kubernetes-manifest-v0) canary strategy. Specifically, you'll learn how to set up canary deployments for Kubernetes, and the associated workflow to evaluate code. You then use that code to compare baseline and canary app deployments, so you can decide whether to promote or reject the canary deployment.

## Prerequisites

* An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
* A GitHub account. Create a free [GitHub account](https://github.com/join) if you don't have one already.
* An [Azure Container Registry](/azure/container-registry/container-registry-intro)with push privileges. [Create an Azure Container Registry](/azure/container-registry/container-registry-get-started-portal#create-a-container-registry) if you don't have one already.
* A Kubernetes cluster. [Deploy an Azure Kubernetes Service (AKS) cluster](/azure/aks/tutorial-kubernetes-deploy-cluster).

## Sample code

Fork the following repository on GitHub.
```
https://github.com/MicrosoftDocs/azure-pipelines-canary-k8s
```

Here's a brief overview of the files in the repository that are used during this guide: 

- *./app*:
    - *app.py* - A simple, Flask-based web server that is instrumented by using the  [Prometheus instrumentation library for Python applications](https://github.com/prometheus/client_python). A custom counter is set up for the number of good and bad responses given out, based on the value of the `success_rate` variable.
    - *Dockerfile* - Used for building the image with each change made to *app.py*. With each change, the build pipeline is triggered and the image gets built and pushed to the container registry.
- *./manifests*:
    - *deployment.yml* - Contains the specification of the `sampleapp` deployment workload corresponding to the image published earlier. You use this manifest file not just for the stable version of deployment object, but also for deriving the baseline and canary variants of the workloads.
    - *service.yml* - Creates the `sampleapp` service. This service routes requests to the pods spun up by the deployments (stable, baseline, and canary) mentioned previously.
- *./misc*
    - *service-monitor.yml* - Used to set up a [ServiceMonitor](https://github.com/coreos/prometheus-operator#customresourcedefinitions) object. This object sets up Prometheus metric scraping.
    - *fortio-deploy.yml* - Used to set up a fortio deployment. This deployment is later used as a load-testing tool, to send a stream of requests to the `sampleapp` service deployed earlier. The stream of requests sent to `sampleapp` are routed to pods under all three deployments (stable, baseline, and canary).

> [!NOTE]
> In this guide, you use [Prometheus](https://prometheus.io/) for code instrumentation and monitoring. Any equivalent solution, like [Azure Application Insights](/azure/azure-monitor/learn/nodejs-quick-start), can be used as an alternative.

## Install prometheus-operator

To install Prometheus on your cluster, use the following command from your development machine. You must have kubectl and Helm installed, and you must set the context to the cluster you want to deploy against. [Grafana](https://grafana.com), which you use later to visualize the baseline and canary metrics on dashboards, is installed as part of this Helm chart.
```
helm install --name sampleapp stable/prometheus-operator
```

## Create service connections

1. Go to **Project settings** > **Pipelines** > **Service connections** in the Azure DevOps menu.
1. Create a [Docker registry service connection](../../library/service-endpoints.md#docker-registry-service-connection) associated with your container registry. Name it **azure-pipelines-canary-k8s**.
1. Create a [Kubernetes service connection](../../library/service-endpoints.md#kubernetes-service-connection) for the Kubernetes cluster and namespace you want to deploy to. Name it **azure-pipelines-canary-k8s**.

## Set up continuous integration

1. Go to **Pipelines** > **Create Pipeline**, and select your repository.
1. On the **Configure** tab, choose **Starter pipeline**.
1. On the **Review** tab, replace the pipeline YAML with this code.

    ```YAML
    trigger:
    - main
    
    pool:
      vmImage: ubuntu-latest
    
    variables:
      imageName: azure-pipelines-canary-k8s
    
    steps:
    - task: Docker@2
      displayName: Build and push image
      inputs:
        containerRegistry: azure-pipelines-canary-k8s #replace with name of your Docker registry service connection
        repository: $(imageName)
        command: buildAndPush
        Dockerfile: app/Dockerfile
        tags: |
          $(Build.BuildId)
    ```
    If the Docker registry service connection that you created is associated with `example.azurecr.io`, then the image is to `example.azurecr.io/azure-pipelines-canary-k8s:$(Build.BuildId)`, based on the preceding configuration.

## Edit manifest file

In *manifests/deployment.yml*, replace `<example>` with your container registry's URL. For example, after replacement, the image field should look something like `contosodemo.azurecr.io/azure-pipelines-canary-k8s`.

## Set up continuous deployment

The following sections provide steps for setting up continuous deployment, including how to deploy the canary stage, and how to promote or reject the canary through manual intervention.

### Deploy canary stage

You can deploy with YAML or Classic.

#### [YAML](#tab/yaml/)

1. Go to **Pipelines** > **Environments** > **Create environment**.
1. Create a new environment.
    - **Name**: *akscanary*
    - **Resource**: Choose Kubernetes.
1. Select **Next**, and configure your Kubernetes resource as follows: 
    - **Provider**: Azure Kubernetes Service
    - **Azure subscription**: Choose the subscription that holds your Kubernetes cluster.
    - **Cluster**: Choose your cluster.
    - **Namespace**: Create a new namespace, with the name *canarydemo*.
1. Select **Validate and Create**.
1. Go to **Pipelines**. Select the pipeline you created, and select **Edit**. 
1. Change the step you created previously to now use a stage. Add two more steps to copy the manifests and *misc* directories as artifacts for use by consecutive stages. You might also want to move a couple of values to variables, for easier usage later in your pipeline. Your complete YAML should now look like this.

    ```YAML
    trigger:
    - main
    
    pool:
      vmImage: ubuntu-latest
    
    variables:
      imageName: azure-pipelines-canary-k8s
      dockerRegistryServiceConnection: dockerRegistryServiceConnectionName #replace with name of your Docker registry service connection
      imageRepository: 'azure-pipelines-canary-k8s'
      containerRegistry: example.azurecr.io #replace with the name of your container registry, Should be in the format example.azurecr.io
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

 1. Add a stage at the end of your YAML file to deploy the canary version.

    ```YAML
    - stage: DeployCanary
      displayName: Deploy canary
      dependsOn: Build
      condition: succeeded()
    
      jobs:
      - deployment: Deploycanary
        displayName: Deploy canary
        pool:
          vmImage: ubuntu-latest
        environment: 'akscanary.canarydemo'
        strategy:
          runOnce:
            deploy:
              steps:
              - task: KubernetesManifest@0
                displayName: Create imagePullSecret
                inputs:
                  action: createSecret
                  secretName: azure-pipelines-canary-k8s
                  dockerRegistryEndpoint: azure-pipelines-canary-k8s
                                    
              - task: KubernetesManifest@0
                displayName: Deploy to Kubernetes cluster
                inputs:
                  action: 'deploy'
                  strategy: 'canary'
                  percentage: '25'
                  manifests: |
                    $(Pipeline.Workspace)/manifests/deployment.yml
                    $(Pipeline.Workspace)/manifests/service.yml
                  containers: '$(containerRegistry)/$(imageRepository):$(tag)'
                  imagePullSecrets: azure-pipelines-canary-k8s
    
              - task: KubernetesManifest@0
                displayName: Deploy Forbio and ServiceMonitor
                inputs:
                  action: 'deploy'
                  manifests: |
                    $(Pipeline.Workspace)/misc/*
    ```
1. Save your pipeline by committing directly to the main branch. This commit should already run your pipeline successfully. 

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

### Manual intervention for promoting or rejecting canary

You can intervene manually with YAML or Classic.

#### [YAML](#tab/yaml/)

1. Go to **Pipelines** > **Environments** > **New environment**.
1. Configure the new environment.
    - **Name**: *akspromote*
    - **Resource**: Choose Kubernetes.
1. Select **Next**, and configure your Kubernetes resource as follows: 
    - **Provider**: Azure Kubernetes Service
    - **Azure subscription**: Choose the subscription that holds your Kubernetes cluster.
    - **Cluster**: Choose your cluster.
    - **Namespace**: Choose the namespace, *canarydemo*, that you created earlier.
1. Select **Validate and Create**.
1. Select your new `akspromote` environment from the list of environments. 
1. Select **Approvals and checks** > **Approvals**. Then select the ellipsis icon (the three dots).
1. Configure your approval as follows:
    - **Approvers**: Add your own user account.
    - **Advanced**: Make sure that the **Allow approvers to approve their own runs** box is selected.
1. Select **Create**.
1. Go to **Pipelines**, and select the pipeline that you created. Then select **Edit**.
1. Add another stage, `PromoteRejectCanary`, at the end of your YAML file, to promote the changes. 

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
        environment: 'akspromote.canarydemo'
        strategy:
          runOnce:
            deploy:
              steps:            
              - task: KubernetesManifest@0
                displayName: promote canary
                inputs:
                  action: 'promote'
                  strategy: 'canary'
                  manifests: '$(Pipeline.Workspace)/manifests/*'
                  containers: '$(containerRegistry)/$(imageRepository):$(tag)'
                  imagePullSecrets: '$(imagePullSecret)'
    ```

1. Add another stage, `RejectCanary`, at the end of your YAML file, to roll back the changes. 
    
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
        environment: 'akscanary.canarydemo'
        strategy:
          runOnce:
            deploy:
              steps:            
              - task: KubernetesManifest@0
                displayName: reject canary
                inputs:
                  action: 'reject'
                  strategy: 'canary'
                  manifests: '$(Pipeline.Workspace)/manifests/*'
    ```
1. Save your YAML pipeline by selecting **Save**, and then commit it directly to the main branch. 

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

You can deploy a stable version with YAML or Classic.

### [YAML](#tab/yaml/)

For the first run of the pipeline the stable version of the workloads, and their baseline or canary versions don't exist in the cluster. To deploy the stable version:

1. In *app/app.py*, change `success_rate = 5` to `success_rate = 10`. This change triggers the pipeline, leading to a build and push of the image to the container registry. It will also trigger the `DeployCanary` stage. 
1. Because you configured an approval on the `akspromote` environment, the release will wait before running that stage. 
1. In the summary of the run, select **Review** > **Approve**. This deploys the stable version of the workloads (the `sampleapp` deployment in *manifests/deployment.yml*) to the namespace.

### [Classic](#tab/classic/)

For the first run of the pipeline the stable version of the workloads, and their baseline or canary versions don't exist in the cluster. To deploy the stable version:

1. In *app/app.py*, change `success_rate = 5` to `success_rate = 10`. This change triggers the  pipeline, leading to a build and push of the image to the container registry. The continuous deployment trigger, set up earlier on the image push event, results in triggering the release pipeline.
1. In the **CanaryK8sDemo** release pipeline, select the **Promote/reject canary** stage of the release, where it's waiting on manual intervention.
1. Select **Resume/Reject**, and then select **Resume** in the subsequent dialog box. This deploys the stable version of the workloads (the `sampleapp` deployment in *manifests/deployment.yml*) to the namespace.

* * *

## Initiate canary workflow

The stable version of the workload `sampleapp` now exists in the cluster. Next, make the following change to the simulation application:
 
In *app/app.py*, change `success_rate = 10` to `success_rate = 20`.

This change triggers the build pipeline, resulting in the build and push of the image to the container registry. This process in turn triggers the release pipeline and begins the **Deploy canary** stage.

## Simulate requests

On your development machine, run the following commands, and keep it running to send a constant stream of requests at the `sampleapp` service. `sampleapp` routes the requests to the pods spun by the stable `sampleapp` deployment, and to the pods spun up by the `sampleapp-baseline` and `sampleapp-canary` deployments. The selector specified for `sampleapp` is applicable to all of these pods.

```
FORTIO_POD=$(kubectl get pod | grep fortio | awk '{ print $1 }')
kubectl exec -it $FORTIO_POD -c fortio /usr/bin/fortio -- load -allow-initial-errors -t 0 http://sampleapp:8080/
```

## Set up Grafana dashboard

1. Run the following port-forwarding command on your local development machine to be able to access Grafana.
    ```
    kubectl port-forward svc/sampleapp-grafana 3000:80
    ```
1. In a browser, open the following URL.
    ```
    http://localhost:3000/login
    ```
1. When you're prompted for credentials, unless the `adminPassword` value was overridden during the `prometheus-operator` Helm chart installation, you can use the following values:
    - username: admin
    - password: prom-operator
1. From the menu on the left, choose **+** > **Dashboard** > **Graph**.
1. Select anywhere on the newly added panel, and type `e` to edit the panel.
1. On the **Metrics** tab, enter the following query:
    ```
    rate(requests_total{pod=~"sampleapp-.*", custom_status="good"}[1m])
    ```
1. On the **General** tab, change the name of this panel to **All sampleapp pods**.
1. In the overview bar at the top of the page, change the duration range to **Last 5 minutes** or **Last 15 minutes**.
1. To save this panel, select the save icon in the overview bar.
1. The preceding panel visualizes success rate metrics from all the variants. These include stable (from the `sampleapp` deployment), baseline (from the `sampleapp-baseline` deployment), and canary (from the `sampleapp-canary` deployment). You can visualize just the baseline and canary metrics by adding another panel, with the following configuration: 
    - On the **General** tab, for **Title**, select **sampleapp baseline and canary**.
    - On the **Metrics** tab, use the following query: 
    ```
    rate(requests_total{pod=~"sampleapp-baseline-.*|sampleapp-canary-.*", custom_status="good"}[1m])
    ```
    
    > [!NOTE]
    > The panel for baseline and canary metrics will only have metrics available for comparison under certain conditions. These conditions are when the **Deploy canary** stage has successfully completed, and the **Promote/reject canary** stage is waiting on manual intervention.

    > [!TIP]
    > Set up [annotations for Grafana dashboards](../../../service-hooks/services/grafana.md) to visually depict stage completion events for **Deploy canary** and **Promote/reject canary**. This is helpful so that you know when to start comparing the baseline with the canary, and when the promotion or rejection of the canary has completed, respectively.

## Compare baseline and canary

1. At this point, the **Deploy canary** stage has successfully completed (based on the change of `success_rate` from `10` to `20`). The **Promote/reject canary** stage is waiting on manual intervention. You can now compare the success rate (as determined by `custom_status=good`) of the baseline and canary variants in the Grafana dashboard. It should look similar to the following: 

    > [!div class="mx-imgBorder"]
    > ![Screenshot that shows a comparison of baseline and canary metrics.](../media/k8s-baseline-canary.png)

1. Based on the observation that the success rate is higher for canary, promote the canary. Select **Resume** in the manual intervention task.
