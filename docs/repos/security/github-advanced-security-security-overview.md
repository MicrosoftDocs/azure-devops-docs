---
title:  Security overview on GitHub Advanced Security for Azure DevOps 
titleSuffix: Azure Repos
description: Utilize security overview for GitHub Advanced Security for Azure DevOps
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: overview
ms.custom: cross-service
ms.author: laurajiang
author: laurajjiang
monikerRange: 'azure-devops'
ms.date: 04/14/2026
---

#  Security overview 

Security overview provides a single pane of glass to view a summary of your organization's security risk and Advanced Security enablement status. All organizations, regardless of if they have an Advanced Security-enabled repository or not, are able to see the security overview tab in their organization settings.

[!INCLUDE [GitHub Advanced Security for Azure DevOps is different from GitHub Advanced Security.](includes/github-advanced-security.md)]

## About security overview

Security overview is available to view for all members of the organization who have access to view organization settings. Security overview includes three tabs:

- **Risk** — shows the distribution of total alerts and of alerts by severity across all projects and repositories with Advanced Security enabled.
- **Coverage** — shows the enablement status of Advanced Security features across all repositories in your organization.
- **Alerts** — shows individual alerts across all repositories in your organization, with filtering and search capabilities.

## Risk tab

To access the security overview for your organization, navigate to **Organization settings > Security overview**. The default view is of the **Risk** tab, which shows a summary of security alerts across your organization.

In the **Risk** view, only repositories with Advanced Security enabled appear. The reported alert counts are only for alerts discovered on the default branch for each repository. Disabled and deleted repositories are automatically excluded from results.

You can sort by each of the column headers in the table (`Open`, `New`, `Dismissed`, `Fixed`) and modify your query using the search bar for keywords or drop-down filters for project, tool, and time-bound. The time-bound will default to showing results from the past seven days. Any filters applied will also be pushed as a URL parameter to facilitate sharability of your query.

You can export results from the Risk tab to a CSV file for offline analysis or reporting.

:::image type="content" source="media/security-overview-risk.png" lightbox="media/security-overview-risk.png" alt-text="Screenshot of Risk tab in security overview for an organization.":::

## Coverage tab

Under the **Coverage** tab, security overview shows all repositories in your enterprise, regardless of their enablement status. Disabled and deleted repositories are automatically excluded from results. For any repositories that have Advanced Security enabled, a breakdown of each tool is also included:

:::image type="content" source="media/security-overview-coverage.png" lightbox="media/security-overview-coverage.png" alt-text="Screenshot of Coverage tab in security overview for an organization.":::

Dependency scanning, code scanning, and secret scanning alerts are enabled once a SARIF result file gets successfully submitted to Advanced Security. In other words, a successful scan regardless of alert discovery on any branch for a repository lights up coverage for that particular tool and repository. The enablement status doesn't consider recency of the scan. There may be up to a 24-hour delay for recent enablement events after selecting `Enable all` at the organization or project level.

Hovering on a specific repository and selecting the cog icon directs you to that repository's settings pane where you can enable Advanced Security. For more information about configuring Advanced Security features, see [Configure GitHub Advanced Security](configure-github-advanced-security-features.md).

You can export results from the Coverage tab to a CSV file.

:::image type="content" source="media/enable-github-advanced-security.png" lightbox="media/enable-github-advanced-security.png" alt-text="Screenshot of enabling GitHub Advanced Security.":::

## Alerts tab

The **Alerts** tab gives you a combined view of individual security alerts across all repositories in your organization. Instead of navigating to each repository individually, you can search, filter, and prioritize alerts from one centralized dashboard.

### Filtering and search

The Alerts tab supports filtering by:

- **Tool** — filter by alert source (code scanning, dependency scanning, or secret scanning).
- **Severity** — filter by alert severity level (critical, high, medium, or low).
- **State** — filter by alert state (open, dismissed, or fixed).
- **Project** — filter by Azure DevOps project.
- **Repository** — filter by specific repository.
- **Rule** — filter by the specific detection rule that generated the alert.
- **Confidence** — for secret scanning alerts, filter by confidence level (high or other). The "All" filter shows all secret alerts at once without having to cycle through individual confidence levels.
- **Time-bound** — filter alerts by when they were introduced.

Filters are applied as URL parameters, making it easy to share a specific filtered view with colleagues by copying the URL.

### Export

You can export up to the first 1,000 alerts from the Alerts tab to a CSV file for offline analysis, reporting, or integration with other tools. The export respects your currently applied filters.

### Security campaigns

Security campaigns let you create and share filtered views of alerts to coordinate remediation efforts across teams. Use filters to focus on specific vulnerability types, severity levels, or repositories, then share the campaign view with your team using the URL.

Campaigns are useful for:

- **Sprint-based remediation** — create a campaign for all critical alerts in a specific project to track remediation progress during a sprint.
- **Tool-specific triage** — filter to a specific scanning tool to review and triage all alerts from that source.
- **Cross-repo coordination** — share a filtered view with engineers across multiple repositories to drive down a specific class of vulnerability.

## Related articles

- [Configure GitHub Advanced Security features](configure-github-advanced-security-features.md)
- [Set up code scanning](github-advanced-security-code-scanning.md)
- [Set up dependency scanning](github-advanced-security-dependency-scanning.md)
- [Set up secret scanning](github-advanced-security-secret-scanning.md)
- [Manage GitHub Advanced Security for Azure DevOps](github-advanced-security-permissions.md)