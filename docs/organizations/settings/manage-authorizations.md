---
ms.topic: conceptual
title: Authorize other services to access Azure DevOps
description: Learn how to authorize other services to work with Azure DevOps Services.
ms.subservice: azure-devops-security
ms.assetid: 314a28cd-b2ae-41a0-8dfb-330222c1aed0
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/10/2024
---

#  Authorize other services to access Azure DevOps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

> [!IMPORTANT]
> This page applies to Azure DevOps OAuth authorizations. Azure DevOps OAuth is slated for deprecation in October 2025. [Learn more in our blog post](https://devblogs.microsoft.com/devops/?p=69491).

You can grant other services access to Azure DevOps using the OAuth 2.0 framework. This secure authorization allows services to access resources like work items, source code, and build results. When authorizing a service, use your Microsoft account (for example, `me@live.com`) or your work account (for example, `me@my-workplace.com`). The authorized service doesn't have access to your Azure DevOps credentials, and you can revoke authorizations as needed.

## Authorize a service

A typical authorization flow might be similar to the following example:

1. When you're using a service that relies on Azure DevOps resources, the service requests authorization.

2. If you're not already signed in, Azure DevOps prompts you to enter your credentials.
   
   :::image type="content" source="../../service-hooks/media/authorize/vso-sign-in.png" alt-text="Screenshot of the Visual Studio sign in prompt.":::

3. After signing in, you get the authorization approval page.

   :::image type="content" source="../../service-hooks/media/authorize/vso-authorize.png" alt-text="Screenshot of Accept or Deny buttons for authorization of the application.":::

   A service can only request full access through the REST APIs, so the authorization request may not be specific.

4. Review the request and approve the authorization.

   The authorized service can access resources within your Azure DevOps organization.

5. To ensure an authorization request is legitimate, do the following actions:

   - Check for the Azure DevOps branding at the top of the approval page.
   - Ensure the approval page URL starts with ```https://app.vssps.visualstudio.com/```.
   - Be alert for any HTTPS-related security warnings in your browser.
   - Remember that services don't directly ask for your credentials; they rely on the authorization approval page provided by Azure DevOps.

## Manage authorizations

Review the services that you granted authorization to access your organization.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: **User settings** > **Profile**.
3. Select **Authorizations**.  

   :::image type="content" source="media/profile-settings-authorizations.png" alt-text="Screenshot of profile settings with Authorizations selected.":::

4. To revoke an authorization so the service can't access your organization on your behalf, select :::image type="icon" source="../../boards/media/icons/trash-can.png" border="false"::: **Revoke** > **Revoke**.

   :::image type="content" source="media/revoke-authorized-app.png" alt-text="Screenshot showing highlighted Revoke trash can for selection.":::

## Next steps

> [!div class="nextstepaction"]
> [Set user preferences](set-your-preferences.md)

## Related articles

- [Change application access policies](../accounts/change-application-access-policies.md)
- [Service accounts and dependencies](/azure/devops/server/admin/service-accounts-dependencies)
- [Add users to an organization (Azure DevOps Services)](../accounts/add-organization-users.md) 
- [Add users to a team or a project](../../organizations/security/add-users-team-project.md)   
- [Add users to an administrator role](/azure/devops/server/admin/add-administrator)   
