---
title: Support for multi-repository result publishing
author: laurajjiang
ms.author: laurajiang
ms.date: 02/06/2025
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Support for multi-repository result publishing
hide_comments: true
---

# Support for multi-repository result publishing

For customers who have their pipeline definition in one repository and the code being scanned by Advanced Security in another repository, the findings are always published to the repository with their pipeline definition. We’ll be making enhancements to our publishing logic for both dependencies and code scanning such that the alerts are published to the repository whose code is being scanned, also enabling proper file preview for each alert.
