---
title: Resources in Azure Pipelines
ms.custom: pipelinesresourcesrefresh
description: Discover how Azure Pipelines resources enable secure connections, shared configurations, and compliance-friendly audit trails for your CI/CD workflows.
ms.topic: concept-article
ms.date: 01/13/2026
monikerRange: "<=azure-devops"
#customer intent: As a DevOps engineer, I want to understand how to use resources in Azure Pipelines so that I can securely connect to external systems and share configurations across pipelines.
---

# Resources in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

A [resource](resources.md) in Azure Pipelines is a managed entity that your pipeline connects to or consumes. Resources include [service connections](../library/service-endpoints.md), [agent pools](../agents/agents.md), [environments](environments.md), [variable groups](../library/variable-groups.md), [secure files](../library/secure-files.md), repositories, and packages. Resources are fundamental to Azure Pipelines because they enable you to securely connect to external systems, share configurations across pipelines, and maintain audit trails for compliance and troubleshooting.

Resources offer the following benefits:

* Ways to [share](#share-resources-across-pipelines) something such as a secure file or password across pipelines.
  * Examples of using resources for sharing are [variable groups](../library/variable-groups.md), [secure files](../library/secure-files.md), and [service connections](../../extend/develop/service-endpoints.md). In all cases, you're using a resource as a way for a pipeline to access and consume something.
* A tool for enhancing [security](#use-resources-to-enhance-security) through access checks and other restrictions.
  * For example, you can limit a [service connection](../library/service-endpoints.md) to only run on one pipeline. You can also make sure that a repository is only accessed from a pipeline after a manual approval check.
* Ways to improve [traceability](#use-resources-for-traceability) for your pipeline and make it easier to troubleshoot [environments](environments.md).
  * For example, you can see the number of the last run that was deployed to an [environment](environments.md).

## Share resources across pipelines

Share resources across pipelines by configuring them within the pipelines UI. Then, reference those resources in a task. You can also access some shared resources by using the [`resources` YAML pipeline syntax](resources.md).

Examples of sharing resources with the pipelines UI include [secure files](../library/secure-files.md), [variable groups](../library/variable-groups.md), and [service connections](../../extend/develop/service-endpoints.md). Examples of sharing resources by using the `resources` syntax include accessing pipelines themselves, repositories, and packages.  

How you use a resource in a pipeline depends on the type of pipeline and type of resource.

#### [YAML](#tab/yaml)

For YAML pipelines:

* Use [service connections](../library/service-endpoints.md) and [secure files](../library/secure-files.md) directly as inputs to tasks. You don't need to predeclare them.
* Use the `group` syntax for [variable groups](../library/variable-groups.md).
* Use the `resources` syntax for pipelines and repositories.

For example, to use variable groups in a pipeline, add your variables at **Pipelines** > **Library**. Then, reference the variable group in your YAML pipeline by using the `variables` syntax.

```yml
variables:
- group: my-variable-group
``` 

To call a second pipeline from your pipeline by using the `resources` syntax, reference `pipelines`.

```yml
resources:
  pipelines:
  - pipeline: SmartHotel-resource # identifier for the resource (used in pipeline resource variables)
    source: SmartHotel-CI # name of the pipeline that produces an artifact
```

#### [Classic](#tab/classic)

You can reference [service connections](../library/service-endpoints.md), [variable groups](../library/variable-groups.md), and [secure files](../library/secure-files.md) by using the classic editor. For example, the `Deploy Azure App Service` task in the following section uses the `MyAzureApp` service connection as an input. 

:::image type="content" source="../library/media/ui-connection-setting.png" alt-text="Screenshot of service connection selection in the classic editor.":::

To share a variable between pipelines by using the classic editor, [link a variable group](../library/variable-groups.md).

---
## Use resources to enhance security

You can enhance your pipeline's security with resources by identifying how the resource gets consumed, and how to prevent unauthorized access.

For YAML pipelines only, set resources as [protected or open](../security/resources.md). When a resource is protected, you can apply approvals and checks to limit access to specific users and YAML pipelines. Protected resources include [service connections](../library/service-endpoints.md), [agent pools](../agents/agents.md), [environments](environments.md), repositories, [variable groups](../library/variable-groups.md), and [secure files](../library/secure-files.md).

| Resource | How is it consumed? | How do you prevent an unintended pipeline from using this? |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [service connections](../library/service-endpoints.md)| Consumed by tasks in a YAML file that use the service connection as an input. | Protected with checks and pipeline permissions. Checks and pipeline permissions are controlled by service connection users. A resource owner can control which pipelines can access a service connection. You can also use pipeline permissions to restrict access to particular YAML pipelines and all classic pipelines. |
| [secret variables in variable groups](../library/variable-groups.md) | A special syntax exists for using variable groups in a pipeline or in a job. A variable group gets added like a service connection. | Protected with checks and pipeline permissions. Checks and pipeline permissions are controlled by variable group users. A resource owner can control which pipelines can access a variable group. You can also use pipeline permissions to restrict access to particular YAML pipelines and all classic pipelines. |
| [secure files](../library/secure-files.md) | Secure files are consumed by tasks (example: [Download Secure File task](/azure/devops/pipelines/tasks/reference/download-secure-file-v1)).| Protected with checks and pipeline permissions. Checks and pipeline permissions are controlled by secure files users. A resource owner can control which pipelines can access secure files. You can also use pipeline permissions to restrict access to particular YAML pipelines and all classic pipelines. |
| [agent pools](../agents/agents.md) | There's a special syntax to use an agent pool to run a job. | Protected with checks and pipeline permissions. Checks and pipeline permissions are controlled by agent pool users. A resource owner can control which pipelines can access an agent pool. You can also use pipeline permissions to restrict access to particular YAML pipelines and all classic pipelines.  |
| [environments](../process/environments.md)| There's a special syntax to use an environment in a YAML. | Protected with checks and pipeline permissions that are controlled by environment users. You can also use pipeline permissions to restrict access to a particular environment. |
| [repositories](resources.md#define-a-repositories-resource)  | A script can clone a repository if the job access token has access to the repo.| Protected with checks and pipeline permissions controlled by repository contributors. A repository owner can restrict ownership.  |
| [artifacts](../artifacts/artifacts-overview.md), work items, [pipelines](resources.md#define-a-pipelines-resource)  | [Pipeline artifacts](../artifacts/artifacts-overview.md) are resources, but [Azure Artifacts](../../artifacts/index.yml) aren't.  A script can download Azure Artifacts if the job access token has access to the feed. A pipeline artifact can be declared as a resource in the resources section – primarily for the intent of triggering the pipeline when a new artifact is available, or to consume that artifact in the pipeline. | Azure Artifacts and work items have their own permissions controls. Checks and pipeline permissions for feeds aren't supported.|
| [containers](resources.md#define-a-containers-resource), [packages](resources.md#define-a-packages-resource), [webhooks](resources.md#define-a-webhooks-resource) | These live outside the Azure DevOps ecosystem and access is controlled with service connections. There's a special syntax for using all three types in YAML pipelines.  | Protected with checks and pipeline permissions controlled by service connection users.  |

## Use resources for traceability

#### [YAML](#tab/yaml)

Environments support the following resource types:

* [Kubernetes](environments-kubernetes.md)
* [Virtual machines](environments-virtual-machines.md)

#### [Classic](#tab/classic)

For Classic release pipelines, [deployment groups](../release/deployment-groups/index.md) offer traceability tools.

---

## Next steps

> [!div class="nextstepaction"]
> [Add resources to a pipeline](resources.md)

## Related articles

* [Define variables](variables.md)
* [Add and use variable groups](../scripts/cli/pipeline-variable-group-secret-nonsecret-variables.md)
* [Use secure files](../library/secure-files.md)
* [Library for Azure Pipelines](../library/index.md)
* [Service connections](../library/service-endpoints.md)
* [Agent pools](../agents/agents.md)
* [Environments](environments.md)
