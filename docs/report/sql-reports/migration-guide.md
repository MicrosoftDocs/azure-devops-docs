---
title: Migrate to Analytics from SQL Reporting Services 
titleSuffix: Azure DevOps 
description: Learn how to migrate from using the legacy SQL Reporting Services reports to using Analytics for Azure DevOps.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2019 <= azure-devops-2020'
ms.date: 05/26/2022
---


# Migrate to Analytics from SQL Reporting Services for Azure DevOps 


[!INCLUDE [version-gt-eq-2019-lt-azure-devops](../../includes/version-gt-eq-2019-lt-azure-devops.md)]

With the release of Azure DevOps Server 2022, the only option for gaining Azure DevOps data insights is the Analytics service. Integration with SQL Server Reporting Services is no longer supported. This article provides guidance for migrating from using SQL Reporting Services to Analytics.   

For an overview of Analytics, see [What is Analytics](../powerbi/what-is-analytics.md) and [Data Available in Analytics](../powerbi/data-available-in-analytics.md).

> [!NOTE]  
> If you are looking for information about the Azure Analysis Services, see 
[Azure Analysis Services](https://azure.microsoft.com/services/analysis-services/).

For information on replacement of a specific SQL Server Reporting Services report, see [Get Analytics insights comparable to those provided by SQL Reporting Services reports](analytics-insights-comparable-sql-reports.md).

 
## General guidance

As you migrate from using SQL Server Reporting Services to Analytics, note the following information.   

- Analytics is an object-relational mapper, whereas SQL Server Reporting Services data is based on a relational databased and online analytical processing (OLAP) cube.  
- Analytics doesn't require any maintenance.  
- Analytics stores all work tracking fields, except for HTML/rich-text fields. Custom fields are automatically added to the Analytics data store.   
- Always limit your query to the project(s) you have access to. You can generate cross-project reports using Power BI, however, queries only return data when you have permissions to view Analytics data for all projects you query. 
- Use built-in dashboards to support views of multiple charts. Several new features have been added to support viewing multiple charts within an Azure DevOps configurable dashboard. 
- Analytics views provide a quick and easy way to generate status and trend reports for work items and test cases. 
- Identify the insights you need to make data-driven decisions. Then, use a combination of queries, dashboards, built-in reports, or Power BI and OData queries to generate the needed reports.  


## New feature support 

Several new features have been introduced to support data insights that weren't available with SQL Server Reporting services.   

- **Dashboard widgets**: Many widgets have been added to support status and trend views, including ones based on Analytics data. For an overview, see the [widget catalog](../dashboards/widget-catalog.md).  
- **Built-in Analytics reports**: Severa in-context reports have been added to support Azure Boards, Pipelines, and Test Plans. These reports display Analytics data as described in [About dashboards, charts, reports, & widgets](../dashboards/overview.md).
- **Rollup**: Rollup columns allow you to view progress bars or totals of numeric fields for descendant items within a work item hierarchy. You can add them to any backlog view. To learn more, see [Display rollup progress or totals](../../boards/backlogs/display-rollup.md). 
- **Query-based charts grouped by tags**: You can now generate query charts and add them to dashboards based on grouping by tags. 
- **Traceability**: Increased support for tracking work from requirements to deployment. End-to-end traceability is supported by linking various objects such as work items, branches, commits, pull requests, builds, and releases. Built-in reports based on the Analytics service support the ability to monitor traceability in real time. To learn more, see [End-to-end traceability](../../cross-service/end-to-end-traceability.md).
- **Release pipelines**: Release pipelines were introduced with TFS 2018. Dashboard widgets that provide insights into release pipelines include [Release pipeline overview](../dashboards/widget-catalog.md#release-definition-widget) and [Requirements quality](../dashboards/widget-catalog.md#requirements-quality-widget).  
  


## Key concepts about the Analytics service

For on-premises servers, the Analytics service is automatically enabled for all new project collections added to your server. You can pause, disable, or re-enable Analytics as described in [Install or enable the Analytics service](../dashboards/analytics-extension.md). 

The Analytics data model consists of entity sets, whose members (entities) contain properties that can be filtered, aggregated, and summarized. For an overview of supported entity sets and entity types, see [Data model for Analytics](../extend-analytics/data-model-analytics-service.md). 

The following tools support interaction with the Analytics service: 
- **Analytics views**: Provide a quick way to generate reports based on work tracking and test cases. You can define an Analytics view and share with others. Using Power BI, you can build any type of report Power BI supports. TO learn more, see [What are Analytics views?](../powerbi/what-are-analytics-views.md).  
- **Power BI**: Connect to Analytics from Power BI through an ANalytics view, OData query, or OData feed. See [About Power BI integration](../powerbi/overview.md). 
- **OData query**: Use Odata to directly query Analytics from a supported browser and use the returned JSON data as needed.  
- Programmatic query of the Analytics metadata [Construct OData queries for Analytics, URL components to query the metadata](../analytics/analytics-query-parts.md#query-metadata). 
 

### Query guidelines, query performance and latency 

Analytics is not a real-time time store. It is a curated copy of data stored in Azure DevOps. The data copy helps optimize read and aggregation performance, and reduces the effect reporting scenarios have on Azure DevOps. Copying the data introduces up to a 30-second delay before the data associated with any one change shows up in Analytics. To learn more, see [OData Analytics query guidelines](../extend-analytics/odata-query-guidelines.md).


### Analytics permissions

Access to data from the Analytics service requires the following project-level permissions.  

- **View Analytics** 
- **Delete Shared Analytics views**
- **Edit Shared Analytics views**

In addition, users can set permissions for individual shared Analytics views they create. To learn more, see [Set permissions to access Analytics and Analytics views](../powerbi/analytics-security.md). 

## Recommended resources

**Power BI and OData**
- [Power BI Desktop download page](/power-bi/desktop-what-is-desktop)

**Learn resources**:  
- [Run quality tests in your build pipeline by using Azure Pipelines](/training/modules/run-quality-tests-build-pipeline)
- [Run functional tests in Azure DevOps](/training/modules/run-functional-tests-azure-pipelines) 

## Next steps
> [!div class="nextstepaction"]
> [Get Analytics insights comparable to those provided by SQL Reporting Services reports](analytics-insights-comparable-sql-reports.md)
