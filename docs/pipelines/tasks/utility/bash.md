---
title: Bash task
description: Run a Bash script on macOS, Linux, or Windows
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 6C731C3C-3C68-459A-A5C9-BDE6E6595B5B
ms.manager: jillfra
ms.custom: seodec18
ms.author: macoope
author: vtbassmatt
ms.date: 07/18/2019
monikerRange: 'azure-devops'
---

# Bash task

**Azure Pipelines**

Use this task in a build or release pipeline to run a Bash script on macOS, Linux, or Windows. 

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/BashV3.md)]

The Bash task also has a shortcut syntax in YAML:

```yaml
- bash: # script path or inline
  workingDirectory: #
  displayName: #
  failOnStderr: #
  env:  # mapping of environment variables to add
```
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Type</td><td>Sets whether this is an inline script or a path to a .sh file</td></tr>
<tr><td>File path</td><td>Path of the script to execute. Must be a fully qualified path or relative to $(System.DefaultWorkingDirectory). Required if Type is <code>filePath</code>.</td></tr>
<tr><td>Arguments</td><td>Arguments passed to the Bash script.</td></tr>
<tr><td>Script</td><td>Contents of the script. Required if Type is <code>inline</code></td></tr>
<tr><td>Working Directory</td><td>Specify the working directory in which you want to run the command. If you leave it empty, the working directory is <a href="../../build/variables.md" data-raw-source="[$(Build.SourcesDirectory)](../../build/variables.md)">$(Build.SourcesDirectory)</a>.</td></tr>
<tr>
<td>Fail on standard error</td>
<td>If this is <code>true</code>, this task will fail if any errors are written to <code>stderr</code>.</td>
</tr>
<tr>
<td>Don't load the profile/initialization files</td>
<td>If this is <code>true</code>, the task will skip loading the system-wide startup file <code>/etc/profile</code> and any user-level profile initialization files.</td>
</tr>
<tr>
<td>Don't read the <code>~/.bashrc</code> file</td>
<td>If this is <code>true</code>, the task will not process <code>.bashrc</code> from the user's home directory.</td>
</tr>
<tr>
<td>Environment variables</td>
<td>A list of additional items to map into the process&#39;s environment. For example, secret variables are not automatically mapped. If you have a secret variable called <code>Foo</code>, you can map it in like this:<br/><br/>
<pre><code class="lang-yaml">
steps:
  - task: Bash@3
    inputs:
      targetType: 'inline'
      script: echo $MYSECRET
    env:
      MySecret: $(Foo)
</code></pre>
<br/><br/>This is equivalent to:<br/><br/>
<pre><code class="lang-yaml">
steps:
  - script: echo $MYSECRET
    env:
      MySecret: $(Foo)
</code></pre>
</td>
</tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
