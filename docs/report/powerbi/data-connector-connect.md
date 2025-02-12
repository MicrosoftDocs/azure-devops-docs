---
title: Connect to Power BI Data Connector
titleSuffix: Azure DevOps
description: Learn how to connect to Power BI Data Connector and Analytics to access Azure DevOps data. You can extract valuable insights and create compelling reports.
ms.assetid: 509ECCF2-E18E-4F14-B7EE-8802AB8938A2
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '>= azure-devops-2019'
ms date: 09/16/2024
#customer intent: As a team member or administrator, I want to connect to Azure DevOps Analytics with Power BI to create reports. 
---

# Connect Analytics with Power BI Data Connector

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

In this article, learn how to establish a seamless connection between Power BI and Azure DevOps by using Data Connector. This integration allows you to extract valuable insights from your Azure DevOps data and create compelling reports within Power BI. Power BI Data Connector uses [Analytics views](what-are-analytics-views.md).

[!INCLUDE [analytics note](includes/analytics-views-warning.md)]

## Prerequisites

::: moniker range="azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md)<br>- At least **Basic** access. |
| **Permissions** | [Analytics permissions](analytics-security.md). If you're a member of the **Contributors** group for the project, you have permission. |
|**Tools** | - [Azure Boards enabled](../../organizations/settings/set-services.md)<br>- [Power BI Desktop](https://aka.ms/pbidesktopstore)    |
|**Tasks**| - Familiarity with [What is Analytics](what-is-analytics.md) and the [knowledge base of Power BI articles](/power-bi/).<br>- [Create an Analytics view](analytics-views-create.md) that you want to create a Power BI report. |

::: moniker-end

::: moniker range="< azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md)<br>- At least **Basic** access. |
| **Permissions** | [Analytics permissions](analytics-security.md). If you're a member of the **Contributors** group for the project, you have permission. |
|**Tools** | - [Analytics installed and enabled](../dashboards/analytics-extension.md?view=azure-devops-2019&preserve-view=true). Account owners or a members of the [Project Collection Administrators group](../../organizations/security/change-organization-collection-level-permissions.md) can add extensions or enable the service.<br>- [Azure Boards enabled](../../organizations/settings/set-services.md)<br>- [Power BI Desktop](https://aka.ms/pbidesktopstore)    |
|**Tasks**| - Familiarity with [What is Analytics](what-is-analytics.md) and the [knowledge base of Power BI articles](/power-bi/).<br>- [Create an Analytics view](analytics-views-create.md) that you want to create a Power BI report. |

::: moniker-end

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]

[!INCLUDE [connect to an analytics view](../includes/connect-analytics-view.md)]

## Create a report

Create a report based on the loaded data. After the load operation finishes, you can explore the data by creating custom reports. For examples of common reports, see [Data Connector - Example reports](data-connector-examples.md).

:::image type="content" source="media/data-connector-visual.png" alt-text="Screenshot that shows the Power BI Desktop report view." lightbox="media/data-connector-visual.png":::

<a id="PowerBILimitations">  </a>

<a id="q-a">  </a>

## FAQs

Find answers to common questions about Power BI Data Connector and Analytics error messages.

<!-- BEGINSECTION class="md-qanda" -->

### Q: How should I read error messages coming from the connector?

**A:** You might feel challenged reading error messages coming from the connector because they typically contain extra contextual information. If the load operation fails, then the message starts with "Failed to save modifications to the server...". When you see it, search for **&#91;DataSource.Error&#93; Azure DevOps...:**.
The following example shows the error message returned from the connector. The most important part of the error message is "Query result exceeds maximum size. Reduce the number of records by applying additional filters."

:::image type="content" source="media/QueryExceedsPreferredMaxSizeException.png" alt-text="Screenshot that shows the Query result exceeds maximum size error message.":::

<a id="QueryExceedsPreferredMaxSizeException">  </a>

### Q: How do I resolve the "Query result exceeds maximum size. Reduce the number of records by applying additional filters" error?

**A:** You get the following error if the number of records retrieved from Analytics exceeds 250,000:

"Failed to save modifications to the server. Error returned: 'OLE DB or ODBC error: 
&#91;DataSource.Error&#93; VSTS: Request failed: The remote server returned an error: (400) Bad Request. 
(Query result exceeds maximum size. Reduce the number of records by applying additional filters).'"

This error typically occurs when your project has a large number of work items. Reduce the size of the dataset by [customizing the view](analytics-views-create.md). Do this step before you use it in Power BI.

:::image type="content" source="media/QueryExceedsPreferredMaxSizeException.png" alt-text="Screenshot that shows the Query result exceeds maximum size error.":::

<a id="AccessDeniedError">  </a>

### Q: How do I resolve the "user wasn't authorized" error?

**A:** You might get this error if you try to access a project that you don't have permissions to. You might also see it if Power BI doesn't recognize your credentials. To check your permissions, see [Set permissions to access Analytics and Analytics views](analytics-security.md). If it's a credential issue, work with your administrator to see if they can help resolve the problem. For more information, see [Power BI security, user authentication](/power-bi/admin/service-admin-power-bi-security#user-authentication), and [Troubleshooting sign-in issues for Power BI](/power-bi/admin/power-bi-cannot-sign-in).

:::image type="content" source="media/AccessDeniedError.png" alt-text="Screenshot that shows the access-denied error.":::

> [!NOTE]
> Power BI uses [Microsoft Entra ID](https://azure.microsoft.com/services/active-directory/) to authenticate users who sign in to the Power BI service, and in turn, uses the Power BI sign-in credentials whenever a user attempts to access resources that require authentication. Users sign in to the Power BI service by using the email address used to establish their Power BI account. Power BI uses that sign-in email as the *effective username*, which is passed to resources whenever a user attempts to connect to data. The effective username is then mapped to a [user principal name](/windows/win32/secauthn/user-name-formats) and resolved to the associated Windows domain account, against which authentication is applied.

<a id="AnalyticsAccessCheckException"></a>

### Q: How do I resolve the "Access to the resource is forbidden" error?

**A:** You might get this error if you have access to a specific project but you don't have the **View analytics** permissions. Work with your project administrator to get these permissions. For more information about the security model, see [Analytics security](analytics-security.md).

:::image type="content" source="media/AnalyticsAccessCheckException.png" alt-text="Screenshot that shows the error message Access to the resource is forbidden.":::

<a id="ProjectNotFoundError">  </a>

### Q: How do I resolve the "Project 'X' doesn't exist or you don't have permissions to access it" error?

**A:** This error indicates that the value you entered for **Project name** doesn't correspond to any project. A common mistake that users make is to confuse the project name with a team name.

For example, if the URL you use is `https://dev.azure.com/fabrikam-fiber-inc/Fabrikam-Fiber-Git/Device`, then *Fabrikam-Fiber-Git* is the project name and it should be used in the parameter. *Device* is the team name.

:::image type="content" source="media/ProjecNotFoundError.png" alt-text="Screenshot that shows the Project not found error.":::

<!-- ENDSECTION -->

## Related content

- [Set permissions to access Analytics and Analytics views](analytics-security.md)
- [About Power BI integration](overview.md)
- [Set permissions to access Analytics and Analytics views](analytics-security.md)
- [Analytics views dataset design](data-connector-dataset.md)
- [Example reports based on Analytics views](data-connector-examples.md)
