---
title: Enable AI Assistance with the Azure DevOps MCP Server
titleSuffix: Azure Boards
description: Learn about the Azure DevOps Model Context Protocol (MCP) Server, which enhances your AI assistant with real-time Azure DevOps context for smarter, more accurate project insights and decision-making capabilities.
ms.service: azure-devops-boards
ms.custom: peer-review-program
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 09/11/2025
#customer intent: As a project member, I want to understand what the Azure DevOps MCP Server is and how it can enhance my AI assistant with real-time Azure DevOps context to improve my productivity and decision-making.
---

# Enable AI assistance with Azure DevOps MCP Server

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Consider asking your AI assistant "Get my current sprint work items, then identify which ones might be at risk" and getting instant access to your actual Azure DevOps data. The Azure DevOps Model Context Protocol (MCP) Server provides your AI assistant with secure access to work items, pull requests, builds, test plans, and documentation from your Azure DevOps organization.

Unlike cloud-based solutions that require sending your data externally, the Azure DevOps MCP Server runs locally within your secure environment, ensuring your sensitive project information never leaves your network while still delivering enterprise-grade AI capabilities.

> [!IMPORTANT]
> - The Azure DevOps MCP Server is free to use. However, standard Azure DevOps pricing applies to your organization and any data access through the service. AI assistant usage might have separate costs depending on your chosen AI platform.
> - The Azure DevOps MCP Server requires your AI assistant to operate in agent-mode to access Azure DevOps data and perform operations.

## Prerequisites

| Requirement | Description | Download/Installation |
|-------------|-------------|----------------------|
| **Node.js** | Version 18.0 or higher required for running the MCP Server | [Download Node.js](https://nodejs.org/) |
| **Azure DevOps organization** | Active Azure DevOps Services organization with project access | [Create organization](../organizations/accounts/create-organization.md) |
| **AI coding environment** | Compatible AI assistant with agent-mode support (GitHub Copilot, Claude, etc.) | See [installation section](#install-mcp-server)  |

## Install MCP Server

Ready to enhance your AI assistant with Azure DevOps context? The Azure DevOps MCP Server works with popular AI coding environments like Visual Studio Code with GitHub Copilot, Visual Studio 2022, Cursor, and Claude Code.

For detailed installation instructions and setup for your preferred environment, see [Install Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp/blob/main/docs/GETTINGSTARTED.md).

## Why use Azure DevOps MCP Server?

Traditional AI assistants lack context about your specific projects, work items, and team processes. They can help with generic coding questions but can't answer "What's blocking our current sprint?" or "Which pull requests need my review?" The Azure DevOps MCP Server bridges this gap by connecting your AI assistant directly to your Azure DevOps data.

The Azure DevOps MCP Server provides contextual intelligence based on your actual project data, not generic responses. You can ask natural language questions about your work items, sprints, and releases, and receive insights that understand your team's specific processes and terminology. This process eliminates context switching between tools, provides instant answers without navigating through the Azure DevOps web interface, and automates routine project management tasks through natural language.

## Security and privacy

The Azure DevOps MCP Server prioritizes data security and privacy:

- **Local execution**: No data leaves your environment - everything runs locally within your secure network
- **No external API calls**: The server doesn't make external API calls that could expose sensitive project information  
- **User control**: You maintain full control over what data your AI assistant can access
- **Secure integration**: Works seamlessly with your existing AI coding environments without compromising security
- **Private data handling**: Your sensitive project information never leaves your network while still delivering enterprise-grade AI capabilities

## What does MCP Server do?

The Azure DevOps MCP Server enables a two-step process: **data retrieval** and **AI analysis**.

### 1. Data retrieval (MCP Server)
The server provides secure access to your Azure DevOps data:

- **Projects and teams**: Organization structure and team information
- **Work items**: Assigned tasks, bugs, user stories, and their details
- **Pull requests**: Code review status, changes, and linked work items
- **Builds and pipelines**: CI/CD status, test results, and deployment information
- **Test plans**: Test cases, results, and coverage data

### 2. AI analysis (Your AI assistant)
Your AI assistant processes this data to provide:

- **Intelligent summaries**: Sprint progress, team velocity, and project health
- **Actionable insights**: Risk identification, bottleneck analysis, and recommendations
- **Context-aware responses**: Answers that understand your specific projects and processes

**Example**: You ask "What's blocking our sprint?" → MCP Server retrieves your current work items → Your AI assistant analyzes the data and identifies specific blockers with recommendations.

## Common use cases and examples

For more examples, see [Example usage](https://github.com/microsoft/azure-devops-mcp/blob/main/docs/EXAMPLES.md).

### Daily standup preparation

:::row:::
       :::column span="1":::
       **Component**
       :::column-end:::
       :::column span="2":::
       **Description**
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **MCP Server provides** 
       :::column-end:::
       :::column span="2":::
       Access to your assigned work items and recent updates
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **AI assistant action** 
       :::column-end:::
       :::column span="2":::
       Analyzes the data to help you prepare for standup
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **Example prompt** 
       :::column-end:::
       :::column span="2":::
       "Get my work items for project MyProject and help me prepare for standup - what did I complete, what am I working on, and what's blocked?"
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **Query translation** 
       :::column-end:::
       :::column span="2":::
        WIQL query to retrieve your assigned work items, filtered by project and excluding removed items, ordered by most recent changes
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **Raw data result** 
       :::column-end:::
       :::column span="2":::
        Six work items including bugs, tasks, user stories, and features with their current states (Resolved, Done, Active, New, Blocked)
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **AI assistant output** 
       :::column-end:::
       :::column span="2":::
        | Status | Work Items |
        |--------|------------|
        | ✅ **Completed** | Bug #4521: "Sign in page crashes on mobile Safari" - Resolved yesterday<br>Task #4498: "Update API documentation for v2.1" - Completed 2 days ago |
        | 🔄 **In Progress** | User Story #4456: "Implement two-factor authentication" - In Progress (three days)<br>└── Subtasks: Database schema (Done), UI components (In Progress), Testing (Not Started)<br><br>Bug #4534: "Performance issue with large datasets" - Active (one day) |
        | ⚠️ **Blocked** | Feature #4423: "Integration with external payment gateway" - Blocked<br>└── Waiting for: Security team approval (blocked five days)<br>└── Action needed: Follow up with Sarah from InfoSec team<br>Task #4467: "Deploy to staging environment" - Impediment<br>└── Issue: Staging server maintenance scheduled today 2-4 PM |
        |**Summary for standup**| - Yesterday: Resolved mobile Safari sign-in issue, completed API docs.<br>- Today: Continue 2FA implementation, investigate dataset performance issue.<br>- Blockers: Need security approval for payment integration, staging deployment delayed due to maintenance.|
       :::column-end:::
:::row-end:::
---

### Sprint planning support

:::row:::
       :::column span="1":::
       **Component**
       :::column-end:::
       :::column span="2":::
       **Description**
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **MCP Server provides** 
       :::column-end:::
       :::column span="2":::
       Access to backlog items, team data, and work item details
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **AI assistant action** 
       :::column-end:::
       :::column span="2":::
       Helps analyze capacity and plan the sprint
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **Example prompt** 
       :::column-end:::
       :::column span="2":::
       "Get all work items in the product backlog for MyProject and prioritize them for a two-week sprint with three developers"
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **Query translation** 
       :::column-end:::
       :::column span="2":::
        WIQL query to retrieve backlog items with story points, priority, and state information, ordered by priority and stack rank
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **Raw data result** 
       :::column-end:::
       :::column span="2":::
        Nine backlog items including epics, features, user stories, bugs, and tasks with story points and dependencies, plus team metrics (three developers, 14-day sprint, 60-point velocity)
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **AI assistant output**
       :::column-end:::
       :::column span="2":::
        |Category | Work Items | Points |
        |----------|------------|--------|
        | ✅ **Recommended** | Epic #3401: "User Profile Enhancement" - High business value, no dependencies<br>Bug #3456: "Search results time out on large datasets" - Critical user impact<br>Feature #3378: "Export dashboard to PDF" - Frequently requested<br>Story #3489: "Implement password reset flow" - Security priority<br>Task #3512: "Upgrade React components to v18" - Technical debt<br>Story #3467: "Add dark mode toggle" - Quick win | **60 total**<br>(13 + 8 + 13 + 8 + 13 + 5) |
        | ⏳ **Deferred** | Epic #3234: "Mobile app rewrite" - Too large for single sprint<br>Feature #3445: "AI-powered recommendations" - Waiting for data science team<br>Story #3523: "Integration with external CRM" - Blocked by vendor API | 34, 21, 13 |
        **Planning recommendations**|- **Balance**: Mix of features (3), bugs (1), technical debt (1), quick wins (1)<br>- **Risk level**: Low-medium risk items for predictable delivery<br>- **Dependencies**: All selected items have resolved dependencies<br>- **Skills**: Work distribution matches current team expertise<br>- **Business value**: Prioritized customer-facing features and critical fixes|
       :::column-end:::
:::row-end:::
---

### Code review workflow

:::row:::
       :::column span="1":::
       **Component**
       :::column-end:::
       :::column span="2":::
       **Description**
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **MCP Server provides** 
       :::column-end:::
       :::column span="2":::
       Pull request details and linked work item information
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **AI assistant action** 
       :::column-end:::
       :::column span="2":::
       Provides business context for technical changes
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **Example prompt** 
       :::column-end:::
       :::column span="2":::
       "Get details for pull request #67 and its linked work items and help me understand the business effect of these code changes"
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **API translation** 
       :::column-end:::
       :::column span="2":::
        REST API calls to retrieve pull request details and linked work item information with expanded relations
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **Raw data result** 
       :::column-end:::
       :::column span="2":::
        Pull request #67 (caching layer implementation, eight files changed, +156/-42 lines) and two linked work items (performance user story and settings bug)
       :::column-end:::
:::row-end:::
---
:::row:::
       :::column span="1":::
       **AI assistant output** 
       :::column-end:::
       :::column span="2":::
        | Component | Details |
        |-----------|---------|
        | **Pull Request** | PR #67: "Implement caching layer for user preferences"<br>Author: Sarah Chen, Status: Active (awaiting review)<br>Files: 8 changed (+156, -42 lines), Created: Two days ago |
        | **Linked Work Items** | 🎯 User Story #2847: "Improve app performance for returning users" (High priority)<br>└── Target: Page load time < 2 seconds for logged-in users<br><br>🐛 Bug #2901: "Settings page loads slowly for users with many preferences" (Medium severity)<br>└── Impact: Affects 15% of premium users, causing support tickets |
        |**Business impact summary**| - 💼 **Strategic Alignment**: Supports Q3 user retention goal (20% improvement)<br>Addresses premium user experience issues affecting revenue<br>Enables future personalization features<br>- 📊 **Expected Outcomes**: Performance: 60% reduction in preference loading time (2.5s → 1.0s)<br>User Experience: Eliminates loading delays in settings and profile pages<br>Support Impact: Expected 40% reduction in performance-related tickets<br>- 🔍 **Review Focus Areas**: Cache invalidation logic (data consistency)<br>Error handling for cache unavailability<br>Performance monitoring implementation<br>Security considerations for cached user data |
       :::column-end:::
:::row-end:::
---
