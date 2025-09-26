---
title: Security scripts for Azure DevOps administrators
description: Quick reference for PowerShell scripts that automate common Azure DevOps security tasks.
ms.topic: reference
ms.date: 09/24/2025
---

# Security scripts for Azure DevOps administrators

This article contains links to small PowerShell scripts that automate common security tasks in Azure DevOps. These are convenience scripts — review them, test in a non-production environment, and adapt to your organization's policies before running in production.

## Prerequisites

| Category | Description |
|---|---|
| Authentication | Microsoft Entra ID tokens. The scripts try to acquire a token via Azure CLI: `az account get-access-token --resource 499b84ac-1321-427f-aa17-267ca6975798`. You can also pass a token via a script parameter or set an environment variable (script-specific). |
| Permissions | The calling principal must have appropriate admin/update permissions (Organization Owner or roles that include project or group entitlement updates). |
| Tools | Azure CLI (`az`) and PowerShell (`pwsh`) are required for the examples. Scripts are written for PowerShell 7+; adapt if you use Windows PowerShell. |
| Safety | Test in a non-production organization. Reassign or close active work before removing users. Review the "Change project visibility" prerequisites before making projects public. |
| Audit & secrets | Keep an audit trail of automated changes. Store credentials and tokens securely (Key Vault or pipeline secret variables). Revoke tokens/service principals if credential rotation is needed after running bulk operations. |

## Security scripts

| Action | Details |
|---|---|
| [Change project visibility](./change-project-visibility-cli.ps1) — Switch a project's visibility (public ↔ private) | Path: `./change-project-visibility-cli.ps1`<br>Quick usage:<br>`az login`<br>`pwsh .\change-project-visibility-cli.ps1 -Organization "myorg" -ProjectId "myprojectid" -Visibility "private"`<br>Purpose: Automation / bulk updates when you need to change many projects' visibility settings. |
| [Remove group members](./remove-group-member.ps1) — Remove a member from an Azure DevOps group entitlement | Path: `./remove-group-member.ps1`<br>Quick usage:<br>`az login`<br>`pwsh .\remove-group-member.ps1 -Organization "myorg" -GroupId "<group-guid>" -MemberId "<member-descriptor-or-id>"`<br>Purpose: Remove a specific member from a group entitlement (use with caution; keep an audit trail). |
| [Reassign work items](./reassign-workitems.ps1) — Bulk reassign work items to a new assignee | Path: `./reassign-workitems.ps1`<br>Quick usage:<br>`az login`<br>`pwsh .\reassign-workitems.ps1 -Organization "myorg" -Project "myproject" -WorkItemIds 123,456 -NewAssignee "Jane Doe <jane@contoso.com>"`<br>Purpose: Reassign active work items before removing or disabling a user to avoid disrupting workflows. |

## Support & audit

- Keep an audit trail of automated changes.
- Revoke tokens / service principals if credential rotation is needed after running bulk ops.

## Disclaimer

These are example scripts provided for convenience. Validate correctness and security for your environment before running them in production.
