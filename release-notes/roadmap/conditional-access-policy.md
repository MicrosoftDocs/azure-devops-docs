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

Today, Azure DevOps supports all [conditional access policies](/azure/active-directory/conditional-access/overview) set on the Azure Active Directory tenant for web and interactive flows during initial signin. Once a user has signed in, however, only IP-fencing policies are supported on an ongoing basis. We will invest in deepening Azure DevOps' integration with Azure Active Directory such that *all* conditional acess policies are continuously evaluated - typically on an hourly basis. This will improve support for policies like [device compliance](/azure/active-directory/conditional-access/howto-conditional-access-policy-compliant-device), which can be used to prevent usage from devices that fail to meet a variety of compliance requirements.

> [!NOTE]
> Non-interactive flows - for example, requests made programmatically using Personal Access Tokens - will continue to only support IP-fencing conditional access policies.
