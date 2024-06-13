---
title: Configure GitHub Advanced Security for Azure DevOps features
titleSuffix: Azure Repos
description: Enable secret, repo, code, and dependency scanning with GitHub Advanced Security for Azure DevOps
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: how-to 
ms.custom: cross-service
ms.author: laurajiang
author: laurajjiang
monikerRange: 'azure-devops'
ms.date: 10/20/2023
---

# Configure GitHub Advanced Security for Azure DevOps

GitHub Advanced Security for Azure DevOps adds GitHub Advanced Security's suite of security features to Azure Repos. 

GitHub Advanced Security for Azure includes:
* Secret Scanning push protection: check if code pushes include commits that expose secrets such as credentials  
* Secret Scanning repo scanning: scan your repository and look for exposed secrets that were committed accidentally
* Dependency Scanning – search for known vulnerabilities in open source dependencies (direct and transitive)
* Code Scanning – use CodeQL static analysis engine to identify code-level application vulnerabilities such as SQL injection and authentication bypass 

At this time, GitHub Advanced Security for Azure DevOps is only available for Azure DevOps Services and there are no plans to bring this product to Azure DevOps Server. 

[!INCLUDE [GitHub Advanced Security for Azure DevOps is different from GitHub Advanced Security.](includes/github-advanced-security.md)]

## Prerequisites

You must have permissions allocated as a member of the Project Collection Administrators group.  To add members to the Project Collection Administrators group or change a project collection-level permission see [Change project collection-level permissions](../../organizations/security/change-organization-collection-level-permissions.md).

### Extra prerequisites for self-hosted agents

If your organization uses self-hosted agents, there are more requirements: 

* Add these URLs to your Allowlist to allow for the dependency scanning task to fetch vulnerability advisory data. Learn more about [Allowed IP addresses and domain URLs](../../organizations/security/allow-list-ip-url.md). 

| Domain URL  | Description |
| ----------- | ----------- |
| `https://governance.dev.azure.com/{organization_name}` | For organizations using the dev.azure.com domain to access their DevOps instance  |
| `https://dev.azure.com/{organization_name}` | For organizations using the dev.azure.com domain to access their DevOps instance |
| `https://advsec.dev.azure.com/{organization_name}` | For organizations using the dev.azure.com domain to access their DevOps instance |
| `https://{organization_name}.governance.visualstudio.com/` | For organizations using the {organization_name}.visualstudio.com domain to access their DevOps instance   |
| `https://{organization_name}.visualstudio.com`  | For organizations using the {organization_name}.visualstudio.com domain to access their DevOps instance | 
| `https://{organization_name}.advsec.visualstudio.com/` | For organizations using the {organization_name}.visualstudio.com domain to access their DevOps instance

* Run a compatible version of the .NET runtime (currently .NET 6.0.x). If a compatible version isn't present on the agent, the dependency scanning build task downloads [.NET](https://visualstudio.microsoft.com/downloads/). 

* Install the CodeQL bundle to the agent tool cache by utilizing the setup script for your architecture, available on [GitHub](https://github.com/microsoft/GHAzDO-Resources/tree/main/src/agent-setup). These scripts require the
`$AGENT_TOOLSDIRECTORY` environment variable to be set to the location of the agent tools directory on the agent, e.g. `C:/agent/_work/_tool`. Alternatively, you may manually implement the following steps: 
    1.	Pick the latest CodeQL release bundle from [GitHub](https://github.com/github/codeql-action/releases). 
    2.	Download and unzip the bundle to the following directory inside the agent tool directory, typically located under `_work/_tool`: `./CodeQL/0.0.0-[codeql-release-bundle-tag]/x64/`. Using the current release of `v2.16.0`, the folder name would be titled `./CodeQL/0.0.0-codeql-bundle-v2.16.0/x64/`. Learn more about the [agent tool directory](https://github.com/microsoft/azure-pipelines-tool-lib/blob/master/docs/overview.md#tool-cache). 
    3.	Create an empty file titled `x64.complete` within the `./CodeQL/0.0.0-[codeql-release-bundle-tag]` folder. Using the previous example, the end file path to your `x64.complete` file should be `./CodeQL/0.0.0-codeql-bundle-v2.16.0/x64.complete`.

## Enable GitHub Advanced Security

You can enable Advanced Security at the organization, project, or repository level. To access each of the scanning tools and results, you need to first enable Advanced Security. Once you enable Advanced Security, any future pushes containing secrets to a repository with this policy enabled are blocked, and repository secret scanning happens in the background.

#### Repository-level onboarding
1. Go to your **Project settings** for your Azure DevOps project. 
1. Select **Repos** > **Repositories**. 
1. Select the repository you want to enable Advanced Security for. 
1. Select **Enable** and **Begin billing to activate Advanced Security**. A shield icon now appears in the repository view for any repository with Advanced Security enabled.  

:::image type="content" source="media/enable-github-advanced-security.png" lightbox="media/enable-github-advanced-security.png" alt-text="Screenshot of enabling GitHub Advanced Security.":::

#### Project-level onboarding
1. Go to your **Project settings** for your Azure DevOps project. 
1. Select **Repos**. 
1. Select the **Settings** tab. 
1. Select **Enable all** and you'll see an estimate for the number of active committers for your project appear. 
1. Select **Begin billing** to activate Advanced Security for every existing repository in your project. 
1. Optionally, select **Automatically enable Advanced Security for new repositories** so that any newly created repositories have Advanced Security enabled upon creation. 

:::image type="content" source="media/enable-github-advanced-security-project.png" lightbox="media/enable-github-advanced-security-project.png" alt-text="Screenshot of project-level enablement for Advanced Security.":::

#### Organization-level onboarding
1. Go to your **Organization settings** for your Azure DevOps organization. 
1. Select **Repositories**. 
1. Select **Enable all** and you'll see an estimate for the number of active committers for your organization appear. 
1. Select **Begin billing** to activate Advanced Security for every existing repository in each project in your organization. 
1. Optionally, select **Automatically enable Advanced Security for new repositories** so that any newly created projects have Advanced Security enabled upon creation. 

:::image type="content" source="media/enable-github-advanced-security-organization.png" lightbox="media/enable-github-advanced-security-organization.png" alt-text="Screenshot of org-level enablement for Advanced Security.":::

## Set up secret scanning

Secret scanning push protection and repository scanning are automatically enabled when you turn on Advanced Security. You can enable or disable secret push protection from the repository settings page. 

:::image type="content" source="media/secret-scanning-push-protection.png" lightbox="media/secret-scanning-push-protection.png" alt-text="Screenshot of enabling push protection.":::

As mentioned, secret scanning repository scanning is automatically kicked off upon enabling Advanced Security for a selected repository.

## Set up dependency scanning

Dependency scanning is a pipeline-based scanning tool. Results are aggregated per repository. It's recommended that you add the dependency scanning task to all the pipelines you'd like to be scanned. 

>[!TIP] 
> For the most accurate scanning results, be sure to add the dependency scanning task following the build steps and/or package restore step of a pipeline that builds the code you wish to scan.

#### [YAML](#tab/yaml)

Add the task Advanced Security Dependency Scanning task ([AdvancedSecurity-Dependency-Scanning@1](/azure/devops/pipelines/tasks/reference/advanced-security-dependency-scanning-v1)) directly to your YAML pipeline file or select the **Advanced Security Dependency Scanning** task from the [task assistant](../../pipelines/get-started/yaml-pipeline-editor.md#use-task-assistant).

:::image type="content" source="media/dependency-scanning-config-yaml.png" lightbox="media/dependency-scanning-config-yaml.png" alt-text="Screenshot of dependency scanning pipeline setup for YAML.":::

#### [Classic](#tab/classic)

Add the `Advanced Security Dependency Scanning` task to your pipeline. 

:::image type="content" source="media/dependency-scanning-config-classic.png" lightbox="media/dependency-scanning-config-classic.png" alt-text="Screenshot of dependency scanning pipeline setup for classic pipelines.":::


To generate alerts, run your first scan with a pipeline with the dependency scanning task included.

--- 

## Set up code scanning

Code scanning is also a pipeline-based scanning tool where results are aggregated per repository. 

>[!TIP] 
> It's recommended to add the code scanning task to a separate, cloned pipeline of your main production pipeline or create a new pipeline. This is because code scanning can be a more time-intensive build task.

#### [YAML](#tab/yaml)

Add the tasks in the following order: 
1. Advanced Security Initialize CodeQL ([AdvancedSecurity-Codeql-Init@1](/azure/devops/pipelines/tasks/reference/advanced-security-codeql-init-v1))
1. Your custom build steps
1. Advanced Security Perform CodeQL Analysis ([AdvancedSecurity-Codeql-Analyze@1](/azure/devops/pipelines/tasks/reference/advanced-security-codeql-analyze-v1))

:::image type="content" source="media/code-scanning-config-yaml-tasks.png" lightbox="media/code-scanning-config-yaml-tasks.png" alt-text="Screenshot of code scanning pipeline setup for YAML.":::

Additionally, you'll need to specify which language(s) you're analyzing in the Initialize CodeQL task. A comma separated list can be used to analyze multiple languages at once. The supported languages are `csharp, cpp, go, java, javascript, python, ruby, swift`.  

Here is an example starter pipeline:

>[!div class="tabbedCodeSnippets"]
```yaml
trigger:
  - main

pool:
  # Additional hosted image options are available: https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/hosted#software
  vmImage: ubuntu-latest

steps:

  - task: AdvancedSecurity-Codeql-Init@1
    inputs:
      languages: "java"
      # Supported languages: csharp, cpp, go, java, javascript, python, ruby, swift
      # You can customize the initialize task: https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/advanced-security-codeql-init-v1?view=azure-pipelines

#   Add your custom build steps here
# - Ensure that all code to be scanned is compiled (often using a `clean` command to ensure you are building from a clean state).
# - Disable the use of any build caching mechanisms as this can interfere with CodeQL's ability to capture all the necessary data during the build.
# - Disable the use of any distributed/multithreaded/incremental builds as CodeQL needs to monitor executions of the compiler to construct an accurate representation of the application.
# - For dependency scanning, ensure you have a package restore step for more accurate results.

# If you had a Maven app:
#   - task: Maven@4
#     inputs:
#       mavenPomFile: 'pom.xml'
#       goals: 'clean package'
#       publishJUnitResults: true
#       testResultsFiles: '**/TEST-*.xml'
#       javaHomeOption: 'JDKVersion'
#       jdkVersionOption: '1.17'
#       mavenVersionOption: 'Default'

# Or a general script:
#   - script: |
#       echo "Run, Build Application using script"
#       ./location_of_script_within_repo/buildscript.sh

  - task: AdvancedSecurity-Dependency-Scanning@1 # More details on this task: https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/advanced-security-dependency-scanning-v1?view=azure-pipelines

  - task: AdvancedSecurity-Codeql-Analyze@1 # More details on this task: https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/advanced-security-codeql-analyze-v1?view=azure-pipelines

```

> [!TIP]
> CodeQL analysis for Kotlin/Swift are currently in beta. During the beta, analysis of these languages will be less comprehensive than CodeQL analysis of others.
> Use `java` to analyze code written in Java, Kotlin or both.
> Use `javascript` to analyze code written in JavaScript, TypeScript, or both. 

If the language specified is `cpp, java, csharp` or `swift` either custom or `AutoBuild` build steps are required. For other languages, if AutoBuild is included the step completes successfully without performing any action.


#### [Classic](#tab/classic)

Add the tasks in the following order: 
1. `Advanced Security Initialize CodeQL`
1. `Advanced Security AutoBuild` (language-dependent) or replace this with your own custom build steps
1. `Advanced Security Perform CodeQL Analysis`

:::image type="content" source="media/code-scanning-config-classic-tasks.png" alt-text="Screenshot of code scanning pipeline setup for YAML." lightbox="media/code-scanning-config-classic-tasks.png" :::

Additionally, you will need to specify which language(s) you are analyzing in the Initialize CodeQL task. If the language specified is `cpp, java, csharp` or `swift,` either custom or `AutoBuild` build steps are required. For other languages, if AutoBuild is included the step completes successfully without performing any action. 

To generate alerts, run your first scan with a pipeline with the code scanning tasks included.

--- 

If, for whatever reason, you need to disable Advanced Security, any alerts and state of alerts will be retained for the next time you re-enable Advanced Security for your repository.

## Next steps

* [Code scanning alerts for GitHub Advanced Security for Azure DevOps](github-advanced-security-code-scanning.md)
* [Dependency scanning alerts for GitHub Advanced Security for Azure DevOps](github-advanced-security-dependency-scanning.md)
* [Secret scanning alerts for GitHub Advanced Security for Azure DevOps](github-advanced-security-secret-scanning.md)
* [Permissions for GitHub Advanced Security for Azure DevOps](github-advanced-security-permissions.md)
* [Billing for GitHub Advanced Security for Azure DevOps](github-advanced-security-billing.md)
