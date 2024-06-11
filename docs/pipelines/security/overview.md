---
title: Securing Azure Pipelines
description: Guidelines and recommendations for securing pipelines.
ms.assetid: 1ef377e9-e684-4e72-8486-a42d754761ac
ms.reviewer: vijayma
ms.date: 06/10/2024
monikerRange: '> azure-devops-2019'
---

# Securing Azure Pipelines

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

[Azure Pipelines](../get-started/what-is-azure-pipelines.md) presents distinct security challenges. While pipelines allow you to execute scripts or deploy code to production environments, it’s crucial to prevent them from becoming conduits for malicious code. Balancing security with the flexibility and power needed by development teams is essential.

> [!NOTE]
> Azure Pipelines is part of a suite of Azure DevOps Services, all built on a secure infrastructure within Azure.
> To gain a comprehensive understanding of security concepts across all Azure DevOps Services, we recommend viewing the following resources: 
> - [Azure DevOps Data Protection Overview](../../organizations/security/data-protection.md)
> - [Azure DevOps Security and Identity](../../organizations/security/about-security-identity.md)

Traditionally, organizations enforce security through strict lock-downs. Code, pipelines, and production environments face severe access restrictions. While this approach works well in small organizations with limited users and projects, larger organizations face a different reality.
With numerous contributors having access to code, the principle of 'assume breach' becomes crucial. It involves operating as if an adversary possesses contributor access to repositories, necessitating heightened vigilance.

To achieve security goals, consider the following points:

- **Prevent malicious code execution:**
  - Ensure that your pipelines are configured to prevent unauthorized execution of malicious code, which includes the following tasks:
    - Restrict access to sensitive secrets and credentials.
    - Validate input parameters and arguments to prevent unintended behavior.
    - Review and audit pipeline scripts for potential security risks regularly.
    - Implement security practices such as:
      - Use parameterized queries in scripts to prevent SQL injection.
      - Escape special characters in arguments to avoid shell command injection.
      - Limit permissions for pipeline service connections.
  - Consider using YAML pipelines, which provide fine-grained control over execution and are less prone to security risks.

- **Mitigate lateral exposure:**
  - Isolate pipelines to prevent lateral movement within your organization’s projects and repositories.
  - Limit access to only the necessary repositories and resources for each pipeline.
  - Monitor pipeline activity and set up alerts for suspicious behavior.
  - Review and update permissions to minimize exposure regularly.

- **Use YAML Pipelines:**
  - YAML pipelines offer the following advantages in terms of security:
    - Explicitly define pipeline steps and dependencies.
    - Version control for pipeline definitions.
    - Clear visibility into pipeline configuration.
    - Reduced risk of accidental misconfigurations.
    - Code review and pull requests:
      - Treat YAML pipelines like any other code.
      - Enforce pull requests for merging changes to prevent malicious steps.
      - Use [branch policies](../../repos/git/branch-policies-overview.md) to set up this review process.
    - Resource access management:
      - Resource owners control whether a YAML pipeline can access specific resources. 
      - This security feature prevents attacks like [stealing another repository](https://devblogs.microsoft.com/devops/pipeline-stealing-another-repo/). 
      - [Approvals and checks](../process/approvals.md) provide access control for each pipeline run.
    - Runtime parameters:
      - [Runtime parameters](../process/runtime-parameters.md) help avoid security issues related to variables, such as [Argument Injection](https://devblogs.microsoft.com/devops/pipeline-argument-injection/).
  - Consider migrating existing pipelines to YAML format for improved security and maintainability.

Security is an ongoing process, and regular assessments and updates are essential. YAML pipelines offer the best security for your Azure Pipelines.

The following articles outline recommendations to help you develop a secure YAML-based pipeline:

- [Azure DevOps security constructs](../../organizations/security/about-security-identity.md)
- [Incremental approach to improving security](approach.md)
- [Repository protection](repos.md)
- [Secure access to repositories](secure-access-to-repos.md)
- [Secrets](secrets.md)
- [Pipeline resources](resources.md)
- [Project structure](projects.md)
- [Security through templates](templates.md)
- [Variables and parameters](inputs.md)
- [Shared infrastructure](infrastructure.md)
- [Other security considerations](misc.md)
