---
title: Set up the remote Azure DevOps MCP Server
titleSuffix: Azure DevOps Services
description: Learn how to configure the remote Azure DevOps MCP Server for AI-assisted development without local installation by using streamable HTTP transport.
ms.service: azure-devops
ms.collection: ce-skilling-ai-copilot
ai-usage: ai-assisted
ms.custom: copilot-scenario-highlight
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 08/03/2026
#customer intent: As a user, I want to set up the remote Azure DevOps MCP Server so I can use AI assistance with my Azure DevOps data without installing and running a local server.
---

# Set up the remote Azure DevOps MCP Server

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

The remote Azure DevOps MCP Server is a hosted version of the [Azure DevOps MCP Server](mcp-server-overview.md) that doesn't require a local installation. Instead of running the server on your machine, you connect your AI assistant directly to the Azure DevOps–hosted endpoint by using streamable HTTP transport.

The remote server provides the same capabilities as the local server, including access to work items, pull requests, pipelines, and more, while eliminating local setup complexity.

## Choose remote first

Use the **remote MCP Server** when your environment supports it. The remote server is the recommended option because Azure DevOps hosts and updates it, and you don't need to install Node.js or manage a local server process.

Use the **local MCP Server** when your client can't authenticate to the remote server with Microsoft Entra ID. This limitation currently applies to clients such as Claude Desktop, Claude Code, Cursor, and Codex. For local setup instructions, see [Enable AI assistance with the Azure DevOps MCP Server](mcp-server-overview.md#install-the-local-azure-devops-mcp-server).

| Feature | Remote MCP Server | Local MCP Server |
|--------|-------------------|------------------|
| **Installation** | No installation required | Requires Node.js 20.0+ and `npx` |
| **Transport** | Streamable HTTP | `stdio` |
| **Authentication** | Microsoft Entra ID (OAuth) | Azure DevOps PAT or Microsoft Entra ID |
| **Hosting** | Azure DevOps–hosted service | Runs locally on your machine |
| **Configuration** | Minimal `mcp.json` | Environment-specific setup |

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
| `all` *(default)* | All tools except toolsets that require explicit opt-in, such as `elm` |
| `repos` | Repository and pull request tools |
| `advsec` | Advanced Security alert tools |
| `wit` | Work item tools and `search_workitem` |
| `pipelines` | Pipeline and build tools |
| `wiki` | Wiki tools and `search_wiki` |
| `work` | Iteration and capacity tools |
| `testplan` | Test plan tools |
| `elm` | Enterprise Live Migration tools (private preview; explicit opt-in) |

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

Specify tool names that appear in the [available tools](#available-tools) list. For consolidated tools such as `wit_work_item`, choose the operation by using the tool's `action` parameter when you call it.

```json
{
  "servers": {
    "ado-remote-mcp": {
      "url": "https://mcp.dev.azure.com/{organization}",
      "type": "http",
      "headers": {
        "X-MCP-Tools": "core_list_projects, wit_work_item"
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

Core tools are always available unless noted otherwise.

| Tool | Description |
|---|---|
| `core_list_orgs` | List Azure DevOps organizations the authenticated user has access to |
| `core_list_projects` | List projects in an organization |
| `core_list_project_teams` | List teams in a project |
| `core_list_group_members` | List direct members and child groups of an Azure DevOps group |

> [!NOTE]
> Only MCP Insiders can use `core_list_group_members` by using the `X-MCP-Insiders` header.

### Work

The work tools are consolidated into grouped dispatchers using an `action` parameter.

| Tool | Action | Description | Read-only |
|---|---|---|:---:|
| `work` | `list_iterations` | List all iterations in a project | ✅ |
| `work` | `list_team_iterations` | List iterations assigned to a team | ✅ |
| `work` | `get_team_settings` | Get team settings including default iteration, backlog iteration, and default area path | ✅ |
| `work` | `get_team_capacity` | Get team capacity for an iteration | ✅ |
| `work` | `get_iteration_capacities` | Get an iteration's capacity for all teams in the iteration and project | ✅ |
| `work_iteration_write` | `create` | Create iterations | ❌ |
| `work_iteration_write` | `assign` | Assign iterations to a team | ❌ |
| `work_capacity_write` | `update` | Update the team capacity of a team member for a specific iteration | ❌ |

### Repos

The repository tools are consolidated into grouped dispatchers using an `action` parameter.

| Tool | Action | Description | Read-only |
|---|---|---|:---:|
| `repo_pull_request` | `get` | Get a pull request by ID | ✅ |
| `repo_pull_request` | `list` | List pull requests in a repository or project | ✅ |
| `repo_pull_request` | `list_by_commits` | Find pull requests that contain specific commit IDs | ✅ |
| `repo_pull_request` | `get_changes` | Get file changes and optional line-by-line diffs for a pull request iteration | ✅ |
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
| `search_code` | | Full-text code search | ✅ |
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
| `wit_query` | `search` | Search queries by name | ✅ |
| `wit_query` | `list` | List root query folders and their children | ✅ |
| `wit_query_by_wiql` | | Run a WIQL query and return matching work items | ✅ |
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
| `wit_work_item_link_write` | `add_artifact_link` | Add a repository, branch, commit, build, or wiki artifact link to a work item | ❌ |
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
| `testplan_test_run` | `get_results` | Get results for a test run with optional detail and outcome filters | ✅ |
| `testplan_test_plan_write` | `create` | Create a test plan | ❌ |
| `testplan_test_suite_write` | `create` | Create a test suite | ❌ |
| `testplan_test_suite_write` | `add_test_cases` | Add test cases to a suite | ❌ |
| `testplan_test_case_write` | `create` | Create a test case | ❌ |
| `testplan_test_case_write` | `update_steps` | Update test case steps | ❌ |
| `testplan_test_run_write` | `create_run` | Create a test run for manual test execution | ❌ |
| `testplan_test_run_write` | `update_results` | Update outcomes and details for test results in a run | ❌ |
| `testplan_test_run_write` | `complete_run` | Complete or abort a test run based on its results | ❌ |
| `testplan_test_run_write` | `update_test_point_outcome` | Update or reset outcomes for test points | ❌ |

### Advanced Security

The Advanced Security tools are consolidated into a grouped dispatcher using an `action` parameter.

| Tool | Action | Description | Read-only |
|---|---|---|:---:|
| `advsec_alerts` | `list` | List Advanced Security alerts for a repository with optional filters | ✅ |
| `advsec_alerts` | `get` | Get an Advanced Security alert by ID | ✅ |

### Enterprise Live Migration (preview)

The Enterprise Live Migration tools use an `action` parameter to group and dispatch tasks. [Learn more](../repos/enterprise-live-migrations/overview.md) about the Enterprise Live Migration preview.

> [!IMPORTANT]
> ELM support in the remote Azure DevOps MCP Server is currently in **preview**. These tools require your organization to have access to the ELM limited public preview. If you need access, refer to the [Enterprise Live Migrations overview](../repos/enterprise-live-migrations/overview.md) for more information.

| Tool | Action | Description | Read-only |
|---|---|---|:---:|
| `enterprise_live_migration` | `list` | List migrations for the organization; optional project filter and includeAllMigrations flag | ✅ |
| `enterprise_live_migration` | `get` | Get migration status for a repository | ✅ |
| `enterprise_live_migration` | `get_cutover_review` | Get failed or blocked items before cutover | ✅ |
| `enterprise_live_migration` | `get_device_flow_config` | Get GitHub App device flow config | ✅ |
| `enterprise_live_migration` | `list_pipelines` | List pipelines and rewiring status | ✅ |
| `enterprise_live_migration_write` | `create` | Create a new migration | ❌ |
| `enterprise_live_migration_write` | `pause` | Pause an active migration | ❌ |
| `enterprise_live_migration_write` | `resume` | Resume a paused migration | ❌ |
| `enterprise_live_migration_write` | `cutover_set` | Schedule a cutover date | ❌ |
| `enterprise_live_migration_write` | `cutover_cancel` | Cancel a scheduled cutover | ❌ |
| `enterprise_live_migration_write` | `approve_cutover` | Accept failures and proceed with cutover | ❌ |
| `enterprise_live_migration_write` | `abandon` | Permanently delete a migration | ❌ |
| `enterprise_live_migration_pipelines_write` | `submit` | Submit pipelines for rewiring | ❌ |
| `enterprise_live_migration_pipelines_write` | `update` | Update pipeline rewiring config | ❌ |
| `enterprise_live_migration_pipelines_write` | `delete` | Delete all pipeline clones for a terminal migration | ❌ |

The Enterprise Live Migration tools are disabled by default. Because ELM support in the remote MCP Server is in **preview**, they require your organization to have access to the ELM limited public preview. To enable the ELM tools, use the `X-MCP-Toolsets` header with the `elm` value:

```json
{
  "servers": {
    "ado-remote-mcp": {
      "url": "https://mcp.dev.azure.com/{organization}",
      "type": "http",
      "headers": {
        "X-MCP-Toolsets": "elm"
      }
    }
  },
  "inputs": []
}
```

## Supported environments

The remote Azure DevOps MCP Server requires your user account and Azure DevOps organization to connect to Microsoft Entra ID.

Not all MCP clients support Microsoft Entra authentication by default. Some environments require extra steps to register the client application.

Supported environments include:

- Visual Studio Code
- Visual Studio
- Microsoft Foundry
- Microsoft Copilot Studio
- GitHub Copilot

> [!IMPORTANT]
> Claude Desktop, Claude Code, Cursor, and Codex don't currently support the Microsoft Entra authentication flow required by the remote Azure DevOps MCP Server. Use the [local MCP Server](mcp-server-overview.md#install-the-local-azure-devops-mcp-server) with these clients.

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

<a id="use-ai-assistance"></a>

## Use AI to validate and troubleshoot remote MCP setup

The following example prompts for Copilot Chat help you choose the right MCP approach, configure and validate remote setup, improve day-to-day usage prompts, and troubleshoot failures when needed. Copy and paste these prompts into Copilot Chat, and replace placeholders with your actual organization, client, and error details.

| Task | Example prompt |
|------|----------------|
| Choose remote vs local | `For my environment and client tools, help me decide whether to use the remote Azure DevOps MCP Server or the local server, and explain the tradeoffs.` |
| Build a least-privilege config | `Generate a remote mcp.json configuration for organization <contoso> that uses only the needed toolsets and read-only mode.` |
| Validate `mcp.json` setup | `Review this remote Azure DevOps MCP server configuration and tell me whether anything is missing or incorrect for Visual Studio Code.` |
| Verify authentication assumptions | `Help me verify whether this remote MCP setup can authenticate with Microsoft Entra ID for organization <contoso>.` |
| Improve query prompts for daily work | `Give me better prompt wording to reliably fetch fresh Azure DevOps data from remote MCP for project <project-name>, including how to avoid stale results.` |
| Diagnose Connection Refused | `I'm getting Connection Refused when connecting to https://mcp.dev.azure.com/<organization>. Give me step-by-step network, proxy, and firewall checks to fix it.` |
| Diagnose missing data | `The remote MCP server connects, but queries return no data. Help me determine whether this is a permissions issue or missing project context.` |
| Debug tool filtering headers | `Check my X-MCP-Toolsets and X-MCP-Tools header configuration and explain why expected tools are not appearing.` |

*Copilot is powered by AI, so surprises and mistakes are possible. For more information, see [Copilot general use FAQs](https://aka.ms/copilot-general-use-faqs).*

## Troubleshooting

| Issue | Resolution |
|------|------------|
| **Authentication fails** | Verify your Microsoft Entra credentials and confirm you have access to the Azure DevOps organization. |
| **Server not found** | Check the server URL format: `https://mcp.dev.azure.com/{organization}`. |
| **Connection Refused** | Confirm your network allows outbound HTTPS to `mcp.dev.azure.com`. If you're on a corporate proxy or firewall, ask your administrator to allow-list the endpoint and retry without VPN to isolate network path issues. |
| **No data returned** | Confirm you have appropriate permissions for the project or resources being queried. |
| **ELM tools not available after setting `X-MCP-Toolsets: elm`** | ELM support in the remote MCP Server is in private preview and not enabled for all organizations. Setting `X-MCP-Toolsets: elm` is necessary but not sufficient—your organization must also be enrolled in the ELM private preview. Contact your organization administrator or see the [Enterprise Live Migrations overview](../repos/enterprise-live-migrations/overview.md) to request access. |

For support, you can create an issue in the [local MCP Server](https://github.com/microsoft/azure-devops-mcp/issues/new?template=remote-mcp-server-issue.md) repo. Be sure to use the **Remote** issue template.

## FAQ

### What about other clients like Claude Desktop, Claude Code, Codex, or Cursor?

Claude Desktop, Claude Code, Codex, and Cursor require dynamic registration of an OAuth client ID in Microsoft Entra ID before they can use the remote MCP Server. Microsoft Entra ID doesn't currently support the dynamic client registration flow these clients require. Use the [local MCP Server](mcp-server-overview.md#install-the-local-azure-devops-mcp-server) with these clients.

## Related content

- [Azure DevOps MCP Server overview](mcp-server-overview.md)
- [Azure DevOps MCP Server GitHub repository](https://github.com/microsoft/azure-devops-mcp)
