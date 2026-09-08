---
author: gloridelmorales
ms.author: glmorale
ms.date: 8/20/2026
ms.topic: include
---

### Azure DevOps Remote MCP Server is now generally available

The Azure DevOps Remote MCP Server is now generally available, making it easier to securely connect AI agents and copilots to Azure DevOps without managing local infrastructure. The general availability release also expands support to Microsoft Foundry and Copilot Studio, enabling developers to build AI-powered experiences that can securely access Azure DevOps work items, repositories, pipelines, and more through a hosted MCP endpoint.

[Learn more about the Azure DevOps Remote MCP Server](/azure/devops/mcp-server/remote-mcp-server).

### Azure Monitor Logs audit streaming now uses Microsoft Entra authentication for workspace authorization

Azure DevOps now validates Azure Monitor Logs audit streaming workspace access by using the signed-in user's Microsoft Entra identity. During setup and certain reconfiguration scenarios, users might be prompted to sign in to Azure so Azure DevOps can verify access to the target Azure Monitor Logs workspace through Azure Resource Manager.

This change supports the ongoing deprecation of Workspace ID and Shared Key-based authorization and helps ensure that only users with the appropriate Azure permissions can configure or re-enable Azure Monitor Logs audit streams.

### Audit events for expired Visual Studio subscriptions and GitHub Enterprise licenses

When a user's Visual Studio subscription or GitHub Enterprise license is no longer valid, Azure DevOps now emits a `Licensing.Modified` audit event, followed by a `Licensing.Assigned` event if a fallback access level is applied. These system-initiated changes are attributed to "Azure DevOps Services" and appear in the auditing UI, exports, and audit streaming. [Learn more about licensing audit events](/azure/devops/organizations/audit/auditing-events).

### Audit events for service hooks

Service hook subscription changes are now captured in the Azure DevOps audit log, including creation, deletion, configuration changes, changes to subscribed events, enable/disable status changes, and when a subscription is throttled. These events are available in the audit log UI, audit streaming, and the auditing APIs. See [Audit events](/azure/devops/organizations/audit/auditing-events) for the full list.
