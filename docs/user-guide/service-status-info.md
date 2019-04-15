---
title: Azure DevOps Service Status Documentation
description: Description of how Azure DevOps services status is monitored and available to users
ms.prod: devops
ms.topic: article
ms.technology: devops-whitepapers
ms.assetid: 3F3BD90B-1D08-4C8F-9CDC-D4B806F65448
ms.manager: jillfra
ms.date: 09/19/2018
ms.author: ahomer
author: alexhomer1
monikerRange: 'azure-devops'
---

# Azure DevOps Service Status

## Introduction

We have a team of engineers around the world who look after the 
health of Azure DevOps 24 hours a day. Their primary goal is to ensure 
that our users are productive and successful with our service at all times. 
From time to time, like any online service, our service experiences performance 
slowdowns and stability issues. In these cases, we aim to respond quickly to 
restore the service, and also make it a top priority to communicate the incident 
status and our next steps to mitigate the issue on the
[Azure DevOps Service Status Portal](https://status.dev.azure.com).

If you are experiencing a problem with any of our Azure DevOps services, you can check the 
service health to determine if we are already working on the issue before you contact our 
support team or spend time troubleshooting. Many of the events we post here are based on our 
Customer Impact Assessment (CIA). CIA is modeled on the same telemetry we use in our 
[availability model](https://devblogs.microsoft.com/bharry/how-do-you-measure-quality-of-a-service/) 
which measures real customer representing both reliability and performance.

## Concepts 

### Severity

The severity of a service health event is based on the number of customers impacted by the issue. 
Typically, the highest severity events impact a large percentage of our customers and render some parts 
of the product completely unusable. These are represented as "Unhealthy" in the service status portal. 
Lower severity events affect the performance of a specific feature in a service but does not make the 
service broadly unavailable. These events are reflected as "Degraded" in the service status portal.

### Services in a Product Suite

[Azure DevOps](https://azure.microsoft.com/services/devops/) is a product suite of service offerings.
Refer to our [pricing and acquisition page](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
for more information on how to access different services in the suite.
The [geographic region](https://azure.microsoft.com/en-us/global-infrastructure/geographies/) is indicative of where the
user's account is hosted in the cloud and the data residency, sovereignty, compliance
and resilience requirements are honored within the geographical boundaries.

In addition to the list of specific Azure DevOps services, the matrix also displays two other 
categories: Core and Other. The Core category encompasses the set of features that are fundamental to 
all 5 services such as authentication or the web portal. The Other category is the 
list of features that complement the suite such as the [Marketplace](https://marketplace.visualstudio.com/) 
and the extensions published there.  

## Service Health Portal 

### Service Health Matrix

The service status portal provides a 2-dimensional matrix view of active events mapped to a 
given service and geography. To help clarify which specific aspects of the service are affected, 
we will communicate impact of each of these services by geographic region in the service matrix.


### Event Logs

More information on active events can be found in the form of an "event log" that will be displayed on the top 
of the service health matrix. Each log will have additional associated information in the form of the impacted service 
and geography as well as the duration of a specific event. You can click through the provided hyperlink to navigate into 
the event log which provides detailed information on the event being investigated.

The [Status history section](https://status.dev.azure.com/_history) provides a view into current active 
events as well as past events. You can also filter the logs to adjust the scope of your search into past events. 
In addition, you can use the REST API build automated alerting solutions to help you stay on top of events with Azure 
DevOps services.

You can use [the RSS feed](https://status.dev.azure.com/_rss) to subscribe and receive information in your feed reader. 

## Using REST APIs

For users who are looking to build an automated solution to monitor the infrastructure incidents, 
we will provide REST APIs to retrieve the current health status of each of the Azure DevOps services. 
Please stay tuned for more information. 

## Get Help

If you're experiencing an issue with Azure DevOps and see a corresponding event communicated on service health portal, 
you can be assured that we are working to restore normal operations of the service and you don't need to take any further 
action to notify us. However, if you do not see your issue reported on the Azure DevOps service health page, please refer 
to the resources available on [Azure DevOps support page](https://azure.microsoft.com/support/devops/). That page has 
resources to report bugs, interact with a friendly support bot, and contact our support team for additional assistance.
   
