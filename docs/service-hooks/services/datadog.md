---
ms.subservice: azure-devops-service-hooks
ms.topic: conceptual
title: Create a service hook for Azure DevOps Services and Azure DevOps Server with Datadog.
description: Use Datadog with your Azure DevOps Services organization
ms.assetid: 7472f06c-11f3-4603-953c-9a0de5abe29d
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.date: 06/25/2025
---
# Create a service hook for Azure DevOps with Datadog 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

You can use Azure DevOps service hooks to create events and metrics in Datadog in response to events in Azure DevOps. In Datadog, you can use these metrics and events to create dashboards, troubleshoot issues, and create monitors to alert you to critical issues. Datadog accepts all Azure DevOps event types.

> [!IMPORTANT]
> The Datadog feature might not be turned on by default for Azure DevOps Server 2020, which is a known issue. Until it's resolved, you can use the following SQL command in your **Tfs_Configuration** database to turn on the feature:
>
> `exec prc_SetRegistryValue 1, '#\FeatureAvailability\Entries\ServiceHooks.Consumers.datadog\AvailabilityState\', 1`

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| - Member of the [Project Collection Administrators group](../../organizations/security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.<br>- **Edit subscriptions** and **View subscriptions** permissions set to **Allow**. By default, only project administrators have these permissions. To grant the permissions to other users, you can use the command-line tool or the [Security](/rest/api/azure/devops/security/?view=azure-devops-rest-6.0&preserve-view=true) REST API.|
|**Tools**|[Datadog](https://aka.ms/AzureDevOpsDataDog). In the Datadog application, go to [Integrations > API](https://aka.ms/AzureDevOpsDataDogAPI), create a new key or select an existing one, and then copy the key to your clipboard.   |

## Start sending Azure DevOps events to Datadog

To send Azure DevOps events to Datadog, you set up a subscription for each type of event.

### Create a subscription for an event

1. Go to your Azure DevOps project, select **Project settings**, and then select **Service hooks**. Alternately, go to https://{organization-name}/{project-name}/_settings/serviceHooks`.

1. Select **Create subscription**.

   :::image type="content" source="../media/azure-devops-create-subscription.png" alt-text="Screenshot of the Service Hooks page of an Azure DevOps project. The Create subscription button is highlighted.":::

1. In the list of services, select **Datadog**, and then select **Next**.

   :::image type="content" source="../media/select-datadog.png" alt-text="Screenshot of the Service page in the New service hooks subscription wizard. In the service list, Datadog is highlighted. Next is also highlighted.":::

1. Select an event to trigger on, configure any filters that you want to use, and then select **Next**.

   :::image type="content" source="../media/datadog-trigger-event.png" alt-text="Screenshot of the Trigger page in the New service hooks subscription wizard. The event list, two filters, and the Next button are highlighted.":::

1. Configure the action to perform when the event happens:
   - Under **Datadog API Key**, enter your Datadog API key.
   - Under **Datadog Account Type**, select your account type.

1. To verify that Azure DevOps can use the provided configuration and successfully create a subscription, select **Test**.

1. To create the subscription, select **Finish**.

   :::image type="content" source="../media/datadog-api-key-account-type-selection.png" alt-text="Screenshot of the Action page in the New service hooks subscription wizard, with a key and an account type visible and Test and Finish highlighted.":::

### Add subscriptions for other events

Repeat the steps in [Create a subscription for an event](#create-a-subscription-for-an-event) for each event type you want to send to Datadog. Datadog accepts and encourages users to send all event types.

### Use your data in Datadog

As events occur and their data and metrics start to flow into Datadog, you can set up dashboards and monitors. To get started, go to [Datadog](https://app.datadoghq.com/account/login).

## FAQs

### Q: Can I create service hook subscriptions programmatically?

A: Yes. For more information, see [Create a service hook subscription programmatically](../create-subscription.md). Your Datadog account type determines the endpoint that your subscription should submit requests to. Use one of the following endpoints:

| Account type | Endpoint |
| --- | --- |
| US | `https://app.datadoghq.com/intake/webhook/azuredevops?api_key=<API-key>` |
| EU | `https://app.datadoghq.eu/intake/webhook/azuredevops?api_key=<API-key>` |
| US3 | `https://us3.datadoghq.com/intake/webhook/azuredevops?api_key=<API-key>` |
| US5 | `https://us5.datadoghq.com/intake/webhook/azuredevops?api_key=<API-key>` |
| AP1 | `https://ap1.datadoghq.com/intake/webhook/azuredevops?api_key=<API-key>` |
| Gov | `https://app.ddog-gov.com/intake/webhook/azuredevops?api_key=<API-key>` |

### Q: How can I use these events in Datadog?

A: Azure DevOps events that are sent to Datadog are useful for creating dashboards, setting up monitors, and finding correlations during troubleshooting. You can also use them to get insights into how your developer operations processes affect application performance. 

### Q: What event types can I send to Datadog?

A: Datadog accepts all event types.

### Q: Can I get more general information about Datadog?

A: Yes, see [datadoghq.com](https://datadoghq.com).
