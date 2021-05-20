---
title: About pipeline resources
ms.custom: seodec18
description: What are resources?
ms.topic: reference
ms.date: 05/18/2021
monikerRange: azure-devops
---

# About pipeline resources

A [resources](resources.md) is anything used by a pipeline that lives outside the pipeline. Resources provide three main benefits:

Resources are a way to share information across pipelines so that you do not need to recreate it each time. Good examples of using resources for sharing are variable groups, secure files, and service connections. In all these cases, you're using a resource as an easier way for a pipeline to access and consume something. 

At the same time, resources are useful for restricting access and making sure your valuable information is shared with the fewest number of authorized users. For example, you can limit a service connection to only run on one pipeline or make sure that a repository can only be used with a manual approval check. 

Resources are also a way to improve traceability. When you use resources in a YAML pipeline, you can trace the lifecycle of your resources. For example, you'll be able to see the version of a package that gets consumed in a pipeline. When resources are combined with environments, you can see any resources such as containers that are consumed within a specific environment. 




There are three types of resources:
* Resources that are consumed (secure files, variable groups, pipelines, repositories, packages, service connections)
* Resources that are triggered (repositories, artifacts, pipeline triggers, webhooks)  
* Resources that run on infrastructure (environments, agent pools, containers)

Resources give you an added level of control. Because a resource doe

## Manage resources

Some resources are only managed in the Pipelines UI:
* service connections
* variable groups
* agent pools


There's a special YAML pipeline syntax for managing some resource types:


Other resources are only managed in the Azure Pipelines UI:
* secure files

## Secure resources

Resources can be [protected or open](../security/resources.md). You can use approvals and checks with protected resources and limit them to specific users and pipelines. Protected resources include service connections, agent pools, environments, and repositories.


It's useful to think about resources are used, how to prevent malicious code, and how to prevent an authorized pipeline from having access. 

|Resource  |How is it consumed?  |How can you prevent a malicious script in a pipeline from using this?  |How do you prevent an unintended pipeline from using this?  |
|---------|---------|---------|---------|
|[service connections](../library/service-endpoints.md)     |    Consumed by tasks in a YAML file that use the service connection as an input.    |    There is no API to read a service connection. A service connection gets declared in a YAML file.   |     Checks and pipeline permissions controlled by service connection users.     |
|[variable groups](../library/variable-groups.md) and [secure files](../library/secure-files.md)    |    A special syntax exists for using variable groups in a pipeline or in a job. A variable group gets added like a service connection.     |    Variable groups get declared in a YAML file.     |  Authors have access to variable groups.    |
|[agent pools](../agents/agents.md) |   There is a special syntax to use an agent pool to run a job.      |    There's no API to run a script on an agent pool. Agent pools must be declared in a YAML file.     |    Checks and pipeline permissions are controlled by agent pool users. A resource owner can control which pipelines can access an agent pool. You can also use pipeline permissions to restrict access to a particular pipeline.      |
|[environments](../process/environments.md) |   There's a special syntax to use an environment in a YAML.      |    There's no API to run a script on an environment. Environments must be declared in a YAML file.     |    Checks and pipeline permissions are controlled by environment users. You can also use pipeline permissions to restrict access to a particular environment.      |
|[repositories](resources.md#resources-repositories)     |   A script can clone a repository if the job access token has access to the repo.   |   There's an API to clone repositories. You can also use a project setting to prevent undeclared repositories from being accessed in a script. When enabled, ACLs for the repository are added to the job access token on if it is explicitly declared in the resources section.       |   Checks and pipeline permissions controlled by repository contributors. A repository owner can restrict ownership.      |
|[artifacts](../artifacts/artifacts-overview.md), work items, [pipelines](resources.md#resources-pipelines)     |   [Pipeline artifacts](../artifacts/artifacts-overview.md) are resources, but [Azure Artifacts](/azure/devops/artifacts/) are not.  Artifacts on their own are not resources. A script can download artifacts if the job access token has access to the feed. An (pipeline) artifact can be explicitly declared as a resource in the resources section – primarily for the intent of triggering the pipeline when a new artifact is available, or to consume that artifact in the pipeline. |    Job access tokens have read permissions on artifacts within their scope (project or collection). You can restrict the job access token to be project-scoped instead of collection scoped and limit the access to feeds within the project. If I have access to a project, then I can see all the artifacts and feeds. There is no way to add permission restrictions to specific feeds (as declared in the resources section) to a job access token. |    Checks and pipeline permissions for feeds are not supported     |
|[containers](resources.md#resources-containers), [packages](resources.md#resources-packages), [webhooks](resources.md#resources-webhooks)      |    These live outside the Azure DevOps ecosystem and access gets controlled with service connections. There is a special syntax for using all three types in YAML pipelines. |       |     Checks and pipeline permissions controlled by service connection users.     |


There are some resources that live outside of the Azure DevOps ecosystem. Access to these resources is controlled with service connections. 
- [containers](resources.md#resources-containers)
- [packages](resources.md#resources-packages)
- [webhooks](resources.md#resources-webhooks)