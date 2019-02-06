---
title: Create, configure a new organization
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Create your organization with a personal Microsoft account or a work or school account
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: e2eacd25-e6be-4294-b1da-5529195f30d0
ms.topic: quickstart
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/06/2018
monikerRange: 'azure-devops'
---

# Quickstart: Create an organization

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

In this quickstart, you learn how to create an organization with a personal Microsoft account or a work or school account. Use your work or school account to *automatically connect* your organization to your Azure AD.

<a name="how-sign-up"></a>

## Prerequisites

1. Read and understand how to [Plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md).
2. Do either of the following:
   * Complete the following steps to use only Microsoft accounts with your organization.

     Without Azure AD, you're solely responsible for controlling organization access. And all users must sign in with their Microsoft account. 
     [What are other differences?](faq-create-organization.md#SignInOrganizationDifferences)

     - If you don't have a Microsoft account, you can create one when you sign up for Azure DevOps.

     - Use your Microsoft account if you don't need to authenticate users for an organization with [Azure AD](https://azure.microsoft.com/documentation/articles/active-directory-whatis/). All users must sign in to your organization with a Microsoft account.

   * Complete the following steps to authenticate users and control organization access through your Azure AD.

      - You need a work or school account that's managed by your Azure AD. If you use Azure or Office 365, you might have one already. If you don't, learn how to [sign up for Azure as an organization](https://azure.microsoft.com/documentation/articles/sign-up-organization/).
      - To use existing on-premises identities, see [use Azure AD Connect for integrating on-premises directories with Azure AD](https://azure.microsoft.com/documentation/articles/active-directory-aadconnect/).
      - All users must be members in that directory to access your organization. To add users from other organizations, use [Azure AD B2B collaboration capabilities](/azure/active-directory/active-directory-b2b-what-is-azure-ad-b2b).

<a name="SignIn"></a>

## Create an organization

1. Go to [Azure DevOps](https://go.microsoft.com/fwlink/?LinkId=307137), and use either a Microsoft or Azure AD account to sign in. Choose **Next**.

	  ![Enter your email address](_img/_shared/sign-in-to-azure-devops.png)

	  [Got browser problems?](faq-create-organization.md#browser-problems)

	  [Why am I asked to choose between my work or school account and my personal account?](faq-create-organization.md#ChooseOrgAcctMSAcct)

	  If you were previously signed up for Azure DevOps, select **New organization**.

      ![Select New organization](_img/_shared/create-new-organization.png)

2. Enter the name of your organization and select the location to host your projects from the dropdown menu. Choose **Continue**.

   ![Create your organization in Azure DevOps](_img/_shared/create-organization.png)

   ![Taking you to your organization notification](_img/_shared/taking-you-to-your-azure-devops-organization.png)
   
   Congratulations, you're now an organization owner! You are prompted to [create a project](../projects/create-project.md) to get started.
   ![Create your first project screen in Azure DevOps](_img/_shared/create-project-screen.png)

3. Select **Organization settings** and **Overview**. Confirm or change your organization settings.

   ![Select Organization settings and Overview to review](_img/_shared/organization-settings-select-overview.png)

   ![Confirm organization settings, Azure AD-backed](_img/_shared/organization-settings-azure-ad-backed.png)

   If you're using an **Azure AD account**, confirm the directory that you're connected to. If you belong to multiple directories, ensure that you want to connect this directory to your organization. Changing the directory now is easier than [changing the directory later](faq-create-organization.md#ChangeDirectory).

To sign in to your organization at any time, go to (https://dev.azure.com/{yourorganization}).

> [!NOTE]
> If you activated your Visual Studio subscription with a Microsoft account, and your subscription includes Azure DevOps as a benefit, learn [how to add your work or school account](../../billing/link-msdn-subscription-to-organizational-account-vs.md) to your subscription so that you can use your subscriber benefits in Azure DevOps.

## Next steps

> [!div class="nextstepaction"]
> [Manage users and access](add-organization-users.md)
> or
> [!div class="nextstepaction"]
> [Create project](../projects/create-project.md)

## Related articles

* [Create your backlog](../../boards/backlogs/create-your-backlog.md)
* [Manage your process](../../organizations/settings/work/manage-process.md)
* [Customize your process](../../organizations/settings/work/customize-process.md)
* Add code to Git or Team Foundation Version Control:
  * Git: Use [Eclipse](../../java/download-eclipse-plug-in.md), [Xcode](../../repos/git/share-your-code-in-git-xcode.md), [Android Studio](/../../java/download-android-studio-plug-in), [IntelliJ](/../../java/download-intellij-plug-in), [Visual Studio](../../repos/git/share-your-code-in-git-vs-2017.md), or [Visual Studio Code](https://code.visualstudio.com/docs/editor/versioncontrol).
  * Team Foundation Version Control: Use [Eclipse](/../../java/download-eclipse-plug-in), [Xcode](../../repos/tfvc/share-your-code-in-tfvc-xcode.md), [Visual Studio](../../repos/tfvc/use-visual-studio-git.md), or [Visual Studio Code](https://code.visualstudio.com/docs/editor/versioncontrol).