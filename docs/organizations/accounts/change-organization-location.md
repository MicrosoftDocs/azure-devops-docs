---
title: Find or change your VSTS organization location (region)
description: Need to find Where VSTS hosts your organization? Find your organization's default location or update your VSTS organization location (region)
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: cc4fd0d6-b24f-48ec-8b90-8e5f18e18d65
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 03/28/2018
monikerRange: 'vsts'
---

# Find or change your VSTS organization location (region)

**VSTS**

When you [create an organization](create-organization-msa-or-work-student.md), you can choose the region where VSTS hosts your
organization.  You may choose your organization's region due to locality and network latency or because you have sovereignty
requirements for data centers.  Your organization's default location is based on the closest 
[Microsoft Azure region](https://azure.microsoft.com/en-us/regions) 
where VSTS is available.

For information on region availability, see [Products available by region](https://azure.microsoft.com/en-us/global-infrastructure/services/).

To find the region where your organization is located:

[!INCLUDE [temp](../../work/_shared/new-agile-hubs-feature.md)]

# [New navigation](#tab/new-nav)

1. Sign in to your VSTS organization (```https://{yourorganization}.visualstudio.com```).
2. Choose ![gear icon](../../_img/icons/gear-icon.png), the gear Admin settings icon.

   ![Choose the gear, Admin settings icon](_img/_shared/sign-in-1.png)

3. Choose **Overview** and you will see the region listed beneath Organization information.

   ![Find region in organization settings](_img/change-organization-location/organization-settings-region.png)

# [Previous navigation](#tab/previous-nav)

1. Sign in to your VSTS organization (```https://{yourorganization}.visualstudio.com```).

2. On your organization toolbar, choose the gear icon, and then choose **Settings**: ```https://{yourorganization}.visualstudio.com/_admin/_home/settings```

3. Look under **Region**.

To change your organization region, you need to call [VSTS Support](https://visualstudio.microsoft.com/team-services/support), and 
they will coordinate changing the region with the organization owner.

