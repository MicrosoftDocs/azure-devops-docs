---
title: Sign up for Azure DevOps
titleSuffix: Azure DevOps Services
ms.custom: peer-review-fy23, content-perf-fy23q2
description: Sign up for Azure DevOps with a Microsoft or GitHub account.
ms.subservice: azure-devops-new-user
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 03/13/2025
monikerRange: 'azure-devops'
---

# Sign up for Azure DevOps

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Sign up for Azure DevOps and get the [free tier of services](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/). For more information, see [What is Azure DevOps?](what-is-azure-devops.md)

## Sign up

Sign up for Azure DevOps with either a Microsoft account or GitHub account.

# [Microsoft account](#tab/microsoft-account)

1. If you don't have one, [create a Microsoft account](https://azure.microsoft.com/services/devops/).
2. Go to [Azure DevOps](https://azure.microsoft.com/services/devops/) and select **Get started with Azure**.
3. Select either **Try Azure for free** or **Pay as you go**.
4. Enter your Microsoft account credentials and go through the sign-up process.

   Azure DevOps creates an organization:
   - If you signed up with a newly created Microsoft account, Azure DevOps creates a project named after your account.
   - If you signed up with an existing Microsoft account, [create a project](../organizations/projects/create-project.md) next.

   Sign in to your organization at any time: `https://dev.azure.com/{Your_Organization}`.

# [GitHub account](#tab/github-account)

> [!NOTE]
> If your GitHub email address is associated with an organization in Azure DevOps [connected to Microsoft Entra ID](../organizations/accounts/connect-organization-to-azure-ad.md), you can't sign in with your GitHub account. Sign in with your Microsoft Entra account instead.

1. If you don't have one, [create a GitHub account](https://github.com/join).
2. Go to [Azure DevOps](https://azure.microsoft.com/services/devops/) and select **Get started with Azure**.
3. Select **Sign in with GitHub**.
4. Enter your account credentials and go through the sign-up process. You're asked to **Authorize Microsoft-corp**.

   Azure DevOps creates an organization. Sign in to your organization at any time `https://dev.azure.com/{Your_Organization}`.
   Azure DevOps turns on the *Invite GitHub users* policy by default. 
   ![Screenshot of the Invite GitHub users policy.](../media/invite-github-users-policy.png)
---

## Next steps  
 
> [!div class="nextstepaction"]
> [Create a project](../organizations/projects/create-project.md)

## Related articles

- [Plan your organizational structure in Azure DevOps](plan-your-azure-devops-org-structure.md)
- [Change the location of your organization](../organizations/accounts/change-organization-location.md)
- [Add users to your organization](../organizations/accounts/add-organization-users.md)
- [Add users or groups to a team or project](../organizations/security/add-users-team-project.md)
- [Connect to GitHub, FAQs](../boards/github/connect-to-github.md#faqs)
