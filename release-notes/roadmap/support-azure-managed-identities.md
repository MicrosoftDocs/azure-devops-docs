---
title: Support Azure Managed Identities and Service Principals
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Support Azure Managed Identities and Service Principals
hide_comments: true
---

# Support Azure Managed Identities and Service Principals

We are working on enabling applications to use managed identities and service principals to integrate with Azure DevOps through REST APIs and client libraries. 

This highly requested feature offers our customers a more secure alternative to personal access tokens (PATs), which can be more easily leaked and may require time-consuming maintenance to regularly rotate. Managed identities, in particular, offer the ability for applications on Azure resources to obtain Azure AD tokens without needing to manage any credentials at all. 

Furthermore, this form of authentication allows an application to perform actions on behalf of itself, instead of on behalf of a user, as PATs do. This ensures that teams can better manage their services collectively, instead of relying on any one individual to provide a token for authentication.

---
