---
title: Get started with Copilot code review for pull requests
titleSuffix: Azure Repos
description: Learn how to enable, configure, and use GitHub Copilot to review pull requests automatically in Azure Repos.
ms.service: azure-devops-repos
ms.topic: how-to
ai-usage: ai-assisted
ms.date: 07/29/2026
ms.author: chcomley
author: chcomley
---

# Get started with Copilot code review for pull requests

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

[!INCLUDE [copilot-code-review-preview-note](includes/copilot-code-review-preview-note.md)]

Use GitHub Copilot to review pull requests in Azure Repos. Copilot acts as an automated reviewer that posts comments and suggestions on changed code, so you get feedback before a human reviewer signs off.

To use the feature, a Project Collection Administrator turns it on for the organization, a Project Administrator manages project-level defaults, repository owners override settings for individual repositories, and individual users opt in through Preview features (unless the administrator enables the preview for everyone).

## Prerequisites

| Category | Requirements |
|--|--|
| **Organization** | An [organization in Azure DevOps](https://go.microsoft.com/fwlink/?LinkId=307137). |
| **Repository** | A Git repository in Azure Repos. TFVC isn't supported. |
| **Organization permissions** | **Project Collection Administrator** to enable the feature at the organization level. |
| **Project permissions** | **Project Administrator** to enable the feature at the project level. |
| **Repository permissions** | Repository owner or administrator to enable the feature for a repository. |
| **Billing** | An Azure subscription linked to your Azure DevOps organization. Copilot code review usage is billed through Azure Cost Management. For details, see [Billing](#billing). |

## Enable Copilot code review

### At the organization level

A Project Collection Administrator must enable Copilot code review for the organization before project owners can turn it on for individual projects and repositories.

If you select the organization-level **Enable all** option, Copilot code review is enabled for every project in the organization and every repository in those projects. You don't need to enable each project or repository individually.

1. Sign in to your Azure DevOps organization (`https://dev.azure.com/{yourorganization}`).
1. Select **Organization settings** > **Repos** > **Repositories**.
1. Under **GitHub Copilot code review**, toggle **Allow repositories in this organization to use Copilot code review** to **On**.

   :::image type="content" source="media/copilot-code-reviews/organization-level-preview-feature.png" alt-text="Screenshot of organization settings showing Copilot code review configuration." lightbox="media/copilot-code-reviews/organization-level-preview-feature.png":::

### At the project level

After organization-level access is enabled, a Project Administrator can optionally enable the feature at the project level. This option provides fine-grained control over which projects in the organization can use Copilot code review.

If you select the project-level **Enable all** option, Copilot code review is enabled for every repository in that project. You don't need to enable each repository individually.

1. Select **Project settings** > **Repos** > **Repositories**.
1. Under **GitHub Copilot code review**, toggle **Enable Copilot code review for this project** to **On**.

   This setting applies to all repositories in the project unless overridden at the repository level. You can still enable or disable the feature for individual repositories as needed.

### At the repository level

After you enable organization-level access (and optionally project-level access), a repository owner turns on Copilot code review for each repository that should use it.

1. Select **Project settings** > **Repos** > **Repositories**.
1. Select the repository you want to enable.
1. On the **Settings** tab, toggle **Enable Copilot code review for pull requests in this repository** to **On**.

   :::image type="content" source="media/copilot-code-reviews/repository-level-preview-feature.png" alt-text="Screenshot of repository settings with the Copilot code review enable toggle." lightbox="media/copilot-code-reviews/repository-level-preview-feature.png":::

To verify the feature is enabled, open any pull request in the repository. **GitHub Copilot** should now appear as an available reviewer in the **Reviewers** list.

## Configure Copilot code review

After you enable the feature at all three scopes, you can configure how Copilot reviews pull requests in your repositories.

### Set up automatic review policies

Copilot can automatically review new pull requests without requiring manual requests. You can configure this policy for all repositories in a project or for individual repositories.

Feature enablement and automatic review are separate settings. Enabling Copilot code review makes it available to a repository. An automatic review policy requests a Copilot review when a new pull request is created.

#### Configure automatic review for all repositories in a project

Use the project-level policy to automatically request Copilot reviews across every repository in the project. You don't need to configure the policy for each repository individually.

1. Select **Project settings** > **Repos** > **Repositories**.
1. Under **GitHub Copilot code review**, toggle **Automatically request Copilot code review on new pull requests for all repositories in this project** to **On**.

   This setting applies to all repositories in the project unless a repository-level policy overrides it.

#### Configure automatic review for one repository

Use repository-level policy when you need repository-specific behavior.

1. Select **Project settings** > **Repos** > **Repositories**.
1. Select the repository you want to configure.
1. On the **Settings** tab, under **GitHub Copilot code review**, toggle **Automatically request Copilot code review on new pull requests** to **On**.
1. (Optional) Configure review scope:
   - **Apply to all pull requests:** Copilot reviews every new pull request in the repository.
   - **Apply to specific branch policies:** Copilot reviews only pull requests that target specified branches (for example, main or develop).

   Policy precedence for automatic reviews:
   - The project-level automatic review policy applies to all repositories in the project.
   - Repository-level automatic review settings override the project-level default for that repository.

When you enable automatic review, Copilot starts reviewing new pull requests immediately upon creation. You can still request additional reviews manually by selecting **Request** next to **GitHub Copilot** in the pull request.

### Select an agent pool

Copilot code review runs review jobs by using an Azure Pipelines agent pool. By default, it uses the default Azure Pipelines pool in your organization.

Some organizations disable the default Azure Pipelines pool. In that configuration, Copilot code review can't run until you select a supported alternative pool.

If your organization has configured a [Managed DevOps Pool](../../managed-devops-pools/overview.md), you can select it to run Copilot code review instead of the default pool.

> [!NOTE]
> Self-hosted agent pools aren't supported for Copilot code review.

1. Select **Organization settings** > **Repos** > **Repositories**.
1. Under **GitHub Copilot code review**, select **Compute pool** from the dropdown menu.

   Your organization's compute pool configuration determines the available pools. If no pools are available, contact your organization administrator.

1. Select **Save**.

The selected pool processes all Copilot code reviews for repositories in your organization. You can change this setting at any time. To use different pools for different projects or repositories, configure pool assignments through [Managed DevOps Pools](../../managed-devops-pools/configure-pool-settings.md).

### Customize Copilot's review behavior

For guidance on using custom instructions and agent skills to tailor Copilot's code review feedback, see [Configure Copilot code review instructions](configure-copilot-code-review-instructions.md).

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

### Cancel a review in progress

If a code review takes longer than expected or you need to stop it, you can cancel the review run.

1. Open the pull request where Copilot is currently reviewing.
1. In the **Reviewers** section, next to **GitHub Copilot**, select the **Cancel** button (or select **More options** > **Cancel review**).
1. Confirm the cancellation when prompted.

The review run stops immediately, and no additional comments are added. The partial review results, including comments added before cancellation, remain on the pull request. You can request a new review at any time.

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

For answers to frequently asked questions about Copilot code review billing and costs, see [Troubleshoot Copilot code review](copilot-code-reviews-faq.md#billing-and-credits).

Charges go to the Azure subscription linked to your Azure DevOps organization and appear as a separate meter in Azure Cost Management. The cost of each review varies based on factors like pull request size and the number of lines changed. To estimate expected costs in your environment, enable the feature for one or two repositories first and monitor daily usage.

Copilot code review charges in Azure Cost Management now include **Azure DevOps project tags**, enabling per-project cost reporting. You can filter or group cost analysis by these project tags to attribute usage and spend to individual Azure DevOps projects.

To monitor your daily charges:

1. In the [Azure portal](https://portal.azure.com), go to your subscription.
1. Select **Cost Management** > **Cost analysis**.
1. Filter by product to view the organization's daily costs. To view costs for a specific project, add a filter or group by the Azure DevOps project tag.

   :::image type="content" source="media/copilot-code-reviews/billing-cost-analysis.png" alt-text="Screenshot of Cost Management showing Copilot review charges by product." lightbox="media/copilot-code-reviews/billing-cost-analysis.png":::

### Set a budget alert

Create an Azure budget that notifies you when spending reaches a threshold you set. Budgets only notify you. They don't stop reviews or change any resources. You need **Owner**, **Contributor**, or **Cost Management Contributor** access on the subscription linked to your Azure DevOps organization.

1. In the [Azure portal](https://portal.azure.com), open the subscription linked to your Azure DevOps organization.
1. Select **Cost Management** > **Budgets**, and then select **Add**.
1. Under **Filters**, add a filter for **Product** and select **GitHub Copilot for AzDO**.

   :::image type="content" source="media/copilot-code-reviews/azure-portal-cost-management-budget-addition.png" alt-text="Screenshot of budget filters with Product set to GitHub Copilot for Azure DevOps." lightbox="media/copilot-code-reviews/azure-portal-cost-management-budget-addition.png":::

1. If the subscription is linked to multiple Azure DevOps organizations, add a filter for **Tag** and select the organization name tags you want the alert to target. If project tags are present, you can also filter or group by project tag to create project-level budget alerts.
1. Enter a budget name, choose a reset period and expiration date, set the budget amount, and then select **Next**.
1. Add one or more alert thresholds as a percentage of the budget (for example, 75% and 90%), set **Type** to **Actual** or **Forecasted**, and enter the email addresses to notify.
1. Select **Create**.

   :::image type="content" source="media/copilot-code-reviews/create-azure-budget.png" alt-text="Screenshot of the Cost Management Budgets page with the Add button selected." lightbox="media/copilot-code-reviews/create-azure-budget.png":::

When spending reaches a threshold, Azure sends an email within an hour of the next evaluation. To review triggered alerts, select **Cost Management** > **Cost alerts**. To keep alert emails out of your junk folder, add `azure-noreply@microsoft.com` to your approved senders. For more information, see [Create and manage budgets](/azure/cost-management-billing/costs/tutorial-acm-create-budgets?tabs=psbudget).

## Turn off Copilot code review

To stop using Copilot code review, set the toggle to **Off** at the scope you want to disable:

- **For one user**: Turn off the **Preview features** toggle in your user settings.
- **For one repository**: Turn off the repository toggle in **Project settings** > **Repos** > **Repositories**.
- **For the entire organization**: Turn off the organization toggle in **Organization settings** > **Repos** > **Repositories**. This action disables the feature for all repositories.

## Share feedback

To report issues or share feedback about this preview, visit the [Azure DevOps Developer Community](https://developercommunity.visualstudio.com/AzureDevOps).

## Troubleshoot Copilot code review

For answers to common questions about billing, data handling, compliance, and troubleshooting issues with custom instructions, see [Troubleshoot Copilot code review](copilot-code-reviews-faq.md).

## Next step

> [!div class="nextstepaction"]
> [Review pull requests](review-pull-requests.md)

## Related content

- [Troubleshoot Copilot code review](copilot-code-reviews-faq.md)
- [Configure Copilot code review instructions](configure-copilot-code-review-instructions.md)
- [About GitHub Copilot code review](https://docs.github.com/copilot/using-github-copilot/code-review/using-copilot-code-review)
- [About pull requests](about-pull-requests.md)
- [Repository settings and policies](repository-settings.md)
