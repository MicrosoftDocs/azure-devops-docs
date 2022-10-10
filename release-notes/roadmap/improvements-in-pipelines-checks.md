---
title: Improvements in Pipelines checks
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Improvements in Pipelines checks
hide_comments: true
---

# Improvements in Pipelines checks

Checks are a key building block in multi-stage YAML pipelines. Customers using YAML pipelines for CD rely on checks to safely promote builds from one environment to another. Given their importance in CD, we will make various improvements to checks:

- First, we will improve the scalability of checks. Some of our large customers run several thousands of checks every day by invoking their custom REST APIs and Azure functions. We will encourage customers to implement an asynchronous interaction for these checks thereby reducing the overall number of calls made between Azure DevOps and customer's external systems.

- Customers moving from classic release management to YAML pipelines find a few deficiencies with checks - Checks are not extensible. One cannot pass custom variables into checks. One cannot customize whether approvals are sought after running the checks or before. We will plug some of these gaps and help customers move from classic release management into YAML CD pipelines.