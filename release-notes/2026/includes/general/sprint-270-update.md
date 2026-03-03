---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 3/05/2026
ms.topic: include
---

### Retirement of Global Personal Access Tokens in Azure DevOps

Azure DevOps is retiring **Global Personal Access Tokens (PATs)** to reduce security risk and promote safer, scoped authentication. Global PATs grant access across all organizations a user belongs to, creating an overly broad and high‑impact credential that no longer aligns with modern security best practices. Customers are encouraged to move to **organization‑scoped PATs** where necessary or adopt **Microsoft Entra–based authentication** for improved security and governance. 

**Key dates:** 

* On March 15, 2026, creation and regeneration of global PATs will be blocked

* December 1, 2026, all existing global PATs will be fully decommissioned and stop working. Customers should review any workflows or integrations using global PATs and begin transitioning ahead of these deadlines to avoid disruption. 

Learn more in the announcement blog: [Retirement of Global Personal Access Tokens in Azure DevOps](https://dev.azure.com/mseng/b924d696-3eae-4116-8443-9a18392d8544/_workitems/edit/2238768).

### New Repository Setting: Auto-Complete Pull Requests by Default

We’ve introduced a new repository setting: **Set PRs to auto-complete on creation by default**.

> [![Screenshot of condensed views.](../../media/270-general-01.png "Screenshot of condensed views.")](../../media/270-general-01.png#lightbox)

This setting controls the default state of the **Set auto-complete** toggle for newly created pull requests.

When enabled: The **Set auto-complete** option will be turned on automatically for all new PRs.
When disabled: The toggle remains off by default. 

> [![Screenshot of condensed views.](../../media/270-general-02.png "Screenshot of condensed views.")](../../media/270-general-02.png#lightbox)

To enable this setting, go to Project settings → Repositories → Settings. You can apply it at the project level so that all repositories inherit the configuration, or adjust it individually within a specific repository’s settings.