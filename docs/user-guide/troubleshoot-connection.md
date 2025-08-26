---
title: Troubleshoot Azure DevOps connection and access issues
titleSuffix: Azure DevOps
description: Learn how to resolve common connection problems, authentication errors, and permission issues when accessing Azure DevOps projects and organizations.
ms.subservice: azure-devops-new-user
ms.author: chcomley
author: chcomley
ms.topic: troubleshooting
ms.date: 08/26/2025
monikerRange: '<= azure-devops'
---

# Troubleshoot connecting to a project

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

If you're experiencing issues connecting to a project in Azure DevOps, follow these troubleshooting steps to resolve common connectivity problems.

## Prerequisites

[!INCLUDE [prerequisites-project-member-only](../includes/prerequisites-project-member-only.md)]

## Troubleshoot sign in

Azure DevOps supports two types of identities for sign in: Microsoft Personal accounts and Microsoft Entra accounts. If the organization you're trying to access is connected to a Microsoft Entra tenant, you can only sign in with a Microsoft Entra account – either a member or a B2B guest. 

### 401 - Not Authorized

> [!div class="mx-imgBorder"]
> ![Troubleshoot Azure DevOps connection 401 error 1](media/troubleshoot-connection/401_notauthorized.png)

The most common sign in error is *401 Not Authorized*, which occurs when your identity doesn't have permissions to access the organization or a resource within the organization. The following list outlines the most common causes for the 401 error:

* Your identity isn't a member of the organization.
* You're trying to sign in with an alias, rather than your user principal name (UPN).
* Your identity doesn't have Read permissions on the project or resource you're trying to access.
* Your identity is a B2B guest in the Microsoft Entra tenant linked to the organization, and you never accepted the Microsoft Entra tenant invitation yet.
* You have a personal Microsoft account with a sign-in address that matches a Microsoft Entra account, and you're signing in with the wrong account.

### Your identity isn't a member of the organization

If you're getting a 401 error when trying to access your Azure DevOps organization, the first thing you should do is reach out to your Azure DevOps administrator to confirm that your identity shows up in the User list.

If you're authenticating with a Microsoft Entra ID account, the identity that shows up in the Users list must match your user principal name (UPN) in the Microsoft Entra tenant. If you're authenticating with a personal Microsoft account, the identity in the Users list must match the primary account.

If you're a B2B guest in the Microsoft Entra tenant connected to your Azure DevOps organization, ensure that your UPN in the guest tenant exactly matches the UPN in your home tenant, including casing.

> [!NOTE]
> B2B guests show up in the Microsoft Entra ID portal as having a UPN in the format `{username}_{homeDomain}#EXT#@{guestDomain}`. The `{username}_{homeDomain}` is what needs to match the UPN in the home tenant, replacing the `_` with `@`.

### You're trying to sign in with an alias, rather than your user principal name (UPN)

Azure DevOps doesn't support sign in aliases. You must sign in with your User Principal Name (UPN), if you're authenticating with a Microsoft Entra account, and the primary account if you're authenticating with a Personal Account.

For example, if your UPN is `12345@mycompany.com` and you configured a sign-in alias of `MyName@mycompany.com`, your administrator should add `12345@mycompany.com` to the org, and you should use `12345@mycompany.com` when going through the sign-in process. You can't use `MyName@mycompany.com` to sign in to Azure DevOps.

### Your identity doesn't have Read permissions on the project or resource you're trying to access

You might have access to the Azure DevOps organization but not have permission on the specific project or resource you're trying to access. Permissions typically get controlled by membership in built-in or custom groups, such as the Project Contributors or Project Readers group. If you're able to sign in to the root of your organization (`https://dev.azure.com/{orgName}`) but can't access a more specific link (like `https://dev.azure.com/{orgName}/{projectName}`), reach out to your Azure DevOps administrator to ensure you're assigned at least the Read permission on the asset you're trying to access.

### Your identity is a B2B guest in the Microsoft Entra tenant linked to the organization, and you haven't accepted the Microsoft Entra tenant invitation yet

To sign in to Azure DevOps as a B2B guest, accept the Microsoft Entra tenant invitation that gets sent to your email.

Microsoft Entra tenant admins can view whether you accepted the invitation from the Azure portal, and trigger a new notification to be sent, if needed:

1. Go to https://portal.azure.com.
2. Go to the Microsoft Entra ID portal.
3. Select **Manage** > **Users**.
4. Select the guest user.
5. On the **Overview** page, look for the B2B invitation tile.
6. If the state is still "Pending acceptance," there's a "Resend invitation" link that you can use to trigger a new email to be sent.

### You have a personal Microsoft account with a sign-in address that matches a Microsoft Entra account, and you're signing in with the wrong account

For organizations that aren't connected to a Microsoft Entra tenant, you can sign in with either a Microsoft personal account or a Microsoft Entra account. The account you choose when you first sign into the Azure DevOps organization determines the account you need to use going forward. Azure DevOps treats these accounts as separate identities, so you can't interchange which one you sign in with.

If you want to change which identity you use to access the organization, have your administrator remove and readd you from the organization. This action puts your identity back into the state where it's waiting to see if you use the Microsoft personal account or the Microsoft Entra version of the account.

We generally recommend against having matching personal and Microsoft Entra accounts, as it can cause unnecessary confusion. You can rename your personal account to no longer match your Microsoft Entra account by following the instructions here: [Change the email address or phone number for your Microsoft account - Microsoft Support](https://support.microsoft.com/help/12407/microsoft-account-change-email-phone-number).

If you think you're a member of the organization, but get this error page, [contact Support](https://developercommunity.visualstudio.com/spaces/21/index.html).

## Troubleshoot connectivity

To resolve connectivity issues, complete the following steps:

1. Sign out of your browser. To do so, select the [Visual Studio sign out](https://aka.ms/VsSignout) link.
2. Delete the cookies in your browser. To delete cookies in most browsers, select **Ctrl**+**Shift**+**Delete**.
3. Open Microsoft Edge and delete the browser cookies. The Visual Studio IDE uses Microsoft Edge cookies.
4. Close all browsers and close the Visual Studio IDE.
5. Use a private browser session to retry the connection. If the issue is with the Visual Studio IDE, remove the connection and then readd it in Team Explorer.

## I still need help

If you’re still blocked after going through this guide, [contact Microsoft Support](provide-feedback.md). Support asks you to provide a browser trace of your sign-in attempt to troubleshoot. Follow the instructions at [Capture a browser trace for troubleshooting](capture-browser-trace.md) to ensure the trace contains the information Support needs to investigate the issue.
