---
title: TF30277-You do not have sufficient permissions...titleSuffix: Azure DevOps & TFS
description: Occurs when the permissions are not sufficient to allow the user to create a new SharePoint Services site.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: d78a08a0-5dfc-4152-abf4-32b02ba51d36
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---


# TF30277: You do not have sufficient permissions on the Windows SharePoint Services at {0} to create a new site

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

This error occurs when the permissions granted your user account on the Windows SharePoint Services server {*name*} are not sufficient to allow you to create the new SharePoint Services site. A SharePoint site is used as the project portal. You must be granted specific permission by the Windows SharePoint Services administrator.  
  
### To correct this error  
  
Contact the administrator for the Windows SharePoint Services server {*name*} and ask that your user account be added to the Site Administrator group. Your Team Foundation Server administrator may also be able to grant you the required permission.