---
author: ncouraud
ms.author: ncouraud
ms.date: 4/9/2024
ms.topic: include
---

### Expanded set of Secret Scanning detections

We are expanding the set of partner patterns that can be detected with Secret Scanning. This expansion brings in a numebr of high confidence patterns for new token types. These new patterns include a large number of Azure resource providers, as well as other SaaS providers through the GHAS Secret Scanning partner program. 

For more information on the types of partner patterns that Github Advanced Security Secret Scanning detects, see [Secret scanning alerts for GitHub Advanced Security for Azure DevOps](/azure/devops/repos/security/github-advanced-security-secret-scanning?view=azure-devops&branch=main#secret-scanning-patterns&preserve-view=true).

### Secret Scanning now detects non-provider patterns

Secret scanning will now detect a number of non-provider patterns, including:
- HTTP authentication headers
- MongoDB connection strings
- MySQL/Postgres/SQL Server connection strings
- OpenSSH private keys
- RSA private keys 

> [!TIP]
> The detection of non-provider patterns is currently in preview and subject to change.

Detection of these patterns are enabled for all GitHub Advanced Security enabled repositories in Azure DevOps. Resulting secrets will appear in a new, separate filter on the secret scanning alert list called "Confidence.”

For more information on the types of patterns that Github Advanced Security Secret Scanning detects, see [Secret scanning alerts for GitHub Advanced Security for Azure DevOps](/azure/devops/repos/security/github-advanced-security-secret-scanning?view=azure-devops&branch=main#secret-scanning-patterns&preserve-view=true).
