---
title: Full support for Conditional Access Policies
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Full support for Conditional Access Policies
hide_comments: true
---

# Full support for Conditional Access Policies

This will bring Azure DevOps on par with other Azure services in honoring all [conditional access policies](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/overview) set on the Azure Active Directory for the web and interactive flows. Today, all conditional access policies are supported during initial signin whereas only the IP-fencing policies are supported post signin. This work will ensure that all conditional access policies are evaluated post signin also. For example, allowing access based on conditions like device compliance, which can be used to set filters to only accept specific company-approved devices, like privileged access workstations to access Azure DevOps will now be enforced hourly.

However, non-interactive flows, i.e. any requests made programmatically (e.g., using a PAT) instead of through the web pages will continue to only support IP-based conditional access policies.
