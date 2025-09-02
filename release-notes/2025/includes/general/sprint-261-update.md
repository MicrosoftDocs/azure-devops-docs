---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 09/04/2025
ms.topic: include
---

### OAuth Client Secrets Now Shown Only Once

As part of our ongoing commitment to security and industry best practices, Azure DevOps will now be enforcing one-time visibility for OAuth client secrets. Starting with this release, newly generated client secrets will be displayed only once at the time of creation and will no longer be retrievable via the UI or API. This change includes the retirement of the Get Registration Secret API. Users are encouraged to securely store secrets immediately upon generation using tools such as Azure Key Vault. For secret rotation, Azure DevOps supports overlapping secrets to ensure continuity and minimize downtime. This update will go into effect starting September 2, 2025. Learn more in our [blog post](https://devblogs.microsoft.com/devops/azure-devops-oauth-client-secrets-now-shown-only-once/).