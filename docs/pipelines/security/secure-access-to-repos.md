---
title: Access repositories from pipelines
description: Learn how to provide secure access to source code repositories from Azure Pipelines.
ms.author: sandrica
ms.date: 09/22/2025
monikerRange: '>= azure-devops-2020'
---

# Securely access repositories from pipelines

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

To protect the code that runs their operations, organizations must carefully control access to their source code repositories. This article describes how Azure Pipelines build and release pipelines can securely access repositories to mitigate the risk of unauthorized access.

[!INCLUDE [security-prerequisites](includes/security-prerequisites.md)]

## Process to improve repo access security

A [Project Administrator](../../organizations/security/change-project-level-permissions.md) or [Project Collection Administrator](../../organizations/security/look-up-project-collection-administrators.md) can take the following steps to help ensure secure access to Git repositories from Azure Pipelines.

1. Inspect the pipeline to identify any required repositories that are in different projects in the same organization. If you enable **Limit job authorization scope to current project for non-release pipelines**, pipelines can only check out code from the current project's repository.

1. Grant the pipeline's identity access to any required projects outside the current project. For more information, see [Configure permissions for a project to access another project in the same project collection](../process/access-tokens.md#configure-permissions-for-a-project-to-access-another-project-in-the-same-project-collection).

1. Grant the pipeline's identity **Read** access to each repository that the pipeline must check out. Also grant the pipeline **Read** access to each repository used as a submodule by repositories in the current project. For more information, see [Configure permissions to access another repo in the same project collection](../process/access-tokens.md#example---configure-permissions-to-access-another-repo-in-the-same-project-collection).

1. After granting the required permissions to the pipeline identity, enable the following toggles:

   - **Limit job authorization scope to current project for non-release pipelines**.
   - **Limit job authorization scope to current project for release pipelines**.
   - **Protect access to repositories in YAML pipelines**. You can also set this option per project in **Project Settings**.

Enable these settings in **Organization Settings** or **Project Settings** > **Pipelines** > **Settings**. If the settings are enabled in **Organizational Settings**, they can't be overridden in **Project Settings**. If the settings aren't enabled in **Organization Settings**, they can be set at the project level.

### Use project-based build identities for build pipelines

A pipeline uses an identity to access resources such as repositories, service connections, and variable groups during execution. Pipelines can utilize two types of identities: project-level or organization-level.

*Project-level identities* prioritize security, while *organization-level identities* emphasize ease of use. For more information, see [Scoped build identities](../process/access-tokens.md#scoped-build-identities) and [Job authorization scope](../process/access-tokens.md#job-authorization-scope).

To enhance security, use project-level identities to run pipelines. These identities can access resources only within their associated project, minimizing the risk of unauthorized access by malicious actors.

To configure a pipeline to use a project-level identity, enable the **Limit job authorization scope to current project for non-release pipelines** toggle.

#### Allow a repository to use another repository as a submodule

If a repository uses another repository in its project as a submodule, checkout can still fail when checking out the submodule, even if you grant the pipeline access to both repositories. To solve this issue, explicitly check out submodule repositories before checking out the repositories that use them. For more information, see [Check out submodules](../repos/pipeline-options-for-git.md#checkout-submodules).

### Protect access to repositories in YAML pipelines

Azure DevOps provides a fine-grained permissions mechanism in the **Protect access to repositories in YAML pipelines** setting. This setting makes a YAML pipeline explicitly request permission to access any repository, regardless of project. For more information, see [Protect access to repositories in YAML pipelines](../process/access-tokens.md#protect-access-to-repositories-in-yaml-pipelines).

When this setting is enabled, YAML pipelines request permission to access repositories the first time they run. The first time you run the pipeline, you see a permission request like the following screenshot:

:::image type="content" source="media/running-the-pipeline-first-time.png" alt-text="Screenshot of running the SpaceGameWeb pipeline the first time after turning on the Protect access to repositories in YAML pipelines toggle.":::

Select **Permit** to grant permission to your pipeline repositories or resources. The example pipeline now succeeds.

>[!NOTE]
>The **Protect access to repositories in YAML pipelines** setting doesn't apply to checking out GitHub or other types of repositories.

#### Use a git command line to check out other repositories in the same organization

If you use a command-line script like `git clone https://$(System.AccessToken)@dev.azure.com/fabrikam-tailspin/FabrikamFiber/_git/OtherRepo/`, the command fails when **Protect access to repositories in YAML pipelines** is enabled. To solve the issue, check out the `OtherRepo` repository using the `checkout` command, such as `checkout: git://FabrikamFiber/OtherRepo`.

## Example build pipeline

The following example illustrates improving pipeline access security for [Azure Repos](../../repos/get-started/what-is-repos.md) repositories.

The `https://dev.azure.com/fabrikam-tailspin` organization contains the **SpaceGameWeb** and **FabrikamFiber** projects.

- The **SpaceGameWeb** project contains the **SpaceGameWeb** and **SpaceGameWebReact** repositories.

  :::image type="content" source="media/spacegame-repository-structure.png" alt-text="Screenshot of the SpaceGameWeb repository structure.":::

- The **FabrikamFiber** project contains the **FabrikamFiber**, **FabrikamChat**, and **FabrikamFiberLib** repositories. The **FabrikamFiber** repository uses the **FabrikamFiberLib** repository as a submodule.

  :::image type="content" source="media/fabrikam-repository-structure.png" alt-text="Screenshot of the FabrikamFiber repository structure.":::

The **SpaceGameWeb** pipeline in the **SpaceGameWeb** project checks out the **SpaceGameWebReact** repository in its own project, and checks out the **FabrikamFiber** and **FabrikamChat** repositories in the **FabrikamFiber** project.

If the project isn't set up to use a project-based build identity or to protect access to repositories in YAML pipelines, the **SpaceGameWeb** pipeline can access all repositories in all projects in the organization and runs successfully.

If the **Limit job authorization scope to current project for non-release pipelines** setting is enabled, the pipeline can only access resources in the **SpaceGameWeb** project, which contains only the **SpaceGameWeb** and **SpaceGameWebReact** repositories. If you run the example pipeline with this setting enabled, the pipeline fails because it can't check out repositories in the **FabrikamFiber** project.

You see the errors `remote: TF401019: The Git repository with name or identifier FabrikamChat does not exist or you do not have permissions for the operation you are attempting` and `remote: TF401019: The Git repository with name or identifier FabrikamFiber does not exist or you do not have permissions for the operation you are attempting`.

To fix the issues, follow the steps described in [Process to improve repo access security](#process-to-improve-repo-access-security) to grant the pipeline identity access to the required projects and repositories.

The example **FabrikamFiber** repository uses the **FabrikamFiberLib** repository in its project as a submodule. Even if you give the pipeline access to the **FabrikamFiber** and  **FabrikamFiberLib** repositories, the **FabrikamFiber** repository checkout still fails when checking out the **FabrikamFiberLib** submodule.

To fix this issue, explicitly check out the **FabrikamFiberLib** submodule repository in your pipeline before you check out the **FabrikamFiber** repository, by adding a `checkout: git://FabrikamFiber/FabrikamFiberLib` step before the `checkout: FabrikamFiber` step. The example pipeline now succeeds.

If the example **SpaceGameWeb** pipeline is a YAML pipeline, and **Protect access to repositories in YAML pipelines** is enabled, the pipeline asks permission to access the **SpaceGameWebReact**, **FabrikamFiber**, and **FabrikamChat** repositories the first time it runs.

The final YAML pipeline looks like the following code:

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
  - ...
```

## Protect access to repositories in Classic pipelines

In Classic build pipelines, you can't explicitly declare other repositories as resources. You can check out other Azure Repos repositories by adding `git clone` commands as command-line tasks. For example, the following command checks out the **FabrikamFiber** repository:<br>`git -c http.extraheader="AUTHORIZATION: bearer $(System.AccessToken)" clone --recurse-submodules https://dev.azure.com/jamalhartnett/FabrikamFiber/_git/FabrikamFiber`.

### Build job authorization scope

The **Limit job authorization scope to current project for non-release pipelines** setting overrides the Classic pipeline **Build job authorization scope** option setting. If you enable the project or organization setting, the pipeline runs with project-based identity even if you set the pipeline **Build job authorization scope** to **Project collection**.

:::image type="content" source="media/build-job-authorization-scope.png" alt-text="Screenshot of the Build job authorization scope setting in a Classic pipeline.":::

### Classic pipelines and the 'Protect access to repositories in YAML pipelines' setting

The **Protect access to repositories in YAML pipelines** setting makes an Azure Repos YAML pipeline explicitly ask for permission to access any Azure Repos repository, regardless of project. Enabling this setting prevents Classic build pipelines from accessing any repositories except the repo specified in the pipeline settings. For the pipeline example, you get an error and the log message `TF401019: The Git repository with name or identifier FabrikamFiber does not exist or you do not have permissions for the operation you are attempting`.

If you have both YAML and Classic pipelines, and the Classic pipelines need to check out repositories not specified in their settings, you can create different projects for the YAML and Classic pipelines. Enable **Protect access to repositories in YAML pipelines** only for the YAML pipelines project.

>[!NOTE]
>The **Protect access to repositories in YAML pipelines** setting doesn't apply to checking out GitHub or other types of repositories.

## Classic release pipelines

The process for securing access to repositories for release pipelines is similar to the process for build pipelines.

For example, the **FabrikamFiberDocRelease** project has a release pipeline named **FabrikamFiberDocRelease**. The pipeline checks out the **FabrikamFiber** repository in the **FabrikamFiber** project, runs a command to generate public documentation, and publishes it to a website. The **FabrikamFiber** repository uses the **FabrikamFiberLib** repository as a submodule.

### Use project-based identities for Classic release pipelines

For enhanced security, use a project-level identity to run the release pipeline. This identity can access resources only within the associated project, minimizing the risk of unauthorized access by malicious actors.

To configure the pipeline to use a project-level identity, enable the **Limit job authorization scope to current project for release pipelines** toggle in **Project Settings** or **Organization Settings**.

In the example, when this toggle is off, the **FabrikamFiberDocRelease** pipeline can access all repositories in all projects, including the **FabrikamFiber** repository. When the toggle is on, **FabrikamFiberDocRelease** can only access resources in the **FabrikamFiberDocRelease** project, so the **FabrikamFiber** repository is inaccessible.

To fix the issue, follow the steps described in [Process to improve repo access security](#process-to-improve-repo-access-security). Also explicitly check out the submodule repositories before checking out the repositories that use them. The example pipeline now succeeds.

## Related articles

- [Access repositories, artifacts, and other resources](../process/access-tokens.md)
- [Check out submodules](../repos/pipeline-options-for-git.md#checkout-submodules)
- [Secure your Azure Pipelines](pipelines/security/overview)

