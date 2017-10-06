---
title: Set SharePoint permissions for TFS
description: How-to guide to set add users to SharePoint integrated with Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 
toc: show
ms.manager: douge
ms.author: kaelli
ms.date: 10/02/2017
---


# Set SharePoint site permissions 

**TFS 2017 | TFS 2015 | TFS 2013**  

> [!IMPORTANT]  
> Integration with a SharePoint site is only supported for on-premises TFS. For information on what is supported for VSTS, see [Dashboards and reports overview](../report/overview.md). If you don't have a site and want to add it, see [Configure or add a project portal](../report/sharepoint-dashboards/configure-or-add-a-project-portal.md). 

## Add users to SharePoint site

1.  Open your project portal.

2.  Choose **Share**, and add users or user groups to the appropriate SharePoint groups.

    ![Choose the SharePoint group and add users](../accounts/_img/add-users-team-project/invite-people.png)

    -   To add users who will require minimal access to the project, choose **Readers**.
    -   To add users who will contribute fully to this project, choose **Contributors**.
    -   To add users who will act as project leads, choose **Full Control**.

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

	![Follow instructions for your version of SharePoint](../tfs-server/_img/add-administrator-tfs/people-and-groups.png)



<!---
	### Reporting Services

	2.  Go to `http://{ReportServer}/Reports/Pages/Folder.aspx`, where {ReportServer} is the name of the server
		that's running Reporting Services.

		> If you are using a named instance, include its name in the path of the reports, like this:
		> `http://{ReportServer}/Reports_{InstanceName}/Pages/Folder.aspx`

	3.  Choose **Folder Settings**, and then choose **New Role Assignment**.

	4.  Add the account name of the user or group to whom you want grant administrative permissions
		and grant them membership in the Team Foundation Content Manager role.

		![Click and choose, or tab, spacebar, and enter](../accounts/_img/add-administrator-tfs/rs-role-assignment.png)


## Add users to Reporting Services

1.  Open Internet Explorer or another browser compatible with Reporting Services administration,
and navigate to the following address,
where *ReportServer* represents the name of the server that is running SQL Server Reporting Services:

    **http://** *ReportServer* **/Reports/Pages/Folder.aspx**

2.  On the **Home** page, choose **Folder Settings**, and in Security, choose **New Role Assignment** and add users.

    -   To add users who can act as readers of or contributors to the project, select the **Browsers** check box.

        ![Click or tab to selection and spacebar to check](_img/add-users-team-project/assign-rs-browser.png)

    -   To add users who will act as project leads, select the **Team Foundation Content Manager** check box.

        ![Choose the role assignment for the user or group](../accounts/_img/add-users-team-project/assign-rs-role.png)

If you're a member of [Team Foundation Administrators](../tfs-server/add-administrator-tfs.md),
you can verify what features are available for your users by default,
and see whether any users are members of groups that have access outside of the default level.

-->