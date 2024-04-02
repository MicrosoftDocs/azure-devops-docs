---
title: Code scanning alerts for GitHub Advanced Security for Azure DevOps 
titleSuffix: Azure Repos
description: Set up code scanning with GitHub Advanced Security for Azure DevOps
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: how-to 
ms.custom: cross-service
ms.author: laurajiang
author: laurajjiang
monikerRange: 'azure-devops'
ms.date: 10/20/2023
---


# Code scanning 

Code scanning in [GitHub Advanced Security for Azure DevOps](configure-github-advanced-security-features.md) lets you analyze the code in an Azure DevOps repository to find security vulnerabilities and coding errors. Any problems identified by the analysis are raised as an alert. Code scanning uses CodeQL to identify vulnerabilities.  

CodeQL is the code analysis engine developed by GitHub to automate security checks. You can analyze your code using CodeQL and display the results as code scanning alerts.  

[!INCLUDE [GitHub Advanced Security for Azure DevOps is different from GitHub Advanced Security.](includes/github-advanced-security.md)]


## CodeQL alerts

GitHub experts, security researchers, and community contributors write and maintain the default CodeQL queries used for code scanning. The queries are regularly updated to improve analysis and reduce any false positive results. The queries are open source, so you can view and contribute to the queries in the [github/codeql](https://github.com/github/codeql) repository. 

For more specific documentation about CodeQL, visit the [CodeQL documentation on GitHub](https://codeql.github.com/docs/).

CodeQL supports both compiled and interpreted languages and can find vulnerabilities and errors in code that's written in the supported languages. 

* C/C++ 
* C# 
* Go 
* Java 
* JavaScript/TypeScript 
* Kotlin (beta)
* Python 
* Ruby 
* Swift

For more information, see the documentation on the CodeQL website on [Supported languages and frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/).

You can view the specific queries and task details used by CodeQL by looking through the build log, similar to dependency scanning. 

![Screenshot of code scanning publish results task](./media/code-scanning-build-log.png)


## Code scanning alerts

[GitHub Advanced Security for Azure DevOps](configure-github-advanced-security-features.md) code scanning alerts include code scanning flags by repository that alert of code-level application vulnerabilities. 

To use code scanning, you need to first configure [GitHub Advanced Security for Azure DevOps](configure-github-advanced-security-features.md). 

The Advanced Security tab under Repos in Azure DevOps is the hub to view your code scanning alerts. Select the **Code scanning** tab to view scanning alerts. You can filter by branch, state, pipeline, rule type, and severity. At this time, the alerts hub does not display alerts for scanning completed on PR branches.

There's no effect to results if pipelines or branches are renamed - it may take up to 24 hours before the new name is displayed. 

If you choose to run custom CodeQL queries, there is not by default a separate filter for alerts generated from different query packs. You can filter by rule, which is distinct for each query. 

![Screenshot of code scanning alerts for a repository](./media/code-scanning-alerts.png) 

If you turn off Advanced Security for your repository, you'll lose access to the results in the Advanced Security tab and build task. The build task won't fail, but any results from builds run with the task while Advanced Security is disabled are hidden and not retained. 

### Alert details 

Select an alert for more details, including remediation guidance. Each alert includes  a location, description, example, and severity. 


![Screenshot of code scanning alert detail](./media/code-scanning-detail.png)

| Section  | Explanation  |
|---|---|
|  Location | The **Locations** section details a specific instance where CodeQL has detected a vulnerability. If there are multiple instances of your code violating the same rule, a new alert is generated for each distinct location. The Locations card contains a direct link to the affected code snippet so you can select the snippet to be directed to the Azure DevOps web UI for editing.  |
| Description | The description is provided by the CodeQL tool based off of the problem. |
| Recommendation | The recommendation is the suggested fix for a given code scanning alert. |
| Example | The example section shows a simplified example of the identified weakness in your code. |
| Severity | Severity levels can be low, medium, high, or critical. The severity score is based off of the given Common Vulnerability Scoring System (CVSS) score for the identified Common Weakness Enumeration (CWE). Learn more about how severity is scored at this [GitHub blog post](https://github.blog/changelog/2021-07-19-codeql-code-scanning-new-severity-levels-for-security-alerts/). |


## Manage code scanning alerts 

### Viewing alerts for a repository 

Anyone with contributor permissions for a repository can view a summary of all alerts for a repository in the Advanced Security tab under Repos. Select the **Code scanning** tab to view all secret scanning alerts.

To display results, code scanning tasks need to run first. Once the first scan finishes, any detected vulnerabilities are displayed in the Advanced Security tab. 

By default, the alerts page shows dependency scanning results for the default branch of the repository. 

The status of a given alert reflects the state for the default branch and latest run pipeline, even if the alert exists on other branches and pipelines. 

### Dismissing code scanning alerts

To dismiss alerts, you need appropriate permissions. By default, only project administrators can dismiss Advanced Security alerts. 

To dismiss an alert: 

1. Navigate to the alert you wish to close and select on the alert.
1. Select the **Close alert** drop-down.
1. If not already selected, select either **Risk accepted** or **False positive** as the closure reason.
1. Add an optional comment into the **Comment** text box.
1. Select **Close** to submit and close the alert.
1. The alert state changes from **Open** to **Closed** and your dismissal reason displays.

![Screenshot of how to dismiss a code scanning alert](./media/code-scanning-dismiss-alert.png)

This only dismisses the alert for your selected branch. Other branches that contain the same vulnerability stay active until dismissed. Any alert that has been previously dismissed can be manually reopened. 

## Using custom queries with CodeQL
By default, if you do not have a custom configuration file specified in your pipeline setup, CodeQL will run the [`security-extended`](https://docs.github.com/en/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites#security-extended-query-suite) query pack to analyze your code. You can utilize custom CodeQL queries to write your own queries to find specific vulnerabilities and errors. You will also need to create a custom configuration file to modify CodeQL's default analysis.

To find existing custom queries or to contribute your own custom query, see [Contributing to CodeQL](https://github.com/github/codeql/blob/main/CONTRIBUTING.md).

### Analysis with custom queries

The quickest way to start with a custom query is to write a query and save it in your local Azure DevOps repository. You can customize the details of a custom query according to your need, but it must have at least a rule ID. To learn more about how to write your own CodeQL query, see [Writing CodeQL queries](https://codeql.github.com/docs/writing-codeql-queries/). You can also bundle multiple queries together into a query suite, or utilize packs published by other people. To learn more, see [Publishing and using CodeQL packs](https://docs.github.com/en/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs). 

### Using a custom configuration file

A custom configuration file is a way to manage what queries are run during CodeQL's analysis against your code. You can specify additional queries or query packs to be run, and change or disable the default CodeQL queries.  

To include a specific query you want to include, specify the query with a name and path to the location of the query file (.ql) in your repository. 

To include a specific pack you want to include, specify the pack name. You can specify any number of CodeQL query packs to run in your configuration file.  

> [!TIP]
> The `packs` filter from the configuration file support downloading packs from repositories hosted in GitHub, although the `queries` filter does not.
> If the pack is private in GitHub, then you need to provide a GitHub access token via the `AdvancedSecurity-Codeql-Init@1` task as an environment variable and variable name as `GITHUB_TOKEN`, with the scope of the token being `read:packages`.

Here is an example configuration file: 

>[!div class="tabbedCodeSnippets"]
```yaml
name: "Run custom queries"

# When using a configuration file, if you do not disable default queries,
# then the default CodeQL queries in the `code-scanning` query suite will also execute upon analysis.
disable-default-queries: true
 
# To reference local queries saved to your repository,
# the path must start with `./` followed by the path to the custom query or queries.
# Names for each query referenced is optional.
queries:
  - name: Use security-extended query suite
    uses: security-extended
  - name: Use local custom query (single query)
    uses: ./customQueries/javascript/FindTestFunctions.ql
  - name: Use local custom query (directory of queries)
    uses: ./customQueries/javascript/MemoryLeakQueries  
 
packs:
 - mygithuborg/mypackname
 
paths:
 - src
 
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
 
query-filters:
 - include:
    kind: problem
 - include:
     precision: medium
 - exclude:
    id:
      - js/angular/disabling-sce
      - js/angular/insecure-url-allowlist

```

> [!TIP]
> Configuration file specifications ignore and take precedence over pipeline-level configurations for the `AdvancedSecurity-Codeql-Init@1` task.
> `includepaths` / `ignorepaths` will be ignored or, if `paths`/`paths-ignore` are present, overwritten with values from `paths`/`paths-ignore`.
> `querysuite` will be overwritten with values specified in `queries` or `packs` in the configuration file.

For more specific advice and configuration options with your configuration file, see [Customizing your advanced setup for code scanning](https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#specifying-codeql-query-packs).


Once you have your configuration file, you then need to customize your pipeline running CodeQL analysis to utilize your new file. Here is a sample pipeline pointing to a configuration file:

>[!div class="tabbedCodeSnippets"]
```yaml
trigger: none
 
pool:
  vmImage: windows-latest

# You can either specify your CodeQL variables in a variable block... 
variables:
# `configfilepath` must be an absolute file path relative to the repository root
  advancedsecurity.codeql.configfilepath: '$(build.sourcesDirectory)/.pipelines/steps/configfile.yml' 

# Or you can specify variables as variables for the task. You do not need both definitions. 
steps:
- task: AdvancedSecurity-Codeql-Init@1
  displayName: Initialize CodeQL
  inputs:
    languages: 'javascript'
    loglevel: '2'
    configfilepath: '$(build.sourcesDirectory)/.pipelines/steps/configfile.yml'
# If downloading a pack from GitHub,
# you must include a GitHub access token with the scope of `read:packages`.
  env:
    GITHUB_TOKEN: $(githubtoken)
 
- task: AdvancedSecurity-Codeql-Autobuild@1
  displayName: AutoBuild
 
- task: AdvancedSecurity-Codeql-Analyze@1
  displayName: Perform CodeQL Analysis
 ```

## Troubleshooting code scanning 

Generally, if you are encountering errors with CodeQL execution, the CodeQL CLI reports the status of each command it runs as an exit code. The exit code provides information for subsequent commands or for other tools that rely on the CodeQL CLI. For more details on exit code details, see [Exit codes](https://docs.github.com/en/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/exit-codes). 

### Error: 'database finalize' CodeQL command (32) 
This error indicates a problem with finalizing the CodeQL database creation, potentially due to extraction errors or missing build steps.

Troubleshooting steps:
1. Verify code exists and is compiled
   * For compiled languages, verify that the build process is compiling code and is happening between the `AdvancedSecurity-Codeql-Init` and the `AdvancedSecurity-Codeql-Analyze` tasks. Common build commands and required flags (such as clean no-cache/no-daemon) can be found here at [Specifying build commands](https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli/preparing-your-code-for-codeql-analysis#specifying-build-commands).
   * For interpreted languages, confirm that there is some source code for the specified language in the project.
1. Check extraction errors
   * Verify if extraction errors affect the CodeQL database's health.
   * Review the log file for extraction errors and warnings to assess overall database health.
1. Investigate overwhelming errors
   * If most files encounter extractor errors, investigate further to understand the root cause of improper extraction.
  
### Error: autobuild script (1) 
This error describes an automatic build failure, suggesting an issue with code scanning setup or configuration. 

Troubleshooting steps:
1. Configure build steps
   * Remove the AutoBuild step and instead configure specific build steps for compiled languages in your pipelines.
   * Refer to setup guidelines provided in [Configure GitHub Advanced Security for Azure DevOps](./configure-github-advanced-security-features.md/#set-up-code-scanning)

### Error: CodeQL directories not found in agent tool cache 
This error indicates an issue with installing CodeQL for self-hosted agents. 

Troubleshooting steps: 
1. Refer to setup guidelines or configuration scripts provided in [Configure GitHub Advanced Security for Azure DevOps](./configure-github-advanced-security-features.md/#extra-prerequisites-for-self-hosted-agents).

### Error: language pipeline variable not set
This error occurs when attempting to run CodeQL without setting the pipeline variable specifying which language(s) will be scanned.

Troubleshooting steps:
1. Set language pipeline variable
   * Ensure the language pipeline variable is correctly configured. Refer to [Configure GitHub Advanced Security for Azure DevOps](./configure-github-advanced-security-features.md/#set-up-code-scanning).
   * Supported languages include `csharp`, `cpp`, `go`, `java`, `javascript`, `python`, `ruby`, and `swift`.
  
### CodeQL returning no results
This section provides guidance for situations where CodeQL analysis yields no results.

Troubleshooting steps:
1. Check for detected vulnerabilities
   * Consider the possibility that your code may genuinely have no vulnerabilities. If vulnerabilities are expected but not detected, proceed to verify further.
1. Review query suite configuration
   * Confirm the query suite being used and consider switching to a more comprehensive suite if necessary.
   * Alternatively, [custom query suites](#using-custom-queries-with-codeql) can be created for tailored analysis. 
1. Adjust permissions for viewing results
   * Ensure proper permissions, at least at the contributor level, are granted to access analysis results. For more information, refer to [Advanced Security permissions](./github-advanced-security-permissions.md).

### Code scanning task permissions
The code scanning build task uses the pipeline identity to call the Advanced Security REST APIs. By default, pipelines in the same project have access to upload the SARIF file generated by running CodeQL analysis. If you remove those permissions from the build service account or if you have a custom setup (for example, a pipeline hosted in a different project than the repository), you must grant these permissions manually.

Troubleshooting steps:
* Grant `Advanced Security: View alerts` and `Advanced Security: Manage and dismiss alerts` permission to the build service account used in your pipeline, which for project-scoped pipelines is `[Project Name] Build Service ([Organization Name])`, and for collection-scoped pipelines is `Project Collection Build Service ([Organization Name])`.
