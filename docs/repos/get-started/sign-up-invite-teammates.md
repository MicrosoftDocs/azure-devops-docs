---
title: Sign up for Azure Repos
titleSuffix: Azure DevOps   
description: How to sign up for Azure Repos. 
ms.subservice: azure-devops-new-user
ms.topic: how-to
ms.date: 01/02/2024
monikerRange: 'azure-devops'
---

# Sign up for free for Azure Repos

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Sign up for Azure Repos. For more information, see [What is Azure Repos?](what-is-repos.md)

## Sign up

Sign up for Azure Repos with either a Microsoft account or GitHub account.

# [Microsoft account](#tab/microsoft-account)

1. If you don't have one, [create a Microsoft account](https://azure.microsoft.com/services/devops/).
2. Go to [Azure Repos](https://azure.microsoft.com/products/devops/repos/) and select **Start free**.
3. Enter your account credentials and go through the sign-up process.

   Azure DevOps creates an organization.
-  Azure DevOps creates a project named after your *newly created* Microsoft account.
-  If you signed up with an existing Microsoft account, [create a project](../../organizations/projects/create-project.md).

# [GitHub account](#tab/github-account)

> [!NOTE]
> If your GitHub email address is already associated with an organization in Azure DevOps that's [connected to Microsoft Entra ID](../../organizations/accounts/connect-organization-to-azure-ad.md), you can't sign in with your GitHub account. You must sign in with your Microsoft Entra account.

1. If you don't have one, [create a GitHub account](https://github.com/join).
2. Go to [Azure Repos](https://azure.microsoft.com/products/devops/repos/) and select **Start free with GitHub**.
3. Enter your account credentials and go through the sign-up process. You're asked to **Authorize Microsoft-corp**.

   Azure DevOps creates an organization. Sign in to your organization at any time `https://dev.azure.com/{Your_Organization}`.
   
   Azure DevOps turns on the *Invite GitHub users* policy by default. 
   ![Screenshot of the Invite GitHub users policy.](../../media/invite-github-users-policy.png)
---

Sign in to your organization at any time `https://dev.azure.com/{Your_Organization}`.

## Next steps

> [!div class="nextstepaction"]
> [Code with Git](../../user-guide/code-with-git.md?view=azure-devops&preserve-view=true)
