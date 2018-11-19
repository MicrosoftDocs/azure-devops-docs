---
title: Discontinue SharePoint integration
description: Discontinue TFS 2017 and earlier versions SharePoint integration with Team Foundation Server
titleSuffix: TFS
ms.prod: devops
ms.technology: devops-analytics
ms.topic: overview
ms.manager: abjork
ms.author: greggboe
monikerRange: '>=tfs-2013 <= tfs-2017'
ms.date: 09/28/2017
---

# Discontinue SharePoint integration: TFS 2017 and earlier versions

[!INCLUDE [temp](../../_shared/tfs-sharepoint-version.md)]

Starting with TFS 2018, we will no longer offer the TFS Extension for SharePoint.  Additionally, we have no plans to go back to TFS 2017 and add support for installing the TFS Extension for SharePoint on SharePoint 2016. Older versions of TFS (TFS 2017 and before) will continue to work with their supported versions of SharePoint.

## Why are we doing this?

The older TFS/SharePoint integration required the TFS Extension for SharePoint to be installed and running on the SharePoint server. It only worked when both TFS and SharePoint where installed on-prem. Both TFS and SharePoint have evolved to provide rich cloud experiences: Azure DevOps and SharePoint Online. We need an integration solution that works both on-premises and in the cloud.

We are moving away from the tightly coupled integration solution, to a loosely coupled model using public APIs and extensibility frameworks.  The existing integration simply could not be brought into the future.

As we reposition to the future, our integration story will support both Azure DevOps Services and Azure DevOps Server working with SharePoint Server and SharePoint Online. 

## What features are impacted?
 
Discontinuing support for the TFS Extension for SharePoint removes support for the following three features:
* Creation of a team project will no longer support creation of a SharePoint portal 
* The TFS Web Parts on Classic SharePoint sites 
* The Documents pane within Team Explorer 

For a detailed description and suggested replacements, read [Features removed when disabling SharePoint integration](./features-removed-when-disabling-sharepoint-integration.md)

## TFS Extension for SharePoint - Support Matrix
The following matrix shows where the TFS Extension for SharePoint is supported, and where we provide an upgrade path away from this old-style integration.

| TFS version | SharePoint 2010 | SharePoint 2013 | SharePoint 2016 |
| ---      | ---             | ---             | ---             |
| TFS 2010 | Supported       | Supported       | Not Supported   |
| TFS 2012 | Supported       | Supported       | Not Supported   | 
| TFS 2013 | Supported       | Supported       | Not Supported   |
| TFS 2015 | Supported       | Supported       | Not Supported   |
| TFS 2017 | Supported       | Supported       | See **Upgrade to SharePoint 2016** below|
| TFS 2018 | See **Upgrade to TFS 2018** below  | See **Upgrade to TFS 2018** below   | See **Upgrade to SharePoint 2016** below     |

## Upgrade to SharePoint 2016
TFS 2017 does not support installing the TFS Extension for SharePoint on SharePoint 2016. If you have a TFS 2017 server configured to integrate with SharePoint 2013, upgrading to SharePoint 2016 will encounter errors (e.g.: MissingSiteDefinition, MissingFeature, MissingWebPart)

We have created a solution that enables you to upgrade your SharePoint 2013 to SharePoint 2016. It ensures your TFS SharePoint sites display properly, while disabling the existing integration. 

For more information, read [Upgrade from SharePoint 2013 with TFS integration to SharePoint 2016](./upgrade-from-sharepoint2013-to-sharepoint-2106.md).

## Upgrade to TFS 2018
TFS 2018 does not include the TFS Extension for SharePoint. If you are upgrading from a previous version configured to integrate with SharePoint, you will need to disable the SharePoint integration after upgrade, or your TFS SharePoint sites will fail to load.

We have created a solution that disables SharePoint integration on a **SharePoint 2010 or 2013** server. It ensures your TFS SharePoint sites display properly after upgrade.

For more information, read [Disable SharePoint integration after TFS 2018 upgrade](disable-tfs-sharepoint-integration-after-tfs-2018-upgrade.md).










