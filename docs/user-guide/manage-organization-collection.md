---
title: Get started as a project collection administrator or organization owner
titleSuffix:  Azure DevOps
description: Learn how to add contributors and configure policies, settings, and other Azure DevOps options available at the organization or collection level.
ms.custom: copilot-scenario-highlight
ms.subservice: azure-devops-new-user
ms.author: chcomley
author: chcomley
ms.topic: overview
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 03/17/2026
---

# Manage your organization or collection

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]  

After you create an organization or project collection, configure users, policies, and settings to get the most out of Azure DevOps.

::: moniker range="azure-devops"
Each organization has exactly one collection. To create another organization, see [Plan your organizational structure](plan-your-azure-devops-org-structure.md) and [Create an organization](../organizations/accounts/create-organization.md).
::: moniker-end 

::: moniker range="< azure-devops"
Installing Azure DevOps Server automatically creates a default collection. To create another collection, see [Manage project collections](/azure/devops/server/admin/manage-project-collections).
::: moniker-end

[!INCLUDE [ai-assistance-mcp-server-tip](../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

[!INCLUDE [prerequisites-pca-only](../includes/prerequisites-pca-only.md)]

## Add users to your organization 

::: moniker range="azure-devops" 
Add users and security groups through **Organization settings** > **Users**. For large enterprises, [connect to Microsoft Entra ID](../organizations/accounts/connect-organization-to-azure-ad.md) to sync users and groups automatically.

When you add users, you assign an [access level](../organizations/security/access-levels.md) that controls which features they can use. For more information, see [Add organization users and manage access](../organizations/accounts/add-organization-users.md).

> [!NOTE]  
> If the **Limit user visibility and collaboration to specific projects** preview feature is enabled, users in the **Project-Scoped Users** group can only access projects they're explicitly added to. For more information, see [Limit user visibility for projects and more](#limit-user-visibility-for-projects-and-more).

::: moniker-end  

::: moniker range="< azure-devops" 
Add users through the web portal **Access levels** interface. For large enterprises, [connect to Active Directory (AD)](/windows-server/identity/ad-ds/deploy/install-active-directory-domain-services--level-100-) to sync users and groups automatically. Install AD before installing Azure DevOps Server.

When you add users, you assign an [access level](../organizations/security/access-levels.md) that controls which features they can use. For more information, see [Add users or groups to an access level](../organizations/security/change-access-levels.md).

> [!NOTE]  
> Users must also be [added to a project](../organizations/security/add-users-team-project.md) to connect and access features through a client or the web portal. 
::: moniker-end 

::: moniker range="azure-devops"

## Set up billing

All organizations get five free **Basic** licenses and unlimited **Stakeholder** access. If you need more than five contributors, [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md#set-up-billing). Users with a Visual Studio subscription don't incur extra charges.

Billing applies to user licenses (**Basic** or **Basic + Test Plans**) and to individual services like CI/CD parallel jobs and Azure Artifacts storage. For details, see [Pricing for Azure DevOps](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/).  

::: moniker-end

## Manage security and permissions

Security groups and permissions control access to organization and collection-level tasks.

[!INCLUDE [collection-level-permissions](../organizations/security/includes/collection-level-permissions.md)]

For more information, see [Get started with permissions, access, and security groups](../organizations/security/about-permissions.md) and [Change organization or collection-level permissions](../organizations/security/change-organization-collection-level-permissions.md). 

### Add members to the Project Collection Administrators group 

::: moniker range="azure-devops"
The organization creator is automatically a member of the **Project Collection Administrators** group, which can manage settings, policies, processes, projects, and extensions across the organization.
::: moniker-end
::: moniker range="< azure-devops"
The collection creator is automatically a member of the **Project Collection Administrators** group, which can manage settings, policies, processes, projects, and extensions across the organization.
::: moniker-end

Have at least two people with administrative privileges. To find existing admins, see [Look up a Project Collection Administrator](../organizations/security/look-up-project-collection-administrators.md).


### Set security policies

Configure security policies in **Organization settings** > **Policies** to control OAuth access, SSH authentication, public project creation, and GitHub account invitations. For more information, see [Change application connection & security policies](../organizations/accounts/change-application-access-policies.md).

:::image type="content" source="../media/policies/security-policies.png" alt-text="Screenshot of Azure DevOps Security Policies."::: 

<a id="project-scoped-user-group"></a> 
<a id="limit-user-visibility-for-projects-and-more"></a>

::: moniker range="azure-devops"

## Limit user visibility

[!INCLUDE [project-scoped-users-warning](../includes/project-scoped-users-warning.md)]

By default, users can view all organization and project information. To restrict visibility, enable the **Limit user visibility and collaboration to specific projects** preview feature and add users to the **Project-Scoped Users** group. Scoped users are restricted to:

- Only projects they're explicitly added to
- Limited **Organization settings** views (no access to user lists, billing, or usage data)
- People-picker results and **@mention** suggestions scoped to their project

### People pickers

With Microsoft Entra ID, people pickers search across the entire organization by default. Scoped users only see people in their assigned project. People pickers appear in identity fields (like **Assigned To**), **@mention** in work items, pull requests, commits, and wiki pages.

   :::image type="content" source="../organizations/notifications/media/at-mention/identity-selector.png" alt-text="Screenshot of people picker.":::

### Enable project-scoped users

1. Enable the **Limit user visibility and collaboration to specific projects** [preview feature](../project/navigation/preview-features.md) for the organization. 
1. [Add users to your project](../organizations/security/add-users-team-project.md).
1. Go to **Organization settings** > **Security** > **Permissions**, select **Project-Scoped Users** > **Members**, and add the users or groups to scope.

   The **Project-Scoped Users** group only appears when the preview feature is enabled.

For more information, see [Set permissions at the project or collection level](../organizations/security/change-organization-collection-level-permissions.md) and [Add and manage security groups](../organizations/security/add-manage-security-groups.md).

::: moniker-end

## Manage extensions 

Extensions add capabilities like work tracking, build and release flows, code testing, and collaboration. For example, the free [Code Search](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search) extension lets you search across all source repositories. See [Install and configure Search](../project/search/install-configure-search.md).

Users can [request extensions](../marketplace/request-extensions.md). To install and manage extensions, you need to be an organization Owner, a member of the **Project Collection Administrators** group, or have the [Manager role for extensions](../marketplace/grant-permissions.md).

::: moniker range=" < azure-devops"

## Turn on Analytics

The [Analytics service](../report/powerbi/what-is-analytics.md) is the reporting platform for Azure DevOps, optimized for fast read-access and server-based aggregations. Use it to answer quantitative questions about the past or present state of your projects. For setup steps, see [Turn on the Analytics service](../report/dashboards/analytics-extension.md).
::: moniker-end 

::: moniker range="azure-devops"

## Adjust time zone and other organization settings

The default time zone is UTC. Update it and add a privacy policy URL from **Organization settings** > **Overview**. For more information, see [Time zone settings and usage](../organizations/settings/timezone-settings-usage.md) and [Add a privacy policy URL](../organizations/accounts/add-privacy-policy-url.md).

::: moniker-end

## Configure DevOps settings 

Organization-level settings for pipelines and repos:

- [Add agent pools](../pipelines/agents/pools-queues.md)
- [Define pipeline retention settings](../pipelines/policies/retention.md#set-collection-level-retention-policies)
- [Set default branch name for new repositories](../repos/git/repository-settings.md#default-branch-name)
- [Configure Gravatar images](../repos/git/repository-settings.md#gravatar-images)
 
## Customize work-tracking processes

Work-tracking tools are available as soon as you create a project. You can customize processes through the UI to meet your team's needs. For more information, see [About process customization and inherited processes](../organizations/settings/work/inheritance-process-model.md), [Customize a project](../organizations/settings/work/customize-process.md), and [Add and manage processes](../organizations/settings/work/manage-process.md).

## Alert users with information banners

Use information banners to notify users about upcoming changes or events without sending mass emails. For more information, see [Add and manage information banners](../organizations/settings/manage-banners.md). 

## Review and update notifications

Many notifications are predefined at the organization or collection level. You can [manage subscriptions or add new subscriptions](../organizations/notifications/manage-team-group-global-organization-notifications.md).  

::: moniker range="< azure-devops"  

### Configure an SMTP server

For team members to receive notifications, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts).  

::: moniker-end  

## Scale your organization or collection  

For guidance on growing your organization, see [About projects and scaling your organization](../organizations/projects/about-projects.md) and [Plan your organizational structure](plan-your-azure-devops-org-structure.md).  
 
::: moniker range="azure-devops"

<a id="use-ai-assistance"></a>

## Use AI to manage your organization

If you configure the [Azure DevOps MCP Server](../mcp-server/mcp-server-overview.md), you can use AI assistants to manage your organization through natural language prompts.

### Example prompts for organization management

| Task | Example prompt |
|------|----------------|
| List projects | `List all projects in <Contoso> organization` |
| Check user access | `Show the access level for user <jamal@contoso.com> in <Contoso> organization` |
| View organization settings | `Show the organization settings for <Contoso>` |
| Audit recent changes | `Show recent audit log events for <Contoso> organization` |
| Manage users | `List all users in <Contoso> organization and their access levels` |
| Review permissions | `Show the security groups and their members in <Contoso> project` |
| Check policies | `List all branch policies configured in the <webapp> repo in <Contoso>` |
| Find inactive users | `List users in <Contoso> organization who haven't signed in during the last <90> days` |
| Prep a compliance report | `Show all permission changes in <Contoso> organization audit log from the past <30> days` |
| Review extension usage | `List installed extensions in <Contoso> organization and when each was last updated` |

::: moniker-end

## Related content

::: moniker range="azure-devops"  

- [About projects](../organizations/projects/about-projects.md)  
- [FAQs about signing up and getting started](user-guide-faqs.yml)
- [Organization management](../organizations/accounts/organization-management.md)
- [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md)

::: moniker-end

::: moniker range="< azure-devops"  

- [About projects](../organizations/projects/project-team-quick-reference.md)  
- [Security & identity](../organizations/security/about-security-identity.md)
- [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md)
- [Azure DevOps Server administration](/azure/devops/server/index)

::: moniker-end
