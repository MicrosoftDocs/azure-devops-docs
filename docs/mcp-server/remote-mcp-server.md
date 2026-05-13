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
ms.date: 05/05/2026
#customer intent: As a user, I want to set up the remote Azure DevOps MCP Server so I can use AI assistance with my Azure DevOps data without installing and running a local server.
---

# Set up the remote Azure DevOps MCP Server (preview)

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

> [!IMPORTANT]
> The remote Azure DevOps MCP Server is currently in public preview. Preview features might have limited functionality and can change before general availability.<br>
>
> <u>**Support**</u><br>
> - Support is currently limited to Issues submitted through the local MCP Server repository.<br>
> - To submit a support request, create an issue using the **[Remote MCP Server issue template](https://github.com/microsoft/azure-devops-mcp/issues/new?template=remote-mcp-server-issue.md)**.

The remote Azure DevOps MCP Server is a hosted version of the [Azure DevOps MCP Server](mcp-server-overview.md) that doesn't require a local installation. Instead of running the server on your machine, you connect your AI assistant directly to the Azure DevOps–hosted endpoint by using streamable HTTP transport.

The remote server provides the same capabilities as the local server, including access to work items, pull requests, pipelines, and more, while eliminating local setup complexity.

## Remote vs. local MCP Server

| Feature | Remote MCP Server (preview) | Local MCP Server |
|--------|-----------------------------|------------------|
| **Installation** | No installation required | Requires Node.js 20.0+ and `npx` |
| **Transport** | Streamable HTTP | `stdio` |
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

Specify toolsets to restrict the tools available to the MCP server. Shouldn't be combined with `X-MCP-Tools`.

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
| `wiki` | Wiki tools (`wiki`, `wiki_upsert_page`) and `search_wiki` |
| `work` | Iteration and capacity tools (`work_*`) |
| `testplan` | Test plan tools (`testplan_*`) |

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

### Individual tools

Use the `X-MCP-Tools` header to enable only specific tools. Shouldn't be combined with `X-MCP-Toolsets`.

```json
{
  "servers": {
    "ado-remote-mcp": {
      "url": "https://mcp.dev.azure.com/{organization}",
      "type": "http",
      "headers": {
        "X-MCP-Tools": "core_list_projects, wit_my_work_items, wit_get_work_items_batch_by_ids"
      }
    }
  },
  "inputs": []
}
```

### Insiders

As we experiment and introduce new tools and updates to existing ones, you can get early access to these changes by using the `X-MCP-Insiders` header.

```json
{
  "servers": {
    "ado-remote-mcp": {
      "url": "https://mcp.dev.azure.com/{organization}",
      "type": "http",
      "headers": {
        "X-MCP-Insiders": "true"
      }
    }
  },
  "inputs": []
}
```

## Available tools

> [!NOTE]
> This list might not always reflect the most recent tool updates.

### Core tools

Core tools are always available.

| Tool | Description |
|---|---|
| `core_list_orgs` | List Azure DevOps organizations the authenticated user has access to |
| `core_list_projects` | List projects in an organization |
| `core_list_project_teams` | List teams in a project |

### Work

| Tool | Description | Read-only |
|---|---|:---:|
| `work_list_team_iterations` | List iterations for a team. | ✅ |
| `work_list_iterations` | List all iterations in a project. | ✅ |
| `work_get_team_capacity` | Get team capacity for an iteration. | ✅ |
| `work_create_iterations` | Create iterations. | ❌ |
| `work_assign_iterations` | Assign iterations to a team. | ❌ |
| `work_update_team_capacity` | Update the team capacity of a team member for a specific iteration. | ❌ |
| `work_get_team_settings` | Get team settings including default iteration, backlog iteration, and default area path. | ✅ |
| `work_get_iteration_capacities` | Get an iteration's capacity for all teams in the iteration and project. | ✅ |

### Repos

The repository tools are consolidated into grouped dispatchers using an `action` parameter, following the same pattern as the wiki tools. Use `repo_create_branch` and `repo_search_commits` directly—they weren't consolidated.

| Tool | Action | Description | Read-only |
|---|---|---|:---:|
| `repo_pull_request` | `get` | Get a pull request by ID | ✅ |
| `repo_pull_request` | `list` | List pull requests in a repository or project | ✅ |
| `repo_pull_request` | `list_by_commits` | Find pull requests that contain specific commit IDs | ✅ |
| `repo_pull_request_thread` | `list` | List comment threads on a pull request | ✅ |
| `repo_pull_request_thread` | `list_comments` | List comments in a specific thread | ✅ |
| `repo_repository` | `get` | Get a repository by name or ID | ✅ |
| `repo_repository` | `list` | List repositories in a project | ✅ |
| `repo_branch` | `get` | Get a branch by name | ✅ |
| `repo_branch` | `list` | List branches in a repository | ✅ |
| `repo_branch` | `list_mine` | List branches the current user has pushed to | ✅ |
| `repo_file` | `get_content` | Get the text content of a file at a specific branch, tag, or commit | ✅ |
| `repo_file` | `list_directory` | List files and folders in a directory, with optional recursive listing | ✅ |
| `repo_search_commits` | | Search commits with filtering by text, author, date range, and more | ✅ |
| `repo_pull_request_write` | `create` | Create a pull request | ❌ |
| `repo_pull_request_write` | `update` | Update a pull request, including setting autocomplete | ❌ |
| `repo_pull_request_write` | `update_reviewers` | Add or remove pull request reviewers | ❌ |
| `repo_pull_request_write` | `vote` | Cast a vote on a pull request | ❌ |
| `repo_pull_request_thread_write` | `create` | Create a new comment thread on a pull request | ❌ |
| `repo_pull_request_thread_write` | `reply` | Reply to a comment in a thread | ❌ |
| `repo_pull_request_thread_write` | `update_status` | Update the status of a comment thread | ❌ |
| `repo_create_branch` |  | Create a branch | ❌ |

### Wit

The work item tools are consolidated into grouped dispatchers using an `action` parameter.

| Tool | Action | Description | Read-only |
|---|---|---|:---:|
| `wit_work_item` | `get` | Get a work item by ID | ✅ |
| `wit_work_item` | `get_batch` | Get multiple work items by IDs | ✅ |
| `wit_work_item` | `list_comments` | List comments on a work item | ✅ |
| `wit_work_item` | `my` | Get work items relevant to the authenticated user | ✅ |
| `wit_work_item` | `list_revisions` | List revisions of a work item | ✅ |
| `wit_work_item` | `list_for_iteration` | List work items for a team iteration | ✅ |
| `wit_work_item` | `get_type` | Get metadata for a work item type | ✅ |
| `wit_query` | `get` | Get a query by ID or path | ✅ |
| `wit_query` | `get_results` | Run a saved query | ✅ |
| `wit_backlog` | `list` | List backlog levels for a team | ✅ |
| `wit_backlog` | `list_work_items` | List work items in a specific backlog level | ✅ |
| `search_workitem` | | Full-text work item search | ✅ |
| `wit_work_item_write` | `create` | Create a new work item | ❌ |
| `wit_work_item_write` | `update` | Update fields on a work item | ❌ |
| `wit_work_item_write` | `update_batch` | Update multiple work items in one call | ❌ |
| `wit_work_item_write` | `add_child` | Create child work items under a parent | ❌ |
| `wit_work_item_comment_write` | `add` | Add a comment to a work item | ❌ |
| `wit_work_item_comment_write` | `update` | Update an existing comment on a work item | ❌ |
| `wit_work_item_link_write` | `link` | Link two work items | ❌ |
| `wit_work_item_link_write` | `unlink` | Remove links from a work item | ❌ |
| `wit_work_item_link_write` | `link_to_pull_request` | Link a work item to a pull request | ❌ |
| `wit_work_item_link_write` | `add_artifact_link` | Add a repository, branch, commit, or build artifact link to a work item | ❌ |
| `wit_work_item_attachment` |  | Download a work item attachment by ID; returns base64-encoded content with filename and MIME type | ✅ |

> [!NOTE]
> `wit_query_by_wiql` is currently available only to MCP Insiders by using the `X-MCP-Insiders` header.

### Pipelines

The pipeline tools are consolidated into grouped dispatchers using an `action` parameter.

| Tool | Action | Description | Read-only |
|---|---|---|:---:|
| `pipelines_build` | `list` | List builds with optional filters | ✅ |
| `pipelines_build` | `get_status` | Get status, issues, and report metadata for a build | ✅ |
| `pipelines_build` | `get_changes` | Get commits and work items associated with a build | ✅ |
| `pipelines_build_log` | `list` | List available logs for a build | ✅ |
| `pipelines_build_log` | `get_content` | Get the text content of a specific log by ID | ✅ |
| `pipelines_definition` | `list` | List pipeline definitions with optional filters | ✅ |
| `pipelines_definition` | `list_revisions` | List revision history for a pipeline definition | ✅ |
| `pipelines_run` | `get` | Get a single pipeline run | ✅ |
| `pipelines_run` | `list` | List runs for a pipeline | ✅ |
| `pipelines_artifact` | `list` | List artifacts for a build | ✅ |
| `pipelines_artifact` | `download` | Download a named build artifact | ✅ |
| `pipelines_write` | `run_pipeline` | Queue a new pipeline run | ❌ |
| `pipelines_write` | `create_pipeline` | Create a new YAML pipeline definition | ❌ |
| `pipelines_write` | `update_build_stage` | Cancel, retry, or run a stage on an in-flight build | ❌ |

### Wiki

The wiki read operations are consolidated into a single `wiki` tool. Use the `action` parameter to select the operation.

| Tool | Action | Description | Read-only |
|---|---|---|:---:|
| `wiki` | `list_wikis` | List wikis in a project or organization | ✅ |
| `wiki` | `get_wiki` | Get a wiki by identifier | ✅ |
| `wiki` | `list_pages` | List pages in a wiki | ✅ |
| `wiki` | `get_page` | Get page content and metadata | ✅ |
| `search_wiki` |  | Full-text wiki search | ✅ |
| `wiki_upsert_page` |  | Create or update a wiki page | ❌ |

### Test plans

The test plan tools are consolidated into grouped dispatchers using an `action` parameter.

| Tool | Action | Description | Read-only |
|---|---|---|:---:|
| `testplan` | `list_plans` | List test plans in a project | ✅ |
| `testplan` | `list_suites` | List test suites under a test plan | ✅ |
| `testplan` | `list_cases` | List test cases under a test suite | ✅ |
| `testplan_show_test_results_from_build_id` |  | Get test results from a build | ✅ |
| `testplan_test_plan_write` | `create` | Create a test plan | ❌ |
| `testplan_test_suite_write` | `create` | Create a test suite | ❌ |
| `testplan_test_suite_write` | `add_test_cases` | Add test cases to a suite | ❌ |
| `testplan_test_case_write` | `create` | Create a test case | ❌ |
| `testplan_test_case_write` | `update_steps` | Update test case steps | ❌ |

### Search

| Tool | Description | Read-only |
|---|---|:---:|
| `search_code` | Full-text code search. | ✅ |
| `search_wiki` | Full-text wiki search. | ✅ |
| `search_workitem` | Full-text work item search. | ✅ |

## Supported environments

The remote Azure DevOps MCP Server requires your user account and Azure DevOps organization to connect to Microsoft Entra ID.

Not all MCP clients support Microsoft Entra authentication by default. Some environments require extra steps to register the client application.

Currently supported environments include:

- Visual Studio Code
- Visual Studio

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

For support, you can create an issue in the [local MCP Server](https://github.com/microsoft/azure-devops-mcp/issues/new?template=remote-mcp-server-issue.md) repo. Be sure to use the **Remote** issue template.

## FAQ

### What about other clients like GitHub Copilot CLI, Claude Desktop, Claude Code, CodeX, or Cursor?

Other client tools such as CodeX, Claude Desktop, Claude Code, and ChatGPT require dynamic registration of an OAuth Client ID in Microsoft Entra before they can be used with the MCP server. We're working closely with the Microsoft Entra team to enable this capability. For now, only Visual Studio and Visual Studio Code are supported.

### What services can use Azure DevOps MCP Server?

Support for other services, including Azure AI Foundry, Microsoft 365 Copilot, and Copilot Studio, isn't yet available but will be added soon.

### Does the Azure DevOps MCP Server support AgentId?

AgentId support is coming soon.

## Related content

- [Azure DevOps MCP Server overview](mcp-server-overview.md)
- [Azure DevOps MCP Server GitHub repository](https://github.com/microsoft/azure-devops-mcp)
