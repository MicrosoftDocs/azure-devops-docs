---
title: Rerun single stage
author: silviuandrica
ms.author: sandrica
ms.date: 11/8/2023
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Rerun single stage
hide_comments: true 
---

# Rerun single stage

In YAML pipelines, you can rerun a successful stage, but it triggers all stages that depend on it to rerun as well.
One use case for rerunning a stage is to roll back to a previous version of your system.
That is, you can choose an older version of the pipeline and wish to rerun a particular stage, and only that one.
Today, you can achieve simulate rerunning a single stage by making use of environments and approvals or the `ManualValidation` task, but doing so is tedious.
We plan to give you the ability to rerun a single stage, without causing following stages to rerun too.
