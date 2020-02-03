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

## Separate agents for each project

You can share the virtual or physical machines running the agent software across projects by sharing the pool with multiple projects.
An agent can only be bound to a single pool, but that pool can be shared.
In other words, multiple projects can run jobs on the same agent, one after another.
While this saves on infrastructure cost, it’s a vector for lateral movement.
To eliminate that form of lateral movement and prevent one project from "poisoning" an agent for another project, keep separate agent pools with separate agents for each project.

## Low privileged accounts to run agents

Specifically for Windows-based agents, it's tempting but dangerous to run the agent software under a user identity which also has access to Azure DevOps resources directly.
This is primarily a problem for Azure AD-backed organizations who use an Azure AD-backed identity to run the agent.
You should run the agent as a non-privileged local account such as **Network Service**.

Azure DevOps has a misleading group called **Project Collection Service Accounts**.
By inheritance, Project Collection Service Accounts are also **Project Collection Administrators**.
Customers sometimes run their build agents using an Azure AD-backed identity that is a member of Project Collection Service Accounts.
An adversary that executes code in a pipeline assigned to one of these build agents can take over the entire Azure DevOps organization.

We have also seen self-hosted agents being run using accounts that have high privileges, often to access secrets or production environments.
An adversary that executes code in a pipeline assigned to one of these build agents can compromise those resources or move laterally to a long tail of other systems accessible through those accounts.
Use the lowest privilege account (e.g., your machine account or a managed service identity) in order to run self-hosted agents.
Let Azure Pipelines manage access to secrets and environments as described above.

## Minimal scope for service connections

Service connections must have access to only the resources that they require.
For instance, an Azure service connection should use **Azure Resource Manager** and service principals that are scoped to the resources and resource group they need access to.
They should not have broad contributor rights on the entire Azure subscription.
When creating a new **Azure Resource Manager Service Connection**, always ensure you select a resource group.
Ensure that resource group only contains VMs or resources the build requires.
Similarly, when you configure the GitHub app, grant access only to the repositories that you want to build using Azure Pipelines.

Finally, there are a handful of [general recommendations](misc.md) you should also consider.
