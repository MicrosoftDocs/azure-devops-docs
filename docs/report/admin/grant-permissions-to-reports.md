---
title: Grant permissions to view or create reports 
titleSuffix: TFS
description: Grant permissions to view or create SQL Server reports configured to support Team Foundation Server
ms.assetid: FBE3ECC1-51A0-43EC-9923-B7C4FC78E333  
ms.prod: devops
ms.technology: devops-analytics
ms.topic: quickstart
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: "<= azure-devops-2019" 
ms.date: 11/19/2018
---

# Grant permissions to view or create SQL Server reports in TFS

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

This is the third task in the four-task sequence to add reports to your team project. You can use the procedures in this article to set permissions to view or author reports.  

[![Add a report server](_img/step-1-add-a-report-server.png)](add-a-report-server.md)
[![Upload reports](_img/step-2-upload-reports.png)](upload-reports.md)
[![Grant permissions](_img/step-3-grant-permissions.png)](grant-permissions-to-reports.md) 
[![Review team activities](_img/step-4-review-team-activities.png)](review-team-activities-for-useful-reports.md)

> [!IMPORTANT]
>**Feature availability**: You can only add a report server to an on-premises TFS. If you're using Azure DevOps, adding a report server isn't a supported option, instead, you can use the [Analytics Service](../powerbi/what-is-analytics.md?toc=/azure/devops/report/powerbi/toc.json&bc=/azure/devops/report/powerbi/breadcrumb/toc.json).


Now that you've uploaded reports, you'll want to enable members of your team to view or manage them. Also, to create or modify reports, you'll need to grant them access to read databases. 

##Add accounts to predefined roles to view or manage reports
Add report viewers to the **Browser** role. Add TFS report authors to the **Team Foundation Content Manager** role.

> [!TIP]    
> Permissions to access Report Manager are managed separately from TFS permissions. Even if you have added team members to a TFS group, you will still have to add them to a Report Manager role.  

1. If you haven't been added to the **Content Manager** role for Reporting Services, get added by someone who has been added to this role.  

2. From the Report Manager home page, open **Folder Settings**.  

	![Add users to an SSRS Report Manager role](_img/IC665038.png)  

	The URL is *http://ReportServer/Reports/Pages/Folder.aspx*, or if using a named instance, *http://ReportServer/Reports_InstanceName/Pages/Folder.aspx*.

3. Open **New Role Assignment**.  

	![Open SSRS new role assignment](_img/IC665039.png)

	> [!TIP]    
	> To limit access to reports defined for a team project or team project collection, first navigate to the corresponding folder and then open New Role Assignment.  

 
4. Add the account name and select their role. 
 ![Assign user to a role in Report Manager](_img/IC665040.png)

##Add report authors to database roles
If members need to create or customize reports, add their accounts to the **TfsWarehouseDataReader** role. Report authors need read access to both the relational data warehouse and Analysis Services cube. Team members who create Excel reports from work item queries or by connecting to the cube need only read access to the cube. 

1. If you aren't an administrator for the TFS database, [get added as one](/azure/devops/server/admin/add-administrator-tfs). 

2. Connect to the **Database Engine** for TFS using **SQL Server Management Studio**.

	![Connect to database engine](_img/IC665041.png)

3. Open the properties page for the **TfsWarehouseDataReader** role under the **Databases/Tfs_Warehouse/organizations/security/Roles/Database Roles** folder.  

	![Open Tfs_Warehouse data reader role properties](_img/IC665042.png)

4. Add the account.  

	![Add member to Tfs_Analysis data reader role](_img/IC665043.png)

5. Next, connect to the **Analysis Services** database.  

	![Connect to Analysis Services database](_img/IC665044.png)

6. Open the properties page for the **TfsWarehouseDataReader** role under the **Databases/Tfs_Analysis/Roles** folder.  

	![Open Tfs_Analysis data reader role properties](_img/IC665045.png)

7. Add the account.  

	![Add member to Tfs_Analysis data reader role](_img/IC665046.png)

> [!IMPORTANT]  
> Accounts that you add to the **TfsWarehouseDataReader** roles can view data for all team projects that are hosted in all team project collections in the TFS deployment. There is no way to limit access to a team project or collection.  


##Try this next
 
- [Review team activities to support useful reports](review-team-activities-for-useful-reports.md).


##Related notes
 
- [Create Excel reports from a work item query](../excel/create-status-and-trend-excel-reports.md)  

    


