---
title: Setup Active Directory or Azure Active Directory for VSTS & TFS
description: Manage large groups of users using Active Directory (AD) for TFS or Azure Active Directory (AAD) for VSTS 
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 12/18/2017
---



# Setup Active Directory or Azure Active Directory 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

The recommended method for managing a large set of user accounts is to use Azure Active Directory (AAD) for Visual Studio Team Services (VSTS) and Active Directory (AD) for Team Foundation Server (TFS). By managing your user base using AD/AAD, you simplify the maintenance of managing permissions across your organization.  

If you only have to manage a small set of users, then you can skip this step. However, if you foresee that your organization may grow, you may want to set up AD or AAD. Also, if you plan on paying for extra services, you'll need to set up AAD for use with VSTS or TFS to support billing. 

Use this topic to access articles that will show you how to:
> [!div class="checklist"]   
> * Set up Azure Active Directory for use with VSTS or TFS
> * Manage organizational access with Azure AD           
> * Set up Active Directory for use with TFS    

> [!NOTE]   
> Without Azure AD, all VSTS users must sign in using Microsoft accounts, and you must manage account access by individual user accounts. Even if you manage account access using Microsoft accounts, you need to set up an [Azure subscription in order to manage billing](../billing/set-up-billing-for-your-account-vs.md). 


## Set up Azure Active Directory for use with VSTS or TFS  

- [Access VSTS with Azure Active Directory (Azure AD)](../accounts/access-with-azure-ad.md)

## Manage organizational access with Azure AD

- [Add VSTS users to your Azure AD](../accounts/add-users-to-aad.md)  
- [Connect VSTS account to Azure AD](../accounts/connect-account-to-aad.md) 
- [Disconnect VSTS account from Azure AD](../accounts/disconnect-account-from-aad.md)  
- [Delete users from VSTS connected to Azure AD](../accounts/delete-users-from-services-aad.md) 

## Setup Active Directory for use with TFS  

Use these resources to learn about installing Active Directory. Typically, you should install Active Directory prior to installing TFS. 

- [Install Active Directory Domain Services (Level 100)](https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/deploy/install-active-directory-domain-services--level-100-)
- [Step-By-Step: Setting up Active Directory in Windows Server 2016](https://blogs.technet.microsoft.com/canitpro/2017/02/22/step-by-step-setting-up-active-directory-in-windows-server-2016/)


## Try this next
> [!div class="nextstepaction"]
> [Add AD/AAD security groups to built-in security groups](add-ad-aad-built-in-security-groups.md)


## Related notes

- [About security and identity](about-security-identity.md)
- [How billing works](../billing/overview.md)
- [Set up billing to pay for users, pipelines, and cloud-based load testing in VSTS](../billing/set-up-billing-for-your-account-vs.md) 
- [What is Azure Active Directory?](https://docs.microsoft.com/azure/active-directory/active-directory-whatis)
- [Get started with Azure AD](https://docs.microsoft.com/azure/active-directory/get-started-azure-ad)
- [Requirements and compatibility](../tfs-server/requirements.md)