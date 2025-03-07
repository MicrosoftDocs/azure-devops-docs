---
title: Secure Azure Pipelines
description: Guidelines and recommendations for securing pipelines.
ms.assetid: 1ef377e9-e684-4e72-8486-a42d754761ac
ms.reviewer: vijayma
ms.date: 03/04/2025
monikerRange: '> azure-devops-2019'
---

# Secure Azure Pipelines

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Pipelines offer powerful capabilities for executing scripts and deploying code to production environments, but it's crucial to balance this power with security. You never want a pipeline to become a conduit for malicious code. Balancing security with the flexibility and power needed by development teams is essential.

This article provides an overview of necessary security-related configurations to protect your pipelines against threats and vulnerabilities.

## Prerequisites

| **Category** | **Requirements**   |
|---|---|
| **Azure DevOps** | - Implement recommendations in [Secure your Azure DevOps](../../organizations/security/security-overview.md).  <br>  - Basic knowledge of YAML and Azure Pipelines. For more information, see [Create your first pipeline](../create-first-pipeline.md). |
| **Permissions** | - To modify pipelines permissions: Member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md). <br> - To modify organization permissions: Member of the [Project Collection Administrators group](../../organizations/security/change-project-level-permissions.md). |


## Restrict project, repository, and service connection access

To enhance security, consider separating your projects, using branch policies, and adding more security measures for forks. Minimize the scope of service connections and use the most secure authentication methods.

- **Separate projects**: Manage each product and team in separate projects. This prevents pipelines from one product from inadvertently accessing open resources from another product, minimizing lateral exposure. 
- **Use project-level identities**: Use a project-based build identity for pipelines instead of a collection-level identity. Project-level identities can only access resources within their associated project, minimizing the risk of unauthorized access by malicious actors. For more information, see [scoped build identities](../process/access-tokens.md#scoped-build-identities) and [job authorization scope](../process/access-tokens.md#job-authorization-scope).
- **Use branch policies**: To ensure safe changes to code and pipeline, apply permissions and branch policies. Additionally, consider [adding pipeline permissions and checks to repositories](../process/repository-resource.md).
- **Add additional security for forks**: When you work with public repositories from GitHub, carefully consider your approach to fork builds. Forks originating from outside your organization pose particular risks.    
    - **Don't provide secrets to fork builds**: By default, pipelines are configured to build forks, but secrets and protected resources aren't automatically exposed to the jobs in those pipelines. It's essential not to disable this protection to maintain security.
    - **Consider manually triggering fork builds**: Turn off automatic fork builds and use pull request comments to manually build these contributions. This setting gives you an opportunity to review the code before triggering a build. For more information, see [Turn off automatic fork builds](../repos/github.md#contributions-from-forks).
    - **Use Microsoft-hosted agents for fork builds**: Avoid running builds from forks on self-hosted agents. Doing so could allow external organizations to execute external code on machines within your corporate network. Whenever possible, use Microsoft-hosted agents.
    - **Use the Azure Pipelines GitHub app for token scope limitation**: When you build a GitHub forked pull request, Azure Pipelines ensures the pipeline can't change any GitHub repository content. This restriction applies _only_ if you use the [Azure Pipelines GitHub app](https://github.com/marketplace/azure-pipelines) to integrate with GitHub.

### Secure service connections

- **Minimize the scope of service connections**: Service connections should only have access to necessary resources. When you create a new Azure Resource Manager service connection, always choose a specific resource group. Make sure that the resource group contains only the necessary VMs or resources required for the build. For more information, see [Use an Azure Resource Manager service connection](../library/connect-to-azure.md). 
- **Use workload identity federation for authentication**: Whenever possible, use workload identity federation instead of a service principal for your Azure service connection. Workload identity federation uses Open ID Connect (OIDC), an industry-standard technology, to facilitate authentication between Azure and Azure DevOps without relying on secrets. For more information, see [ Create a service connection with workload identity federation (automatic)](../library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-using-workload-identity-federation).
- **Minimize GitHub App access**: Similarly, when you configure the GitHub app to Azure DevOps, grant access only to the repositories you intend to build using pipelines.

## Use YAML pipelines instead of Classic pipelines

For added security and to reduce the risk of accidental misconfigurations, use YAML pipelines instead of Classic pipelines. This precaution prevents a security concern arising from YAML and classic pipelines sharing the same resources, such as service connections. If your organization is using Classic pipelines, [migrate the pipelines to YAML](../release/from-classic-pipelines.md). 

- **YAML offers the benefits of infrastructure as code**: Treat YAML pipelines like any other code because steps and dependencies are defined in code. There's also clear visibility into pipeline configurations and a reduced risk of accidental misconfigurations. 
- **YAML pipelines can be combined with enhanced security measures**: Through code reviews and pull requests, use [branch policies](../../repos/git/branch-policies-overview.md) to set up a review process for  pull requests to prevent bad merges. 
- **Resource access management**:  Resource owners control whether a YAML pipeline can access specific resources. This security feature prevents attacks like stealing another repository. Use [Approvals and checks](../process/approvals.md) to provide access control for each pipeline run.
    - **Protected branch check**: If you have manual code review processes for specific branches, you can extend this protection to pipelines. A protected branch check for a resource prevents pipelines from automatically running on unauthorized branches.
    - **Manual approval check**: Use a manual approval check to block pipeline requests from using a protected resource until manually approved by specified users or groups.
    - **Business hours check**: Use this check to ensure that a pipeline deployment starts within a specified day and time window.
- **Disable creating Classic pipelines**: Independently disable the creation of classic build pipelines and classic release pipelines. When both are disabled, no classic build pipeline, classic release pipeline, task groups, or deployment groups can be created via the user interface or the REST API. For more information, see [Disable creation of Classic pipelines]((approach.md#disable-creation-of-classic-pipelines)). 

## Secure agents

To secure containers, mark volumes as read-only, set resource limits, use trusted images, scan for vulnerabilities, and enforce security policies.

- **Use Microsoft-hosted instead of self-hosted agents**: Microsoft-hosted agents offer isolation and a clean virtual machine for each run of a pipeline. Use Microsoft-hosted agents instead of self-hosted agents. For more information, see [Microsoft-hosted agents](../agents/hosted.md). 
- **Separate agents for each project**: To mitigate lateral movement and prevent cross-contamination between projects, maintain separate agent pools, each dedicated to a specific project. 
- **Use low-privileged accounts to run agents**: To enhance system security, use the lowest-privileged account for running self-hosted agents. For example, consider using your machine account or a managed service identity. Don't run an agent under an identity with direct access to Azure DevOps resources.
- **Isolate production artifacts and sensitive agent pools**: Use different agent pools to prevent security issues.  
    - **Use a separate agent pool for production artifacts**: Isolate production artifacts by using a distinct agent pool, preventing accidental deployments from nonproduction branches.
    - **Segment sensitive pools:** Create separate pools for sensitive and nonsensitive workloads. Only allow credentials in build definitions associated with the appropriate pool.
- **Configure restrictive firewalls for self-hosted agents**: Set up firewalls to be as restrictive as possible while still allowing agents to function, balancing security and usability.
- **Regularly update self-hosted agent pools**: Keep your self-hosted agents up to date with regular updates to ensure vulnerable code isn't running, reducing the risk of exploitation.


## Securely use variables and parameters

Securely use variables and parameters in your pipelines by following best practices for setting secrets. Best practices include restricting secret use, using queue-time variables, and enabling shell task argument validation to protect your pipeline from threats and vulnerabilities.

- **Restrict access to secrets**: Remove any secrets or keys from appearing in pipelines. Move to secretless authentication methods like workload identity federation or set secrets in the UI, a variable group, or a variable group sourced from Azure Key Vault.
- **Enable shell parameter validation**:  When the setting *Enable shell tasks arguments parameter validation* is enabled, there's an added check for characters like semi-colons, quotes, and parentheses. Turn on *Enable shell tasks arguments parameter validation* at the organization or project level under **Settings** > **Pipelines** > **Settings**. 
- **Limit variables that can be set at queue time**: Prevent users from defining new variables at queue time by enabling the setting *limit variables that can be set at queue time* at **Organization settings** > **Pipelines** > **Settings**. 
- **Use parameters instead of variables**: Unlike variables, a running pipeline can't modify pipeline parameters. Parameters have data types such as `number` and `string`, and they can be restricted to specific value subsets. This restriction is valuable when a user-configurable aspect of the pipeline should only accept values from a predefined list, ensuring that the pipeline doesn't accept arbitrary data.
- **Reference secrets from templates**: Instead of including inline scripts with secret parameters directly in your pipeline YAML, use templates to abstract sensitive information away from the main pipeline. To implement this approach, create a separate YAML file for your script and then store that script in a separate, secure repository. You can then reference the template and pass a secret variable in your YAML as a parameter. The secure variable should come from Azure Key Vault, a variable group, or the pipeline UI. For more see, [Use templates](templates.md). 
- **Limit secrets with branch policies and variable group permissions**: You can use a combination of variable group permissions, conditional job insertion, and branch policies to make sure that secrets are tied to the `main` branch. For more information, see [Protect secrets](secrets.md#limit-secrets-with-branch-policies-and-variable-group-permissions). 
- **Use setvariable to limit setting variables**: Use the `settableVariables` attribute to configure what variables pipeline authors are allowed to set in a pipeline. Without this setting, pipeline authors can declare unlimited new variables with the `setvariable` logging command. When you specify an empty list `with settableVariables`, all variable setting is disallowed. For more information, see the [`settableVariables` attribute](/azure/devops/pipelines/yaml-schema/target-settable-variables) in the YAML Schema. 

The best method to protect a secret is to not have a secret in the first place. Avoid using secrets when possible, never store them in YAML files, and ensure they are not logged or printed to maintain security.

- **Avoid using secrets when possible**:  Check to see if your pipeline can use a different method than using a secret to perform a task such as a service connection with workload identity federation or a managed identity. Managed identities allow your applications and services to authenticate with Azure without requiring explicit credentials. For more information, see [Use service principals & managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md).
**Don't put secrets in YAML**: Never store sensitive values as plaintext in an Azure Pipelines **.yml** file. 
- **Don't log or print secrets**: Avoid echoing secrets to the console, using them in command line parameters, or logging them to files. Azure Pipelines attempts to scrub secrets from logs wherever possible but can't catch every way that secrets can be leaked.
- **Don't use structured data like JSON as secrets**: Create individual secrets for each sensitive value. This approach ensures better redaction accuracy and minimizes the risk of exposing sensitive data inadvertently.


### Audit and rotate secrets

To secure your pipelines, regularly audit secret handling in tasks and logs, review and remove unnecessary secrets, and rotate secrets to minimize security risks.

- **Audit secret handling in tasks and logs**: Checks tasks to make sure secrets aren't sent to hosts or printed to logs. Verify that there are no secrets in any log files, including the error logs. 
- **Review registered secrets**: Confirm that secrets in your pipeline are still necessary, and remove any that are no longer needed to reduce clutter and potential security risks.
- **Rotate secrets**: Regularly rotate secrets to minimize the window of time during which a compromised secret could be exploited. 

### Prevent malicious code execution

To ensure that only tested and sanitized code runs through your pipeline, regularly review your pipelines for common issues. 

- **Code scanning**: Escape special characters in arguments to avoid shell command injection. You can use [GitHub Advanced Security for Azure DevOps](../../repos/security/github-advanced-security-security-overview.md) to automate code scanning. 
- **Validate inputs and use parameters**: Validate input parameters and arguments to prevent unintended behavior. Use parameterized queries in scripts to prevent SQL injection. [Runtime parameters](../process/runtime-parameters.md) help avoid security issues related to variables, such as [Argument Injection](https://devblogs.microsoft.com/devops/pipeline-argument-injection/).
- **Don't use PATH in scripts**: Relying on the agent's `PATH` setting is dangerous because it can be altered by a previous script or tool. Always use a fully qualified path instead.
- **Control available tasks**: Disable the ability to install and run tasks from the Marketplace, which gives you greater control over the code that executes in a pipeline. 
- 
## Secure containers

Learn how to secure containers through configuration changes, scanning, and policies. 

- **Mark volumes as read only**: Containers include system-provided volume mounts for tasks, tools, and external components required to work with the host agent. Set `externals`, `tasks`, and `tools` to read only for added security. 
- **Set container-specific resource limits**: Set limits on CPU and memory to prevent containers from consuming excessive resources, which can lead to denial of service or security vulnerabilities.
- **Use trusted images**: Use official and verified images from reputable sources such as Azure Container Registry or Docker Hub. Always specify a specific version or tag to maintain consistency and reliability, rather than relying on the `latest` tag. Regularly update base images to include the latest security patches and bug fixes.
- **Scan containers for vulnerabilities and enforce runtime threat protection**: Use tools such as [Microsoft Defender for Cloud](/azure/defender-for-cloud/defender-for-containers-introduction) to monitor and detect security risks. Additionally, Azure Container Registry offers integrated [vulnerability scanning](/azure/container-registry/scan-images-defender) to help ensure container images are secure before deployment. You can also integrate third-party scanning tools through Azure DevOps extensions for added security checks.
- **Implement security policies to prevent privilege escalation and ensure containers run with the least amount of privileges necessary**: For example, Azure [Kubernetes Service (AKS)](/azure/aks/operator-best-practices-cluster-security), [role-based access control](/azure/aks/manage-azure-rbac), and [Pod Security Admission](/azure/aks/use-psa) let you enforce policies that restrict container privileges, ensure non-root execution, and limit access to critical resources. 
- **Utilize Network Policies**: [Network Policies](/azure/virtual-network/kubernetes-network-policies) can be used to restrict communication between containers, ensuring that only authorized containers can access sensitive resources within your network. In addition, [Azure Policy for AKS](/azure/governance/policy/concepts/policy-for-kubernetes) can be applied to enforce container security best practices, such as ensuring only trusted container images are deployed.

## Use templates to enforce best practices

Begin with a minimal template and gradually enforce extensions. This approach ensures that as you implement security practices, you have a centralized starting point that covers all pipelines.

- **Use extends templates**: Extends templates define the outer structure and offer specific points for targeted customizations. [Using extends templates](../process/templates.md#extend-from-a-template) can prevent malicious code from infiltrating a pipeline.
- **Restrict access with steps**: Limit network access by having steps such as downloading packages run on a container rather than on the host. When steps run in a container, you prevent a bad actor from modifying agent configuration or leaving malicious code for later execution.


## Related Articles

- [Microsoft Security Development Lifecycle](https://www.microsoft.com/sdl/)
- [Azure Trust Center](https://azure.microsoft.com/support/trust-center/)