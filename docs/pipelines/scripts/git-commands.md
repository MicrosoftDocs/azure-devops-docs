---
title: Run Git commands in a script
description: Learn how you can run Git commands for your workflow in Azure Pipelines build scripts.
ms.topic: how-to
ms.assetid: B5481254-F39C-4F1C-BE98-44DC0A95F2AD
ms.date: 08/25/2025
monikerRange: '<= azure-devops'
#customer intent: As a developer, I want to learn how to run GitHub commands in Azure Pipelines scripts so I can run pipelines to work with my code from GitHub.
---

# Run Git commands in pipeline scripts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Git commands are available for build workflows on [Microsoft-hosted](../agents/hosted.md) and [self-hosted](../agents/agents.md) agents. For example, after a continuous integration (CI) build completes on a feature branch, you can merge the branch to main. This article explains how to run Git commands in Azure Pipelines build scripts. 

<a name="enable"></a>
## Enable scripts to run Git commands

Make sure Git uses your Azure DevOps account's default identity. If necessary, set the Git user as the first step after checkout.

```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

<a name="version-control"></a>
### Grant permissions to the build service

The project build service must have permissions to write to the source repository. Set the required permissions as follows:

1. In the **Project Settings** for your project, select **Repositories** under **Repos**.

1. On the **All repositories** page, select **Security** to set permissions for all repos in the project. Or, select the repository you want to run Git commands on, and then select **Security** on that repo's page.

   :::image type="content" source="media/organization-project-settings.png" alt-text="Sreenshot that shows selecting Security for repositories. ":::

1. On the **User permissions** page, select the **Build Service** identity. Be sure to select **\<project name> Build Service (\<organization>)** under **Users**, not **Project Collection Build Service Accounts**. By default, this identity can read from the repo but can't push any changes to it.

1. Drop down the list and select **Allow** next to each permission needed for the Git commands you want to run, typically **Create branch**, **Contribute**, **Read**, and **Create tag**.

   :::image type="content" source="media/modify-repo-security.png" alt-text="Screenshot that shows granting the identity permissions to repositories. ":::

### Allow scripts to access the system token

To allow scripts to access the GitHub OAuth token:

# [YAML](#tab/yaml)

Add a `checkout` step to your YAML pipeline with `persistCredentials` set to `true`.

```yaml
steps:
- checkout: self
  persistCredentials: true
```

For more information about the `checkout` step, see the [`steps.checkout`](/azure/devops/pipelines/yaml-schema/steps-checkout) definition.

# [Classic](#tab/classic)

In the Classic pipeline editor, select the agent job at left, and at right under **Additional settings**, select the check box for **Allow scripts to access the OAuth token**.

---

## Clean the local repo

The build pipeline doesn't automatically clean up certain changes to the local repository, such as deleting local branches or undoing local `git config` changes. If you run into problems using a self-hosted agent, you can clean the repo before you run the build.

In general, for faster performance of self-hosted agents, don't clean the repo. Cleaning isn't effective for Microsoft-hosted agents, because they use a new agent each time. For more information, see [Clean the local repo on the agent](../repos/pipeline-options-for-git.md#clean-the-local-repo-on-the-agent).

To clean the repo before you run the build:

# [YAML](#tab/yaml)

Set `clean` to `true` in the `checkout` step. This option runs `git clean -ffdx` followed by `git reset --hard HEAD` before fetching.

```yaml
steps:
- checkout: self
  clean: true
```

::: moniker range="< azure-devops"

Select [Variables](../build/variables.md) in the pipeline editor, create or modify the `Build.Clean` variable, and set its value to `source`.

::: moniker-end

# [Classic](#tab/classic)

In the Classic pipeline editor, select **Get sources**, and then select **true** under **Clean**. You can select from cleaning options under **Clean options**.

::: moniker range="< azure-devops"

On the [Variables](../build/variables.md) tab, create or modify the `Build.Clean` variable and set its value to `source`.

::: moniker-end

---

## Git command examples

The following examples run Git commands in a [Command line](/azure/devops/pipelines/tasks/reference/cmd-line-v2) task and a [Batch script](/azure/devops/pipelines/tasks/reference/batch-script-v1) task.

### List the files in your repo

To list the files in the Git repo, use the [Command line](/azure/devops/pipelines/tasks/reference/cmd-line-v2) task in a YAML pipeline as follows:

```yaml
- task: CmdLine@2
  inputs:
    script: 'git ls-files'
```

### Merge a feature branch to main

The following Classic pipeline example merges a CI build to `main` if the build succeeds.

1. Create a file called *merge.bat* at the root of your repo with the following contents:

   ```bat
   @echo off
   ECHO SOURCE BRANCH IS %BUILD_SOURCEBRANCH%
   IF %BUILD_SOURCEBRANCH% == refs/heads/main (
      ECHO Building main branch so no merge is needed.
      EXIT
   )
   SET sourceBranch=origin/%BUILD_SOURCEBRANCH:refs/heads/=%
   ECHO GIT CHECKOUT MAIN
   git checkout main
   ECHO GIT STATUS
   git status
   ECHO GIT MERGE
   git merge %sourceBranch% -m "Merge to main"
   ECHO GIT STATUS
   git status
   ECHO GIT PUSH
   git push origin
   ECHO GIT STATUS
   git status
   ```

1. On the [Triggers](../build/triggers.md) tab in your Classic pipeline, select the checkbox to **Enable continuous integration**.

1. Under **Branch filters** and **Path filters**, select branches and paths to **Include** or **Exclude** from the build.

1. Add a [Batch script](/azure/devops/pipelines/tasks/reference/batch-script-v1) as the last task in your pipeline.

1. Under **Path** in the task configuration, enter the location and name of the *merge.bat* file.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### Can I run Git commands if my remote repo is in GitHub or another Git service such as Bitbucket Cloud?

Yes, you can run Git commands if your remote repo is in GitHub or another Git service such as Bitbucket Cloud.

### Which tasks can I use to run Git commands?

You can use the following Azure Pipelines tasks to run Git commands:

- [Bash](/azure/devops/pipelines/tasks/reference/bash-v3)
- [Batch Script](/azure/devops/pipelines/tasks/reference/batch-script-v1)
- [Command Line](/azure/devops/pipelines/tasks/reference/cmd-line-v2)
- [PowerShell](/azure/devops/pipelines/tasks/reference/powershell-v2)
- [Shell Script](/azure/devops/pipelines/tasks/reference/shell-script-v2)

### How can I avoid triggering a CI build when the script pushes?

To avoid triggering a CI build when the script pushes, add `[skip ci]` to your commit message or description. For example:

- `git commit -m "This is a commit message [skip ci]"`
- `git merge origin/features/hello-world -m "Merge to main [skip ci]"`

You can also use any of the following variations for commits to Azure Repos Git, Bitbucket Cloud, GitHub, or GitHub Enterprise Server:

- `[skip ci]` or `[ci skip]`
- `skip-checks: true` or `skip-checks:true`
- `[skip azurepipelines]` or `[azurepipelines skip]`
- `[skip azpipelines]` or `[azpipelines skip]`
- `[skip azp]` or `[azp skip]`
- `***NO_CI***`

[!INCLUDE [temp](../includes/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../includes/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
