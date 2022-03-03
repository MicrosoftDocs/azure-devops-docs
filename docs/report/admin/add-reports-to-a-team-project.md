---
title: Add reports to a team project 
titleSuffix: Azure DevOps Server
description: Add a report server and upload reports to a team project hosted on an on-premises Azure DevOps Server so you can access data about your team's projects.
ms.assetid: 17C16BE3-6F7D-466F-A3D9-402C79D53768  
ms.technology: devops-analytics
ms.topic: how-to
ms.author: kaelli
author: KathrynEE
ms.date: 09/23/2021
---

# Add reports to a team project

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

By adding a report server to your on-premises Azure DevOps Server deployment, you can access a wealth of data about your team's projects, like:
- Build quality
- Bug trends
- Burndown
- Test progress

SQL Server Reporting Services (SSRS) reports provide insight to help teams manage their work and improve processes.

The sequence of tasks is as follows:

[![Add a report server](media/step-1-add-a-report-server.png)](add-a-report-server.md)
[![Upload reports](media/step-2-upload-reports.png)](upload-reports.md)
[![Grant permissions](media/step-3-grant-permissions.png)](grant-permissions-to-reports.md) 
[![Review team activities](media/step-4-review-team-activities.png)](review-team-activities-for-useful-reports.md)


> [!IMPORTANT]  
> Excel reports, Reporting Services reports, and SharePoint dashboards are only supported for on-premises deployments of Azure DevOps Server or TFS. For information on what is supported for Azure DevOps, see [Dashboards, charts, & widgets](../dashboards/overview.md).
> 
> TFS 2018 and later versions no longer support native integration with SharePoint products. If you're planning to upgrade to TFS 2018, read [About SharePoint integration](/previous-versions/azure/devops/report/sharepoint-dashboards/about-sharepoint-integration) to learn about the options available to you.


If your reports don't appear as expected, review the checklists provided under [Review team activities](review-team-activities-for-useful-reports.md) for the necessary team activities to generate useful reports. Also, access information that describes healthy and unhealthy versions of each report.

After completing the sequence of tasks, you'll be able to access the default reports provided with the process template used to create your team project. 
TFS SSRS data flow and report architecture

![TFS SSRS data flow and report architecture](media/IC658337.png)

> [!IMPORTANT]  
> Build reports are only applicable for XAML builds, which are deprecated for TFS 2018 and later versions. If your build process isn't based on XAML builds, this report and the TFS Warehouse for builds won't yield any meaningful data.   