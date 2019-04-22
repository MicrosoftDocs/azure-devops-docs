---
title: Update Service Fabric App Versions task
description: Update the Service Fabric App versions in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 3034CEF8-215C-408E-AD0F-C41D3D9C2F72
ms.manager: jillfra
ms.custom: seodec18
ms.author: alewis
author: andyjlewis
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Update Service Fabric App Versions task

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

Use this task in a build or release pipeline to automatically update 
the versions of a packaged Service Fabric app.
This task appends a version suffix to all service and app versions, 
specified in the manifest files, in an Azure Service Fabric app package.

## Demands

None

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/ServiceFabricUpdateManifestsV2.md)]
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
<td>Application Package</td>
<td>
<p>The location of the Service Fabric application package to be deployed to the cluster.</p>
<ul>
<li>Example: `$(system.defaultworkingdirectory)/**/drop/applicationpackage`</li>
<li>Can include wildcards and variables.</li>
</ul>
</td>
</tr>

<tr>
<td>Version Value</td>
<td>
<p>The value appended to the versions in the manifest files. Default is `.$(Build.BuildNumber)`.</p>
<p>**Tip:** You can modify the [build number format](https://go.microsoft.com/fwlink/?LinkId=761520) directly or use a [logging command](https://go.microsoft.com/fwlink/?LinkId=821347) to dynamically set a variable in any format. For example, you can use `$(VersionSuffix)` defined in a PowerShell task:</p>
<p>`$versionSuffix = ".$([DateTimeOffset]::UtcNow.ToString('yyyyMMdd.HHmmss'))"`</p>
<p>`Write-Host "##vso[task.setvariable variable=VersionSuffix;]$versionSuffix"`</p>
</ul>
</td>
</tr>

<tr>
<td>Version Behavior</td>
<td>
<p>Specify whether to append the version value to existing values in the manifest files, or replace them.</p>
</td>
</tr>

<tr>
<td>Update only if changed</td>
<td>
<p>Select this check box if you want to append the new version suffix to only the packages that have changed from a previous build. If no changes are found, the version suffix from the previous build will be appended.</p>
<p>**Note:** By default, the compiler will create different outputs even if you made no changes. Use the [deterministic compiler flag](https://go.microsoft.com/fwlink/?LinkId=808668) to ensure builds with the same inputs produce the same outputs.</p>
</td>
</tr>

<tr>
<td>Package Artifact Name</td>
<td>
<p>The name of the artifact containing the application package from the previous build.</p>
</td>
</tr>

<tr>
<td>Log all changes</td>
<td>
<p>Select this check box to compare all files in every package and log if the file was added, removed, or if its content changed. Otherwise, compare files in a package only until the first change is found for potentially faster performance.</p>
</td>
</tr>

<tr>
<td>Compare against</td>
<td>
<p>Specify whether to compare against the last completed, successful build or against a specific build.</p>
</td>
</tr>

<tr>
<td>Build Number</td>
<td>
<p>If comparing against a specific build, the build number to use.</p>
</td>
</tr>

[!INCLUDE [control-options-arguments](../_shared/control-options-arguments.md)]
</table>

Also see: [Service Fabric Application Deployment task](../deploy/service-fabric-deploy.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
