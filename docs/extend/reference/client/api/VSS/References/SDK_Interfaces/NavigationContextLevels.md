---
title: VSS/References/SDK.Interfaces NavigationContextLevels API | Extensions for Azure DevOps Services
description: flags to show which tokens of the navigation context are present in the current request url. the request url&#x27;s context part are formed like http://server:port[/{collection}[/{project}[/{team}]]][/_admin]/_{controller}/{action} The tokens {collection}, {project} and {team} are navigation level tokens whereas _admin segment is a switch to show admin areas of the site.
ms.assetid: 01705247-4515-7dae-2571-e59459b2a804
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: article
monikerRange: '>= tfs-2017'
ms.date: 08/04/2016
---

# NavigationContextLevels

Defined in vss.d.ts

### Values

* `None` 

* `Deployment` Root level in Azure.

* `Application` Root level in on premises. Neither of {collection}, {project} and {team} tokens have information

* `Collection` Flag to show {collection} token has information.

* `Project` Flag to show {project} token has information.

* `Team` Flag to show {team} token has information.

* `ApplicationAll` Sugar for all application levels.

* `All` Sugar for all levels

