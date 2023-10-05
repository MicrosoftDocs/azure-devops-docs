---
title: Secure access to Azure repositories from pipelines
description: Secure access to Azure repositories from pipelines
ms.author: sandrica
ms.date: 07/25/2022
monikerRange: '>= azure-devops-2020'
---

# Secure access to Azure Repos from pipelines

Your repositories are a critical resource to your business success, because they contain the code that powers your business. Access to repositories shouldn't be granted easily.

This article shows you how to improve the security of your pipelines accessing Azure Repos, to limit the risk of your source code getting into the wrong hands.

The setup for pipelines to securely access Azure repositories is one in which the toggles _Limit job authorization scope to current project for non-release pipelines_, _Limit job authorization scope to current project for release pipelines_, and _Protect access to repositories in YAML pipelines_, are enabled.

We'll cover both build pipelines and classic release pipelines:

- [Build pipelines](#build-pipelines)
- [Classic release pipelines](#classic-release-pipelines)

## Basic process

The steps are similar across all pipelines:

1. Determine the list of Azure Repos repositories your pipeline needs access to that are part of the same organization, but are in different projects. 

   You can compile the list of repositories by inspecting your pipeline. Or, you can turn on the _Limit job authorization scope to current project for (non-)release pipelines_ toggle and note which repositories your pipeline fails to check out. Submodule repositories may not show up in the first failed run.

2. For each Azure DevOps project that contains a repository your pipeline needs to access, follow the steps to [grant the pipeline's build identity access to that project](../process/access-tokens.md#configure-permissions-for-a-project-to-access-another-project-in-the-same-project-collection).

3. For each Azure Repos repository your pipeline checks out, follow the steps to [grant the pipeline's build identity _Read_ access to that repository](../process/access-tokens.md#example---configure-permissions-to-access-another-repo-in-the-same-project-collection).

4. For each repository that is used as a submodule by a repository your pipeline checks out and is in the same project, follow the steps to [grant the pipeline's build identity _Read_ access to that repository](../process/access-tokens.md#example---configure-permissions-to-access-another-repo-in-the-same-project-collection).

5. Turn on the _Limit job authorization scope to current project for non-release pipelines_, _Limit job authorization scope to current project for release pipelines_, and _Protect access to repositories in YAML pipelines_ toggles.

## Build pipelines

To illustrate the steps to take to improve the security of your pipelines when they access Azure Repos, we'll use a running example.

Assume you're working on the `SpaceGameWeb` pipeline hosted in the `fabrikam-tailspin/SpaceGameWeb` project, in the `SpaceGameWeb` Azure Repos repository. Furthermore, let's say your `SpaceGameWeb` pipeline checks out the `SpaceGameWebReact` repository in the same project, and the `FabrikamFiber` and `FabrikamChat` repositories in the `fabrikam-tailspin/FabrikamFiber` project.

Finally, assume the `FabrikamFiber` repository uses the `FabrikamFiberLib` repository as a submodule, hosted in the same project. Read more about [how to check out submodules](../repos/pipeline-options-for-git.md#checkout-submodules).

The `SpaceGameWeb` project's repository structures look like in the following screenshot.

:::image type="content" source="media/spacegame-repository-structure.png" alt-text="Screenshot of the SpaceGameWeb repository structure.":::

The `FabrikamFiber` project's repository structures look like in the following screenshot.

:::image type="content" source="media/fabrikam-repository-structure.png" alt-text="Screenshot of the FabrikamFiber repository structure.":::

Image your project isn't set up to use a project-based build identity or to protect access to repositories in YAML pipelines. Also, assume you've already successfully ran your pipeline.

### Use a Project-based build identity for build pipelines

When a pipeline executes, it uses an identity to access various resources, such as repositories, service connections, variable groups. There are two types of identities a pipeline can use: a project-level one and a collection-level one. The former provides better security, the latter provides ease of use.  Read more about [scoped build identities](../process/access-tokens.md#scoped-build-identities) and [job authorization scope](../process/access-tokens.md#job-authorization-scope).

We recommend you use project-level identities for running your pipelines. By default, project-level identities can only access resources in the project of which they're a member. Using this identity improves security, because it reduces the access gained by a malicious person when hijacking your pipeline.

To make your pipeline use a project-level identity, turn on the _Limit job authorization scope to current project for non-release pipelines_ setting.

In our running example, when this toggle is off, the `SpaceGameWeb` pipeline can access all repositories in all projects. When the toggle is on, `SpaceGameWeb` can only access resources in the `fabrikam-tailspin/SpaceGameWeb` project, so only the `SpaceGameWeb` and `SpaceGameWebReact` repositories.

If you run our example pipeline, when you turn on the toggle, the pipeline will fail, and the error logs will tell you `remote: TF401019: The Git repository with name or identifier FabrikamChat does not exist or you do not have permissions for the operation you are attempting.` and `remote: TF401019: The Git repository with name or identifier FabrikamFiber does not exist or you do not have permissions for the operation you are attempting.`

To fix the checkout issues, follow the steps described in [Basic process](#basic-process).

Additionally, you need to explicitly check out the submodule repositories, _before_ the repositories that use them. In our example, it means the `FabrikamFiberLib` repository.

If you now run our example pipeline, it will succeed.

### Further configuration

To further improve security when accessing Azure Repos, consider turning on the _Protect access to repositories in YAML pipelines_ setting.

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

Azure DevOps provides a fine-grained permissions mechanism for Azure Repos repositories, in the form of the _Protect access to repositories in YAML pipelines_ setting. This setting makes a YAML pipeline explicitly ask for permission to access _all_ Azure Repos repositories, regardless of which project they belong to. Read more about [this setting](../process/access-tokens.md#protect-access-to-repositories-in-yaml-pipelines). Checking out other types of repositories, for example, GitHub-hosted ones, isn't affected by this setting.

In our running example, when this toggle is on, the `SpaceGameWeb` pipeline will ask permission to access the `SpaceGameWebReact` repository in the `fabrikam-tailspin/SpaceGameWeb` project, and the `FabrikamFiber` and `FabrikamChat` repositories in the `fabrikam-tailspin/FabrikamFiber` project.

When you run the example pipeline, you'll see a build similar to the following screenshot.
:::image type="content" source="media/running-the-pipeline-first-time.png" alt-text="Screenshot of running the SpaceGameWeb pipeline the first time after turning on the Protect access to repositories in YAML pipelines toggle.":::

You'll be asked to grant permission to the repositories your pipeline checks out or has defined as resources.
    :::image type="content" source="media/asked-to-grant-permission.png" alt-text="Screenshot of being asked to grant permission to the SpaceGameWeb pipeline to access three repositories.":::

Once you do, your pipeline will run, but it will fail because it will not be able to check out the `FabrikamFiberLib` repository as a submodule of `FabrikamFiber`. To solve this issue, explicitly check out the `FabrikamFiberLib`, for example, add a `- checkout: git://FabrikamFiber/FabrikamFiberLib` step, before the `-checkout: FabrikamFiber` step.

If you now run the example pipeline, it will succeed.

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

Here are a couple of problematic situations and how to handle them.

#### You use git in command line to check out repositories in the same organization

For example, you're using `- script: git clone https://$(System.AccessToken)@dev.azure.com/fabrikam-tailspin/FabrikamFiber/_git/OtherRepo/`. The command will fail when the _Protect access to repositories in YAML pipelines_ toggle is on.

To solve the issue, check out the `OtherRepo` repository using the `checkout` command, for example, `- checkout: git://FabrikamFiber/OtherRepo`.

#### A repository is using another repository as submodule

Say one of the repositories your pipeline checks out uses another repository (in the same project) as submodule, as is the case in our example for the `FabrikamFiber` and `FabrikamFiberLib` repositories. Read more about [how to check out submodules](../repos/pipeline-options-for-git.md#checkout-submodules).

Furthermore, assume you gave the `SpaceGame` build identity _Read_ access to this repo, but the checkout of the `FabrikamFiber` repository still fails when checking out the `FabrikamFiberLib` submodule.

To solve this issue, explicitly check out the `FabrikamFiberLib`, for example, add a `- checkout: git://FabrikamFiber/FabrikamFiberLib` step before the `-checkout: FabrikamFiber` one.

## [Classic build pipelines](#tab/classic)

In classic build pipelines, you can't explicitly declare other repositories as resources. The way you check out more Azure Repos repositories is by adding command-line tasks with `git clone` commands, similar to the following command to check out the `FabrikamFiber` repository: `git -c http.extraheader="AUTHORIZATION: bearer $(System.AccessToken)" clone --recurse-submodules https://dev.azure.com/silviuandrica/FabrikamFiber/_git/FabrikamFiber`.

### The _Protect access to repositories in YAML pipelines_ setting

The _Protect access to repositories in YAML pipelines_ setting makes a YAML pipeline explicitly ask for permission to access _all_ Azure Repos repositories, regardless of which project they belong to. Read more about [this setting](../process/access-tokens.md#protect-access-to-repositories-in-yaml-pipelines).

Be careful when turning on the _Protect access to repositories in YAML pipelines_ setting. If you do, your classic build pipelines won't be able to access any other Azure DevOps repository, except for the one specified in its Settings. In our example pipeline, you'll get an error and the log message `TF401019: The Git repository with name or identifier FabrikamFiber does not exist or you do not have permissions for the operation you are attempting.`

If your project has both YAML and classic build pipelines _and_ your classic build pipelines check out other Azure DevOps repositories in addition to the ones specified in their settings, then you want to create two projects, one for the YAML pipelines and one for the classic build pipelines. Then, in the YAML pipelines project, you can turn on the setting.

The _Protect access to repositories in YAML pipelines_ setting doesn't apply to repositories hosted on other services, such as GitHub.

#### The _Build job authorization scope_ setting

The _Limit job authorization scope to current project for non-release pipelines_ setting overrides the _Build job authorization scope_ setting. If you turn the former on, your pipeline will run with project-based identity, even if your _Build job authorization scope_ specifies _Project collection_.

:::image type="content" source="media/build-job-authorization-scope.png" alt-text="Screenshot of the successful run of the Build job authorization scope setting.":::

---

## Classic release pipelines

The process for securing access to repositories for release pipelines is similar to the one for [build pipelines](#build-pipelines).

To illustrate the steps you need to take, we'll use a running example. In our example, there's a release pipeline named `FabrikamFiberDocRelease` in the `fabrikam-tailspin/FabrikamFiberDocRelease` project. Assume the pipeline checks out the `FabrikamFiber` repository in the `fabrikam-tailspin/FabrikamFiber` project, runs a command to generate public documentation, and then publishes it to a website. Additionally, imagine the `FabrikamFiber` repository uses the `FabrikamFiberLib` repository (in the same project) as a submodule

### Use a Project-based build identity for classic release pipelines

When a pipeline executes, it uses an identity to access various resources, such as repositories, service connections, variable groups. There are two types of identities a pipeline can use: a project-level one and a collection-level one. The former provides better security, the latter provides ease of use.  Read more about [scoped build identities](../process/access-tokens.md#scoped-build-identities) and [job authorization scope](../process/access-tokens.md#job-authorization-scope).

We recommend you use project-level identities for running your pipelines. By default, project-level identities can only access resources in the project of which they're a member. Using this identity improves security, because it reduces the access gained by a malicious person when hijacking your pipeline.

To make your pipeline use a project-level identity, turn on the _Limit job authorization scope to current project for release pipelines_ setting.

In our running example, when this toggle is off, the `FabrikamFiberDocRelease` release pipeline can access all repositories in all projects, including the `FabrikamFiber` repository. When the toggle is on, `FabrikamFiberDocRelease` can only access resources in the `fabrikam-tailspin/FabrikamFiberDocRelease` project, so the `FabrikamFiber` repository becomes inaccessible.

If you run our example pipeline, when you turn on the toggle, the pipeline will fail, and the logs will tell you `remote: TF401019: The Git repository with name or identifier FabrikamFiber does not exist or you do not have permissions for the operation you are attempting.`

To fix these issues, follow the steps in [Basic process](#basic-process).

If you now run our example pipeline, it will succeed.

## See also

- [Scoped build identities](../process/access-tokens.md#scoped-build-identities)
- [Job authorization scope](../process/access-tokens.md#job-authorization-scope)
- [Grant a pipeline's build identity access to a project](../process/access-tokens.md#configure-permissions-for-a-project-to-access-another-project-in-the-same-project-collection)
- [Grant a pipeline's build identity _Read_ access to a repository](../process/access-tokens.md#example---configure-permissions-to-access-another-repo-in-the-same-project-collection)
- [How to check out submodules](../repos/pipeline-options-for-git.md#checkout-submodules)