---
title: Integrate third-party scanning tools with GitHub Advanced Security for Azure DevOps 
titleSuffix: Azure Repos
description: Integrate third-party scanning tools with GitHub Advanced Security for Azure DevOps.
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: how-to 
ms.custom: cross-service
ms.author: laurajiang
author: laurajjiang
monikerRange: 'azure-devops'
ms.date: 11/05/2024
---

# Integrate third-party scanning tools

[GitHub Advanced Security for Azure DevOps](configure-github-advanced-security-features.md) creates code scanning alerts in a repository using information from Static Analysis Results Interchange Format (SARIF) files. The SARIF file properties are used to populate alert information, such as the alert title, location, and description text.

You can generate SARIF files using many static analysis security testing tools, including CodeQL. The results must use SARIF version 2.1.0. For more information on SARIF, see [SASRIF tutorials](https://github.com/microsoft/sarif-tutorials).

## Upload a code scanning analysis with Azure Pipelines
To use Azure Pipelines to upload a third-party SARIF file to a repository, your pipeline will need to use the [`AdvancedSecurity-Publish`](/azure/devops/pipelines/tasks/reference/advanced-security-publish-v1) task, which is part of the tasks bundled with GitHub Advanced Security for Azure DevOps. The main input parameters to use are:
- `SarifsInputDirectory`:  configures the directory of SARIF files to be uploaded. The expected directory path is absolute.- `Category`: optionally assigns a category for results in the SARIF file. This enables you to analyze the same commit in multiple ways and review the results using the code scanning views in GitHub. For example, you can analyze using multiple tools, and in mono-repos, you can analyze different slices of the repository based on the subset of changed files.

Here is an example of an integration with the [Microsoft Security DevOps task](/azure/defender-for-cloud/azure-devops-extension) owned by the Microsoft Defender for Cloud team: 

>[!div class="tabbedCodeSnippets"]
```yaml
trigger:
- main

pool:
  vmImage: ubuntu-latest

steps:
- task: MicrosoftSecurityDevOps@1
  inputs:
    command: 'run'
    categories: 'IaC'
- task: AdvancedSecurity-Publish@1
  inputs:
    SarifsInputDirectory: '$(Build.ArtifactStagingDirectory)/.gdn/'
```

## Result fingerprint generation

If your SARIF file doesn't include `partialFingerprints`, the `AdvancedSecurity-Publish` task will calculate the `partialFingerprints` field for you and attempt to prevent duplicate alerts. Advanced Security can only create `partialFingerprints` when the repository contains both the SARIF file and the source code used in the static analysis. For more information about preventing duplicate alerts, see [Providing data to track code scanning alerts across runs](https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#providing-data-to-track-code-scanning-alerts-across-runs). 

## Validate tool results

You can check that the SARIF properties have the supported size for upload and that the file is compatible with code scanning. For more information, see [Validating your SARIF file](https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#validating-your-sarif-file).  To validate if a SARIF file conforms specifically to Advanced Security's requirements, see [SARIF validator](https://sarifweb.azurewebsites.net/Validation) and select `Azure DevOps ingestion rules`. 
