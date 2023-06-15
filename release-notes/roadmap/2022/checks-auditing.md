---
title: Auditing for checks
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Auditing for checks
hide_comments: true
---

# Auditing for checks

Since checks are critical for production deployments, their passing or failing must be included in the audit logs as evidence for compliance. Many of the events related to checks are already present in audit logs, but some are not. For instance, when an approval check on a pipeline run is reassigned to a different approver, that information is not audited. We will go through various scenarios related to checks and ensure that all the information needed for compliance is present in the audit logs.