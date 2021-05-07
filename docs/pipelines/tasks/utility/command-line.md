---
title: Command Line task
description: Execute tools from a command prompt when building code in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: 72C7D4F4-E626-42FF-BCA8-24D58D9A960F
ms.custom: seodec18
ms.date: 02/13/2020
monikerRange: '>= tfs-2015'
---

# Command Line task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task to run a program from the command prompt.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/CmdLineV2.md)]

The CmdLine task also has a shortcut syntax in YAML:

```yaml
- script: # script path or inline
  workingDirectory: #
  displayName: #
  failOnStderr: #
  env: { string: string } # mapping of environment variables to add
```
::: moniker-end

## Running batch and .CMD files

Azure Pipelines puts your inline script contents into a temporary batch file (.cmd) in order to run it.
When you want to run a batch file from another batch file in Windows CMD, you must use the `call` command, otherwise the first batch file is terminated.
This will result in Azure Pipelines running your intended script up until the first batch file, then running the batch file, then ending the step.
Additional lines in the first script wouldn't be run.
You should always prepend `call` before executing a batch file in an Azure Pipelines script step.

> [!IMPORTANT]
> You may not realize you're running a batch file.
> For example, `npm` on Windows, along with any tools that you install using `npm install -g`, are actually batch files.
> Always use `call npm <command>` to run NPM commands in a Command Line task on Windows.

## Arguments

|Argument|Description|
|--- |--- |
|`script`<br/>Script|(Required) Contents of the script you want to run <br/>Default value: `echo Write your commands here\n\necho Hello world\n"`|
|`workingDirectory`<br/>Working directory|(Optional) Specify the working directory in which you want to run the command. If you leave it empty, the working directory is [$(Build.SourcesDirectory)](../../build/variables.md).|
|`failOnStderr`<br/>Fail on Standard Error|If this is true, this task will fail if any errors are written to stderr|
|`env`<br/>Environment variables|(Optional) A list of additional items to map into the process's environment. <br/>For example, secret variables are not automatically mapped. If you have a secret variable called **`Foo`**, you can map it in as shown in the following example. |

```YAML
- script: echo %MYSECRET%
  env:
    MySecret: $(Foo)
```


## Example

#### [YAML](#tab/yaml/)
```yaml
steps:
- script: date /t
  displayName: Get the date
- script: dir
  workingDirectory: $(Agent.BuildDirectory)
  displayName: List contents of a folder
- script: |
    set MYVAR=foo
    set
  displayName: Set a variable and then display all
  env:
    aVarFromYaml: someValue
```

#### [Classic](#tab/classic/)
On the Build tab of a build pipeline, add these tasks:

<table>
   <tr>
      <td>
:::image type="icon" source="media/command-line.png" border="false":::
<br/><strong>Utility: Command Line</strong>
      </td>
<td>
<p>Get the date.</p>
<ul>
<li>Tool: <code>date</code></li>
 <li>Arguments: <code>/t</code></li>
</ul>
      </td>
</tr>
<tr>
<td>
:::image type="icon" source="media/command-line.png" border="false":::
<br/><strong>Utility: Command Line</strong></td>
<td>
<p>Display the operating system version.</p>
<ul>
<li>Tool: <code>ver</code></li>
 </ul>
</td>
        </tr>
        <tr>
      <td>
:::image type="icon" source="media/command-line.png" border="false":::
<br/><strong>Utility: Command Line</strong></td>
<td>
<p>Display the environment variables.</p>
<ul>
<li>Tool: <code>set</code></li>
</ul>
</td>
        </tr>
        <tr>
      <td>
:::image type="icon" source="media/command-line.png" border="false":::
<br/><strong>Utility: Command Line</strong></td>
<td>
<p>Display all files in all the folders created by the build pipeline.</p>
<ul>
<li>Tool: <code>dir</code></li>
 <li>Arguments: <code>/s</code></li>
<li>Advanced, Working folder: <code>$(Agent.BuildDirectory)</code></li>
</ul>
</td>
        </tr>
</table>



* * *
## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn Windows commands?

[An A-Z Index of the Windows CMD  command line](https://ss64.com/nt/)

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
