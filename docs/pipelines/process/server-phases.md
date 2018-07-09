---
title: Server phases in Build and Release Management
description: Understand server phases in Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.assetid: 093FD7B8-65F4-40E0-A429-A7944FD2ED9B
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

# Server phases

Tasks in a server phase are orchestrated by and executed on the server (VSTS or TFS). A server phase does not require an agent or any target computers. Only a few tasks, such as the Manual Intervention and Invoke REST API tasks, are supported in a server phase at present. At present you can add only one task to each server phase in your pipeline.

# [Web](#tab/web)

You add a server phase in the editor by selecting '...' on **Process** channel in the **Tasks** tab of a pipeline. The properties for the server phase are displayed when you select the phase in the editor.

# [YAML](#tab/yaml)

::: moniker range="vsts"

The full syntax to specify an agent phase is:

```yaml
phases:
- phase: string
  server:
    timeoutInMinutes: number
    cancelTimeoutInMinutes: number
    parallel: number
    matrix: { string: { string: string } }
```

You can also use the simplified syntax:

```yaml
phases:
- phase: string
  server: true
```

::: moniker-end
::: moniker range="< vsts"
YAML is not yet supported in TFS.
::: moniker-end
---

## Timeouts

Use the phase timeout to specify the timeout in minutes for jobs in this phase. A zero
  value for this option means that the timeout is effectively infinite and so, by default, jobs run until they complete or fail.
  You can also set the timeout for each task individually - see [task control options](tasks.md#controloptions). Jobs targeting Microsoft-hosted agents have [additional restrictions](../agents/hosted.md) on how long they may run.

# [Web](#tab/web)

If you specify a non-zero value for the phase timeout, then it overrides any value that is specified in the pipeline options. If you specify a zero value, then the timeout value from the pipeline options is used. If the pipeline value is also set to zero, then there is no timeout.

# [YAML](#tab/yaml)

::: moniker range="vsts"

The `timeoutInMinutes` allows a limit to be set for the job execution time. When not specified, the default is 60 minutes. The `cancelTimeoutInMinutes` allows a limit to be set for the job cancel time. When not specified, the default is 5 minutes.

```yaml
queue:
  timeoutInMinutes: number
  cancelTimeoutInMinutes: number
```

::: moniker-end
::: moniker range="< vsts"
YAML is not yet supported in TFS.
::: moniker-end
---

<a name="parallelexec"></a>
## Multi-configuration

If you are using YAML, you can dispatch multiple server jobs from a single server phase.
  
# [Web](#tab/web)

Multi-configuration server phases are not supported in web designer.

# [YAML](#tab/yaml)

::: moniker range="vsts"

The `matrix` setting enables a phase to be dispatched multiple times, with different variable sets. The `parallel` tag restricts the amount of parallelism. The following phase will be dispatched three times with the values of Location and Browser set as specified. However, only two jobs will run in parallel at a time.

```yaml
phases:
- phase: Test
  server:
    parallel: 2
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
```
::: moniker-end
::: moniker range="< vsts"
YAML is not yet supported in TFS.
::: moniker-end
---

## Phase variables
If you are using YAML, variables can be specified on the phase. The variables can be passed to task inputs using the macro syntax $(variableName), or accessed within a script using the environment variable.

# [Web](#tab/web)

Phase variables are not yet supported in the web editor.

# [YAML](#tab/yaml)

::: moniker range="vsts"

Here is an example of defining variables in a phase and using them within tasks.

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
::: moniker range="< vsts"
YAML is not yet supported in TFS.
::: moniker-end
---

## Related topics

* [Phases](phases.md)
* [Multiple phases](multiple-phases.md)
* [Deployment group phases](deployment-group-phases.md)
