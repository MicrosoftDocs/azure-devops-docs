---
title: Run (build) number
ms.custom: seodec18
description: Customize pipeline run number in Azure Pipelines, Azure DevOps Server, or Team Foundation Server.
ms.topic: conceptual
ms.assetid: 7C469647-117D-4867-B094-8BC811C0003E
ms.date: 12/04/2019
monikerRange: '>= tfs-2015'
---

# Configure run or build numbers

[!INCLUDE [temp](../includes/concept-rename-note.md)]

You can customize how your pipeline runs are numbered. The default value for run number is `$(Date:yyyyMMdd).$(Rev:r)`.

#### [YAML](#tab/yaml/)
::: moniker range="azure-devops"

In YAML, this property is called `name`.
If not specified, your run is given a unique integer as its name.
You can give runs much more useful names that are meaningful to your team.
You can use a combination of tokens, variables, and underscore characters.

```yaml
name: $(TeamProject)_$(BuildDefinitionName)_$(SourceBranchName)_$(Date:yyyyMMdd)$(Rev:.r)
steps:
- script: echo hello world
```

::: moniker-end

::: moniker range="< azure-devops"
YAML builds are not yet available on TFS.
::: moniker-end

#### [Classic](#tab/classic/)
If you leave this field blank, your completed build is given a unique integer as its name. But you can give completed builds much more useful names that are meaningful to your team. You can use a combination of tokens, variables, and underscore characters.

* * *

## Example

At the time a run is started:

* Project name: Fabrikam

* Pipeline name: CIBuild

* Branch: master

* Build ID/Run ID: 752

* Date: May 5, 2019.

* Time: 9:07:03 PM.

* One run completed earlier today.

If you specify this build number format:

```
$(TeamProject)_$(Build.DefinitionName)_$(SourceBranchName)_$(Date:yyyyMMdd)$(Rev:.r)
```

Then the second run on this day would be named: **Fabrikam\_CIBuild_master\_20190505.2**


## Tokens

The following table shows how each token is resolved based on the previous example.

| Token | Example replacement value |
| ----- | ------------------------- |
| `$(BuildDefinitionName)` | CIBuild<br /><br />Note: The pipeline name must not contain invalid or whitespace characters.|
| `$(BuildID)` | 752<br /><br />$(BuildID) is an internal immutable ID that is also referred to as the Run ID. It is unique across the organization.|
| `$(DayOfMonth)` | 5 |
| `$(DayOfYear)` | 217 |
| `$(Hours)` | 21 |
| `$(Minutes)` | 7 |
| `$(Month)` | 8 |
| `$(Rev:r)` | 2 (The third run on this day will be 3, and so on.)<br /><br />Use **$(Rev:r)** to ensure that every completed build has a unique name. When a build is completed, if nothing else in the build number has changed, the Rev integer value is incremented by one.<br /><br />If you want to show prefix zeros in the number, you can add additional **'r'** characters. For example, specify **$(Rev:rr)** if you want the Rev number to begin with 01, 02, and so on. |
| `$(Date:yyyyMMdd)` | 20090824<br /><br />You can specify other date formats such as **$(Date:MMddyy)** |
| `$(Seconds)` | 3 |
| `$(SourceBranchName)` | master |
| `$(TeamProject)` | Fabrikam |
| `$(Year:yy)` | 09 |
| `$(Year:yyyy)` | 2009 |



## Variables

You can also use user-defined and predefined variables that have a scope of "All" in your number. For example, if you've defined `My.Variable`, you could specify the following number format:

```
$(Build.DefinitionName)_$(Build.DefinitionVersion)_$(Build.RequestedFor)_$(Build.BuildId)_$(My.Variable)
```

### Expressions

You can also use [Expressions](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/expressions?view=azure-devops) to dynamically change the build version number depending on certain conditions. For example, if the build is triggered from a pull request, then we can use that in the number format, otherwise fall back to the builds source branch name, or even date format if this variable is also not available:

```yaml
name: ${{ coalesce( variables['System.PullRequest.PullRequestNumber'], '$(Build.SourceBranchName)', '$(Date:yyyyMMdd)') }}$(Rev:.r)
```

The first four variables are predefined. `My.Variable` is defined by you on the [variables tab](variables.md).

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### How large can a run number be?

Runs may be up to 255 characters.

### In what time zone are the build number time values expressed?

::: moniker range="azure-devops"

The time zone is UTC.

::: moniker-end

::: moniker range=">= tfs-2015 < azure-devops"

The time zone is the same as the time zone of the operating system of the machine where you are running your application tier server.

::: moniker-end

::: moniker range="azure-devops"

### How can you reference the run number variable within a script?

The run number variable can be called with `$(Build.BuildNumber)`. You can define a new variable that includes the run number or call the run number directly. In this example, `$(MyRunNumber)` is a new variable that includes the run number.

```yaml
# Set MyRunNumber
variables: 
  MyRunNumber: '1.0.0-CI-$(Build.BuildNumber)'


steps:
- script: echo $(MyRunNumber) # display MyRunNumber
- script: echo $(Build.BuildNumber) #display Run Number
```

::: moniker-end

<!-- ENDSECTION -->
