---
title: Sign up for Azure DevOps
titleSuffix: Azure DevOps Services
ms.custom: peer-review-fy23, content-perf-fy23q2, copilot-scenario-highlight
description: Sign up for Azure DevOps with a Microsoft or GitHub account.
ms.subservice: azure-devops-new-user
ai-usage: ai-assisted
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.update: 90-days
ms.date: 03/17/2026
monikerRange: 'azure-devops'
---

# Sign up for Azure DevOps

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Sign up for Azure DevOps and start with the [free tier of services](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/). For an overview of the service, see [What is Azure DevOps?](what-is-azure-devops.md)

[!INCLUDE [ai-assistance-mcp-server-tip](../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

| Category | Requirements |
|----------|--------------|
|**Browser**| Use the latest version of Microsoft Edge, Safari (Mac), Firefox, or Chrome. |
|**Account**| A Microsoft account (work, school, or personal) or a GitHub account. |

> [!NOTE]
> If your organization uses Microsoft Entra ID, follow your organization's sign-in flow. Some enterprise orgs require single sign-on (SSO) or conditional access that can affect how you sign in.

## Sign up

Sign up for Azure DevOps by using either a Microsoft account or a GitHub account.

# [Microsoft account](#tab/microsoft-account)

[!INCLUDE [sign-up-msft-account](../includes/sign-up-msft-account.md)]

# [GitHub account](#tab/github-account)

[!INCLUDE [sign-in-github-account](../includes/sign-in-github-account.md)]

## Invite teammates (add users to your organization)

After you create an organization, add teammates so they can access projects and repositories.

Quick invite steps
1. Open your organization settings and choose **Organization settings** > **Users** (or **Manage users**).
2. Select **Invite users** and enter email addresses. Assign access levels and project roles as needed.
3. Optionally, add users to teams or groups to control permissions and project access.

For detailed steps, see:
- [Add users to your organization](../organizations/accounts/add-organization-users.md)
- [Add users or groups to a team or project](../organizations/security/add-users-team-project.md)

---

::: moniker range="azure-devops"

<a id="use-ai-assistance"></a>

## Use AI to manage users and teams

If you configure the [Azure DevOps MCP Server](../mcp-server/mcp-server-overview.md), you can use AI assistants to manage users and teams through natural language prompts.

### Example prompts for user management

| Task | Example prompt |
|------|----------------|
| Add users | `Add user <jamal@contoso.com> to <Contoso> organization` |
| List organization users | `List all users in <Contoso> organization` |
| Check access levels | `Show the access level for user <jamal@contoso.com> in <Contoso>` |
| Manage team membership | `Add user <jamal@contoso.com> to the <Frontend> team in <Contoso> project` |
| Review user permissions | `Show what permissions <jamal@contoso.com> has in <Contoso> project` |
| Onboard a group | `Add users <sara@contoso.com>, <kim@contoso.com>, and <alex@contoso.com> to the <Backend> team in <Contoso> project` |
| Check license usage | `Show how many Basic and Stakeholder access levels are in use versus available in <Contoso> organization` |
| Find users without teams | `List users in <Contoso> organization who aren't members of any team` |

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Create a project](../organizations/projects/create-project.md)

## Related content

- [Plan your organizational structure in Azure DevOps](plan-your-azure-devops-org-structure.md)
- [Change the location of your organization](../organizations/accounts/change-organization-location.md)
- [Add users to your organization](../organizations/accounts/add-organization-users.md)
- [Add users or groups to a team or project](../organizations/security/add-users-team-project.md)
- [Connect to GitHub, FAQs](../boards/github/connect-to-github.md#faqs)
