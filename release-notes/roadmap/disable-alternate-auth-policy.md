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

As we work on building out secure forms of authentication, you may want to limit the ability of users within your organization to use one or more authentication mechanisms that have not been approved within your organizations. 

We are hoping to add policies for tenants to choose whether they want users to access Azure DevOps through alternate authentication methods, like plain text username and password, personal access tokens (PATs) and SSH keys. 

You will also be able to define if you want a selected list of users or groups within your tenant to have access to these authentication mechanisms, even if these policies are disabled for the rest of the tenant. This ensures that you can still grant access to trusted individuals who may need to use these with critical services in workflows that only support certain authentication methods today, i.e. using PATs in self-hosted agent registration.
