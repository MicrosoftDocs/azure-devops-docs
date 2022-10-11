---
title: Custom variables in checks
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Custom variables in checks
hide_comments: true
---

# Custom variables in checks

With classic release management, you can pass output variables from a previous stage as part of the header to an Azure functions gate or REST API gate. The same is not possible with Azure functions or REST API checks in YAML pipelines. We will bridge this gap. A common scenario for customers is to pass some information such as a change management system ticket number into their Azure function. Without this, their Azure function or REST server has to call back into Azure DevOps in order to obtain that information from the pipeline. Besides reducing the back-and-forth traffic, this makes it easier to create Azure functions and REST API checks.
