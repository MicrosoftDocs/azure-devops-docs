---
title: Configure pipeline triggers
description: Configure pipeline triggers
ms.topic: conceptual
ms.author: sdanie
author: steved0x
ms.date: 05/07/2021
ms.custom: contperf-fy21q3
monikerRange: ">=azure-devops-2020"
---

# Trigger one pipeline after another

> [!div class="op_single_selector"]
> - [YAML pipelines](pipeline-triggers.md)
> - [Classic pipelines](pipeline-triggers-classic.md)

Large products have several components that are dependent on each other.
These components are often independently built. When an upstream component (a library, for example) changes, the downstream dependencies have to be rebuilt and revalidated.

In situations like these, add a pipeline trigger to run your pipeline upon the successful completion of the **triggering pipeline**.

> [!NOTE]
> Previously, you may have navigated to the classic editor for your YAML pipeline and configured **build completion triggers** in the UI. While that model still works, it is no longer recommended. The recommended approach is to specify **pipeline triggers** directly within the YAML file. Build completion triggers as defined in the classic editor have various drawbacks, which have now been addressed in pipeline triggers. For instance, there is no way to trigger a pipeline on the same branch as that of the triggering pipeline using build completion triggers.

## Configure pipeline resource triggers

To trigger a pipeline upon the completion of another pipeline, specify the triggering pipeline as a [pipeline resource](resources.md#resources-pipelines).

The following example has two pipelines - `app-ci` (the pipeline defined by the YAML snippet), and `security-lib-ci` (the triggering pipeline referenced by the pipeline resource). We want the `app-ci` pipeline to run automatically every time a new version of `security-lib-ci` is built.


```yaml
# this is being defined in app-ci pipeline
resources:
  pipelines:
  - pipeline: securitylib   # Name of the pipeline resource
    source: security-lib-ci # Name of the pipeline referenced by the pipeline resource
    project: FabrikamProject # Required only if the source pipeline is in another project
    trigger: true # Run app-ci pipeline when any run of security-lib-ci completes
```

* `pipeline: securitylib` specifies the name of the pipeline resource, and is used when referring to the pipeline resource from other parts of the pipeline, such as pipeline resource variables.
* `source: security-lib-ci` specifies the name of the pipeline referenced by this pipeline resource. You can retrieve a pipeline's name from the Azure DevOps portal in several places, such as the [Pipelines landing page](../get-started/multi-stage-pipelines-experience.md#pipelines-landing-page). By default, pipelines are named after the repository that contains the pipeline. To update a pipeline's name, see [Pipeline settings](../get-started/multi-stage-pipelines-experience.md#pipeline-settings).

* `project: FabrikamProject` - If the triggering pipeline is in another Azure DevOps project, you must specify the project name. This property is optional if both the source pipeline and the triggered pipeline are in the same project.
* `trigger: true` - Use this syntax to trigger the pipeline when any version of the source pipeline completes. See the following sections in this article to learn how to filter which versions of the source pipeline completing will trigger a run. When filters are specified, the source pipeline run must match all of the filters to trigger a run.

If the triggering pipeline and the triggered pipeline use the same repository, then both the pipelines will run using the same commit when one triggers the other. This is helpful if your first pipeline builds the code, and the second pipeline tests it. However, if the two pipelines use different repositories, then the triggered pipeline will use the version of the code in the branch specified by the **Default branch for manual and scheduled builds** setting, as described in the following [Branch considerations for pipeline completion triggers](#branch-considerations) section.

## Branch filters

You can optionally specify the branches to include or exclude when configuring the trigger. If you specify branch filters, a new pipeline is triggered whenever a source pipeline run is successfully completed that matches the branch filters. In the following example, the `app-ci` pipeline runs if the `security-lib-ci` completes on any `releases/*` branch, except for `releases/old*`.

```yaml
# this is being defined in app-ci pipeline
resources:
  pipelines:
  - pipeline: securitylib
    source: security-lib-ci
    trigger: 
      branches:
        include: 
        - releases/*
        exclude:
        - releases/old*
```

> [!NOTE]
> If your branch filters aren't working, try using the prefix `refs/heads/`. For example, use `refs/heads/releases/old*`instead of `releases/old*`.

## Tag filters

:::moniker range="<azure-devops"

> [!NOTE]
> [Tag filter support for pipeline resources](/azure/devops/server/release-notes/azuredevops2020u1#tag-filter-support-for-pipeline-resources) requires [Azure DevOps Server 2020 Update 1](/azure/devops/server/release-notes/azuredevops2020u1) or greater.

:::moniker-end

The `tags` property of the `trigger` filters which pipeline completion events can trigger your pipeline. If the triggering pipeline matches all of the tags in the `tags` list, the pipeline runs.

```yml
resources:
  pipelines:
  - pipeline: MyCIAlias
    source: Farbrikam-CI
    trigger:
      tags:        # This filter is used for triggering the pipeline run
      - Production # Tags are AND'ed
      - Signed
```

> [!NOTE]
> The pipeline resource also has a `tags` property. The `tags` property of the pipeline resource is used to determine which pipeline run to retrieve artifacts from, when the pipeline is triggered manually or by a scheduled trigger. For more information, see [Resources: pipelines](resources.md#resources-pipelines) and [Evaluation of artifact version](resources.md#evaluation-of-artifact-version).

## Stage filters

:::moniker range="<azure-devops"

> [!NOTE]
> [Stages filters for pipeline resource triggers](/azure/devops/server/release-notes/azuredevops2020u1#stages-filters-for-pipeline-resource-triggers) requires [Azure DevOps Server 2020 Update 1](/azure/devops/server/release-notes/azuredevops2020u1) or greater.

:::moniker-end

You can trigger your pipeline when one or more stages of the triggering pipeline complete by using the `stages` filter. If you provide multiple stages, the triggered pipeline runs when all of the listed stages complete.

```yml
resources:
  pipelines:
  - pipeline: MyCIAlias  
    source: Farbrikam-CI  
    trigger:    
      stages:         # This stage filter is used when evaluating conditions for 
      - PreProduction # triggering your pipeine. On successful completion of all the stages
      - Production    # provided, your pipeline will be triggered. 
```

## Branch considerations

Pipeline completion triggers use the **Default branch for manual and scheduled builds** setting to determine which branch's version of a YAML pipeline's branch filters to evaluate when determining whether to run a pipeline as the result of another pipeline completing. By default this setting points to the default branch of the repository.

When a pipeline completes, the Azure DevOps runtime evaluates the pipeline resource trigger branch filters of any pipelines with pipeline completion triggers that reference the completed pipeline. A pipeline can have multiple versions in different branches, so the runtime evaluates the branch filters in the pipeline version in the branch specified by the **Default branch for manual and scheduled builds** setting. If there is a match, the pipeline runs, but the version of the pipeline that runs may be in a different branch depending on whether the triggered pipeline is in the same repository as the completed pipeline.

- If the two pipelines are in different repositories, the triggered pipeline version in the branch specified by **Default branch for manual and scheduled builds** is run.
- If the two pipelines are in the same repository, the triggered pipeline version in the same branch as the triggering pipeline is run, even if that branch is different than the **Default branch for manual and scheduled builds**, and even if that version does not have branch filters that match the completed pipeline's branch. This is because the branch filters from the **Default branch for manual and scheduled builds** branch are used to determine if the pipeline should run, and not the branch filters in the version that is in the completed pipeline branch. 

If your pipeline completion triggers don't seem to be firing, check the value of the **Default branch for manual and scheduled builds** setting for the triggered pipeline. The branch filters in that branch's version of the pipeline are used to determine whether the pipeline completion trigger initiates a run of the pipeline. By default, **Default branch for manual and scheduled builds** is set to the default branch of the repository, but you can change it after the pipeline is created.

A typical scenario in which the pipeline completion trigger doesn't fire is when a new branch is created, the pipeline completion trigger branch filters are modified to include this new branch, but when the first pipeline completes on a branch that matches the new branch filters, the second pipeline doesn't trigger. This happens if the branch filters in the pipeline version in the **Default branch for manual and scheduled builds** branch don't match the new branch. To resolve this trigger issue you have the following two options.

- Update the branch filters in the pipeline in the **Default branch for manual and scheduled builds** branch so that they match the new branch.
- Update the **Default branch for manual and scheduled builds** setting to a branch that has a version of the pipeline with the branch filters that match the new branch.

### Default branch for manual and scheduled builds setting

To view and update the **Default branch for manual and scheduled builds** setting:

1. [Navigate](../get-started/multi-stage-pipelines-experience.md#navigating-pipelines) to the [pipeline details](../get-started/multi-stage-pipelines-experience.md#view-pipeline-details) for your pipeline, and choose **Edit**.

    :::image type="content" source="media/pipeline-triggers/pipeline-edit.png" alt-text="Edit pipeline."::: 

2. Choose **...** and select **Triggers**.

    :::image type="content" source="media/pipeline-triggers/edit-triggers.png" alt-text="Edit triggers."::: 

3. Select **YAML**, **Get sources**, and view the **Default branch for manual and scheduled builds** setting. If you change it, choose **Save** or **Save & queue** to save the change.

    :::image type="content" source="media/pipeline-triggers/default-branch-setting.png" alt-text="Default branch for manual and scheduled builds setting."::: 

## Combining trigger types

When you specify both CI triggers and pipeline triggers in your pipeline, you can expect new runs to be started every time a push is made that matches the filters the CI trigger, and a run of the source pipeline is completed that matches the filters of the pipeline completion trigger. 

For example, consider two pipelines named `A` and `B` that are in the same repository, both have CI triggers, and `B` has a pipeline completion trigger configured for the completion of pipeline `A`. If you make a push to the repository:

- A new run of `A` is started, based on its CI trigger.
- At the same time, a new run of `B` is started, based on its CI trigger. This run consumes the artifacts from a previous run of pipeline `A`.
- When `A` completes, it triggers another run of `B`, based on the pipeline completion trigger in `B`.

To prevent triggering two runs of `B` in this example, you must remove its CI trigger or pipeline trigger.


