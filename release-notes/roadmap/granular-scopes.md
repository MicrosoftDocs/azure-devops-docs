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

We are making more granular Azure DevOps scopes available for you to add to your Azure Active Directory OAuth applications. You can set scopes on an application that will define what operations (e.g. writing to work items, viewing source code, configuring pipelines, etc.) an application can do when connecting to Azure DevOps on behalf of the user. These scopes are a welcome addition to the current state today where apps have only a single broad user impersonation scope that allows the app to perform any operations that the underlying user is permitted to do.
