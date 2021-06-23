---
title: Announcement of upcoming change to Azure DevOps organizations located in East Asia
titleSuffix: Azure DevOps
description: Announcement of an upcoming change to Azure DevOps organizations located in East Asia. 
ms.topic: reference
ms.technology: devops-accounts
ms.reviewer: chcomley
ms.author: rajr
ms.custom: references_regions
author: rajr
ms.date: 06/23/2021
monikerRange: 'azure-devops'
---

# Announcement of an upcoming change to Azure DevOps organizations located in East Asia

We want to let you know about of an upcoming change to Azure DevOps organizations located in East Asia. We don't expect that this change will impact your ability to access your Azure DevOps organization. As part of operating Microsoft cloud infrastructure, including physical infrastructure and connective network components, we may periodically transfer the locations within your selected geography hosting our cloud services, within the scope as outlined in our [Online Services Terms](https://www.microsoftvolumelicensing.com/DocumentSearch.aspx?Mode=3&DocumentTypeId=46). Over the next several months starting March 2021, the Azure DevOps engineering team will start migrating all Azure DevOps organizations and their related service assets within your chosen Asia Pacific geography from the East Asia region (Hong Kong) to the Southeast Asia region (Singapore).

If you would prefer to migrate your Azure DevOps organization to a different geography, please file a move request via the [Azure DevOps Virtual Support Agent](https://azuredevopsvirtualagent.azurewebsites.net/).

## More details on how Microsoft and Azure DevOps protect and manage customer data in public regions:

* [Data locations for Azure DevOps](../organizations/security/data-location.md?preserve-view=true&view=azure-devops)
* [How Microsoft categorizes data](https://www.microsoft.com/trustcenter/privacy/data-management/customer-data-definitions)
* [Data management at Microsoft](https://www.microsoft.com/trust-center/privacy/data-management)
* [Azure customer data protection](/azure/security/fundamentals/protection-customer-data)
* [Azure DevOps transferring your data details](../organizations/security/data-location.md?preserve-view=true&view=azure-devops#transferring-your-data)
* [Data Residency in Azure](https://azure.microsoft.com/global-infrastructure/data-residency/)

## Frequently Asked Questions

### Q: Is there anything I should do to prepare for the upcoming migration?
A: There is no action required on your part.

### Q: Does this migration affect the availability of my organization(s) that are moving to Southeast Asia?
A: We do not anticipate that this migration will impact the availability or performance of your organization(s) moving to Southeast Asia. 

### Q: I want to keep my organization and data within East Asia (Hong Kong) for data residency reasons. What are my options here?

A: Azure DevOps enables customers to select data locations in one out of eight geographies across the world and commits to maintaining all customer data within your selected geography. Our service may periodically transfer the locations within your selected geography hosting our cloud services, within the scope outlined in our [Online Services Terms](https://www.microsoftvolumelicensing.com/DocumentSearch.aspx?Mode=3&DocumentTypeId=46). At this stage, Azure DevOps does not offer specific Azure regions (East Asia as an example). If moving the data out of East Asia (Hong Kong) isn’t an option for you, you can choose to remove your data by deleting your Azure DevOps organization currently hosted in East Asia (Hong Kong). 

Alternatively, you can choose to move to any of the seven (7) other geographies where Azure DevOps is available. You can do this by filing a move request via the [Azure DevOps Virtual Support Agent](https://azure.microsoft.com/support/devops/).

As of Feb 2020, Azure DevOps data is available in the following eight geographies across the world:

* Australia
* Brazil
* Canada
* Asia Pacific
* Europe
* India
* United Kingdom
* United States

### Q: How do I know that the migration is complete?

A: Once the migration is complete, you'll see that the organization region (located under Organization Settings > Overview) will show up as Southeast Asia.

### Q: Does this migration impact the IP address rules I have set up in my firewall?

A: There's no impact if you're using Azure DevOps [service tags](/azure/virtual-network/service-tags-overview) over IP addresses. If you've set up firewall rules using IP addresses, then you can get the list of IP addresses for the Southeast Asia region by checking [here](../organizations/security/allow-list-ip-url.md?preserve-view=true&view=azure-devops).
