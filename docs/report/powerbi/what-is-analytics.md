---
title: What is Analytics? 
titleSuffix: Azure DevOps
description: Learn how you can use Analytics data to answer quantitative questions about your projects in Azure DevOps.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: "<=azure-devops"
ai-usage: ai-assisted
ms.date: 02/17/2026
---

# What is Analytics?

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Analytics is the reporting platform for Azure DevOps, replacing the previous platform based on SQL Server Reporting Services. Built specifically for reporting, Analytics is optimized for fast read-access and server-based aggregations. Use it to answer quantitative questions about the past or present state of your projects and gain actionable insights from your development data.

Analytics transforms raw Azure DevOps data into meaningful insights that help teams make data-driven decisions, track progress, identify trends, and improve their development processes.

> [!NOTE]  
> If you're looking for information about Azure Analysis Services, see 
> [Azure Analysis Services](https://azure.microsoft.com/services/analysis-services/).

## Key capabilities of Analytics

Analytics provides comprehensive insights about your projects through multiple access methods: 

::: moniker range="<=azure-devops"

> [!div class="checklist"]  
> - **Analytics widgets** that you can add to your dashboards for immediate insights
> - **In-context Analytics reports** available from select Azure DevOps pages
> - **Rollup bars and counts** for Azure Boards backlogs to track progress
> - **Custom reports** you can create using Power BI for advanced analytics
> - **Custom reports** you can create using OData queries for programmatic access
> - **Extensibility support** to develop and add your custom Analytics widgets to dashboards   

::: moniker-end

### Why choose Analytics over traditional reporting?

Analytics offers several advantages over legacy reporting solutions:

- **Real-time data**: Analytics automatically updates as your Azure DevOps data changes
- **Optimized performance**: Built for fast queries and aggregations
- **Modern interface**: Native integration with Power BI and OData standards
- **Extensible**: Support for custom fields, work item types, and widgets
- **Cloud-ready**: Designed for both cloud and on-premises deployments

[!INCLUDE [temp](../includes/analytics-preview.md)]

[!INCLUDE [ai-assistance-callout](../../includes/ai-assistance-callout.md)]

## Data available in Analytics

Analytics is generally available for Azure DevOps Services and Azure DevOps Server 2020 and later versions. It is in preview for Azure DevOps Server 2019. The service provides a comprehensive data model over Azure DevOps functionality. 

Data available via the Analytics service depends on your version and platform. For specifics, read [Data available in Analytics](./data-available-in-analytics.md) and [Data model for Analytics](../extend-analytics/data-model-analytics-service.md).

### Data coverage by feature area

Analytics covers the following Azure DevOps feature areas:

| Feature Area | Data Available | Use Cases |
|--------------|----------------|-----------|
| **Work Tracking** | Work items, areas, iterations, teams, users | Status reports, trend analysis, burndown charts |
| **Pipelines** | Build/release data, test results, deployment metrics | Pipeline analytics, failure analysis, performance tracking |
| **Test Management** | Test plans, test results, test configurations | Test coverage, quality metrics, execution trends |
| **Version Control** | Commit data, branch information | Code activity, repository insights |

::: moniker range="azure-devops"

Analytics automatically enables for all Azure DevOps Services projects and populates itself with all available Azure DevOps data. Once populated, it continuously updates itself as data changes occur. For more information, read [Data available in Analytics](./data-available-in-analytics.md) and [Performance and latency](performance-latency.md).

::: moniker-end

## Dashboard widgets

You can create [dashboards](../dashboards/dashboards.md) and [add widgets to them](../dashboards/add-widget-to-dashboard.md). We provide several [widgets based on Analytics](../dashboards/analytics-widgets.md). These widgets take advantage of Analytics' power and provide the easiest way to get insights from your data. 

### Example: Velocity widget insights

The Velocity widget shown in the following image provides insights into a team's historical performance over six iterations: 

![Analytics - Velocity Widget](media/what-is-analytics/dashboard-showing-velocity.png)

This Velocity widget reveals that this team has a history of closing stories late. It also shows a discrepancy between planned and completed work across all the sprints displayed. The team can drill into the data to determine the root causes. After you implement new practices, the team can use the Velocity widget to track their effectiveness.

### Available Analytics widgets

Analytics-powered widgets include:

- **Velocity**: Track team delivery over time
- **Burndown**: Monitor sprint and release progress
- **Cumulative Flow Diagram**: Visualize work flow and bottlenecks
- **Lead Time**: Measure time from idea to delivery
- **Cycle Time**: Track work item completion time

::: moniker range="<azure-devops"

Check out [Add an Analytics widget to a dashboard](../dashboards/add-widget-to-dashboard.md#add-analytics-widget) for a step-by-step guide to get started with the Velocity widget.

::: moniker-end

::: moniker range="<=azure-devops"

## In-context reports and rollup columns 

Work tracking in-context reports now use Analytics data as their foundation. These reports appear on the **Analytics** tab of the product and portfolio backlogs and boards. Additionally, there are pipeline and test in-context reports available. For more information, see the following articles: 

### Work tracking reports
- [Cumulative flow](../dashboards/cumulative-flow.md) - Visualize work flow and identify bottlenecks
- [Team velocity](../dashboards/team-velocity.md) - Track team delivery patterns
- [View/configure sprint burndown](../dashboards/configure-sprint-burndown.md) - Monitor sprint progress

### Pipeline and test reports
- [Pipeline pass rate report](../../pipelines/reports/pipelinereport.md#pipeline-pass-rate-report) - Track build success rates
- [Test failures report](../../pipelines/test/test-analytics.md#test-failures) - Analyze test execution patterns

### Rollup functionality

You can add rollup columns to product and portfolio backlogs that provide:
- **Progress bars**: Visual representation of completion status
- **Work item counts**: Aggregate counts of child items
- **Field summations**: Total values for numeric fields

For details, see [Display rollup progress or totals](../../boards/backlogs/display-rollup.md). 

::: moniker-end

## Analytics views

Analytics views provide a web portal feature that supports filtering work tracking data for status and trend reports. With Analytics views, you can use default or custom views to generate reports in Power BI through a dedicated data connector.

### Benefits of Analytics views

- **Pre-filtered data**: Define filters once and reuse across multiple reports
- **Performance optimization**: Reduced data transfer and faster report loading
- **Version control**: Track changes to view definitions over time
- **Team collaboration**: Share consistent data views across your organization

For more information, see [What are Analytics views?](what-are-analytics-views.md).

## OData queries and metadata access

Analytics provides full accessibility via OData (Open Data Protocol). From a web browser, you can query the Analytics metadata or data using OData queries, enabling programmatic access to your Azure DevOps data.

### OData capabilities

- **Direct data access**: Query Analytics data without intermediate tools
- **Flexible filtering**: Apply complex filters and aggregations
- **Metadata exploration**: Discover available data structures and relationships
- **Integration ready**: Connect third-party tools and custom applications

To learn how to construct queries, see [Construct OData queries for Analytics](../analytics/analytics-query-parts.md).

### Custom tooling and queries

If you want to prepare custom queries and tooling with our OData API, review [Sample reports and quick reference index](../extend-analytics/quick-ref.md).

### Sample OData scenarios

Common OData query patterns include:
- Retrieving current work item status across projects
- Analyzing historical trends for specific work item types
- Building custom dashboards with real-time data
- Integrating Azure DevOps data with external business intelligence tools

## Power BI integration and data connectors

[Power BI](https://powerbi.microsoft.com) is a suite of business analytics tools that integrates seamlessly with Azure DevOps Analytics. We provide multiple data connectors to support importing data into Power BI:

### Available connectors
- **Analytics views**: Prefiltered, optimized data views
- **OData query**: Direct query access for custom scenarios  
- **OData feed**: Real-time data streaming for live dashboards

### Power BI advantages

With Power BI, you can:
- **Perform advanced analytics**: Use Power BI's sophisticated analysis capabilities
- **Create beautiful visualizations**: Build compelling charts and reports
- **Publish enterprise dashboards**: Share insights across your organization
- **Combine data sources**: Integrate Azure DevOps data with other business systems

### Getting started with Power BI

To begin using Power BI with Azure DevOps Analytics:

1. **Read the overview**: [Power BI integration overview](overview.md)
2. **Explore samples**: [Power BI Sample Reports](sample-odata-overview.md) provide quick starts for popular reports
3. **Choose your connector**: Select the appropriate data connector for your needs
4. **Build your first report**: Start with templates and customize for your requirements

## Custom fields and work item types support

Analytics automatically incorporates custom fields and custom work item types into the data model. This automatic inclusion ensures that your customizations appear in Analytics without more configuration.

### Automatic customization support

- **Custom fields**: All custom fields automatically appear in the Analytics data model
- **Custom work item types**: New work item types become available for reporting
- **Process customizations**: Changes to workflows and rules reflect in Analytics data
- **Real-time updates**: Customizations appear in Analytics as you make them

### Accessing custom data

Through OData queries, you can:
- View properties added through process customization
- Access enumerated lists and allowed values
- Query relationships between custom and standard fields
- Build reports that include your organization-specific data

## Performance and scalability

Analytics is designed for high-performance reporting scenarios:

### Performance characteristics

- **Optimized for read operations**: Fast query response times
- **Server-side aggregations**: Reduced data transfer
- **Incremental updates**: Only changed data is refreshed
- **Caching strategies**: Improved response times for frequent queries

### Scalability features

- **Handles large datasets**: Supports organizations with extensive historical data
- **Concurrent access**: Multiple users can query simultaneously
- **Resource management**: Automatic throttling prevents system overload

## Security and permissions

Analytics respects Azure DevOps security permissions:

- **Project-level security**: Users see only data they have permission to access
- **Work item security**: Area path permissions apply to Analytics data
- **Read-only access**: Analytics provides read-only views of your data
- **Azure AD integration**: Supports enterprise authentication and authorization

## Next steps

> [!div class="nextstepaction"]
> [Data available in Analytics](./data-available-in-analytics.md) 

## Related articles 

::: moniker range="azure-devops"
- [What are Analytics views?](what-are-analytics-views.md)   
- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)
- [Analytics widgets](../dashboards/analytics-widgets.md)
- [Power BI integration overview](overview.md)

::: moniker-end

::: moniker range="< azure-devops"
- [Install/uninstall or enable/disable the Analytics service](../dashboards/analytics-extension.md)
- [What are Analytics views?](what-are-analytics-views.md)  
- [Data available in Analytics](./data-available-in-analytics.md) 
- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)
- [Analytics widgets](../dashboards/analytics-widgets.md)
 
::: moniker-end