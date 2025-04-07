---
title: Continuous access evaluation
author: ramrajesh
ms.author: rajr
ms.date: 04/07/2025
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Continuous access evaluation in Azure DevOps
hide_comments: true
---

# Continuous access evaluation

Token expiration and refresh mechanisms are commonly employed within the industry. Upon successful user login to Azure DevOps, the web client acquires an OAuth 2.0 access token from Entra, provided that all requisite conditional access policies are met. These tokens generally remain valid for one hour. After expiration, the web client will automatically refresh the token from Microsoft Entra, allowing for a reassessment of access policies, such as Conditional Access or account status. However, this process does not operate in near real-time; for instance, a security event like the deletion of a user account may take up to an hour for Azure DevOps to detect and respond to, as it waits for the existing access token to expire. Such delays in policy enforcement could hinder timely responses to security incidents.

In contrast, [Continuous Access Evaluation (CAE)](/entra/identity/conditional-access/concept-continuous-access-evaluation) facilitates near real-time enforcement. It establishes a bidirectional communication channel between Microsoft Entra and Azure DevOps services, enabling Azure DevOps to locally synchronize and verify conditional access policies for client changes, such as change in IP address. Additionally, the token issuer (Entra) can alert Azure DevOps to stop accepting tokens for a specific user due to issues like account compromise, disablement, or other concerns, and Azure DevOps is able to act accordingly.
