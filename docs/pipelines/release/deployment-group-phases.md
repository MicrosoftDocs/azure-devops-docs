---
title: (Classic) Deployment Group Jobs in Release Pipelines
description: Understand deployment group jobs in Azure Pipelines.
ms.assetid: 05956924-242A-43D6-AA29-C93149C0265B
ms.topic: concept-article
ms.date: 01/26/2023
monikerRange: '<= azure-devops'
---

# Deployment group jobs

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can use [deployment groups](../release/deployment-groups/index.md) in classic pipelines to define groups of target servers for deployment. Tasks that you define in a deployment group job run on some or all of the target servers. The number of target servers depends on the arguments that you specify for the tasks and the job itself.

You can select specific sets of servers from a deployment group to receive the deployment by specifying the machine tags that you defined for each server in the deployment group. You can also specify the proportion of the target servers that the pipeline should deploy to at the same time. This action ensures that the app running on these servers can handle requests during the deployment.

If you're using a YAML pipeline, you should use [environments](../process/environments.md) with [virtual machines](../process/environments-virtual-machines.md) instead.

## Instructions for defining groups

Use the information on one of the following tabs, depending on which pipeline you use.

### [YAML](#tab/yaml/)

::: moniker range="<=azure-devops"

> [!NOTE]
> Deployment group jobs are not supported in YAML. You can use [virtual machine resources in environments](../process/environments-virtual-machines.md) to do a rolling deployment to virtual machines in YAML pipelines.

You can configure rolling deployments by specifying the keyword `rolling:` under the `strategy:` node of a [deployment job](../process/deployment-jobs.md).

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
YAML builds aren't available.
::: moniker-end

### [Classic](#tab/classic/)

To add a deployment group job in the editor, go to the **Tasks** tab of a release pipeline. On the **Process** channel, select the ellipsis (...). The properties for the deployment group job appear when you select the job in the editor.

> [!NOTE]
> You can use deployment group jobs only in release pipelines. You can't use them in build pipelines.

* * *

## Timeouts

Use the job timeout to specify the timeout, in minutes, for your jobs. A zero value for this option means that the timeout is effectively infinite. By default, jobs run until they finish or fail.

You can also set the timeout for each task individually. For more information, see [Task options](../process/tasks.md#task-options). Jobs that target Microsoft-hosted agents have [additional restrictions](../agents/hosted.md) on how long they can run.

## Related content

* [Jobs](../process/phases.md)
* [Conditions](../process/conditions.md)
