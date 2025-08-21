---
title: Azure DevOps MCP Server overview
titleSuffix: Azure Boards
description: Learn about Azure DevOps Model Context Protocol (MCP) Server, which enhances your AI assistant with real-time Azure DevOps context for smarter, more accurate project insights and decision-making capabilities.
ms.service: azure-devops-boards
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 08/21/2025
#customer intent: As a project member, I want to understand what the Azure DevOps MCP Server is and how it can enhance my AI assistant with real-time Azure DevOps context to improve my productivity and decision-making.
---

# About Azure DevOps MCP Server

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Consider asking your AI assistant "Get my current sprint work items, then identify which ones might be at risk" and getting instant access to your actual Azure DevOps data. The Azure DevOps MCP Server provides your AI assistant with secure access to work items, pull requests, builds, test plans, and documentation from your Azure DevOps organization.

Unlike cloud-based solutions that require sending your data externally, the Azure DevOps MCP Server runs locally within your secure environment, ensuring your sensitive project information never leaves your network while still delivering enterprise-grade AI capabilities.



## Why use Azure DevOps MCP Server?

Traditional AI assistants lack context about your specific projects, work items, and team processes. They can help with generic coding questions but can't answer "What's blocking our current sprint?" or "Which pull requests need my review?" The Azure DevOps MCP Server bridges this gap by connecting your AI assistant directly to your Azure DevOps data.

### Key benefits

**Contextual intelligence**
- Get answers based on your actual project data, not generic responses
- Ask natural language questions about your work items, sprints, and releases
- Receive insights that understand your team's specific processes and terminology

**Secure and private**
- No data leaves your environment - everything runs locally
- No external API calls that expose sensitive project information
- Full control over what data your AI assistant can access

**Seamless integration**
- Works with your existing AI coding environments
- No need to switch between Azure DevOps web interface and your development tools
- Natural conversation flow without breaking your development workflow

**Time savings**
- Eliminate context switching between tools
- Get instant answers without navigating through Azure DevOps web interface
- Automate routine project management tasks through natural language

## What does MCP Server enable?

The Azure DevOps MCP Server provides your AI assistant with secure access to your Azure DevOps data. Your AI assistant can then analyze this data to provide intelligent insights and automation.

### Data access capabilities
- **Project data**: "Get list of projects and teams"
- **Work item data**: "Retrieve my assigned work items"
- **Code data**: "Show me pull request details for PR #123"
- **Build data**: "Get build status for the main pipeline"
- **Test data**: "Retrieve test plan information"

### AI-powered analysis (using the retrieved data)
- **Sprint insights**: "Get current sprint work items, then identify potential blockers"
- **Team coordination**: "Show me my PRs, then summarize their business impact"
- **Progress tracking**: "Retrieve completed work items, then create a status summary"
- **Quality monitoring**: "Get recent bugs, then analyze patterns and trends"
## Common use cases and examples

### Daily standup preparation
**What MCP Server provides**: Access to your assigned work items and recent updates
**What your AI assistant does**: Analyzes the data to help you prepare

**Example conversation**:
- "Get my work items for project MyProject"
- "Now analyze these items and help me prepare for standup - what did I complete, what am I working on, and what's blocked?"

### Sprint planning support
**What MCP Server provides**: Access to backlog items, team data, and work item details
**What your AI assistant does**: Helps analyze capacity and plan the sprint

**Example conversation**:
- "Get all work items in the product backlog for MyProject"
- "Based on these items, which ones should we prioritize for a two-week sprint with three developers?"

### Code review workflow
**What MCP Server provides**: Pull request details and linked work item information
**What your AI assistant does**: Provides business context for technical changes

**Example conversation**:
- "Get details for pull request #67 and its linked work items"
- "Help me understand the business effect of these code changes"

### Work item management
**What MCP Server provides**: Work item CRUD operations and bulk updates
**What your AI assistant does**: Helps with natural language work item operations

**Example conversation**:
- "Get all bugs assigned to me"
- "Update the priority to 'High' for any security-related bugs and assign them to the current sprint"

### Project reporting
**What MCP Server provides**: Access to work items, builds, and project data
**What your AI assistant does**: Creates summaries and identifies trends

**Example conversation**:
- "Get all completed work items from the last sprint"
- "Create a summary report for stakeholders highlighting key accomplishments and metrics"

## Get started with MCP Server

Ready to enhance your AI assistant with Azure DevOps context? The Azure DevOps MCP Server works with popular AI coding environments like Visual Studio Code with GitHub Copilot, Visual Studio 2022, Cursor, and Claude Code.

For detailed installation instructions and setup for your preferred environment, see [Getting started with Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp/blob/main/docs/GETTINGSTARTED.md).

## Related content

- [Example prompts for Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp/blob/main/docs/EXAMPLES.md)
- [Troubleshoot Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp/blob/main/docs/TROUBLESHOOTING.md)
- [Frequently asked questions about Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp/blob/main/docs/FAQ.md)


