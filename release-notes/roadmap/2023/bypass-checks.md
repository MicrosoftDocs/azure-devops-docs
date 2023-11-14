---
title: Bypassing approvals and checks
author: silviuandrica
ms.author: sandrica
ms.date: 11/8/2023
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Bypassing approvals and checks
hide_comments: true
---

# Bypassing approvals and checks

In YAML pipelines, a stage can't run before all approvals and checks pass. 
This requirement makes it difficult to do hotfix deployments, because one or more checks aren't passing. 
For example, a Business Hours check forces you to do deployments during the night, but your hotfix deployment must happen during business hours.
We plan to give you the ability to bypass running checks and approvals, to cover some common scenarios such as the previous one.
