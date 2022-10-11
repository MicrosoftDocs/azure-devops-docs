---
title: Conditional Access Policy support for device state
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Conditional Access Policy support for device state
hide_comments: true
---

# Conditional Access Policy support for device state

We will work on honoring all [conditional access policies](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/overview) that a tenant has set on its users via Azure Active Directory.

Today, conditional access policies are largely supported through web flows on signin and IP-based conditional access policies are supported for non-interactive flows, i.e. any requests made programmatically instead of through the web pages. Additional work will be done to ensure that _all_ conditional access policies will be respected for _both_ web and non-interactive interactions with Azure DevOps. Most notably,  we hope to provide support for [device state](https://docs.microsoft.com/azure/active-directory/conditional-access/concept-conditional-access-conditions#device-state-preview) conditions.
