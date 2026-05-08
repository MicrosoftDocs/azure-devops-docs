---
title: Troubleshoot the remote Azure DevOps MCP Server
titleSuffix: Azure DevOps Services
description: Resolve common issues with the remote Azure DevOps MCP Server, including authentication failures, connection errors, tool resolution, and Copilot integration problems.
ms.service: azure-devops
ms.collection: ce-skilling-ai-copilot
ai-usage: ai-assisted
ms.topic: troubleshooting
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 05/08/2026
#customer intent: As a developer, I want to troubleshoot issues with the remote Azure DevOps MCP Server so I can resolve connection, authentication, and tool problems without escalating to support.
---

# Troubleshoot the remote Azure DevOps MCP Server

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

[!INCLUDE [remote-mcp-server-preview-note](includes/remote-mcp-server-preview-note.md)]

This article helps you diagnose and resolve common problems with the [remote Azure DevOps MCP Server](remote-mcp-server.md). For local MCP Server issues, see the [local MCP Server troubleshooting guide](https://github.com/microsoft/azure-devops-mcp/blob/main/docs/TROUBLESHOOTING.md).

## Connection failures

### Server not found or URL errors

**Symptom:** Your AI assistant can't connect to the remote MCP Server, or you see URL-related errors.

**Resolution:**

1. Verify the server URL format in your `mcp.json`:

   ```json
   {
     "servers": {
       "ado-remote-mcp": {
         "url": "https://mcp.dev.azure.com/{organization}",
         "type": "http"
       }
     }
   }
   ```

1. Confirm the following:
   - Use `https://mcp.dev.azure.com/{organization}` — replace `{organization}` with your actual organization name.
   - Use just the organization name (for example, `contoso`), not the full Azure DevOps URL.
   - The `type` must be `"http"`, not `"stdio"`.
   - The organization name is case-sensitive.

1. If you omit the organization name from the URL (`https://mcp.dev.azure.com/`), you must provide the organization name as context in each tool call.

### Network or firewall blocks

**Symptom:** Connection times out or is refused, but the URL is correct.

**Resolution:**

- Ensure your network allows outbound HTTPS traffic to `mcp.dev.azure.com`.
- If you're behind a corporate proxy or firewall, verify that `mcp.dev.azure.com` isn't blocked. Contact your network administrator to allow-list this endpoint.
- VPN configurations might interfere with connectivity. Try connecting without VPN to isolate the issue.

### Preview availability

**Symptom:** You get an error indicating the service isn't available.

**Resolution:**

The remote MCP Server is in public preview and is rolling out gradually. If you can't connect:

- Verify your organization is connected to [Microsoft Entra ID](/entra/fundamentals/whatis).
- Check back later, as the preview continues to expand.
- Confirm with your organization administrator that no policies block preview features.

## Authentication errors

The remote MCP Server uses Microsoft Entra ID (OAuth) for authentication. Personal access tokens (PATs) aren't supported for the remote server.

### Sign-in prompt fails or doesn't appear

**Symptom:** The OAuth sign-in prompt doesn't appear, or authentication fails before you can sign in.

**Resolution:**

1. Verify your account is connected to Microsoft Entra ID. The remote MCP Server requires a Microsoft Entra–backed identity.
1. Check that your browser can open for the OAuth flow. If you use VS Code in a remote or headless environment, the OAuth redirect might not work correctly.
1. Clear cached credentials:
   - In VS Code, open the Command Palette (**Ctrl+Shift+P**) and run **Accounts: Sign Out**. Then try the connection again.
   - If the issue persists, reload the VS Code window (**Developer: Reload Window**).

### Authorization failure after sign-in

**Symptom:** You sign in successfully, but get an authorization error when trying to access your organization or project.

**Resolution:**

- Confirm you have the correct [access level](../organizations/security/access-levels.md) in the Azure DevOps organization.
- Verify you're a member of the project you're trying to access.
- Check that your Azure DevOps permissions include access to the resources you're querying (for example, work items, repos, or pipelines).

### Conditional Access policies block access

**Symptom:** Sign-in is blocked by a Microsoft Entra Conditional Access policy.

**Resolution:**

Conditional Access policies apply to the remote MCP Server the same way they apply to Azure DevOps. If your tenant enforces policies such as location-based or device-based restrictions:

- Ensure you're signing in from a compliant device and network location.
- Contact your Microsoft Entra ID administrator for specific policy requirements.

### Guest (B2B) access fails

**Symptom:** A guest user in the Microsoft Entra tenant can't access the remote MCP Server.

**Resolution:**

For guest access to work, the user must be:
1. Added to the Microsoft Entra tenant as a [guest user](/entra/external-id/what-is-b2b).
1. Added to the Azure DevOps organization with appropriate permissions.
1. Granted access to the specific projects and resources they need.

If either step is missing, access fails. Treat this issue the same as a standard Azure DevOps guest access problem.

### `AADSTS` error codes

**Symptom:** You see an error code starting with `AADSTS` (for example, `AADSTS50076`, `AADSTS700016`).

**Resolution:**

`AADSTS` errors are Microsoft Entra ID authentication errors, not MCP-specific issues. Common codes include:

| Error code | Meaning | Action |
|---|---|---|
| `AADSTS50076` | Multi-factor authentication required | Complete the MFA prompt |
| `AADSTS700016` | Application not found in tenant | Verify your tenant configuration |
| `AADSTS65001` | User or admin hasn't consented | Request admin consent for the application |
| `AADSTS50105` | User not assigned to the application | Contact your admin to assign access |

For a full list of error codes, see [Microsoft Entra authentication and authorization error codes](/entra/identity-platform/reference-error-codes).

## Server configuration issues

### Incorrect `mcp.json` configuration

**Symptom:** The remote MCP Server connects but tools don't load, or you get unexpected behavior.

**Resolution:**

Verify your `mcp.json` uses the correct format for the remote server:

- **Remote server** uses `"type": "http"` and `"url"`.
- **Local server** uses `"type": "stdio"`, `"command"`, and `"args"`.

Don't mix remote and local configuration formats. If you have both a remote and local server configured, ensure they use different server names:

```json
{
  "servers": {
    "ado-remote": {
      "url": "https://mcp.dev.azure.com/{organization}",
      "type": "http"
    },
    "ado-local": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@azure-devops/mcp", "{organization}"]
    }
  }
}
```

### Toolset or tool filtering not working

**Symptom:** You configure `X-MCP-Toolsets` or `X-MCP-Tools` headers, but the tool list doesn't match expectations.

**Resolution:**

- Don't combine `X-MCP-Toolsets` and `X-MCP-Tools` headers — they're mutually exclusive.
- Verify the toolset names are correct: `repos`, `wit`, `wiki`, `pipelines`, `work`, `testplan`.
- When using `X-MCP-Tools`, specify exact tool names separated by commas.
- Check for typos in header names — headers are case-sensitive.

```json
{
  "servers": {
    "ado-remote-mcp": {
      "url": "https://mcp.dev.azure.com/{organization}",
      "type": "http",
      "headers": {
        "X-MCP-Toolsets": "repos,wit"
      }
    }
  }
}
```

For the full list of available toolsets and tools, see [Available tools](remote-mcp-server.md#available-tools).

### Read-only mode not restricting writes

**Symptom:** You set `X-MCP-Readonly` but write operations are still available.

**Resolution:**

Verify the header value is the string `"true"`:

```json
"headers": {
  "X-MCP-Readonly": "true"
}
```

## Tool resolution errors

### Tools not appearing in the AI assistant

**Symptom:** After connecting the remote MCP Server, no Azure DevOps tools appear in your AI assistant.

**Resolution:**

1. Confirm the server status shows as connected in your IDE.
   - In VS Code, check the MCP server status in the Output panel (**View** > **Output** > select **GitHub Copilot** or **MCP** from the dropdown).
1. Reload the VS Code window (**Ctrl+Shift+P** > **Developer: Reload Window**).
1. Verify you're in **agent mode** in GitHub Copilot — MCP tools only appear in agent mode, not in chat mode.
1. Check that you haven't exceeded the 128-tool limit. If you have multiple MCP servers configured, the combined tool count might exceed this limit.

### Missing required parameter errors

**Symptom:** Tool calls fail with "missing required parameter" errors, typically for the project name.

**Resolution:**

This is the most commonly reported error and is expected behavior. Many tools require a project name or other context:

- Include the project name in your prompt: "List work items in the **Contoso** project."
- If you omitted the organization from your URL, include the organization in your prompt too.
- Some tools require specific parameters. Check the [Available tools](remote-mcp-server.md#available-tools) documentation for required parameters.

### Tool call fails with server error

**Symptom:** A tool call returns a server error after being invoked correctly.

**Resolution:**

- Verify the resource you're querying exists (for example, the work item ID, repository name, or pipeline ID is correct).
- Confirm you have permissions to access the resource.
- If the error persists, create an issue using the [Remote MCP Server issue template](https://github.com/microsoft/azure-devops-mcp/issues/new?template=remote-mcp-server-issue.md).

## Copilot integration problems

### AI assistant doesn't use MCP tools

**Symptom:** GitHub Copilot responds to your question but doesn't use Azure DevOps MCP tools to retrieve data.

**Resolution:**

1. Ensure you're using **agent mode** in GitHub Copilot. MCP tools aren't available in standard chat mode.
1. Be explicit in your prompt about what Azure DevOps data you need. For example, instead of "What's my sprint status?", try "Use Azure DevOps to get my current sprint work items."
1. Verify the MCP server shows as connected with a green status indicator.

### Stale or cached data returned

**Symptom:** The AI assistant returns outdated Azure DevOps data.

**Resolution:**

Add "Do not use previously fetched data" to your prompt to force a fresh query. AI assistants might cache tool results within a conversation session.

### Agent fails before tool call

**Symptom:** The AI assistant fails or errors out before invoking any MCP tool.

**Resolution:**

This issue is outside the Azure DevOps MCP boundary. The failure occurs in the AI assistant's orchestration layer:

- For GitHub Copilot issues, see [GitHub Copilot documentation](https://docs.github.com/copilot).
- Restart the AI assistant and try again.
- If the issue persists, report it to your AI assistant provider.

## Unsupported client errors

### Non-Microsoft clients can't authenticate

**Symptom:** Clients like Claude Desktop, Claude Code, Cursor, or Codex can't complete the OAuth handshake with the remote MCP Server.

**Resolution:**

This is a known platform limitation. Microsoft Entra ID doesn't currently support dynamic client registration, which these non-Microsoft clients require.

**Currently supported clients:**
- Visual Studio Code
- Visual Studio (2022 and later)

For non-Microsoft clients, use the [local Azure DevOps MCP Server](mcp-server-overview.md) with PAT or Azure CLI authentication instead.

## Diagnostic tips

### Enable debug logging in VS Code

To capture more detail when you're troubleshooting:

1. Open the Output panel in VS Code (**View** > **Output**).
1. Select **GitHub Copilot** or **MCP** from the output channel dropdown.
1. Look for connection status, authentication flow details, and error messages.

### Verify the connection

After setup, test the remote MCP Server with a simple query:

- "List the projects in my Azure DevOps organization."
- "Show my assigned work items."
- "What pull requests need my review?"

If these queries return correct data, the server is working properly.

## FAQs

### Can I use the remote MCP Server with a personal Microsoft account?

No. The remote MCP Server requires your Azure DevOps organization to be connected to Microsoft Entra ID. Personal Microsoft accounts (MSA) aren't supported.

### Can I use both remote and local MCP Servers at the same time?

Yes, but give them different server names in your `mcp.json`. Be aware that running both servers might contribute to the 128-tool limit. Consider using [toolset headers](remote-mcp-server.md#toolsets) to limit the remote server's tools.

### Why do I see different tools with the remote vs. local server?

The remote and local servers might be at different versions. The remote server is updated independently of the local npm package. Use the `X-MCP-Insiders` header to access the latest remote tools. For the local server, update the npm package to the latest version.

### Does the remote MCP Server work with Azure DevOps Server (on-premises)?

No. The remote MCP Server is available only for Azure DevOps Services (cloud). For Azure DevOps Server (on-premises), use the [local MCP Server](mcp-server-overview.md).

### What data does the remote MCP Server access?

The remote server accesses the same Azure DevOps data as the REST API, scoped to your permissions. It doesn't access data beyond what your Microsoft Entra identity is authorized to see.

### How do I report an issue with the remote MCP Server?

Create an issue using the [Remote MCP Server issue template](https://github.com/microsoft/azure-devops-mcp/issues/new?template=remote-mcp-server-issue.md) in the Azure DevOps MCP Server GitHub repository.

## Related content

- [Set up the remote Azure DevOps MCP Server (preview)](remote-mcp-server.md)
- [Azure DevOps MCP Server overview](mcp-server-overview.md)
- [Azure DevOps MCP Server GitHub repository](https://github.com/microsoft/azure-devops-mcp)
