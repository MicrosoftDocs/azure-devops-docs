---
title: Set SharePoint permissions for TFS
description: How-to guide to set add users to SharePoint integrated with Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-security
ms.topic: conceptual
ms.assetid: 
toc: show
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 10/02/2017
monikerRange: '>= tfs-2013 <= tfs-2017'
---

# Set SharePoint site permissions

[!INCLUDE [version-tfs-2013-2017](../../_shared/version-tfs-2013-2017.md)]

> [!IMPORTANT]
> Integration with a SharePoint site is only supported for on-premises TFS. For information on what is supported for Azure DevOps, see [Dashboards and reports overview](../../report/overview.md). If you don't have a site and want to add it, see [Configure or add a project portal](../../report/sharepoint-dashboards/configure-or-add-a-project-portal.md). 

## Add users to SharePoint site

1.  Open your project portal.

2.  Choose **Share**, and add users or user groups to the appropriate SharePoint groups.

    ![Choose the SharePoint group and add users](../accounts/_img/add-users-team-project/invite-people.png)

    -   To add users who require minimal access to the project, choose **Readers**.
    -   To add users who contribute fully to this project, choose **Contributors**.
    -   To add users who act as project leads, choose **Full Control**.

For more information about users and groups in SharePoint Products,
[go here](https://technet.microsoft.com/library/cc262690.aspx).

If your TFS deployment is integrated with SQL Server Reporting Services,
you'll need to manage users in the appropriate SQL Server Reporting Services groups,
or they won't be able to view or edit those reports.


## Add a user account as an administrator of the SharePoint site

1.  On the server that's running SharePoint Products, open SharePoint Central Administration.

2.  Grant permissions that are appropriate for this user at the farm or the Web application level, depending on your security needs.

	For optimum interoperability, consider adding users of the **Team Foundation Administrators** group
	to the following groups in SharePoint Products:

	-   **Farm Administrators**

	-   **Site Collection Administrators** group for all site collections that the deployment of Team Foundation Server uses

	![Follow instructions for your version of SharePoint](/azure/devops/server/admin/_img/add-administrator-tfs/people-and-groups.png)


