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

In YAML pipelines, you can rerun a successful stage, but it will cause all depending stages to rerun as well.
One use case for rerunning a stage is to do rollback. 
That is, you can choose an older version of the pipeline and wish to rerun a particular stage, and only that one.
Today, you can achieve this by artificially making use of environments and approvals & checks or the `ManualValidation` task, but this is tedious.
We plan to give you the ability to rerun a single stage, without causing depending stages to rerun, too.
