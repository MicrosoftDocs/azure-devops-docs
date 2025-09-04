---
title: Secure your analytics & reporting
titleSuffix: Azure DevOps
description: Learn about security concepts, access controls, and best practices for protecting your analytics data and reports in Azure DevOps.
ms.service: azure-devops-analytics
ms.custom: security
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 09/04/2025
---

# Secure your analytics & reporting

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure DevOps analytics and reporting provide powerful insights into your development processes, but with that power comes the responsibility to protect sensitive data and control access to organizational metrics. This article outlines the security concepts, access controls, and best practices for securing your analytics and reporting implementation.

## Security model overview

Analytics and reporting security operates on a multi-layered approach that includes:

- **Control data visibility**: Manage who can view analytics data and which projects they can access. For more information, see [Analytics security](analytics-security.md)
- **Implement dashboard permissions**: Control access to dashboards and their underlying data. For more information, see [Set dashboard permissions](dashboards/dashboard-permissions.md)
- **Configure project-level access**: Restrict analytics access based on project membership. For more information, see [Default permissions and access for reporting](../organizations/security/permissions-access.md#reports)
- **Manage Power BI integration**: Secure connections between Azure DevOps and Power BI. For more information, see [Connect to Power BI Data Connector](powerbi/data-connector-connect.md)
- **Enable audit and compliance**: Track data access and maintain compliance requirements. For more information, see [Access, export, and filter audit logs](../organizations/audit/azure-devops-auditing.md)

## Identity and access management

### Access levels for reporting

Analytics and reporting capabilities vary by access level. For comprehensive information about default permissions for each access level, see [Default permissions and access for reporting](../organizations/security/permissions-access.md#reports).

| Access Level | Analytics & Reporting Capabilities |
|--------------|-----------------------------------|
| **Stakeholder** | View shared dashboards, limited analytics views, basic chart widgets |
| **Basic** | Full access to Analytics views, dashboard creation and editing, all chart widgets |
| **Basic + Test Plans** | Includes Basic access plus Test Plans analytics and reporting |
| **Visual Studio Enterprise** | Includes all Basic features plus advanced analytics capabilities |

For more information, see [About access levels](../organizations/security/access-levels.md).

### Authentication for external tools

When you connect external reporting tools to Azure DevOps, secure authentication is essential:

::: moniker range="azure-devops"
- **Use Microsoft Entra tokens**: Use organizational identity for enhanced security and centralized management. For more information, see [Use Microsoft Entra tokens](../integrate/get-started/authentication/entra.md)
- **Configure OAuth applications**: Set up secure OAuth flows for non-Microsoft integrations. For more information, see [Authorize access to REST APIs with OAuth 2.0](../integrate/get-started/authentication/oauth.md)
- **Use personal access tokens (PATs) when necessary**: Create tokens with minimal required scopes only when Microsoft Entra ID is not available. For more information, see [Use personal access tokens](../organizations/accounts/use-personal-access-tokens-to-authenticate.md)
::: moniker-end

::: moniker range="< azure-devops"
- **Create service accounts**: Use dedicated accounts for reporting tool connections.
- **Configure Windows authentication**: Integrate with Active Directory for seamless access. For more information, see [Set up groups for use in Azure DevOps Server](/azure/devops/server/admin/setup-ad-groups)
- **Use alternate authentication**: Enable token-based authentication for external tools. For more information, see [Authentication guidance for REST APIs](../integrate/get-started/authentication/authentication-guidance.md)
::: moniker-end

## Analytics security

### Data access permissions

Analytics security is built on the principle of data visibility inheritance from source projects:

- **Project-based access**: Users can only see analytics data for projects they have access to. For more information, see [Change project-level permissions](../organizations/security/change-project-level-permissions.md)
- **Work item visibility**: Analytics respects work item area path permissions. For more information, see [Set work tracking permissions](../organizations/security/set-permissions-access-work-tracking.md)
- **Repository access**: Code metrics are filtered based on repository permissions. For more information, see [Set Git repository permissions](../repos/git/set-git-repository-permissions.md)
- **Pipeline visibility**: Build and release analytics follow pipeline security settings. For more information, see [Set pipeline permissions](../pipelines/policies/set-permissions.md)

For detailed information on how analytics inherits permissions, see [Analytics security](analytics-security.md).

### Analytics views

Control access to specific data sets through Analytics views. For more information about creating and managing Analytics views, see [Create an Analytics view](analytics/analytics-views-create.md).

| View Type | Security Characteristics |
|-----------|-------------------------|
| **Shared views** | Accessible to all project members with appropriate permissions |
| **Private views** | Only accessible to the creator |
| **Team views** | Restricted to specific team members |

### Data filtering and privacy

Implement data filtering to protect sensitive information:

- **Configure area path restrictions**: Limit analytics data to specific work item areas. For more information, see [Set work tracking permissions](../organizations/security/set-permissions-access-work-tracking.md)
- **Apply field-level security**: Hide sensitive work item fields from analytics. For more information, see [Add and modify a field](../organizations/settings/work/add-custom-field.md)
- **Manage cross-project access**: Control visibility across multiple projects. For more information, see [Analytics security](analytics-security.md)

## Dashboard security

### Dashboard permissions

Control who can view, edit, and manage dashboards. For step-by-step instructions on configuring dashboard permissions, see [Set dashboard permissions](dashboards/dashboard-permissions.md).

| Permission Level | Capabilities |
|-----------------|--------------|
| **View** | View dashboard and its widgets |
| **Edit** | Modify dashboard layout and widget configuration |
| **Manage** | Full control including sharing and permissions management |
| **Delete** | Remove dashboards and associated configurations |

### Widget security considerations

Different widgets have varying security implications:

- **Query-based widgets**: Inherit security from underlying work item queries. For more information, see [Set permissions on queries](../boards/queries/set-query-permissions.md)
- **Analytics widgets**: Follow Analytics view permissions and project access. For more information, see [Analytics security](analytics-security.md)
- **External widgets**: Might require other authentication and data sharing considerations. For more information, see [Security best practices](../organizations/security/security-best-practices.md)
- **Custom widgets**: Security depends on implementation and data sources. For more information, see [Add, rename, and delete dashboards](dashboards/dashboards.md)

### Team and project dashboards

Manage dashboard access at different organizational levels:

- **Team dashboards**: Accessible to team members and project stakeholders. For more information, see [Add a team, move from one default team to several teams](../organizations/settings/add-teams.md)
- **Project dashboards**: Available to all project contributors. For more information, see [Change project-level permissions](../organizations/security/change-project-level-permissions.md)
- **Personal dashboards**: Private to individual users
- **Organization dashboards**: Visible across the entire organization. For more information, see [Change permissions at the organization or collection-level](../organizations/security/change-organization-collection-level-permissions.md)

For more information about dashboard types and access, see [Add, rename, and delete dashboards](dashboards/dashboards.md).

## Power BI integration security

### Data connector security

When you use Power BI with Azure DevOps, implement these security measures. For detailed setup instructions, see [Connect to Power BI Data Connector](powerbi/data-connector-connect.md).

- **Use service principals with Microsoft Entra ID**: Implement application-based authentication for automated refresh with centralized identity management. For more information, see [Use Microsoft Entra tokens](../integrate/get-started/authentication/entra.md)
- **Configure row-level security**: Filter Power BI data based on user identity
- **Manage refresh credentials**: Securely store and rotate data source credentials using Microsoft Entra ID authentication
- **Apply workspace permissions**: Control access to Power BI workspaces containing Azure DevOps data

### Data privacy in Power BI

Protect sensitive data when sharing Power BI reports:

- **Configure data sensitivity labels**: Apply appropriate classification to reports and datasets
- **Implement sharing restrictions**: Control who can access and share Power BI content
- **Monitor data usage**: Track access patterns and identify potential security issues
- **Apply export restrictions**: Limit data export capabilities based on organizational policies

For more information about Power BI security best practices, see [Power BI security baseline](/security/benchmark/azure/baselines/power-bi-security-baseline).

## Compliance and auditing

### Audit logging

::: moniker range="azure-devops"
Track analytics and reporting activities through comprehensive audit logs:

- **Monitor dashboard access**: Track who views and modifies dashboards. For more information, see [Access, export, and filter audit logs](../organizations/audit/azure-devops-auditing.md)
- **Audit data exports**: Log when users export analytics data
- **Track Power BI connections**: Monitor external tool connections and data access
- **Review permission changes**: Maintain logs of security configuration modifications
::: moniker-end

### Data retention and compliance

Implement appropriate data retention policies:

- **Configure analytics data retention**: Set appropriate retention periods for historical data
- **Manage dashboard lifecycle**: Establish processes for dashboard archival and deletion
- **Document data lineage**: Maintain records of data sources and transformations
- **Implement compliance reporting**: Generate reports for regulatory requirements

For more information about data protection, see [Data protection overview](../organizations/security/data-protection.md).

## Best practices for Analytics & Reporting security

### Access management

- **Apply least privilege principle**: Grant minimum required access for analytics and reporting needs
- **Conduct regular access reviews**: Periodically audit dashboard and analytics permissions
- **Use group-based management**: Manage permissions through security groups rather than individual assignments
- **Implement role-based access**: Define standard roles for different reporting needs

### Data protection

- **Classify data sensitivity**: Identify and protect sensitive metrics and reports. For more information, see [Data protection overview](../organizations/security/data-protection.md)
- **Implement data masking**: Hide or obfuscate sensitive information in shared reports. For more information, see [Add and modify a field](../organizations/settings/work/add-custom-field.md)
- **Control data export**: Restrict bulk data export capabilities based on user roles. For more information, see [Change access levels](../organizations/security/change-access-levels.md)
- **Monitor anomalous access**: Watch for unusual patterns in data access and reporting. For more information, see [Access, export, and filter audit logs](../organizations/audit/azure-devops-auditing.md)

### Integration security

- **Secure external connections**: Use encrypted connections for all external reporting tools. For more information, see [Use Microsoft Entra tokens](../integrate/get-started/authentication/entra.md)
- **Validate third-party tools**: Ensure external analytics tools meet security requirements. For more information, see [Security best practices](../organizations/security/security-best-practices.md)
- **Manage Microsoft Entra authentication**: Use organizational identity management for external integrations instead of individual tokens. For more information, see [Use Microsoft Entra tokens](../integrate/get-started/authentication/entra.md)
- **Monitor integration usage**: Track data access through APIs and external connections. For more information, see [Access, export, and filter audit logs](../organizations/audit/azure-devops-auditing.md)

### Organizational governance

- **Establish reporting standards**: Define approved tools and practices for organizational reporting. For more information, see [Security best practices](../organizations/security/security-best-practices.md)
- **Create data governance policies**: Implement policies for data accuracy, privacy, and usage. For more information, see [Data protection overview](../organizations/security/data-protection.md)
- **Train users on security**: Educate teams on secure reporting practices and potential risks. For more information, see [Security best practices](../organizations/security/security-best-practices.md)
- **Document security procedures**: Maintain up-to-date documentation of security configurations and processes. For more information, see [About permissions and security groups](../organizations/security/about-permissions.md)

## Common security scenarios

### Multi-project analytics

When implementing analytics across multiple projects, establish clear security boundaries:

**Example scenario**: An organization with multiple product teams needs consolidated reporting while maintaining project isolation:

```
Organization: TechCorp
├── Project: ProductA (Team A access only)
├── Project: ProductB (Team B access only)
├── Project: Shared Services (All teams access)
└── Project: Executive Dashboard (Managers only)
```

In this configuration:
- **Team members** can access analytics only for their assigned projects. For more information, see [Change project-level permissions](../organizations/security/change-project-level-permissions.md)
- **Shared Services metrics** are visible to all teams for dependency tracking. For more information, see [Analytics security](analytics-security.md)
- **Executive dashboard** provides high-level metrics without exposing sensitive project details. For more information, see [Set dashboard permissions](dashboards/dashboard-permissions.md)
- **Cross-project queries** are restricted based on user permissions. For more information, see [Create an Analytics view](analytics/analytics-views-create.md)

### External stakeholder reporting

Manage security when sharing reports with external stakeholders:

- **Create stakeholder-specific dashboards**: Design views that show relevant metrics without sensitive details
- **Use read-only access**: Provide view-only permissions for external users
- **Implement time-limited access**: Set expiration dates for external user access
- **Apply data filtering**: Ensure external users see only approved information

For guidance on managing external users, see [Add external users to your organization](../organizations/accounts/add-external-user.md).

### Regulatory compliance reporting

For organizations with compliance requirements:

- **Implement audit trails**: Maintain detailed logs of all data access and modifications. For more information, see [Access, export, and filter audit logs](../organizations/audit/azure-devops-auditing.md)
- **Apply data retention policies**: Ensure analytics data meets regulatory retention requirements. For more information, see [Data protection overview](../organizations/security/data-protection.md)
- **Control data location**: For cloud instances, understand where analytics data is stored. For more information, see [Data locations for Azure DevOps](../organizations/security/data-location.md)
- **Generate compliance reports**: Create standardized reports for regulatory submissions. For more information, see [Export user list with access levels](../organizations/security/export-users-audit-log.md)

## Security configuration checklist

### Initial setup

- [ ] [Configure appropriate access levels for analytics users](../organizations/security/change-access-levels.md)
- [ ] [Set up security groups aligned with reporting needs](../organizations/security/about-permissions.md)
- [ ] [Configure project permissions for analytics access](../organizations/security/change-project-level-permissions.md)
- [ ] [Set dashboard permissions](dashboards/dashboard-permissions.md) for team and project dashboards
- [ ] [Configure Analytics views](analytics/analytics-views-create.md) with appropriate access controls
- [ ] [Set work tracking permissions](../organizations/security/set-permissions-access-work-tracking.md) to control data visibility

### External integrations

- [ ] [Configure Microsoft Entra authentication](../integrate/get-started/authentication/entra.md) for external reporting tools
- [ ] [Configure Power BI connections](powerbi/data-connector-connect.md) with Microsoft Entra ID authentication
- [ ] Set up row-level security in Power BI for multitenant scenarios
- [ ] Document and approve all external tool connections

### Ongoing management

- [ ] [Conduct regular permission audits](../organizations/security/export-users-audit-log.md) for analytics and dashboard access
- [ ] [Monitor audit logs](../organizations/audit/azure-devops-auditing.md) for unusual analytics activity
- [ ] Review and update dashboard permissions as teams change
- [ ] [Manage Microsoft Entra authentication](../integrate/get-started/authentication/entra.md) and rotate credentials for external integrations
- [ ] Validate that analytics data filtering is working correctly
