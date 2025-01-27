---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/13/2020
---
<a id="agent-variables"></a>

## Agent variables (DevOps Server 2022)

> [!NOTE]
> You can use agent variables as environment variables in your scripts and as parameters in your build tasks.
> You can't use them to customize the build number or to apply a version control label or tag.

| Variable | Description |
|:---------|:------------|
| Agent.BuildDirectory | The local path on the agent where all folders for a given build pipeline are created. This variable has the same value as `Pipeline.Workspace`. For example: `/home/vsts/work/1`. For more information about the agent directory structure, see [Agent directory structure](../../agents/agents.md#agent-directory-structure).|
| Agent.ContainerMapping | A mapping from container resource names in YAML to their Docker IDs at runtime. Example follows table. |
| Agent.HomeDirectory | The directory the agent is installed into and contains the agent software. For example: `c:\agent`. For more information about the agent directory structure, see [Agent directory structure](../../agents/agents.md#agent-directory-structure).|
| Agent.Id | The ID of the agent. |
| Agent.JobName | The name of the running job. The name is usually `Job` or `__default`, but in multi-config scenarios, it's the configuration. |
| Agent.JobStatus | The status of the build.<br>    <ul>        <li>`Canceled`        <li>`Failed`        <li>`Succeeded`        <li>`SucceededWithIssues` (partially successful)   <li> `Skipped` (last job) </ul>The environment variable should be referenced as `AGENT_JOBSTATUS`. The older `agent.jobstatus` is available for backwards compatibility. |
| Agent.MachineName | The name of the machine on which the agent is installed. |
| Agent.Name | The name of the agent that is registered with the pool.<br><br>If you're using a self-hosted agent, then this value is the name you specify. See [agents](../../agents/agents.md). |
| Agent.OS | The operating system of the agent host. Valid values are:<br><ul><li>`Windows_NT`<li>`Darwin`<li>`Linux`</ul>If you're running in a container, the agent host and container might be running different operating systems. |
| Agent.OSArchitecture | The operating system processor architecture of the agent host. Valid values are:<br><ul><li>`X86`<li>`X64`<li>`ARM`</ul> |
| Agent.TempDirectory | A temporary folder that is cleaned after each pipeline job. This directory is used by tasks such as [.NET Core CLI task](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2) to hold temporary items like test results before they're published.<br><br>For example: `/home/vsts/work/_temp` for Ubuntu. |
| Agent.ToolsDirectory | The directory used by tasks such as [Node Tool Installer](/azure/devops/pipelines/tasks/reference/node-tool-v0) and [Use Python Version](/azure/devops/pipelines/tasks/reference/use-python-version-v0) to switch between multiple versions of a tool.<br><br>These tasks add tools from this directory to `PATH` so that subsequent build steps can use them.<br><br>Learn about [managing this directory on a self-hosted agent](https://go.microsoft.com/fwlink/?linkid=2008884). |
| Agent.WorkFolder | The working directory for this agent. For example: `c:\agent_work`.<br><br>Note: This directory isn't guaranteed to be writable by pipeline tasks (for example, when mapped into a container). For more information about the agent directory structure, see [Agent directory structure](../../agents/agents.md#agent-directory-structure).|

Example of **Agent.ContainerMapping**:

```yaml
{
  "one_container": {
    "id": "bdbb357d73a0bd3550a1a5b778b62a4c88ed2051c7802a0659f1ff6e76910190"
  },
  "another_container": {
    "id": "82652975109ec494876a8ccbb875459c945982952e0a72ad74c91216707162bb"
  }
}
```

## Build variables (DevOps Server 2022)

<a id="build-variables"></a>

When you use a variable in a template that isn't marked as available in templates, the variable doesn't render. The variable doesn't render because its value isn't accessible within the template's scope. 


| Variable | Description | Available in [templates](../../process/templates.md)? |
|:---------|:------------|:------------------------------------------------------|
| Build.ArtifactStagingDirectory | The local path on the agent where any artifacts are copied to before being pushed to their destination. For example: `c:\agent_work\1\a`. For more information about the agent directory structure, see [Agent directory structure](../../agents/agents.md#agent-directory-structure).<br><br>A typical way to use this folder is to publish your build artifacts with the [Copy files](/azure/devops/pipelines/tasks/reference/copy-files-v2) and [Publish build artifacts](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1) tasks. <br><br>Note: Build.ArtifactStagingDirectory and Build.StagingDirectory are interchangeable. This directory is purged before each new build, so you don't have to clean it up yourself.<br><br> See [Artifacts in Azure Pipelines](../../artifacts/artifacts-overview.md).<br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |
| Build.BuildId | The ID of the record for the completed build. | No |
| Build.BuildNumber | The name of the completed build, also known as the run number. You can specify [what is included](../../process/run-number.md) in this value.<br><br> A typical use of this variable is to make it part of the label format, which you specify on the [repository tab](../../repos/index.md).<br><br>Note: This value can contain whitespace or other invalid label characters. In these cases, the [label format](../../../repos/tfvc/labels-command.md) fails.<br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |
| Build.BuildUri | The URI for the build. For example: `vstfs:///Build/Build/1430`. <br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |
| Build.BinariesDirectory | The local path on the agent you can use as an output folder for compiled binaries. For example: `c:\agent_work\1\b`. For more information about the agent directory structure, see [Agent directory structure](../../agents/agents.md#agent-directory-structure).<br><br>By default, new build pipelines aren't set up to clean this directory. You can define your build to clean it up on the [Repository tab](../../repos/index.md). <br><br> <br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |
| Build.ContainerId | The ID of the container for your artifact. When you upload an artifact in your pipeline, it's added to a container that is specific for that particular artifact. | No |
| Build.CronSchedule.DisplayName | The `displayName` of the cron schedule that triggered the pipeline run. This variable is only set if a YAML scheduled trigger triggers the pipeline run. For more information, see [schedules.cron definition - Build.CronSchedule.DisplayName variable](/azure/devops/pipelines/yaml-schema/schedules-cron#buildcronscheduledisplayname-variable). This variable is available in Azure DevOps Server 2022.1 and higher. | Yes |
| Build.DefinitionName | The name of the build pipeline. <br><br>Note: This value can contain whitespace or other invalid label characters. In these cases, the [label format](../../../repos/tfvc/labels-command.md) fails. | Yes |
| Build.DefinitionVersion | The version of the build pipeline. | Yes |
| Build.QueuedBy | See [How are the identity variables set?](#identity_values).<br><br>Note: This value can contain whitespace or other invalid label characters. In these cases, the [label format](../../../repos/tfvc/labels-command.md) fails. | Yes |
| Build.QueuedById | See [How are the identity variables set?](#identity_values). | Yes |
| Build.Reason | The event that caused the build to run.<ul><li>`Manual`: A user manually queued the build.</li><li>`IndividualCI`: **Continuous integration (CI)** triggered by a Git push or a TFVC check-in.</li><li>`BatchedCI`: **Continuous integration (CI)** triggered by a Git push or a TFVC check-in, and the **Batch changes** was selected.</li><li>`Schedule`: **Scheduled** trigger.</li><li>`ValidateShelveset`: A user manually queued the build of a specific TFVC shelveset.</li><li>`CheckInShelveset`: **Gated check-in** trigger.</li><li>`PullRequest`: A Git branch policy that requires a build triggers the build.</li><li>`BuildCompletion`: [another build](../../process/pipeline-triggers.md) triggers the build</li><li>`ResourceTrigger`: A [resource trigger](../../process/resources.md) or [another build](../../process/pipeline-triggers.md) triggers the build.</li></ul>See [Build pipeline triggers](../triggers.md), [Improve code quality with branch policies](../../../repos/git/branch-policies.md). | Yes |
| Build.Repository.Clean | The value you select for **Clean** in the [source repository settings](../../repos/index.md).<br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |
| Build.Repository.LocalPath | The local path on the agent where your source code files are downloaded. For example: `c:\agent_work\1\s`. <br><br>By default, new build pipelines update only the changed files. You can modify how files are downloaded on the [Repository tab](../../repos/index.md).<br><br>Important note: If you check out only one Git repository, this path is the exact path to the code. If you check out multiple repositories, the behavior is as follows (and might differ from the value of the Build.SourcesDirectory variable):<br><ul><li>If the checkout step for the self (primary) repository has no custom checkout path defined, or the checkout path is the multi-checkout default path `$(Pipeline.Workspace)/s/<RepoName>` for the self repository, the value of this variable reverts to its default value, which is `$(Pipeline.Workspace)/s`.</li><li>If the checkout step for the self (primary) repository has a custom checkout path defined and it's not its multi-checkout default path, this variable contains the exact path to the self repository.</li></ul>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |
| Build.Repository.ID | The unique identifier of the [repository](../../repos/index.md).<br><br>This value doesn't change, even if the name of the repository does.<br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |
| Build.Repository.Name | The name of the triggering [repository](../../repos/index.md).<br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |
| Build.Repository.Provider | The type of the triggering [repository](../../repos/index.md).<br><ul><li>`TfsGit`: [TFS Git repository](../../../repos/git/index.yml)<li>`TfsVersionControl`: [Team Foundation Version Control](../../../repos/tfvc/what-is-tfvc.md) (TFVC) <li>`Git`: Git repository hosted on an external server<li>`GitHub`<li>`Svn`: Subversion</ul>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |
| Build.Repository.Tfvc.Workspace | Defined if your [repository](../../repos/index.md) is Team Foundation Version Control. The name of the [TFVC workspace](../../../repos/tfvc/create-work-workspaces.md) used by the build agent.<br><br>For example, if the Agent.BuildDirectory is `c:\agent_work\12` and the Agent.Id is `8`, the workspace name could be: `ws_12_8`.<br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |
| Build.Repository.Uri | The URL for the triggering repository. For example:<ul><li>Git: [https://fabrikamfiber@dev.azure.com/fabrikamfiber/_git/Scripts](https://fabrikamfiber@dev.azure.com/fabrikamfiber/_git/Scripts)<li>TFVC: [https://dev.azure.com/fabrikamfiber/](https://dev.azure.com/fabrikamfiber/)</ul>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |
| Build.RequestedFor | See "[How are the identity variables set?](#identity_values)".<br><br>Note: This value can contain whitespace or other invalid label characters. In these cases, the [label format](../../../repos/tfvc/labels-command.md) fails. | Yes |
| Build.RequestedForEmail | See "[How are the identity variables set?](#identity_values)". | Yes |
| Build.RequestedForId | See "[How are the identity variables set?](#identity_values)". | Yes |
| Build.SourceBranch | The branch of the triggering repo the build was queued for. Some examples:<br><ul><li>Git repo branch: `refs/heads/main`</li><li>Git repo pull request: `refs/pull/1/merge`</li><li>TFVC repo branch: `$/teamproject/main`</li><li>TFVC repo gated check-in: `Gated_2016-06-06_05.20.51.4369;username@live.com`</li><li>TFVC repo shelveset build: `myshelveset;username@live.com`</li><li>When a tag triggers your pipeline: `refs/tags/your-tag-name`</li></ul>When you use this variable in your build number format, the forward slash characters (`/`) are replaced with underscore characters `_`).<br><br>Note: In TFVC, if you're running a gated check-in build or manually building a shelveset, you can't use this variable in your build number format. | Yes |
| Build.SourceBranchName | The name of the branch in the triggering repo the build was queued for.<br><ul><li>Git repo branch, pull request, or tag: The last path segment in the ref. For example, in `refs/heads/main`, this value is `main`. In `refs/heads/feature/tools`, this value is `tools`. In `refs/tags/your-tag-name`, this value is `your-tag-name`.</li><li>TFVC repo branch: The last path segment in the root server path for the workspace. For example, in `$/teamproject/main`, this value is `main`.</li><li>TFVC repo gated check-in or shelveset build is the name of the shelveset. For example, `Gated_2016-06-06_05.20.51.4369;username@live.com` or `myshelveset;username@live.com`.</li></ul>Note: In TFVC, if you're running a gated check-in build or manually building a shelveset, you can't use this variable in your build number format. | Yes |
| Build.SourcesDirectory | The local path on the agent where your source code files are downloaded. For example: `c:\agent_work\1\s`. For more information about the agent directory structure, see [Agent directory structure](../../agents/agents.md#agent-directory-structure).<br><br>By default, new build pipelines update only the changed files. <br><br>Important note: If you check out only one Git repository, this path is the exact path to the code. If you check out multiple repositories, it reverts to its default value, which is `$(Pipeline.Workspace)/s`, even if the self (primary) repository is checked out to a custom path different from its multi-checkout default path `$(Pipeline.Workspace)/s/<RepoName>` (in this respect, the variable differs from the behavior of the Build.Repository.LocalPath variable).<br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |
| Build.SourceVersion | The latest version control change of the triggering repo that is included in this build.<br><ul><li>Git: The [commit](../../../repos/git/commits.md) ID.</li><li>TFVC: the [changeset](../../../repos/tfvc/find-view-changesets.md).</li></ul>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | Yes |
| Build.SourceVersionMessage | The comment of the commit or changeset for the triggering repo. We truncate the message to the first line or 200 characters, whichever is shorter.<br><br>The `Build.SourceVersionMessage` corresponds to the message on `Build.SourceVersion` commit. The `Build.SourceVersion` commit for a PR build is the merge commit (not the commit on the source branch). <br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. <br><br>Also, this variable is only available on the step level. It isn't available in the job or stage levels. That is, the message isn't extracted until the job starts and the code is checked out. <br><br>>Note: The **Build.SourceVersionMessage** variable doesn't work with classic build pipelines in Bitbucket repositories when **Batch changes while a build is in progress** is enabled. | No |
| Build.StagingDirectory | The local path on the agent where any artifacts are copied to before being pushed to their destination. For example: `c:\agent_work\1\a`. For more information about the agent directory structure, see [Agent directory structure](../../agents/agents.md#agent-directory-structure).<br><br>A typical way to use this folder is to publish your build artifacts with the [Copy files](/azure/devops/pipelines/tasks/reference/copy-files-v2) and [Publish build artifacts](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1) tasks.<br><br>Note: Build.ArtifactStagingDirectory and Build.StagingDirectory are interchangeable. This directory is purged before each new build, so you don't have to clean it up yourself. <br><br>See [Artifacts in Azure Pipelines](../../artifacts/artifacts-overview.md). <br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |
| Build.Repository.Git.SubmoduleCheckout | The value you select for **Checkout submodules** on the [repository tab](../../repos/index.md). With multiple repos checked out, this value tracks the triggering repository's setting.<br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |
| Build.SourceTfvcShelveset | Defined if your [repository](../../repos/index.md) is Team Foundation Version Control.<br><br>If you're running a [gated build](../../repos/tfvc.md#gated) or a [shelveset build](../../create-first-pipeline.md#queueabuild), this variable is set to the name of the [shelveset](../../../repos/tfvc/suspend-your-work-manage-your-shelvesets.md) you're building.<br><br>Note: This variable yields a value that is invalid for build use in a build number format. | No |
| Build.TriggeredBy.BuildId | If [another build triggers](../../process/pipeline-triggers.md) the build, then this variable is set to the BuildID of the triggering build. In Classic pipelines, a build completion trigger triggers this variable. <br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. <br><br>If you're triggering a YAML pipeline using `resources`, you should use the [resources variables](/azure/devops/pipelines/yaml-schema/resources-pipelines-pipeline#the-pipeline-resource-metadata-as-predefined-variables) instead. | No |
| Build.TriggeredBy.DefinitionId | If [another build triggers](../../process/pipeline-triggers.md) the build, then this variable is set to the DefinitionID of the triggering build. In Classic pipelines, a build completion trigger triggers this variable. <br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. <br><br>If you're triggering a YAML pipeline using `resources`, you should use the [resources variables](/azure/devops/pipelines/yaml-schema/resources-pipelines-pipeline#the-pipeline-resource-metadata-as-predefined-variables) instead.  | No |
| Build.TriggeredBy.DefinitionName | If [another build triggers](../../process/pipeline-triggers.md) the build, then this variable is set to the name of the triggering build pipeline. In Classic pipelines, a build completion trigger triggers this variable.<br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. <br><br>If you're triggering a YAML pipeline using `resources`, you should use the [resources variables](/azure/devops/pipelines/yaml-schema/resources-pipelines-pipeline#the-pipeline-resource-metadata-as-predefined-variables) instead.  | No |
| Build.TriggeredBy.BuildNumber | If [another build triggers](../../process/pipeline-triggers.md) the build, then this variable is set to the number of the triggering build. In Classic pipelines, a build completion trigger triggers this variable.<br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag.<br><br>If you're triggering a YAML pipeline using `resources`, you should use the [resources variables](/azure/devops/pipelines/yaml-schema/resources-pipelines-pipeline#the-pipeline-resource-metadata-as-predefined-variables) instead.  | No |
| Build.TriggeredBy.ProjectID | If [another build triggers](../../process/pipeline-triggers.md) the build, then this variable is set to ID of the project that contains the triggering build. In Classic pipelines, a build completion trigger triggers this variable. <br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. <br><br>If you're triggering a YAML pipeline using `resources`, you should use the [resources variables](/azure/devops/pipelines/yaml-schema/resources-pipelines-pipeline#the-pipeline-resource-metadata-as-predefined-variables) instead. | No |
| Common.TestResultsDirectory | The local path on the agent where the test results are created. For example: `c:\agent_work\1\TestResults`. For more information about the agent directory structure, see [Agent directory structure](../../agents/agents.md#agent-directory-structure).<br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |

## Pipeline variables (DevOps Server 2022)

<a id="pipeline-variables"></a>

| Variable | Description |
|:---------|:------------|
| Pipeline.Workspace | Workspace directory for a particular pipeline. This variable has the same value as `Agent.BuildDirectory`. For example, `/home/vsts/work/1`. For more information about the agent directory structure, see [Agent directory structure](../../agents/agents.md#agent-directory-structure).|

> [!TIP]
> If you're using classic release pipelines, you can use [classic releases and artifacts variables](../../release/variables.md) to store and access data throughout your pipeline.

##  Deployment job variables (DevOps Server 2022)

<a id="deployment-job-variables"></a>

These variables are scoped to a specific [Deployment job](../../process/deployment-jobs.md) and is resolved only at job execution time. 

| Variable | Description |
|:---------|:------------|
| Environment.Name | Name of the environment targeted in the deployment job to run the deployment steps and record the deployment history. For example, `smarthotel-dev`. |
| Environment.Id | ID of the environment targeted in the deployment job. For example, `10`. |
| Environment.ResourceName | Name of the specific resource within the environment targeted in the deployment job to run the deployment steps and record the deployment history. For example, `bookings` which is a Kubernetes namespace that is added as a resource to the environment `smarthotel-dev`. |
| Environment.ResourceId | ID of the specific resource within the environment targeted in the deployment job to run the deployment steps. For example, `4`. |
| Strategy.Name | The name of the deployment strategy: `canary`, `runOnce`, or `rolling`. |
| Strategy.CycleName | The current cycle name in a deployment. Options are `PreIteration`, `Iteration`, or `PostIteration`. |

## System variables (DevOps Server 2022)

<a id="system-variables"></a>

When you use a variable in a template that isn't marked as available in templates, the variable doesn't render. The variable doesn't render because its value isn't accessible within the template's scope. 

| Variable | Description | Available in [templates](../../process/templates.md)? |
|:---------|:------------|:------------------------------------------------------|
| System.AccessToken | [Use the OAuth token to access the REST API](../../scripts/powershell.md#example-powershell-script-access-rest-api). <br><br>[Use System.AccessToken from YAML scripts](../variables.md#systemaccesstoken). <br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | Yes |
| System.CollectionId | The GUID of the Azure DevOps organization or collection. | Yes |
| System.CollectionUri | The URI of the Azure DevOps organization or collection. For example: `https://dev.azure.com/fabrikamfiber/`. | Yes |
| System.DefaultWorkingDirectory | [!INCLUDE [include](../includes/variables-build-sources-directory.md)] | Yes |
| System.DefinitionId | The ID of the build pipeline. | Yes |
| System.HostType | Set to `build` if the pipeline is a build. For a release, the values are `deployment` for a Deployment group job, `gates` during evaluation of gates, and `release` for other (Agent and Agentless) jobs. | Yes |
| System.JobAttempt | Set to 1 the first time this job is attempted, and increments every time the job is retried. | No |
| System.JobDisplayName | The human-readable name given to a job. | No |
| System.JobId | A unique identifier for a single attempt of a single job. The value is unique to the current pipeline. | No |
| System.JobName | The name of the job, typically used for expressing dependencies and accessing output variables. | No |
| System.PhaseAttempt | Set to 1 the first time this phase is attempted, and increments every time the job is retried.<br><br>Note: *Phase* is a mostly redundant concept, which represents the design-time for a job (whereas job was the runtime version of a phase). The concept of phase is mostly removed from Azure Pipelines. Matrix and multi-config jobs are the only place where a phase is still distinct from a job. One phase can instantiate multiple jobs, which differ only in their inputs. | No |
| System.PhaseDisplayName | The human-readable name given to a phase. | No |
| System.PhaseName | A string-based identifier for a job, typically used for expressing dependencies and accessing output variables. | No |
| System.PlanId | A string-based identifier for a single pipeline run. | No |
| System.PullRequest.IsFork | If the pull request is from a fork of the repository, this variable is set to `True`. Otherwise, it's set to `False`. | Yes |
| System.PullRequest.PullRequestId | The ID of the pull request that caused this build. For example: `17`. (This variable is initialized only if the build ran because of a [Git PR affected by a branch policy](../../../repos/git/branch-policies.md#build-validation)). | No |
| System.PullRequest.PullRequestNumber | The number of the pull request that caused this build. This variable is populated for pull requests from GitHub that have a different pull request ID and pull request number. This variable is only available in a YAML pipeline if a branch policy affects the PR. | No |
| System.PullRequest.targetBranchName | The name of the target branch for a pull request. This variable can be used in a pipeline to conditionally execute tasks or steps based on the target branch of the pull request. For example, you might want to trigger a different set of tests or code analysis tools depending on the branch that the changes are being merged into. | No |
| System.PullRequest.SourceBranch | The branch that is being reviewed in a pull request. For example: `refs/heads/users/raisa/new-feature` for Azure Repos. (This variable is initialized only if the build ran because of a [Git PR affected by a branch policy](../../../repos/git/branch-policies.md#build-validation)). This variable is only available in a YAML pipeline if a branch policy affects the PR. | No |
| System.PullRequest.SourceRepositoryURI | The URL to the repo that contains the pull request. For example: `https://dev.azure.com/ouraccount/_git/OurProject`.  | No |
| System.PullRequest.TargetBranch | The branch that is the target of a pull request. For example: `refs/heads/main` when your repository is in Azure Repos and `main` when your repository is in GitHub. This variable is initialized only if the build ran because of a [Git PR affected by a branch policy](../../../repos/git/branch-policies.md#build-validation). This variable is only available in a YAML pipeline if a branch policy affects the PR. | No |
| System.StageAttempt | Set to 1 the first time this stage is attempted, and increments every time the stage is retried. | No |
| System.StageDisplayName | The human-readable name given to a stage. | No |
| System.StageName | A string-based identifier for a stage, typically used for expressing dependencies and accessing output variables. | No |
| System.TeamFoundationCollectionUri | The URI of the Azure DevOps organization or collection. For example: `https://dev.azure.com/fabrikamfiber/`. <br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | Yes |
| System.TeamProject | The name of the project that contains this build. | Yes |
| System.TeamProjectId | The ID of the project that this build belongs to. | Yes |
| System.TimelineId | A string-based identifier for the execution details and logs of a single pipeline run. | No |
| TF_BUILD | Set to `True` if a build task runs the script. <br><br>It can be used as an environment variable in a script and as a parameter in a build task. It can't be used as part of the build number or as a version control tag. | No |

## Checks variables (DevOps Server 2022)

<a id="checks-variables"></a>

| Variable | Description |
|:---------|:------------|
| Checks.StageAttempt | Set to 1 the first time this stage is attempted, and increments every time the stage is retried. <br>This variable can only be used within an [approval or check](../../process/approvals.md) for an environment. For example, you could use `$(Checks.StageAttempt)` within an [Invoke REST API check](../../process/approvals.md#invoke-rest-api). <br>:::image type="content" source="../media/checks-stageattempt-var.png" alt-text="Add the stage attempt as a parameter."::: |
