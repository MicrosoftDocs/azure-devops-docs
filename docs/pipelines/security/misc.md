---
title: Secure agents, projects, and containers
description: Other tips for securing your pipelines, including protecting shared infrastructure, repositories, and projects.
ms.assetid: 95fe319a-60bd-4b1b-9111-5fd8852f7839
ms.reviewer: vijayma
ms.date: 06/11/2024
monikerRange: '>= azure-devops-2020'
---

# Secure agents, projects, and containers

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

When it comes to securing Azure Pipelines, there are several other considerations to keep in mind, like protecting [shared infrastructure](#protect-shared-infrastructure), [repositories](#protect-repositories), [projects](#protect-projects), and [more](#other-security-considerations).

[!INCLUDE [security-prerequisites](includes/security-prerequisites.md)]

## Protect shared infrastructure

Protected resources in Azure Pipelines are an abstraction of real infrastructure.
Follow these recommendations to protect the underlying infrastructure.

### Use Microsoft-hosted pools

Microsoft-hosted pools offer isolation and a clean virtual machine for each run of a pipeline.
If possible, use Microsoft-hosted pools rather than self-hosted pools.

### Separate agents for each project

An agent can be associated only with a single pool.  You can share agents across projects by associating the pool with multiple projects. In practice, multiple projects might utilize the same agent consecutively. While cost-effective, this approach can introduce lateral movement risks.

To mitigate lateral movement and prevent cross-contamination between projects, maintain separate agent pools, each dedicated to a specific project.

### Use low-privileged accounts to run agents

While you might be tempted, running the agent under an identity with direct access to Azure DevOps resources can be risky. This setup is prevalent in organizations using Microsoft Entra ID but poses risks. If you run the agent under an identity backed by Microsoft Entra ID, it can directly access Azure DevOps APIs without relying on the job’s access token. For better security, consider running the agent using a nonprivileged local account, such as Network Service.

> [!IMPORTANT]
> In Azure DevOps, there's a group called *Project Collection Service Accounts*, which can be misleading. By inheritance, members of Project Collection Service Accounts are also considered members of *Project Collection Administrators*. Some customers run their build agents using an identity backed by Microsoft Entra ID, and these identities may be part of Project Collection Service Accounts. But, if adversaries run a pipeline on one of these build agents, they could potentially gain control over the entire Azure DevOps organization.

There are instances where self-hosted agents operate under highly privileged accounts. These agents often utilize these privileged accounts to access secrets or production environments. But, if adversaries execute a compromised pipeline on one of these build agents, they gain access to those secrets. Then, the adversaries can move laterally through other systems accessible via these accounts.

To enhance system security, we recommend using the lowest-privileged account for running self-hosted agents. For instance, consider using your machine account or a managed service identity. Also, entrust Azure Pipelines with managing access to secrets and environments.

### Minimize the scope of service connections

Ensure that service connections have access only to the necessary resources. Whenever feasible, consider using [workload identity federation](../library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-using-workload-identity-federation) in place of a service principal for your [Azure service connection](../library/service-endpoints.md). Workload identity federation uses Open ID Connect (OIDC), an industry-standard technology, to facilitate authentication between Azure and Azure DevOps without relying on secrets.

Ensure that your [Azure service connection](../library/service-endpoints.md) is scoped to access only the necessary resources. Avoid granting broad contributor rights for the entire Azure subscription to users.

When you create a new [Azure Resource Manager service connection](../library/connect-to-azure.md), always choose a specific resource group. Ensure that the resource group contains only the necessary VMs or resources required for the build. Similarly, when you configure the GitHub app, grant access only to the repositories that you intend to build using Azure Pipelines.

## Protect projects

Beyond individual resources, it’s crucial to consider resource groups in Azure DevOps. Resources get organized by team projects, and understanding what your pipeline can access based on project settings and containment is essential.

Each job in your pipeline receives an access token with permissions to read open resources. In some cases, pipelines might also update these resources. This means that while your user account might not have direct access to a specific resource, scripts, and tasks running in your pipeline could still access it. Additionally, Azure DevOps’ security model allows access to these resources from other projects within the organization. If you decide to restrict pipeline access to certain resources, this decision applies to all pipelines within a project—specific pipelines can't be selectively granted access to open resources.

### Separate projects

Given the nature of open resources, consider managing each product and team in separate projects.
By doing so, you prevent pipelines from one product inadvertently accessing open resources from another product, thus minimizing lateral exposure. But, when multiple teams or products share a project, granular isolation of their resources becomes challenging.

If your Azure DevOps organization was created before August 2019, runs might still have access to open resources across all your organization's projects. Your organization administrator should review a critical security setting in Azure Pipelines that enables project isolation for pipelines.

You can find this setting at **Organization settings** > **Pipelines** > **Settings**, or directly: *https:\//dev.azure.com/Organization_Name/_settings/pipelinessettings*.

![Screenshot of job authorization scope UI](media/job-auth-scope.png)

## Protect repositories

In version control repositories, you can store source code, the pipeline’s YAML file, and necessary scripts and tools. To ensure safe changes to the code and pipeline, it’s crucial to apply permissions and branch policies. Additionally, consider [adding pipeline permissions and checks to repositories](../process/repository-resource.md).

Furthermore, review the [default access control settings](../../organizations/security/default-git-permissions.md) for your repositories.

Keep in mind that Git’s design means that branch-level protection has limitations. Users with push access to a repository can typically create new branches. If you’re working with GitHub open-source projects, anyone with a GitHub account can fork your repository and propose contributions. Since pipelines are associated with a repository (not specific branches), it’s essential to treat code and YAML files as potentially untrusted.

### Forks

When you're working with public repositories from GitHub, it’s essential to carefully consider your approach to fork builds. Forks, originating from outside your organization, pose particular risks. To safeguard your products from potentially untrusted contributed code, take the following recommendations into account

> [!NOTE]
> These recommendations primarily apply to building public repositories from GitHub.

#### Don't provide secrets to fork builds

By default, your pipelines are configured to build forks, but secrets and protected resources aren't automatically exposed to the jobs in those pipelines. It's essential not to disable this protection to maintain security.

:::moniker range="> azure-devops-2020"

:::image type="content" source="media/fork-build-protection.png" alt-text="Screenshot of fork build protection UI.":::

> [!NOTE]
> When you enable fork builds to access secrets, Azure Pipelines restricts the access token used by default. This token has limited access to open resources compared to a regular access token.
> To grant fork builds the same permissions as regular builds, enable the **Make fork builds have the same permissions as regular builds** setting.

:::moniker-end

:::moniker range="=azure-devops-2020"

:::image type="content" source="media/fork-build-protection-2020.png" alt-text="Screenshot of fork build protection UI in Azure DevOps Server 2020 and lower.":::

> [!NOTE]
> When you enable fork builds to access secrets, Azure Pipelines restricts the access token used by default. It has more limited access to open resources than a normal access token. You can't disable this protection.

:::moniker-end

#### Consider manually triggering fork builds

[You can turn off automatic fork builds](../repos/github.md#contributions-from-forks) and instead use pull request comments as a way to manually building these contributions.
This setting gives you an opportunity to review the code before triggering a build.

#### Use Microsoft-hosted agents for fork builds

Avoid running builds from forks on self-hosted agents. Doing so could allow external organizations to execute external code on machines within your corporate network. Whenever possible, use Microsoft-hosted agents. For self-hosted agents, implement network isolation and ensure that agents don't persist their state between jobs.

#### Review code changes

Before you run your pipeline on a forked pull-request, carefully review the proposed changes, and make sure you're comfortable running it.

The version of the YAML pipeline you run is the one from the pull request. Thus, pay special attention to changes to the YAML code and to the code that runs when the pipeline runs, such as command line scripts or unit tests.

#### GitHub token scope limitation

When you build a GitHub forked pull request, Azure Pipelines ensures the pipeline can't change any GitHub repository content. This restriction applies _only_ if you use the [Azure Pipelines GitHub app](https://github.com/marketplace/azure-pipelines) to integrate with GitHub. If you use other forms of GitHub integration, for example, the OAuth app, the restriction isn't enforced.

### User branches

Users in your organization with the right permissions can create new branches containing new or updated code. This code can run through the same pipeline as your protected branches. If the YAML file in the new branch is changed, then the updated YAML gets used to run the pipeline. While this design allows for great flexibility and self-service, not all changes are safe (whether made maliciously or not).

If your pipeline consumes source code or is defined in Azure Repos, you must fully understand the [Azure Repos permissions model](../../organizations/security/permissions.md#git-repository-object-level).
In particular, a user with **Create Branch** permission at the repository level can introduce code to the repo even if that user lacks **Contribute** permission.

## Other security considerations

There's the following handful of other things you should consider when securing pipelines.

### Rely on PATH

Relying on the agent's `PATH` setting is dangerous. It might not point where you think it does, since it was potentially altered by a previous script or tool. For security-critical scripts and binaries, always use a fully qualified path to the program.

### Log secrets

Azure Pipelines attempts to scrub secrets from logs wherever possible. This filtering is on a best-effort basis and can't catch every way that secrets can be leaked. Avoid echoing secrets to the console, using them in command line parameters, or logging them to files.

### Lock down containers

Containers have a few system-provided volume mounts mapping in the tasks, the workspace, and external components required to communicate with the host agent.
You can mark any or all of these volumes read-only.

```yaml
resources:
  containers:
  - container: example
    image: ubuntu:22.04
    mountReadOnly:
      externals: true
      tasks: true
      tools: true
      work: false  # the default; shown here for completeness
```

Typically, most people should set the first three directories as read-only and leave `work` as read-write.
If you don't write to the `work` directory in a specific job or step, feel free to make `work` read-only as well. But, if your pipeline tasks involve self-modification, you might need to keep `tasks` as read-write.

::: moniker range=">= azure-devops-2020"

### Control available tasks

You can disable the ability to install and run tasks from the Marketplace, which allows you greater control over the code that executes in a pipeline.
You might also disable all the in-the-box tasks (except Checkout, which is a special action on the agent).
We recommend that you don't disable in-the-box tasks under most circumstances.

Tasks directly installed with [`tfx`](https://www.npmjs.com/package/tfx-cli) are always available.
With both of these features enabled, **only** those tasks are available.

::: moniker-end

### Use the Auditing service

Many pipeline events are recorded in the Auditing service.
Review the audit log periodically to ensure no malicious changes slipped past.
Visit `https://dev.azure.com/ORG-NAME/_settings/audit` to get started.

## Next steps

>[!div class="nextstepaction"]
>[Review the security overview](overview.md)
