---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 3/5/2026
ms.topic: include
---

### Secret push protection bypass details available in audit log

When a developer bypasses push protection to push a detected secret, that bypass event is now recorded in the Azure DevOps audit log with additional context. The audit log entry includes the repository, the secret type, and the identity of the user who performed the bypass. This gives security teams and organization administrators a complete record of push protection bypass activity, making it easier to investigate incidents, enforce policy, and identify developers who may need additional security guidance. 

Additional audit log entries for Advanced Security enablement events will be coming in a future release.