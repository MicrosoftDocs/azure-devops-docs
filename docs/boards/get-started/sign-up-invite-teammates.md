---
title: Sign up for Azure Boards
titleSuffix: Azure Boards
description: Learn how to sign up for free for Azure Boards.
ms.subservice: azure-devops-new-user
ms.topic: quickstart
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ai-usage: ai-assisted
ms.update: 90-days
ms.date: 09/18/2025
ms.custom:
  - boards-get-started
  - sfi-image-nochange
---

# Sign up for Azure Boards

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)] 

Sign up for [Azure Boards](https://azure.microsoft.com/services/devops/boards/?nav=min) to plan, track, and discuss work across your teams. For a short overview, see [What is Azure Boards?](./what-is-azure-boards.md).

This quickstart shows the simplest path to get started and invite teammates.

What you'll learn:
- How to create an organization and project.
- How to sign up with a Microsoft or GitHub identity.
- How to invite team members to your project.

Quick steps:
1. Sign up with a Microsoft or GitHub account.
2. Create a project (public or private).
3. Invite teammates and set their access levels.

To sign up for all Azure DevOps Services, see [Sign up, sign in to Azure DevOps](../../user-guide/sign-up-invite-teammates.md). 

## Prerequisites

| Category | Requirements |
|----------|--------------|
| **Browser** | Latest version of Microsoft Edge, Safari (macOS), Firefox, or Chrome. |
| **Account** | A Microsoft account, Microsoft Entra organizational account, or GitHub account. |

## Sign up

You can sign up using either a Microsoft account (personal or Microsoft Entra) or a GitHub account. Choose the option that matches how you plan to authenticate and invite users.

[!INCLUDE [sign-up-msft-account](../../includes/sign-up-msft-account.md)]

> [!NOTE]  
> If your organization uses Microsoft Entra ID and your identity is managed by that tenant, sign in with your Microsoft Entra account. External (guest) accounts might not be allowed to create or administer an organization in that tenant—use a native tenant account if you see authentication errors.

[!INCLUDE [sign-in-github-account](../../includes/sign-in-github-account.md)]

> [!IMPORTANT]  
> If your GitHub email address is associated with an Azure DevOps organization that uses Microsoft Entra ID, you can't sign in with GitHub for that organization. Use your Microsoft Entra account instead.

[!INCLUDE [enable-mcp-server](../includes/enable-mcp-server.md)]

## Create a project

After you sign in, you're prompted to create a project. Projects can be public or private and are the containers where your teams do work.

1. Enter a project name and optional description.
2. Choose **Visibility**: **Public** (open-source) or **Private** (restricted access).
3. (Optional) Expand **Advanced** to choose version control (Git or TFVC) and the work item process (Basic, Agile, Scrum, or CMMI).
4. Select **Create project** — your project's board appears automatically.

For more on project options, see [Create a project using advanced settings](#advanced-project-options) and [What is a public project?](../../organizations/projects/about-projects.md).

## Invite teammates

Add people to your organization and project so they can view and contribute to work.

1. From the web portal, open **Organization settings** (click the Azure DevOps logo and the gear icon).  
2. Select **Users** > **Add new users**.  
3. Enter email addresses (Microsoft accounts) or GitHub IDs, choose an **Access level** (Basic or Stakeholder), and add users to your project and groups (Readers, Contributors, or Administrators).  
4. Select **Add** to send invitations.

Notes:
- Basic access grants full Boards features (a limited number of free Basic licenses might be available). Stakeholder access provides limited access for viewing and light editing of work items.
- If you use Microsoft Entra to manage your organization, invite users by their Microsoft Entra accounts or follow your organization's provisioning process.
- For detailed steps, see [Add users or groups to a team or project](../../organizations/security/add-users-team-project.md) and [Add organization users for Azure DevOps Services](../../organizations/accounts/add-organization-users.md).

## Advanced project options

If you need a different process or repository type than the defaults, create a new project and expand **Advanced** to choose options for **Version control** and **Work item process**. After creating the new project, you can delete the original one if desired.

For step-by-step guidance, see [Choose a process for a comparison of processes](../work-items/guidance/choose-process.md).

## Next step

> [!div class="nextstepaction"]
> [Add users or groups to your team or project](../../organizations/security/add-users-team-project.md)

## Related content  

- [Track issues and tasks](plan-track-work.md)
- [About access levels](../../organizations/security/access-levels.md)
- [Define organizations and projects](../../user-guide/plan-your-azure-devops-org-structure.md)
