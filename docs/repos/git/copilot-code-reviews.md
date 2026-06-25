---
title: Get started with Copilot code review for pull requests
titleSuffix: Azure Repos
description: Learn how to enable and configure GitHub Copilot code review for pull requests in Azure Repos at the organization, repository, and user levels.
ms.service: azure-devops-repos
ms.subservice: azure-devops-repos-git
ms.topic: how-to
ms.date: 06/02/2026
ms.author: chcomley
author: chcomley
---

# Get started with Copilot code review for pull requests

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

> [!IMPORTANT]
> This feature is in limited public **preview** and requires sign-up. To request access for your organization, [sign up for the public preview](https://aka.ms/AzureReposCopilotCodeReviewPreview).
>
> Functionality might change or be removed without notice. Preview features have no Service Level Agreement (SLA) and limited support.

Use GitHub Copilot to review pull requests in Azure Repos. Copilot acts as an automated reviewer that posts comments and suggestions on changed code, so you get feedback before a human reviewer signs off.

To use the feature, a Project Collection Administrator turns it on for the organization, a repository owner turns it on for each repository, and individual users opt in through Preview features (unless the administrator enables the preview for everyone).

## Prerequisites

| Category | Requirements |
|--|--|
| **Organization** | An [organization in Azure DevOps](https://go.microsoft.com/fwlink/?LinkId=307137). |
| **Repository** | A Git repository in Azure Repos. TFVC isn't supported. |
| **Organization permissions** | **Project Collection Administrator** to enable the feature at the organization level. |
| **Repository permissions** | Repository owner or administrator to enable the feature for a repository. |
| **Billing** | An Azure subscription linked to your Azure DevOps organization. Copilot code review usage is billed through Azure Cost Management. For details, see [Billing](#billing). |

## Enable Copilot code review at the organization level

A Project Collection Administrator must enable Copilot code review for the organization before repository owners can turn it on for individual repositories.

1. Sign in to your Azure DevOps organization (`https://dev.azure.com/{yourorganization}`).
1. Select **Organization settings** > **Repos** > **Repositories**.
1. Under **GitHub Copilot code review**, toggle **Allow repositories in this organization to use Copilot code review** to **On**.

   :::image type="content" source="media/copilot-code-reviews/organization-level-preview-feature.png" alt-text="Organization settings page with the Allow repositories to use Copilot code review toggle set to On.":::

## Enable Copilot code review at the repository level

After organization-level access is enabled, a repository owner turns on Copilot code review for each repository that should use it.

1. Select **Project settings** > **Repos** > **Repositories**.
1. Select the repository you want to enable.
1. On the **Settings** tab, toggle **Enable Copilot code review for pull requests in this repository** to **On**.

   :::image type="content" source="media/copilot-code-reviews/repository-level-preview-feature.png" alt-text="Repository settings page with the Enable Copilot code review for pull requests toggle set to On.":::

## Enable Copilot code review for individual users

After you enable the feature at the organization and repository levels, individual users can opt in through **Preview features**.

1. Select your user avatar in the top right, and then select **Preview features**.
1. Set the scope to **for me**.
1. Locate **Copilot Code Review for Pull Requests** and toggle it to **On**.

   :::image type="content" source="media/copilot-code-reviews/individual-level-preview-feature.png" alt-text="Preview features panel with Copilot Code Review for Pull Requests set to On.":::

> [!TIP]
> A Project Collection Administrator can set the scope to **for this organization** to enable the preview for all users at once.

To verify the feature is enabled, open any pull request in the repository. **GitHub Copilot** should now appear as an available reviewer in the **Reviewers** list.

## Use Copilot code review

With the feature enabled at all three scopes, you can ask Copilot to review a pull request. The following sections describe what to expect.

### Request a review

By default, **GitHub Copilot** reviews a pull request only when you ask for one:

1. Open a pull request.
1. In the **Reviewers** section, select **Request** next to **GitHub Copilot**.
1. Wait for the review to complete. The review might take a few moments, depending on the size of the repository and the number of changes in the pull request. When the review finishes, the status changes to **Review completed**.

If Copilot identifies potential issues, it adds comments and suggestions directly to the pull request for you to examine and address.

### Read Copilot's comments

- Copilot posts its feedback as a regular reviewer named **GitHub Copilot** on the pull request.
- Each comment appears on the line of code it applies to and, where possible, includes a suggested change that you can apply with one click.
- Copilot always leaves a **Comment** review. It never approves the pull request or requests changes, so its review doesn't satisfy required-reviewer policies and doesn't block merging.
- Copilot's comments behave like comments from a human reviewer. You can reply to them, react to them, resolve them, or hide them. Copilot doesn't read replies and doesn't follow up.

### Re-review after new commits

Copilot doesn't automatically re-review a pull request when you push new commits. To get a fresh review after a commit, select **Request** again next to **GitHub Copilot** in the **Reviewers** list.

<!-- Coming soon:
### Customize Copilot's reviews

 Azure Repos will honor `.github/copilot-instructions.md` and path-scoped `.github/instructions/**/*.instructions.md` files for tailoring Copilot's review behavior. 

For background on how custom instructions work in GitHub, see [Adding repository custom instructions for GitHub Copilot](https://docs.github.com/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot). 
-->

## Requirements and limits

The following requirements and limits apply during the preview and can change.

Copilot reviews a pull request only when it meets these requirements:

| Requirement | Value |
|--|--|
| Pull request status | **Active** |
| Pull request merge status | No merge conflicts (**Merge Succeeded**) |
| Repository size | 10 GB or less |
| Pull request changed files | 100 files or fewer |

These concurrency and rate limits also apply:

| Limit | Value |
|--|--|
| Duplicate review on the same pull request version | 1 completed review per merge commit |
| Concurrent reviews per pull request | 1 |
| Concurrent reviews per organization | 5 |
| Concurrent reviews per user | 2 |

## Billing

Each completed code review consumes tokens, including input tokens sent to the model, output tokens generated by the model, and cached tokens that reuse existing context. Tokens used for each review are converted into a standard billing unit called a *GitHub AI credit*, where 1 credit equals $0.01 USD.

Charges go to the Azure subscription linked to your Azure DevOps organization and appear as a separate meter in Azure Cost Management. The cost of each review varies based on factors like pull request size and the number of lines changed. To estimate expected costs in your environment, enable the feature for one or two repositories first and monitor daily usage.

To monitor your daily charges:

1. In the [Azure portal](https://portal.azure.com), go to your subscription.
1. Select **Cost Management** > **Cost analysis**.
1. Filter by product to view the organization's daily costs.

   :::image type="content" source="media/copilot-code-reviews/billing-cost-analysis.png" alt-text="Screenshot of Azure Cost Management Cost analysis filtered by product to show Copilot code review charges."::: 

## Frequently asked questions (FAQs)

### Where can I find the list prices that I'm charged for tokens?

See [Models and pricing](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing#anthropic) in the GitHub Copilot documentation.

### What factors influence the number of tokens consumed by a code review?

Token consumption depends on factors such as the size of the repository, the size of the change, and the complexity of the code being reviewed.

### Do credits I purchased with Copilot subscriptions count toward code review usage in Azure DevOps? Can I use AI credits from a GitHub Copilot plan?

No, usage in Azure DevOps doesn't draw down AI credits from GitHub Copilot plans.

## Turn off Copilot code review

To stop using Copilot code review, set the toggle to **Off** at the scope you want to disable:

- **For one user**: Turn off the **Preview features** toggle in your user settings.
- **For one repository**: Turn off the repository toggle in **Project settings** > **Repos** > **Repositories**.
- **For the entire organization**: Turn off the organization toggle in **Organization settings** > **Repos** > **Repositories**. This action disables the feature for all repositories.

## Share feedback

To report issues or share feedback about this preview, visit the [Azure DevOps Developer Community](https://developercommunity.visualstudio.com/AzureDevOps).

## Next step

> [!div class="nextstepaction"]
> [Review pull requests](review-pull-requests.md)

## Related content

- [About GitHub Copilot code review](https://docs.github.com/copilot/using-github-copilot/code-review/using-copilot-code-review)
- [About pull requests](about-pull-requests.md)
- [Repository settings and policies](repository-settings.md)
