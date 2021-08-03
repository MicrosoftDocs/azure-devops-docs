---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/13/2020
---
<a id="agent-variables"></a>

##  Agent variables (DevOps Services)

> [!NOTE]
> You can use agent variables as environment variables in your scripts and as parameters in your build tasks.
> You cannot use them to customize the build number or to apply a version control label or tag.

<table>
<tr><th>Variable</th><th>Description</th></tr>

<tr>
<td>Agent.BuildDirectory</td>
<td>
<p>The local path on the agent where all folders for a given build pipeline are created. This variable has the same value as <code>Pipeline.Workspace</code>.</p>
<p>For example: <code>/home/vsts/work/1</code></p>
</td>
</tr>

<tr>
<td>Agent.ContainerMapping</td>
<td>
<p>A mapping from container resource names in YAML to their Docker IDs at runtime.</p>
<p>For example: <code><pre>
{
  "one_container": {
    "id": "bdbb357d73a0bd3550a1a5b778b62a4c88ed2051c7802a0659f1ff6e76910190"
  },
  "another_container": {
    "id": "82652975109ec494876a8ccbb875459c945982952e0a72ad74c91216707162bb"
  }
}
</pre></code>
</p>
</td>
</tr>

<tr>
<td>Agent.HomeDirectory</td>
<td>The directory the agent is installed into. This contains the agent software. For example: <code>c:\agent</code>.</td>
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
        <li><code>Canceled</code>
        <li><code>Failed</code>
        <li><code>Succeeded</code>
        <li><code>SucceededWithIssues</code> (partially successful)
    </ul>
<p>The environment variable should be referenced as <code>AGENT_JOBSTATUS</code>. The older <code>agent.jobstatus</code> is available for backwards compatibility.</p>
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
<p>If you are using a self-hosted agent, then this name is specified by you. See <a href="/azure/devops/pipelines/agents/agents" data-raw-source="[agents](../../agents/agents.md)">agents</a>.</p>
</td>
</tr>

<tr>
<td>Agent.OS</td>
<td>
The operating system of the agent host. Valid values are:
<ul>
<li><code>Windows_NT</code>
<li><code>Darwin</code>
<li><code>Linux</code>
</ul>
If you&#39;re running in a container, the agent host and container may be running different operating systems.
</td>
</tr>

<tr>
<td>Agent.OSArchitecture</td>
<td>
The operating system processor architecture of the agent host. Valid values are:
<ul>
<li><code>X86</code>
<li><code>X64</code>
<li><code>ARM</code>
</ul>
</td>
</tr>

<tr>
<td>Agent.TempDirectory</td>
<td>
<p>A temporary folder that is cleaned after each pipeline job. This directory is used by tasks such as <a href="/azure/devops/pipelines/tasks/build/dotnet-core-cli">.NET Core CLI task</a> to hold temporary items like test results before they are published.</p>
<p>For example: <code>/home/vsts/work/_temp</code> for Ubuntu</p>
</td>
</tr>

<tr>
<td>Agent.ToolsDirectory</td>
<td>
The directory used by tasks such as <a href="/azure/devops/pipelines/tasks/tool/node-js" data-raw-source="[Node Tool Installer](../../tasks/tool/node-js.md)">Node Tool Installer</a> and <a href="/azure/devops/pipelines/tasks/tool/use-python-version" data-raw-source="[Use Python Version](../../tasks/tool/use-python-version.md)">Use Python Version</a> to switch between multiple versions of a tool.
These tasks will add tools from this directory to <code>PATH</code> so that subsequent build steps can use them.
<br><br>
Learn about <a href="https://go.microsoft.com/fwlink/?linkid=2008884" data-raw-source="[managing this directory on a self-hosted agent](https://go.microsoft.com/fwlink/?linkid=2008884)">managing this directory on a self-hosted agent</a>.
</td>
</tr>

<tr>
<td>Agent.WorkFolder</td>
<td>
The working directory for this agent.
For example: <code>c:\agent_work</code>.
<br><br>
Note: This directory is not guaranteed to be writable by pipeline tasks (eg. when mapped into a container)
</td>
</tr>

</table>

## Build variables (DevOps Services)

<a id="build-variables"></a>

<table>
<tr><th>Variable</th><th>Description</th><th>Available in <a href="../../process/templates.md">templates</a>?</th></tr>

<tr>
<td>Build.ArtifactStagingDirectory</td>
<td>


The local path on the agent where any artifacts are copied to before being pushed to their destination. For example: <code>c:\agent_work\1\a</code>
<br><br>
A typical way to use this folder is to publish your build artifacts with the <a href="/azure/devops/pipelines/tasks/utility/copy-files" data-raw-source="[Copy files](../../tasks/utility/copy-files.md)">Copy files</a> and <a href="/azure/devops/pipelines/tasks/utility/publish-build-artifacts" data-raw-source="[Publish build artifacts](../../tasks/utility/publish-build-artifacts.md)">Publish build artifacts</a> tasks.
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

Note: This value can contain whitespace or other invalid label characters. In these cases, the <a href="/azure/devops/repos/tfvc/labels-command" data-raw-source="[label format](../repos/tfvc/labels-command.md)">label format</a> will fail.

<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.BuildUri</td>
<td>The URI for the build. For example: <code>vstfs:///Build/Build/1430</code>.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.BinariesDirectory</td>
<td>The local path on the agent you can use as an output folder for compiled binaries.
<br><br>
By default, new build pipelines are not set up to clean this directory. You can define your build to clean it up on the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[Repository tab](../repos/index.md)">Repository tab</a>.
<br><br>
For example: <code>c:\agent_work\1\b</code>.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.ContainerId</td>
<td>The ID of the container for your artifact. When you upload an artifact in your pipeline, it is added to a container that is specific for that particular artifact.</td>
<td>No</td>
</tr>

<tr>
<td>Build.DefinitionName</td>
<td>The name of the build pipeline.
<br><br>


Note: This value can contain whitespace or other invalid label characters. In these cases, the <a href="/azure/devops/repos/tfvc/labels-command" data-raw-source="[label format](../repos/tfvc/labels-command.md)">label format</a> will fail.

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


Note: This value can contain whitespace or other invalid label characters. In these cases, the <a href="/azure/devops/repos/tfvc/labels-command" data-raw-source="[label format](../repos/tfvc/labels-command.md)">label format</a> will fail.

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
<li><code>Manual</code>: A user manually queued the build.</li>
<li><code>IndividualCI</code>: <strong>Continuous integration (CI)</strong> triggered by a Git push or a TFVC check-in.</li>
<li><code>BatchedCI</code>: <strong>Continuous integration (CI)</strong> triggered by a Git push or a TFVC check-in, and the <strong>Batch changes</strong> was selected.</li>
<li><code>Schedule</code>: <strong>Scheduled</strong> trigger.</li>
<li><code>ValidateShelveset</code>: A user manually queued the build of a specific TFVC shelveset.</li>
<li><code>CheckInShelveset</code>: <strong>Gated check-in</strong> trigger.</li>
<li><code>PullRequest</code>: The build was triggered by a Git branch policy that requires a build.</li>
<li><code>ResourceTrigger</code>: The build was <a href="/azure/devops/pipelines/process/resources#resources-pipelines" data-raw-source="[triggered by a resource trigger](../../process/resource.md)">triggered by a resource trigger</a> or it was <a href="/azure/devops/pipelines/process/pipeline-triggers" data-raw-source="[triggered by another build](../../process/pipeline-triggers.md)">triggered by another build</a>.</li>
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


The local path on the agent where your source code files are downloaded. For example: <code>c:\agent_work\1\s</code><br><br>By default, new build pipelines update only the changed files. You can modify how files are downloaded on the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[Repository tab](../repos/index.md)">Repository tab</a>.

Important note: if you only check out one Git repository, this path will be the exact path to the code.
If you check out multiple repositories, the behaviour is as follows (and might differ from the value of the Build.SourcesDirectory variable):
<ul>
<li>If the checkout step for the self (primary) repository has no custom checkout path defined, or the checkout path is the multi-checkout default path <code>$(Pipeline.Workspace)/s/&lt;RepoName&gt;</code> for the self repository, then the value of this variable will revert to its default value, which is <code>$(Pipeline.Workspace)/s</code></li>
<li>If the checkout step for the self (primary) repository does have a custom checkout path defined (and it's not its multi-checkout default path) then this variable will contain the exact path to the self repository</li>
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
<li><code>TfsGit</code>: <a href="/azure/devops/repos/git/overview" data-raw-source="[TFS Git repository](../../../repos/git/index.yml)">TFS Git repository</a>
<li><code>TfsVersionControl</code>: <a href="/azure/devops/repos/tfvc/overview" data-raw-source="[Team Foundation Version Control](../../../repos/tfvc/what-is-tfvc.md)">Team Foundation Version Control</a>
<li><code>Git</code>: Git repository hosted on an external server
<li><code>GitHub</code>
<li><code>Svn</code>: Subversion
</ul>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.Repository.Tfvc.Workspace</td>
<td>Defined if your <a href="/azure/devops/pipelines/repos/index" data-raw-source="[repository](../repos/index.md)">repository</a> is Team Foundation Version Control. The name of the <a href="/azure/devops/repos/tfvc/create-work-workspaces" data-raw-source="[TFVC workspace](../../../repos/tfvc/create-work-workspaces.md)">TFVC workspace</a> used by the build agent.
<br><br><br/>For example, if the Agent.BuildDirectory is <code>c:\agent_work\12</code> and the Agent.Id is <code>8</code>, the workspace name could be: <code>ws_12_8</code>
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.Repository.Uri</td>
<td>The URL for the triggering repository. For example:
<ul>
<li>Git: <code><a href="https://dev.azure.com/fabrikamfiber/_git/Scripts" data-raw-source="https://dev.azure.com/fabrikamfiber/_git/Scripts">https://dev.azure.com/fabrikamfiber/_git/Scripts</a></code>
<li>TFVC: <code><a href="https://dev.azure.com/fabrikamfiber/" data-raw-source="https://dev.azure.com/fabrikamfiber/">https://dev.azure.com/fabrikamfiber/</a></code>
</ul>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.RequestedFor</td>
<td>See &quot;<a href="#identity_values" data-raw-source="[How are the identity variables set?](#identity_values)">How are the identity variables set?</a>&quot;.
<br><br>


Note: This value can contain whitespace or other invalid label characters. In these cases, the <a href="/azure/devops/repos/tfvc/labels-command" data-raw-source="[label format](../repos/tfvc/labels-command.md)">label format</a> will fail.

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
<li>Git repo branch: <code>refs/heads/master</code></li>
<li>Git repo pull request: <code>refs/pull/1/merge</code></li>
<li>TFVC repo branch: <code>$/teamproject/main</code></li>
<li>TFVC repo gated check-in: <code>Gated_2016-06-06_05.20.51.4369;username@live.com</code></li>
<li>TFVC repo shelveset build: <code>myshelveset;username@live.com</code></li>
<li>When your pipeline is triggered by a tag: <code>refs/tags/your-tag-name</code></li>
</ul>
When you use this variable in your build number format, the forward slash characters (<code>/</code>) are replaced with underscore characters <code>&#095;</code>).
<br><br>
Note: In TFVC, if you are running a gated check-in build or manually building a shelveset, you cannot use this variable in your build number format.
</td>
<td>Yes</td>
</tr>

<tr>
<td>Build.SourceBranchName</td>
<td>The name of the branch in the triggering repo the build was queued for.
<ul>
<li>Git repo branch or pull request: The last path segment in the ref. For example, in <code>refs/heads/master</code> this value is <code>master</code>. In <code>refs/heads/feature/tools</code> this value is <code>tools</code>.</li>
<li>TFVC repo branch: The last path segment in the root server path for the workspace. For example, in <code>$/teamproject/main</code> this value is <code>main</code>.</li>
<li>TFVC repo gated check-in or shelveset build is the name of the shelveset. For example, <code>Gated_2016-06-06_05.20.51.4369;username@live.com</code> or <code>myshelveset;username@live.com</code>.</li>
</ul>
Note: In TFVC, if you are running a gated check-in build or manually building a shelveset, you cannot use this variable in your build number format.
</td>
<td>Yes</td>
</tr>

<tr>
<td>Build.SourcesDirectory</td>
<td>


The local path on the agent where your source code files are downloaded. For example: <code>c:\agent_work\1\s</code><br><br>By default, new build pipelines update only the changed files. 

Important note: if you only check out one Git repository, this path will be the exact path to the code. If you check out multiple repositories, it will revert to its default value, which is <code>$(Pipeline.Workspace)/s</code>, even if the self (primary) repository is checked out to a custom path different from its multi-checkout default path <code>$(Pipeline.Workspace)/s/&lt;RepoName&gt;</code> (in this respect the variable differes from the behaviour of the Build.Repository.LocalPath variable).
<br><br>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.SourceVersion</td>
<td>The latest version control change of the triggering repo that is included in this build.
<ul>
<li>Git: The <a href="/azure/devops/repos/git/commits" data-raw-source="[commit](../../../repos/git/commits.md)">commit</a> ID.</li>
<li>TFVC: the <a href="/azure/devops/repos/tfvc/find-view-changesets" data-raw-source="[changeset](../../../repos/tfvc/find-view-changesets.md)">changeset</a>.</li>
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
Also, this variable is only available on the step level and is neither available in the job nor stage levels (i.e. the message is not extracted until the job had started and checked out the code).

Note: This variable is available in TFS 2015.4.
</td>
<td>No</td>
</tr>

<tr>
<td>Build.StagingDirectory</td>
<td>


The local path on the agent where any artifacts are copied to before being pushed to their destination. For example: <code>c:\agent_work\1\a</code>
<br><br>
A typical way to use this folder is to publish your build artifacts with the <a href="/azure/devops/pipelines/tasks/utility/copy-files" data-raw-source="[Copy files](../../tasks/utility/copy-files.md)">Copy files</a> and <a href="/azure/devops/pipelines/tasks/utility/publish-build-artifacts" data-raw-source="[Publish build artifacts](../../tasks/utility/publish-build-artifacts.md)">Publish build artifacts</a> tasks.
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
<br/><br/><br/>If you are running a <a href="/azure/devops/pipelines/repos/tfvc#gated" data-raw-source="[gated build](../../repos/tfvc.md#gated)">gated build</a> or a <a href="/azure/devops/pipelines/create-first-pipeline#queueabuild" data-raw-source="[shelveset build](../../create-first-pipeline.md#queueabuild)">shelveset build</a>, this is set to the name of the <a href="/azure/devops/repos/tfvc/suspend-your-work-manage-your-shelvesets" data-raw-source="[shelveset](../../../repos/tfvc/suspend-your-work-manage-your-shelvesets.md)">shelveset</a> you are building.
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
If you are triggering a YAML pipeline using <code>resources</code>, you should use the <a href="../../yaml-schema.md#the-pipeline-resource-metadata-as-predefined-variables">resources variables</a> instead. 
</td>

<td>No</td>
</tr>

<tr>
<td>Build.TriggeredBy.DefinitionId</td>
<td>If the build was <a href="/azure/devops/pipelines/process/pipeline-triggers" data-raw-source="[triggered by another build](../../process/pipeline-triggers.md)">triggered by another build</a>, then this variable is set to the DefinitionID of the triggering build. In Classic pipelines, this variable is triggered by a build completion trigger.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag. 
<br /><br />
If you are triggering a YAML pipeline using <code>resources</code>, you should use the <a href="../../yaml-schema.md#the-pipeline-resource-metadata-as-predefined-variables">resources variables</a> instead. 
</td>
<td>No</td>
</tr>

<tr>
<td>Build.TriggeredBy.DefinitionName</td>
<td>If the build was <a href="/azure/devops/pipelines/process/pipeline-triggers" data-raw-source="[triggered by another build](../../process/pipeline-triggers.md)">triggered by another build</a>, then this variable is set to the name of the triggering build pipeline. In Classic pipelines, this variable is triggered by a build completion trigger.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag. 
<br /><br />
If you are triggering a YAML pipeline using <code>resources</code>, you should use the <a href="../../yaml-schema.md#the-pipeline-resource-metadata-as-predefined-variables">resources variables</a> instead. 
</td>
<td>No</td>
</tr>

<tr>
<td>Build.TriggeredBy.BuildNumber</td>
<td>If the build was <a href="/azure/devops/pipelines/process/pipeline-triggers" data-raw-source="[triggered by another build](../../process/pipeline-triggers.md)">triggered by another build</a>, then this variable is set to the number of the triggering build. In Classic pipelines, this variable is triggered by a build completion trigger.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
<br /><br />
If you are triggering a YAML pipeline using <code>resources</code>, you should use the <a href="../../yaml-schema.md#the-pipeline-resource-metadata-as-predefined-variables">resources variables</a> instead. 
</td>
<td>No</td>
</tr>

<tr>
<td>Build.TriggeredBy.ProjectID</td>
<td>If the build was <a href="/azure/devops/pipelines/process/pipeline-triggers" data-raw-source="[triggered by another build](../../process/pipeline-triggers.md)">triggered by another build</a>, then this variable is set to ID of the project that contains the triggering build. In Classic pipelines, this variable is triggered by a build completion trigger.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag. 
<br /><br />
If you are triggering a YAML pipeline using <code>resources</code>, you should use the <a href="../../yaml-schema.md#the-pipeline-resource-metadata-as-predefined-variables">resources variables</a> instead. 
</td>
<td>No</td>
</tr>

<tr>
<td>Common.TestResultsDirectory</td>
<td>The local path on the agent where the test results are created. For example: <code>c:\agent_work\1\TestResults</code>
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
<td>No</td>
</tr>

</table>

## Pipeline variables (DevOps Services)

<a id="pipeline-variables"></a>

<table>
<tr><th>Variable</th><th>Description</th></tr>

<tr>
<td>Pipeline.Workspace</td>
<td>Workspace directory for a particular pipeline. This variable has the same value as <code>Agent.BuildDirectory</code>.<br><br>
For example, <code>/home/vsts/work/1</code>.</td>
</tr>

</table>

##  Deployment job variables (DevOps Services)

<a id="deployment-job-variables"></a>

These variables are scoped to a specific [Deployment job](../../process/deployment-jobs.md) and will be resolved only at job execution time. 

<table>
<tr><th>Variable</th><th>Description</th></tr>

<tr>
<td>Environment.Name</td>
<td>Name of the environment targeted in the deployment job to run the deployment steps and record the deployment history. For example, <code>smarthotel-dev</code>.</td>
</tr>

<tr>
<td>Environment.Id</td>
<td>ID of the environment targeted in the deployment job. For example, <code>10</code>.</td>
</tr>

<tr>
<td>Environment.ResourceName</td>
<td>Name of the specific resource within the environment targeted in the deployment job to run the deployment steps and record the deployment history. For example, <code>bookings</code> which is a Kubernetes namespace that has been added as a resource to the environment <code>smarthotel-dev</code>.</td>
</tr>

<tr>
<td>Environment.ResourceId</td>
<td>ID of the specific resource within the environment targeted in the deployment job to run the deployment steps. For example, <code>4</code>.</td>
</tr>

<tr>
<td>Strategy.Name</td>
<td>The name of the deployment strategy: <code>canary</code>, <code>runOnce</code>, or <code>rolling</code>.</td>
</tr>

<tr>
<td>Strategy.CycleName</td>
<td>The current cycle name in a deployment. Options are <code>PreIteration</code>, <code>Iteration</code>, or <code>PostIteration</code>.</td>
</tr>

</table>


## System variables (DevOps Services)

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
<td>The URI of the TFS collection or Azure DevOps organization. For example: <code>https://dev.azure.com/fabrikamfiber/</code>.</td>
<td>Yes</td>
</tr>


<tr>
<td>System.DefaultWorkingDirectory</td>
<td>

[!INCLUDE [include](../includes/variables-build-sources-directory.md)]

</td>
<td>No</td>
</tr>

<tr>
<td>System.DefinitionId</td>
<td>The ID of the build pipeline.</td>
<td>Yes</td>
</tr>

<tr>
<td>System.HostType</td>
<td>Set to <code>build</code> if the pipeline is a build. For a release, the values are <code>deployment</code> for a Deployment group job, <code>gates</code> during evaluation of gates, and <code>release</code> for other (Agent and Agentless) jobs.</td>
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
<b>Note:</b> "Phase" is a mostly-redundant concept which represents the design-time for a job (whereas job was the runtime version of a phase). We've mostly removed the concept of "phase" from Azure Pipelines. Matrix and multi-config jobs are the only place where "phase" is still distinct from "job". One phase can instantiate multiple jobs which differ only in their inputs.</td>
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
<td>Yes</td>
</tr>

<tr>
<td>System.PullRequest.IsFork</td>
<td>If the pull request is from a fork of the repository, this variable is set to <code>True</code>.
Otherwise, it is set to <code>False</code>.</td>
<td>Yes</td>
</tr>

<tr>
<td>System.PullRequest.PullRequestId</td>
<td>The ID of the pull request that caused this build. For example: <code>17</code>. (This variable is initialized only if the build ran because of a <a href="/azure/devops/repos/git/branch-policies#build-validation" data-raw-source="[Git PR affected by a branch policy](../../../repos/git/branch-policies#build-validation)">Git PR affected by a branch policy</a>).</td>
<td>No</td>
</tr>

<tr>
<td>System.PullRequest.PullRequestNumber</td>
<td>The number of the pull request that caused this build. This variable is populated for pull requests from GitHub which have a different pull request ID and pull request number. This variable is only available in a YAML pipeline if the PR is a affected by a branch policy.</td>
<td>No</td>
</tr>

<tr>
<td>System.PullRequest.SourceBranch</td>
<td>The branch that is being reviewed in a pull request. For example: <code>refs/heads/users/raisa/new-feature</code> for Azure Repos. (This variable is initialized only if the build ran because of a <a href="/azure/devops/repos/git/branch-policies#build-validation" data-raw-source="[Git PR affected by a branch policy](../../../repos/git/branch-policies#build-validation)">Git PR affected by a branch policy</a>). This variable is only available in a YAML pipeline if the PR is affected by a branch policy.</td>
<td>No</td>
</tr>

<tr>
<td>System.PullRequest.SourceRepositoryURI</td>
<td>The URL to the repo that contains the pull request. For example: <code>https://dev.azure.com/ouraccount/_git/OurProject</code>. </td>
<td>No</td>
</tr>

<tr>
<td>System.PullRequest.TargetBranch</td>
<td>The branch that is the target of a pull request. For example: <code>refs/heads/master</code> when your repository is in Azure Repos and <code>master</code> when your repository is in GitHub. This variable is initialized only if the build ran because of a <a href="/azure/devops/repos/git/branch-policies#build-validation" data-raw-source="[Git PR affected by a branch policy](../../../repos/git/branch-policies#build-validation)">Git PR affected by a branch policy</a>. This variable is only available in a YAML pipeline if the PR is affected by a branch policy.</td>
<td>No</td>
</tr>

<tr>
<td>System.TeamFoundationCollectionUri</td>
<td>The URI of the TFS collection or Azure DevOps organization. For example: <code>https://dev.azure.com/fabrikamfiber/</code>.
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
<td>TF_BUILD</td>
<td>Set to <code>True</code> if the script is being run by a build task.
<br/><br/>
This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
<td>No</td>
</tr>

</table>

## Checks variables (DevOps Services)

<a id="checks-variables"></a>

<table>
<tr><th>Variable</th><th>Description</th></tr>
<tr>
<td>Checks.StageAttempt</td>
<td>Set to 1 the first time this stage is attempted, and increments every time the stage is retried. 
<br/><br/>
This variable can only be used within an <a href="../../process/approvals.md">approval or check</a> for an environment. For example, you could use <code>$(Checks.StageAttempt)</code> within an <a href="../../process/approvals.md#invoke-rest-api">Invoke REST API check</a>.<br /><br />
    <image src="../media/checks-stageattempt-var.png" alt="Add the stage attempt as a parameter." />
</td>
</tr>
</table>
