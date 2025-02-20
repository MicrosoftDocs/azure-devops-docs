---
title:  Security overview on GitHub Advanced Security for Azure DevOps 
titleSuffix: Azure Repos
description: Utilize security overview for GitHub Advanced Security for Azure DevOps
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: conceptual 
ms.custom: cross-service
ms.author: laurajiang
author: laurajjiang
monikerRange: 'azure-devops'
ms.date: 03/28/2024
---

#  Security overview 
Security overview provides a single pane of glass to view a summary of your organization's security risk and Advanced Security enablement status. 

All organizations, regardless of if they have an Advanced Security-enabled repository or not, are able to see the security overview tab in their organization settings.

[!INCLUDE [GitHub Advanced Security for Azure DevOps is different from GitHub Advanced Security.](includes/github-advanced-security.md)]

## About security overview
Security overview is available to view for all members of the organization who have access to view organization settings. Under the **Risk** tab, security overview shows you the distribution of total alerts and of alerts by severity across all projects and repositories with Advanced Security enabled under your selected organization. Under the **Coverage** tab, security overview shows the enablement status and navigation to repository settings to quickly enable Advanced Security for any repository. 

## Viewing security insights
To access the security overview for your organization, navigate to **Organization settings > Security overview**. The default view is of the **Risk** tab, which shows a summary of security alerts across dependency scanning, secret scanning, and code scanning in totality and by severity. In the **Risk** view, only repositories with Advanced Security enabled appear. The reported alert counts are only for alerts discovered on the default branch for each repository. 

:::image type="content" source="media/security-overview-risk.png" lightbox="media/security-overview-risk.png" alt-text="Screenshot of Risk tab in security overview for an organization."::: 

Under the **Coverage** tab, security overview shows all repositories in your enterprise, regardless of their enablement status. For any repositories that have Advanced Security enabled, a breakdown of each tool is also included:

:::image type="content" source="media/security-overview-coverage.png" lightbox="media/security-overview-coverage.png" alt-text="Screenshot of Coverage tab in security overview for an organization."::: 

Dependency scanning, code scanning, and secret scanning alerts are enabled once a SARIF result file gets successfully submitted to Advanced Security. In other words, a successful scan regardless of alert discovery on any branch for a repository lights up coverage for that particular tool and repository. The enablement status doesn't consider recency of the scan. 

Hovering on a specific repository and selecting the cog icon directs you to that repository's settings pane where you can enable Advanced Security. For more information about configuring Advanced Security features, see [Configure GitHub Advanced Security](configure-github-advanced-security-features.md).

:::image type="content" source="media/enable-github-advanced-security.png" lightbox="media/enable-github-advanced-security.png" alt-text="Screenshot of enabling GitHub Advanced Security.":::

## Related articles

- [Set up code scanning](github-advanced-security-code-scanning.md)
- [Set up dependency scanning](github-advanced-security-dependency-scanning.md)
- [Set up secret scanning](github-advanced-security-secret-scanning.md)
- [Manage GitHub Advanced Security for Azure DevOps](github-advanced-security-permissions.md)
