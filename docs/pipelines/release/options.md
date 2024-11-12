---
title: Classic pipelines configuration
description: Learn about the options available to configure your agent and the different build properties for your Classic pipeline.
ms.topic: reference
ms.assetid: 7C469647-117D-4867-B094-8BC811C0003E
ms.date: 10/07/2024
monikerRange: '<= azure-devops'
---

# Classic pipelines configuration

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Classic pipelines make it easier for developers to design their pipeline workflows using the user interface to add tasks and conditions tailored to their scenario. This article explains the available options to configure your agent job and explores the different build properties for your Classic pipeline.

## Agent job

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Pipelines**, select your pipeline definition, and then select **Edit**.

1. Select **Tasks**, and then select **Agent job**.

#### Default agent pool:

When you queue a build, it runs on an agent from your selected pool. You can choose a Microsoft-hosted pool or a self-hosted pool that you manage. Select the [pool](../agents/pools-queues.md) associated with the agents you want to run this pipeline on.

#### Parallelism

Defines how the job's tasks are executed in parallel:

- None: tasks are executed on a single agent.

- Multi-configuration: tasks are executed on multiple configurations, as specified in the multipliers. Configurations run in parallel, each using a single agent. The total number of agents depends on the number of configurations and can be limited by setting a maximum number of agents.

- Multi-agent: tasks are executed on multiple agents using the specified number of agents.

#### Timeout

Specifies the maximum time, in minutes, that a deployment is allowed to run on an agent before being canceled by the server. The duration is measured after preapproval is completed and before post-approval is requested. A value of zero will cause the timeout of the parent pipeline to be used.

#### Job cancel timeout

Specifies the maximum wait time for a deployment job to respond to a cancellation request before being terminated by the server. A value of zero will cause the timeout of the parent pipeline to be used.

#### Allow scripts to access the OAuth token

Enables scripts and other processes to access the OAuth token through the `System.AccessToken` variable. See the [example script for accessing the REST API](../scripts/powershell.md) for more details.

:::image type="content" source="media/classic-pipeline-agent-job-configuration.png" alt-text="A screenshot displaying how to configure the agent job in a Classic pipeline." lightbox="media/classic-pipeline-agent-job-configuration.png":::

## Build properties

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Pipelines**, select your pipeline definition, select **Edit**, and then select the **Options** tab.

#### Build number format

Define the format to give meaningful names to completed builds. Leave it blank to give builds a unique integer as name. See [Configure build run numbers](../process/run-number.md) for more details.

#### Create work items on failure

When enabled, if the pipeline fails, a work item is automatically created to track the issue. You can specify the type of work item and choose whether to assign it to the requestor.

- Additional Fields: set additional fields when creating the work item. 

For example, "System.Title" = "Build $(build.buildNumber) failed" formats the Work Item title, and "System.Reason" = "Build failure" sets the reason. See [Work item field index](../../boards/work-items/guidance/work-item-field.md) for other available fields.

#### Build job

Define build job authorization and timeout settings.

- Build job authorization scope: specify the authorization scope for a build job. Select:

    - Project Collection: if the pipeline needs access to multiple projects.
    - Current Project: if you want to restrict this pipeline to only access the resources in the current project.

See [Understand job access tokens](../process/access-tokens.md) for more details.

- Build job timeout in minutes: specifies the maximum time a build job is allowed to execute on an agent before being canceled by the server. An empty or zero value indicates no timeout limit.

- Build job cancel timeout in minutes: specifies the maximum wait time for a build job to respond to a cancellation request before being terminated by the server.

#### Demands

Specify the capabilities that the agent must have to run this pipeline. See [Agent capabilities and demands](../agents/agents.md#capabilities) for more details.

:::image type="content" source="media/classic-build-properties.png" alt-text="A screenshot displaying how to configure the different build properties in a Classic pipeline." lightbox="media/classic-build-properties.png":::

## Related content

- [Build multiple branches ](../build/ci-build-git.md)
- [View Classic pipeline history](history.md)
- [Publish and download pipeline artifacts](../artifacts/pipeline-artifacts.md)