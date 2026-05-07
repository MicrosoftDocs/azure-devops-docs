---
title: Create an organization
titleSuffix: Azure DevOps
description: Learn how to create an Azure DevOps organization using a personal Microsoft account, GitHub account, or work or school account.
ms.subservice: azure-devops-organizations
ms.topic: how-to
ms.custom: copilot-scenario-highlight
ms.author: chcomley
author: chcomley
ms.date: 03/03/2026
ai-usage: ai-assisted
monikerRange: 'azure-devops'
#customer intent: As a new Azure DevOps user, I want to create an organization so that I can start managing projects and collaborating with my team.
---

# Create an organization

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Use an organization to connect groups of related projects and help scale up your enterprise. You can use a personal Microsoft account, GitHub account, or a work or school account. When you use your work or school account, you *automatically connect* your organization to your Microsoft Entra ID.

> [!NOTE]
> You must create all organizations manually through the web portal. Automated creation of organizations isn't supported. However, automated organization configuration, project creation, and resource provisioning are supported through the [REST API](/rest/api/azure/devops).

<a name="how-sign-up"></a>

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Azure subscription**| You need an active Azure subscription to create new organizations. Existing organizations and free tier limits aren't affected.|
|**Authentication**| Decide whether you want to use only Microsoft accounts or authenticate users with Microsoft Entra ID. For more information, see [Choosing your organization administrator account type](../../user-guide/plan-your-azure-devops-org-structure.md#choose-your-organization-administrator-account-type).|
|**Planning**| Understand how to [plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md).|

<a name="SignIn"></a>

## Create an organization

1. Sign in to [Azure DevOps](https://go.microsoft.com/fwlink/?LinkId=307137).

1. Select **New organization**.

   :::image type="content" source="../../media/select-new-organization.png" alt-text="Screenshot shows New organization button for selection.":::

1. Enter the name for your organization, select its hosting geography, select an Azure subscription for billing, and then select **Continue**.

   [!INCLUDE [organization-name-limitation](../../includes/organization-name-limitation.md)]

   :::image type="content" source="media/select-subscription-create-organization.png" alt-text="Screenshot shows creating organization popup with dropdown menu for selecting Azure subscription.":::

   :::image type="content" source="../../media/taking-you-to-your-azure-devops-organization.png" alt-text="Screenshot shows temporary screen taking you to your organization notification.":::

   Congratulations, you're an organization owner!

   Sign in to your organization at any time by using `https://dev.azure.com/{Your_Organization}`.

### Free tier benefits

Your new organization includes the following free tier benefits:

[!INCLUDE [free-tier](../../includes/free-tier.md)]

If you exceed these free tier limits, you pay for extra usage through your linked Azure subscription. For more information, see [What happens when free tier limits are reached?](../billing/billing-faq.yml#what-happens-when-free-tier-limits-are-reached-)

## Next steps

> [!div class="nextstepaction"]
> [Create a project](../projects/create-project.md)

<a id="use-ai-assistance"></a>

## Use AI to manage your organization

If you have the [Azure DevOps MCP Server](../../mcp-server/mcp-server-overview.md) configured, you can use AI assistants to manage your Azure DevOps organization using natural language prompts. The MCP Server provides your AI assistant with secure access to your Azure DevOps data, allowing you to create projects, manage settings, and configure resources without navigating through the web interface.

### Example prompts for organization management

| Task | Example prompt |
|------|----------------|
| Set up a new organization end-to-end | `Create a new project called <project-name> in <organization-name> using Agile process with Git repos, then add <user-email> as a project administrator` |
| Compare organization settings | `Show the process templates, version control defaults, and security policies configured for <organization-name>` |
| Bootstrap development infrastructure | `In <organization-name>, create a project <project-name>, initialize a Git repo called <repo-name>, and set up a basic CI pipeline for a .NET application` |
| Review organization limits | `How many projects exist in <organization-name>, how many users have Basic access, and what Azure subscription is linked for billing?` |
| Set up team structure | `In the <project-name> project, create teams for Frontend, Backend, and QA, each with their own area path and iteration schedule` |
| Configure initial security | `Set up <organization-name> security: disable alternate credentials, require minimum PAT scope, and restrict project creation to admins only` |

> [!TIP]
> If you're using Visual Studio Code, [agent mode](/visualstudio/ide/copilot-chat-context#agent-mode) is especially helpful for setting up a new organization and creating initial projects.
> - To avoid using stale or cached data from previous queries, add to your prompt, `Do not use previously fetched data`.

## Related content

* [Get started with Azure Repos and Visual Studio](../../repos/git/gitquickstart.md)
* [Rename an organization](rename-organization.md)
* [Change organization time-zone](change-organization-location.md)
* [Change organization owner](change-organization-ownership.md)
* [Delete an organization](delete-your-organization.md)
* [Resolve orphaned organization](resolve-orphaned-organization.md)
