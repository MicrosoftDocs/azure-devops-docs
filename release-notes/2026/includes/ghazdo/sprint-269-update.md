---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 2/17/2026
ms.topic: include
---

### Permissions enforcement in security overview

Security overview now enforces the **Advanced Security: Read alerts** permission across all views (Risk and Coverage). Repositories where the current user lacks this permission are no longer visible in security overview results. This change ensures that security overview respects the same access controls as the repository-level alerts experience, preventing unauthorized visibility into which repositories have active findings.

### Build identity access restricted for Advanced Security APIs

Advanced Security REST APIs no longer accept build service identities (such as `Project Collection Build Service`) as callers. This change prevents pipeline-based automation from accessing or modifying security alert data using build service accounts, reducing the risk of unintended alert state changes during CI/CD runs. If you have automation that interacts with Advanced Security APIs using a build identity, update those workflows to use a named user or service principal with the appropriate Advanced Security permissions.

### Stale scan detection in security overview coverage

The security overview coverage pane now identifies tools with scans older than 90 days. Tools that haven't produced results in over 90 days display a stale indicator, helping security teams quickly spot repositories where scanning may have stopped running or where pipeline configurations need attention. This visibility makes it easier to maintain comprehensive scan coverage across your organization and catch configuration drift before it creates blind spots.
