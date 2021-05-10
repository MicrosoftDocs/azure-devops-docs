---
title: Service status 
titleSuffix: Azure DevOps 
description: Understand how Azure DevOps Services status is monitored and available to users 
ms.topic: conceptual
ms.technology: devops-accounts 
ms.assetid: 3F3BD90B-1D08-4C8F-9CDC-D4B806F65448
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 03/15/2021
---

# Azure DevOps Services status

[!INCLUDE [temp](../includes/version-vsts-only.md)]

We have a team of engineers around the world who look after the 
health of Azure DevOps 24 hours a day. Their primary goal is to ensure 
that our customers are always productive and successful with our service. 
From time to time, like any online service, our service experiences performance 
slowdowns and stability issues. In these cases, we aim to respond quickly to 
restore the service. It's our top priority to communicate the incident 
status and our next steps to mitigate the issue. We do this through the
[Azure DevOps Services status portal](https://status.dev.azure.com).

If you're experiencing a problem with any of our Azure DevOps Services, you can check the 
service health to determine if we're already working on the issue. Many of the events we post are based on our 
Customer Impact Assessment (CIA). The CIA is modeled after our availability model 
that measures real customer experiences representing both reliability and performance.

## Services within the product suite

[Azure DevOps](https://azure.microsoft.com/services/devops/) is a product suite of service offerings. The [geographic region](https://azure.microsoft.com/global-infrastructure/geographies/) indicates where an organization is hosted in the cloud. The data residency, sovereignty, compliance,
and resilience requirements are honored within the geographical boundaries. 

In addition to the specific Azure DevOps Services, the matrix also displays two other 
categories: **Core** and **Other**. The **Core** category encompasses the set of features that are fundamental to all five services, such as authentication or the web portal. The **Other** category corresponds to features that complement the suite, such as extensions.  

For more information about pricing and acquisition, see the [pricing and acquisition page](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/).

## Service health matrix

The service status portal provides a two-dimensional matrix view of active events mapped to a 
given service and geography. To help clarify which specific aspects of the service are affected, 
we communicate impact of each of these services by geographic region in the service matrix.

## Service health indicators 

The Azure DevOps Services status portal indicates the status of Azure DevOps services according to the following indicators. These indicators reflect the severity of a service health event based on the number of customers affected by the issue. Typically, the highest severity events impact a large percentage of our customers and render some parts of the product unusable. 
 
:::image type="content" source="media/services-status/status-indicators.png" alt-text="Service status indicators"::: 

- **Healthy**: Indicates the service is broadly available. 
- **Degraded**: Indicates a lower-severity event that affects the performance of a service feature, but doesn't impact broad service availability. 
- **Unhealthy**: Indicates a high-severity event that affects the performance of a service and it's broad availability. 
- **Advisory**: Indicates that a service is under investigation to determine the  performance and availability impact. 


## Service status and event logs

You can access more information on active events from the [Status history page](https://status.dev.azure.com/_history). This page provides a view into current active events and past events. Eave event under investigation or previously investigate is logged in the form of an event log. Each log has other associated information such as the impacted service,  
geography, and event duration. Choose the provided hyperlink to view the event log, which provides detailed information on the event under investigation.

You can also filter the logs to adjust the scope of your search into past events. 
In addition, you can use the REST API build automated alerting solutions to help you stay on top of events.

## When and how to report availability issues 

If you're experiencing an issue with Azure DevOps and see a corresponding event that's communicated on the service health portal, we're already working to restore normal operations of the service. You don't need to take any further 
action to notify us. 

However, if you don't see your issue reported on the Azure DevOps Services health page, you can report your issue using 
the Report a Service Availability Issue form. Or, you can ask a question through the [Azure DevOps Services virtual support agent](https://azure.microsoft.com/support/devops/). 

For issues not related to availability, refer to our [Developer Community portal](https://developercommunity.visualstudio.com/report?space=21&entry=problem). 

## RSS feed

You can use [the RSS feed](https://status.dev.azure.com/_rss) to subscribe and receive information in your feed reader. 

## Use REST APIs to build automated solutions

The [Azure Resource health REST API](/rest/api/resourcehealth/) can retrieve the current health status of each of the Azure DevOps Services. You can use it to build an automated solution to [monitor the infrastructure incidents](/azure/service-health/service-health-overview).  

[!INCLUDE [rest-api-docs-rollout](../includes/rest-api-docs-rollout.md)] 


## Related articles

- [Azure Service Health overview](/azure/service-health/service-health-overview)  
- [Blog post: How do you measure quality of a service?](https://devblogs.microsoft.com/bharry/how-do-you-measure-quality-of-a-service/) 
