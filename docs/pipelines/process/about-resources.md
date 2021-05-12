---
title: About pipeline resources
ms.custom: seodec18
description: What are resources?
ms.topic: reference
ms.date: 05/11/2021
monikerRange: azure-devops
---

# About pipeline resources

A resource is anything used by a pipeline that lives outside the pipeline. [Resources](resources.md) are defined at one place and can be consumed anywhere in your pipeline. 

There are three types of resources:
- Resources that consume something (Example: secure file, variable group, pipeline, repository)
- Resources that are triggered by something (repositories, artifacts, pipeline triggers)  
- Resources that run on something (environments, agent pools, containers)
- 
It's useful to also think about resources from three user roles. An owner of a resource cares about preventing people from accessing it if they do not have the appropriate permissions. For example, a resource owner for a secure password to an environment might not want anyone with access to the Pipeline to see the password. 

A pipeline author cares about what happens within a YAML file. Pipeline authors care about preventing malicious scripts from running and want to protect against code issues.

A developer is the person writing all of the code used in a pipeline and wants to have a seamless process. 


When we look at resources, it's useful to think about how that resource is used, how you can prevent a malicious script, and how to prevent an authorized pipeline from having access. 



Resources can be [protected or open](../security/resources.md). 

Resources include:
- [agent pools](../agents/agents.md)
- [variable groups](../library/variable-groups.md)
- [secure files](../library/secure-files.md)
- [service connections](../library/service-endpoints.md)
- [environments](../process/environments.md)
- [repositories](resources.md#resources-repositories)
- [artifacts](../artifacts/artifacts-overview.md)
- [pipelines](resources.md#resources-pipelines)
- [containers](resources.md#resources-containers)
