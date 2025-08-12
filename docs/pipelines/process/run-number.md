---
title: Run and build numbers
description: Learn about Azure Pipelines run numbers and build numbers and how you can configure them in your pipelines.
ms.topic: conceptual
ms.assetid: 7C469647-117D-4867-B094-8BC811C0003E
ms.date: 08/11/2025
monikerRange: "<=azure-devops"
#customer intent: As an Azure Pipelines customer, I want to understand the composition of run numbers so I can customize them to be more meaningful and useful for my team.
---

# Run and build numbers

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

A unique run number or build number identifies each execution of an Azure Pipelines pipeline or build. This article explains the structure of this number and how you can customize it to be more useful or meaningful for your team.

If you don't specify a build name in YAML pipelines, or you leave the **Name** or **Build number format** field blank in Classic pipelines, each run gets a unique integer as its name. Build names can also use a combination of tokens, variables, and other characters. You can customize run and build numbers by using naming patterns, tokens, and variables.

## Build number configuration

In Classic pipelines, you can customize the **Build number format** under **Options** in the pipeline definition. In YAML pipelines, you can customize the run number by using the `name` property at the [pipeline](/azure/devops/pipelines/yaml-schema/pipeline) level of the YAML pipeline definition. The `name` property isn't supported in templates or stages.

The following YAML pipeline example sets a custom run number format that produces a name like **MyProject_MyBuild_main_20240828.1**:

```yaml
name: $(TeamProject)_$(Build.DefinitionName)_$(SourceBranchName)_$(Date:yyyyMMdd).$(Rev:r)

steps:
  - script: echo '$(Build.BuildNumber)'
```

## Run number

The default value for an Azure Pipelines run number is `$(Date:yyyyMMdd).$(Rev:r)`. The `$(Rev:r)` is a special variable that works only in the build number field. When a build completes, if nothing else in the build number changed, the `Rev` integer value increases by one.

`$(Rev:r)` resets to `1` when any other part of the build number changes. For example, if you configure your build number format as `$(Build.DefinitionName)_$(Date:yyyyMMdd).$(Rev:r)`, the build number resets when the date changes.

If the previous build number was **MyBuild_20230621.1**, the next build number that day is **MyBuild_20230621.2**. The first build number the next day is **MyBuild_20230622.1**.

`$(Rev:r)` also resets to `1` if you change the version. If your build format is `1.0.$(Rev:r)` and your last build number was **1.0.3**, if you change the version to `1.1.$(Rev:r)`, the next build number is **1.1.1**.

In the following example, the second run on May 6, 2024 is named **Fabrikam_CIBuild_main_20240506.2**.

```yaml
name: $(TeamProject)_$(Build.DefinitionName)_$(SourceBranchName)_$(Date:yyyyMMdd).$(Rev:r)
```

The build number tokens resolve as follows:

- Project name: **Fabrikam**
- Build definition name: **CIBuild**
- Branch: **main**
- Date: **May 6, 2024**
- Run number for that day: **2**

### Run number tokens

The following table shows how run number tokens resolve. You can use these tokens only to define run numbers. They don't work anywhere else in a pipeline.

| Token | Example value | Notes |
| ----- | -------------- | ----------- |
| `$(Build.DefinitionName)` | CIBuild | A build name, which can't contain invalid or whitespace characters.|
| `$(Build.BuildId)` | 752 | An internal, immutable ID, also called the `Run ID`, that's unique in the Azure DevOps organization.|
| `$(Date:yyyyMMdd)` | 20240506 | A date format. You can also specify other date formats, such as `$(Date:MMddyy)`. |
| `$(DayOfMonth)` | 6 ||
| `$(DayOfYear)` | 126 ||
| `$(Hours)` | 21 ||
| `$(Minutes)` | 7 ||
| `$(Month)` | 5 ||
| `$(Rev:r)` | 2 | Number of runs that day. Use `$(Rev:r)` to ensure that every completed build has a unique name. |
| `$(Seconds)` | 3 ||
| `$(SourceBranchName)` | main ||
| `$(TeamProject)` | Fabrikam ||
| `$(Year:yy)` | 24 ||
| `$(Year:yyyy)` | 2024 ||

>[!IMPORTANT]
>If you want to show prefix zeros in the run number, you can add more `r` characters to the `Rev` token. For example, specify `$(Rev:rr)` if you want the `Rev` number to begin with `01`, `02`, and so on.
>
>However, if you use a zero-padded `Rev` as part of a version numbering scheme, some pipeline tasks or popular tools like NuGet packages remove the leading zeros. This behavior causes a version number mismatch in the artifacts that the build produces.

### Expressions in run numbers

If you use an expression to set the run number, you can't use the `$(Build.BuildId)`, `$(Build.BuildUri)`, or `$(Build.BuildNumber)` tokens, because their values aren't set at the time pipeline expressions are evaluated.

### Variables in run numbers

You can use both predefined and user-defined variables in your run number. For example, if you define `My.Variable`, you can specify the following number format. The first four variables are predefined.

```yaml
$(Build.DefinitionName)_$(Build.DefinitionVersion)_$(Build.RequestedFor)_$(Build.BuildId)_$(My.Variable)
```

For more information about predefined variables, see [Use predefined variables](../build/variables.md). For information on how to define user variables, see [Define variables](variables.md).

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### How large can a run number be, and what characters can I use?

Run numbers can be up to 255 characters. You can't use the characters `"`, `/`, `\`, `:`, `<`, `>`, `'`, `|`, `?`, `@`, or `*`, and you can't end the number with `.`.

### What time zone are the build number time values expressed in?

::: moniker range="azure-devops"

The time zone is UTC.

::: moniker-end

::: moniker range="<azure-devops"

The time zone is the same as the operating system of the machine that runs your application tier server.

::: moniker-end

::: moniker range=">=azure-devops-2020"

### How can I set the build number dynamically with conditions?

You can use variables as part of your run number. In the following example, the variable `why` is set as part of the run number, and its value changes depending on the `Build.Reason`.

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

name: $(TeamProject)_$(SourceBranchName)_$(why)_$(Date:yyyyMMdd).$(Rev:r)

pool:
  vmImage: 'ubuntu-latest'

steps:
- script: echo '$(Build.BuildNumber)'
```

### How can I reference the run number variable within a script?

You can reference the run number directly as `$(Build.BuildNumber)` in your scripts, or create a custom variable that includes the number. For example:

```yaml
# Set MyRunNumber
variables: 
  MyRunNumber: '1.0.0-CI+$(Build.BuildNumber)'

steps:
- script: echo $(MyRunNumber)
- script: echo $(Build.BuildNumber)
```

::: moniker-end

<!-- ENDSECTION -->
## Related content

- [Define variables](variables.md)
- [Use predefined variables](../build/variables.md)