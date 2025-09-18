---
title: Pool creation at the Azure DevOps project level using project level permissions
author: gloridelmorales
ms.author: glmorale
ms.date: 04/21/2025
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Pool creation at the Azure DevOps project level using project level permissions
hide_comments: true
---

# Pool creation at the Azure DevOps project level using project level permissions

To create a Managed DevOps Pool, you must currently be an [Organization-level Agent pools administrator or a Project Collection Administrator in Azure DevOps](/azure/devops/managed-devops-pools/prerequisites?view=azure-devops#verify-azure-devops-permissions). We're enabling a new mode of Managed DevOps Pools creation, requiring only Project-level Agent pools administrator. Managed DevOps Pools created using Project-level Agent pools administrator will be created and enabled only for use in the designated Azure DevOps Project.