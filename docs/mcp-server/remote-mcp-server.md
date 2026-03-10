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

## Mcp.json configuration

### Basic setup

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
You can also remove the organization name. But this means you will need to pass the organization name as context to each of your tool calls.

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
| `all` *(default)* | Every tool from all toolsets |
| `repos` | Repository and pull request tools (`repo_*`) |
| `wit` | Work item tools (`wit_*`) + `search_workitem` |
| `pipelines` | Pipeline and build tools (`pipelines_*`) |
| `wiki` | Wiki tools (`wiki_*`) + `search_wiki` |
| `work` | Iteration and capacity tools (`work_*`) |

### Readonly tools

Use the `X-MCP-Readonly` header when you prefer not to encode readonly in the URL, or when you want to combine readonly with multiple toolsets via the `X-MCP-Toolsets` header.

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

Combined toolsets and readonly filtering

```json
{
  "servers": {
    "ado-remote-mcp": {
      "url": "https://mcp.dev.azure.com/{organization}",
      "type": "http",
      "headers": {
        "X-MCP-Toolsets": "repos,wiki",
        "X-MCP-Readonly": "true"
      }
    }
  },
  "inputs": []
}
```

## Available tools

> [!NOTE]
> This may not be the most recent and updated list.

#### Core tools (always available)

| Tool | Description |
|---|---|
| `core_list_projects` | List projects in an organization |
| `core_list_project_teams` | List teams for a project |

#### `repos` toolset

| Tool | Description | Read-only |
|---|---|:---:|
| `repo_list_repos_by_project` | List repositories in a project | ✅ |
| `repo_list_pull_requests_by_repo_or_project` | List pull requests | ✅ |
| `repo_list_branches_by_repo` | List branches | ✅ |
| `repo_list_my_branches_by_repo` | List my branches | ✅ |
| `repo_list_pull_request_threads` | List PR comment threads | ✅ |
| `repo_list_pull_request_thread_comments` | List comments in a PR thread | ✅ |
| `repo_list_pull_requests_by_commits` | Find PRs by commit IDs | ✅ |
| `repo_get_repo_by_name_or_id` | Get a repository | ✅ |
| `repo_get_branch_by_name` | Get a branch | ✅ |
| `repo_get_pull_request_by_id` | Get a pull request | ✅ |
| `repo_search_commits` | Search commits | ✅ |
| `repo_create_pull_request` | Create a pull request | ❌ |
| `repo_create_branch` | Create a branch | ❌ |
| `repo_create_pull_request_thread` | Add a comment thread to a PR | ❌ |
| `repo_reply_to_comment` | Reply to a PR comment | ❌ |
| `repo_update_pull_request` | Update a pull request | ❌ |
| `repo_update_pull_request_reviewers` | Add/remove PR reviewers | ❌ |
| `repo_update_pull_request_thread` | Update a PR comment thread | ❌ |

#### `wit` toolset

| Tool | Description | Read-only |
|---|---|:---:|
| `wit_list_backlogs` | List backlogs for a team | ✅ |
| `wit_list_backlog_work_items` | List work items on a backlog | ✅ |
| `wit_get_work_item` | Get a work item by ID | ✅ |
| `wit_get_work_items_batch_by_ids` | Get work items by IDs | ✅ |
| `wit_list_work_item_comments` | List comments on a work item | ✅ |
| `wit_list_work_item_revisions` | List revisions of a work item | ✅ |
| `wit_get_work_items_for_iteration` | List work items in an iteration | ✅ |
| `wit_my_work_items` | Get work items for the current user | ✅ |
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
| `wit_link_work_item_to_pull_request` | Link a work item to a PR | ❌ |
| `wit_add_artifact_link` | Add artifact links to a work item | ❌ |

#### `pipelines` toolset

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

#### `wiki` toolset

| Tool | Description | Read-only |
|---|---|:---:|
| `wiki_list_wikis` | List wikis in a project/Organization | ✅ |
| `wiki_get_wiki` | Get a wiki by identifier | ✅ |
| `wiki_list_pages` | List pages in a wiki | ✅ |
| `wiki_get_page` | Get page metadata | ✅ |
| `wiki_get_page_content` | Get page content | ✅ |
| `search_wiki` | Full-text wiki search | ✅ |
| `wiki_create_or_update_page` | Create or update a wiki page | ❌ |

#### `work` toolset

| Tool | Description | Read-only |
|---|---|:---:|
| `work_list_team_iterations` | List iterations for a team | ✅ |
| `work_list_iterations` | List all iterations in a project | ✅ |
| `work_get_team_capacity` | Get team capacity for an iteration | ✅ |
| `work_create_iterations` | Create iterations | ❌ |
| `work_assign_iterations` | Assign iterations to a team | ❌ |

> [!NOTE]
> The remote MCP Server preview is being rolled out progressively. If you don't see the option, it might not be available for your organization yet.

## Configure your AI assistant

The remote MCP Server uses a streamable HTTP endpoint. Add the following configuration to your AI assistant's MCP settings.

## Supported environments

The remote Azure DevOps MCP Server requires your user account and organization to be tied to Entra. However, Entra is not supported by default by all clients and therefore extra steps are required to register those clients. By default, Visual Studio Code, Visual Studio, and GitHub Copilot CLI are supported.

We will provide more details on Entra client app registration soon.

### Visual Studio Code

Add the remote MCP Server to your VS Code settings.

1. Add `.vscode\mcp.json` to your repos
2. Add desired configuration as noted above
3. Save the `mcp.json`
4. Start
5. You will be prompted to authenticate to your Entra tenant
6. Select your account

One you select your account you will be logged in and you should see a list of available tools.

### Visual Studio (2022 and later)

Configure the remote MCP Server in Visual Studio by adding the server URL to your MCP settings. For more information, see [Use MCP servers in Visual Studio](/visualstudio/ide/mcp-servers).

### GitHub Copilot CLI

Configure the remote MCP Server for use with GitHub Copilot CLI.

### Foundry

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
