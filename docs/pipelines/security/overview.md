---
title: Secure Azure Pipelines
description: Guidelines and recommendations for securing pipelines.
ms.assetid: 1ef377e9-e684-4e72-8486-a42d754761ac
ms.reviewer: vijayma
ms.date: 02/28/2025
monikerRange: '> azure-devops-2019'
---

# Securing Azure Pipelines

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Pipelines offer powerful capabilities for executing scripts and deploying code to production environments, but it's crucial to balance this power with security. You never want a pipeline to become a conduit for malicious code. Balancing security with the flexibility and power needed by development teams is essential.

Traditionally, organizations enforce security through strict lock-downs. Code, pipelines, and production environments face severe access restrictions. While this approach works well in small organizations with limited users and projects, larger organizations face a different reality. With numerous contributors having access to code, the principle of 'assume breach' becomes crucial. It involves operating as if an adversary possesses contributor access to repositories, necessitating heightened vigilance.

This article provides an overview of necessary security-related configurations to protect your pipelines against threats and vulnerabilities.

## Prerequisites

| **Product** | **Requirements**   |
|---|---|
| **Azure DevOps** | - Implement recommendations in [Secure your Azure DevOps](../../organizations/security/security-overview.md).  <br>  - Basic knowledge of YAML and Azure Pipelines. For more information, see [Create your first pipeline](../create-first-pipeline.md). <br> - **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To modify pipelines permissions: Member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md). |

<!-- ## Secure Your Network

## Secure Your Pipelines

### Manage Project and Organization-Level Permissions -->

### Use YAML pipelines of Classic pipelines

- YAML pipelines offer several security advantages:
  - Explicitly define pipeline steps and dependencies.
  - Version control for pipeline definitions.
  - Clear visibility into pipeline configuration.
  - Reduced risk of accidental misconfigurations.
  - Code review and pull requests:
    - Treat YAML pipelines like any other code.
    - Enforce pull requests for merging changes to prevent malicious steps.
    - Use [branch policies](../../repos/git/branch-policies-overview.md) to set up this review process.
- Consider using YAML pipelines, which provide fine-grained control over execution and are less prone to security risks.


### Prevent Malicious Code Execution

To ensure that only tested and sanitized code runs through your pipeline, regularly review your pipelines for common issues. 

- **Code scanning**:  Escape special characters in arguments to avoid shell command injection. You can use GitHub Advanced Security for Azure DevOps to automate code scanning. 
- **Validate inputs and use parameters**: Validate input parameters and arguments to prevent unintended behavior. Use parameterized queries in scripts to prevent SQL injection.
- **Restrict access to secrets**: Remove any secrets or keys from appearing in pipelines. Move to secretless authentication methods like workload identity federation or store secrets in a key vault. 
- **Limit permissions**: Limit permissions for pipeline service connections.


### Mitigate Lateral Exposure

- Isolate pipelines to prevent lateral movement within your organization’s projects and repositories.
- Limit access to only the necessary repositories and resources for each pipeline.
- Monitor pipeline activity and set up alerts for suspicious behavior.
- Regularly review and update permissions to minimize exposure.

### Use YAML Pipelines

  - Resource access management:
    - Resource owners control whether a YAML pipeline can access specific resources. 
    - This security feature prevents attacks like [stealing another repository](https://devblogs.microsoft.com/devops/pipeline-stealing-another-repo/). 
    - [Approvals and checks](../process/approvals.md) provide access control for each pipeline run.
  - Runtime parameters:
    - [Runtime parameters](../process/runtime-parameters.md) help avoid security issues related to variables, such as [Argument Injection](https://devblogs.microsoft.com/devops/pipeline-argument-injection/).
- Consider migrating existing pipelines to YAML format for improved security and maintainability.

### Begin with a Minimal Template

Begin with a minimal template and gradually enforce extensions. This approach ensures that as you implement security practices, you have a centralized starting point that covers all pipelines.

For more information, see [Templates](templates.md).

:::moniker range=">= azure-devops-2022"

### Disable Creation of Classic Pipelines

Disable the creation of classic build and release pipelines if you exclusively use YAML pipelines. This precaution prevents a security concern arising from YAML and classic pipelines sharing the same resources, such as service connections.

Independently disable the creation of classic build pipelines and classic release pipelines. When both are disabled, no classic build pipeline, classic release pipeline, task groups, or deployment groups can be created via the user interface or the REST API.

To disable the creation of classic pipelines, go to your **Organization settings** or **Project settings**, then under the *Pipelines* section select **Settings**. In the *General* section, toggle on **Disable creation of classic build pipelines** and **Disable creation of classic release pipelines**.

If you enable this feature at the organization level, it applies to all projects within that organization. However, if you leave it disabled, you can selectively enable it for specific projects.

:::moniker-end

:::moniker range="> azure-devops-2022"

To improve the security of newly created organizations, starting with [Sprint 226](/azure/devops/release-notes/2023/sprint-225-update#disable-creation-of-classic-pipelines-for-new-organizations-pre-announcement), by default we disable creating classic build and release pipelines for new organizations.

:::moniker-end

## Control Access

### Scope Permissions

### Choose the Right Authentication Method

## Enable and Review Auditing Events

## Related Articles

- [Microsoft Security Development Lifecycle](https://www.microsoft.com/sdl/)
- [Azure Trust Center](https://azure.microsoft.com/support/trust-center/)