---
title: PowerShell task
description: Execute PowerShell scripts in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 0D682DFA-9BC7-47A7-B0D3-C59DE1D431B5
ms.manager: jillfra
ms.custom: seodec18
ms.author: alewis
author: andyjlewis
ms.date: 03/15/2019
monikerRange: '>= tfs-2015'
---

# PowerShell task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

Use this task in a build or release pipeline to run a PowerShell script.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

## Demands

* DotNetFramework

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/PowerShellV2.md)]

The Powershell task also has a shortcut syntax in YAML:

```yaml
- powershell:  # inline script
  workingDirectory:  #
  displayName:  #
  failOnStderr:  #
  errorActionPreference:  #
  ignoreLASTEXITCODE:  #
  env:  # mapping of environment variables to add
```
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Type</td><td>Sets whether this is an inline script or a path to a <code>.ps1</code> file. Defaults to <code>filepath</code></td></tr>
<tr><td>File path</td><td>Path of the script to execute. Must be a fully qualified path or relative to <code>$(System.DefaultWorkingDirectory)</code>. Required if Type is <code>filePath</code>.</td></tr>
<tr><td>Arguments</td><td>Arguments passed to the Powershell script. Ignored when Type is <code>inline</code>.</td></tr>
<tr><td>Script</td><td>Contents of the script. Required if Type is <code>inline</code>.</td></tr>
<tr><td>Working directory</td><td>Specify the working directory in which you want to run the command. If you leave it empty, the working directory is <code>[$(Build.SourcesDirectory)](../../build/variables.md)</code>.</td></tr>
<tr>
<td>Fail on standard error</td>
<td>If this is <code>true</code>, this task will fail if any errors are written to <code>stderr</code>.</td>
</tr>
<tr>
<td>errorActionPreference</td>
<td>Set PowerShell's error action preference. One of: <code>stop</code>, <code>continue</code>, <code>silentlyContinue</code>. Defaults to <code>stop</code>.</td>
</tr>
<tr>
<td>ignoreLASTEXITCODE</td>
<td>By default, the last exit code returned from your script will be checked and, if non-zero, treated as a step failure. If you don't want this behavior, set this to <code>true</code>.</td>
</tr>
<tr>
<td>Environment variables</td>
<td>A list of additional items to map into the process's environment. For example, secret variables are not automatically mapped. If you have a secret variable called <code>Foo</code>, you can map it in like this:<br/><br/>

<pre>
<code class="lang-yaml">
- powershell: echo $env:MYSECRET
  env:
    MySecret: $(Foo)
</code>
</pre>

</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Examples

### Hello World

Create ```test.ps1``` at the root of your repo:

```ps
Write-Host "Hello World from $Env:AGENT_NAME."
Write-Host "My ID is $Env:AGENT_ID."
Write-Host "AGENT_WORKFOLDER contents:"
gci $Env:AGENT_WORKFOLDER
Write-Host "AGENT_BUILDDIRECTORY contents:"
gci $Env:AGENT_BUILDDIRECTORY
Write-Host "BUILD_SOURCESDIRECTORY contents:"
gci $Env:BUILD_SOURCESDIRECTORY
Write-Host "Over and out."
```

On the Build tab of a build pipeline, add this task:

| Task | Arguments |
| ---- | --------- |
| ![](_img/powershell.png)<br/>**Utility: PowerShell** | Run test.ps1.<br /><br />**Script filename**: `test.ps1` |

### Write a warning

![icon](_img/powershell.png) Set warning message

* Arguments

 ```
"You've been warned by"
```

* Script

 ```ps
Write-Host "$("##vso[task.setvariable variable=WarningMessage]") $($args[0])"
```

![icon](_img/powershell.png) Write warning using task.LogIssue

* Script

 ```ps
# Writes a warning to build summary and to log in yellow text
Write-Host  "$("##vso[task.LogIssue type=warning;]") $($env:WarningMessage) $("the task.LogIssue Azure Pipelines logging command.")"
```

![icon](_img/powershell.png) Write warning using PowerShell command

* Script

 ```ps
# Writes a warning to log preceded by "WARNING: "
Write-Warning "$($env:WarningMessage) $("the Write-Warning PowerShell command.")"
```

### Write an error

![icon](_img/powershell.png) Set error message

* Arguments

 ```
"something went wrong."
```

* Script

 ```ps
Write-Host "$("##vso[task.setvariable variable=ErrorMessage]") $($args[0])"
```

![icon](_img/powershell.png) Write error using task.LogIssue

* Script

 ```ps
# Writes an error to the build summary and to the log in red text
Write-Host  "$("##vso[task.LogIssue type=error;]") $("the task.LogIssue Azure Pipelines logging command reported that") $($env:ErrorMessage)"
```

> [!TIP]
> 
> If you want this error to fail the build, then add this line:
 ```ps
exit 1
``` 

![icon](_img/powershell.png) Write error using PowerShell command

* Script

 ```ps
# Writes an error to the build summary and the log with details about the error
Write-Error "$("the Write-Error PowerShell command reported that") $($env:ErrorMessage)"
```

> [!TIP]
> 
> If you don't want this error to fail the build, then clear the **Advanced: Fail on Standard Error** check box.


### ApplyVersionToAssemblies.ps1

[Use a script to customize your build pipeline](../../scripts/powershell.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn about PowerShell scripts?

[Scripting with Windows PowerShell](https://technet.microsoft.com/library/bb978526.aspx)

[Microsoft Script Center (the Scripting Guys)](https://technet.microsoft.com/scriptcenter/bb410849.aspx)

[Windows PowerShell Tutorial](http://www.computerperformance.co.uk/powershell/index.htm)

[PowerShell.org](http://powershell.org/)

[!INCLUDE [include](../../_shared/variable-set-in-script-qa.md)]

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
