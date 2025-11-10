---
title: Create Classic release pipelines
description: Learn how to create Classic release definitions in Azure pipelines.
ms.assetid: 2FF35C3B-FBF9-407F-8467-2D336973E63C
ms.topic: tutorial
ms.author: rabououn
author: RoopeshNair
ms.date: 11/09/2025
monikerRange: '<= azure-devops'
---

# Create Classic release pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines enables you to deploy applications efficiently and securely across multiple environments using Classic release pipelines. This guide walks you through the steps to create a Classic release definition in Azure Pipelines.

## Prerequisites

| **Product**        | **Requirements**  |
|--------------------|-------------------|
| **Azure DevOps**   | - An [Azure DevOps organization](../../organizations/accounts/create-organization.md).<br> - An [Azure DevOps project](../../organizations/projects/create-project.md).<br> - **Permissions:**<br>   &nbsp;&nbsp;&nbsp;&nbsp;- To grant access to all pipelines in the project, you must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md). |

## Create a release definition

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines** > **Releases**.

1. If this your first release pipeline, select **New pipeline**, otherwise select **New** > **New release pipeline**.

1. Select a template, or start with an **Empty job**.

1. Under **Artifacts**, select **Add an artifact**, select your **Source type**, and then fill out the required fields. Select **Add** when you're done.

1. Under **Stages**, select the job/task link, and add the tasks you need for your scenario to the **Agent job**.

1. Select **Save** when you're done, add a comment (optional), and then select **Ok**.

    :::image type="content" source="media/create-release-definition-manually.png" alt-text="A screenshot displaying how to manually create a release definition.":::

> [!NOTE]
> Release definitions can also be created using the [REST API](/rest/api/azure/devops/release).

## Related content

- [Classic release triggers](triggers.md).
- [Artifact sources](artifacts.md).
- [Deploy pull request Artifacts](deploy-pull-request-builds.md).
