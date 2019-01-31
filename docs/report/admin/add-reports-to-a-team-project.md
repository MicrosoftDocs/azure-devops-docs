---
title: Add reports to a team project 
titleSuffix: Azure DevOps Server & TFS    
description: Add a report server and upload reports to a team project hosted on an on-premises Team Foundation Server (TFS)  
ms.assetid: 17C16BE3-6F7D-466F-A3D9-402C79D53768  
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: "<= azure-devops-2019" 
ms.date: 11/19/2018
---

# Add reports to a team project

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

By adding a report server to your TFS (on-premises) deployment, you can access a wealth of data about your team's projects, such as build quality, bug trends, burndown, and test progress. SQL Server Reporting Services (SSRS) reports provide insight to help teams manage work and improve processes.

The sequence of tasks is as follows:

[![Add a report server](_img/step-1-add-a-report-server.png)](add-a-report-server.md)
[![Upload reports](_img/step-2-upload-reports.png)](upload-reports.md)
[![Grant permissions](_img/step-3-grant-permissions.png)](grant-permissions-to-reports.md) 
[![Review team activities](_img/step-4-review-team-activities.png)](review-team-activities-for-useful-reports.md)


[!INCLUDE [temp](../_shared/tfs-header-17-15.md)]


If your reports don't appear as expected, review the checklists provided under [Review team activities](review-team-activities-for-useful-reports.md) for the necessary team activities to generate useful reports. Also, access information that describes healthy and unhealthy versions of each report.

After completing the sequence of tasks, you'll be able to access the default reports provided with the process template used to create your team project. 
TFS SSRS data flow and report architecture

![TFS SSRS data flow and report architecture](_img/IC658337.png)

> [!IMPORTANT]  
> Build reports are only applicable for XAML builds, which are deprecated for TFS 2018 and later versions. If your build process isn't based on XAML builds, this report and the TFS Warehouse for builds won't yield any meaningful data.   