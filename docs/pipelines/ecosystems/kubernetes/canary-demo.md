---
title: Canary deployment strategy for Kubernetes deployments
description: Demo of performing canary deployments on Kubernetes clusters by using Azure Pipelines
ms.topic: quickstart
ms.assetid: 33ffbd7f-746b-4338-8669-0cd6adce6ef4
ms.author: atulmal
author: azooinmyluggage
ms.date: 03/04/2022
ms.custom: fasttrack-edit
monikerRange: 'azure-devops'
---

# Canary deployment strategy for Kubernetes deployments

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

A *canary* deployment strategy means to deploy new versions of an application next to stable, production versions. You can then see how the canary version compares to the baseline, before promoting or rejecting the deployment.

This step-by-step guide covers how to use the [Kubernetes manifest task's](../../tasks/deploy/kubernetes-manifest.md) canary strategy. Specifically, you learn about setting up canary deployments for Kubernetes, and the associated workflow, in terms of instrumenting code. You then use that code to compare baseline and canary app deployments, so you can decide whether to promote or reject the canary deployment.

## Prerequisites

* An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
* A GitHub account. Create a free [GitHub account](https://github.com/join) if you don't have one already.
* An [Azure Container Registry](/azure/container-registry/container-registry-intro), a Google Container Registry, and a Docker Hub registry with push privileges. [Create an Azure Container Registry](/azure/container-registry/container-registry-get-started-portal#create-a-container-registry) if you don't have one already.
* A Kubernetes cluster (such as Azure Kubernetes Service, Google Kubernetes Engine, Amazon Elastic Kubernetes Service). [Deploy an Azure Kubernetes Service (AKS) cluster](/azure/aks/tutorial-kubernetes-deploy-cluster).

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
    - *fortio-deploy.yml* - Used to set up a fortio deployment. This deployment is later used as a load-testing tool, to send a stream of requests to the `sampleapp` service deployed earlier. The stream of requests sent to `sampleapp` get routed to pods under all three deployments (stable, baseline, and canary).

> [!NOTE]
> In this guide, you use [Prometheus](https://prometheus.io/) for code instrumentation and monitoring. Any equivalent solution, like [Azure Application Insights](/azure/azure-monitor/learn/nodejs-quick-start), can be used as an alternative.

## Install prometheus-operator

To install Prometheus on your cluster, use the following command from your development machine. You must have kubectl and Helm installed, and you must set the context to the cluster you want to deploy against. [Grafana](https://grafana.com), which you use later to visualize the baseline and canary metrics on dashboards, is installed as part of this Helm chart.
```
helm install --name sampleapp stable/prometheus-operator
```

## Create service connections

1. Go to **Project settings** > **Pipelines** > **Service connections**.
1. Create a [Docker registry service connection](../../library/service-endpoints.md#docker-registry-service-connection) associated with your container registry. Name it **azure-pipelines-canary-k8s**.
1. Create a [Kubernetes service connection](../../library/service-endpoints.md#kubernetes-service-connection) for the Kubernetes cluster and namespace you want to deploy to. Name it **azure-pipelines-canary-k8s**.

## Set up continuous integration

1. Go to **Pipelines** > **Create Pipeline**, and select your repository.
1. On the **Configure** tab, choose **Starter pipeline**.
1. In the **Review** tab, replace the pipeline YAML with this code.

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

You can deploy by using YAML, or by using the classic deployment model.

#### [YAML](#tab/yaml/)

1. Navigate to **Pipelines** > **Environments** > **Create environment**
1. Create a new environment.
    - **Name**: akscanary
    - **Resource**: choose Kubernetes
1. Select on **Next** and now configure your Kubernetes resource as follows - 
    - **Provider**: Azure Kubernetes Service
    - **Azure subscription**: Choose the subscription that holds your kubernetes cluster
    - **Cluster**: Choose your cluster
    - **Namespace**: Create a new namespace with the name **canarydemo**
1. Click on **Validate and Create**
1. Go to **Pipelines**. Select the pipeline you created and **Edit**. 
1. Change the step you created previously to now use a Stage. And add two more steps to copy the manifests and misc directories as artifacts for use by consecutive stages. You might also want to move a couple of values to variables for easier usage later in your pipeline. Your complete YAML should now look like this.

    ```YAML
    trigger:
    - main
    
    pool:
      vmImage: ubuntu-latest
    
    variables:
      imageName: azure-pipelines-canary-k8s
      dockerRegistryServiceConnection: dockerRegistryServiceConnectionName #replace with name of your Docker registry service connection
      imageRepository: 'azure-pipelines-canary-k8s'
      containerRegistry: containerRegistry #replace with the name of your container registry, Should be in the format foobar.azurecr.io
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

 1. Add an more stage at the end of your YAML file to deploy the canary version.

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
1. Navigate to **Pipelines** > **Releases** > **New** > **New release pipeline**. Name it **CanaryK8sDemo**
1. In the subsequent model for selecting a template for Stage 1, choose **Empty job**. Name the stage as **Deploy canary**.
1. Select **Add an artifact**, choose **GitHub**.
    - Choose an existing Git service connection or create a new one through which the forked repository can be accessed, and then choose the same in **Source (repository)** dropdown.
    - **Default branch**: master
    - **Default version**: Latest from the default branch
    - **Source alias**: azure-pipelines-canary-k8s
    - Confirm your inputs by choosing **Add**.
1. Select **Add an artifact**, choose **Azure container registry** or **Docker Hub** depending on the container registry you had chosen under Prerequisites. Provide appropriate values for the input dropdowns to locate your container registry, provide `image` as the alias for this artifact, and confirm the inputs by choosing **Add**. Once the artifact has been added, select on the lightning bolt icon on the artifact card to enable continuous deployment trigger.
1. In **Deploy Canary** stage that you created, select on **1 job, 0 task** link to be navigated to the window for adding jobs and stages
1. Select  **Agent job**. In the configuration window, in the **Agent pool** dropdown window, choose **Hosted Ubuntu 1604**
1. Select the '+' on the agent job row to add a new task. Add **Deploy Kubernetes manifests** task with the following configuration.
    - **Display name**: Create secret
    - **Action**: create secret
    - **Kubernetes service connection**: azure-pipelines-canary-k8s
    - **Namespace**: namespace within the cluster you want to deploy to
    - **Type of secret**: dockerRegistry
    - **Secret name**: azure-pipelines-canary-k8s
    - **Docker registry service connection**: azure-pipelines-canary-k8s
1. Add another **Deploy Kubernetes manifests** task with the following configuration -
    - **Display name**: Deploy canary
    - **Action**: deploy
    - **Kubernetes service connection**: azure-pipelines-canary-k8s
    - **Namespace**: namespace within the cluster you want to deploy to
    - **Strategy**: Canary
    - **Percentage**: 25
    - **Manifests**: azure-pipelines-canary-k8s/manifests/*
    - **Containers**: `<foobar>/azure-pipelines-canary-k8s:$(Release.Artifacts.image.BuildId)` where `<foobar>` is to be replaced with the container registry URL
    - **ImagePullSecrets**: azure-pipelines-canary-k8s
1. Add another **Deploy Kubernetes manifests** task with the following configuration -
    - **Display name**: Deploy Fortio and ServiceMonitor
    - **Action**: deploy
    - **Kubernetes service connection**: azure-pipelines-canary-k8s
    - **Namespace**: namespace within the cluster you want to deploy to
    - **Strategy**: None
    - **Manifests**: azure-pipelines-canary-k8s/misc/*

* * *

### Manual intervention for promoting or rejecting canary

#### [YAML](#tab/yaml/)

1. Navigate to **Pipelines** > **Environments** > **New environment**
1. Configure the new environment.
    - **Name**: akspromote
    - **Resource**: choose Kubernetes
1. Select **Next** and now configure your Kubernetes resource as follows - 
    - **Provider**: Azure Kubernetes Service
    - **Azure subscription**: Choose the subscription that holds your kubernetes cluster
    - **Cluster**: Choose your cluster
    - **Namespace**: Choose the namespace canarydemo namespace you created earlier
1. Select **Validate and Create**
1. Select your new akspromote environment from the list of environments. 
1. Select the button with the **three dots** in the top right -> **Approvals and checks** -> **Approvals**
1. Configure your approval as follows -
    - **Approvers**: Add your own user account
    - **Advanced**: Make sure the **Allow approvers to approve their own runs** checkbox is checked.
1. Select **Create**
1. Navigate to **Pipelines** -> Select the pipeline you just created -> **Edit**
1. Add another stage PromoteRejectCanary at the end of your YAML file to promote the changes. 

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

1. Add an additional stage RejectCanary at the end of your YAML file to roll back the changes. 
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
1. Save your YAML pipeline by clicking on **Save** and commit it directly to the main branch. 

#### [Classic](#tab/classic/)
1. Select **Pipeline** tab to go back to the pipeline view. Add a new stage named **Promote/reject canary** based on the empty job template.
1. Add an agentless job to this stage and reorder this job to be the first job of this stage. Name this agentless job **Promote/reject input**.
1. Add a **Manual Intervention** task to this job and change the display name of the task to **Promote or reject canary**
1. Configure the currently empty agent job placed after the **Promote/reject input** agentless job. 
    - **Display name**: Promote canary
    - **Agent pool**: Hosted Ubuntu 1604
    - **Run this job**: Only when all previous jobs have succeeded
1. Add **Deploy Kubernetes manifests** task with the following configuration to the **Promote canary** job.
    - **Display name**: Promote canary
    - **Action**: promote
    - **Kubernetes service connection**: azure-pipelines-canary-k8s
    - **Namespace**: namespace within the cluster you want to deploy to
    - **Strategy**: Canary
    - **Percentage**: 25
    - **Manifests**: azure-pipelines-canary-k8s/manifests/*
    - **Containers**: `<foobar>/azure-pipelines-canary-k8s:$(Release.Artifacts.image.BuildId)` where `<foobar>` is to be replaced with the container registry URL
    - **ImagePullSecrets**: azure-pipelines-canary-k8s
1. Add another agent job with the following configuration after **Promote canary** agent job.
    - **Display name**: Reject canary
    - **Agent pool**: Hosted Ubuntu 1604
    - **Run this job**: Only when a previous job has failed
1. Add **Deploy Kubernetes manifests** task with the following configuration to the **Reject canary** job.
    - **Display name**: Reject canary
    - **Action**: reject
    - **Kubernetes service connection**: azure-pipelines-canary-k8s
    - **Namespace**: namespace within the cluster you want to deploy to
    - **Strategy**: Canary
    - **Percentage**: 25
    - **Manifests**: azure-pipelines-canary-k8s/manifests/*

* * *
## Deploy a stable version
#### [YAML](#tab/yaml/)
Currently for the first run of the pipeline, the stable version of the workloads and their baseline/canary version do not exist in the cluster. To deploy the stable version.
1. In `app/app.py`, change `success_rate = 5` to `success_rate = 10`.This change triggers the  pipeline leading to build and push of the image to container registry. It will also trigger the DeployCanary stage. 
2. Given you have configured an approval on the **akspromote** environment, the release will wait before executing that stage. 
3. In the summary of the run click on **Review** and next click on **Approve** in the subsequent fly-out. This will result in the stable version of the workloads (`sampleapp` deployment in manifests/deployment.yml) being deployed to the namespace


#### [Classic](#tab/classic/)
Currently for the first run of the pipeline, the stable version of the workloads and their baseline/canary version do not exist in the cluster. To deploy the stable version.
1. In `app/app.py`, change `success_rate = 5` to `success_rate = 10`.This change triggers the  pipeline leading to build and push of the image to container registry. The continuous deployment trigger setup earlier on the image push event results in triggering of the release pipeline.
2. In the **CanaryK8sDemo** release pipeline, select the **Promote/reject canary** stage of the release where it is waiting on manual intervention.
3. Click on **Resume/Reject** button and then on **Resume button** in the subsequent dialog box. This will result in the stable version of the workloads (`sampleapp` deployment in manifests/deployment.yml) being deployed to the namespace

* * *
## Initiate canary workflow
Once the above release has been completed, the stable version of workload `sampleapp` now exists in the cluster. To understand how baseline and canaries are created for comparison purposes with every subsequent deployment, perform the following changes to the simulation application - 
1. In `app/app.py`, change `success_rate = 10` to `success_rate = 20`

The above change triggers build pipeline resulting in build and push of image to the container registry, which in turn triggers the release pipeline and the commencement of **Deploy canary** stage.

## Simulate requests
On your development machine, run the following commands and keep it running to send a constant stream of requests at the `sampleapp` service. `sampleapp` service routes the requests to the pods spun by stable `sampleapp` deployment and the pods spun up by `sampleapp-baseline` and `sampleapp-canary` deployments as the selector specified for `sampleapp` is applicable for all these pods.

```
FORTIO_POD=$(kubectl get pod | grep fortio | awk '{ print $1 }')
kubectl exec -it $FORTIO_POD -c fortio /usr/bin/fortio -- load -allow-initial-errors -t 0 http://sampleapp:8080/
```

## Setup Grafana dashboard
1. Run the following port forwarding command on your local development machine to be able to access Grafana.
    ```
    kubectl port-forward svc/sampleapp-grafana 3000:80
    ```
1. In a browser, open the following URL.
    ```
    http://localhost:3000/login
    ```
1. When prompted for login credentials, unless the adminPassword value was overridden during prometheus-operator Helm chart installation, use the following values.
    - username: admin
    - password: prom-operator
1. In the left navigation menu, choose **+** -> **Dashboard** -> **Graph**
1. Click anywhere on the newly added panel and type `e` to edit the panel.
1. In the **Metrics** tab, enter the following query -
    ```
    rate(requests_total{pod=~"sampleapp-.*", custom_status="good"}[1m])
    ```
1. In the **General** tab, change the name of this panel to **All sampleapp pods**
1. In the overview bar at the top of the page, change the duration range to **Last 5 minutes** or **Last 15 minutes**.
1. Click on the save icon in the overview bar to save this panel.
1. While the above panel visualizes success rate metrics from all the variants - stable (from `sampleapp` deployment), baseline (from `sampleapp-baseline` deployment) and canary (from `sampleapp-canary` deployment), you can visualize just the baseline and canary metrics by adding another panel with the following configuration - 
    - **General** tab -> **Title**: sampleapp baseline and canary
    - **Metrics** tab -> query to be used: 
    ```
    rate(requests_total{pod=~"sampleapp-baseline-.*|sampleapp-canary-.*", custom_status="good"}[1m])
    ```
    
    > [!NOTE]
    > Note that the panel for baseline and canary metrics will only have metrics available for comparison when the **Deploy canary** stage has successfully completed and the **Promote/reject canary** stage is waiting on manual intervention.

    > [!Tip]
    > Setup [annotations for Grafana dashboards](../../../service-hooks/services/grafana.md) to visually depict stage completion events for **Deploy canary** and **Promote/reject canary** so that you know when to start comparing baseline with canary and when the promotion/rejection of canary has completed respectively.


## Compare baseline and canary
1. At this point, with **Deploy canary** stage having successfully completed (based on the change of `success_rate` from '10' to '20') and with the **Promote/reject canary** stage is waiting on manual intervention, one can compare the success rate (as determined by custom_status=good) of baseline and canary variants in the Grafana dashboard. It should look similar to the below image - 

    > [!div class="mx-imgBorder"]
    > ![Compare baseline and canary metrics](../media/k8s-baseline-canary.png)

1. Based on the observation that the success rate is higher for canary, promote the canary by clicking on **Resume** in the manual intervention task