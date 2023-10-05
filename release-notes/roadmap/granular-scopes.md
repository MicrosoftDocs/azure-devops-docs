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

We are bringing support for granular Azure DevOps scopes that can be used to limit the behavior of the Azure Active Directory OAuth applications that integrate with Azure DevOps.

By setting scopes on an application, you can limit the operations (e.g. writing to work items, viewing source code, configuring pipelines, etc.) an application can do when connecting to Azure DevOps on behalf of the user. Apps that use a single broad user impersonation scope that allows the app to perform any operations that the underlying user is permitted to do can now use the granular scopes to limit its behavior. For example, an app that is only reading work items can be given only a workitem_read scope so that it can't do anything outside of this behavior intentionaly or otherwise. 

Adding scopes to an application will require that any applications you integrate with must first declare what they are attempting to do for you by defining these scopes ahead of time. These scopes will be available for you to review before consenting to authorizing this app to perform actions on your behalf. This ensures you have more visibility on what an application is doing with resources you have access to.

As an application developer, this will help limit the risk vector if a token issued by your application falls into wrong hands.
