---
title: Policies to disable authentication methods
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Policies to disable authentication methods
hide_comments: true
---

# Policies to disable the use of personal access tokens (PAT)

As we add support for more secure alternatives such as [Managed Identities and Service Principals](./support-azure-managed-identities.md) that reduce the need for personal access tokens and other stealable secrets, administrators need new control plane policies to improve authentication security by reducing and even blocking the usage of less secure authentication methods. To that effect, we will introduce a new control plane policy that administrators can use to reduce or turn off the usage of personal access tokens (PATs).These policies will come with an exception list that allows admins to gradually reduce the use of personal access tokens (PAT) without disrupting their critical business processes. Please note that basic auth (plain text user name and password) usage is deprecated in Azure DevOps and there is an existing organization policy to turn off using SSH keys already.


