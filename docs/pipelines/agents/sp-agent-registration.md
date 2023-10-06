---
title: Register an agent using a Service Principal
description: Learn how to register a self-hosted agent using a Service Principal
ms.topic: conceptual
ms.date: 09/22/2023
monikerRange: 'azure-devops'
---

# Register an agent using a Service Principal

You can register an agent using a Service Principal starting with [agent version 3.226.2](https://github.com/microsoft/azure-pipelines-agent/releases/tag/v3.226.2) by specifying **SP** as the agent authentication option.

## Grant the Service Principal access to the agent pool

Before registering an agent using a Service Principal you must have [created a Service Principal](../../integrate/get-started/authentication/service-principal-managed-identity.md) and granted it permission to access the agent pool.

1. Open a browser and navigate to the **Agent pools** tab for your Azure Pipelines organization or Azure DevOps Server or TFS server:

   [!INCLUDE [agent-pools-tab](./includes/agent-pools-tab/agent-pools-tab.md)]

1. Select the pool on the right side of the page and then click **Security**.

1. If the user account you're going to use is not shown, then get an administrator to add it. The administrator can be an agent pool administrator, an [Azure DevOps organization owner](../../organizations/accounts/faq-user-and-permissions-management.yml#find-owner), or a [TFS or Azure DevOps Server administrator](/azure/devops/server/admin/add-administrator).

   If it's a [deployment group](../release/deployment-groups/index.md) agent, the administrator can be a deployment group administrator, an [Azure DevOps organization owner](../../organizations/accounts/faq-user-and-permissions-management.yml#find-owner), or a [TFS or Azure DevOps Server administrator](/azure/devops/server/admin/add-administrator).

   You can add a user to the deployment group administrator role in the **Security** tab on the **Deployment Groups** page in **Azure Pipelines**.

> [!NOTE]
> If you see a message like this: **Sorry, we couldn't add the identity. Please try a different identity.**, you probably followed the above steps for an organization owner or TFS or Azure DevOps Server administrator. You don't need to do anything; you already have permission to administer the agent pool.

## Register the agent using the Service Principal

Download and run the agent script
