---
title: Access repositories from pipelines
description: Learn how to provide secure access to source code repositories from Azure Pipelines.
ms.author: sandrica
ms.date: 09/23/2025
monikerRange: '>= azure-devops-2020'
#customer intent: As a developer, I want to know about how Azure Pipelines can securely access repositories so I can help protect my source code from security threats.
---

# Securely access repositories from pipelines

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

To protect the code that runs their operations, organizations must carefully control access to their source code repositories. This article describes how Azure Pipelines build and release pipelines can securely access repositories to minimize the risk of unauthorized access.

[!INCLUDE [security-prerequisites](includes/security-prerequisites.md)]

## Improve repository access security

A [Project Administrator](../../organizations/security/change-project-level-permissions.md) or [Project Collection Administrator](../../organizations/security/look-up-project-collection-administrators.md) can take the following steps to strengthen access security to Git repositories from Azure Pipelines.

1. Inspect the pipeline to identify any required repositories that are in other projects. If you enable **Limit job authorization scope to current project for non-release pipelines**, pipelines can check out code only from the current project's repositories.

1. Grant the pipeline project access to any other projects it requires. For more information, see [Configure permissions for a project to access another project in the same project collection](../process/access-tokens.md#configure-permissions-for-a-project-to-access-another-project-in-the-same-project-collection).

1. Grant the pipeline build identity **Read** access to each repository that the pipeline checks out. Also grant the pipeline **Read** access to any repositories used as submodules by required repositories. For more information, see [Configure permissions to access another repo in the same project collection](../process/access-tokens.md#example---configure-permissions-to-access-another-repo-in-the-same-project-collection).

1. Enable the following organization or project settings for the pipeline project:

   - **Limit job authorization scope to current project for non-release pipelines**.
   - **Limit job authorization scope to current project for release pipelines** if your project has release pipelines.
   - **Protect access to repositories in YAML pipelines** if your project has YAML pipelines.

   Enable these settings by setting their toggles to **On** in **Organization Settings** or **Project Settings** > **Pipelines** > **Settings** > **General**. If the settings are enabled in **Organizational Settings**, they can't be overridden in **Project Settings**. If the settings aren't enabled in **Organization Settings**, they can be enabled at the project level.

## Use project-based identities for pipelines

A pipeline uses an identity to access resources such as repositories, service connections, and variable groups during execution. Pipelines can utilize two types of identities: organization-level or project-level.

Organization-level identity is easy to use, but project-level identities prioritize security. To enhance security, use project-level identities to run pipelines. A project-level identity can access resources only within its project, minimizing the impact of any unauthorized access by malicious actors. For more information, see [Scoped build identities](../process/access-tokens.md#scoped-build-identities) and [Job authorization scope](../process/access-tokens.md#job-authorization-scope).

To configure a pipeline to use a project-level identity, enable **Limit job authorization scope to current project for non-release pipelines** or **Limit job authorization scope to current project for release pipelines** in the pipeline project's **Project Settings** > **Pipelines** > **Settings**.

### Use a repository as a submodule

If a repository uses another repository in its project as a submodule, checkout can fail when checking out the submodule even if you grant the pipeline **Read** access to both repositories. To solve this issue, explicitly check out submodule repositories before checking out the repositories that use them. For more information, see [Check out submodules](../repos/pipeline-options-for-git.md#checkout-submodules).

## GitHub repositories

The following security considerations apply for pipeline access to GitHub repositories. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

### Authentication to GitHub repositories

To trigger builds and fetch code during builds, Azure Pipelines must be granted access to GitHub repositories. The three authentication types for granting Azure Pipelines access to GitHub repositories are GitHub personal access token (PAT), OAuth, or the GitHub Azure Pipelines app.

The GitHub Azure Pipelines app is the recommended authentication type for continuous integration pipelines. Builds and GitHub status updates then use the Azure Pipelines identity instead of your personal GitHub identity. OAuth and PAT authentication use your personal GitHub identity and must be authorized for pipeline access. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

>[!NOTE]
>If you install the GitHub app for all repositories in a GitHub organization, the token the app uses can access all private and public repos in the organization. For better security, either separate private repos into a separate organization, or explicitly select the repositories the app has access to.

### GitHub service connections

To use GitHub repositories, Azure Pipelines requires a [GitHub service connection](../library/service-endpoints.md#github-service-connection). To strengthen service connection security:

- If you use a personal access token (PAT) for authorization, choose a fine-grained PAT and limit the scope to certain users, repositories, and permissions.
- Allow access only to repositories that pipelines require to run.
- Don't select **Grant access permission to all pipelines** for the service connection. Explicitly authorize the service connection for each pipeline that uses it.

### Forked GitHub repositories

Forked repositories increase the risks of malicious code execution or sensitive information release in pipelines. Forks originating from outside your organization pose particular risks.

To minimize risks from forked repositories, **Limit building pull requests from forked GitHub repositories** and **Disable building pull requests from forked repositories** are enabled by default in **Project Settings** or **Organization Settings** > **Pipelines** > **Settings** > **Triggers**.

To allow building from forked GitHub repositories but reduce the risks, select **Securely build pull requests from forked repositories**. This setting disallows making secrets available or using the same permissions as normal builds, and requires a PR comment from a team member to trigger the pipeline.

Alternatively, you can select **Customize rules for building pull requests from forked repositories** to further customize these settings.

:::image type="content" source="media/forked-github-repos.png" alt-text="Screenshot of the project settings for limiting forked repo builds.":::

Other ways to increase fork security include:

- If you use pull request validation to trigger builds, deselect **Build pull requests from forks of this repository**, or ensure that **Make secrets available to builds of forks** and **Make fork builds have the same permissions as regular builds** are deselected. You can also select **Require a team member's comment before building a pull request**.

- Use Microsoft-hosted agents to build from forks. Resources are then immediately deleted from the agents after builds. If you use self-hosted agents, clean and update the agents regularly, or use separate agents for different repositories or branches.

## Azure Repos repositories

#### [YAML pipelines](#tab/yaml)

### Protect access to repositories in YAML pipelines

The **Protect access to repositories in YAML pipelines** project or organization setting provides fine-grained permissions for YAML pipelines. This setting makes a YAML pipeline explicitly request permission to access any repository, regardless of project. For more information, see [Protect access to repositories in YAML pipelines](../process/access-tokens.md#protect-access-to-repositories-in-yaml-pipelines).

>[!NOTE]
>The **Protect access to repositories in YAML pipelines** setting doesn't apply to GitHub repositories.

When this setting is enabled, Azure Repos YAML pipelines always request permission to access repositories the first time they run. You see a permission request like the following screenshot:

:::image type="content" source="media/running-the-pipeline-first-time.png" alt-text="Screenshot of running the SpaceGameWeb pipeline the first time after turning on the Protect access to repositories in YAML pipelines toggle.":::

Select **Permit** to grant permission to your pipeline repositories or resources. The pipeline now succeeds.

:::image type="content" source="media/asked-to-grant-permission.png" alt-text="Screenshot of permitting access to repositories in a YAML pipeline.":::

#### Use a git command line to check out other repositories

A command-line script like `git clone https://$(System.AccessToken)@dev.azure.com/fabrikam-tailspin/FabrikamFiber/_git/OtherRepo/` can fail when **Protect access to repositories in YAML pipelines** is enabled. To solve the issue, explicitly check out the `OtherRepo` repository using the `checkout` command, such as `checkout: git://FabrikamFiber/OtherRepo`.

#### [Classic pipelines](#tab/classic)

### Protect access to repositories in Classic pipelines

In Classic build pipelines, you can't explicitly declare other repositories as resources. You can check out other Azure Repos repositories by adding `git clone` commands as command-line tasks. For example, the following command checks out the **FabrikamFiber** repository:<br><br>`git -c http.extraheader="AUTHORIZATION: bearer $(System.AccessToken)" clone --recurse-submodules https://dev.azure.com/jamalhartnett/FabrikamFiber/_git/FabrikamFiber`.

#### Build job authorization scope

The **Limit job authorization scope to current project for non-release pipelines** setting overrides the **Build job authorization scope** option setting in Classic pipelines. If you enable this project-level setting, the pipeline runs with project-based identity even if you set the pipeline **Build job authorization scope** to **Project collection**.

:::image type="content" source="media/build-job-authorization-scope.png" alt-text="Screenshot of the Build job authorization scope setting in a Classic pipeline.":::

#### Classic pipelines and the 'Protect access to repositories in YAML pipelines' setting

The **Protect access to repositories in YAML pipelines** setting makes an Azure Repos YAML pipeline ask for permission to access any repos. Enabling this setting also prevents Classic build pipelines from accessing any repositories except the repo specified in the pipeline settings. You get an error and a log message like `TF401019: The Git repository with name or identifier FabrikamFiber does not exist or you do not have permissions for the operation you are attempting`.

If you have both YAML and Classic pipelines, and the Classic pipelines must check out repositories in other projects, you can create different projects for the YAML and Classic pipelines. Enable **Protect access to repositories in YAML pipelines** only for the YAML pipelines project.

>[!NOTE]
>The **Protect access to repositories in YAML pipelines** setting doesn't apply to GitHub repositories.

#### [Release pipelines](#tab/release)

### Protect access to repositories in release pipelines

The process for securing access to repositories for release pipelines is similar to the process for build pipelines.

For example, the **FabrikamFiberDocRelease** project has a release pipeline named **FabrikamFiberDocRelease**. The pipeline checks out the **FabrikamFiber** repository in the separate **FabrikamFiber** project, runs a command to generate public documentation, and publishes it to a website. The **FabrikamFiber** repository also uses the **FabrikamFiberLib** repository as a submodule.

When the **Limit job authorization scope to current project for release pipelines** toggle is off, the **FabrikamFiberDocRelease** pipeline can access all repositories in all projects, including the **FabrikamFiber** repository.

#### Use project-based identities for Classic release pipelines

For enhanced security, use a project-level identity to run the release pipeline. This identity can access resources only within the associated project, minimizing the impact of unauthorized access by malicious actors.

To configure the pipeline to use a project-level identity, enable the **Limit job authorization scope to current project for release pipelines** toggle in **Project Settings** or **Organization Settings**.

When this toggle is on, the example **FabrikamFiberDocRelease** pipeline can only access resources in the **FabrikamFiberDocRelease** project, so the **FabrikamFiber** repository is inaccessible.

To fix the issue, grant the release pipeline access to the **FabrikamFiber** project, and **Read** access to the **FabrikamFiber** and **FabrikamFiberLib** repositories. Also explicitly check out the **FabrikamFiberLib** submodule repository before checking out the **FabrikamFiber** repository. The example pipeline now succeeds.

---

### Azure Repos example

The following example illustrates the process of improving security for [Azure Repos](../../repos/get-started/what-is-repos.md) access in a pipeline.

The `https://dev.azure.com/fabrikam-tailspin` organization contains the **SpaceGameWeb** and **FabrikamFiber** projects.

- The **SpaceGameWeb** project contains the **SpaceGameWeb** and **SpaceGameWebReact** repositories.

  :::image type="content" source="media/spacegame-repository-structure.png" alt-text="Screenshot of the SpaceGameWeb repository structure.":::

- The **FabrikamFiber** project contains the **FabrikamFiber**, **FabrikamChat**, and **FabrikamFiberLib** repositories. The **FabrikamFiber** repository uses the **FabrikamFiberLib** repository as a submodule.

  :::image type="content" source="media/fabrikam-repository-structure.png" alt-text="Screenshot of the FabrikamFiber repository structure.":::

The **SpaceGameWeb** pipeline in the **SpaceGameWeb** project checks out the **SpaceGameWebReact** repo in the **SpaceGameWeb** project and the **FabrikamFiber** and **FabrikamChat** repos in the **FabrikamFiber** project.

If the project isn't set up to use a project-based build identity or to protect access to repositories in YAML pipelines, the **SpaceGameWeb** pipeline can access all repositories in all projects in the organization and runs successfully.

#### Use project-level identity

To improve security, use a project-level identity to run the pipeline. Enable the **Limit job authorization scope to current project for non-release pipelines** toggle in **Project Settings** or **Organization Settings**.

If this setting is enabled, the pipeline can only access resources in the **SpaceGameWeb** project, which contains only the **SpaceGameWeb** and **SpaceGameWebReact** repositories. The pipeline fails because it can't check out the repositories in the **FabrikamFiber** project.

You see the errors `remote: TF401019: The Git repository with name or identifier FabrikamChat does not exist or you do not have permissions for the operation you are attempting` and `remote: TF401019: The Git repository with name or identifier FabrikamFiber does not exist or you do not have permissions for the operation you are attempting`.

To fix the issues, grant the pipeline project access to the **FabrikamFiber** project, and grant the pipeline identity **Read** access to the **FabrikamFiber**, **FabrikamChat**, and **FabrikamFiberLib** repositories.

#### Explicitly check out the submodule

The **FabrikamFiber** repository uses the **FabrikamFiberLib** repository as a submodule. Even if you give the pipeline access to both repositories, the **FabrikamFiber** repository checkout still fails when checking out the **FabrikamFiberLib** submodule.

To fix this issue, explicitly check out the **FabrikamFiberLib** repository before you check out the **FabrikamFiber** repository. Add a `checkout: git://FabrikamFiber/FabrikamFiberLib` step before the `checkout: FabrikamFiber` step. The example pipeline now succeeds.

#### Protect access to the YAML pipeline

If the example **SpaceGameWeb** pipeline is a YAML pipeline, and **Protect access to repositories in YAML pipelines** is enabled, the pipeline requires permission to access the **SpaceGameWebReact**, **FabrikamFiber**, and **FabrikamChat** repositories the first time it runs.

The following code shows the full YAML pipeline.

```yml
trigger:
- main

pool:
  vmImage: ubuntu-latest

resources:
  repositories:
    - repository: SpaceGameWebReact
      name: SpaceGameWeb/SpaceGameWebReact
      type: git
    - repository: FabrikamFiber
      name: FabrikamFiber/FabrikamFiber
      type: git
    - repository: FabrikamChat
      name: FabrikamFiber/FabrikamChat
      type: git

steps:
  - script: echo "Building SpaceGameWeb"
  - checkout: SpaceGameWebReact
  - checkout: FabrikamChat
    condition: always()  
  - checkout: git://FabrikamFiber/FabrikamFiberLib
  - checkout: FabrikamFiber
    submodules: true
    condition: always()
  - script: |
      cd FabrikamFiber
      git -c http.extraheader="AUTHORIZATION: bearer $(System.AccessToken)" submodule update --recursive --remote
  - script: cat $(Build.Repository.LocalPath)/FabrikamFiber/FabrikamFiberLib/README.md
```

## More repository security measures

- To reduce security risks from YAML and Classic pipelines sharing resources, [disable creation of classic pipelines](approach.md#disable-creation-of-classic-pipelines) by turning on the **Disable creation of classic build pipelines** and **Disable creation of classic release pipelines** toggles in **Project Settings** or **Organization Settings**. These settings are turned on by default for new organizations.

- [Use pipeline templates](templates.md) to define the pipeline structure and help prevent malicious code infiltration. Templates can also automatically do tasks such as credential scanning or enforcing checks on protected resources.

- Require [manual approval](resources.md#manual-approval-check) each time a pipeline requests the repository. For more information, see [Approvals and checks](../process/approvals.md).

- Use a [protected branch check](resources.md#protected-branch-check) to prevent pipelines from automatically running on unauthorized branches.

- Set a repository to be used only in specified YAML pipelines. For more information, see [Add pipeline permissions to a repository resource](../process/repository-resource.md#add-pipeline-permissions-to-a-repository-resource).

- Limit the scope of the Azure Pipelines access token by providing the token only for repositories listed in the pipeline's `resources` section. For more information, see [Repository protection](resources.md#repository-protection).

## Related articles

- [Access repositories, artifacts, and other resources](../process/access-tokens.md)
- [Protect a repository resource](../process/repository-resource.md)
- [Pipeline options for Git repositories](../repos/pipeline-options-for-git.md)
- [Resource security](resources.md)

