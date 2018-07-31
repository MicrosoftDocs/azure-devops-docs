---
title: Pipeline variables | VSTS or Team Foundation Server
description: Pipeline variables are name-value pairs defined by you or provided by Build or Release Management. You can use variables as inputs and in your scripts.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 4751564b-aa99-41a0-97e9-3ef0c0fce32a
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 07/20/2018
monikerRange: '>= tfs-2015'
---

# Build variables

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

Variables give you a convenient way to get key bits of data into various parts of the pipeline.
As the name suggests, the contents of a variable may change from run to run or phase to phase of your pipeline.
Some variables are predefined by the system, and you are free to add your own as well.

## Working with variables

Variables add a layer of indirection to your pipeline definition.
Almost any place where a pipeline definition requires a text string or a number, you can use a variable instead of hard-coding a value.
The system will replace the variable with its current value during the pipeline's execution.

Variable names consist of letters, numbers, `.`, and `_` characters.
How you reference a variable depends on context.
The following table indicates how you can reference a variable called `Build.DefinitionName` in each context.

<table>
<tbody>
<tr><th> Context </th><th> Syntax </th><th> Notes </th></tr>
<tr><td> Version control tag applied by the build </td><td> `$(Build.DefinitionName)` </td><td> [Learn about repository version control tagging](../build/repository.md). </td></tr>
<tr><td> Custom build number </td><td> `$(Build.DefinitionName)` </td><td>[Learn about build number format options](../build/options.md).</td></tr>
<tr><td> Designer input fields </td><td> `$(Build.DefinitionName)` </td><td></td></tr>
<tr><td> YAML input fields </td><td>  `$(Build.DefinitionName)` </td><td></td></tr>
<tr><td> Windows batch script </td><td> `%BUILD_DEFINITIONNAME%` </td><td rowspan="3"> Name is upper-cased, `.` replaced with `_`, and automatically inserted into the process environment. For more information and examples, see: [Batch script](../tasks/utility/batch-script.md#example), [PowerShell script](../scripts/powershell.md), or [Shell script](../tasks/utility/shell-script.md#example).</td></tr>
<tr><td> PowerShell script </td><td> `$env:BUILD_DEFINITIONNAME` </td></tr>
<tr><td> Bash script </td><td> `$BUILD_DEFINITIONNAME` </td></tr>
</tbody>
</table>

## System-defined variables

Some variables are automatically inserted by the system.
As a pipeline author or end user, you cannot set the contents of such variables.
See the comprehensive lists of [build variables](../build/variables.md) and [release variables](../release/variables.md) to learn which ones are available.

## User-defined variables

Some build templates automatically create variables for you.
For example, when you [create a new .NET app build](../apps/windows/dot-net.md), `BuildConfiguration` and `BuildPlatform` are automatically defined for you.
You are free to define additional variables in your pipelines.
Both of these are considered user-defined variables.

### Designer variables

On the **Variables** tab in the pipeline designer, you can create, set, and delete variables.
Variables defined here are available to all phases in the pipeline.

### YAML variables

In addition to the **Variables** tab, YAML builds can have variables defined at the [phase](../process/phases.md) level.
These variables can then be mapped into each task or script using the `inputs` keyword.

```yaml
# Set variables once
variables:
  configuration: debug
  platform: x64

steps:

# Build solution 1
- task: MSBuild@1
  inputs:
    solution: solution1.sln
    configuration: $(configuration) # Use the variable
    platform: $(platform)

# Build solution 2
- task: MSBuild@1
  inputs:
    solution: solution2.sln
    configuration: $(configuration) # Use the variable
    platform: $(platform)
```

### Secret variables

We recommend that you make the variable ![Secret](_img/variables/secret-variable-icon.png)
**Secret** if it contains a password, keys, or some other kind of data that you need to avoid exposing.

::: moniker range="tfs-2017"
**TFS 2017.2, TFS 2017.3**
::: moniker-end

::: moniker range=">= tfs-2017"
![Keep password secret](_img/variables/keep-password-secret-neweditor.png)
::: moniker-end

::: moniker range="tfs-2017"
**TFS 2017 RTM**
::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"
![Keep password secret](_img/variables/keep-password-secret.png)
::: moniker-end

# [Designer](#tab/designer)

Secret variables are encrypted at rest with a 2048-bit RSA key.
They are automatically masked out of any log output from the pipeline.
Unlike a normal variable, they are not automatically decrypted into environment variables for scripts.
They *are* automatically decrypted for use as inputs to your build tasks.
You can also pass them explicitly into a script from your build task (for example as `$(password)`).

# [YAML](#tab/yaml)

Secret variables are encrypted at rest with a 2048-bit RSA key.
They are automatically masked out of any log output from the pipeline.
Unlike a normal variable, they are not automatically decrypted into environment variables for scripts.
You can explicitly map them in, though:

```yaml
steps:

# Create a secret variable
- powershell: |
    Write-Host '##vso[task.setvariable variable=mySecret;issecret=true]abc'

# Attempt to output the value in various ways
- powershell: |
    # Using an input-macro:
    Write-Host "This works: $(mySecret)"

    # Using the env var directly:
    Write-Host "This does not work: $env:MYSECRET"

    # Using the mapped env var:
    Write-Host "This works: $env:MY_MAPPED_ENV_VAR"
  env:
    MY_MAPPED_ENV_VAR: $(mySecret)
```

The output from the above script would look like this:

```text
This works: ***
This does not work:
This works: ***
```

---

### Allow at queue time

You can choose which variables are allowed to be set at queue time and which are fixed by the pipeline author.
Continuing the .NET example from above, `BuildConfiguration` can be settable at queue time for CI builds.
This way, developers can choose whether to create Debug or Release builds depending on their needs.
However, on your official builds, `BuildConfiguration` should not be settable at queue time so that you don't accidentally ship Debug binaries.

[!INCLUDE [include](../_shared/set-variables-in-scripts.md)]

## Environment variables

You can also pass environment variables from the agent host into build tasks.
For example, on the [Build tab](../tasks/index.md) of a build pipeline, add this task:

| Task | Arguments |
| ---- | --------- |
| ![](../tasks/utility/_img/command-line.png) **Utility: Command Line** | Tool: `echo`<br />Arguments: `$(PATH)` |

> [!NOTE]
> If you have defined a process variable of the same name as an environment variable (for example, `PATH`), your value overrides the agent host's environment variable.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->


### What are the predefined Release Management variables?

[Default release management variables](../release/variables.md#default-variables)

[!INCLUDE [temp](../_shared/qa-agents.md)]

::: moniker range="< vsts"
[!INCLUDE [temp](../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
