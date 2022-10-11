---
title: Sequencing approvals and checks
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Sequencing approvals and checks
hide_comments: true
---

# Sequencing approvals and checks

In YAML pipelines, all approvals and checks on a stage are executed simultaneously. In other words, you will get an email notification for approval while the system is evaluating other checks. This is convenient in some cases. For instance, if you are using an approval as a placeholder to perform some manual tasks (e.g., manual testing), then you may want to run that in parallel to other checks. However, there are also cases, when you want to seek an approval after the checks have passed. In other words, you do not want to be notified for approval if one of the other checks fails. An example of this is a production environment that requires an approval as the final step after all other checks passed. Or, a production envionment that requires an approval only if the percentage of tests that passed is below the ideal threshold. We plan to give you the ability to control the sequencing between checks and approvals to cover some common scenarios such as these.

