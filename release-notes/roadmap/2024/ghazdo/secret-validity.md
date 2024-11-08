---
title: Secret validity checking
author: ncouraud
ms.author: nicour
ms.date: 11/8/2023
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Advanced Security shows the results of validity checking for supported secret types
hide_comments: true
---

# Advanced Security shows the results of validity checking for supported secret types

As with on GitHub, Advanced Security will be able to produce validity data for selected partner tokens. 

Validity checks determine whether a token is still active and, when possible, whether it was ever active. This is useful when you’re deciding how to remediate an exposure. For example, you might prioritize remediating active secrets before checking your security logs for unauthorized access via API keys that have already been revoked.
