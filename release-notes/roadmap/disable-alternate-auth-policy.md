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

As we bring in support for secure alternatives (e.g., managed identities) that reduce the need for PATs and other stealable secrets, administrators need new control plane policies to improve authentication security and reduce the usage of less secure authentication methods gradually. 

We will introduce new control plane policies that administrators can use to reduce or turn off using less secure authentication methods like basic auth (plain text user name and password), personal access tokens (PATs) and SSH keys. These policies will come with an exception list that allows admins to gradually reduce the use of these less secure methods without disrupting their critical business processes.

