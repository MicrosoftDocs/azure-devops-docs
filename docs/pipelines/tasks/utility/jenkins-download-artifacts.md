---
title: Jenkins Download Artifacts
description: Download artifacts produced by a Jenkins job
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 86c37a92-59a7-444b-93c7-220fcf91e29c
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Utility: Jenkins Download Artifacts

![](_img/jenkinsdownloadartifacts.png) Download artifacts produced by a Jenkins job

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/JenkinsDownloadArtifacts.1.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Jenkins service endpoint</td><td>(Required) Select the service endpoint for your Jenkins instance.  To create one, click the Manage link and create a new Jenkins Service Endpoint.</td></tr>
<tr><td>Job name</td><td>(Required) The name of the Jenkins job to download artifacts from.  This must exactly match the job name on the Jenkins server.</td></tr>
<tr><td>Jenkins job type</td><td>(Optional) Jenkins job type, detected automatically.</td></tr>
<tr><td>Save to</td><td>(Required) Jenkins artifacts will be downloaded and saved to this directory.  This directory will be created if it does not exist.</td></tr>
<tr><td>Download artifacts produced by</td><td>(Required) Download artifacts produced by the last successful build, or from a specific build instance.</td></tr>
<tr><td>Jenkins build number</td><td>(Required) Download artifacts produced by this build.</td></tr>
<tr><td>Item Pattern</td><td>(Optional) Specify files to be downloaded as multi line minimatch pattern. [More Information](https://aka.ms/minimatchexamples) <p>The default pattern (\*\*) will download all files across all artifacts produced by the Jenkins job. To download all files within artifact drop use drop/**.</p></td></tr>
<tr><td>Download Commits and WorkItems</td><td>(Optional) Enables downloading the commits and workitem details associated with the Jenkins Job</td></tr>
<tr><td>Download commits and workitems from</td><td>(Optional) Optional start build number for downloading commits and work items. If provided, all commits and work items between start build number and build number given as input to download artifacts will be downloaded.</td></tr>
<tr><td>Commit and WorkItem FileName</td><td>(Optional) Optional file name suffix for commits and workitem attachment. Attachment will be created with commits_{suffix}.json and workitem_{suffix}.json. If this input is not provided attachments will be create with the name commits.json and workitems.json</td></tr>
<tr><td>Artifacts are propagated to Azure</td><td>(Optional) Check this if Jenkins artifacts were propagated to Azure. To upload Jenkins artifacts to azure, refer to this [Jenkins plugin](https://wiki.jenkins.io/display/JENKINS/Windows+Azure+Storage+Plugin)</td></tr>
<tr><td>Artifact Provider</td><td>(Required) Choose the external storage provider used in Jenkins job to upload the artifacts.</td></tr>
<tr><td>Azure Subscription</td><td>(Required) Choose the Azure Resource Manager subscription for the artifacts.</td></tr>
<tr><td>Storage Account Name</td><td>(Required) Azure Classic and Resource Manager stoarge accounts are listed. Select the Storage account name in which the artifacts are propagated.</td></tr>
<tr><td>Container Name</td><td>(Required) Name of the container in the storage account to which artifacts are uploaded.</td></tr>
<tr><td>Common Virtual Path</td><td>(Optional) Path to the artifacts inside the Azure storage container.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
