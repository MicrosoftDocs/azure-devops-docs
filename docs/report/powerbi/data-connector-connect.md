---
title: Connect to Power BI Data Connector
titleSuffix: Azure DevOps
description: Learn how to use Power BI Data Connector to access Azure DevOps Analytics views in Power BI for creating insightful reports and dashboards.
ms.assetid: 509ECCF2-E18E-4F14-B7EE-8802AB8938A2
ms.subservice: azure-devops-analytics
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: "<=azure-devops"
ms.date: 09/02/2025
#customer intent: As a team member or administrator, I want to integrate Azure DevOps Analytics views with Power BI so that I can create reports and dashboards from Analytics data.
---

# Connect Analytics with Power BI Data Connector

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

Learn how to establish a seamless connection between Power BI and Azure DevOps using the Power BI Data Connector. This integration lets you extract valuable insights from your Azure DevOps data and create compelling reports and dashboards within Power BI using [Analytics views](what-are-analytics-views.md).

[!INCLUDE [analytics note](includes/analytics-views-warning.md)]

The Power BI Data Connector provides a direct connection to Azure DevOps Analytics, allowing you to do the following tasks:

- Import Analytics views into Power BI Desktop
- Create custom reports with real-time Azure DevOps data
- Build interactive dashboards for stakeholders
- Track project metrics and team performance
- Visualize work item trends and sprint progress

## Prerequisites

Ensure you meet the following requirements before connecting Power BI to Azure DevOps Analytics:

::: moniker range="azure-devops"

| Category | Requirements |
|----------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md)<br>- At least Basic access level |
| **Permissions** | - [Analytics permissions](analytics-security.md)<br>- **Contributors** group membership provides required permissions |
| **Tools** | - [Azure Boards enabled](../../organizations/settings/set-services.md)<br>- [Power BI Desktop](https://aka.ms/pbidesktopstore) (latest version recommended) |
| **Preparation** | - Understanding of [Analytics concepts](what-is-analytics.md)<br>- [Analytics view created](analytics-views-create.md) for your reporting needs<br>- Familiarity with [Power BI fundamentals](/power-bi/) |

::: moniker-end

::: moniker range="< azure-devops"

| Category | Requirements |
|----------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md)<br>- At least Basic access level |
| **Permissions** | - [Analytics permissions](analytics-security.md)<br>- **Contributors** group membership provides required permissions |
| **Tools** | - [Analytics installed and enabled](../dashboards/analytics-extension.md?view=azure-devops-2022&preserve-view=true)<br>- [Azure Boards enabled](../../organizations/settings/set-services.md)<br>- [Power BI Desktop](https://aka.ms/pbidesktopstore) (latest version recommended) |
| **Preparation** | - Understanding of [Analytics concepts](what-is-analytics.md)<br>- [Analytics view created](analytics-views-create.md) for your reporting needs<br>- Familiarity with [Power BI fundamentals](/power-bi/) |

::: moniker-end

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]

[!INCLUDE [connect to an analytics view](../includes/connect-analytics-view.md)]

## Create reports and dashboards

After successfully loading your Analytics data, you can create various reports and visualizations:

### Get started with report creation

1. Explore your data: Review the imported fields and understand the data structure
2. Plan your visualizations: Identify key metrics and KPIs you want to track
3. Create initial reports: Start with simple charts and gradually add complexity
4. Test and iterate: Validate your reports with stakeholders and refine as needed

### Common report types

- Work item trends: Track bug reports, user stories, and feature progress over time
- Sprint burndown charts: Monitor sprint progress and team velocity
- Team performance metrics: Analyze throughput, cycle time, and completion rates
- Backlog analysis: Visualize work distribution and priority alignment

For detailed examples and templates, see [Example reports based on Analytics views](data-connector-examples.md).

:::image type="content" source="media/data-connector-visual.png" alt-text="Screenshot of Power BI Desktop showing an Analytics-based report with various charts and metrics." lightbox="media/data-connector-visual.png":::

## Best practices

To get the most out of your Power BI and Analytics integration:

### Performance optimization
- Filter your Analytics views to include only necessary data
- Use appropriate date ranges to limit data volume
- Refresh data regularly but avoid excessive refresh frequency
- Consider data refresh schedules that align with your reporting needs

### Report design
- Start simple and add complexity gradually
- Use consistent formatting and branding across reports
- Include context and explanations for metrics
- Test with different user personas to ensure usability

### Data governance
- Document your Analytics views and their purposes
- Establish data refresh policies and ownership
- Monitor report usage and performance
- Maintain security and access controls

<a id="q-a"></a>

## Troubleshooting

### Common error scenarios

<a id="QueryExceedsPreferredMaxSizeException"></a>

#### Query result exceeds maximum size

Error message: "Query result exceeds maximum size. Reduce the number of records by applying additional filters"

Cause: Your Analytics view returns more than 250,000 records.

Solutions:
1. Reduce the time range in your Analytics view
2. Apply additional filters to limit work item types or states
3. Use multiple smaller views instead of one large view
4. Consider aggregating data at a higher level

:::image type="content" source="media/QueryExceedsPreferredMaxSizeException.png" alt-text="Screenshot showing query size limit error with suggested resolution steps.":::

<a id="AccessDeniedError"></a>

#### Access denied or authentication errors

Error message: "The user is not authorized" or authentication failures

Possible causes and solutions:
- Check project permissions: Verify you have access to the Azure DevOps project
- Validate Analytics permissions: Ensure you have [Analytics access](analytics-security.md)
- Review credentials: Work with your administrator for credential issues
- Microsoft Entra authentication: Verify your account is properly configured

:::image type="content" source="media/AccessDeniedError.png" alt-text="Screenshot showing authentication error with troubleshooting guidance.":::

<a id="AnalyticsAccessCheckException"></a>

#### Analytics access forbidden

Error message: "Access to the resource is forbidden"

Resolution: Contact your project administrator to grant **View analytics** permission. See [Analytics security](analytics-security.md) for details.

:::image type="content" source="media/AnalyticsAccessCheckException.png" alt-text="Screenshot showing Analytics access forbidden error.":::

<a id="ProjectNotFoundError"></a>

#### Project not found

Error message: "Project 'X' does not exist or you do not have permissions to access it"

Common causes:
- Incorrect project name: Ensure you're using the project name, not the team name
- URL confusion: For `https://dev.azure.com/fabrikam/MyProject/MyTeam`, use "MyProject" not "MyTeam"
- Missing permissions: Verify you have access to the specified project

:::image type="content" source="media/ProjecNotFoundError.png" alt-text="Screenshot showing project not found error with explanation of project vs team names.":::

### Reading error messages

When you troubleshoot Power BI Data Connector issues, do the following tasks:

1. Look for the root cause: Search for **[DataSource.Error]** in the error message
2. Ignore wrapper text: Focus on the core error description
3. Check suggested actions: Error messages often include resolution steps
4. Verify prerequisites: Ensure all requirements are met

## Related content

- [Learn about Power BI integration](overview.md)
- [Learn about Analytics views dataset design](data-connector-dataset.md)
- [Generate example reports based on Analytics views](data-connector-examples.md)
