---
title: Policies to disable alternate authentication credentials
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Policies to disable alternate authentication credentials
hide_comments: true
---

# Policies to disable alternate authentication credentials

As we add support for more secure alternatives such as [Managed Identities and Service Principals](./support-azure-managed-identities.md) that reduce the need for PATs and other stealable secrets, administrators need new control plane policies to improve authentication security by reducing and even blocking the usage of less secure authentication methods. We will introduce new control plane policies that administrators can use to reduce or turn off use of less secure authentication methods like basic auth (plain text user name and password), Personal Access Tokens (PATs) and SSH keys. These policies will come with an exception list that allows admins to gradually reduce the use of these less secure methods without disrupting their critical business processes.

