---
title: About pipeline resources
ms.custom: seodec18, contperf-fy21q3
description: What are resources?
ms.topic: conceptual
ms.date: 05/18/2021
monikerRange: azure-devops
---

# About pipeline resources

A [resource](resources.md) is anything used by a pipeline that lives outside the pipeline. Resources are:
* a way to share something such as a secure file or password across pipelines
* a tool for enhancing security through access checks and other restrictions
* a way to improve traceability for your pipeline and make it easier to troubleshoot [environments](environments.md)

Resources are a way to share information across pipelines. Good examples of using resources for sharing are variable groups, secure files, and service connections. In all these cases, you're using a resource as a way for a pipeline to access and consume something. 

Resources are also useful for restricting access and making sure your valuable information is shared with the fewest number of authorized users or pipelines. For example, you can limit a service connection to only run on one pipeline. You could also make sure that a repository only runs with a manual approval check. 

You can also use resources for better traceability. When you use resources with environments, you can trace the lifecycle of your resources. For example, you'll be able to see the number of the last run that was deployed to an [environment](environments.md).
## Share resources across pipelines

You can share resources across pipelines by configuring resources within the pipelines UI and then referencing those resources in a task. You can also access some shared resources with the [`resources` YAML pipeline syntax](resources.md). 

Examples of sharing resources with the pipelines UI include [secure files](../library/secure-files.md), [variable groups](../library/variable-groups.md), and [service connections](../../extend/develop/service-endpoints.md). With the `resources` syntax, examples include accessing pipelines themselves, repositories, and packages.  

The way you use a resource in a pipeline depends on the type of pipeline and the type of resource.


#### [YAML](#tab/yaml)

For YAML pipelines:
* Service connections and secure files are directly used as inputs to tasks. They do not have to be pre-declared. 
* Variable groups use the `group` syntax. 
* Pipelines and repositories use the `resources` syntax. 

For example, to use variable groups in a pipeline, you'll first add your variables at **Pipelines** > **Library**. Then, you can reference the variable group in your YAML pipeline with the `variables` syntax. 

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

Similarly, to share a variable between pipelines with the classic editor, you can [link a variable group](../library/variable-groups.md#classictabclassic-1). 

--- 
## Use resources to enhance security

You can enhance your pipeline's security with resources by identifying how that resource gets consumed, and how to prevent an unauthorized access. 

For YAML pipelines only, one way to restrict resources is by setting them as [protected or open](../security/resources.md). When a resource is protected, you can apply approvals and checks to it and limit access to specific users and pipelines. Protected resources include service connections, agent pools, environments, repositories, variable groups, and secure files. 



| Resource                                                                                                                                  | How is it consumed?                                                                                                                                                                                                                                                                                                                                                                                                               | How do you prevent an unintended pipeline from using this?                                                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [service connections](../library/service-endpoints.md)                                                                                    | Consumed by tasks in a YAML file that use the service connection as an input.                                                                                                                                                                                                                                                                                                                                                     | Protected with checks and pipeline permissions. Checks and pipeline permissions are controlled by agent pool users. A resource owner can control which pipelines can access an agent pool. You can also use pipeline permissions to restrict access to a particular pipeline. |
| [variable groups](../library/variable-groups.md)                                                                                          | A special syntax exists for using variable groups in a pipeline or in a job. A variable group gets added like a service connection.                                                                                                                                                                                                                                                                                               | Protected with checks and pipeline permissions. Checks and pipeline permissions are controlled by agent pool users. A resource owner can control which pipelines can access an agent pool. You can also use pipeline permissions to restrict access to a particular pipeline. |
| [secure files](../library/secure-files.md)                                                                                                | Secure files are consumed by tasks (example: Download Secure Files).                                                                                                                                                                                                                                                                                                                                                              | Protected with checks and pipeline permissions. Checks and pipeline permissions are controlled by agent pool users. A resource owner can control which pipelines can access an agent pool. You can also use pipeline permissions to restrict access to a particular pipeline. |
| [agent pools](../agents/agents.md)                                                                                                        | There is a special syntax to use an agent pool to run a job.                                                                                                                                                                                                                                                                                                                                                                      | Protected with checks and pipeline permissions. Checks and pipeline permissions are controlled by agent pool users. A resource owner can control which pipelines can access an agent pool. You can also use pipeline permissions to restrict access to a particular pipeline. |
| [environments](../process/environments.md)                                                                                                | There's a special syntax to use an environment in a YAML.                                                                                                                                                                                                                                                                                                                                                                         | Protected with checks and pipeline permissions that are controlled by environment users. You can also use pipeline permissions to restrict access to a particular environment.                                                                                                |
| [repositories](resources.md#resources-repositories)                                                                                       | A script can clone a repository if the job access token has access to the repo.                                                                                                                                                                                                                                                                                                                                                   | Protected with checks and pipeline permissions controlled by repository contributors. A repository owner can restrict ownership.                                                                                                                                              |
| [artifacts](../artifacts/artifacts-overview.md), work items, [pipelines](resources.md#resources-pipelines)                                | [Pipeline artifacts](../artifacts/artifacts-overview.md) are resources, but [Azure Artifacts](/azure/devops/artifacts/) are not.  A script can download artifacts if the job access token has access to the feed. A pipeline artifact can be declared as a resource in the resources section – primarily for the intent of triggering the pipeline when a new artifact is available, or to consume that artifact in the pipeline. | Artifacts are not protected. Checks and pipeline permissions for feeds are not supported.                                                                                                                                                                                     |
| [containers](resources.md#resources-containers), [packages](resources.md#resources-packages), [webhooks](resources.md#resources-webhooks) | These live outside the Azure DevOps ecosystem and access is controlled with service connections. There is a special syntax for using all three types in YAML pipelines.                                                                                                                                                                                                                                                           | Protected with checks and pipeline permissions controlled by service connection users.                                                                                                                                                                                        |



## Use resources for traceability in environments

You can combine resources with environments to better track resource use. [Environments](environments.md) are collections of resources using in pipelines. For Classic release pipelines, [deployment groups](../release/deployment-groups/index.md) offer similar traceability tools. 

Environments support two resource types:
- [Kubernetes](environments-kubernetes.md)
- [Virtual machines](environments-virtual-machines.md)