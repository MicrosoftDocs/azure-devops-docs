---
title: Automate Azure Resource Manager with workload identity service connections
description: Learn how to use automation to create a service connection in Azure Pipelines wuth workload identity.
ms.topic: conceptual
ms.author: jukullam
author: juliakm
ms.date: 12/05/2024
monikerRange: '>= azure-devops'
"recommendations": "true"
ai-usage: ai-assisted
---

# Automate Azure Resource Manager with workload identity service connections

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use automation to create Azure Resource Manager service connections with workload identity for consistency, efficiency, repeatability, and scalability in your Azure DevOps projects. By using scripts, you can guarantee that service connections are configured the same way every time, reducing the risk of human error and saving valuable time, especially when setting up multiple connections or deploying to different environments. Automation also allows for easy scaling, making it simpler to manage large-scale deployments.

Automation also helps enforce security policies and compliance requirements by making sure that service connections are created with the necessary permissions and configurations, while also serving as documentation for the setup process.

To automate the creation of a service connection that uses workload identity federation, you'll need to create objects in a specific order. 

## Create identity

#### [Managed identity](#tab/managed-identity)

#### [App registration](#tab/app-registration)

---

## Create role assignment

## Create Azure DevOps Service Connection

## Create federated identity credential

#### [Managed identity](#tab/managed-identity)

#### [App registration](#tab/app-registration)

---