---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/13/2020
---
<a id="agent-variables"></a>

## Agent variables (TFS 2017)

> [!NOTE]
> You can use agent variables as environment variables in your scripts and as parameters in your build tasks.
> You cannot use them to customize the build number or to apply a version control label or tag.

<table>
<tr><th>Variable</th><th>Description</th></tr>

<tr>
<td>Agent.BuildDirectory</td>
<td>
<p>The local path on the agent where all folders for a given build pipeline are created.</p>
<p>For example: `c:\agent_work\1`</p>
</td>
</tr>

<tr>
<td>Agent.ComputerName</td>
<td>The name of the machine on which the agent is installed.</td>
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
<td>Agent.Name</td>
<td>
<p>The name of the agent that is registered with the pool.</p>
<p>This name is specified by you. See <a href="/azure/devops/pipelines/agents/agents" data-raw-source="[agents](../../agents/agents.md)">agents</a>.</p>
</td>
</tr>

<tr>
<td>Agent.WorkFolder</td>
<td>
The working directory for this agent.
For example: `c:\agent_work`.
</td>
</tr>

</table>

## Build variables (TFS 2017)

<a id="build-variables"></a>

<table>
<tr><th>Variable</th><th>Description</th></tr>

<tr>
<td>Build.ArtifactStagingDirectory</td>
<td>The local path on the agent where any artifacts are copied to before being pushed to their destination.
<br/><br/>


The local path on the agent where any artifacts are copied to before being pushed to their destination. For example: `c:\agent_work\1\a`
<br><br>
A typical way to use this folder is to publish your build artifacts with the <a href="/azure/devops/pipelines/tasks/reference/copy-files-v2" data-raw-source="[Copy files](/azure/devops/pipelines/tasks/reference/copy-files-v2)">Copy files</a> and <a href="/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1" data-raw-source="[Publish build artifacts](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1)">Publish build artifacts</a> tasks.
<br><br>
Note: Build.ArtifactStagingDirectory and Build.StagingDirectory are interchangeable. This directory is purged before each new build, so you don&#39;t have to clean it up yourself.
<br><br> 
See <a href="/azure/devops/pipelines/build/artifacts" data-raw-source="[Artifacts in Azure Pipelines](../../artifacts/artifacts-overview.md)">Artifacts in Azure Pipelines</a>.
<br><br>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.

</td>
</tr>

<tr>
<td>Build.BuildId</td>
<td>The ID of the record for the completed build.</td>
</tr>

<tr>
<td>Build.BuildNumber</td>
<td>The name of the completed build. You can specify the build number format that generates this value in the <a href="/azure/devops/pipelines/build/options" data-raw-source="[pipeline options](../options.md)">pipeline options</a>.
<br/><br/>
A typical use of this variable is to make it part of the label format, which you specify on the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[repository tab](../repos/index.md)">repository tab</a>.
<br/><br/>


Note: This value can contain whitespace or other invalid label characters. In these cases, the <a href="/azure/devops/repos/tfvc/labels-command" data-raw-source="[label format](../repos/tfvc/labels-command.md)">label format</a> will fail.

<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as a version control tag.
</td>
</tr>

<tr>
<td>Build.BuildUri</td>
<td>The URI for the build. For example: `vstfs:///Build/Build/1430`.
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
</tr>

<tr>
<td>Build.BinariesDirectory</td>
<td>The local path on the agent you can use as an output folder for compiled binaries.
<br/><br/>
By default, new build pipelines are not set up to clean this directory. You can define your build to clean it up on the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[Repository tab](../repos/index.md)">Repository tab</a>.
<br/><br/>
For example: `c:\agent_work\1\b`.
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
</tr>

<tr>
<td>Build.DefinitionName</td>
<td>The name of the build pipeline.


Note: This value can contain whitespace or other invalid label characters. In these cases, the <a href="/azure/devops/repos/tfvc/labels-command" data-raw-source="[label format](../repos/tfvc/labels-command.md)">label format</a> will fail.

</td>
</tr>

<tr>
<td>Build.DefinitionVersion</td>
<td>The version of the build pipeline.</td>
</tr>

<tr>
<td>Build.QueuedBy</td>
<td>See &quot;<a href="#identity_values" data-raw-source="[How are the identity variables set?](#identity_values)">How are the identity variables set?</a>&quot;.


Note: This value can contain whitespace or other invalid label characters. In these cases, the <a href="/azure/devops/repos/tfvc/labels-command" data-raw-source="[label format](../repos/tfvc/labels-command.md)">label format</a> will fail.

</td>
</tr>

<tr>
<td>Build.QueuedById</td>
<td>See &quot;<a href="#identity_values" data-raw-source="[How are the identity variables set?](#identity_values)">How are the identity variables set?</a>&quot;.</td>
</tr>

<tr>
<td>Build.Reason</td>
<td>The event that caused the build to run. Available in <strong>TFS 2017.3</strong>.
<ul>
- `Manual`: A user manually queued the build.</br>
- `IndividualCI`: <strong>Continuous integration (CI)</strong> triggered by a Git push or a TFVC check-in.</br>
- `BatchedCI`: <strong>Continuous integration (CI)</strong> triggered by a Git push or a TFVC check-in, and the <strong>Batch changes</strong> was selected.</br>
- `Schedule`: <strong>Scheduled</strong> trigger.</br>
- `ValidateShelveset`: A user manually queued the build of a specific TFVC shelveset.</br>
- `CheckInShelveset`: <strong>Gated check-in</strong> trigger.</br>
- `PullRequest`: The build was triggered by a Git branch policy that requires a build.</br>
</ul>
See <a href="/azure/devops/pipelines/build/triggers" data-raw-source="[Build pipeline triggers](../triggers.md)">Build pipeline triggers</a>, <a href="/azure/devops/repos/git/branch-policies" data-raw-source="[Improve code quality with branch policies](../../../repos/git/branch-policies.md)">Improve code quality with branch policies</a>.
</td>
</tr>

<tr><br/><td>Build.Repository.Clean</td>
<td>The value you&#39;ve selected for <strong>Clean</strong> in the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[source repository settings](../repos/index.md)">source repository settings</a>.
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
</tr>

<tr>
<td>Build.Repository.LocalPath</td>
<td>


The local path on the agent where your source code files are downloaded. For example: `c:\agent_work\1\s`<br><br>By default, new build pipelines update only the changed files. You can modify how files are downloaded on the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[Repository tab](../repos/index.md)">Repository tab</a>.
<br><br>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.

<p>This variable is synonymous with Build.SourcesDirectory.</p>
</td>
</tr>

<tr>
<td>Build.Repository.Name</td>
<td>The name of the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[repository](../repos/index.md)">repository</a>.
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
</tr>

<tr>
<td>Build.Repository.Provider</td>
<td>The type of <a href="/azure/devops/pipelines/repos/index" data-raw-source="[repository you selected](../repos/index.md)">repository you selected</a>.
<ul>
- `TfsGit`: <a href="/azure/devops/repos/git/overview" data-raw-source="[TFS Git repository](../../../repos/git/index.yml)">TFS Git repository</a>
- `TfsVersionControl`: <a href="/azure/devops/repos/tfvc/overview" data-raw-source="[Team Foundation Version Control](../../../repos/tfvc/what-is-tfvc.md)">Team Foundation Version Control</a>
- `Git`: Git repository hosted on an external server
- `Svn`: Subversion
</ul>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
</tr>

<tr>
<td>Build.Repository.Tfvc.Workspace</td>
<td>Defined if your <a href="/azure/devops/pipelines/repos/index" data-raw-source="[repository](../repos/index.md)">repository</a> is Team Foundation Version Control. The name of the <a href="/azure/devops/repos/tfvc/create-work-workspaces" data-raw-source="[TFVC workspace](../../../repos/tfvc/create-work-workspaces.md)">TFVC workspace</a> used by the build agent.
<br/><br/>
For example, if the Agent.BuildDirectory is `c:\agent_work\12` and the Agent.Id is `8`, the workspace name could be: `ws_12_8`
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
</tr>

<tr>
<td>Build.Repository.Uri</td>
<td>The URL for the repository. For example:
<ul>
- Git: `https://fabrikamfiber/tfs/DefaultCollection/Scripts/_git/Scripts`
- TFVC: `https://fabrikamfiber/tfs/DefaultCollection/`
</ul>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
</tr>

<tr>
<td>Build.RequestedFor</td>
<td>See &quot;<a href="#identity_values" data-raw-source="[How are the identity variables set?](#identity_values)">How are the identity variables set?</a>&quot;.

[!INCLUDE [include](../includes/variables-invalid-label-characters.md)]

</td>
</tr>

<tr>
<td>Build.RequestedForEmail</td>
<td>See &quot;<a href="#identity_values" data-raw-source="[How are the identity variables set?](#identity_values)">How are the identity variables set?</a>&quot;.</td>
</tr>

<tr>
<td>Build.RequestedForId</td>
<td>See &quot;<a href="#identity_values" data-raw-source="[How are the identity variables set?](#identity_values)">How are the identity variables set?</a>&quot;.</td>
</tr>

<tr>
<td>Build.SourceBranch</td>
<td>The branch the build was queued for. Some examples:
<ul>
- Git repo branch: `refs/heads/master`</br>
- Git repo pull request: `refs/pull/1/merge`</br>
- TFVC repo branch: `$/teamproject/main`</br>
- TFVC repo gated check-in: `Gated_2016-06-06_05.20.51.4369;username@live.com`</br>
- TFVC repo shelveset build: `myshelveset;username@live.com`</br>
</ul>
When you use this variable in your build number format, the forward slash characters (`/`) are replaced with underscore characters `&#095;`).
<br/><br/>
Note: In TFVC, if you are running a gated check-in build or manually building a shelveset, you cannot use this variable in your build number format.
</td>
</tr>

<tr>
<td>Build.SourceBranchName</td>
<td>The name of the branch the build was queued for.
<ul>
- Git repo branch or pull request: The last path segment in the ref. For example, in `refs/heads/master` this value is `master`. In `refs/heads/feature/tools` this value is `tools`.</br>
- TFVC repo branch: The last path segment in the root server path for the workspace. For example in `$/teamproject/main` this value is `main`.</br>
- TFVC repo gated check-in or shelveset build is the name of the shelveset. For example, `Gated_2016-06-06_05.20.51.4369;username@live.com` or `myshelveset;username@live.com`.</br>
</ul>
Note: In TFVC, if you are running a gated check-in build or manually building a shelveset, you cannot use this variable in your build number format.
</td>
</tr>

<tr>
<td>Build.SourcesDirectory</td>
<td>


The local path on the agent where your source code files are downloaded. For example: `c:\agent_work\1\s`<br><br>By default, new build pipelines update only the changed files. You can modify how files are downloaded on the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[Repository tab](../repos/index.md)">Repository tab</a>.
<br><br>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.

<p>This variable is synonymous with Build.Repository.LocalPath.</p>
</td>
</tr>

<tr>
<td>Build.SourceVersion</td>
<td>The latest version control change that is included in this build.
<ul>
- Git: The <a href="/azure/devops/repos/git/commits" data-raw-source="[commit](../../../repos/git/commits.md)">commit</a> ID.</br>
- TFVC: the <a href="/azure/devops/repos/tfvc/find-view-changesets" data-raw-source="[changeset](../../../repos/tfvc/find-view-changesets.md)">changeset</a>.</br>
</ul>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
</tr>

<tr>
<td>Build.SourceVersionMessage</td>
<td>The comment of the commit or changeset. We truncate the message to the first line or 200 characters, whichever is shorter. 

This variable is agent-scoped, and can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.

Note: This variable is available in TFS 2015.4.

> [!NOTE]
> The **Build.SourceVersionMessage** variable does not work with classic build pipelines in Bitbucket repositories when **Batch changes while a build is in progress** is enabled.
</td>
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
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.

</td>
</tr>

<tr>
<td>Build.Repository.Git.SubmoduleCheckout</td>
<td>The value you&#39;ve selected for <strong>Checkout submodules</strong> on the <a href="/azure/devops/pipelines/repos/index" data-raw-source="[repository tab](../repos/index.md)">repository tab</a>.
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
</tr>

<tr>
<td>Build.SourceTfvcShelveset</td>
<td>Defined if your <a href="/azure/devops/pipelines/repos/index" data-raw-source="[repository](../repos/index.md)">repository</a> is Team Foundation Version Control.
<br/><br/>
If you are running a <a href="/azure/devops/pipelines/repos/tfvc#gated" data-raw-source="[gated build](../../repos/tfvc.md#gated)">gated build</a> or a <a href="/azure/devops/pipelines/create-first-pipeline#queueabuild" data-raw-source="[shelveset build](../../create-first-pipeline.md#queueabuild)">shelveset build</a>, this is set to the name of the <a href="/azure/devops/repos/tfvc/suspend-your-work-manage-your-shelvesets" data-raw-source="[shelveset](../../../repos/tfvc/suspend-your-work-manage-your-shelvesets.md)">shelveset</a> you are building.
<br/><br/>
Note: This variable yields a value that is invalid for build use in a build number format.
</td>
</tr>

<tr>
<td>Common.TestResultsDirectory</td>
<td>The local path on the agent where the test results are created. For example: `c:\agent_work\1\TestResults`
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
</tr>

</table>

## System variables (TFS 2017)

<a id="system-variables"></a>

<table>
<tr><th>Variable</th><th>Description</th></tr>

<tr>
<td>System.AccessToken</td>
<td><a href="/azure/devops/pipelines/scripts/powershell#use-the-oauth-token-to-access-the-rest-api" data-raw-source="[Use the OAuth token to access the REST API](../../scripts/powershell.md#use-the-oauth-token-to-access-the-rest-api)">Use the OAuth token to access the REST API</a>.</td>

</tr>

<tr>
<td>System.CollectionId</td>
<td>The GUID of the TFS collection or Azure DevOps organization</td>
</tr>

<tr>
<td>System.DefaultWorkingDirectory</td>
<td>

[!INCLUDE [include](../includes/variables-build-sources-directory.md)]

</td>
</tr>

<tr>
<td>System.DefinitionId</td>
<td>The ID of the build pipeline.</td>
</tr>

<tr>
<td>System.HostType</td>
<td>Set to `build` if the pipeline is a build or `release` if the pipeline is a release.</td>
<tr>

<tr>
<td>System.PullRequest.PullRequestId</td>
<td>The ID of the pull request that caused this build. For example: `17`. (This variable is initialized only if the build ran because of a <a href="/azure/devops/repos/git/branch-policies#build-validation" data-raw-source="[Git PR affected by a branch policy](../../../repos/git/branch-policies#build-validation)">Git PR affected by a branch policy</a>.)</td>
</tr>

<tr>
<td>System.PullRequest.SourceBranch</td>
<td>The branch that is being reviewed in a pull request. For example: `refs/heads/users/raisa/new-feature`. (This variable is initialized only if the build ran because of a <a href="/azure/devops/repos/git/branch-policies#build-validation" data-raw-source="[Git PR affected by a branch policy](../../../repos/git/branch-policies#build-validation)">Git PR affected by a branch policy</a>.)</td>
</tr>

<tr>
<td>System.PullRequest.SourceCommitId</td>
<td>The commit that is being reviewed in a pull request. (This variable is initialized only if the build ran because of a <a href="/azure/devops/repos/git/branch-policies#build-validation" data-raw-source="[Git PR affected by a branch policy](../../../repos/git/branch-policies#build-validation)">Git PR affected by a branch policy</a>.)</td>
</tr>

<tr>
<td>System.PullRequest.SourceRepositoryURI</td>
<td>The URL to the repo that contains the pull request. For example: `http://our-server:8080/tfs/DefaultCollection/_git/OurProject`. (This variable is initialized only if the build ran because of a <a href="/azure/devops/repos/git/branch-policies#build-validation" data-raw-source="[Azure Repos Git PR affected by a branch policy](../../../repos/git/branch-policies#build-validation)">Azure Repos Git PR affected by a branch policy</a>.)</td>
</tr>

<tr>
<td>System.PullRequest.TargetBranch</td>
<td>The branch that is the target of a pull request. For example: `refs/heads/master`. This variable is initialized only if the build ran because of a <a href="/azure/devops/repos/git/branch-policies#build-validation" data-raw-source="[Git PR affected by a branch policy](../../../repos/git/branch-policies#build-validation)">Git PR affected by a branch policy</a>.</td>
</tr>

<tr>
<td>System.TeamFoundationCollectionUri</td>
<td>The URI of the team foundation collection. For example: `http://our-server:8080/tfs/DefaultCollection/`.
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
</tr>

<tr>
<td>System.TeamProject</td>
<td>The name of the project that contains this build.</td>
</tr>

<tr>
<td>System.TeamProjectId</td>
<td>The ID of the project that this build belongs to.</td>
</tr>

<tr>
<td>TF_BUILD</td>
<td>Set to `True` if the script is being run by a build task.
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
</tr>
</table>
