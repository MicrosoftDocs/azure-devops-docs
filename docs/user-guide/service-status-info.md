---
title: Service status 
titleSuffix: Azure DevOps 
description: Understand how Azure DevOps Services status is monitored and available to users. 
ms.topic: conceptual
ms.subservice: azure-devops-organizations
ms.assetid: 3F3BD90B-1D08-4C8F-9CDC-D4B806F65448
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 07/23/2024
---

# Azure DevOps Services status

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Our team of engineers around the world work 24/7 to ensure that our customers are always productive and successful with our service. We respond quickly during performance slowdowns and stability issues. Our top priority is to communicate the incident status and our next steps to mitigate the issue. Check the status of our services through the [Azure DevOps Services status API](/rest/api/azure/devops/status).

Our Customer Impact Assessment (CIA) is modeled after our availability model, which measures real customer experiences representing both reliability and performance. Many of the events we post are based on the CIA.

## Services health matrix

[Azure DevOps](https://azure.microsoft.com/services/devops/) is a product suite of service offerings. The [geography](https://azure.microsoft.com/global-infrastructure/geographies/) indicates where an organization is hosted in the cloud. The data residency, sovereignty, compliance,
and resilience requirements are honored within the geographical boundaries. To help clarify which specific aspects of the service are affected, we communicate impact of each of these services by geography in the service matrix. 

The [status portal](https://status.dev.azure.com) provides a two-dimensional matrix view of active events mapped to a given service and geography. In addition to the suite of **Azure DevOps Services**, it displays the following items:
- **Core services**: Encompass the set of features that are fundamental to all five services, such as authentication or the web portal
- **Other services**: Correspond to features that complement the suite, such as extensions

## Service health indicators 

The Azure DevOps Services status portal displays indicators that reflect the severity of a service health event, based on the number of customers affected by the issue. The highest severity events affect a large percentage of our customers and render some parts of the product unusable.
 
:::image type="content" source="media/services-status/status-indicators.png" alt-text="Service status indicators"::: 

The Azure DevOps Services status portal displays four indicators that reflect the severity of a service health event: Healthy, Degraded, Unhealthy, and Advisory. The highest severity events affect a large percentage of our customers and render some parts of the product unusable.

## Service status and event logs

Access detailed information on active and past events from the [Status history page](https://status.dev.azure.com/_history). Each event log contains associated information such as the impacted service, geography, and event duration. You can filter the logs to adjust the scope of your search into past events. Additionally, you can use the REST API to build automated alerting solutions to stay on top of events.

## When and how to report availability issues 

If you see an issue reported on the Azure DevOps Services health page, we’re already working to restore normal operations. If your issue isn't reported, you can ask a question through the [Azure DevOps Services virtual support agent](https://azure.microsoft.com/support/devops/). For issues not related to availability, refer to our [Developer Community portal](https://developercommunity.visualstudio.com/report?space=21&entry=problem).

## RSS feed

Subscribe to [the RSS feed](https://status.dev.azure.com/_rss) to receive updates in your feed reader. 

## Use REST APIs to build automated solutions

The [Azure Resource health REST API](/rest/api/resourcehealth/) can retrieve the current health status of each of the Azure DevOps Services. You can use it to build an automated solution to [monitor the infrastructure incidents](/azure/service-health/service-health-overview).  

[!INCLUDE [rest-api-docs-rollout](../includes/rest-api-docs-rollout.md)] 

## Related articles

- [Azure Service Health overview](/azure/service-health/service-health-overview)  
- [Blog post: How do you measure quality of a service?](https://devblogs.microsoft.com/bharry/how-do-you-measure-quality-of-a-service/) 
