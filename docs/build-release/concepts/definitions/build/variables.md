---
title: Build variables
description: Build variables are name-value pairs defined by you or provided by Build or Release Management. You can use variables as inputs and in your scripts.
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 3A1C529F-DF6B-470A-9047-2758644C3D95
ms.manager: douge
ms.author: alewis
ms.date: 12/13/2017
---

# Build variables

**VSTS | TFS 2018 | TFS 2017 | TFS 2015 | [Previous versions (XAML builds)](https://msdn.microsoft.com/library/hh850448%28v=vs.120%29.aspx)**

Variables give you a convenient way to get key bits of data into various parts of your build process.

| Use | User-defined  | Predefined, all scopes | Predefined, agent scope | Format | Examples and more information |
|---|---|---|---|---|---|
| As arguments to build steps | Yes | Yes | Yes | `$(Build.DefinitionName)` | [Command line](../../../tasks/utility/command-line.md), [Copy files](../../../tasks/utility/copy-files.md) |
| Apply a version control label during the build process | Yes | Yes | No | `$(Build.DefinitionName)` | [Repository tab](repository.md) (Git and Team Foundation version control **Label format**) |
| Customize the build number | Yes | Yes | No  | `$(Build.DefinitionName)` | [Build number format options](options.md) |
| Environment variable in Windows batch scripts| Yes | Yes | Yes | `%BUILD_DEFINITIONNAME%` | [Batch script ](../../../tasks/utility/batch-script.md#example) |
| Environment variable in PowerShell scripts | Yes | Yes | Yes | `$env:BUILD_DEFINITIONNAME` | [PowerShell script](../../../actions/scripts/powershell.md) |
| Environment variable in Shell scripts | Yes | Yes | Yes | `$BUILD_DEFINITIONNAME` | [Shell script](../../../tasks/utility/shell-script.md#example) |


## User-defined variables

Variables are a great way to store and share key bits of data in your build definition. Some build templates automatically define some variables for you.

For example, when you [create a new .NET app build](../../../apps/windows/dot-net.md), `BuildConfiguration` and `BuildPlatform` are automatically defined for you.

User-defined variables are formatted differently in different contexts. See above table.

### Secret Variables

We recommend that you make the variable ![Secret](_img/variables/secret-variable-icon.png)
**Secret** if it contains a password, keys, or some other kind of data that you need to avoid exposing.

**VSTS**

![Keep password secret](_img/variables/keep-password-secret-neweditor.png)

**Team Foundation Server (TFS) 2017.1 and older**

![Keep password secret](_img/variables/keep-password-secret.png)

Secret variables are:

* Encrypted at rest with a 2048-bit RSA key.

* Not returned back to the client. They are automatically masked out of any log output from the build or release.  

* Not decrypted into environment variables. So scripts and programs run by your build steps are not given access by default.

* Decrypted for access by your build steps. So you can use them in password arguments and also pass them explicitly into a script or a program from your build step (for example as `$(password)`).


### Allow at queue time

Select this check box if you want to enable your team to modify the value when they manually queue a build.

[!INCLUDE [include](../../../concepts/definitions/_shared/set-variables-in-scripts.md)]

## Control variables

| Variable Name | Description |
| ------------- | ----------- |
| Build.Clean | Modifies how the build agent cleans things up. See [Source repositories](repository.md). |
| System.Debug | If you need more detailed logs to debug build problems, define and set it to `true`. |

## Environment variables

You can pass environment variables of the build machine into build steps. For example, on the [Build tab](../../../tasks/index.md) of a build definition, add this step:

| Task | Arguments |
| ---- | --------- |
| ![](../../../tasks/utility/_img/command-line.png) **Utility: Command Line** | Tool: `echo`<br />Arguments: `$(PATH)` |

> [!NOTE]
> If you have defined the a variable of the same name (for example `PATH`) on the [variables tab](variables.md), then your value overrides the environment variable when you use it as shown above.

## Predefined variables

<div class="mx-tdBreakAll">
<table>
    <thead>
        <tr>
            <th style="font-size:80%">Variable Name<br/>
            Environment Variable Name</th>
            <th style="font-size:80%">Scope</th>
            <th style="font-size:80%">Notes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p style="font-size:80%">
                    Agent.BuildDirectory
                </p>
                <p style="font-size:80%">
                    AGENT_BUILDDIRECTORY
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">The local path on the agent where all folders for a given build definition are created. For example: `c:\agent\_work\1`
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Agent.HomeDirectory
                </p>
                <p style="font-size:80%">
                    AGENT_HOMEDIRECTORY
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    The directory the agent is installed into. This contains the agent software. For example: `c:\agent`.
                </p>
                <p style="font-size:80%">If you are using an on-premises agent, this directory is specified by you. See [Agents](../../../concepts/agents/agents.md).</p>
            </td>
        </tr>
         <tr>
            <td>
                <p style="font-size:80%">
                    Agent.Id
                </p>
                <p style="font-size:80%">
                    AGENT_ID
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    The ID of the agent.  
                </p>
            </td>
        </tr>
         <tr>
            <td>
                <p style="font-size:80%">
                    Agent.JobStatus
                </p>
                <p style="font-size:80%">
                    AGENT_JOBSTATUS
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    The status of the build.
                </p>
                <ul>
                  <li style="font-size:80%">`Canceled`</li>
                  <li style="font-size:80%">`Failed`</li>
                  <li style="font-size:80%">`Succeeded`</li>
                  <li style="font-size:80%">`SucceededWithIssues` (partially successful)</li>
                </ul>
            </td>
        </tr>        <tr>
            <td>
                <p style="font-size:80%">
                    Agent.MachineName
                </p>
                <p style="font-size:80%">
                    AGENT_MACHINENAME
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    The name of the machine on which the agent is installed.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Agent.Name
                </p>
                <p style="font-size:80%">
                    AGENT_NAME
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    The name of the agent that is registered with the pool.
                </p>
                <p style="font-size:80%">If you are using an on-premises agent, this directory is specified by you. See agents(../concepts/agents/agents.md).</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Agent.WorkFolder
                </p>
                <p style="font-size:80%">
                    AGENT_WORKFOLDER
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    The working directory for this agent. For example: `c:\agent\_work`.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.ArtifactStagingDirectory
                </p>
                <p style="font-size:80%">
                    BUILD_ARTIFACTSTAGINGDIRECTORY
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                [!INCLUDE [include](_shared/variables-build-artifacts-directory.md)]
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.BuildId
                </p>
                <p style="font-size:80%">
                    BUILD_BUILDID
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <p style="font-size:80%">
                    The ID of the record for the completed build.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.BuildNumber
                </p>
                <p style="font-size:80%">
                    BUILD_BUILDNUMBER
                </p>
            </td>
            <td style="font-size:80%">Agent,<br/>label<br/>format<br/>(see<br/>Notes)</td>
            <td>
                <p style="font-size:80%">
                    The name of the completed build. You can specify the build number format that generates this value in the [definition options](options.md).
                </p>
                <p style="font-size:80%">A typical use of this variable is to make it part of the label format, which you specify on the [repository tab](repository.md).</p>
                <p style="font-size:80%">
                    [!INCLUDE [include](_shared/variables-invalid-label-characters.md)]
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.BuildUri
                </p>
                <p style="font-size:80%">
                    BUILD_BUILDURI
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    The URI for the build. For example: `vstfs:///Build/Build/1430`.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.BinariesDirectory
                </p>
                <p style="font-size:80%">
                    BUILD_BINARIESDIRECTORY
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">The local path on the agent you can use as an output folder for compiled binaries. For example: `c:\agent\_work\1\b`.
                </p>
                <p style="font-size:80%">By default, new build definitions are not set up to clean this directory. You can define your build to clean it up on the [Repository tab](repository.md).
                 </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.DefinitionName
                </p>
                <p style="font-size:80%">
                    BUILD_DEFINITIONNAME
                </p>
            </td>
            <td style="font-size:80%">All (see Notes)</td>
            <td>
                <p style="font-size:80%">
                    The name of the build definition.
                </p>
                <p style="font-size:80%">
                    [!INCLUDE [include](_shared/variables-invalid-label-characters.md)]
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.DefinitionVersion
                </p>
                <p style="font-size:80%">
                    BUILD_DEFINITIONVERSION
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <p style="font-size:80%">
                    The version of the build definition.
                </p>
            </td>
        </tr>
        <tr>
            <td style="font-size:80%">
                <p style="font-size:80%">
                    Build.QueuedBy
                </p>
                <p style="font-size:80%">
                    BUILD_QUEUEDBY
                </p>
            </td>
            <td style="font-size:80%">All (see Notes)</td>
            <td>
                <p style="font-size:80%">
                    [How are the identity variables set?](#identity_values)</p>
                <p style="font-size:80%">
                    [!INCLUDE [include](_shared/variables-invalid-label-characters.md)]
                </p>
            </td>
        </tr>
        <tr>
        <td>
                <p style="font-size:80%">
                    Build.QueuedById
                </p>
                <p style="font-size:80%">
                    BUILD_QUEUEDBYID
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <p style="font-size:80%">
                    [How are the identity variables set?](#identity_values)
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.Reason
                </p>
                <p style="font-size:80%">
                    BUILD_REASON
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <blockquote style="font-size:80%">
                    **VSTS Only**
                </blockquote>
                <p style="font-size:80%">The event that caused the build to run.
                </p>
                <ul>
                    <li style="font-size:80%">`Manual`: A user manually queued the build.</li>
                    <li style="font-size:80%">`IndividualCI`: **Continuous integration (CI)** triggered by a Git push or a TFVC check-in.</li>
                    <li style="font-size:80%">`BatchedCI`: **Continuous integration (CI)** triggered by a Git push or a TFVC check-in, and the **Batch changes** was selected.</li>
                    <li style="font-size:80%">`Schedule`: **Scheduled** trigger.</li>
                    <li style="font-size:80%">`ValidateShelveset`: A user manually queued the build of a specific TFVC shelveset.</li>
                    <li style="font-size:80%">`CheckInShelveset`: **Gated check-in** trigger.</li>
                    <li style="font-size:80%">`PullRequest`: The build was triggered by a Git branch policy that requires a build.</li>
                </ul>
                <p style="font-size:80%">See [Build definition triggers](triggers.md), [Improve code quality with branch policies](../../../../git/branch-policies.md).</p>
            </td>
        </tr>        
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.Repository.Clean
                </p>
                <p style="font-size:80%">
                    BUILD_REPOSITORY_CLEAN
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">The value you've selected for **Clean** in the [source repository settings](repository.md).</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.Repository.LocalPath
                </p>
                <p style="font-size:80%">
                    BUILD_REPOSITORY_LOCALPATH
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                [!INCLUDE [include](_shared/variables-build-sources-directory.md)]
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.Repository.Name
                </p>
                <p style="font-size:80%">
                    BUILD_REPOSITORY_NAME
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    The name of the [repository](repository.md).
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.Repository.Provider
                </p>
                <p style="font-size:80%">
                    BUILD_REPOSITORY_PROVIDER
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    The type of [repository you selected](repository.md).
                </p>
                <ul>
                    <li style="font-size:80%">`TfsGit`: [TFS Git repository](../../../../git/overview.md)</li>
                    <li style="font-size:80%">`TfsVersionControl`: [Team Foundation Version Control](../../../../tfvc/overview.md)</li>
                    <li style="font-size:80%">`Git`: Git repository hosted on an external server</li>
                    <li style="font-size:80%">`GitHub`</li>
                    <li style="font-size:80%">`Svn`: Subversion</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.Repository.Tfvc.Workspace
                </p>
                <p style="font-size:80%">
                    BUILD_REPOSITORY_TFVC_WORKSPACE
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    Defined if your [repository](repository.md) is Team Foundation Version Control. The name of the [TFVC workspace](../../../../tfvc/create-work-workspaces.md) used by the build agent.
                </p>
                <p style="font-size:80%">
                For example, if the Agent.BuildDirectory is `c:\agent\_work\12` and the Agent.Id is `8`, the workspace name could be: `ws_12_8`
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.Repository.Uri
                </p>
                <p style="font-size:80%">
                    BUILD_REPOSITORY_URI
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    The URL for the repository. For example:
                </p>
                <ul>
                    <li style="font-size:80%">Git: `https://fabrikamfiber.visualstudio.com/_git/Scripts`</li>
                    <li style="font-size:80%">TFVC: `https://fabrikamfiber.visualstudio.com/`</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.RequestedFor
                </p>
                <p style="font-size:80%">
                    BUILD_REQUESTEDFOR
                </p>
            </td>
            <td style="font-size:80%">All (see Notes)</td>
            <td>
                <p style="font-size:80%">
                    [How are the identity variables set?](#identity_values)
                </p>
                <p style="font-size:80%">
                    [!INCLUDE [include](_shared/variables-invalid-label-characters.md)]
                </p>
            </td>
        </tr>
		<tr>
            <td>
                <p style="font-size:80%">
                    Build.RequestedForEmail
                </p>
                <p style="font-size:80%">
                    BUILD_REQUESTEDFOREMAIL
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <p style="font-size:80%">
                    [How are the identity variables set?](#identity_values)
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.RequestedForId
                </p>
                <p style="font-size:80%">
                    BUILD_REQUESTEDFORID
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <p style="font-size:80%">
                    [How are the identity variables set?](#identity_values)
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.SourceBranch
                </p>
                <p style="font-size:80%">
                    BUILD_SOURCEBRANCH
                </p>
            </td>
            <td style="font-size:80%">All (see Notes)</td>
            <td>
                <p style="font-size:80%">
                    The branch the build was queued for. Some examples:
                </p>
                <ul>
                    <li style="font-size:80%">Git repo branch: `refs/heads/master`</li>
                    <li style="font-size:80%">Git repo pull request: `refs/pull/1/merge`</li>
                    <li style="font-size:80%">TFVC repo branch: `$/teamproject/main`</li>
                    <li style="font-size:80%">TFVC repo gated check-in: `Gated_2016-06-06_05.20.51.4369;username@live.com`</li>
                    <li style="font-size:80%">TFVC repo shelveset build: `myshelveset;username@live.com`</li>
                </ul>
                <p style="font-size:80%">When you use this variable in your build number format, the forward slash characters (`/`) are replaced with underscore characters <code>&#095;</code>).</p>
                <p style="font-size:80%">Note: In TFVC, if you are running a gated check-in build or manually building a shelveset, you cannot use this variable in your build number format.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.SourceBranchName
                </p>
                <p style="font-size:80%">
                    BUILD_SOURCEBRANCHNAME
                </p>
            </td>
            <td style="font-size:80%">All (see Notes)</td>
            <td>
                <p style="font-size:80%">
                    The name of the branch the build was queued for.
                </p>
                <ul>
                    <li style="font-size:80%">Git repo branch or pull request: The last path segment in the ref. For example, in `refs/heads/master` this value is `master`.</li>
                    <li style="font-size:80%">TFVC repo branch: The last path segment in the root server path for the workspace. For example in `$/teamproject/main` this value is `main`.</li>
                    <li style="font-size:80%">TFVC repo gated check-in or shelveset build is the name of the shelveset. For example, `Gated_2016-06-06_05.20.51.4369;username@live.com` or `myshelveset;username@live.com`.</li>
                </ul>
                <p style="font-size:80%">Note: In TFVC, if you are running a gated check-in build or manually building a shelveset, you cannot use this variable in your build number format.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.SourcesDirectory
                </p>
                <p style="font-size:80%">
                    BUILD_SOURCESDIRECTORY
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                [!INCLUDE [include](_shared/variables-build-sources-directory.md)]
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.SourceVersion
                </p>
                <p style="font-size:80%">
                    BUILD_SOURCEVERSION
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    The latest version control change that is included in this build.
                </p>
                    <ul>
                        <li style="font-size:80%">Git: The [commit](../../../../git/tutorial/commits.md) ID.</li>
                        <li style="font-size:80%">TFVC: the [changeset](../../../../tfvc/find-view-changesets.md).</li>
                    </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.StagingDirectory
                </p>
                <p style="font-size:80%">
                    BUILD_STAGINGDIRECTORY
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                [!INCLUDE [include](_shared/variables-build-artifacts-directory.md)]
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.Repository.Git.SubmoduleCheckout
                </p>
                <p style="font-size:80%">
                    BUILD_REPOSITORY_GIT_SUBMODULECHECKOUT
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">The value you've selected for **Checkout submodules** on the [repository tab](repository.md).</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Build.SourceTfvcShelveset
                </p>
                <p style="font-size:80%">
                    BUILD_SOURCETFVCSHELVESET
                </p>
            </td>
            <td style="font-size:80%">All (see Notes)</td>
            <td>
                <p style="font-size:80%">
                Defined if your [repository](repository.md) is Team Foundation Version Control.
                </p>
                <p style="font-size:80%">
                    If you are running a [gated build](triggers.md#gated) or a [shelveset build](../../../actions/ci-cd-part-1.md#queueabuild), this is set to the name of the [shelveset](../../../../tfvc/suspend-your-work-manage-your-shelvesets.md) you are building.
                </p>
                <p style="font-size:80%">Note: This variable yields a value that is invalid for build use in a build number format</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    Common.TestResultsDirectory
                </p>
                <p style="font-size:80%">
                    COMMON_TESTRESULTSDIRECTORY
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">The local path on the agent where the test results are created. For example: `c:\agent\_work\1\TestResults`
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    System.AccessToken
                </p>
                <p style="font-size:80%">
                    SYSTEM_ACCESSTOKEN
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    [Use the OAuth token to access the REST API](../../../actions/scripts/powershell.md#oauth).
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    System.CollectionId
                </p>
                <p style="font-size:80%">
                    SYSTEM_COLLECTIONID
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <p style="font-size:80%">
                    The GUID of the team foundation collection.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    System.DefaultWorkingDirectory
                </p>
                <p style="font-size:80%">
                    SYSTEM_DEFAULTWORKINGDIRECTORY
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                [!INCLUDE [include](_shared/variables-build-sources-directory.md)]
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    System.DefinitionId
                </p>
                <p style="font-size:80%">
                    SYSTEM_DEFINITIONID
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <p style="font-size:80%">
                    The ID of the build definition.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    System.PullRequest.IsFork
                </p>
                <p style="font-size:80%">
                    SYSTEM_PULLREQUEST_ISFORK
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <p style="font-size:80%">
                    If the pull request is from a fork of the repository, this variable is set to `True`.
                    Otherwise, it is set to `False`.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    System.PullRequest.PullRequestId
                </p>
                <p style="font-size:80%">
                    SYSTEM_PULLREQUEST_PULLREQUESTID
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <p style="font-size:80%">
                    The ID of the pull request that caused this build. For example: `17`. (This variable is initialized only if the build ran because of a [Git PR affected by a branch policy](../../../../git/branch-policies.md#require-the-pull-request-to-build).)
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    System.PullRequest.SourceBranch
                </p>
                <p style="font-size:80%">
                    SYSTEM_PULLREQUEST_SOURCEBRANCH
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <p style="font-size:80%">
                    The branch that is being revewiewed in a pull request. For example: `refs/heads/users/raisa/new-feature`. (This variable is initialized only if the build ran because of a [Git PR affected by a branch policy](../../../../git/branch-policies.md#require-the-pull-request-to-build).)
                </p>
            </td>
        </tr>        <tr>
            <td>
                <p style="font-size:80%">
                    System.PullRequest.SourceRepositoryURI
                </p>
                <p style="font-size:80%">
                    SYSTEM_PULLREQUEST_SOURCEREPOSITORYURI
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <blockquote style="font-size:80%">
                    **VSTS Only**
                </blockquote>
                <p style="font-size:80%">
                    The URL to the repo that contains the pull request. For example: `https://ouraccount.visualstudio.com/_git/OurProject`. (This variable is initialized only if the build ran because of a [VSTS Git PR affected by a branch policy](../../../../git/branch-policies.md#require-the-pull-request-to-build). It is not initialized for GitHub PRs.)
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    System.PullRequest.TargetBranch
                </p>
                <p style="font-size:80%">
                    SYSTEM_PULLREQUEST_TARGETBRANCH
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <p style="font-size:80%">
                    The branch that is the target of a pull request. For example: `refs/heads/master`. (This variable is initialized only if the build ran because of a [Git PR affected by a branch policy](../../../../git/branch-policies.md#require-the-pull-request-to-build).)
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    System.TeamFoundationCollectionUri
                </p>
                <p style="font-size:80%">
                    SYSTEM_TEAMFOUNDATIONCOLLECTIONURI
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    The URI of the team foundation collection. For example: `https://fabrikamfiber.visualstudio.com/`.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    System.TeamProject
                </p>
                <p style="font-size:80%">
                    SYSTEM_TEAMPROJECT
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <p style="font-size:80%">
                    The name of the team project that contains this build.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    System.TeamProjectId
                </p>
                <p style="font-size:80%">
                    SYSTEM_TEAMPROJECTID
                </p>
            </td>
            <td style="font-size:80%">All</td>
            <td>
                <p style="font-size:80%">
                    The ID of the team project that this build belongs to.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size:80%">
                    TF_BUILD
                </p>
            </td>
            <td style="font-size:80%">Agent</td>
            <td>
                <p style="font-size:80%">
                    Set to `True` if the script is being run by a build step.
                </p>
            </td>
        </tr>
    </tbody>
</table>
</div>

## Q&A
<!-- BEGINSECTION class="md-qanda" -->


### What are the predefined Release Management variables?

[Default release management variables](../../../concepts/definitions/release/variables.md#default-variables)


<a name="identity_values"></a>
### How are the identity variables set?

The value depends on what caused the build.

| If the build is triggered... | Then the Build.QueuedBy and Build.QueuedById values are based on... | Then the Build.RequestedFor and Build.RequestedForId values are based on... |
| --- | --- | ---|
| In Git or TFVC by the [Continuous integration (CI) triggers](triggers.md) | The system identity, for example: `[DefaultCollection]\Project Collection Service Accounts` | The person who pushed or checked in the changes. |
| In Git or by a [branch policy build](../../../../git/branch-policies.md#require-the-pull-request-to-build). | The system identity, for example: `[DefaultCollection]\Project Collection Service Accounts` | The person who checked in the changes. |
| In TFVC by a [gated check-in trigger](triggers.md) | The person who checked in the changes. | The person who checked in the changes. |
| In Git or TFVC by the [Scheduled triggers](triggers.md) | The system identity, for example: `[DefaultCollection]\Project Collection Service Accounts` | The system identity, for example: `[DefaultCollection]\Project Collection Service Accounts` |
| Because you clicked the **Queue build** button | You | You |

[!INCLUDE [temp](../../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
