---
title: Download permissions report for a repository
titleSuffix: Azure DevOps Services
description: Download json-formatted permission report for a repository.  
ms.subservice: azure-devops-audit
ms.author: kaelli
author: KathrynEE
ms.topic: how-to
monikerRange: 'azure-devops'
ms.date: 07/07/2022
---

# Download permission report for a repository 

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

 
To determine the effective permissions of users and groups for a repository, you can download the permissions report. Requesting the report generates an email with a link to download the report. The report lists the effective permissions for the repository you select, for each user and group specified at the time the report is generated. Inherited permissions come from a parent group which you can view from the web portal. The report is a json-formatted report that you can open using Power BI or other json reader.  

You can also use the [Permissions Report REST API](/rest/api/azure/devops/permissionsreport/?view=azure-devops-rest-6.1&preserve-view=true) to download the report. 

## Prerequisites

- To download the permissions report, you must be a member of the Project Collection Administrators group. The user interface button won't appear for users who aren't a member of this group. 


## Open Project Settings>Repositories  

You can download the report for a select repository or for all repositories defined for a project. 

1. Open the web portal and choose the project for the repositories you want to download permissions for. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

1. Open **Project settings>Repositories**.  

	To download the permissions report for all repositories, choose **Security**. 

	For example, here we choose (1) **Project settings**, (2) **Repositories**, and then (3) **Security**.

	:::image type="content" source="../../repos/git/media/git-permissions/open-repositories-s-185.png" alt-text="Screenshot showing choosing Project settings>Repositories>Security.":::

	Otherwise, to set permissions for a specific repository, choose (1) the repository and then choose (2) **Security**.

	:::image type="content" source="../../repos/git/media/git-permissions/choose-git-repo-security-callouts.png" alt-text="Screenshot showing choosing Project settings>Choose a repository>Security.":::

## Download report  

1. Choose **Download detailed report**. 

	:::image type="content" source="media/download-report/download-detailed-report.png" alt-text="Screenshot of All Repositories, Security page, Download detailed report button.":::

	The following message displays indicating the request was submitted to the server. 

	:::image type="content" source="media/download-report/request-submitted-message.png" alt-text="Screenshot of request submitted message.":::

1. Once you receive the email from Azure DevOps Notifications, open it and choose **Download Report**. 

	A report labeled **PermissionsReport_**<em>GUID</em>.json appears in your **Downloads** folder. 
 
	> [!IMPORTANT]
	> Reports are automatically deleted after 28 days of the request. 


## Related articles  

- [Set Git repository permissions](../../repos/git/set-git-repository-permissions.md)
- [Set TFVC repository permissions](../../repos/tfvc/set-tfvc-repository-permissions.md) 
- [Permissions Report REST API](/rest/api/azure/devops/permissionsreport/?view=azure-devops-rest-6.1&preserve-view=true)
- [Manage permissions with command line tool](manage-tokens-namespaces.md) 

