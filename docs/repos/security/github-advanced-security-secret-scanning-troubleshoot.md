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
If the repository-level secret scanning upon first enabling Advanced Security appears to be stuck after some time, attempt to disable then re-enable Advanced Security to reset the scanning operation. If re-enabling Advanced Security doesn't result in a successful operation after some time, push a new commit to your repository to reset the scan evaluation. If both of these suggestions don't result in a successful initial scan after a day, file a support ticket.

## Push protection not blocking a secret 
Ensure that the secret you are attempting to block is supported for push protection in [Supported secrets](github-advanced-security-secret-scan-patterns.md#supported-secrets). If the secret is modified in some way, the token may no longer match the original specification by the token provider. 

## No user alerts created for password
Ensure that the secret you're attempting to block is supported as a user alert in [Supported secrets](github-advanced-security-secret-scan-patterns.md#supported-secrets). If you're attempting to push a generically named secret, such as `password: password123` or `secret: password123`, secret scanning doesn't support this scenario and no alert is created nor does push protection apply.

## No user alerts created for supported pattern
Some patterns may be looking for paired credentials, so only including one part of the pattern may not trigger an alert. For more information on paired credentials, see [About secret scanning alerts](./github-advanced-security-secret-scanning#about-secret-scanning-alerts).

## Security overview reporting more critical alerts than shown at the repository-level
Security overview reports all secret alerts, including the `high confidence` provider patterns and the `other confidence` non-provider patterns. In the repository-level Advanced Security view, select the `Confidence` filter dropdown to view `Confidence: other` findings. For more information on provider versus non-provider patterns, see [Secret scanning patterns](./github-advanced-security-secret-scan-patterns.md#non-provider-patterns)
