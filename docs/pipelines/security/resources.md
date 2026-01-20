---
title: Pipeline resource security
description: Learn about protected Azure Pipelines resources, and how to use permissions, checks, and approvals to help secure them in pipeline runs.
ms.assetid: 9e635504-f56a-4d59-8629-ced0cbb03c77
ms.date: 10/02/2025
ms.topic: concept-article
monikerRange: "<=azure-devops"
#customer intent: As an Azure Pipelines user, I want to understand protected resources so I can take steps to secure protected repositories, branches, and other resources in my pipelines.
---

# Resource security

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes security features that help safeguard *protected resources* in Azure Pipelines. Pipelines might need to access open or protected resources during runs.

Artifacts, pipelines, test plans, and work items are *open resources*. Pipelines can freely access these resources, and you can fully automate workflows by subscribing to resource trigger events. For more information about protecting open resources, see [Protect projects](misc.md#protect-projects).

*Protected resources* such as repositories and environments need more access restrictions. To help keep protected resources safe, you can require permissions, checks, and approvals for pipelines to access protected resources.

[!INCLUDE [security-prerequisites](includes/security-prerequisites.md)]

## Protected resources

Azure Pipelines protected resources include the following items:

- [Repositories](../process/repository-resource.md)
- [Environments](../process/environments.md)
- [Service connections](../library/service-endpoints.md)
- [Agent pools](../agents/agents.md)
- [Secure files](../library/secure-files.md)
- [Secret variables in variable groups](../library/variable-groups.md)

You can set permissions so that only specific users and pipelines in a project can access protected resources. You can also define checks and approvals that must succeed before a pipeline stage that uses the resource can start. For example, you can require manual approval before a pipeline stage can use an environment. Failed checks can suspend or fail the pipeline run.

<a name="repository-protection"></a>
### Repository resources

Adding a repository to a pipeline requires authorization from a user with **Contribute** access to the repository. You can also protect repository resources by limiting the scope of the Azure Pipelines access token to only repositories explicitly listed in the pipeline's `resources` section. For more information, see [Securely access repositories from pipelines](secure-access-to-repos.md) and [Protect a repository resource](../process/repository-resource.md).

## Permissions

You can set *user permissions* and *pipeline permissions* for protected resources.

Grant **User** permissions only to users who require them. Members of the **User** role for a resource can manage approvals and checks.

Pipeline permissions guard against copying protected resources to other pipelines. To manage pipeline permissions, explicitly grant access only to specific pipelines you trust.

You must have the **Project Administrator** role to enable access to a protected resource across all pipelines in a project. For better security, don't enable **Open access**, which allows all pipelines in the project to use the resource. For more information, see [Add an admin role to a protected resource](../library/add-resource-protection.md).

![Screenshot of user and pipeline permissions.](media/pipeline-permissions.png)

## Checks

To more completely secure protected resources in pipelines, add checks that must be satisfied before pipelines can consume protected resources. You can require specific approvals or other criteria. For more information, see [Define approvals and checks](../process/approvals.md).

![Screenshot of configuring checks.](media/configure-checks.png)

<a name="manual-approval-check"></a>
### Approvals

You can block pipeline requests for protected resources pending manual approval by specified users or groups. This check provides an extra layer of security by allowing review of the code before a pipeline run can proceed.

<a name="protected-branch-check"></a>
### Branch control

Branch control ensures that only authorized branches can access protected resources. A protected branch check for a resource prevents pipelines from automatically running on unauthorized branches. By using branch control, you can extend your branch-specific manual code review requirements.

### Business Hours

Use this check to ensure that a pipeline deployment starts within a specified day and time window.

### View all checks

Select **View all checks** to see and apply other checks such as [required templates](../process/approvals.md#required-template).

## Related content

- [About resources for Azure Pipelines](../process/about-resources.md)
- [Define approvals and checks](../process/approvals.md)
- [Secure agents, projects, and containers](misc.md)

