---
title: Dependabot on Azure DevOps
author: ncouraud
ms.author: nicour
ms.date: 04/22/2024
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Dependabot Security Updates are available on Azure DevOps as a part of Advanced Security
hide_comments: true
---

# Bringing Dependabot security updates to Advanced Security dependency alerts

We are bringing the power of Dependabot security updates to GitHub Advanced Security in Azure DevOps. This will allow Advanced Security users to enable the automatic creation of pull requests for dependency vulnerability detections.

Dependabot security updates will make it easier for you to fix vulnerable dependencies in your repository. Once you enable this feature, when a Dependabot alert is raised for a vulnerable dependency in your repository, Dependabot automatically tries to fix it.

Dependabot will check whether it's possible to upgrade the vulnerable dependency to a fixed version without disrupting the dependency graph for the repository. Then Dependabot will raise a pull request to update the dependency to the minimum version that includes the patch and links the pull request to the Dependency Scanning alert.
