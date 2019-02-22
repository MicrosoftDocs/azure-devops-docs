---
title: Dashboards and Widgets Overview | REST API Reference for Team Foundation Server 
description: Work with dashboards and widgets programmatically using the REST APIs for Visual Studio Online.
ms.assetid: 4F24B9FE-28BC-42E4-A07D-B0B34B895812
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Dashboards

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]


**Team Services**

[!INCLUDE [temp](../_data/disclaimer.md)]

[!INCLUDE [API_version](../_data/version3-preview2.md)]

Each team in VS Team Services can have one or more dashboards. Each dashboard contains one or more widgets.
Each team in Team Services can have one or more dashboards. Each dashboard is made up of one or more widgets.
 

 * [Dashboards](./dashboards.md)
 * [Widgets](./widgets.md)

## Data versioning
<a name="dataversioning" />

The rest APIs have multi-user concurrency support for a list of widgets and for each widget, separately. This prevents one user of the API from overwriting changes of another user.

Lists of widgets are versioned using the eTag header in the list APIs. You must retrieve current eTag, and then provide that same eTag when updating the list.

The widget contract also contains the eTag property and works same way. This versions the settings of a single widget. This version is separate from the list version and you must provide it when updating a single widget.

## Common tasks


### Create a new dashboard

[Add a team dashboard](./dashboards.md#addingadashboardtotheteam).

### Add a new widget to a dashboard

[Add](./widgets.md#AddNewWidget) or [delete](./widgets.md#DeleteWidget) a widget from a given dashboard.
