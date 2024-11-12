---
title: Secure pipeline resources
description: Learn about permissions, checks, and approvals for Azure Pipeline resources.
ms.assetid: 9e635504-f56a-4d59-8629-ced0cbb03c77
ms.reviewer: vijayma
ms.date: 07/15/2024
ms.topic: conceptual
monikerRange: '>= azure-devops-2020'
---

# Resource security

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

This article describes Azure Pipelines security features that protect your pipelines and resources. Pipelines can access two types of resources, open or protected.

Artifacts, pipelines, test plans, and work items are considered *open resources* that don't have the same restrictions as protected resources. You can fully automate workflows by subscribing to trigger events on open resources. For more information about protecting open resources, see [Protect projects](misc.md#protect-projects).

Permissions and approval checks allow pipelines to access *protected resources* during pipeline runs. To keep protected resources safe, checks can suspend or fail a pipeline run.

## Protected resources

Protected means that only specific users and pipelines within the project can access the resource. Examples of protected resources include:

- [Agent pools](../agents/agents.md)
- [Secret variables in variable groups](../library/variable-groups.md)
- [Secure files](../library/secure-files.md)
- [Service connections](../library/service-endpoints.md)
- [Environments](../process/environments.md)
- [Repositories](../process/repository-resource.md)

You can define checks that must be satisfied before a stage that consumes a protected resource can start. For example, you can require manual approval before the stage can use the protected resource.

### Repository protection

You can optionally protect repositories by limiting the scope of the Azure Pipelines access token. You provide agents with the access token only for repositories explicitly mentioned in the pipeline's `resources` section.

Adding a repository to a pipeline requires authorization from a user with **Contribute** access to the repository. For more information, see [Protect a repository resource](../process/repository-resource.md).

## Permissions

There are two types of permissions to protected resources, *user permissions* and *pipeline permissions*.

User permissions are the frontline of defense for protected resources. You should grant permissions only to users who require them. Members of the **User** role for a resource can manage approvals and checks.

Pipeline permissions protect against copying protected resources to other pipelines. You must have the **Administrator** role to enable access to a protected resource across all pipelines in a project.

![Screenshot of user and pipeline permissions.](media/pipeline-permissions.png)

To manage pipeline permissions, explicitly grant access to specific pipelines you trust. Make sure not to enable **Open access**, which allows all pipelines in the project to use the resource. For more information, see [About pipeline resources](../process/about-resources.md) and [Add resource protection](../library/add-resource-protection.md).


## Checks

User and pipeline permissions don't completely secure protected resources in pipelines. You can also add *checks* that specify conditions to be satisfied before a stage in any pipeline can consume the resource. You can require specific approvals or other criteria before pipelines can use the protected resource. For more information, see [Define approvals and checks](../process/approvals.md).

![Screenshot of configuring checks.](media/configure-checks.png)

### Manual approval check

You can block pipeline requests to use a protected resource until manually approved by specified users or groups. This check gives you the chance to review the code and provides an extra layer of security before proceeding with a pipeline run.

### Protected branch check

If you have manual code review processes for specific branches, you can extend this protection to pipelines. Branch control ensures that only authorized branches can access protected resources. A protected branch check for a resource prevents pipelines from automatically running on unauthorized branches.

### Business Hours check

Use this check to ensure that a pipeline deployment starts within a specified day and time window.

## Next step

> [!div class="nextstepaction"]
> [Group resources into a project structure](projects.md)

