---
title: TFS extensions for SharePoint Products 
description: Understand what is installed and configured with TFS extensions for SharePoint Products 
ms.prod: devops
ms.technology: devops-analytics
ms.manager: jillfra
ms.reviewer: greggboe
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
ms.date: 11/02/2017
---

# Team Foundation Server Extensions for SharePoint Products

[!INCLUDE [temp](./_shared/about-sharepoint-deprecation.md)]

The Team Foundation Server Extensions for SharePoint Products include site templates to which the process templates for TFS refer when team projects are created. You must install the extensions so that team project portals will appear and function correctly. 

Without these extensions, you cannot add a SharePoint Web application to Team Foundation Server and have SharePoint sites created automatically. No Web applications will be available for the team project collections that you create. If no Web applications are configured for your TFS deployment, your users will not be able to automatically create a team project portal when they create a team project. 

Additionally, your users in your collection will not have a Documents folder available for their team projects in Team Explorer, and they will not be able to automatically use document libraries for process guidance for the project.

> [!NOTE] 
> You can manually configure individual team projects to use SharePoint site resources even if no SharePoint Web applications are configured for TFS. For more information, see [Configure or add a project portal](configure-or-add-a-project-portal.md).

## Activating dashboard features 

When you create a team project, you have an option to include a SharePoint portal. If you choose this option, then the system activates certain dashboard features according to the process template selected. To learn more, see [Define the project portal plug-in for a process template](../../reference/process-templates/define-project-portal-plug-in.md?toc=/azure/devops/report/sharepoint-dashboards/toc.json&bc=/azure/devops/report/sharepoint-dashboards/breadcrumb/toc.json). 

## Related notes

- [Configure Team Foundation Server Extensions for SharePoint Products](/azure/devops/server/install/sharepoint/setup-remote-sharepoint?toc=/azure/devops/report/sharepoint-dashboards/toc.json&bc=/azure/devops/report/sharepoint-dashboards/breadcrumb/toc.json) 