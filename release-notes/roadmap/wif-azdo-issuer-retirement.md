---
title: Workload identity federation Azure DevOps issuer retirement
author: geekzter
ms.author: ericvan
ms.date: 11/22/2024
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Workload identity federation Azure DevOps issuer retirement
hide_comments: true
---

# Workload identity federation Azure DevOps issuer retirement

With the introduction of the [Entra issuer for workload identity federation](/azure/devops/release-notes/roadmap/2025/workload-identity-federation), new service connections are no longer created with the Azure DevOps issuer. Currently, tasks that use a service connection configured to use Entra issuer lack support to create resources in multiple Entra tenants (e.g. [cross-tenant peered virtual networks](/azure/virtual-network/create-peering-different-subscriptions-service-principal)) in a [single atomic operation](/azure/azure-resource-manager/management/authenticate-multi-tenant). Once we close this gap, we will announce retirement of the Azure DevOps issuer and deprecate existing service connection using it. The deprecation experience will facilitate conversion of existing service connections to the Entra issuer.
