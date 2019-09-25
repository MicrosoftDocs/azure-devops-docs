---
title: .NET Core Tool Installer task
description: Acquires a specific version of .NET Core from the internet or the tools cache and adds it to the PATH
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.assetid: B0CE7256-7898-45D3-9CB5-176B752BFEA6
ms.manager: jillfra
ms.author: puagarw
author: pulkitaggarwl
ms.date: 5/2/2019
monikerRange: 'azure-devops'
---

# .NET Core Tool Installer task

**Azure Pipelines**

Use this task in a build or release pipeline to acquire a specific version of .NET Core from the Internet or the tools cache
and add it to the PATH. 

You can also use this task to change the version of .NET Core used in subsequent tasks like [.NET Core cli task](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/DotNetCoreCLIV2).

One other reason to use tool installer is if you want to decouple your pipeline from our update cycles to help avoid a pipeline run being broken due to a change we make to our agent software.

## Task Inputs

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>packageType</code><br/>Package to install</td><td>Please select whether to install only runtime or SDK<br/>Default value: sdk</td></tr>
<tr><td><code>version</code><br/>Version</td><td>Specify version of .NET Core SDK or runtime to install.<br/>Versions can be given in the following formats<li>2.x   =&gt; Install latest in major version.</li><li>2.2.x =&gt; Install latest in major and minor version</li><li>2.2.104 =&gt; Install exact version</li><br/>Find the value of <code>version</code> for installing SDK/Runtime, from the releases.json. The link to releases.json of that major.minor version can be found in <a href="https://github.com/dotnet/core/blob/master/release-notes/releases-index.json" data-raw-source="[**releases-index file.**](https://github.com/dotnet/core/blob/master/release-notes/releases-index.json)"><strong>releases-index file.</strong></a>. Like link to releases.json for 2.2 version is <a href="https://dotnetcli.blob.core.windows.net/dotnet/release-metadata/2.2/releases.json" data-raw-source="https://dotnetcli.blob.core.windows.net/dotnet/release-metadata/2.2/releases.json">https://dotnetcli.blob.core.windows.net/dotnet/release-metadata/2.2/releases.json</a></td></tr>
<tr><td><code>includePreviewVersions</code><br/>Include Preview Versions</td><td>Select if you want preview versions to be included while searching for latest versions, such as while searching 2.2.x. This setting is ignored if you specify an exact version, such as: 3.0.100-preview3-010431 <br/>Default value: false</td></tr>
<tr><td><code>installationPath</code><br/>Path To Install .Net Core</td><td>Specify where .Net Core SDK/Runtime should be installed. Different paths can have the following impact on .Net&#39;s behavior.<li>$(Agent.ToolsDirectory): This makes the version to be cached on the agent since this directory is not cleanup up across pipelines. All pipelines running on the agent, would have access to the versions installed previously using the agent.</li><li>$(Agent.TempDirectory): This can ensure that a pipeline doesn&#39;t use any cached version of .Net core since this folder is cleaned up after each pipeline.</li><li>Any other path: You can configure any other path given the agent process has access to the path. This will change the state of the machine and impact all processes running on it.<br/>Note that you can also configure Multi-Level Lookup setting which can configure .Net host&#39;s probing for a suitable version. <br/>Default value: $(Agent.ToolsDirectory)/dotnet</td></tr>
<tr><td><code>performMultiLevelLookup</code><br/>Perform Multi Level Lookup</td><td>This input is only applicable to Windows based agents. This configures the behavior of .Net host process for looking up a suitable shared framework.<li>false: (default) Only versions present in the folder specified in this task would be looked by the host process.</li><li>true: The host will attempt to look in pre-defined global locations using multi-level lookup.<br/>The default global locations are: <br/><b>For Windows:</b><br/>C:/Program Files/dotnet (64-bit processes)<br/>C:/Program Files (x86)/dotnet (32-bit process)</li> You can read more about it <a href="https://github.com/dotnet/core-setup/blob/master/Documentation/design-docs/multilevel-sharedfx-lookup.md" data-raw-source="[HERE](https://github.com/dotnet/core-setup/blob/master/Documentation/design-docs/multilevel-sharedfx-lookup.md)">HERE</a></td></tr>
</table>

This YAML example installs version 2.2.203 of .NET Core.

```YAML
steps:
- task: UseDotNet@2
  displayName: 'Use .NET Core sdk'
  inputs:
    packageType: sdk
    version: 2.2.203
    installationPath: $(Agent.ToolsDirectory)/dotnet
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
