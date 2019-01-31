---
title: Server jobs in Azure pipelines Build and Release
ms.custom: seodec18
description: Understand server jobs in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: 093FD7B8-65F4-40E0-A429-A7944FD2ED9B
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.author: alewis
author: alewis
ms.date: 5/3/2018
monikerRange: '>= tfs-2018'
---

# Server jobs

[!INCLUDE [version-tfs-2018](../_shared/version-tfs-2018.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

Tasks in a server job are orchestrated by and executed on the server (Azure Pipelines or TFS). A server job does not require an agent or any target computers. Only a few tasks, such as the Manual Intervention and Invoke REST API tasks, are supported in a server job at present.

# [YAML](#tab/yaml)

::: moniker range="azure-devops"

The full syntax to specify an agent job is:

```yaml
jobs:
- job: string
  timeoutInMinutes: number
  cancelTimeoutInMinutes: number
  strategy:
    maxParallel: number
    matrix: { string: { string: string } }

  pool: server

```

You can also use the simplified syntax:

```yaml
jobs:
- job: string
  server: true
```

::: moniker-end
::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

You add a server job in the editor by selecting '...' on the **Pipeline** channel in the **Tasks** tab of a pipeline. The properties for the server job are displayed when you select the job in the editor.

---

## Timeouts

Use the job timeout setting to specify the limit in minutes for running the job. A zero value for this option means that the timeout is effectively infinite and so, by default, jobs run until they complete or fail. You can also set the timeout for each task individually. See [task control options](tasks.md#controloptions). Jobs targeting Microsoft-hosted agents have [additional restrictions](../agents/hosted.md) on how long they may run.

# [YAML](#tab/yaml)

::: moniker range="azure-devops"

The `timeoutInMinutes` allows a limit to be set for the job execution time. When not specified, the default is 60 minutes. The `cancelTimeoutInMinutes` allows a limit to be set for the job cancel time. When not specified, the default is 5 minutes.

```yaml
pool:
  timeoutInMinutes: number
  cancelTimeoutInMinutes: number
```

::: moniker-end
::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

If you specify a non-zero value for the job timeout, then it overrides any value that is specified in the pipeline options. If you specify a zero value, then the timeout value from the pipeline options is used. If the pipeline value is also set to zero, then there is no timeout.

---

<a name="parallelexec"></a>
## Multi-configuration

If you are using YAML, you can dispatch multiple server jobs from a single server job.
  
# [YAML](#tab/yaml)

::: moniker range="azure-devops"

The `matrix` setting enables a job to be dispatched multiple times, with different variable sets. The `parallel` tag restricts the amount of parallelism. The following job will be dispatched three times with the values of Location and Browser set as specified. However, only two jobs will run in parallel at a time.

```yaml
jobs:
- job: Test
  strategy:
    maxParallel: 2
    matrix: 
      US_IE:
        Location: US
        Browser: IE
      US_Chrome:
        Location: US
        Browser: Chrome
      Europe_Chrome:
        Location: Europe
        Browser: Chrome
  
  pool: server
    
```
::: moniker-end
::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

Multi-configuration server jobs are not supported in web designer.

---

## Job variables
If you are using YAML, variables can be specified on the job. The variables can be passed to task inputs using the macro syntax $(variableName), or accessed within a script using the stage variable.

# [YAML](#tab/yaml)

::: moniker range="azure-devops"

Here is an example of defining variables in a job and using them within tasks.

```yaml
variables:
  mySimpleVar: simple var value
  "my.dotted.var": dotted var value
  "my var with spaces": var with spaces value

steps:
- script: echo Input macro = $(mySimpleVar). Env var = %MYSIMPLEVAR%
  condition: eq(variables['agent.os'], 'Windows_NT')
- script: echo Input macro = $(mySimpleVar). Env var = $MYSIMPLEVAR
  condition: in(variables['agent.os'], 'Darwin', 'Linux')
- bash: echo Input macro = $(my.dotted.var). Env var = $MY_DOTTED_VAR
- powershell: Write-Host "Input macro = $(my var with spaces). Env var = $env:MY_VAR_WITH_SPACES"
```
::: moniker-end
::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

Job variables are not yet supported in the web editor.

---

## Related topics

* [Jobs](phases.md)
* [Multiple jobs](multiple-phases.md)
* [Deployment group jobs](deployment-group-phases.md)
* [Specify conditions](conditions.md)
