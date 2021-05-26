---
title: Recommendations to protect shared infrastructure
description: Learn why you should separate agents, user accounts, and other infrastructure components.
ms.assetid: 1bda2617-a03b-47e1-b987-3849517a1e81
ms.reviewer: vijayma
ms.date: 02/04/2020
monikerRange: '> azure-devops-2019'
---

# Recommendations to secure shared infrastructure in Azure Pipelines

Protected resources in Azure Pipelines are an abstraction of real infrastructure.
Follow these recommendations to protect the underlying infrastructure.

## Use Microsoft-hosted pools

Microsoft-hosted pools offer isolation and a clean VM for each run of a pipeline.
If possible, use Microsoft-hosted pools rather than self-hosted pools.

## Separate agents for each project

An agent can be bound to only one pool.
You might want to share agents across projects by sharing the pool with multiple projects.
In other words, multiple projects might run jobs on the same agent, one after another.
Although this practice saves infrastructure costs, it can allow lateral movement.

To eliminate that form of lateral movement and to prevent one project from "poisoning" an agent for another project, keep separate agent pools with separate agents for each project.

## Use low-privileged accounts to run agents

It's tempting but dangerous to run the agent under an identity that can directly access Azure DevOps resources.
This problematic setup is common in organizations that use Azure Active Directory (Azure AD).
If you run the agent under an identity that's backed by Azure AD, then it can directly access Azure DevOps APIs without using the job's access token.
You should instead run the agent as a nonprivileged local account such as *Network Service*.

Azure DevOps has a group that's misleadingly named *Project Collection Service Accounts*.
By inheritance, members of Project Collection Service Accounts are also members of Project Collection Administrators.
Customers sometimes run their build agents by using an identity that's backed by Azure AD and that's a member of Project Collection Service Accounts.
If adversaries run a pipeline on one of these build agents, then they can take over the entire Azure DevOps organization.

We've also seen self-hosted agents run under highly privileged accounts.
Often, these agents use privileged accounts to access secrets or production environments.
But if adversaries run a compromised pipeline on one of these build agents, then they can access those secrets.
Then the adversaries can move laterally through other systems that are accessible through those accounts.

To keep your systems secure, use the lowest-privilege account to run self-hosted agents. 
For example, use your machine account or a managed service identity.
Let Azure Pipelines manage access to secrets and environments.

## Minimize the scope of service connections

Service connections must be able to access only the resources that they require.
For instance, an Azure service connection should use Azure Resource Manager and service principals that are scoped to the resources that they need to access.
They shouldn't have broad contributor rights for the entire Azure subscription.

When you create a new Azure Resource Manager Service Connection, always select a resource group.
Ensure that your resource group contains only the VMs or resources that the build requires.
Similarly, when you configure the GitHub app, grant access only to the repositories that you want to build by using Azure Pipelines.

## Next steps

Consider a few [general recommendations](misc.md) for security.
