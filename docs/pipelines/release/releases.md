---
title: Create Classic release pipelines
description: Learn how to create Classic release definitions in Azure Pipelines.
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

## Create a Classic release definition

A Classic release definition lets you configure stages, artifacts, and tasks for your deployment process. Follow these steps to create a Classic release pipeline for your project:

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Pipelines** > **Releases**.

1. If this your first time creating a Classic release pipeline, select **New pipeline**, otherwise select **New** > **New release pipeline**.

1. Select a template from the featured templates, or start with an **Empty job**.

1. A stage panel will open, update the **Stage name** if needed, or keep the default.

1. Under **Artifacts**, select **+ Add** to add your build artifact. A new panel opens, select your **Source type**, fill out the required fields, then select **Add** when you're done.

1. Under **Stages**, select the *job/task* link and add the tasks you need for your scenario to the **Agent job**.

1. Select **Save** when you're done, add a comment (optional), and then select **Ok**.

1. Now you're ready to create your first release. Select **Create release** and follow the prompts to start your release. 

    :::image type="content" source="media/create-classic-release-pipelines.png" alt-text="A screenshot displaying how to manually create a Classic release definition in Azure Pipelines.":::

> [!TIP]
> Release definitions can also be created using the [REST API](/rest/api/azure/devops/release).

## Related content

- [Create a multi-stage release pipeline](define-multistage-release-process.md).

- [Deploy pull request Artifacts](deploy-pull-request-builds.md).

- [Deploy to different stages from multiple branches](deploy-multiple-branches.md).
