---
title: Secure Azure Pipelines
description: Guidelines and recommendations for securing pipelines.
ms.assetid: 1ef377e9-e684-4e72-8486-a42d754761ac
ms.reviewer: vijayma
ms.date: 02/28/2025
monikerRange: '> azure-devops-2019'
---

# Secure Azure Pipelines

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Pipelines offer powerful capabilities for executing scripts and deploying code to production environments, but it's crucial to balance this power with security. You never want a pipeline to become a conduit for malicious code. Balancing security with the flexibility and power needed by development teams is essential.

Traditionally, organizations enforce security through strict lock-downs. Code, pipelines, and production environments face severe access restrictions. While this approach works well in small organizations with limited users and projects, larger organizations face a different reality. With numerous contributors having access to code, the principle of 'assume breach' becomes crucial. It involves operating as if an adversary possesses contributor access to repositories, necessitating heightened vigilance.

This article provides an overview of necessary security-related configurations to protect your pipelines against threats and vulnerabilities.

## Prerequisites

| **Product** | **Requirements**   |
|---|---|
| **Azure DevOps** | - Implement recommendations in [Secure your Azure DevOps](../../organizations/security/security-overview.md).  <br>  - Basic knowledge of YAML and Azure Pipelines. For more information, see [Create your first pipeline](../create-first-pipeline.md). <br> - **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To modify pipelines permissions: Member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md). <br> &nbsp;&nbsp;&nbsp;&nbsp;- To modify organization permissions: Member of the [Project Collection Administrators group](../../organizations/security/change-project-level-permissions.md). |


## Control access

Isolate pipelines to prevent lateral movement within your organization’s projects and repositories.

- **Restrict repository and resources access**: Limit access to only the necessary repositories and resources for each pipeline.
- **Set up activity alerts**: Monitor pipeline activity and set up alerts for suspicious behavior. [Enable and review](../../organizations/audit/azure-devops-auditing.md) your organization's audit logs.
- **Review activity**: Regularly review and update permissions to minimize exposure.

## Use YAML pipelines instead of Classic pipelines

For added security and to reduce the risk of accidental misconfigurations, use YAML pipelines instead of Classic pipelines. This precaution prevents a security concern arising from YAML and classic pipelines sharing the same resources, such as service connections. If your organization is using Classic pipelines, migrate the pipelines to YAML. 

- **YAML offers the benefits of infrastructure as code**: You can treat YAML pipelines like any other code because steps and dependencies are defined in code. There is also clear visibility into pipeline configurations and a reduced risk of accidental misconfigurations. 
- **YAML pipelines can be combined with enhanced security measures**: Through code reviews and pull requests, you can use [branch policies](../../repos/git/branch-policies-overview.md) to set up a review process for  pull requests to prevent bad merges. 
- **Resource access management**:  Resource owners control whether a YAML pipeline can access specific resources.  This security feature prevents attacks like [stealing another repository](https://devblogs.microsoft.com/devops/pipeline-stealing-another-repo/). You can use [Approvals and checks](../process/approvals.md) provide access control for each pipeline run.
    - **Protected branch check**: If you have manual code review processes for specific branches, you can extend this protection to pipelines. A protected branch check for a resource prevents pipelines from automatically running on unauthorized branches.
    - **Manual approval check**: Use a manual approval check to block pipeline requests from using a protected resource until manually approved by specified users or groups.
    - **Business hours check**: Use this check to ensure that a pipeline deployment starts within a specified day and time window.

:::moniker range=">= azure-devops-2022"

### Disable creating Classic pipelines

Independently disable the creation of classic build pipelines and classic release pipelines. When both are disabled, no classic build pipeline, classic release pipeline, task groups, or deployment groups can be created via the user interface or the REST API.

To disable the creation of classic pipelines, go to your **Organization settings** or **Project settings**, then under the *Pipelines* section select **Settings**. In the *General* section, toggle on **Disable creation of classic build pipelines** and **Disable creation of classic release pipelines**.

If you enable this feature at the organization level, it applies to all projects within that organization. However, if you leave it disabled, you can selectively enable it for specific projects.

:::moniker-end

:::moniker range="> azure-devops-2022"

To improve the security of newly created organizations, starting with [Sprint 226](/azure/devops/release-notes/2023/sprint-225-update#disable-creation-of-classic-pipelines-for-new-organizations-pre-announcement), by default we disable creating classic build and release pipelines for new organizations.

:::moniker-end

## Secure agents

Protected resources in Azure Pipelines are an abstraction of real infrastructure.
Follow these recommendations to protect the underlying infrastructure.

- **Use Microsoft-hosted instead of self-hosted pools**: Microsoft-hosted pools offer isolation and a clean virtual machine for each run of a pipeline. Use Microsoft-hosted pools rather than self-hosted pools.
- **Separate agents for each project**: To mitigate lateral movement and prevent cross-contamination between projects, maintain separate agent pools, each dedicated to a specific project. 
- **Use low-privileged accounts to run agents**: To enhance system security, we recommend using the lowest-privileged account for running self-hosted agents. For instance, consider using your machine account or a managed service identity. Don't run an agent under an identity with direct access to Azure DevOps resources.


## Secure projects and repositories

To enhance security, consider separating out your projects, using branch policies, and adding additional security measures for forks. 

- **Separate projects**: Manage each product and team in separate projects. By doing so, you prevent pipelines from one product inadvertently accessing open resources from another product, thus minimizing lateral exposure. 
- **Use branch policies**: To ensure safe changes to code and pipeline, it’s crucial to apply permissions and branch policies. Additionally, consider [adding pipeline permissions and checks to repositories](../process/repository-resource.md).
- **Add additional security for forks**: When you're working with public repositories from GitHub, it’s essential to carefully consider your approach to fork builds. Forks, originating from outside your organization, pose particular risks. 
    - **Don't provide secrets to fork builds**: By default, pipelines are configured to build forks, but secrets and protected resources aren't automatically exposed to the jobs in those pipelines. It's essential not to disable this protection to maintain security.
    - **Consider manually triggering fork builds**: [Turn off automatic fork builds](../repos/github.md#contributions-from-forks) and instead use pull request comments as a way to manually building these contributions. This setting gives you an opportunity to review the code before triggering a build.
    - **Use Microsoft-hosted agents for fork builds**: Avoid running builds from forks on self-hosted agents. Doing so could allow external organizations to execute external code on machines within your corporate network. Whenever possible, use Microsoft-hosted agents.
    - **Use the Azure Pipelines GitHub app for token scope limitation**: When you build a GitHub forked pull request, Azure Pipelines ensures the pipeline can't change any GitHub repository content. This restriction applies _only_ if you use the [Azure Pipelines GitHub app](https://github.com/marketplace/azure-pipelines) to integrate with GitHub.

## Secure service connections

- **Minimize the scope of service connections**: Service connections should only have access to necessary resources. When you create a new [Azure Resource Manager service connection](../library/connect-to-azure.md), always choose a specific resource group.Whenever possible, use [workload identity federation](../library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-using-workload-identity-federation) in place of a service principal for your [Azure service connection](../library/service-endpoints.md). 
- **Minimize GitHub App access**: Similarly, when you configure the GitHub app to Azure DevOps, grant access only to the repositories that you intend to build using pipelines.

## Prevent malicious code execution

To ensure that only tested and sanitized code runs through your pipeline, regularly review your pipelines for common issues. 

- **Code scanning**:  Escape special characters in arguments to avoid shell command injection. You can use GitHub Advanced Security for Azure DevOps to automate code scanning. 
- **Validate inputs and use parameters**: Validate input parameters and arguments to prevent unintended behavior. Use parameterized queries in scripts to prevent SQL injection. [Runtime parameters](../process/runtime-parameters.md) help avoid security issues related to variables, such as [Argument Injection](https://devblogs.microsoft.com/devops/pipeline-argument-injection/).
- **Limit permissions**: Limit permissions for pipeline service connections.
- **Don't use PATH in scripts**: Relying on the agent's `PATH` setting is dangerous because it can be altered by a previous script or tool. Always use a fully qualified path instead.
- **Control available tasks**: Disable the ability to install and run tasks from the Marketplace, which gives you greater control over the code that executes in a pipeline. 

### Secure inputs

Securely use variables and parameters in your pipelines by following best practices for setting secrets, using queue-time variables, and enabling shell task argument validation to protect your pipeline from threats and vulnerabilities.

- **Restrict access to secrets**: Remove any secrets or keys from appearing in pipelines. Move to secretless authentication methods like workload identity federation or set secrets in the UI, a variable group, or a variable group sourced from Azure Key Vault.
- **Enable shell parameter validation**:  When the setting *Enable shell tasks arguments parameter validation* is enabled, there's an added check for characters like semi-colons, quotes, and parentheses. Turn on *Enable shell tasks arguments parameter validation* at the organization or project level under **Settings** > **Pipelines** > **Settings**. 
- **Limit variables that can be set at queue time**: Prevent users from defining new variables at queue time by enabling the setting *limit variables that can be set at queue time* at **Organization settings** > **Pipelines** > **Settings**. 
- **Use parameters instead of variables**: Unlike variables, a running pipeline can't modify pipeline parameters. Parameters have data types such as `number` and `string`, and they can be restricted to specific value subsets. This restriction is valuable when a user-configurable aspect of the pipeline should only accept values from a predefined list, ensuring that the pipeline doesn't accept arbitrary data.
- **Don't log or print secrets**: Avoid echoing secrets to the console, using them in command line parameters, or logging them to files. Azure Pipelines attempts to scrub secrets from logs wherever possible but can't catch every way that secrets can be leaked.

### Lock down containers

**Mark volumes are read only**: Containers include system-provide volume mounts for tasks, tools, and external components required to work with the host agent. Set `externals`, `tasks`, and `tools` to read only for added security. 

### Begin with a minimal template

Begin with a minimal template and gradually enforce extensions. This approach ensures that as you implement security practices, you have a centralized starting point that covers all pipelines.

For more information, see [Templates](templates.md).



### Choose the Right Authentication Method

## Enable and Review Auditing Events

## Related Articles

- [Microsoft Security Development Lifecycle](https://www.microsoft.com/sdl/)
- [Azure Trust Center](https://azure.microsoft.com/support/trust-center/)