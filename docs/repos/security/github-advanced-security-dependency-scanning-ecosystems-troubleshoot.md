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
ms.date: 10/24/2024
---
## Troubleshooting dependency scanning 

Learn how to troubleshoot dependency scanning issues in GitHub Advanced Security for Azure DevOps.

### Dependency scanning not identifying any components
If the dependency scanning task is completing without flagging any components and failing to generate alerts for components with known vulnerabilities, ensure that you at have a package restore step prior to the `AdvancedSecurity-Dependency-Scanning@1` task. 

For example, for a C# (.NET Core) project, here is a sample YAML snippet: 

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

For a JavaScript project, here is a sample YAML snippet:
>[!div class="tabbedCodeSnippets"]
```yaml
- task: Npm@1
  displayName: 'npm install'
  inputs:
    command: 'install'
    workingDir: '$(System.DefaultWorkingDirectory)'

- task: AdvancedSecurity-Dependency-Scanning@1
```

### Dependency scanning not picking up new vulnerabilities 

If you are running a new build but not seeing new vulnerabilities as expected, ensure that the build is run with a new commit.

### Dependency scanning task timeout 

The default time that the dependency scanning task runs before timing out is 300 seconds, or 5 minutes. If the task is timing out prior to completion, you can set a pipeline variable `DependencyScanning.Timeout`, which expects an integer representing seconds, such as `DependencyScanning.Timeout: 600`. Anything under the default timeout of 300 seconds has no effect. 

To use this variable, add `DependencyScanning.Timeout` as a pipeline variable: 

>[!div class="tabbedCodeSnippets"]
```yaml
- task: AdvancedSecurity-Dependency-Scanning@1
- env:
    DependencyScanning.Timeout: 600
```

### Break-glass scenario for build task

If the dependency scanning build task is blocking a successful execution of your pipeline and you need to urgently skip the build task, you can set a pipeline variable `DependencyScanning.Skip: true`.

### Dependency scanning task permissions

The dependency scanning build task uses the pipeline identity to call the Advanced Security REST APIs. By default, pipelines in the same project have access to fetch alerts. If you remove those permissions from the build service account or if you have a custom setup (for example, a pipeline hosted in a different project than the repository), you must grant these permissions manually.

Grant `Advanced Security: View Alerts` permission to the build service account used in your pipeline, which for project-scoped pipelines is `[Project Name] Build Service ([Organization Name])`, and for collection-scoped pipelines is `Project Collection Build Service ([Organization Name])`.
