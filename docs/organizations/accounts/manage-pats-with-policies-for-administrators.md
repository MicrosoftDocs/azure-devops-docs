---
title: Manage personal access tokens using policies
titleSuffix: Azure DevOps
description: Learn how to turn on policies that restrict the scope and lifespan of newly created user PATs.
ms.technology: devops-accounts
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 05/17/2021
monikerRange: '>= tfs-2017'
---

# Use policies to manage users' personal access tokens (PATs)

[!INCLUDE [version-tfs-2017-through-vsts](../../includes/version-tfs-2017-through-vsts.md)]

Learn how to turn on the Azure Active Directory (Azure AD) policies that restrict the scope and lifespan of new user PATs created for Azure DevOps. The following policies can be turned on or off:

- Set maximum lifespan for new PATs
- Restrict creation of global PATs
- Restrict creation of full-scoped PATs

By default, these policies are set to *off*.

## Prerequisites

- Your organization must be linked to Azure AD.
- You must be an Azure DevOps Administrator in Azure Active Directory (Azure AD) to manage these policies for your organization in Azure DevOps. 

To check your role, sign in to the [Azure portal](https://ms.portal.azure.com/#home), and then choose **Azure Active Directory** > **Roles and administrators**. In case that you aren't an Azure DevOps administrator, talk to your administrator.

## Set maximum lifespan for new PATs

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../media/settings/open-admin-settings-vert.png)

3. In the Azure Active Directory tab, find the PLACEHOLDER policy and move the toggle to *on*.



## Restrict creation of global PATs

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../media/settings/open-admin-settings-vert.png)

3. In the Azure Active Directory tab, find the PLACEHOLDER policy and move the toggle to *on*.



## Restrict creation of full-scoped PATs


1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../media/settings/open-admin-settings-vert.png)

3. In the Azure Active Directory tab, find the PLACEHOLDER policy and move the toggle to *on*.







