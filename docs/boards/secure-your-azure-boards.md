---
title: Secure your Azure Boards
titleSuffix: Azure Boards
description: Learn about security concepts, access controls, and best practices for protecting your work tracking data in Azure Boards.
ms.service: azure-devops-boards
ms.custom: security
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 09/04/2025
---

# Secure your Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Boards provides multiple layers of security to protect your work tracking data, control access to sensitive information, and ensure compliance with organizational policies. This article outlines the security concepts, access controls, and best practices for securing your Azure Boards implementation.

## Security model overview

Azure Boards security operates on a multi-layered approach that includes:

- **Control identity and access management**: Manage who can access your work items and what they can do. For more information, see [About access levels](../organizations/security/access-levels.md)
- **Implement permission-based access**: Apply fine-grained permissions for different work tracking operations. For more information, see [Set work tracking permissions](../organizations/security/set-permissions-access-work-tracking.md)
- **Configure area and iteration security**: Restrict access to specific work items based on project areas. For more information, see [Set area paths and assign to a team](../organizations/settings/set-area-paths.md)
- **Manage work item types and field security**: Control visibility and editability of work item fields. For more information, see [Add and modify a field](../organizations/settings/work/add-custom-field.md)
- **Enable audit and compliance**: Track changes and maintain compliance requirements. For more information, see [Access, export, and filter audit logs](../organizations/audit/azure-devops-auditing.md)

## Identity and access management

### Access levels

Azure Boards uses access levels to control what features users can access. For comprehensive information about default permissions for each access level, see [Default permissions and access levels for Azure Boards](get-started/permissions-access-boards.md).

| Access Level | Azure Boards Capabilities |
|--------------|---------------------------|
| **Stakeholder** | View work items, add and modify work items they create, view dashboards, limited query access |
| **Basic** | Full access to work items, queries, dashboards, boards, and backlogs |
| **Basic + Test Plans** | Includes Basic access plus Test Plans features |
| **Visual Studio Enterprise** | Includes all Basic features plus advanced capabilities |

For more information, see [About access levels](../organizations/security/access-levels.md).

### Authentication

Azure Boards supports multiple authentication methods:

::: moniker range="azure-devops"
- **Use Microsoft Entra ID**: Enable enterprise identity management with single sign-on. For more information, see [Connect your organization to Microsoft Entra ID](../organizations/accounts/connect-organization-to-azure-ad.md)
- **Configure Microsoft accounts**: Support personal Microsoft accounts. For more information, see [Sign up, sign in to Azure DevOps](../user-guide/sign-up-invite-teammates.md)
- **Implement GitHub authentication**: Authenticate GitHub users and organizations. For more information, see [Authenticate with GitHub](../organizations/accounts/add-external-user.md)
::: moniker-end

::: moniker range="< azure-devops"
- **Integrate Active Directory**: Connect on-premises identity integration. For more information, see [Set up groups for use in Azure DevOps Server](/azure/devops/server/admin/setup-ad-groups)
- **Create local accounts**: Manage server-based user accounts. For more information, see [Add users to Azure DevOps Server](/azure/devops/server/admin/add-users)
- **Configure Microsoft Entra ID**: Enable cloud-based identity management. For more information, see [Connect your organization to Microsoft Entra ID](../organizations/accounts/connect-organization-to-azure-ad.md)
::: moniker-end

## Permission model

### Security groups

Azure Boards uses security groups to manage permissions efficiently. For more information about all available security groups and their permissions, see [About permissions and security groups](../organizations/security/about-permissions.md). For detailed guidance on configuring team administrators and their permissions, see [Manage team administrators](../organizations/settings/add-team-administrator.md).

| Security Group | Default Permissions |
|----------------|-------------------|
| **Project Administrators** | Full control over project settings, work item types, and team configuration |
| **Contributors** | Create, modify, and delete work items; manage boards and backlogs |
| **Readers** | View work items and project artifacts |
| **Project Collection Administrators** | Organization-wide administration including security settings |

### Work item permissions

Control access to work items through these key permissions. For step-by-step instructions on configuring these permissions, see [Set work tracking permissions](../organizations/security/set-permissions-access-work-tracking.md).

| Permission | Description |
|------------|-------------|
| **View work items in this node** | Read access to work items in specific area paths |
| **Edit work items in this node** | Modify work items in specific area paths |
| **Create child nodes** | Add new area paths under existing nodes |
| **Delete and restore work items** | Remove work items and recover deleted items |
| **Move work items out of this project** | Transfer work items to other projects |

### Area path security

Area paths provide hierarchical security boundaries:

```
Project Root
├── Team A (Restricted to Team A members)
├── Team B (Restricted to Team B members)
└── Shared Components (Accessible to all teams)
```

Configure area path permissions to:
- **Restrict team access** to specific work items
- **Create secure workspaces** for different departments
- **Control visibility** of sensitive projects

For detailed instructions on setting up area path permissions, see [Set work tracking permissions](../organizations/security/set-permissions-access-work-tracking.md).

## Field-level security

### Sensitive data protection

Protect sensitive information using these strategies:

- **Create custom fields** with restricted access that only specific groups can view or edit. For more information, see [Add and modify a field](../organizations/settings/work/add-custom-field.md)
- **Limit work item type restrictions** to control who can create or modify certain work item types. For more information, see [Customize a work item type](../organizations/settings/work/customize-process-work-item-type.md)
- **Configure hidden fields** to be invisible to certain user groups. For more information, see [Add and modify a field](../organizations/settings/work/add-custom-field.md)
- **Set read-only fields** to prevent unauthorized modifications to critical data. For more information, see [Add a rule to a work item type](../organizations/settings/work/add-rule-work-item-type.md)

### Compliance features

::: moniker range="azure-devops"
- **Choose data residency** to meet compliance requirements for data storage location. For more information, see [Data locations for Azure DevOps](../organizations/security/data-location.md)
- **Enable audit logs** to track all changes to work items and security settings. For more information, see [Access, export, and filter audit logs](../organizations/audit/azure-devops-auditing.md)
- **Configure export capabilities** to generate compliance reports and data extracts. For more information, see [Export user list with access levels](../organizations/security/export-users-audit-log.md)
- **Implement retention policies** for automatic data cleanup and archiving. For more information, see [Set retention policies for builds, releases, and tests](../pipelines/policies/retention.md)
::: moniker-end

## Best practices for Azure Boards security

### Access management

- **Apply least privilege principle**: Grant minimum required permissions. For more information, see [About permissions and security groups](../organizations/security/about-permissions.md)
- **Conduct regular access reviews**: Periodically audit user permissions and group memberships. For more information, see [Export user list with access levels](../organizations/security/export-users-audit-log.md)
- **Use group-based management**: Manage security groups instead of individual permissions. For more information, see [About permissions and security groups](../organizations/security/about-permissions.md)
- **Implement conditional access**: Enable location and device-based access controls. For more information, see [Manage conditional access](../organizations/accounts/change-application-access-policies.md)

### Work item security

- **Design area path strategy**: Create hierarchical structure that aligns with security requirements. For more information, see [Set work tracking permissions](../organizations/security/set-permissions-access-work-tracking.md)
- **Configure team isolation**: Set up teams to access only their designated work items. For more information, see [Add a team, move from one default team to several teams](../organizations/settings/add-teams.md)
- **Implement field security**: Restrict access to sensitive fields like budget or personal information. For more information, see [Add and modify a field](../organizations/settings/work/add-custom-field.md)
- **Control link security**: Manage who can create dependencies between work items. For more information, see [Link work items to objects](backlogs/add-link.md)

### Data protection

- **Handle sensitive information carefully**: Avoid storing credentials or personal data in work items
- **Manage file attachments**: Implement policies for acceptable file types and sizes
- **Validate external links**: Approve external URL links in work items
- **Secure query access**: Ensure queries don't expose unauthorized data. For more information, see [Set permissions for queries and query folders](../organizations/security/set-permissions-access-work-tracking.md#set-permissions-on-queries-and-query-folders)

### Monitoring and compliance

- **Monitor activity patterns**: Track work item access patterns and unusual activities. For more information, see [Access, export, and filter audit logs](../organizations/audit/azure-devops-auditing.md)
- **Audit change logs**: Maintain logs of all work item modifications. For more information, see [Query work item history and auditing](queries/history-and-auditing.md)
- **Implement regular backups**: Create backup strategies for critical work tracking data. For more information, see [Data protection overview](../organizations/security/data-protection.md)
- **Establish incident response**: Create procedures for security incidents involving work items. For more information, see [Security best practices](../organizations/security/security-best-practices.md)

## Common security scenarios

### Multi-team projects

When multiple teams work within a single project, it's essential to establish clear security boundaries to ensure teams can only access their relevant work items while maintaining collaboration where needed. Azure Boards uses area paths to create these security boundaries, allowing you to configure granular access control for different teams and organizational levels.

For guidance on setting up team administrators for each team, see [Manage team administrators](../organizations/settings/add-team-administrator.md).

**Example scenario**: A software development project with specialized teams working on different components, plus management oversight:

```
Project: ProductDevelopment
├── Area: Frontend (Frontend team access)
├── Area: Backend (Backend team access)
├── Area: QA (QA team access)
└── Area: Management (Manager access only)
```

In this configuration:
- **Frontend team members** can view and edit work items only in the Frontend area
- **Backend team members** have access restricted to Backend work items
- **QA team members** can access QA-specific work items for testing coordination
- **Managers** have visibility into Management area items for strategic planning and reporting
- **Cross-team dependencies** can be managed through carefully configured shared areas or explicit permissions

This approach ensures that sensitive information remains restricted, so teams can focus on their specific responsibilities without distractions from unrelated work items.

### Cross-project collaboration

Manage security when teams work across projects:

- **Grant cross-project permissions**: Provide specific access to external team members
- **Control work item linking**: Manage who can create dependencies across projects
- **Manage shared queries**: Control access to queries that span multiple projects. For detailed configuration steps, see [Set permissions for queries and query folders](../organizations/security/set-permissions-access-work-tracking.md#set-permissions-on-queries-and-query-folders)

### Contractor and vendor access

Secure access for external contributors. For comprehensive guidance on managing external users, see [Add external users to your organization](../organizations/accounts/add-external-user.md).

- **Assign limited access levels**: Configure appropriate access levels for external users
- **Implement time-bound permissions**: Create temporary access with expiration dates
- **Restrict area access**: Limit contractor access to specific project areas
- **Audit external activity**: Monitor all actions by external users

## Security configuration checklist

### Initial setup

- [ ] [Configure appropriate access levels for all users](../organizations/security/change-access-levels.md)
- [ ] [Set up security groups aligned with organizational structure](../organizations/security/about-permissions.md)
- [ ] [Design area path hierarchy based on security requirements](../organizations/settings/set-area-paths.md)
- [ ] [Configure team permissions and access boundaries](../organizations/settings/add-teams.md)
- [ ] [Set work tracking permissions](../organizations/security/set-permissions-access-work-tracking.md) for area paths and iterations
- [ ] [Configure query folder permissions](../organizations/security/set-permissions-access-work-tracking.md#set-permissions-on-queries-and-query-folders) to control access to shared queries

### Ongoing management

- [ ] [Conduct regular permission audits and access reviews](../organizations/security/export-users-audit-log.md)
- [ ] [Monitor work item access patterns and anomalies](../organizations/audit/azure-devops-auditing.md)
- [ ] [Update security configurations as teams evolve](../organizations/security/set-permissions-access-work-tracking.md)
- [ ] [Maintain documentation of security decisions and changes](../organizations/security/security-best-practices.md)
- [ ] Review and update [team administrator assignments](../organizations/settings/add-team-administrator.md) as needed

### Compliance preparation

- [ ] [Document data handling procedures](../organizations/security/data-protection.md)
- [ ] [Implement audit log retention policies](../organizations/audit/azure-devops-auditing.md)
- [ ] [Configure export capabilities for compliance reporting](../organizations/security/export-users-audit-log.md)
- [ ] [Establish incident response procedures](../organizations/security/security-best-practices.md)
