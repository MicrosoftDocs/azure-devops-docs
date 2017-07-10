---
title: Add reports to a team project | TFS   
description: Add a report server and upload reports to a team project hosted on an on-premises Team Foundation Server (TFS)  
ms.assetid: 17C16BE3-6F7D-466F-A3D9-402C79D53768  
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.manager: douge
ms.author: kaelli
ms.date: 02/22/2017
---

# Add reports to a team project

<b>TFS 2017 | TFS 2015 | TFS 2013</b>  


>[!IMPORTANT]
>**Feature availability**: You can only add a report server to an on-premises TFS.  If you're using Team Services, adding a report server isn't a supported option, instead, you can use [PowerBI](../powerbi/overview.md).

By adding a report server to your TFS (on-premises) deployment, you can access a wealth of data about your team's projects, such as build quality, bug trends, burndown, and test progress. SQL Server Reporting Services (SSRS) reports provide insight to help teams manage work and improve processes.

The sequence of tasks is as follows:

[![Add a report server](_img/step-1-add-a-report-server.png)](add-a-report-server.md)
[![Upload reports](_img/step-2-upload-reports.png)](upload-reports.md)
[![Grant permissions](_img/step-3-grant-permissions.png)](grant-permissions-to-reports.md) 
[![Review team activities](_img/step-4-review-team-activities.png)](review-team-activities-for-useful-reports.md)

If your reports don't appear as expected, review the checklists provided under [Review team activities](review-team-activities-for-useful-reports.md) for the necessary team activities to generate useful reports. Also, access information that describes healthy and unhealthy versions of each report.

After completing the sequence of tasks, you'll be able to access the default reports provided with the process template used to create your team project. 
TFS SSRS data flow and report architecture

![TFS SSRS data flow and report architecture](_img/IC658337.png)