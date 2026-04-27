---
title: Get Started as a Project Administrator
titleSuffix:  Azure DevOps
description: Learn how to structure projects, manage users, and set policies as a project administrator in Azure DevOps to support your development teams effectively.
ms.custom: copilot-scenario-highlight
ms.subservice: azure-devops-new-user
ms.author: chcomley
author: chcomley
ms.topic: get-started
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 03/17/2026
#customer intent: As a project administrator, I want to structure my projects and manage users in Azure DevOps, so I can support my development teams.
---

# Get started managing your project 

[!INCLUDE [version-lt-eq-azure-devops.md](../includes/version-lt-eq-azure-devops.md)]  

As a member of the **Project Administrators** group, you're responsible for configuring resources, managing permissions, and setting policies for your project. This article walks through the key tasks to set up and maintain a project in Azure DevOps. 

[!INCLUDE [ai-assistance-mcp-server-tip](../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

[!INCLUDE [prerequisites-project-administrator-only](../includes/prerequisites-project-administrator-only.md)]

## Add users to your project

Add users to a team or project so they can contribute. Adding a user to a team automatically adds them to the project's **Contributors** group, which grants permissions for work items, code, builds, and releases. Team members also appear in team-specific tools like sprint capacity planning and the Team Members widget.

For more information, see [Add users or groups to a team or project](../organizations/security/add-users-team-project.md). For an overview of default permissions, see [Default permissions quick reference](../organizations/security/permissions-access.md).

## Share your project vision

Use the [project summary page](../organizations/projects/project-vision-status.md) to share goals and onboarding information through a **README** file. For more detailed documentation, [create a project wiki](../project/wiki/wiki-create-repo.md) to capture processes, procedures, and guidelines.

## Enable or disable services

Simplify the web portal by disabling services your project doesn't use. For example, if you only track bugs, disable everything except **Boards**. For more information, see [Turn a service on or off](../organizations/settings/set-services.md).  

## Manage security and permissions

Security groups and permissions control who can access and modify resources in your project. Review [Default permissions and access](../organizations/security/permissions-access.md) to understand what users can do by default, then see [Change project-level permissions](../organizations/security/change-project-level-permissions.md) to adjust them.

[!INCLUDE [project-level-permissions](../organizations/security/includes/project-level-permissions.md)] 
 
### Add members to the Project Administrators group 

The person who creates a project is automatically added to the **Project Administrators** group. Add at least one other member to this group to ensure continuity. See [Add members to the Project Administrators group](../organizations/security/change-project-level-permissions.md#add-members-to-the-project-administrators-group).  

### Grant or restrict permissions  

As a project administrator, you can grant or restrict permissions at the project and object levels. To delegate tasks to others, you can:

- [Add users to a built-in or custom security group](../organizations/security/add-remove-manage-user-group-security-group.md)
- [Assign role-based permissions](../organizations/security/about-permissions.md#role-based-permissions) for resources like agent pools, service connections, and pipelines
- [Restrict access to specific features](../organizations/security/restrict-access.md) 

::: moniker range="azure-devops"

> [!NOTE]
> If you enable the **Limit user visibility and collaboration to specific projects** preview feature for the organization, users added to the **Project-Scoped Users** group can't access projects that they weren't added to. For more information, see [Limit user visibility for projects](manage-organization-collection.md#project-scoped-user-group).

::: moniker-end

## Review and update notifications

Each project comes with [default notification subscriptions](../organizations/notifications/oob-built-in-notifications.md). You can also define [team or project-level subscriptions](../organizations/notifications/manage-team-group-global-organization-notifications.md). If users receive too many notifications, direct them to [manage their personal notifications](../organizations/notifications/manage-your-personal-notifications.md).

## Set up end-to-end traceability

Link work items, commits, builds, and test results to track changes from requirements through deployment. For more information, see [End-to-end traceability](../cross-service/end-to-end-traceability.md) and [Cross-service integration overview](../cross-service/cross-service-overview.md).  

## Set DevOps policies 

Set policies to help enforce code quality, compliance, and resource management across your project.

- **Branch policies** — Require reviewers, enforce successful builds, or block direct pushes to protected branches. See [Manage branch policies](../repos/git/branch-policies.md).
- **TFVC check-in policies** — Enforce rules like code analysis or work item association before check-in. See [Add check-in policies](../repos/tfvc/add-check-policies.md).
- **Pipeline retention policies** — Control how long to keep build and release runs, artifacts, and logs. See [Set retention policies](../pipelines/policies/retention.md).
- **Test retention policies** — Set how long to keep automated and manual test results. See [Set test retention policies](../test/how-long-to-keep-test-results.md).
 
## Configure and customize Azure Boards 

At a minimum, configure **area paths** to group work items by team, product, or feature area, and **iteration paths** to group work into sprints or milestones. For a full overview of configuration options, see [Configure and customize Azure Boards](../boards/configure-customize.md).

### Define area and iteration paths

Define [area paths](../organizations/settings/set-area-paths.md) to organize work by team, product, or feature area. Define [iteration paths](../organizations/settings/set-iteration-paths-sprints.md) to assign work to sprints or milestones. This configuration is required for sprint backlogs, taskboards, and capacity planning. For an overview, see [About areas and iteration paths](../organizations/settings/about-areas-iterations.md). 
 
[!INCLUDE [customize-work-tracking](../includes/get-started/customize-work-tracking.md)] 

## Integrate with other services 

Azure DevOps integrates with Azure, GitHub, and many other services. You can also extend functionality by [installing extensions from the Marketplace](../marketplace/install-extension.md).

| Service integration | Resources |
|---|---|
| **GitHub** | [Azure DevOps and GitHub integration overview](../cross-service/github-integration.md) <br> [Azure Boards–GitHub integration](../boards/github/index.md) |
| **Microsoft Teams** | [Azure Boards](../boards/integrations/boards-teams.md) · [Azure Repos](../repos/integrations/repos-teams.md) · [Azure Pipelines](../pipelines/integrations/microsoft-teams.md) |
| **Slack** | [Azure Boards](../boards/integrations/boards-slack.md) · [Azure Repos](../repos/integrations/repos-slack.md) · [Azure Pipelines](../pipelines/integrations/slack.md) |
| **Service hooks** | [Integrate with service hooks](../service-hooks/overview.md) — push events to external services like Jenkins, Trello, or custom webhooks |
| **REST APIs** | [Azure DevOps REST API reference](/rest/api/azure/devops/) — build custom integrations and automation |

## Add teams to scale your project

As your organization grows, add teams so each team gets its own [set of customizable Agile tools](../organizations/settings/about-teams-and-settings.md) – backlogs, boards, sprints, and dashboards.

For more information, see [Add a team](../organizations/settings/add-teams.md) and [Add a team administrator](../organizations/settings/add-team-administrator.md). 

::: moniker range="azure-devops"

<a id="use-ai-assistance"></a>

## Use AI to manage your project

If you configure the [Azure DevOps MCP Server](../mcp-server/mcp-server-overview.md), you can use AI assistants to manage your project through natural language prompts.

### Example prompts for project administration

| Task | Example prompt |
|------|----------------|
| Manage team members | `List all members of the <Frontend> team in <Contoso> project` |
| Check permissions | `Show the permissions for the <Contributors> group in <Contoso> project` |
| Review project settings | `Show the process template and settings for <Contoso> project` |
| Set up areas | `List all area paths in <Contoso> project` |
| Manage iterations | `Show the current and upcoming iterations for <Contoso> project` |
| Add users | `Add user <jamal@contoso.com> to the <Contributors> group in <Contoso> project` |
| Review integrations | `List all service hooks configured in <Contoso> project` |
| Audit access changes | `Show permission changes in <Contoso> project from the past <14> days` |
| Onboard a new team | `Create a new team called <Mobile> in <Contoso> project and add users <sara@contoso.com> and <jamal@contoso.com>` |
| Generate a project health snapshot | `Summarize open bugs, active pull requests, and running pipelines in <Contoso> project` |

::: moniker-end
 
## Related content

- [View and update project summary page](../organizations/projects/project-vision-status.md)
- [Get started managing your organization or project collection](manage-organization-collection.md)
- [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md)
