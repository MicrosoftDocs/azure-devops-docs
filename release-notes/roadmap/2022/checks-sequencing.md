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

In YAML pipelines, all approvals and checks on a stage are executed simultaneously. For example, you will get an email notification for approval while the system is evaluating other checks. This is convenient in some cases. If you are using an approval as a placeholder to perform some manual testing, for instance, then you may want to run that in parallel to other checks. But there are also cases when you may want to seek an approval only *after* other checks have passed. You may wish to be asked for approval to deploy to a production environment as the final step *after* all other checks have passed, only if the percentage of tests that passed is below a threshold, etc. We plan to give you the ability to control the sequencing between checks and approvals to cover some common scenarios such as these.

