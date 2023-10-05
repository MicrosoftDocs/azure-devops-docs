---
title: Run (build) number
ms.custom: seodec18
description: Customize pipeline run number in Azure Pipelines or Azure DevOps Server.
ms.topic: conceptual
ms.assetid: 7C469647-117D-4867-B094-8BC811C0003E
ms.date: 03/21/2023
monikerRange: '>= tfs-2018'
---

# Configure run or build numbers

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [temp](../includes/concept-rename-note.md)]

You can customize how your pipeline runs are numbered. The default value for run number is `$(Date:yyyyMMdd).$(Rev:r)`. 

In Azure DevOps `$(Rev:r)` is a special variable format that only works in the build number field. When a build is completed, if nothing else in the build number has changed, the `Rev` integer value increases by one.

`$(Rev:r)` resets when you change part of the build number. For example, if you've configured your build number format as `$(BuildDefinitionName)_$(Date:yyyyMMdd)$(Rev:r)`, then the build number will reset when the date changes the next day. If your build number is `MyBuild_20230621.1`, the next build number that day is `MyBuild_20230621.2`. The next day, the build number is `MyBuild_20230622.1`.

If your build number format is `1.0.$(Rev:r)`, then the build number resets to `1.0.1` when you change part of the number. For example, if your last build number was `1.0.3`, and you change the build number to `1.1.$(Rev:r)` to indicate a version change, the next build number is `1.1.1`.



#### [YAML](#tab/yaml/)
::: moniker range=">=azure-devops-2020"

In YAML, this property is called `name` and must be at the root level of a pipeline. 
If not specified, your run is given a unique integer as its name.
You can give runs much more useful names that are meaningful to your team.
You can use a combination of tokens, variables, and underscore characters.
The `name` property doesn't work in template files. 

```yaml
name: $(TeamProject)_$(Build.DefinitionName)_$(SourceBranchName)_$(Date:yyyyMMdd)$(Rev:r)

steps:
  - script: echo '$(Build.BuildNumber)' # outputs customized build number like project_def_master_20200828.1
```

::: moniker-end

::: moniker range="< azure-devops"
YAML builds aren't yet available on TFS.
::: moniker-end

#### [Classic](#tab/classic/)
If you leave this field blank, your completed build is given a unique integer as its name. But you can give completed builds much more useful names that are meaningful to your team. You can use a combination of tokens, variables, and underscore characters.

* * *

## Example

At the time, a run is started:

* Project name: Fabrikam

* Pipeline name: CIBuild

* Branch: main

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

The following table shows how each token is resolved based on the previous example. You can use these tokens only to define a run number; they don't work anywhere else in your pipeline.

| Token | Example replacement value |
| ----- | ------------------------- |
| `$(Build.DefinitionName)` | CIBuild<br /><br />Note: The pipeline name must not contain invalid or whitespace characters.|
| `$(Build.BuildId)` | 752<br /><br />$(Build.BuildId) is an internal immutable ID that is also referred to as the Run ID. It's unique across the organization.|
| `$(DayOfMonth)` | 5 |
| `$(DayOfYear)` | 217 |
| `$(Hours)` | 21 |
| `$(Minutes)` | 7 |
| `$(Month)` | 8 |
| `$(Rev:r)` | 2 (The third run is 3, and so on.)<br /><br />Use **$(Rev:r)** to ensure that every completed build has a unique name. When a build starts, if nothing else in the build number has changed, the Rev integer value is incremented by one.<br /><br />If you want to show prefix zeros in the number, you can add more **'r'** characters. For example, specify **$(Rev:rr)** if you want the Rev number to begin with 01, 02, and so on. If you use a zero-padded Rev as part of a version numbering scheme, note that some pipeline tasks or popular tools, like NuGet packages, remove the leading zeros, which cause a version number mismatch in the artifacts that are produced. |
| `$(Date:yyyyMMdd)` | 20090824<br /><br />You can specify other date formats such as **$(Date:MMddyy)** |
| `$(Seconds)` | 3 |
| `$(SourceBranchName)` | main |
| `$(TeamProject)` | Fabrikam |
| `$(Year:yy)` | 09 |
| `$(Year:yyyy)` | 2009 |



## Variables

You can also use user-defined and predefined variables that have a scope of "All" in your number. For example, if you've defined `My.Variable`, you could specify the following number format:

```
$(Build.DefinitionName)_$(Build.DefinitionVersion)_$(Build.RequestedFor)_$(Build.BuildId)_$(My.Variable)
```

The first four variables are predefined. `My.Variable` is defined by you on the [variables tab](variables.md).

## Expressions

If you use an expression to set the build number, you can't use some tokens because their values aren't set at the time expressions are evaluated. These tokens include `$(Build.BuildId)`, `$(Build.BuildURL)`, and `$(Build.BuildNumber)`.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### How large can a run number be and what characters can I use?

Runs may be up to 255 characters. Characters that aren't allowed include `"`, `/`, `:`, `<`, `>`, `'`, `|`, `?`, `@`, and `*`. You can't end with a `.`.

### In what time zone are the build number time values expressed?

::: moniker range="azure-devops"

The time zone is UTC.

::: moniker-end

::: moniker range=">= tfs-2018 < azure-devops"

The time zone is the same as the time zone of the operating system of the machine where you're running your application tier server.

::: moniker-end

::: moniker range=">=azure-devops-2020"

### How can you reference the run number variable within a script?

The run number variable can be called with `$(Build.BuildNumber)`. You can define a new variable that includes the run number or call the run number directly. In this example, `$(MyRunNumber)` is a new variable that includes the run number.

```yaml
# Set MyRunNumber
variables: 
  MyRunNumber: '1.0.0-CI+$(Build.BuildNumber)'


steps:
- script: echo $(MyRunNumber) # display MyRunNumber
- script: echo $(Build.BuildNumber) #display Run Number
```

### How can I set the build number dynamically with conditions?

You can use variables as part of your run number. In this example, the variable `why` changes depending on the `Build.Reason` and is used as part of the run number. 

```yaml
variables:
  - name: why
    ${{ if eq(variables['Build.Reason'], 'PullRequest') }}:
      value: pr
    ${{ elseif eq(variables['Build.Reason'], 'Manual' ) }}:
      value: manual
    ${{ elseif eq(variables['Build.Reason'], 'IndividualCI' ) }}:
      value: indivci
    ${{ else }}:
      value: other

name: $(TeamProject)_$(SourceBranchName)_$(why)_$(Date:yyyyMMdd)$(Rev:.r)

pool:
  vmImage: 'ubuntu-latest'

steps:
- script: echo '$(Build.BuildNumber)' ## output run number
```

::: moniker-end

<!-- ENDSECTION -->


