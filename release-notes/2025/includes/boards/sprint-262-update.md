---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 09/25/2025
ms.topic: include
---

### Azure Boards integration with GitHub Copilot (private preview)

We’re excited to announce a new capability in our Azure Boards and GitHub integration: the ability to connect Azure Boards work items with the GitHub Copilot coding agent (private preview). This feature allows Azure DevOps customers to create a work item, provide instructions in the description, and send it directly to Copilot. The coding agent can then take on a variety of tasks such as fixing bugs, implementing incremental features, improving test coverage, updating documentation, or addressing technical debt.

To use the feature, simply open a work item and select the option to “Create a pull request with GitHub Copilot.” Copilot receives the work item content, including large text fields and recent comments, then generates a branch and draft pull request linked back to the work item for full traceability. Once the work is complete, the pull request status is updated on the work item and a comment is added to notify you that it is ready for review.

> [!div class="mx-imgBorder"]
> ![Gif to demo full boards Copilot integration.](../../media/262-boards-01.gif "Gif to demo full boards Copilot integration.")

This feature is currently available in **private preview**. Organizations can request access to participate, which helps us collect feedback and refine the experience before broader release. Details on how to sign up are available in [this blog post](https://devblogs.microsoft.com/devops/azure-boards-integration-with-github-copilot-private-preview/).

### Deprecating clone work item

Based on the overall low usage and the fact that Copy and Clone provide almost the same functionality, we have decided to remove the Clone Work Item feature from the product. You can continue using Copy Work Item, which also allows you to edit the work item before saving.