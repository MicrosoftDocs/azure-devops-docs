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

We are making more granular Azure DevOps scopes available for you to add to your Azure Active Directory OAuth applications. 

By setting scopes on an application, you can define what operations (e.g. writing to work items, viewing source code, configuring pipelines, etc.) an application can do when connecting to Azure DevOps on behalf of the user. These scopes are a welcome addition to the current state today where apps have only a single broad user impersonation scope that allows the app to perform any operations that the underlying user is permitted to do. 

Adding scopes to an application will require that any applications you integrate with must first declare what they are attempting to do for you by defining these scopes ahead of time. These scopes will be available for you to review before consenting to authorizing this app to perform actions on your behalf. This ensures you have more visibility on what an application is doing with resources you have access to.
As an application developer, this is also a boon in that it will limit the risk vector for what can happen if a token issued by your application falls into the wrong hands.
