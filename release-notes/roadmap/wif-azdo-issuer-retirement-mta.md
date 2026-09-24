---
title: Workload identity federation Azure DevOps issuer retirement for multi-tenant applications
author: geekzter
ms.author: ericvan
ms.date: 07/06/2026
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Workload identity federation Azure DevOps issuer retirement for multi-tenant applications
hide_comments: true
---

# Workload identity federation Azure DevOps issuer retirement for multitenant applications

With the introduction of the [Entra issuer for workload identity federation](/azure/devops/release-notes/roadmap/2025/workload-identity-federation), new service connections are no longer created with the Azure DevOps issuer. 
We have [announced](https://devblogs.microsoft.com/devops/retirement-of-azure-devops-issuer-in-workload-identity-federation-service-connections/) retirement of the Azure DevOps issuer by July 1st, 2027 and [deprecation](/azure/devops/pipelines/release/convert-service-connections) by July 1st, 2026.

Currently, tasks that use a service connection configured to use Entra issuer don't support creating resources in multiple Entra tenants (for example, [cross-tenant peered virtual networks](/azure/virtual-network/create-peering-different-subscriptions-service-principal)) in a [single atomic operation](/azure/azure-resource-manager/management/authenticate-multi-tenant). When Microsoft closes this gap, it announces retirement of the Azure DevOps issuer and deprecates existing service connection for multitenant applications.
