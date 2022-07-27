---
title: Secure access to repositories
description: Secure access to repositories
ms.author: sandrica
ms.date: 07/25/2022
monikerRange: '>= azure-devops-2020'
---

# Secure access to repositories

Your repositories are a critical resource to your business success, because they contain the code that powers your business. Access to repositories shouldn't be granted easily.

The setup for pipelines to securely access repositories is one in which the toggles _Limit job authorization scope to current project for non-release pipelines_, _Limit job authorization scope to current project for release pipelines_, and _Protect access to repositories in YAML pipelines_, are enabled.

This article shows you how to grant pipelines access to your repositories in a secure fashion that limits the risks of your source code getting into the wrong hands.

## Example setup

To illustrate the steps you can take to improve the security of your pipelines, we'll use a running example.

Assume you're working on the `SpaceGameWeb` YAML pipeline hosted in the `fabrikam-tailspin/SpaceGameWeb` project, in the `SpaceGameWeb` repository. Furthermore, let's say your `SpaceGameWeb` pipeline checks out the `SpaceGameWebReact` repository in the same project, and the `FabrikamFiber` and `FabrikamChat` repositories in the `fabrikam-tailspin/FabrikamFiber` project. 

Finally, assume the `FabrikamFiber` repository uses the `FabrikamFiberLib` repository as a submodule, hosted in the same project. Read more about [how to check out submodules](../repos/pipeline-options-for-git.md#checkout-submodules).

The `SpaceGameWeb` pipeline's YAML source code may look similar to the following code.
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

The `SpaceGameWeb` project's repository structures look like in the following screenshot.

:::image type="content" source="media/spacegame-repository-structure.png" alt-text="Screenshot of the SpaceGameWeb repository structure.":::

The `FabrikamFiber` project's repository structures look like in the following screenshot.

:::image type="content" source="media/fabrikam-repository-structure.png" alt-text="Screenshot of the FabrikamFiber repository structure.":::

Image your project isn't set up to use a project-based build identity or to protect access to repositories in YAML pipelines. Also, assume you've already successfully ran your pipeline.

## Use a Project-based Build Identity

When a pipeline executes, it uses an identity to access various resources, such as repositories, service connections, variable groups. There are two types of identities a pipeline can use: a project-level one and a collection-level one. The former provides better security, the latter provides ease of use.  Read more about [scoped build identities](../process/access-tokens.md#scoped-build-identities).

We recommend you use project-level identities for running your pipelines. By default, project-level identities can only access resources in the project of which they're a member. Using this identity improves security, because it reduces the access gained by a malicious person when hijacking your pipeline.

To make your pipeline use a project-level identity, turn on the two _Limit job authorization scope to current project_ toggles in your project's Pipelines Settings. The _Limit job authorization scope to current project for non-release pipelines_ setting acts on YAML and classic build pipelines. The _Limit job authorization scope to current project for release pipelines_ setting acts on Release pipelines. Read more about [job authorization scope](../process/access-tokens.md#job-authorization-scope).

In our running example, when this toggle is off, the `SpaceGameWeb` pipeline can access all repositories in all projects. When the toggle is on, `SpaceGameWeb` can only access resources in the `fabrikam-tailspin/SpaceGameWeb` project, so only the `SpaceGameWeb` and `SpaceGameWebReact` repositories.

If you run our example pipeline, when you turn on the toggle, the pipeline will fail, and the error logs will tell you `remote: TF401019: The Git repository with name or identifier FabrikamChat does not exist or you do not have permissions for the operation you are attempting.` and `remote: TF401019: The Git repository with name or identifier FabrikamFiber does not exist or you do not have permissions for the operation you are attempting.`

To fix this issue, you need to:

1. For each project that contains a repository you wish your pipeline is able to access, follow the steps to [grant the pipeline's build identity access to that project](../process/access-tokens.md#configure-permissions-for-a-project-to-access-another-project-in-the-same-project-collection).

2. For each repository in a different project you wish to grant access to, follow the steps to [grant the pipeline's build identity _Read_ access to that repository](../process/access-tokens.md#example---configure-permissions-to-access-another-repo-in-the-same-project-collection).

3. For each repository that is used as a submodule by a repository your pipeline checks out and is in the same project, follow the steps to [grant the pipeline's build identity _Read_ access to that repository](../process/access-tokens.md#example---configure-permissions-to-access-another-repo-in-the-same-project-collection). In our example, it means the `FabrikamFiberLib` repository.

If you now run our example pipeline, it will succeed.

## Protect access to repositories in YAML pipelines

Azure DevOps provides an even finer-grained access control mechanism for repositories, in the form of the _Protect access to repositories in YAML pipelines_ setting. This setting makes a pipeline explicitly ask for permission to access _all_ repositories, regardless of which project they belong to. Read more about [this setting](../process/access-tokens.md#protect-access-to-repositories-in-yaml-pipelines)

In our running example, when this toggle is on, the `SpaceGameWeb` pipeline will ask permission to access the `SpaceGameWebReact` repository in the `fabrikam-tailspin/SpaceGameWeb` project, and the `FabrikamFiber` and `FabrikamChat` repositories in the `fabrikam-tailspin/FabrikamFiber` project.

When you run the example pipeline, you'll see a build similar to the following screenshot.
:::image type="content" source="media/running-the-pipeline-first-time.png" alt-text="Screenshot of running the SpaceGameWeb pipeline the first time after turning on the Protect access to repositories in YAML pipelines toggle.":::

You'll be asked to grant permission to the repositories your pipeline is checking out or has defined as resources.
    :::image type="content" source="media/asked-to-grant-permission.png" alt-text="Screenshot of being asked to grant permission to the SpaceGameWeb pipeline to access three repositories.":::

Once you do, your pipeline will run, but it will fail because it will not be able to check out the `FabrikamFiberLib` repository as a submodule of `FabrikamFiber`. To solve this issue, explicitly check out the `FabrikamFiberLib`, for example, add a `- checkout: git://FabrikamFiber/FabrikamFiberLib` step, before the `-checkout: FabrikamFiber` step.

If you now run the example pipeline, it will succeed.

Our final YAML pipeline source code looks like the following code snipper.
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

## Migrate to a secure access to repositories setup

Here's a summary of the steps you need to take to secure your pipeline's access to repositories:

1. Determine the list of repositories your pipeline needs access to that are part of the same organization, but are in different projects.

2. For each project that contains a repository you wish your pipeline is able to access, follow the steps to [grant the pipeline's build identity access to that project](../process/access-tokens.md#configure-permissions-for-a-project-to-access-another-project-in-the-same-project-collection).

3. For each repository you wish to grant access to, follow the steps to [grant the pipeline's build identity _Read_ access to that repository](../process/access-tokens.md#example---configure-permissions-to-access-another-repo-in-the-same-project-collection).

4. For each repository that is used as a submodule by a repository your pipeline checks out and is in the same project, follow the steps to [grant the pipeline's build identity _Read_ access to that repository](../process/access-tokens.md#example---configure-permissions-to-access-another-repo-in-the-same-project-collection). Explicitly check out the submodule repositories, _before_ the repositories that use them.

5. In Project Settings, Permissions, turn on the _Limit job authorization scope to current project for non-release pipelines_ and the _Protect access to repositories in YAML pipelines_ toggles.

6. Run the pipeline. You'll see a build similar to the following screenshot.
    :::image type="content" source="media/running-the-pipeline-first-time-4-repositories.png" alt-text="Screenshot of running the SpaceGameWeb pipeline the first time after turning on the Protect access to repositories in YAML pipelines toggle and using 4 repositories":::

7. You'll be asked to grant permission to the repositories your pipeline is checking out or has defined as resources.
    :::image type="content" source="media/asked-to-grant-permission-4-repositories.png" alt-text="Screenshot of being asked to grant permission to the SpaceGameWeb pipeline to access four repositories.":::

8. Permit your pipeline's access to the repositories. The pipeline should successfully run to completion.
   :::image type="content" source="media/successful-pipeline-run.png" alt-text="Screenshot of the successful run of the SpaceGameWeb pipeline.":::

## Troubleshooting

Here are a couple of problematic situations and how to handle them.

### You use git in command line to check out repositories in the same organization

For example, you're using `- script: git clone https://$(System.AccessToken)@dev.azure.com/fabrikam-tailspin/FabrikamFiber/_git/OtherRepo/`. The command will fail when the _Protect access to repositories in YAML pipelines_ toggle is on.

To solve the issue, check out the `OtherRepo` repository using the `checkout` command, for example, `- checkout: git://FabrikamFiber/OtherRepo`.

### A repository is using another repository as submodule

Say one of the repositories your pipeline checks out uses another repository (in the same project) as submodule, as is the case in our example for the `FabrikamFiber` and `FabrikamFiberLib` repositories. Read more about [how to check out submodules](../repos/pipeline-options-for-git.md#checkout-submodules).

Furthermore, assume you gave the `SpaceGame` build identity _Read_ access to this repo, but the checkout of the `FabrikamFiber` repository still fails when checking out the `FabrikamFiberLib` submodule.

To solve this issue, explicitly check out the `FabrikamFiberLib`, for example, add a `- checkout: git://FabrikamFiber/FabrikamFiberLib` step before the `-checkout: FabrikamFiber` one.
