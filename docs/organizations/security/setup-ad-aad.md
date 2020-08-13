---
title: Set up Active Directory / Azure AD
description: Manage large groups of users using Active Directory (AD) for Azure DevOps Server or Azure Active Directory (Azure AD) for Azure DevOps 
ms.technology: devops-security
ms.assetid: 
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2013'
ms.date: 07/27/2020
---


# Set up Active Directory or Azure Active Directory

[!INCLUDE [version-all](../../includes/version-all.md)]

The method we recommend for managing a large set of user accounts is to use Azure Active Directory (Azure AD) for Azure DevOps Services and Active Directory (AD) for Azure DevOps Server or Team Foundation Server (TFS). By managing your user base using AD/Azure AD, you simplify the maintenance of managing permissions across your organization.

If you only have to manage a small set of users, then you can skip this step. However, if you foresee that your organization may grow, you may want to set up AD or Azure AD. Also, if you plan on paying for extra services, you'll need to set up Azure AD for use with Azure DevOps to support billing.

[!INCLUDE [temp](../../includes/version-selector-minimize.md)]

::: moniker range="azure-devops"
Use this article to access articles that show you how to:
> [!div class="checklist"]
> * Set up Azure Active Directory for use with Azure DevOps Services
> * Manage organizational access with Azure AD
::: moniker-end

::: moniker range="< azure-devops"

Use this article to access articles that show you how to:
> [!div class="checklist"]
> * Set up Active Directory for use with on-premises Azure DevOps Server

::: moniker-end

> [!NOTE]
> Without Azure AD, all Azure DevOps users must sign in using Microsoft accounts, and you must manage account access by individual user accounts. Even if you manage account access using Microsoft accounts, you need to set up an [Azure subscription in order to manage billing](../../billing/set-up-billing-for-your-organization-vs.md).

::: moniker range="azure-devops"

## Set up Azure Active Directory for use with Azure DevOps Services

* [About accessing Azure DevOps with Azure Active Directory (Azure AD)](../../organizations/accounts/access-with-azure-ad.md)

## Manage organizational access with Azure AD

* [Add or delete users using Azure Active Directory](https://docs.microsoft.com/azure/active-directory/fundamentals/add-users-azure-active-directory)
* [Connect Azure DevOps organization to Azure AD](../../organizations/accounts/connect-organization-to-azure-ad.md)
* [Disconnect Azure DevOps organization from Azure AD](../../organizations/accounts/disconnect-organization-from-azure-ad.md)
* [Troubleshoot access with Azure Active Directory](../../organizations/accounts/faq-azure-access.md?toc=/azure/devops/organizations/security/toc.json&bc=/azure/devops/organizations/security/breadcrumb/toc.json) 

::: moniker-end

::: moniker range="< azure-devops"

## Set up Active Directory for use with Azure DevOps Server

Use these resources to learn about installing Active Directory. Typically, you should install Active Directory prior to installing Azure DevOps Server.

* [Install Active Directory Domain Services (Level 100)](/windows-server/identity/ad-ds/deploy/install-active-directory-domain-services--level-100-)
* [Active Directory Domain Services Getting Started](/windows-server/identity/ad-ds/ad-ds-getting-started)

::: moniker-end


## Next steps

> [!div class="nextstepaction"]
> [Add AD/Azure AD security groups to built-in security groups](add-ad-aad-built-in-security-groups.md)

## Related articles

* [About security and identity](about-security-identity.md)
* [How billing works](../../billing/overview.md)
* [Set up billing to pay for users, pipelines, and cloud-based load testing in Azure DevOps](../../billing/set-up-billing-for-your-organization-vs.md) 
* [What is Azure Active Directory?](/azure/active-directory/active-directory-whatis)
* [Get started with Azure AD](/azure/active-directory/get-started-azure-ad)
 
