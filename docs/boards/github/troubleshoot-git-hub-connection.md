---
title: Troubleshoot GitHub repository connection to a project in Azure DevOps Services  
titleSuffix: Azure Boards
description: Learn how to resolve connection problems with a GitHub repository and Azure Boards project  
ms.assetid: 
ms.prod: devops
ms.technology: devops-agile
ms.topic: quickstart
ms.manager: douge
ms.author: kaelli
author: KathrynEE
monikerRange: 'vsts'
ms.date: 12/04/2018
---

# Troubleshoot GitHub repository connection to Azure Boards 

[!INCLUDE [temp](../_shared/version-vsts-only.md)] 

When you create a GitHub connection, you are granted access to GitHub as an OAuth app or by using a Personal Access Token (PAT).

The access by Azure Boards to the GitHub repo can be revoked in one or more ways. If the user who created the connection PAT is revoked or the permission scope changes, then the Azure Boards access is revoked. Or the OAuth app’s authorization can be revoked entirely for a given repo.

[!INCLUDE [temp](../_shared/github-platform-support.md)]  

When the Azure Boards connection to GitHub no longer has access, it shows an alert status in the user interface with a red-X that has a tooltip such as, *Unable to connect to GitHub*.
 
To resolve the problem, consider the following:  

- **If the connection is using OAuth**:
	- The Azure Boards application had it's access denied for one of the repositories.
	- GitHub might be unavailable/unreachable. This could be due to an outage in either service or an infrastructure/network issue on-prem. You can check service status from the following links:
		- [GitHub](https://status.github.com)  
		- [Azure Devops](https://status.dev.azure.com/)

	To resolve the first issue, delete and recreate the connection to the GitHub repository. This will cause GitHub to prompt to reauthorize Azure Boards.   

- **If the connection is using a PAT:**
	- The PAT may have been revoked or the required permission scopes changed and are insufficient.
	- The user may have lost admin permissions on the GitHub repo.  

	To resolve, recreate the PAT and ensure the scope for the token includes the required permissions: `repo, read:user, user:email, admin:repo_hook`. 


