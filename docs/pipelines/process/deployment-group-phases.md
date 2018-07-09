---
title: Deployment group phases in Build and Release Management
description: Understand deployment group phases in Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.assetid: 05956924-242A-43D6-AA29-C93149C0265B
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: alewis
author: alewis
ms.date: 5/3/2018
monikerRange: '>= tfs-2018'
---

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

# Deployment group phases

[Deployment groups](../release/deployment-groups/index.md) make it easy to define groups of target servers for deployment. Tasks that you define in a deployment group phase run on some or all of the target servers, depending on the arguments you specify for the tasks and the phase itself.

You can select specific sets of servers from a deployment group to receive the deployment by specifying the machine tags that you have defined for each server in the deployment group. You can also specify the proportion of the target servers that the process should deploy to at the same time. This ensures that the app running on these servers is capable of handling requests while the deployment is taking place.

# [Web](#tab/web)

You add a deployment group phase in the editor by selecting '...' on **Process** channel in the **Tasks** tab of a release pipeline. The properties for the deployment group phase are displayed when you select the phase in the editor.

> [!NOTE]
> Deployment group phases can only be used in release pipelines. They cannot be used in build pipelines.

# [YAML](#tab/yaml)

> [!NOTE]
> Deployment group phases are not yet supported in YAML.

---

## Timeouts

Use the phase timeout to specify the timeout in minutes for jobs in this phase. A zero
  value for this option means that the timeout is effectively infinite and so, by default, jobs run until they complete or fail.
  You can also set the timeout for each task individually - see [task control options](tasks.md#controloptions). Jobs targeting Microsoft-hosted agents have [additional restrictions](../agents/hosted.md) on how long they may run.

## Related topics

* [Phases](phases.md)
* [Server phases](server-phases.md)
* [Multiple phases](multiple-phases.md)
