---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/13/2020
---
<a id="agent-variables"></a>

##  Agent variables (DevOps Server 2022)

> [!NOTE]
> You can use agent variables as environment variables in your scripts and as parameters in your build tasks.
> You cannot use them to customize the build number or to apply a version control label or tag.

<table>
<tr><th>Variable</th><th>Description</th></tr>

<tr>
<td>Agent.BuildDirectory</td>
<td>
<p>The local path on the agent where all folders for a given build pipeline are created. This variable has the same value as `Pipeline.Workspace`.</p>
<p>For example: `/home/vsts/work/1`</p>
</td>
</tr>

<tr>
<td>Agent.ContainerMapping</td>
<td>
<p>A mapping from container resource names in YAML to their Docker IDs at runtime.</p>
<p>For example: `<pre>
{
  "one_container": {
    "id": "bdbb357d73a0bd3550a1a5b778b62a4c88ed2051c7802a0659f1ff6e76910190"
  },
  "another_container": {
    "id": "82652975109ec494876a8ccbb875459c945982952e0a72ad74c91216707162bb"
  }
}
</pre>`
</p>
</td>
</tr>

<tr>
<td>Agent.HomeDirectory</td>
<td>The directory the agent is installed into. This contains the agent software. For example: `c:\agent`.</td>
</tr>

<tr>
<td>Agent.Id</td>
<td>The ID of the agent.</td>
</tr>

<tr>
<td>Agent.JobName</td>
<td>The name of the running job. This will usually be &quot;Job&quot; or &quot;__default&quot;, but in multi-config scenarios, will be the configuration.</td>
</tr>

<tr>
<td>Agent.JobStatus</td>
<td>The status of the build.
    <ul>
        - `Canceled`
        - `Failed`
        - `Succeeded`
        - `SucceededWithIssues` (partially successful)
    </ul>
<p>The environment variable should be referenced as `AGENT_JOBSTATUS`. The older `agent.jobstatus` is available for backwards compatibility.</p>
</td>
</tr>

<tr>
<td>Agent.MachineName</td>
<td>The name of the machine on which the agent is installed.</td>
</tr>

<tr>
<td>Agent.Name</td>
<td>
<p>The name of the agent that is registered with the pool.</p>
<p>If you're using a self-hosted agent, then this name is specified by you. See <a href="/azure/devops/pipelines/agents/agents" data-raw-source="[agents](../../agents/agents.md)">agents</a>.</p>
</td>
</tr>

<tr>
<td>Agent.OS</td>
<td>
The operating system of the agent host. Valid values are:
<ul>
- `Windows_NT`
- `Darwin`
- `Linux`
</ul>
If you&#39;re running in a container, the agent host and container may be running different operating systems.
</td>
</tr>

<tr>
<td>Agent.OSArchitecture</td>
<td>
The operating system processor architecture of the agent host. Valid values are:
<ul>
- `X86`
- `X64`
- `ARM`
</ul>
</td>
</tr>

<tr>
<td>Agent.TempDirectory</td>
<td>
<p>A temporary folder that is cleaned after each pipeline job. This directory is used by tasks such as <a href="/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2">.NET Core CLI task</a> to hold temporary items like test results before they're published.</p>
<p>For example: `/home/vsts/work/_temp` for Ubuntu</p>
</td>
</tr>

<tr>
<td>Agent.ToolsDirectory</td>
<td>
The directory used by tasks such as <a href="/azure/devops/pipelines/tasks/reference/node-tool-v0" data-raw-source="[Node Tool Installer](/azure/devops/pipelines/tasks/reference/node-tool-v0)">Node Tool Installer</a> and <a href="/azure/devops/pipelines/tasks/reference/use-python-version-v0" data-raw-source="[Use Python Version](/azure/devops/pipelines/tasks/reference/use-python-version-v0)">Use Python Version</a> to switch between multiple versions of a tool.
These tasks add tools from this directory to `PATH` so that subsequent build steps can use them.
<br><br>
Learn about <a href="https://go.microsoft.com/fwlink/?linkid=2008884" data-raw-source="[managing this directory on a self-hosted agent](https://go.microsoft.com/fwlink/?linkid=2008884)">managing this directory on a self-hosted agent</a>.
</td>
</tr>

<tr>
<td>Agent.WorkFolder</td>
<td>
The working directory for this agent.
For example: `c:\agent_work`.
<br><br>
Note: This directory isn't guaranteed to be writable by pipeline tasks (for example, when mapped into a container)
</td>
</tr>

</table>

## Build variables (DevOps Server 2022)

<a id="build-variables"></a>

<table>
<tr><th>Variable</th><th>Description</th><th>Available in <a href="../../process/templates.md">templates</a>?</th></tr>

<tr>
<td>Build.ArtifactStagingDirectory</td>
<td>


The local path on the agent where any artifacts are copied to before being pushed to their destination. For example: `c:\agent_work\1\a`
<br><br>
A typical way to use this folder is to publish your build artifacts with the <a href="/azure/devops/pipelines/tasks/reference/copy-files-v2" data-raw-source="[Copy files](/azure/devops/pipelines/tasks/reference/copy-files-v2)">Copy files</a> and <a href="/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1" data-raw-source="[Publish build artifacts](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1)">Publish build artifacts</a> tasks.
<br><br>
Note: Build.ArtifactStagingDirectory and Build.StagingDirectory are interchangeable. This directory is purged before each new build, so you don&#39;t have to clean it up yourself.
<br><br> 
See <a href="/azure/devops/pipelines/build/artifacts" data-raw-source="[Artifacts in Azure Pipelines](../../artifacts/artifacts-overview.md)">Artifacts in Azure Pipelines</a>.
<br><br>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.

</td>
<td>No</td>
</tr>

<tr>
<td>Build.BuildId</td>
<td>The ID of the record for the completed build.</td>
<td>No</td>
</tr>

<tr>
<td>Build.BuildNumber</td>
<td>The name of the completed build, also known as the run number. You can specify <a href="/azure/devops/pipelines/process/run-number" data-raw-source="[what is included](../run-number.md)">what is included</a> in this value.<br><br>
A typical use of this variable is to make it part of the label format, which you specify on the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[repository tab](../repos/index.md)">repository tab</a>.
<br><br>

Note: This value can contain whitespace or other invalid label characters. In these cases, the <a href="/azure/devops/repos/tfvc/labels-command" data-raw-source="[label format](../repos/tfvc/labels-command.md)">label format</a> fails.

<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.BuildUri</td>
<td>The URI for the build. For example: `vstfs:///Build/Build/1430`.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.BinariesDirectory</td>
<td>The local path on the agent you can use as an output folder for compiled binaries.
<br><br>
By default, new build pipelines aren't set up to clean this directory. You can define your build to clean it up on the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[Repository tab](../repos/index.md)">Repository tab</a>.
<br><br>
For example: `c:\agent_work\1\b`.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.ContainerId</td>
<td>The ID of the container for your artifact. When you upload an artifact in your pipeline, it's added to a container that is specific for that particular artifact.</td>
<td>No</td>
</tr>

<tr>
<td>Build.CronSchedule.DisplayName</td>
<td>The `displayName` of the cron schedule that triggered the pipeline run. This variable is only set if the pipeline run is triggered by a YAML scheduled trigger. For more information, see <a href="/azure/devops/pipelines/yaml-schema/schedules-cron#buildcronscheduledisplayname-variable">schedules.cron definition - Build.CronSchedule.DisplayName variable</a>. This variable is available in Azure DevOps Server 2022.1 and higher.</td>
<td>Yes</td>
</tr>

<tr>
<td>Build.DefinitionName</td>
<td>The name of the build pipeline.
<br><br>


Note: This value can contain whitespace or other invalid label characters. In these cases, the <a href="/azure/devops/repos/tfvc/labels-command" data-raw-source="[label format](../repos/tfvc/labels-command.md)">label format</a> fails.

</td>
<td>Yes</td>
</tr>

<tr>
<td>Build.DefinitionVersion</td>
<td>The version of the build pipeline.</td>
<td>Yes</td>
</tr>

<tr>
<td>Build.QueuedBy</td>
<td>See &quot;<a href="#identity_values" data-raw-source="[How are the identity variables set?](#identity_values)">How are the identity variables set?</a>&quot;.
<br><br>


Note: This value can contain whitespace or other invalid label characters. In these cases, the <a href="/azure/devops/repos/tfvc/labels-command" data-raw-source="[label format](../repos/tfvc/labels-command.md)">label format</a> fails.

</td>
<td>Yes</td>
</tr>

<tr>
<td>Build.QueuedById</td>
<td>See &quot;<a href="#identity_values" data-raw-source="[How are the identity variables set?](#identity_values)">How are the identity variables set?</a>&quot;.</td>
<td>Yes</td>
</tr>

<tr>
<td>Build.Reason</td>
<td>The event that caused the build to run.
<ul>
- `Manual`: A user manually queued the build.</br>
- `IndividualCI`: <strong>Continuous integration (CI)</strong> triggered by a Git push or a TFVC check-in.</br>
- `BatchedCI`: <strong>Continuous integration (CI)</strong> triggered by a Git push or a TFVC check-in, and the <strong>Batch changes</strong> was selected.</br>
- `Schedule`: <strong>Scheduled</strong> trigger.</br>
- `ValidateShelveset`: A user manually queued the build of a specific TFVC shelveset.</br>
- `CheckInShelveset`: <strong>Gated check-in</strong> trigger.</br>
- `PullRequest`: The build was triggered by a Git branch policy that requires a build.</br>
- `BuildCompletion`: The build was <a href="/azure/devops/pipelines/process/pipeline-triggers" data-raw-source="[triggered by another build](../../process/pipeline-triggers.md)">triggered by another build</a></br>
- `ResourceTrigger`: The build was <a href="/azure/devops/pipelines/process/resources#resources-pipelines" data-raw-source="[triggered by a resource trigger](../../process/resource.md)">triggered by a resource trigger</a> or it was <a href="/azure/devops/pipelines/process/pipeline-triggers" data-raw-source="[triggered by another build](../../process/pipeline-triggers.md)">triggered by another build</a>.</br>
</ul>
See <a href="/azure/devops/pipelines/build/triggers" data-raw-source="[Build pipeline triggers](../triggers.md)">Build pipeline triggers</a>, <a href="/azure/devops/repos/git/branch-policies" data-raw-source="[Improve code quality with branch policies](../../../repos/git/branch-policies.md)">Improve code quality with branch policies</a>.
</td>
<td>Yes</td>
</tr>

<tr><br/><td>Build.Repository.Clean</td>
<td>The value you&#39;ve selected for <strong>Clean</strong> in the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[source repository settings](../repos/index.md)">source repository settings</a>.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
<td>No</td>
</tr>

<tr>
<td>Build.Repository.LocalPath</td>
<td>


The local path on the agent where your source code files are downloaded. For example: `c:\agent_work\1\s`<br><br>By default, new build pipelines update only the changed files. You can modify how files are downloaded on the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[Repository tab](../repos/index.md)">Repository tab</a>.

Important note: If you check out only one Git repository, this path is the exact path to the code.
If you check out multiple repositories, the behavior is as follows (and might differ from the value of the Build.SourcesDirectory variable):
<ul>
- If the checkout step for the self (primary) repository has no custom checkout path defined, or the checkout path is the multi-checkout default path `$(Pipeline.Workspace)/s/&lt;RepoName&gt;` for the self repository, the value of this variable reverts to its default value, which is `$(Pipeline.Workspace)/s`.</br>
- If the checkout step for the self (primary) repository does have a custom checkout path defined (and it's not its multi-checkout default path), this variable contains the exact path to the self repository.</br>
</ul>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.Repository.ID</td>
<td>The unique identifier of the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[repository](../repos/index.md)">repository</a>.
<br/><br/>
This won&#39;t change, even if the name of the repository does.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
<td>No</td>
</tr>

<tr>
<td>Build.Repository.Name</td>
<td>The name of the triggering <a href="/azure/devops/pipelines/repos/index" data-raw-source="[repository](../repos/index.md)">repository</a>.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
<td>No</td>
</tr>

<tr>
<td>Build.Repository.Provider</td>
<td>The type of the triggering <a href="/azure/devops/pipelines/repos/index" data-raw-source="[repository](../repos/index.md)">repository</a>.
<ul>
- `TfsGit`: <a href="/azure/devops/repos/git/overview" data-raw-source="[TFS Git repository](../../../repos/git/index.yml)">TFS Git repository</a>
- `TfsVersionControl`: <a href="/azure/devops/repos/tfvc/overview" data-raw-source="[Team Foundation Version Control](../../../repos/tfvc/what-is-tfvc.md)">Team Foundation Version Control</a>
- `Git`: Git repository hosted on an external server
- `GitHub`
- `Svn`: Subversion
</ul>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.Repository.Tfvc.Workspace</td>
<td>Defined if your <a href="/azure/devops/pipelines/repos/index" data-raw-source="[repository](../repos/index.md)">repository</a> is Team Foundation Version Control. The name of the <a href="/azure/devops/repos/tfvc/create-work-workspaces" data-raw-source="[TFVC workspace](../../../repos/tfvc/create-work-workspaces.md)">TFVC workspace</a> used by the build agent.
<br><br><br/>For example, if the Agent.BuildDirectory is `c:\agent_work\12` and the Agent.Id is `8`, the workspace name could be: `ws_12_8`
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.Repository.Uri</td>
<td>The URL for the triggering repository. For example:
<ul>
- Git: `<a href="https://dev.azure.com/fabrikamfiber/_git/Scripts" data-raw-source="https://dev.azure.com/fabrikamfiber/_git/Scripts">https://dev.azure.com/fabrikamfiber/_git/Scripts</a>`
- TFVC: `<a href="https://dev.azure.com/fabrikamfiber/" data-raw-source="https://dev.azure.com/fabrikamfiber/">https://dev.azure.com/fabrikamfiber/</a>`
</ul>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.RequestedFor</td>
<td>See &quot;<a href="#identity_values" data-raw-source="[How are the identity variables set?](#identity_values)">How are the identity variables set?</a>&quot;.
<br><br>


Note: This value can contain whitespace or other invalid label characters. In these cases, the <a href="/azure/devops/repos/tfvc/labels-command" data-raw-source="[label format](../repos/tfvc/labels-command.md)">label format</a> fails.

</td>
<td>Yes</td>
</tr>

<tr>
<td>Build.RequestedForEmail</td>
<td>See &quot;<a href="#identity_values" data-raw-source="[How are the identity variables set?](#identity_values)">How are the identity variables set?</a>&quot;.</td>
<td>Yes</td>
</tr>

<tr>
<td>Build.RequestedForId</td>
<td>See &quot;<a href="#identity_values" data-raw-source="[How are the identity variables set?](#identity_values)">How are the identity variables set?</a>&quot;.</td>
<td>Yes</td>
</tr>

<tr>
<td>Build.SourceBranch</td>
<td>The branch of the triggering repo the build was queued for. Some examples:
<ul>
- Git repo branch: `refs/heads/main`</br>
- Git repo pull request: `refs/pull/1/merge`</br>
- TFVC repo branch: `$/teamproject/main`</br>
- TFVC repo gated check-in: `Gated_2016-06-06_05.20.51.4369;username@live.com`</br>
- TFVC repo shelveset build: `myshelveset;username@live.com`</br>
- When your pipeline is triggered by a tag: `refs/tags/your-tag-name`</br>
</ul>
When you use this variable in your build number format, the forward slash characters (`/`) are replaced with underscore characters `&#095;`).
<br><br>
Note: In TFVC, if you're running a gated check-in build or manually building a shelveset, you can't use this variable in your build number format.
</td>
<td>Yes</td>
</tr>

<tr>
<td>Build.SourceBranchName</td>
<td>The name of the branch in the triggering repo the build was queued for.
<ul>
- Git repo branch, pull request, or tag: The last path segment in the ref. For example, in `refs/heads/main` this value is `main`. In `refs/heads/feature/tools` this value is `tools`. In `refs/tags/your-tag-name` this value is `your-tag-name`.</br>
- TFVC repo branch: The last path segment in the root server path for the workspace. For example, in `$/teamproject/main` this value is `main`.</br>
- TFVC repo gated check-in or shelveset build is the name of the shelveset. For example, `Gated_2016-06-06_05.20.51.4369;username@live.com` or `myshelveset;username@live.com`.</br>
</ul>
Note: In TFVC, if you're running a gated check-in build or manually building a shelveset, you can't use this variable in your build number format.
</td>
<td>Yes</td>
</tr>

<tr>
<td>Build.SourcesDirectory</td>
<td>


The local path on the agent where your source code files are downloaded. For example: `c:\agent_work\1\s`<br><br>By default, new build pipelines update only the changed files. 

Important note: If you check out only one Git repository, this path is the exact path to the code. If you check out multiple repositories, it reverts to its default value, which is `$(Pipeline.Workspace)/s`, even if the self (primary) repository is checked out to a custom path different from its multi-checkout default path `$(Pipeline.Workspace)/s/&lt;RepoName&gt;` (in this respect, the variable differs from the behavior of the Build.Repository.LocalPath variable).
<br><br>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.SourceVersion</td>
<td>The latest version control change of the triggering repo that is included in this build.
<ul>
- Git: The <a href="/azure/devops/repos/git/commits" data-raw-source="[commit](../../../repos/git/commits.md)">commit</a> ID.</br>
- TFVC: the <a href="/azure/devops/repos/tfvc/find-view-changesets" data-raw-source="[changeset](../../../repos/tfvc/find-view-changesets.md)">changeset</a>.</br>
</ul>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>Yes</td>
</tr>

<tr>
<td>Build.SourceVersionMessage</td>
<td>The comment of the commit or changeset for the triggering repo. We truncate the message to the first line or 200 characters, whichever is shorter.

The `Build.SourceVersionMessage` corresponds to the message on `Build.SourceVersion` commit. The `Build.SourceVersion` commit for a PR build is the merge commit (not the commit on the source branch).

This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
Also, this variable is only available on the step level and is not available in the job or stage levels (that is, the message isn't extracted until the job starts and the code is checked out).

Note: This variable is available in TFS 2015.4.

> [!NOTE]
> The **Build.SourceVersionMessage** variable does not work with classic build pipelines in Bitbucket repositories when **Batch changes while a build is in progress** is enabled.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.StagingDirectory</td>
<td>


The local path on the agent where any artifacts are copied to before being pushed to their destination. For example: `c:\agent_work\1\a`
<br><br>
A typical way to use this folder is to publish your build artifacts with the <a href="/azure/devops/pipelines/tasks/reference/copy-files-v2" data-raw-source="[Copy files](/azure/devops/pipelines/tasks/reference/copy-files-v2)">Copy files</a> and <a href="/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1" data-raw-source="[Publish build artifacts](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1)">Publish build artifacts</a> tasks.
<br><br>
Note: Build.ArtifactStagingDirectory and Build.StagingDirectory are interchangeable. This directory is purged before each new build, so you don&#39;t have to clean it up yourself.
<br><br> 
See <a href="/azure/devops/pipelines/build/artifacts" data-raw-source="[Artifacts in Azure Pipelines](../../artifacts/artifacts-overview.md)">Artifacts in Azure Pipelines</a>.
<br><br>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.

</td>
<td>No</td>
</tr>

<tr>
<td>Build.Repository.Git.SubmoduleCheckout</td>
<td>The value you&#39;ve selected for <strong>Checkout submodules</strong> on the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[repository tab](../repos/index.md)">repository tab</a>. With multiple repos checked out, this value tracks the triggering repository's setting.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
<td>No</td>
</tr>

<tr>
<td>Build.SourceTfvcShelveset</td>
<td>Defined if your <a href="/azure/devops/pipelines/repos/index" data-raw-source="[repository](../repos/index.md)">repository</a> is Team Foundation Version Control.
<br/><br/><br/>If you're running a <a href="/azure/devops/pipelines/repos/tfvc#gated" data-raw-source="[gated build](../../repos/tfvc.md#gated)">gated build</a> or a <a href="/azure/devops/pipelines/create-first-pipeline#queueabuild" data-raw-source="[shelveset build](../../create-first-pipeline.md#queueabuild)">shelveset build</a>, this is set to the name of the <a href="/azure/devops/repos/tfvc/suspend-your-work-manage-your-shelvesets" data-raw-source="[shelveset](../../../repos/tfvc/suspend-your-work-manage-your-shelvesets.md)">shelveset</a> you're building.
<br/><br/>
Note: This variable yields a value that is invalid for build use in a build number format.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.TriggeredBy.BuildId</td>
<td>If the build was <a href="/azure/devops/pipelines/process/pipeline-triggers" data-raw-source="[triggered by another build](../../process/pipeline-triggers.md)">triggered by another build</a>, then this variable is set to the BuildID of the triggering build. In Classic pipelines, this variable is triggered by a build completion trigger.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag. 
<br /><br />
If you're triggering a YAML pipeline using `resources`, you should use the <a href="/azure/devops/pipelines/yaml-schema/resources-pipelines-pipeline#the-pipeline-resource-metadata-as-predefined-variables">resources variables</a> instead. 
</td>

<td>No</td>
</tr>

<tr>
<td>Build.TriggeredBy.DefinitionId</td>
<td>If the build was <a href="/azure/devops/pipelines/process/pipeline-triggers" data-raw-source="[triggered by another build](../../process/pipeline-triggers.md)">triggered by another build</a>, then this variable is set to the DefinitionID of the triggering build. In Classic pipelines, this variable is triggered by a build completion trigger.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag. 
<br /><br />
If you're triggering a YAML pipeline using `resources`, you should use the <a href="/azure/devops/pipelines/yaml-schema/resources-pipelines-pipeline#the-pipeline-resource-metadata-as-predefined-variables">resources variables</a> instead. 
</td>
<td>No</td>
</tr>

<tr>
<td>Build.TriggeredBy.DefinitionName</td>
<td>If the build was <a href="/azure/devops/pipelines/process/pipeline-triggers" data-raw-source="[triggered by another build](../../process/pipeline-triggers.md)">triggered by another build</a>, then this variable is set to the name of the triggering build pipeline. In Classic pipelines, this variable is triggered by a build completion trigger.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag. 
<br /><br />
If you're triggering a YAML pipeline using `resources`, you should use the <a href="/azure/devops/pipelines/yaml-schema/resources-pipelines-pipeline#the-pipeline-resource-metadata-as-predefined-variables">resources variables</a> instead. 
</td>
<td>No</td>
</tr>

<tr>
<td>Build.TriggeredBy.BuildNumber</td>
<td>If the build was <a href="/azure/devops/pipelines/process/pipeline-triggers" data-raw-source="[triggered by another build](../../process/pipeline-triggers.md)">triggered by another build</a>, then this variable is set to the number of the triggering build. In Classic pipelines, this variable is triggered by a build completion trigger.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
<br /><br />
If you're triggering a YAML pipeline using `resources`, you should use the <a href="/azure/devops/pipelines/yaml-schema/resources-pipelines-pipeline#the-pipeline-resource-metadata-as-predefined-variables">resources variables</a> instead. 
</td>
<td>No</td>
</tr>

<tr>
<td>Build.TriggeredBy.ProjectID</td>
<td>If the build was <a href="/azure/devops/pipelines/process/pipeline-triggers" data-raw-source="[triggered by another build](../../process/pipeline-triggers.md)">triggered by another build</a>, then this variable is set to ID of the project that contains the triggering build. In Classic pipelines, this variable is triggered by a build completion trigger.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag. 
<br /><br />
If you're triggering a YAML pipeline using `resources`, you should use the <a href="/azure/devops/pipelines/yaml-schema/resources-pipelines-pipeline#the-pipeline-resource-metadata-as-predefined-variables">resources variables</a> instead. 
</td>
<td>No</td>
</tr>

<tr>
<td>Common.TestResultsDirectory</td>
<td>The local path on the agent where the test results are created. For example: `c:\agent_work\1\TestResults`
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
<td>No</td>
</tr>

</table>

## Pipeline variables (DevOps Server 2022)

<a id="pipeline-variables"></a>

<table>
<tr><th>Variable</th><th>Description</th></tr>

<tr>
<td>Pipeline.Workspace</td>
<td>Workspace directory for a particular pipeline. This variable has the same value as `Agent.BuildDirectory`.<br><br>
For example, `/home/vsts/work/1`.</td>
</tr>

</table>

> [!TIP]
> If you are using classic release pipelines, you can use [classic releases and artifacts variables](../../release/variables.md) to store and access data throughout your pipeline.

##  Deployment job variables (DevOps Server 2022)

<a id="deployment-job-variables"></a>

These variables are scoped to a specific [Deployment job](../../process/deployment-jobs.md) and will be resolved only at job execution time. 

<table>
<tr><th>Variable</th><th>Description</th></tr>

<tr>
<td>Environment.Name</td>
<td>Name of the environment targeted in the deployment job to run the deployment steps and record the deployment history. For example, `smarthotel-dev`.</td>
</tr>

<tr>
<td>Environment.Id</td>
<td>ID of the environment targeted in the deployment job. For example, `10`.</td>
</tr>

<tr>
<td>Environment.ResourceName</td>
<td>Name of the specific resource within the environment targeted in the deployment job to run the deployment steps and record the deployment history. For example, `bookings` which is a Kubernetes namespace that has been added as a resource to the environment `smarthotel-dev`.</td>
</tr>

<tr>
<td>Environment.ResourceId</td>
<td>ID of the specific resource within the environment targeted in the deployment job to run the deployment steps. For example, `4`.</td>
</tr>

<tr>
<td>Strategy.Name</td>
<td>The name of the deployment strategy: `canary`, `runOnce`, or `rolling`.</td>
</tr>

<tr>
<td>Strategy.CycleName</td>
<td>The current cycle name in a deployment. Options are `PreIteration`, `Iteration`, or `PostIteration`.</td>
</tr>

</table>


## System variables (DevOps Server 2022)

<a id="system-variables"></a>
<table>
<tr><th>Variable</th><th>Description</th><th>Available in <a href="../../process/templates.md">templates</a>?</th></tr>

<tr>
<td>System.AccessToken</td>
<td><a href="/azure/devops/pipelines/scripts/powershell#use-the-oauth-token-to-access-the-rest-api" data-raw-source="[Use the OAuth token to access the REST API](../../scripts/powershell.md#use-the-oauth-token-to-access-the-rest-api)">Use the OAuth token to access the REST API</a>.
<br/><br/>
<a href="/azure/devops/pipelines/build/variables#systemaccesstoken" data-raw-source="[Use System.AccessToken from YAML scripts](../variables.md#systemaccesstoken)">Use System.AccessToken from YAML scripts</a>.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
<td>Yes</td>
</tr>

<tr>
<td>System.CollectionId</td>
<td>The GUID of the TFS collection or Azure DevOps organization.</td>
<td>Yes</td>
</tr>

<tr>
<td>System.CollectionUri</td>
<td>The URI of the TFS collection or Azure DevOps organization. For example: `https://dev.azure.com/fabrikamfiber/`.</td>
<td>Yes</td>
</tr>


<tr>
<td>System.DefaultWorkingDirectory</td>
<td>

[!INCLUDE [include](../includes/variables-build-sources-directory.md)]

</td>
<td>Yes</td>
</tr>

<tr>
<td>System.DefinitionId</td>
<td>The ID of the build pipeline.</td>
<td>Yes</td>
</tr>

<tr>
<td>System.HostType</td>
<td>Set to `build` if the pipeline is a build. For a release, the values are `deployment` for a Deployment group job, `gates` during evaluation of gates, and `release` for other (Agent and Agentless) jobs.</td>
<td>Yes</td>
</tr>

<tr>
<td>System.JobAttempt</td>
<td>Set to 1 the first time this job is attempted, and increments every time the job is retried.</td>
<td>No</td>
</tr>

<tr>
<td>System.JobDisplayName</td>
<td>The human-readable name given to a job.</td>
<td>No</td>
</tr>

<tr>
<td>System.JobId</td>
<td>A unique identifier for a single attempt of a single job. The value is unique to the current pipeline.</td>
<td>No</td>
</tr>

<tr>
<td>System.JobName</td>
<td>The name of the job, typically used for expressing dependencies and accessing output variables.</td>
<td>No</td>
</tr>

<tr>
<td>System.PhaseAttempt</td>
<td>Set to 1 the first time this phase is attempted, and increments every time the job is retried.<br>
<br>
<b>Note:</b> "Phase" is a mostly redundant concept, which represents the design-time for a job (whereas job was the runtime version of a phase). We've mostly removed the concept of "phase" from Azure Pipelines. Matrix and multi-config jobs are the only place where "phase" is still distinct from "job." One phase can instantiate multiple jobs, which differ only in their inputs.</td>
<td>No</td>
</tr>

<tr>
<td>System.PhaseDisplayName</td>
<td>The human-readable name given to a phase.</td>
<td>No</td>
</tr>

<tr>
<td>System.PhaseName</td>
<td>A string-based identifier for a job, typically used for expressing dependencies and accessing output variables.</td>
<td>No</td>
</tr>

<tr>
<td>System.PlanId</td>
<td>A string-based identifier for a single pipeline run.</td>
<td>No</td>
</tr>

<tr>
<td>System.PullRequest.IsFork</td>
<td>If the pull request is from a fork of the repository, this variable is set to `True`.
Otherwise, it's set to `False`.</td>
<td>Yes</td>
</tr>

<tr>
<td>System.PullRequest.PullRequestId</td>
<td>The ID of the pull request that caused this build. For example: `17`. (This variable is initialized only if the build ran because of a <a href="/azure/devops/repos/git/branch-policies#build-validation" data-raw-source="[Git PR affected by a branch policy](../../../repos/git/branch-policies#build-validation)">Git PR affected by a branch policy</a>).</td>
<td>No</td>
</tr>

<tr>
<td>System.PullRequest.PullRequestNumber</td>
<td>The number of the pull request that caused this build. This variable is populated for pull requests from GitHub that have a different pull request ID and pull request number. This variable is only available in a YAML pipeline if the PR is affected by a branch policy.</td>
<td>No</td>
</tr>

<tr>
<td>System.PullRequest.targetBranchName</td>
<td>The name of the target branch for a pull request. This variable can be used in a pipeline to conditionally execute tasks or steps based on the target branch of the pull request. For example, you might want to trigger a different set of tests or code analysis tools depending on the branch that the changes are being merged into.
</td>
<td>No</td>
</tr>

<tr>
<td>System.PullRequest.SourceBranch</td>
<td>The branch that is being reviewed in a pull request. For example: `refs/heads/users/raisa/new-feature` for Azure Repos. (This variable is initialized only if the build ran because of a <a href="/azure/devops/repos/git/branch-policies#build-validation" data-raw-source="[Git PR affected by a branch policy](../../../repos/git/branch-policies#build-validation)">Git PR affected by a branch policy</a>). This variable is only available in a YAML pipeline if the PR is affected by a branch policy.</td>
<td>No</td>
</tr>

<tr>
<td>System.PullRequest.SourceRepositoryURI</td>
<td>The URL to the repo that contains the pull request. For example: `https://dev.azure.com/ouraccount/_git/OurProject`. </td>
<td>No</td>
</tr>

<tr>
<td>System.PullRequest.TargetBranch</td>
<td>The branch that is the target of a pull request. For example: `refs/heads/main` when your repository is in Azure Repos and `main` when your repository is in GitHub. This variable is initialized only if the build ran because of a <a href="/azure/devops/repos/git/branch-policies#build-validation" data-raw-source="[Git PR affected by a branch policy](../../../repos/git/branch-policies#build-validation)">Git PR affected by a branch policy</a>. This variable is only available in a YAML pipeline if the PR is affected by a branch policy.</td>
<td>No</td>
</tr>

<tr>
<td>System.StageAttempt</td>
<td>Set to 1 the first time this stage is attempted, and increments every time the job is retried.</td>
<td>No</td>
</tr>

<tr>
<td>System.StageDisplayName</td>
<td>The human-readable name given to a stage.</td>
<td>No</td>
</tr>

<tr>
<td>System.StageName</td>
<td>A string-based identifier for a stage, typically used for expressing dependencies and accessing output variables.</td>
<td>No</td>
</tr>



<tr>
<td>System.TeamFoundationCollectionUri</td>
<td>The URI of the TFS collection or Azure DevOps organization. For example: `https://dev.azure.com/fabrikamfiber/`.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
<td>Yes</td>
</tr>

<tr>
<td>System.TeamProject</td>
<td>The name of the project that contains this build.</td>
<td>Yes</td>
</tr>

<tr>
<td>System.TeamProjectId</td>
<td>The ID of the project that this build belongs to.</td>
<td>Yes</td>
</tr>

<tr>
<td>System.TimelineId</td>
<td>A string-based identifier for the execution details and logs of a single pipeline run.</td>
<td>No</td>
</tr>

<tr>
<td>TF_BUILD</td>
<td>Set to `True` if the script is being run by a build task.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
<td>No</td>
</tr>

</table>

## Checks variables (DevOps Server 2022)

<a id="checks-variables"></a>

<table>
<tr><th>Variable</th><th>Description</th></tr>
<tr>
<td>Checks.StageAttempt</td>
<td>Set to 1 the first time this stage is attempted, and increments every time the stage is retried. 
<br/><br/>
This variable can only be used within an <a href="../../process/approvals.md">approval or check</a> for an environment. For example, you could use `$(Checks.StageAttempt)` within an <a href="../../process/approvals.md#invoke-rest-api">Invoke REST API check</a>.<br /><br />
    <image src="../media/checks-stageattempt-var.png" alt="Add the stage attempt as a parameter." />
</td>
</tr>
</table>
