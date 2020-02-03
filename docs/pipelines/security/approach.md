---
title: Approach to securing YAML pipelines
description: Incremental improvements add up.
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: a506a55a-2379-4d14-a52c-f4c28abae0ec
ms.manager: mijacobs
ms.author: jukullam
ms.reviewer: macoope
ms.date: 2/04/2020
monikerRange: '> azure-devops-2019'
---

# Approach to securing YAML pipelines

We recommend an incremental approach to securing your pipelines.
Ideally you would implement all of the guidance we offer.
But don't be daunted by the number of recommendations.
And certainly, don't hold off making some improvements, even if you can't make all the changes at once.

## Recommendations depend on each other

Security recommendations have complex interdependencies.
Your precise security posture will depend heavily on which recommendations you choose to implement.
That in turn depends on the particular concerns of your DevOps team, your security team, and the policies & practices of your organization.

You may choose to tighten up security in a critical area while accepting more convenience for another area.
For example, if you use [`extends` templates](templates.md#step-targets) to enforce that all builds run in containers, you may not need a [separate agent pool per project](infrastructure.md#separate-agents-for-each-project).

## Begin with an (almost) empty template

A good place to start is by enforcing extension from a nearly-empty template.
This way, as you start to implement security practices, you have a centralized place that already catches every pipeline.
See the topic on [templates](templates.md) for details.

Once you've planned your approach, start looking at [project structure](projects.md).
