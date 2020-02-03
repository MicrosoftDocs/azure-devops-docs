---
title: Shared infrastructure
description: Separation of agents, user accounts, and other infrastructure components.
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 1bda2617-a03b-47e1-b987-3849517a1e81
ms.manager: mijacobs
ms.author: jukullam
ms.reviewer: macoope
ms.date: 2/04/2020
monikerRange: '> azure-devops-2019'
---

# Shared infrastructure

Protected resources in Azure Pipelines are an abstraction of real infrastructure.
Follow these recommendations to protect the underlying infrastructure.

## Use Microsoft-hosted pools if possible

Microsoft-hosted pools offer isolation and a clean VM for each run of a pipeline.
If possible, prefer Microsoft-hosted pools over self-hosted pools.

## Separate agents for each project

An agent may only be bound to a single pool.
Agents can be shared across projects by sharing the pool with multiple projects.
In other words, multiple projects might run jobs on the same agent, one after another.
While this practice saves on infrastructure cost, it's a vector for lateral movement.
To eliminate that form of lateral movement and prevent one project from "poisoning" an agent for another project, keep separate agent pools with separate agents for each project.

## Low privileged accounts to run agents

It's tempting (but dangerous) to run the agent under an identity that can access Azure DevOps resources directly.
This problem is common for Azure AD-backed organizations.
If you use an Azure AD-backed identity to run the agent, it can directly access Azure DevOps APIs without using the job's access token.
You should run the agent as a non-privileged local account such as **Network Service**.

Azure DevOps has a misleading group called **Project Collection Service Accounts**.
By inheritance, Project Collection Service Accounts are also **Project Collection Administrators**.
Customers sometimes run their build agents using an Azure AD-backed identity that is a member of Project Collection Service Accounts.
If an adversary runs a pipeline on one of these build agents, he or she can take over the entire Azure DevOps organization.

We've also seen self-hosted agents run under highly privileged accounts.
Often, these agents use privileged accounts to access secrets or production environments.
But if an adversary runs a compromised pipeline on one of these build agents, he or she can access those secrets.
Then, he or she may move laterally through a long tail of other systems accessible through those accounts.
Use the lowest privilege account (for example, your machine account or a managed service identity) to run self-hosted agents.
Let Azure Pipelines manage access to secrets and environments as described above.

## Minimal scope for service connections

Service connections must have access to only the resources that they require.
For instance, an Azure service connection should use **Azure Resource Manager** and service principals scoped to the resources they need access to.
They shouldn't have broad contributor rights on the entire Azure subscription.
When creating a new **Azure Resource Manager Service Connection**, always ensure you select a resource group.
Ensure that resource group only contains VMs or resources the build requires.
Similarly, when you configure the GitHub app, grant access only to the repositories that you want to build using Azure Pipelines.

Finally, there are a handful of [general recommendations](misc.md) you should also consider.
