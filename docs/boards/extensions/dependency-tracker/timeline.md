---
title: Dependency Tracker Timeline
description: Learn how to use the Timeline for Dependency Tracker in Azure DevOps
ms.topic: conceptual
ms.reviewer: chesing
ms.author: kaelli
author: KathrynEE
ms.date: 10/31/2019
---


# Dependency timeline

[!INCLUDE [temp](../../_shared/version-vsts-only.md)]

The Dependency Timeline feature is in Beta.  The Timeline is designed to provide clear sequencing of dependencies across months.


## Features

- Red arrows highlight when the sequencing is out of order and a predecessor is scheduled to be complete after a successor
- The left-hand colored bar designates teh state of each item
- Hover over an item to see a detailed card or double click to open an individual work item
- Right clicking of an item to reassign it to a new iteration

![Timeline](_img/Timeline.png)

In order for the timeline to function correctly Iterations must have dates assigned
