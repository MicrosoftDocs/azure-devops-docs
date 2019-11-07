---
title: Deployment jobs
description: Deploy to resources within an environment
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.assetid: fc825338-7012-4687-8369-5bf8f63b9c10
ms.manager: mijacobs
ms.author: ronai
author: RoopeshNair
ms.date: 5/2/2019
monikerRange: 'azure-devops'
---

# Deployment jobs

[!INCLUDE [version-team-services](../_shared/version-team-services.md)]

> [!NOTE]
>
> To use deployment jobs, [make sure the Multi-stage pipelines experience is turned on](../../project/navigation/preview-features.md).

In YAML pipelines, we recommend that you put your deployment steps in a deployment job. A deployment job is a special type of [job](phases.md) that is a collection of steps to be run sequentially against the environment.

## Overview

Using deployment job provides some benefits:

 - **Deployment history**: You get end-to-end deployment history across pipelines down to a specific resource and status of the deployments for auditing.
 - **Apply deployment strategy**: Define how your application is rolled-out.

   > [!NOTE] 
   > At the moment we offer only *runOnce* and *canary* strategy. Additional strategies like rolling, blue-green are on our roadmap.

## Schema

Here's the full syntax to specify a deployment job: 

```YAML
jobs:
- deployment: string   # name of the deployment job, A-Z, a-z, 0-9, and underscore
  displayName: string  # friendly name to display in the UI
  pool:                # see pool schema
    name: string
    demands: string | [ string ]
  dependsOn: string 
  condition: string 
  continueOnError: boolean                # 'true' if future jobs should run even if this job fails; defaults to 'false'
  timeoutInMinutes: nonEmptyString        # how long to run the job before automatically cancelling
  cancelTimeoutInMinutes: nonEmptyString  # how much time to give 'run always even if cancelled tasks' before killing them
  variables: { string: string } | [ variable | variableReference ]  
  environment: string  # target environment name and optionally a resource-name to record the deployment history; format: <environment-name>.<resource-name>
  strategy: [ deployment strategy ] # see deployment strategy schema
```

Here is the syntax of the deployment strategies supported:

### RunOnce deployment strategy:

RunOnce is the simplest deployment strategy wherein the 'deploy' job executes only once.  

```YAML
strategy: 
    runOnce:
      deploy:
        displayName: string                 # friendly name to display in the UI
        steps:
        - script: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
```

### Canary deployment strategy:

Canary deployment strategy is an advance deployment strategy which helps in mitigating the risk involved in rolling new version of application. Using this you can first roll out the changes to a small subset of users. As you gain more confidence in the new version, you can start releasing it to more servers in your infrastructure and routing more users to it.


```YAML
strategy: 
    canary:
      increments: [ number ]
      pre-deploy:        
        pool: [ server | pool ] # see pool schema        
        steps:
        - script: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
      deploy:          
        pool: [ server | pool ] # see pool schema        
        steps:
        ...
      routeTraffic:         
        pool: [ server | pool ]         
        steps:
        ...        
      postRouteTraffic:          
        pool: [ server | pool ]        
        steps:
        ...
      on:
        failure:         
          pool: [ server | pool ]           
          steps:
          ...
        success:          
          pool: [ server | pool ]           
          steps:
          ...
```
Canary strategy supports following lifecycle hooks: `preDeploy` (executed once), iterates with `deploy`, `routeTraffic` and `postRouteTraffic` lifecycle hooks, and exits with either `success` or `failure` hooks.


Following are general use cases for the supported lifecycle hooks:

`preDeploy` – Used to run tasks before the deploy step is executed.

`Deploy` – Used to run the deploy tasks. 

`routeTraffic` – Used to run tasks that serves the traffic to the updated version. 

`postRouteTraffic` - Used to run the tasks after the traffic is routed. Typically these tasks monitor the health of the updated version for defined interval. 

`on:` `Failure` or `on:` `Success` - Used to run the task to peform rollback actions or clean-up. 


## Examples

### RunOnce Deployment strategy

The following example YAML snippet showcases a simple use of a deploy job using runOnce deployment strategy - 

```YAML
jobs:
  # track deployments on the environment
- deployment: DeployWeb
  displayName: deploy Web App
  pool:
    vmImage: 'Ubuntu-16.04'
  # creates an environment if it doesn't exist
  environment: 'smarthotel-dev'
  strategy:
    # default deployment strategy, more coming...
    runOnce:
      deploy:
        steps:
        - script: echo my first deployment
```

In the above example, with each run of this job, deployment history is recorded against the "smarthotel-dev" environment.

> [!NOTE]
> - Currently only Kubernetes resources are supported within an environment, with support for VMs and other resources on the roadmap.
> - It is also possible to create an environment with empty resources and use that as an abstract shell to record deployment history as shown in the previous example.

The following example snippet demonstrates how a pipeline can refer an environment and a resource within the same to be used as the target for a deployment job.

```YAML
jobs:
- deployment: DeployWeb
  displayName: deploy Web App
  pool:
    vmImage: 'Ubuntu-16.04'
  # records deployment against bookings resource - Kubernetes namespace
  environment: 'smarthotel-dev.bookings'
  strategy: 
    runOnce:
      deploy:
        steps:
          # No need to explicitly pass the connection details
        - task: KubernetesManifest@0
          displayName: Deploy to Kubernetes cluster
          inputs:
            action: deploy
            namespace: $(k8sNamespace)
            manifests: |
              $(System.ArtifactsDirectory)/manifests/*
            imagePullSecrets: |
              $(imagePullSecret)
            containers: |
              $(containerRegistry)/$(imageRepository):$(tag)
```

This approach has the following benefits:
- Records deployment history on a specific resource within the environment as opposed to recording the history on all resources within the environment.
- Steps in the deployment job **automatically inherit** the connection details of the resource (in this case, a kubernetes namespace: `smarthotel-dev.bookings`), since the deployment job is linked to the environment. 
This is particularly useful in the cases where the same connection detail is to be set for multiple steps of the job.




### Canary deployment strategy

In the following example, the canary strategy for AKS will first deploy the changes with 10% pods followed by 20% while monitoring the health during postRouteTraffic. If all goes well, it will promote to 100%.  

```YAML
jobs: 
- deployment: 
  environment: musicCarnivalProd 
  pool: 
    name: musicCarnivalProdPool  
  strategy:                  
    canary:      
      increments: [10,20]  
      preDeploy:                                     
        steps:           
        - script: initialize, cleanup....   
      deploy:             
        steps: 
        - script: echo deploy updates... 
        - task: KubernetesManifest@0 
          inputs: 
            action: $(strategy.action)       
            namespace: 'default' 
            strategy: $(strategy.name) 
            percentage: $(strategy.increment) 
            manifests: 'manifest.yml' 
      postRouteTaffic: 
        pool: server 
        steps:           
        - script: echo monitor application health...   
      on: 
        failure: 
          steps: 
          - script: echo clean-up, rollback...   
        success: 
          steps: 
          - script: echo checks passed, notify... 
```
