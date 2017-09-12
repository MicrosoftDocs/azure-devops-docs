---
title: SQL Server Reporting Services Roles
description: SQL Server Reporting Services Roles
ms.assetid: 4fa956ee-f01a-42b4-b34b-e6b1b784c953
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# SQL Server Reporting Services Roles

**TFS 2017** | **TFS 2015** | **TFS 2013**

You can use the roles in SQL Server Reporting Services to assign particular permissions to users in Visual Studio Team Foundation Server. Every user and group in Team Foundation Server must be assigned appropriate permissions in Reporting Services. Reporting Services provides default security through role assignments. You can use management tools for SQL Server, such as Management Studio and Report Manager, to assign users and groups to predefined roles.

You can use group membership in Team Foundation Server to determine the appropriate membership in one of the predefined roles in Reporting Services. No additional configuration of the role will be required. However, you can modify predefined roles and add custom roles to better meet your business needs. If you add custom roles or modify predefined roles, you must be sure that the roles have the permissions required for the appropriate level of access to reports and reporting features. For more information, see the following topic on the Microsoft Web site: [Granting Permissions on a Native Mode Report Server](http://go.microsoft.com/fwlink/?LinkId=117112).

The following predefined roles are suggested for use with Team Foundation Server:

-   System Administrator

-   Team Foundation Content Manager

-   Browser

For detailed information about pre-defined roles in Reporting Services, see the following topic on the Microsoft Web site: [Using Predefined Roles](http://go.microsoft.com/fwlink/?LinkId=117113).

> [!IMPORTANT]
> You should restrict membership in Reporting Services to only those users who need the specific level of access and permissions granted by membership in that predefined role. Add a user or group to the predefined role that has the minimum permissions required to complete the user's or group's role within a team project. For example, if a user only needs to view the project schedule, you should add the user to the Browser role but not to the Content Manager role.

## System Administrator

The System Administrator role includes permissions that are useful for a report server administrator who has overall responsibility for a report server, but not necessarily for the content within it. The System Administrator role does not convey the full range of permissions that a local administrator might have on a computer. You must add Team Foundation Administrators to both the System Administrator role and the Content Manager role. Together, the two role definitions provide a complete set of permissions required by members of the Team Foundation Administrators group.

## Team Foundation Content Manager

Make sure to [add your administrators to the Team Foundation Content Managers group](../../../report/admin/grant-permissions-to-reports.md) on the server that hosts SQL Server Reporting Services. Otherwise they might have problems, such as being blocked by a TF218027 error when trying to create a team project.

Unlike the other roles described in this topic, the Team Foundation Content Manager role is not a default role in SQL Server. The role is created specifically for integration between Team Foundation Server and SQL Server Reporting Services when Team Foundation Server is installed. Its structure and permissions are similar to the Content Manager role that is native to SQL Server. The Team Foundation Content Manager role includes permissions that are useful for users who manage reports and Web content but that do not necessarily write reports or manage a Web server or instance of SQL Server. A content manager deploys reports, manages report models and data source connections, and decides how to use reports. The Team Foundation Content Manager role provides the typical range of permissions required by users who belong to the Project Administrators group in a team project, in addition to users who belong to the Project Collection Administrators group. You should also add members of the Team Foundation Administrators group to this role.


## Browser

The Browser role includes permissions that are useful for users who view reports, but do not necessarily write or manage them. This role provides basic capabilities for users who belong to either the Contributor or Reader group in a team project.

## See Also

 [Understanding SQL Server and SQL Server Reporting Services](../../architecture/sql-server-databases.md) 
