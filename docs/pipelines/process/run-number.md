---
title: Run number
ms.custom: seodec18
description: Customize pipeline run number in Azure Pipelines, Azure DevOps Server, or Team Foundation Server.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 7C469647-117D-4867-B094-8BC811C0003E
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.date: 07/08/2019
monikerRange: '>= tfs-2015'
---

# Run number

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

You can customize how your pipeline runs are numbered.

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
### Example

At the time a run is started:

* Project name: Fabrikam

* Pipeline name: CIBuild

* Branch: master

* Run ID: 752

* Date: May 5, 2019.

* Time: 9:07:03 PM.

* One run completed earlier today.

If you specify this build number format:

```
$(TeamProject)_$(Build.DefinitionName)_$(SourceBranchName)_$(Date:yyyyMMdd)$(Rev:.r)
```

Then the second run on this day would be named: **Fabrikam\_CIBuild_master\_20190505.2**

### Tokens

The following table shows how each token is resolved based on the previous example.

| Token | Example replacement value |
| ----- | ------------------------- |
| `$(BuildDefinitionName)` | CIBuild<br /><br />Note: The pipeline name must not contain invalid or whitespace characters.|
| `$(BuildID)` | 752<br /><br />$(BuildID) is an internal immutable ID.|
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

### Variables

You can also use user-defined and predefined variables that have a scope of "All" in your number. For example, if you've defined `My.Variable`, you could specify the following number format:

```
$(Build.DefinitionName)_$(Build.DefinitionVersion)_$(Build.RequestedFor)_$(Build.BuildId)_$(My.Variable)
```

The first four variables are predefined. `My.Variable` is defined by you on the [variables tab](variables.md).

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### How big can a run number be?

Runs may be up to 255 characters.

### In what time zone are the build number time values expressed?

::: moniker range="azure-devops"

The time zone is UTC.

::: moniker-end

::: moniker range=">= tfs-2015 < azure-devops"

The time zone is the same as the time zone of the operating system of the machine where you are running your application tier server.

::: moniker-end

<!-- ENDSECTION -->
