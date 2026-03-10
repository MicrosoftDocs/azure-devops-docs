---
title: Set up the remote Azure DevOps MCP Server (preview)
titleSuffix: Azure DevOps Services
description: Learn how to configure the remote Azure DevOps MCP Server for AI-assisted development without local installation, using streamable HTTP transport.
ms.service: azure-devops
ms.collection: ce-skilling-ai-copilot
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 03/10/2026
#customer intent: As a developer, I want to set up the remote Azure DevOps MCP Server so I can use AI assistance with my Azure DevOps data without installing and running a local server.
---

# Set up the remote Azure DevOps MCP Server (preview)

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

> [!IMPORTANT]
> The remote Azure DevOps MCP Server is in public preview. Preview features might have limited functionality and are subject to change before general availability.

The remote Azure DevOps MCP Server is a hosted version of the [Azure DevOps MCP Server](mcp-server-overview.md) that doesn't require local installation or Node.js. Instead of running the server on your machine, you connect your AI assistant directly to the Azure DevOps-hosted endpoint using streamable HTTP transport.

The remote server provides the same capabilities as the local server, including access to work items, pull requests, pipelines, test plans, and more, while eliminating setup complexity.

## Remote vs. local MCP Server

| Feature | Remote MCP Server (preview) | Local MCP Server |
|---------|----------------------------|------------------|
| **Installation** | No installation required | Requires Node.js 20.0+ and `npx` |
| **Transport** | Streamable HTTP | stdio |
| **Authentication** | Microsoft Entra ID (OAuth) | Azure DevOps PAT or Microsoft Entra ID |
| **Hosting** | Azure DevOps-hosted service | Runs locally on your machine |
| **Configuration** | Minimal `mcp.json` | Environment-specific setup |
| **Status** | Public preview | Generally available |

## Prerequisites

| Category | Requirements |
|----------|-------------|
| **Azure DevOps** | An active [Azure DevOps organization](../organizations/accounts/create-organization.md) |
| **Permissions** | Member of the project with access to the resources you want to query |
| **Environment** | A supported AI assistant environment (see [Supported environments](#supported-environments)) |

## Enable the remote MCP Server preview

<!-- TODO: Add steps to enable the preview feature once available -->

To enable the remote MCP Server for your organization:

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`).
2. Select **Organization settings**.
3. Under **Preview features**, enable **Remote MCP Server**.

> [!NOTE]
> The remote MCP Server preview is being rolled out progressively. If you don't see the option, it might not be available for your organization yet.

## Configure your AI assistant

The remote MCP Server uses a streamable HTTP endpoint. Add the following configuration to your AI assistant's MCP settings.

### mcp.json configuration

```json
{
  "servers": {
    "azure-devops": {
      "type": "http",
      "url": "https://dev.azure.com/{organization}/_apis/mcp",
      "auth": {
        "type": "oauth2",
        "authority": "https://login.microsoftonline.com/{tenant-id}",
        "clientId": "{client-id}",
        "scopes": ["499b84ac-1321-427f-aa17-267ca6975798/.default"]
      }
    }
  }
}
```

Replace the following placeholders:

| Placeholder | Description |
|-------------|-------------|
| `{organization}` | Your Azure DevOps organization name (for example, `contoso`) |
| `{tenant-id}` | Your Microsoft Entra tenant ID |
| `{client-id}` | Your application (client) ID registered in Microsoft Entra ID |

<a id="supported-environments"></a>

## Supported environments

### Visual Studio Code

Add the remote MCP Server to your VS Code settings.

1. Open the Command Palette (**Ctrl+Shift+P**).
2. Search for **MCP: Add Server**.
3. Select **HTTP** as the transport type.
4. Enter the server URL: `https://dev.azure.com/{organization}/_apis/mcp`
5. Follow the authentication prompts to sign in with your Microsoft Entra account.

Or, add the configuration directly to your `.vscode/mcp.json` file:

```json
{
  "servers": {
    "azure-devops-remote": {
      "type": "http",
      "url": "https://dev.azure.com/{organization}/_apis/mcp"
    }
  }
}
```

### Visual Studio (2022 and later)

<!-- TODO: Add Visual Studio-specific setup steps -->

Configure the remote MCP Server in Visual Studio by adding the server URL to your MCP settings. For more information, see [Use MCP servers in Visual Studio](/visualstudio/ide/mcp-servers).

### GitHub Copilot CLI

<!-- TODO: Add Copilot CLI-specific setup steps -->

Configure the remote MCP Server for use with GitHub Copilot CLI.

## Authenticate

The remote MCP Server uses Microsoft Entra ID for authentication. When you first connect, your AI assistant prompts you to sign in through a browser-based authentication flow.

1. Your AI assistant initiates a connection to the remote MCP Server.
2. A browser window opens for Microsoft Entra sign-in.
3. Sign in with your Azure DevOps credentials.
4. After authentication, your AI assistant has access to your Azure DevOps data.

> [!NOTE]
> Your authentication token is cached locally. You don't need to sign in every time you use the remote MCP Server.

## Verify the connection

After setup, verify the remote MCP Server is working by asking your AI assistant a simple question about your Azure DevOps data:

- "List the projects in my Azure DevOps organization"
- "Show my assigned work items"
- "What pull requests need my review?"

If your AI assistant returns results from your Azure DevOps organization, the remote MCP Server is configured correctly.

## Troubleshooting

| Issue | Resolution |
|-------|------------|
| **Authentication fails** | Verify your Microsoft Entra credentials and that you have access to the Azure DevOps organization. |
| **Server not found** | Check the server URL format: `https://dev.azure.com/{organization}/_apis/mcp` |
| **No data returned** | Confirm you have the appropriate permissions in the project you're querying. |
| **Preview not available** | The remote MCP Server preview is rolling out progressively. Check back later or contact your organization admin. |

## Related content

- [Azure DevOps MCP Server overview](mcp-server-overview.md)
- [Azure DevOps MCP Server GitHub repository](https://github.com/microsoft/azure-devops-mcp)
