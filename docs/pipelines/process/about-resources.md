---
title: About pipeline resources
ms.custom: seodec18, contperf-fy21q4, pipelinesresourcesrefresh
description: What are resources?
ms.topic: conceptual
ms.date: 07/15/2021
monikerRange: azure-devops
---

# About resources for Azure Pipelines

[!INCLUDE [include](../includes/version-team-services.md)]

A [resource](resources.md) is anything used by a pipeline that lives outside the pipeline.

Resources offer the following benefits:

* Ways to [share](#share-resources-across-pipelines) something such as a secure file or password across pipelines.
  * Examples of using resources for sharing are variable groups, secure files, and service connections. In all cases, you're using a resource as a way for a pipeline to access and consume something.
* A tool for enhancing [security](#use-resources-to-enhance-security) through access checks and other restrictions.
  * For example, you can limit a service connection to only run on one pipeline. You could also make sure that a repository can only be accessed from a pipeline after a manual approach check.
* Ways to improve [traceability](#use-resources-for-traceability) for your pipeline and make it easier to troubleshoot [environments](environments.md).
  * For example, you can see the number of the last run that was deployed to an [environment](environments.md).

## Share resources across pipelines

Share resources across pipelines by configuring them within the pipelines UI. Then, reference those resources in a task. You can also access some shared resources with the [`resources` YAML pipeline syntax](resources.md).

Examples of sharing resources with the pipelines UI include [secure files](../library/secure-files.md), [variable groups](../library/variable-groups.md), and [service connections](../../extend/develop/service-endpoints.md). With the `resources` syntax, examples include accessing pipelines themselves, repositories, and packages.  

How a resource gets used in a pipeline depends on the type of pipeline and type of resource.

#### [YAML](#tab/yaml)

For YAML pipelines:

* Service connections and secure files are directly used as inputs to tasks and don't need to be pre-declared.
* Variable groups use the `group` syntax.
* Pipelines and repositories use the `resources` syntax.

For example, to use variable groups in a pipeline, add your variables at **Pipelines** > **Library**. Then, you can reference the variable group in your YAML pipeline with the `variables` syntax.

```yml
variables:
- group: my-variable-group
``` 

To call a second pipeline from your pipeline with the `resources` syntax, reference `pipelines`.

```yml
resources:
  pipelines:
  - pipeline: SmartHotel-resource # identifier for the resource (used in pipeline resource variables)
    source: SmartHotel-CI # name of the pipeline that produces an artifact
```

#### [Classic](#tab/classic)

You can reference service connections, variable groups, and secure files with the classic editor. For example, the `Deploy Azure App Service` task here uses the `MyAzureApp` service connection as an input. 

:::image type="content" source="../library/media/ui-connection-setting.png" alt-text="Use service connection.":::

Similarly, to share a variable between pipelines with the classic editor, you can [link a variable group](../library/variable-groups.md).

---
## Use resources to enhance security

You can enhance your pipeline's security with resources by identifying how the resource gets consumed, and how to prevent  unauthorized access.

For YAML pipelines only, set resources as [protected or open](../security/resources.md). When a resource is protected, you can apply approvals and checks to limit access to specific users and pipelines. Protected resources include service connections, agent pools, environments, repositories, variable groups, and secure files.

| Resource                                                                                                                                  | How is it consumed?                                                                                                                                                                                                                                                                                                                                                                                                               | How do you prevent an unintended pipeline from using this?                                                                                                                                                                                                                                    |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [service connections](../library/service-endpoints.md)                                                                                    | Consumed by tasks in a YAML file that use the service connection as an input.                                                                                                                                                                                                                                                                                                                                                     | Protected with checks and pipeline permissions. Checks and pipeline permissions are controlled by service connection users. A resource owner can control which pipelines can access a service connection. You can also use pipeline permissions to restrict access to a particular pipeline. |
| [variable groups](../library/variable-groups.md)                                                                                          | A special syntax exists for using variable groups in a pipeline or in a job. A variable group gets added like a service connection.                                                                                                                                                                                                                                                                                               | Protected with checks and pipeline permissions. Checks and pipeline permissions are controlled by variable group users. A resource owner can control which pipelines can access a variable group. You can also use pipeline permissions to restrict access to a particular pipeline.          |
| [secure files](../library/secure-files.md)                                                                                                | Secure files are consumed by tasks (example: [Download Secure File task](../tasks/utility/download-secure-file.md)).                                                                                                                                                                                                                                                                                                              | Protected with checks and pipeline permissions. Checks and pipeline permissions are controlled by secure files users. A resource owner can control which pipelines can access secure files. You can also use pipeline permissions to restrict access to a particular pipeline.                |
| [agent pools](../agents/agents.md)                                                                                                        | There's a special syntax to use an agent pool to run a job.                                                                                                                                                                                                                                                                                                                                                                      | Protected with checks and pipeline permissions. Checks and pipeline permissions are controlled by agent pool users. A resource owner can control which pipelines can access an agent pool. You can also use pipeline permissions to restrict access to a particular pipeline.                 |
| [environments](../process/environments.md)                                                                                                | There's a special syntax to use an environment in a YAML.                                                                                                                                                                                                                                                                                                                                                                         | Protected with checks and pipeline permissions that are controlled by environment users. You can also use pipeline permissions to restrict access to a particular environment.                                                                                                                |
| [repositories](resources.md#resources-repositories)                                                                                       | A script can clone a repository if the job access token has access to the repo.                                                                                                                                                                                                                                                                                                                                                   | Protected with checks and pipeline permissions controlled by repository contributors. A repository owner can restrict ownership.                                                                                                                                                              |
| [artifacts](../artifacts/artifacts-overview.md), work items, [pipelines](resources.md#resources-pipelines)                                | [Pipeline artifacts](../artifacts/artifacts-overview.md) are resources, but [Azure Artifacts](/azure/devops/artifacts/) aren't.  A script can download artifacts if the job access token has access to the feed. A pipeline artifact can be declared as a resource in the resources section – primarily for the intent of triggering the pipeline when a new artifact is available, or to consume that artifact in the pipeline. | Artifacts and work items aren't protected. Checks and pipeline permissions for feeds aren't supported.                                                                                                                                                                                      |
| [containers](resources.md#resources-containers), [packages](resources.md#resources-packages), [webhooks](resources.md#resources-webhooks) | These live outside the Azure DevOps ecosystem and access is controlled with service connections. There's a special syntax for using all three types in YAML pipelines.                                                                                                                                                                                                                                                           | Protected with checks and pipeline permissions controlled by service connection users.                                                                                                                                                                                                        |

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
