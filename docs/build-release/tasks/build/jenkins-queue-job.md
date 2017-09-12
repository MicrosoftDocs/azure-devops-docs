---
title: Jenkins Queue Job build and release task
description: Queue a job on a Jenkins server build and release task for Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: B0C3028E-B5DF-436D-B888-A4A8FA2627A0
ms.manager: douge
ms.author: alewis
ms.date: 08/30/2016
---

# Build: Jenkins Queue Job

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

![](_img/jenkins-queue-job.png) Queue a job on a Jenkins server

## Demands

None

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>

<tr>
<td>Jenkins service endpoint</td>
<td>
<p>Select the service endpoint for your Jenkins instance.  To create one, click **Manage** and create a new Jenkins Service Endpoint.</p>
</td>
</tr>

<tr>
<td>Job name</td>
<td>
<p>The name of the Jenkins job to queue.  This must exactly match the job name on the Jenkins server.</p>
</td>
</tr>

<tr>
<td>Capture console output and wait for completion</td>
<td>
<p>If selected, this step will capture the Jenkins build console output, wait for the Jenkins build to complete, and succeed/fail based on the Jenkins build result.  Otherwise, once the Jenkins job is successfully queued, this step will successfully complete without waiting for the Jenkins build to run.</p>
</td>
</tr>

<tr>
<td>Capture pipeline output and wait for pipeline completion</td>
<td>
<p>This option is similar to capture console output except it will capture the output for the entire Jenkins pipeline, wait for completion for the entire pipeline, and succeed/fail based on the pipeline result.</p>
</td>
</tr>

<tr>
<td>Parameterized job</td>
<td>
<p>Select this option if the Jekins job requires parameters.</p>
</td>
</tr>

<tr>
<td>Job parameters</td>
<td>
<p>This option is available for parameterized jobs.  Specify job parameters, one per line, in the form <b>parameterName=parameterValue</b><p>To set a parameter to an empty value (useful for overriding a default value) leave off the paramter value, e.g. specify <b>parameterName=</b><p>Variables are supported, e.g. to define the <b>commitId</b> paramter to be the <b>git commit ID</b> for the build, use: <b>commitId=$(Build.SourceVersion)</b>.<p>Supported Jenkins parameter types are: <ul><li>Boolean</li><li>String</li><li>Choice</li><li>Password</li></ul></p>
</td>
</tr>

<tr>
<td>Trust server certificate</td>
<td>
<p>Selecting this option results in the Jenkins server's SSL certificate being trusted even if it is self-signed or cannot be validated by a Certificate Authority (CA).
</td>
</tr>

</table>

## Team Foundation Server Plug-in

You can use Team Foundation Server Plug-in (version 5.2.0 or newer) to automatically collect files from the Jenkins workspace and download them into the build. 

To set it up:

<ol>
<li>Install the [Team Foundation Server Plug-in](https://wiki.jenkins-ci.org/display/JENKINS/Team+Foundation+Server+Plugin) on the Jenkins server.
</li>
<li>On the Jenkins server, for each job you would like to collect results from, add the <b>Collect results for TFS/VSTS</b> <em>post-build action</em> and then configure it with one or more pairs of result type and include file pattern.
</li>
<li>On the Jenkins Queue Job build task enable the <b>Capture console output and wait for completion</b> to collect results from the root level job, or the <b>Capture pipeline output and wait for pipeline completion</b> to collect results from all pipeline jobs.
</ol>

Results will be downloaded to the <b>$(Build.StagingDirectory)/jenkinsResults/&lt;Job Name&gt;/team-results.zip</b> and extracted to this location.  Each set of result types collected by the plug-in, will be under the team-results directory, <b>$(Build.StagingDirectory)/jenkinsResults/&lt;Job Name&gt;/team-results/&lt;ResultType&gt;/</b>.  This is the directory where build results can be published by downstream tasks (e.g. Publish Test Results, and Publish Code Coverage Results).     


## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
