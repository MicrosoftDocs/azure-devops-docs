---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Notification overview | REST API Reference for Team Foundation Server
description: REST APIs for Team Foundation Server.
ms.assetid: 70F8A8F8-474C-4664-A26C-A5DC714E6242
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 03/13/2017
---

<!-- title begin -->
# Notification

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

<!-- title end -->
<!-- version begin -->
[!INCLUDE [API_version](../_data/version3-2-preview.md)]
<!-- version end -->

Notifications help teams stay informed about activity in their Team Services projects. With notifications, users and teams are notified when changes occur to work items, code reviews, pull requests, source control files, and builds. For example, you can get notified whenever a bug that you opened is resolved or a work item is assigned to you. The primary delivery channel for notifications today is email. [Learn more](https://aka.ms/vstsmanagenotifications) about notifications.

The Notification APIs primarily provide the ability to create and manage subscriptions. A subscription defines the conditions by which a user or team should be notified, and where notifications should be sent. A subscription can be just for you, or if you are a team admin, can be shared by everyone in the team. 

<!-- toc begin -->
## Resources

* [Event types](./EventTypes.md)
* [Subscriptions](./Subscriptions.md)
* [Contracts](./contracts.md)
<!-- toc end -->