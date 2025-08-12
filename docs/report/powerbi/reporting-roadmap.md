---
title: Reporting roadmap and migration guide
titleSuffix: Azure DevOps 
description: Learn about the reporting roadmap for Azure DevOps and how to migrate from SQL Reporting Services to Analytics.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 07/07/2025
---

# Reporting roadmap and migration guide

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The Analytics service provides support for Azure DevOps reporting and is available for Azure DevOps Server. It replaces the previous platform based on SQL Server Reporting Services. 

With the release of Azure DevOps Server 2022, the only option for gaining Azure DevOps data insights is the Analytics service. Integration with SQL Server Reporting Services is no longer supported. 

For more information, see the following articles: 

- [What is Analytics](../powerbi/what-is-analytics.md)
- [Data Available in Analytics](../powerbi/data-available-in-analytics.md) 
 
> [!NOTE]  
> If you're looking for information about the Azure Analysis Services, see 
[Azure Analysis Services](https://azure.microsoft.com/services/analysis-services/).

## The Analytics service

Analytics is generally available for Azure DevOps Services and Azure DevOps Server 2020 and later versions. It provides several [advanced widgets](../dashboards/analytics-widgets.md) and supports [Power BI integration](overview.md) and access to the [OData feed](../extend-analytics/quick-ref.md). 

For more information, see [What is Analytics](what-is-analytics.md). It currently contains partial data. We're working to add all reportable data to Analytics. For more information, see [Data Available in Analytics](data-available-in-analytics.md).

## Migrating from SQL Reporting Services to Analytics

If you're migrating from SQL Server Reporting Services to Analytics, the following guidance helps you make the transition successfully.

### Key differences between SQL Reporting Services and Analytics

- **Analytics** is an object-relational mapper, whereas **SQL Server Reporting Services** data is based on a relational database and online analytical processing (OLAP) cube
- **Analytics** doesn't require any maintenance
- **Analytics** stores all work tracking fields, except for HTML/rich-text fields. Custom fields are automatically added to the Analytics data store
- **Analytics** isn't a real-time store but a curated copy of data with up to a 30-second delay before changes appear

### Migration best practices

- Always limit your query to the projects you have access to. You can generate cross-project reports using Power BI, however, queries only return data when you have permissions to view Analytics data for all projects you query
- Use built-in dashboards to support views of multiple charts. Several features support viewing multiple charts within an Azure DevOps configurable dashboard
- Identify the insights you need to make data-driven decisions. Then, use a combination of queries, dashboards, built-in reports, or Power BI and OData queries to generate the needed reports

### Key features available with Analytics

Analytics provides many capabilities that weren't available with SQL Server Reporting Services. Key features include:

- **Advanced dashboard widgets**: Analytics-powered widgets for status and trend views, including Velocity, Burndown, Cumulative Flow Diagram, and Lead/Cycle Time widgets. For a complete overview, see the [widget catalog](../dashboards/widget-catalog.md)
- **Built-in Analytics reports**: In-context reports for Azure Boards, Pipelines, and Test Plans that display real-time analytics data. For more information, see [About dashboards, charts, reports, & widgets](../dashboards/overview.md)
- **Power BI integration**: Direct connectivity to create custom reports and dashboards using Power BI with Analytics data through OData feeds and Analytics views
- **Analytics views**: Simplified way to create filtered datasets for Power BI reporting without writing OData queries. See [What are Analytics views?](../powerbi/what-are-analytics-views.md)
- **OData API access**: Direct programmatic access to Analytics data for custom integrations and reporting solutions
- **Rollup capabilities**: Progress bars and totals for descendant work items in hierarchies, available in any backlog view. For more information, see [Display rollup progress or totals](../../boards/backlogs/display-rollup.md)
- **Enhanced query charts**: Query-based charts with grouping by tags, areas, iterations, and custom fields
- **Real-time traceability**: End-to-end tracking from requirements to deployment through linked work items, branches, commits, pull requests, builds, and releases. For more information, see [End-to-end traceability](../../cross-service/end-to-end-traceability.md)
- **Pipeline insights**: Comprehensive widgets for build and release pipeline analytics, including [Release pipeline overview](../dashboards/widget-catalog.md#release-definition-widget) and [Requirements quality](../dashboards/widget-catalog.md#requirements-quality-widget)
- **Test analytics**: Advanced test reporting capabilities including test results trends, failure analysis, and test duration insights
- **Velocity and burndown charts**: Built-in sprint and release tracking with configurable time periods and team comparisons

For a complete list of Analytics capabilities, see [Data Available in Analytics](data-available-in-analytics.md).

### Analytics tools and concepts

The Analytics data model consists of entity sets, whose members (entities) contain properties that can be filtered, aggregated, and summarized. For an overview of supported entity sets and entity types, see [Data model for Analytics](../extend-analytics/data-model-analytics-service.md).

The following tools support interaction with the Analytics service:

- **Analytics views**: Provide a quick way to generate reports based on work tracking and test cases. You can define an Analytics view and share with others. Using Power BI, you can build any type of report Power BI supports. To learn more, see [What are Analytics views?](../powerbi/what-are-analytics-views.md)
- **Power BI**: Connect to Analytics from Power BI through an Analytics view, OData query, or OData feed. See [About Power BI integration](../powerbi/overview.md)
- **OData query**: Use OData to directly query Analytics from a supported browser and use the returned JSON data as needed
- Programmatic query of the Analytics metadata [Construct OData queries for Analytics, URL components to query the metadata](../analytics/analytics-query-parts.md#query-metadata)

### Analytics permissions

To access and work with Analytics data, users need appropriate project-level permissions. The core Analytics permissions include:

- **View Analytics**: Required to access Analytics data through OData queries, Power BI connections, and Analytics widgets. By default, all Contributors with Basic access have this permission. Users with Stakeholder access don't have permission to view or edit Analytics views.
- **Delete Shared Analytics views**: Allows users to delete Analytics views that are shared with the project
- **Edit Shared Analytics views**: Allows users to modify Analytics views that are shared with the project

For individual Analytics views, creators can set specific permissions to control who can view, edit, and delete their shared views. For detailed information about setting up and managing these permissions, see [Set permissions to access Analytics and Analytics views](../powerbi/analytics-security.md).

### Query performance and latency

Analytics is optimized for read and aggregation performance, and reduces the effect reporting scenarios have on Azure DevOps. The data copy introduces up to a 30-second delay before the data associated with any one change shows up in Analytics. For more information, see [OData Analytics query guidelines](../extend-analytics/odata-query-guidelines.md).

## Future of SQL Server Reporting

The SQL Server Reporting Services platform is supported on Azure DevOps Server 2020 and all earlier on-premises versions. However, **Azure DevOps Server 2020 is the final version to support SQL Server Reporting Services**. 

**Starting with Azure DevOps Server 2022 and all future versions**, only Analytics is supported for reporting and data insights. This transition timeline provides you with adequate time to migrate your existing SQL Server Reporting Services reports to Analytics.

> [!IMPORTANT]
> **Azure DevOps Services** doesn't support SQL Server Reporting Services and continues to use only Analytics for all reporting capabilities. There are no plans to introduce SQL Server Reporting Services support to the cloud service.
 
## Roadmap timeline

Check out the [Features Timeline](/azure/devops/release-notes/features-timeline) for the roadmap of reporting features.

## Recommended resources

**Power BI and OData**
- [Power BI Desktop download page](/power-bi/desktop-what-is-desktop)

**Learn resources**:  
- [Run quality tests in your build pipeline by using Azure Pipelines](/training/modules/run-quality-tests-build-pipeline)
- [Run functional tests in Azure DevOps](/training/modules/run-functional-tests-azure-pipelines)

For an overview of supported entity sets and entity types, see [Data model for Analytics](../extend-analytics/data-model-analytics-service.md).
