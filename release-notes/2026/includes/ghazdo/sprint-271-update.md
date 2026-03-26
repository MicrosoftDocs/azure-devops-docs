---
author: gloridelmorales
ms.author: glmorale
ms.date: 3/31/2026
ms.topic: include
---

### Advanced Security status checks for pull requests

Advanced Security now publishes configurable status checks that integrate with Azure DevOps' built-in branch policy system. When Advanced Security scanning runs against a pull request, it automatically publishes status checks that can be used as required branch policies.

Two new status checks are available:
- **New High/Critical Alerts** — fails only when the pull request introduces new high or critical severity alerts, ignoring pre-existing findings in the target branch.
- **High/Critical Alerts** — fails when there are any high or critical severity alerts present, including pre-existing alerts in the target branch.

Status checks use fail-open behavior: repositories where Advanced Security is not enabled pass the check automatically, preventing workflow blocking for non-onboarded repositories.

To use these status checks, add them as required status policies on your branches through the branch policy settings.

### Export results from security overview

You can now export results from security overview to a CSV file. Both the Risk and Coverage views support export, giving you a downloadable snapshot of your organization's security posture across repositories.

Use exported data to share findings with stakeholders, feed into compliance reporting workflows, or perform offline analysis across your organization's repositories.