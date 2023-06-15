---
title: Building multiple branches
description: Build multiple branches with Azure Pipelines
ms.topic: how-to
ms.assetid: E9684A1D-8D2B-4D5E-808A-D3677D314DB6
ms.date: 06/14/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Build multiple branches in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Using Azure Pipelines, you can create triggers to build your project on every new commit and pull request to your repository. In this article, you will learn how to enable continuous integration and set up multiple branch builds for your repository.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- A working pipeline. Follow the instructions in [Create your first pipeline](../create-first-pipeline.md) to create your pipeline.

## Enable CI trigger for a topic branch

When working with Git, it is a common practice to create temporary branches from the main branch to facilitate a streamlined workflow. These branches, often referred to as topic or feature branches, serve the purpose of isolating your work. Within this workflow, you create a branch dedicated to a specific feature or bug fix, and once completed, you merge the code back into the main branch before deleting the topic branch.

#### [YAML](#tab/yaml/)
::: moniker range=">=azure-devops-2020"

If no trigger is explicitly specified in your YAML file, any changes made to any branch will trigger a run. To add triggers for both the *main* branch and any *feature/* branches, include the following snippet in your YAML file. This will ensure that any modifications made to these branches will automatically trigger a pipeline run.

```yaml
trigger:
- main
- feature/*
```
::: moniker-end

::: moniker range="< azure-devops"
YAML builds are not yet available on TFS.
::: moniker-end

#### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your classic pipeline. Select **Edit** to modify your pipeline.

1. Select **Triggers** and then check the **Enable continuous integration** checkbox.

1. Under **Path filters** dropdown, type `feature/*` in the **Path specification** text box to trigger on any changes to all feature branches. 

1. Select the **Save & queue** menu and then Select **Save**.

:::image type="content" source="./media/classic-ci-trigger.png" alt-text="A screenshot showing how to add a CI trigger to a classic pipeline.":::

* * *

## Customize build tasks based on the branch being built

The main branch is usually responsible for generating deployable artifacts, such as binaries. For short-lived feature branches, there is no need to invest time in creating and storing these artifacts. In Azure Pipelines, you can implement custom conditions to ensure that specific tasks are executed only on the main branch.

#### [YAML](#tab/yaml/)

Edit the *azure-pipelines.yml* file in your *main* branch, and add a condition to your desired task. For example, the following snippet adds a condition to the [publish pipeline artifacts](/azure/devops/pipelines/tasks/reference/publish-pipeline-artifact-v1) task.

::: moniker range=">=azure-devops-2020"

```yaml
- task: PublishPipelineArtifact@1
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
```
::: moniker-end

::: moniker range="< azure-devops"

YAML builds are not yet available on TFS.

::: moniker-end

#### [Classic](#tab/classic/)

The following example adds a custom condition to the [publish build artifacts](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1) task.

1. Select the **Control Options** section, and then check the **Enabled** checkbox.

1. Select the **Run this task** dropdown menu, and then select **Custom conditions**.

1. Enter the following snippet in the **Custom condition** text box. This task will only execute if you're building the main branch.
   
    ```
   and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
   ```

1. Select **Save & queue** when you're done.

:::image type="content" source="media/ci-build-git/customconditions.png" alt-text="A screenshot showing how to add a custom condition to the publish build artifacts task.":::

* * *

## Validate pull requests

To ensure branch protection, you can utilize policies that mandate successful builds prior to merging pull requests. Using Azure Pipelines, you have the flexibility to configure the requirement of a new successful build for merging changes into crucial branches like the main branch.

### GitHub repository

#### [YAML](#tab/yaml/)

::: moniker range=">=azure-devops-2020"

If you don't explicitly define **pr** triggers in your YAML file, pull request builds will be enabled by default for all branches. However, you have the flexibility to specify the target branches for your pull request builds. As an example, if you want to run the build exclusively for pull requests targeting the *main* branch and branches starting with *feature/*, you can specify the following configuration:

```yaml
pr:
- main
- feature/*
```

::: moniker-end

::: moniker range="< azure-devops"

YAML builds are not yet available on TFS.

::: moniker-end


#### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your classic pipeline. Select **Edit** to modify your pipeline.

1. Select **Triggers**, and then select the **Pull request validation**. Check the **Enable pull request validation** checkbox and ensure you have the **main branch** in the **Branch filters**.

1. Select **Save & queue** when you're done, and then select **Save** one more time.

:::image type="content" source="media/ci-build-git/classic-pr-validation.png" alt-text="A screenshot showing how to enable pull request validation.":::

* * *

### Azure Repos repository

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Repos** and then select **Branches**.

1. Select the ellipsis icon to the right of your branch name, and then select **Branch policies**.
 
1. Under the **Build validation** menu, select the + sign to add a build policy.

1. Select your **Build pipeline** from the dropdown menu and make sure that **Trigger** is set to automatic and the **Policy requirement** is set to required.

1. Enter a descriptive **Display name** to describe the policy.
  
1. Select **Save** to create and enable the policy. Select **Save changes** at the top left of your screen to save your changes.

:::image type="content" source="media/ci-build-git/add-build-policy.png" alt-text="A screenshot showing how to add a new build policy.":::



1. To test the policy navigate to **Repos** > **Pull requests** in the Azure DevOps portal.

1. Select **New pull request** and make sure that your topic branch is set to merge into your main branch, and then Select **Create**.

1. On your screen, you can see the currently executing policy.  

1. Select the **policy name** to examine the build. If the build succeeds your pull request will be merged. If the build fails the merge will be blocked.

> [!NOTE]
> Azure Pipelines no longer supports per-pipeline retention policies. We recommend using project-level retention rules.

## Related articles

- [Deploy from multiple branches](../release/deploy-multiple-branches.md)
- [Deploy pull request Artifacts](../release/deploy-pull-request-builds.md)
- [Configure retention policies](../policies/retention.md)