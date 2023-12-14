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

The Advanced Security tab under Repos in Azure DevOps is the hub to view your code scanning alerts. 
Select the **Code scanning** tab to view scanning alerts. You can filter by branch, state, pipeline, rule type, and severity. 

There's no effect to results if pipelines or branches are renamed - it may take up to 24 hours before the new name is displayed.

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



## Using custom queries with the CodeQL
You can write your own CodeQL queries to find specific vulnerabilities and errors.

This topic is specifically about writing queries to use with the [database initialize](https://learn.microsoft.com/azure/devops/pipelines/tasks/reference/advanced-security-codeql-init-v1?view=azure-pipelines) to produce codeql results.

Running custom queries without any problems, you must meet the following requirement
 
- `configfilepath` must be absolute relative to the repository root. For more information on config-file, [here](https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#working-with-custom-configuration-files).
- When providing a config file, be aware that `includepaths`, `ignorepaths`, or `querysuite` specified via input task or pipeline variable will be overwritten.
  - `includepaths` / `ignorepaths` will be overwritten with values from `paths`/`paths-ignore`. if paths/paths-ignore are not defined in config file then we are still overwriting by not considering the values defined in includepaths/ignorepaths.
   - `querysuite` will be overwritten with values from queries/packs. Be aware if you don't specify disable-default-query = true then codeql will run the queries from code-scanning query suite. 
- `queries` filter from the config file doesn't support downloading queries from external repo (repos hosted in GitHub).
- `packs` filter from the config file support downloading packs from external repo.
   - Be ware if the pack is private in GitHub then users need to provide a GitHub access token via the init task as env and labeled as `GITHUB_TOKEN` (the scope of the token should be `read:packages`)'

### Analysis with custom queries

To perform a custom analysis, you need to write a valid query and save it in your local Azure DevOps repository. Then you can use it in the query filters or create a pack. For more guidance on writing a custom query, you can refer to this link: https://github.com/github/vscode-codeql-starter.

### Create and publish packs with custom queries

After writing a valid custom query, customize the query [packs]( https://docs.github.com/en/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs) and config file. For more information on config-file, [here](https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#working-with-custom-configuration-files).



### Running the Custom queries on pipeline
 when running the [database initialize](https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/advanced-security-codeql-init-v1?view=azure-pipelines) command. you must include the following in your pipeline. For example, the language here is python. 

![image.png](/.attachments/image-4286df98-1724-4f91-8892-3f232016499c.png)

### Custom Alert Results and details

### Results

A separate filter for custom query packs is not available, but you can look up the rules for specific queries in their packs.

![Screenshot of code scanning custom codeql alerts for a repository](./media/code-scanning-custom-codeql-results.png) 



### Custom Alert details

A default query includes additional information, such as how to fix the issue. Every alert has a location, description, example, and severity. You can customize the details of a custom query according to your need, but it must have a name and a rule id.


![Screenshot of code scanning custom codeql alerts details for a repository](./media/code-scanning-custom-codeql-alert-details.png) 


### Contributing to the CodeQL repository

If you would like to share your query with other CodeQL users, you can open a pull request in the [CodeQL repository](https://github.com/github/codeql). For more information, see [Contributing to CodeQL](https://github.com/github/codeql/blob/main/CONTRIBUTING.md).


## Troubleshooting code scanning 

### Code scanning task permissions
The code scanning build task uses the pipeline identity to call the Advanced Security REST APIs. By default, pipelines in the same project have access to upload the SARIF file generated by running CodeQL analysis. If you remove those permissions from the build service account or if you have a custom setup (for example, a pipeline hosted in a different project than the repository), you must grant these permissions manually.

Grant `Advanced Security: View alerts` and `Advanced Security: Manage and dismiss alerts` permission to the build service account used in your pipeline, which for project-scoped pipelines is `[Project Name] Build Service ([Organization Name])`, and for collection-scoped pipelines is `Project Collection Build Service ([Organization Name])`.
