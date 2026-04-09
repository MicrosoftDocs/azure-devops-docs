---
author: gloridelmorales
ms.author: glmorale
ms.date: 4/14/2026
ms.topic: include
---

### CodeQL default setup for code scanning (public preview)

CodeQL default setup is now available in public preview for GitHub Advanced Security for Azure DevOps. With CodeQL default setup, you can enable code scanning for your repositories without any manual pipeline configuration. Once enabled, CodeQL automatically scans your code using Azure Pipelines and surfaces security vulnerabilities directly in your repository alerts.

To get started, enable CodeQL default setup from your organization, project, or repository settings. You can optionally configure or change the agent pool used for scanning through organization settings under **All Repositories**.

> [!div class="mx-imgBorder"]
> [![Screenshot showing CodeQL default setup configuration.](../../media/272-ghazdo-01.png "Screenshot showing CodeQL default setup configuration.")](../../media/272-ghazdo-01.png#lightbox)

### Combined alerts view and security campaigns in security overview

Security overview now includes a combined alerts view, giving security administrators a single place to see and act on security alerts across all repositories in their organization. Instead of navigating to each repository individually, you can now search, filter, and prioritize alerts from one centralized dashboard.

Security campaigns let you create and share filtered views of alerts to coordinate remediation efforts across teams. Use filters to focus on specific vulnerability types, severity levels, or repositories, then share the view with your team.

> [!div class="mx-imgBorder"]
> ![Animated walkthrough of combined alerts view and security campaigns in security overview.](../../media/272-ghazdo-02.gif)

### Alert UX enhancements: confidence filter and alert counts

We've made two improvements to the alert experience at the repository level:

- **All confidence filter**: A new **All** option in the confidence filter lets you see all secret alerts at once, without switching between **High** and **Other** filters. **All** is now the default when you open the **Secrets** tab. This is a UI-only change. Continue to use `High,Other` via the API when you need all confidence values for secret alerts.
- **Alert counts on tabs**: Each alert category tab now displays a count of active alerts, so you can quickly see the number of current alerts across code scanning, dependencies, and secrets without opening each tab.
