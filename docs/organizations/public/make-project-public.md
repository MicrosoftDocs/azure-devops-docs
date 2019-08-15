---
title: Make your project public or private 
titleSuffix: Azure DevOps Services Public Project 
description: Switch your project from private to public or from public to private 
ms.technology: devops-public-projects
ms.prod: devops
ms.assetid:
ms.reviewer: 
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: 'azure-devops'
ms.date: 02/14/2019
---

# Quickstart: Change the project visibility, public or private

[!INCLUDE [temp](_shared/version-public-projects.md)]  

In this quickstart, you learn how to change the visibility of your project to and from public or private.
You can easily switch a private project to a public project, and vice-versa.  Before you do so, review the notes provided in [Private-to-public migration checklist](migration-checklist.md).

> [!TIP]  
> Look through our [migration checklist](migration-checklist.md) before you make an existing project public.
> It has tips and ideas for exposing a limited set of data, in case you don't want your entire history available.

## Prerequisites

- You must have an organization created in Azure DevOps. If you don't have one, [do that now](../../user-guide/sign-up-invite-teammates.md).
- As an organization owner, you can change policies and change project information. If you're not the owner, then you must be [a member of the Project Collection Administrators Group](../security/set-project-collection-level-permissions.md#collection-level).

## Enable anonymous access to projects for your organization

Before you can change a private project, to a public project, you must enable anonymous access for your organization.

1. From your web browser, sign-in to Azure DevOps. You must be signed in to create a public project.

2. Choose the ![](../../_img/icons/project-icon.png) Azure DevOps logo to open **Projects**. Then choose **Admin settings**.

	> [!div class="mx-imgBorder"]  
	> ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)  

3. Choose the **Policy** page, and select **On** for **Allow public projects**.

	> [!div class="mx-imgBorder"]  
	> ![Organization settings, Policy page, Security policies](_img/create-public-project/org-policies-change-anon.png)

## Make a private project public, or a public project private

1. Choose **Project Settings** in the sidebar.

	> [!div class="mx-imgBorder"]  
	> ![Open project settings](_img/make-public-private/open-project-settings-public-vert-brn.png)  

2. Choose **Overview**.  

3. To switch from private to public, choose **Public** from the **Visibility** menu of options.  

	> [!div class="mx-imgBorder"]  
	> ![Project Settings, Overview, Visibility](_img/make-public-private/switch-to-public.png) 

	To switch from public to private, choose **Private** from the **Visibility** menu of options.

4. Choose **Save**.   


## Next steps

> [!div class="nextstepaction"]
> [Download code](browse-code-public.md)

