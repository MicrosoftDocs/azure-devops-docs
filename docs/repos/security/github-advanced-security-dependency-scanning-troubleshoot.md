---
title: Troubleshooting dependency scanning for GitHub Advanced Security for Azure DevOps 
titleSuffix: Azure Repos
description: Troubleshooting dependency scanning for GitHub Advanced Security for Azure DevOps
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: how-to 
ms.custom: cross-service
ms.author: laurajiang
author: laurajjiang
monikerRange: 'azure-devops'
ms.date: 04/16/2025
---

# Troubleshoot dependency scanning 

Learn how to troubleshoot dependency scanning issues in GitHub Advanced Security for Azure DevOps.

## Prerequisites

[!INCLUDE [github-advanced-security-prerequisites](includes/github-advanced-security-prerequisites.md)]

## Dependency scanning not identifying any components
If the dependency scanning task is completing without flagging any components and failing to generate alerts for components with known vulnerabilities, ensure that you at have a package restore step before the `AdvancedSecurity-Dependency-Scanning@1` task. 

For example, for a C# (.NET Core) project, here's a sample YAML snippet: 

>[!div class="tabbedCodeSnippets"]
```yaml
- task: DotNetCoreCLI@2
  displayName: 'Restore NuGet packages'
  inputs:
    command: 'restore'
    projects: '**/*.csproj'

    # If you are using a private package feed such as Azure Artifacts, you will need additional variables.
    # For more information, see https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2?view=azure-pipelines 
    feedsToUse: 'select'
    ...

- task: AdvancedSecurity-Dependency-Scanning@1
```

For a JavaScript project, here's a sample YAML snippet:
>[!div class="tabbedCodeSnippets"]
```yaml
- task: Npm@1
  displayName: 'npm install'
  inputs:
    command: 'install'
    workingDir: '$(System.DefaultWorkingDirectory)'

- task: AdvancedSecurity-Dependency-Scanning@1
```

## Dependency scanning task time-out 

The default time that the dependency scanning task runs before timing out is 300 seconds, or 5 minutes. If the task is timing out before completion, you can set a pipeline variable `DependencyScanning.Timeout`, which expects an integer representing seconds, such as `DependencyScanning.Timeout: 600`. Anything under the default time-out of 300 seconds has no effect. 

To use this variable, add `DependencyScanning.Timeout` as a pipeline variable: 

>[!div class="tabbedCodeSnippets"]
```yaml
- task: AdvancedSecurity-Dependency-Scanning@1
  env:
    DependencyScanning.Timeout: 600
```

## Adjusting your scanning directory

By default, the dependency scanning task will process the `Agent.BuildDirectory` directory. If you want to scope your scan to a specific folder, you can set a pipeline variable `DependencyScanning.SourcePath` to any directory file path in the build agent that you want to analyze. Multiple dependency scanning task executions in the same pipeline job are not supported. If the scan path is scoped to subdirectory, you cannot re-add the task to scan a different directory.

 >[!div class="tabbedCodeSnippets"]
```yaml
- task: AdvancedSecurity-Dependency-Scanning@1
  env:
    DependencyScanning.SourcePath: scan/code/path
```

## Dependency scanning publishing results to the unintended repository 

If you have a pipeline definition housed in one repository and the source code to be scanned by GitHub Advanced Security was in another, results may be processed and submitted to the incorrect repository, publishing to the repository containing the pipeline definition rather than the source code repository.

To enable intended result routing, set the pipeline environment variable `advancedsecurity.publish.repository.infer: true` to infer the repository to publish from the repository in the working directory.

Alternatively, if you don't explicitly check out a repository or use an alias to check out your repository, utilize the variable `advancedsecurity.publish.repository: $[ convertToJson(resources.repositories['YourRepositoryAlias']) ]` instead.

>[!div class="tabbedCodeSnippets"]
```yaml
trigger:
  - main

resources:
  repositories:
    # PipelineRepo: The repository containing the pipeline definition.
    # This is optional and only needed if you plan to reference files or scripts from this repo.
    - repository: PipelineRepo
      type: git
      name: DevOpsPipelineRepo
      ref: refs/heads/main
      trigger:
        - main
    # SourceRepo: The repository where scanning and publishing will occur.
    - repository: SourceRepo
      type: git
      name: code-to-analyze-repo
      ref: refs/heads/main
      trigger:
        - main

jobs:
  - job: "DependencyScan"
    displayName: "Dependency Scanning with Inferred Publishing"
    variables:
      # Enable repository inference
      advancedsecurity.publish.repository.infer: true
    steps:
      # Checkout the SourceRepo
      - checkout: SourceRepo

      # Perform Dependency Scanning
      - task: AdvancedSecurity-Dependency-Scanning@1
        displayName: "Analyze Dependencies for Vulnerabilities"
```

## Missing dependency scanning pull request annotations when adjusting where results are published 

If you are using either the `advancedsecurity.publish.repository.infer` or defining an alternative `advancedsecurity.publish.repository`, you may need to set `DependencyScanning.SourcePath: $(System.DefaultWorkingDirectory)` so that file paths are determined accurately for the pull request annotation to appear as expected. 

 >[!div class="tabbedCodeSnippets"]
```yaml
- task: AdvancedSecurity-Dependency-Scanning@1
  env:
    DependencyScanning.SourcePath: $(System.DefaultWorkingDirectory)
```

## Break-glass scenario for build task

If the dependency scanning build task is blocking a successful execution of your pipeline and you need to urgently skip the build task, you can set a pipeline variable `DependencyScanning.Skip: true`.

## Dependency scanning task permissions

The dependency scanning build task uses the pipeline identity to call the Advanced Security REST APIs. By default, pipelines in the same project have access to fetch alerts. If you remove those permissions from the build service account or if you have a custom setup, for example, a pipeline hosted in a different project than the repository, grant these permissions manually.

Grant `Advanced Security: View Alerts` permission to the build service account used in your pipeline, which for project-scoped pipelines is `[Project Name] Build Service ([Organization Name])`, and for collection-scoped pipelines is `Project Collection Build Service ([Organization Name])`.

## Related articles

- [Set up code scanning](github-advanced-security-code-scanning.md)
- [Set up dependency scanning](github-advanced-security-dependency-scanning.md)
- [Set up secret scanning](github-advanced-security-secret-scanning.md)
- [Learn about GitHub Advanced Security for Azure DevOps](github-advanced-security-security-overview.md)
