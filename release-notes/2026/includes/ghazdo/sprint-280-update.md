---
author: gloridelmorales
ms.author: glmorale
ms.date: 10/02/2026
ms.topic: include
---

### Copilot Autofix now uses an agentic foundation and repository context

Copilot Autofix for GitHub Advanced Security for Azure DevOps now supports generating fixes for code scanning alerts from CodeQL and third-party scanning tools.

Autofix also now runs on an agentic foundation. Agentic Autofix can review and refine its proposed changes before returning a suggestion. It can use custom instructions and skills defined in supported `.github` or `.agents` locations in your repository. This context helps suggested changes follow your team's coding standards, architecture, and remediation patterns.

The Autofix experience stays the same. Open a code scanning alert, select **Generate fix**, and review the explanation and proposed diff before creating a pull request. For more information, see [Fix code scanning alerts with Copilot Autofix](/azure/devops/repos/security/github-advanced-security-code-scanning-autofix?view=azure-devops&preserve-view=true).

Autofix remains in limited public preview, and we aren't accepting additional participants at this time. We'll share more when the public preview opens.

### Prioritize dependency alerts with EPSS data

Dependency scanning alerts now show Exploit Prediction Scoring System (EPSS) percentile data in alert details. EPSS estimates the likelihood that a vulnerability will be exploited in the wild, giving you more context to prioritize remediation alongside severity.

You can also filter the **Alerts** page by EPSS percentile to focus on vulnerabilities with a higher likelihood of exploitation. For more information, see [Dependency scanning alerts](/azure/devops/repos/security/github-advanced-security-dependency-scanning#learn-about-dependency-scanning-alerts).
