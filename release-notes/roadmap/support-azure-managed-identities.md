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

We are working on enabling applications to use managed identities and service principals to integrate with Azure DevOps through REST APIs and client libraries. 

This highly requested feature offers our customers a more secure alternative to personal access tokens (PATs), which can be more easily leaked and may require time-consuming maintenance to regularly rotate. Managed identities offer the ability for applications on Azure resources to obtain Azure AD tokens without needing to manage any credentials at all. 

Managed identities and service principals can be setup in Azure DevOps and given permissions to specific assets (projects, repos, pipelines) like regular users. This allows the application that uses managed identities or service principals to connect to Azure DevOps and perform actions on behalf of itself, instead of on behalf of a user, as PATs do. This ensures that teams can better manage their services collectively, instead of relying on any one individual to provide a token for authentication.




---
