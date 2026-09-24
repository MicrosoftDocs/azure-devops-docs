---
title: Available pull request status checks
titleSuffix: Azure Repos
description: Reference of built-in Azure DevOps pull request status checks, including GitHub Advanced Security and Azure Pipelines code coverage, with genre/name identifiers.
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 07/06/2026
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.subservice: azure-devops-repos-git
ai-usage: ai-assisted
---

# Available pull request status checks

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Status checks enforce quality standards by blocking merges until tests pass, security scans clear, or other conditions are met. Azure DevOps Services and external tools post status checks using the [PR Status API](/rest/api/azure/devops/git/pull-request-statuses).

To require a status check as a [branch policy](branch-policies.md#status-checks), create a policy in the **Status to check** section and specify the check's **Genre** and **Name** in the format `genre/name`. The pull request then blocks merges until the check reports `succeeded`.

## Status values and merge behavior

When a status check posts a result to a pull request, it reports one of the following values:

| Value | Behavior with required policy | Behavior with optional policy |
|-------|-------------------------------|-------------------------------|
| `succeeded` | ✓ Unblocks the policy | Informational |
| `failed` | ✗ Blocks merge | Informational |
| `error` | ✗ Blocks merge | Informational |
| `pending` | ⏳ Blocks merge (awaiting result) | Informational |
| `notApplicable` | ✓ Bypasses policy requirement | Informational |
| `notSet` | ⏳ Treated as pending | Informational |

> [!NOTE]
> When a required policy is set to **Apply by default**, you can post `notApplicable` to remove the policy requirement for a specific PR without changing the policy configuration. This is useful when a check isn't applicable to a particular change.

For general instructions on adding a status check policy, see [Configure a branch policy for an external service](pr-status-policy.md). For advanced policy options including authorized identity restrictions and policy applicability settings, see [Customize and extend pull request workflows with pull request status](pull-request-status.md).

## First-party Azure DevOps status checks

The following are the only status checks posted natively by Azure DevOps Services. Each check uses a fixed **Genre** value, so you can configure the branch policy before or after the service posts its first status. All other status checks come from external services via the PR Status API.

### GitHub Advanced Security for Azure DevOps

These status checks require [GitHub Advanced Security for Azure DevOps](../security/configure-github-advanced-security-features.md) to be enabled on the repository. The checks evaluate security vulnerabilities detected across code scanning (CodeQL), dependency scanning, and secret scanning.

| Genre | Name | Status to check | Description |
|-------|------|-----------------|-------------|
| `AdvancedSecurity` | `AllHighAndCritical` | `AdvancedSecurity/AllHighAndCritical` | Blocks merges when any unresolved critical or high severity vulnerability exists in the repository from any scanning type (code, dependency, or secret). Requires a build validation policy with Advanced Security pipeline tasks enabled. |
| `AdvancedSecurity` | `NewHighAndCritical` | `AdvancedSecurity/NewHighAndCritical` | Blocks merges when the pull request introduces new critical or high severity vulnerabilities from any scanning type. Existing repository vulnerabilities don't block the merge. Requires a build validation policy with Advanced Security pipeline tasks to scan the PR branch. |

> [!NOTE]
> Both `AdvancedSecurity` status checks require a build validation policy and Advanced Security scanning tasks configured with `Wait for Processing: true` to ensure statuses reflect the latest scan results. For dependency scanning or code scanning (CodeQL), enable `Wait for Processing` on the `AdvancedSecurity-Publish` task. For code scanning, also enable it on the `AdvancedSecurity-CodeQL-Analyze` task. Both checks appear in the **Status to check** dropdown after the first successful pipeline run with Advanced Security scanning.

> [!TIP]
> If your repository has existing unresolved alerts, start with `AdvancedSecurity/NewHighAndCritical` to avoid blocking all pull requests immediately. Migrate to `AdvancedSecurity/AllHighAndCritical` once the alert backlog is resolved.

For setup instructions, see [Set up pull request status checks](../security/configure-github-advanced-security-features.md#set-up-pull-request-status-checks).

> [!IMPORTANT]
> Leave **Advanced Options** at their defaults when configuring the status check policy. Changing the authorized identity or requiring an iteration ID prevents status checks from posting correctly.

### Azure Pipelines code coverage

Azure Pipelines automatically posts a code coverage status check when a pipeline publishes code coverage results for a pull request. The genre is the pipeline name, so the exact `genre/name` value depends on how you named your pipeline.

| Genre | Name | Status to check | Description |
|-------|------|-----------------|-------------|
| `{pipeline-name}` | `codecoverage` | `{pipeline-name}/codecoverage` | Reports the diff coverage percentage for lines changed in the pull request. Advisory by default; does not block merges unless configured as a required branch policy with a minimum coverage threshold. |

The default pass threshold is 70% diff coverage. To adjust the threshold and other settings, add an `azurepipelines-coverage.yml` file to the root of your repository:

```yaml
coverage:
  status:
    comments: on
    diff:
      target: 80
```

Replace `80` with your desired minimum diff coverage percentage.

For setup instructions, see [Enforce branch protection with a code coverage policy](../../pipelines/test/review-code-coverage-results.md#enforce-branch-protection-with-a-code-coverage-policy).

> [!TIP]
> The genre is derived from your pipeline's display name in Azure Pipelines; it is not a separately configurable value. For example, a pipeline named **CI - Main** uses `CI - Main/codecoverage` as the **Status to check** value. Status checks only appear in the dropdown after the service has posted at least one status to a pull request. For new integrations that haven't run yet, type the `genre/name` value directly into the field.

## Custom and external status checks

Any service that uses the [PR Status API](/rest/api/azure/devops/git/pull-request-statuses) can post a status check to your pull requests. To post a status check via the REST API, the calling identity needs the **Contribute to pull requests** permission on the repository.

When a service posts a status, its `genre/name` appears in the **Status to check** dropdown when you add a policy. For new services that haven't posted yet, type the `genre/name` value directly.

### Common integration patterns

| Integration type | Description | Examples |
|---|---|---|
| Build and test servers | External CI tools that post pass or fail results after running tests against the PR branch. | Jenkins, GitLab CI, CircleCI, Travis CI |
| Code quality analysis | Static analysis tools that scan code for bugs, vulnerabilities, and code smells. | SonarQube, SonarCloud |
| Security scanners | Non-Microsoft vulnerability scanners that post results after scanning PR changes. Also supports SARIF format results. | Snyk, Checkmarx, WhiteSource (Mend), Microsoft Security DevOps |
| Compliance and policy | Policy enforcement tools that verify licensing, code standards, regulatory requirements, or deployment readiness. | Custom compliance checkers, deployment gates, license scanners |
| GitHub Actions | Checks from GitHub Actions workflows appear in Azure DevOps PRs when the repository is connected to GitHub. Refer to [Azure DevOps GitHub integration](../../cross-service/github-integration.md) for configuration details. | Any GitHub Actions workflow can post status |
| Approvals and gates | Services that require manual or automated approval before merges are allowed. | ServiceNow, custom approval services via REST API |

### Policy configuration options

When adding a status check policy, you can configure:

- **Policy requirement**: Set the policy as required (blocks merges unless check passes) or optional (informational only).
- **Authorized identity**: Restrict which accounts can post status values that satisfy the policy. Leave blank to allow any account.
- **Reset conditions**: Specify whether the status resets when a new commit is pushed. By default, pushing a new commit resets required status checks to pending, forcing them to evaluate your latest code. To allow a status to persist across commits, disable **Reset status whenever there are new changes**.
- **Policy applicability**: Choose whether the policy applies immediately (**Apply by default**) or only after the first status is posted (**Conditional**).
  - **Apply by default**: The policy blocks merges until a `succeeded` status is posted. You can post `notApplicable` to bypass the requirement for a specific PR.
  - **Conditional**: The policy only becomes active after the check posts its first status.
- **Path filter**: Restrict the policy to PRs that modify files in specific paths (optional).

To implement a custom status check, see:

- [Customize and extend pull request workflows with pull request status](pull-request-status.md)
- [Create a pull request status server with Node.js](create-pr-status-server.md)
- [Use Azure Functions to create custom branch policies](create-pr-status-server-with-azure-functions.md)

## Related content

- [Configure a branch policy for an external service](pr-status-policy.md)
- [Configure GitHub Advanced Security for Azure DevOps features](../security/configure-github-advanced-security-features.md)
- [Review code coverage results](../../pipelines/test/review-code-coverage-results.md)
- [PR Status REST API reference](/rest/api/azure/devops/git/pull-request-statuses)
- [Create a PR status server with Node.js](create-pr-status-server.md)
- [Azure DevOps Marketplace — Azure Repos category](https://marketplace.visualstudio.com/search?target=AzureDevOps&category=Azure%20Repos)
