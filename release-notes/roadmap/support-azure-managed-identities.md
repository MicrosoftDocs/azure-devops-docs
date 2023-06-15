---
title: Managed Identities and Service Principal support
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Managed Identities and Service Principal support
hide_comments: true
---

# Managed Identities and Service Principal support

Today most application integration scenarios rely on Personal Access Tokens (PATs) to integrate with Azure DevOps. PATs can easily be leaked, potentially enabling malicious actors to authenticate as powerful users without the protections of Azure Active Directory security features like Conditional Access Policies. To prevent this, they may require time-consuming maintenance, including regular rotation. 

We are working on enabling applications to instead use Managed Identities and Service Principals to integrate with Azure DevOps through REST APIs and client libraries. This highly requested feature offers Azure DevOps customers a more secure alternative to PATs. And Managed Identities offer the ability for applications running on Azure resources to obtain Azure AD tokens without needing to manage any credentials at all. 

Managed Identities and Service Principals can be setup in Azure DevOps and given permissions to specific assets (projects, repos, pipelines), just like regular users. This allows applications that use Managed Identities or Service Principals to connect to Azure DevOps and perform actions on behalf of themselves, instead of on behalf of a user, as PATs do. This ensures that teams can better manage their services collectively, instead of relying on any one individual to provide a token for authentication.