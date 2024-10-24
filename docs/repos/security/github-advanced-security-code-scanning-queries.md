---
title: Using custom queries with GitHub Advanced Security for Azure DevOps 
titleSuffix: Azure Repos
description: Using custom queries with GitHub Advanced Security for Azure DevOps
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: how-to 
ms.custom: cross-service
ms.author: laurajiang
author: laurajjiang
monikerRange: 'azure-devops'
ms.date: 10/24/2024
---


# Using custom queries with CodeQL

By default, if you do not have a custom configuration file specified in your pipeline setup, CodeQL runs the [`security-extended`](https://docs.github.com/en/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites#security-extended-query-suite) query pack to analyze your code. You can utilize custom CodeQL queries to write your own queries to find specific vulnerabilities and errors. You also need to create a custom configuration file to modify CodeQL's default analysis.

To find existing custom queries or to contribute your own custom query, see [Contributing to CodeQL](https://github.com/github/codeql/blob/main/CONTRIBUTING.md).

### Analysis with custom queries

The quickest way to start with a custom query is to write a query and save it in your local Azure DevOps repository. You can customize the details of a custom query according to your need, but it must have at least a rule ID. For more information about how to write your own CodeQL query, see [Writing CodeQL queries](https://codeql.github.com/docs/writing-codeql-queries/). You can also bundle multiple queries together into a query suite, or utilize packs published by other people. For more information, see [Publishing and using CodeQL packs](https://docs.github.com/en/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs). 

### Using a custom configuration file

A custom configuration file is a way to manage what queries are run during CodeQL's analysis against your code. You can specify more queries or query packs to be run, and change or disable the default CodeQL queries.  

To include a specific query you want to include, specify the query with a name and path to the location of the query file (.ql) in your repository. 

To include a specific pack you want to include, specify the pack name. You can specify any number of CodeQL query packs to run in your configuration file.  

The next step is to create a `qlpack.yml` file. This file declares the CodeQL pack and information about it. Any `*.ql` files in the same directory (or sub-directory) as a `qlpack.yml` are considered part of the package. 

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

If you are using any custom query, here is an example `qlpack.yml` placed in the directory of your custom queries:
```
version: 1.0.1
dependencies:
  codeql/javascript-all: "*"
  codeql/javascript-queries: "*"
```
The `dependencies` variable contains all of the dependencies of this package and their compatible version ranges. Each dependency is referenced as the `scope/name` of a CodeQL library pack. When defining `dependencies`, your `qlpack.yml` depends on exactly one of the core language packs (for example, JavaScript, C#, Ruby, etc.), which determines the language your query can analyze.

For more specific advice and configuration options with your configuration file, see [Customizing your advanced setup for code scanning](https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#specifying-codeql-query-packs) or for `qlpack.yml` setup, see [CodeQL pack structure](https://docs.github.com/en/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs#codeql-pack-structure).


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

- task: AdvancedSecurity-Codeql-Analyze@1
  displayName: Perform CodeQL Analysis
 ```
