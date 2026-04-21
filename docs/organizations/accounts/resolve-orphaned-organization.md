---
title: Assign an owner to an orphaned organization
titleSuffix: Azure DevOps Services
description: Assign an owner to an orphaned organization in Azure DevOps. Learn step-by-step how to restore access and resolve inactive administrator issues. Start now.
ms.subservice: azure-devops-organizations
ms.topic: how-to
ms.author: chcomley
ms.reviewer: chcomley
author: chcomley
ai-usage: ai-assisted
ms.date: 04/02/2026
monikerRange: 'azure-devops'
ms.custom: copilot-scenario-highlight, UpdateFrequency3
---

# Assign an owner to an orphaned organization

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

An organization becomes *orphaned* when the organization owner and all Project Collection Administrators are inactive. Because no active administrator exists, you can't transfer ownership through the normal process. However, if the organization is connected to Microsoft Entra ID, an Azure DevOps Administrator in Microsoft Entra ID can claim ownership and assign it to an active user.

> [!NOTE]
> If your organization isn't orphaned and you want to change the owner, see [Change organization owner](change-organization-ownership.md).

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**|[Azure DevOps Administrator in Microsoft Entra ID](../security/look-up-azure-devops-administrator.md). If using [Privileged Identity Management](/azure/active-directory/privileged-identity-management/pim-configure?msclkid=303229fdc6c111ecaf0f666b2dd9cd6f), the Azure DevOps Administrator should be of type [Active](/azure/active-directory/privileged-identity-management/pim-how-to-add-role-to-user?msclkid=5cdc55f5c6c011eca737e344cbe17b42).|

> [!IMPORTANT]
> Only claim ownership when the current owner *and* all members of the Project Collection Administrators group are inactive in Microsoft Entra ID. For the definition of inactive, see [What are inactive user accounts?](/azure/active-directory/reports-monitoring/howto-manage-inactive-user-accounts).

### Find your Azure DevOps Administrator

If you don't know who has the Azure DevOps Administrator role in your Microsoft Entra tenant, see [Look up the Azure DevOps Administrator](../security/look-up-azure-devops-administrator.md).

> [!NOTE]
> Changes to role membership might take up to an hour to propagate to Azure DevOps.  

## When your Azure DevOps Administrator is a member of the target organization

Complete the following steps when the Azure DevOps Administrator *is* a member of the target organization.

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`) by using the Azure DevOps Administrator account.

1. Select **Organization settings** > **Overview**.

1. In the warning message, select **Change owner**.

    ![Screenshot of warning, PCA and Owner inactive in Microsoft Entra ID.](media/change-organization-ownership/warning-message-change-owner.png)

1. Select a user from the dropdown menu or search by name.

1. Enter a short justification, and then select **Change**.

    ![Screenshot of button highlighted by red box, Change owner.](media/change-organization-ownership/change-organization-owner.png)

   The ownership transfer notification with your justification is sent to all Azure DevOps Administrators in your Microsoft Entra tenant.

## When your Azure DevOps Administrator isn't a member of the target organization

Complete the following steps when the Azure DevOps Administrator *isn't* a member of the target organization.

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`) by using the Azure DevOps Administrator account.
    
    An error page appears because the account isn't a member of the organization.

    ![Screenshot of 401 message: Microsoft Entra Administrator not member of organization.](media/change-organization-ownership/error-message-administrator-not-member-of-organization.png)

1. Select **Claim Ownership**.

1. Enter a short justification, and then select **Claim Ownership** again.

   ![Screenshot showing empty box, where you enter justification and claim ownership of the organization.](media/change-organization-ownership/claim-ownership.png)

   A notification of the ownership transfer with your justification is sent to all Azure DevOps Administrators in your Microsoft Entra tenant. You're redirected to the organization overview page.

1. To transfer ownership to another user, see [Change organization owner](change-organization-ownership.md).

<a id="use-ai-assistance"></a>

## Use AI to resolve orphaned organizations

If you have the [Azure DevOps MCP Server](../../mcp-server/mcp-server-overview.md) configured, you can use AI assistants to investigate orphaned organizations and gather ownership details using natural language prompts. The MCP Server provides your AI assistant with secure access to your Azure DevOps data, so you can check organization ownership, list administrators, and verify Microsoft Entra connections without navigating through the web interface.

### Example prompts for resolving orphaned organizations

| Task | Example prompt |
|------|----------------|
| Check organization owner | `Who is the current owner of the <organization-name> organization?` |
| List administrators | `List all Project Collection Administrators in the <organization-name> organization` |
| Check Microsoft Entra connection | `Is the <organization-name> organization connected to Microsoft Entra ID?` |
| List organization members | `Show me all users in the <organization-name> organization and their last access dates` |
| Verify your role | `What is my role and permissions in the <organization-name> organization?` |
| List all organizations | `List all Azure DevOps organizations I have access to` |

> [!TIP]
> If you're using Visual Studio Code, [agent mode](/visualstudio/ide/copilot-chat-context#agent-mode) is especially helpful for investigating organization ownership and identifying inactive administrators.
> - To avoid using stale or cached data from previous queries, add to your prompt, `Do not use previously fetched data`.

## Related content

- [Review administrator role permissions in Microsoft Entra ID](/azure/active-directory/users-groups-roles/directory-assign-admin-roles)
- [Delete an organization](delete-your-organization.md)
- [Get a list of organizations backed by Microsoft Entra ID](get-list-of-organizations-connected-to-microsoft-entra-id.md)
