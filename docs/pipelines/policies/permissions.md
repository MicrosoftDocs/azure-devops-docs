---
title: Security in Azure Pipelines
ms.topic: conceptual
description: Understand security in Azure Pipelines.
ms.assetid: A7C38A15-C9FE-4353-8680-21BAC0F6C873
ms.author: v-catherbund
author: cebundy
ms.date: 05/15/2024
monikerRange: '<= azure-devops'
---

# Azure Pipelines security

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines security helps you control access to your pipelines and pipeline resources. Access is managed through a hierarchical system of built-in and custom security groups and users.  

Pipeline resources are features and objects that are used in pipelines, but exist outside of the pipeline itself. For example, release pipelines, task groups, agent pools, and service connections are all pipeline resources. 

Upon the creation of a pipeline or resource, a set of built-in security groups and users are assigned access permissions or roles at the project level. These project-level security settings are then inherited at the object level for individual objects. For instance, when you create a pipeline, a default set of users and groups is assigned permissions at the project level. These security settings are then inherited at the object level for all pipelines within the project.

Commonly, administrator groups are given full access to all pipelines and resources. Contributors are often granted access to manage resources and pipelines, while readers are given view-only access. Users are assigned to security groups based on their role in the project and the permissions they need to perform their tasks.

You can add and delete users and groups and change their permissions and roles at both the project- and object-levels. Object-level inheritance can be enabled and disabled.  

You must be a member of the **Project Administrators** group to manage security settings at the project level and be a member of an administrator group or be assigned an *Administrator* security role to manage security for object-level pipelines and resources. 



### Permission and role settings

Pipelines, release pipelines, and task groups use task-based permissions. The permissions for users and groups can be set to:

| Permission | Description |
|------------|-------------|
| Allow | Grants permission for feature or task. |
| Deny | Denies permission for feature or task. |
| Not set | Implicitly denies permission, but allows permission to be inherited from the closest ancestor that has the permission explicitly set. |

For more information, see [About permissions and inheritance](../../organizations/security/about-permissions.md).

Libraries, agent pools, service connections, deployment groups, and environments use role-based access. The roles for users and groups are:
 
| Role | Purpose |
|-|-|
| Reader | Can view resource. |
| User | Can use resource. |
| Creator | Can create the resource. This role is a project-level role only.|
| Administrator | Can use and manage the resource and set its security. The creator of a resource is automatically assigned this role. |
| Service Account | Used for agent and deployment pools, can view agents, create sessions, listen for jobs. This role available at the collection- or organization-level only. |

For more information, see [About pipeline security roles](../../organizations/security/about-security-roles.md).

## Set permissions for Azure Pipelines and resources


For information about configuring security for pipelines and pipeline resources, see the following articles:

- [Pipeline permissions](pipeline-permissions.md)
- [Release pipeline permissions](release-pipeline-permissions.md)
- [Task group permissions](task-group-permissions.md)
- [Agent pool security](agent-pool-permissions.md)
- [Service connection security](service-connection-permissions.md)
- [Library security](library-permissions.md)
- [Deployment group security](deployment-group-permissions.md)
- [Environment security](environment-permissions.md)


## FAQs

See the following frequently asked questions (FAQs) about pipeline permissions.

### Q: Why can't I create a new pipeline?

A: You need **Edit build pipeline** permissions to create a new pipeline. To add permission, open the security settings for all pipelines and verify that **Edit build pipeline** is set to **Allow** for your security group. 

If you still can't create a pipeline, check to see if your [access level](../../organizations/security/access-levels.md) is set to **Stakeholder**. If you have stakeholder access, change your access to **Basic**. 

::: moniker range=">=azure-devops-2020"
### Q: Why do I see the message that I need to authorize a resource before the run can continue? 

A: You need to authorize resources before you can use them. The exception to this rule is when you create a pipeline for the first time and all the resources referenced in the YAML file are automatically authorized. The resources are authorized for the pipeline as long as the user running the pipeline has access to the resource. 

To authorize **All pipelines** to access a resource like an agent pool, follow these steps:

1. From your project, select **Settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: > **Pipelines** > **Agent Pools**. 

1. Select **Security** for a specific agent pool, and then update permissions to grant access to all pipelines. 

   :::image type="content" source="media/agent-pool-grant-permissions.png" alt-text="Grant permissions to all pipelines.":::

   For more information, see [Resources in YAML](../process/resources.md).
::: moniker-end

## Related articles

- [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md)
- [Default permissions and access](../../organizations/security/permissions-access.md)
- [Permissions and groups reference](../../organizations/security/permissions.md)
- [Securing Azure Pipelines](../security/overview.md)
- [Azure DevOps CLI reference](/cli/azure/devops)