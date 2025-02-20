---
title: Troubleshoot code scanning for GitHub Advanced Security for Azure DevOps 
titleSuffix: Azure Repos
description: Troubleshoot code scanning with GitHub Advanced Security for Azure DevOps.
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: how-to 
ms.custom: cross-service
ms.author: laurajiang
author: laurajjiang
monikerRange: 'azure-devops'
ms.date: 02/20/2025
---

# Troubleshoot code scanning 

Generally, if you're encountering errors with CodeQL execution, the CodeQL CLI reports the status of each command it runs as an exit code. The exit code provides information for subsequent commands or for other tools that rely on the CodeQL CLI. For more information on exit code details, see [Exit codes](https://docs.github.com/en/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/exit-codes). 

## Prerequisites

[!INCLUDE [github-advanced-security-prerequisites](includes/github-advanced-security-prerequisites.md)]

### Error: 'database finalize' CodeQL command (32) 
This error indicates a problem with finalizing the CodeQL database creation, potentially due to extraction errors or missing build steps.

Troubleshooting steps:
1. Verify code exists and is compiled
   * For compiled languages, verify that the build process is compiling code and is happening between the `AdvancedSecurity-Codeql-Init` and the `AdvancedSecurity-Codeql-Analyze` tasks. Common build commands and required flags (such as clean no-cache/no-daemon) can be found here at [Specifying build commands](https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli/preparing-your-code-for-codeql-analysis#specifying-build-commands).
   * For interpreted languages, confirm that there's some source code for the specified language in the project.
1. Check extraction errors
   * Verify if extraction errors affect the CodeQL database's health.
   * Review the log file for extraction errors and warnings to assess overall database health.
1. Investigate overwhelming errors
   * If most files encounter extractor errors, investigate further to understand the root cause of improper extraction.
  
### Error: autobuild script (1) 
This error describes an automatic build failure, suggesting an issue with code scanning setup or configuration. 

Troubleshooting steps:
* Configure build steps
   * Remove the AutoBuild step and instead configure specific build steps for compiled languages in your pipelines.
   * Refer to setup guidelines provided in [Configure GitHub Advanced Security for Azure DevOps](configure-github-advanced-security-features.md#set-up-code-scanning).

### Error: CodeQL directories not found in agent tool cache 
This error indicates an issue with installing CodeQL for self-hosted agents. 

Troubleshooting steps: 

* Refer to setup guidelines or configuration scripts provided in [Configure GitHub Advanced Security for Azure DevOps](configure-github-advanced-security-features.md#extra-prerequisites-for-self-hosted-agents).

### Error: language pipeline variable not set
This error occurs when attempting to run CodeQL without setting the pipeline variable specifying which languages to scan.

Troubleshooting steps:

* Set language pipeline variable
   * Ensure the language pipeline variable is correctly configured. Refer to setup guidelines provided in [Configure GitHub Advanced Security for Azure DevOps](configure-github-advanced-security-features.md#set-up-code-scanning).
   * Supported languages include `csharp`, `cpp`, `go`, `java`, `javascript`, `python`, `ruby`, and `swift`.
  
### CodeQL returning no results
This section provides guidance for situations where CodeQL analysis yields no results.

Troubleshooting steps:
1. Check for detected vulnerabilities
   * Consider the possibility that your code might not have any vulnerabilities. If vulnerabilities are expected but not detected, proceed to verify further.
1. Review query suite configuration
   * Confirm the query suite that's being used and consider switching to a more comprehensive suite if necessary.
   * Alternatively, [custom query suites](github-advanced-security-code-scanning-queries.md#using-custom-queries-with-codeql) can be created for tailored analysis. 
1. Adjust permissions for viewing results
   * Ensure proper permissions, at least at the contributor level, are granted to access analysis results. For more information, see [Advanced Security permissions](./github-advanced-security-permissions.md).

### CodeQL timing out
If the `AdvancedSecurity-Codeql-Analyze@1` task is displaying `This job was abandoned ... we lost contact with the agent` and you're using a hosted Microsoft agent, the task is hitting the built-in six-hour time-out for paid hosted agents. You might attempt to run analysis on a self-hosted agent instead. 

### Code scanning task permissions
The code scanning build task uses the pipeline identity to call the Advanced Security REST APIs. By default, pipelines in the same project have access to upload the SARIF file generated by running CodeQL analysis. If these permissions get removed from the build service account or if you have a custom setup, for example, a pipeline hosted in a different project than the repository, grant these permissions manually.

Troubleshooting steps:

* Grant `Advanced Security: View alerts` and `Advanced Security: Manage and dismiss alerts` permission to the build service account used in your pipeline, which for project-scoped pipelines is `[Project Name] Build Service ([Organization Name])`, and for collection-scoped pipelines is `Project Collection Build Service ([Organization Name])`.

### Manual installation of CodeQL bundle to self-hosted agent 
Install the CodeQL bundle to the agent tool cache by utilizing the setup script for your architecture, available on [GitHub](https://github.com/microsoft/GHAzDO-Resources/tree/main/src/agent-setup). These scripts require the
`$AGENT_TOOLSDIRECTORY` environment variable to be set to the location of the agent tools directory on the agent, for example, `C:/agent/_work/_tool`. Alternatively, you might manually implement the following steps: 
1.	Pick the latest CodeQL release bundle from [GitHub](https://github.com/github/codeql-action/releases). 
1.	Download and unzip the bundle to the following directory inside the agent tool directory, typically located under `_work/_tool`: `./CodeQL/0.0.0-[codeql-release-bundle-tag]/x64/`. Using the current release of `v2.16.0`, the folder name would be titled `./CodeQL/0.0.0-codeql-bundle-v2.16.0/x64/`. Learn more about the [agent tool directory](https://github.com/microsoft/azure-pipelines-tool-lib/blob/master/docs/overview.md#tool-cache). 
1.	Create an empty file titled `x64.complete` within the `./CodeQL/0.0.0-[codeql-release-bundle-tag]` folder. Using the previous example, the end file path to your `x64.complete` file should be `./CodeQL/0.0.0-codeql-bundle-v2.16.0/x64.complete`.

## Related articles

- [Set up code scanning](github-advanced-security-code-scanning.md)
- [Set up dependency scanning](github-advanced-security-dependency-scanning.md)
- [Set up secret scanning](github-advanced-security-secret-scanning.md)
- [Manage GitHub Advanced Security for Azure DevOps](github-advanced-security-permissions.md)
