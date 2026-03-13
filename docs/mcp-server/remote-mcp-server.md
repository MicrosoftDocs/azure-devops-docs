---
title: Set up the remote Azure DevOps MCP Server (preview)
titleSuffix: Azure DevOps Services
description: Learn how to configure the remote Azure DevOps MCP Server for AI-assisted development without local installation by using streamable HTTP transport.
ms.service: azure-devops
ms.collection: ce-skilling-ai-copilot
ai-usage: ai-assisted
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 03/13/2026
#customer intent: As a user, I want to set up the remote Azure DevOps MCP Server so I can use AI assistance with my Azure DevOps data without installing and running a local server.
---

# Set up the remote Azure DevOps MCP Server (preview)

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

> [!IMPORTANT]
> The remote Azure DevOps MCP Server is currently in public preview. Preview features might have limited functionality and can change before general availability.

The remote Azure DevOps MCP Server is a hosted version of the [Azure DevOps MCP Server](mcp-server-overview.md) that doesn't require a local installation. Instead of running the server on your machine, you connect your AI assistant directly to the Azure DevOps–hosted endpoint by using streamable HTTP transport.

The remote server provides the same capabilities as the local server, including access to work items, pull requests, pipelines, and more, while eliminating local setup complexity.

## Remote vs. local MCP Server

| Feature | Remote MCP Server (preview) | Local MCP Server |
|--------|-----------------------------|------------------|
| **Installation** | No installation required | Requires Node.js 20.0+ and `npx` |
| **Transport** | Streamable HTTP | Studio |
| **Authentication** | Microsoft Entra ID (OAuth) | Azure DevOps PAT or Microsoft Entra ID |
| **Hosting** | Azure DevOps–hosted service | Runs locally on your machine |
| **Configuration** | Minimal `mcp.json` | Environment-specific setup |
| **Status** | Public preview | Generally available |

## Prerequisites

| Category | Requirements |
|----------|-------------|
| **Azure DevOps** | An active [Azure DevOps organization](../organizations/accounts/create-organization.md) connected to [Microsoft Entra ID](/entra/fundamentals/whatis) |
| **Permissions** | Membership in the project and access to the resources you want to query |
| **Environment** | A supported AI assistant environment (see [Supported environments](#supported-environments)) |

## mcp.json configuration

```json
{
  "servers": {
    "ado-remote-mcp": {
      "url": "https://mcp.dev.azure.com/{organization}",
      "type": "http"
    }
  },
  "inputs": []
}
```

You can also omit the organization name from the URL. However, if you omit the organization name, you must provide it as context in each tool call.

```json
{
  "servers": {
    "ado-remote-mcp": {
      "url": "https://mcp.dev.azure.com/",
      "type": "http"
    }
  },
  "inputs": []
}
```

### Toolsets

Specify toolsets to restrict the tools available to the MCP server.

```json
{
  "servers": {
    "ado-remote-mcp": {
      "url": "https://mcp.dev.azure.com/{organization}",
      "type": "http",
      "headers": {
        "X-MCP-Toolsets": "repos,wiki,wit"
      }
    }
  },
  "inputs": []
}
```

| Toolset value | Included tools |
|---|---|
| `all` *(default)* | All tools from every toolset |
| `repos` | Repository and pull request tools (`repo_*`) |
| `wit` | Work item tools (`wit_*`) and `search_workitem` |
| `pipelines` | Pipeline and build tools (`pipelines_*`) |
| `wiki` | Wiki tools (`wiki_*`) and `search_wiki` |
| `work` | Iteration and capacity tools (`work_*`) |

### Read-only tools

Use the `X-MCP-Readonly` header to restrict the server to read-only operations. This restriction is useful when you want to prevent modifications to Azure DevOps resources.

```json
{
  "servers": {
    "ado-remote-mcp": {
      "url": "https://mcp.dev.azure.com/{organization}",
      "type": "http",
      "headers": {
        "X-MCP-Readonly": "true"
      }
    }
  },
  "inputs": []
}
```

### Combine toolsets and read-only filtering

```json
{
  "servers": {
    "ado-remote-mcp": {
      "url": "https://mcp.dev.azure.com/{organization}",
      "type": "http",
      "headers": {
        "X-MCP-Toolsets": "repos,wiki,wit",
        "X-MCP-Readonly": "true"
      }
    }
  },
  "inputs": []
}
```

## Available tools

> [!NOTE]
> This list might not always reflect the most recent tool updates. Test plan tools aren't yet available.

### Core tools
Core tools are always available.

| Tool | Description |
|---|---|
| `core_list_projects` | List projects in an organization |
| `core_list_project_teams` | List teams in a project |

### Repos

| Tool | Description | Read-only |
|---|---|:---:|
| `repo_list_repos_by_project` | List repositories in a project | ✅ |
| `repo_list_pull_requests_by_repo_or_project` | List pull requests | ✅ |
| `repo_list_branches_by_repo` | List branches | ✅ |
| `repo_list_my_branches_by_repo` | List branches created by the current user | ✅ |
| `repo_list_pull_request_threads` | List pull request comment threads | ✅ |
| `repo_list_pull_request_thread_comments` | List comments in a pull request thread | ✅ |
| `repo_list_pull_requests_by_commits` | Find pull requests by commit IDs | ✅ |
| `repo_get_repo_by_name_or_id` | Get repository details | ✅ |
| `repo_get_branch_by_name` | Get branch details | ✅ |
| `repo_get_pull_request_by_id` | Get a pull request | ✅ |
| `repo_search_commits` | Search commits | ✅ |
| `repo_create_pull_request` | Create a pull request | ❌ |
| `repo_create_branch` | Create a branch | ❌ |
| `repo_create_pull_request_thread` | Add a comment thread to a PR | ❌ |
| `repo_reply_to_comment` | Reply to a PR comment | ❌ |
| `repo_update_pull_request` | Update a pull request | ❌ |
| `repo_update_pull_request_reviewers` | Add or remove PR reviewers | ❌ |
| `repo_update_pull_request_thread` | Update a PR comment thread | ❌ |

### Wit

| Tool | Description | Read-only |
|---|---|:---:|
| `wit_list_backlogs` | List backlogs for a team | ✅ |
| `wit_list_backlog_work_items` | List work items in a backlog | ✅ |
| `wit_get_work_item` | Get a work item by ID | ✅ |
| `wit_get_work_items_batch_by_ids` | Get multiple work items by ID | ✅ |
| `wit_list_work_item_comments` | List comments on a work item | ✅ |
| `wit_list_work_item_revisions` | List revisions of a work item | ✅ |
| `wit_get_work_items_for_iteration` | List work items in an iteration | ✅ |
| `wit_my_work_items` | Get work items assigned to the current user | ✅ |
| `wit_get_work_item_type` | Get a work item type | ✅ |
| `wit_get_query` | Get a query by ID or path | ✅ |
| `wit_get_query_results_by_id` | Run a saved query | ✅ |
| `search_workitem` | Full-text work item search | ✅ |
| `wit_add_work_item_comment` | Add a comment to a work item | ❌ |
| `wit_update_work_item` | Update a work item | ❌ |
| `wit_create_work_item` | Create a work item | ❌ |
| `wit_update_work_items_batch` | Update work items in batch | ❌ |
| `wit_work_items_link` | Link work items together | ❌ |
| `wit_work_item_unlink` | Remove links from a work item | ❌ |
| `wit_add_child_work_items` | Create child work items | ❌ |
| `wit_link_work_item_to_pull_request` | Link a work item to a pull request | ❌ |
| `wit_add_artifact_link` | Add artifact links to a work item | ❌ |

### Pipelines

| Tool | Description | Read-only |
|---|---|:---:|
| `pipelines_get_build_definitions` | List build definitions | ✅ |
| `pipelines_get_build_definition_revisions` | List definition revisions | ✅ |
| `pipelines_get_builds` | List builds | ✅ |
| `pipelines_get_build_changes` | Get changes for a build | ✅ |
| `pipelines_get_build_status` | Get the status of a build | ✅ |
| `pipelines_get_build_log` | Get build logs | ✅ |
| `pipelines_get_build_log_by_id` | Get a specific build log | ✅ |
| `pipelines_get_run` | Get a pipeline run | ✅ |
| `pipelines_list_runs` | List pipeline runs | ✅ |
| `pipelines_list_artifacts` | List build artifacts | ✅ |
| `pipelines_download_artifact` | Download a build artifact | ✅ |
| `pipelines_update_build_stage` | Update a build stage | ❌ |
| `pipelines_create_pipeline` | Create a pipeline definition | ❌ |
| `pipelines_run_pipeline` | Trigger a pipeline run | ❌ |

### Wiki 

| Tool | Description | Read-only |
|---|---|:---:|
| `wiki_list_wikis` | List wikis in a project or organization. | ✅ |
| `wiki_get_wiki` | Get a wiki by identifier. | ✅ |
| `wiki_list_pages` | List pages in a wiki. | ✅ |
| `wiki_get_page` | Get page metadata. | ✅ |
| `wiki_get_page_content` | Get page content. | ✅ |
| `search_wiki` | Full-text wiki search. | ✅ |
| `wiki_create_or_update_page` | Create or update a wiki page. | ❌ |

### Work

| Tool | Description | Read-only |
|---|---|:---:|
| `work_list_team_iterations` | List iterations for a team. | ✅ |
| `work_list_iterations` | List all iterations in a project. | ✅ |
| `work_get_team_capacity` | Get team capacity for an iteration. | ✅ |
| `work_create_iterations` | Create iterations. | ❌ |
| `work_assign_iterations` | Assign iterations to a team. | ❌ |

## Supported environments
The remote Azure DevOps MCP Server requires your user account and Azure DevOps organization to connect to Microsoft Entra ID.

Not all MCP clients support Entra authentication by default. Some environments require extra steps to register the client application.

Currently supported environments include:

- Visual Studio Code
- Visual Studio
- Azure AI Foundry

### Visual Studio Code

To configure the remote MCP Server in Visual Studio Code:

1. Add a `.vscode/mcp.json` file to your repository with the [mcp.json configuration](#mcpjson-configuration) shown earlier.
1. Save the file.
1. Open GitHub Copilot in VS Code.
1. When prompted, authenticate by using your Microsoft Entra account and select your account.

After authentication completes, a list of available tools appears.

### Visual Studio (2022 and later)

Configure the remote MCP Server in Visual Studio by adding the server URL to your MCP settings. For more information, see [Use MCP servers in Visual Studio](/visualstudio/ide/mcp-servers).

## Verify the connection

After setup, verify the remote MCP Server is working by asking your AI assistant a question about your Azure DevOps data.

Examples:

- "List the projects in my Azure DevOps organization."
- "Show my assigned work items."
- "What pull requests require my review?"

If the AI assistant returns results from your Azure DevOps organization, the remote MCP Server is configured correctly.

## Troubleshooting

| Issue | Resolution |
|------|------------|
| **Authentication fails** | Verify your Microsoft Entra credentials and confirm you have access to the Azure DevOps organization. |
| **Server not found** | Check the server URL format: `https://mcp.dev.azure.com/{organization}`. |
| **No data returned** | Confirm you have appropriate permissions for the project or resources being queried. |
| **Preview not available** | The preview is rolling out gradually. Check back later or contact your organization administrator. |

For support, you can create an issue in the [local MCP Server](https://github.com/microsoft/azure-devops-mcp/issues) repo. Be sure to use the **Remote** issue template.

## FAQ

### How do I add the MCP Server to GitHub Copilot CLI?

GitHub Copilot CLI requires a **Client ID** when configuring the Azure DevOps MCP Server. This Client ID comes from an application registration in Microsoft Entra ID. The registration represents the client application that authenticates with Azure DevOps through Microsoft Entra.

Register an application in Microsoft Entra ID and use the resulting Client ID when configuring the MCP server connection.

### What about other clients like Claude Desktop, Claude Code, or Cursor?

To use clients other than Visual Studio or Visual Studio Code, the client must support Microsoft Entra authentication. You also need to register the client application in Microsoft Entra ID so it has a valid Client ID for authentication by using the Azure DevOps MCP Server.

### Does the Azure DevOps MCP Server support AgentId?

The server doesn't support AgentId yet.

## Related content

- [Azure DevOps MCP Server overview](mcp-server-overview.md)
- [Azure DevOps MCP Server GitHub repository](https://github.com/microsoft/azure-devops-mcp)

