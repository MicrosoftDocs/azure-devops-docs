---
title: About pipeline security roles
titleSuffix: Azure DevOps
description: Discover how security roles are utilized to manage specific pipeline permissions effectively.
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ai-usage: ai-assisted
ms.date: 10/27/2025
---

# About pipeline security roles

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

<a id="security-roles"></a>

Azure DevOps manages security for build and release pipelines, and task groups using [task-based permissions](about-permissions.md). Several pipeline resources use role-based permissions, which you can assign to users or groups. Each role defines the operations a user can perform within the context of specific pipeline resources.

Role-based permissions apply to all resources of a specific type within a project, organization, or collection. Individual resources inherit permissions from project-level settings, but you can disable inheritance for specific artifacts when you need more granular control.

## Understanding security roles vs. permissions

Azure DevOps uses two primary security models:

- **Role-based security**: Predefined roles with specific sets of permissions for pipeline resources
- **Permission-based security**: Granular permissions that you can assign individually

Security roles provide a simplified way to manage common permission scenarios, while individual permissions offer more detailed control when needed.

## Default role assignments

By default, all project contributors become members of the User role for each hosted queue. This role allows them to author and run build and release pipelines using hosted queues, providing immediate productivity for team members.

The system automatically assigns these default roles when:
- You create a new project
- Users join the project Contributors group
- You add new pipeline resources

<a id="agent-queue-security-roles"></a>

## Agent pool security roles, project-level

You can add users to security roles from the project-level admin context on the **Agent Pools** page. For information on adding and managing agent pools, see [Agent pools](../../pipelines/agents/pools-queues.md).

**Navigation**: Project Settings → Pipelines → Agent pools

[!INCLUDE [temp](includes/agent-queue-roles.md)]

### Common scenarios for project-level agent pool roles

- **User role**: Developers who need to run builds and releases
- **Reader role**: Stakeholders who need visibility into queue status
- **Administrator role**: DevOps engineers who manage pool configuration

<a id="agent-pool-security-roles"></a>

## Agent pool security roles, organization or collection-level

Add users to the following security roles from the **Organization settings** > **Agent Pools** page. For information on adding and managing agent pools, see [Agent pools](../../pipelines/agents/pools-queues.md).

**Navigation**: Organization Settings → Pipelines → Agent pools

[!INCLUDE [temp](includes/agent-pool-roles.md)]

### Organization-level vs. project-level permissions

Organization-level roles control:
- Pool creation and deletion
- Agent installation and configuration
- Cross-project pool sharing

Project-level roles control:
- Pool usage within specific projects
- Pipeline execution permissions
- Queue monitoring access

## Deployment group security roles

Add users to the following roles from the **Pipelines** or **Build and Release** page. For information on adding and managing deployment groups, see [Deployment groups](../../pipelines/release/deployment-groups/index.md).

**Navigation**: Project Settings → Pipelines → Deployment groups

[!INCLUDE [temp](includes/deployment-group-roles.md)]

### Deployment group role use cases

- **Administrator**: Configure deployment targets and manage group settings
- **User**: Deploy applications to target environments
- **Reader**: Monitor deployment status and view deployment history

## Deployment pool security roles

Add users to the following roles from the **Deployment Pools** page. For information on creating and managing deployment pools, see [Deployment groups](../../pipelines/release/deployment-groups/index.md).   

**Navigation**: Organization Settings → Pipelines → Deployment pools

[!INCLUDE [temp](includes/deployment-pool-roles.md)]

### Deployment pools vs. deployment groups

- **Deployment pools**: Organization-level resource that you can share across projects
- **Deployment groups**: Project-specific collection of deployment targets

<a id="library-roles"></a> 

## Library asset security roles: Variable groups and secure files

Add users to a library role from **Pipelines** or **Build and Release**. For more information about using these library assets, see [Variable groups](../../pipelines/library/variable-groups.md) and [Secure files](../../pipelines/library/secure-files.md).

**Navigation**: Project Settings → Pipelines → Library

[!INCLUDE [temp](includes/library-roles.md)]

### Library security best practices

- **Limit Administrator access**: Only grant Administrator role to users who need to manage library assets
- **Use Reader role for visibility**: Assign Reader role to users who need to see available assets
- **Secure sensitive data**: Use appropriate roles for variable groups containing secrets
- **Regular audits**: Periodically review library access permissions

<a id="service-endpoint-roles"></a> 

## Service connection security roles

Add users to the following roles from the **Services** page. For information about creating and managing these resources, see [Service connections for build and release](../../pipelines/library/service-endpoints.md).

**Navigation**: Project Settings → Service connections

[!INCLUDE [temp](includes/service-endpoint-roles.md)]

### Service connection security considerations

Service connections often contain sensitive credentials and require careful permission management:

- **Administrator role**: For DevOps engineers who configure external service integrations
- **User role**: For pipeline authors who need to use existing connections
- **Reader role**: For team members who need visibility into available connections
- **Creator role**: For authorized users who can establish new service connections

## Managing role assignments

### Best practices for role management

1. **Principle of least privilege**: Assign the minimum role necessary for users to perform their tasks
2. **Use groups over individuals**: Assign roles to Microsoft Entra groups rather than individual users when possible
3. **Regular review**: Periodically audit role assignments to ensure they remain appropriate
4. **Document assignments**: Maintain documentation of who has what roles and why

### Common role assignment patterns

| User Type | Typical Roles | Rationale |
|-----------|---------------|-----------|
| **Developers** | User roles across pipeline resources | Need to run pipelines and access resources |
| **DevOps Engineers** | Administrator roles for infrastructure resources | Manage and configure pipeline infrastructure |
| **Project Managers** | Reader roles for visibility | Monitor progress without making changes |
| **External Contractors** | Limited User roles with specific scope | Restricted access based on project needs |

## Troubleshooting role-based permissions

### Common issues and solutions

| Problem | Possible Cause | Solution |
|---------|----------------|----------|
| **User can't access pipeline resource** | Missing role assignment | Check and assign appropriate role |
| **User has too much access** | Over-privileged role assignment | Review and reduce role permissions |
| **Inconsistent permissions across projects** | Different role assignments per project | Standardize role assignments organization-wide |
| **Service account issues** | Missing service connection roles | Ensure service accounts have necessary roles |

### Verification steps

1. **Check inheritance**: Verify if permissions inherit from higher levels
2. **Review group membership**: Confirm user's group memberships and associated roles
3. **Audit permissions**: Use Azure DevOps security reports to review current assignments
4. **Test access**: Have users test specific scenarios to verify permissions work correctly

## Integration with Microsoft Entra ID

When your organization uses Microsoft Entra ID integration:

- **Group-based assignments**: Assign roles to Microsoft Entra ID groups for easier management
- **Conditional access**: Microsoft Entra ID conditional access policies apply to Azure DevOps access
- **Identity governance**: Use Microsoft Entra ID access reviews to audit role assignments
- **Guest user considerations**: External users might need specific role assignments

## Related content

- [Start managing permissions, access, and security groups](about-permissions.md)
- [Reference permissions and groups](permissions.md)
- [Add or delete users with Microsoft Entra ID](/azure/active-directory/fundamentals/add-users-azure-active-directory)
- [Manage pipeline security](../../pipelines/security/overview.md)
- [Set pipeline permissions](../../pipelines/policies/permissions.md)
- [Secure Azure Pipelines](../../pipelines/security/secure-development.md)

