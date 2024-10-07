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

## Create a work item on failure

If the build pipeline fails, you can automatically create a work item to track getting the problem fixed. You can specify the work item type.

You can also select if you want to assign the work item to the requestor. For example, if this is a CI build, and a team member checks in some code that breaks the build, then the work item is assigned to that person.

**Additional Fields:** You can set the value of work item fields. For example:

| Field | Value |
|---|---|
| ```System.Title``` | ```Build $(Build.BuildNumber) failed``` |
| ```System.Reason``` |  ```Build failure``` |

**Q:** What other work item fields can I set? **A:**  [Work item field index](../../boards/work-items/guidance/work-item-field.md)


## Allow scripts to access the OAuth token

Select this check box in classic build pipelines if you want to enable your script to use the build pipeline OAuth token. This check box is located under the "additional settings" section after selecting the agent job in the pipeline.

For an example, see [Use a script to customize your build pipeline](../scripts/powershell.md).

## Build job authorization scope

Specify the authorization scope for a build job. Select:

* **Project Collection** if the build needs access to multiple projects.
* **Current Project** if you want to restrict this build to have access only the resources in the current project.

For more information, see [Understand job access tokens](../process/access-tokens.md).

## Build (run) number

This documentation has moved to [Build (run) number](../process/run-number.md).
