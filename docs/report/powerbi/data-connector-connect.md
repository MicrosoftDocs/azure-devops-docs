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
ms.date: 12/01/2025
#customer intent: As a team member or administrator, I want to integrate Azure DevOps Analytics views with Power BI so that I can create reports and dashboards from Analytics data.
---

# Connect Analytics with Power BI Data Connector

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

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

## Connect to an Analytics view

Follow these steps to connect Power BI to your Azure DevOps Analytics data.

1. Open Power BI Desktop. If the startup screen appears, select **Get data**. Otherwise, select **Home** > **Get Data** from the ribbon.

[!INCLUDE [connect to an analytics view](../includes/connect-analytics-view.md)]

## Create reports and dashboards

After successfully loading your Analytics data, you can create various reports and visualizations. The following examples show common report types.

> [!TIP]  
> Use the search box if you are working with tables that contain many columns.

### Show card with total count of work items

1. Load the `Work Items - Today` Analytics view into Power BI.

2. From the **Visualizations** pane, choose **Card**, and drag the `Work Item ID` to **Fields**.

   :::image type="content" source="media/analytics-views/work-item-count-card.png" alt-text="Screenshot of Power BI Visualizations, choose Card and add Work Item ID to Fields.":::

### Create a matrix of work items by area path and state

1. Load `Work Items - Today` Analytics view into Power BI. The data table should include the following columns: `Area Path`, `Assigned To`, `Iteration Path`, `State`, `Title`, `Work Item ID`, and `Work Item Type`.

2. From the **Visualizations** pane, choose **Matrix**, and add `Area Path`, `State`, and `Work Item ID` to **Rows**, **Columns**, and **Values**, respectively.

   :::image type="content" source="media/analytics-views/matrix-work-items-area-state.png" alt-text="Screenshot of Power BI Visualizations, choose Matrix and add Area Path, State, and Work Item ID fields to Rows, Columns, and Values.":::

3. (Optional) Expand the **Filters** pane and choose one or more fields to filter the report. For example, the example report shown in the previous image only shows select `Area Paths`.

   :::image type="content" source="media/analytics-views/matrix-work-items-filters.png" alt-text="Screenshot of Power BI Filters, select Area Paths.":::

   > [!NOTE]
   > To simplify the report, select `Area Paths` were renamed to shorten their labels. To learn how to replace values in a column, see [Transform Analytics data to generate Power BI reports, Replace values](transform-analytics-data-report-generation.md#replace-null-values).

4. To filter on other fields, such as `Iteration Path` or `Work Item Type`, drag the field to **Columns** in the **Visualizations** pane, and then filter the data from the **Filters** pane.

### Other common report types

- **Work item trends**: Track bug reports, user stories, and feature progress over time
- **Sprint burndown charts**: Monitor sprint progress and team velocity
- **Team performance metrics**: Analyze throughput, cycle time, and completion rates
- **Backlog analysis**: Visualize work distribution and priority alignment

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

#### Azure DevOps connector not visible

**Issue**: Can't find "Azure DevOps" in the data source list in Power BI Desktop

**Possible causes and solutions**:

1. **Outdated Power BI Desktop version**: 
   - Download and install the [latest version of Power BI Desktop](https://aka.ms/pbidesktopstore)
   - The Azure DevOps connector was added in later versions

2. **Looking in the wrong category**:
   - Check **Online Services** category first
   - If not found, search for "Azure DevOps" using the search box
   - Try looking in the **Other** category as a fallback

3. **Regional availability**: 
   - Ensure your Power BI region supports the Azure DevOps connector
   - Contact your administrator if using Power BI through organizational licensing

4. **Power BI licensing**:
   - Verify you have appropriate Power BI licensing
   - Some connector limitations might apply based on licensing tier

<a id="QueryExceedsPreferredMaxSizeException"></a>

#### Query result exceeds maximum size

Error message: "Query result exceeds maximum size. Reduce the number of records by applying more filters"

Cause: Your Analytics view returns more than 250,000 records.

Solutions:
1. Reduce the time range in your Analytics view
2. Apply more filters to limit work item types or states
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
- [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md)
- [Functions available in Power BI Data Connector](data-connector-functions.md)
