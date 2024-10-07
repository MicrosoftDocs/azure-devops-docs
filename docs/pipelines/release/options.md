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

Specifies the maximum time, in minutes, that a deployment is allowed to run on an agent before being canceled by the server. The duration is measured after pre-approval is completed and before post-approval is requested. A value of zero will cause the timeout of the parent pipeline to be used.

#### Job cancel timeout

Specifies the maximum wait time for a deployment job to respond to a cancellation request before being terminated by the server. A value of zero will cause the timeout of the parent pipeline to be used.

#### Allow scripts to access the OAuth token

Enables scripts and other processes to access the OAuth token through the `System.AccessToken` variable. See the [example script for accessing the REST API](../scripts/powershell?view=azure-devops&tabs=classic) for more details.

:::image type="content" source="media/classic-pipeline-agent-job-configuration.png" alt-text="A screenshot displaying how to configure the agent job in a Classic pipeline." lightbox="media/classic-pipeline-agent-job-configuration.png":::

## Create a work item on failure

If the build pipeline fails, you can automatically create a work item to track getting the problem fixed. You can specify the work item type.

You can also select if you want to assign the work item to the requestor. For example, if this is a CI build, and a team member checks in some code that breaks the build, then the work item is assigned to that person.

**Additional Fields:** You can set the value of work item fields. For example:

| Field | Value |
|---|---|
| ```System.Title``` | ```Build $(Build.BuildNumber) failed``` |
| ```System.Reason``` |  ```Build failure``` |

**Q:** What other work item fields can I set? **A:**  [Work item field index](../../boards/work-items/guidance/work-item-field.md)

## Build job authorization scope

Specify the authorization scope for a build job. Select:

* **Project Collection** if the build needs access to multiple projects.
* **Current Project** if you want to restrict this build to have access only the resources in the current project.

For more information, see [Understand job access tokens](../process/access-tokens.md).

## Build (run) number

This documentation has moved to [Build (run) number](../process/run-number.md).
