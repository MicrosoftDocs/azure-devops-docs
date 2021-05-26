---
ms.topic: include
---

### Read-only variables

System variables were documented as being immutable, but in practice they could be overwritten by a task and downstream tasks would pick up the new value. With this update, we tighten up the security around pipeline variables to make system and queue-time variables read-only. In addition, you can make a YAML variable read-only by marking it as follows.

```yaml
variables:
- name: myVar
  value: myValue
  readonly: true
```

### Support for output variables in a deployment job
 
You can now define output variables in a deployment job's [lifecycle hooks](/azure/devops/pipelines/process/deployment-jobs?view=azure-devops&preserve-view=true#descriptions-of-life-cycle-hooks) and consume them in other downstream steps and jobs within the same stage. 

While executing deployment strategies, you can access output variables across jobs using the following syntax.

- For **runOnce** strategy: `$[dependencies.<job-name>.outputs['<lifecycle-hookname>.<step-name>.<variable-name>']]`  
- For **canary** strategy:  `$[dependencies.<job-name>.outputs['<lifecycle-hookname>_<increment-value>.<step-name>.<variable-name>']]`  
- For **rolling** strategy : `$[dependencies.<job-name>.outputs['<lifecycle-hookname>_<resource-name>.<step-name>.<variable-name>']]`

```yaml
// Set an output variable in a lifecycle hook of a deployment job executing canary strategy
- deployment: A
  pool:
    vmImage: 'ubuntu-16.04'
  environment: staging
  strategy:                  
    canary:      
      increments: [10,20]  # creates multiple jobs, one for each increment. Output variable can be referenced with this.
      deploy:
        steps:
        - script: echo "##vso[task.setvariable variable=myOutputVar;isOutput=true]this is the deployment variable value"
          name: setvarStep
        - script: echo $(setvarStep.myOutputVar)
          name: echovar

 // Map the variable from the job
- job: B
  dependsOn: A
  pool:
    vmImage: 'ubuntu-16.04'
  variables:
    myVarFromDeploymentJob: $[ dependencies.A.outputs['deploy_10.setvarStep.myOutputVar'] ]
  steps:
  - script: "echo $(myVarFromDeploymentJob)"
    name: echovar
```
Learn more on how to [set a multi-job output variable](/azure/devops/pipelines/process/variables?tabs=yaml%2cbatch&view=azure-devops&preserve-view=true#set-a-multi-job-output-variable)

### Avoid rollback of critical changes

In classic release pipelines, it is common to rely on scheduled deployments for regular updates. But, when you have a critical fix, you may choose to start a manual deployment out-of-band. When doing so, older releases continue to stay scheduled. This posed a challenge since the manual deployment would be rolled back when the deployments resumed as per schedule. Many of you reported this issue and we have now fixed it. With the fix, all older scheduled deployments to the environment would be cancelled when you manually start a deployment. This is only applicable when the queueing option is selected as "Deploy latest and cancel others".

### Removing older images in Azure Pipelines hosted pools

On March 23, 2020, we will remove the following images from our Azure Pipelines hosted pools. 

* Windows Server 2012 R2 with Visual Studio 2015 (vs2015-win2012r2)
* Mac OS High Sierra 10.13 (macOS-10.13)
* Windows Server Core 1803 (win1803) 

By removing these images, we will continue to roll out newer image versions more efficiently.

To learn more about the removal of these images, check out the [removing older images in Azure Pipelines hosted pools](https://aka.ms/removing-older-images-hosted-pools) blog post.