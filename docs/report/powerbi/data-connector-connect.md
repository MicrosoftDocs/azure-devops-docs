---
title: Connect to Power BI Data Connector
titleSuffix: Azure DevOps
description: See how to use Power BI Data Connector to access Azure DevOps Analytics views in Power BI so you can extract insights and create reports from the views.
ms.assetid: 509ECCF2-E18E-4F14-B7EE-8802AB8938A2
ms.subservice: azure-devops-analytics
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: "<=azure-devops"
ms date: 04/24/2025
#customer intent: As a team member or administrator, I want to integrate Azure DevOps Analytics views with Power BI so that I can create reports from the Analytics data. 
---

# Connect Analytics with Power BI Data Connector

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

This article shows you how to establish a seamless connection between Power BI and Azure DevOps by using Power BI Data Connector. You can use this integration to extract valuable insights from your Azure DevOps data and create compelling reports within Power BI. Power BI Data Connector uses [Analytics views](what-are-analytics-views.md).

[!INCLUDE [analytics note](includes/analytics-views-warning.md)]

## Prerequisites

::: moniker range="azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md)<br>- At least Basic access |
| **Permissions** | [Analytics permissions](analytics-security.md). If you're a member of the Contributors group for the project, you have permission. |
|**Tools** | - [Azure Boards enabled](../../organizations/settings/set-services.md)<br>- [Power BI Desktop](https://aka.ms/pbidesktopstore)    |
|**Tasks**| - Familiarity with [What is Analytics](what-is-analytics.md) and the [knowledge base of Power BI articles](/power-bi/)<br>- [An Analytics view](analytics-views-create.md) to use in a Power BI report |

::: moniker-end

::: moniker range="< azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md)<br>- At least Basic access |
| **Permissions** | [Analytics permissions](analytics-security.md). If you're a member of the Contributors group for the project, you have permission. |
|**Tools** | - [Analytics installed and enabled](../dashboards/analytics-extension.md?view=azure-devops-2022&preserve-view=true). Account owners or members of the [Project Collection Administrators group](../../organizations/security/change-organization-collection-level-permissions.md) can add extensions or enable the service.<br>- [Azure Boards enabled](../../organizations/settings/set-services.md).<br>- [Power BI Desktop](https://aka.ms/pbidesktopstore). |
|**Tasks**| - Familiarity with [What is Analytics](what-is-analytics.md) and the [knowledge base of Power BI articles](/power-bi/)<br>- [An Analytics view](analytics-views-create.md) to use in a Power BI report |

::: moniker-end

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]

[!INCLUDE [connect to an analytics view](../includes/connect-analytics-view.md)]

## Create a report

After the load operation finishes, you can explore the data and create custom reports. For examples of common reports, see [Example reports based on Analytics views](data-connector-examples.md).

:::image type="content" source="media/data-connector-visual.png" alt-text="Screenshot that shows the Power BI Desktop report view." lightbox="media/data-connector-visual.png":::

<a id="PowerBILimitations">  </a>

<a id="q-a">  </a>

## FAQs

In this section, you can find answers to common questions about Power BI Data Connector and Analytics error messages.

<!-- BEGINSECTION class="md-qanda" -->

### Q: How should I read error messages coming from the connector?

**A:** You might feel challenged reading error messages coming from the connector because they typically contain extra contextual information. If the load operation fails, the message starts with "Failed to save modifications to the server." If you see this message, search for **&#91;DataSource.Error&#93;** within the text of the message to find the reason for the error and suggested steps.

The following example shows an error message returned from the connector. The most important parts are the statements about the query result exceeding the maximum size and the suggestion to reduce the number of records by applying more filters.

:::image type="content" source="media/QueryExceedsPreferredMaxSizeException.png" alt-text="Screenshot that shows an error message about the query result exceeding the maximum size, with extra information.":::

<a id="QueryExceedsPreferredMaxSizeException">  </a>

### Q: How do I resolve the "Query result exceeds maximum size. Please reduce the number of records by applying additional filters" error?

**A:** You get the following error if the number of records retrieved from Analytics exceeds 250,000:

"Failed to save modifications to the server. Error returned: 'OLE DB or ODBC error: 
&#91;DataSource.Error&#93; Visual Studio Team Services: Request failed: The remote server returned an error: (400) Bad Request. 
(Query result exceeds maximum size. Please reduce the number of records by applying additional filters).'"

This error typically occurs when your project has a large number of work items. Reduce the size of the dataset by [customizing the view](analytics-views-create.md). Do this step before you use the view in Power BI.

:::image type="content" source="media/QueryExceedsPreferredMaxSizeException.png" alt-text="Screenshot that shows an error message about the query result exceeding the maximum size.":::

<a id="AccessDeniedError">  </a>

### Q: How do I resolve an error about the user not being authorized?

**A:** You might get this error if you try to access a project that you don't have permissions for. You might also see it if Power BI doesn't recognize your credentials. To check your permissions, see [Set permissions to access Analytics and Analytics views](analytics-security.md). If the issue involves credentials, work with your administrator to resolve the problem. For more information, see [Power BI security, user authentication](/power-bi/enterprise/service-admin-power-bi-security#user-authentication) and [Resolve sign-in issues for Power BI](/power-bi/support/power-bi-cannot-sign-in).

:::image type="content" source="media/AccessDeniedError.png" alt-text="Screenshot that shows an error about an unsuccessful authentication attempt.":::

> [!NOTE]
> Power BI uses [Microsoft Entra ID](https://www.microsoft.com/security/business/identity-access/microsoft-entra-id) to authenticate users who sign in to the Power BI service. In turn, Power BI uses the Power BI sign-in credentials whenever a user attempts to access resources that require authentication. Users sign in to the Power BI service by using the email address used to establish their Power BI account. Power BI uses that sign-in email as the *effective username*, which is passed to resources whenever a user attempts to connect to data. The effective username is then mapped to a [user principal name](/windows/win32/secauthn/user-name-formats) and resolved to the associated Windows domain account, against which authentication is applied.

<a id="AnalyticsAccessCheckException"></a>

### Q: How do I resolve the "Access to the resource is forbidden" error?

**A:** You might get this error if you have access to a specific project but you don't have the **View analytics** permission. Work with your project administrator to get this permission. For more information about the security model, see [Set permissions to access Analytics and Analytics views](analytics-security.md).

:::image type="content" source="media/AnalyticsAccessCheckException.png" alt-text="Screenshot that shows an error message about access to the resource being forbidden.":::

<a id="ProjectNotFoundError">  </a>

### Q: How do I resolve the "Project 'X' does not exist or you do not have permissions to access it" error?

**A:** This error indicates that the value you entered for the project doesn't correspond to any project. A common mistake that users make is to confuse the project name with a team name.

For example, if the URL you use is `https://dev.azure.com/fabrikam-fiber-inc/Fabrikam-Fiber-Git/Device`, the project name is *Fabrikam-Fiber-Git*. You should enter this value as the project parameter to use for connecting to your data. *Device* is the team name.

:::image type="content" source="media/ProjecNotFoundError.png" alt-text="Screenshot that shows the error message that appears when a project doesn't exist or when insufficient permissions are provided for accessing it.":::

## Related content

- [Power BI integration](overview.md)
- [Analytics views dataset design](data-connector-dataset.md)
- [Example reports based on Analytics views](data-connector-examples.md)
