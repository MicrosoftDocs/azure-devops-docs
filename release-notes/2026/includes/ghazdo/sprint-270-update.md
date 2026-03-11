---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 3/5/2026
ms.topic: include
---

### Build identity access restricted for Advanced Security APIs rollback

We have reverted the [Build identity access restricted for Advanced Security APIs](/azure/devops/release-notes/2026/ghazdo/sprint-269-update#build-identity-access-restricted-for-advanced-security-apis) change announced in Sprint 269. Build service identities, such as `Project Collection Build Service`, can once again be used as callers for Advanced Security REST APIs.

Action required by **April 15, 2026**: Access to Advanced Security alerts via the build service identity will be removed. To maintain uninterrupted pipeline gating via a custom script, migrate to a service principal granted the Advanced Security: read alerts permission for all necessary repositories. This will not incur an additional Advanced Security license, provided the service principal is not used to contribute code to a repository. Two dedicated status checks for blocking on high and critical alerts at pull request time is also planned for a future release in the M272 release.

### Secret push protection bypass details available in audit log

When a developer bypasses push protection to push a detected secret, that bypass event is now recorded in the Azure DevOps audit log with additional context. The audit log entry includes the repository, the secret type, and the identity of the user who performed the bypass. This gives security teams and organization administrators a complete record of push protection bypass activity, making it easier to investigate incidents, enforce policy, and identify developers who may need additional security guidance. 

Additional audit log entries for Advanced Security enablement events will be coming in a future release.
