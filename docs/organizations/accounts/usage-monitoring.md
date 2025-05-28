---
title: Monitor usage of Azure DevOps Services
titleSuffix: Azure DevOps Services
description: How to investigate delayed or unfulfilled user requests in Azure DevOps Services.
ms.subservice: azure-devops-organizations
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 10/24/2024
monikerRange: 'azure-devops'
---

# Monitor usage

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Monitoring usage in Azure DevOps Services is crucial for identifying and addressing performance bottlenecks. By understanding the common commands and operations that trigger usage messages, you can optimize your tools and processes to ensure efficient use of resources. Regularly reviewing the usage page and audit logs helps maintain the performance and reliability of your Azure DevOps environment.

## Prerequisites

[!INCLUDE [prerequisites-pca-only](../../includes/prerequisites-pca-only.md)]

> [!NOTE]
> To view usage from an audit perspective, see [Access, export, and filter audit logs](../../organizations/audit/azure-devops-auditing.md). This view doesn't include TSTUs but retains data for 90 days.

For more information, see [Rate and usage limits](../../integrate/concepts/rate-limits.md).

## View usage

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings** > **Usage**.

  :::image type="content" source="media/usage-pca-newnav.png" alt-text="Screenshot of Usage page for collection administrators.":::

3. Use this page to investigate the usage of other users. Usage can occur from regular web portal operations or the use of command line or REST API tools.

  a. View by the following categories:
    - Usage by user
    - Usage by pipeline
    - Top user agents
    - Top commands
    - Top build pipelines
    - Top release pipelines
  
  b. Filter by the following column options:
    - User
    - User agent
    - IP address
    - Time range
    - Service
    - Application
    - Referrer
    - Command
    - UriStem
    - Status
    - Count
    - Usage (TSTUs)
    - Delay (s)

   Azure DevOps displays the last hour of requests by default. You can select from other increments of time.

  c. Select from the following statuses:
    - All statuses
    - Normal
    - Delayed
    - Blocked

  d. The usage page is scoped to the 30 minutes before and after the first delayed request. Review the request history leading up to delayed requests.

  :::image type="content" source="media/usage-screenshot-example.png" alt-text="Screenshot of usage page example.":::

### Understand notifications and alerts
- When a user's request gets delayed, they receive a notification email and see a warning banner on the web. Both the banner and email link to the usage page.
- When a user doesn't have an email address, the notification gets sent to the Project Collection Administrators group members.

### Identify high usage
- Commands consuming a high number of Azure DevOps throughput units (TSTUs) can cause users to exceed thresholds.
- The User Agent and IP address columns help identify the source of these commands. Custom tools or build service accounts might be making numerous calls in a short time window.

### Optimize tools and processes

To avoid issues, consider rewriting tools or updating build processes to reduce the type and number of calls. For example, instead of pulling a large version control repository from scratch regularly, pull incrementally.

### Understand usage page details

- Request history on the `Usage` page is in descending order by default.
- Usage gets grouped by command into five-minute time windows.
- The `Count` column shows the number of commands in the window.
- Other columns highlight total TSTUs and delay time.

## Related articles

- [Work tracking, process, and project limits](../settings/work/object-limits.md)
- [Access, export, and filter Azure DevOps audit logs](../audit/azure-devops-auditing.md)
- [About Settings at the user, team, project, and organizational level](../settings/about-settings.md)
- [Get list of organizations backed by Microsoft Entra ID](get-list-of-organizations-connected-to-microsoft-entra-id.md)

