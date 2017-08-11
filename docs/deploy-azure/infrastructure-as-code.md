---
title: Manage infrastructure as code | VSTS Tutorial
description: Manage infrastructure as code along with your application code
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

# Manage infrastructure as code

Many teams find that they want to leverage the power and manageability of code for not only their app, but also for their infrastructure. When you implement CI/CD in VSTS and deploy to Azure, you can manage the scripts that deploy your services alongside your application code in version control. You can then deploy your app and your infrastructure in a unified, manageable process.

In this tutorial, you learn about:

> [!div class="checklist"]
> * Checking-in a template to deploy an Azure resource group
> * Extending CI/CD to deploy the template and app
> * Pushing and deploying a change to the template
