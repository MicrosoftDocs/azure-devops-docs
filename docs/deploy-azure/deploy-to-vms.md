---
title: Deploy to multiple VMs | VSTS Tutorial
description: Deploy your app to multiple Windows or Linux Azure VMs
services: vsts
documentationcenter: ''
author: ahomer
manager: douge
editor: ''

ms.assetid:
ms.service: vsts
ms.devlang: dotnetcore
ms.topic: hero-article
ms.tgt_pltfrm: ''
ms.workload: ''
ms.date: 07/31/2017
ms.custom: mvc
---

# Deploy to multiple VMs

In the quickstarts, you learned about how to deploy your application to a
[Windows VM](aspnet-core-to-windows-vm.md) or to a Linux VM in Azure. To scale out and avoid down time,
you can implement rolling deployments your app to multiple VMs.

In this tutorial, you learn about:

> [!div class="checklist"]
> * Creating a deployment group with multiple machines
> * Configuring deployment to the group of machines
> * Monitoring logs for each environment
