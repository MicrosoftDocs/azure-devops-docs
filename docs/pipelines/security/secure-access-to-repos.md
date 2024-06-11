---
title: Secure access to Azure repositories from pipelines
description: Secure access to Azure repositories from pipelines
ms.author: sandrica
ms.date: 06/10/2024
monikerRange: '>= azure-devops-2020'
---

# Secure access to Azure Repos from pipelines

Your repositories are vital for your business success as they house the code powering your operations. Access to repositories should be carefully controlled. This article guides you on enhancing [Build pipeline](#build-pipelines) and [Classic release pipeline](#classic-release-pipelines) security when accessing Azure Repos to mitigate the risk of unauthorized access.

To ensure secure access to Azure repositories, enable the following toggles: 
- **Limit job authorization scope to current project for non-release pipelines**
- **Limit job authorization scope to current project for release pipelines**
- **Protect access to repositories in YAML pipelines**

## Basic process

The following steps to secure your pipelines are similar across all pipelines:

1. Identify the Azure Repos repositories that your pipeline requires access to within the same organization but across different projects.<br>
  Do so by inspecting your pipeline or enable **Limit job authorization scope to current project for (non-)release pipelines** and note which repositories your pipeline fails to check out. Submodule repositories might not show up in the first failed run.
2. [Grant the pipeline's build identity access to that project](../process/access-tokens.md#configure-permissions-for-a-project-to-access-another-project-in-the-same-project-collection) for each project that contains a repository your pipeline needs to access.
3. [Grant the pipeline's build identity **Read** access to that repository](../process/access-tokens.md#example---configure-permissions-to-access-another-repo-in-the-same-project-collection) for each  repository your pipeline checks out.
4. [Grant the pipeline's build identity **Read** access to that repository](../process/access-tokens.md#example---configure-permissions-to-access-another-repo-in-the-same-project-collection) for each repository that is used as a submodule by a repository your pipeline checks out and is in the same project.
5. Enable **Limit job authorization scope to current project for non-release pipelines**, **Limit job authorization scope to current project for release pipelines**, and **Protect access to repositories in YAML pipelines**.

## Build pipelines

To illustrate the steps to take to improve the security of your pipelines when they access Azure Repos, we use the following example.

- Assume you're working on the `SpaceGameWeb` pipeline hosted in the `fabrikam-tailspin/SpaceGameWeb` project, in the `SpaceGameWeb` Azure Repos repository. 
- Your `SpaceGameWeb` pipeline checks out the `SpaceGameWebReact` repository in the same project, and the `FabrikamFiber` and `FabrikamChat` repositories in the `fabrikam-tailspin/FabrikamFiber` project.
- The `FabrikamFiber` repository uses the `FabrikamFiberLib` repository as a submodule, hosted in the same project.
- The `SpaceGameWeb` project's repository structures look like in the following screenshot.
  :::image type="content" source="media/spacegame-repository-structure.png" alt-text="Screenshot of the SpaceGameWeb repository structure.":::
- The `FabrikamFiber` project's repository structures look like in the following screenshot.
  :::image type="content" source="media/fabrikam-repository-structure.png" alt-text="Screenshot of the FabrikamFiber repository structure.":::
- Imagine your project isn't set up to use a project-based build identity or to protect access to repositories in YAML pipelines. Also, assume you already successfully ran your pipeline.

### Use a project-based build identity for build pipelines

During pipeline execution, an identity gets used to access resources, such as repositories, service connections, and variable groups. Pipelines can utilize two types of identities: project-level and collection-level. The former prioritizes security, while the latter emphasizes ease of use. For more information, see [scoped build identities](../process/access-tokens.md#scoped-build-identities) and [job authorization scope](../process/access-tokens.md#job-authorization-scope).

For enhanced security, use project-level identities when you run your pipelines. These identities can only access resources within their associated project, minimizing the risk of unauthorized access by malicious actors.

To configure your pipeline to use a project-level identity, enable the **Limit job authorization scope to current project for non-release pipelines** setting.

In our running example, when this toggle is off, the `SpaceGameWeb` pipeline can access all repositories in all projects. When the toggle is on, `SpaceGameWeb` can only access resources in the `fabrikam-tailspin/SpaceGameWeb` project, so only the `SpaceGameWeb` and `SpaceGameWebReact` repositories.

If you run our example pipeline, when you turn on the toggle, the pipeline fails, and the error logs tell you `remote: TF401019: The Git repository with name or identifier FabrikamChat does not exist or you do not have permissions for the operation you are attempting.` and `remote: TF401019: The Git repository with name or identifier FabrikamFiber does not exist or you do not have permissions for the operation you are attempting.`

To fix the checkout issues, follow the steps described in the [Basic process](#basic-process) section of this article.

Additionally, explicitly check out the submodule repositories, _before_ the repositories that use them. In our example, it means the `FabrikamFiberLib` repository.

If you run our example pipeline, it succeeds.

### Further configuration

To further improve security when you access Azure Repos, consider enabling **Protect access to repositories in YAML pipelines**.

## [YAML pipelines](#tab/yaml)

Assume the `SpaceGameWeb` pipeline is a YAML pipeline, and its YAML source code looks similar to the following code.

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

### Protect access to repositories in YAML pipelines

Azure DevOps provides a fine-grained permissions mechanism for Azure Repos repositories, in the form of the **Protect access to repositories in YAML pipelines** setting. This setting makes a YAML pipeline explicitly ask for permission to access _all_ Azure Repos repositories, regardless of which project they belong to. For more information, see [access repos](../process/access-tokens.md#protect-access-to-repositories-in-yaml-pipelines). This setting doesn't affect checking out other types of repositories, such as GitHub-hosted ones.

In our running example, when this setting is turned on, the `SpaceGameWeb` pipeline asks permission to access the `SpaceGameWebReact` repository in the `fabrikam-tailspin/SpaceGameWeb` project, and the `FabrikamFiber` and `FabrikamChat` repositories in the `fabrikam-tailspin/FabrikamFiber` project.

When you run the example pipeline, it builds similar to the following example.

:::image type="content" source="media/running-the-pipeline-first-time.png" alt-text="Screenshot of running the SpaceGameWeb pipeline the first time after turning on the Protect access to repositories in YAML pipelines toggle.":::

Grant permission to your pipeline repositories or resources.

:::image type="content" source="media/asked-to-grant-permission.png" alt-text="Screenshot of being asked to grant permission to the SpaceGameWeb pipeline to access three repositories.":::

Your pipeline runs, but fails because it can't check out the `FabrikamFiberLib` repository as a submodule of `FabrikamFiber`. To solve this issue, explicitly check out the `FabrikamFiberLib`, by adding a `- checkout: git://FabrikamFiber/FabrikamFiberLib` step, before the `-checkout: FabrikamFiber` step.

The example pipeline succeeds.

Our final YAML pipeline source code looks like the following code snippet.
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

### Troubleshooting

Use the following solutions for any issues that arise.

#### You use git in command line to check out repositories in the same organization

For example, you're using `- script: git clone https://$(System.AccessToken)@dev.azure.com/fabrikam-tailspin/FabrikamFiber/_git/OtherRepo/`. The command fails when the **Protect access to repositories in YAML pipelines** setting is turned on.

To solve the issue, check out the `OtherRepo` repository using the `checkout` command, such as `- checkout: git://FabrikamFiber/OtherRepo`.

#### A repository is using another repository as submodule

Say one of the repositories your pipeline checks out uses another repository (in the same project) as submodule, as is the case in our example for the `FabrikamFiber` and `FabrikamFiberLib` repositories. Read more about [how to check out submodules](../repos/pipeline-options-for-git.md#checkout-submodules).

Furthermore, assume you gave the `SpaceGame` build identity **Read** access to this repo, but the checkout of the `FabrikamFiber` repository still fails when checking out the `FabrikamFiberLib` submodule.

To solve this issue, explicitly check out the `FabrikamFiberLib`, by adding a `- checkout: git://FabrikamFiber/FabrikamFiberLib` step before the `-checkout: FabrikamFiber` one.

## [Classic build pipelines](#tab/classic)

In classic build pipelines, you can't explicitly declare other repositories as resources. Check out more Azure Repos repositories by adding command-line tasks with `git clone` commands, similar to the following command to check out the `FabrikamFiber` repository: `git -c http.extraheader="AUTHORIZATION: bearer $(System.AccessToken)" clone --recurse-submodules https://dev.azure.com/silviuandrica/FabrikamFiber/_git/FabrikamFiber`.

### The **Protect access to repositories in YAML pipelines** setting

The **Protect access to repositories in YAML pipelines** setting makes a YAML pipeline explicitly ask for permission to access _all_ Azure Repos repositories, regardless of which project they belong to. For more information, see [Access tokens, Protect access to repositories in YAML pipelines](../process/access-tokens.md#protect-access-to-repositories-in-yaml-pipelines).

Be careful when turning on the **Protect access to repositories in YAML pipelines** setting. If you do, your classic build pipelines can't access any other Azure DevOps repository, except for the one specified in its Settings. In our example pipeline, you get an error and the log message `TF401019: The Git repository with name or identifier FabrikamFiber does not exist or you do not have permissions for the operation you are attempting.`

If your project uses both YAML and classic build pipelines, and your classic build pipelines check out more Azure DevOps repositories beyond the ones specified in their settings, create two projects, one for the YAML pipelines and one for classic build pipelines. Then, in the YAML pipelines project, enable the desired setting.

The **Protect access to repositories in YAML pipelines** setting doesn't apply to repositories hosted on other services, such as GitHub.

#### The **Build job authorization scope** setting

The **Limit job authorization scope to current project for non-release pipelines** setting overrides the **Build job authorization scope** setting. If you turn the former on, your pipeline runs with project-based identity, even if your **Build job authorization scope** specifies **Project collection**.

:::image type="content" source="media/build-job-authorization-scope.png" alt-text="Screenshot of the successful run of the Build job authorization scope setting.":::

---

## Classic release pipelines

The process for securing access to repositories for release pipelines is similar to the one for [build pipelines](#build-pipelines).

To illustrate the steps you need to take, we use a running example. In our example, there's a release pipeline named `FabrikamFiberDocRelease` in the `fabrikam-tailspin/FabrikamFiberDocRelease` project. Assume the pipeline checks out the `FabrikamFiber` repository in the `fabrikam-tailspin/FabrikamFiber` project, runs a command to generate public documentation, and then publishes it to a website. Additionally, imagine the `FabrikamFiber` repository uses the `FabrikamFiberLib` repository (in the same project) as a submodule.

### Use a Project-based build identity for classic release pipelines

When a pipeline executes, it uses an identity to access various resources, such as repositories, service connections, variable groups. There are two types of identities a pipeline can use: a project-level one and a collection-level one. The former provides better security. The latter provides ease of use. Read more about [scoped build identities](../process/access-tokens.md#scoped-build-identities) and [job authorization scope](../process/access-tokens.md#job-authorization-scope).

We recommend you use project-level identities for running your pipelines. By default, project-level identities can only access resources in the project of which they're a member. Using this identity improves security, because it reduces the access gained by a malicious person when hijacking your pipeline.

To make your pipeline use a project-level identity, turn on the **Limit job authorization scope to current project for release pipelines** setting.

In our running example, when this toggle is off, the `FabrikamFiberDocRelease` release pipeline can access all repositories in all projects, including the `FabrikamFiber` repository. When the toggle is on, `FabrikamFiberDocRelease` can only access resources in the `fabrikam-tailspin/FabrikamFiberDocRelease` project, so the `FabrikamFiber` repository becomes inaccessible.

If you run our example pipeline, when you turn on the toggle, the pipeline fails, and the logs tell you `remote: TF401019: The Git repository with name or identifier FabrikamFiber does not exist or you do not have permissions for the operation you are attempting.`

To fix these issues, follow the steps in the [Basic process](#basic-process) section of this article.

Our example pipeline succeeds.

## Related articles

- [Scoped build identities](../process/access-tokens.md#scoped-build-identities)
- [Job authorization scope](../process/access-tokens.md#job-authorization-scope)
- [Grant a pipeline's build identity access to a project](../process/access-tokens.md#configure-permissions-for-a-project-to-access-another-project-in-the-same-project-collection)
- [Grant a pipeline's build identity _Read_ access to a repository](../process/access-tokens.md#example---configure-permissions-to-access-another-repo-in-the-same-project-collection)
- [How to check out submodules](../repos/pipeline-options-for-git.md#checkout-submodules)
