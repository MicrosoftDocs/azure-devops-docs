---
title: Download Build Artifacts task
description: Download Build Artifacts task for use in a build or release pipeline
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: a433f589-fce1-4460-9ee6-44a624aeb1fb
ms.manager: mijacobs
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Download Build Artifacts task

**Azure Pipelines**

Use this task in a build or release pipeline to download build artifacts.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/DownloadBuildArtifactsV0.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>buildType</td><td>(Required) Download artifacts produced by the current build, or from a specific build.</td></tr>
<tr><td>project</td><td>(Required) The project from which to download the build artifacts</td></tr>
<tr><td>pipeline</td><td>(Required) Select the build pipeline name</td></tr>
<tr><td>specificBuildWithTriggering</td><td>(Optional) If true, this build task will try to download artifacts from the triggering build. If there is no triggering build from the specified pipeline, it will download artifacts from the build specified in the options below.</td></tr>
<tr><td>BuildVersionToDownload</td>
    <td>(Required) Specify which version of the build to download.
        Choose <code>latest</code> to download the latest available build version.
        Choose <code>latestFromBranch</code> to download the latest available build version of the branch specified by <code>branchName</code> and tags specified by <code>tags</code>.
        Choose <code>specific</code> to download the build version specified by <code>buildId</code>.
    </td></tr>
<tr><td>allowPartiallySucceededBuilds</td><td>(Optional) If checked, this build task will try to download artifacts whether the build is succeeded or partially succeeded.</td></tr>
<tr><td>branchName</td><td>(Required) Specify to filter on branch/ref name, for example: <code>refs/heads/develop</code>.</td></tr>
<tr><td>buildId</td><td>(Required) The build from which to download the artifacts</td></tr>
<tr><td>tags</td><td>(Optional) A comma-delimited list of tags. Only builds with these tags will be returned.</td></tr>
<tr><td>downloadType</td><td>(Required) Choose whether to download a single artifact or all artifacts of a specific build.</td></tr>
<tr><td>artifactName</td><td>(Required) The name of the artifact to download</td></tr>
<tr><td>itemPattern</td><td>(Optional) Specify files to be downloaded as multi line minimatch pattern. <a href="https://aka.ms/minimatchexamples" data-raw-source="[More Information](https://aka.ms/minimatchexamples)">More Information</a> <p>The default pattern <strong> will download all files across all artifacts in the build if the &quot;Specific files&quot; option is selected. To download all files within an artifact drop use <code>drop/</strong></code>.</p></td></tr>
<tr><td>downloadPath</td><td>(Required) Path on the agent machine where the artifacts will be downloaded</td></tr>
<tr><td>parallelizationLimit</td><td>(Optional) Number of files to download simultaneously</td></tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
