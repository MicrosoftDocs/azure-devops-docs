---
title: Jenkins Queue Job build and release task
ms.custom: seodec18
description: Queue a job on a Jenkins server build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: B0C3028E-B5DF-436D-B888-A4A8FA2627A0
ms.author: ronai
author: RoopeshNair
ms.date: 12/17/2019
monikerRange: '>= tfs-2017'
---

# Jenkins Queue Job task

[!INCLUDE [temp](../../includes/version-tfs-2017-rtm.md)]

Use this task to queue a job on a Jenkins server.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/JenkinsQueueJobV2.md)]

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
      <td><code>serverEndpoint</code><br/>Jenkins service connection</td>
      <td>
         <p>(Required) Select the service connection for your Jenkins instance.  To create one, click <strong>Manage</strong> and create a new Jenkins service connection.</p>
      </td>
   </tr>
   <tr>
      <td><code>jobName</code><br/>Job name</td>
      <td>
         <p>(Required) The name of the Jenkins job to queue.  This job name must exactly match the job name on the Jenkins server.</p>
      </td>
   </tr>
   <tr>
      <td><code>isMultibranchJob</code><br/>Job is of multibranch pipeline type</td>
      <td>
         <p>(Optional) This job is of multibranch pipeline type.  If selected, enter the appropriate branch name. Requires Team Foundation Server Plugin for Jenkins v5.3.4 or later</p><br/>Default value: false
      </td>
   </tr>
   <tr>
      <td><code>multibranchPipelineBranch</code><br/>Multibranch pipeline branch</td>
      <td>
         <p>(Required) Queue this multibranch pipeline job on the specified branch. Requires Team Foundation Server Plugin for Jenkins v5.3.4 or later</p>
      </td>
   </tr>
   <tr>
      <td><code>captureConsole</code><br/>Capture console output and wait for completion</td>
      <td>
         <p>(Required) If selected, this task will capture the Jenkins build console output, wait for the Jenkins build to complete, and succeed/fail based on the Jenkins build result.  Otherwise, once the Jenkins job is successfully queued, this task will successfully complete without waiting for the Jenkins build to run.</p><br/>Default value: true
      </td>
   </tr>
   <tr>
      <td><code>capturePipeline</code><br/>Capture pipeline output and wait for pipeline completion</td>
      <td>
         <p>(Required) This option is similar to capture console output except it will capture the output for the entire Jenkins pipeline, wait for completion for the entire pipeline, and succeed/fail based on the pipeline result.</p><br/>Default value: true
      </td>
   </tr>
   <tr>
      <td><code>isParameterizedJob</code><br/>Parameterized job</td>
      <td>
         <p>(Required) Select if the Jenkins job accepts parameters. This job should be selected even if all default parameter values are used and no parameters are specified.</p><br/>Default value: false
      </td>
   </tr>
   <tr>
      <td><code>jobParameters</code><br/>Job parameters</td>
      <td>
         <p>This option is available for parameterized jobs. Specify job parameters, one per line, in the form <b>parameterName=parameterValue</b> preceded by | on the first line. Example:
         <p>jobParameters: | </br>
            parameter1=value1 </br>
            parameter2=value2 </br>
         </p>
         <p>To set a parameter to an empty value (useful for overriding a default value), omit the parameter value. For example, specify <b>parameterName=</b></p>
         <p>Variables are supported. For example, to define the <b>commitId</b> parameter to be the <b>git commit ID</b> for the build, use: <b>commitId=$(Build.SourceVersion)</b>.</p>
         <p>Supported Jenkins parameter types are:
            <ul>
              <li>Boolean</li>
              <li>String</li>
              <li>Choice</li>
              <li>Password</li></ul>
              </p>
       </td>
   </tr>
</table>

## Team Foundation Server Plug-in

You can use Team Foundation Server Plug-in (version 5.2.0 or newer) to automatically collect files from the Jenkins workspace and download them into the build.

To set it up:

1. Install the [Team Foundation Server Plug-in](https://www.jenkins.io/doc/pipeline/steps/tfs/) on the Jenkins server.

2. On the Jenkins server, for each job you would like to collect results from, add the **Collect results for Azure Pipelines/TFS** post-build action and then configure it with one or more pairs of result type and include file pattern.

3. On the Jenkins Queue Job, build task enable the **Capture console output and wait for completion** to collect results from the root level job, or the **Capture pipeline output and wait for pipeline completion** to collect results from all pipeline jobs. 

Results will be downloaded to the **$(Build.StagingDirectory)/jenkinsResults/Job Name/team-results.zip** and extracted to this location. Each set of result types collected by the plug-in, will be under the team-results directory, **$(Build.StagingDirectory)/jenkinsResults/Job Name/team-results/ResultType/**. This is the directory where build results can be published by downstream tasks (for example, Publish Test Results, and Publish Code Coverage Results).                 

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
