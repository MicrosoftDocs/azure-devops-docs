---
title: Access repositories from pipelines
description: Learn how to provide secure access to source code repositories from Azure Pipelines.
ms.author: sandrica
ms.date: 06/10/2024
monikerRange: '>= azure-devops-2020'
---

# Securely access repositories from pipelines

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

To protect the code that runs their operations, organizations must carefully control access to their source code repositories. This article describes how build and release pipelines can securely access source code repositories to mitigate the risk of unauthorized access.

[!INCLUDE [security-prerequisites](includes/security-prerequisites.md)]

## Basic process

A Project Collection Administrator can take the following steps to ensure secure access to Git repositories from Azure Pipelines.

1. Inspect the pipeline to identify any required repositories that are in different projects in the same organization. If you enable **Limit job authorization scope to current project for non-release pipelines**, pipelines can only check out code from the current project's repository.

1. Grant the pipeline's build identity access to any required projects outside the current project. For more information, see [Configure permissions for a project to access another project in the same project collection](../process/access-tokens.md#configure-permissions-for-a-project-to-access-another-project-in-the-same-project-collection).

1. Grant the pipeline's build identity **Read** access to each repository that the pipeline must check out. Also grant the pipeline **Read** access to each repository used as a submodule by repositories in the current project. For more information, see [Configure permissions to access another repo in the same project collection](../process/access-tokens.md#example---configure-permissions-to-access-another-repo-in-the-same-project-collection).

1. Enable the following toggles in **Organization Settings**:

   - **Limit job authorization scope to current project for non-release pipelines**
   - **Limit job authorization scope to current project for release pipelines**
   - **Protect access to repositories in YAML pipelines**. You can also set this option per project in **Project Settings**.

## Build pipelines

The following example illustrates the process to improve the security of a pipeline when it accesses Azure Repos repositories.

The `https://dev.azure.com/fabrikam-tailspin` organization contains the **SpaceGameWeb** and **FabrikamFiber** projects.

- The **SpaceGameWeb** project's repository structure looks like the following screenshot:
  :::image type="content" source="media/spacegame-repository-structure.png" alt-text="Screenshot of the SpaceGameWeb repository structure.":::

- The **FabrikamFiber** project's repository structure looks like the following screenshot. The **FabrikamFiber** repository uses the **FabrikamFiberLib** repository in its project as a submodule.
  :::image type="content" source="media/fabrikam-repository-structure.png" alt-text="Screenshot of the FabrikamFiber repository structure.":::

The **SpaceGameWeb** pipeline in the **SpaceGameWeb** project checks out the **SpaceGameWebReact** repository in its project, and the **FabrikamFiber** and **FabrikamChat** repositories in the **FabrikamFiber** project. If the project isn't set up to use a project-based build identity or to protect access to repositories in YAML pipelines, the **SpaceGameWeb** pipeline runs successfully.

### Use a project-based build identity for build pipelines

A pipeline uses an identity to access resources such as repositories, service connections, and variable groups during execution. Pipelines can utilize two types of identities: project-level and organization-level.

Project-level identities prioritize security, while organization-level identities emphasize ease of use. For more information, see [Scoped build identities](../process/access-tokens.md#scoped-build-identities) and [Job authorization scope](../process/access-tokens.md#job-authorization-scope).

To enhance security, use project-level identities to run pipelines. These identities can access resources only within their associated project, minimizing the risk of unauthorized access by malicious actors.

To configure a pipeline to use a project-level identity, enable the **Limit job authorization scope to current project for non-release pipelines** toggle in **Organization Settings**.

In the preceding example, when this toggle is off, the **SpaceGameWeb** pipeline can access all repositories in all projects in the organization. When the toggle is on, the pipeline can only access resources in the **SpaceGameWeb** project, which contains only the **SpaceGameWeb** and **SpaceGameWebReact** repositories.

If you run the example pipeline with the toggle on, the pipeline fails because it can't check out the repositories in the **FabrikamFiber** project. You see the errors `remote: TF401019: The Git repository with name or identifier FabrikamChat does not exist or you do not have permissions for the operation you are attempting.` and `remote: TF401019: The Git repository with name or identifier FabrikamFiber does not exist or you do not have permissions for the operation you are attempting`. 

To fix the issues, follow the steps described in [Basic process](#basic-process).

#### Allow a repository to use another repository as a submodule

In the example, the **FabrikamFiber** repository uses the **FabrikamFiberLib** repository in the same project as a submodule. Even if you give the pipeline build identity **FabrikamFiber** project access and **Read** access to the **FabrikamFiberLib** repository, the **FabrikamFiber** repository checkout still fails when checking out the **FabrikamFiberLib** submodule.

To solve this issue, explicitly check out submodule repositories before checking out the repositories that use them. In the example, explicitly check out **FabrikamFiberLib** by adding a `checkout: git://FabrikamFiber/FabrikamFiberLib` step before the `checkout: FabrikamFiber` step in your pipeline. The example pipeline now succeeds.

### Protect access to repositories in YAML pipelines

Azure DevOps provides a fine-grained permissions mechanism in the **Protect access to repositories in YAML pipelines** setting. This setting makes a YAML pipeline explicitly request permission to access any repository, regardless of which project it belongs to. For more information, see [Protect access to repositories in YAML pipelines](../process/access-tokens.md#protect-access-to-repositories-in-yaml-pipelines).

This setting doesn't affect checking out other types of repositories, such as GitHub-hosted ones.

When this setting is turned on, YAML pipelines request permission to access repositories the first time they run. If the **SpaceGameWeb** pipeline is a YAML pipeline with source code similar to the following example, it asks permission to access the **SpaceGameWebReact** repository in the **SpaceGameWeb** project, and the **FabrikamFiber** and **FabrikamChat** repositories in the **FabrikamFiber** project.

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
  - checkout: FabrikamFiber
    submodules: true
    condition: always()
  - script: |
      cd FabrikamFiber
      git -c http.extraheader="AUTHORIZATION: bearer $(System.AccessToken)" submodule update --recursive --remote
  - script: cat $(Build.Repository.LocalPath)/FabrikamFiber/FabrikamFiberLib/README.md
  - ...
```

:::image type="content" source="media/running-the-pipeline-first-time.png" alt-text="Screenshot of running the SpaceGameWeb pipeline the first time after turning on the Protect access to repositories in YAML pipelines toggle.":::

Select **Permit** to grant permission to your pipeline repositories or resources.

:::image type="content" source="media/asked-to-grant-permission.png" alt-text="Screenshot of being asked to grant permission to the SpaceGameWeb pipeline to access three repositories.":::

The pipeline then runs, but fails because it can't check out the **FabrikamFiberLib** repository as a submodule of **FabrikamFiber**. To solve this issue, explicitly check out **FabrikamFiberLib** by adding a `checkout: git://FabrikamFiber/FabrikamFiberLib` step before the `checkout: FabrikamFiber` step in your pipeline.

```yml
steps:
  - script: echo "Building SpaceGameWeb"
  - checkout: SpaceGameWebReact
  - checkout: FabrikamChat
    condition: always()  
  - checkout: git://FabrikamFiber/FabrikamFiberLib  
  - checkout: FabrikamFiber
    submodules: true
    condition: always()
```

The example pipeline now succeeds.

#### Use git command line to check out other repositories in the same organization

If you use a command-line script like `git clone https://$(System.AccessToken)@dev.azure.com/fabrikam-tailspin/FabrikamFiber/_git/OtherRepo/`, the command fails when **Protect access to repositories in YAML pipelines** is turned on. To solve the issue, check out the `OtherRepo` repository using the `checkout` command, such as `checkout: git://FabrikamFiber/OtherRepo`.

### Protect access to repositories in Classic build pipelines

In Classic build pipelines, you can't explicitly declare other repositories as resources. You can check out other Azure Repos repositories by adding `git clone` commands as command-line tasks. For example, the following command checks out the **FabrikamFiber** repository:<br>`git -c http.extraheader="AUTHORIZATION: bearer $(System.AccessToken)" clone --recurse-submodules https://dev.azure.com/jamalhartnett/FabrikamFiber/_git/FabrikamFiber`.

#### The **Build job authorization scope** setting

The **Limit job authorization scope to current project for non-release pipelines** organization setting overrides the **Build job authorization scope** option setting in a Classic pipeline. If you enable the organization setting, the pipeline runs with project-based identity even if you set **Build job authorization scope** to **Project collection**.

:::image type="content" source="media/build-job-authorization-scope.png" alt-text="Screenshot of the successful run of the Build job authorization scope setting.":::

#### Classic pipelines and the 'Protect access to repositories in YAML pipelines' setting

The **Protect access to repositories in YAML pipelines** setting makes a YAML pipeline explicitly ask for permission to access all Azure Repos repositories, regardless of which project they belong to. When you enable **Protect access to repositories in YAML pipelines** setting, your Classic build pipelines can't access any Azure Repos repository except for the one specified in the pipeline settings. In the pipeline example, you get an error and the log message `TF401019: The Git repository with name or identifier FabrikamFiber does not exist or you do not have permissions for the operation you are attempting`.

If you have both YAML and Classic pipelines and need your Classic pipelines to check out repositories not specified in their settings, create different projects for the YAML pipelines and the Classic pipelines. Then enable **Protect access to repositories in YAML pipelines** only for the YAML pipelines project.

The **Protect access to repositories in YAML pipelines** setting doesn't apply to repositories hosted on other services, such as GitHub.

## Release pipelines

The process for securing access to repositories for release pipelines is similar to the process for build pipelines.

For example, the **FabrikamFiberDocRelease** project has a release pipeline named **FabrikamFiberDocRelease**. The pipeline checks out the **FabrikamFiber** repository in the **FabrikamFiber** project, runs a command to generate public documentation, and publishes it to a website. The **FabrikamFiber** repository uses the **FabrikamFiberLib** repository as a submodule.

### Use a project-based build identity for a Classic release pipelines

For enhanced security, use project-level identities to run pipelines. These identities can access resources only within their associated project, minimizing the risk of unauthorized access by malicious actors.

To configure a pipeline to use a project-level identity, enable the **Limit job authorization scope to current project for non-release pipelines** toggle in **Organization Settings**.

In the preceding example, when this toggle is off, the **FabrikamFiberDocRelease** pipeline can access all repositories in all projects, including the **FabrikamFiber** repository. When the toggle is on, **FabrikamFiberDocRelease** can only access resources in the **FabrikamFiberDocRelease** project, so the **FabrikamFiber** repository is inaccessible.

To fix the issues, follow the steps described in [Basic process](#basic-process). Also, explicitly check out the submodule repositories before checking out the repositories that use them. The example pipeline now succeeds.




## Related articles

- [Scoped build identities](../process/access-tokens.md#scoped-build-identities)
- [Job authorization scope](../process/access-tokens.md#job-authorization-scope)
- [Grant a pipeline's build identity access to a project](../process/access-tokens.md#configure-permissions-for-a-project-to-access-another-project-in-the-same-project-collection)
- [Grant a pipeline's build identity _Read_ access to a repository](../process/access-tokens.md#example---configure-permissions-to-access-another-repo-in-the-same-project-collection)
- [How to check out submodules](../repos/pipeline-options-for-git.md#checkout-submodules)
