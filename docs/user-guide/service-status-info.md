---
title: Service Status - Healthy, Degraded, Advisory
titleSuffix: Azure DevOps 
description: Understand how Azure DevOps Services status is monitored and available to users, and check if the state of your service is healthy, degraded, or under advisory.
ms.topic: concept-article
ms.subservice: azure-devops-organizations
ms.assetid: 3F3BD90B-1D08-4C8F-9CDC-D4B806F65448
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 07/21/2025
#customer intent: As an Azure DevOps developer, I want to understand how to check the current status of Azure DevOps Services, so I can know the status of my enrolled services. 
---

# Azure DevOps Services status

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

The global team of engineers at Microsoft work 24/7 to ensure customers remain productive and successful with Azure DevOps Services. The team responds quickly during performance slowdowns and stability issues. The top priority is to communicate any incident status and mitigate the issue. You can check the current status of any Azure DevOps service through the [Azure DevOps Services status portal](https://status.dev.azure.com).

The Microsoft Customer Impact Assessment (CIA) is modeled after the company availability model, which measures real customer experiences representing both reliability and performance. Many of the posted events are based on the CIA.

## Services health matrix

[Azure DevOps](https://azure.microsoft.com/products/devops/) is a product suite of service offerings. The [service geography](https://azure.microsoft.com/explore/global-infrastructure/geographies/) indicates where an organization is hosted in the cloud. The data residency, sovereignty, compliance,
and resilience requirements are honored within the geographical boundaries. Microsoft communicates the impact of each service by geography in the service matrix. This approach helps to clarify which specific aspects of the service are affected.

The [status portal](https://status.dev.azure.com) provides a two-dimensional matrix view of active events mapped to a given service and geography. In addition to the suite of **Azure DevOps Services**, it displays the following items:

- **Core services**: Encompass the set of fundamental features for all five services, such as authentication or the web portal.

- **Other services**: Corresponds to features that complement the suite, such as extensions.

## Service health indicators 

The Azure DevOps Services status portal displays indicators that reflect the severity of a service health event, based on the number of customers affected by the issue. The four possible indicators include _Healthy_, _Degraded_, _Unhealthy_, and _Advisory_:

:::image type="content" source="media/services-status/status-indicators.png" border="false" alt-text="Screenshot of the Service status indicators for Azure DevOps in the status portal."::: 

The highest severity events affect a large percentage of Microsoft customers and render some parts of the product unusable.

## Service status and event logs

You can access detailed information on active and past events on the [Status history page](https://status.dev.azure.com/_history). Each event log contains associated information, such as the impacted service, geography, and event duration. Filter the logs to adjust the scope of your search into past events. Use the REST API to build automated alerting solutions to stay alert regarding events.

## When and how to report availability issues 

If you see an issue reported on the Azure DevOps Services health page, the team is already working to restore normal operations. If your issue isn't reported, you can ask a question through the [Azure DevOps Services virtual agent](provide-feedback.md). For issues not related to availability, refer to the [Developer Community portal](https://developercommunity.visualstudio.com/AzureDevOps/report).

## RSS feed

Subscribe to [the RSS feed](https://status.dev.azure.com/_rss) to receive updates in your feed reader. 

## Use REST APIs to build automated solutions

The [Azure Status REST API](/rest/api/azure/devops/status) can retrieve the current health status of each of the Azure DevOps Services. You can use it to build an automated solution to monitor the infrastructure incidents.  

[!INCLUDE [rest-api-docs-rollout](../includes/rest-api-docs-rollout.md)] 

## Related content

- [Blog post: How do you measure quality of a service?](https://devblogs.microsoft.com/bharry/how-do-you-measure-quality-of-a-service/)
- [Azure service geographies](https://azure.microsoft.com/explore/global-infrastructure/geographies/)
- [Azure Status REST API](/rest/api/azure/devops/status)
