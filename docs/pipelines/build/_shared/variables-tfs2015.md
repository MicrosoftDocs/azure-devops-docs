---
ms.topic: include
---

## Agent variables

> [!NOTE]
> You can use agent variables as environment variables in your scripts and as parameters in your build tasks.
> You cannot use them to customize the build number or to apply a version control label or tag.

<table>
<tr><th>Variable</th><th>Description</th></tr>

<tr>
<td>Agent.BuildDirectory</td>
<td>
<p>The local path on the agent where all folders for a given build pipeline are created.</p>
<p>For example:</p>
<ul>
<li>TFS 2015.4: <code>C:\TfsData\Agents\Agent-MACHINENAME\_work\1</code></li>
<li>TFS 2015 RTM user-installed agent: <code>C:\Agent\_work\6c3842c6</code></li>
<li>TFS 2015 RTM built-in agent: <code>C:\TfsData\Build\_work\6c3842c6</code></li>
</ul>
</td>
</tr>

<tr>
<td>Agent.HomeDirectory</td>
<td>
<p>The directory the agent is installed into. This contains the agent software.</p>
<p>For example:</p>
<ul>
<li>TFS 2015.4: <code>C:\TfsData\Agents\Agent-MACHINENAME</code></li>
<li>TFS 2015 RTM user-installed agent: <code>C:\Agent</code></li>
<li>TFS 2015 RTM built-in agent: <code>C:\Program Files\Microsoft Team Foundation Server 14.0\Build</code></li>
</ul>
</td>
</tr>

<tr>
<td>Agent.Id</td>
<td>The ID of the agent.</td>
</tr>

<tr>
<td>Agent.JobStatus</td>
<td>The status of the build.
    <ul>
        <li>`Canceled`
        <li>`Failed`
        <li>`Succeeded`
        <li>`SucceededWithIssues` (partially successful)
    </ul>
<p><b>Note:</b> The environment variable can be referenced only as <code>agent.jobstatus</code>. <code>AGENT_JOBSTATUS</code> was not present in TFS 2015.</p>
</td>
</tr>

<tr>
<td>Agent.MachineName</td>
<td>The name of the machine on which the agent is installed.
This variable is available in **TFS 2015.4**, not in **TFS 2015 RTM**.</td>
</tr>

<tr>
<td>Agent.Name</td>
<td>
<p>The name of the agent that is registered with the pool.</p>
<p>This name is specified by you. See [agents](../../agents/agents.md).</p>
</td>
</tr>

<tr>
<td>Agent.WorkFolder</td>
<td>
The working directory for this agent.
For example: `c:\agent\_work`.
</td>
</tr>

</table>

## Build variables

<table>
<tr><th>Variable</th><th>Description</th></tr>

<tr>
<td>Build.ArtifactStagingDirectory</td>
<td>The local path on the agent where any artifacts are copied to before being pushed to their destination.
<br/><br/>
A typical way to use this folder is to publish your build artifacts with the [Copy files](../../tasks/utility/copy-files.md) and [Publish build artifacts](../../tasks/utility/publish-build-artifacts.md) tasks. See [Artifacts in Azure Pipelines](../artifacts.md).
<br/><br/>
For example:
<ul>
<li>TFS 2015.4: `C:\TfsData\Agents\Agent-MACHINENAME\_work\1\a`
<li>TFS 2015 RTM default agent: `C:\TfsData\Build\_work\6c3842c6\artifacts`
<li>TFS 2015 RTM agent installed by you: `C:\Agent\_work\6c3842c6\artifacts`
</ul>
This directory is purged before each new build, so you don't have to clean it up yourself.
<br/><br/>
In **TFS 2015.4**, Build.ArtifactStagingDirectory and Build.StagingDirectory are interchangeable.
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
</tr>

<tr>
<td>Build.BuildId</td>
<td>The ID of the record for the completed build.</td>
</tr>

<tr>
<td>Build.BuildNumber</td>
<td>The name of the completed build. You can specify the build number format that generates this value in the [pipeline options](../options.md).

A typical use of this variable is to make it part of the label format, which you specify on the [repository tab](../repository.md).
                
[!INCLUDE [include](../_shared/variables-invalid-label-characters.md)]
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of a version control tag.
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
<td>
The local path on the agent you can use as an output folder for compiled binaries. Available in **TFS 2015.4**.
<br/><br/>
By default, new build pipelines are not set up to clean this directory. You can define your build to clean it up on the [Repository tab](../repository.md).
<br/><br/>
For example: `C:\TfsData\Agents\Agent-MACHINENAME\_work\1\b`
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
</tr>

<tr>
<td>Build.DefinitionName</td>
<td>The name of the build pipeline.

[!INCLUDE [include](../_shared/variables-invalid-label-characters.md)]
</td>
</tr>

<tr>
<td>Build.DefinitionVersion</td>
<td>The version of the build pipeline.</td>
</tr>

<tr>
<td>Build.QueuedBy</td>
<td>See "[How are the identity variables set?](#identity_values)".

[!INCLUDE [include](../_shared/variables-invalid-label-characters.md)]</td>
</tr>

<tr>
<td>Build.QueuedById</td>
<td>See "[How are the identity variables set?](#identity_values)".</td>
</tr>

<tr>        
<td>Build.Repository.Clean</td>
<td>The value you've selected for **Clean** in the [source repository settings](../repository.md).
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
</tr>

<tr>
<td>Build.Repository.LocalPath</td>
<td>
[!INCLUDE [include](../_shared/variables-build-sources-directory.md)]
<p>This variable is synonymous with Build.SourcesDirectory.</p>
</td>
</tr>

<tr>
<td>Build.Repository.Name</td>
<td>The name of the [repository](../repository.md).
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
</tr>

<tr>
<td>Build.Repository.Provider</td>
<td>The type of [repository you selected](../repository.md).
<ul>
<li>`TfsGit`: [TFS Git repository](../../../repos/git/overview.md)
<li>`TfsVersionControl`: [Team Foundation Version Control](../../../repos/tfvc/overview.md)
<li>`Git`: Git repository hosted on an external server
<li>`Svn`: Subversion (available on TFS 2015.4)
</ul>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
</tr>

<tr>
<td>Build.Repository.Tfvc.Workspace</td>
<td>Defined if your [repository](../repository.md) is Team Foundation Version Control. The name of the [TFVC workspace](../../../repos/tfvc/create-work-workspaces.md) used by the build agent.
<br/><br/>
For example, if the Agent.BuildDirectory is `c:\agent\_work\12` and the Agent.Id is `8`, the workspace name could be: `ws_12_8`
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
</tr>

<tr>
<td>Build.Repository.Uri</td>
<td>The URL for the repository. For example:
<ul>
<li>Git: `https://fabrikamfiber/tfs/DefaultCollection/Scripts/_git/Scripts`
<li>TFVC: `https://fabrikamfiber/tfs/DefaultCollection/`
</ul>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
</tr>

<tr>
<td>Build.RequestedFor</td>
<td>See "[How are the identity variables set?](#identity_values)".
                
[!INCLUDE [include](../_shared/variables-invalid-label-characters.md)]</td>
</tr>

<tr>
<td>Build.RequestedForId</td>
<td>See "[How are the identity variables set?](#identity_values)".</td>
</tr>

<tr>
<td>Build.SourceBranch</td>
<td>The branch the build was queued for. Some examples:
<ul>
<li>Git repo branch: `refs/heads/master`</li>
<li>Git repo pull request: `refs/pull/1/merge`</li>
<li>TFVC repo branch: `$/teamproject/main`</li>
<li>TFVC repo gated check-in: `Gated_2016-06-06_05.20.51.4369;username@live.com`</li>
<li>TFVC repo shelveset build: `myshelveset;username@live.com`</li>
</ul>
When you use this variable in your build number format, the forward slash characters (`/`) are replaced with underscore characters <code>&#095;</code>).
<br/><br/>
Note: In TFVC, if you are running a gated check-in build or manually building a shelveset, you cannot use this variable in your build number format.
</td>
</tr>

<tr>
<td>Build.SourceBranchName</td>
<td>The name of the branch the build was queued for.
<ul>
<li>Git repo branch or pull request: The last path segment in the ref. For example, in `refs/heads/master` this value is `master`. In `refs/heads/feature/tools` this value is `tools`.</li>
<li>TFVC repo branch: The last path segment in the root server path for the workspace. For example in `$/teamproject/main` this value is `main`.</li>
<li>TFVC repo gated check-in or shelveset build is the name of the shelveset. For example, `Gated_2016-06-06_05.20.51.4369;username@live.com` or `myshelveset;username@live.com`.</li>
</ul>
Note: In TFVC, if you are running a gated check-in build or manually building a shelveset, you cannot use this variable in your build number format.
</td>
</tr>

<tr>
<td>Build.SourcesDirectory</td>
<td>
[!INCLUDE [include](../_shared/variables-build-sources-directory.md)]
<p>This variable is synonymous with Build.Repository.LocalPath.</p>
</td>
</tr>

<tr>
<td>Build.SourcesDirectoryHash</td>
<td>
Note: This variable is available in TFS 2015 RTM, but not in TFS 2015.4.
</td>
</tr>

<tr>
<td>Build.SourceVersion</td>
<td>The latest version control change that is included in this build.
<ul>
<li>Git: The [commit](../../../repos/git/commits.md) ID.</li>
<li>TFVC: the [changeset](../../../repos/tfvc/find-view-changesets.md).</li>
</ul>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
</tr>

<tr>
<td>Build.SourceVersionMessage</td>
<td>The comment of the commit or changeset.

Note: This variable is available in TFS 2015.4.
</td>
</tr>

<tr>
<td>Build.StagingDirectory</td>
<td>
<strong>TFS 2015 RTM</strong>
<br/><br/>
The local path on the agent you can use as an output folder for compiled binaries. For example: `C:\TfsData\Build\_work\6c3842c6\staging`.
<br/><br/>
By default, new build pipelines are not set up to clean this directory. You can define your build to clean it up on the [Repository tab](../repository.md).
<br/><br/>
<strong>TFS 2015.4</strong>
<br/><br/>
The local path on the agent where any artifacts are copied to before being pushed to their destination. For example: `C:\TfsData\Agents\Agent-MACHINENAME\_work\1\a`
<br/><br/>
This directory is purged before each new build, so you don't have to clean it up yourself.
<br/><br/>
A typical way to use this folder is to publish your build artifacts with the [Copy files](../../tasks/utility/copy-files.md) and [Publish build artifacts](../../tasks/utility/publish-build-artifacts.md) tasks. See [Artifacts in Azure Pipelines](../artifacts.md).
<br/><br/>
In **TFS 2015.4**, Build.ArtifactStagingDirectory and Build.StagingDirectory are interchangeable.
<br/><br/>
<strong>All versions of TFS 2015</strong>
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
</td>
</tr>

<tr>
<td>Build.Repository.Git.SubmoduleCheckout</td>
<td>The value you've selected for **Checkout submodules** on the [repository tab](../repository.md).
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
</tr>

<tr>
<td>Build.SourceTfvcShelveset</td>
<td>Defined if your [repository](../repository.md) is Team Foundation Version Control.
<br/><br/>
If you are running a [gated build](../triggers.md#gated) or a [shelveset build](../../create-first-pipeline.md#queueabuild), this is set to the name of the [shelveset](../../../repos/tfvc/suspend-your-work-manage-your-shelvesets.md) you are building.
<br/><br/>
Note: This variable yields a value that is invalid for build use in a build number format.
</td>
</tr>

<tr>
<td>Common.TestResultsDirectory</td>
<td>The local path on the agent where the test results are created. For example: `c:\agent\_work\1\TestResults`. <strong>Available in TFS 2015.4</strong>.
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
</tr>

</table>

## System variables

<table>
<tr><th>Variable</th><th>Description</th></tr>

<tr>
<td>System.AccessToken</td>
<td>Available in <strong>TFS 2015.4</strong>. [Use the OAuth token to access the REST API](../../scripts/powershell.md#oauth).
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.</td>
</tr>

<tr>
<td>System.CollectionId</td>
<td>The GUID of the TFS collection or Azure DevOps organization</td>
</tr>

<tr>
<td>System.DefaultWorkingDirectory</td>
<td>
[!INCLUDE [include](../_shared/variables-build-sources-directory.md)]
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
<td>The ID of the pull request that caused this build. For example: `17`. (This variable is initialized only if the build ran because of a [Git PR affected by a branch policy](../../../repos/git/branch-policies.md#build-validation).)</td>
</tr>

<tr>
<td>System.PullRequest.SourceBranch</td>
<td>The branch that is being reviewed in a pull request. For example: `refs/heads/users/raisa/new-feature`. (This variable is initialized only if the build ran because of a [Git PR affected by a branch policy](../../../repos/git/branch-policies.md#build-validation).)</td>
</tr>

<tr>
<td>System.PullRequest.SourceRepositoryURI</td>
<td>The URL to the repo that contains the pull request. For example: `http://our-server:8080/tfs/DefaultCollection/_git/OurProject`. (This variable is initialized only if the build ran because of a [Azure Repos Git PR affected by a branch policy](../../../repos/git/branch-policies.md#build-validation).)</td>
</tr>

<tr>
<td>System.PullRequest.TargetBranch</td>
<td>The branch that is the target of a pull request. For example: `refs/heads/master`. This variable is initialized only if the build ran because of a [Git PR affected by a branch policy](../../../repos/git/branch-policies.md#build-validation).</td>
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