---
title: Policies to disable personal access token creation
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Policies to disable personal access token creation
hide_comments: true
---

# Policies to disable the creation of personal access tokens (PAT)

As we add support for secure alternatives such as [Managed Identities and Service Principals](./support-azure-managed-identities.md) that reduce the need for personal access tokens (PATs) and other stealable secrets, administrators need new control plane policies to improve authentication security by reducing and even blocking the creation of less secure authentication methods. While basic authentication (plain text user name and password) has been deprecated in Azure DevOps and there is an existing organization policy to turn off using SSH keys already, the ability to turn off PATs was not previously available. Current control plane policies seek to [limit the power and longevity of PATs](/docs/organizations/accounts/manage-pats-with-policies-for-administrator.md).

To that effect, we will be introducing a new control plane policy that administrators can use to reduce or turn off the creation of personal access tokens (PATs). This organizational policies will come with an exception list that allows admins to gradually reduce the creation and usage of personal access tokens (PAT) among their organization without disrupting critical business processes. 



