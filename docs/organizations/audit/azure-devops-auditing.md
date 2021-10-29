---
title: Access, export, filter audit logs for Azure DevOps
titleSuffix: Azure DevOps 
description: Get started accessing, reviewing, exporting, and filtering the Azure DevOps audit logs.  
ms.technology: devops-audit
ms.assetid: 9F1D0A0F-02D5-4E06-A5EC-C220472A0F66
ms.author: chcomley
author: roferg
ms.topic: quickstart
monikerRange: 'azure-devops'
ms.date: 03/30/2021
---

# Access, export, and filter audit logs

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

On the Auditing page of your Organization settings, you can access, export, and filter audit logs, which track the many changes that occur within your Azure DevOps organization(s). With these logs, you can use them to meet your organization's compliance and governance goals.

Audit changes occur whenever a user or service identity within the organization edits the state of an artifact. You may see events logged for any of the following occurrences:

- permissions changes
- deleted resources
- branch policy changes
- auditing log access and downloads
- and much more...

> [!NOTE]
> Auditing is currently in a Public Preview for Azure DevOps Services. Auditing is not available for on-premises deployments. To connect auditing to an on-premises or cloud-based Splunk, make sure you allow IP ranges for inbound connections. For details, see [Allowed address lists and network connections, IP addresses and range restrictions](../security/allow-list-ip-url.md#range-restrictions).

During the Public Preview, Auditing will be turned on by default for all Azure DevOps Services organizations. You can not turn auditing off, which also ensures that you never miss an actionable event. After Public Preview, Auditing can be toggled on and off by Project Collection Administrators.

Events are stored for 90 days, after which they are deleted. However, you can back up audit events to an external location to keep the data for longer than the 90-day period. 

## Prerequisites

By default, Project Collection Administrators are the only group that have full access to the auditing feature.

### Audit permissions

- Members of the **Project Collection Administrators** group have full access to all auditing features.
- Members of the **Project Collection Valid Users** group can view the Auditing page and export audit logs.

> [!NOTE]  
> If the **Limit user visibility for projects** preview feature is enabled for the organization, users added to the **Project-Scoped Users** group can not view **Auditing** and have limited visibility to **Organization settings** pages.  To learn more, see [About projects and scaling your organization, Project-scoped Users group](../../organizations/projects/about-projects.md#project-scoped-user-group). 

## Access auditing

> [!NOTE]
> To enable the new user interface for the Organization Permissions Settings Page, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page)

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](../../media/settings/open-admin-settings-vert.png)

3. Select **Auditing**.

   ![Auditing preview page](media/azure-devops-auditing/access-audit-log-red-box-preview.png)
   
4. If you do not see Auditing in Organization settings, then you do not have access to view audit events. Outside of the Project Collection Administrators group, you can give permissions to other users and groups, so that they can view the auditing pages. Select **Permissions**, and then find the group or users to provide auditing access to.

   ![Screenshot of highlighted Permissions tab.](media/azure-devops-auditing/select-permissions-preview.png)  

5. Set **View audit log** to **allow**, and then select **Save changes**.

   ![Screenshot of Auditing access permission preview.](media/azure-devops-auditing/audit-log-permission-red-box-preview.png)

The user or group members will now have access to view your organization's audit events.

#### [Current page](#tab/current-page)

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.
   
   ![Open Organization settings](../../media/settings/open-admin-settings-vert.png)
   
3. Select **Auditing**.

   ![Screenshot of Auditing view current page](media/azure-devops-auditing/access-audit-log-red-box.png)

4. If you do not see Auditing in Organization settings, then you do not have access to view audit events. Outside of the Project Collection Administrators group, you can give permissions to other users and groups, so they can view auditing. Select **Security**, and then find the group or users to provide auditing access to.

   ![Screenshot of highlighted Permissions tab.](media/azure-devops-auditing/select-permissions-preview.png)  

5. Set **View audit log** to **allow**, and then select **Save changes**.

   ![Screenshot of Auditing access permission current view.](media/azure-devops-auditing/audit-log-permission-red-box.png)

The user or group members will now have access to view your organization's audit events.

* * *

## Review audit log

The Auditing page provides a simple view into the audit events recorded for your organization. See the following description of the information that is visible on the auditing page:

### Audit event information and details

|Information  |Details  |
|---------|---------|
|Actor     | Display name of the individual that triggered the audit event.      |
|IP    |  IP address of the individual that triggered the audit event.    |
|Timestamp     | Time that the triggered event happened. Time is localized to your time zone.        |
|Area     | Product area in Azure DevOps where the event occurred.        |
|Category     | Description of the type of action that occurred (e.g. modify, rename, create, delete, remove, execute, and access event).   |
|Details    | Brief description of what happened during the event.        |

Each audit event also records additional information to what is viewable on the auditing page. This information includes the authentication mechanism, a correlation ID to link similar events together, user agent, and additional data depending on the audit event type. This information can only be viewed by exporting the auditing events via CSV or JSON.

### ID & correlation ID

Each audit event has unique identifiers called the “ID” and “CorrelationID”. The correlation ID is helpful for finding related audit events. For example, a created project can generate several dozen audit events. You can link these events together because they all have the same correlation ID. 

When an audit event ID matches its correlation ID, it indicates that the audit event is the parent or original event. So, the initial event, showing that a user created a project, has the same ID as the correlation ID. To see only originating events, look for the events where “ID” equals the “Correlation ID”. Then, if you find an event that you want to investigate, you can look up only the events with that correlation ID. Not all events have other related events. 

### Bulk events

Some audit events can contain multiple actions that took place at once, also known as "bulk audit events". You can distinguish these events from others with an "Information icon" on the far right of the event. You can find individual details on the actions included in the bulk audit events through the downloaded audit data.

![Auditing more information icon](media/azure-devops-auditing/audit-log-more-information-high-res.png)

Selecting the information icon displays additional information about what happened in this audit event.

As you look through the audit events, you may find the *Category* and *Area* columns of interest. These columns allow you to sift through to find only the types of events that you are interested in. The following tables are a list of categories and areas, as well as their descriptions:

### Categories

|Category  |Description |
|---------|---------|
|Access     | Viewed or opened artifacts in an organization.        |
|Create     | Newly created artifacts in an organization.        |
|Delete     | Deleted or removed artifacts from an organization.        |
|Execute    | Completed processes done within an organization. |
|Modify     | Changed artifacts, such as a state or property change, made in an organization.        |
|Rename     | Name changes done on artifacts in an organization.        |

### Areas

> [!Note]
> While auditing is in a public preview, we are working hard to get more areas audited. We try our best to add new auditing events monthly. If you would like to see an event that is not currently tracked, consider sharing that with us in the [Developer Community](https://developercommunity.visualstudio.com/search?space=21). 

|Area            |Description |
|----------------|------------|
| Artifacts      | (Audit Streaming only) |
| Auditing       | View and download audit logs. Access, create, modify, enable, disable, and delete audit streams. |
| Billing        | Add, change, or remove Azure Subscriptions. Modify billing quantities for Pipelines, Artifacts, and Cloud Load Test usage.  |
| Checks         | Create, modify, delete, and track usage of checks including approvals on protected resources in Azure Pipelines (YAML only). |
| Extension      | Install, modify, enable, disable, and uninstall extensions for Extensions Marketplace.           |
| Git            | Create, modify, enable, disable, fork, delete and undelete Git repositories in Azure Repos. Bypass PR policies. Change branch policies.   |
| Group          | Create groups and modify group memberships.          |
| Library        | Create, modify, delete, and track usage of service connections, variable groups, secure files, and agent pools in Azure Pipelines. |
| Licensing      | Assign, modify, and remove licensing. Create, modify, and delete group licensing rules.           |
| Organization   | Create and modify Azure DevOps organization. Link and unlink to Azure Active Directory organizations. |
| OrganizationPolicy | Add, modify, or remove organization policies.           |
| Permissions    | Modify or remove permissions and access control lists for users and groups throughout an Azure DevOps organization.           |
| Pipelines      | Create, modify, and delete Pipelines in Azure Pipelines. Authorize and unauthorize resource for projects and pipelines. Modify pipeline retention settings. Retain and unretain pipeline runs. |
| Policy         |  Create, modify, and delete policies for a Git repository in Azure Repos.       |
| Process        | Create, modify, and delete attributes for processes (portfolio backlogs, controls, fields, groups, lists, pages, processes, rules, states, control settings, work items, etc.) in Azure Boards.           |
| Project        | Create, modify, change visibility of, delete, and restore projects in Azure Boards. Create, modify, and delete Area paths. |
| Release        | Create, modify, and delete releases and release pipelines in Azure Pipelines. Track deployments and deployment approvals.      |
| Token          | Create, modify, revoke, and delete Personal Access Tokens (PATs) or SSH Keys. Track public repository discovery and system revocations of PATs. Token access events are not currently logged. |

> [!Note]
> Want to find out what event areas your organization logs? Be sure to check out the [Audit Log Query API](https://docs.microsoft.com/en-us/rest/api/azure/devops/audit/audit-log/query?view=azure-devops-rest-6.0): `https://auditservice.dev.azure.com/{YOUR_ORGANIZATION}/_apis/audit/actions`, replacing {YOUR_ORGANIZATION} with the name of your organization. This API returns a list of all audit events your organization could emit. 

## Filter audit log by date and time

In the current Auditing UI, you can only filter events by a date or time range. To scope down the viewable audit events by a date range, select the time filter on the top-right-hand side of the page. 

![Auditing entry filter by date & time](media/azure-devops-auditing/audit-log-date-time-picker.png)

Use the filters to select any time range over the last 90 days and scope it down to the minute. Once you have selected a time range, select Apply on the time range selector to start the search. By default, the top 200 results are returned for that time selection. If there are more results, then you can scroll down to load them onto the page.

## Export auditing events

To do a more detailed search on the auditing data or store data for more than 90 days of data, you will need to export existing audit events. The exported data can then be stored in another location or service. 

Select the **Download** button in the top-right-hand side of the auditing page to export auditing events. You can select to download as a CSV or JSON file. 

Selecting either option starts the download. Events get downloaded based on the time range you have selected in the filter. If you had one day selected, then you get that one day’s worth of data. Transversely, if you wanted all 90 days, select 90 days from the time range filter and then start the download. 

> [!NOTE]
> For long-term storage and analysis of your auditing events, consider sending your events downstream to a Security Information and Event Management (SIEM) tool using the [Audit Streaming feature](auditing-streaming.md). Exporting the auditing logs is recommended for cursory data analysis.

To filter data by more than the date/time range, we recommend downloading logs as CSV files and importing Microsoft Excel or other CSV parsers to sift through Area and Category columns. For analysis on even larger datasets, we recommend uploading exported audit events into a Security Incident and Event Management (SIEM) tool using the [Audit Streaming function](auditing-streaming.md). Such tools allow you to keep greater than 90 days of events, searches, generated reports, and configured alerts based on audit events. 

## Limitations

The following limitations exist for what can be audited.

* Azure Active Directory (Azure AD) group membership changes – Auditing Logs include updates to Azure DevOps groups and group membership (when an event Area is "Groups"). However, if you manage membership via Azure AD groups, such additions and removals of users from those Azure AD groups are not audited by Azure DevOps in these logs. Review the Azure AD audit logs to see when a user or group was added or removed from an Azure AD group. 
* Sign in events – We do not track sign in events for Azure DevOps. View the Azure AD audit logs to review sign in events to your Azure AD. 

## Related articles
- [Auditing streaming](auditing-streaming.md)

