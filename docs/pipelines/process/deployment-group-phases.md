---
title: Deployment group jobs in Build and Release
ms.custom: seodec18
description: Understand deployment group jobs in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: 05956924-242A-43D6-AA29-C93149C0265B
ms.topic: conceptual
ms.date: 5/3/2018
monikerRange: '>= tfs-2018'
---

# Deployment group jobs

[!INCLUDE [version-tfs-2018](../includes/version-tfs-2018.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

[Deployment groups](../release/deployment-groups/index.md) make it easy to define groups of target servers for deployment. Tasks that you define in a deployment group job run on some or all of the target servers, depending on the arguments you specify for the tasks and the job itself.

You can select specific sets of servers from a deployment group to receive the deployment by specifying the machine tags that you have defined for each server in the deployment group. You can also specify the proportion of the target servers that the pipeline should deploy to at the same time. This ensures that the app running on these servers is capable of handling requests while the deployment is taking place.

#### [YAML](#tab/yaml/)
::: moniker range=">=azure-devops-2020"

> [!NOTE]
> Deployment group jobs are not yet supported in YAML. You can use [Virtual machine resources in Environments](environments-virtual-machines.md) to do a rolling deployment to VMs in YAML pipelines. 

Rolling deployments can be configured by specifying the keyword `rolling:` under `strategy:` node of a [deployment job](deployment-jobs.md). 

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

::: moniker-end

::: moniker range="< azure-devops"
YAML builds are not yet available on TFS.
::: moniker-end

#### [Classic](#tab/classic/)
You add a deployment group job in the editor by selecting '...' on **Process** channel in the **Tasks** tab of a release pipeline. The properties for the deployment group job are displayed when you select the job in the editor.

> [!NOTE]
> Deployment group jobs can only be used in release pipelines. They cannot be used in build pipelines.

* * *
## Timeouts

Use the job timeout to specify the timeout in minutes for jobs in this job. A zero
  value for this option means that the timeout is effectively infinite and so, by default, jobs run until they complete or fail.
  You can also set the timeout for each task individually - see [task control options](tasks.md#controloptions). Jobs targeting Microsoft-hosted agents have [additional restrictions](../agents/hosted.md) on how long they may run.

## Related topics

* [Jobs](phases.md)
* [Conditions](conditions.md)
