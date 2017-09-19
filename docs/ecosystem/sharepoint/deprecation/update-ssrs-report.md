---
title: Update SSRS Report
description: TFS SharePoint integration - Update an SSRS Report on a SharePoint site
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-integrate
ms.manager: abjork
ms.author: greggboe
ms.date: 09/19/17
ms.topic: 
---

# Update SSRS Report after SharePoint is disabled

[!INCLUDE [temp](../_shared/about-sharepoint-deprecation.md)]

Displaying SSRS Reports on a SharePoint will continue to work, even after disabling SharePoint integration. Displaying SSRS Reports in SharePoint is based on SharePoint and SQL Server Reporting Services technologies. It doesn’t require the TFS Extension for SharePoint to operate. 

<img src="_img/update-ssrs-report.png" alt="TFS/SharePoint Integration - Update SSRS Report" style="border: 2px solid #C3C3C3;" /> 

The TFS site used the standard [SharePoint Page Viewer web part](https://support.office.com/article/Display-a-Web-page-on-a-SharePoint-page-by-adding-the-Page-Viewer-Web-Part-7F61FEEC-9B3D-4805-A960-07636BA59527) with a URL to the SSRS Report.

The TFS Extension for SharePoint provided a URL re-director called *tfsRedirect.aspx* which would look up the location of the SQL Services Reporting Server and redirect to the URL to display the report. If you edited the properites of the Page Viewer web part hosting the SSRS report, you would see a URL that looks something like this:

```
PATHTOCURRENTSITE/_layouts/TfsRedirect.aspx?tf:Type=Report&tf:ReportName=REPORTNAME&tf:ShowToolbar=0&Width=381pt&Height=180pt
```

Installing TFS Disconnector for SharePoint replaces *tfsRedirect.aspx* with a version that will continue to work until you do one of the following:
* Move the location of your SQL Services Reporting Server
* Rename your team project
* Rename your collection

If any of these changes are made, then you must replace the URL in the Page Viewer web part with the **full URL to the SSRS Report**. 

Follow these steps to replace the URL:

1. Step 1
1. Step 2
1. Step 3

<!---
> TODO: insert the URL format to display a SSRS Report in SharePoint

> TODO:<insert how to get the URL to the SSRS report

-->

# Referenced topics
* [SSRS Report URL Access Parameter Reference](https://docs.microsoft.com/sql/reporting-services/url-access-parameter-reference)