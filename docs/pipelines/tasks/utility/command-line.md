---
title: Command Line task
description: Execute tools from a command prompt when building code in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 72C7D4F4-E626-42FF-BCA8-24D58D9A960F
ms.manager: jillfra
ms.custom: seodec18
ms.author: macoope
author: vtbassmatt
ms.date: 02/15/2019
monikerRange: '>= tfs-2015'
---

# Command Line task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

Use this task in a build or release pipeline to run a program from the command prompt.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../_shared/concept-rename-note.md)]

::: moniker-end

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/CmdLineV2.md)]

The CmdLine task also has a shortcut syntax in YAML:

```yaml
- script: # script path or inline
  workingDirectory: #
  displayName: #
  failOnStderr: #
  env: { string: string } # mapping of environment variables to add
```
::: moniker-end

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Script</td>
<td>Contents of the script you want to run</td>
</tr>
<tr>
<th colspan="2">Optional</th>
</tr>
<tr>
<td>Working directory</td>
<td>Specify the working directory in which you want to run the command. If you leave it empty, the working directory is <a href="../../build/variables.md" data-raw-source="[$(Build.SourcesDirectory)](../../build/variables.md)">$(Build.SourcesDirectory)</a>.</td>
</tr>
<tr>
<td>Fail on standard error</td>
<td>If this is <code>true</code>, this task will fail if any errors are written to <code>stderr</code>.</td>
</tr>
<tr>
<td>Environment variables</td>
<td>A list of additional items to map into the process&#39;s environment. For example, secret variables are not automatically mapped. If you have a secret variable called <code>Foo</code>, you can map it in like this:<br/><br/>
<code>yaml
- script: echo %MYSECRET%
  env:
    MySecret: $(Foo)</code>
</td>
</tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

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

<img src="_img/command-line.png" alt=""/>

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

<img src="_img/command-line.png" alt=""/>

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

<img src="_img/command-line.png" alt=""/>

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

<img src="_img/command-line.png" alt=""/>

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

---

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn Windows commands?

[An A-Z Index of the Windows CMD  command line](http://ss64.com/nt/)

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../_shared/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
