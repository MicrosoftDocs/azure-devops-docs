---
title: Deployment jobs
description: Deploy to resources within an environment
ms.topic: conceptual
ms.assetid: fc825338-7012-4687-8369-5bf8f63b9c10
ms.date: 07/28/2021
monikerRange: '>= azure-devops-2020'
---

# Deployment jobs

[!INCLUDE [version-2020-rtm](../includes/version-server-2020-rtm.md)]

> [!IMPORTANT]
> - Job and stage names cannot contain keywords (example: `deployment`).
> - Each job in a stage must have a unique name. 

In YAML pipelines, we recommend that you put your deployment steps in a special type of [job](phases.md) called a deployment job. A deployment job is a collection of steps that are run sequentially against the environment. A deployment job and a [traditional job](phases.md) can exist in the same stage. 

Deployment jobs provide the following benefits:

 - **Deployment history**: You get the deployment history across pipelines, down to a specific resource and status of the deployments for auditing.
 - **Apply deployment strategy**: You define how your application is rolled out.

   > [!NOTE] 
   > We currently support only the *runOnce*, *rolling*, and the *canary* strategies. 

A deployment job doesn't automatically clone the source repo. You can checkout the source repo within your job with `checkout: self`. 

## Schema

Here is the full syntax to specify a deployment job: 

```YAML
jobs:
- deployment: string   # name of the deployment job, A-Z, a-z, 0-9, and underscore. The word "deploy" is a keyword and is unsupported as the deployment name.
  displayName: string  # friendly name to display in the UI
  pool:                # see pool schema
    name: string       # Use only global level variables for defining a pool name. Stage/job level variables are not supported to define pool name.
    demands: string | [ string ]
  workspace:
    clean: outputs | resources | all # what to clean up before the job runs
  dependsOn: string
  condition: string
  continueOnError: boolean                # 'true' if future jobs should run even if this job fails; defaults to 'false'
  container: containerReference # container to run this job inside
  services: { string: string | container } # container resources to run as a service container
  timeoutInMinutes: nonEmptyString        # how long to run the job before automatically cancelling
  cancelTimeoutInMinutes: nonEmptyString  # how much time to give 'run always even if cancelled tasks' before killing them
  variables: # several syntaxes, see specific section
  environment: string  # target environment name and optionally a resource name to record the deployment history; format: <environment-name>.<resource-name>
  strategy:
    runOnce:    #rolling, canary are the other strategies that are supported
      deploy:
        steps: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
```

## Deployment strategies

When you're deploying application updates, it's important that the technique you use to deliver the update will: 

* Enable initialization.
* Deploy the update.
* Route traffic to the updated version.
* Test the updated version after routing traffic.
* In case of failure, run steps to restore to the last known good version. 

We achieve this by using lifecycle hooks that can run steps during deployment. Each of the lifecycle hooks resolves into an agent job or a [server job](phases.md#server-jobs) (or a container or validation job in the future), depending on the `pool` attribute. By default, the lifecycle hooks will inherit the `pool` specified by the `deployment` job. 

Deployment jobs use the `$(Pipeline.Workspace)` system variable.

### Descriptions of lifecycle hooks

`preDeploy`: Used to run steps that initialize resources before application deployment starts. 

`deploy`: Used to run steps that deploy your application. Download artifact task will be auto injected only in the `deploy` hook for deployment jobs. To stop downloading artifacts, use `- download: none` or choose specific artifacts to download by specifying [Download Pipeline Artifact task](../yaml-schema.md#download).

`routeTraffic`: Used to run steps that serve the traffic to the updated version. 

`postRouteTraffic`: Used to run the steps after the traffic is routed. Typically, these tasks monitor the health of the updated version for defined interval. 

`on: failure` or `on: success`: Used to run steps for rollback actions or clean-up. 

### RunOnce deployment strategy

`runOnce` is the simplest deployment strategy wherein all the lifecycle hooks, namely `preDeploy` `deploy`, `routeTraffic`, and `postRouteTraffic`, are executed once. Then,  either `on:` `success` or `on:` `failure` is executed.  

```YAML
strategy: 
    runOnce:
      preDeploy:        
        pool: [ server | pool ] # See pool schema.        
        steps:
        - script: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
      deploy:          
        pool: [ server | pool ] # See pool schema.        
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

If you are using self-hosted agents, you can use the workspace clean options to clean your deployment workspace.

```yaml
  jobs:
  - deployment: deploy
    pool:
      vmImage: 'ubuntu-latest'
      workspace:
        clean: all
    environment: staging
```

### Rolling deployment strategy

A rolling deployment replaces instances of the previous version of an application with instances of the new version of the application on a fixed set of virtual machines (rolling set) in each iteration. 

We currently only support the rolling strategy to VM resources.

For example, a rolling deployment typically waits for deployments on each set of virtual machines to complete before proceeding to the next set of deployments. You could do a health check after each iteration and if a significant issue occurs, the rolling deployment can be stopped.

Rolling deployments can be configured by specifying the keyword `rolling:` under the `strategy:` node. 
The `strategy.name` variable is available in this strategy block, which takes the name of the strategy. In this case, rolling.

```YAML
strategy:
  rolling:
    maxParallel: [ number or percentage as x% ]
    preDeploy:        
      steps:
      - script: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
    deploy:          
      steps:
      ...
    routeTraffic:         
      steps:
      ...        
    postRouteTraffic:          
      steps:
      ...
    on:
      failure:         
        steps:
        ...
      success:          
        steps:
        ...
```
All the lifecycle hooks are supported and lifecycle hook jobs are created to run on each VM.

`preDeploy`, `deploy`, `routeTraffic`, and `postRouteTraffic` are executed once per batch size defined by `maxParallel`. 
Then, either `on: success` or `on: failure` is executed.

With `maxParallel: <# or % of VMs>`, you can control the number/percentage of virtual machine targets to deploy to in parallel. This ensures that the app is running on these machines and is capable of handling requests while the deployment is taking place on the rest of the machines, which reduces overall downtime.

 > [!NOTE]
 > There are a few known gaps in this feature. For example, when you retry a stage, it will re-run the deployment on all VMs not just failed targets. 

### Canary deployment strategy

Canary deployment strategy is an advanced deployment strategy that helps mitigate the risk involved in rolling out new versions of applications. By using this strategy, you can roll out the changes to a small subset of servers first. As you gain more confidence in the new version, you can release it to more servers in your infrastructure and route more traffic to it. 

```YAML
strategy: 
    canary:
      increments: [ number ]
      preDeploy:        
        pool: [ server | pool ] # See pool schema.        
        steps:
        - script: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
      deploy:          
        pool: [ server | pool ] # See pool schema.        
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
Canary deployment strategy supports the `preDeploy` lifecycle hook (executed once) and iterates with the `deploy`, `routeTraffic`, and `postRouteTraffic` lifecycle hooks. It then exits with either the `success` or `failure` hook.

 
The following variables are available in this strategy:

`strategy.name`: Name of the strategy. For example, canary.
<br>`strategy.action`: The action to be performed on the Kubernetes cluster. For example, deploy, promote, or reject.
<br>`strategy.increment`: The increment value used in the current interaction. This variable is available only in `deploy`, `routeTraffic`, and `postRouteTraffic` lifecycle hooks.



## Examples

### RunOnce deployment strategy

The following example YAML snippet showcases a simple use of a deploy job by using the `runOnce` deployment strategy. The example includes a checkout step. 

```YAML

jobs:
  # Track deployments on the environment.
- deployment: DeployWeb
  displayName: deploy Web App
  pool:
    vmImage: 'ubuntu-latest'
  # Creates an environment if it doesn't exist.
  environment: 'smarthotel-dev'
  strategy:
    # Default deployment strategy, more coming...
    runOnce:
      deploy:
        steps:
        - checkout: self 
        - script: echo my first deployment
```

With each run of this job, deployment history is recorded against the `smarthotel-dev` environment.

> [!NOTE]
> - It's also possible to create an environment with empty resources and use that as an abstract shell to record deployment history, as shown in the previous example.

The next example demonstrates how a pipeline can refer both an environment and a resource to be used as the target for a deployment job.

```YAML
jobs:
- deployment: DeployWeb
  displayName: deploy Web App
  pool:
    vmImage: 'ubuntu-latest'
  # Records deployment against bookings resource - Kubernetes namespace.
  environment: 'smarthotel-dev.bookings'
  strategy: 
    runOnce:
      deploy:
        steps:
          # No need to explicitly pass the connection details.
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
- Records deployment history on a specific resource within the environment, as opposed to recording the history on all resources within the environment.
- Steps in the deployment job **automatically inherit** the connection details of the resource (in this case, a Kubernetes namespace, `smarthotel-dev.bookings`), because the deployment job is linked to the environment. 
This is useful in the cases where the same connection detail is set for multiple steps of the job.


### Rolling deployment strategy

The rolling strategy for VMs updates up to five targets in each iteration. `maxParallel` will determine the number of targets that can be deployed to, in parallel. The selection accounts for absolute number or percentage of targets that must remain available at any time excluding the targets that are being deployed to. It is also used to determine the success and failure conditions during deployment.

```YAML
jobs: 
- deployment: VMDeploy
  displayName: web
  environment:
    name: smarthotel-dev
    resourceType: VirtualMachine
  strategy:
    rolling:
      maxParallel: 5  #for percentages, mention as x%
      preDeploy:
        steps:
        - download: current
          artifact: drop
        - script: echo initialize, cleanup, backup, install certs
      deploy:
        steps:
        - task: IISWebAppDeploymentOnMachineGroup@0
          displayName: 'Deploy application to Website'
          inputs:
            WebSiteName: 'Default Web Site'
            Package: '$(Pipeline.Workspace)/drop/**/*.zip'
      routeTraffic:
        steps:
        - script: echo routing traffic
      postRouteTraffic:
        steps:
        - script: echo health check post-route traffic
      on:
        failure:
          steps:
          - script: echo Restore from backup! This is on failure
        success:
          steps:
          - script: echo Notify! This is on success
```

### Canary deployment strategy

In the next example, the canary strategy for AKS will first deploy the changes with 10-percent pods, followed by 20 percent, while monitoring the health during `postRouteTraffic`. If all goes well, it will promote to 100 percent.  

```YAML
jobs: 
- deployment: 
  environment: smarthotel-dev.bookings
  pool: 
    name: smarthotel-devPool
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
      postRouteTraffic: 
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
## Use pipeline decorators to inject steps automatically

[Pipeline decorators](../../extend/develop/add-pipeline-decorator.md) can be used in deployment jobs to auto-inject any custom step (for example, vulnerability scanner) to every [lifecycle hook](#descriptions-of-lifecycle-hooks) execution of every deployment job. Since pipeline decorators can be applied to all pipelines in an organization, this can be leveraged as part of enforcing safe deployment practices.

In addition, deployment jobs can be run as a [container job](container-phases.md) along with [services side-car](service-containers.md) if defined.

## Support for output variables 
 
Define output variables in a deployment job's [lifecycle hooks](#descriptions-of-lifecycle-hooks) and consume them in other downstream steps and jobs within the same stage. 

To share variables between stages, output an [artifact](../artifacts/pipeline-artifacts.md) in one stage and then consume it in a subsequent stage, or use the `stageDependencies` syntax described in [variables](variables.md#use-outputs-in-a-different-stage).
 

While executing deployment strategies, you can access output variables across jobs using the following syntax.

- For **runOnce** strategy: `$[dependencies.<job-name>.outputs['<lifecycle-hookname>.<step-name>.<variable-name>']]` (for example, `$[dependencies.JobA.outputs['Deploy.StepA.VariableA']]`)
- For **runOnce** strategy plus a resourceType: `$[dependencies.<job-name>.outputs['<lifecycle-hookname>_<resource-name>.<step-name>.<variable-name>']]`. (for example, `$[dependencies.JobA.outputs['Deploy_VM1.StepA.VariableA']]`)
- For **canary** strategy:  `$[dependencies.<job-name>.outputs['<lifecycle-hookname>_<increment-value>.<step-name>.<variable-name>']]`  
- For **rolling** strategy: `$[dependencies.<job-name>.outputs['<lifecycle-hookname>_<resource-name>.<step-name>.<variable-name>']]`

```yaml
# Set an output variable in a lifecycle hook of a deployment job executing canary strategy.
- deployment: A
  pool:
    vmImage: 'ubuntu-latest'
  environment: staging
  strategy:                  
    canary:      
      increments: [10,20]  # Creates multiple jobs, one for each increment. Output variable can be referenced with this.
      deploy:
        steps:
        - bash: echo "##vso[task.setvariable variable=myOutputVar;isOutput=true]this is the deployment variable value"
          name: setvarStep
        - bash: echo $(setvarStep.myOutputVar)
          name: echovar

# Map the variable from the job.
- job: B
  dependsOn: A
  pool:
    vmImage: 'ubuntu-latest'
  variables:
    myVarFromDeploymentJob: $[ dependencies.A.outputs['deploy_10.setvarStep.myOutputVar'] ]
  steps:
  - script: "echo $(myVarFromDeploymentJob)"
    name: echovar
```

For a `runOnce` job, specify the name of the job instead of the lifecycle hook:

```yaml
# Set an output variable in a lifecycle hook of a deployment job executing runOnce strategy.
- deployment: A
  pool:
    vmImage: 'ubuntu-latest'
  environment: staging
  strategy:                  
    runOnce:
      deploy:
        steps:
        - bash: echo "##vso[task.setvariable variable=myOutputVar;isOutput=true]this is the deployment variable value"
          name: setvarStep
        - bash: echo $(setvarStep.myOutputVar)
          name: echovar

# Map the variable from the job.
- job: B
  dependsOn: A
  pool:
    vmImage: 'ubuntu-latest'
  variables:
    myVarFromDeploymentJob: $[ dependencies.A.outputs['A.setvarStep.myOutputVar'] ]
  steps:
  - script: "echo $(myVarFromDeploymentJob)"
    name: echovar
```

When you define an environment in a deployment job, the syntax of the output variable varies depending on how the environment gets defined. In this example, `env1` uses shorthand notation and `env2` includes the full syntax with a defined resource type. 

```yaml
stages:
- stage: StageA
  jobs:
  - deployment: A1
    pool:
      vmImage: 'ubuntu-latest'
    environment: env1
    strategy:                  
      runOnce:
        deploy:
          steps:
          - bash: echo "##vso[task.setvariable variable=myOutputVar;isOutput=true]this is the deployment variable value"
            name: setvarStep
          - bash: echo $(System.JobName)
  - deployment: A2
    pool:
      vmImage: 'ubuntu-latest'
    environment: 
      name: env2
      resourceType: virtualmachine
    strategy:                  
      runOnce:
        deploy:
          steps:
          - script: echo "##vso[task.setvariable variable=myOutputVarTwo;isOutput=true]this is the second deployment variable value"
            name: setvarStepTwo
  
  - job: B1
    dependsOn: A1
    pool:
      vmImage: 'ubuntu-latest'
    variables:
      myVarFromDeploymentJob: $[ dependencies.A1.outputs['A1.setvarStep.myOutputVar'] ]
      
    steps:
    - script: "echo $(myVarFromDeploymentJob)"
      name: echovar
 
  - job: B2
    dependsOn: A2
    pool:
      vmImage: 'ubuntu-latest'
    variables:
      myVarFromDeploymentJob: $[ dependencies.A2.outputs['A2.setvarStepTwo.myOutputVar'] ]
      myOutputVarTwo: $[ dependencies.A2.outputs['Deploy_vmsfortesting.setvarStepTwo.myOutputVarTwo'] ]
    
    steps:
    - script: "echo $(myOutputVarTwo)"
      name: echovartwo
```

When you output a variable from a deployment job, referencing it from the next job uses different syntax depending on if you want to set a variable or use it as a condition for the stage. 

```yaml
stages:
- stage: StageA
  jobs:
  - job: A1
    steps:
      - pwsh: echo "##vso[task.setvariable variable=RunStageB;isOutput=true]true"
        name: setvarStep
      - bash: echo $(System.JobName)

- stage: StageB
  dependsOn: 
    - StageA
 
  # when referring to another stage, stage name is included in variable path
  condition: eq(dependencies.StageA.outputs['A1.setvarStep.RunStageB'], 'true')
  
  # Variables reference syntax differs slightly from inter-stage condition syntax
  variables:
    myOutputVar: $[stageDependencies.StageA.A1.outputs['setvarStep.RunStageB']]
  jobs:
  - deployment: B1
    pool:
      vmImage: 'ubuntu-latest'
    environment: envB
    strategy:                  
      runOnce:
        deploy:
          steps:
          - bash: echo $(myOutputVar)
```

Learn more about how to [set a multi-job output variable](variables.md#set-a-multi-job-output-variable)

## FAQ

### My pipeline is stuck with the message "Job is pending...". How can I fix this?
 
This can happen when there is a name conflict between two jobs. Verify that any deployment jobs in the same stage have a unique name and that job and stage names do not contain keywords. If renaming does not fix the problem, review [troubleshooting pipeline runs](../troubleshooting/troubleshooting.md).

### Are decorators supported in deployment groups?

No. You can't use decorators in deployment groups.
