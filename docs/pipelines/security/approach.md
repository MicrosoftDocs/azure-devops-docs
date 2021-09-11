---
title: Plan an approach to secure your YAML pipelines
description: Apply security recommendations incrementally in your YAML pipelines. Incremental improvements add up.
ms.assetid: a506a55a-2379-4d14-a52c-f4c28abae0ec
ms.reviewer: vijayma
ms.date: 03/24/2021
monikerRange: '> azure-devops-2019'
---

# Plan how to secure your YAML pipelines

We recommend that you use an incremental approach to secure your pipelines.
Ideally, you would implement all of the guidance that we offer.
But don't be daunted by the number of recommendations.
And don't hold off making *some* improvements just because you can't make all the changes right now.

## Security recommendations depend on each other

Security recommendations have complex interdependencies.
Your security posture depends heavily on which recommendations you choose to implement.
The recommendations that you choose, in turn, depend on the concerns of your DevOps and security teams. 
They also depend on the policies and practices of your organization.

You might choose to tighten security in one critical area and accept less security but more convenience in another area.
For example, if you use [`extends` templates](templates.md#step-targets) to require all builds to run in containers, then you might not need a [separate agent pool for each project](infrastructure.md#separate-agents-for-each-project).

## Begin with a nearly empty template

A good place to start is by enforcing extension from a nearly empty template.
This way, as you start to apply security practices, you have a centralized place that already catches every pipeline.

For more information, see [Templates](templates.md).

## Next steps

After you plan your security approach, consider how your [repositories](repos.md) provide protection.
