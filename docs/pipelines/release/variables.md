---
title: Use variables in Classic release pipelines
description: Learn how to use the different types of variables in a Classic release pipeline.
author: geekzter
ms.author: ericvan
ms.assetid: 864FEB87-FE29-446D-804E-AD6ABDEA82C3
ms.topic: conceptual
ms.date: 08/15/2024
monikerRange: '<= azure-devops'
---

# Use variables in Classic release pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Using variables in Classic release pipelines is a convenient way to exchange and transport data throughout your pipeline. Each variable is stored as a string and its value can change between pipeline runs.

::: moniker range="azure-devops"

Unlike [Runtime parameters](../process/runtime-parameters.md), which are only available at template parsing time, variables in Classic release pipelines are accessible throughout the entire deployment process

::: moniker-end

When setting up tasks to deploy your application in each stage of your Classic release pipeline, variables can help you:

- **Simplify customization**: Define a generic deployment pipeline once and easily adapt it for different stages. For instance, use a variable to represent a web deployment's connection string, adjusting its value as needed for each stage. These are known as *custom variables*.

- **Leverage contextual information**: Access details about the release context, such as a [stage](../process/stages.md), an [artifact](artifacts.md), or the [agent](../agents/agents.md) running the deployment. For example, your scripts might require the build location for download, or the agent's working directory to create temporary files. These are referred to as *default variables*.

> [!NOTE] 
> For YAML pipelines, see [user-defined variables](../process/variables.md) and [predefined variables](../build/variables.md) for more details.

## Default variables

Default variables provide essential information about the execution context to your running tasks and scripts. These variables allow you to access details about the *system*, *release*, *stage*, or *agent* in which they are running.

With the exception of *System.Debug*, default variables are read-only, with their values automatically set by the system.

Some of the most significant variables are described in the following tables. To view the full list, see [View the current values of all variables](#view-vars).

### System variables

| Variable name                   | Description                                                                                                                                                       |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **System.TeamFoundationServerUri** | The URL of the service connection in Azure Pipelines. Use this from your scripts or tasks to call Azure Pipelines REST APIs.<br/><br />Example: `https://fabrikam.vsrm.visualstudio.com/` |
| **System.TeamFoundationCollectionUri** | The URL of the Team Foundation collection or Azure Pipelines. Use this from your scripts or tasks to call REST APIs on other services such as Build and Version control.<br/><br />Example: `https://dev.azure.com/fabrikam/` |
| **System.CollectionId**         | The ID of the collection to which this build or release belongs.<br/><br />Example: `6c6f3423-1c84-4625-995a-f7f143a1e43d`                                         |
| **System.DefinitionId**         | The ID of the release pipeline to which the current release belongs.<br/><br />Example: `1`                                                                        |
| **System.TeamProject**          | The name of the project to which this build or release belongs.<br/><br />Example: `Fabrikam`                                                                      |
| **System.TeamProjectId**        | The ID of the project to which this build or release belongs.<br/><br />Example: `79f5c12e-3337-4151-be41-a268d2c73344`                                            |
| **System.ArtifactsDirectory**   | The directory to which artifacts are downloaded during deployment of a release. The directory is cleared before every deployment if it requires artifacts to be downloaded to the agent. Same as Agent.ReleaseDirectory and System.DefaultWorkingDirectory.<br/><br />Example: `C:\agent\_work\r1\a`  |
| **System.DefaultWorkingDirectory** | The directory to which artifacts are downloaded during deployment of a release. The directory is cleared before every deployment if it requires artifacts to be downloaded to the agent. Same as Agent.ReleaseDirectory and System.ArtifactsDirectory.<br/><br />Example: `C:\agent\_work\r1\a` |
| **System.WorkFolder**           | The working directory for this agent, where subfolders are created for every build or release. Same as Agent.RootDirectory and Agent.WorkFolder.<br/><br />Example: `C:\agent\_work`  |
| **System.Debug**                | This is the only system variable that can be _set_ by the users. Set this to true to [run the release in debug mode](#debug-mode) to assist in fault-finding.<br/><br />Example: `true` |

### Release variables

| Variable name                   | Description                                                                                                                                                       |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Release.AttemptNumber**       | The number of times this release is deployed in this stage.<br/><br />Example:  `1`                                                                               |
| **Release.DefinitionEnvironmentId**    | The ID of the stage in the corresponding release pipeline.<br/><br />Example: `1`                                                                          |
| **Release.DefinitionId**               | The ID of the release pipeline to which the current release belongs.<br/><br />Example: `1`                                                                |
| **Release.DefinitionName**             | The name of the release pipeline to which the current release belongs.<br/><br />Example: `fabrikam-cd`                                                    |
| **Release.Deployment.RequestedFor**    | The display name of the identity that triggered (started) the deployment currently in progress.<br/><br />Example: `Mateo Escobedo`                        |
| **Release.Deployment.RequestedForEmail** | The email address of the identity that triggered (started) the deployment currently in progress.<br/><br />Example: `mateo@fabrikam.com`                 |
| **Release.Deployment.RequestedForId**  | The ID of the identity that triggered (started) the deployment currently in progress.<br/><br />Example: `2f435d07-769f-4e46-849d-10d1ab9ba6ab`            |
| **Release.DeploymentID**               | The ID of the deployment. Unique per job.<br/><br />Example: `254`                                                                                         |
| **Release.DeployPhaseID**              | The ID of the phase where deployment is running.<br/><br />Example: `127`                                                                                  |
| **Release.EnvironmentId**              | The ID of the stage instance in a release to which the deployment is currently in progress.<br/><br />Example: `276`                                       |
| **Release.EnvironmentName**            | The name of stage to which deployment is currently in progress.<br/><br />Example: `Dev`                                                                   |
| **Release.EnvironmentUri**             | The URI of the stage instance in a release to which deployment is currently in progress.<br/><br />Example: `vstfs://ReleaseManagement/Environment/276`    |
| **Release.Environments.{stage-name}.status** | The deployment status of the stage.<br/><br />Example: `InProgress`                                                                                  |
| **Release.PrimaryArtifactSourceAlias** | The alias of the primary artifact source.<br/><br />Example: `fabrikam\_web`                                                                               |
| **Release.Reason**                     | The reason for the deployment. Supported values are:<br>  `ContinuousIntegration` - the release started in Continuous Deployment after a build completed.<br>  `Manual` - the release started manually.<br>  `None` - the deployment reason has not been specified.<br>  `Schedule` - the release started from a schedule. |
| **Release.ReleaseDescription**         | The text description provided at the time of the release.<br/><br />Example: `Critical security patch`                                                     |
| **Release.ReleaseId**                  | The identifier of the current release record.<br/><br />Example: `118`                                                                                     |
| **Release.ReleaseName**                | The name of the current release.<br/><br />Example: `Release-47`                                                                                           |
| **Release.ReleaseUri**                 | The URI of the current release.<br/><br />Example: `vstfs://ReleaseManagement/Release/118`                                                                 |
| **Release.ReleaseWebURL**              | The URL for this release.<br/><br />Example: `https://dev.azure.com/fabrikam/f3325c6c/_release?releaseId=392&_a=release-summary`                           |
| **Release.RequestedFor**               | The display name of the identity that triggered the release.<br/><br />Example: `Mateo Escobedo`                                                           |
| **Release.RequestedForEmail**          | The email address of the identity that triggered the release.<br/><br />Example: `mateo@fabrikam.com`                                                      |
| **Release.RequestedForId**             | The ID of the identity that triggered the release.<br/><br />Example: `2f435d07-769f-4e46-849d-10d1ab9ba6ab`                                               |
| **Release.SkipArtifactsDownload**      | Boolean value that specifies whether or not to skip downloading of artifacts to the agent.<br/><br />Example: `FALSE`                                      |
| **Release.TriggeringArtifact.Alias**   | The alias of the artifact which triggered the release. This is empty when the release was scheduled or triggered manually.<br/><br />Example: `fabrikam\_app`|


### Release-stage variables

| Variable name                                | Description                                                                                        |
|----------------------------------------------|----------------------------------------------------------------------------------------------------|
| **Release.Environments.{stage name}.Status** | The status of deployment of this release within a specified stage.<br/><br />Example: `NotStarted` |

### Agent variables

| Variable name            | Description                                                                                                                                                                   |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Agent.Name**           | The name of the agent as registered with the [agent pool](../agents/pools-queues.md). This is likely to be different from the computer name.<br/><br />Example: `fabrikam-agent` |
| **Agent.MachineName**    | The name of the computer on which the agent is configured.<br/><br />Example: `fabrikam-agent`                                                                                |
| **Agent.Version**        | The version of the agent software.<br/><br />Example: `2.109.1`                                                                                                               |
| **Agent.JobName**        | The name of the job that is running, such as Release or Build.<br/><br />Example: `Release`                                                                                   |
| **Agent.HomeDirectory**  | The folder where the agent is installed. This folder contains the code and resources for the agent.<br/><br />Example: `C:\agent`                                             |
| **Agent.ReleaseDirectory** | The directory to which artifacts are downloaded during deployment of a release. The directory is cleared before every deployment if it requires artifacts to be downloaded to the agent. Same as System.ArtifactsDirectory and System.DefaultWorkingDirectory.<br/><br />Example: `C:\agent\_work\r1\a` |
| **Agent.RootDirectory**  | The working directory for this agent, where subfolders are created for every build or release. Same as Agent.WorkFolder and System.WorkFolder.<br/><br />Example: `C:\agent\_work` |
| **Agent.WorkFolder**     | The working directory for this agent, where subfolders are created for every build or release. Same as Agent.RootDirectory and System.WorkFolder.<br/><br />Example: `C:\agent\_work` |
| **Agent.DeploymentGroupId** | The ID of the deployment group the agent is registered with. This is available only in deployment group jobs.<br/><br />Example: `1`                                        |

## Release Artifacts variables

For each artifact that is referenced in a release, you can use the following artifact variables. Note that not all variables apply to every artifact type. The table below lists default artifact variables and provides examples of their values based on the artifact type. If an example is empty, it indicates that the variable is not applicable for that artifact type.

Replace the `{alias}` placeholder with the value you specified for the [artifact source alias](artifacts.md#artifact-source-alias) or with the default value generated for the release pipeline.

| Variable name | Description |
|---------------|-------------|
| Release.Artifacts.{[alias](artifacts.md#artifact-source-alias)}.DefinitionId | The identifier of the build pipeline or repository.Examples:<br /><br />Azure Pipelines: `1`<br />GitHub: `fabrikam/asp` |
| Release.Artifacts.{[alias](artifacts.md#artifact-source-alias)}.DefinitionName | The name of the build pipeline or repository.Examples:<br /><br />Azure Pipelines: `fabrikam-ci`<br />TFVC: `$/fabrikam`<br />Git: `fabrikam`<br />GitHub: `fabrikam/asp (main)` |
| Release.Artifacts.{[alias](artifacts.md#artifact-source-alias)}.BuildNumber | The build number or the commit identifier.Examples:<br /><br />Azure Pipelines: `20170112.1`<br />Jenkins: `20170112.1`<br />TFVC: `Changeset 3`<br />Git: `38629c964`<br />GitHub: `38629c964` |
| Release.Artifacts.{[alias](artifacts.md#artifact-source-alias)}.BuildId | The build identifier.Examples:<br /><br />Azure Pipelines: `130`<br />Jenkins: `130`<br />GitHub: `38629c964d21fe405ef830b7d0220966b82c9e11` |
| Release.Artifacts.{[alias](artifacts.md#artifact-source-alias)}.BuildURI | The URL for the build.Examples:<br /><br />Azure Pipelines: `vstfs://build-release/Build/130`<br />GitHub: `https://github.com/fabrikam/asp` |
| Release.Artifacts.{[alias](artifacts.md#artifact-source-alias)}.SourceBranch | The full path and name of the branch from which the source was built.Examples:<br /><br />Azure Pipelines: `refs/heads/main` |
| Release.Artifacts.{[alias](artifacts.md#artifact-source-alias)}.SourceBranchName | The name only of the branch from which the source was built.Examples:<br /><br />Azure Pipelines: `main` |
| Release.Artifacts.{[alias](artifacts.md#artifact-source-alias)}.SourceVersion | The commit that was built.Examples:<br /><br />Azure Pipelines: `bc0044458ba1d9298cdc649cb5dcf013180706f7` |
| Release.Artifacts.{[alias](artifacts.md#artifact-source-alias)}.Repository.Provider | The type of repository from which the source was built.Examples:<br /><br />Azure Pipelines: `Git` |
| Release.Artifacts.{[alias](artifacts.md#artifact-source-alias)}.RequestedForID | The identifier of the account that triggered the build.Examples:<br /><br />Azure Pipelines: `2f435d07-769f-4e46-849d-10d1ab9ba6ab` |
| Release.Artifacts.{[alias](artifacts.md#artifact-source-alias)}.RequestedFor | The name of the account that requested the build.Examples:<br /><br />Azure Pipelines: `Mateo Escobedo` |
| Release.Artifacts.{[alias](artifacts.md#artifact-source-alias)}.Type | The type of artifact source, such as Build.Examples<br /><br />Azure Pipelines: `Build`<br />Jenkins: `Jenkins`<br />TFVC: `TFVC`<br />Git: `Git`<br />GitHub: `GitHub` |
| Release.Artifacts.{[alias](artifacts.md#artifact-source-alias)}.PullRequest.TargetBranch | The full path and name of the branch that is the target of a pull request. This variable is initialized only if the release is triggered by a pull request flow.Examples:<br /><br />Azure Pipelines: `refs/heads/main` |
| Release.Artifacts.{[alias](artifacts.md#artifact-source-alias)}.PullRequest.TargetBranchName | The name only of the branch that is the target of a pull request. This variable is initialized only if the release is triggered by a pull request flow.Examples:<br /><br />Azure Pipelines: `main` |

## Primary Artifact variables

In Classic release pipelines, if you are using multiple artifacts, you can designate one as the primary artifact. Azure Pipelines will then populate the following variables for the designated primary artifact.

| Variable name                    | Same as                                              |
|----------------------------------|------------------------------------------------------|
| **Build.DefinitionId**           | Release.Artifacts.{Primary artifact alias}.DefinitionId |
| **Build.DefinitionName**         | Release.Artifacts.{Primary artifact alias}.DefinitionName |
| **Build.BuildNumber**            | Release.Artifacts.{Primary artifact alias}.BuildNumber |
| **Build.BuildId**                | Release.Artifacts.{Primary artifact alias}.BuildId |
| **Build.BuildURI**               | Release.Artifacts.{Primary artifact alias}.BuildURI |
| **Build.SourceBranch**           | Release.Artifacts.{Primary artifact alias}.SourceBranch |
| **Build.SourceBranchName**       | Release.Artifacts.{Primary artifact alias}.SourceBranchName |
| **Build.SourceVersion**          | Release.Artifacts.{Primary artifact alias}.SourceVersion |
| **Build.Repository.Provider**    | Release.Artifacts.{Primary artifact alias}.Repository.Provider |
| **Build.RequestedForID**         | Release.Artifacts.{Primary artifact alias}.RequestedForID |
| **Build.RequestedFor**           | Release.Artifacts.{Primary artifact alias}.RequestedFor |
| **Build.Type**                   | Release.Artifacts.{Primary artifact alias}.Type |
| **Build.PullRequest.TargetBranch** | Release.Artifacts.{Primary artifact alias}.PullRequest.TargetBranch |
| **Build.PullRequest.TargetBranchName** | Release.Artifacts.{Primary artifact alias}.PullRequest.TargetBranchName |

## Use default variables

You can use the default variables in two ways: as parameters to tasks in a release pipeline or within your scripts.

You can use a default variable directly as an input to a task. For example, to pass `Release.Artifacts.{Artifact alias}.DefinitionName` as an argument to a PowerShell task for an artifact with *ASPNET4.CI* as its alias, you would use `$(Release.Artifacts.ASPNET4.CI.DefinitionName)`.

:::image type="content"  source="media/variables-01.png" alt-text="A screenshot displaying how to use a default variable as an argument.":::   

To use a default variable in your script, you must first replace the `.` in the default variable names with `_`. For example, to print the value of `Release.Artifacts.{Artifact alias}.DefinitionName` for an artifact with *ASPNET4.CI* as its alias in a PowerShell script, use `$env:RELEASE_ARTIFACTS_ASPNET4_CI_DEFINITIONNAME`. Note that the original alias, *ASPNET4.CI*, is replaced with *ASPNET4_CI*.

:::image type="content"  source="media/variables-02.png" alt-text="A screenshot displaying how to use a default variable in an inline PowerShell script.":::  

## Custom variables

Custom variables can be defined at various scopes.

- **Variable Groups**: Use variable groups to share values across all definitions in a project. This is useful when you want to use the same values throughout definitions, stages, and tasks within a project, and manage them from a single location. Define and manage variable groups in the **Pipelines** > **Library**.

- **Release Pipeline Variables**: Use release pipeline variables to share values across all stages within a release pipeline. This is ideal for scenarios where you need a consistent value across stages and tasks, with the ability to update it from a single location. Define and manage these variables in the **Variables** tab of the release pipeline. In the Pipeline Variables page, set the **Scope** drop-down list to *Release* when adding a variable.

- **Stage Variables**: Use stage variables to share values within a specific stage of a release pipeline. This is useful for values that differ from stage to stage but are consistent across all tasks within a stage. Define and manage these variables in the **Variables** tab of the release pipeline. In the Pipeline Variables page, set the **Scope** drop-down list to appropriate environment when adding a variable.
  
Using custom variables at the project, release pipeline, and stage levels helps you to:

- Avoid duplicating values, making it easier to update all occurrences with a single change.

- Secure sensitive values by preventing them from being viewed or modified by users. To mark a variable as secure (secret), select the ![padlock](media/padlock-icon.png) icon next to the variable.

  > [!IMPORTANT]
  > The values of the hidden variables (secret) are securely stored on the server and cannot be viewed by users after they are saved. During deployment, Azure Pipelines decrypts these values when referenced by tasks and passes them to the agent over a secure HTTPS channel.

> [!NOTE]
> Creating custom variables can overwrite standard variables. For example, if you define a custom **Path** variable on a Windows agent, it will overwrite the *$env:Path* variable, which may prevent PowerShell from running properly.

## Use custom variables

To use custom variables in your tasks, enclose the variable name in parentheses and precede it with a **$** character. For example, if you have a variable named *adminUserName*, you can insert its current value into a task as `$(adminUserName)`.

> [!NOTE]
> Variables from different groups linked to a pipeline at the same scope (e.g., job or stage) may conflict, leading to unpredictable results. To avoid this, ensure that variables across all your variable groups have unique names.
 
[!INCLUDE [set-variables-in-scripts](../includes/set-variables-in-scripts.md)]

## View the current values of all variables

1. Select **Pipelines** > **Releases**, and then select your release pipeline.

1. Open the summary view for your release, and select the stage you're interested in. In the list of steps, choose **Initialize job**.

    :::image type="content"  source="media/view-variable-values-link.png" alt-text="A screenshot displaying the initialize job step.":::  

1. This opens the logs for this step. Scroll down to see the values used by the agent for this job.   

    :::image type="content"  source="media/view-variable-values.png" alt-text="A screenshot displaying the variables used by the agent.":::  

## Run a release in debug mode

Running a release in debug mode can help you diagnose and resolve issues or failures by displaying additional information during the release execution. You can enable debug mode for the entire release or just for the tasks within a specific release stage.

- To enable debug mode for an entire release, add a variable named `System.Debug` with the value `true` to the **Variables** tab of the release pipeline.

- To enable debug mode for a specific stage, open the **Configure stage** dialog from the shortcut menu of the stage, and add a variable named `System.Debug` with the value `true` to the **Variables** tab.

- Alternatively, create a [variable group](../library/variable-groups.md) containing a variable named `System.Debug` with the value `true`, and link this variable group to the release pipeline.

> [!TIP]
> If you encounter an error related to Azure ARM service connections, see [How to: Troubleshoot Azure Resource Manager service connections](azure-rm-endpoint.md) for more details.

## Related content

- [Artifact sources in Classic release pipelines](artifacts.md)

- [Deploy pull request Artifacts](deploy-pull-request-builds.md)

- [Use variables in a variable group](../scripts/cli/pipeline-variable-group-secret-nonsecret-variables.md)
