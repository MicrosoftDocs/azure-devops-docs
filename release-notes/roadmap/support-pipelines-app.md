---
title: Support Pipelines App with GitHub Enterprise
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Support Pipelines App with GitHub Enterprise
hide_comments: true
---

# Support Pipelines App with GitHub Enterprise

The integration between Azure Pipelines and GitHub is facilitated by a [GitHub App](https://github.com/marketplace/azure-pipelines). This app makes it easy to set up pipelines for a GitHub repository and to deliver events (CI, PR, Comment, etc) from GitHub to Azure Pipelines. The app also enhances the security of pull requests using [comment triggers](https://github.com/marketplace/azure-pipelines).

However, this app does not work when using Azure Pipelines with GitHub Enterprise. The goal of this work is to fix that.