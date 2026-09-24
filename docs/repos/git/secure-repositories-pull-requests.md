---
title: Secure repositories and pull requests
titleSuffix: Azure Repos
description: Secure Azure Repos with repository permissions, branch permissions, branch policies, and GitHub Advanced Security status checks.
ms.service: azure-devops-repos
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 07/10/2026
ms.subservice: azure-devops-repos-git
ai-usage: ai-assisted
ms.custom: security-focused, branch-policies, code-review, devx-track-azurecli, copilot-scenario-highlight
monikerRange: '<= azure-devops'
---

# Secure repositories and pull requests

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Secure Azure Repos by combining access control, pull request policies, and status checks on your most important branches. This article shows you how to restrict direct changes, require the right reviewers, enforce work item and build requirements, and add GitHub Advanced Security checks before pull requests merge.

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Threats and controls

Use the following controls together to reduce the most common pull request risks.

| Threat | Risk | Recommended control |
|--------|------|---------------------|
| Direct pushes to protected branches | Changes bypass review and validation | [Branch permissions](branch-permissions.md) plus [branch policies](branch-policies.md) |
| Single-person approval | Review quality depends on one person | **Require a minimum number of reviewers** |
| Missing expert review on sensitive files | Security-critical changes merge without the right reviewers | **Automatically included reviewers** |
| Untracked code changes | Reduced auditability and change traceability | **Check for linked work items** |
| Broken or untested code | Regressions reach shared branches | **Build validation** |
| Unresolved review feedback | Known issues merge without response | **Check for comment resolution** |
| New high or critical vulnerabilities | Security regressions merge through pull requests | GitHub Advanced Security status checks |

## Prerequisites

[!INCLUDE [azure-repos-prerequisites](includes/azure-repos-prerequisites.md)]

Before you configure any branch policy:

- Make sure the target repository and branch already exist.
- Decide which groups can manage permissions, bypass policies, and approve pull requests.
- If you plan to require build validation or GitHub Advanced Security status checks, create the build pipeline first.

## Security baseline for most teams

For a typical production branch such as `main`, start with this baseline:

| Control area | Recommended baseline | Why |
|--------------|----------------------|-----|
| Repository access | Limit write access to contributors who actively work in the repo | Reduces the number of identities that can change source code or repository settings. |
| Branch permissions | Restrict **Bypass policies when completing pull requests** and **Bypass policies when pushing** to a small admin group | Prevents users from skipping required reviews, validation, and other branch protections. |
| Review policy | Require at least two reviewers for `main` | Improves review quality and reduces the risk of a single mistaken or biased approval. |
| Sensitive files | Automatically include reviewers for security, infrastructure, or compliance-sensitive paths | Ensures changes to high-risk areas get review from the right people or teams. |
| Traceability | Turn on **Check for linked work items** | Preserves an audit trail between code changes and the work that justified them. |
| Validation | Add **Build validation** for the PR branch | Catches build and test failures before code merges into a protected branch. |
| Review completion | Turn on **Check for comment resolution** | Helps make sure reviewers' concerns are addressed before completion. |
| Vulnerability gates | Add `AdvancedSecurity/NewHighAndCritical` after Advanced Security scanning is configured | Blocks pull requests that introduce new high or critical security findings. |

## Step 1: Restrict repository and branch access

Start with permissions. Policies are most effective when only a small set of users can bypass them.

### Review repository permissions

Use repository permissions to control who can read, contribute, administer settings, or contribute to pull requests. For the detailed permission reference, see [Set Git repository permissions](set-git-repository-permissions.md).

Use the following pattern:

- Grant **Contributors** the permissions they need to work in feature branches.
- Reserve repository administration for a small admin group.
- Avoid broad grants of policy-bypass permissions.

### Limit branch permissions

For protected branches, review and limit these permissions carefully:

- **Bypass policies when completing pull requests**
- **Bypass policies when pushing**
- **Force push (rewrite history, delete branches and tags)**
- **Edit policies**
- **Manage permissions**

Use [Set branch permissions](branch-permissions.md) to configure these settings.

Recommended pattern for `main`:

| Group | Recommended branch permissions |
|-------|-------------------------------|
| Contributors | Allow regular contribution through pull requests, but don't grant bypass permissions |
| Project Administrators | Allow **Edit policies** and **Manage permissions** |
| Emergency release owners | Grant bypass permissions only if your incident process requires them |

> [!IMPORTANT]
> Keep **Bypass policies when completing pull requests** and **Bypass policies when pushing** limited to a small set of trusted administrators. These permissions defeat the protections created by required reviewers, validation, and status checks.

## Step 2: Require strong pull request review

### Require a minimum number of reviewers

Use **Require a minimum number of reviewers** on important branches such as `main` and release branches.

Recommended settings:

- Minimum reviewers: `2` for high-value shared branches
- Require at least one approval on the last iteration
- **Allow requestors to approve their own changes**: `Off`
- **Prohibit the most recent pusher from approving their own changes**: `On` when you want stronger separation of duties

### Configure the minimum reviewer policy

#### [Browser](#tab/browser)

1. Go to **Project settings** > **Repositories**.
1. Select your repository, and then select the protected branch.
1. Under **Policies**, turn on **Require a minimum number of reviewers**.
1. Set the reviewer options for the branch.

#### [Azure DevOps CLI](#tab/azure-devops-cli)

```azurecli
az repos policy approver-count create \
  --blocking true \
  --branch main \
  --enabled true \
  --minimum-approver-count 2 \
  --creator-vote-counts false \
  --reset-on-source-push true \
  --repository-id <repository-id>
```

---

Verify the result:

- The branch policy list shows the reviewer policy as enabled.
- Pull requests into the branch can't complete until the required number of approvals is present.

For policy details, see [Branch policies and settings](branch-policies.md).

### Automatically include reviewers for sensitive files

Use **Automatically included reviewers** when certain files or folders require approval from a specific person or team.

Good candidates include:

- deployment and infrastructure code
- authentication and authorization code
- compliance-sensitive folders
- shared pipeline templates

#### Configure the automatically included reviewers policy

#### [Browser](#tab/browser)

1. Go to **Project settings** > **Repositories**.
1. Open the target branch under **Branch policies**.
1. Add an **Automatically included reviewers** policy.
1. Add the required people or groups.
1. Choose whether the policy is **Required** or **Optional**.
1. Add path filters for the files or folders that require their review.
1. Disalow requestors to approve their own changes.

#### [Azure DevOps CLI](#tab/azure-devops-cli)

```azurecli
az repos policy required-reviewer create \
  --blocking true \
  --branch main \
  --enabled true \
  --message "Security review required for protected paths." \
  --path-filter "/.azure/*;/infra/*;/pipelines/*" \
  --repository-id <repository-id> \
  --required-reviewer-ids <reviewer-email-or-emails>
```

---

Verify the result:

- A pull request that changes matching files automatically adds the configured reviewers.
- The pull request can't complete until the required reviewer policy is satisfied.

For more information, see [Automatically include code reviewers](branch-policies.md#include-code-reviewers).

## Step 3: Enforce traceability and validation

### Check for linked work items

Turn on **Check for linked work items** when your team needs change traceability between pull requests and work tracking.

#### Configure the linked work items policy

#### [Browser](#tab/browser)

1. Go to **Project settings** > **Repositories**.
1. Open the target branch under **Branch policies**.
1. Turn on **Check for linked work items**.
1. Choose **Required** if pull requests must have linked work items before completion.

#### [Azure DevOps CLI](#tab/azure-devops-cli)

```azurecli
az repos policy work-item-linking create \
  --blocking true \
  --branch main \
  --enabled true \
  --repository-id <repository-id>
```

---

Verify the result: Pull requests without linked work items show the policy as not satisfied.

For more information, see [Check for linked work items](branch-policies.md#check-linked-wi).

### Build validation

Use **Build validation** to require a successful pipeline run for pull requests before merge.

> [!IMPORTANT]
> Before you configure build validation, create the build pipeline that should validate the pull request.

Recommended settings for protected branches:

- Trigger: Automatic
- **Policy requirement**: `Required`
- Build expiration: Choose a value that matches how often the protected branch changes

#### Configure the build validation policy

#### [Browser](#tab/browser)

1. Open the target branch under **Branch policies**.
1. Add a **Build validation** policy.
1. Select the build pipeline.
1. Choose whether the policy is required.
1. Save the policy.

#### [Azure DevOps CLI](#tab/azure-devops-cli)

```azurecli
az repos policy build create \
  --blocking true \
  --branch main \
  --build-definition-id <pipeline-id> \
  --display-name "PR validation" \
  --enabled true \
  --manual-queue-only false \
  --queue-on-source-update-only true \
  --repository-id <repository-id> \
  --valid-duration 0
```

---

Verify the result:

- Opening or updating a pull request queues the configured validation build.
- The pull request can't complete until the required build succeeds.

For more information, see [Build validation](branch-policies.md#build-validation).

### Check for comment resolution

Use **Check for comment resolution** to make sure review threads are resolved before the pull request completes.

#### Configure the comment resolution policy

#### [Browser](#tab/browser)

1. Open the target branch under **Branch policies**.
1. Turn on **Check for comment resolution**.
1. Choose **Required** if unresolved comments should block completion.

#### [Azure DevOps CLI](#tab/azure-devops-cli)

```azurecli
az repos policy comment-required create \
  --blocking true \
  --branch main \
  --enabled true \
  --repository-id <repository-id>
```

---

Verify the result: Pull requests with unresolved comments stay blocked until reviewers or authors resolve the threads.

For more information, see [Check for comment resolution](branch-policies.md#check-comment-resolution).

### Limit merge types

Use **Limit merge types** as a repository history-governance setting. This policy helps standardize how pull request commits appear after merge, but it isn't a direct security control.

Choose a merge strategy based on how your team reviews, traces, and audits history.

Example uses:

- Require squash merges for short-lived feature work.
- Disallow rebase or squash on branches where your audit process expects merge commits.

Audit and traceability considerations:

- Squash creates a cleaner target-branch history, but it collapses multiple source commits into one commit at merge time.
- If your audit model depends on preserving the exact commit sequence from a feature branch, prefer merge-commit strategies over squash.
- Keep your policy consistent with how developers inspect and debug history in pull requests and in the target branch.

Azure DevOps CLI example:

```azurecli
az repos policy merge-strategy create \
  --blocking true \
  --branch main \
  --enabled true \
  --repository-id <repository-id> \
  --allow-no-fast-forward true \
  --allow-rebase false \
  --allow-rebase-merge false \
  --allow-squash false
```

For more information, see [Limit merge types](branch-policies.md#limit-merge-types).

## Step 4: Add GitHub Advanced Security status checks

GitHub Advanced Security status checks help prevent pull requests from merging when new critical or high severity vulnerabilities are introduced.

> [!IMPORTANT]
> GitHub Advanced Security for Azure DevOps is available only for Azure DevOps Services and only for code Git repositories.

Before you add the status check policy:

1. Enable GitHub Advanced Security on the repository.
1. Configure the required Advanced Security pipeline tasks.
1. Add a **Build validation** policy for the pull request branch.
1. Turn on `Wait for Processing: true` for the documented Advanced Security tasks.
1. Run the pipeline successfully at least once so the status check appears in the **Status to check** list.

Start with `AdvancedSecurity/NewHighAndCritical` if the repository already has unresolved alerts. After you reduce the backlog, consider moving to `AdvancedSecurity/AllHighAndCritical`.

Browser path:

1. Open the target branch under **Branch policies**.
1. Under **Status checks**, select **+**.
1. Set **Status to check** to `AdvancedSecurity/NewHighAndCritical`.
1. Leave **Advanced Options** at their default values.
1. Save the policy.

Advanced Security status checks are configured from **Status checks** in the browser after you enable Advanced Security scanning and build validation for the repository. For the required setup, see [Set up pull request status checks](../security/configure-github-advanced-security-features.md#set-up-pull-request-status-checks).

Verify the result:

- Pull requests with new high or critical findings show the status check as failed.
- The branch policy blocks completion until the findings are resolved or the policy is made optional.

For setup details, see:

- [Set up pull request status checks](../security/configure-github-advanced-security-features.md#set-up-pull-request-status-checks)
- [Available pull request status checks](available-pr-status-checks.md)

## Example rollout plans

### Lower-sensitivity repository baseline

If the repository has lower sensitivity and you want a manageable starting point:

1. Restrict branch bypass permissions on `main`.
1. Require at least one or two reviewers.
1. Turn on linked work items.
1. Add build validation.
1. Turn on comment resolution.

### High-sensitivity repository

If the repository contains deployment, identity, or compliance-critical assets:

1. Restrict policy-bypass permissions to administrators.
1. Require two reviewers on `main`.
1. Add automatically included reviewers for protected paths.
1. Require linked work items.
1. Add build validation.
1. Add GitHub Advanced Security status checks if you're using Azure DevOps Services.

<a id="use-ai-assistance"></a>

## Optional: Use AI assistance to review branch policy configuration

AI assistance is optional. Your branch permissions, policies, and status checks enforce repository protections whether or not you use AI.

You can use these prompts to review policy configuration, identify gaps, and get baseline recommendations faster. If you configure Azure DevOps MCP Server, the assistant can use your Azure DevOps context to improve answers. For setup guidance, see [Enable AI assistance with Azure DevOps MCP Server](../../mcp-server/mcp-server-overview.md).

Use prompts like the following to get started:

| Goal | Example prompt |
|------|----------------|
| Review branch protections | `Summarize the branch policies on main and explain which ones are required.` |
| Identify bypass risk | `Find users or groups that can bypass branch policies on the main branch.` |
| Check review coverage | `List the reviewer and comment-resolution policies configured for this repository.` |
| Verify work tracking | `Check whether pull requests into main require linked work items.` |
| Inspect validation gates | `Show the build validation policy for main and explain what pipeline it uses.` |
| Investigate security status checks | `List the status checks configured for main and tell me whether GitHub Advanced Security is one of them.` |
| Plan a safer baseline | `Recommend a secure branch policy baseline for this repository based on its current settings.` |

Always validate generated commands and recommendations against your repository permissions, branch settings, and the current Azure DevOps documentation before you apply them.

## Troubleshooting tips

| Problem | Likely cause | Recommended action |
|---------|--------------|--------------------|
| A branch policy option doesn't appear | You don't have **Edit policies** permission or the branch wasn't selected | Confirm branch access and policy permissions |
| Pull requests can still merge without meeting policy | A user has bypass permissions | Review **Bypass policies when completing pull requests** and **Bypass policies when pushing** |
| Required reviewers aren't added | The reviewer policy path filter doesn't match the changed files | Recheck the path filters and reviewer identities |
| The Advanced Security status check isn't available | The repository hasn't completed a successful scan run with the required tasks | Verify build validation, pipeline tasks, and `Wait for Processing` settings |
| A linked work item policy doesn't block | The policy is optional instead of required | Reopen the branch policy and confirm the requirement level |

## Related content

- [Set Git repository permissions](set-git-repository-permissions.md)
- [Set branch permissions](branch-permissions.md)
- [Branch policies and settings](branch-policies.md)
- [Available pull request status checks](available-pr-status-checks.md)
- [Configure GitHub Advanced Security](../security/configure-github-advanced-security-features.md)
- [About pull requests](about-pull-requests.md)