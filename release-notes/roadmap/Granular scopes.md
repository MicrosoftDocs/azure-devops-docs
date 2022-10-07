---
title: Granular scopes for Azure Active Directory OAuth
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Granular scopes for Azure Active Directory OAuth
hide_comments: true
---

# Granular scopes for Azure Active Directory OAuth

Setting granular Azure DevOps scopes (e.g., workitem read, code write) for Service principals in Azure Active Directory. This will ensure that Azure Active Directory OAuth apps can only perform operations limited to the assigned scopes when connecting to Azure DevOps on behalf of the user. This will replace the broad user impersonation scope that is available today which allows the app to perform any operations only limited by the permissions of the underlying user.
