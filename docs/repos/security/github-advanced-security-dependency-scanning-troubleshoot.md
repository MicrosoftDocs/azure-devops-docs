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
ms.date: 02/20/2025
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

## Break-glass scenario for build task

If the dependency scanning build task is blocking a successful execution of your pipeline and you need to urgently skip the build task, you can set a pipeline variable `DependencyScanning.Skip: true`.

## Dependency scanning task permissions

The dependency scanning build task uses the pipeline identity to call the Advanced Security REST APIs. By default, pipelines in the same project have access to fetch alerts. If you remove those permissions from the build service account or if you have a custom setup, for example, a pipeline hosted in a different project than the repository, grant these permissions manually.

Grant `Advanced Security: View Alerts` permission to the build service account used in your pipeline, which for project-scoped pipelines is `[Project Name] Build Service ([Organization Name])`, and for collection-scoped pipelines is `Project Collection Build Service ([Organization Name])`.

## How can I explicitly define the repository to publish dependency scanning alerts to?
1.   Use the pipeline environment variable `advancedsecurity.publish.repository.infer: true` to infer the repository to publish from the repository in the working directory.
2.   As another option, if you don't explicitly check out a repository or use an alias to check out your repository, utilize the variable `advancedsecurity.publish.repository: $[ convertToJson(resources.repositories['YourRepositoryAlias']) ]` 

For more information, check the [release notes](https://learn.microsoft.com/en-us/azure/devops/release-notes/2025/ghazdo/sprint-253-update#multi-repository-publishing-scenarios-supported-for-github-advanced-security-for-azure-devops).

## Related articles

- [Set up code scanning](github-advanced-security-code-scanning.md)
- [Set up dependency scanning](github-advanced-security-dependency-scanning.md)
- [Set up secret scanning](github-advanced-security-secret-scanning.md)
- [Learn about GitHub Advanced Security for Azure DevOps](github-advanced-security-security-overview.md)
