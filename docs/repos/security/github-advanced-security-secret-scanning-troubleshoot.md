---
title: Troubleshoot secret scanning for GitHub Advanced Security for Azure DevOps 
titleSuffix: Azure Repos
description: Troubleshoot secret scanning for GitHub Advanced Security for Azure DevOps.
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: how-to 
ms.custom: cross-service
ms.author: laurajiang
author: laurajjiang
monikerRange: 'azure-devops'
ms.date: 10/18/2024
---

# Troubleshoot secret scanning 

Learn how to troubleshoot common issues with GitHub Advanced Security for Azure DevOps' secret scanning feature.

## Secret scanning repository scanning doesn't complete 
If the repository-level secret scanning upon first enabling Advanced Security appears to be stuck after some time, attempt to disable then re-enable Advanced Security to reset the scanning operation.

## Push protection not blocking a secret 
Ensure that the secret you are attempting to block is supported for push protection in [Supported secrets](github-advanced-security-secret-scan-patterns.md#supported-secrets). 

## No repository alerts created for password
Ensure that the secret you are attempting to block is supported as a user alert in [Supported secrets](github-advanced-security-secret-scan-patterns.md#supported-secrets). If you are attempting to push a generically named secret, such as `password: password123` or `secret: password123`, secret scanning does not support this scenario and no alert is created nor does push protection apply.
