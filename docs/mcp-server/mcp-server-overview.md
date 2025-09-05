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
ms.date: 09/05/2025
#customer intent: As a project member, I want to understand what the Azure DevOps MCP Server is and how it can enhance my AI assistant with real-time Azure DevOps context to improve my productivity and decision-making.
---

# Enable AI assistance with Azure DevOps MCP Server

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Consider asking your AI assistant "Get my current sprint work items, then identify which ones might be at risk" and getting instant access to your actual Azure DevOps data. The Azure DevOps Model Context Protocol (MCP) Server provides your AI assistant with secure access to work items, pull requests, builds, test plans, and documentation from your Azure DevOps organization.

Unlike cloud-based solutions that require sending your data externally, the Azure DevOps MCP Server runs locally within your secure environment, ensuring your sensitive project information never leaves your network while still delivering enterprise-grade AI capabilities.

> [!IMPORTANT]
> - The Azure DevOps MCP Server is in public preview. Features and functionality might change before general availability. For issues or feedback, visit the [GitHub repository](https://github.com/microsoft/azure-devops-mcp).
> - The Azure DevOps MCP Server is free to use. However, standard Azure DevOps pricing applies to your organization and any data access through the service. AI assistant usage might have separate costs depending on your chosen AI platform.
> - The Azure DevOps MCP Server requires your AI assistant to operate in agent-mode to access Azure DevOps data and perform operations.

## Prerequisites

Before installing the Azure DevOps MCP Server, ensure you have the following requirements:

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

The Azure DevOps MCP Server provides contextual intelligence based on your actual project data, not generic responses. You can ask natural language questions about your work items, sprints, and releases, and receive insights that understand your team's specific processes and terminology. This eliminates context switching between tools, provides instant answers without navigating through the Azure DevOps web interface, and automates routine project management tasks through natural language.

## Security and privacy

The Azure DevOps MCP Server prioritizes data security and privacy:

- **Local execution**: No data leaves your environment - everything runs locally within your secure network
- **No external API calls**: The server doesn't make external API calls that could expose sensitive project information  
- **User control**: You maintain full control over what data your AI assistant can access
- **Secure integration**: Works seamlessly with your existing AI coding environments without compromising security
- **Private data handling**: Your sensitive project information never leaves your network while still delivering enterprise-grade AI capabilities

## What does MCP Server do?

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

**What the Azure DevOps MCP Server provides**: Access to your assigned work items and recent updates

**What your AI assistant does**: Analyzes the data to help you prepare

**Example prompt**:
- "Get my work items for project MyProject"
- "Now analyze these items and help me prepare for standup - what did I complete, what am I working on, and what's blocked?"

**Example output**:

**What the server provides** (raw data):
```json
{
  "workItems": [
    {"id": 4521, "title": "Login page crashes on mobile Safari", "type": "Bug", "state": "Resolved", "changedDate": "2025-09-04"},
    {"id": 4498, "title": "Update API documentation for v2.1", "type": "Task", "state": "Done", "changedDate": "2025-09-03"},
    {"id": 4456, "title": "Implement two-factor authentication", "type": "User Story", "state": "Active", "changedDate": "2025-09-02"},
    {"id": 4534, "title": "Performance issue with large datasets", "type": "Bug", "state": "Active", "changedDate": "2025-09-04"},
    {"id": 4423, "title": "Integration with external payment gateway", "type": "Feature", "state": "New", "reason": "Blocked"},
    {"id": 4467, "title": "Deploy to staging environment", "type": "Task", "state": "New", "reason": "Impediment"}
  ],
  "assignedTo": "currentUser",
  "project": "MyProject"
}
```

**What your AI assistant creates** (standup preparation):
```
Found 8 work items assigned to you in MyProject:

COMPLETED (since last standup):
✓ Bug #4521: "Login page crashes on mobile Safari" - Resolved yesterday
✓ Task #4498: "Update API documentation for v2.1" - Completed 2 days ago

CURRENTLY WORKING ON:
🔄 User Story #4456: "Implement two-factor authentication" - In Progress (3 days)
   └── Subtasks: Database schema (Done), UI components (In Progress), Testing (Not Started)
🔄 Bug #4534: "Performance issue with large datasets" - Active (1 day)

BLOCKED/NEEDS ATTENTION:
⚠️  Feature #4423: "Integration with external payment gateway" - Blocked
   └── Waiting for: Security team approval (blocked 5 days)
   └── Action needed: Follow up with Sarah from InfoSec team
⚠️  Task #4467: "Deploy to staging environment" - Impediment 
   └── Issue: Staging server maintenance scheduled today 2-4 PM

STANDUP SUMMARY:
Yesterday: Resolved mobile Safari login issue, completed API docs
Today: Continue 2FA implementation, investigate dataset performance issue
Blockers: Need security approval for payment integration, staging deployment delayed due to maintenance
```

### Sprint planning support

**What the Azure DevOps MCP Server provides**: Access to backlog items, team data, and work item details

**What your AI assistant does**: Helps analyze capacity and plan the sprint

**Example prompt**:
- "Get all work items in the product backlog for MyProject"
- "Based on these items, which ones should we prioritize for a two-week sprint with three developers?"

**Example output**:

**What the server provides** (raw data):
```json
{
  "backlogItems": [
    {"id": 3401, "title": "User Profile Enhancement", "type": "Epic", "storyPoints": 13, "priority": 1, "dependencies": []},
    {"id": 3456, "title": "Search results timeout on large datasets", "type": "Bug", "storyPoints": 8, "priority": 1, "dependencies": []},
    {"id": 3378, "title": "Export dashboard to PDF", "type": "Feature", "storyPoints": 13, "priority": 2, "dependencies": []},
    {"id": 3489, "title": "Implement password reset flow", "type": "User Story", "storyPoints": 8, "priority": 1, "dependencies": []},
    {"id": 3512, "title": "Upgrade React components to v18", "type": "Task", "storyPoints": 13, "priority": 3, "dependencies": []},
    {"id": 3467, "title": "Add dark mode toggle", "type": "User Story", "storyPoints": 5, "priority": 2, "dependencies": []},
    {"id": 3234, "title": "Mobile app rewrite", "type": "Epic", "storyPoints": 34, "priority": 2, "dependencies": []},
    {"id": 3445, "title": "AI-powered recommendations", "type": "Feature", "storyPoints": 21, "priority": 2, "dependencies": ["data-science-team"]},
    {"id": 3523, "title": "Integration with external CRM", "type": "User Story", "storyPoints": 13, "priority": 2, "dependencies": ["vendor-api"]}
  ],
  "teamMetrics": {
    "developers": 3,
    "sprintLength": 14,
    "averageVelocity": 60
  }
}
```

**What your AI assistant creates** (sprint planning analysis):
```
Found 15 work items in MyProject product backlog:

RECOMMENDED FOR 2-WEEK SPRINT (3 developers, ~60 story points):
✅ Epic #3401: "User Profile Enhancement" (13 points)
   └── High business value, well-defined requirements, no dependencies
✅ Bug #3456: "Search results timeout on large datasets" (8 points)
   └── Critical user impact, affects 40% of users, clear acceptance criteria
✅ Feature #3378: "Export dashboard to PDF" (13 points)
   └── Frequently requested, straightforward implementation, good ROI
✅ Story #3489: "Implement password reset flow" (8 points)
   └── Security priority, dependencies resolved, ready for development
✅ Task #3512: "Upgrade React components to v18" (13 points)
   └── Technical debt, enables future features, well-scoped work
✅ Story #3467: "Add dark mode toggle" (5 points)
   └── Quick win, high user satisfaction, minimal complexity

TOTAL: 60 story points (matches team velocity)

DEFERRED (reasons):
⏳ Epic #3234: "Mobile app rewrite" (34 points) - Too large for single sprint
⏳ Feature #3445: "AI-powered recommendations" (21 points) - Waiting for data science team input
⏳ Story #3523: "Integration with external CRM" (13 points) - Blocked by vendor API changes

SPRINT PLANNING RECOMMENDATIONS:
• Balance: Mix of features (3), bugs (1), technical debt (1), quick wins (1)
• Risk level: Low-medium risk items selected for predictable delivery
• Dependencies: All selected items have resolved dependencies
• Team skills: Work distribution matches current team expertise
• Business value: Prioritized customer-facing features and critical fixes
```

### Code review workflow

**What the Azure DevOps MCP Server provides**: Pull request details and linked work item information

**What your AI assistant does**: Provides business context for technical changes

**Example prompt**:
- "Get details for pull request #67 and its linked work items"
- "Help me understand the business effect of these code changes"

**Example output**:

**What the server provides** (raw data):
```json
{
  "pullRequest": {
    "id": 67,
    "title": "Implement caching layer for user preferences",
    "author": "Sarah Chen",
    "status": "Active",
    "filesChanged": 8,
    "additions": 156,
    "deletions": 42,
    "created": "2025-09-03"
  },
  "linkedWorkItems": [
    {
      "id": 2847,
      "title": "Improve app performance for returning users",
      "type": "User Story",
      "priority": "High",
      "acceptanceCriteria": "Page load time < 2 seconds for logged-in users"
    },
    {
      "id": 2901,
      "title": "Settings page loads slowly for users with many preferences",
      "type": "Bug",
      "severity": "Medium"
    }
  ]
}
```

**What your AI assistant creates** (business context analysis):
```
PULL REQUEST #67: "Implement caching layer for user preferences"
Author: Sarah Chen
Status: Active (awaiting review)
Files changed: 8 files (+156, -42 lines)
Created: 2 days ago

LINKED WORK ITEMS:
🎯 User Story #2847: "Improve app performance for returning users" (Priority: High)
   └── Acceptance criteria: Page load time < 2 seconds for logged-in users
   └── Business value: Reduce user churn, improve satisfaction scores

🐛 Bug #2901: "Settings page loads slowly for users with many preferences" (Severity: Medium)
   └── Impact: Affects 15% of premium users, causing support tickets
   └── Customer feedback: "App feels sluggish when changing settings"

BUSINESS IMPACT ANALYSIS:
💼 Strategic Alignment:
   • Supports Q3 goal of improving user retention by 20%
   • Addresses premium user experience issues affecting revenue
   • Enables future personalization features requiring fast preference access

📊 Expected Outcomes:
   • Performance: 60% reduction in preference loading time (2.5s → 1.0s)
   • User Experience: Eliminates loading delays in settings, profile pages
   • Technical Debt: Establishes caching pattern for other user data
   • Support Impact: Expected 40% reduction in performance-related tickets

REVIEW FOCUS AREAS:
• Cache invalidation logic (critical for data consistency)
• Error handling when cache is unavailable
• Performance monitoring implementation
• Security considerations for cached user data
```

### Project reporting

**What the Azure DevOps MCP Server provides**: Access to work items, builds, and project data

**What your AI assistant does**: Creates summaries and identifies trends

**Example prompt**:
- "Get all completed work items from the last sprint"
- "Create a summary report for stakeholders highlighting key accomplishments and metrics"

**Example output**:

**What the server provides** (raw data):
```json
{
  "workItems": [
    {"id": 4521, "title": "Login page crashes on mobile Safari", "type": "Bug", "state": "Resolved", "changedDate": "2025-09-04"},
    {"id": 4498, "title": "Update API documentation for v2.1", "type": "Task", "state": "Done", "changedDate": "2025-09-03"},
    {"id": 4456, "title": "Implement two-factor authentication", "type": "User Story", "state": "Active", "changedDate": "2025-09-02"},
    {"id": 4534, "title": "Performance issue with large datasets", "type": "Bug", "state": "Active", "changedDate": "2025-09-04"},
    {"id": 4423, "title": "Integration with external payment gateway", "type": "Feature", "state": "New", "reason": "Blocked"},
    {"id": 4467, "title": "Deploy to staging environment", "type": "Task", "state": "New", "reason": "Impediment"}
  ],
  "assignedTo": "currentUser",
  "project": "MyProject"
}
```

**What your AI assistant creates** (standup preparation):
```
Found 8 work items assigned to you in MyProject:

COMPLETED (since last standup):
✓ Bug #4521: "Login page crashes on mobile Safari" - Resolved yesterday
✓ Task #4498: "Update API documentation for v2.1" - Completed 2 days ago

CURRENTLY WORKING ON:
🔄 User Story #4456: "Implement two-factor authentication" - In Progress (3 days)
   └── Subtasks: Database schema (Done), UI components (In Progress), Testing (Not Started)
🔄 Bug #4534: "Performance issue with large datasets" - Active (1 day)

BLOCKED/NEEDS ATTENTION:
⚠️  Feature #4423: "Integration with external payment gateway" - Blocked
   └── Waiting for: Security team approval (blocked 5 days)
   └── Action needed: Follow up with Sarah from InfoSec team
⚠️  Task #4467: "Deploy to staging environment" - Impediment 
   └── Issue: Staging server maintenance scheduled today 2-4 PM

STANDUP SUMMARY:
Yesterday: Resolved mobile Safari login issue, completed API docs
Today: Continue 2FA implementation, investigate dataset performance issue
Blockers: Need security approval for payment integration, staging deployment delayed due to maintenance
```

## Related content

- [Example prompts for Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp/blob/main/docs/EXAMPLES.md)
- [Troubleshoot Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp/blob/main/docs/TROUBLESHOOTING.md)
- [Frequently asked questions about Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp/blob/main/docs/FAQ.md)
