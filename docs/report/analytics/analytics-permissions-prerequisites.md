---
title: Permissions and prerequisites to access Analytics
titleSuffix: Azure DevOps  
description: Understand the permissions and prerequisites to meet to access and generate reports with Analytics .
ms.custom: "analytics" 
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 08/12/2022
---

# Permissions and prerequisites to access Analytics in Azure DevOps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]
 
To work with Analytics and create reports, several prerequisites must be met as summarized in this article. 

By default, all project members are provided access to Analytics data for the projects they are members of, including members added to the project **Readers** group.  Users with **Stakeholder** access have no access to view or edit Analytics views.

## Service and feature enablement  

In general, Analytics is always on and available to members of an organization or collection to view data and create report. 

### Analytics service

::: moniker range="azure-devops"

For Azure DevOps Services, Analytics is always on. You can't disable it or pause it.  

::: moniker-end

::: moniker range=">= azure-devops-2020 < azure-devops" 
For Azure DevOps Server 2020 and later on-premises versions, Analytics is automatically installed with each project collection you create. 
::: moniker-end


::: moniker range="azure-devops-2019" 
For Azure DevOps Server 2019, you must first install Analytics on each project collection you create. 
::: moniker-end

::: moniker range="< azure-devops" 
You can pause and restart the service. When paused, no new data is added to Analytics. 

To learn more, see [Install or enable the Analytics service](../dashboards/analytics-extension.md).
::: moniker-end


### Azure DevOps services 

To exercise any Azure DevOps service, it must be enabled. No data can be captured for a service that has been disabled. Services can be enabled or disabled on a project by project basis. 

To verify that all services are enabled, see [Turn a service on or off](../../organizations/settings/set-services.md).


### Analytics views 

**Analytics views**, a hub in your web portal, provides a simplified way to specify the filter criteria for a Power BI report based on the Analytics data.  To learn more, see [What is the Analytics Service?](../powerbi/what-are-analytics-views.md) 

To access **Analytics views**, you must have it enabled. The organization owner or member of the Project Collection Administrators group can enable it for everyone in the organization. Or, each project member can enable it for themselves. 

To learn how, see [Manage or enable features](../../project/navigation/preview-features.md).


## Permissions

You set [permissions](../../report/powerbi/analytics-security.md) for the service at the project level, and for shared **Analytics views** at the object level. 

The following table summarizes the permissions available to be set and the default assignments made to the project security groups. 


|Permission|  Readers |  Contributors    |Project Administrators| 
|----------|----------|------------------|-------------------|  
|**View Analytics** |✔️|✔️|✔️|  
|**View a shared Analytics view** | |✔️|✔️|  
|**Add a private or shared Analytics view**  | |✔️|✔️|  
|**Edit and delete shared Analytics views**  | | |✔️|  
 

## Additional prerequisites 

To capture meaningful data requires performing meaningful actions on the part of software teams. 

<!--- Say more --> 

## Related articles

- [What is the Analytics service?](../powerbi/what-is-analytics.md)
- [Default permissions quick reference for Azure DevOps](../../organizations/security/permissions-access.md)

 


