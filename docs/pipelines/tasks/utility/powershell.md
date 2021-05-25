---
title: PowerShell task
description: Execute PowerShell scripts in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: 0D682DFA-9BC7-47A7-B0D3-C59DE1D431B5
ms.custom: seodec18
ms.date: 08/25/2020
monikerRange: '>= tfs-2015'
---

# PowerShell task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task to run a PowerShell script.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

## Demands

* DotNetFramework

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/PowerShellV2.md)]

The PowerShell task also has two shortcuts in YAML:

```yaml
- powershell:  # inline script
  workingDirectory:  #
  displayName:  #
  failOnStderr:  #
  errorActionPreference:  #
  ignoreLASTEXITCODE:  #
  env:  # mapping of environment variables to add
```

```yaml
- pwsh:  # inline script
  workingDirectory:  #
  displayName:  #
  failOnStderr:  #
  errorActionPreference:  #
  ignoreLASTEXITCODE:  #
  env:  # mapping of environment variables to add
```

Both of these resolve to the `PowerShell@2` task.
`powershell` runs Windows PowerShell and will only work on a Windows agent.
`pwsh` runs PowerShell Core, which must be installed on the agent or container.

> [!NOTE]
> Each PowerShell session lasts only for the duration of the job in which it runs. Tasks that depend on what has been bootstrapped must be in the same job as the bootstrap.

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td><code>targetType</code><br/>Type</td><td>(Optional) Sets whether this is an inline script or a path to a <code>.ps1</code> file. Defaults to <code>filepath</code><br/>Default value: filePath</td></tr>
<tr><td><code>filePath</code><br/>Script Path</td><td>(Required) Path of the script to execute. Must be a fully qualified path or relative to <code>$(System.DefaultWorkingDirectory)</code>. Required if Type is <code>filePath</code></td></tr>
<tr><td><code>arguments</code><br/>Arguments</td><td>(Optional) Arguments passed to the Powershell script.<br>
  For example, <code>-Name someName -Path -Value "Some long string value"</code><br/><br/>
  Note: unused when Type is <code>inline</code>.</td></tr>
<tr><td><code>script</code><br/>Script</td><td>(Required) Contents of the script. Required if targetType is <code>inline</code>. <br/>The maximum supported inline script length is 32766 characters. If you need more than that, use the script from file. <br/>Default value: # Write your PowerShell commands here.<br/> Write-Host "Hello World"</td></tr>
<tr><td><code>errorActionPreference</code><br/>ErrorActionPreference</td><td>(Optional) Prepends the line <code>$ErrorActionPreference = 'VALUE'</code> at the top of your script<br/>Default value: stop</td></tr>
<tr><td><code>failOnStderr</code><br/>Fail on Standard Error</td><td>(Optional) If this is true, this task will fail if any errors are written to the error pipeline, or if any data is written to the Standard Error stream. Otherwise the task will rely on the exit code to determine failure<br/>Default value: false</td></tr>
<tr><td><code>ignoreLASTEXITCODE</code><br/>Ignore $LASTEXITCODE</td><td>(Optional) If this is false, the line <code>if ((Test-Path -LiteralPath variable:\\LASTEXITCODE)) { exit $LASTEXITCODE }</code> is appended to the end of your script. This will cause the last exit code from an external command to be propagated as the exit code of powershell. Otherwise the line is not appended to the end of your script<br/>Default value: false</td></tr>
<tr><td><code>pwsh</code><br/>Use PowerShell Core</td><td>(Optional) If this is true, then on Windows the task will use pwsh.exe from your PATH instead of powershell.exe<br/>Default value: false</td></tr>
<tr><td><code>workingDirectory</code><br/>Working directory</td><td>(Optional) Specify the working directory in which you want to run the command. If you leave it empty, the working directory is <code><a href="../../build/variables.md" data-raw-source="[$(Build.SourcesDirectory)](../../build/variables.md)">$(Build.SourcesDirectory)</a></code></td></tr>
<tr><td>Environment variables</td><td>A list of additional items to map into the process&#39;s environment. For example, secret variables are not automatically mapped. If you have a secret variable called <code>Foo</code>, you can map it in like this:<br/><br/>
<pre>
<code class="lang-yaml">
- powershell: echo $env:MYSECRET
  env:
    MySecret: $(Foo)
</code>
</pre>
</td>
</tr>
</table>

## Examples

### Hello World

Create `test.ps1` at the root of your repo:

```powershell
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
| :::image type="icon" source="media/powershell.png" border="false":::<br/>**Utility: PowerShell** | Run test.ps1.<br /><br />**Script filename**: `test.ps1` |

### Write a warning

Add the PowerShell task, set the **Type** to `inline`, and paste in this script:

 ```powershell
# Writes a warning to build summary and to log in yellow text
Write-Host  "##vso[task.LogIssue type=warning;]This is the warning"
```

### Write an error

Add the PowerShell task, set the **Type** to `inline`, and paste in this script:

 ```powershell
# Writes an error to build summary and to log in red text
Write-Host  "##vso[task.LogIssue type=error;]This is the error"
```

> [!TIP]
>
> If you want this error to fail the build, then add this line:
>
>  ```powershell
> exit 1
> ```

### ApplyVersionToAssemblies.ps1

[Use a script to customize your build pipeline](../../scripts/powershell.md)

### Call PowerShell script with multiple arguments

Create PowerShell script `test2.ps1`:

```powershell
param ($input1, $input2)
Write-Host "$input1 $input2"
```

In your YAML pipeline, call:

```yaml
- task: PowerShell@2
  inputs:
    targetType: 'filePath'
    filePath: $(System.DefaultWorkingDirectory)\test2.ps1
    arguments: > # Use this to avoid newline characters in multiline string
      -input1 "Hello"
      -input2 "World"
  displayName: 'Print Hello World'
```


## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn about PowerShell scripts?

[Scripting with Windows PowerShell](/powershell/scripting/overview)

[Microsoft Script Center (the Scripting Guys)](https://technet.microsoft.com/scriptcenter/bb410849.aspx)

[Windows PowerShell Tutorial](http://www.computerperformance.co.uk/powershell/index.htm)

[PowerShell.org](https://powershell.org/)

[!INCLUDE [include](../../includes/variable-set-in-script-qa.md)]

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
